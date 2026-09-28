# CloudflareZeroTrust TypeScript SDK



The TypeScript SDK for the CloudflareZeroTrust API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.ClientVersion()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-zero-trust-sdk/releases](https://github.com/voxgig-sdk/cloudflare-zero-trust-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudflareZeroTrustSDK } from '@voxgig-sdk/cloudflare-zero-trust-sdk'

const client = new CloudflareZeroTrustSDK({
  apikey: process.env.CLOUDFLARE_ZERO_TRUST_APIKEY,
})
```

### 2. List clientversion records

`list()` resolves to an array of ClientVersion ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const clientversions = await client.ClientVersion().list({ account_id: "example", release_track: "example", target_environment: "example" })

for (const clientversion of clientversions) {
  console.log(clientversion)
}
```

### 3. Load a nscdefaultname

NscDefaultName is nested under account, so provide the `account_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const nscdefaultname = await client.NscDefaultName().load({
    account_id: 'example_account_id',
    interconnect_id: 'example_interconnect_id',
  })
  console.log(nscdefaultname)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const zerotrustgatewaysingleresponse6 = await client.ZeroTrustGatewaySingleResponse6().load({ account_id: "example" })
  console.log(zerotrustgatewaysingleresponse6)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudflareZeroTrustSDK.test()

const zerotrustgatewaysingleresponse6 = await client.ZeroTrustGatewaySingleResponse6().load({ account_id: 'example_account_id' })
// zerotrustgatewaysingleresponse6 is the entity, populated with mock response data
// — call zerotrustgatewaysingleresponse6.data() for the record itself
console.log(zerotrustgatewaysingleresponse6)
```

You can also use the instance method:

```ts
const client = new CloudflareZeroTrustSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.ZeroTrustGatewaySingleResponse6()

// First call runs the operation and stores its result
await entity.load({ account_id: 'example_account_id' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudflareZeroTrustSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE
CLOUDFLARE_ZERO_TRUST_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CloudflareZeroTrustSDK

#### Constructor

```ts
new CloudflareZeroTrustSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `ClientVersion(data?)` | `ClientVersionEntity` | Create a ClientVersion entity instance. |
| `Cni(data?)` | `CniEntity` | Create a Cni entity instance. |
| `DeploymentGroup(data?)` | `DeploymentGroupEntity` | Create a DeploymentGroup entity instance. |
| `DexRemoteCommand(data?)` | `DexRemoteCommandEntity` | Create a DexRemoteCommand entity instance. |
| `DexRule(data?)` | `DexRuleEntity` | Create a DexRule entity instance. |
| `DexSyntheticApplicationMonitoring(data?)` | `DexSyntheticApplicationMonitoringEntity` | Create a DexSyntheticApplicationMonitoring entity instance. |
| `DigitalExperienceMonitoringDevice(data?)` | `DigitalExperienceMonitoringDeviceEntity` | Create a DigitalExperienceMonitoringDevice entity instance. |
| `DigitalExperienceMonitoringDexDeleteResponseCollection(data?)` | `DigitalExperienceMonitoringDexDeleteResponseCollectionEntity` | Create a DigitalExperienceMonitoringDexDeleteResponseCollection entity instance. |
| `DigitalExperienceMonitoringDexResponseCollection(data?)` | `DigitalExperienceMonitoringDexResponseCollectionEntity` | Create a DigitalExperienceMonitoringDexResponseCollection entity instance. |
| `DigitalExperienceMonitoringDexSingle(data?)` | `DigitalExperienceMonitoringDexSingleEntity` | Create a DigitalExperienceMonitoringDexSingle entity instance. |
| `DigitalExperienceMonitoringFleetStatusDevice(data?)` | `DigitalExperienceMonitoringFleetStatusDeviceEntity` | Create a DigitalExperienceMonitoringFleetStatusDevice entity instance. |
| `DigitalExperienceMonitoringFleetStatusLive(data?)` | `DigitalExperienceMonitoringFleetStatusLiveEntity` | Create a DigitalExperienceMonitoringFleetStatusLive entity instance. |
| `DigitalExperienceMonitoringFleetStatusOverTime(data?)` | `DigitalExperienceMonitoringFleetStatusOverTimeEntity` | Create a DigitalExperienceMonitoringFleetStatusOverTime entity instance. |
| `Interconnect(data?)` | `InterconnectEntity` | Create an Interconnect entity instance. |
| `IpProfile(data?)` | `IpProfileEntity` | Create an IpProfile entity instance. |
| `List(data?)` | `ListEntity` | Create a List entity instance. |
| `Location(data?)` | `LocationEntity` | Create a Location entity instance. |
| `NscCni(data?)` | `NscCniEntity` | Create a NscCni entity instance. |
| `NscDefaultName(data?)` | `NscDefaultNameEntity` | Create a NscDefaultName entity instance. |
| `NscInterconnect(data?)` | `NscInterconnectEntity` | Create a NscInterconnect entity instance. |
| `NscSetting(data?)` | `NscSettingEntity` | Create a NscSetting entity instance. |
| `NscSlotInfo(data?)` | `NscSlotInfoEntity` | Create a NscSlotInfo entity instance. |
| `NscStatusInfo(data?)` | `NscStatusInfoEntity` | Create a NscStatusInfo entity instance. |
| `OverrideCode(data?)` | `OverrideCodeEntity` | Create an OverrideCode entity instance. |
| `Pacfile(data?)` | `PacfileEntity` | Create a Pacfile entity instance. |
| `PhysicalDevice(data?)` | `PhysicalDeviceEntity` | Create a PhysicalDevice entity instance. |
| `ProxyEndpoint(data?)` | `ProxyEndpointEntity` | Create a ProxyEndpoint entity instance. |
| `Registration(data?)` | `RegistrationEntity` | Create a Registration entity instance. |
| `Rule(data?)` | `RuleEntity` | Create a Rule entity instance. |
| `TeamsDevicesApiResponseSingle(data?)` | `TeamsDevicesApiResponseSingleEntity` | Create a TeamsDevicesApiResponseSingle entity instance. |
| `TeamsDevicesComponentsSchemasResponseCollection(data?)` | `TeamsDevicesComponentsSchemasResponseCollectionEntity` | Create a TeamsDevicesComponentsSchemasResponseCollection entity instance. |
| `TeamsDevicesComponentsSchemasSingle(data?)` | `TeamsDevicesComponentsSchemasSingleEntity` | Create a TeamsDevicesComponentsSchemasSingle entity instance. |
| `TeamsDevicesDefaultDeviceSetting(data?)` | `TeamsDevicesDefaultDeviceSettingEntity` | Create a TeamsDevicesDefaultDeviceSetting entity instance. |
| `TeamsDevicesDevice(data?)` | `TeamsDevicesDeviceEntity` | Create a TeamsDevicesDevice entity instance. |
| `TeamsDevicesDeviceSetting(data?)` | `TeamsDevicesDeviceSettingEntity` | Create a TeamsDevicesDeviceSetting entity instance. |
| `TeamsDevicesDeviceSettingsResponseCollection(data?)` | `TeamsDevicesDeviceSettingsResponseCollectionEntity` | Create a TeamsDevicesDeviceSettingsResponseCollection entity instance. |
| `TeamsDevicesFallbackDomainResponseCollection(data?)` | `TeamsDevicesFallbackDomainResponseCollectionEntity` | Create a TeamsDevicesFallbackDomainResponseCollection entity instance. |
| `TeamsDevicesGlobalWarpOverride(data?)` | `TeamsDevicesGlobalWarpOverrideEntity` | Create a TeamsDevicesGlobalWarpOverride entity instance. |
| `TeamsDevicesId(data?)` | `TeamsDevicesIdEntity` | Create a TeamsDevicesId entity instance. |
| `TeamsDevicesOverrideCode(data?)` | `TeamsDevicesOverrideCodeEntity` | Create a TeamsDevicesOverrideCode entity instance. |
| `TeamsDevicesResponseCollection(data?)` | `TeamsDevicesResponseCollectionEntity` | Create a TeamsDevicesResponseCollection entity instance. |
| `TeamsDevicesSchemasId(data?)` | `TeamsDevicesSchemasIdEntity` | Create a TeamsDevicesSchemasId entity instance. |
| `TeamsDevicesSchemasResponseCollection(data?)` | `TeamsDevicesSchemasResponseCollectionEntity` | Create a TeamsDevicesSchemasResponseCollection entity instance. |
| `TeamsDevicesSchemasSingle(data?)` | `TeamsDevicesSchemasSingleEntity` | Create a TeamsDevicesSchemasSingle entity instance. |
| `TeamsDevicesSingle(data?)` | `TeamsDevicesSingleEntity` | Create a TeamsDevicesSingle entity instance. |
| `TeamsDevicesSplitTunnelIncludeResponseCollection(data?)` | `TeamsDevicesSplitTunnelIncludeResponseCollectionEntity` | Create a TeamsDevicesSplitTunnelIncludeResponseCollection entity instance. |
| `TeamsDevicesSplitTunnelResponseCollection(data?)` | `TeamsDevicesSplitTunnelResponseCollectionEntity` | Create a TeamsDevicesSplitTunnelResponseCollection entity instance. |
| `TeamsDevicesZeroTrustAccountDeviceSetting(data?)` | `TeamsDevicesZeroTrustAccountDeviceSettingEntity` | Create a TeamsDevicesZeroTrustAccountDeviceSetting entity instance. |
| `Tunnel(data?)` | `TunnelEntity` | Create a Tunnel entity instance. |
| `TunnelCfdTunnelResponseCollection(data?)` | `TunnelCfdTunnelResponseCollectionEntity` | Create a TunnelCfdTunnelResponseCollection entity instance. |
| `TunnelCfdTunnelResponseSingle(data?)` | `TunnelCfdTunnelResponseSingleEntity` | Create a TunnelCfdTunnelResponseSingle entity instance. |
| `TunnelConfiguration(data?)` | `TunnelConfigurationEntity` | Create a TunnelConfiguration entity instance. |
| `TunnelEmpty(data?)` | `TunnelEmptyEntity` | Create a TunnelEmpty entity instance. |
| `TunnelHostnameRouteResponseCollection(data?)` | `TunnelHostnameRouteResponseCollectionEntity` | Create a TunnelHostnameRouteResponseCollection entity instance. |
| `TunnelHostnameRouteResponseSingle(data?)` | `TunnelHostnameRouteResponseSingleEntity` | Create a TunnelHostnameRouteResponseSingle entity instance. |
| `TunnelMeshConfigurationResponseSingle(data?)` | `TunnelMeshConfigurationResponseSingleEntity` | Create a TunnelMeshConfigurationResponseSingle entity instance. |
| `TunnelRouteResponseSingle(data?)` | `TunnelRouteResponseSingleEntity` | Create a TunnelRouteResponseSingle entity instance. |
| `TunnelSubnetResponseCollection(data?)` | `TunnelSubnetResponseCollectionEntity` | Create a TunnelSubnetResponseCollection entity instance. |
| `TunnelSubnetResponseSingle(data?)` | `TunnelSubnetResponseSingleEntity` | Create a TunnelSubnetResponseSingle entity instance. |
| `TunnelSubnetResponseSingleNullable(data?)` | `TunnelSubnetResponseSingleNullableEntity` | Create a TunnelSubnetResponseSingleNullable entity instance. |
| `TunnelTeamnetResponseCollection(data?)` | `TunnelTeamnetResponseCollectionEntity` | Create a TunnelTeamnetResponseCollection entity instance. |
| `TunnelTeamnetResponseSingle(data?)` | `TunnelTeamnetResponseSingleEntity` | Create a TunnelTeamnetResponseSingle entity instance. |
| `TunnelTunnelClient(data?)` | `TunnelTunnelClientEntity` | Create a TunnelTunnelClient entity instance. |
| `TunnelTunnelConnection(data?)` | `TunnelTunnelConnectionEntity` | Create a TunnelTunnelConnection entity instance. |
| `TunnelTunnelResponseToken(data?)` | `TunnelTunnelResponseTokenEntity` | Create a TunnelTunnelResponseToken entity instance. |
| `TunnelTunnelWarpConnectorClient(data?)` | `TunnelTunnelWarpConnectorClientEntity` | Create a TunnelTunnelWarpConnectorClient entity instance. |
| `TunnelTunnelWarpConnectorConnection(data?)` | `TunnelTunnelWarpConnectorConnectionEntity` | Create a TunnelTunnelWarpConnectorConnection entity instance. |
| `TunnelVnetResponseCollection(data?)` | `TunnelVnetResponseCollectionEntity` | Create a TunnelVnetResponseCollection entity instance. |
| `TunnelVnetResponseSingle(data?)` | `TunnelVnetResponseSingleEntity` | Create a TunnelVnetResponseSingle entity instance. |
| `TunnelWarpConnectorResponseCollection(data?)` | `TunnelWarpConnectorResponseCollectionEntity` | Create a TunnelWarpConnectorResponseCollection entity instance. |
| `TunnelWarpConnectorResponseSingle(data?)` | `TunnelWarpConnectorResponseSingleEntity` | Create a TunnelWarpConnectorResponseSingle entity instance. |
| `TunnelZeroTrustConnectivitySetting(data?)` | `TunnelZeroTrustConnectivitySettingEntity` | Create a TunnelZeroTrustConnectivitySetting entity instance. |
| `Warp(data?)` | `WarpEntity` | Create a Warp entity instance. |
| `WarpChangeEvent(data?)` | `WarpChangeEventEntity` | Create a WarpChangeEvent entity instance. |
| `WarpTeamsDeviceApiOther(data?)` | `WarpTeamsDeviceApiOtherEntity` | Create a WarpTeamsDeviceApiOther entity instance. |
| `ZeroTrustGatewayApplicationsReviewStatus(data?)` | `ZeroTrustGatewayApplicationsReviewStatusEntity` | Create a ZeroTrustGatewayApplicationsReviewStatus entity instance. |
| `ZeroTrustGatewayCsvOperationSingle(data?)` | `ZeroTrustGatewayCsvOperationSingleEntity` | Create a ZeroTrustGatewayCsvOperationSingle entity instance. |
| `ZeroTrustGatewayCustomCertificateSetting(data?)` | `ZeroTrustGatewayCustomCertificateSettingEntity` | Create a ZeroTrustGatewayCustomCertificateSetting entity instance. |
| `ZeroTrustGatewayGatewayAccount(data?)` | `ZeroTrustGatewayGatewayAccountEntity` | Create a ZeroTrustGatewayGatewayAccount entity instance. |
| `ZeroTrustGatewayGatewayAccountConfig(data?)` | `ZeroTrustGatewayGatewayAccountConfigEntity` | Create a ZeroTrustGatewayGatewayAccountConfig entity instance. |
| `ZeroTrustGatewayGatewayAccountEgressCidrPairList(data?)` | `ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity` | Create a ZeroTrustGatewayGatewayAccountEgressCidrPairList entity instance. |
| `ZeroTrustGatewayGatewayAccountLoggingSetting(data?)` | `ZeroTrustGatewayGatewayAccountLoggingSettingEntity` | Create a ZeroTrustGatewayGatewayAccountLoggingSetting entity instance. |
| `ZeroTrustGatewayListItemResponseCollection(data?)` | `ZeroTrustGatewayListItemResponseCollectionEntity` | Create a ZeroTrustGatewayListItemResponseCollection entity instance. |
| `ZeroTrustGatewayListSingle(data?)` | `ZeroTrustGatewayListSingleEntity` | Create a ZeroTrustGatewayListSingle entity instance. |
| `ZeroTrustGatewayResponseCollection(data?)` | `ZeroTrustGatewayResponseCollectionEntity` | Create a ZeroTrustGatewayResponseCollection entity instance. |
| `ZeroTrustGatewayResponseCollection10(data?)` | `ZeroTrustGatewayResponseCollection10Entity` | Create a ZeroTrustGatewayResponseCollection10 entity instance. |
| `ZeroTrustGatewayResponseCollection2(data?)` | `ZeroTrustGatewayResponseCollection2Entity` | Create a ZeroTrustGatewayResponseCollection2 entity instance. |
| `ZeroTrustGatewayResponseCollection3(data?)` | `ZeroTrustGatewayResponseCollection3Entity` | Create a ZeroTrustGatewayResponseCollection3 entity instance. |
| `ZeroTrustGatewayResponseCollection4(data?)` | `ZeroTrustGatewayResponseCollection4Entity` | Create a ZeroTrustGatewayResponseCollection4 entity instance. |
| `ZeroTrustGatewayResponseCollection5(data?)` | `ZeroTrustGatewayResponseCollection5Entity` | Create a ZeroTrustGatewayResponseCollection5 entity instance. |
| `ZeroTrustGatewayResponseCollection6(data?)` | `ZeroTrustGatewayResponseCollection6Entity` | Create a ZeroTrustGatewayResponseCollection6 entity instance. |
| `ZeroTrustGatewayResponseCollection7(data?)` | `ZeroTrustGatewayResponseCollection7Entity` | Create a ZeroTrustGatewayResponseCollection7 entity instance. |
| `ZeroTrustGatewayResponseCollection8(data?)` | `ZeroTrustGatewayResponseCollection8Entity` | Create a ZeroTrustGatewayResponseCollection8 entity instance. |
| `ZeroTrustGatewayResponseCollection9(data?)` | `ZeroTrustGatewayResponseCollection9Entity` | Create a ZeroTrustGatewayResponseCollection9 entity instance. |
| `ZeroTrustGatewaySingle(data?)` | `ZeroTrustGatewaySingleEntity` | Create a ZeroTrustGatewaySingle entity instance. |
| `ZeroTrustGatewaySingleResponse2(data?)` | `ZeroTrustGatewaySingleResponse2Entity` | Create a ZeroTrustGatewaySingleResponse2 entity instance. |
| `ZeroTrustGatewaySingleResponse3(data?)` | `ZeroTrustGatewaySingleResponse3Entity` | Create a ZeroTrustGatewaySingleResponse3 entity instance. |
| `ZeroTrustGatewaySingleResponse4(data?)` | `ZeroTrustGatewaySingleResponse4Entity` | Create a ZeroTrustGatewaySingleResponse4 entity instance. |
| `ZeroTrustGatewaySingleResponse5(data?)` | `ZeroTrustGatewaySingleResponse5Entity` | Create a ZeroTrustGatewaySingleResponse5 entity instance. |
| `ZeroTrustGatewaySingleResponse6(data?)` | `ZeroTrustGatewaySingleResponse6Entity` | Create a ZeroTrustGatewaySingleResponse6 entity instance. |
| `ZeroTrustGatewaySingleResponse7(data?)` | `ZeroTrustGatewaySingleResponse7Entity` | Create a ZeroTrustGatewaySingleResponse7 entity instance. |
| `ZeroTrustGatewaySingleResponseWithListItem(data?)` | `ZeroTrustGatewaySingleResponseWithListItemEntity` | Create a ZeroTrustGatewaySingleResponseWithListItem entity instance. |
| `ZeroTrustRiskScoring(data?)` | `ZeroTrustRiskScoringEntity` | Create a ZeroTrustRiskScoring entity instance. |
| `ZeroTrustRiskScoringIntegration(data?)` | `ZeroTrustRiskScoringIntegrationEntity` | Create a ZeroTrustRiskScoringIntegration entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudflareZeroTrustSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudflareZeroTrustSDK.test(testopts?, sdkopts?)` | `CloudflareZeroTrustSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudflareZeroTrustSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### ClientVersion

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` | Indicates whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/devices/client-versions`

#### Cni

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/cni/cnis/{cni}`

#### DeploymentGroup

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `name` | A user-friendly name for the deployment group. |
| `policy_ids` | Contains an optional list of policy IDs assigned to a group. |
| `result` |  |
| `result_info` |  |
| `success` | Indicates whether the API call was successful. |
| `version_config` | Contains at least one version configuration. |

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/devices/deployment-groups`

#### DexRemoteCommand

| Field | Description |
| --- | --- |
| `commands` | List of device-level commands to execute |
| `result` |  |

Operations: create, load.

API path: `/accounts/{account_id}/dex/commands`

#### DexRule

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `match` | The wirefilter expression to match. |
| `name` | The name of the Rule. |
| `result` |  |

Operations: create, load, remove, update.

API path: `/accounts/{account_id}/dex/rules`

#### DexSyntheticApplicationMonitoring

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | array of colos. |
| `success` | Whether the API call was successful. |

Operations: list, load.

API path: `/accounts/{account_id}/dex/colos`

#### DigitalExperienceMonitoringDevice

| Field | Description |
| --- | --- |
| `alwaysOn` |  |
| `batteryCharging` |  |
| `batteryCycles` |  |
| `batteryPct` |  |
| `colo` | Cloudflare colo airport code. |
| `connectionType` |  |
| `cpuPct` |  |
| `cpuPctByApp` |  |
| `deviceId` | Device identifier (UUID v4) |
| `deviceIpv4` |  |
| `deviceIpv6` |  |
| `deviceName` | Device identifier (human readable). |
| `deviceRegistration` | Deprecated: use registrationId. |
| `diskReadBps` |  |
| `diskUsagePct` |  |
| `diskWriteBps` |  |
| `dohSubdomain` |  |
| `estimatedLossPct` |  |
| `firewallEnabled` |  |
| `gatewayIpv4` |  |
| `gatewayIpv6` |  |
| `handshakeLatencyMs` |  |
| `ispIpv4` |  |
| `ispIpv6` |  |
| `metal` |  |
| `mode` | The mode under which the WARP client is run. |
| `networkRcvdBps` |  |
| `networkSentBps` |  |
| `networkSsid` |  |
| `personEmail` | User contact email address |
| `platform` | Operating system. |
| `ramAvailableKb` |  |
| `ramUsedPct` |  |
| `ramUsedPctByApp` |  |
| `registrationId` | Device registration identifier (UUID v4). |
| `rtt` | Round-trip time statistics for the WARP tunnel. |
| `status` | Network status. |
| `switchLocked` |  |
| `timestamp` |  |
| `tunnelStats` | WARP tunnel packet and byte counters. |
| `tunnelType` |  |
| `version` | WARP client version. |
| `wifiStrengthDbm` |  |

Operations: list.

API path: `/accounts/{account_id}/dex/devices/{device_id}/fleet-status/live`

#### DigitalExperienceMonitoringDexDeleteResponseCollection

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}`

#### DigitalExperienceMonitoringDexResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/dex/devices/dex_tests`

