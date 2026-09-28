# CloudflareZeroTrust PHP SDK Reference

Complete API reference for the CloudflareZeroTrust PHP SDK.


## CloudflareZeroTrustSDK

### Constructor

```php
require_once __DIR__ . '/cloudflarezerotrust_sdk.php';

$client = new CloudflareZeroTrustSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareZeroTrustSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudflareZeroTrustSDK::test();
```


### Instance Methods

#### `ClientVersion($data = null)`

Create a new `ClientVersionEntity` instance. Pass `null` for no initial data.

#### `Cni($data = null)`

Create a new `CniEntity` instance. Pass `null` for no initial data.

#### `DeploymentGroup($data = null)`

Create a new `DeploymentGroupEntity` instance. Pass `null` for no initial data.

#### `DexRemoteCommand($data = null)`

Create a new `DexRemoteCommandEntity` instance. Pass `null` for no initial data.

#### `DexRule($data = null)`

Create a new `DexRuleEntity` instance. Pass `null` for no initial data.

#### `DexSyntheticApplicationMonitoring($data = null)`

Create a new `DexSyntheticApplicationMonitoringEntity` instance. Pass `null` for no initial data.

#### `DigitalExperienceMonitoringDevice($data = null)`

Create a new `DigitalExperienceMonitoringDeviceEntity` instance. Pass `null` for no initial data.

#### `DigitalExperienceMonitoringDexDeleteResponseCollection($data = null)`

Create a new `DigitalExperienceMonitoringDexDeleteResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `DigitalExperienceMonitoringDexResponseCollection($data = null)`

Create a new `DigitalExperienceMonitoringDexResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `DigitalExperienceMonitoringDexSingle($data = null)`

Create a new `DigitalExperienceMonitoringDexSingleEntity` instance. Pass `null` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusDevice($data = null)`

Create a new `DigitalExperienceMonitoringFleetStatusDeviceEntity` instance. Pass `null` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusLive($data = null)`

Create a new `DigitalExperienceMonitoringFleetStatusLiveEntity` instance. Pass `null` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusOverTime($data = null)`

Create a new `DigitalExperienceMonitoringFleetStatusOverTimeEntity` instance. Pass `null` for no initial data.

#### `Interconnect($data = null)`

Create a new `InterconnectEntity` instance. Pass `null` for no initial data.

#### `IpProfile($data = null)`

Create a new `IpProfileEntity` instance. Pass `null` for no initial data.

#### `List($data = null)`

Create a new `ListEntity` instance. Pass `null` for no initial data.

#### `Location($data = null)`

Create a new `LocationEntity` instance. Pass `null` for no initial data.

#### `NscCni($data = null)`

Create a new `NscCniEntity` instance. Pass `null` for no initial data.

#### `NscDefaultName($data = null)`

Create a new `NscDefaultNameEntity` instance. Pass `null` for no initial data.

#### `NscInterconnect($data = null)`

Create a new `NscInterconnectEntity` instance. Pass `null` for no initial data.

#### `NscSetting($data = null)`

Create a new `NscSettingEntity` instance. Pass `null` for no initial data.

#### `NscSlotInfo($data = null)`

Create a new `NscSlotInfoEntity` instance. Pass `null` for no initial data.

#### `NscStatusInfo($data = null)`

Create a new `NscStatusInfoEntity` instance. Pass `null` for no initial data.

#### `OverrideCode($data = null)`

Create a new `OverrideCodeEntity` instance. Pass `null` for no initial data.

#### `Pacfile($data = null)`

Create a new `PacfileEntity` instance. Pass `null` for no initial data.

#### `PhysicalDevice($data = null)`

Create a new `PhysicalDeviceEntity` instance. Pass `null` for no initial data.

#### `ProxyEndpoint($data = null)`

Create a new `ProxyEndpointEntity` instance. Pass `null` for no initial data.

#### `Registration($data = null)`

Create a new `RegistrationEntity` instance. Pass `null` for no initial data.

#### `Rule($data = null)`

Create a new `RuleEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesApiResponseSingle($data = null)`

Create a new `TeamsDevicesApiResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesComponentsSchemasResponseCollection($data = null)`

Create a new `TeamsDevicesComponentsSchemasResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesComponentsSchemasSingle($data = null)`

Create a new `TeamsDevicesComponentsSchemasSingleEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesDefaultDeviceSetting($data = null)`

Create a new `TeamsDevicesDefaultDeviceSettingEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesDevice($data = null)`

Create a new `TeamsDevicesDeviceEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesDeviceSetting($data = null)`

Create a new `TeamsDevicesDeviceSettingEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesDeviceSettingsResponseCollection($data = null)`

Create a new `TeamsDevicesDeviceSettingsResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesFallbackDomainResponseCollection($data = null)`

Create a new `TeamsDevicesFallbackDomainResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesGlobalWarpOverride($data = null)`

Create a new `TeamsDevicesGlobalWarpOverrideEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesId($data = null)`

Create a new `TeamsDevicesIdEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesOverrideCode($data = null)`

Create a new `TeamsDevicesOverrideCodeEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesResponseCollection($data = null)`

Create a new `TeamsDevicesResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesSchemasId($data = null)`

Create a new `TeamsDevicesSchemasIdEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesSchemasResponseCollection($data = null)`

Create a new `TeamsDevicesSchemasResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesSchemasSingle($data = null)`

Create a new `TeamsDevicesSchemasSingleEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesSingle($data = null)`

Create a new `TeamsDevicesSingleEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesSplitTunnelIncludeResponseCollection($data = null)`

Create a new `TeamsDevicesSplitTunnelIncludeResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesSplitTunnelResponseCollection($data = null)`

Create a new `TeamsDevicesSplitTunnelResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TeamsDevicesZeroTrustAccountDeviceSetting($data = null)`

Create a new `TeamsDevicesZeroTrustAccountDeviceSettingEntity` instance. Pass `null` for no initial data.

#### `Tunnel($data = null)`

Create a new `TunnelEntity` instance. Pass `null` for no initial data.

#### `TunnelCfdTunnelResponseCollection($data = null)`

Create a new `TunnelCfdTunnelResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TunnelCfdTunnelResponseSingle($data = null)`

Create a new `TunnelCfdTunnelResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TunnelConfiguration($data = null)`

Create a new `TunnelConfigurationEntity` instance. Pass `null` for no initial data.

#### `TunnelEmpty($data = null)`

Create a new `TunnelEmptyEntity` instance. Pass `null` for no initial data.

#### `TunnelHostnameRouteResponseCollection($data = null)`

Create a new `TunnelHostnameRouteResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TunnelHostnameRouteResponseSingle($data = null)`

Create a new `TunnelHostnameRouteResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TunnelMeshConfigurationResponseSingle($data = null)`

Create a new `TunnelMeshConfigurationResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TunnelRouteResponseSingle($data = null)`

Create a new `TunnelRouteResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TunnelSubnetResponseCollection($data = null)`

Create a new `TunnelSubnetResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TunnelSubnetResponseSingle($data = null)`

Create a new `TunnelSubnetResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TunnelSubnetResponseSingleNullable($data = null)`

Create a new `TunnelSubnetResponseSingleNullableEntity` instance. Pass `null` for no initial data.

#### `TunnelTeamnetResponseCollection($data = null)`

Create a new `TunnelTeamnetResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TunnelTeamnetResponseSingle($data = null)`

Create a new `TunnelTeamnetResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TunnelTunnelClient($data = null)`

Create a new `TunnelTunnelClientEntity` instance. Pass `null` for no initial data.

#### `TunnelTunnelConnection($data = null)`

Create a new `TunnelTunnelConnectionEntity` instance. Pass `null` for no initial data.

#### `TunnelTunnelResponseToken($data = null)`

Create a new `TunnelTunnelResponseTokenEntity` instance. Pass `null` for no initial data.

#### `TunnelTunnelWarpConnectorClient($data = null)`

Create a new `TunnelTunnelWarpConnectorClientEntity` instance. Pass `null` for no initial data.

#### `TunnelTunnelWarpConnectorConnection($data = null)`

Create a new `TunnelTunnelWarpConnectorConnectionEntity` instance. Pass `null` for no initial data.

#### `TunnelVnetResponseCollection($data = null)`

Create a new `TunnelVnetResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TunnelVnetResponseSingle($data = null)`

Create a new `TunnelVnetResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TunnelWarpConnectorResponseCollection($data = null)`

Create a new `TunnelWarpConnectorResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TunnelWarpConnectorResponseSingle($data = null)`

Create a new `TunnelWarpConnectorResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TunnelZeroTrustConnectivitySetting($data = null)`

Create a new `TunnelZeroTrustConnectivitySettingEntity` instance. Pass `null` for no initial data.

#### `Warp($data = null)`

Create a new `WarpEntity` instance. Pass `null` for no initial data.

#### `WarpChangeEvent($data = null)`

Create a new `WarpChangeEventEntity` instance. Pass `null` for no initial data.

#### `WarpTeamsDeviceApiOther($data = null)`

Create a new `WarpTeamsDeviceApiOtherEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayApplicationsReviewStatus($data = null)`

Create a new `ZeroTrustGatewayApplicationsReviewStatusEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayCsvOperationSingle($data = null)`

Create a new `ZeroTrustGatewayCsvOperationSingleEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayCustomCertificateSetting($data = null)`

Create a new `ZeroTrustGatewayCustomCertificateSettingEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayGatewayAccount($data = null)`

Create a new `ZeroTrustGatewayGatewayAccountEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayGatewayAccountConfig($data = null)`

Create a new `ZeroTrustGatewayGatewayAccountConfigEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayGatewayAccountEgressCidrPairList($data = null)`

Create a new `ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayGatewayAccountLoggingSetting($data = null)`

Create a new `ZeroTrustGatewayGatewayAccountLoggingSettingEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayListItemResponseCollection($data = null)`

Create a new `ZeroTrustGatewayListItemResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayListSingle($data = null)`

Create a new `ZeroTrustGatewayListSingleEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayResponseCollection($data = null)`

Create a new `ZeroTrustGatewayResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayResponseCollection10($data = null)`

Create a new `ZeroTrustGatewayResponseCollection10Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayResponseCollection2($data = null)`

Create a new `ZeroTrustGatewayResponseCollection2Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayResponseCollection3($data = null)`

Create a new `ZeroTrustGatewayResponseCollection3Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayResponseCollection4($data = null)`

Create a new `ZeroTrustGatewayResponseCollection4Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayResponseCollection5($data = null)`

Create a new `ZeroTrustGatewayResponseCollection5Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayResponseCollection6($data = null)`

Create a new `ZeroTrustGatewayResponseCollection6Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayResponseCollection7($data = null)`

Create a new `ZeroTrustGatewayResponseCollection7Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayResponseCollection8($data = null)`

Create a new `ZeroTrustGatewayResponseCollection8Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewayResponseCollection9($data = null)`

Create a new `ZeroTrustGatewayResponseCollection9Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewaySingle($data = null)`

Create a new `ZeroTrustGatewaySingleEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewaySingleResponse2($data = null)`

Create a new `ZeroTrustGatewaySingleResponse2Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewaySingleResponse3($data = null)`

Create a new `ZeroTrustGatewaySingleResponse3Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewaySingleResponse4($data = null)`

Create a new `ZeroTrustGatewaySingleResponse4Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewaySingleResponse5($data = null)`

Create a new `ZeroTrustGatewaySingleResponse5Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewaySingleResponse6($data = null)`

Create a new `ZeroTrustGatewaySingleResponse6Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewaySingleResponse7($data = null)`

Create a new `ZeroTrustGatewaySingleResponse7Entity` instance. Pass `null` for no initial data.

#### `ZeroTrustGatewaySingleResponseWithListItem($data = null)`

Create a new `ZeroTrustGatewaySingleResponseWithListItemEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustRiskScoring($data = null)`

Create a new `ZeroTrustRiskScoringEntity` instance. Pass `null` for no initial data.

#### `ZeroTrustRiskScoringIntegration($data = null)`

Create a new `ZeroTrustRiskScoringIntegrationEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudflareZeroTrustUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ClientVersionEntity

