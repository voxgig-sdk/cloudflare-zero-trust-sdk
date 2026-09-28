# CloudflareZeroTrust Lua SDK



The Lua SDK for the CloudflareZeroTrust API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:ClientVersion()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-zero-trust-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudflare-zero-trust_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDFLARE_ZERO_TRUST_APIKEY"),
})
```

### 2. List clientversion records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local clientversions, err = client:ClientVersion():list()
if err then error(err) end

for _, item in ipairs(clientversions) do
  print(item)
end
```

### 3. Load a nscdefaultname

NscDefaultName is nested under account, so provide the `account_id`.

```lua
local nscdefaultname, err = client:NscDefaultName():load({ account_id = "example_account_id", interconnect_id = "example_interconnect_id" })
if err then error(err) end
print(nscdefaultname)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local zerotrustgatewaysingleresponse6, err = client:ZeroTrustGatewaySingleResponse6():load({ account_id = "example" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:ZeroTrustGatewaySingleResponse6():load({ account_id = "example" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
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
cd lua && busted test/
```


## Reference

### CloudflareZeroTrustSDK

```lua
local sdk = require("cloudflare-zero-trust_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareZeroTrustSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `ClientVersion` | `(data) -> ClientVersionEntity` | Create a ClientVersion entity instance. |
| `Cni` | `(data) -> CniEntity` | Create a Cni entity instance. |
| `DeploymentGroup` | `(data) -> DeploymentGroupEntity` | Create a DeploymentGroup entity instance. |
| `DexRemoteCommand` | `(data) -> DexRemoteCommandEntity` | Create a DexRemoteCommand entity instance. |
| `DexRule` | `(data) -> DexRuleEntity` | Create a DexRule entity instance. |
| `DexSyntheticApplicationMonitoring` | `(data) -> DexSyntheticApplicationMonitoringEntity` | Create a DexSyntheticApplicationMonitoring entity instance. |
| `DigitalExperienceMonitoringDevice` | `(data) -> DigitalExperienceMonitoringDeviceEntity` | Create a DigitalExperienceMonitoringDevice entity instance. |
| `DigitalExperienceMonitoringDexDeleteResponseCollection` | `(data) -> DigitalExperienceMonitoringDexDeleteResponseCollectionEntity` | Create a DigitalExperienceMonitoringDexDeleteResponseCollection entity instance. |
| `DigitalExperienceMonitoringDexResponseCollection` | `(data) -> DigitalExperienceMonitoringDexResponseCollectionEntity` | Create a DigitalExperienceMonitoringDexResponseCollection entity instance. |
| `DigitalExperienceMonitoringDexSingle` | `(data) -> DigitalExperienceMonitoringDexSingleEntity` | Create a DigitalExperienceMonitoringDexSingle entity instance. |
| `DigitalExperienceMonitoringFleetStatusDevice` | `(data) -> DigitalExperienceMonitoringFleetStatusDeviceEntity` | Create a DigitalExperienceMonitoringFleetStatusDevice entity instance. |
| `DigitalExperienceMonitoringFleetStatusLive` | `(data) -> DigitalExperienceMonitoringFleetStatusLiveEntity` | Create a DigitalExperienceMonitoringFleetStatusLive entity instance. |
| `DigitalExperienceMonitoringFleetStatusOverTime` | `(data) -> DigitalExperienceMonitoringFleetStatusOverTimeEntity` | Create a DigitalExperienceMonitoringFleetStatusOverTime entity instance. |
| `Interconnect` | `(data) -> InterconnectEntity` | Create an Interconnect entity instance. |
| `IpProfile` | `(data) -> IpProfileEntity` | Create an IpProfile entity instance. |
| `List` | `(data) -> ListEntity` | Create a List entity instance. |
| `Location` | `(data) -> LocationEntity` | Create a Location entity instance. |
| `NscCni` | `(data) -> NscCniEntity` | Create a NscCni entity instance. |
| `NscDefaultName` | `(data) -> NscDefaultNameEntity` | Create a NscDefaultName entity instance. |
| `NscInterconnect` | `(data) -> NscInterconnectEntity` | Create a NscInterconnect entity instance. |
| `NscSetting` | `(data) -> NscSettingEntity` | Create a NscSetting entity instance. |
| `NscSlotInfo` | `(data) -> NscSlotInfoEntity` | Create a NscSlotInfo entity instance. |
| `NscStatusInfo` | `(data) -> NscStatusInfoEntity` | Create a NscStatusInfo entity instance. |
| `OverrideCode` | `(data) -> OverrideCodeEntity` | Create an OverrideCode entity instance. |
| `Pacfile` | `(data) -> PacfileEntity` | Create a Pacfile entity instance. |
| `PhysicalDevice` | `(data) -> PhysicalDeviceEntity` | Create a PhysicalDevice entity instance. |
| `ProxyEndpoint` | `(data) -> ProxyEndpointEntity` | Create a ProxyEndpoint entity instance. |
| `Registration` | `(data) -> RegistrationEntity` | Create a Registration entity instance. |
| `Rule` | `(data) -> RuleEntity` | Create a Rule entity instance. |
| `TeamsDevicesApiResponseSingle` | `(data) -> TeamsDevicesApiResponseSingleEntity` | Create a TeamsDevicesApiResponseSingle entity instance. |
| `TeamsDevicesComponentsSchemasResponseCollection` | `(data) -> TeamsDevicesComponentsSchemasResponseCollectionEntity` | Create a TeamsDevicesComponentsSchemasResponseCollection entity instance. |
| `TeamsDevicesComponentsSchemasSingle` | `(data) -> TeamsDevicesComponentsSchemasSingleEntity` | Create a TeamsDevicesComponentsSchemasSingle entity instance. |
| `TeamsDevicesDefaultDeviceSetting` | `(data) -> TeamsDevicesDefaultDeviceSettingEntity` | Create a TeamsDevicesDefaultDeviceSetting entity instance. |
| `TeamsDevicesDevice` | `(data) -> TeamsDevicesDeviceEntity` | Create a TeamsDevicesDevice entity instance. |
| `TeamsDevicesDeviceSetting` | `(data) -> TeamsDevicesDeviceSettingEntity` | Create a TeamsDevicesDeviceSetting entity instance. |
| `TeamsDevicesDeviceSettingsResponseCollection` | `(data) -> TeamsDevicesDeviceSettingsResponseCollectionEntity` | Create a TeamsDevicesDeviceSettingsResponseCollection entity instance. |
| `TeamsDevicesFallbackDomainResponseCollection` | `(data) -> TeamsDevicesFallbackDomainResponseCollectionEntity` | Create a TeamsDevicesFallbackDomainResponseCollection entity instance. |
| `TeamsDevicesGlobalWarpOverride` | `(data) -> TeamsDevicesGlobalWarpOverrideEntity` | Create a TeamsDevicesGlobalWarpOverride entity instance. |
| `TeamsDevicesId` | `(data) -> TeamsDevicesIdEntity` | Create a TeamsDevicesId entity instance. |
| `TeamsDevicesOverrideCode` | `(data) -> TeamsDevicesOverrideCodeEntity` | Create a TeamsDevicesOverrideCode entity instance. |
| `TeamsDevicesResponseCollection` | `(data) -> TeamsDevicesResponseCollectionEntity` | Create a TeamsDevicesResponseCollection entity instance. |
| `TeamsDevicesSchemasId` | `(data) -> TeamsDevicesSchemasIdEntity` | Create a TeamsDevicesSchemasId entity instance. |
| `TeamsDevicesSchemasResponseCollection` | `(data) -> TeamsDevicesSchemasResponseCollectionEntity` | Create a TeamsDevicesSchemasResponseCollection entity instance. |
| `TeamsDevicesSchemasSingle` | `(data) -> TeamsDevicesSchemasSingleEntity` | Create a TeamsDevicesSchemasSingle entity instance. |
| `TeamsDevicesSingle` | `(data) -> TeamsDevicesSingleEntity` | Create a TeamsDevicesSingle entity instance. |
| `TeamsDevicesSplitTunnelIncludeResponseCollection` | `(data) -> TeamsDevicesSplitTunnelIncludeResponseCollectionEntity` | Create a TeamsDevicesSplitTunnelIncludeResponseCollection entity instance. |
| `TeamsDevicesSplitTunnelResponseCollection` | `(data) -> TeamsDevicesSplitTunnelResponseCollectionEntity` | Create a TeamsDevicesSplitTunnelResponseCollection entity instance. |
| `TeamsDevicesZeroTrustAccountDeviceSetting` | `(data) -> TeamsDevicesZeroTrustAccountDeviceSettingEntity` | Create a TeamsDevicesZeroTrustAccountDeviceSetting entity instance. |
| `Tunnel` | `(data) -> TunnelEntity` | Create a Tunnel entity instance. |
| `TunnelCfdTunnelResponseCollection` | `(data) -> TunnelCfdTunnelResponseCollectionEntity` | Create a TunnelCfdTunnelResponseCollection entity instance. |
| `TunnelCfdTunnelResponseSingle` | `(data) -> TunnelCfdTunnelResponseSingleEntity` | Create a TunnelCfdTunnelResponseSingle entity instance. |
| `TunnelConfiguration` | `(data) -> TunnelConfigurationEntity` | Create a TunnelConfiguration entity instance. |
| `TunnelEmpty` | `(data) -> TunnelEmptyEntity` | Create a TunnelEmpty entity instance. |
| `TunnelHostnameRouteResponseCollection` | `(data) -> TunnelHostnameRouteResponseCollectionEntity` | Create a TunnelHostnameRouteResponseCollection entity instance. |
| `TunnelHostnameRouteResponseSingle` | `(data) -> TunnelHostnameRouteResponseSingleEntity` | Create a TunnelHostnameRouteResponseSingle entity instance. |
| `TunnelMeshConfigurationResponseSingle` | `(data) -> TunnelMeshConfigurationResponseSingleEntity` | Create a TunnelMeshConfigurationResponseSingle entity instance. |
| `TunnelRouteResponseSingle` | `(data) -> TunnelRouteResponseSingleEntity` | Create a TunnelRouteResponseSingle entity instance. |
| `TunnelSubnetResponseCollection` | `(data) -> TunnelSubnetResponseCollectionEntity` | Create a TunnelSubnetResponseCollection entity instance. |
| `TunnelSubnetResponseSingle` | `(data) -> TunnelSubnetResponseSingleEntity` | Create a TunnelSubnetResponseSingle entity instance. |
| `TunnelSubnetResponseSingleNullable` | `(data) -> TunnelSubnetResponseSingleNullableEntity` | Create a TunnelSubnetResponseSingleNullable entity instance. |
| `TunnelTeamnetResponseCollection` | `(data) -> TunnelTeamnetResponseCollectionEntity` | Create a TunnelTeamnetResponseCollection entity instance. |
| `TunnelTeamnetResponseSingle` | `(data) -> TunnelTeamnetResponseSingleEntity` | Create a TunnelTeamnetResponseSingle entity instance. |
| `TunnelTunnelClient` | `(data) -> TunnelTunnelClientEntity` | Create a TunnelTunnelClient entity instance. |
| `TunnelTunnelConnection` | `(data) -> TunnelTunnelConnectionEntity` | Create a TunnelTunnelConnection entity instance. |
| `TunnelTunnelResponseToken` | `(data) -> TunnelTunnelResponseTokenEntity` | Create a TunnelTunnelResponseToken entity instance. |
| `TunnelTunnelWarpConnectorClient` | `(data) -> TunnelTunnelWarpConnectorClientEntity` | Create a TunnelTunnelWarpConnectorClient entity instance. |
| `TunnelTunnelWarpConnectorConnection` | `(data) -> TunnelTunnelWarpConnectorConnectionEntity` | Create a TunnelTunnelWarpConnectorConnection entity instance. |
| `TunnelVnetResponseCollection` | `(data) -> TunnelVnetResponseCollectionEntity` | Create a TunnelVnetResponseCollection entity instance. |
| `TunnelVnetResponseSingle` | `(data) -> TunnelVnetResponseSingleEntity` | Create a TunnelVnetResponseSingle entity instance. |
| `TunnelWarpConnectorResponseCollection` | `(data) -> TunnelWarpConnectorResponseCollectionEntity` | Create a TunnelWarpConnectorResponseCollection entity instance. |
| `TunnelWarpConnectorResponseSingle` | `(data) -> TunnelWarpConnectorResponseSingleEntity` | Create a TunnelWarpConnectorResponseSingle entity instance. |
| `TunnelZeroTrustConnectivitySetting` | `(data) -> TunnelZeroTrustConnectivitySettingEntity` | Create a TunnelZeroTrustConnectivitySetting entity instance. |
| `Warp` | `(data) -> WarpEntity` | Create a Warp entity instance. |
| `WarpChangeEvent` | `(data) -> WarpChangeEventEntity` | Create a WarpChangeEvent entity instance. |
| `WarpTeamsDeviceApiOther` | `(data) -> WarpTeamsDeviceApiOtherEntity` | Create a WarpTeamsDeviceApiOther entity instance. |
| `ZeroTrustGatewayApplicationsReviewStatus` | `(data) -> ZeroTrustGatewayApplicationsReviewStatusEntity` | Create a ZeroTrustGatewayApplicationsReviewStatus entity instance. |
| `ZeroTrustGatewayCsvOperationSingle` | `(data) -> ZeroTrustGatewayCsvOperationSingleEntity` | Create a ZeroTrustGatewayCsvOperationSingle entity instance. |
| `ZeroTrustGatewayCustomCertificateSetting` | `(data) -> ZeroTrustGatewayCustomCertificateSettingEntity` | Create a ZeroTrustGatewayCustomCertificateSetting entity instance. |
| `ZeroTrustGatewayGatewayAccount` | `(data) -> ZeroTrustGatewayGatewayAccountEntity` | Create a ZeroTrustGatewayGatewayAccount entity instance. |
| `ZeroTrustGatewayGatewayAccountConfig` | `(data) -> ZeroTrustGatewayGatewayAccountConfigEntity` | Create a ZeroTrustGatewayGatewayAccountConfig entity instance. |
| `ZeroTrustGatewayGatewayAccountEgressCidrPairList` | `(data) -> ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity` | Create a ZeroTrustGatewayGatewayAccountEgressCidrPairList entity instance. |
| `ZeroTrustGatewayGatewayAccountLoggingSetting` | `(data) -> ZeroTrustGatewayGatewayAccountLoggingSettingEntity` | Create a ZeroTrustGatewayGatewayAccountLoggingSetting entity instance. |
| `ZeroTrustGatewayListItemResponseCollection` | `(data) -> ZeroTrustGatewayListItemResponseCollectionEntity` | Create a ZeroTrustGatewayListItemResponseCollection entity instance. |
| `ZeroTrustGatewayListSingle` | `(data) -> ZeroTrustGatewayListSingleEntity` | Create a ZeroTrustGatewayListSingle entity instance. |
| `ZeroTrustGatewayResponseCollection` | `(data) -> ZeroTrustGatewayResponseCollectionEntity` | Create a ZeroTrustGatewayResponseCollection entity instance. |
| `ZeroTrustGatewayResponseCollection10` | `(data) -> ZeroTrustGatewayResponseCollection10Entity` | Create a ZeroTrustGatewayResponseCollection10 entity instance. |
| `ZeroTrustGatewayResponseCollection2` | `(data) -> ZeroTrustGatewayResponseCollection2Entity` | Create a ZeroTrustGatewayResponseCollection2 entity instance. |
| `ZeroTrustGatewayResponseCollection3` | `(data) -> ZeroTrustGatewayResponseCollection3Entity` | Create a ZeroTrustGatewayResponseCollection3 entity instance. |
| `ZeroTrustGatewayResponseCollection4` | `(data) -> ZeroTrustGatewayResponseCollection4Entity` | Create a ZeroTrustGatewayResponseCollection4 entity instance. |
| `ZeroTrustGatewayResponseCollection5` | `(data) -> ZeroTrustGatewayResponseCollection5Entity` | Create a ZeroTrustGatewayResponseCollection5 entity instance. |
| `ZeroTrustGatewayResponseCollection6` | `(data) -> ZeroTrustGatewayResponseCollection6Entity` | Create a ZeroTrustGatewayResponseCollection6 entity instance. |
| `ZeroTrustGatewayResponseCollection7` | `(data) -> ZeroTrustGatewayResponseCollection7Entity` | Create a ZeroTrustGatewayResponseCollection7 entity instance. |
| `ZeroTrustGatewayResponseCollection8` | `(data) -> ZeroTrustGatewayResponseCollection8Entity` | Create a ZeroTrustGatewayResponseCollection8 entity instance. |
| `ZeroTrustGatewayResponseCollection9` | `(data) -> ZeroTrustGatewayResponseCollection9Entity` | Create a ZeroTrustGatewayResponseCollection9 entity instance. |
| `ZeroTrustGatewaySingle` | `(data) -> ZeroTrustGatewaySingleEntity` | Create a ZeroTrustGatewaySingle entity instance. |
| `ZeroTrustGatewaySingleResponse2` | `(data) -> ZeroTrustGatewaySingleResponse2Entity` | Create a ZeroTrustGatewaySingleResponse2 entity instance. |
| `ZeroTrustGatewaySingleResponse3` | `(data) -> ZeroTrustGatewaySingleResponse3Entity` | Create a ZeroTrustGatewaySingleResponse3 entity instance. |
| `ZeroTrustGatewaySingleResponse4` | `(data) -> ZeroTrustGatewaySingleResponse4Entity` | Create a ZeroTrustGatewaySingleResponse4 entity instance. |
| `ZeroTrustGatewaySingleResponse5` | `(data) -> ZeroTrustGatewaySingleResponse5Entity` | Create a ZeroTrustGatewaySingleResponse5 entity instance. |
| `ZeroTrustGatewaySingleResponse6` | `(data) -> ZeroTrustGatewaySingleResponse6Entity` | Create a ZeroTrustGatewaySingleResponse6 entity instance. |
| `ZeroTrustGatewaySingleResponse7` | `(data) -> ZeroTrustGatewaySingleResponse7Entity` | Create a ZeroTrustGatewaySingleResponse7 entity instance. |
| `ZeroTrustGatewaySingleResponseWithListItem` | `(data) -> ZeroTrustGatewaySingleResponseWithListItemEntity` | Create a ZeroTrustGatewaySingleResponseWithListItem entity instance. |
| `ZeroTrustRiskScoring` | `(data) -> ZeroTrustRiskScoringEntity` | Create a ZeroTrustRiskScoring entity instance. |
| `ZeroTrustRiskScoringIntegration` | `(data) -> ZeroTrustRiskScoringIntegrationEntity` | Create a ZeroTrustRiskScoringIntegration entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local deployment_group, err = client:DeploymentGroup():load({ id = "example_id" })
    if err then error(err) end
    -- deployment_group is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### ClientVersion

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` | Indicates whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/devices/client-versions`

#### Cni

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

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

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/devices/deployment-groups`

