package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go/utility/struct"
)

type CloudflareZeroTrustSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCloudflareZeroTrustSDK(options map[string]any) *CloudflareZeroTrustSDK {
	sdk := &CloudflareZeroTrustSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CloudflareZeroTrustSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CloudflareZeroTrustSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CloudflareZeroTrustSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CloudflareZeroTrustSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CloudflareZeroTrustSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CloudflareZeroTrustSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *CloudflareZeroTrustSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CloudflareZeroTrustSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CloudflareZeroTrustSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *CloudflareZeroTrustSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CloudflareZeroTrustSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// ClientVersion returns a ClientVersion entity bound to this client.
// Idiomatic usage: client.ClientVersion(nil).List(nil, nil) or
// client.ClientVersion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ClientVersion(data map[string]any) CloudflareZeroTrustEntity {
	return NewClientVersionEntityFunc(sdk, data)
}


// Cni returns a Cni entity bound to this client.
// Idiomatic usage: client.Cni(nil).List(nil, nil) or
// client.Cni(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) Cni(data map[string]any) CloudflareZeroTrustEntity {
	return NewCniEntityFunc(sdk, data)
}


// DeploymentGroup returns a DeploymentGroup entity bound to this client.
// Idiomatic usage: client.DeploymentGroup(nil).List(nil, nil) or
// client.DeploymentGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) DeploymentGroup(data map[string]any) CloudflareZeroTrustEntity {
	return NewDeploymentGroupEntityFunc(sdk, data)
}


// DexRemoteCommand returns a DexRemoteCommand entity bound to this client.
// Idiomatic usage: client.DexRemoteCommand(nil).List(nil, nil) or
// client.DexRemoteCommand(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) DexRemoteCommand(data map[string]any) CloudflareZeroTrustEntity {
	return NewDexRemoteCommandEntityFunc(sdk, data)
}


// DexRule returns a DexRule entity bound to this client.
// Idiomatic usage: client.DexRule(nil).List(nil, nil) or
// client.DexRule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) DexRule(data map[string]any) CloudflareZeroTrustEntity {
	return NewDexRuleEntityFunc(sdk, data)
}


// DexSyntheticApplicationMonitoring returns a DexSyntheticApplicationMonitoring entity bound to this client.
// Idiomatic usage: client.DexSyntheticApplicationMonitoring(nil).List(nil, nil) or
// client.DexSyntheticApplicationMonitoring(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) DexSyntheticApplicationMonitoring(data map[string]any) CloudflareZeroTrustEntity {
	return NewDexSyntheticApplicationMonitoringEntityFunc(sdk, data)
}


// DigitalExperienceMonitoringDevice returns a DigitalExperienceMonitoringDevice entity bound to this client.
// Idiomatic usage: client.DigitalExperienceMonitoringDevice(nil).List(nil, nil) or
// client.DigitalExperienceMonitoringDevice(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) DigitalExperienceMonitoringDevice(data map[string]any) CloudflareZeroTrustEntity {
	return NewDigitalExperienceMonitoringDeviceEntityFunc(sdk, data)
}


// DigitalExperienceMonitoringDexDeleteResponseCollection returns a DigitalExperienceMonitoringDexDeleteResponseCollection entity bound to this client.
// Idiomatic usage: client.DigitalExperienceMonitoringDexDeleteResponseCollection(nil).List(nil, nil) or
// client.DigitalExperienceMonitoringDexDeleteResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) DigitalExperienceMonitoringDexDeleteResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewDigitalExperienceMonitoringDexDeleteResponseCollectionEntityFunc(sdk, data)
}


// DigitalExperienceMonitoringDexResponseCollection returns a DigitalExperienceMonitoringDexResponseCollection entity bound to this client.
// Idiomatic usage: client.DigitalExperienceMonitoringDexResponseCollection(nil).List(nil, nil) or
// client.DigitalExperienceMonitoringDexResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) DigitalExperienceMonitoringDexResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewDigitalExperienceMonitoringDexResponseCollectionEntityFunc(sdk, data)
}


// DigitalExperienceMonitoringDexSingle returns a DigitalExperienceMonitoringDexSingle entity bound to this client.
// Idiomatic usage: client.DigitalExperienceMonitoringDexSingle(nil).List(nil, nil) or
// client.DigitalExperienceMonitoringDexSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) DigitalExperienceMonitoringDexSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewDigitalExperienceMonitoringDexSingleEntityFunc(sdk, data)
}


