// CloudflareZeroTrust Ts SDK

import { ClientVersionEntity } from './entity/ClientVersionEntity'
import { CniEntity } from './entity/CniEntity'
import { DeploymentGroupEntity } from './entity/DeploymentGroupEntity'
import { DexRemoteCommandEntity } from './entity/DexRemoteCommandEntity'
import { DexRuleEntity } from './entity/DexRuleEntity'
import { DexSyntheticApplicationMonitoringEntity } from './entity/DexSyntheticApplicationMonitoringEntity'
import { DigitalExperienceMonitoringDeviceEntity } from './entity/DigitalExperienceMonitoringDeviceEntity'
import { DigitalExperienceMonitoringDexDeleteResponseCollectionEntity } from './entity/DigitalExperienceMonitoringDexDeleteResponseCollectionEntity'
import { DigitalExperienceMonitoringDexResponseCollectionEntity } from './entity/DigitalExperienceMonitoringDexResponseCollectionEntity'
import { DigitalExperienceMonitoringDexSingleEntity } from './entity/DigitalExperienceMonitoringDexSingleEntity'
import { DigitalExperienceMonitoringFleetStatusDeviceEntity } from './entity/DigitalExperienceMonitoringFleetStatusDeviceEntity'
import { DigitalExperienceMonitoringFleetStatusLiveEntity } from './entity/DigitalExperienceMonitoringFleetStatusLiveEntity'
import { DigitalExperienceMonitoringFleetStatusOverTimeEntity } from './entity/DigitalExperienceMonitoringFleetStatusOverTimeEntity'
import { InterconnectEntity } from './entity/InterconnectEntity'
import { IpProfileEntity } from './entity/IpProfileEntity'
import { ListEntity } from './entity/ListEntity'
import { LocationEntity } from './entity/LocationEntity'
import { NscCniEntity } from './entity/NscCniEntity'
import { NscDefaultNameEntity } from './entity/NscDefaultNameEntity'
import { NscInterconnectEntity } from './entity/NscInterconnectEntity'
import { NscSettingEntity } from './entity/NscSettingEntity'
import { NscSlotInfoEntity } from './entity/NscSlotInfoEntity'
import { NscStatusInfoEntity } from './entity/NscStatusInfoEntity'
import { OverrideCodeEntity } from './entity/OverrideCodeEntity'
import { PacfileEntity } from './entity/PacfileEntity'
import { PhysicalDeviceEntity } from './entity/PhysicalDeviceEntity'
import { ProxyEndpointEntity } from './entity/ProxyEndpointEntity'
import { RegistrationEntity } from './entity/RegistrationEntity'
import { RuleEntity } from './entity/RuleEntity'
import { TeamsDevicesApiResponseSingleEntity } from './entity/TeamsDevicesApiResponseSingleEntity'
import { TeamsDevicesComponentsSchemasResponseCollectionEntity } from './entity/TeamsDevicesComponentsSchemasResponseCollectionEntity'
import { TeamsDevicesComponentsSchemasSingleEntity } from './entity/TeamsDevicesComponentsSchemasSingleEntity'
import { TeamsDevicesDefaultDeviceSettingEntity } from './entity/TeamsDevicesDefaultDeviceSettingEntity'
import { TeamsDevicesDeviceEntity } from './entity/TeamsDevicesDeviceEntity'
import { TeamsDevicesDeviceSettingEntity } from './entity/TeamsDevicesDeviceSettingEntity'
import { TeamsDevicesDeviceSettingsResponseCollectionEntity } from './entity/TeamsDevicesDeviceSettingsResponseCollectionEntity'
import { TeamsDevicesFallbackDomainResponseCollectionEntity } from './entity/TeamsDevicesFallbackDomainResponseCollectionEntity'
import { TeamsDevicesGlobalWarpOverrideEntity } from './entity/TeamsDevicesGlobalWarpOverrideEntity'
import { TeamsDevicesIdEntity } from './entity/TeamsDevicesIdEntity'
import { TeamsDevicesOverrideCodeEntity } from './entity/TeamsDevicesOverrideCodeEntity'
import { TeamsDevicesResponseCollectionEntity } from './entity/TeamsDevicesResponseCollectionEntity'
import { TeamsDevicesSchemasIdEntity } from './entity/TeamsDevicesSchemasIdEntity'
import { TeamsDevicesSchemasResponseCollectionEntity } from './entity/TeamsDevicesSchemasResponseCollectionEntity'
import { TeamsDevicesSchemasSingleEntity } from './entity/TeamsDevicesSchemasSingleEntity'
import { TeamsDevicesSingleEntity } from './entity/TeamsDevicesSingleEntity'
import { TeamsDevicesSplitTunnelIncludeResponseCollectionEntity } from './entity/TeamsDevicesSplitTunnelIncludeResponseCollectionEntity'
import { TeamsDevicesSplitTunnelResponseCollectionEntity } from './entity/TeamsDevicesSplitTunnelResponseCollectionEntity'
import { TeamsDevicesZeroTrustAccountDeviceSettingEntity } from './entity/TeamsDevicesZeroTrustAccountDeviceSettingEntity'
import { TunnelEntity } from './entity/TunnelEntity'
import { TunnelCfdTunnelResponseCollectionEntity } from './entity/TunnelCfdTunnelResponseCollectionEntity'
import { TunnelCfdTunnelResponseSingleEntity } from './entity/TunnelCfdTunnelResponseSingleEntity'
import { TunnelConfigurationEntity } from './entity/TunnelConfigurationEntity'
import { TunnelEmptyEntity } from './entity/TunnelEmptyEntity'
import { TunnelHostnameRouteResponseCollectionEntity } from './entity/TunnelHostnameRouteResponseCollectionEntity'
import { TunnelHostnameRouteResponseSingleEntity } from './entity/TunnelHostnameRouteResponseSingleEntity'
import { TunnelMeshConfigurationResponseSingleEntity } from './entity/TunnelMeshConfigurationResponseSingleEntity'
import { TunnelRouteResponseSingleEntity } from './entity/TunnelRouteResponseSingleEntity'
import { TunnelSubnetResponseCollectionEntity } from './entity/TunnelSubnetResponseCollectionEntity'
import { TunnelSubnetResponseSingleEntity } from './entity/TunnelSubnetResponseSingleEntity'
import { TunnelSubnetResponseSingleNullableEntity } from './entity/TunnelSubnetResponseSingleNullableEntity'
import { TunnelTeamnetResponseCollectionEntity } from './entity/TunnelTeamnetResponseCollectionEntity'
import { TunnelTeamnetResponseSingleEntity } from './entity/TunnelTeamnetResponseSingleEntity'
import { TunnelTunnelClientEntity } from './entity/TunnelTunnelClientEntity'
import { TunnelTunnelConnectionEntity } from './entity/TunnelTunnelConnectionEntity'
import { TunnelTunnelResponseTokenEntity } from './entity/TunnelTunnelResponseTokenEntity'
import { TunnelTunnelWarpConnectorClientEntity } from './entity/TunnelTunnelWarpConnectorClientEntity'
import { TunnelTunnelWarpConnectorConnectionEntity } from './entity/TunnelTunnelWarpConnectorConnectionEntity'
import { TunnelVnetResponseCollectionEntity } from './entity/TunnelVnetResponseCollectionEntity'
import { TunnelVnetResponseSingleEntity } from './entity/TunnelVnetResponseSingleEntity'
import { TunnelWarpConnectorResponseCollectionEntity } from './entity/TunnelWarpConnectorResponseCollectionEntity'
import { TunnelWarpConnectorResponseSingleEntity } from './entity/TunnelWarpConnectorResponseSingleEntity'
import { TunnelZeroTrustConnectivitySettingEntity } from './entity/TunnelZeroTrustConnectivitySettingEntity'
import { WarpEntity } from './entity/WarpEntity'
import { WarpChangeEventEntity } from './entity/WarpChangeEventEntity'
import { WarpTeamsDeviceApiOtherEntity } from './entity/WarpTeamsDeviceApiOtherEntity'
import { ZeroTrustGatewayApplicationsReviewStatusEntity } from './entity/ZeroTrustGatewayApplicationsReviewStatusEntity'
import { ZeroTrustGatewayCsvOperationSingleEntity } from './entity/ZeroTrustGatewayCsvOperationSingleEntity'
import { ZeroTrustGatewayCustomCertificateSettingEntity } from './entity/ZeroTrustGatewayCustomCertificateSettingEntity'
import { ZeroTrustGatewayGatewayAccountEntity } from './entity/ZeroTrustGatewayGatewayAccountEntity'
import { ZeroTrustGatewayGatewayAccountConfigEntity } from './entity/ZeroTrustGatewayGatewayAccountConfigEntity'
import { ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity } from './entity/ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity'
import { ZeroTrustGatewayGatewayAccountLoggingSettingEntity } from './entity/ZeroTrustGatewayGatewayAccountLoggingSettingEntity'
import { ZeroTrustGatewayListItemResponseCollectionEntity } from './entity/ZeroTrustGatewayListItemResponseCollectionEntity'
import { ZeroTrustGatewayListSingleEntity } from './entity/ZeroTrustGatewayListSingleEntity'
import { ZeroTrustGatewayResponseCollectionEntity } from './entity/ZeroTrustGatewayResponseCollectionEntity'
import { ZeroTrustGatewayResponseCollection10Entity } from './entity/ZeroTrustGatewayResponseCollection10Entity'
import { ZeroTrustGatewayResponseCollection2Entity } from './entity/ZeroTrustGatewayResponseCollection2Entity'
import { ZeroTrustGatewayResponseCollection3Entity } from './entity/ZeroTrustGatewayResponseCollection3Entity'
import { ZeroTrustGatewayResponseCollection4Entity } from './entity/ZeroTrustGatewayResponseCollection4Entity'
import { ZeroTrustGatewayResponseCollection5Entity } from './entity/ZeroTrustGatewayResponseCollection5Entity'
import { ZeroTrustGatewayResponseCollection6Entity } from './entity/ZeroTrustGatewayResponseCollection6Entity'
import { ZeroTrustGatewayResponseCollection7Entity } from './entity/ZeroTrustGatewayResponseCollection7Entity'
import { ZeroTrustGatewayResponseCollection8Entity } from './entity/ZeroTrustGatewayResponseCollection8Entity'
import { ZeroTrustGatewayResponseCollection9Entity } from './entity/ZeroTrustGatewayResponseCollection9Entity'
import { ZeroTrustGatewaySingleEntity } from './entity/ZeroTrustGatewaySingleEntity'
import { ZeroTrustGatewaySingleResponse2Entity } from './entity/ZeroTrustGatewaySingleResponse2Entity'
import { ZeroTrustGatewaySingleResponse3Entity } from './entity/ZeroTrustGatewaySingleResponse3Entity'
import { ZeroTrustGatewaySingleResponse4Entity } from './entity/ZeroTrustGatewaySingleResponse4Entity'
import { ZeroTrustGatewaySingleResponse5Entity } from './entity/ZeroTrustGatewaySingleResponse5Entity'
import { ZeroTrustGatewaySingleResponse6Entity } from './entity/ZeroTrustGatewaySingleResponse6Entity'
import { ZeroTrustGatewaySingleResponse7Entity } from './entity/ZeroTrustGatewaySingleResponse7Entity'
import { ZeroTrustGatewaySingleResponseWithListItemEntity } from './entity/ZeroTrustGatewaySingleResponseWithListItemEntity'
import { ZeroTrustRiskScoringEntity } from './entity/ZeroTrustRiskScoringEntity'
import { ZeroTrustRiskScoringIntegrationEntity } from './entity/ZeroTrustRiskScoringIntegrationEntity'