#### DigitalExperienceMonitoringDexSingle

| Field | Description |
| --- | --- |
| `created` | Date the test was created, in RFC 3339 format. |
| `data` | The configuration object which contains the details for the WARP client to conduct the test. |
| `description` | Additional details about the test. |
| `enabled` | Determines whether or not the test is active. |
| `interval` | How often the test will run. |
| `name` | The name of the DEX test. |
| `result` |  |
| `target_policies` |  |
| `targeted` |  |
| `test_id` | The unique identifier for the test. |
| `updated` | Date the test was last updated, in RFC 3339 format. |

Operations: create, load, update.

API path: `/accounts/{account_id}/dex/devices/dex_tests`

#### DigitalExperienceMonitoringFleetStatusDevice

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/dex/fleet-status/devices`

#### DigitalExperienceMonitoringFleetStatusLive

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/dex/fleet-status/live`

#### DigitalExperienceMonitoringFleetStatusOverTime

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/dex/fleet-status/over-time`

#### Interconnect

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load, remove.

API path: `/accounts/{account_id}/cni/interconnects/{icon}/loa`

#### IpProfile

| Field | Description |
| --- | --- |
| `description` | An optional description of the Device IP profile. |
| `enabled` | Whether the Device IP profile will be applied to matching devices. |
| `errors` |  |
| `id` |  |
| `match` | The wirefilter expression to match registrations. |
| `messages` |  |
| `name` | A user-friendly name for the Device IP profile. |
| `precedence` | The precedence of the Device IP profile. |
| `result` |  |
| `result_info` |  |
| `subnet_id` | The ID of the Subnet. |
| `success` | Whether the API call was successful. |

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/devices/ip-profiles`

#### List

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/gateway/lists/{list_id}`

#### Location

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/gateway/locations/{location_id}`

#### NscCni