// DigitalExperienceMonitoringFleetStatusDevice returns a DigitalExperienceMonitoringFleetStatusDevice entity bound to this client.
// Idiomatic usage: client.DigitalExperienceMonitoringFleetStatusDevice(nil).List(nil, nil) or
// client.DigitalExperienceMonitoringFleetStatusDevice(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) DigitalExperienceMonitoringFleetStatusDevice(data map[string]any) CloudflareZeroTrustEntity {
	return NewDigitalExperienceMonitoringFleetStatusDeviceEntityFunc(sdk, data)
}


// DigitalExperienceMonitoringFleetStatusLive returns a DigitalExperienceMonitoringFleetStatusLive entity bound to this client.
// Idiomatic usage: client.DigitalExperienceMonitoringFleetStatusLive(nil).List(nil, nil) or
// client.DigitalExperienceMonitoringFleetStatusLive(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) DigitalExperienceMonitoringFleetStatusLive(data map[string]any) CloudflareZeroTrustEntity {
	return NewDigitalExperienceMonitoringFleetStatusLiveEntityFunc(sdk, data)
}


// DigitalExperienceMonitoringFleetStatusOverTime returns a DigitalExperienceMonitoringFleetStatusOverTime entity bound to this client.
// Idiomatic usage: client.DigitalExperienceMonitoringFleetStatusOverTime(nil).List(nil, nil) or
// client.DigitalExperienceMonitoringFleetStatusOverTime(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) DigitalExperienceMonitoringFleetStatusOverTime(data map[string]any) CloudflareZeroTrustEntity {
	return NewDigitalExperienceMonitoringFleetStatusOverTimeEntityFunc(sdk, data)
}


// Interconnect returns a Interconnect entity bound to this client.
// Idiomatic usage: client.Interconnect(nil).List(nil, nil) or
// client.Interconnect(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) Interconnect(data map[string]any) CloudflareZeroTrustEntity {
	return NewInterconnectEntityFunc(sdk, data)
}


// IpProfile returns a IpProfile entity bound to this client.
// Idiomatic usage: client.IpProfile(nil).List(nil, nil) or
// client.IpProfile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) IpProfile(data map[string]any) CloudflareZeroTrustEntity {
	return NewIpProfileEntityFunc(sdk, data)
}


// List returns a List entity bound to this client.
// Idiomatic usage: client.List(nil).List(nil, nil) or
// client.List(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) List(data map[string]any) CloudflareZeroTrustEntity {
	return NewListEntityFunc(sdk, data)
}


// Location returns a Location entity bound to this client.
// Idiomatic usage: client.Location(nil).List(nil, nil) or
// client.Location(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) Location(data map[string]any) CloudflareZeroTrustEntity {
	return NewLocationEntityFunc(sdk, data)
}


// NscCni returns a NscCni entity bound to this client.
// Idiomatic usage: client.NscCni(nil).List(nil, nil) or
// client.NscCni(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) NscCni(data map[string]any) CloudflareZeroTrustEntity {
	return NewNscCniEntityFunc(sdk, data)
}


// NscDefaultName returns a NscDefaultName entity bound to this client.
// Idiomatic usage: client.NscDefaultName(nil).List(nil, nil) or
// client.NscDefaultName(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) NscDefaultName(data map[string]any) CloudflareZeroTrustEntity {
	return NewNscDefaultNameEntityFunc(sdk, data)
}


// NscInterconnect returns a NscInterconnect entity bound to this client.
// Idiomatic usage: client.NscInterconnect(nil).List(nil, nil) or
// client.NscInterconnect(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) NscInterconnect(data map[string]any) CloudflareZeroTrustEntity {
	return NewNscInterconnectEntityFunc(sdk, data)
}


// NscSetting returns a NscSetting entity bound to this client.
// Idiomatic usage: client.NscSetting(nil).List(nil, nil) or
// client.NscSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) NscSetting(data map[string]any) CloudflareZeroTrustEntity {
	return NewNscSettingEntityFunc(sdk, data)
}


// NscSlotInfo returns a NscSlotInfo entity bound to this client.
// Idiomatic usage: client.NscSlotInfo(nil).List(nil, nil) or
// client.NscSlotInfo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) NscSlotInfo(data map[string]any) CloudflareZeroTrustEntity {
	return NewNscSlotInfoEntityFunc(sdk, data)
}


// NscStatusInfo returns a NscStatusInfo entity bound to this client.
// Idiomatic usage: client.NscStatusInfo(nil).List(nil, nil) or
// client.NscStatusInfo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) NscStatusInfo(data map[string]any) CloudflareZeroTrustEntity {
	return NewNscStatusInfoEntityFunc(sdk, data)
}


// OverrideCode returns a OverrideCode entity bound to this client.
// Idiomatic usage: client.OverrideCode(nil).List(nil, nil) or
// client.OverrideCode(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) OverrideCode(data map[string]any) CloudflareZeroTrustEntity {
	return NewOverrideCodeEntityFunc(sdk, data)
}