#### DexRemoteCommand

| Field | Description |
| --- | --- |
| `commands` | List of device-level commands to execute |
| `result` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/dex/commands`

#### DexRule

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `match` | The wirefilter expression to match. |
| `name` | The name of the Rule. |
| `result` |  |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/dex/rules`

#### DexSyntheticApplicationMonitoring

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | array of colos. |
| `success` | Whether the API call was successful. |

Operations: List, Load.

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

Operations: List.

API path: `/accounts/{account_id}/dex/devices/{device_id}/fleet-status/live`

#### DigitalExperienceMonitoringDexDeleteResponseCollection

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}`

#### DigitalExperienceMonitoringDexResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

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

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/dex/devices/dex_tests`

#### DigitalExperienceMonitoringFleetStatusDevice

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/dex/fleet-status/devices`

#### DigitalExperienceMonitoringFleetStatusLive

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/dex/fleet-status/live`

#### DigitalExperienceMonitoringFleetStatusOverTime

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/dex/fleet-status/over-time`

#### Interconnect

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load, Remove.

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

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/devices/ip-profiles`

#### List

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/gateway/lists/{list_id}`

#### Location

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

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

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/cni/cnis`

#### NscDefaultName

| Field | Description |
| --- | --- |
| `name` | The default customer name for the interconnect |

