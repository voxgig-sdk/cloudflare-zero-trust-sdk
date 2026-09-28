# CloudflareZeroTrust PHP SDK



The PHP SDK for the CloudflareZeroTrust API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->ClientVersion()` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-zero-trust-sdk/releases](https://github.com/voxgig-sdk/cloudflare-zero-trust-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'cloudflarezerotrust_sdk.php';

$client = new CloudflareZeroTrustSDK([
    "apikey" => getenv("CLOUDFLARE_ZERO_TRUST_APIKEY"),
]);
```

### 2. List clientversion records

```php
try {
    // list() returns entity instances; data_get() reads each record.
    $clientversions = $client->ClientVersion()->list();
    foreach ($clientversions as $record) {
        $item = $record->data_get();
        echo $item["errors"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load a nscdefaultname

NscDefaultName is nested under account, so provide the `account_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the NscDefaultName record (throws on error).
    $nscdefaultname = $client->NscDefaultName()->load(["account_id" => "example_account_id", "interconnect_id" => "example_interconnect_id"]);
    print_r($nscdefaultname->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $zerotrustgatewaysingleresponse6 = $client->ZeroTrustGatewaySingleResponse6()->load(["account_id" => "example"]);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = CloudflareZeroTrustSDK::test([
    "entity" => ["physicaldevice" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$physicaldevice = $client->PhysicalDevice()->list();
print_r(array_map(fn($item) => $item->data_get(), $physicaldevice));
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CloudflareZeroTrustSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE
CLOUDFLARE_ZERO_TRUST_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CloudflareZeroTrustSDK

```php
require_once 'cloudflarezerotrust_sdk.php';
$client = new CloudflareZeroTrustSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CloudflareZeroTrustSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CloudflareZeroTrustSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `ClientVersion` | `($data): ClientVersionEntity` | Create a ClientVersion entity instance. |
| `Cni` | `($data): CniEntity` | Create a Cni entity instance. |
| `DeploymentGroup` | `($data): DeploymentGroupEntity` | Create a DeploymentGroup entity instance. |
| `DexRemoteCommand` | `($data): DexRemoteCommandEntity` | Create a DexRemoteCommand entity instance. |
| `DexRule` | `($data): DexRuleEntity` | Create a DexRule entity instance. |
| `DexSyntheticApplicationMonitoring` | `($data): DexSyntheticApplicationMonitoringEntity` | Create a DexSyntheticApplicationMonitoring entity instance. |
| `DigitalExperienceMonitoringDevice` | `($data): DigitalExperienceMonitoringDeviceEntity` | Create a DigitalExperienceMonitoringDevice entity instance. |
| `DigitalExperienceMonitoringDexDeleteResponseCollection` | `($data): DigitalExperienceMonitoringDexDeleteResponseCollectionEntity` | Create a DigitalExperienceMonitoringDexDeleteResponseCollection entity instance. |
| `DigitalExperienceMonitoringDexResponseCollection` | `($data): DigitalExperienceMonitoringDexResponseCollectionEntity` | Create a DigitalExperienceMonitoringDexResponseCollection entity instance. |
| `DigitalExperienceMonitoringDexSingle` | `($data): DigitalExperienceMonitoringDexSingleEntity` | Create a DigitalExperienceMonitoringDexSingle entity instance. |
| `DigitalExperienceMonitoringFleetStatusDevice` | `($data): DigitalExperienceMonitoringFleetStatusDeviceEntity` | Create a DigitalExperienceMonitoringFleetStatusDevice entity instance. |
| `DigitalExperienceMonitoringFleetStatusLive` | `($data): DigitalExperienceMonitoringFleetStatusLiveEntity` | Create a DigitalExperienceMonitoringFleetStatusLive entity instance. |
| `DigitalExperienceMonitoringFleetStatusOverTime` | `($data): DigitalExperienceMonitoringFleetStatusOverTimeEntity` | Create a DigitalExperienceMonitoringFleetStatusOverTime entity instance. |
| `Interconnect` | `($data): InterconnectEntity` | Create an Interconnect entity instance. |
| `IpProfile` | `($data): IpProfileEntity` | Create an IpProfile entity instance. |
| `List` | `($data): ListEntity` | Create a List entity instance. |
| `Location` | `($data): LocationEntity` | Create a Location entity instance. |
| `NscCni` | `($data): NscCniEntity` | Create a NscCni entity instance. |
| `NscDefaultName` | `($data): NscDefaultNameEntity` | Create a NscDefaultName entity instance. |
| `NscInterconnect` | `($data): NscInterconnectEntity` | Create a NscInterconnect entity instance. |
| `NscSetting` | `($data): NscSettingEntity` | Create a NscSetting entity instance. |
| `NscSlotInfo` | `($data): NscSlotInfoEntity` | Create a NscSlotInfo entity instance. |
| `NscStatusInfo` | `($data): NscStatusInfoEntity` | Create a NscStatusInfo entity instance. |
| `OverrideCode` | `($data): OverrideCodeEntity` | Create an OverrideCode entity instance. |
| `Pacfile` | `($data): PacfileEntity` | Create a Pacfile entity instance. |
| `PhysicalDevice` | `($data): PhysicalDeviceEntity` | Create a PhysicalDevice entity instance. |
| `ProxyEndpoint` | `($data): ProxyEndpointEntity` | Create a ProxyEndpoint entity instance. |
| `Registration` | `($data): RegistrationEntity` | Create a Registration entity instance. |
| `Rule` | `($data): RuleEntity` | Create a Rule entity instance. |
| `TeamsDevicesApiResponseSingle` | `($data): TeamsDevicesApiResponseSingleEntity` | Create a TeamsDevicesApiResponseSingle entity instance. |
| `TeamsDevicesComponentsSchemasResponseCollection` | `($data): TeamsDevicesComponentsSchemasResponseCollectionEntity` | Create a TeamsDevicesComponentsSchemasResponseCollection entity instance. |
| `TeamsDevicesComponentsSchemasSingle` | `($data): TeamsDevicesComponentsSchemasSingleEntity` | Create a TeamsDevicesComponentsSchemasSingle entity instance. |
| `TeamsDevicesDefaultDeviceSetting` | `($data): TeamsDevicesDefaultDeviceSettingEntity` | Create a TeamsDevicesDefaultDeviceSetting entity instance. |
| `TeamsDevicesDevice` | `($data): TeamsDevicesDeviceEntity` | Create a TeamsDevicesDevice entity instance. |
| `TeamsDevicesDeviceSetting` | `($data): TeamsDevicesDeviceSettingEntity` | Create a TeamsDevicesDeviceSetting entity instance. |
| `TeamsDevicesDeviceSettingsResponseCollection` | `($data): TeamsDevicesDeviceSettingsResponseCollectionEntity` | Create a TeamsDevicesDeviceSettingsResponseCollection entity instance. |
| `TeamsDevicesFallbackDomainResponseCollection` | `($data): TeamsDevicesFallbackDomainResponseCollectionEntity` | Create a TeamsDevicesFallbackDomainResponseCollection entity instance. |
| `TeamsDevicesGlobalWarpOverride` | `($data): TeamsDevicesGlobalWarpOverrideEntity` | Create a TeamsDevicesGlobalWarpOverride entity instance. |
| `TeamsDevicesId` | `($data): TeamsDevicesIdEntity` | Create a TeamsDevicesId entity instance. |
| `TeamsDevicesOverrideCode` | `($data): TeamsDevicesOverrideCodeEntity` | Create a TeamsDevicesOverrideCode entity instance. |
| `TeamsDevicesResponseCollection` | `($data): TeamsDevicesResponseCollectionEntity` | Create a TeamsDevicesResponseCollection entity instance. |
| `TeamsDevicesSchemasId` | `($data): TeamsDevicesSchemasIdEntity` | Create a TeamsDevicesSchemasId entity instance. |
| `TeamsDevicesSchemasResponseCollection` | `($data): TeamsDevicesSchemasResponseCollectionEntity` | Create a TeamsDevicesSchemasResponseCollection entity instance. |
| `TeamsDevicesSchemasSingle` | `($data): TeamsDevicesSchemasSingleEntity` | Create a TeamsDevicesSchemasSingle entity instance. |
| `TeamsDevicesSingle` | `($data): TeamsDevicesSingleEntity` | Create a TeamsDevicesSingle entity instance. |
| `TeamsDevicesSplitTunnelIncludeResponseCollection` | `($data): TeamsDevicesSplitTunnelIncludeResponseCollectionEntity` | Create a TeamsDevicesSplitTunnelIncludeResponseCollection entity instance. |
| `TeamsDevicesSplitTunnelResponseCollection` | `($data): TeamsDevicesSplitTunnelResponseCollectionEntity` | Create a TeamsDevicesSplitTunnelResponseCollection entity instance. |
| `TeamsDevicesZeroTrustAccountDeviceSetting` | `($data): TeamsDevicesZeroTrustAccountDeviceSettingEntity` | Create a TeamsDevicesZeroTrustAccountDeviceSetting entity instance. |
| `Tunnel` | `($data): TunnelEntity` | Create a Tunnel entity instance. |
| `TunnelCfdTunnelResponseCollection` | `($data): TunnelCfdTunnelResponseCollectionEntity` | Create a TunnelCfdTunnelResponseCollection entity instance. |
| `TunnelCfdTunnelResponseSingle` | `($data): TunnelCfdTunnelResponseSingleEntity` | Create a TunnelCfdTunnelResponseSingle entity instance. |
| `TunnelConfiguration` | `($data): TunnelConfigurationEntity` | Create a TunnelConfiguration entity instance. |
| `TunnelEmpty` | `($data): TunnelEmptyEntity` | Create a TunnelEmpty entity instance. |
| `TunnelHostnameRouteResponseCollection` | `($data): TunnelHostnameRouteResponseCollectionEntity` | Create a TunnelHostnameRouteResponseCollection entity instance. |
| `TunnelHostnameRouteResponseSingle` | `($data): TunnelHostnameRouteResponseSingleEntity` | Create a TunnelHostnameRouteResponseSingle entity instance. |
| `TunnelMeshConfigurationResponseSingle` | `($data): TunnelMeshConfigurationResponseSingleEntity` | Create a TunnelMeshConfigurationResponseSingle entity instance. |
| `TunnelRouteResponseSingle` | `($data): TunnelRouteResponseSingleEntity` | Create a TunnelRouteResponseSingle entity instance. |
| `TunnelSubnetResponseCollection` | `($data): TunnelSubnetResponseCollectionEntity` | Create a TunnelSubnetResponseCollection entity instance. |
| `TunnelSubnetResponseSingle` | `($data): TunnelSubnetResponseSingleEntity` | Create a TunnelSubnetResponseSingle entity instance. |
| `TunnelSubnetResponseSingleNullable` | `($data): TunnelSubnetResponseSingleNullableEntity` | Create a TunnelSubnetResponseSingleNullable entity instance. |
| `TunnelTeamnetResponseCollection` | `($data): TunnelTeamnetResponseCollectionEntity` | Create a TunnelTeamnetResponseCollection entity instance. |
| `TunnelTeamnetResponseSingle` | `($data): TunnelTeamnetResponseSingleEntity` | Create a TunnelTeamnetResponseSingle entity instance. |
| `TunnelTunnelClient` | `($data): TunnelTunnelClientEntity` | Create a TunnelTunnelClient entity instance. |
| `TunnelTunnelConnection` | `($data): TunnelTunnelConnectionEntity` | Create a TunnelTunnelConnection entity instance. |
| `TunnelTunnelResponseToken` | `($data): TunnelTunnelResponseTokenEntity` | Create a TunnelTunnelResponseToken entity instance. |
| `TunnelTunnelWarpConnectorClient` | `($data): TunnelTunnelWarpConnectorClientEntity` | Create a TunnelTunnelWarpConnectorClient entity instance. |
| `TunnelTunnelWarpConnectorConnection` | `($data): TunnelTunnelWarpConnectorConnectionEntity` | Create a TunnelTunnelWarpConnectorConnection entity instance. |
| `TunnelVnetResponseCollection` | `($data): TunnelVnetResponseCollectionEntity` | Create a TunnelVnetResponseCollection entity instance. |
| `TunnelVnetResponseSingle` | `($data): TunnelVnetResponseSingleEntity` | Create a TunnelVnetResponseSingle entity instance. |
| `TunnelWarpConnectorResponseCollection` | `($data): TunnelWarpConnectorResponseCollectionEntity` | Create a TunnelWarpConnectorResponseCollection entity instance. |
| `TunnelWarpConnectorResponseSingle` | `($data): TunnelWarpConnectorResponseSingleEntity` | Create a TunnelWarpConnectorResponseSingle entity instance. |
| `TunnelZeroTrustConnectivitySetting` | `($data): TunnelZeroTrustConnectivitySettingEntity` | Create a TunnelZeroTrustConnectivitySetting entity instance. |
| `Warp` | `($data): WarpEntity` | Create a Warp entity instance. |
| `WarpChangeEvent` | `($data): WarpChangeEventEntity` | Create a WarpChangeEvent entity instance. |
| `WarpTeamsDeviceApiOther` | `($data): WarpTeamsDeviceApiOtherEntity` | Create a WarpTeamsDeviceApiOther entity instance. |
| `ZeroTrustGatewayApplicationsReviewStatus` | `($data): ZeroTrustGatewayApplicationsReviewStatusEntity` | Create a ZeroTrustGatewayApplicationsReviewStatus entity instance. |
| `ZeroTrustGatewayCsvOperationSingle` | `($data): ZeroTrustGatewayCsvOperationSingleEntity` | Create a ZeroTrustGatewayCsvOperationSingle entity instance. |
| `ZeroTrustGatewayCustomCertificateSetting` | `($data): ZeroTrustGatewayCustomCertificateSettingEntity` | Create a ZeroTrustGatewayCustomCertificateSetting entity instance. |
| `ZeroTrustGatewayGatewayAccount` | `($data): ZeroTrustGatewayGatewayAccountEntity` | Create a ZeroTrustGatewayGatewayAccount entity instance. |
| `ZeroTrustGatewayGatewayAccountConfig` | `($data): ZeroTrustGatewayGatewayAccountConfigEntity` | Create a ZeroTrustGatewayGatewayAccountConfig entity instance. |
| `ZeroTrustGatewayGatewayAccountEgressCidrPairList` | `($data): ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity` | Create a ZeroTrustGatewayGatewayAccountEgressCidrPairList entity instance. |
| `ZeroTrustGatewayGatewayAccountLoggingSetting` | `($data): ZeroTrustGatewayGatewayAccountLoggingSettingEntity` | Create a ZeroTrustGatewayGatewayAccountLoggingSetting entity instance. |
| `ZeroTrustGatewayListItemResponseCollection` | `($data): ZeroTrustGatewayListItemResponseCollectionEntity` | Create a ZeroTrustGatewayListItemResponseCollection entity instance. |
| `ZeroTrustGatewayListSingle` | `($data): ZeroTrustGatewayListSingleEntity` | Create a ZeroTrustGatewayListSingle entity instance. |
| `ZeroTrustGatewayResponseCollection` | `($data): ZeroTrustGatewayResponseCollectionEntity` | Create a ZeroTrustGatewayResponseCollection entity instance. |
| `ZeroTrustGatewayResponseCollection10` | `($data): ZeroTrustGatewayResponseCollection10Entity` | Create a ZeroTrustGatewayResponseCollection10 entity instance. |
| `ZeroTrustGatewayResponseCollection2` | `($data): ZeroTrustGatewayResponseCollection2Entity` | Create a ZeroTrustGatewayResponseCollection2 entity instance. |
| `ZeroTrustGatewayResponseCollection3` | `($data): ZeroTrustGatewayResponseCollection3Entity` | Create a ZeroTrustGatewayResponseCollection3 entity instance. |
| `ZeroTrustGatewayResponseCollection4` | `($data): ZeroTrustGatewayResponseCollection4Entity` | Create a ZeroTrustGatewayResponseCollection4 entity instance. |
| `ZeroTrustGatewayResponseCollection5` | `($data): ZeroTrustGatewayResponseCollection5Entity` | Create a ZeroTrustGatewayResponseCollection5 entity instance. |
| `ZeroTrustGatewayResponseCollection6` | `($data): ZeroTrustGatewayResponseCollection6Entity` | Create a ZeroTrustGatewayResponseCollection6 entity instance. |
| `ZeroTrustGatewayResponseCollection7` | `($data): ZeroTrustGatewayResponseCollection7Entity` | Create a ZeroTrustGatewayResponseCollection7 entity instance. |
| `ZeroTrustGatewayResponseCollection8` | `($data): ZeroTrustGatewayResponseCollection8Entity` | Create a ZeroTrustGatewayResponseCollection8 entity instance. |
| `ZeroTrustGatewayResponseCollection9` | `($data): ZeroTrustGatewayResponseCollection9Entity` | Create a ZeroTrustGatewayResponseCollection9 entity instance. |
| `ZeroTrustGatewaySingle` | `($data): ZeroTrustGatewaySingleEntity` | Create a ZeroTrustGatewaySingle entity instance. |
| `ZeroTrustGatewaySingleResponse2` | `($data): ZeroTrustGatewaySingleResponse2Entity` | Create a ZeroTrustGatewaySingleResponse2 entity instance. |
| `ZeroTrustGatewaySingleResponse3` | `($data): ZeroTrustGatewaySingleResponse3Entity` | Create a ZeroTrustGatewaySingleResponse3 entity instance. |
| `ZeroTrustGatewaySingleResponse4` | `($data): ZeroTrustGatewaySingleResponse4Entity` | Create a ZeroTrustGatewaySingleResponse4 entity instance. |
| `ZeroTrustGatewaySingleResponse5` | `($data): ZeroTrustGatewaySingleResponse5Entity` | Create a ZeroTrustGatewaySingleResponse5 entity instance. |
| `ZeroTrustGatewaySingleResponse6` | `($data): ZeroTrustGatewaySingleResponse6Entity` | Create a ZeroTrustGatewaySingleResponse6 entity instance. |
| `ZeroTrustGatewaySingleResponse7` | `($data): ZeroTrustGatewaySingleResponse7Entity` | Create a ZeroTrustGatewaySingleResponse7 entity instance. |
| `ZeroTrustGatewaySingleResponseWithListItem` | `($data): ZeroTrustGatewaySingleResponseWithListItemEntity` | Create a ZeroTrustGatewaySingleResponseWithListItem entity instance. |
| `ZeroTrustRiskScoring` | `($data): ZeroTrustRiskScoringEntity` | Create a ZeroTrustRiskScoring entity instance. |
| `ZeroTrustRiskScoringIntegration` | `($data): ZeroTrustRiskScoringIntegrationEntity` | Create a ZeroTrustRiskScoringIntegration entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$client_version = $client->ClientVersion();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` | Indicates whether the API call was successful. |

#### Example: List

```php
// list() returns an array of ClientVersion records (throws on error).
$client_versions = $client->ClientVersion()->list();
```


### Cni

Create an instance: `$cni = $client->Cni();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeploymentGroup

Create an instance: `$deployment_group = $client->DeploymentGroup();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `name` | `string` | A user-friendly name for the deployment group. |
| `policy_ids` | `array` | Contains an optional list of policy IDs assigned to a group. |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` | Indicates whether the API call was successful. |
| `version_config` | `array` | Contains at least one version configuration. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DeploymentGroup record (throws on error).
$deployment_group = $client->DeploymentGroup()->load(["id" => "deployment_group_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of DeploymentGroup records (throws on error).
$deployment_groups = $client->DeploymentGroup()->list();
```

#### Example: Create

```php
$deployment_group = $client->DeploymentGroup()->create([
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


### DexRemoteCommand

Create an instance: `$dex_remote_command = $client->DexRemoteCommand();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commands` | `array` | List of device-level commands to execute |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DexRemoteCommand record (throws on error).
$dex_remote_command = $client->DexRemoteCommand()->load(["account_id" => "account_id"]);
```

#### Example: Create

```php
$dex_remote_command = $client->DexRemoteCommand()->create([
    "account_id" => null, // string
    "commands" => null, // array
]);
```


### DexRule

Create an instance: `$dex_rule = $client->DexRule();`

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
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DexRule record (throws on error).
$dex_rule = $client->DexRule()->load(["id" => "dex_rule_id", "account_id" => "account_id"]);
```

#### Example: Create

```php
$dex_rule = $client->DexRule()->create([
    "account_id" => null, // string
    "match" => null, // string
    "name" => null, // string
]);
```


### DexSyntheticApplicationMonitoring

Create an instance: `$dex_synthetic_application_monitoring = $client->DexSyntheticApplicationMonitoring();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` | array of colos. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DexSyntheticApplicationMonitoring record (throws on error).
$dex_synthetic_application_monitoring = $client->DexSyntheticApplicationMonitoring()->load(["account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of DexSyntheticApplicationMonitoring records (throws on error).
$dex_synthetic_application_monitorings = $client->DexSyntheticApplicationMonitoring()->list();
```


### DigitalExperienceMonitoringDevice

Create an instance: `$digital_experience_monitoring_device = $client->DigitalExperienceMonitoringDevice();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alwaysOn` | `bool` |  |
| `batteryCharging` | `bool` |  |
| `batteryCycles` | `int` |  |
| `batteryPct` | `float` |  |
| `colo` | `string` | Cloudflare colo airport code. |
| `connectionType` | `string` |  |
| `cpuPct` | `float` |  |
| `cpuPctByApp` | `array` |  |
| `deviceId` | `string` | Device identifier (UUID v4) |
| `deviceIpv4` | `array` |  |
| `deviceIpv6` | `array` |  |
| `deviceName` | `string` | Device identifier (human readable). |
| `deviceRegistration` | `string` | Deprecated: use registrationId. |
| `diskReadBps` | `int` |  |
| `diskUsagePct` | `float` |  |
| `diskWriteBps` | `int` |  |
| `dohSubdomain` | `string` |  |
| `estimatedLossPct` | `float` |  |
| `firewallEnabled` | `bool` |  |
| `gatewayIpv4` | `array` |  |
| `gatewayIpv6` | `array` |  |
| `handshakeLatencyMs` | `float` |  |
| `ispIpv4` | `array` |  |
| `ispIpv6` | `array` |  |
| `metal` | `string` |  |
| `mode` | `string` | The mode under which the WARP client is run. |
| `networkRcvdBps` | `int` |  |
| `networkSentBps` | `int` |  |
| `networkSsid` | `string` |  |
| `personEmail` | `string` | User contact email address |
| `platform` | `string` | Operating system. |
| `ramAvailableKb` | `int` |  |
| `ramUsedPct` | `float` |  |
| `ramUsedPctByApp` | `array` |  |
| `registrationId` | `string` | Device registration identifier (UUID v4). |
| `rtt` | `array` | Round-trip time statistics for the WARP tunnel. |
| `status` | `string` | Network status. |
| `switchLocked` | `bool` |  |
| `timestamp` | `string` |  |
| `tunnelStats` | `array` | WARP tunnel packet and byte counters. |
| `tunnelType` | `string` |  |
| `version` | `string` | WARP client version. |
| `wifiStrengthDbm` | `int` |  |

#### Example: List

```php
// list() returns an array of DigitalExperienceMonitoringDevice records (throws on error).
$digital_experience_monitoring_devices = $client->DigitalExperienceMonitoringDevice()->list();
```


### DigitalExperienceMonitoringDexDeleteResponseCollection

Create an instance: `$digital_experience_monitoring_dex_delete_response_collection = $client->DigitalExperienceMonitoringDexDeleteResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DigitalExperienceMonitoringDexResponseCollection

Create an instance: `$digital_experience_monitoring_dex_response_collection = $client->DigitalExperienceMonitoringDexResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of DigitalExperienceMonitoringDexResponseCollection records (throws on error).
$digital_experience_monitoring_dex_response_collections = $client->DigitalExperienceMonitoringDexResponseCollection()->list();
```


### DigitalExperienceMonitoringDexSingle

Create an instance: `$digital_experience_monitoring_dex_single = $client->DigitalExperienceMonitoringDexSingle();`

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
| `data` | `array` | The configuration object which contains the details for the WARP client to conduct the test. |
| `description` | `string` | Additional details about the test. |
| `enabled` | `bool` | Determines whether or not the test is active. |
| `interval` | `string` | How often the test will run. |
| `name` | `string` | The name of the DEX test. |
| `result` | `array` |  |
| `target_policies` | `mixed` |  |
| `targeted` | `bool` |  |
| `test_id` | `string` | The unique identifier for the test. |
| `updated` | `string` | Date the test was last updated, in RFC 3339 format. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DigitalExperienceMonitoringDexSingle record (throws on error).
$digital_experience_monitoring_dex_single = $client->DigitalExperienceMonitoringDexSingle()->load(["account_id" => "account_id", "dex_test_id" => "dex_test_id"]);
```

#### Example: Create

```php
$digital_experience_monitoring_dex_single = $client->DigitalExperienceMonitoringDexSingle()->create([
    "account_id" => null, // string
    "data" => null, // array
    "enabled" => null, // bool
    "interval" => null, // string
    "name" => null, // string
    "result" => null, // array
]);
```


### DigitalExperienceMonitoringFleetStatusDevice

Create an instance: `$digital_experience_monitoring_fleet_status_device = $client->DigitalExperienceMonitoringFleetStatusDevice();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of DigitalExperienceMonitoringFleetStatusDevice records (throws on error).
$digital_experience_monitoring_fleet_status_devices = $client->DigitalExperienceMonitoringFleetStatusDevice()->list();
```


### DigitalExperienceMonitoringFleetStatusLive

Create an instance: `$digital_experience_monitoring_fleet_status_live = $client->DigitalExperienceMonitoringFleetStatusLive();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DigitalExperienceMonitoringFleetStatusLive record (throws on error).
$digital_experience_monitoring_fleet_status_live = $client->DigitalExperienceMonitoringFleetStatusLive()->load(["account_id" => "account_id", "since_minute" => 1]);
```


### DigitalExperienceMonitoringFleetStatusOverTime

Create an instance: `$digital_experience_monitoring_fleet_status_over_time = $client->DigitalExperienceMonitoringFleetStatusOverTime();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DigitalExperienceMonitoringFleetStatusOverTime record (throws on error).
$digital_experience_monitoring_fleet_status_over_time = $client->DigitalExperienceMonitoringFleetStatusOverTime()->load(["account_id" => "account_id", "from" => "from", "to" => "to"]);
```


### Interconnect

Create an instance: `$interconnect = $client->Interconnect();`

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

```php
// load() returns the ENTITY — call data_get() for the Interconnect record (throws on error).
$interconnect = $client->Interconnect()->load(["account_id" => "account_id", "icon" => "icon"]);
```


### IpProfile

Create an instance: `$ip_profile = $client->IpProfile();`

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
| `enabled` | `bool` | Whether the Device IP profile will be applied to matching devices. |
| `errors` | `array` |  |
| `id` | `string` |  |
| `match` | `string` | The wirefilter expression to match registrations. |
| `messages` | `array` |  |
| `name` | `string` | A user-friendly name for the Device IP profile. |
| `precedence` | `int` | The precedence of the Device IP profile. |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `subnet_id` | `string` | The ID of the Subnet. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the IpProfile record (throws on error).
$ip_profile = $client->IpProfile()->load(["id" => "ip_profile_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of IpProfile records (throws on error).
$ip_profiles = $client->IpProfile()->list();
```

#### Example: Create

```php
$ip_profile = $client->IpProfile()->create([
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


### List

Create an instance: `$list = $client->List();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Location

Create an instance: `$location = $client->Location();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### NscCni

Create an instance: `$nsc_cni = $client->NscCni();`

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
| `bgp` | `array` |  |
| `bgp_mode` | `string` | The BGP mode for a CNI. |
| `cust_ip` | `string` | Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`. |
| `id` | `string` |  |
| `interconnect` | `string` | Interconnect identifier hosting this CNI |
| `magic` | `array` |  |
| `p2p_ip` | `string` | Cloudflare end of the point-to-point link |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NscCni record (throws on error).
$nsc_cni = $client->NscCni()->load(["id" => "nsc_cni_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of NscCni records (throws on error).
$nsc_cnis = $client->NscCni()->list();
```

#### Example: Create

```php
$nsc_cni = $client->NscCni()->create([
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


### NscDefaultName

Create an instance: `$nsc_default_name = $client->NscDefaultName();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The default customer name for the interconnect |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NscDefaultName record (throws on error).
$nsc_default_name = $client->NscDefaultName()->load(["account_id" => "account_id", "interconnect_id" => "interconnect_id"]);
```


### NscInterconnect

Create an instance: `$nsc_interconnect = $client->NscInterconnect();`

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
| `items` | `array` |  |
| `next` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NscInterconnect record (throws on error).
$nsc_interconnect = $client->NscInterconnect()->load(["id" => "nsc_interconnect_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of NscInterconnect records (throws on error).
$nsc_interconnects = $client->NscInterconnect()->list();
```

#### Example: Create

```php
$nsc_interconnect = $client->NscInterconnect()->create([
    "account_id" => null, // string
    "items" => null, // array
]);
```


### NscSetting

Create an instance: `$nsc_setting = $client->NscSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_asn` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NscSetting record (throws on error).
$nsc_setting = $client->NscSetting()->load(["account_id" => "account_id"]);
```


### NscSlotInfo

Create an instance: `$nsc_slot_info = $client->NscSlotInfo();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | Customer account tag |
| `address` | `array` |  |
| `ccr_device_name` | `string` |  |
| `facility` | `array` |  |
| `id` | `string` | Slot ID |
| `name` | `string` |  |
| `occupied` | `bool` | Whether the slot is occupied or not |
| `site` | `string` |  |
| `speed` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NscSlotInfo record (throws on error).
$nsc_slot_info = $client->NscSlotInfo()->load(["account_id" => "account_id", "slot" => "slot"]);
```

#### Example: List

```php
// list() returns an array of NscSlotInfo records (throws on error).
$nsc_slot_infos = $client->NscSlotInfo()->list();
```


### NscStatusInfo

Create an instance: `$nsc_status_info = $client->NscStatusInfo();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NscStatusInfo record (throws on error).
$nsc_status_info = $client->NscStatusInfo()->load(["account_id" => "account_id", "icon" => "icon"]);
```


### OverrideCode

Create an instance: `$override_code = $client->OverrideCode();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `device_id` | `string` | Physical device ID. |
| `duration_hours` | `int` | Number of hours for which the override code should remain valid. |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `scope` | `string` | Whether the code applies to every device in the account or one physical device. |
| `success` | `bool` | Whether the API call was successful. |
| `type` | `string` | The feature that the override code applies to. |

#### Example: Create

```php
$override_code = $client->OverrideCode()->create([
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


### Pacfile

Create an instance: `$pacfile = $client->Pacfile();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### PhysicalDevice

Create an instance: `$physical_device = $client->PhysicalDevice();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `result` | `array` | A WARP Device. |
| `result_info` | `array` | V4 public API Pagination/Cursor info. |
| `success` | `bool` | Whether the API call was successful. |
| `tags` | `array` | Replaces all tags assigned to the physical device. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PhysicalDevice record (throws on error).
$physical_device = $client->PhysicalDevice()->load(["id" => "physical_device_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of PhysicalDevice records (throws on error).
$physical_devices = $client->PhysicalDevice()->list();
```

#### Example: Create

```php
$physical_device = $client->PhysicalDevice()->create([
    "account_id" => null, // string
    "id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "result_info" => null, // array
    "success" => null, // bool
]);
```


### ProxyEndpoint

Create an instance: `$proxy_endpoint = $client->ProxyEndpoint();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Registration

Create an instance: `$registration = $client->Registration();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `result` | `array` | A WARP configuration tied to a single user. |
| `result_info` | `array` | V4 public API Pagination/Cursor info. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Registration record (throws on error).
$registration = $client->Registration()->load(["id" => "registration_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of Registration records (throws on error).
$registrations = $client->Registration()->list();
```

#### Example: Create

```php
$registration = $client->Registration()->create([
    "account_id" => null, // string
    "id" => null, // array
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "result_info" => null, // array
    "success" => null, // bool
]);
```


### Rule

Create an instance: `$rule = $client->Rule();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### TeamsDevicesApiResponseSingle

Create an instance: `$teams_devices_api_response_single = $client->TeamsDevicesApiResponseSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$teams_devices_api_response_single = $client->TeamsDevicesApiResponseSingle()->create([
    "account_id" => null, // string
]);
```


### TeamsDevicesComponentsSchemasResponseCollection

Create an instance: `$teams_devices_components_schemas_response_collection = $client->TeamsDevicesComponentsSchemasResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TeamsDevicesComponentsSchemasResponseCollection records (throws on error).
$teams_devices_components_schemas_response_collections = $client->TeamsDevicesComponentsSchemasResponseCollection()->list();
```


### TeamsDevicesComponentsSchemasSingle

Create an instance: `$teams_devices_components_schemas_single = $client->TeamsDevicesComponentsSchemasSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `array` | The configuration object containing information for the WARP client to detect the managed network. |
| `name` | `string` | The name of the device managed network. |
| `result` | `array` |  |
| `type` | `string` | The type of device managed network. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TeamsDevicesComponentsSchemasSingle record (throws on error).
$teams_devices_components_schemas_single = $client->TeamsDevicesComponentsSchemasSingle()->load(["account_id" => "account_id", "network_id" => "network_id"]);
```

#### Example: Create

```php
$teams_devices_components_schemas_single = $client->TeamsDevicesComponentsSchemasSingle()->create([
    "account_id" => null, // string
    "config" => null, // array
    "name" => null, // string
    "type" => null, // string
]);
```


### TeamsDevicesDefaultDeviceSetting

Create an instance: `$teams_devices_default_device_setting = $client->TeamsDevicesDefaultDeviceSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_mode_switch` | `bool` | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `bool` | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `bool` | Whether to allow devices to leave the organization. |
| `auto_connect` | `float` | The amount of time in seconds to reconnect after having been disabled. |
| `captive_portal` | `float` | Turn on the captive portal after the specified amount of time. |
| `disable_auto_fallback` | `bool` | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `array` | List of DNS search suffixes to apply to clients. |
| `exclude` | `array` | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `bool` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `array` | Global Acceleration settings for China. |
| `include` | `array` | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `float` | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `float` | The size of the subnet for the local access network. |
| `register_interface_ip_with_dns` | `bool` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `array` |  |
| `sccm_vpn_boundary_support` | `bool` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `array` |  |
| `support_url` | `string` | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `bool` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | Determines which tunnel protocol to use. |
| `uninstall_protection` | `bool` | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `array` | Virtual network access settings for the device. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TeamsDevicesDefaultDeviceSetting record (throws on error).
$teams_devices_default_device_setting = $client->TeamsDevicesDefaultDeviceSetting()->load(["account_id" => "account_id"]);
```


### TeamsDevicesDevice

Create an instance: `$teams_devices_device = $client->TeamsDevicesDevice();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TeamsDevicesDevice record (throws on error).
$teams_devices_device = $client->TeamsDevicesDevice()->load(["id" => "teams_devices_device_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of TeamsDevicesDevice records (throws on error).
$teams_devices_devices = $client->TeamsDevicesDevice()->list();
```


### TeamsDevicesDeviceSetting

Create an instance: `$teams_devices_device_setting = $client->TeamsDevicesDeviceSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_mode_switch` | `bool` | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `bool` | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `bool` | Whether to allow devices to leave the organization. |
| `auto_connect` | `float` | The amount of time in seconds to reconnect after having been disabled. |
| `browser_extension_config` | `array` | Browser extension proxy settings. |
| `captive_portal` | `float` | Turn on the captive portal after the specified amount of time. |
| `default` | `bool` | Whether the policy is the account default. |
| `description` | `string` | A description of the policy. |
| `disable_auto_fallback` | `bool` | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `array` | List of DNS search suffixes to apply to clients. |
| `enabled` | `bool` | Whether the policy will be applied to matching devices. |
| `exclude` | `array` | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `bool` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `array` | Global Acceleration settings for China. |
| `include` | `array` | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `float` | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `float` | The size of the subnet for the local access network. |
| `match` | `string` | The wirefilter expression to match devices. |
| `name` | `string` | The name of the device settings profile. |
| `precedence` | `float` | The precedence of the policy. |
| `profile_type` | `string` | The client type to which the device settings profile applies. |
| `register_interface_ip_with_dns` | `bool` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `array` |  |
| `sccm_vpn_boundary_support` | `bool` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `array` |  |
| `support_url` | `string` | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `bool` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | Determines which tunnel protocol to use. |
| `uninstall_protection` | `bool` | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `array` | Virtual network access settings for the device. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TeamsDevicesDeviceSetting record (throws on error).
$teams_devices_device_setting = $client->TeamsDevicesDeviceSetting()->load(["account_id" => "account_id", "policy_id" => "policy_id"]);
```

#### Example: Create

```php
$teams_devices_device_setting = $client->TeamsDevicesDeviceSetting()->create([
    "account_id" => null, // string
    "browser_extension_config" => null, // array
    "global_acceleration" => null, // array
    "name" => null, // string
    "virtual_networks" => null, // array
]);
```


### TeamsDevicesDeviceSettingsResponseCollection

Create an instance: `$teams_devices_device_settings_response_collection = $client->TeamsDevicesDeviceSettingsResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TeamsDevicesDeviceSettingsResponseCollection records (throws on error).
$teams_devices_device_settings_response_collections = $client->TeamsDevicesDeviceSettingsResponseCollection()->list();
```


### TeamsDevicesFallbackDomainResponseCollection

Create an instance: `$teams_devices_fallback_domain_response_collection = $client->TeamsDevicesFallbackDomainResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TeamsDevicesFallbackDomainResponseCollection records (throws on error).
$teams_devices_fallback_domain_response_collections = $client->TeamsDevicesFallbackDomainResponseCollection()->list();
```


### TeamsDevicesGlobalWarpOverride

Create an instance: `$teams_devices_global_warp_override = $client->TeamsDevicesGlobalWarpOverride();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disconnect` | `bool` | Disconnects all devices on the account using Global WARP override. |
| `justification` | `string` | Reasoning for setting the Global WARP override state. |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TeamsDevicesGlobalWarpOverride record (throws on error).
$teams_devices_global_warp_override = $client->TeamsDevicesGlobalWarpOverride()->load(["account_id" => "account_id"]);
```

#### Example: Create

```php
$teams_devices_global_warp_override = $client->TeamsDevicesGlobalWarpOverride()->create([
    "account_id" => null, // string
    "disconnect" => null, // bool
]);
```


### TeamsDevicesId

Create an instance: `$teams_devices_id = $client->TeamsDevicesId();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TeamsDevicesOverrideCode

Create an instance: `$teams_devices_override_code = $client->TeamsDevicesOverrideCode();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TeamsDevicesOverrideCode record (throws on error).
$teams_devices_override_code = $client->TeamsDevicesOverrideCode()->load(["account_id" => "account_id", "device_id" => "device_id"]);
```


### TeamsDevicesResponseCollection

Create an instance: `$teams_devices_response_collection = $client->TeamsDevicesResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TeamsDevicesResponseCollection records (throws on error).
$teams_devices_response_collections = $client->TeamsDevicesResponseCollection()->list();
```


### TeamsDevicesSchemasId

Create an instance: `$teams_devices_schemas_id = $client->TeamsDevicesSchemasId();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TeamsDevicesSchemasResponseCollection

Create an instance: `$teams_devices_schemas_response_collection = $client->TeamsDevicesSchemasResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TeamsDevicesSchemasResponseCollection records (throws on error).
$teams_devices_schemas_response_collections = $client->TeamsDevicesSchemasResponseCollection()->list();
```


### TeamsDevicesSchemasSingle

Create an instance: `$teams_devices_schemas_single = $client->TeamsDevicesSchemasSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `array` | The configuration object containing third-party integration information. |
| `interval` | `string` | The interval between each posture check with the third-party API. |
| `name` | `string` | The name of the device posture integration. |
| `result` | `array` |  |
| `type` | `string` | The type of device posture integration. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TeamsDevicesSchemasSingle record (throws on error).
$teams_devices_schemas_single = $client->TeamsDevicesSchemasSingle()->load(["account_id" => "account_id", "integration_id" => "integration_id"]);
```

#### Example: Create

```php
$teams_devices_schemas_single = $client->TeamsDevicesSchemasSingle()->create([
    "account_id" => null, // string
    "config" => null, // array
    "interval" => null, // string
    "name" => null, // string
    "type" => null, // string
]);
```


### TeamsDevicesSingle

Create an instance: `$teams_devices_single = $client->TeamsDevicesSingle();`

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
| `input` | `array` | The value to be checked against. |
| `match` | `array` | The conditions that the client must match to run the rule. |
| `name` | `string` | The name of the device posture rule. |
| `result` | `array` |  |
| `schedule` | `string` | Polling frequency for the WARP client posture check. |
| `type` | `string` | The type of device posture rule. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TeamsDevicesSingle record (throws on error).
$teams_devices_single = $client->TeamsDevicesSingle()->load(["account_id" => "account_id", "rule_id" => "rule_id"]);
```

#### Example: Create

```php
$teams_devices_single = $client->TeamsDevicesSingle()->create([
    "account_id" => null, // string
    "name" => null, // string
    "type" => null, // string
]);
```


### TeamsDevicesSplitTunnelIncludeResponseCollection

Create an instance: `$teams_devices_split_tunnel_include_response_collection = $client->TeamsDevicesSplitTunnelIncludeResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TeamsDevicesSplitTunnelIncludeResponseCollection records (throws on error).
$teams_devices_split_tunnel_include_response_collections = $client->TeamsDevicesSplitTunnelIncludeResponseCollection()->list();
```


### TeamsDevicesSplitTunnelResponseCollection

Create an instance: `$teams_devices_split_tunnel_response_collection = $client->TeamsDevicesSplitTunnelResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TeamsDevicesSplitTunnelResponseCollection records (throws on error).
$teams_devices_split_tunnel_response_collections = $client->TeamsDevicesSplitTunnelResponseCollection()->list();
```


### TeamsDevicesZeroTrustAccountDeviceSetting

Create an instance: `$teams_devices_zero_trust_account_device_setting = $client->TeamsDevicesZeroTrustAccountDeviceSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disable_for_time` | `float` | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| `external_emergency_signal_enabled` | `bool` | Controls whether the external emergency disconnect feature is enabled. |
| `external_emergency_signal_fingerprint` | `string` | The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. |
| `external_emergency_signal_interval` | `string` | The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). |
| `external_emergency_signal_url` | `string` | The HTTPS URL from which to fetch the emergency disconnect signal. |
| `gateway_proxy_enabled` | `bool` | Enable gateway proxy filtering on TCP. |
| `gateway_udp_proxy_enabled` | `bool` | Enable gateway proxy filtering on UDP. |
| `result` | `array` |  |
| `root_certificate_installation_enabled` | `bool` | Enable installation of cloudflare managed root certificate. |
| `use_zt_virtual_ip` | `bool` | Enable using CGNAT virtual IPv4. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TeamsDevicesZeroTrustAccountDeviceSetting record (throws on error).
$teams_devices_zero_trust_account_device_setting = $client->TeamsDevicesZeroTrustAccountDeviceSetting()->load(["account_id" => "account_id"]);
```


### Tunnel

Create an instance: `$tunnel = $client->Tunnel();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of Tunnel records (throws on error).
$tunnels = $client->Tunnel()->list();
```


### TunnelCfdTunnelResponseCollection

Create an instance: `$tunnel_cfd_tunnel_response_collection = $client->TunnelCfdTunnelResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TunnelCfdTunnelResponseCollection records (throws on error).
$tunnel_cfd_tunnel_response_collections = $client->TunnelCfdTunnelResponseCollection()->list();
```


### TunnelCfdTunnelResponseSingle

Create an instance: `$tunnel_cfd_tunnel_response_single = $client->TunnelCfdTunnelResponseSingle();`

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
| `errors` | `array` |  |
| `messages` | `array` |  |
| `name` | `string` | A user-friendly name for a tunnel. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |
| `tunnel_secret` | `string` | Sets the password required to run a locally-managed tunnel. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TunnelCfdTunnelResponseSingle record (throws on error).
$tunnel_cfd_tunnel_response_single = $client->TunnelCfdTunnelResponseSingle()->load(["account_id" => "account_id", "tunnel_id" => "tunnel_id"]);
```

#### Example: Create

```php
$tunnel_cfd_tunnel_response_single = $client->TunnelCfdTunnelResponseSingle()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "name" => null, // string
    "result" => null, // string
    "success" => null, // bool
]);
```


### TunnelConfiguration

Create an instance: `$tunnel_configuration = $client->TunnelConfiguration();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `array` | The tunnel configuration and ingress rules. |
| `result` | `array` | Cloudflare Tunnel configuration |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TunnelConfiguration record (throws on error).
$tunnel_configuration = $client->TunnelConfiguration()->load(["account_id" => "account_id", "cfd_tunnel_id" => "cfd_tunnel_id"]);
```


### TunnelEmpty

Create an instance: `$tunnel_empty = $client->TunnelEmpty();`

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

Create an instance: `$tunnel_hostname_route_response_collection = $client->TunnelHostnameRouteResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TunnelHostnameRouteResponseCollection records (throws on error).
$tunnel_hostname_route_response_collections = $client->TunnelHostnameRouteResponseCollection()->list();
```


### TunnelHostnameRouteResponseSingle

Create an instance: `$tunnel_hostname_route_response_single = $client->TunnelHostnameRouteResponseSingle();`

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
| `errors` | `array` |  |
| `hostname` | `string` | The hostname of the route. |
| `messages` | `array` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |
| `tunnel_id` | `string` | UUID of the tunnel. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TunnelHostnameRouteResponseSingle record (throws on error).
$tunnel_hostname_route_response_single = $client->TunnelHostnameRouteResponseSingle()->load(["account_id" => "account_id", "hostname_route_id" => "hostname_route_id"]);
```

#### Example: Create

```php
$tunnel_hostname_route_response_single = $client->TunnelHostnameRouteResponseSingle()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // string
    "success" => null, // bool
]);
```


### TunnelMeshConfigurationResponseSingle

Create an instance: `$tunnel_mesh_configuration_response_single = $client->TunnelMeshConfigurationResponseSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `array` | Provider-specific configuration. |
| `ha_mode` | `string` | High-availability mode for the WARP Connector tunnel. |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TunnelMeshConfigurationResponseSingle record (throws on error).
$tunnel_mesh_configuration_response_single = $client->TunnelMeshConfigurationResponseSingle()->load(["account_id" => "account_id", "warp_connector_id" => "warp_connector_id"]);
```


### TunnelRouteResponseSingle

Create an instance: `$tunnel_route_response_single = $client->TunnelRouteResponseSingle();`

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
| `errors` | `array` |  |
| `messages` | `array` |  |
| `network` | `string` | The private IPv4 or IPv6 range connected by the route, in CIDR notation. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |
| `tunnel_id` | `string` | UUID of the tunnel. |
| `virtual_network_id` | `string` | UUID of the virtual network. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TunnelRouteResponseSingle record (throws on error).
$tunnel_route_response_single = $client->TunnelRouteResponseSingle()->load(["account_id" => "account_id", "route_id" => "route_id"]);
```

#### Example: Create

```php
$tunnel_route_response_single = $client->TunnelRouteResponseSingle()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "network" => null, // string
    "result" => null, // string
    "success" => null, // bool
    "tunnel_id" => null, // string
]);
```


### TunnelSubnetResponseCollection

Create an instance: `$tunnel_subnet_response_collection = $client->TunnelSubnetResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TunnelSubnetResponseCollection records (throws on error).
$tunnel_subnet_response_collections = $client->TunnelSubnetResponseCollection()->list();
```


### TunnelSubnetResponseSingle

Create an instance: `$tunnel_subnet_response_single = $client->TunnelSubnetResponseSingle();`

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
| `errors` | `array` |  |
| `is_default_network` | `bool` | If `true`, this is the default subnet for the account. |
| `messages` | `array` |  |
| `name` | `string` | A user-friendly name for the subnet. |
| `network` | `string` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TunnelSubnetResponseSingle record (throws on error).
$tunnel_subnet_response_single = $client->TunnelSubnetResponseSingle()->load(["account_id" => "account_id", "address_family" => "address_family"]);
```

#### Example: Create

```php
$tunnel_subnet_response_single = $client->TunnelSubnetResponseSingle()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "name" => null, // string
    "network" => null, // string
    "result" => null, // string
    "success" => null, // bool
]);
```


### TunnelSubnetResponseSingleNullable

Create an instance: `$tunnel_subnet_response_single_nullable = $client->TunnelSubnetResponseSingleNullable();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TunnelTeamnetResponseCollection

Create an instance: `$tunnel_teamnet_response_collection = $client->TunnelTeamnetResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TunnelTeamnetResponseCollection records (throws on error).
$tunnel_teamnet_response_collections = $client->TunnelTeamnetResponseCollection()->list();
```


### TunnelTeamnetResponseSingle

Create an instance: `$tunnel_teamnet_response_single = $client->TunnelTeamnetResponseSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TunnelTeamnetResponseSingle record (throws on error).
$tunnel_teamnet_response_single = $client->TunnelTeamnetResponseSingle()->load(["account_id" => "account_id", "ip" => "ip"]);
```


### TunnelTunnelClient

Create an instance: `$tunnel_tunnel_client = $client->TunnelTunnelClient();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TunnelTunnelClient record (throws on error).
$tunnel_tunnel_client = $client->TunnelTunnelClient()->load(["account_id" => "account_id", "cfd_tunnel_id" => "cfd_tunnel_id", "connector_id" => "connector_id"]);
```


### TunnelTunnelConnection

Create an instance: `$tunnel_tunnel_connection = $client->TunnelTunnelConnection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TunnelTunnelConnection records (throws on error).
$tunnel_tunnel_connections = $client->TunnelTunnelConnection()->list();
```


### TunnelTunnelResponseToken

Create an instance: `$tunnel_tunnel_response_token = $client->TunnelTunnelResponseToken();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `resources` | `array` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```php
// list() returns an array of TunnelTunnelResponseToken records (throws on error).
$tunnel_tunnel_response_tokens = $client->TunnelTunnelResponseToken()->list();
```

#### Example: Create

```php
$tunnel_tunnel_response_token = $client->TunnelTunnelResponseToken()->create([
    "account_id" => null, // string
    "cfd_tunnel_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "resources" => null, // array
    "result" => null, // string
    "success" => null, // bool
]);
```


### TunnelTunnelWarpConnectorClient

Create an instance: `$tunnel_tunnel_warp_connector_client = $client->TunnelTunnelWarpConnectorClient();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TunnelTunnelWarpConnectorClient record (throws on error).
$tunnel_tunnel_warp_connector_client = $client->TunnelTunnelWarpConnectorClient()->load(["account_id" => "account_id", "connector_id" => "connector_id", "warp_connector_id" => "warp_connector_id"]);
```


### TunnelTunnelWarpConnectorConnection

Create an instance: `$tunnel_tunnel_warp_connector_connection = $client->TunnelTunnelWarpConnectorConnection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TunnelTunnelWarpConnectorConnection records (throws on error).
$tunnel_tunnel_warp_connector_connections = $client->TunnelTunnelWarpConnectorConnection()->list();
```


### TunnelVnetResponseCollection

Create an instance: `$tunnel_vnet_response_collection = $client->TunnelVnetResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TunnelVnetResponseCollection records (throws on error).
$tunnel_vnet_response_collections = $client->TunnelVnetResponseCollection()->list();
```


### TunnelVnetResponseSingle

Create an instance: `$tunnel_vnet_response_single = $client->TunnelVnetResponseSingle();`

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
| `is_default` | `bool` | If `true`, this virtual network is the default for the account. |
| `is_default_network` | `bool` | If `true`, this virtual network is the default for the account. |
| `name` | `string` | A user-friendly name for the virtual network. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TunnelVnetResponseSingle record (throws on error).
$tunnel_vnet_response_single = $client->TunnelVnetResponseSingle()->load(["account_id" => "account_id", "virtual_network_id" => "virtual_network_id"]);
```

#### Example: Create

```php
$tunnel_vnet_response_single = $client->TunnelVnetResponseSingle()->create([
    "account_id" => null, // string
]);
```


### TunnelWarpConnectorResponseCollection

Create an instance: `$tunnel_warp_connector_response_collection = $client->TunnelWarpConnectorResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of TunnelWarpConnectorResponseCollection records (throws on error).
$tunnel_warp_connector_response_collections = $client->TunnelWarpConnectorResponseCollection()->list();
```


### TunnelWarpConnectorResponseSingle

Create an instance: `$tunnel_warp_connector_response_single = $client->TunnelWarpConnectorResponseSingle();`

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
| `errors` | `array` |  |
| `ha` | `bool` | Indicates that the tunnel will be created to be highly available. |
| `messages` | `array` |  |
| `name` | `string` | A user-friendly name for a tunnel. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |
| `tunnel_secret` | `string` | Sets the password required to run a locally-managed tunnel. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TunnelWarpConnectorResponseSingle record (throws on error).
$tunnel_warp_connector_response_single = $client->TunnelWarpConnectorResponseSingle()->load(["account_id" => "account_id", "tunnel_id" => "tunnel_id"]);
```

#### Example: Create

```php
$tunnel_warp_connector_response_single = $client->TunnelWarpConnectorResponseSingle()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "name" => null, // string
    "result" => null, // string
    "success" => null, // bool
]);
```


### TunnelZeroTrustConnectivitySetting

Create an instance: `$tunnel_zero_trust_connectivity_setting = $client->TunnelZeroTrustConnectivitySetting();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `icmp_proxy_enabled` | `bool` | A flag to enable the ICMP proxy for the account network. |
| `messages` | `array` |  |
| `offramp_warp_enabled` | `bool` | A flag to enable WARP to WARP traffic. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```php
// list() returns an array of TunnelZeroTrustConnectivitySetting records (throws on error).
$tunnel_zero_trust_connectivity_settings = $client->TunnelZeroTrustConnectivitySetting()->list();
```


### Warp

Create an instance: `$warp = $client->Warp();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | An optional description of the subnet. |
| `errors` | `array` |  |
| `id` | `string` |  |
| `is_default_network` | `bool` | If `true`, this is the default subnet for the account. |
| `messages` | `array` |  |
| `name` | `string` | A user-friendly name for the subnet. |
| `network` | `string` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Warp record (throws on error).
$warp = $client->Warp()->load(["id" => "warp_id", "account_id" => "account_id"]);
```


### WarpChangeEvent

Create an instance: `$warp_change_event = $client->WarpChangeEvent();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of WarpChangeEvent records (throws on error).
$warp_change_events = $client->WarpChangeEvent()->list();
```


### WarpTeamsDeviceApiOther

Create an instance: `$warp_teams_device_api_other = $client->WarpTeamsDeviceApiOther();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `mixed` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of WarpTeamsDeviceApiOther records (throws on error).
$warp_teams_device_api_others = $client->WarpTeamsDeviceApiOther()->list();
```


### ZeroTrustGatewayApplicationsReviewStatus

Create an instance: `$zero_trust_gateway_applications_review_status = $client->ZeroTrustGatewayApplicationsReviewStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved_apps` | `array` | Contains the ids of the approved applications. |
| `in_review_apps` | `array` | Contains the ids of the applications in review. |
| `result` | `array` |  |
| `unapproved_apps` | `array` | Contains the ids of the unapproved applications. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustGatewayApplicationsReviewStatus record (throws on error).
$zero_trust_gateway_applications_review_status = $client->ZeroTrustGatewayApplicationsReviewStatus()->load(["account_id" => "account_id"]);
```


### ZeroTrustGatewayCsvOperationSingle

Create an instance: `$zero_trust_gateway_csv_operation_single = $client->ZeroTrustGatewayCsvOperationSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$zero_trust_gateway_csv_operation_single = $client->ZeroTrustGatewayCsvOperationSingle()->create([
    "account_id" => null, // string
]);
```


### ZeroTrustGatewayCustomCertificateSetting

Create an instance: `$zero_trust_gateway_custom_certificate_setting = $client->ZeroTrustGatewayCustomCertificateSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `binding_status` | `string` | Indicate the internal certificate status. |
| `enabled` | `bool` | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| `id` | `string` | Specify the UUID of the certificate (ID from MTLS certificate store). |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustGatewayCustomCertificateSetting record (throws on error).
$zero_trust_gateway_custom_certificate_setting = $client->ZeroTrustGatewayCustomCertificateSetting()->load(["account_id" => "account_id"]);
```


### ZeroTrustGatewayGatewayAccount

Create an instance: `$zero_trust_gateway_gateway_account = $client->ZeroTrustGatewayGatewayAccount();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustGatewayGatewayAccount record (throws on error).
$zero_trust_gateway_gateway_account = $client->ZeroTrustGatewayGatewayAccount()->load(["account_id" => "account_id"]);
```

#### Example: Create

```php
$zero_trust_gateway_gateway_account = $client->ZeroTrustGatewayGatewayAccount()->create([
    "account_id" => null, // string
]);
```


### ZeroTrustGatewayGatewayAccountConfig

Create an instance: `$zero_trust_gateway_gateway_account_config = $client->ZeroTrustGatewayGatewayAccountConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |
| `settings` | `array` | Specify account settings. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustGatewayGatewayAccountConfig record (throws on error).
$zero_trust_gateway_gateway_account_config = $client->ZeroTrustGatewayGatewayAccountConfig()->load(["account_id" => "account_id"]);
```


### ZeroTrustGatewayGatewayAccountEgressCidrPairList

Create an instance: `$zero_trust_gateway_gateway_account_egress_cidr_pair_list = $client->ZeroTrustGatewayGatewayAccountEgressCidrPairList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ZeroTrustGatewayGatewayAccountEgressCidrPairList records (throws on error).
$zero_trust_gateway_gateway_account_egress_cidr_pair_lists = $client->ZeroTrustGatewayGatewayAccountEgressCidrPairList()->list();
```


### ZeroTrustGatewayGatewayAccountLoggingSetting

Create an instance: `$zero_trust_gateway_gateway_account_logging_setting = $client->ZeroTrustGatewayGatewayAccountLoggingSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `redact_pii` | `bool` | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `result` | `array` |  |
| `settings_by_rule_type` | `array` | Configure logging settings for each rule type. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustGatewayGatewayAccountLoggingSetting record (throws on error).
$zero_trust_gateway_gateway_account_logging_setting = $client->ZeroTrustGatewayGatewayAccountLoggingSetting()->load(["account_id" => "account_id"]);
```


### ZeroTrustGatewayListItemResponseCollection

Create an instance: `$zero_trust_gateway_list_item_response_collection = $client->ZeroTrustGatewayListItemResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` | Provide the list items. |
| `result_info` | `array` |  |

#### Example: List

```php
// list() returns an array of ZeroTrustGatewayListItemResponseCollection records (throws on error).
$zero_trust_gateway_list_item_response_collections = $client->ZeroTrustGatewayListItemResponseCollection()->list();
```


### ZeroTrustGatewayListSingle

Create an instance: `$zero_trust_gateway_list_single = $client->ZeroTrustGatewayListSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `append` | `array` | Add items to the list. |
| `description` | `string` | Provide the list description. |
| `items` | `array` | Add items to the list. |
| `name` | `string` | Specify the list name. |
| `remove` | `array` | Lists of item values you want to remove. |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustGatewayListSingle record (throws on error).
$zero_trust_gateway_list_single = $client->ZeroTrustGatewayListSingle()->load(["account_id" => "account_id", "list_id" => "list_id"]);
```


### ZeroTrustGatewayResponseCollection

Create an instance: `$zero_trust_gateway_response_collection = $client->ZeroTrustGatewayResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ZeroTrustGatewayResponseCollection records (throws on error).
$zero_trust_gateway_response_collections = $client->ZeroTrustGatewayResponseCollection()->list();
```


### ZeroTrustGatewayResponseCollection10

Create an instance: `$zero_trust_gateway_response_collection_10 = $client->ZeroTrustGatewayResponseCollection10();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |
| `result_info` | `array` |  |

#### Example: List

```php
// list() returns an array of ZeroTrustGatewayResponseCollection10 records (throws on error).
$zero_trust_gateway_response_collection_10s = $client->ZeroTrustGatewayResponseCollection10()->list();
```


### ZeroTrustGatewayResponseCollection2

Create an instance: `$zero_trust_gateway_response_collection_2 = $client->ZeroTrustGatewayResponseCollection2();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ZeroTrustGatewayResponseCollection2 records (throws on error).
$zero_trust_gateway_response_collection_2s = $client->ZeroTrustGatewayResponseCollection2()->list();
```


### ZeroTrustGatewayResponseCollection3

Create an instance: `$zero_trust_gateway_response_collection_3 = $client->ZeroTrustGatewayResponseCollection3();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ZeroTrustGatewayResponseCollection3 records (throws on error).
$zero_trust_gateway_response_collection_3s = $client->ZeroTrustGatewayResponseCollection3()->list();
```


### ZeroTrustGatewayResponseCollection4

Create an instance: `$zero_trust_gateway_response_collection_4 = $client->ZeroTrustGatewayResponseCollection4();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ZeroTrustGatewayResponseCollection4 records (throws on error).
$zero_trust_gateway_response_collection_4s = $client->ZeroTrustGatewayResponseCollection4()->list();
```


### ZeroTrustGatewayResponseCollection5

Create an instance: `$zero_trust_gateway_response_collection_5 = $client->ZeroTrustGatewayResponseCollection5();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ZeroTrustGatewayResponseCollection5 records (throws on error).
$zero_trust_gateway_response_collection_5s = $client->ZeroTrustGatewayResponseCollection5()->list();
```


### ZeroTrustGatewayResponseCollection6

Create an instance: `$zero_trust_gateway_response_collection_6 = $client->ZeroTrustGatewayResponseCollection6();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ZeroTrustGatewayResponseCollection6 records (throws on error).
$zero_trust_gateway_response_collection_6s = $client->ZeroTrustGatewayResponseCollection6()->list();
```


### ZeroTrustGatewayResponseCollection7

Create an instance: `$zero_trust_gateway_response_collection_7 = $client->ZeroTrustGatewayResponseCollection7();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ZeroTrustGatewayResponseCollection7 records (throws on error).
$zero_trust_gateway_response_collection_7s = $client->ZeroTrustGatewayResponseCollection7()->list();
```


### ZeroTrustGatewayResponseCollection8

Create an instance: `$zero_trust_gateway_response_collection_8 = $client->ZeroTrustGatewayResponseCollection8();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ZeroTrustGatewayResponseCollection8 records (throws on error).
$zero_trust_gateway_response_collection_8s = $client->ZeroTrustGatewayResponseCollection8()->list();
```


### ZeroTrustGatewayResponseCollection9

Create an instance: `$zero_trust_gateway_response_collection_9 = $client->ZeroTrustGatewayResponseCollection9();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ZeroTrustGatewayResponseCollection9 records (throws on error).
$zero_trust_gateway_response_collection_9s = $client->ZeroTrustGatewayResponseCollection9()->list();
```


### ZeroTrustGatewaySingle

Create an instance: `$zero_trust_gateway_single = $client->ZeroTrustGatewaySingle();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |
| `validity_period_days` | `int` | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustGatewaySingle record (throws on error).
$zero_trust_gateway_single = $client->ZeroTrustGatewaySingle()->load(["account_id" => "account_id", "certificate_id" => "certificate_id"]);
```

#### Example: Create

```php
$zero_trust_gateway_single = $client->ZeroTrustGatewaySingle()->create([
    "account_id" => null, // string
]);
```


### ZeroTrustGatewaySingleResponse2

Create an instance: `$zero_trust_gateway_single_response_2 = $client->ZeroTrustGatewaySingleResponse2();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustGatewaySingleResponse2 record (throws on error).
$zero_trust_gateway_single_response_2 = $client->ZeroTrustGatewaySingleResponse2()->load(["account_id" => "account_id", "operation_id" => "operation_id"]);
```


### ZeroTrustGatewaySingleResponse3

Create an instance: `$zero_trust_gateway_single_response_3 = $client->ZeroTrustGatewaySingleResponse3();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_default` | `bool` | Indicate whether this location is the default location. |
| `dns_destination_ips_id` | `string` | Specify the identifier of the pair of IPv4 addresses assigned to this location. |
| `ecs_support` | `bool` | Indicate whether the location must resolve EDNS queries. |
| `endpoints` | `array` | Configure the destination endpoints for this location. |
| `max_ttl` | `array` | Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. |
| `name` | `string` | Specify the location name. |
| `networks` | `array` | Specify the list of network ranges from which requests at this location originate. |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustGatewaySingleResponse3 record (throws on error).
$zero_trust_gateway_single_response_3 = $client->ZeroTrustGatewaySingleResponse3()->load(["account_id" => "account_id", "location_id" => "location_id"]);
```

#### Example: Create

```php
$zero_trust_gateway_single_response_3 = $client->ZeroTrustGatewaySingleResponse3()->create([
    "account_id" => null, // string
    "endpoints" => null, // array
    "max_ttl" => null, // array
    "name" => null, // string
]);
```


### ZeroTrustGatewaySingleResponse4

Create an instance: `$zero_trust_gateway_single_response_4 = $client->ZeroTrustGatewaySingleResponse4();`

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
| `enabled` | `bool` | Specify whether the rule is enabled. |
| `expiration` | `array` | Defines the expiration time stamp and default duration of a DNS policy. |
| `filters` | `array` | Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| `identity` | `string` | Specify the wirefilter expression used for identity matching. |
| `name` | `string` | Specify the rule name. |
| `precedence` | `int` | Set the order of your rules. |
| `result` | `array` |  |
| `rule_settings` | `array` | Defines settings for this rule. |
| `schedule` | `array` | Defines the schedule for activating DNS policies. |
| `traffic` | `string` | Specify the wirefilter expression used for traffic matching. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustGatewaySingleResponse4 record (throws on error).
$zero_trust_gateway_single_response_4 = $client->ZeroTrustGatewaySingleResponse4()->load(["account_id" => "account_id", "rule_id" => "rule_id"]);
```

#### Example: Create

```php
$zero_trust_gateway_single_response_4 = $client->ZeroTrustGatewaySingleResponse4()->create([
    "account_id" => null, // string
    "action" => null, // string
    "expiration" => null, // array
    "name" => null, // string
    "result" => null, // array
]);
```


### ZeroTrustGatewaySingleResponse5

Create an instance: `$zero_trust_gateway_single_response_5 = $client->ZeroTrustGatewaySingleResponse5();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ips` | `array` | Specify the list of CIDRs to restrict ingress connections. |
| `kind` | `string` | The proxy endpoint kind. |
| `name` | `string` | Specify the name of the proxy endpoint. |
| `result` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustGatewaySingleResponse5 record (throws on error).
$zero_trust_gateway_single_response_5 = $client->ZeroTrustGatewaySingleResponse5()->load(["account_id" => "account_id", "proxy_endpoint_id" => "proxy_endpoint_id"]);
```

#### Example: Create

```php
$zero_trust_gateway_single_response_5 = $client->ZeroTrustGatewaySingleResponse5()->create([
    "account_id" => null, // string
]);
```


### ZeroTrustGatewaySingleResponse6

Create an instance: `$zero_trust_gateway_single_response_6 = $client->ZeroTrustGatewaySingleResponse6();`

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
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustGatewaySingleResponse6 record (throws on error).
$zero_trust_gateway_single_response_6 = $client->ZeroTrustGatewaySingleResponse6()->load(["account_id" => "account_id"]);
```

#### Example: Create

```php
$zero_trust_gateway_single_response_6 = $client->ZeroTrustGatewaySingleResponse6()->create([
    "account_id" => null, // string
    "public_key" => null, // string
]);
```


### ZeroTrustGatewaySingleResponse7

Create an instance: `$zero_trust_gateway_single_response_7 = $client->ZeroTrustGatewaySingleResponse7();`

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
| `result` | `array` |  |
| `slug` | `string` | URL-friendly version of the PAC file name. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustGatewaySingleResponse7 record (throws on error).
$zero_trust_gateway_single_response_7 = $client->ZeroTrustGatewaySingleResponse7()->load(["account_id" => "account_id", "pacfile_id" => "pacfile_id"]);
```

#### Example: Create

```php
$zero_trust_gateway_single_response_7 = $client->ZeroTrustGatewaySingleResponse7()->create([
    "account_id" => null, // string
    "contents" => null, // string
    "name" => null, // string
]);
```


### ZeroTrustGatewaySingleResponseWithListItem

Create an instance: `$zero_trust_gateway_single_response_with_list_item = $client->ZeroTrustGatewaySingleResponseWithListItem();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Provide the list description. |
| `items` | `array` | Add items to the list. |
| `name` | `string` | Specify the list name. |
| `type` | `string` | Specify the list type. |

#### Example: Create

```php
$zero_trust_gateway_single_response_with_list_item = $client->ZeroTrustGatewaySingleResponseWithListItem()->create([
    "account_id" => null, // string
    "name" => null, // string
    "type" => null, // string
]);
```


### ZeroTrustRiskScoring

Create an instance: `$zero_trust_risk_scoring = $client->ZeroTrustRiskScoring();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `behaviors` | `array` |  |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustRiskScoring record (throws on error).
$zero_trust_risk_scoring = $client->ZeroTrustRiskScoring()->load(["account_id" => "account_id"]);
```

#### Example: Create

```php
$zero_trust_risk_scoring = $client->ZeroTrustRiskScoring()->create([
    "account_id" => null, // string
    "zt_risk_scoring_id" => null, // string
    "behaviors" => null, // array
    "result" => null, // array
]);
```


### ZeroTrustRiskScoringIntegration

Create an instance: `$zero_trust_risk_scoring_integration = $client->ZeroTrustRiskScoringIntegration();`

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
| `active` | `bool` | Whether this integration is enabled. |
| `id` | `string` |  |
| `integration_type` | `string` |  |
| `reference_id` | `string` | A reference id that can be supplied by the client. |
| `result` | `array` |  |
| `tenant_url` | `string` | The base url of the tenant, e.g. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZeroTrustRiskScoringIntegration record (throws on error).
$zero_trust_risk_scoring_integration = $client->ZeroTrustRiskScoringIntegration()->load(["id" => "zero_trust_risk_scoring_integration_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of ZeroTrustRiskScoringIntegration records (throws on error).
$zero_trust_risk_scoring_integrations = $client->ZeroTrustRiskScoringIntegration()->list();
```

#### Example: Create

```php
$zero_trust_risk_scoring_integration = $client->ZeroTrustRiskScoringIntegration()->create([
    "account_id" => null, // string
    "active" => null, // bool
    "integration_type" => null, // string
    "result" => null, // array
    "tenant_url" => null, // string
]);
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── cloudflarezerotrust_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`cloudflarezerotrust_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$zerotrustgatewaysingleresponse6 = $client->ZeroTrustGatewaySingleResponse6();
$zerotrustgatewaysingleresponse6->load(["account_id" => "example"]);

// $zerotrustgatewaysingleresponse6->data_get() now returns the zerotrustgatewaysingleresponse6 data from the last load
// $zerotrustgatewaysingleresponse6->match_get() returns the last match criteria
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
