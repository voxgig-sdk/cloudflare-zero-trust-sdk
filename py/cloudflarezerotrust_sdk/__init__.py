# CloudflareZeroTrust SDK

from cloudflarezerotrust_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflarezerotrust_sdk.core.utility_type import CloudflareZeroTrustUtility
from cloudflarezerotrust_sdk.core.spec import CloudflareZeroTrustSpec
from cloudflarezerotrust_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from cloudflarezerotrust_sdk.utility import register

# Load features
from cloudflarezerotrust_sdk.feature.base_feature import CloudflareZeroTrustBaseFeature
from cloudflarezerotrust_sdk.features import _has_feature, _make_feature


class CloudflareZeroTrustSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CloudflareZeroTrustUtility()
        self._utility = utility

        from cloudflarezerotrust_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CloudflareZeroTrustUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CloudflareZeroTrustSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CloudflareZeroTrustSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CloudflareZeroTrustSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def ClientVersion(self, data=None) -> "ClientVersionEntity":
        """Entity factory: client.ClientVersion().list() / client.ClientVersion().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.client_version_entity import ClientVersionEntity
        return ClientVersionEntity(self, data)


    def Cni(self, data=None) -> "CniEntity":
        """Entity factory: client.Cni().list() / client.Cni().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.cni_entity import CniEntity
        return CniEntity(self, data)


    def DeploymentGroup(self, data=None) -> "DeploymentGroupEntity":
        """Entity factory: client.DeploymentGroup().list() / client.DeploymentGroup().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.deployment_group_entity import DeploymentGroupEntity
        return DeploymentGroupEntity(self, data)


    def DexRemoteCommand(self, data=None) -> "DexRemoteCommandEntity":
        """Entity factory: client.DexRemoteCommand().list() / client.DexRemoteCommand().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.dex_remote_command_entity import DexRemoteCommandEntity
        return DexRemoteCommandEntity(self, data)


    def DexRule(self, data=None) -> "DexRuleEntity":
        """Entity factory: client.DexRule().list() / client.DexRule().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.dex_rule_entity import DexRuleEntity
        return DexRuleEntity(self, data)


    def DexSyntheticApplicationMonitoring(self, data=None) -> "DexSyntheticApplicationMonitoringEntity":
        """Entity factory: client.DexSyntheticApplicationMonitoring().list() / client.DexSyntheticApplicationMonitoring().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.dex_synthetic_application_monitoring_entity import DexSyntheticApplicationMonitoringEntity
        return DexSyntheticApplicationMonitoringEntity(self, data)


    def DigitalExperienceMonitoringDevice(self, data=None) -> "DigitalExperienceMonitoringDeviceEntity":
        """Entity factory: client.DigitalExperienceMonitoringDevice().list() / client.DigitalExperienceMonitoringDevice().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_device_entity import DigitalExperienceMonitoringDeviceEntity
        return DigitalExperienceMonitoringDeviceEntity(self, data)


    def DigitalExperienceMonitoringDexDeleteResponseCollection(self, data=None) -> "DigitalExperienceMonitoringDexDeleteResponseCollectionEntity":
        """Entity factory: client.DigitalExperienceMonitoringDexDeleteResponseCollection().list() / client.DigitalExperienceMonitoringDexDeleteResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_dex_delete_response_collection_entity import DigitalExperienceMonitoringDexDeleteResponseCollectionEntity
        return DigitalExperienceMonitoringDexDeleteResponseCollectionEntity(self, data)


    def DigitalExperienceMonitoringDexResponseCollection(self, data=None) -> "DigitalExperienceMonitoringDexResponseCollectionEntity":
        """Entity factory: client.DigitalExperienceMonitoringDexResponseCollection().list() / client.DigitalExperienceMonitoringDexResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_dex_response_collection_entity import DigitalExperienceMonitoringDexResponseCollectionEntity
        return DigitalExperienceMonitoringDexResponseCollectionEntity(self, data)


    def DigitalExperienceMonitoringDexSingle(self, data=None) -> "DigitalExperienceMonitoringDexSingleEntity":
        """Entity factory: client.DigitalExperienceMonitoringDexSingle().list() / client.DigitalExperienceMonitoringDexSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_dex_single_entity import DigitalExperienceMonitoringDexSingleEntity
        return DigitalExperienceMonitoringDexSingleEntity(self, data)


    def DigitalExperienceMonitoringFleetStatusDevice(self, data=None) -> "DigitalExperienceMonitoringFleetStatusDeviceEntity":
        """Entity factory: client.DigitalExperienceMonitoringFleetStatusDevice().list() / client.DigitalExperienceMonitoringFleetStatusDevice().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_fleet_status_device_entity import DigitalExperienceMonitoringFleetStatusDeviceEntity
        return DigitalExperienceMonitoringFleetStatusDeviceEntity(self, data)


    def DigitalExperienceMonitoringFleetStatusLive(self, data=None) -> "DigitalExperienceMonitoringFleetStatusLiveEntity":
        """Entity factory: client.DigitalExperienceMonitoringFleetStatusLive().list() / client.DigitalExperienceMonitoringFleetStatusLive().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_fleet_status_live_entity import DigitalExperienceMonitoringFleetStatusLiveEntity
        return DigitalExperienceMonitoringFleetStatusLiveEntity(self, data)


    def DigitalExperienceMonitoringFleetStatusOverTime(self, data=None) -> "DigitalExperienceMonitoringFleetStatusOverTimeEntity":
        """Entity factory: client.DigitalExperienceMonitoringFleetStatusOverTime().list() / client.DigitalExperienceMonitoringFleetStatusOverTime().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_fleet_status_over_time_entity import DigitalExperienceMonitoringFleetStatusOverTimeEntity
        return DigitalExperienceMonitoringFleetStatusOverTimeEntity(self, data)


    def Interconnect(self, data=None) -> "InterconnectEntity":
        """Entity factory: client.Interconnect().list() / client.Interconnect().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.interconnect_entity import InterconnectEntity
        return InterconnectEntity(self, data)


    def IpProfile(self, data=None) -> "IpProfileEntity":
        """Entity factory: client.IpProfile().list() / client.IpProfile().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.ip_profile_entity import IpProfileEntity
        return IpProfileEntity(self, data)


    def List(self, data=None) -> "ListEntity":
        """Entity factory: client.List().list() / client.List().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.list_entity import ListEntity
        return ListEntity(self, data)


    def Location(self, data=None) -> "LocationEntity":
        """Entity factory: client.Location().list() / client.Location().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.location_entity import LocationEntity
        return LocationEntity(self, data)


    def NscCni(self, data=None) -> "NscCniEntity":
        """Entity factory: client.NscCni().list() / client.NscCni().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.nsc_cni_entity import NscCniEntity
        return NscCniEntity(self, data)


    def NscDefaultName(self, data=None) -> "NscDefaultNameEntity":
        """Entity factory: client.NscDefaultName().list() / client.NscDefaultName().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.nsc_default_name_entity import NscDefaultNameEntity
        return NscDefaultNameEntity(self, data)


    def NscInterconnect(self, data=None) -> "NscInterconnectEntity":
        """Entity factory: client.NscInterconnect().list() / client.NscInterconnect().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.nsc_interconnect_entity import NscInterconnectEntity
        return NscInterconnectEntity(self, data)


    def NscSetting(self, data=None) -> "NscSettingEntity":
        """Entity factory: client.NscSetting().list() / client.NscSetting().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.nsc_setting_entity import NscSettingEntity
        return NscSettingEntity(self, data)


    def NscSlotInfo(self, data=None) -> "NscSlotInfoEntity":
        """Entity factory: client.NscSlotInfo().list() / client.NscSlotInfo().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.nsc_slot_info_entity import NscSlotInfoEntity
        return NscSlotInfoEntity(self, data)


    def NscStatusInfo(self, data=None) -> "NscStatusInfoEntity":
        """Entity factory: client.NscStatusInfo().list() / client.NscStatusInfo().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.nsc_status_info_entity import NscStatusInfoEntity
        return NscStatusInfoEntity(self, data)


    def OverrideCode(self, data=None) -> "OverrideCodeEntity":
        """Entity factory: client.OverrideCode().list() / client.OverrideCode().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.override_code_entity import OverrideCodeEntity
        return OverrideCodeEntity(self, data)


    def Pacfile(self, data=None) -> "PacfileEntity":
        """Entity factory: client.Pacfile().list() / client.Pacfile().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.pacfile_entity import PacfileEntity
        return PacfileEntity(self, data)


    def PhysicalDevice(self, data=None) -> "PhysicalDeviceEntity":
        """Entity factory: client.PhysicalDevice().list() / client.PhysicalDevice().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.physical_device_entity import PhysicalDeviceEntity
        return PhysicalDeviceEntity(self, data)


    def ProxyEndpoint(self, data=None) -> "ProxyEndpointEntity":
        """Entity factory: client.ProxyEndpoint().list() / client.ProxyEndpoint().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.proxy_endpoint_entity import ProxyEndpointEntity
        return ProxyEndpointEntity(self, data)


    def Registration(self, data=None) -> "RegistrationEntity":
        """Entity factory: client.Registration().list() / client.Registration().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.registration_entity import RegistrationEntity
        return RegistrationEntity(self, data)


    def Rule(self, data=None) -> "RuleEntity":
        """Entity factory: client.Rule().list() / client.Rule().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.rule_entity import RuleEntity
        return RuleEntity(self, data)


    def TeamsDevicesApiResponseSingle(self, data=None) -> "TeamsDevicesApiResponseSingleEntity":
        """Entity factory: client.TeamsDevicesApiResponseSingle().list() / client.TeamsDevicesApiResponseSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_api_response_single_entity import TeamsDevicesApiResponseSingleEntity
        return TeamsDevicesApiResponseSingleEntity(self, data)


    def TeamsDevicesComponentsSchemasResponseCollection(self, data=None) -> "TeamsDevicesComponentsSchemasResponseCollectionEntity":
        """Entity factory: client.TeamsDevicesComponentsSchemasResponseCollection().list() / client.TeamsDevicesComponentsSchemasResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_components_schemas_response_collection_entity import TeamsDevicesComponentsSchemasResponseCollectionEntity
        return TeamsDevicesComponentsSchemasResponseCollectionEntity(self, data)


    def TeamsDevicesComponentsSchemasSingle(self, data=None) -> "TeamsDevicesComponentsSchemasSingleEntity":
        """Entity factory: client.TeamsDevicesComponentsSchemasSingle().list() / client.TeamsDevicesComponentsSchemasSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_components_schemas_single_entity import TeamsDevicesComponentsSchemasSingleEntity
        return TeamsDevicesComponentsSchemasSingleEntity(self, data)


    def TeamsDevicesDefaultDeviceSetting(self, data=None) -> "TeamsDevicesDefaultDeviceSettingEntity":
        """Entity factory: client.TeamsDevicesDefaultDeviceSetting().list() / client.TeamsDevicesDefaultDeviceSetting().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_default_device_setting_entity import TeamsDevicesDefaultDeviceSettingEntity
        return TeamsDevicesDefaultDeviceSettingEntity(self, data)


    def TeamsDevicesDevice(self, data=None) -> "TeamsDevicesDeviceEntity":
        """Entity factory: client.TeamsDevicesDevice().list() / client.TeamsDevicesDevice().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_device_entity import TeamsDevicesDeviceEntity
        return TeamsDevicesDeviceEntity(self, data)


    def TeamsDevicesDeviceSetting(self, data=None) -> "TeamsDevicesDeviceSettingEntity":
        """Entity factory: client.TeamsDevicesDeviceSetting().list() / client.TeamsDevicesDeviceSetting().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_device_setting_entity import TeamsDevicesDeviceSettingEntity
        return TeamsDevicesDeviceSettingEntity(self, data)


    def TeamsDevicesDeviceSettingsResponseCollection(self, data=None) -> "TeamsDevicesDeviceSettingsResponseCollectionEntity":
        """Entity factory: client.TeamsDevicesDeviceSettingsResponseCollection().list() / client.TeamsDevicesDeviceSettingsResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_device_settings_response_collection_entity import TeamsDevicesDeviceSettingsResponseCollectionEntity
        return TeamsDevicesDeviceSettingsResponseCollectionEntity(self, data)


    def TeamsDevicesFallbackDomainResponseCollection(self, data=None) -> "TeamsDevicesFallbackDomainResponseCollectionEntity":
        """Entity factory: client.TeamsDevicesFallbackDomainResponseCollection().list() / client.TeamsDevicesFallbackDomainResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_fallback_domain_response_collection_entity import TeamsDevicesFallbackDomainResponseCollectionEntity
        return TeamsDevicesFallbackDomainResponseCollectionEntity(self, data)


    def TeamsDevicesGlobalWarpOverride(self, data=None) -> "TeamsDevicesGlobalWarpOverrideEntity":
        """Entity factory: client.TeamsDevicesGlobalWarpOverride().list() / client.TeamsDevicesGlobalWarpOverride().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_global_warp_override_entity import TeamsDevicesGlobalWarpOverrideEntity
        return TeamsDevicesGlobalWarpOverrideEntity(self, data)


    def TeamsDevicesId(self, data=None) -> "TeamsDevicesIdEntity":
        """Entity factory: client.TeamsDevicesId().list() / client.TeamsDevicesId().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_id_entity import TeamsDevicesIdEntity
        return TeamsDevicesIdEntity(self, data)


    def TeamsDevicesOverrideCode(self, data=None) -> "TeamsDevicesOverrideCodeEntity":
        """Entity factory: client.TeamsDevicesOverrideCode().list() / client.TeamsDevicesOverrideCode().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_override_code_entity import TeamsDevicesOverrideCodeEntity
        return TeamsDevicesOverrideCodeEntity(self, data)


    def TeamsDevicesResponseCollection(self, data=None) -> "TeamsDevicesResponseCollectionEntity":
        """Entity factory: client.TeamsDevicesResponseCollection().list() / client.TeamsDevicesResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_response_collection_entity import TeamsDevicesResponseCollectionEntity
        return TeamsDevicesResponseCollectionEntity(self, data)


    def TeamsDevicesSchemasId(self, data=None) -> "TeamsDevicesSchemasIdEntity":
        """Entity factory: client.TeamsDevicesSchemasId().list() / client.TeamsDevicesSchemasId().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_schemas_id_entity import TeamsDevicesSchemasIdEntity
        return TeamsDevicesSchemasIdEntity(self, data)


    def TeamsDevicesSchemasResponseCollection(self, data=None) -> "TeamsDevicesSchemasResponseCollectionEntity":
        """Entity factory: client.TeamsDevicesSchemasResponseCollection().list() / client.TeamsDevicesSchemasResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_schemas_response_collection_entity import TeamsDevicesSchemasResponseCollectionEntity
        return TeamsDevicesSchemasResponseCollectionEntity(self, data)


    def TeamsDevicesSchemasSingle(self, data=None) -> "TeamsDevicesSchemasSingleEntity":
        """Entity factory: client.TeamsDevicesSchemasSingle().list() / client.TeamsDevicesSchemasSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_schemas_single_entity import TeamsDevicesSchemasSingleEntity
        return TeamsDevicesSchemasSingleEntity(self, data)


    def TeamsDevicesSingle(self, data=None) -> "TeamsDevicesSingleEntity":
        """Entity factory: client.TeamsDevicesSingle().list() / client.TeamsDevicesSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_single_entity import TeamsDevicesSingleEntity
        return TeamsDevicesSingleEntity(self, data)


    def TeamsDevicesSplitTunnelIncludeResponseCollection(self, data=None) -> "TeamsDevicesSplitTunnelIncludeResponseCollectionEntity":
        """Entity factory: client.TeamsDevicesSplitTunnelIncludeResponseCollection().list() / client.TeamsDevicesSplitTunnelIncludeResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_split_tunnel_include_response_collection_entity import TeamsDevicesSplitTunnelIncludeResponseCollectionEntity
        return TeamsDevicesSplitTunnelIncludeResponseCollectionEntity(self, data)


    def TeamsDevicesSplitTunnelResponseCollection(self, data=None) -> "TeamsDevicesSplitTunnelResponseCollectionEntity":
        """Entity factory: client.TeamsDevicesSplitTunnelResponseCollection().list() / client.TeamsDevicesSplitTunnelResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_split_tunnel_response_collection_entity import TeamsDevicesSplitTunnelResponseCollectionEntity
        return TeamsDevicesSplitTunnelResponseCollectionEntity(self, data)


    def TeamsDevicesZeroTrustAccountDeviceSetting(self, data=None) -> "TeamsDevicesZeroTrustAccountDeviceSettingEntity":
        """Entity factory: client.TeamsDevicesZeroTrustAccountDeviceSetting().list() / client.TeamsDevicesZeroTrustAccountDeviceSetting().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.teams_devices_zero_trust_account_device_setting_entity import TeamsDevicesZeroTrustAccountDeviceSettingEntity
        return TeamsDevicesZeroTrustAccountDeviceSettingEntity(self, data)


    def Tunnel(self, data=None) -> "TunnelEntity":
        """Entity factory: client.Tunnel().list() / client.Tunnel().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_entity import TunnelEntity
        return TunnelEntity(self, data)


    def TunnelCfdTunnelResponseCollection(self, data=None) -> "TunnelCfdTunnelResponseCollectionEntity":
        """Entity factory: client.TunnelCfdTunnelResponseCollection().list() / client.TunnelCfdTunnelResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_cfd_tunnel_response_collection_entity import TunnelCfdTunnelResponseCollectionEntity
        return TunnelCfdTunnelResponseCollectionEntity(self, data)


    def TunnelCfdTunnelResponseSingle(self, data=None) -> "TunnelCfdTunnelResponseSingleEntity":
        """Entity factory: client.TunnelCfdTunnelResponseSingle().list() / client.TunnelCfdTunnelResponseSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_cfd_tunnel_response_single_entity import TunnelCfdTunnelResponseSingleEntity
        return TunnelCfdTunnelResponseSingleEntity(self, data)


    def TunnelConfiguration(self, data=None) -> "TunnelConfigurationEntity":
        """Entity factory: client.TunnelConfiguration().list() / client.TunnelConfiguration().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_configuration_entity import TunnelConfigurationEntity
        return TunnelConfigurationEntity(self, data)


    def TunnelEmpty(self, data=None) -> "TunnelEmptyEntity":
        """Entity factory: client.TunnelEmpty().list() / client.TunnelEmpty().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_empty_entity import TunnelEmptyEntity
        return TunnelEmptyEntity(self, data)


    def TunnelHostnameRouteResponseCollection(self, data=None) -> "TunnelHostnameRouteResponseCollectionEntity":
        """Entity factory: client.TunnelHostnameRouteResponseCollection().list() / client.TunnelHostnameRouteResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_hostname_route_response_collection_entity import TunnelHostnameRouteResponseCollectionEntity
        return TunnelHostnameRouteResponseCollectionEntity(self, data)


    def TunnelHostnameRouteResponseSingle(self, data=None) -> "TunnelHostnameRouteResponseSingleEntity":
        """Entity factory: client.TunnelHostnameRouteResponseSingle().list() / client.TunnelHostnameRouteResponseSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_hostname_route_response_single_entity import TunnelHostnameRouteResponseSingleEntity
        return TunnelHostnameRouteResponseSingleEntity(self, data)


    def TunnelMeshConfigurationResponseSingle(self, data=None) -> "TunnelMeshConfigurationResponseSingleEntity":
        """Entity factory: client.TunnelMeshConfigurationResponseSingle().list() / client.TunnelMeshConfigurationResponseSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_mesh_configuration_response_single_entity import TunnelMeshConfigurationResponseSingleEntity
        return TunnelMeshConfigurationResponseSingleEntity(self, data)


    def TunnelRouteResponseSingle(self, data=None) -> "TunnelRouteResponseSingleEntity":
        """Entity factory: client.TunnelRouteResponseSingle().list() / client.TunnelRouteResponseSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_route_response_single_entity import TunnelRouteResponseSingleEntity
        return TunnelRouteResponseSingleEntity(self, data)


    def TunnelSubnetResponseCollection(self, data=None) -> "TunnelSubnetResponseCollectionEntity":
        """Entity factory: client.TunnelSubnetResponseCollection().list() / client.TunnelSubnetResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_subnet_response_collection_entity import TunnelSubnetResponseCollectionEntity
        return TunnelSubnetResponseCollectionEntity(self, data)


    def TunnelSubnetResponseSingle(self, data=None) -> "TunnelSubnetResponseSingleEntity":
        """Entity factory: client.TunnelSubnetResponseSingle().list() / client.TunnelSubnetResponseSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_subnet_response_single_entity import TunnelSubnetResponseSingleEntity
        return TunnelSubnetResponseSingleEntity(self, data)


    def TunnelSubnetResponseSingleNullable(self, data=None) -> "TunnelSubnetResponseSingleNullableEntity":
        """Entity factory: client.TunnelSubnetResponseSingleNullable().list() / client.TunnelSubnetResponseSingleNullable().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_subnet_response_single_nullable_entity import TunnelSubnetResponseSingleNullableEntity
        return TunnelSubnetResponseSingleNullableEntity(self, data)


    def TunnelTeamnetResponseCollection(self, data=None) -> "TunnelTeamnetResponseCollectionEntity":
        """Entity factory: client.TunnelTeamnetResponseCollection().list() / client.TunnelTeamnetResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_teamnet_response_collection_entity import TunnelTeamnetResponseCollectionEntity
        return TunnelTeamnetResponseCollectionEntity(self, data)


    def TunnelTeamnetResponseSingle(self, data=None) -> "TunnelTeamnetResponseSingleEntity":
        """Entity factory: client.TunnelTeamnetResponseSingle().list() / client.TunnelTeamnetResponseSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_teamnet_response_single_entity import TunnelTeamnetResponseSingleEntity
        return TunnelTeamnetResponseSingleEntity(self, data)


    def TunnelTunnelClient(self, data=None) -> "TunnelTunnelClientEntity":
        """Entity factory: client.TunnelTunnelClient().list() / client.TunnelTunnelClient().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_tunnel_client_entity import TunnelTunnelClientEntity
        return TunnelTunnelClientEntity(self, data)


    def TunnelTunnelConnection(self, data=None) -> "TunnelTunnelConnectionEntity":
        """Entity factory: client.TunnelTunnelConnection().list() / client.TunnelTunnelConnection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_tunnel_connection_entity import TunnelTunnelConnectionEntity
        return TunnelTunnelConnectionEntity(self, data)


    def TunnelTunnelResponseToken(self, data=None) -> "TunnelTunnelResponseTokenEntity":
        """Entity factory: client.TunnelTunnelResponseToken().list() / client.TunnelTunnelResponseToken().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_tunnel_response_token_entity import TunnelTunnelResponseTokenEntity
        return TunnelTunnelResponseTokenEntity(self, data)


    def TunnelTunnelWarpConnectorClient(self, data=None) -> "TunnelTunnelWarpConnectorClientEntity":
        """Entity factory: client.TunnelTunnelWarpConnectorClient().list() / client.TunnelTunnelWarpConnectorClient().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_tunnel_warp_connector_client_entity import TunnelTunnelWarpConnectorClientEntity
        return TunnelTunnelWarpConnectorClientEntity(self, data)


    def TunnelTunnelWarpConnectorConnection(self, data=None) -> "TunnelTunnelWarpConnectorConnectionEntity":
        """Entity factory: client.TunnelTunnelWarpConnectorConnection().list() / client.TunnelTunnelWarpConnectorConnection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_tunnel_warp_connector_connection_entity import TunnelTunnelWarpConnectorConnectionEntity
        return TunnelTunnelWarpConnectorConnectionEntity(self, data)


    def TunnelVnetResponseCollection(self, data=None) -> "TunnelVnetResponseCollectionEntity":
        """Entity factory: client.TunnelVnetResponseCollection().list() / client.TunnelVnetResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_vnet_response_collection_entity import TunnelVnetResponseCollectionEntity
        return TunnelVnetResponseCollectionEntity(self, data)


    def TunnelVnetResponseSingle(self, data=None) -> "TunnelVnetResponseSingleEntity":
        """Entity factory: client.TunnelVnetResponseSingle().list() / client.TunnelVnetResponseSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_vnet_response_single_entity import TunnelVnetResponseSingleEntity
        return TunnelVnetResponseSingleEntity(self, data)


    def TunnelWarpConnectorResponseCollection(self, data=None) -> "TunnelWarpConnectorResponseCollectionEntity":
        """Entity factory: client.TunnelWarpConnectorResponseCollection().list() / client.TunnelWarpConnectorResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_warp_connector_response_collection_entity import TunnelWarpConnectorResponseCollectionEntity
        return TunnelWarpConnectorResponseCollectionEntity(self, data)


    def TunnelWarpConnectorResponseSingle(self, data=None) -> "TunnelWarpConnectorResponseSingleEntity":
        """Entity factory: client.TunnelWarpConnectorResponseSingle().list() / client.TunnelWarpConnectorResponseSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_warp_connector_response_single_entity import TunnelWarpConnectorResponseSingleEntity
        return TunnelWarpConnectorResponseSingleEntity(self, data)


    def TunnelZeroTrustConnectivitySetting(self, data=None) -> "TunnelZeroTrustConnectivitySettingEntity":
        """Entity factory: client.TunnelZeroTrustConnectivitySetting().list() / client.TunnelZeroTrustConnectivitySetting().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.tunnel_zero_trust_connectivity_setting_entity import TunnelZeroTrustConnectivitySettingEntity
        return TunnelZeroTrustConnectivitySettingEntity(self, data)


    def Warp(self, data=None) -> "WarpEntity":
        """Entity factory: client.Warp().list() / client.Warp().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.warp_entity import WarpEntity
        return WarpEntity(self, data)


    def WarpChangeEvent(self, data=None) -> "WarpChangeEventEntity":
        """Entity factory: client.WarpChangeEvent().list() / client.WarpChangeEvent().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.warp_change_event_entity import WarpChangeEventEntity
        return WarpChangeEventEntity(self, data)


    def WarpTeamsDeviceApiOther(self, data=None) -> "WarpTeamsDeviceApiOtherEntity":
        """Entity factory: client.WarpTeamsDeviceApiOther().list() / client.WarpTeamsDeviceApiOther().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.warp_teams_device_api_other_entity import WarpTeamsDeviceApiOtherEntity
        return WarpTeamsDeviceApiOtherEntity(self, data)


    def ZeroTrustGatewayApplicationsReviewStatus(self, data=None) -> "ZeroTrustGatewayApplicationsReviewStatusEntity":
        """Entity factory: client.ZeroTrustGatewayApplicationsReviewStatus().list() / client.ZeroTrustGatewayApplicationsReviewStatus().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_applications_review_status_entity import ZeroTrustGatewayApplicationsReviewStatusEntity
        return ZeroTrustGatewayApplicationsReviewStatusEntity(self, data)


    def ZeroTrustGatewayCsvOperationSingle(self, data=None) -> "ZeroTrustGatewayCsvOperationSingleEntity":
        """Entity factory: client.ZeroTrustGatewayCsvOperationSingle().list() / client.ZeroTrustGatewayCsvOperationSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_csv_operation_single_entity import ZeroTrustGatewayCsvOperationSingleEntity
        return ZeroTrustGatewayCsvOperationSingleEntity(self, data)


    def ZeroTrustGatewayCustomCertificateSetting(self, data=None) -> "ZeroTrustGatewayCustomCertificateSettingEntity":
        """Entity factory: client.ZeroTrustGatewayCustomCertificateSetting().list() / client.ZeroTrustGatewayCustomCertificateSetting().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_custom_certificate_setting_entity import ZeroTrustGatewayCustomCertificateSettingEntity
        return ZeroTrustGatewayCustomCertificateSettingEntity(self, data)


    def ZeroTrustGatewayGatewayAccount(self, data=None) -> "ZeroTrustGatewayGatewayAccountEntity":
        """Entity factory: client.ZeroTrustGatewayGatewayAccount().list() / client.ZeroTrustGatewayGatewayAccount().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_gateway_account_entity import ZeroTrustGatewayGatewayAccountEntity
        return ZeroTrustGatewayGatewayAccountEntity(self, data)


    def ZeroTrustGatewayGatewayAccountConfig(self, data=None) -> "ZeroTrustGatewayGatewayAccountConfigEntity":
        """Entity factory: client.ZeroTrustGatewayGatewayAccountConfig().list() / client.ZeroTrustGatewayGatewayAccountConfig().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_gateway_account_config_entity import ZeroTrustGatewayGatewayAccountConfigEntity
        return ZeroTrustGatewayGatewayAccountConfigEntity(self, data)


    def ZeroTrustGatewayGatewayAccountEgressCidrPairList(self, data=None) -> "ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity":
        """Entity factory: client.ZeroTrustGatewayGatewayAccountEgressCidrPairList().list() / client.ZeroTrustGatewayGatewayAccountEgressCidrPairList().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_gateway_account_egress_cidr_pair_list_entity import ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity
        return ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity(self, data)


    def ZeroTrustGatewayGatewayAccountLoggingSetting(self, data=None) -> "ZeroTrustGatewayGatewayAccountLoggingSettingEntity":
        """Entity factory: client.ZeroTrustGatewayGatewayAccountLoggingSetting().list() / client.ZeroTrustGatewayGatewayAccountLoggingSetting().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_gateway_account_logging_setting_entity import ZeroTrustGatewayGatewayAccountLoggingSettingEntity
        return ZeroTrustGatewayGatewayAccountLoggingSettingEntity(self, data)


    def ZeroTrustGatewayListItemResponseCollection(self, data=None) -> "ZeroTrustGatewayListItemResponseCollectionEntity":
        """Entity factory: client.ZeroTrustGatewayListItemResponseCollection().list() / client.ZeroTrustGatewayListItemResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_list_item_response_collection_entity import ZeroTrustGatewayListItemResponseCollectionEntity
        return ZeroTrustGatewayListItemResponseCollectionEntity(self, data)


    def ZeroTrustGatewayListSingle(self, data=None) -> "ZeroTrustGatewayListSingleEntity":
        """Entity factory: client.ZeroTrustGatewayListSingle().list() / client.ZeroTrustGatewayListSingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_list_single_entity import ZeroTrustGatewayListSingleEntity
        return ZeroTrustGatewayListSingleEntity(self, data)


    def ZeroTrustGatewayResponseCollection(self, data=None) -> "ZeroTrustGatewayResponseCollectionEntity":
        """Entity factory: client.ZeroTrustGatewayResponseCollection().list() / client.ZeroTrustGatewayResponseCollection().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_entity import ZeroTrustGatewayResponseCollectionEntity
        return ZeroTrustGatewayResponseCollectionEntity(self, data)


    def ZeroTrustGatewayResponseCollection10(self, data=None) -> "ZeroTrustGatewayResponseCollection10Entity":
        """Entity factory: client.ZeroTrustGatewayResponseCollection10().list() / client.ZeroTrustGatewayResponseCollection10().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_10_entity import ZeroTrustGatewayResponseCollection10Entity
        return ZeroTrustGatewayResponseCollection10Entity(self, data)


    def ZeroTrustGatewayResponseCollection2(self, data=None) -> "ZeroTrustGatewayResponseCollection2Entity":
        """Entity factory: client.ZeroTrustGatewayResponseCollection2().list() / client.ZeroTrustGatewayResponseCollection2().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_2_entity import ZeroTrustGatewayResponseCollection2Entity
        return ZeroTrustGatewayResponseCollection2Entity(self, data)


    def ZeroTrustGatewayResponseCollection3(self, data=None) -> "ZeroTrustGatewayResponseCollection3Entity":
        """Entity factory: client.ZeroTrustGatewayResponseCollection3().list() / client.ZeroTrustGatewayResponseCollection3().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_3_entity import ZeroTrustGatewayResponseCollection3Entity
        return ZeroTrustGatewayResponseCollection3Entity(self, data)


    def ZeroTrustGatewayResponseCollection4(self, data=None) -> "ZeroTrustGatewayResponseCollection4Entity":
        """Entity factory: client.ZeroTrustGatewayResponseCollection4().list() / client.ZeroTrustGatewayResponseCollection4().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_4_entity import ZeroTrustGatewayResponseCollection4Entity
        return ZeroTrustGatewayResponseCollection4Entity(self, data)


    def ZeroTrustGatewayResponseCollection5(self, data=None) -> "ZeroTrustGatewayResponseCollection5Entity":
        """Entity factory: client.ZeroTrustGatewayResponseCollection5().list() / client.ZeroTrustGatewayResponseCollection5().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_5_entity import ZeroTrustGatewayResponseCollection5Entity
        return ZeroTrustGatewayResponseCollection5Entity(self, data)


    def ZeroTrustGatewayResponseCollection6(self, data=None) -> "ZeroTrustGatewayResponseCollection6Entity":
        """Entity factory: client.ZeroTrustGatewayResponseCollection6().list() / client.ZeroTrustGatewayResponseCollection6().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_6_entity import ZeroTrustGatewayResponseCollection6Entity
        return ZeroTrustGatewayResponseCollection6Entity(self, data)


    def ZeroTrustGatewayResponseCollection7(self, data=None) -> "ZeroTrustGatewayResponseCollection7Entity":
        """Entity factory: client.ZeroTrustGatewayResponseCollection7().list() / client.ZeroTrustGatewayResponseCollection7().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_7_entity import ZeroTrustGatewayResponseCollection7Entity
        return ZeroTrustGatewayResponseCollection7Entity(self, data)


    def ZeroTrustGatewayResponseCollection8(self, data=None) -> "ZeroTrustGatewayResponseCollection8Entity":
        """Entity factory: client.ZeroTrustGatewayResponseCollection8().list() / client.ZeroTrustGatewayResponseCollection8().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_8_entity import ZeroTrustGatewayResponseCollection8Entity
        return ZeroTrustGatewayResponseCollection8Entity(self, data)


    def ZeroTrustGatewayResponseCollection9(self, data=None) -> "ZeroTrustGatewayResponseCollection9Entity":
        """Entity factory: client.ZeroTrustGatewayResponseCollection9().list() / client.ZeroTrustGatewayResponseCollection9().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_9_entity import ZeroTrustGatewayResponseCollection9Entity
        return ZeroTrustGatewayResponseCollection9Entity(self, data)


    def ZeroTrustGatewaySingle(self, data=None) -> "ZeroTrustGatewaySingleEntity":
        """Entity factory: client.ZeroTrustGatewaySingle().list() / client.ZeroTrustGatewaySingle().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_entity import ZeroTrustGatewaySingleEntity
        return ZeroTrustGatewaySingleEntity(self, data)


    def ZeroTrustGatewaySingleResponse2(self, data=None) -> "ZeroTrustGatewaySingleResponse2Entity":
        """Entity factory: client.ZeroTrustGatewaySingleResponse2().list() / client.ZeroTrustGatewaySingleResponse2().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_2_entity import ZeroTrustGatewaySingleResponse2Entity
        return ZeroTrustGatewaySingleResponse2Entity(self, data)


    def ZeroTrustGatewaySingleResponse3(self, data=None) -> "ZeroTrustGatewaySingleResponse3Entity":
        """Entity factory: client.ZeroTrustGatewaySingleResponse3().list() / client.ZeroTrustGatewaySingleResponse3().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_3_entity import ZeroTrustGatewaySingleResponse3Entity
        return ZeroTrustGatewaySingleResponse3Entity(self, data)


    def ZeroTrustGatewaySingleResponse4(self, data=None) -> "ZeroTrustGatewaySingleResponse4Entity":
        """Entity factory: client.ZeroTrustGatewaySingleResponse4().list() / client.ZeroTrustGatewaySingleResponse4().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_4_entity import ZeroTrustGatewaySingleResponse4Entity
        return ZeroTrustGatewaySingleResponse4Entity(self, data)


    def ZeroTrustGatewaySingleResponse5(self, data=None) -> "ZeroTrustGatewaySingleResponse5Entity":
        """Entity factory: client.ZeroTrustGatewaySingleResponse5().list() / client.ZeroTrustGatewaySingleResponse5().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_5_entity import ZeroTrustGatewaySingleResponse5Entity
        return ZeroTrustGatewaySingleResponse5Entity(self, data)


    def ZeroTrustGatewaySingleResponse6(self, data=None) -> "ZeroTrustGatewaySingleResponse6Entity":
        """Entity factory: client.ZeroTrustGatewaySingleResponse6().list() / client.ZeroTrustGatewaySingleResponse6().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_6_entity import ZeroTrustGatewaySingleResponse6Entity
        return ZeroTrustGatewaySingleResponse6Entity(self, data)


    def ZeroTrustGatewaySingleResponse7(self, data=None) -> "ZeroTrustGatewaySingleResponse7Entity":
        """Entity factory: client.ZeroTrustGatewaySingleResponse7().list() / client.ZeroTrustGatewaySingleResponse7().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_7_entity import ZeroTrustGatewaySingleResponse7Entity
        return ZeroTrustGatewaySingleResponse7Entity(self, data)


    def ZeroTrustGatewaySingleResponseWithListItem(self, data=None) -> "ZeroTrustGatewaySingleResponseWithListItemEntity":
        """Entity factory: client.ZeroTrustGatewaySingleResponseWithListItem().list() / client.ZeroTrustGatewaySingleResponseWithListItem().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_with_list_item_entity import ZeroTrustGatewaySingleResponseWithListItemEntity
        return ZeroTrustGatewaySingleResponseWithListItemEntity(self, data)


    def ZeroTrustRiskScoring(self, data=None) -> "ZeroTrustRiskScoringEntity":
        """Entity factory: client.ZeroTrustRiskScoring().list() / client.ZeroTrustRiskScoring().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_risk_scoring_entity import ZeroTrustRiskScoringEntity
        return ZeroTrustRiskScoringEntity(self, data)


    def ZeroTrustRiskScoringIntegration(self, data=None) -> "ZeroTrustRiskScoringIntegrationEntity":
        """Entity factory: client.ZeroTrustRiskScoringIntegration().list() / client.ZeroTrustRiskScoringIntegration().load({"id": ...})."""
        from cloudflarezerotrust_sdk.entity.zero_trust_risk_scoring_integration_entity import ZeroTrustRiskScoringIntegrationEntity
        return ZeroTrustRiskScoringIntegrationEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CloudflareZeroTrustSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from cloudflarezerotrust_sdk.entity.client_version_entity import ClientVersionEntity
    from cloudflarezerotrust_sdk.entity.cni_entity import CniEntity
    from cloudflarezerotrust_sdk.entity.deployment_group_entity import DeploymentGroupEntity
    from cloudflarezerotrust_sdk.entity.dex_remote_command_entity import DexRemoteCommandEntity
    from cloudflarezerotrust_sdk.entity.dex_rule_entity import DexRuleEntity
    from cloudflarezerotrust_sdk.entity.dex_synthetic_application_monitoring_entity import DexSyntheticApplicationMonitoringEntity
    from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_device_entity import DigitalExperienceMonitoringDeviceEntity
    from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_dex_delete_response_collection_entity import DigitalExperienceMonitoringDexDeleteResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_dex_response_collection_entity import DigitalExperienceMonitoringDexResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_dex_single_entity import DigitalExperienceMonitoringDexSingleEntity
    from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_fleet_status_device_entity import DigitalExperienceMonitoringFleetStatusDeviceEntity
    from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_fleet_status_live_entity import DigitalExperienceMonitoringFleetStatusLiveEntity
    from cloudflarezerotrust_sdk.entity.digital_experience_monitoring_fleet_status_over_time_entity import DigitalExperienceMonitoringFleetStatusOverTimeEntity
    from cloudflarezerotrust_sdk.entity.interconnect_entity import InterconnectEntity
    from cloudflarezerotrust_sdk.entity.ip_profile_entity import IpProfileEntity
    from cloudflarezerotrust_sdk.entity.list_entity import ListEntity
    from cloudflarezerotrust_sdk.entity.location_entity import LocationEntity
    from cloudflarezerotrust_sdk.entity.nsc_cni_entity import NscCniEntity
    from cloudflarezerotrust_sdk.entity.nsc_default_name_entity import NscDefaultNameEntity
    from cloudflarezerotrust_sdk.entity.nsc_interconnect_entity import NscInterconnectEntity
    from cloudflarezerotrust_sdk.entity.nsc_setting_entity import NscSettingEntity
    from cloudflarezerotrust_sdk.entity.nsc_slot_info_entity import NscSlotInfoEntity
    from cloudflarezerotrust_sdk.entity.nsc_status_info_entity import NscStatusInfoEntity
    from cloudflarezerotrust_sdk.entity.override_code_entity import OverrideCodeEntity
    from cloudflarezerotrust_sdk.entity.pacfile_entity import PacfileEntity
    from cloudflarezerotrust_sdk.entity.physical_device_entity import PhysicalDeviceEntity
    from cloudflarezerotrust_sdk.entity.proxy_endpoint_entity import ProxyEndpointEntity
    from cloudflarezerotrust_sdk.entity.registration_entity import RegistrationEntity
    from cloudflarezerotrust_sdk.entity.rule_entity import RuleEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_api_response_single_entity import TeamsDevicesApiResponseSingleEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_components_schemas_response_collection_entity import TeamsDevicesComponentsSchemasResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_components_schemas_single_entity import TeamsDevicesComponentsSchemasSingleEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_default_device_setting_entity import TeamsDevicesDefaultDeviceSettingEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_device_entity import TeamsDevicesDeviceEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_device_setting_entity import TeamsDevicesDeviceSettingEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_device_settings_response_collection_entity import TeamsDevicesDeviceSettingsResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_fallback_domain_response_collection_entity import TeamsDevicesFallbackDomainResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_global_warp_override_entity import TeamsDevicesGlobalWarpOverrideEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_id_entity import TeamsDevicesIdEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_override_code_entity import TeamsDevicesOverrideCodeEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_response_collection_entity import TeamsDevicesResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_schemas_id_entity import TeamsDevicesSchemasIdEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_schemas_response_collection_entity import TeamsDevicesSchemasResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_schemas_single_entity import TeamsDevicesSchemasSingleEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_single_entity import TeamsDevicesSingleEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_split_tunnel_include_response_collection_entity import TeamsDevicesSplitTunnelIncludeResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_split_tunnel_response_collection_entity import TeamsDevicesSplitTunnelResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.teams_devices_zero_trust_account_device_setting_entity import TeamsDevicesZeroTrustAccountDeviceSettingEntity
    from cloudflarezerotrust_sdk.entity.tunnel_entity import TunnelEntity
    from cloudflarezerotrust_sdk.entity.tunnel_cfd_tunnel_response_collection_entity import TunnelCfdTunnelResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.tunnel_cfd_tunnel_response_single_entity import TunnelCfdTunnelResponseSingleEntity
    from cloudflarezerotrust_sdk.entity.tunnel_configuration_entity import TunnelConfigurationEntity
    from cloudflarezerotrust_sdk.entity.tunnel_empty_entity import TunnelEmptyEntity
    from cloudflarezerotrust_sdk.entity.tunnel_hostname_route_response_collection_entity import TunnelHostnameRouteResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.tunnel_hostname_route_response_single_entity import TunnelHostnameRouteResponseSingleEntity
    from cloudflarezerotrust_sdk.entity.tunnel_mesh_configuration_response_single_entity import TunnelMeshConfigurationResponseSingleEntity
    from cloudflarezerotrust_sdk.entity.tunnel_route_response_single_entity import TunnelRouteResponseSingleEntity
    from cloudflarezerotrust_sdk.entity.tunnel_subnet_response_collection_entity import TunnelSubnetResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.tunnel_subnet_response_single_entity import TunnelSubnetResponseSingleEntity
    from cloudflarezerotrust_sdk.entity.tunnel_subnet_response_single_nullable_entity import TunnelSubnetResponseSingleNullableEntity
    from cloudflarezerotrust_sdk.entity.tunnel_teamnet_response_collection_entity import TunnelTeamnetResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.tunnel_teamnet_response_single_entity import TunnelTeamnetResponseSingleEntity
    from cloudflarezerotrust_sdk.entity.tunnel_tunnel_client_entity import TunnelTunnelClientEntity
    from cloudflarezerotrust_sdk.entity.tunnel_tunnel_connection_entity import TunnelTunnelConnectionEntity
    from cloudflarezerotrust_sdk.entity.tunnel_tunnel_response_token_entity import TunnelTunnelResponseTokenEntity
    from cloudflarezerotrust_sdk.entity.tunnel_tunnel_warp_connector_client_entity import TunnelTunnelWarpConnectorClientEntity
    from cloudflarezerotrust_sdk.entity.tunnel_tunnel_warp_connector_connection_entity import TunnelTunnelWarpConnectorConnectionEntity
    from cloudflarezerotrust_sdk.entity.tunnel_vnet_response_collection_entity import TunnelVnetResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.tunnel_vnet_response_single_entity import TunnelVnetResponseSingleEntity
    from cloudflarezerotrust_sdk.entity.tunnel_warp_connector_response_collection_entity import TunnelWarpConnectorResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.tunnel_warp_connector_response_single_entity import TunnelWarpConnectorResponseSingleEntity
    from cloudflarezerotrust_sdk.entity.tunnel_zero_trust_connectivity_setting_entity import TunnelZeroTrustConnectivitySettingEntity
    from cloudflarezerotrust_sdk.entity.warp_entity import WarpEntity
    from cloudflarezerotrust_sdk.entity.warp_change_event_entity import WarpChangeEventEntity
    from cloudflarezerotrust_sdk.entity.warp_teams_device_api_other_entity import WarpTeamsDeviceApiOtherEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_applications_review_status_entity import ZeroTrustGatewayApplicationsReviewStatusEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_csv_operation_single_entity import ZeroTrustGatewayCsvOperationSingleEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_custom_certificate_setting_entity import ZeroTrustGatewayCustomCertificateSettingEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_gateway_account_entity import ZeroTrustGatewayGatewayAccountEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_gateway_account_config_entity import ZeroTrustGatewayGatewayAccountConfigEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_gateway_account_egress_cidr_pair_list_entity import ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_gateway_account_logging_setting_entity import ZeroTrustGatewayGatewayAccountLoggingSettingEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_list_item_response_collection_entity import ZeroTrustGatewayListItemResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_list_single_entity import ZeroTrustGatewayListSingleEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_entity import ZeroTrustGatewayResponseCollectionEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_10_entity import ZeroTrustGatewayResponseCollection10Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_2_entity import ZeroTrustGatewayResponseCollection2Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_3_entity import ZeroTrustGatewayResponseCollection3Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_4_entity import ZeroTrustGatewayResponseCollection4Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_5_entity import ZeroTrustGatewayResponseCollection5Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_6_entity import ZeroTrustGatewayResponseCollection6Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_7_entity import ZeroTrustGatewayResponseCollection7Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_8_entity import ZeroTrustGatewayResponseCollection8Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_response_collection_9_entity import ZeroTrustGatewayResponseCollection9Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_entity import ZeroTrustGatewaySingleEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_2_entity import ZeroTrustGatewaySingleResponse2Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_3_entity import ZeroTrustGatewaySingleResponse3Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_4_entity import ZeroTrustGatewaySingleResponse4Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_5_entity import ZeroTrustGatewaySingleResponse5Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_6_entity import ZeroTrustGatewaySingleResponse6Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_7_entity import ZeroTrustGatewaySingleResponse7Entity
    from cloudflarezerotrust_sdk.entity.zero_trust_gateway_single_response_with_list_item_entity import ZeroTrustGatewaySingleResponseWithListItemEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_risk_scoring_entity import ZeroTrustRiskScoringEntity
    from cloudflarezerotrust_sdk.entity.zero_trust_risk_scoring_integration_entity import ZeroTrustRiskScoringIntegrationEntity