// Pacfile returns a Pacfile entity bound to this client.
// Idiomatic usage: client.Pacfile(nil).List(nil, nil) or
// client.Pacfile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) Pacfile(data map[string]any) CloudflareZeroTrustEntity {
	return NewPacfileEntityFunc(sdk, data)
}


// PhysicalDevice returns a PhysicalDevice entity bound to this client.
// Idiomatic usage: client.PhysicalDevice(nil).List(nil, nil) or
// client.PhysicalDevice(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) PhysicalDevice(data map[string]any) CloudflareZeroTrustEntity {
	return NewPhysicalDeviceEntityFunc(sdk, data)
}


// ProxyEndpoint returns a ProxyEndpoint entity bound to this client.
// Idiomatic usage: client.ProxyEndpoint(nil).List(nil, nil) or
// client.ProxyEndpoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ProxyEndpoint(data map[string]any) CloudflareZeroTrustEntity {
	return NewProxyEndpointEntityFunc(sdk, data)
}


// Registration returns a Registration entity bound to this client.
// Idiomatic usage: client.Registration(nil).List(nil, nil) or
// client.Registration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) Registration(data map[string]any) CloudflareZeroTrustEntity {
	return NewRegistrationEntityFunc(sdk, data)
}


// Rule returns a Rule entity bound to this client.
// Idiomatic usage: client.Rule(nil).List(nil, nil) or
// client.Rule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) Rule(data map[string]any) CloudflareZeroTrustEntity {
	return NewRuleEntityFunc(sdk, data)
}


// TeamsDevicesApiResponseSingle returns a TeamsDevicesApiResponseSingle entity bound to this client.
// Idiomatic usage: client.TeamsDevicesApiResponseSingle(nil).List(nil, nil) or
// client.TeamsDevicesApiResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesApiResponseSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesApiResponseSingleEntityFunc(sdk, data)
}


// TeamsDevicesComponentsSchemasResponseCollection returns a TeamsDevicesComponentsSchemasResponseCollection entity bound to this client.
// Idiomatic usage: client.TeamsDevicesComponentsSchemasResponseCollection(nil).List(nil, nil) or
// client.TeamsDevicesComponentsSchemasResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesComponentsSchemasResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesComponentsSchemasResponseCollectionEntityFunc(sdk, data)
}


// TeamsDevicesComponentsSchemasSingle returns a TeamsDevicesComponentsSchemasSingle entity bound to this client.
// Idiomatic usage: client.TeamsDevicesComponentsSchemasSingle(nil).List(nil, nil) or
// client.TeamsDevicesComponentsSchemasSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesComponentsSchemasSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesComponentsSchemasSingleEntityFunc(sdk, data)
}


// TeamsDevicesDefaultDeviceSetting returns a TeamsDevicesDefaultDeviceSetting entity bound to this client.
// Idiomatic usage: client.TeamsDevicesDefaultDeviceSetting(nil).List(nil, nil) or
// client.TeamsDevicesDefaultDeviceSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesDefaultDeviceSetting(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesDefaultDeviceSettingEntityFunc(sdk, data)
}


// TeamsDevicesDevice returns a TeamsDevicesDevice entity bound to this client.
// Idiomatic usage: client.TeamsDevicesDevice(nil).List(nil, nil) or
// client.TeamsDevicesDevice(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesDevice(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesDeviceEntityFunc(sdk, data)
}


// TeamsDevicesDeviceSetting returns a TeamsDevicesDeviceSetting entity bound to this client.
// Idiomatic usage: client.TeamsDevicesDeviceSetting(nil).List(nil, nil) or
// client.TeamsDevicesDeviceSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesDeviceSetting(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesDeviceSettingEntityFunc(sdk, data)
}


// TeamsDevicesDeviceSettingsResponseCollection returns a TeamsDevicesDeviceSettingsResponseCollection entity bound to this client.
// Idiomatic usage: client.TeamsDevicesDeviceSettingsResponseCollection(nil).List(nil, nil) or
// client.TeamsDevicesDeviceSettingsResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesDeviceSettingsResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesDeviceSettingsResponseCollectionEntityFunc(sdk, data)
}


// TeamsDevicesFallbackDomainResponseCollection returns a TeamsDevicesFallbackDomainResponseCollection entity bound to this client.
// Idiomatic usage: client.TeamsDevicesFallbackDomainResponseCollection(nil).List(nil, nil) or
// client.TeamsDevicesFallbackDomainResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesFallbackDomainResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesFallbackDomainResponseCollectionEntityFunc(sdk, data)
}