Operations: Load.

API path: `/accounts/{account_id}/cni/interconnects/{icon}/loa/default`

#### NscInterconnect

| Field | Description |
| --- | --- |
| `id` |  |
| `items` |  |
| `next` |  |

Operations: Create, List, Load.

API path: `/accounts/{account_id}/cni/interconnects`

#### NscSetting

| Field | Description |
| --- | --- |
| `default_asn` |  |

Operations: Load, Update.

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

Operations: List, Load.

API path: `/accounts/{account_id}/cni/slots`

#### NscStatusInfo

| Field | Description |
| --- | --- |

Operations: Load.

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

Operations: Create.

API path: `/accounts/{account_id}/devices/override_codes`

#### Pacfile

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

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

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/devices/physical-devices/{device_id}/revoke`

#### ProxyEndpoint

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

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

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/devices/registrations/revoke`

#### Rule

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/gateway/rules/{rule_id}`

#### TeamsDevicesApiResponseSingle

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/accounts/{account_id}/devices/revoke`

#### TeamsDevicesComponentsSchemasResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List, Remove.

API path: `/accounts/{account_id}/devices/networks`

#### TeamsDevicesComponentsSchemasSingle

| Field | Description |
| --- | --- |
| `config` | The configuration object containing information for the WARP client to detect the managed network. |
| `name` | The name of the device managed network. |
| `result` |  |
| `type` | The type of device managed network. |

Operations: Create, Load, Update.

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

Operations: Load, Update.

API path: `/accounts/{account_id}/devices/policy`

#### TeamsDevicesDevice

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: List, Load.

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

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/devices/policy`

#### TeamsDevicesDeviceSettingsResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List, Remove.

API path: `/accounts/{account_id}/devices/policies`

#### TeamsDevicesFallbackDomainResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List, Remove, Update.

API path: `/accounts/{account_id}/devices/policy/{policy_id}/fallback_domains`

#### TeamsDevicesGlobalWarpOverride

| Field | Description |
| --- | --- |
| `disconnect` | Disconnects all devices on the account using Global WARP override. |
| `justification` | Reasoning for setting the Global WARP override state. |
| `result` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/devices/resilience/disconnect`

#### TeamsDevicesId

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/devices/posture/{rule_id}`

#### TeamsDevicesOverrideCode

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/devices/{device_id}/override_codes`

#### TeamsDevicesResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/devices/posture`

#### TeamsDevicesSchemasId

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/devices/posture/integration/{integration_id}`

#### TeamsDevicesSchemasResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/devices/posture/integration`

#### TeamsDevicesSchemasSingle

| Field | Description |
| --- | --- |
| `config` | The configuration object containing third-party integration information. |
| `interval` | The interval between each posture check with the third-party API. |
| `name` | The name of the device posture integration. |
| `result` |  |
| `type` | The type of device posture integration. |

Operations: Create, Load, Update.

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

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/devices/posture`

#### TeamsDevicesSplitTunnelIncludeResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List, Update.

API path: `/accounts/{account_id}/devices/policy/{policy_id}/include`

#### TeamsDevicesSplitTunnelResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List, Remove, Update.

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

Operations: Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/devices/settings`

#### Tunnel

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/tunnels`

#### TunnelCfdTunnelResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

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

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/cfd_tunnel`

#### TunnelConfiguration

| Field | Description |
| --- | --- |
| `config` | The tunnel configuration and ingress rules. |
| `result` | Cloudflare Tunnel configuration |

Operations: Load, Update.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations`

#### TunnelEmpty

| Field | Description |
| --- | --- |
| `client_id` | UUID of the Cloudflare Tunnel connector. |

Operations: Remove, Update.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections`

#### TunnelHostnameRouteResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

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

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/zerotrust/routes/hostname`

#### TunnelMeshConfigurationResponseSingle

| Field | Description |
| --- | --- |
| `config` | Provider-specific configuration. |
| `ha_mode` | High-availability mode for the WARP Connector tunnel. |
| `result` |  |

Operations: Load, Update.

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

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}`

#### TunnelSubnetResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

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

Operations: Create, Load, Patch, Update.

API path: `/accounts/{account_id}/zerotrust/subnets/warp`

#### TunnelSubnetResponseSingleNullable

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}`

#### TunnelTeamnetResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/teamnet/routes`

#### TunnelTeamnetResponseSingle

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |

Operations: Load.

API path: `/accounts/{account_id}/teamnet/routes/ip/{ip}`

#### TunnelTunnelClient

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |

Operations: Load.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}`

#### TunnelTunnelConnection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections`

#### TunnelTunnelResponseToken

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `resources` |  |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |

Operations: Create, List.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/management`

#### TunnelTunnelWarpConnectorClient

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | Whether the API call was successful |

Operations: Load.

API path: `/accounts/{account_id}/warp_connector/{tunnel_id}/connectors/{connector_id}`

#### TunnelTunnelWarpConnectorConnection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/warp_connector/{tunnel_id}/connections`

#### TunnelVnetResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/teamnet/virtual_networks`

#### TunnelVnetResponseSingle

| Field | Description |
| --- | --- |
| `comment` | Optional remark describing the virtual network. |
| `is_default` | If `true`, this virtual network is the default for the account. |
| `is_default_network` | If `true`, this virtual network is the default for the account. |
| `name` | A user-friendly name for the virtual network. |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/teamnet/virtual_networks`

#### TunnelWarpConnectorResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

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

Operations: Create, Load, Remove, Update.

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

Operations: List, Update.

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

Operations: Load, Update.

API path: `/accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}`

#### WarpChangeEvent

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/dex/warp-change-events`

#### WarpTeamsDeviceApiOther

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/devices/registrations/{registration_id}/override_codes`

#### ZeroTrustGatewayApplicationsReviewStatus

| Field | Description |
| --- | --- |
| `approved_apps` | Contains the ids of the approved applications. |
| `in_review_apps` | Contains the ids of the applications in review. |
| `result` |  |
| `unapproved_apps` | Contains the ids of the unapproved applications. |

Operations: Load, Update.

API path: `/accounts/{account_id}/gateway/apps/review_status`

#### ZeroTrustGatewayCsvOperationSingle

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/accounts/{account_id}/gateway/lists/upload`

#### ZeroTrustGatewayCustomCertificateSetting

| Field | Description |
| --- | --- |
| `binding_status` | Indicate the internal certificate status. |
| `enabled` | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| `id` | Specify the UUID of the certificate (ID from MTLS certificate store). |
| `updated_at` |  |

Operations: Load.

API path: `/accounts/{account_id}/gateway/configuration/custom_certificate`

#### ZeroTrustGatewayGatewayAccount

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/gateway`

#### ZeroTrustGatewayGatewayAccountConfig

| Field | Description |
| --- | --- |
| `result` |  |
| `settings` | Specify account settings. |

Operations: Load, Patch, Update.

API path: `/accounts/{account_id}/gateway/configuration`

#### ZeroTrustGatewayGatewayAccountEgressCidrPairList

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/egress_cidr_pairs`

#### ZeroTrustGatewayGatewayAccountLoggingSetting

| Field | Description |
| --- | --- |
| `redact_pii` | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `result` |  |
| `settings_by_rule_type` | Configure logging settings for each rule type. |

Operations: Load, Update.

API path: `/accounts/{account_id}/gateway/logging`

#### ZeroTrustGatewayListItemResponseCollection

| Field | Description |
| --- | --- |
| `result` | Provide the list items. |
| `result_info` |  |

Operations: List.

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

Operations: Load, Patch, Update.

API path: `/accounts/{account_id}/gateway/lists/{list_id}`

#### ZeroTrustGatewayResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/certificates`

#### ZeroTrustGatewayResponseCollection10

| Field | Description |
| --- | --- |
| `result` |  |
| `result_info` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/pacfiles`

#### ZeroTrustGatewayResponseCollection2

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/dns_destination_ips`

#### ZeroTrustGatewayResponseCollection3

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/lists`

#### ZeroTrustGatewayResponseCollection4

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/operations`

#### ZeroTrustGatewayResponseCollection5

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/locations`

#### ZeroTrustGatewayResponseCollection6

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List, Update.

API path: `/accounts/{account_id}/gateway/rules`

#### ZeroTrustGatewayResponseCollection7

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/app_types`

#### ZeroTrustGatewayResponseCollection8

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/categories`

#### ZeroTrustGatewayResponseCollection9

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/proxy_endpoints`

#### ZeroTrustGatewaySingle

| Field | Description |
| --- | --- |
| `result` |  |
| `validity_period_days` | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

Operations: Create, Load, Remove.

API path: `/accounts/{account_id}/gateway/certificates/{certificate_id}/activate`

#### ZeroTrustGatewaySingleResponse2

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

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

Operations: Create, Load, Update.

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

Operations: Create, Load, Patch, Update.

API path: `/accounts/{account_id}/gateway/rules/{rule_id}/reset_expiration`

#### ZeroTrustGatewaySingleResponse5

| Field | Description |
| --- | --- |
| `ips` | Specify the list of CIDRs to restrict ingress connections. |
| `kind` | The proxy endpoint kind. |
| `name` | Specify the name of the proxy endpoint. |
| `result` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/gateway/proxy_endpoints`

#### ZeroTrustGatewaySingleResponse6

| Field | Description |
| --- | --- |
| `public_key` | Provide the Base64-encoded HPKE public key that encrypts SSH session logs. |
| `result` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/gateway/audit_ssh_settings/rotate_seed`