| Field | Description |
| --- | --- |
| `account` | Customer account tag |
| `bgp` |  |
| `bgp_mode` | The BGP mode for a CNI. |
| `cust_ip` | Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`. |
| `id` |  |
| `interconnect` | Interconnect identifier hosting this CNI |
| `magic` |  |
| `p2p_ip` | Cloudflare end of the point-to-point link |

Operations: create, list, load, update.

API path: `/accounts/{account_id}/cni/cnis`

#### NscDefaultName

| Field | Description |
| --- | --- |
| `name` | The default customer name for the interconnect |

Operations: load.

API path: `/accounts/{account_id}/cni/interconnects/{icon}/loa/default`

#### NscInterconnect

| Field | Description |
| --- | --- |
| `id` |  |
| `items` |  |
| `next` |  |

Operations: create, list, load.

API path: `/accounts/{account_id}/cni/interconnects`

#### NscSetting

| Field | Description |
| --- | --- |
| `default_asn` |  |

Operations: load, update.

API path: `/accounts/{account_id}/cni/settings`

#### NscSlotInfo

| Field | Description |
| --- | --- |
| `account` | Customer account tag |
| `address` |  |
| `ccr_device_name` |  |
| `facility` |  |
| `id` | Slot ID |
| `name` |  |
| `occupied` | Whether the slot is occupied or not |
| `site` |  |
| `speed` |  |

Operations: list, load.

API path: `/accounts/{account_id}/cni/slots`

#### NscStatusInfo

| Field | Description |
| --- | --- |

Operations: load.

API path: `/accounts/{account_id}/cni/interconnects/{icon}/status`

#### OverrideCode

| Field | Description |
| --- | --- |
| `device_id` | Physical device ID. |
| `duration_hours` | Number of hours for which the override code should remain valid. |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `scope` | Whether the code applies to every device in the account or one physical device. |
| `success` | Whether the API call was successful. |
| `type` | The feature that the override code applies to. |

Operations: create.

API path: `/accounts/{account_id}/devices/override_codes`

#### Pacfile

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/gateway/pacfiles/{pacfile_id}`

#### PhysicalDevice

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | A WARP Device. |
| `result_info` | V4 public API Pagination/Cursor info. |
| `success` | Whether the API call was successful. |
| `tags` | Replaces all tags assigned to the physical device. |

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/devices/physical-devices/{device_id}/revoke`

#### ProxyEndpoint

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}`

#### Registration

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | A WARP configuration tied to a single user. |
| `result_info` | V4 public API Pagination/Cursor info. |
| `success` | Whether the API call was successful. |

Operations: create, list, load, remove.

API path: `/accounts/{account_id}/devices/registrations/revoke`

#### Rule

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/gateway/rules/{rule_id}`

#### TeamsDevicesApiResponseSingle

| Field | Description |
| --- | --- |

Operations: create.

API path: `/accounts/{account_id}/devices/revoke`

#### TeamsDevicesComponentsSchemasResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list, remove.

API path: `/accounts/{account_id}/devices/networks`

#### TeamsDevicesComponentsSchemasSingle

| Field | Description |
| --- | --- |
| `config` | The configuration object containing information for the WARP client to detect the managed network. |
| `name` | The name of the device managed network. |
| `result` |  |
| `type` | The type of device managed network. |

Operations: create, load, update.

API path: `/accounts/{account_id}/devices/networks`

#### TeamsDevicesDefaultDeviceSetting

| Field | Description |
| --- | --- |
| `allow_mode_switch` | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | Whether to allow devices to leave the organization. |
| `auto_connect` | The amount of time in seconds to reconnect after having been disabled. |
| `captive_portal` | Turn on the captive portal after the specified amount of time. |
| `disable_auto_fallback` | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | List of DNS search suffixes to apply to clients. |
| `exclude` | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | Global Acceleration settings for China. |
| `include` | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | The size of the subnet for the local access network. |
| `register_interface_ip_with_dns` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` |  |
| `sccm_vpn_boundary_support` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` |  |
| `support_url` | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | Determines which tunnel protocol to use. |
| `uninstall_protection` | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | Virtual network access settings for the device. |

Operations: load, update.

API path: `/accounts/{account_id}/devices/policy`

#### TeamsDevicesDevice

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: list, load.

API path: `/accounts/{account_id}/devices`

#### TeamsDevicesDeviceSetting

| Field | Description |
| --- | --- |
| `allow_mode_switch` | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | Whether to allow devices to leave the organization. |
| `auto_connect` | The amount of time in seconds to reconnect after having been disabled. |
| `browser_extension_config` | Browser extension proxy settings. |
| `captive_portal` | Turn on the captive portal after the specified amount of time. |
| `default` | Whether the policy is the account default. |
| `description` | A description of the policy. |
| `disable_auto_fallback` | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | List of DNS search suffixes to apply to clients. |
| `enabled` | Whether the policy will be applied to matching devices. |
| `exclude` | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | Global Acceleration settings for China. |
| `include` | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | The size of the subnet for the local access network. |
| `match` | The wirefilter expression to match devices. |
| `name` | The name of the device settings profile. |
| `precedence` | The precedence of the policy. |
| `profile_type` | The client type to which the device settings profile applies. |
| `register_interface_ip_with_dns` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` |  |
| `sccm_vpn_boundary_support` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` |  |
| `support_url` | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | Determines which tunnel protocol to use. |
| `uninstall_protection` | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | Virtual network access settings for the device. |

Operations: create, load, update.

API path: `/accounts/{account_id}/devices/policy`

#### TeamsDevicesDeviceSettingsResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list, remove.

API path: `/accounts/{account_id}/devices/policies`

#### TeamsDevicesFallbackDomainResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list, remove, update.

API path: `/accounts/{account_id}/devices/policy/{policy_id}/fallback_domains`

#### TeamsDevicesGlobalWarpOverride

| Field | Description |
| --- | --- |
| `disconnect` | Disconnects all devices on the account using Global WARP override. |
| `justification` | Reasoning for setting the Global WARP override state. |
| `result` |  |

Operations: create, load.

API path: `/accounts/{account_id}/devices/resilience/disconnect`

#### TeamsDevicesId

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/devices/posture/{rule_id}`

#### TeamsDevicesOverrideCode

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/devices/{device_id}/override_codes`

#### TeamsDevicesResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/devices/posture`

#### TeamsDevicesSchemasId

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/devices/posture/integration/{integration_id}`

#### TeamsDevicesSchemasResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/devices/posture/integration`

#### TeamsDevicesSchemasSingle

| Field | Description |
| --- | --- |
| `config` | The configuration object containing third-party integration information. |
| `interval` | The interval between each posture check with the third-party API. |
| `name` | The name of the device posture integration. |
| `result` |  |
| `type` | The type of device posture integration. |

Operations: create, load, update.

API path: `/accounts/{account_id}/devices/posture/integration`

#### TeamsDevicesSingle

| Field | Description |
| --- | --- |
| `description` | The description of the device posture rule. |
| `expiration` | Sets the expiration time for a posture check result. |
| `input` | The value to be checked against. |
| `match` | The conditions that the client must match to run the rule. |
| `name` | The name of the device posture rule. |
| `result` |  |
| `schedule` | Polling frequency for the WARP client posture check. |
| `type` | The type of device posture rule. |

Operations: create, load, update.

API path: `/accounts/{account_id}/devices/posture`

#### TeamsDevicesSplitTunnelIncludeResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list, update.

API path: `/accounts/{account_id}/devices/policy/{policy_id}/include`

#### TeamsDevicesSplitTunnelResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list, remove, update.

API path: `/accounts/{account_id}/devices/policy/{policy_id}/exclude`

#### TeamsDevicesZeroTrustAccountDeviceSetting

| Field | Description |
| --- | --- |
| `disable_for_time` | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| `external_emergency_signal_enabled` | Controls whether the external emergency disconnect feature is enabled. |
| `external_emergency_signal_fingerprint` | The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. |
| `external_emergency_signal_interval` | The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). |
| `external_emergency_signal_url` | The HTTPS URL from which to fetch the emergency disconnect signal. |
| `gateway_proxy_enabled` | Enable gateway proxy filtering on TCP. |
| `gateway_udp_proxy_enabled` | Enable gateway proxy filtering on UDP. |
| `result` |  |
| `root_certificate_installation_enabled` | Enable installation of cloudflare managed root certificate. |
| `use_zt_virtual_ip` | Enable using CGNAT virtual IPv4. |

Operations: load, patch, remove, update.

API path: `/accounts/{account_id}/devices/settings`

#### Tunnel

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/tunnels`

#### TunnelCfdTunnelResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/cfd_tunnel`

#### TunnelCfdTunnelResponseSingle

| Field | Description |
| --- | --- |
| `config_src` | Indicates if this is a locally or remotely configured tunnel. |
| `errors` |  |
| `messages` |  |
| `name` | A user-friendly name for a tunnel. |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |
| `tunnel_secret` | Sets the password required to run a locally-managed tunnel. |

Operations: create, load, remove, update.

API path: `/accounts/{account_id}/cfd_tunnel`

#### TunnelConfiguration

| Field | Description |
| --- | --- |
| `config` | The tunnel configuration and ingress rules. |
| `result` | Cloudflare Tunnel configuration |

Operations: load, update.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations`

#### TunnelEmpty

| Field | Description |
| --- | --- |
| `client_id` | UUID of the Cloudflare Tunnel connector. |

Operations: remove, update.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections`

#### TunnelHostnameRouteResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/zerotrust/routes/hostname`

#### TunnelHostnameRouteResponseSingle

| Field | Description |
| --- | --- |
| `comment` | An optional description of the hostname route. |
| `errors` |  |
| `hostname` | The hostname of the route. |
| `messages` |  |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |
| `tunnel_id` | UUID of the tunnel. |

Operations: create, load, remove, update.

API path: `/accounts/{account_id}/zerotrust/routes/hostname`

#### TunnelMeshConfigurationResponseSingle

| Field | Description |
| --- | --- |
| `config` | Provider-specific configuration. |
| `ha_mode` | High-availability mode for the WARP Connector tunnel. |
| `result` |  |

Operations: load, update.

API path: `/accounts/{account_id}/warp_connector/{tunnel_id}/configurations`

#### TunnelRouteResponseSingle

| Field | Description |
| --- | --- |
| `comment` | Optional remark describing the route. |
| `errors` |  |
| `messages` |  |
| `network` | The private IPv4 or IPv6 range connected by the route, in CIDR notation. |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |
| `tunnel_id` | UUID of the tunnel. |
| `virtual_network_id` | UUID of the virtual network. |

Operations: create, load, remove, update.

API path: `/accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}`

#### TunnelSubnetResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/zerotrust/subnets`

#### TunnelSubnetResponseSingle

| Field | Description |
| --- | --- |
| `comment` | An optional description of the subnet. |
| `errors` |  |
| `is_default_network` | If `true`, this is the default subnet for the account. |
| `messages` |  |
| `name` | A user-friendly name for the subnet. |
| `network` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |

Operations: create, load, patch, update.

API path: `/accounts/{account_id}/zerotrust/subnets/warp`

#### TunnelSubnetResponseSingleNullable

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}`

#### TunnelTeamnetResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/teamnet/routes`

#### TunnelTeamnetResponseSingle

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |

Operations: load.

API path: `/accounts/{account_id}/teamnet/routes/ip/{ip}`

#### TunnelTunnelClient

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |

Operations: load.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}`

#### TunnelTunnelConnection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections`

#### TunnelTunnelResponseToken

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `resources` |  |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |

Operations: create, list.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/management`

#### TunnelTunnelWarpConnectorClient

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |

Operations: load.

API path: `/accounts/{account_id}/warp_connector/{tunnel_id}/connectors/{connector_id}`

#### TunnelTunnelWarpConnectorConnection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/warp_connector/{tunnel_id}/connections`

#### TunnelVnetResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/teamnet/virtual_networks`

#### TunnelVnetResponseSingle

| Field | Description |
| --- | --- |
| `comment` | Optional remark describing the virtual network. |
| `is_default` | If `true`, this virtual network is the default for the account. |
| `is_default_network` | If `true`, this virtual network is the default for the account. |
| `name` | A user-friendly name for the virtual network. |

Operations: create, load, remove, update.

API path: `/accounts/{account_id}/teamnet/virtual_networks`

#### TunnelWarpConnectorResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/warp_connector`

#### TunnelWarpConnectorResponseSingle

| Field | Description |
| --- | --- |
| `errors` |  |
| `ha` | Indicates that the tunnel will be created to be highly available. |
| `messages` |  |
| `name` | A user-friendly name for a tunnel. |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |
| `tunnel_secret` | Sets the password required to run a locally-managed tunnel. |

