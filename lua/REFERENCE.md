# CloudflareZeroTrust Lua SDK Reference

Complete API reference for the CloudflareZeroTrust Lua SDK.


## CloudflareZeroTrustSDK

### Constructor

```lua
local sdk = require("cloudflare-zero-trust_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `ClientVersion(data)`

Create a new `ClientVersion` entity instance. Pass `nil` for no initial data.

#### `Cni(data)`

Create a new `Cni` entity instance. Pass `nil` for no initial data.

#### `DeploymentGroup(data)`

Create a new `DeploymentGroup` entity instance. Pass `nil` for no initial data.

#### `DexRemoteCommand(data)`

Create a new `DexRemoteCommand` entity instance. Pass `nil` for no initial data.

#### `DexRule(data)`

Create a new `DexRule` entity instance. Pass `nil` for no initial data.

#### `DexSyntheticApplicationMonitoring(data)`

Create a new `DexSyntheticApplicationMonitoring` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringDevice(data)`

Create a new `DigitalExperienceMonitoringDevice` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringDexDeleteResponseCollection(data)`

Create a new `DigitalExperienceMonitoringDexDeleteResponseCollection` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringDexResponseCollection(data)`

Create a new `DigitalExperienceMonitoringDexResponseCollection` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringDexSingle(data)`

Create a new `DigitalExperienceMonitoringDexSingle` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusDevice(data)`

Create a new `DigitalExperienceMonitoringFleetStatusDevice` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusLive(data)`

Create a new `DigitalExperienceMonitoringFleetStatusLive` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusOverTime(data)`

Create a new `DigitalExperienceMonitoringFleetStatusOverTime` entity instance. Pass `nil` for no initial data.

#### `Interconnect(data)`

Create a new `Interconnect` entity instance. Pass `nil` for no initial data.

#### `IpProfile(data)`

Create a new `IpProfile` entity instance. Pass `nil` for no initial data.

#### `List(data)`

Create a new `List` entity instance. Pass `nil` for no initial data.

#### `Location(data)`

Create a new `Location` entity instance. Pass `nil` for no initial data.

#### `NscCni(data)`

Create a new `NscCni` entity instance. Pass `nil` for no initial data.

#### `NscDefaultName(data)`

Create a new `NscDefaultName` entity instance. Pass `nil` for no initial data.

#### `NscInterconnect(data)`

Create a new `NscInterconnect` entity instance. Pass `nil` for no initial data.

#### `NscSetting(data)`

Create a new `NscSetting` entity instance. Pass `nil` for no initial data.

#### `NscSlotInfo(data)`

Create a new `NscSlotInfo` entity instance. Pass `nil` for no initial data.

#### `NscStatusInfo(data)`

Create a new `NscStatusInfo` entity instance. Pass `nil` for no initial data.

#### `OverrideCode(data)`

Create a new `OverrideCode` entity instance. Pass `nil` for no initial data.

#### `Pacfile(data)`

Create a new `Pacfile` entity instance. Pass `nil` for no initial data.

#### `PhysicalDevice(data)`

Create a new `PhysicalDevice` entity instance. Pass `nil` for no initial data.

#### `ProxyEndpoint(data)`

Create a new `ProxyEndpoint` entity instance. Pass `nil` for no initial data.

#### `Registration(data)`

Create a new `Registration` entity instance. Pass `nil` for no initial data.

#### `Rule(data)`

Create a new `Rule` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesApiResponseSingle(data)`

Create a new `TeamsDevicesApiResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesComponentsSchemasResponseCollection(data)`

Create a new `TeamsDevicesComponentsSchemasResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesComponentsSchemasSingle(data)`

Create a new `TeamsDevicesComponentsSchemasSingle` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesDefaultDeviceSetting(data)`

Create a new `TeamsDevicesDefaultDeviceSetting` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesDevice(data)`

Create a new `TeamsDevicesDevice` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesDeviceSetting(data)`

Create a new `TeamsDevicesDeviceSetting` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesDeviceSettingsResponseCollection(data)`

Create a new `TeamsDevicesDeviceSettingsResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesFallbackDomainResponseCollection(data)`

Create a new `TeamsDevicesFallbackDomainResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesGlobalWarpOverride(data)`

Create a new `TeamsDevicesGlobalWarpOverride` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesId(data)`

Create a new `TeamsDevicesId` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesOverrideCode(data)`

Create a new `TeamsDevicesOverrideCode` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesResponseCollection(data)`

Create a new `TeamsDevicesResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSchemasId(data)`

Create a new `TeamsDevicesSchemasId` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSchemasResponseCollection(data)`

Create a new `TeamsDevicesSchemasResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSchemasSingle(data)`

Create a new `TeamsDevicesSchemasSingle` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSingle(data)`

Create a new `TeamsDevicesSingle` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSplitTunnelIncludeResponseCollection(data)`

Create a new `TeamsDevicesSplitTunnelIncludeResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSplitTunnelResponseCollection(data)`

Create a new `TeamsDevicesSplitTunnelResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesZeroTrustAccountDeviceSetting(data)`

Create a new `TeamsDevicesZeroTrustAccountDeviceSetting` entity instance. Pass `nil` for no initial data.

#### `Tunnel(data)`

Create a new `Tunnel` entity instance. Pass `nil` for no initial data.

#### `TunnelCfdTunnelResponseCollection(data)`

Create a new `TunnelCfdTunnelResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelCfdTunnelResponseSingle(data)`

Create a new `TunnelCfdTunnelResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelConfiguration(data)`

Create a new `TunnelConfiguration` entity instance. Pass `nil` for no initial data.

#### `TunnelEmpty(data)`

Create a new `TunnelEmpty` entity instance. Pass `nil` for no initial data.

#### `TunnelHostnameRouteResponseCollection(data)`

Create a new `TunnelHostnameRouteResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelHostnameRouteResponseSingle(data)`

Create a new `TunnelHostnameRouteResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelMeshConfigurationResponseSingle(data)`

Create a new `TunnelMeshConfigurationResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelRouteResponseSingle(data)`

Create a new `TunnelRouteResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelSubnetResponseCollection(data)`

Create a new `TunnelSubnetResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelSubnetResponseSingle(data)`

Create a new `TunnelSubnetResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelSubnetResponseSingleNullable(data)`

Create a new `TunnelSubnetResponseSingleNullable` entity instance. Pass `nil` for no initial data.

#### `TunnelTeamnetResponseCollection(data)`

Create a new `TunnelTeamnetResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelTeamnetResponseSingle(data)`

Create a new `TunnelTeamnetResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelClient(data)`

Create a new `TunnelTunnelClient` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelConnection(data)`

Create a new `TunnelTunnelConnection` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelResponseToken(data)`

Create a new `TunnelTunnelResponseToken` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelWarpConnectorClient(data)`

Create a new `TunnelTunnelWarpConnectorClient` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelWarpConnectorConnection(data)`

Create a new `TunnelTunnelWarpConnectorConnection` entity instance. Pass `nil` for no initial data.

#### `TunnelVnetResponseCollection(data)`

Create a new `TunnelVnetResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelVnetResponseSingle(data)`

Create a new `TunnelVnetResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelWarpConnectorResponseCollection(data)`

Create a new `TunnelWarpConnectorResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelWarpConnectorResponseSingle(data)`

Create a new `TunnelWarpConnectorResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelZeroTrustConnectivitySetting(data)`

Create a new `TunnelZeroTrustConnectivitySetting` entity instance. Pass `nil` for no initial data.

#### `Warp(data)`

Create a new `Warp` entity instance. Pass `nil` for no initial data.

#### `WarpChangeEvent(data)`

Create a new `WarpChangeEvent` entity instance. Pass `nil` for no initial data.

#### `WarpTeamsDeviceApiOther(data)`

Create a new `WarpTeamsDeviceApiOther` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayApplicationsReviewStatus(data)`