#### ZeroTrustGatewaySingleResponse7

| Field | Description |
| --- | --- |
| `contents` | Actual contents of the PAC file |
| `description` | Detailed description of the PAC file. |
| `name` | Name of the PAC file. |
| `result` |  |
| `slug` | URL-friendly version of the PAC file name. |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/gateway/pacfiles`

#### ZeroTrustGatewaySingleResponseWithListItem

| Field | Description |
| --- | --- |
| `description` | Provide the list description. |
| `items` | Add items to the list. |
| `name` | Specify the list name. |
| `type` | Specify the list type. |

Operations: Create.

API path: `/accounts/{account_id}/gateway/lists`

#### ZeroTrustRiskScoring

| Field | Description |
| --- | --- |
| `behaviors` |  |
| `result` |  |

Operations: Create, Load, Update.

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

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/zt_risk_scoring/integrations`



## Entities


### ClientVersion

Create an instance: `local client_version = client:ClientVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` | Indicates whether the API call was successful. |

#### Example: List

```lua
local client_versions, err = client:ClientVersion():list()
```


### Cni

Create an instance: `local cni = client:Cni(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeploymentGroup

Create an instance: `local deployment_group = client:DeploymentGroup(nil)`

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
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `name` | `string` | A user-friendly name for the deployment group. |
| `policy_ids` | `table` | Contains an optional list of policy IDs assigned to a group. |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` | Indicates whether the API call was successful. |
| `version_config` | `table` | Contains at least one version configuration. |

#### Example: Load

```lua
local deployment_group, err = client:DeploymentGroup():load({ id = "deployment_group_id", account_id = "account_id" })
```

#### Example: List

```lua
local deployment_groups, err = client:DeploymentGroup():list()
```

#### Example: Create

```lua
local deployment_group, err = client:DeploymentGroup():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  name = "example_name", -- string
  result = {}, -- table
  result_info = {}, -- table
  success = true, -- boolean
  version_config = {}, -- table
})
```


### DexRemoteCommand

Create an instance: `local dex_remote_command = client:DexRemoteCommand(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commands` | `table` | List of device-level commands to execute |
| `result` | `table` |  |

#### Example: Load

```lua
local dex_remote_command, err = client:DexRemoteCommand():load({ account_id = "account_id" })
```

#### Example: Create

```lua
local dex_remote_command, err = client:DexRemoteCommand():create({
  account_id = "example_account_id", -- string
  commands = {}, -- table
})
```


### DexRule

Create an instance: `local dex_rule = client:DexRule(nil)`

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
| `result` | `table` |  |

#### Example: Load

```lua
local dex_rule, err = client:DexRule():load({ id = "dex_rule_id", account_id = "account_id" })
```

#### Example: Create

```lua
local dex_rule, err = client:DexRule():create({
  account_id = "example_account_id", -- string
  match = "example_match", -- string
  name = "example_name", -- string
})
```


### DexSyntheticApplicationMonitoring

Create an instance: `local dex_synthetic_application_monitoring = client:DexSyntheticApplicationMonitoring(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` | array of colos. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local dex_synthetic_application_monitoring, err = client:DexSyntheticApplicationMonitoring():load({ account_id = "account_id" })
```

#### Example: List

```lua
local dex_synthetic_application_monitorings, err = client:DexSyntheticApplicationMonitoring():list()
```


### DigitalExperienceMonitoringDevice

Create an instance: `local digital_experience_monitoring_device = client:DigitalExperienceMonitoringDevice(nil)`

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
| `cpuPctByApp` | `table` |  |
| `deviceId` | `string` | Device identifier (UUID v4) |
| `deviceIpv4` | `table` |  |
| `deviceIpv6` | `table` |  |
| `deviceName` | `string` | Device identifier (human readable). |
| `deviceRegistration` | `string` | Deprecated: use registrationId. |
| `diskReadBps` | `number` |  |
| `diskUsagePct` | `number` |  |
| `diskWriteBps` | `number` |  |
| `dohSubdomain` | `string` |  |
| `estimatedLossPct` | `number` |  |
| `firewallEnabled` | `boolean` |  |
| `gatewayIpv4` | `table` |  |
| `gatewayIpv6` | `table` |  |
| `handshakeLatencyMs` | `number` |  |
| `ispIpv4` | `table` |  |
| `ispIpv6` | `table` |  |
| `metal` | `string` |  |
| `mode` | `string` | The mode under which the WARP client is run. |
| `networkRcvdBps` | `number` |  |
| `networkSentBps` | `number` |  |
| `networkSsid` | `string` |  |
| `personEmail` | `string` | User contact email address |
| `platform` | `string` | Operating system. |
| `ramAvailableKb` | `number` |  |
| `ramUsedPct` | `number` |  |
| `ramUsedPctByApp` | `table` |  |
| `registrationId` | `string` | Device registration identifier (UUID v4). |
| `rtt` | `table` | Round-trip time statistics for the WARP tunnel. |
| `status` | `string` | Network status. |
| `switchLocked` | `boolean` |  |
| `timestamp` | `string` |  |
| `tunnelStats` | `table` | WARP tunnel packet and byte counters. |
| `tunnelType` | `string` |  |
| `version` | `string` | WARP client version. |
| `wifiStrengthDbm` | `number` |  |

#### Example: List

```lua
local digital_experience_monitoring_devices, err = client:DigitalExperienceMonitoringDevice():list()
```


### DigitalExperienceMonitoringDexDeleteResponseCollection

Create an instance: `local digital_experience_monitoring_dex_delete_response_collection = client:DigitalExperienceMonitoringDexDeleteResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DigitalExperienceMonitoringDexResponseCollection

Create an instance: `local digital_experience_monitoring_dex_response_collection = client:DigitalExperienceMonitoringDexResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local digital_experience_monitoring_dex_response_collections, err = client:DigitalExperienceMonitoringDexResponseCollection():list()
```


### DigitalExperienceMonitoringDexSingle

Create an instance: `local digital_experience_monitoring_dex_single = client:DigitalExperienceMonitoringDexSingle(nil)`

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
| `data` | `table` | The configuration object which contains the details for the WARP client to conduct the test. |
| `description` | `string` | Additional details about the test. |
| `enabled` | `boolean` | Determines whether or not the test is active. |
| `interval` | `string` | How often the test will run. |
| `name` | `string` | The name of the DEX test. |
| `result` | `table` |  |
| `target_policies` | `any` |  |
| `targeted` | `boolean` |  |
| `test_id` | `string` | The unique identifier for the test. |
| `updated` | `string` | Date the test was last updated, in RFC 3339 format. |

#### Example: Load

```lua
local digital_experience_monitoring_dex_single, err = client:DigitalExperienceMonitoringDexSingle():load({ account_id = "account_id", dex_test_id = "dex_test_id" })
```

#### Example: Create

```lua
local digital_experience_monitoring_dex_single, err = client:DigitalExperienceMonitoringDexSingle():create({
  account_id = "example_account_id", -- string
  data = {}, -- table
  enabled = true, -- boolean
  interval = "example_interval", -- string
  name = "example_name", -- string
  result = {}, -- table
})
```


### DigitalExperienceMonitoringFleetStatusDevice

Create an instance: `local digital_experience_monitoring_fleet_status_device = client:DigitalExperienceMonitoringFleetStatusDevice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local digital_experience_monitoring_fleet_status_devices, err = client:DigitalExperienceMonitoringFleetStatusDevice():list()
```


### DigitalExperienceMonitoringFleetStatusLive

Create an instance: `local digital_experience_monitoring_fleet_status_live = client:DigitalExperienceMonitoringFleetStatusLive(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local digital_experience_monitoring_fleet_status_live, err = client:DigitalExperienceMonitoringFleetStatusLive():load({ account_id = "account_id", since_minute = 1 })
```


### DigitalExperienceMonitoringFleetStatusOverTime

Create an instance: `local digital_experience_monitoring_fleet_status_over_time = client:DigitalExperienceMonitoringFleetStatusOverTime(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local digital_experience_monitoring_fleet_status_over_time, err = client:DigitalExperienceMonitoringFleetStatusOverTime():load({ account_id = "account_id", from = "from", to = "to" })
```


### Interconnect

Create an instance: `local interconnect = client:Interconnect(nil)`

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

```lua
local interconnect, err = client:Interconnect():load({ account_id = "account_id", icon = "icon" })
```


### IpProfile

