# CloudflareZeroTrust Ruby SDK



The Ruby SDK for the CloudflareZeroTrust API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AlexandriaDeleteApplication` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-zero-trust-sdk/releases](https://github.com/voxgig-sdk/cloudflare-zero-trust-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "CloudflareZeroTrust_sdk"

client = CloudflareZeroTrustSDK.new({
  "apikey" => ENV["CLOUDFLARE_ZERO_TRUST_APIKEY"],
})
```

### 3. Load a nscdefaultname

NscDefaultName is nested under account, so provide the `account_id`.

```ruby
begin
  # load returns the ENTITY — call data_get for the NscDefaultName record (raises on error).
  nscdefaultname = client.NscDefaultName.load({ "account_id" => "example_account_id", "interconnect_id" => "example_interconnect_id" })
  puts nscdefaultname
rescue => err
  warn "load failed: #{err}"
end
```

### 4. Create, update, and remove

```ruby
# Remove
client.AlexandriaDeleteApplication.remove({ "account_id" => "example_account_id", "id" => 1 })
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  teamsdevicesglobalwarpoverride = client.TeamsDevicesGlobalWarpOverride.load({ "account_id" => "example" })
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = CloudflareZeroTrustSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
teamsdevicesglobalwarpoverride = client.TeamsDevicesGlobalWarpOverride.load({ "account_id" => "example" })
puts teamsdevicesglobalwarpoverride
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CloudflareZeroTrustSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CloudflareZeroTrustSDK

```ruby
require_relative "CloudflareZeroTrust_sdk"
client = CloudflareZeroTrustSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CloudflareZeroTrustSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareZeroTrustSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `AlexandriaDeleteApplication` | `(data) -> AlexandriaDeleteApplicationEntity` | Create an AlexandriaDeleteApplication entity instance. |
| `AlexandriaGetApplication` | `(data) -> AlexandriaGetApplicationEntity` | Create an AlexandriaGetApplication entity instance. |
| `AlexandriaGetCategory` | `(data) -> AlexandriaGetCategoryEntity` | Create an AlexandriaGetCategory entity instance. |
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
| `Integration` | `(data) -> IntegrationEntity` | Create an Integration entity instance. |
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
| `OneApplicationDetail` | `(data) -> OneApplicationDetailEntity` | Create an OneApplicationDetail entity instance. |
| `OneIntegrationCreate` | `(data) -> OneIntegrationCreateEntity` | Create an OneIntegrationCreate entity instance. |
| `OneIntegrationDetail` | `(data) -> OneIntegrationDetailEntity` | Create an OneIntegrationDetail entity instance. |
| `OneIntegrationPause` | `(data) -> OneIntegrationPauseEntity` | Create an OneIntegrationPause entity instance. |
| `OneIntegrationResume` | `(data) -> OneIntegrationResumeEntity` | Create an OneIntegrationResume entity instance. |
| `OneIntegrationUpdate` | `(data) -> OneIntegrationUpdateEntity` | Create an OneIntegrationUpdate entity instance. |
| `OnePaginatedApplicationListList` | `(data) -> OnePaginatedApplicationListListEntity` | Create an OnePaginatedApplicationListList entity instance. |
| `OnePaginatedAuthMethodDetailList` | `(data) -> OnePaginatedAuthMethodDetailListEntity` | Create an OnePaginatedAuthMethodDetailList entity instance. |
| `OnePaginatedIntegrationV2ListItemList` | `(data) -> OnePaginatedIntegrationV2ListItemListEntity` | Create an OnePaginatedIntegrationV2ListItemList entity instance. |
| `OnePaginatedSetupFlowList` | `(data) -> OnePaginatedSetupFlowListEntity` | Create an OnePaginatedSetupFlowList entity instance. |
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
| `TeamsDevicesDevicesPolicyCertificatesSingle` | `(data) -> TeamsDevicesDevicesPolicyCertificatesSingleEntity` | Create a TeamsDevicesDevicesPolicyCertificatesSingle entity instance. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `CloudflareZeroTrustError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### AlexandriaDeleteApplication

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/resource-library/applications/{id}`

#### AlexandriaGetApplication

| Field | Description |
| --- | --- |
| `category_id` | Returns the category ID. |
| `errors` |  |
| `hostnames` | Hostnames matched by the application. |
| `human_id` | Returns the human readable ID. |
| `id` |  |
| `ip_subnets` | IP subnets for this application. |
| `messages` |  |
| `name` | Returns the application name. |
| `port_protocols` | Port and protocol pairs matched by the application. |
| `result` | Returns the list of applications. |
| `success` | Indicates whether the API call was successful. |
| `support_domains` | Support domains matched by the application. |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/resource-library/applications`

#### AlexandriaGetCategory

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | Returns the list of categories. |
| `success` | Indicates whether the API call was successful. |

Operations: List, Load.

API path: `/accounts/{account_id}/resource-library/categories`

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

#### Integration

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/one/integrations/{id}`

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

#### OneApplicationDetail

| Field | Description |
| --- | --- |
| `errors` | List of errors. |
| `messages` | List of messages. |
| `result` | The requested item. |
| `success` | Whether the request succeeded. |

Operations: Load.

API path: `/accounts/{account_id}/one/applications/{application_id}`

#### OneIntegrationCreate

| Field | Description |
| --- | --- |
| `application` | Vendor/application slug (e.g., GOOGLE_WORKSPACE). |
| `auth_method` | Authentication method slug (uses default if omitted). |
| `credentials` | Credentials for the integration. |
| `dlp_profiles` | List of DLP profile IDs to associate. |
| `name` | Name of the integration. |
| `permissions` | List of permission scopes (uses policy defaults if empty). |
| `use_cases` | List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']). |

Operations: Create.

API path: `/accounts/{account_id}/one/integrations`

#### OneIntegrationDetail

| Field | Description |
| --- | --- |
| `errors` | List of errors. |
| `id` |  |
| `messages` | List of messages. |
| `result` | The requested item. |
| `success` | Whether the request succeeded. |

Operations: Load.

API path: `/accounts/{account_id}/one/integrations/{id}`

#### OneIntegrationPause

| Field | Description |
| --- | --- |
| `errors` | List of errors. |
| `messages` | List of messages. |
| `result` | The requested item. |
| `success` | Whether the request succeeded. |

Operations: Create.

API path: `/accounts/{account_id}/one/integrations/{id}/pause`

#### OneIntegrationResume

| Field | Description |
| --- | --- |
| `errors` | List of errors. |
| `messages` | List of messages. |
| `result` | The requested item. |
| `success` | Whether the request succeeded. |

Operations: Create.

API path: `/accounts/{account_id}/one/integrations/{id}/resume`

#### OneIntegrationUpdate

| Field | Description |
| --- | --- |
| `credentials` | Partial credential fields to merge with existing. |
| `dlp_profiles` | List of DLP profile IDs to associate with the integration. |
| `errors` | List of errors. |
| `id` |  |
| `messages` | List of messages. |
| `name` | Name of the integration. |
| `permissions` | List of permission scopes granted to the integration. |
| `result` | The requested item. |
| `success` | Whether the request succeeded. |
| `use_cases` | List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']). |

Operations: Update.

API path: `/accounts/{account_id}/one/integrations/{id}`

#### OnePaginatedApplicationListList