// TeamsDevicesGlobalWarpOverride returns a TeamsDevicesGlobalWarpOverride entity bound to this client.
// Idiomatic usage: client.TeamsDevicesGlobalWarpOverride(nil).List(nil, nil) or
// client.TeamsDevicesGlobalWarpOverride(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesGlobalWarpOverride(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesGlobalWarpOverrideEntityFunc(sdk, data)
}


// TeamsDevicesId returns a TeamsDevicesId entity bound to this client.
// Idiomatic usage: client.TeamsDevicesId(nil).List(nil, nil) or
// client.TeamsDevicesId(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesId(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesIdEntityFunc(sdk, data)
}


// TeamsDevicesOverrideCode returns a TeamsDevicesOverrideCode entity bound to this client.
// Idiomatic usage: client.TeamsDevicesOverrideCode(nil).List(nil, nil) or
// client.TeamsDevicesOverrideCode(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesOverrideCode(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesOverrideCodeEntityFunc(sdk, data)
}


// TeamsDevicesResponseCollection returns a TeamsDevicesResponseCollection entity bound to this client.
// Idiomatic usage: client.TeamsDevicesResponseCollection(nil).List(nil, nil) or
// client.TeamsDevicesResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesResponseCollectionEntityFunc(sdk, data)
}


// TeamsDevicesSchemasId returns a TeamsDevicesSchemasId entity bound to this client.
// Idiomatic usage: client.TeamsDevicesSchemasId(nil).List(nil, nil) or
// client.TeamsDevicesSchemasId(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesSchemasId(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesSchemasIdEntityFunc(sdk, data)
}


// TeamsDevicesSchemasResponseCollection returns a TeamsDevicesSchemasResponseCollection entity bound to this client.
// Idiomatic usage: client.TeamsDevicesSchemasResponseCollection(nil).List(nil, nil) or
// client.TeamsDevicesSchemasResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesSchemasResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesSchemasResponseCollectionEntityFunc(sdk, data)
}


// TeamsDevicesSchemasSingle returns a TeamsDevicesSchemasSingle entity bound to this client.
// Idiomatic usage: client.TeamsDevicesSchemasSingle(nil).List(nil, nil) or
// client.TeamsDevicesSchemasSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesSchemasSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesSchemasSingleEntityFunc(sdk, data)
}


// TeamsDevicesSingle returns a TeamsDevicesSingle entity bound to this client.
// Idiomatic usage: client.TeamsDevicesSingle(nil).List(nil, nil) or
// client.TeamsDevicesSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesSingleEntityFunc(sdk, data)
}


// TeamsDevicesSplitTunnelIncludeResponseCollection returns a TeamsDevicesSplitTunnelIncludeResponseCollection entity bound to this client.
// Idiomatic usage: client.TeamsDevicesSplitTunnelIncludeResponseCollection(nil).List(nil, nil) or
// client.TeamsDevicesSplitTunnelIncludeResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesSplitTunnelIncludeResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesSplitTunnelIncludeResponseCollectionEntityFunc(sdk, data)
}


// TeamsDevicesSplitTunnelResponseCollection returns a TeamsDevicesSplitTunnelResponseCollection entity bound to this client.
// Idiomatic usage: client.TeamsDevicesSplitTunnelResponseCollection(nil).List(nil, nil) or
// client.TeamsDevicesSplitTunnelResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesSplitTunnelResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesSplitTunnelResponseCollectionEntityFunc(sdk, data)
}


// TeamsDevicesZeroTrustAccountDeviceSetting returns a TeamsDevicesZeroTrustAccountDeviceSetting entity bound to this client.
// Idiomatic usage: client.TeamsDevicesZeroTrustAccountDeviceSetting(nil).List(nil, nil) or
// client.TeamsDevicesZeroTrustAccountDeviceSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TeamsDevicesZeroTrustAccountDeviceSetting(data map[string]any) CloudflareZeroTrustEntity {
	return NewTeamsDevicesZeroTrustAccountDeviceSettingEntityFunc(sdk, data)
}


// Tunnel returns a Tunnel entity bound to this client.
// Idiomatic usage: client.Tunnel(nil).List(nil, nil) or
// client.Tunnel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) Tunnel(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelEntityFunc(sdk, data)
}


// TunnelCfdTunnelResponseCollection returns a TunnelCfdTunnelResponseCollection entity bound to this client.
// Idiomatic usage: client.TunnelCfdTunnelResponseCollection(nil).List(nil, nil) or
// client.TunnelCfdTunnelResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelCfdTunnelResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelCfdTunnelResponseCollectionEntityFunc(sdk, data)
}


