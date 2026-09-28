# CloudflareZeroTrust Ruby SDK Reference

Complete API reference for the CloudflareZeroTrust Ruby SDK.


## CloudflareZeroTrustSDK

### Constructor

```ruby
require_relative 'CloudflareZeroTrust_sdk'

client = CloudflareZeroTrustSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareZeroTrustSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudflareZeroTrustSDK.test
```


### Instance Methods

#### `ClientVersion(data = nil)`

Create a new `ClientVersion` entity instance. Pass `nil` for no initial data.

#### `Cni(data = nil)`

Create a new `Cni` entity instance. Pass `nil` for no initial data.

#### `DeploymentGroup(data = nil)`

Create a new `DeploymentGroup` entity instance. Pass `nil` for no initial data.

#### `DexRemoteCommand(data = nil)`

Create a new `DexRemoteCommand` entity instance. Pass `nil` for no initial data.

#### `DexRule(data = nil)`

Create a new `DexRule` entity instance. Pass `nil` for no initial data.

#### `DexSyntheticApplicationMonitoring(data = nil)`

Create a new `DexSyntheticApplicationMonitoring` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringDevice(data = nil)`

Create a new `DigitalExperienceMonitoringDevice` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringDexDeleteResponseCollection(data = nil)`

Create a new `DigitalExperienceMonitoringDexDeleteResponseCollection` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringDexResponseCollection(data = nil)`

Create a new `DigitalExperienceMonitoringDexResponseCollection` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringDexSingle(data = nil)`

Create a new `DigitalExperienceMonitoringDexSingle` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusDevice(data = nil)`

Create a new `DigitalExperienceMonitoringFleetStatusDevice` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusLive(data = nil)`

Create a new `DigitalExperienceMonitoringFleetStatusLive` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusOverTime(data = nil)`

Create a new `DigitalExperienceMonitoringFleetStatusOverTime` entity instance. Pass `nil` for no initial data.

#### `Interconnect(data = nil)`

Create a new `Interconnect` entity instance. Pass `nil` for no initial data.

#### `IpProfile(data = nil)`

Create a new `IpProfile` entity instance. Pass `nil` for no initial data.

#### `List(data = nil)`

Create a new `List` entity instance. Pass `nil` for no initial data.

#### `Location(data = nil)`

Create a new `Location` entity instance. Pass `nil` for no initial data.

#### `NscCni(data = nil)`

Create a new `NscCni` entity instance. Pass `nil` for no initial data.

#### `NscDefaultName(data = nil)`

Create a new `NscDefaultName` entity instance. Pass `nil` for no initial data.

#### `NscInterconnect(data = nil)`

Create a new `NscInterconnect` entity instance. Pass `nil` for no initial data.

#### `NscSetting(data = nil)`

Create a new `NscSetting` entity instance. Pass `nil` for no initial data.

#### `NscSlotInfo(data = nil)`

Create a new `NscSlotInfo` entity instance. Pass `nil` for no initial data.

#### `NscStatusInfo(data = nil)`

Create a new `NscStatusInfo` entity instance. Pass `nil` for no initial data.

#### `OverrideCode(data = nil)`

Create a new `OverrideCode` entity instance. Pass `nil` for no initial data.

#### `Pacfile(data = nil)`

Create a new `Pacfile` entity instance. Pass `nil` for no initial data.

#### `PhysicalDevice(data = nil)`

Create a new `PhysicalDevice` entity instance. Pass `nil` for no initial data.

#### `ProxyEndpoint(data = nil)`

Create a new `ProxyEndpoint` entity instance. Pass `nil` for no initial data.

#### `Registration(data = nil)`

Create a new `Registration` entity instance. Pass `nil` for no initial data.

#### `Rule(data = nil)`

Create a new `Rule` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesApiResponseSingle(data = nil)`

Create a new `TeamsDevicesApiResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesComponentsSchemasResponseCollection(data = nil)`

Create a new `TeamsDevicesComponentsSchemasResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesComponentsSchemasSingle(data = nil)`

Create a new `TeamsDevicesComponentsSchemasSingle` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesDefaultDeviceSetting(data = nil)`

Create a new `TeamsDevicesDefaultDeviceSetting` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesDevice(data = nil)`

Create a new `TeamsDevicesDevice` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesDeviceSetting(data = nil)`

Create a new `TeamsDevicesDeviceSetting` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesDeviceSettingsResponseCollection(data = nil)`

Create a new `TeamsDevicesDeviceSettingsResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesFallbackDomainResponseCollection(data = nil)`

Create a new `TeamsDevicesFallbackDomainResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesGlobalWarpOverride(data = nil)`

Create a new `TeamsDevicesGlobalWarpOverride` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesId(data = nil)`

Create a new `TeamsDevicesId` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesOverrideCode(data = nil)`

Create a new `TeamsDevicesOverrideCode` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesResponseCollection(data = nil)`

Create a new `TeamsDevicesResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSchemasId(data = nil)`

Create a new `TeamsDevicesSchemasId` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSchemasResponseCollection(data = nil)`

Create a new `TeamsDevicesSchemasResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSchemasSingle(data = nil)`

Create a new `TeamsDevicesSchemasSingle` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSingle(data = nil)`

Create a new `TeamsDevicesSingle` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSplitTunnelIncludeResponseCollection(data = nil)`

Create a new `TeamsDevicesSplitTunnelIncludeResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSplitTunnelResponseCollection(data = nil)`

Create a new `TeamsDevicesSplitTunnelResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesZeroTrustAccountDeviceSetting(data = nil)`

Create a new `TeamsDevicesZeroTrustAccountDeviceSetting` entity instance. Pass `nil` for no initial data.

#### `Tunnel(data = nil)`

Create a new `Tunnel` entity instance. Pass `nil` for no initial data.

#### `TunnelCfdTunnelResponseCollection(data = nil)`

Create a new `TunnelCfdTunnelResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelCfdTunnelResponseSingle(data = nil)`

Create a new `TunnelCfdTunnelResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelConfiguration(data = nil)`

Create a new `TunnelConfiguration` entity instance. Pass `nil` for no initial data.

#### `TunnelEmpty(data = nil)`

Create a new `TunnelEmpty` entity instance. Pass `nil` for no initial data.

#### `TunnelHostnameRouteResponseCollection(data = nil)`

Create a new `TunnelHostnameRouteResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelHostnameRouteResponseSingle(data = nil)`

Create a new `TunnelHostnameRouteResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelMeshConfigurationResponseSingle(data = nil)`

Create a new `TunnelMeshConfigurationResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelRouteResponseSingle(data = nil)`

Create a new `TunnelRouteResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelSubnetResponseCollection(data = nil)`

Create a new `TunnelSubnetResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelSubnetResponseSingle(data = nil)`

Create a new `TunnelSubnetResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelSubnetResponseSingleNullable(data = nil)`

Create a new `TunnelSubnetResponseSingleNullable` entity instance. Pass `nil` for no initial data.

#### `TunnelTeamnetResponseCollection(data = nil)`

Create a new `TunnelTeamnetResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelTeamnetResponseSingle(data = nil)`

Create a new `TunnelTeamnetResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelClient(data = nil)`

Create a new `TunnelTunnelClient` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelConnection(data = nil)`

Create a new `TunnelTunnelConnection` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelResponseToken(data = nil)`

Create a new `TunnelTunnelResponseToken` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelWarpConnectorClient(data = nil)`

Create a new `TunnelTunnelWarpConnectorClient` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelWarpConnectorConnection(data = nil)`