Operations: create, load, remove, update.

API path: `/accounts/{account_id}/warp_connector`

#### TunnelZeroTrustConnectivitySetting

| Field | Description |
| --- | --- |
| `errors` |  |
| `icmp_proxy_enabled` | A flag to enable the ICMP proxy for the account network. |
| `messages` |  |
| `offramp_warp_enabled` | A flag to enable WARP to WARP traffic. |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |

Operations: list, update.

API path: `/accounts/{account_id}/zerotrust/connectivity_settings`

#### Warp

| Field | Description |
| --- | --- |
| `comment` | An optional description of the subnet. |
| `errors` |  |
| `id` |  |
| `is_default_network` | If `true`, this is the default subnet for the account. |
| `messages` |  |
| `name` | A user-friendly name for the subnet. |
| `network` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |

Operations: load, update.

API path: `/accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}`

#### WarpChangeEvent

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/dex/warp-change-events`

#### WarpTeamsDeviceApiOther

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/devices/registrations/{registration_id}/override_codes`

#### ZeroTrustGatewayApplicationsReviewStatus

| Field | Description |
| --- | --- |
| `approved_apps` | Contains the ids of the approved applications. |
| `in_review_apps` | Contains the ids of the applications in review. |
| `result` |  |
| `unapproved_apps` | Contains the ids of the unapproved applications. |

Operations: load, update.

API path: `/accounts/{account_id}/gateway/apps/review_status`

#### ZeroTrustGatewayCsvOperationSingle

| Field | Description |
| --- | --- |

Operations: create.

API path: `/accounts/{account_id}/gateway/lists/upload`

#### ZeroTrustGatewayCustomCertificateSetting

| Field | Description |
| --- | --- |
| `binding_status` | Indicate the internal certificate status. |
| `enabled` | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| `id` | Specify the UUID of the certificate (ID from MTLS certificate store). |
| `updated_at` |  |

Operations: load.

API path: `/accounts/{account_id}/gateway/configuration/custom_certificate`

#### ZeroTrustGatewayGatewayAccount

| Field | Description |
| --- | --- |
| `result` |  |

Operations: create, load.

API path: `/accounts/{account_id}/gateway`

#### ZeroTrustGatewayGatewayAccountConfig

| Field | Description |
| --- | --- |
| `result` |  |
| `settings` | Specify account settings. |

Operations: load, patch, update.

API path: `/accounts/{account_id}/gateway/configuration`

#### ZeroTrustGatewayGatewayAccountEgressCidrPairList

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/gateway/egress_cidr_pairs`

#### ZeroTrustGatewayGatewayAccountLoggingSetting

| Field | Description |
| --- | --- |
| `redact_pii` | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `result` |  |
| `settings_by_rule_type` | Configure logging settings for each rule type. |

Operations: load, update.

API path: `/accounts/{account_id}/gateway/logging`

#### ZeroTrustGatewayListItemResponseCollection

| Field | Description |
| --- | --- |
| `result` | Provide the list items. |
| `result_info` |  |

Operations: list.

API path: `/accounts/{account_id}/gateway/lists/{list_id}/items`

#### ZeroTrustGatewayListSingle

| Field | Description |
| --- | --- |
| `append` | Add items to the list. |
| `description` | Provide the list description. |
| `items` | Add items to the list. |
| `name` | Specify the list name. |
| `remove` | Lists of item values you want to remove. |
| `result` |  |

Operations: load, patch, update.

API path: `/accounts/{account_id}/gateway/lists/{list_id}`

#### ZeroTrustGatewayResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/gateway/certificates`

#### ZeroTrustGatewayResponseCollection10

| Field | Description |
| --- | --- |
| `result` |  |
| `result_info` |  |

Operations: list.

API path: `/accounts/{account_id}/gateway/pacfiles`

#### ZeroTrustGatewayResponseCollection2

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/gateway/dns_destination_ips`

#### ZeroTrustGatewayResponseCollection3

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/gateway/lists`

#### ZeroTrustGatewayResponseCollection4

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/gateway/operations`

#### ZeroTrustGatewayResponseCollection5

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/gateway/locations`

#### ZeroTrustGatewayResponseCollection6

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list, update.

API path: `/accounts/{account_id}/gateway/rules`

#### ZeroTrustGatewayResponseCollection7

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/gateway/app_types`

#### ZeroTrustGatewayResponseCollection8

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/gateway/categories`

#### ZeroTrustGatewayResponseCollection9

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/gateway/proxy_endpoints`

#### ZeroTrustGatewaySingle

| Field | Description |
| --- | --- |
| `result` |  |
| `validity_period_days` | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

Operations: create, load, remove.

API path: `/accounts/{account_id}/gateway/certificates/{certificate_id}/activate`

#### ZeroTrustGatewaySingleResponse2

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/gateway/operations/{operation_id}`

#### ZeroTrustGatewaySingleResponse3

| Field | Description |
| --- | --- |
| `client_default` | Indicate whether this location is the default location. |
| `dns_destination_ips_id` | Specify the identifier of the pair of IPv4 addresses assigned to this location. |
| `ecs_support` | Indicate whether the location must resolve EDNS queries. |
| `endpoints` | Configure the destination endpoints for this location. |
| `max_ttl` | Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. |
| `name` | Specify the location name. |
| `networks` | Specify the list of network ranges from which requests at this location originate. |
| `result` |  |

Operations: create, load, update.

API path: `/accounts/{account_id}/gateway/locations`

#### ZeroTrustGatewaySingleResponse4

| Field | Description |
| --- | --- |
| `action` | Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`. |
| `description` | Specify the rule description. |
| `device_posture` | Specify the wirefilter expression used for device posture check. |
| `enabled` | Specify whether the rule is enabled. |
| `expiration` | Defines the expiration time stamp and default duration of a DNS policy. |
| `filters` | Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| `identity` | Specify the wirefilter expression used for identity matching. |
| `name` | Specify the rule name. |
| `precedence` | Set the order of your rules. |
| `result` |  |
| `rule_settings` | Defines settings for this rule. |
| `schedule` | Defines the schedule for activating DNS policies. |
| `traffic` | Specify the wirefilter expression used for traffic matching. |

Operations: create, load, patch, update.

API path: `/accounts/{account_id}/gateway/rules/{rule_id}/reset_expiration`

#### ZeroTrustGatewaySingleResponse5

| Field | Description |
| --- | --- |
| `ips` | Specify the list of CIDRs to restrict ingress connections. |
| `kind` | The proxy endpoint kind. |
| `name` | Specify the name of the proxy endpoint. |
| `result` |  |

Operations: create, load, update.

API path: `/accounts/{account_id}/gateway/proxy_endpoints`

#### ZeroTrustGatewaySingleResponse6

| Field | Description |
| --- | --- |
| `public_key` | Provide the Base64-encoded HPKE public key that encrypts SSH session logs. |
| `result` |  |

Operations: create, load, update.

API path: `/accounts/{account_id}/gateway/audit_ssh_settings/rotate_seed`

#### ZeroTrustGatewaySingleResponse7

| Field | Description |
| --- | --- |
| `contents` | Actual contents of the PAC file |
| `description` | Detailed description of the PAC file. |
| `name` | Name of the PAC file. |
| `result` |  |
| `slug` | URL-friendly version of the PAC file name. |

Operations: create, load, update.

API path: `/accounts/{account_id}/gateway/pacfiles`

#### ZeroTrustGatewaySingleResponseWithListItem

| Field | Description |
| --- | --- |
| `description` | Provide the list description. |
| `items` | Add items to the list. |
| `name` | Specify the list name. |
| `type` | Specify the list type. |

Operations: create.

API path: `/accounts/{account_id}/gateway/lists`

#### ZeroTrustRiskScoring

| Field | Description |
| --- | --- |
| `behaviors` |  |
| `result` |  |

Operations: create, load, update.

API path: `/accounts/{account_id}/zt_risk_scoring/{user_id}/reset`

#### ZeroTrustRiskScoringIntegration

| Field | Description |
| --- | --- |
| `active` | Whether this integration is enabled. |
| `id` |  |
| `integration_type` |  |
| `reference_id` | A reference id that can be supplied by the client. |
| `result` |  |
| `tenant_url` | The base url of the tenant, e.g. |

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/zt_risk_scoring/integrations`



## Entities


### ClientVersion

Create an instance: `const client_version = client.ClientVersion()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` | Indicates whether the API call was successful. |

#### Example: List

```ts
const client_versions = await client.ClientVersion().list({ account_id: "example", release_track: "example", target_environment: "example" })
```


### Cni

Create an instance: `const cni = client.Cni()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeploymentGroup

Create an instance: `const deployment_group = client.DeploymentGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `name` | `string` | A user-friendly name for the deployment group. |
| `policy_ids` | `any[]` | Contains an optional list of policy IDs assigned to a group. |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` | Indicates whether the API call was successful. |
| `version_config` | `any[]` | Contains at least one version configuration. |

#### Example: Load

```ts
const deployment_group = await client.DeploymentGroup().load({ id: 'deployment_group_id', account_id: 'account_id' })
```

#### Example: List

```ts
const deployment_groups = await client.DeploymentGroup().list({ account_id: "example" })
```

#### Example: Create

```ts
const deployment_group = await client.DeploymentGroup().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  result: {},
  result_info: {},
  success: true,
  version_config: [],
})
```


### DexRemoteCommand

Create an instance: `const dex_remote_command = client.DexRemoteCommand()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commands` | `any[]` | List of device-level commands to execute |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const dex_remote_command = await client.DexRemoteCommand().load({ account_id: 'account_id' })
```

#### Example: Create

```ts
const dex_remote_command = await client.DexRemoteCommand().create({
  account_id: 'example_account_id',
  commands: [],
})
```


### DexRule

Create an instance: `const dex_rule = client.DexRule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `match` | `string` | The wirefilter expression to match. |
| `name` | `string` | The name of the Rule. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const dex_rule = await client.DexRule().load({ id: 'dex_rule_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const dex_rule = await client.DexRule().create({
  account_id: 'example_account_id',
  match: 'example_match',
  name: 'example_name',
})
```


### DexSyntheticApplicationMonitoring

Create an instance: `const dex_synthetic_application_monitoring = client.DexSyntheticApplicationMonitoring()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | array of colos. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const dex_synthetic_application_monitoring = await client.DexSyntheticApplicationMonitoring().load({ account_id: 'account_id' })
```

#### Example: List

```ts
const dex_synthetic_application_monitorings = await client.DexSyntheticApplicationMonitoring().list({ account_id: "example", from: "example", to: "example" })
```


### DigitalExperienceMonitoringDevice

Create an instance: `const digital_experience_monitoring_device = client.DigitalExperienceMonitoringDevice()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alwaysOn` | `boolean` |  |
| `batteryCharging` | `boolean` |  |
| `batteryCycles` | `number` |  |
| `batteryPct` | `number` |  |
| `colo` | `string` | Cloudflare colo airport code. |
| `connectionType` | `string` |  |
| `cpuPct` | `number` |  |
| `cpuPctByApp` | `any[]` |  |
| `deviceId` | `string` | Device identifier (UUID v4) |
| `deviceIpv4` | `Record<string, any>` |  |
| `deviceIpv6` | `Record<string, any>` |  |
| `deviceName` | `string` | Device identifier (human readable). |
| `deviceRegistration` | `string` | Deprecated: use registrationId. |
| `diskReadBps` | `number` |  |
| `diskUsagePct` | `number` |  |
| `diskWriteBps` | `number` |  |
| `dohSubdomain` | `string` |  |
| `estimatedLossPct` | `number` |  |
| `firewallEnabled` | `boolean` |  |
| `gatewayIpv4` | `Record<string, any>` |  |
| `gatewayIpv6` | `Record<string, any>` |  |
| `handshakeLatencyMs` | `number` |  |
| `ispIpv4` | `Record<string, any>` |  |
| `ispIpv6` | `Record<string, any>` |  |
| `metal` | `string` |  |
| `mode` | `string` | The mode under which the WARP client is run. |
| `networkRcvdBps` | `number` |  |
| `networkSentBps` | `number` |  |
| `networkSsid` | `string` |  |
| `personEmail` | `string` | User contact email address |
| `platform` | `string` | Operating system. |
| `ramAvailableKb` | `number` |  |
| `ramUsedPct` | `number` |  |
| `ramUsedPctByApp` | `any[]` |  |
| `registrationId` | `string` | Device registration identifier (UUID v4). |
| `rtt` | `Record<string, any>` | Round-trip time statistics for the WARP tunnel. |
| `status` | `string` | Network status. |
| `switchLocked` | `boolean` |  |
| `timestamp` | `string` |  |
| `tunnelStats` | `Record<string, any>` | WARP tunnel packet and byte counters. |
| `tunnelType` | `string` |  |
| `version` | `string` | WARP client version. |
| `wifiStrengthDbm` | `number` |  |