```php
$client_version = $client->ClientVersion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ClientVersion()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClientVersionEntity`

Create a new `ClientVersionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CniEntity

```php
$cni = $client->Cni();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Cni()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CniEntity`

Create a new `CniEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeploymentGroupEntity

```php
$deployment_group = $client->DeploymentGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for the deployment group. |
| `policy_ids` | `array` | No | Contains an optional list of policy IDs assigned to a group. |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |
| `version_config` | `array` | Yes | Contains at least one version configuration. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DeploymentGroup()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "name" => null, // string
  "result" => null, // array
  "result_info" => null, // array
  "success" => null, // bool
  "version_config" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DeploymentGroup()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DeploymentGroup()->load(["id" => "deployment_group_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DeploymentGroup()->remove(["id" => "deployment_group_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DeploymentGroup()->update([
  "id" => "deployment_group_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeploymentGroupEntity`

Create a new `DeploymentGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DexRemoteCommandEntity

```php
$dex_remote_command = $client->DexRemoteCommand();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commands` | `array` | Yes | List of device-level commands to execute |
| `result` | `array` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `commands` | - | - |
| `result` | Yes | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DexRemoteCommand()->create([
  "account_id" => null, // string
  "commands" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DexRemoteCommand()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DexRemoteCommandEntity`