Create an instance: `local ip_profile = client:IpProfile(nil)`

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
| `errors` | `table` |  |
| `id` | `string` |  |
| `match` | `string` | The wirefilter expression to match registrations. |
| `messages` | `table` |  |
| `name` | `string` | A user-friendly name for the Device IP profile. |
| `precedence` | `number` | The precedence of the Device IP profile. |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `subnet_id` | `string` | The ID of the Subnet. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local ip_profile, err = client:IpProfile():load({ id = "ip_profile_id", account_id = "account_id" })
```

#### Example: List

```lua
local ip_profiles, err = client:IpProfile():list()
```

#### Example: Create

```lua
local ip_profile, err = client:IpProfile():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  match = "example_match", -- string
  messages = {}, -- table
  name = "example_name", -- string
  precedence = 1, -- number
  result = {}, -- table
  result_info = {}, -- table
  subnet_id = "example_subnet_id", -- string
  success = true, -- boolean
})
```


### List

Create an instance: `local list = client:List(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Location

Create an instance: `local location = client:Location(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### NscCni

Create an instance: `local nsc_cni = client:NscCni(nil)`

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
| `bgp` | `table` |  |
| `bgp_mode` | `string` | The BGP mode for a CNI. |
| `cust_ip` | `string` | Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`. |
| `id` | `string` |  |
| `interconnect` | `string` | Interconnect identifier hosting this CNI |
| `magic` | `table` |  |
| `p2p_ip` | `string` | Cloudflare end of the point-to-point link |

#### Example: Load

```lua
local nsc_cni, err = client:NscCni():load({ id = "nsc_cni_id", account_id = "account_id" })
```

#### Example: List

```lua
local nsc_cnis, err = client:NscCni():list()
```

#### Example: Create

```lua
local nsc_cni, err = client:NscCni():create({
  account_id = "example_account_id", -- string
  account = "example_account", -- string
  bgp = {}, -- table
  cust_ip = "example_cust_ip", -- string
  id = "example_id", -- string
  interconnect = "example_interconnect", -- string
  magic = {}, -- table
  p2p_ip = "example_p2p_ip", -- string
})
```


### NscDefaultName

Create an instance: `local nsc_default_name = client:NscDefaultName(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The default customer name for the interconnect |

#### Example: Load

```lua
local nsc_default_name, err = client:NscDefaultName():load({ account_id = "account_id", interconnect_id = "interconnect_id" })
```


### NscInterconnect

Create an instance: `local nsc_interconnect = client:NscInterconnect(nil)`

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
| `items` | `table` |  |
| `next` | `number` |  |

#### Example: Load

```lua
local nsc_interconnect, err = client:NscInterconnect():load({ id = "nsc_interconnect_id", account_id = "account_id" })
```

#### Example: List

```lua
local nsc_interconnects, err = client:NscInterconnect():list()
```

#### Example: Create

```lua
local nsc_interconnect, err = client:NscInterconnect():create({
  account_id = "example_account_id", -- string
  items = {}, -- table
})
```


### NscSetting

Create an instance: `local nsc_setting = client:NscSetting(nil)`

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

```lua
local nsc_setting, err = client:NscSetting():load({ account_id = "account_id" })
```


### NscSlotInfo

Create an instance: `local nsc_slot_info = client:NscSlotInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | Customer account tag |
| `address` | `table` |  |
| `ccr_device_name` | `string` |  |
| `facility` | `table` |  |
| `id` | `string` | Slot ID |
| `name` | `string` |  |
| `occupied` | `boolean` | Whether the slot is occupied or not |
| `site` | `string` |  |
| `speed` | `string` |  |

#### Example: Load

```lua
local nsc_slot_info, err = client:NscSlotInfo():load({ account_id = "account_id", slot = "slot" })
```

#### Example: List

```lua
local nsc_slot_infos, err = client:NscSlotInfo():list()
```


### NscStatusInfo

Create an instance: `local nsc_status_info = client:NscStatusInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local nsc_status_info, err = client:NscStatusInfo():load({ account_id = "account_id", icon = "icon" })
```


### OverrideCode

Create an instance: `local override_code = client:OverrideCode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `device_id` | `string` | Physical device ID. |
| `duration_hours` | `number` | Number of hours for which the override code should remain valid. |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `scope` | `string` | Whether the code applies to every device in the account or one physical device. |
| `success` | `boolean` | Whether the API call was successful. |
| `type` | `string` | The feature that the override code applies to. |

#### Example: Create

```lua
local override_code, err = client:OverrideCode():create({
  account_id = "example_account_id", -- string
  duration_hours = 1, -- number
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  scope = "example_scope", -- string
  success = true, -- boolean
  type = "example_type", -- string
})
```


### Pacfile

Create an instance: `local pacfile = client:Pacfile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### PhysicalDevice

Create an instance: `local physical_device = client:PhysicalDevice(nil)`

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
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` | A WARP Device. |
| `result_info` | `table` | V4 public API Pagination/Cursor info. |
| `success` | `boolean` | Whether the API call was successful. |
| `tags` | `table` | Replaces all tags assigned to the physical device. |

#### Example: Load

```lua
local physical_device, err = client:PhysicalDevice():load({ id = "physical_device_id", account_id = "account_id" })
```

#### Example: List

```lua
local physical_devices, err = client:PhysicalDevice():list()
```

#### Example: Create

```lua
local physical_device, err = client:PhysicalDevice():create({
  account_id = "example_account_id", -- string
  id = "example_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  result_info = {}, -- table
  success = true, -- boolean
})
```


### ProxyEndpoint

Create an instance: `local proxy_endpoint = client:ProxyEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Registration

Create an instance: `local registration = client:Registration(nil)`

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
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` | A WARP configuration tied to a single user. |
| `result_info` | `table` | V4 public API Pagination/Cursor info. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local registration, err = client:Registration():load({ id = "registration_id", account_id = "account_id" })
```

#### Example: List

```lua
local registrations, err = client:Registration():list()
```

#### Example: Create

```lua
local registration, err = client:Registration():create({
  account_id = "example_account_id", -- string
  id = {}, -- table
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  result_info = {}, -- table
  success = true, -- boolean
})
```


### Rule

Create an instance: `local rule = client:Rule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### TeamsDevicesApiResponseSingle

Create an instance: `local teams_devices_api_response_single = client:TeamsDevicesApiResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local teams_devices_api_response_single, err = client:TeamsDevicesApiResponseSingle():create({
  account_id = "example_account_id", -- string
})
```


### TeamsDevicesComponentsSchemasResponseCollection

Create an instance: `local teams_devices_components_schemas_response_collection = client:TeamsDevicesComponentsSchemasResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local teams_devices_components_schemas_response_collections, err = client:TeamsDevicesComponentsSchemasResponseCollection():list()
```


### TeamsDevicesComponentsSchemasSingle

Create an instance: `local teams_devices_components_schemas_single = client:TeamsDevicesComponentsSchemasSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `table` | The configuration object containing information for the WARP client to detect the managed network. |
| `name` | `string` | The name of the device managed network. |
| `result` | `table` |  |
| `type` | `string` | The type of device managed network. |

#### Example: Load

```lua
local teams_devices_components_schemas_single, err = client:TeamsDevicesComponentsSchemasSingle():load({ account_id = "account_id", network_id = "network_id" })
```

#### Example: Create

```lua
local teams_devices_components_schemas_single, err = client:TeamsDevicesComponentsSchemasSingle():create({
  account_id = "example_account_id", -- string
  config = {}, -- table
  name = "example_name", -- string
  type = "example_type", -- string
})
```


### TeamsDevicesDefaultDeviceSetting

Create an instance: `local teams_devices_default_device_setting = client:TeamsDevicesDefaultDeviceSetting(nil)`

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
| `dns_search_suffixes` | `table` | List of DNS search suffixes to apply to clients. |
| `exclude` | `table` | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `boolean` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `table` | Global Acceleration settings for China. |
| `include` | `table` | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `number` | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `number` | The size of the subnet for the local access network. |
| `register_interface_ip_with_dns` | `boolean` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `table` |  |
| `sccm_vpn_boundary_support` | `boolean` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `table` |  |
| `support_url` | `string` | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `boolean` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | Determines which tunnel protocol to use. |
| `uninstall_protection` | `boolean` | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `table` | Virtual network access settings for the device. |

#### Example: Load

```lua
local teams_devices_default_device_setting, err = client:TeamsDevicesDefaultDeviceSetting():load({ account_id = "account_id" })
```


### TeamsDevicesDevice

Create an instance: `local teams_devices_device = client:TeamsDevicesDevice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `table` |  |

#### Example: Load

```lua
local teams_devices_device, err = client:TeamsDevicesDevice():load({ id = "teams_devices_device_id", account_id = "account_id" })
```

#### Example: List

```lua
local teams_devices_devices, err = client:TeamsDevicesDevice():list()
```


### TeamsDevicesDeviceSetting

Create an instance: `local teams_devices_device_setting = client:TeamsDevicesDeviceSetting(nil)`

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
| `browser_extension_config` | `table` | Browser extension proxy settings. |
| `captive_portal` | `number` | Turn on the captive portal after the specified amount of time. |
| `default` | `boolean` | Whether the policy is the account default. |
| `description` | `string` | A description of the policy. |
| `disable_auto_fallback` | `boolean` | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `table` | List of DNS search suffixes to apply to clients. |
| `enabled` | `boolean` | Whether the policy will be applied to matching devices. |
| `exclude` | `table` | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `boolean` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `table` | Global Acceleration settings for China. |
| `include` | `table` | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `number` | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `number` | The size of the subnet for the local access network. |
| `match` | `string` | The wirefilter expression to match devices. |
| `name` | `string` | The name of the device settings profile. |
| `precedence` | `number` | The precedence of the policy. |
| `profile_type` | `string` | The client type to which the device settings profile applies. |
| `register_interface_ip_with_dns` | `boolean` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `table` |  |
| `sccm_vpn_boundary_support` | `boolean` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `table` |  |
| `support_url` | `string` | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `boolean` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | Determines which tunnel protocol to use. |
| `uninstall_protection` | `boolean` | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `table` | Virtual network access settings for the device. |

#### Example: Load

```lua
local teams_devices_device_setting, err = client:TeamsDevicesDeviceSetting():load({ account_id = "account_id", policy_id = "policy_id" })
```

#### Example: Create

```lua
local teams_devices_device_setting, err = client:TeamsDevicesDeviceSetting():create({
  account_id = "example_account_id", -- string
  browser_extension_config = {}, -- table
  global_acceleration = {}, -- table
  name = "example_name", -- string
  virtual_networks = {}, -- table
})
```


### TeamsDevicesDeviceSettingsResponseCollection

Create an instance: `local teams_devices_device_settings_response_collection = client:TeamsDevicesDeviceSettingsResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local teams_devices_device_settings_response_collections, err = client:TeamsDevicesDeviceSettingsResponseCollection():list()
```


### TeamsDevicesFallbackDomainResponseCollection

Create an instance: `local teams_devices_fallback_domain_response_collection = client:TeamsDevicesFallbackDomainResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local teams_devices_fallback_domain_response_collections, err = client:TeamsDevicesFallbackDomainResponseCollection():list()
```


### TeamsDevicesGlobalWarpOverride

Create an instance: `local teams_devices_global_warp_override = client:TeamsDevicesGlobalWarpOverride(nil)`

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
| `result` | `table` |  |

#### Example: Load

```lua
local teams_devices_global_warp_override, err = client:TeamsDevicesGlobalWarpOverride():load({ account_id = "account_id" })
```

#### Example: Create

```lua
local teams_devices_global_warp_override, err = client:TeamsDevicesGlobalWarpOverride():create({
  account_id = "example_account_id", -- string
  disconnect = true, -- boolean
})
```


### TeamsDevicesId

Create an instance: `local teams_devices_id = client:TeamsDevicesId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TeamsDevicesOverrideCode

Create an instance: `local teams_devices_override_code = client:TeamsDevicesOverrideCode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local teams_devices_override_code, err = client:TeamsDevicesOverrideCode():load({ account_id = "account_id", device_id = "device_id" })
```


### TeamsDevicesResponseCollection

Create an instance: `local teams_devices_response_collection = client:TeamsDevicesResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local teams_devices_response_collections, err = client:TeamsDevicesResponseCollection():list()
```


### TeamsDevicesSchemasId

Create an instance: `local teams_devices_schemas_id = client:TeamsDevicesSchemasId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TeamsDevicesSchemasResponseCollection

Create an instance: `local teams_devices_schemas_response_collection = client:TeamsDevicesSchemasResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local teams_devices_schemas_response_collections, err = client:TeamsDevicesSchemasResponseCollection():list()
```


### TeamsDevicesSchemasSingle

Create an instance: `local teams_devices_schemas_single = client:TeamsDevicesSchemasSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `table` | The configuration object containing third-party integration information. |
| `interval` | `string` | The interval between each posture check with the third-party API. |
| `name` | `string` | The name of the device posture integration. |
| `result` | `table` |  |
| `type` | `string` | The type of device posture integration. |

#### Example: Load

```lua
local teams_devices_schemas_single, err = client:TeamsDevicesSchemasSingle():load({ account_id = "account_id", integration_id = "integration_id" })
```

#### Example: Create

```lua
local teams_devices_schemas_single, err = client:TeamsDevicesSchemasSingle():create({
  account_id = "example_account_id", -- string
  config = {}, -- table
  interval = "example_interval", -- string
  name = "example_name", -- string
  type = "example_type", -- string
})
```


### TeamsDevicesSingle

Create an instance: `local teams_devices_single = client:TeamsDevicesSingle(nil)`

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
| `input` | `table` | The value to be checked against. |
| `match` | `table` | The conditions that the client must match to run the rule. |
| `name` | `string` | The name of the device posture rule. |
| `result` | `table` |  |
| `schedule` | `string` | Polling frequency for the WARP client posture check. |
| `type` | `string` | The type of device posture rule. |

#### Example: Load

```lua
local teams_devices_single, err = client:TeamsDevicesSingle():load({ account_id = "account_id", rule_id = "rule_id" })
```

#### Example: Create

```lua
local teams_devices_single, err = client:TeamsDevicesSingle():create({
  account_id = "example_account_id", -- string
  name = "example_name", -- string
  type = "example_type", -- string
})
```


### TeamsDevicesSplitTunnelIncludeResponseCollection

Create an instance: `local teams_devices_split_tunnel_include_response_collection = client:TeamsDevicesSplitTunnelIncludeResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local teams_devices_split_tunnel_include_response_collections, err = client:TeamsDevicesSplitTunnelIncludeResponseCollection():list()
```


### TeamsDevicesSplitTunnelResponseCollection

Create an instance: `local teams_devices_split_tunnel_response_collection = client:TeamsDevicesSplitTunnelResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local teams_devices_split_tunnel_response_collections, err = client:TeamsDevicesSplitTunnelResponseCollection():list()
```


### TeamsDevicesZeroTrustAccountDeviceSetting

Create an instance: `local teams_devices_zero_trust_account_device_setting = client:TeamsDevicesZeroTrustAccountDeviceSetting(nil)`

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
| `result` | `table` |  |
| `root_certificate_installation_enabled` | `boolean` | Enable installation of cloudflare managed root certificate. |
| `use_zt_virtual_ip` | `boolean` | Enable using CGNAT virtual IPv4. |

#### Example: Load

```lua
local teams_devices_zero_trust_account_device_setting, err = client:TeamsDevicesZeroTrustAccountDeviceSetting():load({ account_id = "account_id" })
```


### Tunnel

Create an instance: `local tunnel = client:Tunnel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tunnels, err = client:Tunnel():list()
```


### TunnelCfdTunnelResponseCollection

Create an instance: `local tunnel_cfd_tunnel_response_collection = client:TunnelCfdTunnelResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tunnel_cfd_tunnel_response_collections, err = client:TunnelCfdTunnelResponseCollection():list()
```


### TunnelCfdTunnelResponseSingle

Create an instance: `local tunnel_cfd_tunnel_response_single = client:TunnelCfdTunnelResponseSingle(nil)`

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
| `errors` | `table` |  |
| `messages` | `table` |  |
| `name` | `string` | A user-friendly name for a tunnel. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |
| `tunnel_secret` | `string` | Sets the password required to run a locally-managed tunnel. |

#### Example: Load

```lua
local tunnel_cfd_tunnel_response_single, err = client:TunnelCfdTunnelResponseSingle():load({ account_id = "account_id", tunnel_id = "tunnel_id" })
```

#### Example: Create

```lua
local tunnel_cfd_tunnel_response_single, err = client:TunnelCfdTunnelResponseSingle():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  name = "example_name", -- string
  result = "example_result", -- string
  success = true, -- boolean
})
```


### TunnelConfiguration

Create an instance: `local tunnel_configuration = client:TunnelConfiguration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `table` | The tunnel configuration and ingress rules. |
| `result` | `table` | Cloudflare Tunnel configuration |

#### Example: Load

```lua
local tunnel_configuration, err = client:TunnelConfiguration():load({ account_id = "account_id", cfd_tunnel_id = "cfd_tunnel_id" })
```


### TunnelEmpty

Create an instance: `local tunnel_empty = client:TunnelEmpty(nil)`

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

Create an instance: `local tunnel_hostname_route_response_collection = client:TunnelHostnameRouteResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tunnel_hostname_route_response_collections, err = client:TunnelHostnameRouteResponseCollection():list()
```


### TunnelHostnameRouteResponseSingle

Create an instance: `local tunnel_hostname_route_response_single = client:TunnelHostnameRouteResponseSingle(nil)`

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
| `errors` | `table` |  |
| `hostname` | `string` | The hostname of the route. |
| `messages` | `table` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |
| `tunnel_id` | `string` | UUID of the tunnel. |

#### Example: Load

```lua
local tunnel_hostname_route_response_single, err = client:TunnelHostnameRouteResponseSingle():load({ account_id = "account_id", hostname_route_id = "hostname_route_id" })
```

#### Example: Create

```lua
local tunnel_hostname_route_response_single, err = client:TunnelHostnameRouteResponseSingle():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = "example_result", -- string
  success = true, -- boolean
})
```


### TunnelMeshConfigurationResponseSingle

Create an instance: `local tunnel_mesh_configuration_response_single = client:TunnelMeshConfigurationResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `table` | Provider-specific configuration. |
| `ha_mode` | `string` | High-availability mode for the WARP Connector tunnel. |
| `result` | `table` |  |