Create a new `TunnelTunnelWarpConnectorConnection` entity instance. Pass `nil` for no initial data.

#### `TunnelVnetResponseCollection(data = nil)`

Create a new `TunnelVnetResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelVnetResponseSingle(data = nil)`

Create a new `TunnelVnetResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelWarpConnectorResponseCollection(data = nil)`

Create a new `TunnelWarpConnectorResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelWarpConnectorResponseSingle(data = nil)`

Create a new `TunnelWarpConnectorResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelZeroTrustConnectivitySetting(data = nil)`

Create a new `TunnelZeroTrustConnectivitySetting` entity instance. Pass `nil` for no initial data.

#### `Warp(data = nil)`

Create a new `Warp` entity instance. Pass `nil` for no initial data.

#### `WarpChangeEvent(data = nil)`

Create a new `WarpChangeEvent` entity instance. Pass `nil` for no initial data.

#### `WarpTeamsDeviceApiOther(data = nil)`

Create a new `WarpTeamsDeviceApiOther` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayApplicationsReviewStatus(data = nil)`

Create a new `ZeroTrustGatewayApplicationsReviewStatus` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayCsvOperationSingle(data = nil)`

Create a new `ZeroTrustGatewayCsvOperationSingle` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayCustomCertificateSetting(data = nil)`

Create a new `ZeroTrustGatewayCustomCertificateSetting` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayGatewayAccount(data = nil)`

Create a new `ZeroTrustGatewayGatewayAccount` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayGatewayAccountConfig(data = nil)`

Create a new `ZeroTrustGatewayGatewayAccountConfig` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayGatewayAccountEgressCidrPairList(data = nil)`

Create a new `ZeroTrustGatewayGatewayAccountEgressCidrPairList` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayGatewayAccountLoggingSetting(data = nil)`

Create a new `ZeroTrustGatewayGatewayAccountLoggingSetting` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayListItemResponseCollection(data = nil)`

Create a new `ZeroTrustGatewayListItemResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayListSingle(data = nil)`

Create a new `ZeroTrustGatewayListSingle` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection(data = nil)`

Create a new `ZeroTrustGatewayResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection10(data = nil)`

Create a new `ZeroTrustGatewayResponseCollection10` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection2(data = nil)`

Create a new `ZeroTrustGatewayResponseCollection2` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection3(data = nil)`

Create a new `ZeroTrustGatewayResponseCollection3` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection4(data = nil)`

Create a new `ZeroTrustGatewayResponseCollection4` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection5(data = nil)`

Create a new `ZeroTrustGatewayResponseCollection5` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection6(data = nil)`

Create a new `ZeroTrustGatewayResponseCollection6` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection7(data = nil)`

Create a new `ZeroTrustGatewayResponseCollection7` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection8(data = nil)`

Create a new `ZeroTrustGatewayResponseCollection8` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection9(data = nil)`

Create a new `ZeroTrustGatewayResponseCollection9` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingle(data = nil)`

Create a new `ZeroTrustGatewaySingle` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse2(data = nil)`

Create a new `ZeroTrustGatewaySingleResponse2` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse3(data = nil)`

Create a new `ZeroTrustGatewaySingleResponse3` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse4(data = nil)`

Create a new `ZeroTrustGatewaySingleResponse4` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse5(data = nil)`

Create a new `ZeroTrustGatewaySingleResponse5` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse6(data = nil)`

Create a new `ZeroTrustGatewaySingleResponse6` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse7(data = nil)`

Create a new `ZeroTrustGatewaySingleResponse7` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponseWithListItem(data = nil)`

Create a new `ZeroTrustGatewaySingleResponseWithListItem` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustRiskScoring(data = nil)`

Create a new `ZeroTrustRiskScoring` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustRiskScoringIntegration(data = nil)`

Create a new `ZeroTrustRiskScoringIntegration` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ClientVersionEntity

```ruby
client_version = client.ClientVersion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ClientVersion.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ClientVersionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CniEntity