Create a new `DexRemoteCommandEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DexRuleEntity

```php
$dex_rule = $client->DexRule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `match` | `string` | Yes | The wirefilter expression to match. |
| `name` | `string` | Yes | The name of the Rule. |
| `result` | `array` | No |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `description` | - | - | - | - |
| `id` | - | - | - | - |
| `match` | - | - | Yes | - |
| `name` | - | - | Yes | - |
| `result` | Yes | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DexRule()->create([
  "account_id" => null, // string
  "match" => null, // string
  "name" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DexRule()->load(["id" => "dex_rule_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DexRule()->remove(["id" => "dex_rule_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DexRule()->update([
  "id" => "dex_rule_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DexRuleEntity`

Create a new `DexRuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DexSyntheticApplicationMonitoringEntity

```php
$dex_synthetic_application_monitoring = $client->DexSyntheticApplicationMonitoring();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes | array of colos. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | Yes |
| `success` | - | - |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DexSyntheticApplicationMonitoring()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DexSyntheticApplicationMonitoring()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DexSyntheticApplicationMonitoringEntity`

Create a new `DexSyntheticApplicationMonitoringEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DigitalExperienceMonitoringDeviceEntity

```php
$digital_experience_monitoring_device = $client->DigitalExperienceMonitoringDevice();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alwaysOn` | `bool` | No |  |
| `batteryCharging` | `bool` | No |  |
| `batteryCycles` | `int` | No |  |
| `batteryPct` | `float` | No |  |
| `colo` | `string` | Yes | Cloudflare colo airport code. |
| `connectionType` | `string` | No |  |
| `cpuPct` | `float` | No |  |
| `cpuPctByApp` | `array` | No |  |
| `deviceId` | `string` | Yes | Device identifier (UUID v4) |
| `deviceIpv4` | `array` | No |  |
| `deviceIpv6` | `array` | No |  |
| `deviceName` | `string` | No | Device identifier (human readable). |
| `deviceRegistration` | `string` | No | Deprecated: use registrationId. |
| `diskReadBps` | `int` | No |  |
| `diskUsagePct` | `float` | No |  |
| `diskWriteBps` | `int` | No |  |
| `dohSubdomain` | `string` | No |  |
| `estimatedLossPct` | `float` | No |  |
| `firewallEnabled` | `bool` | No |  |
| `gatewayIpv4` | `array` | No |  |
| `gatewayIpv6` | `array` | No |  |
| `handshakeLatencyMs` | `float` | No |  |
| `ispIpv4` | `array` | No |  |
| `ispIpv6` | `array` | No |  |
| `metal` | `string` | No |  |
| `mode` | `string` | Yes | The mode under which the WARP client is run. |
| `networkRcvdBps` | `int` | No |  |
| `networkSentBps` | `int` | No |  |
| `networkSsid` | `string` | No |  |
| `personEmail` | `string` | No | User contact email address |
| `platform` | `string` | Yes | Operating system. |
| `ramAvailableKb` | `int` | No |  |
| `ramUsedPct` | `float` | No |  |
| `ramUsedPctByApp` | `array` | No |  |
| `registrationId` | `string` | No | Device registration identifier (UUID v4). |
| `rtt` | `array` | No | Round-trip time statistics for the WARP tunnel. |
| `status` | `string` | Yes | Network status. |
| `switchLocked` | `bool` | No |  |
| `timestamp` | `string` | Yes |  |
| `tunnelStats` | `array` | No | WARP tunnel packet and byte counters. |
| `tunnelType` | `string` | No |  |
| `version` | `string` | Yes | WARP client version. |
| `wifiStrengthDbm` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DigitalExperienceMonitoringDevice()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DigitalExperienceMonitoringDeviceEntity`

Create a new `DigitalExperienceMonitoringDeviceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DigitalExperienceMonitoringDexDeleteResponseCollectionEntity

```php
$digital_experience_monitoring_dex_delete_response_collection = $client->DigitalExperienceMonitoringDexDeleteResponseCollection();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DigitalExperienceMonitoringDexDeleteResponseCollection()->remove(["account_id" => "account_id", "dex_test_id" => "dex_test_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DigitalExperienceMonitoringDexDeleteResponseCollectionEntity`

Create a new `DigitalExperienceMonitoringDexDeleteResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DigitalExperienceMonitoringDexResponseCollectionEntity

```php
$digital_experience_monitoring_dex_response_collection = $client->DigitalExperienceMonitoringDexResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DigitalExperienceMonitoringDexResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DigitalExperienceMonitoringDexResponseCollectionEntity`

Create a new `DigitalExperienceMonitoringDexResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DigitalExperienceMonitoringDexSingleEntity

```php
$digital_experience_monitoring_dex_single = $client->DigitalExperienceMonitoringDexSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No | Date the test was created, in RFC 3339 format. |
| `data` | `array` | Yes | The configuration object which contains the details for the WARP client to conduct the test. |
| `description` | `string` | No | Additional details about the test. |
| `enabled` | `bool` | Yes | Determines whether or not the test is active. |
| `interval` | `string` | Yes | How often the test will run. |
| `name` | `string` | Yes | The name of the DEX test. |
| `result` | `array` | Yes |  |
| `target_policies` | `mixed` | No |  |
| `targeted` | `bool` | No |  |
| `test_id` | `string` | No | The unique identifier for the test. |
| `updated` | `string` | No | Date the test was last updated, in RFC 3339 format. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DigitalExperienceMonitoringDexSingle()->create([
  "account_id" => null, // string
  "data" => null, // array
  "enabled" => null, // bool
  "interval" => null, // string
  "name" => null, // string
  "result" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DigitalExperienceMonitoringDexSingle()->load(["account_id" => "account_id", "dex_test_id" => "dex_test_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DigitalExperienceMonitoringDexSingle()->update([
  "account_id" => "account_id",
  "dex_test_id" => "dex_test_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DigitalExperienceMonitoringDexSingleEntity`

Create a new `DigitalExperienceMonitoringDexSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusDeviceEntity

```php
$digital_experience_monitoring_fleet_status_device = $client->DigitalExperienceMonitoringFleetStatusDevice();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DigitalExperienceMonitoringFleetStatusDevice()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DigitalExperienceMonitoringFleetStatusDeviceEntity`

Create a new `DigitalExperienceMonitoringFleetStatusDeviceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusLiveEntity

```php
$digital_experience_monitoring_fleet_status_live = $client->DigitalExperienceMonitoringFleetStatusLive();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DigitalExperienceMonitoringFleetStatusLive()->load(["account_id" => "account_id", "since_minute" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DigitalExperienceMonitoringFleetStatusLiveEntity`

Create a new `DigitalExperienceMonitoringFleetStatusLiveEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusOverTimeEntity

```php
$digital_experience_monitoring_fleet_status_over_time = $client->DigitalExperienceMonitoringFleetStatusOverTime();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DigitalExperienceMonitoringFleetStatusOverTime()->load(["account_id" => "account_id", "from" => "from", "to" => "to"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DigitalExperienceMonitoringFleetStatusOverTimeEntity`

Create a new `DigitalExperienceMonitoringFleetStatusOverTimeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InterconnectEntity

```php
$interconnect = $client->Interconnect();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Interconnect()->load(["account_id" => "account_id", "icon" => "icon"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Interconnect()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InterconnectEntity`

Create a new `InterconnectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IpProfileEntity

```php
$ip_profile = $client->IpProfile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | An optional description of the Device IP profile. |
| `enabled` | `bool` | No | Whether the Device IP profile will be applied to matching devices. |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `match` | `string` | Yes | The wirefilter expression to match registrations. |
| `messages` | `array` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for the Device IP profile. |
| `precedence` | `int` | Yes | The precedence of the Device IP profile. |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `subnet_id` | `string` | Yes | The ID of the Subnet. |
| `success` | `bool` | Yes | Whether the API call was successful. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IpProfile()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "match" => null, // string
  "messages" => null, // array
  "name" => null, // string
  "precedence" => null, // int
  "result" => null, // array
  "result_info" => null, // array
  "subnet_id" => null, // string
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IpProfile()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IpProfile()->load(["id" => "ip_profile_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->IpProfile()->remove(["id" => "ip_profile_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IpProfile()->update([
  "id" => "ip_profile_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IpProfileEntity`

Create a new `IpProfileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListEntity

```php
$list = $client->List();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->List()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListEntity`

Create a new `ListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LocationEntity

```php
$location = $client->Location();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Location()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LocationEntity`

Create a new `LocationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NscCniEntity

```php
$nsc_cni = $client->NscCni();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | Customer account tag |
| `bgp` | `array` | Yes |  |
| `bgp_mode` | `string` | No | The BGP mode for a CNI. |
| `cust_ip` | `string` | Yes | Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`. |
| `id` | `string` | Yes |  |
| `interconnect` | `string` | Yes | Interconnect identifier hosting this CNI |
| `magic` | `array` | Yes |  |
| `p2p_ip` | `string` | Yes | Cloudflare end of the point-to-point link |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->NscCni()->create([
  "account_id" => null, // string
  "account" => null, // string
  "bgp" => null, // array
  "cust_ip" => null, // string
  "id" => null, // string
  "interconnect" => null, // string
  "magic" => null, // array
  "p2p_ip" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->NscCni()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NscCni()->load(["id" => "nsc_cni_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NscCni()->update([
  "id" => "nsc_cni_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NscCniEntity`

Create a new `NscCniEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NscDefaultNameEntity

```php
$nsc_default_name = $client->NscDefaultName();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The default customer name for the interconnect |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NscDefaultName()->load(["account_id" => "account_id", "interconnect_id" => "interconnect_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NscDefaultNameEntity`

Create a new `NscDefaultNameEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NscInterconnectEntity

```php
$nsc_interconnect = $client->NscInterconnect();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `array` | Yes |  |
| `next` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->NscInterconnect()->create([
  "account_id" => null, // string
  "items" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->NscInterconnect()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NscInterconnect()->load(["id" => "nsc_interconnect_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NscInterconnectEntity`

Create a new `NscInterconnectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NscSettingEntity

```php
$nsc_setting = $client->NscSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_asn` | `int` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `default_asn` | - | Yes |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NscSetting()->load(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NscSetting()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NscSettingEntity`

Create a new `NscSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NscSlotInfoEntity

```php
$nsc_slot_info = $client->NscSlotInfo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | Customer account tag |
| `address` | `array` | Yes |  |
| `ccr_device_name` | `string` | No |  |
| `facility` | `array` | Yes |  |
| `id` | `string` | Yes | Slot ID |
| `name` | `string` | Yes |  |
| `occupied` | `bool` | Yes | Whether the slot is occupied or not |
| `site` | `string` | Yes |  |
| `speed` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->NscSlotInfo()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NscSlotInfo()->load(["account_id" => "account_id", "slot" => "slot"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NscSlotInfoEntity`

Create a new `NscSlotInfoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NscStatusInfoEntity

```php
$nsc_status_info = $client->NscStatusInfo();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NscStatusInfo()->load(["account_id" => "account_id", "icon" => "icon"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NscStatusInfoEntity`

Create a new `NscStatusInfoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OverrideCodeEntity

```php
$override_code = $client->OverrideCode();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `device_id` | `string` | No | Physical device ID. |
| `duration_hours` | `int` | Yes | Number of hours for which the override code should remain valid. |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `scope` | `string` | Yes | Whether the code applies to every device in the account or one physical device. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `type` | `string` | Yes | The feature that the override code applies to. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OverrideCode()->create([
  "account_id" => null, // string
  "duration_hours" => null, // int
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "scope" => null, // string
  "success" => null, // bool
  "type" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OverrideCodeEntity`

Create a new `OverrideCodeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PacfileEntity

```php
$pacfile = $client->Pacfile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Pacfile()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PacfileEntity`

Create a new `PacfileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PhysicalDeviceEntity

```php
$physical_device = $client->PhysicalDevice();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes | A WARP Device. |
| `result_info` | `array` | Yes | V4 public API Pagination/Cursor info. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `tags` | `array` | No | Replaces all tags assigned to the physical device. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PhysicalDevice()->create([
  "account_id" => null, // string
  "id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "result_info" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PhysicalDevice()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PhysicalDevice()->load(["id" => "physical_device_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PhysicalDevice()->remove(["id" => "physical_device_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PhysicalDevice()->update([
  "id" => "physical_device_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PhysicalDeviceEntity`

Create a new `PhysicalDeviceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProxyEndpointEntity

```php
$proxy_endpoint = $client->ProxyEndpoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProxyEndpoint()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProxyEndpointEntity`

Create a new `ProxyEndpointEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RegistrationEntity

```php
$registration = $client->Registration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes | A WARP configuration tied to a single user. |
| `result_info` | `array` | Yes | V4 public API Pagination/Cursor info. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Registration()->create([
  "account_id" => null, // string
  "id" => null, // array
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "result_info" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Registration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Registration()->load(["id" => "registration_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Registration()->remove(["id" => "registration_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RegistrationEntity`

Create a new `RegistrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RuleEntity

```php
$rule = $client->Rule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Rule()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RuleEntity`

Create a new `RuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesApiResponseSingleEntity

```php
$teams_devices_api_response_single = $client->TeamsDevicesApiResponseSingle();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TeamsDevicesApiResponseSingle()->create([
  "account_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesApiResponseSingleEntity`

Create a new `TeamsDevicesApiResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesComponentsSchemasResponseCollectionEntity

```php
$teams_devices_components_schemas_response_collection = $client->TeamsDevicesComponentsSchemasResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TeamsDevicesComponentsSchemasResponseCollection()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesComponentsSchemasResponseCollection()->remove(["account_id" => "account_id", "network_id" => "network_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesComponentsSchemasResponseCollectionEntity`

Create a new `TeamsDevicesComponentsSchemasResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesComponentsSchemasSingleEntity

```php
$teams_devices_components_schemas_single = $client->TeamsDevicesComponentsSchemasSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `array` | Yes | The configuration object containing information for the WARP client to detect the managed network. |
| `name` | `string` | Yes | The name of the device managed network. |
| `result` | `array` | No |  |
| `type` | `string` | Yes | The type of device managed network. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `config` | - | - | Yes |
| `name` | - | - | Yes |
| `result` | - | - | - |
| `type` | - | - | Yes |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TeamsDevicesComponentsSchemasSingle()->create([
  "account_id" => null, // string
  "config" => null, // array
  "name" => null, // string
  "type" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesComponentsSchemasSingle()->load(["account_id" => "account_id", "network_id" => "network_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TeamsDevicesComponentsSchemasSingle()->update([
  "account_id" => "account_id",
  "network_id" => "network_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesComponentsSchemasSingleEntity`

Create a new `TeamsDevicesComponentsSchemasSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesDefaultDeviceSettingEntity

```php
$teams_devices_default_device_setting = $client->TeamsDevicesDefaultDeviceSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_mode_switch` | `bool` | No | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `bool` | No | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `bool` | No | Whether to allow devices to leave the organization. |
| `auto_connect` | `float` | No | The amount of time in seconds to reconnect after having been disabled. |
| `captive_portal` | `float` | No | Turn on the captive portal after the specified amount of time. |
| `disable_auto_fallback` | `bool` | No | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `array` | No | List of DNS search suffixes to apply to clients. |
| `exclude` | `array` | No | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `bool` | No | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `array` | Yes | Global Acceleration settings for China. |
| `include` | `array` | No | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `float` | No | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `float` | No | The size of the subnet for the local access network. |
| `register_interface_ip_with_dns` | `bool` | No | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `array` | No |  |
| `sccm_vpn_boundary_support` | `bool` | No | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `array` | No |  |
| `support_url` | `string` | No | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `bool` | No | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | No | Determines which tunnel protocol to use. |
| `uninstall_protection` | `bool` | No | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `array` | Yes | Virtual network access settings for the device. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesDefaultDeviceSetting()->load(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TeamsDevicesDefaultDeviceSetting()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesDefaultDeviceSettingEntity`

Create a new `TeamsDevicesDefaultDeviceSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesDeviceEntity

```php
$teams_devices_device = $client->TeamsDevicesDevice();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TeamsDevicesDevice()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesDevice()->load(["id" => "teams_devices_device_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesDeviceEntity`

Create a new `TeamsDevicesDeviceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesDeviceSettingEntity

```php
$teams_devices_device_setting = $client->TeamsDevicesDeviceSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_mode_switch` | `bool` | No | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `bool` | No | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `bool` | No | Whether to allow devices to leave the organization. |
| `auto_connect` | `float` | No | The amount of time in seconds to reconnect after having been disabled. |
| `browser_extension_config` | `array` | Yes | Browser extension proxy settings. |
| `captive_portal` | `float` | No | Turn on the captive portal after the specified amount of time. |
| `default` | `bool` | No | Whether the policy is the account default. |
| `description` | `string` | No | A description of the policy. |
| `disable_auto_fallback` | `bool` | No | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `array` | No | List of DNS search suffixes to apply to clients. |
| `enabled` | `bool` | No | Whether the policy will be applied to matching devices. |
| `exclude` | `array` | No | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `bool` | No | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `array` | Yes | Global Acceleration settings for China. |
| `include` | `array` | No | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `float` | No | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `float` | No | The size of the subnet for the local access network. |
| `match` | `string` | No | The wirefilter expression to match devices. |
| `name` | `string` | Yes | The name of the device settings profile. |
| `precedence` | `float` | No | The precedence of the policy. |
| `profile_type` | `string` | No | The client type to which the device settings profile applies. |
| `register_interface_ip_with_dns` | `bool` | No | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `array` | No |  |
| `sccm_vpn_boundary_support` | `bool` | No | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `array` | No |  |
| `support_url` | `string` | No | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `bool` | No | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | No | Determines which tunnel protocol to use. |
| `uninstall_protection` | `bool` | No | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `array` | Yes | Virtual network access settings for the device. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TeamsDevicesDeviceSetting()->create([
  "account_id" => null, // string
  "browser_extension_config" => null, // array
  "global_acceleration" => null, // array
  "name" => null, // string
  "virtual_networks" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesDeviceSetting()->load(["account_id" => "account_id", "policy_id" => "policy_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TeamsDevicesDeviceSetting()->update([
  "account_id" => "account_id",
  "policy_id" => "policy_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesDeviceSettingEntity`

Create a new `TeamsDevicesDeviceSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesDeviceSettingsResponseCollectionEntity

```php
$teams_devices_device_settings_response_collection = $client->TeamsDevicesDeviceSettingsResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TeamsDevicesDeviceSettingsResponseCollection()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesDeviceSettingsResponseCollection()->remove(["account_id" => "account_id", "policy_id" => "policy_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesDeviceSettingsResponseCollectionEntity`

Create a new `TeamsDevicesDeviceSettingsResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesFallbackDomainResponseCollectionEntity

```php
$teams_devices_fallback_domain_response_collection = $client->TeamsDevicesFallbackDomainResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TeamsDevicesFallbackDomainResponseCollection()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesFallbackDomainResponseCollection()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TeamsDevicesFallbackDomainResponseCollection()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesFallbackDomainResponseCollectionEntity`

Create a new `TeamsDevicesFallbackDomainResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesGlobalWarpOverrideEntity

```php
$teams_devices_global_warp_override = $client->TeamsDevicesGlobalWarpOverride();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disconnect` | `bool` | Yes | Disconnects all devices on the account using Global WARP override. |
| `justification` | `string` | No | Reasoning for setting the Global WARP override state. |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TeamsDevicesGlobalWarpOverride()->create([
  "account_id" => null, // string
  "disconnect" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesGlobalWarpOverride()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesGlobalWarpOverrideEntity`

Create a new `TeamsDevicesGlobalWarpOverrideEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesIdEntity

```php
$teams_devices_id = $client->TeamsDevicesId();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesId()->remove(["account_id" => "account_id", "rule_id" => "rule_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesIdEntity`

Create a new `TeamsDevicesIdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesOverrideCodeEntity

```php
$teams_devices_override_code = $client->TeamsDevicesOverrideCode();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesOverrideCode()->load(["account_id" => "account_id", "device_id" => "device_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesOverrideCodeEntity`

Create a new `TeamsDevicesOverrideCodeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesResponseCollectionEntity

```php
$teams_devices_response_collection = $client->TeamsDevicesResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TeamsDevicesResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesResponseCollectionEntity`

Create a new `TeamsDevicesResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesSchemasIdEntity

```php
$teams_devices_schemas_id = $client->TeamsDevicesSchemasId();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesSchemasId()->remove(["account_id" => "account_id", "integration_id" => "integration_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesSchemasIdEntity`

Create a new `TeamsDevicesSchemasIdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesSchemasResponseCollectionEntity

```php
$teams_devices_schemas_response_collection = $client->TeamsDevicesSchemasResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TeamsDevicesSchemasResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesSchemasResponseCollectionEntity`

Create a new `TeamsDevicesSchemasResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesSchemasSingleEntity

```php
$teams_devices_schemas_single = $client->TeamsDevicesSchemasSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `array` | Yes | The configuration object containing third-party integration information. |
| `interval` | `string` | Yes | The interval between each posture check with the third-party API. |
| `name` | `string` | Yes | The name of the device posture integration. |
| `result` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TeamsDevicesSchemasSingle()->create([
  "account_id" => null, // string
  "config" => null, // array
  "interval" => null, // string
  "name" => null, // string
  "type" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesSchemasSingle()->load(["account_id" => "account_id", "integration_id" => "integration_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TeamsDevicesSchemasSingle()->update([
  "account_id" => "account_id",
  "integration_id" => "integration_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesSchemasSingleEntity`

Create a new `TeamsDevicesSchemasSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesSingleEntity

```php
$teams_devices_single = $client->TeamsDevicesSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | The description of the device posture rule. |
| `expiration` | `string` | No | Sets the expiration time for a posture check result. |
| `input` | `array` | No | The value to be checked against. |
| `match` | `array` | No | The conditions that the client must match to run the rule. |
| `name` | `string` | Yes | The name of the device posture rule. |
| `result` | `array` | No |  |
| `schedule` | `string` | No | Polling frequency for the WARP client posture check. |
| `type` | `string` | Yes | The type of device posture rule. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TeamsDevicesSingle()->create([
  "account_id" => null, // string
  "name" => null, // string
  "type" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesSingle()->load(["account_id" => "account_id", "rule_id" => "rule_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TeamsDevicesSingle()->update([
  "account_id" => "account_id",
  "rule_id" => "rule_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesSingleEntity`

Create a new `TeamsDevicesSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesSplitTunnelIncludeResponseCollectionEntity

```php
$teams_devices_split_tunnel_include_response_collection = $client->TeamsDevicesSplitTunnelIncludeResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TeamsDevicesSplitTunnelIncludeResponseCollection()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TeamsDevicesSplitTunnelIncludeResponseCollection()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesSplitTunnelIncludeResponseCollectionEntity`

Create a new `TeamsDevicesSplitTunnelIncludeResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesSplitTunnelResponseCollectionEntity

```php
$teams_devices_split_tunnel_response_collection = $client->TeamsDevicesSplitTunnelResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TeamsDevicesSplitTunnelResponseCollection()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesSplitTunnelResponseCollection()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TeamsDevicesSplitTunnelResponseCollection()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesSplitTunnelResponseCollectionEntity`

Create a new `TeamsDevicesSplitTunnelResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamsDevicesZeroTrustAccountDeviceSettingEntity

```php
$teams_devices_zero_trust_account_device_setting = $client->TeamsDevicesZeroTrustAccountDeviceSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disable_for_time` | `float` | No | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| `external_emergency_signal_enabled` | `bool` | No | Controls whether the external emergency disconnect feature is enabled. |
| `external_emergency_signal_fingerprint` | `string` | No | The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. |
| `external_emergency_signal_interval` | `string` | No | The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). |
| `external_emergency_signal_url` | `string` | No | The HTTPS URL from which to fetch the emergency disconnect signal. |
| `gateway_proxy_enabled` | `bool` | No | Enable gateway proxy filtering on TCP. |
| `gateway_udp_proxy_enabled` | `bool` | No | Enable gateway proxy filtering on UDP. |
| `result` | `array` | No |  |
| `root_certificate_installation_enabled` | `bool` | No | Enable installation of cloudflare managed root certificate. |
| `use_zt_virtual_ip` | `bool` | No | Enable using CGNAT virtual IPv4. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesZeroTrustAccountDeviceSetting()->load(["account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TeamsDevicesZeroTrustAccountDeviceSetting()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TeamsDevicesZeroTrustAccountDeviceSetting()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamsDevicesZeroTrustAccountDeviceSettingEntity`

Create a new `TeamsDevicesZeroTrustAccountDeviceSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelEntity

```php
$tunnel = $client->Tunnel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Tunnel()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelEntity`

Create a new `TunnelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelCfdTunnelResponseCollectionEntity

```php
$tunnel_cfd_tunnel_response_collection = $client->TunnelCfdTunnelResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TunnelCfdTunnelResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelCfdTunnelResponseCollectionEntity`

Create a new `TunnelCfdTunnelResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelCfdTunnelResponseSingleEntity

```php
$tunnel_cfd_tunnel_response_single = $client->TunnelCfdTunnelResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config_src` | `string` | No | Indicates if this is a locally or remotely configured tunnel. |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for a tunnel. |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TunnelCfdTunnelResponseSingle()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "name" => null, // string
  "result" => null, // string
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelCfdTunnelResponseSingle()->load(["account_id" => "account_id", "tunnel_id" => "tunnel_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelCfdTunnelResponseSingle()->remove(["account_id" => "account_id", "tunnel_id" => "tunnel_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TunnelCfdTunnelResponseSingle()->update([
  "account_id" => "account_id",
  "tunnel_id" => "tunnel_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelCfdTunnelResponseSingleEntity`

Create a new `TunnelCfdTunnelResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelConfigurationEntity

```php
$tunnel_configuration = $client->TunnelConfiguration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `array` | No | The tunnel configuration and ingress rules. |
| `result` | `array` | No | Cloudflare Tunnel configuration |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelConfiguration()->load(["account_id" => "account_id", "cfd_tunnel_id" => "cfd_tunnel_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TunnelConfiguration()->update([
  "account_id" => "account_id",
  "cfd_tunnel_id" => "cfd_tunnel_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelConfigurationEntity`

Create a new `TunnelConfigurationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelEmptyEntity

```php
$tunnel_empty = $client->TunnelEmpty();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `string` | Yes | UUID of the Cloudflare Tunnel connector. |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelEmpty()->remove(["account_id" => "account_id", "cfd_tunnel_id" => "cfd_tunnel_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TunnelEmpty()->update([
  "account_id" => "account_id",
  "warp_connector_id" => "warp_connector_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelEmptyEntity`

Create a new `TunnelEmptyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelHostnameRouteResponseCollectionEntity

```php
$tunnel_hostname_route_response_collection = $client->TunnelHostnameRouteResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TunnelHostnameRouteResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelHostnameRouteResponseCollectionEntity`

Create a new `TunnelHostnameRouteResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelHostnameRouteResponseSingleEntity

```php
$tunnel_hostname_route_response_single = $client->TunnelHostnameRouteResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | An optional description of the hostname route. |
| `errors` | `array` | Yes |  |
| `hostname` | `string` | No | The hostname of the route. |
| `messages` | `array` | Yes |  |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TunnelHostnameRouteResponseSingle()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // string
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelHostnameRouteResponseSingle()->load(["account_id" => "account_id", "hostname_route_id" => "hostname_route_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelHostnameRouteResponseSingle()->remove(["account_id" => "account_id", "hostname_route_id" => "hostname_route_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TunnelHostnameRouteResponseSingle()->update([
  "account_id" => "account_id",
  "hostname_route_id" => "hostname_route_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelHostnameRouteResponseSingleEntity`

Create a new `TunnelHostnameRouteResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelMeshConfigurationResponseSingleEntity

```php
$tunnel_mesh_configuration_response_single = $client->TunnelMeshConfigurationResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `array` | No | Provider-specific configuration. |
| `ha_mode` | `string` | Yes | High-availability mode for the WARP Connector tunnel. |
| `result` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelMeshConfigurationResponseSingle()->load(["account_id" => "account_id", "warp_connector_id" => "warp_connector_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TunnelMeshConfigurationResponseSingle()->update([
  "account_id" => "account_id",
  "warp_connector_id" => "warp_connector_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelMeshConfigurationResponseSingleEntity`

Create a new `TunnelMeshConfigurationResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelRouteResponseSingleEntity

```php
$tunnel_route_response_single = $client->TunnelRouteResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Optional remark describing the route. |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `network` | `string` | Yes | The private IPv4 or IPv6 range connected by the route, in CIDR notation. |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TunnelRouteResponseSingle()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "network" => null, // string
  "result" => null, // string
  "success" => null, // bool
  "tunnel_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelRouteResponseSingle()->load(["account_id" => "account_id", "route_id" => "route_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelRouteResponseSingle()->remove(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TunnelRouteResponseSingle()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelRouteResponseSingleEntity`

Create a new `TunnelRouteResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelSubnetResponseCollectionEntity

```php
$tunnel_subnet_response_collection = $client->TunnelSubnetResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TunnelSubnetResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelSubnetResponseCollectionEntity`

Create a new `TunnelSubnetResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelSubnetResponseSingleEntity

```php
$tunnel_subnet_response_single = $client->TunnelSubnetResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | An optional description of the subnet. |
| `errors` | `array` | Yes |  |
| `is_default_network` | `bool` | No | If `true`, this is the default subnet for the account. |
| `messages` | `array` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for the subnet. |
| `network` | `string` | Yes | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TunnelSubnetResponseSingle()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "name" => null, // string
  "network" => null, // string
  "result" => null, // string
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelSubnetResponseSingle()->load(["account_id" => "account_id", "address_family" => "address_family"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TunnelSubnetResponseSingle()->update([
  "account_id" => "account_id",
  "address_family" => "address_family",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelSubnetResponseSingleEntity`

Create a new `TunnelSubnetResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelSubnetResponseSingleNullableEntity

```php
$tunnel_subnet_response_single_nullable = $client->TunnelSubnetResponseSingleNullable();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelSubnetResponseSingleNullable()->remove(["account_id" => "account_id", "subnet_id" => "subnet_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelSubnetResponseSingleNullableEntity`

Create a new `TunnelSubnetResponseSingleNullableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelTeamnetResponseCollectionEntity

```php
$tunnel_teamnet_response_collection = $client->TunnelTeamnetResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TunnelTeamnetResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelTeamnetResponseCollectionEntity`

Create a new `TunnelTeamnetResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelTeamnetResponseSingleEntity

```php
$tunnel_teamnet_response_single = $client->TunnelTeamnetResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelTeamnetResponseSingle()->load(["account_id" => "account_id", "ip" => "ip"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelTeamnetResponseSingleEntity`

Create a new `TunnelTeamnetResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelTunnelClientEntity

```php
$tunnel_tunnel_client = $client->TunnelTunnelClient();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelTunnelClient()->load(["account_id" => "account_id", "cfd_tunnel_id" => "cfd_tunnel_id", "connector_id" => "connector_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelTunnelClientEntity`

Create a new `TunnelTunnelClientEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelTunnelConnectionEntity

```php
$tunnel_tunnel_connection = $client->TunnelTunnelConnection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TunnelTunnelConnection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelTunnelConnectionEntity`

Create a new `TunnelTunnelConnectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelTunnelResponseTokenEntity

```php
$tunnel_tunnel_response_token = $client->TunnelTunnelResponseToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `resources` | `array` | Yes |  |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `resources` | - | - |
| `result` | Yes | - |
| `success` | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TunnelTunnelResponseToken()->create([
  "account_id" => null, // string
  "cfd_tunnel_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "resources" => null, // array
  "result" => null, // string
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TunnelTunnelResponseToken()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelTunnelResponseTokenEntity`

Create a new `TunnelTunnelResponseTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelTunnelWarpConnectorClientEntity

```php
$tunnel_tunnel_warp_connector_client = $client->TunnelTunnelWarpConnectorClient();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelTunnelWarpConnectorClient()->load(["account_id" => "account_id", "connector_id" => "connector_id", "warp_connector_id" => "warp_connector_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelTunnelWarpConnectorClientEntity`

Create a new `TunnelTunnelWarpConnectorClientEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelTunnelWarpConnectorConnectionEntity

```php
$tunnel_tunnel_warp_connector_connection = $client->TunnelTunnelWarpConnectorConnection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TunnelTunnelWarpConnectorConnection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelTunnelWarpConnectorConnectionEntity`

Create a new `TunnelTunnelWarpConnectorConnectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelVnetResponseCollectionEntity

```php
$tunnel_vnet_response_collection = $client->TunnelVnetResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TunnelVnetResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelVnetResponseCollectionEntity`

Create a new `TunnelVnetResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelVnetResponseSingleEntity

```php
$tunnel_vnet_response_single = $client->TunnelVnetResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Optional remark describing the virtual network. |
| `is_default` | `bool` | No | If `true`, this virtual network is the default for the account. |
| `is_default_network` | `bool` | No | If `true`, this virtual network is the default for the account. |
| `name` | `string` | No | A user-friendly name for the virtual network. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `comment` | - | - | - | - |
| `is_default` | - | - | - | - |
| `is_default_network` | - | - | - | - |
| `name` | - | Yes | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TunnelVnetResponseSingle()->create([
  "account_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelVnetResponseSingle()->load(["account_id" => "account_id", "virtual_network_id" => "virtual_network_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelVnetResponseSingle()->remove(["account_id" => "account_id", "virtual_network_id" => "virtual_network_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TunnelVnetResponseSingle()->update([
  "account_id" => "account_id",
  "virtual_network_id" => "virtual_network_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelVnetResponseSingleEntity`

Create a new `TunnelVnetResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelWarpConnectorResponseCollectionEntity

```php
$tunnel_warp_connector_response_collection = $client->TunnelWarpConnectorResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TunnelWarpConnectorResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelWarpConnectorResponseCollectionEntity`

Create a new `TunnelWarpConnectorResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelWarpConnectorResponseSingleEntity

```php
$tunnel_warp_connector_response_single = $client->TunnelWarpConnectorResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `ha` | `bool` | No | Indicates that the tunnel will be created to be highly available. |
| `messages` | `array` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for a tunnel. |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TunnelWarpConnectorResponseSingle()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "name" => null, // string
  "result" => null, // string
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelWarpConnectorResponseSingle()->load(["account_id" => "account_id", "tunnel_id" => "tunnel_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TunnelWarpConnectorResponseSingle()->remove(["account_id" => "account_id", "tunnel_id" => "tunnel_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TunnelWarpConnectorResponseSingle()->update([
  "account_id" => "account_id",
  "tunnel_id" => "tunnel_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelWarpConnectorResponseSingleEntity`

Create a new `TunnelWarpConnectorResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TunnelZeroTrustConnectivitySettingEntity

```php
$tunnel_zero_trust_connectivity_setting = $client->TunnelZeroTrustConnectivitySetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `icmp_proxy_enabled` | `bool` | No | A flag to enable the ICMP proxy for the account network. |
| `messages` | `array` | Yes |  |
| `offramp_warp_enabled` | `bool` | No | A flag to enable WARP to WARP traffic. |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TunnelZeroTrustConnectivitySetting()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TunnelZeroTrustConnectivitySetting()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TunnelZeroTrustConnectivitySettingEntity`

Create a new `TunnelZeroTrustConnectivitySettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WarpEntity

```php
$warp = $client->Warp();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | An optional description of the subnet. |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `is_default_network` | `bool` | No | If `true`, this is the default subnet for the account. |
| `messages` | `array` | Yes |  |
| `name` | `string` | No | A user-friendly name for the subnet. |
| `network` | `string` | No | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `string` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Warp()->load(["id" => "warp_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Warp()->update([
  "id" => "warp_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WarpEntity`

Create a new `WarpEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WarpChangeEventEntity

```php
$warp_change_event = $client->WarpChangeEvent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WarpChangeEvent()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WarpChangeEventEntity`

Create a new `WarpChangeEventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WarpTeamsDeviceApiOtherEntity

```php
$warp_teams_device_api_other = $client->WarpTeamsDeviceApiOther();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `mixed` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WarpTeamsDeviceApiOther()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WarpTeamsDeviceApiOtherEntity`

Create a new `WarpTeamsDeviceApiOtherEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayApplicationsReviewStatusEntity

```php
$zero_trust_gateway_applications_review_status = $client->ZeroTrustGatewayApplicationsReviewStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_apps` | `array` | Yes | Contains the ids of the approved applications. |
| `in_review_apps` | `array` | Yes | Contains the ids of the applications in review. |
| `result` | `array` | No |  |
| `unapproved_apps` | `array` | Yes | Contains the ids of the unapproved applications. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewayApplicationsReviewStatus()->load(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZeroTrustGatewayApplicationsReviewStatus()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayApplicationsReviewStatusEntity`

Create a new `ZeroTrustGatewayApplicationsReviewStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayCsvOperationSingleEntity

```php
$zero_trust_gateway_csv_operation_single = $client->ZeroTrustGatewayCsvOperationSingle();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ZeroTrustGatewayCsvOperationSingle()->create([
  "account_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayCsvOperationSingleEntity`

Create a new `ZeroTrustGatewayCsvOperationSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayCustomCertificateSettingEntity

```php
$zero_trust_gateway_custom_certificate_setting = $client->ZeroTrustGatewayCustomCertificateSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `binding_status` | `string` | No | Indicate the internal certificate status. |
| `enabled` | `bool` | Yes | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| `id` | `string` | No | Specify the UUID of the certificate (ID from MTLS certificate store). |
| `updated_at` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewayCustomCertificateSetting()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayCustomCertificateSettingEntity`

Create a new `ZeroTrustGatewayCustomCertificateSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountEntity

```php
$zero_trust_gateway_gateway_account = $client->ZeroTrustGatewayGatewayAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ZeroTrustGatewayGatewayAccount()->create([
  "account_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewayGatewayAccount()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayGatewayAccountEntity`

Create a new `ZeroTrustGatewayGatewayAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountConfigEntity

```php
$zero_trust_gateway_gateway_account_config = $client->ZeroTrustGatewayGatewayAccountConfig();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |
| `settings` | `array` | No | Specify account settings. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewayGatewayAccountConfig()->load(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZeroTrustGatewayGatewayAccountConfig()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayGatewayAccountConfigEntity`

Create a new `ZeroTrustGatewayGatewayAccountConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity

```php
$zero_trust_gateway_gateway_account_egress_cidr_pair_list = $client->ZeroTrustGatewayGatewayAccountEgressCidrPairList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZeroTrustGatewayGatewayAccountEgressCidrPairList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity`

Create a new `ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountLoggingSettingEntity

```php
$zero_trust_gateway_gateway_account_logging_setting = $client->ZeroTrustGatewayGatewayAccountLoggingSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redact_pii` | `bool` | No | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `result` | `array` | No |  |
| `settings_by_rule_type` | `array` | No | Configure logging settings for each rule type. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewayGatewayAccountLoggingSetting()->load(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZeroTrustGatewayGatewayAccountLoggingSetting()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayGatewayAccountLoggingSettingEntity`

Create a new `ZeroTrustGatewayGatewayAccountLoggingSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayListItemResponseCollectionEntity

```php
$zero_trust_gateway_list_item_response_collection = $client->ZeroTrustGatewayListItemResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No | Provide the list items. |
| `result_info` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZeroTrustGatewayListItemResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayListItemResponseCollectionEntity`

Create a new `ZeroTrustGatewayListItemResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayListSingleEntity

```php
$zero_trust_gateway_list_single = $client->ZeroTrustGatewayListSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `append` | `array` | No | Add items to the list. |
| `description` | `string` | No | Provide the list description. |
| `items` | `array` | No | Add items to the list. |
| `name` | `string` | Yes | Specify the list name. |
| `remove` | `array` | No | Lists of item values you want to remove. |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewayListSingle()->load(["account_id" => "account_id", "list_id" => "list_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZeroTrustGatewayListSingle()->update([
  "account_id" => "account_id",
  "list_id" => "list_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayListSingleEntity`

Create a new `ZeroTrustGatewayListSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollectionEntity

```php
$zero_trust_gateway_response_collection = $client->ZeroTrustGatewayResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZeroTrustGatewayResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayResponseCollectionEntity`

Create a new `ZeroTrustGatewayResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection10Entity

```php
$zero_trust_gateway_response_collection_10 = $client->ZeroTrustGatewayResponseCollection10();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |
| `result_info` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZeroTrustGatewayResponseCollection10()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayResponseCollection10Entity`

Create a new `ZeroTrustGatewayResponseCollection10Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection2Entity

```php
$zero_trust_gateway_response_collection_2 = $client->ZeroTrustGatewayResponseCollection2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZeroTrustGatewayResponseCollection2()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayResponseCollection2Entity`

Create a new `ZeroTrustGatewayResponseCollection2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection3Entity

```php
$zero_trust_gateway_response_collection_3 = $client->ZeroTrustGatewayResponseCollection3();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZeroTrustGatewayResponseCollection3()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayResponseCollection3Entity`

Create a new `ZeroTrustGatewayResponseCollection3Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection4Entity

```php
$zero_trust_gateway_response_collection_4 = $client->ZeroTrustGatewayResponseCollection4();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZeroTrustGatewayResponseCollection4()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayResponseCollection4Entity`

Create a new `ZeroTrustGatewayResponseCollection4Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection5Entity

```php
$zero_trust_gateway_response_collection_5 = $client->ZeroTrustGatewayResponseCollection5();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZeroTrustGatewayResponseCollection5()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayResponseCollection5Entity`

Create a new `ZeroTrustGatewayResponseCollection5Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection6Entity

```php
$zero_trust_gateway_response_collection_6 = $client->ZeroTrustGatewayResponseCollection6();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZeroTrustGatewayResponseCollection6()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZeroTrustGatewayResponseCollection6()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayResponseCollection6Entity`

Create a new `ZeroTrustGatewayResponseCollection6Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection7Entity

```php
$zero_trust_gateway_response_collection_7 = $client->ZeroTrustGatewayResponseCollection7();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZeroTrustGatewayResponseCollection7()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayResponseCollection7Entity`

Create a new `ZeroTrustGatewayResponseCollection7Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection8Entity

```php
$zero_trust_gateway_response_collection_8 = $client->ZeroTrustGatewayResponseCollection8();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZeroTrustGatewayResponseCollection8()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayResponseCollection8Entity`

Create a new `ZeroTrustGatewayResponseCollection8Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection9Entity

```php
$zero_trust_gateway_response_collection_9 = $client->ZeroTrustGatewayResponseCollection9();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZeroTrustGatewayResponseCollection9()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewayResponseCollection9Entity`

Create a new `ZeroTrustGatewayResponseCollection9Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewaySingleEntity

```php
$zero_trust_gateway_single = $client->ZeroTrustGatewaySingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |
| `validity_period_days` | `int` | No | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingle()->create([
  "account_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingle()->load(["account_id" => "account_id", "certificate_id" => "certificate_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingle()->remove(["account_id" => "account_id", "certificate_id" => "certificate_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewaySingleEntity`

Create a new `ZeroTrustGatewaySingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse2Entity

```php
$zero_trust_gateway_single_response_2 = $client->ZeroTrustGatewaySingleResponse2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse2()->load(["account_id" => "account_id", "operation_id" => "operation_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewaySingleResponse2Entity`

Create a new `ZeroTrustGatewaySingleResponse2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse3Entity

```php
$zero_trust_gateway_single_response_3 = $client->ZeroTrustGatewaySingleResponse3();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_default` | `bool` | No | Indicate whether this location is the default location. |
| `dns_destination_ips_id` | `string` | No | Specify the identifier of the pair of IPv4 addresses assigned to this location. |
| `ecs_support` | `bool` | No | Indicate whether the location must resolve EDNS queries. |
| `endpoints` | `array` | Yes | Configure the destination endpoints for this location. |
| `max_ttl` | `array` | Yes | Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. |
| `name` | `string` | Yes | Specify the location name. |
| `networks` | `array` | No | Specify the list of network ranges from which requests at this location originate. |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse3()->create([
  "account_id" => null, // string
  "endpoints" => null, // array
  "max_ttl" => null, // array
  "name" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse3()->load(["account_id" => "account_id", "location_id" => "location_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse3()->update([
  "account_id" => "account_id",
  "location_id" => "location_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewaySingleResponse3Entity`

Create a new `ZeroTrustGatewaySingleResponse3Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse4Entity

```php
$zero_trust_gateway_single_response_4 = $client->ZeroTrustGatewaySingleResponse4();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`. |
| `description` | `string` | No | Specify the rule description. |
| `device_posture` | `string` | No | Specify the wirefilter expression used for device posture check. |
| `enabled` | `bool` | No | Specify whether the rule is enabled. |
| `expiration` | `array` | Yes | Defines the expiration time stamp and default duration of a DNS policy. |
| `filters` | `array` | No | Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| `identity` | `string` | No | Specify the wirefilter expression used for identity matching. |
| `name` | `string` | Yes | Specify the rule name. |
| `precedence` | `int` | No | Set the order of your rules. |
| `result` | `array` | Yes |  |
| `rule_settings` | `array` | No | Defines settings for this rule. |
| `schedule` | `array` | No | Defines the schedule for activating DNS policies. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse4()->create([
  "account_id" => null, // string
  "action" => null, // string
  "expiration" => null, // array
  "name" => null, // string
  "result" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse4()->load(["account_id" => "account_id", "rule_id" => "rule_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse4()->update([
  "account_id" => "account_id",
  "rule_id" => "rule_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewaySingleResponse4Entity`

Create a new `ZeroTrustGatewaySingleResponse4Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse5Entity

```php
$zero_trust_gateway_single_response_5 = $client->ZeroTrustGatewaySingleResponse5();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ips` | `array` | No | Specify the list of CIDRs to restrict ingress connections. |
| `kind` | `string` | No | The proxy endpoint kind. |
| `name` | `string` | No | Specify the name of the proxy endpoint. |
| `result` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse5()->create([
  "account_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse5()->load(["account_id" => "account_id", "proxy_endpoint_id" => "proxy_endpoint_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse5()->update([
  "account_id" => "account_id",
  "proxy_endpoint_id" => "proxy_endpoint_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewaySingleResponse5Entity`

Create a new `ZeroTrustGatewaySingleResponse5Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse6Entity

```php
$zero_trust_gateway_single_response_6 = $client->ZeroTrustGatewaySingleResponse6();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `public_key` | `string` | Yes | Provide the Base64-encoded HPKE public key that encrypts SSH session logs. |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse6()->create([
  "account_id" => null, // string
  "public_key" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse6()->load(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse6()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewaySingleResponse6Entity`

Create a new `ZeroTrustGatewaySingleResponse6Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse7Entity

```php
$zero_trust_gateway_single_response_7 = $client->ZeroTrustGatewaySingleResponse7();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contents` | `string` | Yes | Actual contents of the PAC file |
| `description` | `string` | No | Detailed description of the PAC file. |
| `name` | `string` | Yes | Name of the PAC file. |
| `result` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse7()->create([
  "account_id" => null, // string
  "contents" => null, // string
  "name" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse7()->load(["account_id" => "account_id", "pacfile_id" => "pacfile_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponse7()->update([
  "account_id" => "account_id",
  "pacfile_id" => "pacfile_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewaySingleResponse7Entity`

Create a new `ZeroTrustGatewaySingleResponse7Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponseWithListItemEntity

```php
$zero_trust_gateway_single_response_with_list_item = $client->ZeroTrustGatewaySingleResponseWithListItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Provide the list description. |
| `items` | `array` | No | Add items to the list. |
| `name` | `string` | Yes | Specify the list name. |
| `type` | `string` | Yes | Specify the list type. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ZeroTrustGatewaySingleResponseWithListItem()->create([
  "account_id" => null, // string
  "name" => null, // string
  "type" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustGatewaySingleResponseWithListItemEntity`

Create a new `ZeroTrustGatewaySingleResponseWithListItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustRiskScoringEntity

```php
$zero_trust_risk_scoring = $client->ZeroTrustRiskScoring();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `behaviors` | `array` | Yes |  |
| `result` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ZeroTrustRiskScoring()->create([
  "account_id" => null, // string
  "zt_risk_scoring_id" => null, // string
  "behaviors" => null, // array
  "result" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustRiskScoring()->load(["account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZeroTrustRiskScoring()->update([
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustRiskScoringEntity`

Create a new `ZeroTrustRiskScoringEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZeroTrustRiskScoringIntegrationEntity

```php
$zero_trust_risk_scoring_integration = $client->ZeroTrustRiskScoringIntegration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether this integration is enabled. |
| `id` | `string` | No |  |
| `integration_type` | `string` | Yes |  |
| `reference_id` | `string` | No | A reference id that can be supplied by the client. |
| `result` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ZeroTrustRiskScoringIntegration()->create([
  "account_id" => null, // string
  "active" => null, // bool
  "integration_type" => null, // string
  "result" => null, // array
  "tenant_url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZeroTrustRiskScoringIntegration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustRiskScoringIntegration()->load(["id" => "zero_trust_risk_scoring_integration_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ZeroTrustRiskScoringIntegration()->remove(["id" => "zero_trust_risk_scoring_integration_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZeroTrustRiskScoringIntegration()->update([
  "id" => "zero_trust_risk_scoring_integration_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZeroTrustRiskScoringIntegrationEntity`

Create a new `ZeroTrustRiskScoringIntegrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```php
$client = new CloudflareZeroTrustSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
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