#### Example: Load

```lua
local tunnel_mesh_configuration_response_single, err = client:TunnelMeshConfigurationResponseSingle():load({ account_id = "account_id", warp_connector_id = "warp_connector_id" })
```


### TunnelRouteResponseSingle

Create an instance: `local tunnel_route_response_single = client:TunnelRouteResponseSingle(nil)`

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
| `errors` | `table` |  |
| `messages` | `table` |  |
| `network` | `string` | The private IPv4 or IPv6 range connected by the route, in CIDR notation. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |
| `tunnel_id` | `string` | UUID of the tunnel. |
| `virtual_network_id` | `string` | UUID of the virtual network. |

#### Example: Load

```lua
local tunnel_route_response_single, err = client:TunnelRouteResponseSingle():load({ account_id = "account_id", route_id = "route_id" })
```

#### Example: Create

```lua
local tunnel_route_response_single, err = client:TunnelRouteResponseSingle():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  network = "example_network", -- string
  result = "example_result", -- string
  success = true, -- boolean
  tunnel_id = "example_tunnel_id", -- string
})
```


### TunnelSubnetResponseCollection

Create an instance: `local tunnel_subnet_response_collection = client:TunnelSubnetResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tunnel_subnet_response_collections, err = client:TunnelSubnetResponseCollection():list()
```


### TunnelSubnetResponseSingle

Create an instance: `local tunnel_subnet_response_single = client:TunnelSubnetResponseSingle(nil)`

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
| `errors` | `table` |  |
| `is_default_network` | `boolean` | If `true`, this is the default subnet for the account. |
| `messages` | `table` |  |
| `name` | `string` | A user-friendly name for the subnet. |
| `network` | `string` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```lua
local tunnel_subnet_response_single, err = client:TunnelSubnetResponseSingle():load({ account_id = "account_id", address_family = "address_family" })
```

#### Example: Create

```lua
local tunnel_subnet_response_single, err = client:TunnelSubnetResponseSingle():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  name = "example_name", -- string
  network = "example_network", -- string
  result = "example_result", -- string
  success = true, -- boolean
})
```


### TunnelSubnetResponseSingleNullable

Create an instance: `local tunnel_subnet_response_single_nullable = client:TunnelSubnetResponseSingleNullable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TunnelTeamnetResponseCollection

Create an instance: `local tunnel_teamnet_response_collection = client:TunnelTeamnetResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tunnel_teamnet_response_collections, err = client:TunnelTeamnetResponseCollection():list()
```


### TunnelTeamnetResponseSingle

Create an instance: `local tunnel_teamnet_response_single = client:TunnelTeamnetResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```lua
local tunnel_teamnet_response_single, err = client:TunnelTeamnetResponseSingle():load({ account_id = "account_id", ip = "ip" })
```