#### Example: List

```ts
const digital_experience_monitoring_devices = await client.DigitalExperienceMonitoringDevice().list({ account_id: "example", device_id: "example", since_minute: 1 })
```


### DigitalExperienceMonitoringDexDeleteResponseCollection

Create an instance: `const digital_experience_monitoring_dex_delete_response_collection = client.DigitalExperienceMonitoringDexDeleteResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DigitalExperienceMonitoringDexResponseCollection

Create an instance: `const digital_experience_monitoring_dex_response_collection = client.DigitalExperienceMonitoringDexResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const digital_experience_monitoring_dex_response_collections = await client.DigitalExperienceMonitoringDexResponseCollection().list({ account_id: "example" })
```


### DigitalExperienceMonitoringDexSingle

Create an instance: `const digital_experience_monitoring_dex_single = client.DigitalExperienceMonitoringDexSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` | Date the test was created, in RFC 3339 format. |
| `data` | `Record<string, any>` | The configuration object which contains the details for the WARP client to conduct the test. |
| `description` | `string` | Additional details about the test. |
| `enabled` | `boolean` | Determines whether or not the test is active. |
| `interval` | `string` | How often the test will run. |
| `name` | `string` | The name of the DEX test. |
| `result` | `Record<string, any>` |  |
| `target_policies` | `any` |  |
| `targeted` | `boolean` |  |
| `test_id` | `string` | The unique identifier for the test. |
| `updated` | `string` | Date the test was last updated, in RFC 3339 format. |

#### Example: Load

```ts
const digital_experience_monitoring_dex_single = await client.DigitalExperienceMonitoringDexSingle().load({ account_id: 'account_id', dex_test_id: 'dex_test_id' })
```

#### Example: Create

```ts
const digital_experience_monitoring_dex_single = await client.DigitalExperienceMonitoringDexSingle().create({
  account_id: 'example_account_id',
  data: {},
  enabled: true,
  interval: 'example_interval',
  name: 'example_name',
  result: {},
})
```


### DigitalExperienceMonitoringFleetStatusDevice

Create an instance: `const digital_experience_monitoring_fleet_status_device = client.DigitalExperienceMonitoringFleetStatusDevice()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const digital_experience_monitoring_fleet_status_devices = await client.DigitalExperienceMonitoringFleetStatusDevice().list({ account_id: "example", from: "example", page: 1, per_page: 1, to: "example" })
```


### DigitalExperienceMonitoringFleetStatusLive

Create an instance: `const digital_experience_monitoring_fleet_status_live = client.DigitalExperienceMonitoringFleetStatusLive()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const digital_experience_monitoring_fleet_status_live = await client.DigitalExperienceMonitoringFleetStatusLive().load({ account_id: 'account_id', since_minute: 1 })
```


### DigitalExperienceMonitoringFleetStatusOverTime

Create an instance: `const digital_experience_monitoring_fleet_status_over_time = client.DigitalExperienceMonitoringFleetStatusOverTime()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const digital_experience_monitoring_fleet_status_over_time = await client.DigitalExperienceMonitoringFleetStatusOverTime().load({ account_id: 'account_id', from: 'from', to: 'to' })
```


### Interconnect

Create an instance: `const interconnect = client.Interconnect()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const interconnect = await client.Interconnect().load({ account_id: 'account_id', icon: 'icon' })
```


### IpProfile

Create an instance: `const ip_profile = client.IpProfile()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | An optional description of the Device IP profile. |
| `enabled` | `boolean` | Whether the Device IP profile will be applied to matching devices. |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `match` | `string` | The wirefilter expression to match registrations. |
| `messages` | `any[]` |  |
| `name` | `string` | A user-friendly name for the Device IP profile. |
| `precedence` | `number` | The precedence of the Device IP profile. |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `subnet_id` | `string` | The ID of the Subnet. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const ip_profile = await client.IpProfile().load({ id: 'ip_profile_id', account_id: 'account_id' })
```

#### Example: List

```ts
const ip_profiles = await client.IpProfile().list({ account_id: "example" })
```

#### Example: Create

```ts
const ip_profile = await client.IpProfile().create({
  account_id: 'example_account_id',
  errors: [],
  match: 'example_match',
  messages: [],
  name: 'example_name',
  precedence: 1,
  result: {},
  result_info: {},
  subnet_id: 'example_subnet_id',
  success: true,
})
```


### List

Create an instance: `const list = client.List()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Location

Create an instance: `const location = client.Location()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### NscCni

Create an instance: `const nsc_cni = client.NscCni()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | Customer account tag |
| `bgp` | `Record<string, any>` |  |
| `bgp_mode` | `string` | The BGP mode for a CNI. |
| `cust_ip` | `string` | Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`. |
| `id` | `string` |  |
| `interconnect` | `string` | Interconnect identifier hosting this CNI |
| `magic` | `Record<string, any>` |  |
| `p2p_ip` | `string` | Cloudflare end of the point-to-point link |

#### Example: Load

```ts
const nsc_cni = await client.NscCni().load({ id: 'nsc_cni_id', account_id: 'account_id' })
```

#### Example: List

```ts
const nsc_cnis = await client.NscCni().list({ account_id: "example" })
```

#### Example: Create

```ts
const nsc_cni = await client.NscCni().create({
  account_id: 'example_account_id',
  account: 'example_account',
  bgp: {},
  cust_ip: 'example_cust_ip',
  id: 'example_id',
  interconnect: 'example_interconnect',
  magic: {},
  p2p_ip: 'example_p2p_ip',
})
```


### NscDefaultName

Create an instance: `const nsc_default_name = client.NscDefaultName()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The default customer name for the interconnect |

#### Example: Load

```ts
const nsc_default_name = await client.NscDefaultName().load({ account_id: 'account_id', interconnect_id: 'interconnect_id' })
```


### NscInterconnect

Create an instance: `const nsc_interconnect = client.NscInterconnect()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `items` | `any[]` |  |
| `next` | `number` |  |

#### Example: Load

```ts
const nsc_interconnect = await client.NscInterconnect().load({ id: 'nsc_interconnect_id', account_id: 'account_id' })
```

#### Example: List

```ts
const nsc_interconnects = await client.NscInterconnect().list({ account_id: "example" })
```

#### Example: Create

```ts
const nsc_interconnect = await client.NscInterconnect().create({
  account_id: 'example_account_id',
  items: [],
})
```


### NscSetting

Create an instance: `const nsc_setting = client.NscSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_asn` | `number` |  |

#### Example: Load

```ts
const nsc_setting = await client.NscSetting().load({ account_id: 'account_id' })
```


### NscSlotInfo

Create an instance: `const nsc_slot_info = client.NscSlotInfo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | Customer account tag |
| `address` | `any[]` |  |
| `ccr_device_name` | `string` |  |
| `facility` | `Record<string, any>` |  |
| `id` | `string` | Slot ID |
| `name` | `string` |  |
| `occupied` | `boolean` | Whether the slot is occupied or not |
| `site` | `string` |  |
| `speed` | `string` |  |

#### Example: Load

```ts
const nsc_slot_info = await client.NscSlotInfo().load({ account_id: 'account_id', slot: 'slot' })
```

#### Example: List

```ts
const nsc_slot_infos = await client.NscSlotInfo().list({ account_id: "example" })
```


### NscStatusInfo

Create an instance: `const nsc_status_info = client.NscStatusInfo()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const nsc_status_info = await client.NscStatusInfo().load({ account_id: 'account_id', icon: 'icon' })
```


### OverrideCode

Create an instance: `const override_code = client.OverrideCode()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `device_id` | `string` | Physical device ID. |
| `duration_hours` | `number` | Number of hours for which the override code should remain valid. |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `scope` | `string` | Whether the code applies to every device in the account or one physical device. |
| `success` | `boolean` | Whether the API call was successful. |
| `type` | `string` | The feature that the override code applies to. |

#### Example: Create

```ts
const override_code = await client.OverrideCode().create({
  account_id: 'example_account_id',
  duration_hours: 1,
  errors: [],
  messages: [],
  result: {},
  scope: 'example_scope',
  success: true,
  type: 'example_type',
})
```


### Pacfile

Create an instance: `const pacfile = client.Pacfile()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### PhysicalDevice

Create an instance: `const physical_device = client.PhysicalDevice()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | A WARP Device. |
| `result_info` | `Record<string, any>` | V4 public API Pagination/Cursor info. |
| `success` | `boolean` | Whether the API call was successful. |
| `tags` | `Record<string, any>` | Replaces all tags assigned to the physical device. |

#### Example: Load

```ts
const physical_device = await client.PhysicalDevice().load({ id: 'physical_device_id', account_id: 'account_id' })
```

#### Example: List

```ts
const physical_devices = await client.PhysicalDevice().list({ account_id: "example" })
```

#### Example: Create

```ts
const physical_device = await client.PhysicalDevice().create({
  account_id: 'example_account_id',
  id: 'example_id',
  errors: [],
  messages: [],
  result: {},
  result_info: {},
  success: true,
})
```


### ProxyEndpoint

Create an instance: `const proxy_endpoint = client.ProxyEndpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Registration

Create an instance: `const registration = client.Registration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | A WARP configuration tied to a single user. |
| `result_info` | `Record<string, any>` | V4 public API Pagination/Cursor info. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const registration = await client.Registration().load({ id: 'registration_id', account_id: 'account_id' })
```

#### Example: List

```ts
const registrations = await client.Registration().list({ account_id: "example" })
```

#### Example: Create

```ts
const registration = await client.Registration().create({
  account_id: 'example_account_id',
  id: [],
  errors: [],
  messages: [],
  result: {},
  result_info: {},
  success: true,
})
```


### Rule

