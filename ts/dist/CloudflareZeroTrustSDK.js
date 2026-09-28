"use strict";
// CloudflareZeroTrust Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.CloudflareZeroTrustSDK = exports.CloudflareZeroTrustEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AlexandriaDeleteApplicationEntity_1 = require("./entity/AlexandriaDeleteApplicationEntity");
const AlexandriaGetApplicationEntity_1 = require("./entity/AlexandriaGetApplicationEntity");
const AlexandriaGetCategoryEntity_1 = require("./entity/AlexandriaGetCategoryEntity");
const ClientVersionEntity_1 = require("./entity/ClientVersionEntity");
const CniEntity_1 = require("./entity/CniEntity");
const DeploymentGroupEntity_1 = require("./entity/DeploymentGroupEntity");
const DexRemoteCommandEntity_1 = require("./entity/DexRemoteCommandEntity");
const DexRuleEntity_1 = require("./entity/DexRuleEntity");
const DexSyntheticApplicationMonitoringEntity_1 = require("./entity/DexSyntheticApplicationMonitoringEntity");
const DigitalExperienceMonitoringDeviceEntity_1 = require("./entity/DigitalExperienceMonitoringDeviceEntity");
const DigitalExperienceMonitoringDexDeleteResponseCollectionEntity_1 = require("./entity/DigitalExperienceMonitoringDexDeleteResponseCollectionEntity");
const DigitalExperienceMonitoringDexResponseCollectionEntity_1 = require("./entity/DigitalExperienceMonitoringDexResponseCollectionEntity");
const DigitalExperienceMonitoringDexSingleEntity_1 = require("./entity/DigitalExperienceMonitoringDexSingleEntity");
const DigitalExperienceMonitoringFleetStatusDeviceEntity_1 = require("./entity/DigitalExperienceMonitoringFleetStatusDeviceEntity");
const DigitalExperienceMonitoringFleetStatusLiveEntity_1 = require("./entity/DigitalExperienceMonitoringFleetStatusLiveEntity");
const DigitalExperienceMonitoringFleetStatusOverTimeEntity_1 = require("./entity/DigitalExperienceMonitoringFleetStatusOverTimeEntity");
const IntegrationEntity_1 = require("./entity/IntegrationEntity");
const InterconnectEntity_1 = require("./entity/InterconnectEntity");
const IpProfileEntity_1 = require("./entity/IpProfileEntity");
const ListEntity_1 = require("./entity/ListEntity");
const LocationEntity_1 = require("./entity/LocationEntity");
const NscCniEntity_1 = require("./entity/NscCniEntity");
const NscDefaultNameEntity_1 = require("./entity/NscDefaultNameEntity");
const NscInterconnectEntity_1 = require("./entity/NscInterconnectEntity");
const NscSettingEntity_1 = require("./entity/NscSettingEntity");
const NscSlotInfoEntity_1 = require("./entity/NscSlotInfoEntity");
const NscStatusInfoEntity_1 = require("./entity/NscStatusInfoEntity");
const OneApplicationDetailEntity_1 = require("./entity/OneApplicationDetailEntity");
const OneIntegrationCreateEntity_1 = require("./entity/OneIntegrationCreateEntity");
const OneIntegrationDetailEntity_1 = require("./entity/OneIntegrationDetailEntity");
const OneIntegrationPauseEntity_1 = require("./entity/OneIntegrationPauseEntity");
const OneIntegrationResumeEntity_1 = require("./entity/OneIntegrationResumeEntity");
const OneIntegrationUpdateEntity_1 = require("./entity/OneIntegrationUpdateEntity");
const OnePaginatedApplicationListListEntity_1 = require("./entity/OnePaginatedApplicationListListEntity");
const OnePaginatedAuthMethodDetailListEntity_1 = require("./entity/OnePaginatedAuthMethodDetailListEntity");
const OnePaginatedIntegrationV2ListItemListEntity_1 = require("./entity/OnePaginatedIntegrationV2ListItemListEntity");
const OnePaginatedSetupFlowListEntity_1 = require("./entity/OnePaginatedSetupFlowListEntity");
const OverrideCodeEntity_1 = require("./entity/OverrideCodeEntity");
const PacfileEntity_1 = require("./entity/PacfileEntity");
const PhysicalDeviceEntity_1 = require("./entity/PhysicalDeviceEntity");
const ProxyEndpointEntity_1 = require("./entity/ProxyEndpointEntity");
const RegistrationEntity_1 = require("./entity/RegistrationEntity");
const RuleEntity_1 = require("./entity/RuleEntity");
const TeamsDevicesApiResponseSingleEntity_1 = require("./entity/TeamsDevicesApiResponseSingleEntity");
const TeamsDevicesComponentsSchemasResponseCollectionEntity_1 = require("./entity/TeamsDevicesComponentsSchemasResponseCollectionEntity");
const TeamsDevicesComponentsSchemasSingleEntity_1 = require("./entity/TeamsDevicesComponentsSchemasSingleEntity");
const TeamsDevicesDefaultDeviceSettingEntity_1 = require("./entity/TeamsDevicesDefaultDeviceSettingEntity");
const TeamsDevicesDeviceEntity_1 = require("./entity/TeamsDevicesDeviceEntity");
const TeamsDevicesDeviceSettingEntity_1 = require("./entity/TeamsDevicesDeviceSettingEntity");
const TeamsDevicesDeviceSettingsResponseCollectionEntity_1 = require("./entity/TeamsDevicesDeviceSettingsResponseCollectionEntity");
const TeamsDevicesDevicesPolicyCertificatesSingleEntity_1 = require("./entity/TeamsDevicesDevicesPolicyCertificatesSingleEntity");
const TeamsDevicesFallbackDomainResponseCollectionEntity_1 = require("./entity/TeamsDevicesFallbackDomainResponseCollectionEntity");
const TeamsDevicesGlobalWarpOverrideEntity_1 = require("./entity/TeamsDevicesGlobalWarpOverrideEntity");
const TeamsDevicesIdEntity_1 = require("./entity/TeamsDevicesIdEntity");
const TeamsDevicesOverrideCodeEntity_1 = require("./entity/TeamsDevicesOverrideCodeEntity");
const TeamsDevicesResponseCollectionEntity_1 = require("./entity/TeamsDevicesResponseCollectionEntity");
const TeamsDevicesSchemasIdEntity_1 = require("./entity/TeamsDevicesSchemasIdEntity");
const TeamsDevicesSchemasResponseCollectionEntity_1 = require("./entity/TeamsDevicesSchemasResponseCollectionEntity");
const TeamsDevicesSchemasSingleEntity_1 = require("./entity/TeamsDevicesSchemasSingleEntity");
const TeamsDevicesSingleEntity_1 = require("./entity/TeamsDevicesSingleEntity");
const TeamsDevicesSplitTunnelIncludeResponseCollectionEntity_1 = require("./entity/TeamsDevicesSplitTunnelIncludeResponseCollectionEntity");
const TeamsDevicesSplitTunnelResponseCollectionEntity_1 = require("./entity/TeamsDevicesSplitTunnelResponseCollectionEntity");
const TeamsDevicesZeroTrustAccountDeviceSettingEntity_1 = require("./entity/TeamsDevicesZeroTrustAccountDeviceSettingEntity");
const TunnelEntity_1 = require("./entity/TunnelEntity");
const TunnelCfdTunnelResponseCollectionEntity_1 = require("./entity/TunnelCfdTunnelResponseCollectionEntity");
const TunnelCfdTunnelResponseSingleEntity_1 = require("./entity/TunnelCfdTunnelResponseSingleEntity");
const TunnelConfigurationEntity_1 = require("./entity/TunnelConfigurationEntity");
const TunnelEmptyEntity_1 = require("./entity/TunnelEmptyEntity");
const TunnelHostnameRouteResponseCollectionEntity_1 = require("./entity/TunnelHostnameRouteResponseCollectionEntity");
const TunnelHostnameRouteResponseSingleEntity_1 = require("./entity/TunnelHostnameRouteResponseSingleEntity");
const TunnelMeshConfigurationResponseSingleEntity_1 = require("./entity/TunnelMeshConfigurationResponseSingleEntity");
const TunnelRouteResponseSingleEntity_1 = require("./entity/TunnelRouteResponseSingleEntity");
const TunnelSubnetResponseCollectionEntity_1 = require("./entity/TunnelSubnetResponseCollectionEntity");
const TunnelSubnetResponseSingleEntity_1 = require("./entity/TunnelSubnetResponseSingleEntity");
const TunnelSubnetResponseSingleNullableEntity_1 = require("./entity/TunnelSubnetResponseSingleNullableEntity");
const TunnelTeamnetResponseCollectionEntity_1 = require("./entity/TunnelTeamnetResponseCollectionEntity");
const TunnelTeamnetResponseSingleEntity_1 = require("./entity/TunnelTeamnetResponseSingleEntity");
const TunnelTunnelClientEntity_1 = require("./entity/TunnelTunnelClientEntity");
const TunnelTunnelConnectionEntity_1 = require("./entity/TunnelTunnelConnectionEntity");
const TunnelTunnelResponseTokenEntity_1 = require("./entity/TunnelTunnelResponseTokenEntity");
const TunnelTunnelWarpConnectorClientEntity_1 = require("./entity/TunnelTunnelWarpConnectorClientEntity");
const TunnelTunnelWarpConnectorConnectionEntity_1 = require("./entity/TunnelTunnelWarpConnectorConnectionEntity");
const TunnelVnetResponseCollectionEntity_1 = require("./entity/TunnelVnetResponseCollectionEntity");
const TunnelVnetResponseSingleEntity_1 = require("./entity/TunnelVnetResponseSingleEntity");
const TunnelWarpConnectorResponseCollectionEntity_1 = require("./entity/TunnelWarpConnectorResponseCollectionEntity");
const TunnelWarpConnectorResponseSingleEntity_1 = require("./entity/TunnelWarpConnectorResponseSingleEntity");
const TunnelZeroTrustConnectivitySettingEntity_1 = require("./entity/TunnelZeroTrustConnectivitySettingEntity");
const WarpEntity_1 = require("./entity/WarpEntity");
const WarpChangeEventEntity_1 = require("./entity/WarpChangeEventEntity");
const WarpTeamsDeviceApiOtherEntity_1 = require("./entity/WarpTeamsDeviceApiOtherEntity");
const ZeroTrustGatewayApplicationsReviewStatusEntity_1 = require("./entity/ZeroTrustGatewayApplicationsReviewStatusEntity");
const ZeroTrustGatewayCsvOperationSingleEntity_1 = require("./entity/ZeroTrustGatewayCsvOperationSingleEntity");
const ZeroTrustGatewayCustomCertificateSettingEntity_1 = require("./entity/ZeroTrustGatewayCustomCertificateSettingEntity");
const ZeroTrustGatewayGatewayAccountEntity_1 = require("./entity/ZeroTrustGatewayGatewayAccountEntity");
const ZeroTrustGatewayGatewayAccountConfigEntity_1 = require("./entity/ZeroTrustGatewayGatewayAccountConfigEntity");
const ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity_1 = require("./entity/ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity");
const ZeroTrustGatewayGatewayAccountLoggingSettingEntity_1 = require("./entity/ZeroTrustGatewayGatewayAccountLoggingSettingEntity");
const ZeroTrustGatewayListItemResponseCollectionEntity_1 = require("./entity/ZeroTrustGatewayListItemResponseCollectionEntity");
const ZeroTrustGatewayListSingleEntity_1 = require("./entity/ZeroTrustGatewayListSingleEntity");
const ZeroTrustGatewayResponseCollectionEntity_1 = require("./entity/ZeroTrustGatewayResponseCollectionEntity");
const ZeroTrustGatewayResponseCollection10Entity_1 = require("./entity/ZeroTrustGatewayResponseCollection10Entity");
const ZeroTrustGatewayResponseCollection2Entity_1 = require("./entity/ZeroTrustGatewayResponseCollection2Entity");
const ZeroTrustGatewayResponseCollection3Entity_1 = require("./entity/ZeroTrustGatewayResponseCollection3Entity");
const ZeroTrustGatewayResponseCollection4Entity_1 = require("./entity/ZeroTrustGatewayResponseCollection4Entity");
const ZeroTrustGatewayResponseCollection5Entity_1 = require("./entity/ZeroTrustGatewayResponseCollection5Entity");
const ZeroTrustGatewayResponseCollection6Entity_1 = require("./entity/ZeroTrustGatewayResponseCollection6Entity");
const ZeroTrustGatewayResponseCollection7Entity_1 = require("./entity/ZeroTrustGatewayResponseCollection7Entity");
const ZeroTrustGatewayResponseCollection8Entity_1 = require("./entity/ZeroTrustGatewayResponseCollection8Entity");
const ZeroTrustGatewayResponseCollection9Entity_1 = require("./entity/ZeroTrustGatewayResponseCollection9Entity");
const ZeroTrustGatewaySingleEntity_1 = require("./entity/ZeroTrustGatewaySingleEntity");
const ZeroTrustGatewaySingleResponse2Entity_1 = require("./entity/ZeroTrustGatewaySingleResponse2Entity");
const ZeroTrustGatewaySingleResponse3Entity_1 = require("./entity/ZeroTrustGatewaySingleResponse3Entity");
const ZeroTrustGatewaySingleResponse4Entity_1 = require("./entity/ZeroTrustGatewaySingleResponse4Entity");
const ZeroTrustGatewaySingleResponse5Entity_1 = require("./entity/ZeroTrustGatewaySingleResponse5Entity");
const ZeroTrustGatewaySingleResponse6Entity_1 = require("./entity/ZeroTrustGatewaySingleResponse6Entity");
const ZeroTrustGatewaySingleResponse7Entity_1 = require("./entity/ZeroTrustGatewaySingleResponse7Entity");
const ZeroTrustGatewaySingleResponseWithListItemEntity_1 = require("./entity/ZeroTrustGatewaySingleResponseWithListItemEntity");
const ZeroTrustRiskScoringEntity_1 = require("./entity/ZeroTrustRiskScoringEntity");
const ZeroTrustRiskScoringIntegrationEntity_1 = require("./entity/ZeroTrustRiskScoringIntegrationEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const CloudflareZeroTrustEntityBase_1 = require("./CloudflareZeroTrustEntityBase");
Object.defineProperty(exports, "CloudflareZeroTrustEntityBase", { enumerable: true, get: function () { return CloudflareZeroTrustEntityBase_1.CloudflareZeroTrustEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class CloudflareZeroTrustSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('CloudflareZeroTrustSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('CloudflareZeroTrustSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('CloudflareZeroTrustSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.AlexandriaDeleteApplication().list()` / `client.AlexandriaDeleteApplication().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AlexandriaDeleteApplication(entopts) {
        const self = this;
        return new AlexandriaDeleteApplicationEntity_1.AlexandriaDeleteApplicationEntity(self, entopts);
    }
    // Entity access: `client.AlexandriaGetApplication().list()` / `client.AlexandriaGetApplication().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AlexandriaGetApplication(entopts) {
        const self = this;
        return new AlexandriaGetApplicationEntity_1.AlexandriaGetApplicationEntity(self, entopts);
    }
    // Entity access: `client.AlexandriaGetCategory().list()` / `client.AlexandriaGetCategory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AlexandriaGetCategory(entopts) {
        const self = this;
        return new AlexandriaGetCategoryEntity_1.AlexandriaGetCategoryEntity(self, entopts);
    }
    // Entity access: `client.ClientVersion().list()` / `client.ClientVersion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ClientVersion(entopts) {
        const self = this;
        return new ClientVersionEntity_1.ClientVersionEntity(self, entopts);
    }
    // Entity access: `client.Cni().list()` / `client.Cni().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Cni(entopts) {
        const self = this;
        return new CniEntity_1.CniEntity(self, entopts);
    }
    // Entity access: `client.DeploymentGroup().list()` / `client.DeploymentGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeploymentGroup(entopts) {
        const self = this;
        return new DeploymentGroupEntity_1.DeploymentGroupEntity(self, entopts);
    }
    // Entity access: `client.DexRemoteCommand().list()` / `client.DexRemoteCommand().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DexRemoteCommand(entopts) {
        const self = this;
        return new DexRemoteCommandEntity_1.DexRemoteCommandEntity(self, entopts);
    }
    // Entity access: `client.DexRule().list()` / `client.DexRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DexRule(entopts) {
        const self = this;
        return new DexRuleEntity_1.DexRuleEntity(self, entopts);
    }
    // Entity access: `client.DexSyntheticApplicationMonitoring().list()` / `client.DexSyntheticApplicationMonitoring().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DexSyntheticApplicationMonitoring(entopts) {
        const self = this;
        return new DexSyntheticApplicationMonitoringEntity_1.DexSyntheticApplicationMonitoringEntity(self, entopts);
    }
    // Entity access: `client.DigitalExperienceMonitoringDevice().list()` / `client.DigitalExperienceMonitoringDevice().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DigitalExperienceMonitoringDevice(entopts) {
        const self = this;
        return new DigitalExperienceMonitoringDeviceEntity_1.DigitalExperienceMonitoringDeviceEntity(self, entopts);
    }
    // Entity access: `client.DigitalExperienceMonitoringDexDeleteResponseCollection().list()` / `client.DigitalExperienceMonitoringDexDeleteResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DigitalExperienceMonitoringDexDeleteResponseCollection(entopts) {
        const self = this;
        return new DigitalExperienceMonitoringDexDeleteResponseCollectionEntity_1.DigitalExperienceMonitoringDexDeleteResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.DigitalExperienceMonitoringDexResponseCollection().list()` / `client.DigitalExperienceMonitoringDexResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DigitalExperienceMonitoringDexResponseCollection(entopts) {
        const self = this;
        return new DigitalExperienceMonitoringDexResponseCollectionEntity_1.DigitalExperienceMonitoringDexResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.DigitalExperienceMonitoringDexSingle().list()` / `client.DigitalExperienceMonitoringDexSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DigitalExperienceMonitoringDexSingle(entopts) {
        const self = this;
        return new DigitalExperienceMonitoringDexSingleEntity_1.DigitalExperienceMonitoringDexSingleEntity(self, entopts);
    }
    // Entity access: `client.DigitalExperienceMonitoringFleetStatusDevice().list()` / `client.DigitalExperienceMonitoringFleetStatusDevice().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DigitalExperienceMonitoringFleetStatusDevice(entopts) {
        const self = this;
        return new DigitalExperienceMonitoringFleetStatusDeviceEntity_1.DigitalExperienceMonitoringFleetStatusDeviceEntity(self, entopts);
    }
    // Entity access: `client.DigitalExperienceMonitoringFleetStatusLive().list()` / `client.DigitalExperienceMonitoringFleetStatusLive().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DigitalExperienceMonitoringFleetStatusLive(entopts) {
        const self = this;
        return new DigitalExperienceMonitoringFleetStatusLiveEntity_1.DigitalExperienceMonitoringFleetStatusLiveEntity(self, entopts);
    }
    // Entity access: `client.DigitalExperienceMonitoringFleetStatusOverTime().list()` / `client.DigitalExperienceMonitoringFleetStatusOverTime().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DigitalExperienceMonitoringFleetStatusOverTime(entopts) {
        const self = this;
        return new DigitalExperienceMonitoringFleetStatusOverTimeEntity_1.DigitalExperienceMonitoringFleetStatusOverTimeEntity(self, entopts);
    }
    // Entity access: `client.Integration().list()` / `client.Integration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Integration(entopts) {
        const self = this;
        return new IntegrationEntity_1.IntegrationEntity(self, entopts);
    }
    // Entity access: `client.Interconnect().list()` / `client.Interconnect().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Interconnect(entopts) {
        const self = this;
        return new InterconnectEntity_1.InterconnectEntity(self, entopts);
    }
    // Entity access: `client.IpProfile().list()` / `client.IpProfile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IpProfile(entopts) {
        const self = this;
        return new IpProfileEntity_1.IpProfileEntity(self, entopts);
    }
    // Entity access: `client.List().list()` / `client.List().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    List(entopts) {
        const self = this;
        return new ListEntity_1.ListEntity(self, entopts);
    }
    // Entity access: `client.Location().list()` / `client.Location().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Location(entopts) {
        const self = this;
        return new LocationEntity_1.LocationEntity(self, entopts);
    }
    // Entity access: `client.NscCni().list()` / `client.NscCni().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NscCni(entopts) {
        const self = this;
        return new NscCniEntity_1.NscCniEntity(self, entopts);
    }
    // Entity access: `client.NscDefaultName().list()` / `client.NscDefaultName().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NscDefaultName(entopts) {
        const self = this;
        return new NscDefaultNameEntity_1.NscDefaultNameEntity(self, entopts);
    }
    // Entity access: `client.NscInterconnect().list()` / `client.NscInterconnect().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NscInterconnect(entopts) {
        const self = this;
        return new NscInterconnectEntity_1.NscInterconnectEntity(self, entopts);
    }
    // Entity access: `client.NscSetting().list()` / `client.NscSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NscSetting(entopts) {
        const self = this;
        return new NscSettingEntity_1.NscSettingEntity(self, entopts);
    }
    // Entity access: `client.NscSlotInfo().list()` / `client.NscSlotInfo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NscSlotInfo(entopts) {
        const self = this;
        return new NscSlotInfoEntity_1.NscSlotInfoEntity(self, entopts);
    }
    // Entity access: `client.NscStatusInfo().list()` / `client.NscStatusInfo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NscStatusInfo(entopts) {
        const self = this;
        return new NscStatusInfoEntity_1.NscStatusInfoEntity(self, entopts);
    }
    // Entity access: `client.OneApplicationDetail().list()` / `client.OneApplicationDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OneApplicationDetail(entopts) {
        const self = this;
        return new OneApplicationDetailEntity_1.OneApplicationDetailEntity(self, entopts);
    }
    // Entity access: `client.OneIntegrationCreate().list()` / `client.OneIntegrationCreate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OneIntegrationCreate(entopts) {
        const self = this;
        return new OneIntegrationCreateEntity_1.OneIntegrationCreateEntity(self, entopts);
    }
    // Entity access: `client.OneIntegrationDetail().list()` / `client.OneIntegrationDetail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OneIntegrationDetail(entopts) {
        const self = this;
        return new OneIntegrationDetailEntity_1.OneIntegrationDetailEntity(self, entopts);
    }
    // Entity access: `client.OneIntegrationPause().list()` / `client.OneIntegrationPause().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OneIntegrationPause(entopts) {
        const self = this;
        return new OneIntegrationPauseEntity_1.OneIntegrationPauseEntity(self, entopts);
    }
    // Entity access: `client.OneIntegrationResume().list()` / `client.OneIntegrationResume().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OneIntegrationResume(entopts) {
        const self = this;
        return new OneIntegrationResumeEntity_1.OneIntegrationResumeEntity(self, entopts);
    }
    // Entity access: `client.OneIntegrationUpdate().list()` / `client.OneIntegrationUpdate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OneIntegrationUpdate(entopts) {
        const self = this;
        return new OneIntegrationUpdateEntity_1.OneIntegrationUpdateEntity(self, entopts);
    }
    // Entity access: `client.OnePaginatedApplicationListList().list()` / `client.OnePaginatedApplicationListList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OnePaginatedApplicationListList(entopts) {
        const self = this;
        return new OnePaginatedApplicationListListEntity_1.OnePaginatedApplicationListListEntity(self, entopts);
    }
    // Entity access: `client.OnePaginatedAuthMethodDetailList().list()` / `client.OnePaginatedAuthMethodDetailList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OnePaginatedAuthMethodDetailList(entopts) {
        const self = this;
        return new OnePaginatedAuthMethodDetailListEntity_1.OnePaginatedAuthMethodDetailListEntity(self, entopts);
    }
    // Entity access: `client.OnePaginatedIntegrationV2ListItemList().list()` / `client.OnePaginatedIntegrationV2ListItemList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OnePaginatedIntegrationV2ListItemList(entopts) {
        const self = this;
        return new OnePaginatedIntegrationV2ListItemListEntity_1.OnePaginatedIntegrationV2ListItemListEntity(self, entopts);
    }
    // Entity access: `client.OnePaginatedSetupFlowList().list()` / `client.OnePaginatedSetupFlowList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OnePaginatedSetupFlowList(entopts) {
        const self = this;
        return new OnePaginatedSetupFlowListEntity_1.OnePaginatedSetupFlowListEntity(self, entopts);
    }
    // Entity access: `client.OverrideCode().list()` / `client.OverrideCode().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OverrideCode(entopts) {
        const self = this;
        return new OverrideCodeEntity_1.OverrideCodeEntity(self, entopts);
    }
    // Entity access: `client.Pacfile().list()` / `client.Pacfile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Pacfile(entopts) {
        const self = this;
        return new PacfileEntity_1.PacfileEntity(self, entopts);
    }
    // Entity access: `client.PhysicalDevice().list()` / `client.PhysicalDevice().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PhysicalDevice(entopts) {
        const self = this;
        return new PhysicalDeviceEntity_1.PhysicalDeviceEntity(self, entopts);
    }
    // Entity access: `client.ProxyEndpoint().list()` / `client.ProxyEndpoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProxyEndpoint(entopts) {
        const self = this;
        return new ProxyEndpointEntity_1.ProxyEndpointEntity(self, entopts);
    }
    // Entity access: `client.Registration().list()` / `client.Registration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Registration(entopts) {
        const self = this;
        return new RegistrationEntity_1.RegistrationEntity(self, entopts);
    }
    // Entity access: `client.Rule().list()` / `client.Rule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Rule(entopts) {
        const self = this;
        return new RuleEntity_1.RuleEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesApiResponseSingle().list()` / `client.TeamsDevicesApiResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesApiResponseSingle(entopts) {
        const self = this;
        return new TeamsDevicesApiResponseSingleEntity_1.TeamsDevicesApiResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesComponentsSchemasResponseCollection().list()` / `client.TeamsDevicesComponentsSchemasResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesComponentsSchemasResponseCollection(entopts) {
        const self = this;
        return new TeamsDevicesComponentsSchemasResponseCollectionEntity_1.TeamsDevicesComponentsSchemasResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesComponentsSchemasSingle().list()` / `client.TeamsDevicesComponentsSchemasSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesComponentsSchemasSingle(entopts) {
        const self = this;
        return new TeamsDevicesComponentsSchemasSingleEntity_1.TeamsDevicesComponentsSchemasSingleEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesDefaultDeviceSetting().list()` / `client.TeamsDevicesDefaultDeviceSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesDefaultDeviceSetting(entopts) {
        const self = this;
        return new TeamsDevicesDefaultDeviceSettingEntity_1.TeamsDevicesDefaultDeviceSettingEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesDevice().list()` / `client.TeamsDevicesDevice().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesDevice(entopts) {
        const self = this;
        return new TeamsDevicesDeviceEntity_1.TeamsDevicesDeviceEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesDeviceSetting().list()` / `client.TeamsDevicesDeviceSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesDeviceSetting(entopts) {
        const self = this;
        return new TeamsDevicesDeviceSettingEntity_1.TeamsDevicesDeviceSettingEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesDeviceSettingsResponseCollection().list()` / `client.TeamsDevicesDeviceSettingsResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesDeviceSettingsResponseCollection(entopts) {
        const self = this;
        return new TeamsDevicesDeviceSettingsResponseCollectionEntity_1.TeamsDevicesDeviceSettingsResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesDevicesPolicyCertificatesSingle().list()` / `client.TeamsDevicesDevicesPolicyCertificatesSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesDevicesPolicyCertificatesSingle(entopts) {
        const self = this;
        return new TeamsDevicesDevicesPolicyCertificatesSingleEntity_1.TeamsDevicesDevicesPolicyCertificatesSingleEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesFallbackDomainResponseCollection().list()` / `client.TeamsDevicesFallbackDomainResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesFallbackDomainResponseCollection(entopts) {
        const self = this;
        return new TeamsDevicesFallbackDomainResponseCollectionEntity_1.TeamsDevicesFallbackDomainResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesGlobalWarpOverride().list()` / `client.TeamsDevicesGlobalWarpOverride().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesGlobalWarpOverride(entopts) {
        const self = this;
        return new TeamsDevicesGlobalWarpOverrideEntity_1.TeamsDevicesGlobalWarpOverrideEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesId().list()` / `client.TeamsDevicesId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesId(entopts) {
        const self = this;
        return new TeamsDevicesIdEntity_1.TeamsDevicesIdEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesOverrideCode().list()` / `client.TeamsDevicesOverrideCode().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesOverrideCode(entopts) {
        const self = this;
        return new TeamsDevicesOverrideCodeEntity_1.TeamsDevicesOverrideCodeEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesResponseCollection().list()` / `client.TeamsDevicesResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesResponseCollection(entopts) {
        const self = this;
        return new TeamsDevicesResponseCollectionEntity_1.TeamsDevicesResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesSchemasId().list()` / `client.TeamsDevicesSchemasId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesSchemasId(entopts) {
        const self = this;
        return new TeamsDevicesSchemasIdEntity_1.TeamsDevicesSchemasIdEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesSchemasResponseCollection().list()` / `client.TeamsDevicesSchemasResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesSchemasResponseCollection(entopts) {
        const self = this;
        return new TeamsDevicesSchemasResponseCollectionEntity_1.TeamsDevicesSchemasResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesSchemasSingle().list()` / `client.TeamsDevicesSchemasSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesSchemasSingle(entopts) {
        const self = this;
        return new TeamsDevicesSchemasSingleEntity_1.TeamsDevicesSchemasSingleEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesSingle().list()` / `client.TeamsDevicesSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesSingle(entopts) {
        const self = this;
        return new TeamsDevicesSingleEntity_1.TeamsDevicesSingleEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesSplitTunnelIncludeResponseCollection().list()` / `client.TeamsDevicesSplitTunnelIncludeResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesSplitTunnelIncludeResponseCollection(entopts) {
        const self = this;
        return new TeamsDevicesSplitTunnelIncludeResponseCollectionEntity_1.TeamsDevicesSplitTunnelIncludeResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesSplitTunnelResponseCollection().list()` / `client.TeamsDevicesSplitTunnelResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesSplitTunnelResponseCollection(entopts) {
        const self = this;
        return new TeamsDevicesSplitTunnelResponseCollectionEntity_1.TeamsDevicesSplitTunnelResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TeamsDevicesZeroTrustAccountDeviceSetting().list()` / `client.TeamsDevicesZeroTrustAccountDeviceSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamsDevicesZeroTrustAccountDeviceSetting(entopts) {
        const self = this;
        return new TeamsDevicesZeroTrustAccountDeviceSettingEntity_1.TeamsDevicesZeroTrustAccountDeviceSettingEntity(self, entopts);
    }
    // Entity access: `client.Tunnel().list()` / `client.Tunnel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Tunnel(entopts) {
        const self = this;
        return new TunnelEntity_1.TunnelEntity(self, entopts);
    }
    // Entity access: `client.TunnelCfdTunnelResponseCollection().list()` / `client.TunnelCfdTunnelResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelCfdTunnelResponseCollection(entopts) {
        const self = this;
        return new TunnelCfdTunnelResponseCollectionEntity_1.TunnelCfdTunnelResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TunnelCfdTunnelResponseSingle().list()` / `client.TunnelCfdTunnelResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelCfdTunnelResponseSingle(entopts) {
        const self = this;
        return new TunnelCfdTunnelResponseSingleEntity_1.TunnelCfdTunnelResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TunnelConfiguration().list()` / `client.TunnelConfiguration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelConfiguration(entopts) {
        const self = this;
        return new TunnelConfigurationEntity_1.TunnelConfigurationEntity(self, entopts);
    }
    // Entity access: `client.TunnelEmpty().list()` / `client.TunnelEmpty().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelEmpty(entopts) {
        const self = this;
        return new TunnelEmptyEntity_1.TunnelEmptyEntity(self, entopts);
    }
    // Entity access: `client.TunnelHostnameRouteResponseCollection().list()` / `client.TunnelHostnameRouteResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelHostnameRouteResponseCollection(entopts) {
        const self = this;
        return new TunnelHostnameRouteResponseCollectionEntity_1.TunnelHostnameRouteResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TunnelHostnameRouteResponseSingle().list()` / `client.TunnelHostnameRouteResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelHostnameRouteResponseSingle(entopts) {
        const self = this;
        return new TunnelHostnameRouteResponseSingleEntity_1.TunnelHostnameRouteResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TunnelMeshConfigurationResponseSingle().list()` / `client.TunnelMeshConfigurationResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelMeshConfigurationResponseSingle(entopts) {
        const self = this;
        return new TunnelMeshConfigurationResponseSingleEntity_1.TunnelMeshConfigurationResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TunnelRouteResponseSingle().list()` / `client.TunnelRouteResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelRouteResponseSingle(entopts) {
        const self = this;
        return new TunnelRouteResponseSingleEntity_1.TunnelRouteResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TunnelSubnetResponseCollection().list()` / `client.TunnelSubnetResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelSubnetResponseCollection(entopts) {
        const self = this;
        return new TunnelSubnetResponseCollectionEntity_1.TunnelSubnetResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TunnelSubnetResponseSingle().list()` / `client.TunnelSubnetResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelSubnetResponseSingle(entopts) {
        const self = this;
        return new TunnelSubnetResponseSingleEntity_1.TunnelSubnetResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TunnelSubnetResponseSingleNullable().list()` / `client.TunnelSubnetResponseSingleNullable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelSubnetResponseSingleNullable(entopts) {
        const self = this;
        return new TunnelSubnetResponseSingleNullableEntity_1.TunnelSubnetResponseSingleNullableEntity(self, entopts);
    }
    // Entity access: `client.TunnelTeamnetResponseCollection().list()` / `client.TunnelTeamnetResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelTeamnetResponseCollection(entopts) {
        const self = this;
        return new TunnelTeamnetResponseCollectionEntity_1.TunnelTeamnetResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TunnelTeamnetResponseSingle().list()` / `client.TunnelTeamnetResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelTeamnetResponseSingle(entopts) {
        const self = this;
        return new TunnelTeamnetResponseSingleEntity_1.TunnelTeamnetResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TunnelTunnelClient().list()` / `client.TunnelTunnelClient().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelTunnelClient(entopts) {
        const self = this;
        return new TunnelTunnelClientEntity_1.TunnelTunnelClientEntity(self, entopts);
    }
    // Entity access: `client.TunnelTunnelConnection().list()` / `client.TunnelTunnelConnection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelTunnelConnection(entopts) {
        const self = this;
        return new TunnelTunnelConnectionEntity_1.TunnelTunnelConnectionEntity(self, entopts);
    }
    // Entity access: `client.TunnelTunnelResponseToken().list()` / `client.TunnelTunnelResponseToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelTunnelResponseToken(entopts) {
        const self = this;
        return new TunnelTunnelResponseTokenEntity_1.TunnelTunnelResponseTokenEntity(self, entopts);
    }
    // Entity access: `client.TunnelTunnelWarpConnectorClient().list()` / `client.TunnelTunnelWarpConnectorClient().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelTunnelWarpConnectorClient(entopts) {
        const self = this;
        return new TunnelTunnelWarpConnectorClientEntity_1.TunnelTunnelWarpConnectorClientEntity(self, entopts);
    }
    // Entity access: `client.TunnelTunnelWarpConnectorConnection().list()` / `client.TunnelTunnelWarpConnectorConnection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelTunnelWarpConnectorConnection(entopts) {
        const self = this;
        return new TunnelTunnelWarpConnectorConnectionEntity_1.TunnelTunnelWarpConnectorConnectionEntity(self, entopts);
    }
    // Entity access: `client.TunnelVnetResponseCollection().list()` / `client.TunnelVnetResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelVnetResponseCollection(entopts) {
        const self = this;
        return new TunnelVnetResponseCollectionEntity_1.TunnelVnetResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TunnelVnetResponseSingle().list()` / `client.TunnelVnetResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelVnetResponseSingle(entopts) {
        const self = this;
        return new TunnelVnetResponseSingleEntity_1.TunnelVnetResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TunnelWarpConnectorResponseCollection().list()` / `client.TunnelWarpConnectorResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelWarpConnectorResponseCollection(entopts) {
        const self = this;
        return new TunnelWarpConnectorResponseCollectionEntity_1.TunnelWarpConnectorResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TunnelWarpConnectorResponseSingle().list()` / `client.TunnelWarpConnectorResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelWarpConnectorResponseSingle(entopts) {
        const self = this;
        return new TunnelWarpConnectorResponseSingleEntity_1.TunnelWarpConnectorResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TunnelZeroTrustConnectivitySetting().list()` / `client.TunnelZeroTrustConnectivitySetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TunnelZeroTrustConnectivitySetting(entopts) {
        const self = this;
        return new TunnelZeroTrustConnectivitySettingEntity_1.TunnelZeroTrustConnectivitySettingEntity(self, entopts);
    }
    // Entity access: `client.Warp().list()` / `client.Warp().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Warp(entopts) {
        const self = this;
        return new WarpEntity_1.WarpEntity(self, entopts);
    }
    // Entity access: `client.WarpChangeEvent().list()` / `client.WarpChangeEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WarpChangeEvent(entopts) {
        const self = this;
        return new WarpChangeEventEntity_1.WarpChangeEventEntity(self, entopts);
    }
    // Entity access: `client.WarpTeamsDeviceApiOther().list()` / `client.WarpTeamsDeviceApiOther().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WarpTeamsDeviceApiOther(entopts) {
        const self = this;
        return new WarpTeamsDeviceApiOtherEntity_1.WarpTeamsDeviceApiOtherEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayApplicationsReviewStatus().list()` / `client.ZeroTrustGatewayApplicationsReviewStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayApplicationsReviewStatus(entopts) {
        const self = this;
        return new ZeroTrustGatewayApplicationsReviewStatusEntity_1.ZeroTrustGatewayApplicationsReviewStatusEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayCsvOperationSingle().list()` / `client.ZeroTrustGatewayCsvOperationSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayCsvOperationSingle(entopts) {
        const self = this;
        return new ZeroTrustGatewayCsvOperationSingleEntity_1.ZeroTrustGatewayCsvOperationSingleEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayCustomCertificateSetting().list()` / `client.ZeroTrustGatewayCustomCertificateSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayCustomCertificateSetting(entopts) {
        const self = this;
        return new ZeroTrustGatewayCustomCertificateSettingEntity_1.ZeroTrustGatewayCustomCertificateSettingEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayGatewayAccount().list()` / `client.ZeroTrustGatewayGatewayAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayGatewayAccount(entopts) {
        const self = this;
        return new ZeroTrustGatewayGatewayAccountEntity_1.ZeroTrustGatewayGatewayAccountEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayGatewayAccountConfig().list()` / `client.ZeroTrustGatewayGatewayAccountConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayGatewayAccountConfig(entopts) {
        const self = this;
        return new ZeroTrustGatewayGatewayAccountConfigEntity_1.ZeroTrustGatewayGatewayAccountConfigEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayGatewayAccountEgressCidrPairList().list()` / `client.ZeroTrustGatewayGatewayAccountEgressCidrPairList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayGatewayAccountEgressCidrPairList(entopts) {
        const self = this;
        return new ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity_1.ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayGatewayAccountLoggingSetting().list()` / `client.ZeroTrustGatewayGatewayAccountLoggingSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayGatewayAccountLoggingSetting(entopts) {
        const self = this;
        return new ZeroTrustGatewayGatewayAccountLoggingSettingEntity_1.ZeroTrustGatewayGatewayAccountLoggingSettingEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayListItemResponseCollection().list()` / `client.ZeroTrustGatewayListItemResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayListItemResponseCollection(entopts) {
        const self = this;
        return new ZeroTrustGatewayListItemResponseCollectionEntity_1.ZeroTrustGatewayListItemResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayListSingle().list()` / `client.ZeroTrustGatewayListSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayListSingle(entopts) {
        const self = this;
        return new ZeroTrustGatewayListSingleEntity_1.ZeroTrustGatewayListSingleEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayResponseCollection().list()` / `client.ZeroTrustGatewayResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayResponseCollection(entopts) {
        const self = this;
        return new ZeroTrustGatewayResponseCollectionEntity_1.ZeroTrustGatewayResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayResponseCollection10().list()` / `client.ZeroTrustGatewayResponseCollection10().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayResponseCollection10(entopts) {
        const self = this;
        return new ZeroTrustGatewayResponseCollection10Entity_1.ZeroTrustGatewayResponseCollection10Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayResponseCollection2().list()` / `client.ZeroTrustGatewayResponseCollection2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayResponseCollection2(entopts) {
        const self = this;
        return new ZeroTrustGatewayResponseCollection2Entity_1.ZeroTrustGatewayResponseCollection2Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayResponseCollection3().list()` / `client.ZeroTrustGatewayResponseCollection3().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayResponseCollection3(entopts) {
        const self = this;
        return new ZeroTrustGatewayResponseCollection3Entity_1.ZeroTrustGatewayResponseCollection3Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayResponseCollection4().list()` / `client.ZeroTrustGatewayResponseCollection4().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayResponseCollection4(entopts) {
        const self = this;
        return new ZeroTrustGatewayResponseCollection4Entity_1.ZeroTrustGatewayResponseCollection4Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayResponseCollection5().list()` / `client.ZeroTrustGatewayResponseCollection5().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayResponseCollection5(entopts) {
        const self = this;
        return new ZeroTrustGatewayResponseCollection5Entity_1.ZeroTrustGatewayResponseCollection5Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayResponseCollection6().list()` / `client.ZeroTrustGatewayResponseCollection6().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayResponseCollection6(entopts) {
        const self = this;
        return new ZeroTrustGatewayResponseCollection6Entity_1.ZeroTrustGatewayResponseCollection6Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayResponseCollection7().list()` / `client.ZeroTrustGatewayResponseCollection7().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayResponseCollection7(entopts) {
        const self = this;
        return new ZeroTrustGatewayResponseCollection7Entity_1.ZeroTrustGatewayResponseCollection7Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayResponseCollection8().list()` / `client.ZeroTrustGatewayResponseCollection8().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayResponseCollection8(entopts) {
        const self = this;
        return new ZeroTrustGatewayResponseCollection8Entity_1.ZeroTrustGatewayResponseCollection8Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewayResponseCollection9().list()` / `client.ZeroTrustGatewayResponseCollection9().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewayResponseCollection9(entopts) {
        const self = this;
        return new ZeroTrustGatewayResponseCollection9Entity_1.ZeroTrustGatewayResponseCollection9Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewaySingle().list()` / `client.ZeroTrustGatewaySingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewaySingle(entopts) {
        const self = this;
        return new ZeroTrustGatewaySingleEntity_1.ZeroTrustGatewaySingleEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewaySingleResponse2().list()` / `client.ZeroTrustGatewaySingleResponse2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewaySingleResponse2(entopts) {
        const self = this;
        return new ZeroTrustGatewaySingleResponse2Entity_1.ZeroTrustGatewaySingleResponse2Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewaySingleResponse3().list()` / `client.ZeroTrustGatewaySingleResponse3().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewaySingleResponse3(entopts) {
        const self = this;
        return new ZeroTrustGatewaySingleResponse3Entity_1.ZeroTrustGatewaySingleResponse3Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewaySingleResponse4().list()` / `client.ZeroTrustGatewaySingleResponse4().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewaySingleResponse4(entopts) {
        const self = this;
        return new ZeroTrustGatewaySingleResponse4Entity_1.ZeroTrustGatewaySingleResponse4Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewaySingleResponse5().list()` / `client.ZeroTrustGatewaySingleResponse5().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewaySingleResponse5(entopts) {
        const self = this;
        return new ZeroTrustGatewaySingleResponse5Entity_1.ZeroTrustGatewaySingleResponse5Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewaySingleResponse6().list()` / `client.ZeroTrustGatewaySingleResponse6().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewaySingleResponse6(entopts) {
        const self = this;
        return new ZeroTrustGatewaySingleResponse6Entity_1.ZeroTrustGatewaySingleResponse6Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewaySingleResponse7().list()` / `client.ZeroTrustGatewaySingleResponse7().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewaySingleResponse7(entopts) {
        const self = this;
        return new ZeroTrustGatewaySingleResponse7Entity_1.ZeroTrustGatewaySingleResponse7Entity(self, entopts);
    }
    // Entity access: `client.ZeroTrustGatewaySingleResponseWithListItem().list()` / `client.ZeroTrustGatewaySingleResponseWithListItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustGatewaySingleResponseWithListItem(entopts) {
        const self = this;
        return new ZeroTrustGatewaySingleResponseWithListItemEntity_1.ZeroTrustGatewaySingleResponseWithListItemEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustRiskScoring().list()` / `client.ZeroTrustRiskScoring().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustRiskScoring(entopts) {
        const self = this;
        return new ZeroTrustRiskScoringEntity_1.ZeroTrustRiskScoringEntity(self, entopts);
    }
    // Entity access: `client.ZeroTrustRiskScoringIntegration().list()` / `client.ZeroTrustRiskScoringIntegration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZeroTrustRiskScoringIntegration(entopts) {
        const self = this;
        return new ZeroTrustRiskScoringIntegrationEntity_1.ZeroTrustRiskScoringIntegrationEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new CloudflareZeroTrustSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return CloudflareZeroTrustSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'CloudflareZeroTrust' };
    }
    toString() {
        return 'CloudflareZeroTrust ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.CloudflareZeroTrustSDK = CloudflareZeroTrustSDK;
const SDK = CloudflareZeroTrustSDK;
exports.SDK = SDK;
//# sourceMappingURL=CloudflareZeroTrustSDK.js.map