// TunnelCfdTunnelResponseSingle returns a TunnelCfdTunnelResponseSingle entity bound to this client.
// Idiomatic usage: client.TunnelCfdTunnelResponseSingle(nil).List(nil, nil) or
// client.TunnelCfdTunnelResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelCfdTunnelResponseSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelCfdTunnelResponseSingleEntityFunc(sdk, data)
}


// TunnelConfiguration returns a TunnelConfiguration entity bound to this client.
// Idiomatic usage: client.TunnelConfiguration(nil).List(nil, nil) or
// client.TunnelConfiguration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelConfiguration(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelConfigurationEntityFunc(sdk, data)
}


// TunnelEmpty returns a TunnelEmpty entity bound to this client.
// Idiomatic usage: client.TunnelEmpty(nil).List(nil, nil) or
// client.TunnelEmpty(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelEmpty(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelEmptyEntityFunc(sdk, data)
}


// TunnelHostnameRouteResponseCollection returns a TunnelHostnameRouteResponseCollection entity bound to this client.
// Idiomatic usage: client.TunnelHostnameRouteResponseCollection(nil).List(nil, nil) or
// client.TunnelHostnameRouteResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelHostnameRouteResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelHostnameRouteResponseCollectionEntityFunc(sdk, data)
}


// TunnelHostnameRouteResponseSingle returns a TunnelHostnameRouteResponseSingle entity bound to this client.
// Idiomatic usage: client.TunnelHostnameRouteResponseSingle(nil).List(nil, nil) or
// client.TunnelHostnameRouteResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelHostnameRouteResponseSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelHostnameRouteResponseSingleEntityFunc(sdk, data)
}


// TunnelMeshConfigurationResponseSingle returns a TunnelMeshConfigurationResponseSingle entity bound to this client.
// Idiomatic usage: client.TunnelMeshConfigurationResponseSingle(nil).List(nil, nil) or
// client.TunnelMeshConfigurationResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelMeshConfigurationResponseSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelMeshConfigurationResponseSingleEntityFunc(sdk, data)
}


// TunnelRouteResponseSingle returns a TunnelRouteResponseSingle entity bound to this client.
// Idiomatic usage: client.TunnelRouteResponseSingle(nil).List(nil, nil) or
// client.TunnelRouteResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelRouteResponseSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelRouteResponseSingleEntityFunc(sdk, data)
}


// TunnelSubnetResponseCollection returns a TunnelSubnetResponseCollection entity bound to this client.
// Idiomatic usage: client.TunnelSubnetResponseCollection(nil).List(nil, nil) or
// client.TunnelSubnetResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelSubnetResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelSubnetResponseCollectionEntityFunc(sdk, data)
}


// TunnelSubnetResponseSingle returns a TunnelSubnetResponseSingle entity bound to this client.
// Idiomatic usage: client.TunnelSubnetResponseSingle(nil).List(nil, nil) or
// client.TunnelSubnetResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelSubnetResponseSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelSubnetResponseSingleEntityFunc(sdk, data)
}


// TunnelSubnetResponseSingleNullable returns a TunnelSubnetResponseSingleNullable entity bound to this client.
// Idiomatic usage: client.TunnelSubnetResponseSingleNullable(nil).List(nil, nil) or
// client.TunnelSubnetResponseSingleNullable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelSubnetResponseSingleNullable(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelSubnetResponseSingleNullableEntityFunc(sdk, data)
}


// TunnelTeamnetResponseCollection returns a TunnelTeamnetResponseCollection entity bound to this client.
// Idiomatic usage: client.TunnelTeamnetResponseCollection(nil).List(nil, nil) or
// client.TunnelTeamnetResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelTeamnetResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelTeamnetResponseCollectionEntityFunc(sdk, data)
}


// TunnelTeamnetResponseSingle returns a TunnelTeamnetResponseSingle entity bound to this client.
// Idiomatic usage: client.TunnelTeamnetResponseSingle(nil).List(nil, nil) or
// client.TunnelTeamnetResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelTeamnetResponseSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelTeamnetResponseSingleEntityFunc(sdk, data)
}


// TunnelTunnelClient returns a TunnelTunnelClient entity bound to this client.
// Idiomatic usage: client.TunnelTunnelClient(nil).List(nil, nil) or
// client.TunnelTunnelClient(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelTunnelClient(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelTunnelClientEntityFunc(sdk, data)
}


// TunnelTunnelConnection returns a TunnelTunnelConnection entity bound to this client.
// Idiomatic usage: client.TunnelTunnelConnection(nil).List(nil, nil) or
// client.TunnelTunnelConnection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelTunnelConnection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelTunnelConnectionEntityFunc(sdk, data)
}