Create an instance: `const rule = client.Rule()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### TeamsDevicesApiResponseSingle

Create an instance: `const teams_devices_api_response_single = client.TeamsDevicesApiResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const teams_devices_api_response_single = await client.TeamsDevicesApiResponseSingle().create({
  account_id: 'example_account_id',
})
```


### TeamsDevicesComponentsSchemasResponseCollection

Create an instance: `const teams_devices_components_schemas_response_collection = client.TeamsDevicesComponentsSchemasResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const teams_devices_components_schemas_response_collections = await client.TeamsDevicesComponentsSchemasResponseCollection().list({ account_id: "example" })
```


### TeamsDevicesComponentsSchemasSingle

Create an instance: `const teams_devices_components_schemas_single = client.TeamsDevicesComponentsSchemasSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Record<string, any>` | The configuration object containing information for the WARP client to detect the managed network. |
| `name` | `string` | The name of the device managed network. |
| `result` | `Record<string, any>` |  |
| `type` | `string` | The type of device managed network. |

#### Example: Load

```ts
const teams_devices_components_schemas_single = await client.TeamsDevicesComponentsSchemasSingle().load({ account_id: 'account_id', network_id: 'network_id' })
```

#### Example: Create

```ts
const teams_devices_components_schemas_single = await client.TeamsDevicesComponentsSchemasSingle().create({
  account_id: 'example_account_id',
  config: {},
  name: 'example_name',
  type: 'example_type',
})
```


### TeamsDevicesDefaultDeviceSetting

Create an instance: `const teams_devices_default_device_setting = client.TeamsDevicesDefaultDeviceSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_mode_switch` | `boolean` | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `boolean` | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `boolean` | Whether to allow devices to leave the organization. |
| `auto_connect` | `number` | The amount of time in seconds to reconnect after having been disabled. |
| `captive_portal` | `number` | Turn on the captive portal after the specified amount of time. |
| `disable_auto_fallback` | `boolean` | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `any[]` | List of DNS search suffixes to apply to clients. |
| `exclude` | `any[]` | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `boolean` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `Record<string, any>` | Global Acceleration settings for China. |
| `include` | `any[]` | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `number` | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `number` | The size of the subnet for the local access network. |
| `register_interface_ip_with_dns` | `boolean` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `Record<string, any>` |  |
| `sccm_vpn_boundary_support` | `boolean` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `Record<string, any>` |  |
| `support_url` | `string` | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `boolean` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | Determines which tunnel protocol to use. |
| `uninstall_protection` | `boolean` | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `Record<string, any>` | Virtual network access settings for the device. |

#### Example: Load

```ts
const teams_devices_default_device_setting = await client.TeamsDevicesDefaultDeviceSetting().load({ account_id: 'account_id' })
```


### TeamsDevicesDevice

Create an instance: `const teams_devices_device = client.TeamsDevicesDevice()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const teams_devices_device = await client.TeamsDevicesDevice().load({ id: 'teams_devices_device_id', account_id: 'account_id' })
```

#### Example: List

```ts
const teams_devices_devices = await client.TeamsDevicesDevice().list({ account_id: "example" })
```


### TeamsDevicesDeviceSetting

Create an instance: `const teams_devices_device_setting = client.TeamsDevicesDeviceSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_mode_switch` | `boolean` | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `boolean` | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `boolean` | Whether to allow devices to leave the organization. |
| `auto_connect` | `number` | The amount of time in seconds to reconnect after having been disabled. |
| `browser_extension_config` | `Record<string, any>` | Browser extension proxy settings. |
| `captive_portal` | `number` | Turn on the captive portal after the specified amount of time. |
| `default` | `boolean` | Whether the policy is the account default. |
| `description` | `string` | A description of the policy. |
| `disable_auto_fallback` | `boolean` | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `any[]` | List of DNS search suffixes to apply to clients. |
| `enabled` | `boolean` | Whether the policy will be applied to matching devices. |
| `exclude` | `any[]` | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `boolean` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `Record<string, any>` | Global Acceleration settings for China. |
| `include` | `any[]` | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `number` | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `number` | The size of the subnet for the local access network. |
| `match` | `string` | The wirefilter expression to match devices. |
| `name` | `string` | The name of the device settings profile. |
| `precedence` | `number` | The precedence of the policy. |
| `profile_type` | `string` | The client type to which the device settings profile applies. |
| `register_interface_ip_with_dns` | `boolean` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `Record<string, any>` |  |
| `sccm_vpn_boundary_support` | `boolean` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `Record<string, any>` |  |
| `support_url` | `string` | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `boolean` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | Determines which tunnel protocol to use. |
| `uninstall_protection` | `boolean` | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `Record<string, any>` | Virtual network access settings for the device. |

#### Example: Load

```ts
const teams_devices_device_setting = await client.TeamsDevicesDeviceSetting().load({ account_id: 'account_id', policy_id: 'policy_id' })
```

#### Example: Create

```ts
const teams_devices_device_setting = await client.TeamsDevicesDeviceSetting().create({
  account_id: 'example_account_id',
  browser_extension_config: {},
  global_acceleration: {},
  name: 'example_name',
  virtual_networks: {},
})
```


### TeamsDevicesDeviceSettingsResponseCollection

Create an instance: `const teams_devices_device_settings_response_collection = client.TeamsDevicesDeviceSettingsResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const teams_devices_device_settings_response_collections = await client.TeamsDevicesDeviceSettingsResponseCollection().list({ account_id: "example" })
```


### TeamsDevicesFallbackDomainResponseCollection

Create an instance: `const teams_devices_fallback_domain_response_collection = client.TeamsDevicesFallbackDomainResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const teams_devices_fallback_domain_response_collections = await client.TeamsDevicesFallbackDomainResponseCollection().list({ account_id: "example" })
```


### TeamsDevicesGlobalWarpOverride

Create an instance: `const teams_devices_global_warp_override = client.TeamsDevicesGlobalWarpOverride()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disconnect` | `boolean` | Disconnects all devices on the account using Global WARP override. |
| `justification` | `string` | Reasoning for setting the Global WARP override state. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const teams_devices_global_warp_override = await client.TeamsDevicesGlobalWarpOverride().load({ account_id: 'account_id' })
```

#### Example: Create

```ts
const teams_devices_global_warp_override = await client.TeamsDevicesGlobalWarpOverride().create({
  account_id: 'example_account_id',
  disconnect: true,
})
```


### TeamsDevicesId

Create an instance: `const teams_devices_id = client.TeamsDevicesId()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TeamsDevicesOverrideCode

Create an instance: `const teams_devices_override_code = client.TeamsDevicesOverrideCode()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const teams_devices_override_code = await client.TeamsDevicesOverrideCode().load({ account_id: 'account_id', device_id: 'device_id' })
```


### TeamsDevicesResponseCollection

Create an instance: `const teams_devices_response_collection = client.TeamsDevicesResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const teams_devices_response_collections = await client.TeamsDevicesResponseCollection().list({ account_id: "example" })
```


### TeamsDevicesSchemasId

Create an instance: `const teams_devices_schemas_id = client.TeamsDevicesSchemasId()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TeamsDevicesSchemasResponseCollection

Create an instance: `const teams_devices_schemas_response_collection = client.TeamsDevicesSchemasResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const teams_devices_schemas_response_collections = await client.TeamsDevicesSchemasResponseCollection().list({ account_id: "example" })
```


### TeamsDevicesSchemasSingle

Create an instance: `const teams_devices_schemas_single = client.TeamsDevicesSchemasSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Record<string, any>` | The configuration object containing third-party integration information. |
| `interval` | `string` | The interval between each posture check with the third-party API. |
| `name` | `string` | The name of the device posture integration. |
| `result` | `Record<string, any>` |  |
| `type` | `string` | The type of device posture integration. |

#### Example: Load

```ts
const teams_devices_schemas_single = await client.TeamsDevicesSchemasSingle().load({ account_id: 'account_id', integration_id: 'integration_id' })
```

#### Example: Create

```ts
const teams_devices_schemas_single = await client.TeamsDevicesSchemasSingle().create({
  account_id: 'example_account_id',
  config: {},
  interval: 'example_interval',
  name: 'example_name',
  type: 'example_type',
})
```


### TeamsDevicesSingle

Create an instance: `const teams_devices_single = client.TeamsDevicesSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | The description of the device posture rule. |
| `expiration` | `string` | Sets the expiration time for a posture check result. |
| `input` | `Record<string, any>` | The value to be checked against. |
| `match` | `any[]` | The conditions that the client must match to run the rule. |
| `name` | `string` | The name of the device posture rule. |
| `result` | `Record<string, any>` |  |
| `schedule` | `string` | Polling frequency for the WARP client posture check. |
| `type` | `string` | The type of device posture rule. |

#### Example: Load

```ts
const teams_devices_single = await client.TeamsDevicesSingle().load({ account_id: 'account_id', rule_id: 'rule_id' })
```

#### Example: Create

```ts
const teams_devices_single = await client.TeamsDevicesSingle().create({
  account_id: 'example_account_id',
  name: 'example_name',
  type: 'example_type',
})
```


### TeamsDevicesSplitTunnelIncludeResponseCollection

Create an instance: `const teams_devices_split_tunnel_include_response_collection = client.TeamsDevicesSplitTunnelIncludeResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const teams_devices_split_tunnel_include_response_collections = await client.TeamsDevicesSplitTunnelIncludeResponseCollection().list({ account_id: "example" })
```


### TeamsDevicesSplitTunnelResponseCollection

Create an instance: `const teams_devices_split_tunnel_response_collection = client.TeamsDevicesSplitTunnelResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const teams_devices_split_tunnel_response_collections = await client.TeamsDevicesSplitTunnelResponseCollection().list({ account_id: "example" })
```


### TeamsDevicesZeroTrustAccountDeviceSetting

Create an instance: `const teams_devices_zero_trust_account_device_setting = client.TeamsDevicesZeroTrustAccountDeviceSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disable_for_time` | `number` | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| `external_emergency_signal_enabled` | `boolean` | Controls whether the external emergency disconnect feature is enabled. |
| `external_emergency_signal_fingerprint` | `string` | The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. |
| `external_emergency_signal_interval` | `string` | The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). |
| `external_emergency_signal_url` | `string` | The HTTPS URL from which to fetch the emergency disconnect signal. |
| `gateway_proxy_enabled` | `boolean` | Enable gateway proxy filtering on TCP. |
| `gateway_udp_proxy_enabled` | `boolean` | Enable gateway proxy filtering on UDP. |
| `result` | `Record<string, any>` |  |
| `root_certificate_installation_enabled` | `boolean` | Enable installation of cloudflare managed root certificate. |
| `use_zt_virtual_ip` | `boolean` | Enable using CGNAT virtual IPv4. |

#### Example: Load

```ts
const teams_devices_zero_trust_account_device_setting = await client.TeamsDevicesZeroTrustAccountDeviceSetting().load({ account_id: 'account_id' })
```


### Tunnel

Create an instance: `const tunnel = client.Tunnel()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tunnels = await client.Tunnel().list({ account_id: "example" })
```


### TunnelCfdTunnelResponseCollection

Create an instance: `const tunnel_cfd_tunnel_response_collection = client.TunnelCfdTunnelResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tunnel_cfd_tunnel_response_collections = await client.TunnelCfdTunnelResponseCollection().list({ account_id: "example" })
```


### TunnelCfdTunnelResponseSingle

Create an instance: `const tunnel_cfd_tunnel_response_single = client.TunnelCfdTunnelResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config_src` | `string` | Indicates if this is a locally or remotely configured tunnel. |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `name` | `string` | A user-friendly name for a tunnel. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |
| `tunnel_secret` | `string` | Sets the password required to run a locally-managed tunnel. |

#### Example: Load

```ts
const tunnel_cfd_tunnel_response_single = await client.TunnelCfdTunnelResponseSingle().load({ account_id: 'account_id', tunnel_id: 'tunnel_id' })
```

#### Example: Create

```ts
const tunnel_cfd_tunnel_response_single = await client.TunnelCfdTunnelResponseSingle().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  result: 'example_result',
  success: true,
})
```


### TunnelConfiguration

Create an instance: `const tunnel_configuration = client.TunnelConfiguration()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Record<string, any>` | The tunnel configuration and ingress rules. |
| `result` | `Record<string, any>` | Cloudflare Tunnel configuration |

#### Example: Load

```ts
const tunnel_configuration = await client.TunnelConfiguration().load({ account_id: 'account_id', cfd_tunnel_id: 'cfd_tunnel_id' })
```


### TunnelEmpty

Create an instance: `const tunnel_empty = client.TunnelEmpty()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_id` | `string` | UUID of the Cloudflare Tunnel connector. |


### TunnelHostnameRouteResponseCollection

Create an instance: `const tunnel_hostname_route_response_collection = client.TunnelHostnameRouteResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tunnel_hostname_route_response_collections = await client.TunnelHostnameRouteResponseCollection().list({ account_id: "example" })
```


### TunnelHostnameRouteResponseSingle

Create an instance: `const tunnel_hostname_route_response_single = client.TunnelHostnameRouteResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | An optional description of the hostname route. |
| `errors` | `any[]` |  |
| `hostname` | `string` | The hostname of the route. |
| `messages` | `any[]` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |
| `tunnel_id` | `string` | UUID of the tunnel. |

#### Example: Load

```ts
const tunnel_hostname_route_response_single = await client.TunnelHostnameRouteResponseSingle().load({ account_id: 'account_id', hostname_route_id: 'hostname_route_id' })
```

#### Example: Create

```ts
const tunnel_hostname_route_response_single = await client.TunnelHostnameRouteResponseSingle().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: 'example_result',
  success: true,
})
```


### TunnelMeshConfigurationResponseSingle

Create an instance: `const tunnel_mesh_configuration_response_single = client.TunnelMeshConfigurationResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Record<string, any>` | Provider-specific configuration. |
| `ha_mode` | `string` | High-availability mode for the WARP Connector tunnel. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const tunnel_mesh_configuration_response_single = await client.TunnelMeshConfigurationResponseSingle().load({ account_id: 'account_id', warp_connector_id: 'warp_connector_id' })
```


### TunnelRouteResponseSingle

Create an instance: `const tunnel_route_response_single = client.TunnelRouteResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | Optional remark describing the route. |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `network` | `string` | The private IPv4 or IPv6 range connected by the route, in CIDR notation. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |
| `tunnel_id` | `string` | UUID of the tunnel. |
| `virtual_network_id` | `string` | UUID of the virtual network. |