Create a new `ZeroTrustGatewayApplicationsReviewStatus` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayCsvOperationSingle(data)`

Create a new `ZeroTrustGatewayCsvOperationSingle` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayCustomCertificateSetting(data)`

Create a new `ZeroTrustGatewayCustomCertificateSetting` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayGatewayAccount(data)`

Create a new `ZeroTrustGatewayGatewayAccount` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayGatewayAccountConfig(data)`

Create a new `ZeroTrustGatewayGatewayAccountConfig` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayGatewayAccountEgressCidrPairList(data)`

Create a new `ZeroTrustGatewayGatewayAccountEgressCidrPairList` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayGatewayAccountLoggingSetting(data)`

Create a new `ZeroTrustGatewayGatewayAccountLoggingSetting` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayListItemResponseCollection(data)`

Create a new `ZeroTrustGatewayListItemResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayListSingle(data)`

Create a new `ZeroTrustGatewayListSingle` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection(data)`

Create a new `ZeroTrustGatewayResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection10(data)`

Create a new `ZeroTrustGatewayResponseCollection10` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection2(data)`

Create a new `ZeroTrustGatewayResponseCollection2` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection3(data)`

Create a new `ZeroTrustGatewayResponseCollection3` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection4(data)`

Create a new `ZeroTrustGatewayResponseCollection4` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection5(data)`

Create a new `ZeroTrustGatewayResponseCollection5` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection6(data)`

Create a new `ZeroTrustGatewayResponseCollection6` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection7(data)`

Create a new `ZeroTrustGatewayResponseCollection7` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection8(data)`

Create a new `ZeroTrustGatewayResponseCollection8` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection9(data)`

Create a new `ZeroTrustGatewayResponseCollection9` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingle(data)`

Create a new `ZeroTrustGatewaySingle` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse2(data)`

Create a new `ZeroTrustGatewaySingleResponse2` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse3(data)`

Create a new `ZeroTrustGatewaySingleResponse3` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse4(data)`

Create a new `ZeroTrustGatewaySingleResponse4` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse5(data)`

Create a new `ZeroTrustGatewaySingleResponse5` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse6(data)`

Create a new `ZeroTrustGatewaySingleResponse6` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse7(data)`

Create a new `ZeroTrustGatewaySingleResponse7` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponseWithListItem(data)`

Create a new `ZeroTrustGatewaySingleResponseWithListItem` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustRiskScoring(data)`

Create a new `ZeroTrustRiskScoring` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustRiskScoringIntegration(data)`

Create a new `ZeroTrustRiskScoringIntegration` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ClientVersionEntity