// TunnelTunnelResponseToken returns a TunnelTunnelResponseToken entity bound to this client.
// Idiomatic usage: client.TunnelTunnelResponseToken(nil).List(nil, nil) or
// client.TunnelTunnelResponseToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelTunnelResponseToken(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelTunnelResponseTokenEntityFunc(sdk, data)
}


// TunnelTunnelWarpConnectorClient returns a TunnelTunnelWarpConnectorClient entity bound to this client.
// Idiomatic usage: client.TunnelTunnelWarpConnectorClient(nil).List(nil, nil) or
// client.TunnelTunnelWarpConnectorClient(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelTunnelWarpConnectorClient(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelTunnelWarpConnectorClientEntityFunc(sdk, data)
}


// TunnelTunnelWarpConnectorConnection returns a TunnelTunnelWarpConnectorConnection entity bound to this client.
// Idiomatic usage: client.TunnelTunnelWarpConnectorConnection(nil).List(nil, nil) or
// client.TunnelTunnelWarpConnectorConnection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelTunnelWarpConnectorConnection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelTunnelWarpConnectorConnectionEntityFunc(sdk, data)
}


// TunnelVnetResponseCollection returns a TunnelVnetResponseCollection entity bound to this client.
// Idiomatic usage: client.TunnelVnetResponseCollection(nil).List(nil, nil) or
// client.TunnelVnetResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelVnetResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelVnetResponseCollectionEntityFunc(sdk, data)
}


// TunnelVnetResponseSingle returns a TunnelVnetResponseSingle entity bound to this client.
// Idiomatic usage: client.TunnelVnetResponseSingle(nil).List(nil, nil) or
// client.TunnelVnetResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelVnetResponseSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelVnetResponseSingleEntityFunc(sdk, data)
}


// TunnelWarpConnectorResponseCollection returns a TunnelWarpConnectorResponseCollection entity bound to this client.
// Idiomatic usage: client.TunnelWarpConnectorResponseCollection(nil).List(nil, nil) or
// client.TunnelWarpConnectorResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelWarpConnectorResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelWarpConnectorResponseCollectionEntityFunc(sdk, data)
}


// TunnelWarpConnectorResponseSingle returns a TunnelWarpConnectorResponseSingle entity bound to this client.
// Idiomatic usage: client.TunnelWarpConnectorResponseSingle(nil).List(nil, nil) or
// client.TunnelWarpConnectorResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelWarpConnectorResponseSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelWarpConnectorResponseSingleEntityFunc(sdk, data)
}


// TunnelZeroTrustConnectivitySetting returns a TunnelZeroTrustConnectivitySetting entity bound to this client.
// Idiomatic usage: client.TunnelZeroTrustConnectivitySetting(nil).List(nil, nil) or
// client.TunnelZeroTrustConnectivitySetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) TunnelZeroTrustConnectivitySetting(data map[string]any) CloudflareZeroTrustEntity {
	return NewTunnelZeroTrustConnectivitySettingEntityFunc(sdk, data)
}


// Warp returns a Warp entity bound to this client.
// Idiomatic usage: client.Warp(nil).List(nil, nil) or
// client.Warp(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) Warp(data map[string]any) CloudflareZeroTrustEntity {
	return NewWarpEntityFunc(sdk, data)
}


// WarpChangeEvent returns a WarpChangeEvent entity bound to this client.
// Idiomatic usage: client.WarpChangeEvent(nil).List(nil, nil) or
// client.WarpChangeEvent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) WarpChangeEvent(data map[string]any) CloudflareZeroTrustEntity {
	return NewWarpChangeEventEntityFunc(sdk, data)
}


// WarpTeamsDeviceApiOther returns a WarpTeamsDeviceApiOther entity bound to this client.
// Idiomatic usage: client.WarpTeamsDeviceApiOther(nil).List(nil, nil) or
// client.WarpTeamsDeviceApiOther(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) WarpTeamsDeviceApiOther(data map[string]any) CloudflareZeroTrustEntity {
	return NewWarpTeamsDeviceApiOtherEntityFunc(sdk, data)
}


// ZeroTrustGatewayApplicationsReviewStatus returns a ZeroTrustGatewayApplicationsReviewStatus entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayApplicationsReviewStatus(nil).List(nil, nil) or
// client.ZeroTrustGatewayApplicationsReviewStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayApplicationsReviewStatus(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayApplicationsReviewStatusEntityFunc(sdk, data)
}