### TunnelTunnelClient

Create an instance: `local tunnel_tunnel_client = client:TunnelTunnelClient(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```lua
local tunnel_tunnel_client, err = client:TunnelTunnelClient():load({ account_id = "account_id", cfd_tunnel_id = "cfd_tunnel_id", connector_id = "connector_id" })
```


### TunnelTunnelConnection

Create an instance: `local tunnel_tunnel_connection = client:TunnelTunnelConnection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tunnel_tunnel_connections, err = client:TunnelTunnelConnection():list()
```


### TunnelTunnelResponseToken

Create an instance: `local tunnel_tunnel_response_token = client:TunnelTunnelResponseToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `resources` | `table` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```lua
local tunnel_tunnel_response_tokens, err = client:TunnelTunnelResponseToken():list()
```

#### Example: Create

```lua
local tunnel_tunnel_response_token, err = client:TunnelTunnelResponseToken():create({
  account_id = "example_account_id", -- string
  cfd_tunnel_id = "example_cfd_tunnel_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  resources = {}, -- table
  result = "example_result", -- string
  success = true, -- boolean
})
```


### TunnelTunnelWarpConnectorClient

Create an instance: `local tunnel_tunnel_warp_connector_client = client:TunnelTunnelWarpConnectorClient(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```lua
local tunnel_tunnel_warp_connector_client, err = client:TunnelTunnelWarpConnectorClient():load({ account_id = "account_id", connector_id = "connector_id", warp_connector_id = "warp_connector_id" })
```


### TunnelTunnelWarpConnectorConnection

Create an instance: `local tunnel_tunnel_warp_connector_connection = client:TunnelTunnelWarpConnectorConnection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tunnel_tunnel_warp_connector_connections, err = client:TunnelTunnelWarpConnectorConnection():list()
```


### TunnelVnetResponseCollection

Create an instance: `local tunnel_vnet_response_collection = client:TunnelVnetResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tunnel_vnet_response_collections, err = client:TunnelVnetResponseCollection():list()
```


### TunnelVnetResponseSingle

Create an instance: `local tunnel_vnet_response_single = client:TunnelVnetResponseSingle(nil)`

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

```lua
local tunnel_vnet_response_single, err = client:TunnelVnetResponseSingle():load({ account_id = "account_id", virtual_network_id = "virtual_network_id" })
```

#### Example: Create

```lua
local tunnel_vnet_response_single, err = client:TunnelVnetResponseSingle():create({
  account_id = "example_account_id", -- string
})
```


### TunnelWarpConnectorResponseCollection

Create an instance: `local tunnel_warp_connector_response_collection = client:TunnelWarpConnectorResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tunnel_warp_connector_response_collections, err = client:TunnelWarpConnectorResponseCollection():list()
```


### TunnelWarpConnectorResponseSingle

Create an instance: `local tunnel_warp_connector_response_single = client:TunnelWarpConnectorResponseSingle(nil)`

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
| `errors` | `table` |  |
| `ha` | `boolean` | Indicates that the tunnel will be created to be highly available. |
| `messages` | `table` |  |
| `name` | `string` | A user-friendly name for a tunnel. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |
| `tunnel_secret` | `string` | Sets the password required to run a locally-managed tunnel. |

#### Example: Load

```lua
local tunnel_warp_connector_response_single, err = client:TunnelWarpConnectorResponseSingle():load({ account_id = "account_id", tunnel_id = "tunnel_id" })
```

#### Example: Create

```lua
local tunnel_warp_connector_response_single, err = client:TunnelWarpConnectorResponseSingle():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  name = "example_name", -- string
  result = "example_result", -- string
  success = true, -- boolean
})
```


### TunnelZeroTrustConnectivitySetting

Create an instance: `local tunnel_zero_trust_connectivity_setting = client:TunnelZeroTrustConnectivitySetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `icmp_proxy_enabled` | `boolean` | A flag to enable the ICMP proxy for the account network. |
| `messages` | `table` |  |
| `offramp_warp_enabled` | `boolean` | A flag to enable WARP to WARP traffic. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```lua
local tunnel_zero_trust_connectivity_settings, err = client:TunnelZeroTrustConnectivitySetting():list()
```


### Warp