#### Example: Load

```ts
const tunnel_route_response_single = await client.TunnelRouteResponseSingle().load({ account_id: 'account_id', route_id: 'route_id' })
```

#### Example: Create

```ts
const tunnel_route_response_single = await client.TunnelRouteResponseSingle().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  network: 'example_network',
  result: 'example_result',
  success: true,
  tunnel_id: 'example_tunnel_id',
})
```


### TunnelSubnetResponseCollection

Create an instance: `const tunnel_subnet_response_collection = client.TunnelSubnetResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tunnel_subnet_response_collections = await client.TunnelSubnetResponseCollection().list({ account_id: "example" })
```


### TunnelSubnetResponseSingle

Create an instance: `const tunnel_subnet_response_single = client.TunnelSubnetResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | An optional description of the subnet. |
| `errors` | `any[]` |  |
| `is_default_network` | `boolean` | If `true`, this is the default subnet for the account. |
| `messages` | `any[]` |  |
| `name` | `string` | A user-friendly name for the subnet. |
| `network` | `string` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```ts
const tunnel_subnet_response_single = await client.TunnelSubnetResponseSingle().load({ account_id: 'account_id', address_family: 'address_family' })
```

#### Example: Create

```ts
const tunnel_subnet_response_single = await client.TunnelSubnetResponseSingle().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  network: 'example_network',
  result: 'example_result',
  success: true,
})
```


### TunnelSubnetResponseSingleNullable

Create an instance: `const tunnel_subnet_response_single_nullable = client.TunnelSubnetResponseSingleNullable()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TunnelTeamnetResponseCollection

Create an instance: `const tunnel_teamnet_response_collection = client.TunnelTeamnetResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tunnel_teamnet_response_collections = await client.TunnelTeamnetResponseCollection().list({ account_id: "example" })
```


### TunnelTeamnetResponseSingle

Create an instance: `const tunnel_teamnet_response_single = client.TunnelTeamnetResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```ts
const tunnel_teamnet_response_single = await client.TunnelTeamnetResponseSingle().load({ account_id: 'account_id', ip: 'ip' })
```


### TunnelTunnelClient

Create an instance: `const tunnel_tunnel_client = client.TunnelTunnelClient()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```ts
const tunnel_tunnel_client = await client.TunnelTunnelClient().load({ account_id: 'account_id', cfd_tunnel_id: 'cfd_tunnel_id', connector_id: 'connector_id' })
```


### TunnelTunnelConnection

Create an instance: `const tunnel_tunnel_connection = client.TunnelTunnelConnection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tunnel_tunnel_connections = await client.TunnelTunnelConnection().list({ account_id: "example", cfd_tunnel_id: "example" })
```


### TunnelTunnelResponseToken

Create an instance: `const tunnel_tunnel_response_token = client.TunnelTunnelResponseToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `resources` | `any[]` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```ts
const tunnel_tunnel_response_tokens = await client.TunnelTunnelResponseToken().list({ account_id: "example" })
```

#### Example: Create

```ts
const tunnel_tunnel_response_token = await client.TunnelTunnelResponseToken().create({
  account_id: 'example_account_id',
  cfd_tunnel_id: 'example_cfd_tunnel_id',
  errors: [],
  messages: [],
  resources: [],
  result: 'example_result',
  success: true,
})
```


### TunnelTunnelWarpConnectorClient

Create an instance: `const tunnel_tunnel_warp_connector_client = client.TunnelTunnelWarpConnectorClient()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```ts
const tunnel_tunnel_warp_connector_client = await client.TunnelTunnelWarpConnectorClient().load({ account_id: 'account_id', connector_id: 'connector_id', warp_connector_id: 'warp_connector_id' })
```


### TunnelTunnelWarpConnectorConnection

Create an instance: `const tunnel_tunnel_warp_connector_connection = client.TunnelTunnelWarpConnectorConnection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tunnel_tunnel_warp_connector_connections = await client.TunnelTunnelWarpConnectorConnection().list({ account_id: "example", warp_connector_id: "example" })
```


### TunnelVnetResponseCollection

Create an instance: `const tunnel_vnet_response_collection = client.TunnelVnetResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tunnel_vnet_response_collections = await client.TunnelVnetResponseCollection().list({ account_id: "example" })
```


### TunnelVnetResponseSingle

Create an instance: `const tunnel_vnet_response_single = client.TunnelVnetResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | Optional remark describing the virtual network. |
| `is_default` | `boolean` | If `true`, this virtual network is the default for the account. |
| `is_default_network` | `boolean` | If `true`, this virtual network is the default for the account. |
| `name` | `string` | A user-friendly name for the virtual network. |

#### Example: Load

```ts
const tunnel_vnet_response_single = await client.TunnelVnetResponseSingle().load({ account_id: 'account_id', virtual_network_id: 'virtual_network_id' })
```

#### Example: Create

```ts
const tunnel_vnet_response_single = await client.TunnelVnetResponseSingle().create({
  account_id: 'example_account_id',
})
```


### TunnelWarpConnectorResponseCollection

Create an instance: `const tunnel_warp_connector_response_collection = client.TunnelWarpConnectorResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tunnel_warp_connector_response_collections = await client.TunnelWarpConnectorResponseCollection().list({ account_id: "example" })
```


### TunnelWarpConnectorResponseSingle

Create an instance: `const tunnel_warp_connector_response_single = client.TunnelWarpConnectorResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `ha` | `boolean` | Indicates that the tunnel will be created to be highly available. |
| `messages` | `any[]` |  |
| `name` | `string` | A user-friendly name for a tunnel. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |
| `tunnel_secret` | `string` | Sets the password required to run a locally-managed tunnel. |

#### Example: Load

```ts
const tunnel_warp_connector_response_single = await client.TunnelWarpConnectorResponseSingle().load({ account_id: 'account_id', tunnel_id: 'tunnel_id' })
```

#### Example: Create

```ts
const tunnel_warp_connector_response_single = await client.TunnelWarpConnectorResponseSingle().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  result: 'example_result',
  success: true,
})
```


### TunnelZeroTrustConnectivitySetting

Create an instance: `const tunnel_zero_trust_connectivity_setting = client.TunnelZeroTrustConnectivitySetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `icmp_proxy_enabled` | `boolean` | A flag to enable the ICMP proxy for the account network. |
| `messages` | `any[]` |  |
| `offramp_warp_enabled` | `boolean` | A flag to enable WARP to WARP traffic. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```ts
const tunnel_zero_trust_connectivity_settings = await client.TunnelZeroTrustConnectivitySetting().list({ account_id: "example" })
```


### Warp

Create an instance: `const warp = client.Warp()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | An optional description of the subnet. |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `is_default_network` | `boolean` | If `true`, this is the default subnet for the account. |
| `messages` | `any[]` |  |
| `name` | `string` | A user-friendly name for the subnet. |
| `network` | `string` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```ts
const warp = await client.Warp().load({ id: 'warp_id', account_id: 'account_id' })
```


### WarpChangeEvent

Create an instance: `const warp_change_event = client.WarpChangeEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const warp_change_events = await client.WarpChangeEvent().list({ account_id: "example", from: "example", page: 1, per_page: 1, to: "example" })
```


### WarpTeamsDeviceApiOther

Create an instance: `const warp_teams_device_api_other = client.WarpTeamsDeviceApiOther()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const warp_teams_device_api_others = await client.WarpTeamsDeviceApiOther().list({ account_id: "example", registration_id: "example" })
```


### ZeroTrustGatewayApplicationsReviewStatus

Create an instance: `const zero_trust_gateway_applications_review_status = client.ZeroTrustGatewayApplicationsReviewStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved_apps` | `any[]` | Contains the ids of the approved applications. |
| `in_review_apps` | `any[]` | Contains the ids of the applications in review. |
| `result` | `Record<string, any>` |  |
| `unapproved_apps` | `any[]` | Contains the ids of the unapproved applications. |

#### Example: Load

```ts
const zero_trust_gateway_applications_review_status = await client.ZeroTrustGatewayApplicationsReviewStatus().load({ account_id: 'account_id' })
```


### ZeroTrustGatewayCsvOperationSingle

Create an instance: `const zero_trust_gateway_csv_operation_single = client.ZeroTrustGatewayCsvOperationSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const zero_trust_gateway_csv_operation_single = await client.ZeroTrustGatewayCsvOperationSingle().create({
  account_id: 'example_account_id',
})
```


### ZeroTrustGatewayCustomCertificateSetting

Create an instance: `const zero_trust_gateway_custom_certificate_setting = client.ZeroTrustGatewayCustomCertificateSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `binding_status` | `string` | Indicate the internal certificate status. |
| `enabled` | `boolean` | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| `id` | `string` | Specify the UUID of the certificate (ID from MTLS certificate store). |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const zero_trust_gateway_custom_certificate_setting = await client.ZeroTrustGatewayCustomCertificateSetting().load({ account_id: 'account_id' })
```


### ZeroTrustGatewayGatewayAccount

Create an instance: `const zero_trust_gateway_gateway_account = client.ZeroTrustGatewayGatewayAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const zero_trust_gateway_gateway_account = await client.ZeroTrustGatewayGatewayAccount().load({ account_id: 'account_id' })
```

#### Example: Create

```ts
const zero_trust_gateway_gateway_account = await client.ZeroTrustGatewayGatewayAccount().create({
  account_id: 'example_account_id',
})
```


### ZeroTrustGatewayGatewayAccountConfig

Create an instance: `const zero_trust_gateway_gateway_account_config = client.ZeroTrustGatewayGatewayAccountConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |
| `settings` | `Record<string, any>` | Specify account settings. |

#### Example: Load

```ts
const zero_trust_gateway_gateway_account_config = await client.ZeroTrustGatewayGatewayAccountConfig().load({ account_id: 'account_id' })
```


### ZeroTrustGatewayGatewayAccountEgressCidrPairList

Create an instance: `const zero_trust_gateway_gateway_account_egress_cidr_pair_list = client.ZeroTrustGatewayGatewayAccountEgressCidrPairList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const zero_trust_gateway_gateway_account_egress_cidr_pair_lists = await client.ZeroTrustGatewayGatewayAccountEgressCidrPairList().list({ account_id: "example" })
```


### ZeroTrustGatewayGatewayAccountLoggingSetting

Create an instance: `const zero_trust_gateway_gateway_account_logging_setting = client.ZeroTrustGatewayGatewayAccountLoggingSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `redact_pii` | `boolean` | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `result` | `Record<string, any>` |  |
| `settings_by_rule_type` | `Record<string, any>` | Configure logging settings for each rule type. |

#### Example: Load

```ts
const zero_trust_gateway_gateway_account_logging_setting = await client.ZeroTrustGatewayGatewayAccountLoggingSetting().load({ account_id: 'account_id' })
```


### ZeroTrustGatewayListItemResponseCollection

Create an instance: `const zero_trust_gateway_list_item_response_collection = client.ZeroTrustGatewayListItemResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` | Provide the list items. |
| `result_info` | `Record<string, any>` |  |

#### Example: List

```ts
const zero_trust_gateway_list_item_response_collections = await client.ZeroTrustGatewayListItemResponseCollection().list({ account_id: "example", list_id: "example" })
```


### ZeroTrustGatewayListSingle

Create an instance: `const zero_trust_gateway_list_single = client.ZeroTrustGatewayListSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `append` | `any[]` | Add items to the list. |
| `description` | `string` | Provide the list description. |
| `items` | `any[]` | Add items to the list. |
| `name` | `string` | Specify the list name. |
| `remove` | `any[]` | Lists of item values you want to remove. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const zero_trust_gateway_list_single = await client.ZeroTrustGatewayListSingle().load({ account_id: 'account_id', list_id: 'list_id' })
```


### ZeroTrustGatewayResponseCollection

Create an instance: `const zero_trust_gateway_response_collection = client.ZeroTrustGatewayResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const zero_trust_gateway_response_collections = await client.ZeroTrustGatewayResponseCollection().list({ account_id: "example" })
```


### ZeroTrustGatewayResponseCollection10