// ZeroTrustGatewayCsvOperationSingle returns a ZeroTrustGatewayCsvOperationSingle entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayCsvOperationSingle(nil).List(nil, nil) or
// client.ZeroTrustGatewayCsvOperationSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayCsvOperationSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayCsvOperationSingleEntityFunc(sdk, data)
}


// ZeroTrustGatewayCustomCertificateSetting returns a ZeroTrustGatewayCustomCertificateSetting entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayCustomCertificateSetting(nil).List(nil, nil) or
// client.ZeroTrustGatewayCustomCertificateSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayCustomCertificateSetting(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayCustomCertificateSettingEntityFunc(sdk, data)
}


// ZeroTrustGatewayGatewayAccount returns a ZeroTrustGatewayGatewayAccount entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayGatewayAccount(nil).List(nil, nil) or
// client.ZeroTrustGatewayGatewayAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayGatewayAccount(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayGatewayAccountEntityFunc(sdk, data)
}


// ZeroTrustGatewayGatewayAccountConfig returns a ZeroTrustGatewayGatewayAccountConfig entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayGatewayAccountConfig(nil).List(nil, nil) or
// client.ZeroTrustGatewayGatewayAccountConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayGatewayAccountConfig(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayGatewayAccountConfigEntityFunc(sdk, data)
}


// ZeroTrustGatewayGatewayAccountEgressCidrPairList returns a ZeroTrustGatewayGatewayAccountEgressCidrPairList entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayGatewayAccountEgressCidrPairList(nil).List(nil, nil) or
// client.ZeroTrustGatewayGatewayAccountEgressCidrPairList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayGatewayAccountEgressCidrPairList(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayGatewayAccountEgressCidrPairListEntityFunc(sdk, data)
}


// ZeroTrustGatewayGatewayAccountLoggingSetting returns a ZeroTrustGatewayGatewayAccountLoggingSetting entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayGatewayAccountLoggingSetting(nil).List(nil, nil) or
// client.ZeroTrustGatewayGatewayAccountLoggingSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayGatewayAccountLoggingSetting(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayGatewayAccountLoggingSettingEntityFunc(sdk, data)
}


// ZeroTrustGatewayListItemResponseCollection returns a ZeroTrustGatewayListItemResponseCollection entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayListItemResponseCollection(nil).List(nil, nil) or
// client.ZeroTrustGatewayListItemResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayListItemResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayListItemResponseCollectionEntityFunc(sdk, data)
}


// ZeroTrustGatewayListSingle returns a ZeroTrustGatewayListSingle entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayListSingle(nil).List(nil, nil) or
// client.ZeroTrustGatewayListSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayListSingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayListSingleEntityFunc(sdk, data)
}


// ZeroTrustGatewayResponseCollection returns a ZeroTrustGatewayResponseCollection entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayResponseCollection(nil).List(nil, nil) or
// client.ZeroTrustGatewayResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayResponseCollection(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayResponseCollectionEntityFunc(sdk, data)
}


// ZeroTrustGatewayResponseCollection10 returns a ZeroTrustGatewayResponseCollection10 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayResponseCollection10(nil).List(nil, nil) or
// client.ZeroTrustGatewayResponseCollection10(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayResponseCollection10(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayResponseCollection10EntityFunc(sdk, data)
}


// ZeroTrustGatewayResponseCollection2 returns a ZeroTrustGatewayResponseCollection2 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayResponseCollection2(nil).List(nil, nil) or
// client.ZeroTrustGatewayResponseCollection2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayResponseCollection2(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayResponseCollection2EntityFunc(sdk, data)
}


// ZeroTrustGatewayResponseCollection3 returns a ZeroTrustGatewayResponseCollection3 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayResponseCollection3(nil).List(nil, nil) or
// client.ZeroTrustGatewayResponseCollection3(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayResponseCollection3(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayResponseCollection3EntityFunc(sdk, data)
}


// ZeroTrustGatewayResponseCollection4 returns a ZeroTrustGatewayResponseCollection4 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayResponseCollection4(nil).List(nil, nil) or
// client.ZeroTrustGatewayResponseCollection4(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayResponseCollection4(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayResponseCollection4EntityFunc(sdk, data)
}


// ZeroTrustGatewayResponseCollection5 returns a ZeroTrustGatewayResponseCollection5 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayResponseCollection5(nil).List(nil, nil) or
// client.ZeroTrustGatewayResponseCollection5(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayResponseCollection5(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayResponseCollection5EntityFunc(sdk, data)
}