```lua
local client_version = client:ClientVersion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ClientVersion():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClientVersionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CniEntity

```lua
local cni = client:Cni(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Cni():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CniEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeploymentGroupEntity

```lua
local deployment_group = client:DeploymentGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for the deployment group. |
| `policy_ids` | `table` | No | Contains an optional list of policy IDs assigned to a group. |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |
| `version_config` | `table` | Yes | Contains at least one version configuration. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `errors` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `messages` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `policy_ids` | - | - | - | - | - |
| `result` | - | - | - | - | - |
| `result_info` | - | - | - | - | - |
| `success` | - | - | - | - | - |
| `version_config` | - | - | - | Yes | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DeploymentGroup():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  success = --[[ boolean ]],
  version_config = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DeploymentGroup():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DeploymentGroup():load({ id = "deployment_group_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DeploymentGroup():remove({ id = "deployment_group_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DeploymentGroup():update({
  id = "deployment_group_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DexRemoteCommandEntity

```lua
local dex_remote_command = client:DexRemoteCommand(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commands` | `table` | Yes | List of device-level commands to execute |
| `result` | `table` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `commands` | - | - |
| `result` | Yes | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DexRemoteCommand():create({
  account_id = --[[ string ]],
  commands = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DexRemoteCommand():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DexRemoteCommandEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DexRuleEntity

```lua
local dex_rule = client:DexRule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `match` | `string` | Yes | The wirefilter expression to match. |
| `name` | `string` | Yes | The name of the Rule. |
| `result` | `table` | No |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `description` | - | - | - | - |
| `id` | - | - | - | - |
| `match` | - | - | Yes | - |
| `name` | - | - | Yes | - |
| `result` | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DexRule():create({
  account_id = --[[ string ]],
  match = --[[ string ]],
  name = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DexRule():load({ id = "dex_rule_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DexRule():remove({ id = "dex_rule_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DexRule():update({
  id = "dex_rule_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DexRuleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DexSyntheticApplicationMonitoringEntity

```lua
local dex_synthetic_application_monitoring = client:DexSyntheticApplicationMonitoring(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes | array of colos. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | Yes |
| `success` | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DexSyntheticApplicationMonitoring():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DexSyntheticApplicationMonitoring():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DexSyntheticApplicationMonitoringEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DigitalExperienceMonitoringDeviceEntity

```lua
local digital_experience_monitoring_device = client:DigitalExperienceMonitoringDevice(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alwaysOn` | `boolean` | No |  |
| `batteryCharging` | `boolean` | No |  |
| `batteryCycles` | `number` | No |  |
| `batteryPct` | `number` | No |  |
| `colo` | `string` | Yes | Cloudflare colo airport code. |
| `connectionType` | `string` | No |  |
| `cpuPct` | `number` | No |  |
| `cpuPctByApp` | `table` | No |  |
| `deviceId` | `string` | Yes | Device identifier (UUID v4) |
| `deviceIpv4` | `table` | No |  |
| `deviceIpv6` | `table` | No |  |
| `deviceName` | `string` | No | Device identifier (human readable). |
| `deviceRegistration` | `string` | No | Deprecated: use registrationId. |
| `diskReadBps` | `number` | No |  |
| `diskUsagePct` | `number` | No |  |
| `diskWriteBps` | `number` | No |  |
| `dohSubdomain` | `string` | No |  |
| `estimatedLossPct` | `number` | No |  |
| `firewallEnabled` | `boolean` | No |  |
| `gatewayIpv4` | `table` | No |  |
| `gatewayIpv6` | `table` | No |  |
| `handshakeLatencyMs` | `number` | No |  |
| `ispIpv4` | `table` | No |  |
| `ispIpv6` | `table` | No |  |
| `metal` | `string` | No |  |
| `mode` | `string` | Yes | The mode under which the WARP client is run. |
| `networkRcvdBps` | `number` | No |  |
| `networkSentBps` | `number` | No |  |
| `networkSsid` | `string` | No |  |
| `personEmail` | `string` | No | User contact email address |
| `platform` | `string` | Yes | Operating system. |
| `ramAvailableKb` | `number` | No |  |
| `ramUsedPct` | `number` | No |  |
| `ramUsedPctByApp` | `table` | No |  |
| `registrationId` | `string` | No | Device registration identifier (UUID v4). |
| `rtt` | `table` | No | Round-trip time statistics for the WARP tunnel. |
| `status` | `string` | Yes | Network status. |
| `switchLocked` | `boolean` | No |  |
| `timestamp` | `string` | Yes |  |
| `tunnelStats` | `table` | No | WARP tunnel packet and byte counters. |
| `tunnelType` | `string` | No |  |
| `version` | `string` | Yes | WARP client version. |
| `wifiStrengthDbm` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DigitalExperienceMonitoringDevice():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringDeviceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DigitalExperienceMonitoringDexDeleteResponseCollectionEntity

```lua
local digital_experience_monitoring_dex_delete_response_collection = client:DigitalExperienceMonitoringDexDeleteResponseCollection(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DigitalExperienceMonitoringDexDeleteResponseCollection():remove({ account_id = "account_id", dex_test_id = "dex_test_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringDexDeleteResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DigitalExperienceMonitoringDexResponseCollectionEntity

```lua
local digital_experience_monitoring_dex_response_collection = client:DigitalExperienceMonitoringDexResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DigitalExperienceMonitoringDexResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringDexResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DigitalExperienceMonitoringDexSingleEntity

```lua
local digital_experience_monitoring_dex_single = client:DigitalExperienceMonitoringDexSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No | Date the test was created, in RFC 3339 format. |
| `data` | `table` | Yes | The configuration object which contains the details for the WARP client to conduct the test. |
| `description` | `string` | No | Additional details about the test. |
| `enabled` | `boolean` | Yes | Determines whether or not the test is active. |
| `interval` | `string` | Yes | How often the test will run. |
| `name` | `string` | Yes | The name of the DEX test. |
| `result` | `table` | Yes |  |
| `target_policies` | `any` | No |  |
| `targeted` | `boolean` | No |  |
| `test_id` | `string` | No | The unique identifier for the test. |
| `updated` | `string` | No | Date the test was last updated, in RFC 3339 format. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DigitalExperienceMonitoringDexSingle():create({
  account_id = --[[ string ]],
  data = --[[ table ]],
  enabled = --[[ boolean ]],
  interval = --[[ string ]],
  name = --[[ string ]],
  result = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DigitalExperienceMonitoringDexSingle():load({ account_id = "account_id", dex_test_id = "dex_test_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DigitalExperienceMonitoringDexSingle():update({
  account_id = "account_id",
  dex_test_id = "dex_test_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringDexSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusDeviceEntity

```lua
local digital_experience_monitoring_fleet_status_device = client:DigitalExperienceMonitoringFleetStatusDevice(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DigitalExperienceMonitoringFleetStatusDevice():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringFleetStatusDeviceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusLiveEntity

```lua
local digital_experience_monitoring_fleet_status_live = client:DigitalExperienceMonitoringFleetStatusLive(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DigitalExperienceMonitoringFleetStatusLive():load({ account_id = "account_id", since_minute = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringFleetStatusLiveEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusOverTimeEntity

```lua
local digital_experience_monitoring_fleet_status_over_time = client:DigitalExperienceMonitoringFleetStatusOverTime(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DigitalExperienceMonitoringFleetStatusOverTime():load({ account_id = "account_id", from = "from", to = "to" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringFleetStatusOverTimeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InterconnectEntity

```lua
local interconnect = client:Interconnect(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Interconnect():load({ account_id = "account_id", icon = "icon" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Interconnect():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InterconnectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IpProfileEntity

```lua
local ip_profile = client:IpProfile(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | An optional description of the Device IP profile. |
| `enabled` | `boolean` | No | Whether the Device IP profile will be applied to matching devices. |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `match` | `string` | Yes | The wirefilter expression to match registrations. |
| `messages` | `table` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for the Device IP profile. |
| `precedence` | `number` | Yes | The precedence of the Device IP profile. |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `subnet_id` | `string` | Yes | The ID of the Subnet. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `enabled` | - | - | - | - | - |
| `errors` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `match` | - | - | - | Yes | - |
| `messages` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `precedence` | - | - | - | Yes | - |
| `result` | - | - | - | - | - |
| `result_info` | - | - | - | - | - |
| `subnet_id` | - | - | - | Yes | - |
| `success` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IpProfile():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  match = --[[ string ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  precedence = --[[ number ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  subnet_id = --[[ string ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IpProfile():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IpProfile():load({ id = "ip_profile_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:IpProfile():remove({ id = "ip_profile_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IpProfile():update({
  id = "ip_profile_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpProfileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListEntity

```lua
local list = client:List(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:List():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LocationEntity

```lua
local location = client:Location(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Location():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LocationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NscCniEntity

```lua
local nsc_cni = client:NscCni(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | Customer account tag |
| `bgp` | `table` | Yes |  |
| `bgp_mode` | `string` | No | The BGP mode for a CNI. |
| `cust_ip` | `string` | Yes | Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`. |
| `id` | `string` | Yes |  |
| `interconnect` | `string` | Yes | Interconnect identifier hosting this CNI |
| `magic` | `table` | Yes |  |
| `p2p_ip` | `string` | Yes | Cloudflare end of the point-to-point link |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:NscCni():create({
  account_id = --[[ string ]],
  account = --[[ string ]],
  bgp = --[[ table ]],
  cust_ip = --[[ string ]],
  id = --[[ string ]],
  interconnect = --[[ string ]],
  magic = --[[ table ]],
  p2p_ip = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NscCni():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NscCni():load({ id = "nsc_cni_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NscCni():update({
  id = "nsc_cni_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NscCniEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NscDefaultNameEntity

```lua
local nsc_default_name = client:NscDefaultName(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The default customer name for the interconnect |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NscDefaultName():load({ account_id = "account_id", interconnect_id = "interconnect_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NscDefaultNameEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NscInterconnectEntity

```lua
local nsc_interconnect = client:NscInterconnect(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `table` | Yes |  |
| `next` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:NscInterconnect():create({
  account_id = --[[ string ]],
  items = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NscInterconnect():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NscInterconnect():load({ id = "nsc_interconnect_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NscInterconnectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NscSettingEntity

```lua
local nsc_setting = client:NscSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_asn` | `number` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `default_asn` | - | Yes |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NscSetting():load({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NscSetting():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NscSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NscSlotInfoEntity

```lua
local nsc_slot_info = client:NscSlotInfo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | Customer account tag |
| `address` | `table` | Yes |  |
| `ccr_device_name` | `string` | No |  |
| `facility` | `table` | Yes |  |
| `id` | `string` | Yes | Slot ID |
| `name` | `string` | Yes |  |
| `occupied` | `boolean` | Yes | Whether the slot is occupied or not |
| `site` | `string` | Yes |  |
| `speed` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NscSlotInfo():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NscSlotInfo():load({ account_id = "account_id", slot = "slot" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NscSlotInfoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NscStatusInfoEntity

```lua
local nsc_status_info = client:NscStatusInfo(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NscStatusInfo():load({ account_id = "account_id", icon = "icon" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NscStatusInfoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OverrideCodeEntity

```lua
local override_code = client:OverrideCode(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `device_id` | `string` | No | Physical device ID. |
| `duration_hours` | `number` | Yes | Number of hours for which the override code should remain valid. |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `scope` | `string` | Yes | Whether the code applies to every device in the account or one physical device. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `type` | `string` | Yes | The feature that the override code applies to. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OverrideCode():create({
  account_id = --[[ string ]],
  duration_hours = --[[ number ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  scope = --[[ string ]],
  success = --[[ boolean ]],
  type = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OverrideCodeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PacfileEntity

```lua
local pacfile = client:Pacfile(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Pacfile():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PacfileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PhysicalDeviceEntity

```lua
local physical_device = client:PhysicalDevice(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes | A WARP Device. |
| `result_info` | `table` | Yes | V4 public API Pagination/Cursor info. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `tags` | `table` | No | Replaces all tags assigned to the physical device. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PhysicalDevice():create({
  account_id = --[[ string ]],
  id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PhysicalDevice():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PhysicalDevice():load({ id = "physical_device_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PhysicalDevice():remove({ id = "physical_device_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PhysicalDevice():update({
  id = "physical_device_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PhysicalDeviceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProxyEndpointEntity

```lua
local proxy_endpoint = client:ProxyEndpoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProxyEndpoint():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProxyEndpointEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RegistrationEntity

```lua
local registration = client:Registration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes | A WARP configuration tied to a single user. |
| `result_info` | `table` | Yes | V4 public API Pagination/Cursor info. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Registration():create({
  account_id = --[[ string ]],
  id = --[[ table ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Registration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Registration():load({ id = "registration_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Registration():remove({ id = "registration_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegistrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RuleEntity

```lua
local rule = client:Rule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Rule():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RuleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesApiResponseSingleEntity

```lua
local teams_devices_api_response_single = client:TeamsDevicesApiResponseSingle(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TeamsDevicesApiResponseSingle():create({
  account_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesApiResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesComponentsSchemasResponseCollectionEntity

```lua
local teams_devices_components_schemas_response_collection = client:TeamsDevicesComponentsSchemasResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TeamsDevicesComponentsSchemasResponseCollection():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesComponentsSchemasResponseCollection():remove({ account_id = "account_id", network_id = "network_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesComponentsSchemasResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesComponentsSchemasSingleEntity

```lua
local teams_devices_components_schemas_single = client:TeamsDevicesComponentsSchemasSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `table` | Yes | The configuration object containing information for the WARP client to detect the managed network. |
| `name` | `string` | Yes | The name of the device managed network. |
| `result` | `table` | No |  |
| `type` | `string` | Yes | The type of device managed network. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `config` | - | - | Yes |
| `name` | - | - | Yes |
| `result` | - | - | - |
| `type` | - | - | Yes |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TeamsDevicesComponentsSchemasSingle():create({
  account_id = --[[ string ]],
  config = --[[ table ]],
  name = --[[ string ]],
  type = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesComponentsSchemasSingle():load({ account_id = "account_id", network_id = "network_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TeamsDevicesComponentsSchemasSingle():update({
  account_id = "account_id",
  network_id = "network_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesComponentsSchemasSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesDefaultDeviceSettingEntity

```lua
local teams_devices_default_device_setting = client:TeamsDevicesDefaultDeviceSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_mode_switch` | `boolean` | No | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `boolean` | No | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `boolean` | No | Whether to allow devices to leave the organization. |
| `auto_connect` | `number` | No | The amount of time in seconds to reconnect after having been disabled. |
| `captive_portal` | `number` | No | Turn on the captive portal after the specified amount of time. |
| `disable_auto_fallback` | `boolean` | No | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `table` | No | List of DNS search suffixes to apply to clients. |
| `exclude` | `table` | No | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `boolean` | No | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `table` | Yes | Global Acceleration settings for China. |
| `include` | `table` | No | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `number` | No | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `number` | No | The size of the subnet for the local access network. |
| `register_interface_ip_with_dns` | `boolean` | No | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `table` | No |  |
| `sccm_vpn_boundary_support` | `boolean` | No | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `table` | No |  |
| `support_url` | `string` | No | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `boolean` | No | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | No | Determines which tunnel protocol to use. |
| `uninstall_protection` | `boolean` | No | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `table` | Yes | Virtual network access settings for the device. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesDefaultDeviceSetting():load({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TeamsDevicesDefaultDeviceSetting():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesDefaultDeviceSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesDeviceEntity

```lua
local teams_devices_device = client:TeamsDevicesDevice(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TeamsDevicesDevice():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesDevice():load({ id = "teams_devices_device_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesDeviceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesDeviceSettingEntity

```lua
local teams_devices_device_setting = client:TeamsDevicesDeviceSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_mode_switch` | `boolean` | No | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `boolean` | No | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `boolean` | No | Whether to allow devices to leave the organization. |
| `auto_connect` | `number` | No | The amount of time in seconds to reconnect after having been disabled. |
| `browser_extension_config` | `table` | Yes | Browser extension proxy settings. |
| `captive_portal` | `number` | No | Turn on the captive portal after the specified amount of time. |
| `default` | `boolean` | No | Whether the policy is the account default. |
| `description` | `string` | No | A description of the policy. |
| `disable_auto_fallback` | `boolean` | No | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `table` | No | List of DNS search suffixes to apply to clients. |
| `enabled` | `boolean` | No | Whether the policy will be applied to matching devices. |
| `exclude` | `table` | No | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `boolean` | No | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `table` | Yes | Global Acceleration settings for China. |
| `include` | `table` | No | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `number` | No | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `number` | No | The size of the subnet for the local access network. |
| `match` | `string` | No | The wirefilter expression to match devices. |
| `name` | `string` | Yes | The name of the device settings profile. |
| `precedence` | `number` | No | The precedence of the policy. |
| `profile_type` | `string` | No | The client type to which the device settings profile applies. |
| `register_interface_ip_with_dns` | `boolean` | No | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `table` | No |  |
| `sccm_vpn_boundary_support` | `boolean` | No | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `table` | No |  |
| `support_url` | `string` | No | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `boolean` | No | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | No | Determines which tunnel protocol to use. |
| `uninstall_protection` | `boolean` | No | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `table` | Yes | Virtual network access settings for the device. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `allow_mode_switch` | - | - | - |
| `allow_updates` | - | - | - |
| `allowed_to_leave` | - | - | - |
| `auto_connect` | - | - | - |
| `browser_extension_config` | - | - | - |
| `captive_portal` | - | - | - |
| `default` | - | - | - |
| `description` | - | - | - |
| `disable_auto_fallback` | - | - | - |
| `dns_search_suffixes` | - | - | - |
| `enabled` | - | - | - |
| `exclude` | - | - | - |
| `exclude_office_ips` | - | - | - |
| `global_acceleration` | - | - | - |
| `include` | - | - | - |
| `lan_allow_minutes` | - | - | - |
| `lan_allow_subnet_size` | - | - | - |
| `match` | - | - | - |
| `name` | - | - | Yes |
| `precedence` | - | - | - |
| `profile_type` | - | - | - |
| `register_interface_ip_with_dns` | - | - | - |
| `result` | - | - | - |
| `sccm_vpn_boundary_support` | - | - | - |
| `service_mode_v2` | - | - | - |
| `support_url` | - | - | - |
| `switch_locked` | - | - | - |
| `tunnel_protocol` | - | - | - |
| `uninstall_protection` | - | - | - |
| `virtual_networks` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TeamsDevicesDeviceSetting():create({
  account_id = --[[ string ]],
  browser_extension_config = --[[ table ]],
  global_acceleration = --[[ table ]],
  name = --[[ string ]],
  virtual_networks = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesDeviceSetting():load({ account_id = "account_id", policy_id = "policy_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TeamsDevicesDeviceSetting():update({
  account_id = "account_id",
  policy_id = "policy_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesDeviceSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesDeviceSettingsResponseCollectionEntity

```lua
local teams_devices_device_settings_response_collection = client:TeamsDevicesDeviceSettingsResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TeamsDevicesDeviceSettingsResponseCollection():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesDeviceSettingsResponseCollection():remove({ account_id = "account_id", policy_id = "policy_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesDeviceSettingsResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesFallbackDomainResponseCollectionEntity

```lua
local teams_devices_fallback_domain_response_collection = client:TeamsDevicesFallbackDomainResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TeamsDevicesFallbackDomainResponseCollection():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesFallbackDomainResponseCollection():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TeamsDevicesFallbackDomainResponseCollection():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesFallbackDomainResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesGlobalWarpOverrideEntity

```lua
local teams_devices_global_warp_override = client:TeamsDevicesGlobalWarpOverride(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disconnect` | `boolean` | Yes | Disconnects all devices on the account using Global WARP override. |
| `justification` | `string` | No | Reasoning for setting the Global WARP override state. |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TeamsDevicesGlobalWarpOverride():create({
  account_id = --[[ string ]],
  disconnect = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesGlobalWarpOverride():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesGlobalWarpOverrideEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesIdEntity

```lua
local teams_devices_id = client:TeamsDevicesId(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesId():remove({ account_id = "account_id", rule_id = "rule_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesIdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesOverrideCodeEntity

```lua
local teams_devices_override_code = client:TeamsDevicesOverrideCode(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesOverrideCode():load({ account_id = "account_id", device_id = "device_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesOverrideCodeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesResponseCollectionEntity

```lua
local teams_devices_response_collection = client:TeamsDevicesResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TeamsDevicesResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesSchemasIdEntity

```lua
local teams_devices_schemas_id = client:TeamsDevicesSchemasId(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesSchemasId():remove({ account_id = "account_id", integration_id = "integration_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesSchemasIdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesSchemasResponseCollectionEntity

```lua
local teams_devices_schemas_response_collection = client:TeamsDevicesSchemasResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TeamsDevicesSchemasResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesSchemasResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesSchemasSingleEntity

```lua
local teams_devices_schemas_single = client:TeamsDevicesSchemasSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `table` | Yes | The configuration object containing third-party integration information. |
| `interval` | `string` | Yes | The interval between each posture check with the third-party API. |
| `name` | `string` | Yes | The name of the device posture integration. |
| `result` | `table` | No |  |
| `type` | `string` | Yes | The type of device posture integration. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `config` | - | - | Yes |
| `interval` | - | - | Yes |
| `name` | - | - | Yes |
| `result` | - | - | - |
| `type` | - | - | Yes |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TeamsDevicesSchemasSingle():create({
  account_id = --[[ string ]],
  config = --[[ table ]],
  interval = --[[ string ]],
  name = --[[ string ]],
  type = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesSchemasSingle():load({ account_id = "account_id", integration_id = "integration_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TeamsDevicesSchemasSingle():update({
  account_id = "account_id",
  integration_id = "integration_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesSchemasSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesSingleEntity

```lua
local teams_devices_single = client:TeamsDevicesSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | The description of the device posture rule. |
| `expiration` | `string` | No | Sets the expiration time for a posture check result. |
| `input` | `table` | No | The value to be checked against. |
| `match` | `table` | No | The conditions that the client must match to run the rule. |
| `name` | `string` | Yes | The name of the device posture rule. |
| `result` | `table` | No |  |
| `schedule` | `string` | No | Polling frequency for the WARP client posture check. |
| `type` | `string` | Yes | The type of device posture rule. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TeamsDevicesSingle():create({
  account_id = --[[ string ]],
  name = --[[ string ]],
  type = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesSingle():load({ account_id = "account_id", rule_id = "rule_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TeamsDevicesSingle():update({
  account_id = "account_id",
  rule_id = "rule_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesSplitTunnelIncludeResponseCollectionEntity

```lua
local teams_devices_split_tunnel_include_response_collection = client:TeamsDevicesSplitTunnelIncludeResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TeamsDevicesSplitTunnelIncludeResponseCollection():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TeamsDevicesSplitTunnelIncludeResponseCollection():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesSplitTunnelIncludeResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesSplitTunnelResponseCollectionEntity

```lua
local teams_devices_split_tunnel_response_collection = client:TeamsDevicesSplitTunnelResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TeamsDevicesSplitTunnelResponseCollection():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesSplitTunnelResponseCollection():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TeamsDevicesSplitTunnelResponseCollection():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesSplitTunnelResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamsDevicesZeroTrustAccountDeviceSettingEntity

```lua
local teams_devices_zero_trust_account_device_setting = client:TeamsDevicesZeroTrustAccountDeviceSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disable_for_time` | `number` | No | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| `external_emergency_signal_enabled` | `boolean` | No | Controls whether the external emergency disconnect feature is enabled. |
| `external_emergency_signal_fingerprint` | `string` | No | The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. |
| `external_emergency_signal_interval` | `string` | No | The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). |
| `external_emergency_signal_url` | `string` | No | The HTTPS URL from which to fetch the emergency disconnect signal. |
| `gateway_proxy_enabled` | `boolean` | No | Enable gateway proxy filtering on TCP. |
| `gateway_udp_proxy_enabled` | `boolean` | No | Enable gateway proxy filtering on UDP. |
| `result` | `table` | No |  |
| `root_certificate_installation_enabled` | `boolean` | No | Enable installation of cloudflare managed root certificate. |
| `use_zt_virtual_ip` | `boolean` | No | Enable using CGNAT virtual IPv4. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesZeroTrustAccountDeviceSetting():load({ account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TeamsDevicesZeroTrustAccountDeviceSetting():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TeamsDevicesZeroTrustAccountDeviceSetting():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesZeroTrustAccountDeviceSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelEntity

```lua
local tunnel = client:Tunnel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Tunnel():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelCfdTunnelResponseCollectionEntity

```lua
local tunnel_cfd_tunnel_response_collection = client:TunnelCfdTunnelResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TunnelCfdTunnelResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelCfdTunnelResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelCfdTunnelResponseSingleEntity

```lua
local tunnel_cfd_tunnel_response_single = client:TunnelCfdTunnelResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config_src` | `string` | No | Indicates if this is a locally or remotely configured tunnel. |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for a tunnel. |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Yes | Whether the API call was successful |
| `tunnel_secret` | `string` | No | Sets the password required to run a locally-managed tunnel. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `config_src` | - | - | - | - |
| `errors` | - | - | - | - |
| `messages` | - | - | - | - |
| `name` | - | - | Yes | - |
| `result` | Yes | - | - | - |
| `success` | - | - | - | - |
| `tunnel_secret` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TunnelCfdTunnelResponseSingle():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  result = --[[ string ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TunnelCfdTunnelResponseSingle():load({ account_id = "account_id", tunnel_id = "tunnel_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TunnelCfdTunnelResponseSingle():remove({ account_id = "account_id", tunnel_id = "tunnel_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TunnelCfdTunnelResponseSingle():update({
  account_id = "account_id",
  tunnel_id = "tunnel_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelCfdTunnelResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelConfigurationEntity

```lua
local tunnel_configuration = client:TunnelConfiguration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `table` | No | The tunnel configuration and ingress rules. |
| `result` | `table` | No | Cloudflare Tunnel configuration |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TunnelConfiguration():load({ account_id = "account_id", cfd_tunnel_id = "cfd_tunnel_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TunnelConfiguration():update({
  account_id = "account_id",
  cfd_tunnel_id = "cfd_tunnel_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelConfigurationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelEmptyEntity

```lua
local tunnel_empty = client:TunnelEmpty(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `string` | Yes | UUID of the Cloudflare Tunnel connector. |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TunnelEmpty():remove({ account_id = "account_id", cfd_tunnel_id = "cfd_tunnel_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TunnelEmpty():update({
  account_id = "account_id",
  warp_connector_id = "warp_connector_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelEmptyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelHostnameRouteResponseCollectionEntity

```lua
local tunnel_hostname_route_response_collection = client:TunnelHostnameRouteResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TunnelHostnameRouteResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelHostnameRouteResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelHostnameRouteResponseSingleEntity

```lua
local tunnel_hostname_route_response_single = client:TunnelHostnameRouteResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | An optional description of the hostname route. |
| `errors` | `table` | Yes |  |
| `hostname` | `string` | No | The hostname of the route. |
| `messages` | `table` | Yes |  |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Yes | Whether the API call was successful |
| `tunnel_id` | `string` | No | UUID of the tunnel. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `comment` | - | - | - | - |
| `errors` | - | - | - | - |
| `hostname` | - | - | - | - |
| `messages` | - | - | - | - |
| `result` | Yes | - | - | - |
| `success` | - | - | - | - |
| `tunnel_id` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TunnelHostnameRouteResponseSingle():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ string ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TunnelHostnameRouteResponseSingle():load({ account_id = "account_id", hostname_route_id = "hostname_route_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TunnelHostnameRouteResponseSingle():remove({ account_id = "account_id", hostname_route_id = "hostname_route_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TunnelHostnameRouteResponseSingle():update({
  account_id = "account_id",
  hostname_route_id = "hostname_route_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelHostnameRouteResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelMeshConfigurationResponseSingleEntity

```lua
local tunnel_mesh_configuration_response_single = client:TunnelMeshConfigurationResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `table` | No | Provider-specific configuration. |
| `ha_mode` | `string` | Yes | High-availability mode for the WARP Connector tunnel. |
| `result` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TunnelMeshConfigurationResponseSingle():load({ account_id = "account_id", warp_connector_id = "warp_connector_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TunnelMeshConfigurationResponseSingle():update({
  account_id = "account_id",
  warp_connector_id = "warp_connector_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelMeshConfigurationResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelRouteResponseSingleEntity

```lua
local tunnel_route_response_single = client:TunnelRouteResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Optional remark describing the route. |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `network` | `string` | Yes | The private IPv4 or IPv6 range connected by the route, in CIDR notation. |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Yes | Whether the API call was successful |
| `tunnel_id` | `string` | Yes | UUID of the tunnel. |
| `virtual_network_id` | `string` | No | UUID of the virtual network. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `comment` | - | - | - | - |
| `errors` | - | - | - | - |
| `messages` | - | - | - | - |
| `network` | - | - | Yes | - |
| `result` | Yes | - | Yes | - |
| `success` | - | - | - | - |
| `tunnel_id` | - | - | Yes | - |
| `virtual_network_id` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TunnelRouteResponseSingle():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  network = --[[ string ]],
  result = --[[ string ]],
  success = --[[ boolean ]],
  tunnel_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TunnelRouteResponseSingle():load({ account_id = "account_id", route_id = "route_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TunnelRouteResponseSingle():remove({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TunnelRouteResponseSingle():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelRouteResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelSubnetResponseCollectionEntity

```lua
local tunnel_subnet_response_collection = client:TunnelSubnetResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TunnelSubnetResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelSubnetResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelSubnetResponseSingleEntity

```lua
local tunnel_subnet_response_single = client:TunnelSubnetResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | An optional description of the subnet. |
| `errors` | `table` | Yes |  |
| `is_default_network` | `boolean` | No | If `true`, this is the default subnet for the account. |
| `messages` | `table` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for the subnet. |
| `network` | `string` | Yes | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `comment` | - | - | - |
| `errors` | - | - | - |
| `is_default_network` | - | - | - |
| `messages` | - | - | - |
| `name` | - | - | Yes |
| `network` | - | - | Yes |
| `result` | Yes | - | - |
| `success` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TunnelSubnetResponseSingle():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  network = --[[ string ]],
  result = --[[ string ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TunnelSubnetResponseSingle():load({ account_id = "account_id", address_family = "address_family" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TunnelSubnetResponseSingle():update({
  account_id = "account_id",
  address_family = "address_family",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelSubnetResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelSubnetResponseSingleNullableEntity

```lua
local tunnel_subnet_response_single_nullable = client:TunnelSubnetResponseSingleNullable(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TunnelSubnetResponseSingleNullable():remove({ account_id = "account_id", subnet_id = "subnet_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelSubnetResponseSingleNullableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelTeamnetResponseCollectionEntity

```lua
local tunnel_teamnet_response_collection = client:TunnelTeamnetResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TunnelTeamnetResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTeamnetResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelTeamnetResponseSingleEntity

```lua
local tunnel_teamnet_response_single = client:TunnelTeamnetResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TunnelTeamnetResponseSingle():load({ account_id = "account_id", ip = "ip" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTeamnetResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelTunnelClientEntity

```lua
local tunnel_tunnel_client = client:TunnelTunnelClient(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TunnelTunnelClient():load({ account_id = "account_id", cfd_tunnel_id = "cfd_tunnel_id", connector_id = "connector_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTunnelClientEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelTunnelConnectionEntity

```lua
local tunnel_tunnel_connection = client:TunnelTunnelConnection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TunnelTunnelConnection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTunnelConnectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelTunnelResponseTokenEntity

```lua
local tunnel_tunnel_response_token = client:TunnelTunnelResponseToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `resources` | `table` | Yes |  |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `resources` | - | - |
| `result` | Yes | - |
| `success` | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TunnelTunnelResponseToken():create({
  account_id = --[[ string ]],
  cfd_tunnel_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  resources = --[[ table ]],
  result = --[[ string ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TunnelTunnelResponseToken():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTunnelResponseTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelTunnelWarpConnectorClientEntity

```lua
local tunnel_tunnel_warp_connector_client = client:TunnelTunnelWarpConnectorClient(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TunnelTunnelWarpConnectorClient():load({ account_id = "account_id", connector_id = "connector_id", warp_connector_id = "warp_connector_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTunnelWarpConnectorClientEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelTunnelWarpConnectorConnectionEntity

```lua
local tunnel_tunnel_warp_connector_connection = client:TunnelTunnelWarpConnectorConnection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TunnelTunnelWarpConnectorConnection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTunnelWarpConnectorConnectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelVnetResponseCollectionEntity

```lua
local tunnel_vnet_response_collection = client:TunnelVnetResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TunnelVnetResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelVnetResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelVnetResponseSingleEntity

```lua
local tunnel_vnet_response_single = client:TunnelVnetResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Optional remark describing the virtual network. |
| `is_default` | `boolean` | No | If `true`, this virtual network is the default for the account. |
| `is_default_network` | `boolean` | No | If `true`, this virtual network is the default for the account. |
| `name` | `string` | No | A user-friendly name for the virtual network. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `comment` | - | - | - | - |
| `is_default` | - | - | - | - |
| `is_default_network` | - | - | - | - |
| `name` | - | Yes | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TunnelVnetResponseSingle():create({
  account_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TunnelVnetResponseSingle():load({ account_id = "account_id", virtual_network_id = "virtual_network_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TunnelVnetResponseSingle():remove({ account_id = "account_id", virtual_network_id = "virtual_network_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TunnelVnetResponseSingle():update({
  account_id = "account_id",
  virtual_network_id = "virtual_network_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelVnetResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelWarpConnectorResponseCollectionEntity

```lua
local tunnel_warp_connector_response_collection = client:TunnelWarpConnectorResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TunnelWarpConnectorResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelWarpConnectorResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelWarpConnectorResponseSingleEntity

```lua
local tunnel_warp_connector_response_single = client:TunnelWarpConnectorResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `ha` | `boolean` | No | Indicates that the tunnel will be created to be highly available. |
| `messages` | `table` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for a tunnel. |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Yes | Whether the API call was successful |
| `tunnel_secret` | `string` | No | Sets the password required to run a locally-managed tunnel. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `errors` | - | - | - | - |
| `ha` | - | - | - | - |
| `messages` | - | - | - | - |
| `name` | - | - | Yes | - |
| `result` | Yes | - | - | - |
| `success` | - | - | - | - |
| `tunnel_secret` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TunnelWarpConnectorResponseSingle():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  result = --[[ string ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TunnelWarpConnectorResponseSingle():load({ account_id = "account_id", tunnel_id = "tunnel_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TunnelWarpConnectorResponseSingle():remove({ account_id = "account_id", tunnel_id = "tunnel_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TunnelWarpConnectorResponseSingle():update({
  account_id = "account_id",
  tunnel_id = "tunnel_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelWarpConnectorResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TunnelZeroTrustConnectivitySettingEntity

```lua
local tunnel_zero_trust_connectivity_setting = client:TunnelZeroTrustConnectivitySetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `icmp_proxy_enabled` | `boolean` | No | A flag to enable the ICMP proxy for the account network. |
| `messages` | `table` | Yes |  |
| `offramp_warp_enabled` | `boolean` | No | A flag to enable WARP to WARP traffic. |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `errors` | - | - |
| `icmp_proxy_enabled` | - | - |
| `messages` | - | - |
| `offramp_warp_enabled` | - | - |
| `result` | Yes | - |
| `success` | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TunnelZeroTrustConnectivitySetting():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TunnelZeroTrustConnectivitySetting():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelZeroTrustConnectivitySettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WarpEntity

```lua
local warp = client:Warp(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | An optional description of the subnet. |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `is_default_network` | `boolean` | No | If `true`, this is the default subnet for the account. |
| `messages` | `table` | Yes |  |
| `name` | `string` | No | A user-friendly name for the subnet. |
| `network` | `string` | No | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `comment` | - | - |
| `errors` | - | - |
| `id` | - | - |
| `is_default_network` | - | - |
| `messages` | - | - |
| `name` | - | - |
| `network` | - | - |
| `result` | Yes | - |
| `success` | - | - |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Warp():load({ id = "warp_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Warp():update({
  id = "warp_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WarpEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WarpChangeEventEntity

```lua
local warp_change_event = client:WarpChangeEvent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WarpChangeEvent():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WarpChangeEventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WarpTeamsDeviceApiOtherEntity

```lua
local warp_teams_device_api_other = client:WarpTeamsDeviceApiOther(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `any` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WarpTeamsDeviceApiOther():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WarpTeamsDeviceApiOtherEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayApplicationsReviewStatusEntity

```lua
local zero_trust_gateway_applications_review_status = client:ZeroTrustGatewayApplicationsReviewStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_apps` | `table` | Yes | Contains the ids of the approved applications. |
| `in_review_apps` | `table` | Yes | Contains the ids of the applications in review. |
| `result` | `table` | No |  |
| `unapproved_apps` | `table` | Yes | Contains the ids of the unapproved applications. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewayApplicationsReviewStatus():load({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZeroTrustGatewayApplicationsReviewStatus():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayApplicationsReviewStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayCsvOperationSingleEntity

```lua
local zero_trust_gateway_csv_operation_single = client:ZeroTrustGatewayCsvOperationSingle(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ZeroTrustGatewayCsvOperationSingle():create({
  account_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayCsvOperationSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayCustomCertificateSettingEntity

```lua
local zero_trust_gateway_custom_certificate_setting = client:ZeroTrustGatewayCustomCertificateSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `binding_status` | `string` | No | Indicate the internal certificate status. |
| `enabled` | `boolean` | Yes | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| `id` | `string` | No | Specify the UUID of the certificate (ID from MTLS certificate store). |
| `updated_at` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewayCustomCertificateSetting():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayCustomCertificateSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountEntity

```lua
local zero_trust_gateway_gateway_account = client:ZeroTrustGatewayGatewayAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ZeroTrustGatewayGatewayAccount():create({
  account_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewayGatewayAccount():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayGatewayAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountConfigEntity

```lua
local zero_trust_gateway_gateway_account_config = client:ZeroTrustGatewayGatewayAccountConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |
| `settings` | `table` | No | Specify account settings. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewayGatewayAccountConfig():load({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZeroTrustGatewayGatewayAccountConfig():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayGatewayAccountConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity

```lua
local zero_trust_gateway_gateway_account_egress_cidr_pair_list = client:ZeroTrustGatewayGatewayAccountEgressCidrPairList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZeroTrustGatewayGatewayAccountEgressCidrPairList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountLoggingSettingEntity

```lua
local zero_trust_gateway_gateway_account_logging_setting = client:ZeroTrustGatewayGatewayAccountLoggingSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redact_pii` | `boolean` | No | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `result` | `table` | No |  |
| `settings_by_rule_type` | `table` | No | Configure logging settings for each rule type. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewayGatewayAccountLoggingSetting():load({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZeroTrustGatewayGatewayAccountLoggingSetting():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayGatewayAccountLoggingSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayListItemResponseCollectionEntity

```lua
local zero_trust_gateway_list_item_response_collection = client:ZeroTrustGatewayListItemResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No | Provide the list items. |
| `result_info` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZeroTrustGatewayListItemResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayListItemResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayListSingleEntity

```lua
local zero_trust_gateway_list_single = client:ZeroTrustGatewayListSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `append` | `table` | No | Add items to the list. |
| `description` | `string` | No | Provide the list description. |
| `items` | `table` | No | Add items to the list. |
| `name` | `string` | Yes | Specify the list name. |
| `remove` | `table` | No | Lists of item values you want to remove. |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewayListSingle():load({ account_id = "account_id", list_id = "list_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZeroTrustGatewayListSingle():update({
  account_id = "account_id",
  list_id = "list_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayListSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollectionEntity

```lua
local zero_trust_gateway_response_collection = client:ZeroTrustGatewayResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZeroTrustGatewayResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection10Entity

```lua
local zero_trust_gateway_response_collection_10 = client:ZeroTrustGatewayResponseCollection10(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |
| `result_info` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZeroTrustGatewayResponseCollection10():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection10Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection2Entity

```lua
local zero_trust_gateway_response_collection_2 = client:ZeroTrustGatewayResponseCollection2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZeroTrustGatewayResponseCollection2():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection3Entity

```lua
local zero_trust_gateway_response_collection_3 = client:ZeroTrustGatewayResponseCollection3(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZeroTrustGatewayResponseCollection3():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection3Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection4Entity

```lua
local zero_trust_gateway_response_collection_4 = client:ZeroTrustGatewayResponseCollection4(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZeroTrustGatewayResponseCollection4():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection4Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection5Entity

```lua
local zero_trust_gateway_response_collection_5 = client:ZeroTrustGatewayResponseCollection5(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZeroTrustGatewayResponseCollection5():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection5Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection6Entity

```lua
local zero_trust_gateway_response_collection_6 = client:ZeroTrustGatewayResponseCollection6(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZeroTrustGatewayResponseCollection6():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZeroTrustGatewayResponseCollection6():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection6Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection7Entity

```lua
local zero_trust_gateway_response_collection_7 = client:ZeroTrustGatewayResponseCollection7(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZeroTrustGatewayResponseCollection7():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection7Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection8Entity

```lua
local zero_trust_gateway_response_collection_8 = client:ZeroTrustGatewayResponseCollection8(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZeroTrustGatewayResponseCollection8():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection8Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection9Entity

```lua
local zero_trust_gateway_response_collection_9 = client:ZeroTrustGatewayResponseCollection9(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZeroTrustGatewayResponseCollection9():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection9Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewaySingleEntity

```lua
local zero_trust_gateway_single = client:ZeroTrustGatewaySingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |
| `validity_period_days` | `number` | No | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ZeroTrustGatewaySingle():create({
  account_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewaySingle():load({ account_id = "account_id", certificate_id = "certificate_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewaySingle():remove({ account_id = "account_id", certificate_id = "certificate_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse2Entity

```lua
local zero_trust_gateway_single_response_2 = client:ZeroTrustGatewaySingleResponse2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse2():load({ account_id = "account_id", operation_id = "operation_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponse2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse3Entity

```lua
local zero_trust_gateway_single_response_3 = client:ZeroTrustGatewaySingleResponse3(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_default` | `boolean` | No | Indicate whether this location is the default location. |
| `dns_destination_ips_id` | `string` | No | Specify the identifier of the pair of IPv4 addresses assigned to this location. |
| `ecs_support` | `boolean` | No | Indicate whether the location must resolve EDNS queries. |
| `endpoints` | `table` | Yes | Configure the destination endpoints for this location. |
| `max_ttl` | `table` | Yes | Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. |
| `name` | `string` | Yes | Specify the location name. |
| `networks` | `table` | No | Specify the list of network ranges from which requests at this location originate. |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse3():create({
  account_id = --[[ string ]],
  endpoints = --[[ table ]],
  max_ttl = --[[ table ]],
  name = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse3():load({ account_id = "account_id", location_id = "location_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse3():update({
  account_id = "account_id",
  location_id = "location_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponse3Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse4Entity

```lua
local zero_trust_gateway_single_response_4 = client:ZeroTrustGatewaySingleResponse4(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`. |
| `description` | `string` | No | Specify the rule description. |
| `device_posture` | `string` | No | Specify the wirefilter expression used for device posture check. |
| `enabled` | `boolean` | No | Specify whether the rule is enabled. |
| `expiration` | `table` | Yes | Defines the expiration time stamp and default duration of a DNS policy. |
| `filters` | `table` | No | Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| `identity` | `string` | No | Specify the wirefilter expression used for identity matching. |
| `name` | `string` | Yes | Specify the rule name. |
| `precedence` | `number` | No | Set the order of your rules. |
| `result` | `table` | Yes |  |
| `rule_settings` | `table` | No | Defines settings for this rule. |
| `schedule` | `table` | No | Defines the schedule for activating DNS policies. |
| `traffic` | `string` | No | Specify the wirefilter expression used for traffic matching. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `action` | - | - | - |
| `description` | - | - | - |
| `device_posture` | - | - | - |
| `enabled` | - | - | - |
| `expiration` | - | - | - |
| `filters` | - | - | - |
| `identity` | - | - | - |
| `name` | - | - | - |
| `precedence` | - | - | - |
| `result` | - | - | - |
| `rule_settings` | - | - | - |
| `schedule` | - | - | - |
| `traffic` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse4():create({
  account_id = --[[ string ]],
  action = --[[ string ]],
  expiration = --[[ table ]],
  name = --[[ string ]],
  result = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse4():load({ account_id = "account_id", rule_id = "rule_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse4():update({
  account_id = "account_id",
  rule_id = "rule_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponse4Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse5Entity

```lua
local zero_trust_gateway_single_response_5 = client:ZeroTrustGatewaySingleResponse5(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ips` | `table` | No | Specify the list of CIDRs to restrict ingress connections. |
| `kind` | `string` | No | The proxy endpoint kind. |
| `name` | `string` | No | Specify the name of the proxy endpoint. |
| `result` | `any` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse5():create({
  account_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse5():load({ account_id = "account_id", proxy_endpoint_id = "proxy_endpoint_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse5():update({
  account_id = "account_id",
  proxy_endpoint_id = "proxy_endpoint_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponse5Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse6Entity

```lua
local zero_trust_gateway_single_response_6 = client:ZeroTrustGatewaySingleResponse6(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `public_key` | `string` | Yes | Provide the Base64-encoded HPKE public key that encrypts SSH session logs. |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse6():create({
  account_id = --[[ string ]],
  public_key = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse6():load({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse6():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponse6Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse7Entity

```lua
local zero_trust_gateway_single_response_7 = client:ZeroTrustGatewaySingleResponse7(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contents` | `string` | Yes | Actual contents of the PAC file |
| `description` | `string` | No | Detailed description of the PAC file. |
| `name` | `string` | Yes | Name of the PAC file. |
| `result` | `table` | No |  |
| `slug` | `string` | No | URL-friendly version of the PAC file name. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `contents` | - | - | - |
| `description` | - | - | Yes |
| `name` | - | - | - |
| `result` | - | - | - |
| `slug` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse7():create({
  account_id = --[[ string ]],
  contents = --[[ string ]],
  name = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse7():load({ account_id = "account_id", pacfile_id = "pacfile_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZeroTrustGatewaySingleResponse7():update({
  account_id = "account_id",
  pacfile_id = "pacfile_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponse7Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponseWithListItemEntity

```lua
local zero_trust_gateway_single_response_with_list_item = client:ZeroTrustGatewaySingleResponseWithListItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Provide the list description. |
| `items` | `table` | No | Add items to the list. |
| `name` | `string` | Yes | Specify the list name. |
| `type` | `string` | Yes | Specify the list type. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ZeroTrustGatewaySingleResponseWithListItem():create({
  account_id = --[[ string ]],
  name = --[[ string ]],
  type = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponseWithListItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustRiskScoringEntity

```lua
local zero_trust_risk_scoring = client:ZeroTrustRiskScoring(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `behaviors` | `table` | Yes |  |
| `result` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ZeroTrustRiskScoring():create({
  account_id = --[[ string ]],
  zt_risk_scoring_id = --[[ string ]],
  behaviors = --[[ table ]],
  result = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustRiskScoring():load({ account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZeroTrustRiskScoring():update({
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustRiskScoringEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZeroTrustRiskScoringIntegrationEntity

```lua
local zero_trust_risk_scoring_integration = client:ZeroTrustRiskScoringIntegration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether this integration is enabled. |
| `id` | `string` | No |  |
| `integration_type` | `string` | Yes |  |
| `reference_id` | `string` | No | A reference id that can be supplied by the client. |
| `result` | `table` | Yes |  |
| `tenant_url` | `string` | Yes | The base url of the tenant, e.g. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `active` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `integration_type` | - | - | - | - | - |
| `reference_id` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |
| `tenant_url` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ZeroTrustRiskScoringIntegration():create({
  account_id = --[[ string ]],
  active = --[[ boolean ]],
  integration_type = --[[ string ]],
  result = --[[ table ]],
  tenant_url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZeroTrustRiskScoringIntegration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZeroTrustRiskScoringIntegration():load({ id = "zero_trust_risk_scoring_integration_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ZeroTrustRiskScoringIntegration():remove({ id = "zero_trust_risk_scoring_integration_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZeroTrustRiskScoringIntegration():update({
  id = "zero_trust_risk_scoring_integration_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustRiskScoringIntegrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