Create an instance: `local warp = client:Warp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | An optional description of the subnet. |
| `errors` | `table` |  |
| `id` | `string` |  |
| `is_default_network` | `boolean` | If `true`, this is the default subnet for the account. |
| `messages` | `table` |  |
| `name` | `string` | A user-friendly name for the subnet. |
| `network` | `string` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Whether the API call was successful |

#### Example: Load

```lua
local warp, err = client:Warp():load({ id = "warp_id", account_id = "account_id" })
```


### WarpChangeEvent

Create an instance: `local warp_change_event = client:WarpChangeEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local warp_change_events, err = client:WarpChangeEvent():list()
```


### WarpTeamsDeviceApiOther

Create an instance: `local warp_teams_device_api_other = client:WarpTeamsDeviceApiOther(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local warp_teams_device_api_others, err = client:WarpTeamsDeviceApiOther():list()
```


### ZeroTrustGatewayApplicationsReviewStatus

Create an instance: `local zero_trust_gateway_applications_review_status = client:ZeroTrustGatewayApplicationsReviewStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved_apps` | `table` | Contains the ids of the approved applications. |
| `in_review_apps` | `table` | Contains the ids of the applications in review. |
| `result` | `table` |  |
| `unapproved_apps` | `table` | Contains the ids of the unapproved applications. |

#### Example: Load

```lua
local zero_trust_gateway_applications_review_status, err = client:ZeroTrustGatewayApplicationsReviewStatus():load({ account_id = "account_id" })
```


### ZeroTrustGatewayCsvOperationSingle

Create an instance: `local zero_trust_gateway_csv_operation_single = client:ZeroTrustGatewayCsvOperationSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local zero_trust_gateway_csv_operation_single, err = client:ZeroTrustGatewayCsvOperationSingle():create({
  account_id = "example_account_id", -- string
})
```


### ZeroTrustGatewayCustomCertificateSetting

Create an instance: `local zero_trust_gateway_custom_certificate_setting = client:ZeroTrustGatewayCustomCertificateSetting(nil)`

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

```lua
local zero_trust_gateway_custom_certificate_setting, err = client:ZeroTrustGatewayCustomCertificateSetting():load({ account_id = "account_id" })
```


### ZeroTrustGatewayGatewayAccount

Create an instance: `local zero_trust_gateway_gateway_account = client:ZeroTrustGatewayGatewayAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local zero_trust_gateway_gateway_account, err = client:ZeroTrustGatewayGatewayAccount():load({ account_id = "account_id" })
```

#### Example: Create

```lua
local zero_trust_gateway_gateway_account, err = client:ZeroTrustGatewayGatewayAccount():create({
  account_id = "example_account_id", -- string
})
```


### ZeroTrustGatewayGatewayAccountConfig

Create an instance: `local zero_trust_gateway_gateway_account_config = client:ZeroTrustGatewayGatewayAccountConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |
| `settings` | `table` | Specify account settings. |

#### Example: Load

```lua
local zero_trust_gateway_gateway_account_config, err = client:ZeroTrustGatewayGatewayAccountConfig():load({ account_id = "account_id" })
```


### ZeroTrustGatewayGatewayAccountEgressCidrPairList

Create an instance: `local zero_trust_gateway_gateway_account_egress_cidr_pair_list = client:ZeroTrustGatewayGatewayAccountEgressCidrPairList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local zero_trust_gateway_gateway_account_egress_cidr_pair_lists, err = client:ZeroTrustGatewayGatewayAccountEgressCidrPairList():list()
```


### ZeroTrustGatewayGatewayAccountLoggingSetting

Create an instance: `local zero_trust_gateway_gateway_account_logging_setting = client:ZeroTrustGatewayGatewayAccountLoggingSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `redact_pii` | `boolean` | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `result` | `table` |  |
| `settings_by_rule_type` | `table` | Configure logging settings for each rule type. |

#### Example: Load

```lua
local zero_trust_gateway_gateway_account_logging_setting, err = client:ZeroTrustGatewayGatewayAccountLoggingSetting():load({ account_id = "account_id" })
```


### ZeroTrustGatewayListItemResponseCollection

Create an instance: `local zero_trust_gateway_list_item_response_collection = client:ZeroTrustGatewayListItemResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` | Provide the list items. |
| `result_info` | `table` |  |

#### Example: List

```lua
local zero_trust_gateway_list_item_response_collections, err = client:ZeroTrustGatewayListItemResponseCollection():list()
```


### ZeroTrustGatewayListSingle

Create an instance: `local zero_trust_gateway_list_single = client:ZeroTrustGatewayListSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `append` | `table` | Add items to the list. |
| `description` | `string` | Provide the list description. |
| `items` | `table` | Add items to the list. |
| `name` | `string` | Specify the list name. |
| `remove` | `table` | Lists of item values you want to remove. |
| `result` | `table` |  |

#### Example: Load

```lua
local zero_trust_gateway_list_single, err = client:ZeroTrustGatewayListSingle():load({ account_id = "account_id", list_id = "list_id" })
```


### ZeroTrustGatewayResponseCollection

Create an instance: `local zero_trust_gateway_response_collection = client:ZeroTrustGatewayResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local zero_trust_gateway_response_collections, err = client:ZeroTrustGatewayResponseCollection():list()
```


### ZeroTrustGatewayResponseCollection10

Create an instance: `local zero_trust_gateway_response_collection_10 = client:ZeroTrustGatewayResponseCollection10(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |
| `result_info` | `table` |  |

#### Example: List

```lua
local zero_trust_gateway_response_collection_10s, err = client:ZeroTrustGatewayResponseCollection10():list()
```


### ZeroTrustGatewayResponseCollection2

Create an instance: `local zero_trust_gateway_response_collection_2 = client:ZeroTrustGatewayResponseCollection2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local zero_trust_gateway_response_collection_2s, err = client:ZeroTrustGatewayResponseCollection2():list()
```


### ZeroTrustGatewayResponseCollection3

Create an instance: `local zero_trust_gateway_response_collection_3 = client:ZeroTrustGatewayResponseCollection3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local zero_trust_gateway_response_collection_3s, err = client:ZeroTrustGatewayResponseCollection3():list()
```


### ZeroTrustGatewayResponseCollection4

Create an instance: `local zero_trust_gateway_response_collection_4 = client:ZeroTrustGatewayResponseCollection4(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local zero_trust_gateway_response_collection_4s, err = client:ZeroTrustGatewayResponseCollection4():list()
```


### ZeroTrustGatewayResponseCollection5

Create an instance: `local zero_trust_gateway_response_collection_5 = client:ZeroTrustGatewayResponseCollection5(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local zero_trust_gateway_response_collection_5s, err = client:ZeroTrustGatewayResponseCollection5():list()
```


### ZeroTrustGatewayResponseCollection6

Create an instance: `local zero_trust_gateway_response_collection_6 = client:ZeroTrustGatewayResponseCollection6(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local zero_trust_gateway_response_collection_6s, err = client:ZeroTrustGatewayResponseCollection6():list()
```


### ZeroTrustGatewayResponseCollection7

Create an instance: `local zero_trust_gateway_response_collection_7 = client:ZeroTrustGatewayResponseCollection7(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local zero_trust_gateway_response_collection_7s, err = client:ZeroTrustGatewayResponseCollection7():list()
```


### ZeroTrustGatewayResponseCollection8

Create an instance: `local zero_trust_gateway_response_collection_8 = client:ZeroTrustGatewayResponseCollection8(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local zero_trust_gateway_response_collection_8s, err = client:ZeroTrustGatewayResponseCollection8():list()
```


### ZeroTrustGatewayResponseCollection9

Create an instance: `local zero_trust_gateway_response_collection_9 = client:ZeroTrustGatewayResponseCollection9(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local zero_trust_gateway_response_collection_9s, err = client:ZeroTrustGatewayResponseCollection9():list()
```


### ZeroTrustGatewaySingle

Create an instance: `local zero_trust_gateway_single = client:ZeroTrustGatewaySingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |
| `validity_period_days` | `number` | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

#### Example: Load

```lua
local zero_trust_gateway_single, err = client:ZeroTrustGatewaySingle():load({ account_id = "account_id", certificate_id = "certificate_id" })
```

#### Example: Create

```lua
local zero_trust_gateway_single, err = client:ZeroTrustGatewaySingle():create({
  account_id = "example_account_id", -- string
})
```


### ZeroTrustGatewaySingleResponse2

Create an instance: `local zero_trust_gateway_single_response_2 = client:ZeroTrustGatewaySingleResponse2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local zero_trust_gateway_single_response_2, err = client:ZeroTrustGatewaySingleResponse2():load({ account_id = "account_id", operation_id = "operation_id" })
```


### ZeroTrustGatewaySingleResponse3

Create an instance: `local zero_trust_gateway_single_response_3 = client:ZeroTrustGatewaySingleResponse3(nil)`

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
| `endpoints` | `table` | Configure the destination endpoints for this location. |
| `max_ttl` | `table` | Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. |
| `name` | `string` | Specify the location name. |
| `networks` | `table` | Specify the list of network ranges from which requests at this location originate. |
| `result` | `table` |  |

#### Example: Load

```lua
local zero_trust_gateway_single_response_3, err = client:ZeroTrustGatewaySingleResponse3():load({ account_id = "account_id", location_id = "location_id" })
```

#### Example: Create

```lua
local zero_trust_gateway_single_response_3, err = client:ZeroTrustGatewaySingleResponse3():create({
  account_id = "example_account_id", -- string
  endpoints = {}, -- table
  max_ttl = {}, -- table
  name = "example_name", -- string
})
```


### ZeroTrustGatewaySingleResponse4

Create an instance: `local zero_trust_gateway_single_response_4 = client:ZeroTrustGatewaySingleResponse4(nil)`

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
| `expiration` | `table` | Defines the expiration time stamp and default duration of a DNS policy. |
| `filters` | `table` | Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| `identity` | `string` | Specify the wirefilter expression used for identity matching. |
| `name` | `string` | Specify the rule name. |
| `precedence` | `number` | Set the order of your rules. |
| `result` | `table` |  |
| `rule_settings` | `table` | Defines settings for this rule. |
| `schedule` | `table` | Defines the schedule for activating DNS policies. |
| `traffic` | `string` | Specify the wirefilter expression used for traffic matching. |

#### Example: Load

```lua
local zero_trust_gateway_single_response_4, err = client:ZeroTrustGatewaySingleResponse4():load({ account_id = "account_id", rule_id = "rule_id" })
```

#### Example: Create

```lua
local zero_trust_gateway_single_response_4, err = client:ZeroTrustGatewaySingleResponse4():create({
  account_id = "example_account_id", -- string
  action = "example_action", -- string
  expiration = {}, -- table
  name = "example_name", -- string
  result = {}, -- table
})
```


### ZeroTrustGatewaySingleResponse5

Create an instance: `local zero_trust_gateway_single_response_5 = client:ZeroTrustGatewaySingleResponse5(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ips` | `table` | Specify the list of CIDRs to restrict ingress connections. |
| `kind` | `string` | The proxy endpoint kind. |
| `name` | `string` | Specify the name of the proxy endpoint. |
| `result` | `any` |  |

#### Example: Load

```lua
local zero_trust_gateway_single_response_5, err = client:ZeroTrustGatewaySingleResponse5():load({ account_id = "account_id", proxy_endpoint_id = "proxy_endpoint_id" })
```

#### Example: Create

```lua
local zero_trust_gateway_single_response_5, err = client:ZeroTrustGatewaySingleResponse5():create({
  account_id = "example_account_id", -- string
})
```


### ZeroTrustGatewaySingleResponse6

Create an instance: `local zero_trust_gateway_single_response_6 = client:ZeroTrustGatewaySingleResponse6(nil)`

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
| `result` | `table` |  |

#### Example: Load

```lua
local zero_trust_gateway_single_response_6, err = client:ZeroTrustGatewaySingleResponse6():load({ account_id = "account_id" })
```

#### Example: Create

```lua
local zero_trust_gateway_single_response_6, err = client:ZeroTrustGatewaySingleResponse6():create({
  account_id = "example_account_id", -- string
  public_key = "example_public_key", -- string
})
```


### ZeroTrustGatewaySingleResponse7

Create an instance: `local zero_trust_gateway_single_response_7 = client:ZeroTrustGatewaySingleResponse7(nil)`

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
| `result` | `table` |  |
| `slug` | `string` | URL-friendly version of the PAC file name. |

#### Example: Load

```lua
local zero_trust_gateway_single_response_7, err = client:ZeroTrustGatewaySingleResponse7():load({ account_id = "account_id", pacfile_id = "pacfile_id" })
```

#### Example: Create

```lua
local zero_trust_gateway_single_response_7, err = client:ZeroTrustGatewaySingleResponse7():create({
  account_id = "example_account_id", -- string
  contents = "example_contents", -- string
  name = "example_name", -- string
})
```


### ZeroTrustGatewaySingleResponseWithListItem

Create an instance: `local zero_trust_gateway_single_response_with_list_item = client:ZeroTrustGatewaySingleResponseWithListItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Provide the list description. |
| `items` | `table` | Add items to the list. |
| `name` | `string` | Specify the list name. |
| `type` | `string` | Specify the list type. |

#### Example: Create

```lua
local zero_trust_gateway_single_response_with_list_item, err = client:ZeroTrustGatewaySingleResponseWithListItem():create({
  account_id = "example_account_id", -- string
  name = "example_name", -- string
  type = "example_type", -- string
})
```


### ZeroTrustRiskScoring

Create an instance: `local zero_trust_risk_scoring = client:ZeroTrustRiskScoring(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `behaviors` | `table` |  |
| `result` | `table` |  |

#### Example: Load

```lua
local zero_trust_risk_scoring, err = client:ZeroTrustRiskScoring():load({ account_id = "account_id" })
```

#### Example: Create

```lua
local zero_trust_risk_scoring, err = client:ZeroTrustRiskScoring():create({
  account_id = "example_account_id", -- string
  zt_risk_scoring_id = "example_zt_risk_scoring_id", -- string
  behaviors = {}, -- table
  result = {}, -- table
})
```


### ZeroTrustRiskScoringIntegration

Create an instance: `local zero_trust_risk_scoring_integration = client:ZeroTrustRiskScoringIntegration(nil)`

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
| `result` | `table` |  |
| `tenant_url` | `string` | The base url of the tenant, e.g. |

#### Example: Load

```lua
local zero_trust_risk_scoring_integration, err = client:ZeroTrustRiskScoringIntegration():load({ id = "zero_trust_risk_scoring_integration_id", account_id = "account_id" })
```

#### Example: List

```lua
local zero_trust_risk_scoring_integrations, err = client:ZeroTrustRiskScoringIntegration():list()
```

#### Example: Create

```lua
local zero_trust_risk_scoring_integration, err = client:ZeroTrustRiskScoringIntegration():create({
  account_id = "example_account_id", -- string
  active = true, -- boolean
  integration_type = "example_integration_type", -- string
  result = {}, -- table
  tenant_url = "example_tenant_url", -- string
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudflare-zero-trust_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudflare-zero-trust_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local zerotrustgatewaysingleresponse6 = client:ZeroTrustGatewaySingleResponse6()
zerotrustgatewaysingleresponse6:load({ account_id = "example" })

-- zerotrustgatewaysingleresponse6:data_get() now returns the zerotrustgatewaysingleresponse6 data from the last load
-- zerotrustgatewaysingleresponse6:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