// ZeroTrustGatewayResponseCollection6 returns a ZeroTrustGatewayResponseCollection6 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayResponseCollection6(nil).List(nil, nil) or
// client.ZeroTrustGatewayResponseCollection6(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayResponseCollection6(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayResponseCollection6EntityFunc(sdk, data)
}


// ZeroTrustGatewayResponseCollection7 returns a ZeroTrustGatewayResponseCollection7 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayResponseCollection7(nil).List(nil, nil) or
// client.ZeroTrustGatewayResponseCollection7(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayResponseCollection7(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayResponseCollection7EntityFunc(sdk, data)
}


// ZeroTrustGatewayResponseCollection8 returns a ZeroTrustGatewayResponseCollection8 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayResponseCollection8(nil).List(nil, nil) or
// client.ZeroTrustGatewayResponseCollection8(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayResponseCollection8(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayResponseCollection8EntityFunc(sdk, data)
}


// ZeroTrustGatewayResponseCollection9 returns a ZeroTrustGatewayResponseCollection9 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewayResponseCollection9(nil).List(nil, nil) or
// client.ZeroTrustGatewayResponseCollection9(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewayResponseCollection9(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewayResponseCollection9EntityFunc(sdk, data)
}


// ZeroTrustGatewaySingle returns a ZeroTrustGatewaySingle entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewaySingle(nil).List(nil, nil) or
// client.ZeroTrustGatewaySingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewaySingle(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewaySingleEntityFunc(sdk, data)
}


// ZeroTrustGatewaySingleResponse2 returns a ZeroTrustGatewaySingleResponse2 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewaySingleResponse2(nil).List(nil, nil) or
// client.ZeroTrustGatewaySingleResponse2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewaySingleResponse2(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewaySingleResponse2EntityFunc(sdk, data)
}


// ZeroTrustGatewaySingleResponse3 returns a ZeroTrustGatewaySingleResponse3 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewaySingleResponse3(nil).List(nil, nil) or
// client.ZeroTrustGatewaySingleResponse3(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewaySingleResponse3(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewaySingleResponse3EntityFunc(sdk, data)
}


// ZeroTrustGatewaySingleResponse4 returns a ZeroTrustGatewaySingleResponse4 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewaySingleResponse4(nil).List(nil, nil) or
// client.ZeroTrustGatewaySingleResponse4(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewaySingleResponse4(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewaySingleResponse4EntityFunc(sdk, data)
}


// ZeroTrustGatewaySingleResponse5 returns a ZeroTrustGatewaySingleResponse5 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewaySingleResponse5(nil).List(nil, nil) or
// client.ZeroTrustGatewaySingleResponse5(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewaySingleResponse5(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewaySingleResponse5EntityFunc(sdk, data)
}


// ZeroTrustGatewaySingleResponse6 returns a ZeroTrustGatewaySingleResponse6 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewaySingleResponse6(nil).List(nil, nil) or
// client.ZeroTrustGatewaySingleResponse6(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewaySingleResponse6(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewaySingleResponse6EntityFunc(sdk, data)
}


// ZeroTrustGatewaySingleResponse7 returns a ZeroTrustGatewaySingleResponse7 entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewaySingleResponse7(nil).List(nil, nil) or
// client.ZeroTrustGatewaySingleResponse7(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewaySingleResponse7(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewaySingleResponse7EntityFunc(sdk, data)
}


// ZeroTrustGatewaySingleResponseWithListItem returns a ZeroTrustGatewaySingleResponseWithListItem entity bound to this client.
// Idiomatic usage: client.ZeroTrustGatewaySingleResponseWithListItem(nil).List(nil, nil) or
// client.ZeroTrustGatewaySingleResponseWithListItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustGatewaySingleResponseWithListItem(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustGatewaySingleResponseWithListItemEntityFunc(sdk, data)
}


// ZeroTrustRiskScoring returns a ZeroTrustRiskScoring entity bound to this client.
// Idiomatic usage: client.ZeroTrustRiskScoring(nil).List(nil, nil) or
// client.ZeroTrustRiskScoring(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustRiskScoring(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustRiskScoringEntityFunc(sdk, data)
}


// ZeroTrustRiskScoringIntegration returns a ZeroTrustRiskScoringIntegration entity bound to this client.
// Idiomatic usage: client.ZeroTrustRiskScoringIntegration(nil).List(nil, nil) or
// client.ZeroTrustRiskScoringIntegration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZeroTrustSDK) ZeroTrustRiskScoringIntegration(data map[string]any) CloudflareZeroTrustEntity {
	return NewZeroTrustRiskScoringIntegrationEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareZeroTrustSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCloudflareZeroTrustSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