```ruby
cni = client.Cni
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Cni.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CniEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DeploymentGroupEntity

```ruby
deployment_group = client.DeploymentGroup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `name` | `String` | Yes | A user-friendly name for the deployment group. |
| `policy_ids` | `Array` | No | Contains an optional list of policy IDs assigned to a group. |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Indicates whether the API call was successful. |
| `version_config` | `Array` | Yes | Contains at least one version configuration. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DeploymentGroup.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
  "version_config" => [], # Array
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DeploymentGroup.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DeploymentGroup.load({ "id" => "deployment_group_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DeploymentGroup.remove({ "id" => "deployment_group_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DeploymentGroup.update({
  "id" => "deployment_group_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DeploymentGroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DexRemoteCommandEntity

```ruby
dex_remote_command = client.DexRemoteCommand
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commands` | `Array` | Yes | List of device-level commands to execute |
| `result` | `Hash` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `commands` | - | - |
| `result` | Yes | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DexRemoteCommand.create({
  "account_id" => "example_account_id", # String
  "commands" => [], # Array
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DexRemoteCommand.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DexRemoteCommandEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DexRuleEntity

```ruby
dex_rule = client.DexRule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `id` | `String` | No |  |
| `match` | `String` | Yes | The wirefilter expression to match. |
| `name` | `String` | Yes | The name of the Rule. |
| `result` | `Hash` | No |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `description` | - | - | - | - |
| `id` | - | - | - | - |
| `match` | - | - | Yes | - |
| `name` | - | - | Yes | - |
| `result` | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DexRule.create({
  "account_id" => "example_account_id", # String
  "match" => "example_match", # String
  "name" => "example_name", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DexRule.load({ "id" => "dex_rule_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DexRule.remove({ "id" => "dex_rule_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DexRule.update({
  "id" => "dex_rule_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DexRuleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DexSyntheticApplicationMonitoringEntity

```ruby
dex_synthetic_application_monitoring = client.DexSyntheticApplicationMonitoring
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes | array of colos. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | Yes |
| `success` | - | - |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DexSyntheticApplicationMonitoring.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DexSyntheticApplicationMonitoring.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DexSyntheticApplicationMonitoringEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DigitalExperienceMonitoringDeviceEntity

```ruby
digital_experience_monitoring_device = client.DigitalExperienceMonitoringDevice
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alwaysOn` | `Boolean` | No |  |
| `batteryCharging` | `Boolean` | No |  |
| `batteryCycles` | `Integer` | No |  |
| `batteryPct` | `Float` | No |  |
| `colo` | `String` | Yes | Cloudflare colo airport code. |
| `connectionType` | `String` | No |  |
| `cpuPct` | `Float` | No |  |
| `cpuPctByApp` | `Array` | No |  |
| `deviceId` | `String` | Yes | Device identifier (UUID v4) |
| `deviceIpv4` | `Hash` | No |  |
| `deviceIpv6` | `Hash` | No |  |
| `deviceName` | `String` | No | Device identifier (human readable). |
| `deviceRegistration` | `String` | No | Deprecated: use registrationId. |
| `diskReadBps` | `Integer` | No |  |
| `diskUsagePct` | `Float` | No |  |
| `diskWriteBps` | `Integer` | No |  |
| `dohSubdomain` | `String` | No |  |
| `estimatedLossPct` | `Float` | No |  |
| `firewallEnabled` | `Boolean` | No |  |
| `gatewayIpv4` | `Hash` | No |  |
| `gatewayIpv6` | `Hash` | No |  |
| `handshakeLatencyMs` | `Float` | No |  |
| `ispIpv4` | `Hash` | No |  |
| `ispIpv6` | `Hash` | No |  |
| `metal` | `String` | No |  |
| `mode` | `String` | Yes | The mode under which the WARP client is run. |
| `networkRcvdBps` | `Integer` | No |  |
| `networkSentBps` | `Integer` | No |  |
| `networkSsid` | `String` | No |  |
| `personEmail` | `String` | No | User contact email address |
| `platform` | `String` | Yes | Operating system. |
| `ramAvailableKb` | `Integer` | No |  |
| `ramUsedPct` | `Float` | No |  |
| `ramUsedPctByApp` | `Array` | No |  |
| `registrationId` | `String` | No | Device registration identifier (UUID v4). |
| `rtt` | `Hash` | No | Round-trip time statistics for the WARP tunnel. |
| `status` | `String` | Yes | Network status. |
| `switchLocked` | `Boolean` | No |  |
| `timestamp` | `String` | Yes |  |
| `tunnelStats` | `Hash` | No | WARP tunnel packet and byte counters. |
| `tunnelType` | `String` | No |  |
| `version` | `String` | Yes | WARP client version. |
| `wifiStrengthDbm` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DigitalExperienceMonitoringDevice.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DigitalExperienceMonitoringDeviceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DigitalExperienceMonitoringDexDeleteResponseCollectionEntity

```ruby
digital_experience_monitoring_dex_delete_response_collection = client.DigitalExperienceMonitoringDexDeleteResponseCollection
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DigitalExperienceMonitoringDexDeleteResponseCollection.remove({ "account_id" => "account_id", "dex_test_id" => "dex_test_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DigitalExperienceMonitoringDexDeleteResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DigitalExperienceMonitoringDexResponseCollectionEntity

```ruby
digital_experience_monitoring_dex_response_collection = client.DigitalExperienceMonitoringDexResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DigitalExperienceMonitoringDexResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DigitalExperienceMonitoringDexResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DigitalExperienceMonitoringDexSingleEntity

```ruby
digital_experience_monitoring_dex_single = client.DigitalExperienceMonitoringDexSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `String` | No | Date the test was created, in RFC 3339 format. |
| `data` | `Hash` | Yes | The configuration object which contains the details for the WARP client to conduct the test. |
| `description` | `String` | No | Additional details about the test. |
| `enabled` | `Boolean` | Yes | Determines whether or not the test is active. |
| `interval` | `String` | Yes | How often the test will run. |
| `name` | `String` | Yes | The name of the DEX test. |
| `result` | `Hash` | Yes |  |
| `target_policies` | `Object` | No |  |
| `targeted` | `Boolean` | No |  |
| `test_id` | `String` | No | The unique identifier for the test. |
| `updated` | `String` | No | Date the test was last updated, in RFC 3339 format. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DigitalExperienceMonitoringDexSingle.create({
  "account_id" => "example_account_id", # String
  "data" => {}, # Hash
  "enabled" => true, # Boolean
  "interval" => "example_interval", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DigitalExperienceMonitoringDexSingle.load({ "account_id" => "account_id", "dex_test_id" => "dex_test_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DigitalExperienceMonitoringDexSingle.update({
  "account_id" => "account_id",
  "dex_test_id" => "dex_test_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DigitalExperienceMonitoringDexSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusDeviceEntity

```ruby
digital_experience_monitoring_fleet_status_device = client.DigitalExperienceMonitoringFleetStatusDevice
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DigitalExperienceMonitoringFleetStatusDevice.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DigitalExperienceMonitoringFleetStatusDeviceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusLiveEntity

```ruby
digital_experience_monitoring_fleet_status_live = client.DigitalExperienceMonitoringFleetStatusLive
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DigitalExperienceMonitoringFleetStatusLive.load({ "account_id" => "account_id", "since_minute" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DigitalExperienceMonitoringFleetStatusLiveEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusOverTimeEntity

```ruby
digital_experience_monitoring_fleet_status_over_time = client.DigitalExperienceMonitoringFleetStatusOverTime
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DigitalExperienceMonitoringFleetStatusOverTime.load({ "account_id" => "account_id", "from" => "from", "to" => "to" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DigitalExperienceMonitoringFleetStatusOverTimeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InterconnectEntity

```ruby
interconnect = client.Interconnect
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Interconnect.load({ "account_id" => "account_id", "icon" => "icon" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Interconnect.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InterconnectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IpProfileEntity

```ruby
ip_profile = client.IpProfile
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No | An optional description of the Device IP profile. |
| `enabled` | `Boolean` | No | Whether the Device IP profile will be applied to matching devices. |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `match` | `String` | Yes | The wirefilter expression to match registrations. |
| `messages` | `Array` | Yes |  |
| `name` | `String` | Yes | A user-friendly name for the Device IP profile. |
| `precedence` | `Integer` | Yes | The precedence of the Device IP profile. |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `subnet_id` | `String` | Yes | The ID of the Subnet. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.IpProfile.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "match" => "example_match", # String
  "messages" => [], # Array
  "name" => "example_name", # String
  "precedence" => 1, # Integer
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "subnet_id" => "example_subnet_id", # String
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IpProfile.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IpProfile.load({ "id" => "ip_profile_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.IpProfile.remove({ "id" => "ip_profile_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.IpProfile.update({
  "id" => "ip_profile_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IpProfileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListEntity

```ruby
list = client.List
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.List.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LocationEntity

```ruby
location = client.Location
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Location.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LocationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NscCniEntity

```ruby
nsc_cni = client.NscCni
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `String` | Yes | Customer account tag |
| `bgp` | `Hash` | Yes |  |
| `bgp_mode` | `String` | No | The BGP mode for a CNI. |
| `cust_ip` | `String` | Yes | Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`. |
| `id` | `String` | Yes |  |
| `interconnect` | `String` | Yes | Interconnect identifier hosting this CNI |
| `magic` | `Hash` | Yes |  |
| `p2p_ip` | `String` | Yes | Cloudflare end of the point-to-point link |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.NscCni.create({
  "account_id" => "example_account_id", # String
  "account" => "example_account", # String
  "bgp" => {}, # Hash
  "cust_ip" => "example_cust_ip", # String
  "id" => "example_id", # String
  "interconnect" => "example_interconnect", # String
  "magic" => {}, # Hash
  "p2p_ip" => "example_p2p_ip", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.NscCni.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NscCni.load({ "id" => "nsc_cni_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NscCni.update({
  "id" => "nsc_cni_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NscCniEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NscDefaultNameEntity

```ruby
nsc_default_name = client.NscDefaultName
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | Yes | The default customer name for the interconnect |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NscDefaultName.load({ "account_id" => "account_id", "interconnect_id" => "interconnect_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NscDefaultNameEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NscInterconnectEntity

```ruby
nsc_interconnect = client.NscInterconnect
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `items` | `Array` | Yes |  |
| `next` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.NscInterconnect.create({
  "account_id" => "example_account_id", # String
  "items" => [], # Array
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.NscInterconnect.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NscInterconnect.load({ "id" => "nsc_interconnect_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NscInterconnectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NscSettingEntity

```ruby
nsc_setting = client.NscSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_asn` | `Integer` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `default_asn` | - | Yes |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NscSetting.load({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NscSetting.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NscSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NscSlotInfoEntity

```ruby
nsc_slot_info = client.NscSlotInfo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `String` | No | Customer account tag |
| `address` | `Array` | Yes |  |
| `ccr_device_name` | `String` | No |  |
| `facility` | `Hash` | Yes |  |
| `id` | `String` | Yes | Slot ID |
| `name` | `String` | Yes |  |
| `occupied` | `Boolean` | Yes | Whether the slot is occupied or not |
| `site` | `String` | Yes |  |
| `speed` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.NscSlotInfo.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NscSlotInfo.load({ "account_id" => "account_id", "slot" => "slot" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NscSlotInfoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NscStatusInfoEntity

```ruby
nsc_status_info = client.NscStatusInfo
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NscStatusInfo.load({ "account_id" => "account_id", "icon" => "icon" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NscStatusInfoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OverrideCodeEntity

```ruby
override_code = client.OverrideCode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `device_id` | `String` | No | Physical device ID. |
| `duration_hours` | `Integer` | Yes | Number of hours for which the override code should remain valid. |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `scope` | `String` | Yes | Whether the code applies to every device in the account or one physical device. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `type` | `String` | Yes | The feature that the override code applies to. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OverrideCode.create({
  "account_id" => "example_account_id", # String
  "duration_hours" => 1, # Integer
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "scope" => "example_scope", # String
  "success" => true, # Boolean
  "type" => "example_type", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OverrideCodeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PacfileEntity

```ruby
pacfile = client.Pacfile
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Pacfile.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PacfileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PhysicalDeviceEntity

```ruby
physical_device = client.PhysicalDevice
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes | A WARP Device. |
| `result_info` | `Hash` | Yes | V4 public API Pagination/Cursor info. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `tags` | `Hash` | No | Replaces all tags assigned to the physical device. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PhysicalDevice.create({
  "account_id" => "example_account_id", # String
  "id" => "example_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PhysicalDevice.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PhysicalDevice.load({ "id" => "physical_device_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.PhysicalDevice.remove({ "id" => "physical_device_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.PhysicalDevice.update({
  "id" => "physical_device_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PhysicalDeviceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProxyEndpointEntity

```ruby
proxy_endpoint = client.ProxyEndpoint
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProxyEndpoint.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProxyEndpointEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RegistrationEntity

```ruby
registration = client.Registration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes | A WARP configuration tied to a single user. |
| `result_info` | `Hash` | Yes | V4 public API Pagination/Cursor info. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Registration.create({
  "account_id" => "example_account_id", # String
  "id" => [], # Array
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Registration.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Registration.load({ "id" => "registration_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Registration.remove({ "id" => "registration_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RegistrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RuleEntity

```ruby
rule = client.Rule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Rule.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RuleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesApiResponseSingleEntity

```ruby
teams_devices_api_response_single = client.TeamsDevicesApiResponseSingle
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TeamsDevicesApiResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesApiResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesComponentsSchemasResponseCollectionEntity

```ruby
teams_devices_components_schemas_response_collection = client.TeamsDevicesComponentsSchemasResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TeamsDevicesComponentsSchemasResponseCollection.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesComponentsSchemasResponseCollection.remove({ "account_id" => "account_id", "network_id" => "network_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesComponentsSchemasResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesComponentsSchemasSingleEntity

```ruby
teams_devices_components_schemas_single = client.TeamsDevicesComponentsSchemasSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Hash` | Yes | The configuration object containing information for the WARP client to detect the managed network. |
| `name` | `String` | Yes | The name of the device managed network. |
| `result` | `Hash` | No |  |
| `type` | `String` | Yes | The type of device managed network. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `config` | - | - | Yes |
| `name` | - | - | Yes |
| `result` | - | - | - |
| `type` | - | - | Yes |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TeamsDevicesComponentsSchemasSingle.create({
  "account_id" => "example_account_id", # String
  "config" => {}, # Hash
  "name" => "example_name", # String
  "type" => "example_type", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesComponentsSchemasSingle.load({ "account_id" => "account_id", "network_id" => "network_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TeamsDevicesComponentsSchemasSingle.update({
  "account_id" => "account_id",
  "network_id" => "network_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesComponentsSchemasSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesDefaultDeviceSettingEntity

```ruby
teams_devices_default_device_setting = client.TeamsDevicesDefaultDeviceSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_mode_switch` | `Boolean` | No | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `Boolean` | No | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `Boolean` | No | Whether to allow devices to leave the organization. |
| `auto_connect` | `Float` | No | The amount of time in seconds to reconnect after having been disabled. |
| `captive_portal` | `Float` | No | Turn on the captive portal after the specified amount of time. |
| `disable_auto_fallback` | `Boolean` | No | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `Array` | No | List of DNS search suffixes to apply to clients. |
| `exclude` | `Array` | No | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `Boolean` | No | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `Hash` | Yes | Global Acceleration settings for China. |
| `include` | `Array` | No | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `Float` | No | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `Float` | No | The size of the subnet for the local access network. |
| `register_interface_ip_with_dns` | `Boolean` | No | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `Hash` | No |  |
| `sccm_vpn_boundary_support` | `Boolean` | No | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `Hash` | No |  |
| `support_url` | `String` | No | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `Boolean` | No | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `String` | No | Determines which tunnel protocol to use. |
| `uninstall_protection` | `Boolean` | No | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `Hash` | Yes | Virtual network access settings for the device. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesDefaultDeviceSetting.load({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TeamsDevicesDefaultDeviceSetting.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesDefaultDeviceSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesDeviceEntity

```ruby
teams_devices_device = client.TeamsDevicesDevice
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `result` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TeamsDevicesDevice.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesDevice.load({ "id" => "teams_devices_device_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesDeviceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesDeviceSettingEntity

```ruby
teams_devices_device_setting = client.TeamsDevicesDeviceSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_mode_switch` | `Boolean` | No | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `Boolean` | No | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `Boolean` | No | Whether to allow devices to leave the organization. |
| `auto_connect` | `Float` | No | The amount of time in seconds to reconnect after having been disabled. |
| `browser_extension_config` | `Hash` | Yes | Browser extension proxy settings. |
| `captive_portal` | `Float` | No | Turn on the captive portal after the specified amount of time. |
| `default` | `Boolean` | No | Whether the policy is the account default. |
| `description` | `String` | No | A description of the policy. |
| `disable_auto_fallback` | `Boolean` | No | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `Array` | No | List of DNS search suffixes to apply to clients. |
| `enabled` | `Boolean` | No | Whether the policy will be applied to matching devices. |
| `exclude` | `Array` | No | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `Boolean` | No | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `Hash` | Yes | Global Acceleration settings for China. |
| `include` | `Array` | No | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `Float` | No | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `Float` | No | The size of the subnet for the local access network. |
| `match` | `String` | No | The wirefilter expression to match devices. |
| `name` | `String` | Yes | The name of the device settings profile. |
| `precedence` | `Float` | No | The precedence of the policy. |
| `profile_type` | `String` | No | The client type to which the device settings profile applies. |
| `register_interface_ip_with_dns` | `Boolean` | No | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `Hash` | No |  |
| `sccm_vpn_boundary_support` | `Boolean` | No | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `Hash` | No |  |
| `support_url` | `String` | No | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `Boolean` | No | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `String` | No | Determines which tunnel protocol to use. |
| `uninstall_protection` | `Boolean` | No | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `Hash` | Yes | Virtual network access settings for the device. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TeamsDevicesDeviceSetting.create({
  "account_id" => "example_account_id", # String
  "browser_extension_config" => {}, # Hash
  "global_acceleration" => {}, # Hash
  "name" => "example_name", # String
  "virtual_networks" => {}, # Hash
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesDeviceSetting.load({ "account_id" => "account_id", "policy_id" => "policy_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TeamsDevicesDeviceSetting.update({
  "account_id" => "account_id",
  "policy_id" => "policy_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesDeviceSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesDeviceSettingsResponseCollectionEntity

```ruby
teams_devices_device_settings_response_collection = client.TeamsDevicesDeviceSettingsResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TeamsDevicesDeviceSettingsResponseCollection.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesDeviceSettingsResponseCollection.remove({ "account_id" => "account_id", "policy_id" => "policy_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesDeviceSettingsResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesFallbackDomainResponseCollectionEntity

```ruby
teams_devices_fallback_domain_response_collection = client.TeamsDevicesFallbackDomainResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TeamsDevicesFallbackDomainResponseCollection.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesFallbackDomainResponseCollection.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TeamsDevicesFallbackDomainResponseCollection.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesFallbackDomainResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesGlobalWarpOverrideEntity

```ruby
teams_devices_global_warp_override = client.TeamsDevicesGlobalWarpOverride
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disconnect` | `Boolean` | Yes | Disconnects all devices on the account using Global WARP override. |
| `justification` | `String` | No | Reasoning for setting the Global WARP override state. |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TeamsDevicesGlobalWarpOverride.create({
  "account_id" => "example_account_id", # String
  "disconnect" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesGlobalWarpOverride.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesGlobalWarpOverrideEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesIdEntity

```ruby
teams_devices_id = client.TeamsDevicesId
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesId.remove({ "account_id" => "account_id", "rule_id" => "rule_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesIdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesOverrideCodeEntity

```ruby
teams_devices_override_code = client.TeamsDevicesOverrideCode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesOverrideCode.load({ "account_id" => "account_id", "device_id" => "device_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesOverrideCodeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesResponseCollectionEntity

```ruby
teams_devices_response_collection = client.TeamsDevicesResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TeamsDevicesResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesSchemasIdEntity

```ruby
teams_devices_schemas_id = client.TeamsDevicesSchemasId
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesSchemasId.remove({ "account_id" => "account_id", "integration_id" => "integration_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesSchemasIdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesSchemasResponseCollectionEntity

```ruby
teams_devices_schemas_response_collection = client.TeamsDevicesSchemasResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TeamsDevicesSchemasResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesSchemasResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesSchemasSingleEntity

```ruby
teams_devices_schemas_single = client.TeamsDevicesSchemasSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Hash` | Yes | The configuration object containing third-party integration information. |
| `interval` | `String` | Yes | The interval between each posture check with the third-party API. |
| `name` | `String` | Yes | The name of the device posture integration. |
| `result` | `Hash` | No |  |
| `type` | `String` | Yes | The type of device posture integration. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `config` | - | - | Yes |
| `interval` | - | - | Yes |
| `name` | - | - | Yes |
| `result` | - | - | - |
| `type` | - | - | Yes |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TeamsDevicesSchemasSingle.create({
  "account_id" => "example_account_id", # String
  "config" => {}, # Hash
  "interval" => "example_interval", # String
  "name" => "example_name", # String
  "type" => "example_type", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesSchemasSingle.load({ "account_id" => "account_id", "integration_id" => "integration_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TeamsDevicesSchemasSingle.update({
  "account_id" => "account_id",
  "integration_id" => "integration_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesSchemasSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesSingleEntity

```ruby
teams_devices_single = client.TeamsDevicesSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No | The description of the device posture rule. |
| `expiration` | `String` | No | Sets the expiration time for a posture check result. |
| `input` | `Hash` | No | The value to be checked against. |
| `match` | `Array` | No | The conditions that the client must match to run the rule. |
| `name` | `String` | Yes | The name of the device posture rule. |
| `result` | `Hash` | No |  |
| `schedule` | `String` | No | Polling frequency for the WARP client posture check. |
| `type` | `String` | Yes | The type of device posture rule. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TeamsDevicesSingle.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "type" => "example_type", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesSingle.load({ "account_id" => "account_id", "rule_id" => "rule_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TeamsDevicesSingle.update({
  "account_id" => "account_id",
  "rule_id" => "rule_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesSplitTunnelIncludeResponseCollectionEntity

```ruby
teams_devices_split_tunnel_include_response_collection = client.TeamsDevicesSplitTunnelIncludeResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TeamsDevicesSplitTunnelIncludeResponseCollection.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TeamsDevicesSplitTunnelIncludeResponseCollection.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesSplitTunnelIncludeResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesSplitTunnelResponseCollectionEntity

```ruby
teams_devices_split_tunnel_response_collection = client.TeamsDevicesSplitTunnelResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TeamsDevicesSplitTunnelResponseCollection.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesSplitTunnelResponseCollection.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TeamsDevicesSplitTunnelResponseCollection.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesSplitTunnelResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamsDevicesZeroTrustAccountDeviceSettingEntity

```ruby
teams_devices_zero_trust_account_device_setting = client.TeamsDevicesZeroTrustAccountDeviceSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disable_for_time` | `Float` | No | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| `external_emergency_signal_enabled` | `Boolean` | No | Controls whether the external emergency disconnect feature is enabled. |
| `external_emergency_signal_fingerprint` | `String` | No | The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. |
| `external_emergency_signal_interval` | `String` | No | The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). |
| `external_emergency_signal_url` | `String` | No | The HTTPS URL from which to fetch the emergency disconnect signal. |
| `gateway_proxy_enabled` | `Boolean` | No | Enable gateway proxy filtering on TCP. |
| `gateway_udp_proxy_enabled` | `Boolean` | No | Enable gateway proxy filtering on UDP. |
| `result` | `Hash` | No |  |
| `root_certificate_installation_enabled` | `Boolean` | No | Enable installation of cloudflare managed root certificate. |
| `use_zt_virtual_ip` | `Boolean` | No | Enable using CGNAT virtual IPv4. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesZeroTrustAccountDeviceSetting.load({ "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TeamsDevicesZeroTrustAccountDeviceSetting.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TeamsDevicesZeroTrustAccountDeviceSetting.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamsDevicesZeroTrustAccountDeviceSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelEntity

```ruby
tunnel = client.Tunnel
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Tunnel.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelCfdTunnelResponseCollectionEntity

```ruby
tunnel_cfd_tunnel_response_collection = client.TunnelCfdTunnelResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TunnelCfdTunnelResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelCfdTunnelResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelCfdTunnelResponseSingleEntity

```ruby
tunnel_cfd_tunnel_response_single = client.TunnelCfdTunnelResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config_src` | `String` | No | Indicates if this is a locally or remotely configured tunnel. |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `name` | `String` | Yes | A user-friendly name for a tunnel. |
| `result` | `String` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Yes | Whether the API call was successful |
| `tunnel_secret` | `String` | No | Sets the password required to run a locally-managed tunnel. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TunnelCfdTunnelResponseSingle.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "result" => "example_result", # String
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelCfdTunnelResponseSingle.load({ "account_id" => "account_id", "tunnel_id" => "tunnel_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelCfdTunnelResponseSingle.remove({ "account_id" => "account_id", "tunnel_id" => "tunnel_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TunnelCfdTunnelResponseSingle.update({
  "account_id" => "account_id",
  "tunnel_id" => "tunnel_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelCfdTunnelResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelConfigurationEntity

```ruby
tunnel_configuration = client.TunnelConfiguration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Hash` | No | The tunnel configuration and ingress rules. |
| `result` | `Hash` | No | Cloudflare Tunnel configuration |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelConfiguration.load({ "account_id" => "account_id", "cfd_tunnel_id" => "cfd_tunnel_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TunnelConfiguration.update({
  "account_id" => "account_id",
  "cfd_tunnel_id" => "cfd_tunnel_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelConfigurationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelEmptyEntity

```ruby
tunnel_empty = client.TunnelEmpty
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `String` | Yes | UUID of the Cloudflare Tunnel connector. |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelEmpty.remove({ "account_id" => "account_id", "cfd_tunnel_id" => "cfd_tunnel_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TunnelEmpty.update({
  "account_id" => "account_id",
  "warp_connector_id" => "warp_connector_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelEmptyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelHostnameRouteResponseCollectionEntity

```ruby
tunnel_hostname_route_response_collection = client.TunnelHostnameRouteResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TunnelHostnameRouteResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelHostnameRouteResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelHostnameRouteResponseSingleEntity

```ruby
tunnel_hostname_route_response_single = client.TunnelHostnameRouteResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `String` | No | An optional description of the hostname route. |
| `errors` | `Array` | Yes |  |
| `hostname` | `String` | No | The hostname of the route. |
| `messages` | `Array` | Yes |  |
| `result` | `String` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Yes | Whether the API call was successful |
| `tunnel_id` | `String` | No | UUID of the tunnel. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TunnelHostnameRouteResponseSingle.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => "example_result", # String
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelHostnameRouteResponseSingle.load({ "account_id" => "account_id", "hostname_route_id" => "hostname_route_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelHostnameRouteResponseSingle.remove({ "account_id" => "account_id", "hostname_route_id" => "hostname_route_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TunnelHostnameRouteResponseSingle.update({
  "account_id" => "account_id",
  "hostname_route_id" => "hostname_route_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelHostnameRouteResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelMeshConfigurationResponseSingleEntity

```ruby
tunnel_mesh_configuration_response_single = client.TunnelMeshConfigurationResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Hash` | No | Provider-specific configuration. |
| `ha_mode` | `String` | Yes | High-availability mode for the WARP Connector tunnel. |
| `result` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelMeshConfigurationResponseSingle.load({ "account_id" => "account_id", "warp_connector_id" => "warp_connector_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TunnelMeshConfigurationResponseSingle.update({
  "account_id" => "account_id",
  "warp_connector_id" => "warp_connector_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelMeshConfigurationResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelRouteResponseSingleEntity

```ruby
tunnel_route_response_single = client.TunnelRouteResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `String` | No | Optional remark describing the route. |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `network` | `String` | Yes | The private IPv4 or IPv6 range connected by the route, in CIDR notation. |
| `result` | `String` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Yes | Whether the API call was successful |
| `tunnel_id` | `String` | Yes | UUID of the tunnel. |
| `virtual_network_id` | `String` | No | UUID of the virtual network. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TunnelRouteResponseSingle.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "network" => "example_network", # String
  "result" => "example_result", # String
  "success" => true, # Boolean
  "tunnel_id" => "example_tunnel_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelRouteResponseSingle.load({ "account_id" => "account_id", "route_id" => "route_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelRouteResponseSingle.remove({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TunnelRouteResponseSingle.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelRouteResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelSubnetResponseCollectionEntity

```ruby
tunnel_subnet_response_collection = client.TunnelSubnetResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TunnelSubnetResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelSubnetResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelSubnetResponseSingleEntity

```ruby
tunnel_subnet_response_single = client.TunnelSubnetResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `String` | No | An optional description of the subnet. |
| `errors` | `Array` | Yes |  |
| `is_default_network` | `Boolean` | No | If `true`, this is the default subnet for the account. |
| `messages` | `Array` | Yes |  |
| `name` | `String` | Yes | A user-friendly name for the subnet. |
| `network` | `String` | Yes | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `String` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Yes | Whether the API call was successful |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TunnelSubnetResponseSingle.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "network" => "example_network", # String
  "result" => "example_result", # String
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelSubnetResponseSingle.load({ "account_id" => "account_id", "address_family" => "address_family" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TunnelSubnetResponseSingle.update({
  "account_id" => "account_id",
  "address_family" => "address_family",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelSubnetResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelSubnetResponseSingleNullableEntity

```ruby
tunnel_subnet_response_single_nullable = client.TunnelSubnetResponseSingleNullable
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelSubnetResponseSingleNullable.remove({ "account_id" => "account_id", "subnet_id" => "subnet_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelSubnetResponseSingleNullableEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelTeamnetResponseCollectionEntity

```ruby
tunnel_teamnet_response_collection = client.TunnelTeamnetResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TunnelTeamnetResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelTeamnetResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelTeamnetResponseSingleEntity

```ruby
tunnel_teamnet_response_single = client.TunnelTeamnetResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `String` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelTeamnetResponseSingle.load({ "account_id" => "account_id", "ip" => "ip" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelTeamnetResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelTunnelClientEntity

```ruby
tunnel_tunnel_client = client.TunnelTunnelClient
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `String` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelTunnelClient.load({ "account_id" => "account_id", "cfd_tunnel_id" => "cfd_tunnel_id", "connector_id" => "connector_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelTunnelClientEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelTunnelConnectionEntity

```ruby
tunnel_tunnel_connection = client.TunnelTunnelConnection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TunnelTunnelConnection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelTunnelConnectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelTunnelResponseTokenEntity

```ruby
tunnel_tunnel_response_token = client.TunnelTunnelResponseToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `resources` | `Array` | Yes |  |
| `result` | `String` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `resources` | - | - |
| `result` | Yes | - |
| `success` | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TunnelTunnelResponseToken.create({
  "account_id" => "example_account_id", # String
  "cfd_tunnel_id" => "example_cfd_tunnel_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "resources" => [], # Array
  "result" => "example_result", # String
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TunnelTunnelResponseToken.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelTunnelResponseTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelTunnelWarpConnectorClientEntity

```ruby
tunnel_tunnel_warp_connector_client = client.TunnelTunnelWarpConnectorClient
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `String` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelTunnelWarpConnectorClient.load({ "account_id" => "account_id", "connector_id" => "connector_id", "warp_connector_id" => "warp_connector_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelTunnelWarpConnectorClientEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelTunnelWarpConnectorConnectionEntity

```ruby
tunnel_tunnel_warp_connector_connection = client.TunnelTunnelWarpConnectorConnection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TunnelTunnelWarpConnectorConnection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelTunnelWarpConnectorConnectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelVnetResponseCollectionEntity

```ruby
tunnel_vnet_response_collection = client.TunnelVnetResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TunnelVnetResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelVnetResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelVnetResponseSingleEntity

```ruby
tunnel_vnet_response_single = client.TunnelVnetResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `String` | No | Optional remark describing the virtual network. |
| `is_default` | `Boolean` | No | If `true`, this virtual network is the default for the account. |
| `is_default_network` | `Boolean` | No | If `true`, this virtual network is the default for the account. |
| `name` | `String` | No | A user-friendly name for the virtual network. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `comment` | - | - | - | - |
| `is_default` | - | - | - | - |
| `is_default_network` | - | - | - | - |
| `name` | - | Yes | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TunnelVnetResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelVnetResponseSingle.load({ "account_id" => "account_id", "virtual_network_id" => "virtual_network_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelVnetResponseSingle.remove({ "account_id" => "account_id", "virtual_network_id" => "virtual_network_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TunnelVnetResponseSingle.update({
  "account_id" => "account_id",
  "virtual_network_id" => "virtual_network_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelVnetResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelWarpConnectorResponseCollectionEntity

```ruby
tunnel_warp_connector_response_collection = client.TunnelWarpConnectorResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TunnelWarpConnectorResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelWarpConnectorResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelWarpConnectorResponseSingleEntity

```ruby
tunnel_warp_connector_response_single = client.TunnelWarpConnectorResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `ha` | `Boolean` | No | Indicates that the tunnel will be created to be highly available. |
| `messages` | `Array` | Yes |  |
| `name` | `String` | Yes | A user-friendly name for a tunnel. |
| `result` | `String` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Yes | Whether the API call was successful |
| `tunnel_secret` | `String` | No | Sets the password required to run a locally-managed tunnel. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TunnelWarpConnectorResponseSingle.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "result" => "example_result", # String
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelWarpConnectorResponseSingle.load({ "account_id" => "account_id", "tunnel_id" => "tunnel_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TunnelWarpConnectorResponseSingle.remove({ "account_id" => "account_id", "tunnel_id" => "tunnel_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TunnelWarpConnectorResponseSingle.update({
  "account_id" => "account_id",
  "tunnel_id" => "tunnel_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelWarpConnectorResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TunnelZeroTrustConnectivitySettingEntity

```ruby
tunnel_zero_trust_connectivity_setting = client.TunnelZeroTrustConnectivitySetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `icmp_proxy_enabled` | `Boolean` | No | A flag to enable the ICMP proxy for the account network. |
| `messages` | `Array` | Yes |  |
| `offramp_warp_enabled` | `Boolean` | No | A flag to enable WARP to WARP traffic. |
| `result` | `String` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Yes | Whether the API call was successful |

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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TunnelZeroTrustConnectivitySetting.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TunnelZeroTrustConnectivitySetting.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TunnelZeroTrustConnectivitySettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WarpEntity

```ruby
warp = client.Warp
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `String` | No | An optional description of the subnet. |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `is_default_network` | `Boolean` | No | If `true`, this is the default subnet for the account. |
| `messages` | `Array` | Yes |  |
| `name` | `String` | No | A user-friendly name for the subnet. |
| `network` | `String` | No | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `String` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Yes | Whether the API call was successful |

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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Warp.load({ "id" => "warp_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Warp.update({
  "id" => "warp_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WarpEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WarpChangeEventEntity

```ruby
warp_change_event = client.WarpChangeEvent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WarpChangeEvent.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WarpChangeEventEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WarpTeamsDeviceApiOtherEntity

```ruby
warp_teams_device_api_other = client.WarpTeamsDeviceApiOther
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Object` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WarpTeamsDeviceApiOther.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WarpTeamsDeviceApiOtherEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayApplicationsReviewStatusEntity

```ruby
zero_trust_gateway_applications_review_status = client.ZeroTrustGatewayApplicationsReviewStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_apps` | `Array` | Yes | Contains the ids of the approved applications. |
| `in_review_apps` | `Array` | Yes | Contains the ids of the applications in review. |
| `result` | `Hash` | No |  |
| `unapproved_apps` | `Array` | Yes | Contains the ids of the unapproved applications. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewayApplicationsReviewStatus.load({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZeroTrustGatewayApplicationsReviewStatus.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayApplicationsReviewStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayCsvOperationSingleEntity

```ruby
zero_trust_gateway_csv_operation_single = client.ZeroTrustGatewayCsvOperationSingle
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ZeroTrustGatewayCsvOperationSingle.create({
  "account_id" => "example_account_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayCsvOperationSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayCustomCertificateSettingEntity

```ruby
zero_trust_gateway_custom_certificate_setting = client.ZeroTrustGatewayCustomCertificateSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `binding_status` | `String` | No | Indicate the internal certificate status. |
| `enabled` | `Boolean` | Yes | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| `id` | `String` | No | Specify the UUID of the certificate (ID from MTLS certificate store). |
| `updated_at` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewayCustomCertificateSetting.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayCustomCertificateSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountEntity

```ruby
zero_trust_gateway_gateway_account = client.ZeroTrustGatewayGatewayAccount
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ZeroTrustGatewayGatewayAccount.create({
  "account_id" => "example_account_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewayGatewayAccount.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayGatewayAccountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountConfigEntity

```ruby
zero_trust_gateway_gateway_account_config = client.ZeroTrustGatewayGatewayAccountConfig
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |
| `settings` | `Hash` | No | Specify account settings. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewayGatewayAccountConfig.load({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZeroTrustGatewayGatewayAccountConfig.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayGatewayAccountConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity

```ruby
zero_trust_gateway_gateway_account_egress_cidr_pair_list = client.ZeroTrustGatewayGatewayAccountEgressCidrPairList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZeroTrustGatewayGatewayAccountEgressCidrPairList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountLoggingSettingEntity

```ruby
zero_trust_gateway_gateway_account_logging_setting = client.ZeroTrustGatewayGatewayAccountLoggingSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redact_pii` | `Boolean` | No | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `result` | `Hash` | No |  |
| `settings_by_rule_type` | `Hash` | No | Configure logging settings for each rule type. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewayGatewayAccountLoggingSetting.load({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZeroTrustGatewayGatewayAccountLoggingSetting.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayGatewayAccountLoggingSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayListItemResponseCollectionEntity

```ruby
zero_trust_gateway_list_item_response_collection = client.ZeroTrustGatewayListItemResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No | Provide the list items. |
| `result_info` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZeroTrustGatewayListItemResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayListItemResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayListSingleEntity

```ruby
zero_trust_gateway_list_single = client.ZeroTrustGatewayListSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `append` | `Array` | No | Add items to the list. |
| `description` | `String` | No | Provide the list description. |
| `items` | `Array` | No | Add items to the list. |
| `name` | `String` | Yes | Specify the list name. |
| `remove` | `Array` | No | Lists of item values you want to remove. |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewayListSingle.load({ "account_id" => "account_id", "list_id" => "list_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZeroTrustGatewayListSingle.update({
  "account_id" => "account_id",
  "list_id" => "list_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayListSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayResponseCollectionEntity

```ruby
zero_trust_gateway_response_collection = client.ZeroTrustGatewayResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZeroTrustGatewayResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection10Entity

```ruby
zero_trust_gateway_response_collection_10 = client.ZeroTrustGatewayResponseCollection10
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |
| `result_info` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZeroTrustGatewayResponseCollection10.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayResponseCollection10Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection2Entity

```ruby
zero_trust_gateway_response_collection_2 = client.ZeroTrustGatewayResponseCollection2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZeroTrustGatewayResponseCollection2.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayResponseCollection2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection3Entity

```ruby
zero_trust_gateway_response_collection_3 = client.ZeroTrustGatewayResponseCollection3
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZeroTrustGatewayResponseCollection3.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayResponseCollection3Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection4Entity

```ruby
zero_trust_gateway_response_collection_4 = client.ZeroTrustGatewayResponseCollection4
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZeroTrustGatewayResponseCollection4.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayResponseCollection4Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection5Entity

```ruby
zero_trust_gateway_response_collection_5 = client.ZeroTrustGatewayResponseCollection5
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZeroTrustGatewayResponseCollection5.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayResponseCollection5Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection6Entity

```ruby
zero_trust_gateway_response_collection_6 = client.ZeroTrustGatewayResponseCollection6
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZeroTrustGatewayResponseCollection6.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZeroTrustGatewayResponseCollection6.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayResponseCollection6Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection7Entity

```ruby
zero_trust_gateway_response_collection_7 = client.ZeroTrustGatewayResponseCollection7
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZeroTrustGatewayResponseCollection7.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayResponseCollection7Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection8Entity

```ruby
zero_trust_gateway_response_collection_8 = client.ZeroTrustGatewayResponseCollection8
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZeroTrustGatewayResponseCollection8.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayResponseCollection8Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection9Entity

```ruby
zero_trust_gateway_response_collection_9 = client.ZeroTrustGatewayResponseCollection9
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZeroTrustGatewayResponseCollection9.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewayResponseCollection9Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewaySingleEntity

```ruby
zero_trust_gateway_single = client.ZeroTrustGatewaySingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |
| `validity_period_days` | `Integer` | No | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingle.create({
  "account_id" => "example_account_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingle.load({ "account_id" => "account_id", "certificate_id" => "certificate_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingle.remove({ "account_id" => "account_id", "certificate_id" => "certificate_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewaySingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse2Entity

```ruby
zero_trust_gateway_single_response_2 = client.ZeroTrustGatewaySingleResponse2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse2.load({ "account_id" => "account_id", "operation_id" => "operation_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewaySingleResponse2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse3Entity

```ruby
zero_trust_gateway_single_response_3 = client.ZeroTrustGatewaySingleResponse3
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_default` | `Boolean` | No | Indicate whether this location is the default location. |
| `dns_destination_ips_id` | `String` | No | Specify the identifier of the pair of IPv4 addresses assigned to this location. |
| `ecs_support` | `Boolean` | No | Indicate whether the location must resolve EDNS queries. |
| `endpoints` | `Hash` | Yes | Configure the destination endpoints for this location. |
| `max_ttl` | `Hash` | Yes | Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. |
| `name` | `String` | Yes | Specify the location name. |
| `networks` | `Array` | No | Specify the list of network ranges from which requests at this location originate. |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse3.create({
  "account_id" => "example_account_id", # String
  "endpoints" => {}, # Hash
  "max_ttl" => {}, # Hash
  "name" => "example_name", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse3.load({ "account_id" => "account_id", "location_id" => "location_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse3.update({
  "account_id" => "account_id",
  "location_id" => "location_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewaySingleResponse3Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse4Entity

```ruby
zero_trust_gateway_single_response_4 = client.ZeroTrustGatewaySingleResponse4
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes | Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`. |
| `description` | `String` | No | Specify the rule description. |
| `device_posture` | `String` | No | Specify the wirefilter expression used for device posture check. |
| `enabled` | `Boolean` | No | Specify whether the rule is enabled. |
| `expiration` | `Hash` | Yes | Defines the expiration time stamp and default duration of a DNS policy. |
| `filters` | `Array` | No | Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| `identity` | `String` | No | Specify the wirefilter expression used for identity matching. |
| `name` | `String` | Yes | Specify the rule name. |
| `precedence` | `Integer` | No | Set the order of your rules. |
| `result` | `Hash` | Yes |  |
| `rule_settings` | `Hash` | No | Defines settings for this rule. |
| `schedule` | `Hash` | No | Defines the schedule for activating DNS policies. |
| `traffic` | `String` | No | Specify the wirefilter expression used for traffic matching. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse4.create({
  "account_id" => "example_account_id", # String
  "action" => "example_action", # String
  "expiration" => {}, # Hash
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse4.load({ "account_id" => "account_id", "rule_id" => "rule_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse4.update({
  "account_id" => "account_id",
  "rule_id" => "rule_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewaySingleResponse4Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse5Entity

```ruby
zero_trust_gateway_single_response_5 = client.ZeroTrustGatewaySingleResponse5
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ips` | `Array` | No | Specify the list of CIDRs to restrict ingress connections. |
| `kind` | `String` | No | The proxy endpoint kind. |
| `name` | `String` | No | Specify the name of the proxy endpoint. |
| `result` | `Object` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse5.create({
  "account_id" => "example_account_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse5.load({ "account_id" => "account_id", "proxy_endpoint_id" => "proxy_endpoint_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse5.update({
  "account_id" => "account_id",
  "proxy_endpoint_id" => "proxy_endpoint_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewaySingleResponse5Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse6Entity

```ruby
zero_trust_gateway_single_response_6 = client.ZeroTrustGatewaySingleResponse6
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `public_key` | `String` | Yes | Provide the Base64-encoded HPKE public key that encrypts SSH session logs. |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse6.create({
  "account_id" => "example_account_id", # String
  "public_key" => "example_public_key", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse6.load({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse6.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewaySingleResponse6Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse7Entity

```ruby
zero_trust_gateway_single_response_7 = client.ZeroTrustGatewaySingleResponse7
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contents` | `String` | Yes | Actual contents of the PAC file |
| `description` | `String` | No | Detailed description of the PAC file. |
| `name` | `String` | Yes | Name of the PAC file. |
| `result` | `Hash` | No |  |
| `slug` | `String` | No | URL-friendly version of the PAC file name. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `contents` | - | - | - |
| `description` | - | - | Yes |
| `name` | - | - | - |
| `result` | - | - | - |
| `slug` | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse7.create({
  "account_id" => "example_account_id", # String
  "contents" => "example_contents", # String
  "name" => "example_name", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse7.load({ "account_id" => "account_id", "pacfile_id" => "pacfile_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponse7.update({
  "account_id" => "account_id",
  "pacfile_id" => "pacfile_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewaySingleResponse7Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustGatewaySingleResponseWithListItemEntity

```ruby
zero_trust_gateway_single_response_with_list_item = client.ZeroTrustGatewaySingleResponseWithListItem
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No | Provide the list description. |
| `items` | `Array` | No | Add items to the list. |
| `name` | `String` | Yes | Specify the list name. |
| `type` | `String` | Yes | Specify the list type. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ZeroTrustGatewaySingleResponseWithListItem.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "type" => "example_type", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustGatewaySingleResponseWithListItemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustRiskScoringEntity

```ruby
zero_trust_risk_scoring = client.ZeroTrustRiskScoring
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `behaviors` | `Hash` | Yes |  |
| `result` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ZeroTrustRiskScoring.create({
  "account_id" => "example_account_id", # String
  "zt_risk_scoring_id" => "example_zt_risk_scoring_id", # String
  "behaviors" => {}, # Hash
  "result" => {}, # Hash
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustRiskScoring.load({ "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZeroTrustRiskScoring.update({
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustRiskScoringEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZeroTrustRiskScoringIntegrationEntity

```ruby
zero_trust_risk_scoring_integration = client.ZeroTrustRiskScoringIntegration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | Yes | Whether this integration is enabled. |
| `id` | `String` | No |  |
| `integration_type` | `String` | Yes |  |
| `reference_id` | `String` | No | A reference id that can be supplied by the client. |
| `result` | `Hash` | Yes |  |
| `tenant_url` | `String` | Yes | The base url of the tenant, e.g. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ZeroTrustRiskScoringIntegration.create({
  "account_id" => "example_account_id", # String
  "active" => true, # Boolean
  "integration_type" => "example_integration_type", # String
  "result" => {}, # Hash
  "tenant_url" => "example_tenant_url", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZeroTrustRiskScoringIntegration.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustRiskScoringIntegration.load({ "id" => "zero_trust_risk_scoring_integration_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ZeroTrustRiskScoringIntegration.remove({ "id" => "zero_trust_risk_scoring_integration_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZeroTrustRiskScoringIntegration.update({
  "id" => "zero_trust_risk_scoring_integration_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZeroTrustRiskScoringIntegrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ruby
client = CloudflareZeroTrustSDK.new({
  "feature" => {
    "test" => { "active" => true },
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