export type * from './CloudflareZeroTrustTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { CloudflareZeroTrustEntityBase } from './CloudflareZeroTrustEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class CloudflareZeroTrustSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
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
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('CloudflareZeroTrustSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('CloudflareZeroTrustSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('CloudflareZeroTrustSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.ClientVersion().list()` / `client.ClientVersion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ClientVersion(entopts?: Record<string, any>) {
    const self = this
    return new ClientVersionEntity(self, entopts)
  }


  // Entity access: `client.Cni().list()` / `client.Cni().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Cni(entopts?: Record<string, any>) {
    const self = this
    return new CniEntity(self, entopts)
  }


  // Entity access: `client.DeploymentGroup().list()` / `client.DeploymentGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DeploymentGroup(entopts?: Record<string, any>) {
    const self = this
    return new DeploymentGroupEntity(self, entopts)
  }


  // Entity access: `client.DexRemoteCommand().list()` / `client.DexRemoteCommand().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DexRemoteCommand(entopts?: Record<string, any>) {
    const self = this
    return new DexRemoteCommandEntity(self, entopts)
  }


  // Entity access: `client.DexRule().list()` / `client.DexRule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DexRule(entopts?: Record<string, any>) {
    const self = this
    return new DexRuleEntity(self, entopts)
  }


  // Entity access: `client.DexSyntheticApplicationMonitoring().list()` / `client.DexSyntheticApplicationMonitoring().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DexSyntheticApplicationMonitoring(entopts?: Record<string, any>) {
    const self = this
    return new DexSyntheticApplicationMonitoringEntity(self, entopts)
  }


  // Entity access: `client.DigitalExperienceMonitoringDevice().list()` / `client.DigitalExperienceMonitoringDevice().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DigitalExperienceMonitoringDevice(entopts?: Record<string, any>) {
    const self = this
    return new DigitalExperienceMonitoringDeviceEntity(self, entopts)
  }


  // Entity access: `client.DigitalExperienceMonitoringDexDeleteResponseCollection().list()` / `client.DigitalExperienceMonitoringDexDeleteResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DigitalExperienceMonitoringDexDeleteResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new DigitalExperienceMonitoringDexDeleteResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.DigitalExperienceMonitoringDexResponseCollection().list()` / `client.DigitalExperienceMonitoringDexResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DigitalExperienceMonitoringDexResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new DigitalExperienceMonitoringDexResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.DigitalExperienceMonitoringDexSingle().list()` / `client.DigitalExperienceMonitoringDexSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DigitalExperienceMonitoringDexSingle(entopts?: Record<string, any>) {
    const self = this
    return new DigitalExperienceMonitoringDexSingleEntity(self, entopts)
  }


  // Entity access: `client.DigitalExperienceMonitoringFleetStatusDevice().list()` / `client.DigitalExperienceMonitoringFleetStatusDevice().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DigitalExperienceMonitoringFleetStatusDevice(entopts?: Record<string, any>) {
    const self = this
    return new DigitalExperienceMonitoringFleetStatusDeviceEntity(self, entopts)
  }


  // Entity access: `client.DigitalExperienceMonitoringFleetStatusLive().list()` / `client.DigitalExperienceMonitoringFleetStatusLive().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DigitalExperienceMonitoringFleetStatusLive(entopts?: Record<string, any>) {
    const self = this
    return new DigitalExperienceMonitoringFleetStatusLiveEntity(self, entopts)
  }


  // Entity access: `client.DigitalExperienceMonitoringFleetStatusOverTime().list()` / `client.DigitalExperienceMonitoringFleetStatusOverTime().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DigitalExperienceMonitoringFleetStatusOverTime(entopts?: Record<string, any>) {
    const self = this
    return new DigitalExperienceMonitoringFleetStatusOverTimeEntity(self, entopts)
  }


  // Entity access: `client.Interconnect().list()` / `client.Interconnect().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Interconnect(entopts?: Record<string, any>) {
    const self = this
    return new InterconnectEntity(self, entopts)
  }


  // Entity access: `client.IpProfile().list()` / `client.IpProfile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IpProfile(entopts?: Record<string, any>) {
    const self = this
    return new IpProfileEntity(self, entopts)
  }


  // Entity access: `client.List().list()` / `client.List().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  List(entopts?: Record<string, any>) {
    const self = this
    return new ListEntity(self, entopts)
  }


  // Entity access: `client.Location().list()` / `client.Location().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Location(entopts?: Record<string, any>) {
    const self = this
    return new LocationEntity(self, entopts)
  }


  // Entity access: `client.NscCni().list()` / `client.NscCni().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NscCni(entopts?: Record<string, any>) {
    const self = this
    return new NscCniEntity(self, entopts)
  }


  // Entity access: `client.NscDefaultName().list()` / `client.NscDefaultName().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NscDefaultName(entopts?: Record<string, any>) {
    const self = this
    return new NscDefaultNameEntity(self, entopts)
  }


  // Entity access: `client.NscInterconnect().list()` / `client.NscInterconnect().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NscInterconnect(entopts?: Record<string, any>) {
    const self = this
    return new NscInterconnectEntity(self, entopts)
  }


  // Entity access: `client.NscSetting().list()` / `client.NscSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NscSetting(entopts?: Record<string, any>) {
    const self = this
    return new NscSettingEntity(self, entopts)
  }


  // Entity access: `client.NscSlotInfo().list()` / `client.NscSlotInfo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NscSlotInfo(entopts?: Record<string, any>) {
    const self = this
    return new NscSlotInfoEntity(self, entopts)
  }


  // Entity access: `client.NscStatusInfo().list()` / `client.NscStatusInfo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NscStatusInfo(entopts?: Record<string, any>) {
    const self = this
    return new NscStatusInfoEntity(self, entopts)
  }


  // Entity access: `client.OverrideCode().list()` / `client.OverrideCode().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OverrideCode(entopts?: Record<string, any>) {
    const self = this
    return new OverrideCodeEntity(self, entopts)
  }


  // Entity access: `client.Pacfile().list()` / `client.Pacfile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Pacfile(entopts?: Record<string, any>) {
    const self = this
    return new PacfileEntity(self, entopts)
  }


  // Entity access: `client.PhysicalDevice().list()` / `client.PhysicalDevice().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PhysicalDevice(entopts?: Record<string, any>) {
    const self = this
    return new PhysicalDeviceEntity(self, entopts)
  }


  // Entity access: `client.ProxyEndpoint().list()` / `client.ProxyEndpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProxyEndpoint(entopts?: Record<string, any>) {
    const self = this
    return new ProxyEndpointEntity(self, entopts)
  }


  // Entity access: `client.Registration().list()` / `client.Registration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Registration(entopts?: Record<string, any>) {
    const self = this
    return new RegistrationEntity(self, entopts)
  }


  // Entity access: `client.Rule().list()` / `client.Rule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rule(entopts?: Record<string, any>) {
    const self = this
    return new RuleEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesApiResponseSingle().list()` / `client.TeamsDevicesApiResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesApiResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesApiResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesComponentsSchemasResponseCollection().list()` / `client.TeamsDevicesComponentsSchemasResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesComponentsSchemasResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesComponentsSchemasResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesComponentsSchemasSingle().list()` / `client.TeamsDevicesComponentsSchemasSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesComponentsSchemasSingle(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesComponentsSchemasSingleEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesDefaultDeviceSetting().list()` / `client.TeamsDevicesDefaultDeviceSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesDefaultDeviceSetting(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesDefaultDeviceSettingEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesDevice().list()` / `client.TeamsDevicesDevice().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesDevice(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesDeviceEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesDeviceSetting().list()` / `client.TeamsDevicesDeviceSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesDeviceSetting(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesDeviceSettingEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesDeviceSettingsResponseCollection().list()` / `client.TeamsDevicesDeviceSettingsResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesDeviceSettingsResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesDeviceSettingsResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesFallbackDomainResponseCollection().list()` / `client.TeamsDevicesFallbackDomainResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesFallbackDomainResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesFallbackDomainResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesGlobalWarpOverride().list()` / `client.TeamsDevicesGlobalWarpOverride().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesGlobalWarpOverride(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesGlobalWarpOverrideEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesId().list()` / `client.TeamsDevicesId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesId(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesIdEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesOverrideCode().list()` / `client.TeamsDevicesOverrideCode().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesOverrideCode(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesOverrideCodeEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesResponseCollection().list()` / `client.TeamsDevicesResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesSchemasId().list()` / `client.TeamsDevicesSchemasId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesSchemasId(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesSchemasIdEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesSchemasResponseCollection().list()` / `client.TeamsDevicesSchemasResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesSchemasResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesSchemasResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesSchemasSingle().list()` / `client.TeamsDevicesSchemasSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesSchemasSingle(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesSchemasSingleEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesSingle().list()` / `client.TeamsDevicesSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesSingle(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesSingleEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesSplitTunnelIncludeResponseCollection().list()` / `client.TeamsDevicesSplitTunnelIncludeResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesSplitTunnelIncludeResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesSplitTunnelIncludeResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesSplitTunnelResponseCollection().list()` / `client.TeamsDevicesSplitTunnelResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesSplitTunnelResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesSplitTunnelResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.TeamsDevicesZeroTrustAccountDeviceSetting().list()` / `client.TeamsDevicesZeroTrustAccountDeviceSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TeamsDevicesZeroTrustAccountDeviceSetting(entopts?: Record<string, any>) {
    const self = this
    return new TeamsDevicesZeroTrustAccountDeviceSettingEntity(self, entopts)
  }


  // Entity access: `client.Tunnel().list()` / `client.Tunnel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tunnel(entopts?: Record<string, any>) {
    const self = this
    return new TunnelEntity(self, entopts)
  }


  // Entity access: `client.TunnelCfdTunnelResponseCollection().list()` / `client.TunnelCfdTunnelResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelCfdTunnelResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new TunnelCfdTunnelResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.TunnelCfdTunnelResponseSingle().list()` / `client.TunnelCfdTunnelResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelCfdTunnelResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new TunnelCfdTunnelResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.TunnelConfiguration().list()` / `client.TunnelConfiguration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelConfiguration(entopts?: Record<string, any>) {
    const self = this
    return new TunnelConfigurationEntity(self, entopts)
  }


  // Entity access: `client.TunnelEmpty().list()` / `client.TunnelEmpty().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelEmpty(entopts?: Record<string, any>) {
    const self = this
    return new TunnelEmptyEntity(self, entopts)
  }


  // Entity access: `client.TunnelHostnameRouteResponseCollection().list()` / `client.TunnelHostnameRouteResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelHostnameRouteResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new TunnelHostnameRouteResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.TunnelHostnameRouteResponseSingle().list()` / `client.TunnelHostnameRouteResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelHostnameRouteResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new TunnelHostnameRouteResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.TunnelMeshConfigurationResponseSingle().list()` / `client.TunnelMeshConfigurationResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelMeshConfigurationResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new TunnelMeshConfigurationResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.TunnelRouteResponseSingle().list()` / `client.TunnelRouteResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelRouteResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new TunnelRouteResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.TunnelSubnetResponseCollection().list()` / `client.TunnelSubnetResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelSubnetResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new TunnelSubnetResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.TunnelSubnetResponseSingle().list()` / `client.TunnelSubnetResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelSubnetResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new TunnelSubnetResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.TunnelSubnetResponseSingleNullable().list()` / `client.TunnelSubnetResponseSingleNullable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelSubnetResponseSingleNullable(entopts?: Record<string, any>) {
    const self = this
    return new TunnelSubnetResponseSingleNullableEntity(self, entopts)
  }


  // Entity access: `client.TunnelTeamnetResponseCollection().list()` / `client.TunnelTeamnetResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelTeamnetResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new TunnelTeamnetResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.TunnelTeamnetResponseSingle().list()` / `client.TunnelTeamnetResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelTeamnetResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new TunnelTeamnetResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.TunnelTunnelClient().list()` / `client.TunnelTunnelClient().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelTunnelClient(entopts?: Record<string, any>) {
    const self = this
    return new TunnelTunnelClientEntity(self, entopts)
  }


  // Entity access: `client.TunnelTunnelConnection().list()` / `client.TunnelTunnelConnection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelTunnelConnection(entopts?: Record<string, any>) {
    const self = this
    return new TunnelTunnelConnectionEntity(self, entopts)
  }


  // Entity access: `client.TunnelTunnelResponseToken().list()` / `client.TunnelTunnelResponseToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelTunnelResponseToken(entopts?: Record<string, any>) {
    const self = this
    return new TunnelTunnelResponseTokenEntity(self, entopts)
  }


  // Entity access: `client.TunnelTunnelWarpConnectorClient().list()` / `client.TunnelTunnelWarpConnectorClient().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelTunnelWarpConnectorClient(entopts?: Record<string, any>) {
    const self = this
    return new TunnelTunnelWarpConnectorClientEntity(self, entopts)
  }


  // Entity access: `client.TunnelTunnelWarpConnectorConnection().list()` / `client.TunnelTunnelWarpConnectorConnection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelTunnelWarpConnectorConnection(entopts?: Record<string, any>) {
    const self = this
    return new TunnelTunnelWarpConnectorConnectionEntity(self, entopts)
  }


  // Entity access: `client.TunnelVnetResponseCollection().list()` / `client.TunnelVnetResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelVnetResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new TunnelVnetResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.TunnelVnetResponseSingle().list()` / `client.TunnelVnetResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelVnetResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new TunnelVnetResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.TunnelWarpConnectorResponseCollection().list()` / `client.TunnelWarpConnectorResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelWarpConnectorResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new TunnelWarpConnectorResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.TunnelWarpConnectorResponseSingle().list()` / `client.TunnelWarpConnectorResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelWarpConnectorResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new TunnelWarpConnectorResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.TunnelZeroTrustConnectivitySetting().list()` / `client.TunnelZeroTrustConnectivitySetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TunnelZeroTrustConnectivitySetting(entopts?: Record<string, any>) {
    const self = this
    return new TunnelZeroTrustConnectivitySettingEntity(self, entopts)
  }


  // Entity access: `client.Warp().list()` / `client.Warp().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Warp(entopts?: Record<string, any>) {
    const self = this
    return new WarpEntity(self, entopts)
  }


  // Entity access: `client.WarpChangeEvent().list()` / `client.WarpChangeEvent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WarpChangeEvent(entopts?: Record<string, any>) {
    const self = this
    return new WarpChangeEventEntity(self, entopts)
  }


  // Entity access: `client.WarpTeamsDeviceApiOther().list()` / `client.WarpTeamsDeviceApiOther().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WarpTeamsDeviceApiOther(entopts?: Record<string, any>) {
    const self = this
    return new WarpTeamsDeviceApiOtherEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayApplicationsReviewStatus().list()` / `client.ZeroTrustGatewayApplicationsReviewStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayApplicationsReviewStatus(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayApplicationsReviewStatusEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayCsvOperationSingle().list()` / `client.ZeroTrustGatewayCsvOperationSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayCsvOperationSingle(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayCsvOperationSingleEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayCustomCertificateSetting().list()` / `client.ZeroTrustGatewayCustomCertificateSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayCustomCertificateSetting(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayCustomCertificateSettingEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayGatewayAccount().list()` / `client.ZeroTrustGatewayGatewayAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayGatewayAccount(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayGatewayAccountEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayGatewayAccountConfig().list()` / `client.ZeroTrustGatewayGatewayAccountConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayGatewayAccountConfig(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayGatewayAccountConfigEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayGatewayAccountEgressCidrPairList().list()` / `client.ZeroTrustGatewayGatewayAccountEgressCidrPairList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayGatewayAccountEgressCidrPairList(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayGatewayAccountLoggingSetting().list()` / `client.ZeroTrustGatewayGatewayAccountLoggingSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayGatewayAccountLoggingSetting(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayGatewayAccountLoggingSettingEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayListItemResponseCollection().list()` / `client.ZeroTrustGatewayListItemResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayListItemResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayListItemResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayListSingle().list()` / `client.ZeroTrustGatewayListSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayListSingle(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayListSingleEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayResponseCollection().list()` / `client.ZeroTrustGatewayResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayResponseCollection10().list()` / `client.ZeroTrustGatewayResponseCollection10().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayResponseCollection10(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayResponseCollection10Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayResponseCollection2().list()` / `client.ZeroTrustGatewayResponseCollection2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayResponseCollection2(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayResponseCollection2Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayResponseCollection3().list()` / `client.ZeroTrustGatewayResponseCollection3().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayResponseCollection3(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayResponseCollection3Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayResponseCollection4().list()` / `client.ZeroTrustGatewayResponseCollection4().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayResponseCollection4(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayResponseCollection4Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayResponseCollection5().list()` / `client.ZeroTrustGatewayResponseCollection5().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayResponseCollection5(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayResponseCollection5Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayResponseCollection6().list()` / `client.ZeroTrustGatewayResponseCollection6().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayResponseCollection6(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayResponseCollection6Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayResponseCollection7().list()` / `client.ZeroTrustGatewayResponseCollection7().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayResponseCollection7(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayResponseCollection7Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayResponseCollection8().list()` / `client.ZeroTrustGatewayResponseCollection8().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayResponseCollection8(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayResponseCollection8Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewayResponseCollection9().list()` / `client.ZeroTrustGatewayResponseCollection9().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewayResponseCollection9(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewayResponseCollection9Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewaySingle().list()` / `client.ZeroTrustGatewaySingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewaySingle(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewaySingleEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewaySingleResponse2().list()` / `client.ZeroTrustGatewaySingleResponse2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewaySingleResponse2(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewaySingleResponse2Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewaySingleResponse3().list()` / `client.ZeroTrustGatewaySingleResponse3().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewaySingleResponse3(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewaySingleResponse3Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewaySingleResponse4().list()` / `client.ZeroTrustGatewaySingleResponse4().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewaySingleResponse4(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewaySingleResponse4Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewaySingleResponse5().list()` / `client.ZeroTrustGatewaySingleResponse5().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewaySingleResponse5(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewaySingleResponse5Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewaySingleResponse6().list()` / `client.ZeroTrustGatewaySingleResponse6().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewaySingleResponse6(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewaySingleResponse6Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewaySingleResponse7().list()` / `client.ZeroTrustGatewaySingleResponse7().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewaySingleResponse7(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewaySingleResponse7Entity(self, entopts)
  }


  // Entity access: `client.ZeroTrustGatewaySingleResponseWithListItem().list()` / `client.ZeroTrustGatewaySingleResponseWithListItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustGatewaySingleResponseWithListItem(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustGatewaySingleResponseWithListItemEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustRiskScoring().list()` / `client.ZeroTrustRiskScoring().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustRiskScoring(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustRiskScoringEntity(self, entopts)
  }


  // Entity access: `client.ZeroTrustRiskScoringIntegration().list()` / `client.ZeroTrustRiskScoringIntegration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZeroTrustRiskScoringIntegration(entopts?: Record<string, any>) {
    const self = this
    return new ZeroTrustRiskScoringIntegrationEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new CloudflareZeroTrustSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return CloudflareZeroTrustSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'CloudflareZeroTrust' }
  }

  toString() {
    return 'CloudflareZeroTrust ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = CloudflareZeroTrustSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  CloudflareZeroTrustEntityBase,

  CloudflareZeroTrustSDK,
  SDK,
}


