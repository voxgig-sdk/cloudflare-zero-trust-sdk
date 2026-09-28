package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"client_version | cni | deployment_group | dex_remote_command | dex_rule | dex_synthetic_application_monitoring | digital_experience_monitoring_device | digital_experience_monitoring_dex_delete_response_collection | digital_experience_monitoring_dex_response_collection | digital_experience_monitoring_dex_single | digital_experience_monitoring_fleet_status_device | digital_experience_monitoring_fleet_status_live | digital_experience_monitoring_fleet_status_over_time | interconnect | ip_profile | list | location | nsc_cni | nsc_default_name | nsc_interconnect | nsc_setting | nsc_slot_info | nsc_status_info | override_code | pacfile | physical_device | proxy_endpoint | registration | rule | teams_devices_api_response_single | teams_devices_components_schemas_response_collection | teams_devices_components_schemas_single | teams_devices_default_device_setting | teams_devices_device | teams_devices_device_setting | teams_devices_device_settings_response_collection | teams_devices_fallback_domain_response_collection | teams_devices_global_warp_override | teams_devices_id | teams_devices_override_code | teams_devices_response_collection | teams_devices_schemas_id | teams_devices_schemas_response_collection | teams_devices_schemas_single | teams_devices_single | teams_devices_split_tunnel_include_response_collection | teams_devices_split_tunnel_response_collection | teams_devices_zero_trust_account_device_setting | tunnel | tunnel_cfd_tunnel_response_collection | tunnel_cfd_tunnel_response_single | tunnel_configuration | tunnel_empty | tunnel_hostname_route_response_collection | tunnel_hostname_route_response_single | tunnel_mesh_configuration_response_single | tunnel_route_response_single | tunnel_subnet_response_collection | tunnel_subnet_response_single | tunnel_subnet_response_single_nullable | tunnel_teamnet_response_collection | tunnel_teamnet_response_single | tunnel_tunnel_client | tunnel_tunnel_connection | tunnel_tunnel_response_token | tunnel_tunnel_warp_connector_client | tunnel_tunnel_warp_connector_connection | tunnel_vnet_response_collection | tunnel_vnet_response_single | tunnel_warp_connector_response_collection | tunnel_warp_connector_response_single | tunnel_zero_trust_connectivity_setting | warp | warp_change_event | warp_teams_device_api_other | zero_trust_gateway_applications_review_status | zero_trust_gateway_csv_operation_single | zero_trust_gateway_custom_certificate_setting | zero_trust_gateway_gateway_account | zero_trust_gateway_gateway_account_config | zero_trust_gateway_gateway_account_egress_cidr_pair_list | zero_trust_gateway_gateway_account_logging_setting | zero_trust_gateway_list_item_response_collection | zero_trust_gateway_list_single | zero_trust_gateway_response_collection | zero_trust_gateway_response_collection_10 | zero_trust_gateway_response_collection_2 | zero_trust_gateway_response_collection_3 | zero_trust_gateway_response_collection_4 | zero_trust_gateway_response_collection_5 | zero_trust_gateway_response_collection_6 | zero_trust_gateway_response_collection_7 | zero_trust_gateway_response_collection_8 | zero_trust_gateway_response_collection_9 | zero_trust_gateway_single | zero_trust_gateway_single_response_2 | zero_trust_gateway_single_response_3 | zero_trust_gateway_single_response_4 | zero_trust_gateway_single_response_5 | zero_trust_gateway_single_response_6 | zero_trust_gateway_single_response_7 | zero_trust_gateway_single_response_with_list_item | zero_trust_risk_scoring | zero_trust_risk_scoring_integration"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.CloudflareZeroTrustSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-zero-trust_list",
		Description: "List records from CloudflareZeroTrust. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-zero-trust_load",
		Description: "Load a single record from CloudflareZeroTrust. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.CloudflareZeroTrustSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.CloudflareZeroTrustSDK, name string) (sdk.CloudflareZeroTrustEntity, error) {
	switch strings.ToLower(name) {
	case "client_version":
		return client.ClientVersion(nil), nil
	case "cni":
		return client.Cni(nil), nil
	case "deployment_group":
		return client.DeploymentGroup(nil), nil
	case "dex_remote_command":
		return client.DexRemoteCommand(nil), nil
	case "dex_rule":
		return client.DexRule(nil), nil
	case "dex_synthetic_application_monitoring":
		return client.DexSyntheticApplicationMonitoring(nil), nil
	case "digital_experience_monitoring_device":
		return client.DigitalExperienceMonitoringDevice(nil), nil
	case "digital_experience_monitoring_dex_delete_response_collection":
		return client.DigitalExperienceMonitoringDexDeleteResponseCollection(nil), nil
	case "digital_experience_monitoring_dex_response_collection":
		return client.DigitalExperienceMonitoringDexResponseCollection(nil), nil
	case "digital_experience_monitoring_dex_single":
		return client.DigitalExperienceMonitoringDexSingle(nil), nil
	case "digital_experience_monitoring_fleet_status_device":
		return client.DigitalExperienceMonitoringFleetStatusDevice(nil), nil
	case "digital_experience_monitoring_fleet_status_live":
		return client.DigitalExperienceMonitoringFleetStatusLive(nil), nil
	case "digital_experience_monitoring_fleet_status_over_time":
		return client.DigitalExperienceMonitoringFleetStatusOverTime(nil), nil
	case "interconnect":
		return client.Interconnect(nil), nil
	case "ip_profile":
		return client.IpProfile(nil), nil
	case "list":
		return client.List(nil), nil
	case "location":
		return client.Location(nil), nil
	case "nsc_cni":
		return client.NscCni(nil), nil
	case "nsc_default_name":
		return client.NscDefaultName(nil), nil
	case "nsc_interconnect":
		return client.NscInterconnect(nil), nil
	case "nsc_setting":
		return client.NscSetting(nil), nil
	case "nsc_slot_info":
		return client.NscSlotInfo(nil), nil
	case "nsc_status_info":
		return client.NscStatusInfo(nil), nil
	case "override_code":
		return client.OverrideCode(nil), nil
	case "pacfile":
		return client.Pacfile(nil), nil
	case "physical_device":
		return client.PhysicalDevice(nil), nil
	case "proxy_endpoint":
		return client.ProxyEndpoint(nil), nil
	case "registration":
		return client.Registration(nil), nil
	case "rule":
		return client.Rule(nil), nil
	case "teams_devices_api_response_single":
		return client.TeamsDevicesApiResponseSingle(nil), nil
	case "teams_devices_components_schemas_response_collection":
		return client.TeamsDevicesComponentsSchemasResponseCollection(nil), nil
	case "teams_devices_components_schemas_single":
		return client.TeamsDevicesComponentsSchemasSingle(nil), nil
	case "teams_devices_default_device_setting":
		return client.TeamsDevicesDefaultDeviceSetting(nil), nil
	case "teams_devices_device":
		return client.TeamsDevicesDevice(nil), nil
	case "teams_devices_device_setting":
		return client.TeamsDevicesDeviceSetting(nil), nil
	case "teams_devices_device_settings_response_collection":
		return client.TeamsDevicesDeviceSettingsResponseCollection(nil), nil
	case "teams_devices_fallback_domain_response_collection":
		return client.TeamsDevicesFallbackDomainResponseCollection(nil), nil
	case "teams_devices_global_warp_override":
		return client.TeamsDevicesGlobalWarpOverride(nil), nil
	case "teams_devices_id":
		return client.TeamsDevicesId(nil), nil
	case "teams_devices_override_code":
		return client.TeamsDevicesOverrideCode(nil), nil
	case "teams_devices_response_collection":
		return client.TeamsDevicesResponseCollection(nil), nil
	case "teams_devices_schemas_id":
		return client.TeamsDevicesSchemasId(nil), nil
	case "teams_devices_schemas_response_collection":
		return client.TeamsDevicesSchemasResponseCollection(nil), nil
	case "teams_devices_schemas_single":
		return client.TeamsDevicesSchemasSingle(nil), nil
	case "teams_devices_single":
		return client.TeamsDevicesSingle(nil), nil
	case "teams_devices_split_tunnel_include_response_collection":
		return client.TeamsDevicesSplitTunnelIncludeResponseCollection(nil), nil
	case "teams_devices_split_tunnel_response_collection":
		return client.TeamsDevicesSplitTunnelResponseCollection(nil), nil
	case "teams_devices_zero_trust_account_device_setting":
		return client.TeamsDevicesZeroTrustAccountDeviceSetting(nil), nil
	case "tunnel":
		return client.Tunnel(nil), nil
	case "tunnel_cfd_tunnel_response_collection":
		return client.TunnelCfdTunnelResponseCollection(nil), nil
	case "tunnel_cfd_tunnel_response_single":
		return client.TunnelCfdTunnelResponseSingle(nil), nil
	case "tunnel_configuration":
		return client.TunnelConfiguration(nil), nil
	case "tunnel_empty":
		return client.TunnelEmpty(nil), nil
	case "tunnel_hostname_route_response_collection":
		return client.TunnelHostnameRouteResponseCollection(nil), nil
	case "tunnel_hostname_route_response_single":
		return client.TunnelHostnameRouteResponseSingle(nil), nil
	case "tunnel_mesh_configuration_response_single":
		return client.TunnelMeshConfigurationResponseSingle(nil), nil
	case "tunnel_route_response_single":
		return client.TunnelRouteResponseSingle(nil), nil
	case "tunnel_subnet_response_collection":
		return client.TunnelSubnetResponseCollection(nil), nil
	case "tunnel_subnet_response_single":
		return client.TunnelSubnetResponseSingle(nil), nil
	case "tunnel_subnet_response_single_nullable":
		return client.TunnelSubnetResponseSingleNullable(nil), nil
	case "tunnel_teamnet_response_collection":
		return client.TunnelTeamnetResponseCollection(nil), nil
	case "tunnel_teamnet_response_single":
		return client.TunnelTeamnetResponseSingle(nil), nil
	case "tunnel_tunnel_client":
		return client.TunnelTunnelClient(nil), nil
	case "tunnel_tunnel_connection":
		return client.TunnelTunnelConnection(nil), nil
	case "tunnel_tunnel_response_token":
		return client.TunnelTunnelResponseToken(nil), nil
	case "tunnel_tunnel_warp_connector_client":
		return client.TunnelTunnelWarpConnectorClient(nil), nil
	case "tunnel_tunnel_warp_connector_connection":
		return client.TunnelTunnelWarpConnectorConnection(nil), nil
	case "tunnel_vnet_response_collection":
		return client.TunnelVnetResponseCollection(nil), nil
	case "tunnel_vnet_response_single":
		return client.TunnelVnetResponseSingle(nil), nil
	case "tunnel_warp_connector_response_collection":
		return client.TunnelWarpConnectorResponseCollection(nil), nil
	case "tunnel_warp_connector_response_single":
		return client.TunnelWarpConnectorResponseSingle(nil), nil
	case "tunnel_zero_trust_connectivity_setting":
		return client.TunnelZeroTrustConnectivitySetting(nil), nil
	case "warp":
		return client.Warp(nil), nil
	case "warp_change_event":
		return client.WarpChangeEvent(nil), nil
	case "warp_teams_device_api_other":
		return client.WarpTeamsDeviceApiOther(nil), nil
	case "zero_trust_gateway_applications_review_status":
		return client.ZeroTrustGatewayApplicationsReviewStatus(nil), nil
	case "zero_trust_gateway_csv_operation_single":
		return client.ZeroTrustGatewayCsvOperationSingle(nil), nil
	case "zero_trust_gateway_custom_certificate_setting":
		return client.ZeroTrustGatewayCustomCertificateSetting(nil), nil
	case "zero_trust_gateway_gateway_account":
		return client.ZeroTrustGatewayGatewayAccount(nil), nil
	case "zero_trust_gateway_gateway_account_config":
		return client.ZeroTrustGatewayGatewayAccountConfig(nil), nil
	case "zero_trust_gateway_gateway_account_egress_cidr_pair_list":
		return client.ZeroTrustGatewayGatewayAccountEgressCidrPairList(nil), nil
	case "zero_trust_gateway_gateway_account_logging_setting":
		return client.ZeroTrustGatewayGatewayAccountLoggingSetting(nil), nil
	case "zero_trust_gateway_list_item_response_collection":
		return client.ZeroTrustGatewayListItemResponseCollection(nil), nil
	case "zero_trust_gateway_list_single":
		return client.ZeroTrustGatewayListSingle(nil), nil
	case "zero_trust_gateway_response_collection":
		return client.ZeroTrustGatewayResponseCollection(nil), nil
	case "zero_trust_gateway_response_collection_10":
		return client.ZeroTrustGatewayResponseCollection10(nil), nil
	case "zero_trust_gateway_response_collection_2":
		return client.ZeroTrustGatewayResponseCollection2(nil), nil
	case "zero_trust_gateway_response_collection_3":
		return client.ZeroTrustGatewayResponseCollection3(nil), nil
	case "zero_trust_gateway_response_collection_4":
		return client.ZeroTrustGatewayResponseCollection4(nil), nil
	case "zero_trust_gateway_response_collection_5":
		return client.ZeroTrustGatewayResponseCollection5(nil), nil
	case "zero_trust_gateway_response_collection_6":
		return client.ZeroTrustGatewayResponseCollection6(nil), nil
	case "zero_trust_gateway_response_collection_7":
		return client.ZeroTrustGatewayResponseCollection7(nil), nil
	case "zero_trust_gateway_response_collection_8":
		return client.ZeroTrustGatewayResponseCollection8(nil), nil
	case "zero_trust_gateway_response_collection_9":
		return client.ZeroTrustGatewayResponseCollection9(nil), nil
	case "zero_trust_gateway_single":
		return client.ZeroTrustGatewaySingle(nil), nil
	case "zero_trust_gateway_single_response_2":
		return client.ZeroTrustGatewaySingleResponse2(nil), nil
	case "zero_trust_gateway_single_response_3":
		return client.ZeroTrustGatewaySingleResponse3(nil), nil
	case "zero_trust_gateway_single_response_4":
		return client.ZeroTrustGatewaySingleResponse4(nil), nil
	case "zero_trust_gateway_single_response_5":
		return client.ZeroTrustGatewaySingleResponse5(nil), nil
	case "zero_trust_gateway_single_response_6":
		return client.ZeroTrustGatewaySingleResponse6(nil), nil
	case "zero_trust_gateway_single_response_7":
		return client.ZeroTrustGatewaySingleResponse7(nil), nil
	case "zero_trust_gateway_single_response_with_list_item":
		return client.ZeroTrustGatewaySingleResponseWithListItem(nil), nil
	case "zero_trust_risk_scoring":
		return client.ZeroTrustRiskScoring(nil), nil
	case "zero_trust_risk_scoring_integration":
		return client.ZeroTrustRiskScoringIntegration(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