Create an instance: `const zero_trust_gateway_response_collection_10 = client.ZeroTrustGatewayResponseCollection10()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |
| `result_info` | `Record<string, any>` |  |

#### Example: List

```ts
const zero_trust_gateway_response_collection_10s = await client.ZeroTrustGatewayResponseCollection10().list({ account_id: "example" })
```


### ZeroTrustGatewayResponseCollection2

Create an instance: `const zero_trust_gateway_response_collection_2 = client.ZeroTrustGatewayResponseCollection2()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const zero_trust_gateway_response_collection_2s = await client.ZeroTrustGatewayResponseCollection2().list({ account_id: "example" })
```


### ZeroTrustGatewayResponseCollection3

Create an instance: `const zero_trust_gateway_response_collection_3 = client.ZeroTrustGatewayResponseCollection3()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const zero_trust_gateway_response_collection_3s = await client.ZeroTrustGatewayResponseCollection3().list({ account_id: "example" })
```


### ZeroTrustGatewayResponseCollection4

Create an instance: `const zero_trust_gateway_response_collection_4 = client.ZeroTrustGatewayResponseCollection4()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const zero_trust_gateway_response_collection_4s = await client.ZeroTrustGatewayResponseCollection4().list({ account_id: "example" })
```


### ZeroTrustGatewayResponseCollection5

Create an instance: `const zero_trust_gateway_response_collection_5 = client.ZeroTrustGatewayResponseCollection5()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const zero_trust_gateway_response_collection_5s = await client.ZeroTrustGatewayResponseCollection5().list({ account_id: "example" })
```


### ZeroTrustGatewayResponseCollection6

Create an instance: `const zero_trust_gateway_response_collection_6 = client.ZeroTrustGatewayResponseCollection6()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const zero_trust_gateway_response_collection_6s = await client.ZeroTrustGatewayResponseCollection6().list({ account_id: "example" })
```


### ZeroTrustGatewayResponseCollection7

Create an instance: `const zero_trust_gateway_response_collection_7 = client.ZeroTrustGatewayResponseCollection7()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const zero_trust_gateway_response_collection_7s = await client.ZeroTrustGatewayResponseCollection7().list({ account_id: "example" })
```


### ZeroTrustGatewayResponseCollection8

Create an instance: `const zero_trust_gateway_response_collection_8 = client.ZeroTrustGatewayResponseCollection8()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const zero_trust_gateway_response_collection_8s = await client.ZeroTrustGatewayResponseCollection8().list({ account_id: "example" })
```


### ZeroTrustGatewayResponseCollection9

Create an instance: `const zero_trust_gateway_response_collection_9 = client.ZeroTrustGatewayResponseCollection9()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const zero_trust_gateway_response_collection_9s = await client.ZeroTrustGatewayResponseCollection9().list({ account_id: "example" })
```


### ZeroTrustGatewaySingle

Create an instance: `const zero_trust_gateway_single = client.ZeroTrustGatewaySingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |
| `validity_period_days` | `number` | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

#### Example: Load

```ts
const zero_trust_gateway_single = await client.ZeroTrustGatewaySingle().load({ account_id: 'account_id', certificate_id: 'certificate_id' })
```

#### Example: Create

```ts
const zero_trust_gateway_single = await client.ZeroTrustGatewaySingle().create({
  account_id: 'example_account_id',
})
```


### ZeroTrustGatewaySingleResponse2

Create an instance: `const zero_trust_gateway_single_response_2 = client.ZeroTrustGatewaySingleResponse2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const zero_trust_gateway_single_response_2 = await client.ZeroTrustGatewaySingleResponse2().load({ account_id: 'account_id', operation_id: 'operation_id' })
```


### ZeroTrustGatewaySingleResponse3

Create an instance: `const zero_trust_gateway_single_response_3 = client.ZeroTrustGatewaySingleResponse3()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_default` | `boolean` | Indicate whether this location is the default location. |
| `dns_destination_ips_id` | `string` | Specify the identifier of the pair of IPv4 addresses assigned to this location. |
| `ecs_support` | `boolean` | Indicate whether the location must resolve EDNS queries. |
| `endpoints` | `Record<string, any>` | Configure the destination endpoints for this location. |
| `max_ttl` | `Record<string, any>` | Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. |
| `name` | `string` | Specify the location name. |
| `networks` | `any[]` | Specify the list of network ranges from which requests at this location originate. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const zero_trust_gateway_single_response_3 = await client.ZeroTrustGatewaySingleResponse3().load({ account_id: 'account_id', location_id: 'location_id' })
```

#### Example: Create

```ts
const zero_trust_gateway_single_response_3 = await client.ZeroTrustGatewaySingleResponse3().create({
  account_id: 'example_account_id',
  endpoints: {},
  max_ttl: {},
  name: 'example_name',
})
```


### ZeroTrustGatewaySingleResponse4

Create an instance: `const zero_trust_gateway_single_response_4 = client.ZeroTrustGatewaySingleResponse4()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` | Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`. |
| `description` | `string` | Specify the rule description. |
| `device_posture` | `string` | Specify the wirefilter expression used for device posture check. |
| `enabled` | `boolean` | Specify whether the rule is enabled. |
| `expiration` | `Record<string, any>` | Defines the expiration time stamp and default duration of a DNS policy. |
| `filters` | `any[]` | Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| `identity` | `string` | Specify the wirefilter expression used for identity matching. |
| `name` | `string` | Specify the rule name. |
| `precedence` | `number` | Set the order of your rules. |
| `result` | `Record<string, any>` |  |
| `rule_settings` | `Record<string, any>` | Defines settings for this rule. |
| `schedule` | `Record<string, any>` | Defines the schedule for activating DNS policies. |
| `traffic` | `string` | Specify the wirefilter expression used for traffic matching. |

#### Example: Load

```ts
const zero_trust_gateway_single_response_4 = await client.ZeroTrustGatewaySingleResponse4().load({ account_id: 'account_id', rule_id: 'rule_id' })
```

#### Example: Create

```ts
const zero_trust_gateway_single_response_4 = await client.ZeroTrustGatewaySingleResponse4().create({
  account_id: 'example_account_id',
  action: 'example_action',
  expiration: {},
  name: 'example_name',
  result: {},
})
```


### ZeroTrustGatewaySingleResponse5

Create an instance: `const zero_trust_gateway_single_response_5 = client.ZeroTrustGatewaySingleResponse5()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ips` | `any[]` | Specify the list of CIDRs to restrict ingress connections. |
| `kind` | `string` | The proxy endpoint kind. |
| `name` | `string` | Specify the name of the proxy endpoint. |
| `result` | `any` |  |

#### Example: Load

```ts
const zero_trust_gateway_single_response_5 = await client.ZeroTrustGatewaySingleResponse5().load({ account_id: 'account_id', proxy_endpoint_id: 'proxy_endpoint_id' })
```

#### Example: Create

```ts
const zero_trust_gateway_single_response_5 = await client.ZeroTrustGatewaySingleResponse5().create({
  account_id: 'example_account_id',
})
```


### ZeroTrustGatewaySingleResponse6

Create an instance: `const zero_trust_gateway_single_response_6 = client.ZeroTrustGatewaySingleResponse6()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `public_key` | `string` | Provide the Base64-encoded HPKE public key that encrypts SSH session logs. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const zero_trust_gateway_single_response_6 = await client.ZeroTrustGatewaySingleResponse6().load({ account_id: 'account_id' })
```

#### Example: Create

```ts
const zero_trust_gateway_single_response_6 = await client.ZeroTrustGatewaySingleResponse6().create({
  account_id: 'example_account_id',
  public_key: 'example_public_key',
})
```


### ZeroTrustGatewaySingleResponse7

Create an instance: `const zero_trust_gateway_single_response_7 = client.ZeroTrustGatewaySingleResponse7()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contents` | `string` | Actual contents of the PAC file |
| `description` | `string` | Detailed description of the PAC file. |
| `name` | `string` | Name of the PAC file. |
| `result` | `Record<string, any>` |  |
| `slug` | `string` | URL-friendly version of the PAC file name. |

#### Example: Load

```ts
const zero_trust_gateway_single_response_7 = await client.ZeroTrustGatewaySingleResponse7().load({ account_id: 'account_id', pacfile_id: 'pacfile_id' })
```

#### Example: Create

```ts
const zero_trust_gateway_single_response_7 = await client.ZeroTrustGatewaySingleResponse7().create({
  account_id: 'example_account_id',
  contents: 'example_contents',
  name: 'example_name',
})
```


### ZeroTrustGatewaySingleResponseWithListItem

Create an instance: `const zero_trust_gateway_single_response_with_list_item = client.ZeroTrustGatewaySingleResponseWithListItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Provide the list description. |
| `items` | `any[]` | Add items to the list. |
| `name` | `string` | Specify the list name. |
| `type` | `string` | Specify the list type. |

#### Example: Create

```ts
const zero_trust_gateway_single_response_with_list_item = await client.ZeroTrustGatewaySingleResponseWithListItem().create({
  account_id: 'example_account_id',
  name: 'example_name',
  type: 'example_type',
})
```


### ZeroTrustRiskScoring

Create an instance: `const zero_trust_risk_scoring = client.ZeroTrustRiskScoring()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `behaviors` | `Record<string, any>` |  |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const zero_trust_risk_scoring = await client.ZeroTrustRiskScoring().load({ account_id: 'account_id' })
```

#### Example: Create

```ts
const zero_trust_risk_scoring = await client.ZeroTrustRiskScoring().create({
  account_id: 'example_account_id',
  zt_risk_scoring_id: 'example_zt_risk_scoring_id',
  behaviors: {},
  result: {},
})
```


### ZeroTrustRiskScoringIntegration

Create an instance: `const zero_trust_risk_scoring_integration = client.ZeroTrustRiskScoringIntegration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Whether this integration is enabled. |
| `id` | `string` |  |
| `integration_type` | `string` |  |
| `reference_id` | `string` | A reference id that can be supplied by the client. |
| `result` | `Record<string, any>` |  |
| `tenant_url` | `string` | The base url of the tenant, e.g. |

#### Example: Load

```ts
const zero_trust_risk_scoring_integration = await client.ZeroTrustRiskScoringIntegration().load({ id: 'zero_trust_risk_scoring_integration_id', account_id: 'account_id' })
```

#### Example: List

```ts
const zero_trust_risk_scoring_integrations = await client.ZeroTrustRiskScoringIntegration().list({ account_id: "example" })
```

#### Example: Create

```ts
const zero_trust_risk_scoring_integration = await client.ZeroTrustRiskScoringIntegration().create({
  account_id: 'example_account_id',
  active: true,
  integration_type: 'example_integration_type',
  result: {},
  tenant_url: 'example_tenant_url',
})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

17 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `teams_devices_response_collection` | `result` | 20 | 3 levels |
| `teams_devices_single` | `input` | 20 | 0 levels |
| `teams_devices_single` | `result` | 20 | 2 levels |
| `teams_devices_schemas_single` | `config` | 8 | 0 levels |
| `dex_remote_command` | `commands` | 3 | 3 levels |
| `tunnel_cfd_tunnel_response_single` | `result` | 3 | 0 levels |
| `tunnel_hostname_route_response_single` | `result` | 3 | 0 levels |
| `tunnel_mesh_configuration_response_single` | `config` | 3 | 0 levels |
| `tunnel_route_response_single` | `result` | 3 | 0 levels |
| `tunnel_subnet_response_single` | `result` | 3 | 0 levels |
| `tunnel_teamnet_response_single` | `result` | 3 | 0 levels |
| `tunnel_tunnel_client` | `result` | 3 | 0 levels |
| `tunnel_tunnel_response_token` | `result` | 3 | 0 levels |
| `tunnel_tunnel_warp_connector_client` | `result` | 3 | 0 levels |
| `tunnel_warp_connector_response_single` | `result` | 3 | 0 levels |
| `tunnel_zero_trust_connectivity_setting` | `result` | 3 | 0 levels |
| `warp` | `result` | 3 | 0 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudflare-zero-trust/
├── src/
│   ├── CloudflareZeroTrustSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudflareZeroTrustSDK } from '@voxgig-sdk/cloudflare-zero-trust-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const zerotrustgatewaysingleresponse6 = client.ZeroTrustGatewaySingleResponse6()
await zerotrustgatewaysingleresponse6.load({ account_id: "example" })

// zerotrustgatewaysingleresponse6.data() now returns the zerotrustgatewaysingleresponse6 data from the last `load`
// zerotrustgatewaysingleresponse6.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