| Field | Description |
| --- | --- |
| `auth_methods` | Available auth methods. |
| `category` | Vendor category (e.g. |
| `description` | Brief description of the integration. |
| `display_name` | Human-readable vendor name. |
| `dlp_enabled` | Whether DLP scanning is supported. |
| `id` | Vendor identifier (e.g. |
| `logo` | Logo path. |
| `permissions` | All permissions with severity. |
| `supported_environments` | Environments this vendor supports (standard, fedramp). |
| `use_cases` | Supported use cases. |

Operations: List.

API path: `/accounts/{account_id}/one/applications`

#### OnePaginatedAuthMethodDetailList

| Field | Description |
| --- | --- |
| `display_name` | Human-readable auth method name. |
| `human_interaction_required` | Whether setup requires human interaction or integration can be created purely using API (e.g., For OAuth can not be created without user interaction). |
| `id` | Auth method identifier. |
| `instructions` | Step-by-step instructions for obtaining credentials. |
| `payload_example` | Example credentials payload with placeholder values. |
| `payload_schema` | JSON Schema for the credentials object in POST /v2/integrations request. |
| `redirect_url` | OAuth redirect URL for vendors requiring human interaction. |

Operations: List.

API path: `/accounts/{account_id}/one/applications/{application_id}/auth-methods`

#### OnePaginatedIntegrationV2ListItemList

| Field | Description |
| --- | --- |
| `application` |  |
| `created` | When the integration was created. |
| `id` | Integration ID. |
| `is_paused` | Whether the user paused the integration. |
| `name` | Name of the integration. |
| `status` | Integration status. |
| `updated` | When the integration was last updated. |

Operations: List.

API path: `/accounts/{account_id}/one/integrations`

#### OnePaginatedSetupFlowList

| Field | Description |
| --- | --- |
| `auth_config` | OAuth configuration (present for OAuth-based flows). |
| `default` | Whether this is the default auth method. |
| `description` | Flow description. |
| `id` | Setup flow identifier. |
| `name` | Human-readable flow name. |
| `steps` | Ordered list of setup steps. |
| `supported_environments` | Environments this auth method supports (standard, fedramp). |

Operations: List.

API path: `/accounts/{account_id}/one/applications/{application_id}/setup-flows`

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

#### TeamsDevicesDevicesPolicyCertificatesSingle

| Field | Description |
| --- | --- |
| `enabled` | The current status of the device policy certificate provisioning feature for WARP clients. |
| `result` |  |

Operations: Load, Update.

API path: `/zones/{zone_id}/devices/policy/certificates`

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


### AlexandriaDeleteApplication

Create an instance: `alexandria_delete_application = client.AlexandriaDeleteApplication`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### AlexandriaGetApplication

Create an instance: `alexandria_get_application = client.AlexandriaGetApplication`

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
| `category_id` | `Integer` | Returns the category ID. |
| `errors` | `Array` |  |
| `hostnames` | `Array` | Hostnames matched by the application. |
| `human_id` | `String` | Returns the human readable ID. |
| `id` | `String` |  |
| `ip_subnets` | `Array` | IP subnets for this application. |
| `messages` | `Array` |  |
| `name` | `String` | Returns the application name. |
| `port_protocols` | `Array` | Port and protocol pairs matched by the application. |
| `result` | `Hash` | Returns the list of applications. |
| `success` | `Boolean` | Indicates whether the API call was successful. |
| `support_domains` | `Array` | Support domains matched by the application. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AlexandriaGetApplication record (raises on error).
alexandria_get_application = client.AlexandriaGetApplication.load({ "id" => 1, "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of AlexandriaGetApplication records (raises on error).
alexandria_get_applications = client.AlexandriaGetApplication.list
```

#### Example: Create

```ruby
alexandria_get_application = client.AlexandriaGetApplication.create({
  "account_id" => "example_account_id", # String
  "category_id" => 1, # Integer
  "errors" => [], # Array
  "human_id" => "example_human_id", # String
  "messages" => [], # Array
  "name" => "example_name", # String
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### AlexandriaGetCategory

Create an instance: `alexandria_get_category = client.AlexandriaGetCategory`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Hash` | Returns the list of categories. |
| `success` | `Boolean` | Indicates whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AlexandriaGetCategory record (raises on error).
alexandria_get_category = client.AlexandriaGetCategory.load({ "id" => 1, "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of AlexandriaGetCategory records (raises on error).
alexandria_get_categorys = client.AlexandriaGetCategory.list
```


### ClientVersion

Create an instance: `client_version = client.ClientVersion`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` | Indicates whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of ClientVersion records (raises on error).
client_versions = client.ClientVersion.list
```


### Cni

Create an instance: `cni = client.Cni`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### DeploymentGroup

Create an instance: `deployment_group = client.DeploymentGroup`

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
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `name` | `String` | A user-friendly name for the deployment group. |
| `policy_ids` | `Array` | Contains an optional list of policy IDs assigned to a group. |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `success` | `Boolean` | Indicates whether the API call was successful. |
| `version_config` | `Array` | Contains at least one version configuration. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DeploymentGroup record (raises on error).
deployment_group = client.DeploymentGroup.load({ "id" => "deployment_group_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of DeploymentGroup records (raises on error).
deployment_groups = client.DeploymentGroup.list
```

#### Example: Create

```ruby
deployment_group = client.DeploymentGroup.create({
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


### DexRemoteCommand

Create an instance: `dex_remote_command = client.DexRemoteCommand`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commands` | `Array` | List of device-level commands to execute |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DexRemoteCommand record (raises on error).
dex_remote_command = client.DexRemoteCommand.load({ "account_id" => "account_id" })
```

#### Example: Create

```ruby
dex_remote_command = client.DexRemoteCommand.create({
  "account_id" => "example_account_id", # String
  "commands" => [], # Array
})
```


### DexRule

Create an instance: `dex_rule = client.DexRule`

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
| `description` | `String` |  |
| `id` | `String` |  |
| `match` | `String` | The wirefilter expression to match. |
| `name` | `String` | The name of the Rule. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DexRule record (raises on error).
dex_rule = client.DexRule.load({ "id" => "dex_rule_id", "account_id" => "account_id" })
```

#### Example: Create

```ruby
dex_rule = client.DexRule.create({
  "account_id" => "example_account_id", # String
  "match" => "example_match", # String
  "name" => "example_name", # String
})
```


### DexSyntheticApplicationMonitoring

Create an instance: `dex_synthetic_application_monitoring = client.DexSyntheticApplicationMonitoring`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` | array of colos. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DexSyntheticApplicationMonitoring record (raises on error).
dex_synthetic_application_monitoring = client.DexSyntheticApplicationMonitoring.load({ "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of DexSyntheticApplicationMonitoring records (raises on error).
dex_synthetic_application_monitorings = client.DexSyntheticApplicationMonitoring.list
```


### DigitalExperienceMonitoringDevice

Create an instance: `digital_experience_monitoring_device = client.DigitalExperienceMonitoringDevice`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alwaysOn` | `Boolean` |  |
| `batteryCharging` | `Boolean` |  |
| `batteryCycles` | `Integer` |  |
| `batteryPct` | `Float` |  |
| `colo` | `String` | Cloudflare colo airport code. |
| `connectionType` | `String` |  |
| `cpuPct` | `Float` |  |
| `cpuPctByApp` | `Array` |  |
| `deviceId` | `String` | Device identifier (UUID v4) |
| `deviceIpv4` | `Hash` |  |
| `deviceIpv6` | `Hash` |  |
| `deviceName` | `String` | Device identifier (human readable). |
| `deviceRegistration` | `String` | Deprecated: use registrationId. |
| `diskReadBps` | `Integer` |  |
| `diskUsagePct` | `Float` |  |
| `diskWriteBps` | `Integer` |  |
| `dohSubdomain` | `String` |  |
| `estimatedLossPct` | `Float` |  |
| `firewallEnabled` | `Boolean` |  |
| `gatewayIpv4` | `Hash` |  |
| `gatewayIpv6` | `Hash` |  |
| `handshakeLatencyMs` | `Float` |  |
| `ispIpv4` | `Hash` |  |
| `ispIpv6` | `Hash` |  |
| `metal` | `String` |  |
| `mode` | `String` | The mode under which the WARP client is run. |
| `networkRcvdBps` | `Integer` |  |
| `networkSentBps` | `Integer` |  |
| `networkSsid` | `String` |  |
| `personEmail` | `String` | User contact email address |
| `platform` | `String` | Operating system. |
| `ramAvailableKb` | `Integer` |  |
| `ramUsedPct` | `Float` |  |
| `ramUsedPctByApp` | `Array` |  |
| `registrationId` | `String` | Device registration identifier (UUID v4). |
| `rtt` | `Hash` | Round-trip time statistics for the WARP tunnel. |
| `status` | `String` | Network status. |
| `switchLocked` | `Boolean` |  |
| `timestamp` | `String` |  |
| `tunnelStats` | `Hash` | WARP tunnel packet and byte counters. |
| `tunnelType` | `String` |  |
| `version` | `String` | WARP client version. |
| `wifiStrengthDbm` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of DigitalExperienceMonitoringDevice records (raises on error).
digital_experience_monitoring_devices = client.DigitalExperienceMonitoringDevice.list
```


### DigitalExperienceMonitoringDexDeleteResponseCollection

Create an instance: `digital_experience_monitoring_dex_delete_response_collection = client.DigitalExperienceMonitoringDexDeleteResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DigitalExperienceMonitoringDexResponseCollection

Create an instance: `digital_experience_monitoring_dex_response_collection = client.DigitalExperienceMonitoringDexResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of DigitalExperienceMonitoringDexResponseCollection records (raises on error).
digital_experience_monitoring_dex_response_collections = client.DigitalExperienceMonitoringDexResponseCollection.list
```


### DigitalExperienceMonitoringDexSingle

Create an instance: `digital_experience_monitoring_dex_single = client.DigitalExperienceMonitoringDexSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `String` | Date the test was created, in RFC 3339 format. |
| `data` | `Hash` | The configuration object which contains the details for the WARP client to conduct the test. |
| `description` | `String` | Additional details about the test. |
| `enabled` | `Boolean` | Determines whether or not the test is active. |
| `interval` | `String` | How often the test will run. |
| `name` | `String` | The name of the DEX test. |
| `result` | `Hash` |  |
| `target_policies` | `Object` |  |
| `targeted` | `Boolean` |  |
| `test_id` | `String` | The unique identifier for the test. |
| `updated` | `String` | Date the test was last updated, in RFC 3339 format. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DigitalExperienceMonitoringDexSingle record (raises on error).
digital_experience_monitoring_dex_single = client.DigitalExperienceMonitoringDexSingle.load({ "account_id" => "account_id", "dex_test_id" => "dex_test_id" })
```

#### Example: Create

```ruby
digital_experience_monitoring_dex_single = client.DigitalExperienceMonitoringDexSingle.create({
  "account_id" => "example_account_id", # String
  "data" => {}, # Hash
  "enabled" => true, # Boolean
  "interval" => "example_interval", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```


### DigitalExperienceMonitoringFleetStatusDevice

Create an instance: `digital_experience_monitoring_fleet_status_device = client.DigitalExperienceMonitoringFleetStatusDevice`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of DigitalExperienceMonitoringFleetStatusDevice records (raises on error).
digital_experience_monitoring_fleet_status_devices = client.DigitalExperienceMonitoringFleetStatusDevice.list
```


### DigitalExperienceMonitoringFleetStatusLive

Create an instance: `digital_experience_monitoring_fleet_status_live = client.DigitalExperienceMonitoringFleetStatusLive`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DigitalExperienceMonitoringFleetStatusLive record (raises on error).
digital_experience_monitoring_fleet_status_live = client.DigitalExperienceMonitoringFleetStatusLive.load({ "account_id" => "account_id", "since_minute" => 1 })
```


### DigitalExperienceMonitoringFleetStatusOverTime

Create an instance: `digital_experience_monitoring_fleet_status_over_time = client.DigitalExperienceMonitoringFleetStatusOverTime`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DigitalExperienceMonitoringFleetStatusOverTime record (raises on error).
digital_experience_monitoring_fleet_status_over_time = client.DigitalExperienceMonitoringFleetStatusOverTime.load({ "account_id" => "account_id", "from" => "from", "to" => "to" })
```


### Integration

Create an instance: `integration = client.Integration`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### Interconnect

Create an instance: `interconnect = client.Interconnect`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Interconnect record (raises on error).
interconnect = client.Interconnect.load({ "account_id" => "account_id", "icon" => "icon" })
```


### IpProfile

Create an instance: `ip_profile = client.IpProfile`

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
| `description` | `String` | An optional description of the Device IP profile. |
| `enabled` | `Boolean` | Whether the Device IP profile will be applied to matching devices. |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `match` | `String` | The wirefilter expression to match registrations. |
| `messages` | `Array` |  |
| `name` | `String` | A user-friendly name for the Device IP profile. |
| `precedence` | `Integer` | The precedence of the Device IP profile. |
| `result` | `Hash` |  |
| `result_info` | `Hash` |  |
| `subnet_id` | `String` | The ID of the Subnet. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IpProfile record (raises on error).
ip_profile = client.IpProfile.load({ "id" => "ip_profile_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of IpProfile records (raises on error).
ip_profiles = client.IpProfile.list
```

#### Example: Create

```ruby
ip_profile = client.IpProfile.create({
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


### List

Create an instance: `list = client.List`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### Location

Create an instance: `location = client.Location`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### NscCni

Create an instance: `nsc_cni = client.NscCni`

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
| `account` | `String` | Customer account tag |
| `bgp` | `Hash` |  |
| `bgp_mode` | `String` | The BGP mode for a CNI. |
| `cust_ip` | `String` | Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`. |
| `id` | `String` |  |
| `interconnect` | `String` | Interconnect identifier hosting this CNI |
| `magic` | `Hash` |  |
| `p2p_ip` | `String` | Cloudflare end of the point-to-point link |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the NscCni record (raises on error).
nsc_cni = client.NscCni.load({ "id" => "nsc_cni_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of NscCni records (raises on error).
nsc_cnis = client.NscCni.list
```

#### Example: Create

```ruby
nsc_cni = client.NscCni.create({
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


### NscDefaultName

Create an instance: `nsc_default_name = client.NscDefaultName`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `String` | The default customer name for the interconnect |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the NscDefaultName record (raises on error).
nsc_default_name = client.NscDefaultName.load({ "account_id" => "account_id", "interconnect_id" => "interconnect_id" })
```


### NscInterconnect

Create an instance: `nsc_interconnect = client.NscInterconnect`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `items` | `Array` |  |
| `next` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the NscInterconnect record (raises on error).
nsc_interconnect = client.NscInterconnect.load({ "id" => "nsc_interconnect_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of NscInterconnect records (raises on error).
nsc_interconnects = client.NscInterconnect.list
```

#### Example: Create

```ruby
nsc_interconnect = client.NscInterconnect.create({
  "account_id" => "example_account_id", # String
  "items" => [], # Array
})
```


### NscSetting

Create an instance: `nsc_setting = client.NscSetting`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_asn` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the NscSetting record (raises on error).
nsc_setting = client.NscSetting.load({ "account_id" => "account_id" })
```


### NscSlotInfo

Create an instance: `nsc_slot_info = client.NscSlotInfo`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `String` | Customer account tag |
| `address` | `Array` |  |
| `ccr_device_name` | `String` |  |
| `facility` | `Hash` |  |
| `id` | `String` | Slot ID |
| `name` | `String` |  |
| `occupied` | `Boolean` | Whether the slot is occupied or not |
| `site` | `String` |  |
| `speed` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the NscSlotInfo record (raises on error).
nsc_slot_info = client.NscSlotInfo.load({ "account_id" => "account_id", "slot" => "slot" })
```

#### Example: List

```ruby
# list returns an Array of NscSlotInfo records (raises on error).
nsc_slot_infos = client.NscSlotInfo.list
```


### NscStatusInfo

Create an instance: `nsc_status_info = client.NscStatusInfo`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the NscStatusInfo record (raises on error).
nsc_status_info = client.NscStatusInfo.load({ "account_id" => "account_id", "icon" => "icon" })
```


### OneApplicationDetail

Create an instance: `one_application_detail = client.OneApplicationDetail`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` | List of errors. |
| `messages` | `Array` | List of messages. |
| `result` | `Object` | The requested item. |
| `success` | `Boolean` | Whether the request succeeded. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the OneApplicationDetail record (raises on error).
one_application_detail = client.OneApplicationDetail.load({ "account_id" => "account_id", "application_id" => "application_id" })
```


### OneIntegrationCreate

Create an instance: `one_integration_create = client.OneIntegrationCreate`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `String` | Vendor/application slug (e.g., GOOGLE_WORKSPACE). |
| `auth_method` | `String` | Authentication method slug (uses default if omitted). |
| `credentials` | `Hash` | Credentials for the integration. |
| `dlp_profiles` | `Array` | List of DLP profile IDs to associate. |
| `name` | `String` | Name of the integration. |
| `permissions` | `Array` | List of permission scopes (uses policy defaults if empty). |
| `use_cases` | `Array` | List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']). |

#### Example: Create

```ruby
one_integration_create = client.OneIntegrationCreate.create({
  "account_id" => "example_account_id", # String
  "application" => "example_application", # String
  "credentials" => {}, # Hash
  "name" => "example_name", # String
})
```


### OneIntegrationDetail

Create an instance: `one_integration_detail = client.OneIntegrationDetail`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` | List of errors. |
| `id` | `String` |  |
| `messages` | `Array` | List of messages. |
| `result` | `Object` | The requested item. |
| `success` | `Boolean` | Whether the request succeeded. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the OneIntegrationDetail record (raises on error).
one_integration_detail = client.OneIntegrationDetail.load({ "id" => "one_integration_detail_id", "account_id" => "account_id" })
```


### OneIntegrationPause

Create an instance: `one_integration_pause = client.OneIntegrationPause`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` | List of errors. |
| `messages` | `Array` | List of messages. |
| `result` | `Object` | The requested item. |
| `success` | `Boolean` | Whether the request succeeded. |

#### Example: Create

```ruby
one_integration_pause = client.OneIntegrationPause.create({
  "account_id" => "example_account_id", # String
  "integration_id" => "example_integration_id", # String
  "result" => "example_result", # Object
  "success" => true, # Boolean
})
```


### OneIntegrationResume

Create an instance: `one_integration_resume = client.OneIntegrationResume`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` | List of errors. |
| `messages` | `Array` | List of messages. |
| `result` | `Object` | The requested item. |
| `success` | `Boolean` | Whether the request succeeded. |

#### Example: Create

```ruby
one_integration_resume = client.OneIntegrationResume.create({
  "account_id" => "example_account_id", # String
  "integration_id" => "example_integration_id", # String
  "result" => "example_result", # Object
  "success" => true, # Boolean
})
```


### OneIntegrationUpdate

Create an instance: `one_integration_update = client.OneIntegrationUpdate`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credentials` | `Hash` | Partial credential fields to merge with existing. |
| `dlp_profiles` | `Array` | List of DLP profile IDs to associate with the integration. |
| `errors` | `Array` | List of errors. |
| `id` | `String` |  |
| `messages` | `Array` | List of messages. |
| `name` | `String` | Name of the integration. |
| `permissions` | `Array` | List of permission scopes granted to the integration. |
| `result` | `Object` | The requested item. |
| `success` | `Boolean` | Whether the request succeeded. |
| `use_cases` | `Array` | List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']). |


### OnePaginatedApplicationListList

Create an instance: `one_paginated_application_list_list = client.OnePaginatedApplicationListList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_methods` | `Array` | Available auth methods. |
| `category` | `String` | Vendor category (e.g. |
| `description` | `String` | Brief description of the integration. |
| `display_name` | `String` | Human-readable vendor name. |
| `dlp_enabled` | `Boolean` | Whether DLP scanning is supported. |
| `id` | `String` | Vendor identifier (e.g. |
| `logo` | `String` | Logo path. |
| `permissions` | `Array` | All permissions with severity. |
| `supported_environments` | `Array` | Environments this vendor supports (standard, fedramp). |
| `use_cases` | `Array` | Supported use cases. |

#### Example: List

```ruby
# list returns an Array of OnePaginatedApplicationListList records (raises on error).
one_paginated_application_list_lists = client.OnePaginatedApplicationListList.list
```


### OnePaginatedAuthMethodDetailList

Create an instance: `one_paginated_auth_method_detail_list = client.OnePaginatedAuthMethodDetailList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `String` | Human-readable auth method name. |
| `human_interaction_required` | `Boolean` | Whether setup requires human interaction or integration can be created purely using API (e.g., For OAuth can not be created without user interaction). |
| `id` | `String` | Auth method identifier. |
| `instructions` | `Object` | Step-by-step instructions for obtaining credentials. |
| `payload_example` | `Hash` | Example credentials payload with placeholder values. |
| `payload_schema` | `Hash` | JSON Schema for the credentials object in POST /v2/integrations request. |
| `redirect_url` | `String` | OAuth redirect URL for vendors requiring human interaction. |

#### Example: List

```ruby
# list returns an Array of OnePaginatedAuthMethodDetailList records (raises on error).
one_paginated_auth_method_detail_lists = client.OnePaginatedAuthMethodDetailList.list
```


### OnePaginatedIntegrationV2ListItemList

Create an instance: `one_paginated_integration_v2_list_item_list = client.OnePaginatedIntegrationV2ListItemList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `Hash` |  |
| `created` | `String` | When the integration was created. |
| `id` | `String` | Integration ID. |
| `is_paused` | `Boolean` | Whether the user paused the integration. |
| `name` | `String` | Name of the integration. |
| `status` | `String` | Integration status. |
| `updated` | `String` | When the integration was last updated. |

#### Example: List

```ruby
# list returns an Array of OnePaginatedIntegrationV2ListItemList records (raises on error).
one_paginated_integration_v2_list_item_lists = client.OnePaginatedIntegrationV2ListItemList.list
```


### OnePaginatedSetupFlowList

Create an instance: `one_paginated_setup_flow_list = client.OnePaginatedSetupFlowList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_config` | `Object` | OAuth configuration (present for OAuth-based flows). |
| `default` | `Boolean` | Whether this is the default auth method. |
| `description` | `String` | Flow description. |
| `id` | `String` | Setup flow identifier. |
| `name` | `String` | Human-readable flow name. |
| `steps` | `Array` | Ordered list of setup steps. |
| `supported_environments` | `Array` | Environments this auth method supports (standard, fedramp). |

#### Example: List

```ruby
# list returns an Array of OnePaginatedSetupFlowList records (raises on error).
one_paginated_setup_flow_lists = client.OnePaginatedSetupFlowList.list
```


### OverrideCode

Create an instance: `override_code = client.OverrideCode`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `device_id` | `String` | Physical device ID. |
| `duration_hours` | `Integer` | Number of hours for which the override code should remain valid. |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `scope` | `String` | Whether the code applies to every device in the account or one physical device. |
| `success` | `Boolean` | Whether the API call was successful. |
| `type` | `String` | The feature that the override code applies to. |

#### Example: Create

```ruby
override_code = client.OverrideCode.create({
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


### Pacfile

Create an instance: `pacfile = client.Pacfile`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### PhysicalDevice

Create an instance: `physical_device = client.PhysicalDevice`

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
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Hash` | A WARP Device. |
| `result_info` | `Hash` | V4 public API Pagination/Cursor info. |
| `success` | `Boolean` | Whether the API call was successful. |
| `tags` | `Hash` | Replaces all tags assigned to the physical device. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PhysicalDevice record (raises on error).
physical_device = client.PhysicalDevice.load({ "id" => "physical_device_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of PhysicalDevice records (raises on error).
physical_devices = client.PhysicalDevice.list
```

#### Example: Create

```ruby
physical_device = client.PhysicalDevice.create({
  "account_id" => "example_account_id", # String
  "id" => "example_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```


### ProxyEndpoint

Create an instance: `proxy_endpoint = client.ProxyEndpoint`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### Registration

Create an instance: `registration = client.Registration`

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
| `errors` | `Array` |  |
| `id` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Hash` | A WARP configuration tied to a single user. |
| `result_info` | `Hash` | V4 public API Pagination/Cursor info. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Registration record (raises on error).
registration = client.Registration.load({ "id" => "registration_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of Registration records (raises on error).
registrations = client.Registration.list
```

#### Example: Create

```ruby
registration = client.Registration.create({
  "account_id" => "example_account_id", # String
  "id" => [], # Array
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```


### Rule

Create an instance: `rule = client.Rule`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### TeamsDevicesApiResponseSingle

Create an instance: `teams_devices_api_response_single = client.TeamsDevicesApiResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
teams_devices_api_response_single = client.TeamsDevicesApiResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```


### TeamsDevicesComponentsSchemasResponseCollection

Create an instance: `teams_devices_components_schemas_response_collection = client.TeamsDevicesComponentsSchemasResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TeamsDevicesComponentsSchemasResponseCollection records (raises on error).
teams_devices_components_schemas_response_collections = client.TeamsDevicesComponentsSchemasResponseCollection.list
```


### TeamsDevicesComponentsSchemasSingle

Create an instance: `teams_devices_components_schemas_single = client.TeamsDevicesComponentsSchemasSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Hash` | The configuration object containing information for the WARP client to detect the managed network. |
| `name` | `String` | The name of the device managed network. |
| `result` | `Hash` |  |
| `type` | `String` | The type of device managed network. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TeamsDevicesComponentsSchemasSingle record (raises on error).
teams_devices_components_schemas_single = client.TeamsDevicesComponentsSchemasSingle.load({ "account_id" => "account_id", "network_id" => "network_id" })
```

#### Example: Create

```ruby
teams_devices_components_schemas_single = client.TeamsDevicesComponentsSchemasSingle.create({
  "account_id" => "example_account_id", # String
  "config" => {}, # Hash
  "name" => "example_name", # String
  "type" => "example_type", # String
})
```


### TeamsDevicesDefaultDeviceSetting

Create an instance: `teams_devices_default_device_setting = client.TeamsDevicesDefaultDeviceSetting`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_mode_switch` | `Boolean` | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `Boolean` | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `Boolean` | Whether to allow devices to leave the organization. |
| `auto_connect` | `Float` | The amount of time in seconds to reconnect after having been disabled. |
| `captive_portal` | `Float` | Turn on the captive portal after the specified amount of time. |
| `disable_auto_fallback` | `Boolean` | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `Array` | List of DNS search suffixes to apply to clients. |
| `exclude` | `Array` | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `Boolean` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `Hash` | Global Acceleration settings for China. |
| `include` | `Array` | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `Float` | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `Float` | The size of the subnet for the local access network. |
| `register_interface_ip_with_dns` | `Boolean` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `Hash` |  |
| `sccm_vpn_boundary_support` | `Boolean` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `Hash` |  |
| `support_url` | `String` | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `Boolean` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `String` | Determines which tunnel protocol to use. |
| `uninstall_protection` | `Boolean` | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `Hash` | Virtual network access settings for the device. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TeamsDevicesDefaultDeviceSetting record (raises on error).
teams_devices_default_device_setting = client.TeamsDevicesDefaultDeviceSetting.load({ "account_id" => "account_id" })
```


### TeamsDevicesDevice

Create an instance: `teams_devices_device = client.TeamsDevicesDevice`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TeamsDevicesDevice record (raises on error).
teams_devices_device = client.TeamsDevicesDevice.load({ "id" => "teams_devices_device_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of TeamsDevicesDevice records (raises on error).
teams_devices_devices = client.TeamsDevicesDevice.list
```


### TeamsDevicesDeviceSetting

Create an instance: `teams_devices_device_setting = client.TeamsDevicesDeviceSetting`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_mode_switch` | `Boolean` | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `Boolean` | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `Boolean` | Whether to allow devices to leave the organization. |
| `auto_connect` | `Float` | The amount of time in seconds to reconnect after having been disabled. |
| `browser_extension_config` | `Hash` | Browser extension proxy settings. |
| `captive_portal` | `Float` | Turn on the captive portal after the specified amount of time. |
| `default` | `Boolean` | Whether the policy is the account default. |
| `description` | `String` | A description of the policy. |
| `disable_auto_fallback` | `Boolean` | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `Array` | List of DNS search suffixes to apply to clients. |
| `enabled` | `Boolean` | Whether the policy will be applied to matching devices. |
| `exclude` | `Array` | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `Boolean` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `Hash` | Global Acceleration settings for China. |
| `include` | `Array` | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `Float` | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `Float` | The size of the subnet for the local access network. |
| `match` | `String` | The wirefilter expression to match devices. |
| `name` | `String` | The name of the device settings profile. |
| `precedence` | `Float` | The precedence of the policy. |
| `profile_type` | `String` | The client type to which the device settings profile applies. |
| `register_interface_ip_with_dns` | `Boolean` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `Hash` |  |
| `sccm_vpn_boundary_support` | `Boolean` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `Hash` |  |
| `support_url` | `String` | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `Boolean` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `String` | Determines which tunnel protocol to use. |
| `uninstall_protection` | `Boolean` | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `Hash` | Virtual network access settings for the device. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TeamsDevicesDeviceSetting record (raises on error).
teams_devices_device_setting = client.TeamsDevicesDeviceSetting.load({ "account_id" => "account_id", "policy_id" => "policy_id" })
```

#### Example: Create

```ruby
teams_devices_device_setting = client.TeamsDevicesDeviceSetting.create({
  "account_id" => "example_account_id", # String
  "browser_extension_config" => {}, # Hash
  "global_acceleration" => {}, # Hash
  "name" => "example_name", # String
  "virtual_networks" => {}, # Hash
})
```


### TeamsDevicesDeviceSettingsResponseCollection

Create an instance: `teams_devices_device_settings_response_collection = client.TeamsDevicesDeviceSettingsResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TeamsDevicesDeviceSettingsResponseCollection records (raises on error).
teams_devices_device_settings_response_collections = client.TeamsDevicesDeviceSettingsResponseCollection.list
```


### TeamsDevicesDevicesPolicyCertificatesSingle

Create an instance: `teams_devices_devices_policy_certificates_single = client.TeamsDevicesDevicesPolicyCertificatesSingle`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `Boolean` | The current status of the device policy certificate provisioning feature for WARP clients. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TeamsDevicesDevicesPolicyCertificatesSingle record (raises on error).
teams_devices_devices_policy_certificates_single = client.TeamsDevicesDevicesPolicyCertificatesSingle.load({ "zone_id" => "zone_id" })
```


### TeamsDevicesFallbackDomainResponseCollection

Create an instance: `teams_devices_fallback_domain_response_collection = client.TeamsDevicesFallbackDomainResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TeamsDevicesFallbackDomainResponseCollection records (raises on error).
teams_devices_fallback_domain_response_collections = client.TeamsDevicesFallbackDomainResponseCollection.list
```


### TeamsDevicesGlobalWarpOverride

Create an instance: `teams_devices_global_warp_override = client.TeamsDevicesGlobalWarpOverride`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disconnect` | `Boolean` | Disconnects all devices on the account using Global WARP override. |
| `justification` | `String` | Reasoning for setting the Global WARP override state. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TeamsDevicesGlobalWarpOverride record (raises on error).
teams_devices_global_warp_override = client.TeamsDevicesGlobalWarpOverride.load({ "account_id" => "account_id" })
```

#### Example: Create

```ruby
teams_devices_global_warp_override = client.TeamsDevicesGlobalWarpOverride.create({
  "account_id" => "example_account_id", # String
  "disconnect" => true, # Boolean
})
```


### TeamsDevicesId

Create an instance: `teams_devices_id = client.TeamsDevicesId`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TeamsDevicesOverrideCode

Create an instance: `teams_devices_override_code = client.TeamsDevicesOverrideCode`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TeamsDevicesOverrideCode record (raises on error).
teams_devices_override_code = client.TeamsDevicesOverrideCode.load({ "account_id" => "account_id", "device_id" => "device_id" })
```


### TeamsDevicesResponseCollection

Create an instance: `teams_devices_response_collection = client.TeamsDevicesResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TeamsDevicesResponseCollection records (raises on error).
teams_devices_response_collections = client.TeamsDevicesResponseCollection.list
```


### TeamsDevicesSchemasId

Create an instance: `teams_devices_schemas_id = client.TeamsDevicesSchemasId`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TeamsDevicesSchemasResponseCollection

Create an instance: `teams_devices_schemas_response_collection = client.TeamsDevicesSchemasResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TeamsDevicesSchemasResponseCollection records (raises on error).
teams_devices_schemas_response_collections = client.TeamsDevicesSchemasResponseCollection.list
```


### TeamsDevicesSchemasSingle

Create an instance: `teams_devices_schemas_single = client.TeamsDevicesSchemasSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Hash` | The configuration object containing third-party integration information. |
| `interval` | `String` | The interval between each posture check with the third-party API. |
| `name` | `String` | The name of the device posture integration. |
| `result` | `Hash` |  |
| `type` | `String` | The type of device posture integration. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TeamsDevicesSchemasSingle record (raises on error).
teams_devices_schemas_single = client.TeamsDevicesSchemasSingle.load({ "account_id" => "account_id", "integration_id" => "integration_id" })
```

#### Example: Create

```ruby
teams_devices_schemas_single = client.TeamsDevicesSchemasSingle.create({
  "account_id" => "example_account_id", # String
  "config" => {}, # Hash
  "interval" => "example_interval", # String
  "name" => "example_name", # String
  "type" => "example_type", # String
})
```


### TeamsDevicesSingle

Create an instance: `teams_devices_single = client.TeamsDevicesSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` | The description of the device posture rule. |
| `expiration` | `String` | Sets the expiration time for a posture check result. |
| `input` | `Hash` | The value to be checked against. |
| `match` | `Array` | The conditions that the client must match to run the rule. |
| `name` | `String` | The name of the device posture rule. |
| `result` | `Hash` |  |
| `schedule` | `String` | Polling frequency for the WARP client posture check. |
| `type` | `String` | The type of device posture rule. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TeamsDevicesSingle record (raises on error).
teams_devices_single = client.TeamsDevicesSingle.load({ "account_id" => "account_id", "rule_id" => "rule_id" })
```

#### Example: Create

```ruby
teams_devices_single = client.TeamsDevicesSingle.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "type" => "example_type", # String
})
```


### TeamsDevicesSplitTunnelIncludeResponseCollection

Create an instance: `teams_devices_split_tunnel_include_response_collection = client.TeamsDevicesSplitTunnelIncludeResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TeamsDevicesSplitTunnelIncludeResponseCollection records (raises on error).
teams_devices_split_tunnel_include_response_collections = client.TeamsDevicesSplitTunnelIncludeResponseCollection.list
```


### TeamsDevicesSplitTunnelResponseCollection

Create an instance: `teams_devices_split_tunnel_response_collection = client.TeamsDevicesSplitTunnelResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TeamsDevicesSplitTunnelResponseCollection records (raises on error).
teams_devices_split_tunnel_response_collections = client.TeamsDevicesSplitTunnelResponseCollection.list
```


### TeamsDevicesZeroTrustAccountDeviceSetting

Create an instance: `teams_devices_zero_trust_account_device_setting = client.TeamsDevicesZeroTrustAccountDeviceSetting`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disable_for_time` | `Float` | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| `external_emergency_signal_enabled` | `Boolean` | Controls whether the external emergency disconnect feature is enabled. |
| `external_emergency_signal_fingerprint` | `String` | The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. |
| `external_emergency_signal_interval` | `String` | The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). |
| `external_emergency_signal_url` | `String` | The HTTPS URL from which to fetch the emergency disconnect signal. |
| `gateway_proxy_enabled` | `Boolean` | Enable gateway proxy filtering on TCP. |
| `gateway_udp_proxy_enabled` | `Boolean` | Enable gateway proxy filtering on UDP. |
| `result` | `Hash` |  |
| `root_certificate_installation_enabled` | `Boolean` | Enable installation of cloudflare managed root certificate. |
| `use_zt_virtual_ip` | `Boolean` | Enable using CGNAT virtual IPv4. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TeamsDevicesZeroTrustAccountDeviceSetting record (raises on error).
teams_devices_zero_trust_account_device_setting = client.TeamsDevicesZeroTrustAccountDeviceSetting.load({ "account_id" => "account_id" })
```


### Tunnel

Create an instance: `tunnel = client.Tunnel`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of Tunnel records (raises on error).
tunnels = client.Tunnel.list
```


### TunnelCfdTunnelResponseCollection

Create an instance: `tunnel_cfd_tunnel_response_collection = client.TunnelCfdTunnelResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TunnelCfdTunnelResponseCollection records (raises on error).
tunnel_cfd_tunnel_response_collections = client.TunnelCfdTunnelResponseCollection.list
```


### TunnelCfdTunnelResponseSingle

Create an instance: `tunnel_cfd_tunnel_response_single = client.TunnelCfdTunnelResponseSingle`

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
| `config_src` | `String` | Indicates if this is a locally or remotely configured tunnel. |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `name` | `String` | A user-friendly name for a tunnel. |
| `result` | `String` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Whether the API call was successful |
| `tunnel_secret` | `String` | Sets the password required to run a locally-managed tunnel. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TunnelCfdTunnelResponseSingle record (raises on error).
tunnel_cfd_tunnel_response_single = client.TunnelCfdTunnelResponseSingle.load({ "account_id" => "account_id", "tunnel_id" => "tunnel_id" })
```

#### Example: Create

```ruby
tunnel_cfd_tunnel_response_single = client.TunnelCfdTunnelResponseSingle.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "result" => "example_result", # String
  "success" => true, # Boolean
})
```


### TunnelConfiguration

Create an instance: `tunnel_configuration = client.TunnelConfiguration`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Hash` | The tunnel configuration and ingress rules. |
| `result` | `Hash` | Cloudflare Tunnel configuration |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TunnelConfiguration record (raises on error).
tunnel_configuration = client.TunnelConfiguration.load({ "account_id" => "account_id", "cfd_tunnel_id" => "cfd_tunnel_id" })
```


### TunnelEmpty

Create an instance: `tunnel_empty = client.TunnelEmpty`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_id` | `String` | UUID of the Cloudflare Tunnel connector. |


### TunnelHostnameRouteResponseCollection

Create an instance: `tunnel_hostname_route_response_collection = client.TunnelHostnameRouteResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TunnelHostnameRouteResponseCollection records (raises on error).
tunnel_hostname_route_response_collections = client.TunnelHostnameRouteResponseCollection.list
```


### TunnelHostnameRouteResponseSingle

Create an instance: `tunnel_hostname_route_response_single = client.TunnelHostnameRouteResponseSingle`

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
| `comment` | `String` | An optional description of the hostname route. |
| `errors` | `Array` |  |
| `hostname` | `String` | The hostname of the route. |
| `messages` | `Array` |  |
| `result` | `String` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Whether the API call was successful |
| `tunnel_id` | `String` | UUID of the tunnel. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TunnelHostnameRouteResponseSingle record (raises on error).
tunnel_hostname_route_response_single = client.TunnelHostnameRouteResponseSingle.load({ "account_id" => "account_id", "hostname_route_id" => "hostname_route_id" })
```

#### Example: Create

```ruby
tunnel_hostname_route_response_single = client.TunnelHostnameRouteResponseSingle.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => "example_result", # String
  "success" => true, # Boolean
})
```


### TunnelMeshConfigurationResponseSingle

Create an instance: `tunnel_mesh_configuration_response_single = client.TunnelMeshConfigurationResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `Hash` | Provider-specific configuration. |
| `ha_mode` | `String` | High-availability mode for the WARP Connector tunnel. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TunnelMeshConfigurationResponseSingle record (raises on error).
tunnel_mesh_configuration_response_single = client.TunnelMeshConfigurationResponseSingle.load({ "account_id" => "account_id", "warp_connector_id" => "warp_connector_id" })
```


### TunnelRouteResponseSingle

Create an instance: `tunnel_route_response_single = client.TunnelRouteResponseSingle`

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
| `comment` | `String` | Optional remark describing the route. |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `network` | `String` | The private IPv4 or IPv6 range connected by the route, in CIDR notation. |
| `result` | `String` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Whether the API call was successful |
| `tunnel_id` | `String` | UUID of the tunnel. |
| `virtual_network_id` | `String` | UUID of the virtual network. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TunnelRouteResponseSingle record (raises on error).
tunnel_route_response_single = client.TunnelRouteResponseSingle.load({ "account_id" => "account_id", "route_id" => "route_id" })
```

#### Example: Create

```ruby
tunnel_route_response_single = client.TunnelRouteResponseSingle.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "network" => "example_network", # String
  "result" => "example_result", # String
  "success" => true, # Boolean
  "tunnel_id" => "example_tunnel_id", # String
})
```


### TunnelSubnetResponseCollection

Create an instance: `tunnel_subnet_response_collection = client.TunnelSubnetResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TunnelSubnetResponseCollection records (raises on error).
tunnel_subnet_response_collections = client.TunnelSubnetResponseCollection.list
```


### TunnelSubnetResponseSingle

Create an instance: `tunnel_subnet_response_single = client.TunnelSubnetResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `String` | An optional description of the subnet. |
| `errors` | `Array` |  |
| `is_default_network` | `Boolean` | If `true`, this is the default subnet for the account. |
| `messages` | `Array` |  |
| `name` | `String` | A user-friendly name for the subnet. |
| `network` | `String` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `String` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TunnelSubnetResponseSingle record (raises on error).
tunnel_subnet_response_single = client.TunnelSubnetResponseSingle.load({ "account_id" => "account_id", "address_family" => "address_family" })
```

#### Example: Create

```ruby
tunnel_subnet_response_single = client.TunnelSubnetResponseSingle.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "network" => "example_network", # String
  "result" => "example_result", # String
  "success" => true, # Boolean
})
```


### TunnelSubnetResponseSingleNullable

Create an instance: `tunnel_subnet_response_single_nullable = client.TunnelSubnetResponseSingleNullable`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TunnelTeamnetResponseCollection

Create an instance: `tunnel_teamnet_response_collection = client.TunnelTeamnetResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TunnelTeamnetResponseCollection records (raises on error).
tunnel_teamnet_response_collections = client.TunnelTeamnetResponseCollection.list
```


### TunnelTeamnetResponseSingle

Create an instance: `tunnel_teamnet_response_single = client.TunnelTeamnetResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `String` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TunnelTeamnetResponseSingle record (raises on error).
tunnel_teamnet_response_single = client.TunnelTeamnetResponseSingle.load({ "account_id" => "account_id", "ip" => "ip" })
```


### TunnelTunnelClient

Create an instance: `tunnel_tunnel_client = client.TunnelTunnelClient`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `String` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TunnelTunnelClient record (raises on error).
tunnel_tunnel_client = client.TunnelTunnelClient.load({ "account_id" => "account_id", "cfd_tunnel_id" => "cfd_tunnel_id", "connector_id" => "connector_id" })
```


### TunnelTunnelConnection

Create an instance: `tunnel_tunnel_connection = client.TunnelTunnelConnection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TunnelTunnelConnection records (raises on error).
tunnel_tunnel_connections = client.TunnelTunnelConnection.list
```


### TunnelTunnelResponseToken

Create an instance: `tunnel_tunnel_response_token = client.TunnelTunnelResponseToken`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `resources` | `Array` |  |
| `result` | `String` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: List

```ruby
# list returns an Array of TunnelTunnelResponseToken records (raises on error).
tunnel_tunnel_response_tokens = client.TunnelTunnelResponseToken.list
```

#### Example: Create

```ruby
tunnel_tunnel_response_token = client.TunnelTunnelResponseToken.create({
  "account_id" => "example_account_id", # String
  "cfd_tunnel_id" => "example_cfd_tunnel_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "resources" => [], # Array
  "result" => "example_result", # String
  "success" => true, # Boolean
})
```


### TunnelTunnelWarpConnectorClient

Create an instance: `tunnel_tunnel_warp_connector_client = client.TunnelTunnelWarpConnectorClient`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `String` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TunnelTunnelWarpConnectorClient record (raises on error).
tunnel_tunnel_warp_connector_client = client.TunnelTunnelWarpConnectorClient.load({ "account_id" => "account_id", "connector_id" => "connector_id", "warp_connector_id" => "warp_connector_id" })
```


### TunnelTunnelWarpConnectorConnection

Create an instance: `tunnel_tunnel_warp_connector_connection = client.TunnelTunnelWarpConnectorConnection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TunnelTunnelWarpConnectorConnection records (raises on error).
tunnel_tunnel_warp_connector_connections = client.TunnelTunnelWarpConnectorConnection.list
```


### TunnelVnetResponseCollection

Create an instance: `tunnel_vnet_response_collection = client.TunnelVnetResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TunnelVnetResponseCollection records (raises on error).
tunnel_vnet_response_collections = client.TunnelVnetResponseCollection.list
```


### TunnelVnetResponseSingle

Create an instance: `tunnel_vnet_response_single = client.TunnelVnetResponseSingle`

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
| `comment` | `String` | Optional remark describing the virtual network. |
| `is_default` | `Boolean` | If `true`, this virtual network is the default for the account. |
| `is_default_network` | `Boolean` | If `true`, this virtual network is the default for the account. |
| `name` | `String` | A user-friendly name for the virtual network. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TunnelVnetResponseSingle record (raises on error).
tunnel_vnet_response_single = client.TunnelVnetResponseSingle.load({ "account_id" => "account_id", "virtual_network_id" => "virtual_network_id" })
```

#### Example: Create

```ruby
tunnel_vnet_response_single = client.TunnelVnetResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```


### TunnelWarpConnectorResponseCollection

Create an instance: `tunnel_warp_connector_response_collection = client.TunnelWarpConnectorResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of TunnelWarpConnectorResponseCollection records (raises on error).
tunnel_warp_connector_response_collections = client.TunnelWarpConnectorResponseCollection.list
```


### TunnelWarpConnectorResponseSingle

Create an instance: `tunnel_warp_connector_response_single = client.TunnelWarpConnectorResponseSingle`

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
| `errors` | `Array` |  |
| `ha` | `Boolean` | Indicates that the tunnel will be created to be highly available. |
| `messages` | `Array` |  |
| `name` | `String` | A user-friendly name for a tunnel. |
| `result` | `String` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Whether the API call was successful |
| `tunnel_secret` | `String` | Sets the password required to run a locally-managed tunnel. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TunnelWarpConnectorResponseSingle record (raises on error).
tunnel_warp_connector_response_single = client.TunnelWarpConnectorResponseSingle.load({ "account_id" => "account_id", "tunnel_id" => "tunnel_id" })
```

#### Example: Create

```ruby
tunnel_warp_connector_response_single = client.TunnelWarpConnectorResponseSingle.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "result" => "example_result", # String
  "success" => true, # Boolean
})
```


### TunnelZeroTrustConnectivitySetting

Create an instance: `tunnel_zero_trust_connectivity_setting = client.TunnelZeroTrustConnectivitySetting`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `icmp_proxy_enabled` | `Boolean` | A flag to enable the ICMP proxy for the account network. |
| `messages` | `Array` |  |
| `offramp_warp_enabled` | `Boolean` | A flag to enable WARP to WARP traffic. |
| `result` | `String` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: List

```ruby
# list returns an Array of TunnelZeroTrustConnectivitySetting records (raises on error).
tunnel_zero_trust_connectivity_settings = client.TunnelZeroTrustConnectivitySetting.list
```


### Warp

Create an instance: `warp = client.Warp`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `String` | An optional description of the subnet. |
| `errors` | `Array` |  |
| `id` | `String` |  |
| `is_default_network` | `Boolean` | If `true`, this is the default subnet for the account. |
| `messages` | `Array` |  |
| `name` | `String` | A user-friendly name for the subnet. |
| `network` | `String` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `String` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `Boolean` | Whether the API call was successful |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Warp record (raises on error).
warp = client.Warp.load({ "id" => "warp_id", "account_id" => "account_id" })
```


### WarpChangeEvent

Create an instance: `warp_change_event = client.WarpChangeEvent`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of WarpChangeEvent records (raises on error).
warp_change_events = client.WarpChangeEvent.list
```


### WarpTeamsDeviceApiOther

Create an instance: `warp_teams_device_api_other = client.WarpTeamsDeviceApiOther`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Object` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of WarpTeamsDeviceApiOther records (raises on error).
warp_teams_device_api_others = client.WarpTeamsDeviceApiOther.list
```


### ZeroTrustGatewayApplicationsReviewStatus

Create an instance: `zero_trust_gateway_applications_review_status = client.ZeroTrustGatewayApplicationsReviewStatus`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved_apps` | `Array` | Contains the ids of the approved applications. |
| `in_review_apps` | `Array` | Contains the ids of the applications in review. |
| `result` | `Hash` |  |
| `unapproved_apps` | `Array` | Contains the ids of the unapproved applications. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustGatewayApplicationsReviewStatus record (raises on error).
zero_trust_gateway_applications_review_status = client.ZeroTrustGatewayApplicationsReviewStatus.load({ "account_id" => "account_id" })
```


### ZeroTrustGatewayCsvOperationSingle

Create an instance: `zero_trust_gateway_csv_operation_single = client.ZeroTrustGatewayCsvOperationSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
zero_trust_gateway_csv_operation_single = client.ZeroTrustGatewayCsvOperationSingle.create({
  "account_id" => "example_account_id", # String
})
```


### ZeroTrustGatewayCustomCertificateSetting

Create an instance: `zero_trust_gateway_custom_certificate_setting = client.ZeroTrustGatewayCustomCertificateSetting`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `binding_status` | `String` | Indicate the internal certificate status. |
| `enabled` | `Boolean` | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| `id` | `String` | Specify the UUID of the certificate (ID from MTLS certificate store). |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustGatewayCustomCertificateSetting record (raises on error).
zero_trust_gateway_custom_certificate_setting = client.ZeroTrustGatewayCustomCertificateSetting.load({ "account_id" => "account_id" })
```


### ZeroTrustGatewayGatewayAccount

Create an instance: `zero_trust_gateway_gateway_account = client.ZeroTrustGatewayGatewayAccount`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustGatewayGatewayAccount record (raises on error).
zero_trust_gateway_gateway_account = client.ZeroTrustGatewayGatewayAccount.load({ "account_id" => "account_id" })
```

#### Example: Create

```ruby
zero_trust_gateway_gateway_account = client.ZeroTrustGatewayGatewayAccount.create({
  "account_id" => "example_account_id", # String
})
```


### ZeroTrustGatewayGatewayAccountConfig

Create an instance: `zero_trust_gateway_gateway_account_config = client.ZeroTrustGatewayGatewayAccountConfig`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |
| `settings` | `Hash` | Specify account settings. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustGatewayGatewayAccountConfig record (raises on error).
zero_trust_gateway_gateway_account_config = client.ZeroTrustGatewayGatewayAccountConfig.load({ "account_id" => "account_id" })
```


### ZeroTrustGatewayGatewayAccountEgressCidrPairList

Create an instance: `zero_trust_gateway_gateway_account_egress_cidr_pair_list = client.ZeroTrustGatewayGatewayAccountEgressCidrPairList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ZeroTrustGatewayGatewayAccountEgressCidrPairList records (raises on error).
zero_trust_gateway_gateway_account_egress_cidr_pair_lists = client.ZeroTrustGatewayGatewayAccountEgressCidrPairList.list
```


### ZeroTrustGatewayGatewayAccountLoggingSetting

Create an instance: `zero_trust_gateway_gateway_account_logging_setting = client.ZeroTrustGatewayGatewayAccountLoggingSetting`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `redact_pii` | `Boolean` | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `result` | `Hash` |  |
| `settings_by_rule_type` | `Hash` | Configure logging settings for each rule type. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustGatewayGatewayAccountLoggingSetting record (raises on error).
zero_trust_gateway_gateway_account_logging_setting = client.ZeroTrustGatewayGatewayAccountLoggingSetting.load({ "account_id" => "account_id" })
```


### ZeroTrustGatewayListItemResponseCollection

Create an instance: `zero_trust_gateway_list_item_response_collection = client.ZeroTrustGatewayListItemResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` | Provide the list items. |
| `result_info` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of ZeroTrustGatewayListItemResponseCollection records (raises on error).
zero_trust_gateway_list_item_response_collections = client.ZeroTrustGatewayListItemResponseCollection.list
```


### ZeroTrustGatewayListSingle

Create an instance: `zero_trust_gateway_list_single = client.ZeroTrustGatewayListSingle`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `append` | `Array` | Add items to the list. |
| `description` | `String` | Provide the list description. |
| `items` | `Array` | Add items to the list. |
| `name` | `String` | Specify the list name. |
| `remove` | `Array` | Lists of item values you want to remove. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustGatewayListSingle record (raises on error).
zero_trust_gateway_list_single = client.ZeroTrustGatewayListSingle.load({ "account_id" => "account_id", "list_id" => "list_id" })
```


### ZeroTrustGatewayResponseCollection

Create an instance: `zero_trust_gateway_response_collection = client.ZeroTrustGatewayResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ZeroTrustGatewayResponseCollection records (raises on error).
zero_trust_gateway_response_collections = client.ZeroTrustGatewayResponseCollection.list
```


### ZeroTrustGatewayResponseCollection10

Create an instance: `zero_trust_gateway_response_collection_10 = client.ZeroTrustGatewayResponseCollection10`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |
| `result_info` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of ZeroTrustGatewayResponseCollection10 records (raises on error).
zero_trust_gateway_response_collection_10s = client.ZeroTrustGatewayResponseCollection10.list
```


### ZeroTrustGatewayResponseCollection2

Create an instance: `zero_trust_gateway_response_collection_2 = client.ZeroTrustGatewayResponseCollection2`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ZeroTrustGatewayResponseCollection2 records (raises on error).
zero_trust_gateway_response_collection_2s = client.ZeroTrustGatewayResponseCollection2.list
```


### ZeroTrustGatewayResponseCollection3

Create an instance: `zero_trust_gateway_response_collection_3 = client.ZeroTrustGatewayResponseCollection3`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ZeroTrustGatewayResponseCollection3 records (raises on error).
zero_trust_gateway_response_collection_3s = client.ZeroTrustGatewayResponseCollection3.list
```


### ZeroTrustGatewayResponseCollection4

Create an instance: `zero_trust_gateway_response_collection_4 = client.ZeroTrustGatewayResponseCollection4`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ZeroTrustGatewayResponseCollection4 records (raises on error).
zero_trust_gateway_response_collection_4s = client.ZeroTrustGatewayResponseCollection4.list
```


### ZeroTrustGatewayResponseCollection5

Create an instance: `zero_trust_gateway_response_collection_5 = client.ZeroTrustGatewayResponseCollection5`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ZeroTrustGatewayResponseCollection5 records (raises on error).
zero_trust_gateway_response_collection_5s = client.ZeroTrustGatewayResponseCollection5.list
```


### ZeroTrustGatewayResponseCollection6

Create an instance: `zero_trust_gateway_response_collection_6 = client.ZeroTrustGatewayResponseCollection6`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ZeroTrustGatewayResponseCollection6 records (raises on error).
zero_trust_gateway_response_collection_6s = client.ZeroTrustGatewayResponseCollection6.list
```


### ZeroTrustGatewayResponseCollection7

Create an instance: `zero_trust_gateway_response_collection_7 = client.ZeroTrustGatewayResponseCollection7`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ZeroTrustGatewayResponseCollection7 records (raises on error).
zero_trust_gateway_response_collection_7s = client.ZeroTrustGatewayResponseCollection7.list
```


### ZeroTrustGatewayResponseCollection8

Create an instance: `zero_trust_gateway_response_collection_8 = client.ZeroTrustGatewayResponseCollection8`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ZeroTrustGatewayResponseCollection8 records (raises on error).
zero_trust_gateway_response_collection_8s = client.ZeroTrustGatewayResponseCollection8.list
```


### ZeroTrustGatewayResponseCollection9

Create an instance: `zero_trust_gateway_response_collection_9 = client.ZeroTrustGatewayResponseCollection9`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ZeroTrustGatewayResponseCollection9 records (raises on error).
zero_trust_gateway_response_collection_9s = client.ZeroTrustGatewayResponseCollection9.list
```


### ZeroTrustGatewaySingle

Create an instance: `zero_trust_gateway_single = client.ZeroTrustGatewaySingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |
| `validity_period_days` | `Integer` | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustGatewaySingle record (raises on error).
zero_trust_gateway_single = client.ZeroTrustGatewaySingle.load({ "account_id" => "account_id", "certificate_id" => "certificate_id" })
```

#### Example: Create

```ruby
zero_trust_gateway_single = client.ZeroTrustGatewaySingle.create({
  "account_id" => "example_account_id", # String
})
```


### ZeroTrustGatewaySingleResponse2

Create an instance: `zero_trust_gateway_single_response_2 = client.ZeroTrustGatewaySingleResponse2`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustGatewaySingleResponse2 record (raises on error).
zero_trust_gateway_single_response_2 = client.ZeroTrustGatewaySingleResponse2.load({ "account_id" => "account_id", "operation_id" => "operation_id" })
```


### ZeroTrustGatewaySingleResponse3

Create an instance: `zero_trust_gateway_single_response_3 = client.ZeroTrustGatewaySingleResponse3`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_default` | `Boolean` | Indicate whether this location is the default location. |
| `dns_destination_ips_id` | `String` | Specify the identifier of the pair of IPv4 addresses assigned to this location. |
| `ecs_support` | `Boolean` | Indicate whether the location must resolve EDNS queries. |
| `endpoints` | `Hash` | Configure the destination endpoints for this location. |
| `max_ttl` | `Hash` | Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. |
| `name` | `String` | Specify the location name. |
| `networks` | `Array` | Specify the list of network ranges from which requests at this location originate. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustGatewaySingleResponse3 record (raises on error).
zero_trust_gateway_single_response_3 = client.ZeroTrustGatewaySingleResponse3.load({ "account_id" => "account_id", "location_id" => "location_id" })
```

#### Example: Create

```ruby
zero_trust_gateway_single_response_3 = client.ZeroTrustGatewaySingleResponse3.create({
  "account_id" => "example_account_id", # String
  "endpoints" => {}, # Hash
  "max_ttl" => {}, # Hash
  "name" => "example_name", # String
})
```


### ZeroTrustGatewaySingleResponse4

Create an instance: `zero_trust_gateway_single_response_4 = client.ZeroTrustGatewaySingleResponse4`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `String` | Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`. |
| `description` | `String` | Specify the rule description. |
| `device_posture` | `String` | Specify the wirefilter expression used for device posture check. |
| `enabled` | `Boolean` | Specify whether the rule is enabled. |
| `expiration` | `Hash` | Defines the expiration time stamp and default duration of a DNS policy. |
| `filters` | `Array` | Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| `identity` | `String` | Specify the wirefilter expression used for identity matching. |
| `name` | `String` | Specify the rule name. |
| `precedence` | `Integer` | Set the order of your rules. |
| `result` | `Hash` |  |
| `rule_settings` | `Hash` | Defines settings for this rule. |
| `schedule` | `Hash` | Defines the schedule for activating DNS policies. |
| `traffic` | `String` | Specify the wirefilter expression used for traffic matching. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustGatewaySingleResponse4 record (raises on error).
zero_trust_gateway_single_response_4 = client.ZeroTrustGatewaySingleResponse4.load({ "account_id" => "account_id", "rule_id" => "rule_id" })
```

#### Example: Create

```ruby
zero_trust_gateway_single_response_4 = client.ZeroTrustGatewaySingleResponse4.create({
  "account_id" => "example_account_id", # String
  "action" => "example_action", # String
  "expiration" => {}, # Hash
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```


### ZeroTrustGatewaySingleResponse5

Create an instance: `zero_trust_gateway_single_response_5 = client.ZeroTrustGatewaySingleResponse5`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ips` | `Array` | Specify the list of CIDRs to restrict ingress connections. |
| `kind` | `String` | The proxy endpoint kind. |
| `name` | `String` | Specify the name of the proxy endpoint. |
| `result` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustGatewaySingleResponse5 record (raises on error).
zero_trust_gateway_single_response_5 = client.ZeroTrustGatewaySingleResponse5.load({ "account_id" => "account_id", "proxy_endpoint_id" => "proxy_endpoint_id" })
```

#### Example: Create

```ruby
zero_trust_gateway_single_response_5 = client.ZeroTrustGatewaySingleResponse5.create({
  "account_id" => "example_account_id", # String
})
```


### ZeroTrustGatewaySingleResponse6

Create an instance: `zero_trust_gateway_single_response_6 = client.ZeroTrustGatewaySingleResponse6`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `public_key` | `String` | Provide the Base64-encoded HPKE public key that encrypts SSH session logs. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustGatewaySingleResponse6 record (raises on error).
zero_trust_gateway_single_response_6 = client.ZeroTrustGatewaySingleResponse6.load({ "account_id" => "account_id" })
```

#### Example: Create

```ruby
zero_trust_gateway_single_response_6 = client.ZeroTrustGatewaySingleResponse6.create({
  "account_id" => "example_account_id", # String
  "public_key" => "example_public_key", # String
})
```


### ZeroTrustGatewaySingleResponse7

Create an instance: `zero_trust_gateway_single_response_7 = client.ZeroTrustGatewaySingleResponse7`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contents` | `String` | Actual contents of the PAC file |
| `description` | `String` | Detailed description of the PAC file. |
| `name` | `String` | Name of the PAC file. |
| `result` | `Hash` |  |
| `slug` | `String` | URL-friendly version of the PAC file name. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustGatewaySingleResponse7 record (raises on error).
zero_trust_gateway_single_response_7 = client.ZeroTrustGatewaySingleResponse7.load({ "account_id" => "account_id", "pacfile_id" => "pacfile_id" })
```

#### Example: Create

```ruby
zero_trust_gateway_single_response_7 = client.ZeroTrustGatewaySingleResponse7.create({
  "account_id" => "example_account_id", # String
  "contents" => "example_contents", # String
  "name" => "example_name", # String
})
```


### ZeroTrustGatewaySingleResponseWithListItem

Create an instance: `zero_trust_gateway_single_response_with_list_item = client.ZeroTrustGatewaySingleResponseWithListItem`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` | Provide the list description. |
| `items` | `Array` | Add items to the list. |
| `name` | `String` | Specify the list name. |
| `type` | `String` | Specify the list type. |

#### Example: Create

```ruby
zero_trust_gateway_single_response_with_list_item = client.ZeroTrustGatewaySingleResponseWithListItem.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "type" => "example_type", # String
})
```


### ZeroTrustRiskScoring

Create an instance: `zero_trust_risk_scoring = client.ZeroTrustRiskScoring`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `behaviors` | `Hash` |  |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustRiskScoring record (raises on error).
zero_trust_risk_scoring = client.ZeroTrustRiskScoring.load({ "account_id" => "account_id" })
```

#### Example: Create

```ruby
zero_trust_risk_scoring = client.ZeroTrustRiskScoring.create({
  "account_id" => "example_account_id", # String
  "zt_risk_scoring_id" => "example_zt_risk_scoring_id", # String
  "behaviors" => {}, # Hash
  "result" => {}, # Hash
})
```


### ZeroTrustRiskScoringIntegration

Create an instance: `zero_trust_risk_scoring_integration = client.ZeroTrustRiskScoringIntegration`

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
| `active` | `Boolean` | Whether this integration is enabled. |
| `id` | `String` |  |
| `integration_type` | `String` |  |
| `reference_id` | `String` | A reference id that can be supplied by the client. |
| `result` | `Hash` |  |
| `tenant_url` | `String` | The base url of the tenant, e.g. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZeroTrustRiskScoringIntegration record (raises on error).
zero_trust_risk_scoring_integration = client.ZeroTrustRiskScoringIntegration.load({ "id" => "zero_trust_risk_scoring_integration_id", "account_id" => "account_id" })
```

#### Example: List

```ruby
# list returns an Array of ZeroTrustRiskScoringIntegration records (raises on error).
zero_trust_risk_scoring_integrations = client.ZeroTrustRiskScoringIntegration.list
```

#### Example: Create

```ruby
zero_trust_risk_scoring_integration = client.ZeroTrustRiskScoringIntegration.create({
  "account_id" => "example_account_id", # String
  "active" => true, # Boolean
  "integration_type" => "example_integration_type", # String
  "result" => {}, # Hash
  "tenant_url" => "example_tenant_url", # String
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── CloudflareZeroTrust_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`CloudflareZeroTrust_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
teamsdevicesglobalwarpoverride = client.TeamsDevicesGlobalWarpOverride
teamsdevicesglobalwarpoverride.load({ "account_id" => "example" })

# teamsdevicesglobalwarpoverride.data_get now returns the teamsdevicesglobalwarpoverride data from the last load
# teamsdevicesglobalwarpoverride.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
