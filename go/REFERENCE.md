# CloudflareZeroTrust Golang SDK Reference

Complete API reference for the CloudflareZeroTrust Golang SDK.


## CloudflareZeroTrustSDK

### Constructor

```go
func NewCloudflareZeroTrustSDK(options map[string]any) *CloudflareZeroTrustSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudflareZeroTrustSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudflareZeroTrustSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `AlexandriaDeleteApplication(data map[string]any) CloudflareZeroTrustEntity`

Create a new `AlexandriaDeleteApplication` entity instance. Pass `nil` for no initial data.

#### `AlexandriaGetApplication(data map[string]any) CloudflareZeroTrustEntity`

Create a new `AlexandriaGetApplication` entity instance. Pass `nil` for no initial data.

#### `AlexandriaGetCategory(data map[string]any) CloudflareZeroTrustEntity`

Create a new `AlexandriaGetCategory` entity instance. Pass `nil` for no initial data.

#### `ClientVersion(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ClientVersion` entity instance. Pass `nil` for no initial data.

#### `Cni(data map[string]any) CloudflareZeroTrustEntity`

Create a new `Cni` entity instance. Pass `nil` for no initial data.

#### `DeploymentGroup(data map[string]any) CloudflareZeroTrustEntity`

Create a new `DeploymentGroup` entity instance. Pass `nil` for no initial data.

#### `DexRemoteCommand(data map[string]any) CloudflareZeroTrustEntity`

Create a new `DexRemoteCommand` entity instance. Pass `nil` for no initial data.

#### `DexRule(data map[string]any) CloudflareZeroTrustEntity`

Create a new `DexRule` entity instance. Pass `nil` for no initial data.

#### `DexSyntheticApplicationMonitoring(data map[string]any) CloudflareZeroTrustEntity`

Create a new `DexSyntheticApplicationMonitoring` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringDevice(data map[string]any) CloudflareZeroTrustEntity`

Create a new `DigitalExperienceMonitoringDevice` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringDexDeleteResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `DigitalExperienceMonitoringDexDeleteResponseCollection` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringDexResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `DigitalExperienceMonitoringDexResponseCollection` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringDexSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `DigitalExperienceMonitoringDexSingle` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusDevice(data map[string]any) CloudflareZeroTrustEntity`

Create a new `DigitalExperienceMonitoringFleetStatusDevice` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusLive(data map[string]any) CloudflareZeroTrustEntity`

Create a new `DigitalExperienceMonitoringFleetStatusLive` entity instance. Pass `nil` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusOverTime(data map[string]any) CloudflareZeroTrustEntity`

Create a new `DigitalExperienceMonitoringFleetStatusOverTime` entity instance. Pass `nil` for no initial data.

#### `Integration(data map[string]any) CloudflareZeroTrustEntity`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `Interconnect(data map[string]any) CloudflareZeroTrustEntity`

Create a new `Interconnect` entity instance. Pass `nil` for no initial data.

#### `IpProfile(data map[string]any) CloudflareZeroTrustEntity`

Create a new `IpProfile` entity instance. Pass `nil` for no initial data.

#### `List(data map[string]any) CloudflareZeroTrustEntity`

Create a new `List` entity instance. Pass `nil` for no initial data.

#### `Location(data map[string]any) CloudflareZeroTrustEntity`

Create a new `Location` entity instance. Pass `nil` for no initial data.

#### `NscCni(data map[string]any) CloudflareZeroTrustEntity`

Create a new `NscCni` entity instance. Pass `nil` for no initial data.

#### `NscDefaultName(data map[string]any) CloudflareZeroTrustEntity`

Create a new `NscDefaultName` entity instance. Pass `nil` for no initial data.

#### `NscInterconnect(data map[string]any) CloudflareZeroTrustEntity`

Create a new `NscInterconnect` entity instance. Pass `nil` for no initial data.

#### `NscSetting(data map[string]any) CloudflareZeroTrustEntity`

Create a new `NscSetting` entity instance. Pass `nil` for no initial data.

#### `NscSlotInfo(data map[string]any) CloudflareZeroTrustEntity`

Create a new `NscSlotInfo` entity instance. Pass `nil` for no initial data.

#### `NscStatusInfo(data map[string]any) CloudflareZeroTrustEntity`

Create a new `NscStatusInfo` entity instance. Pass `nil` for no initial data.

#### `OneApplicationDetail(data map[string]any) CloudflareZeroTrustEntity`

Create a new `OneApplicationDetail` entity instance. Pass `nil` for no initial data.

#### `OneIntegrationCreate(data map[string]any) CloudflareZeroTrustEntity`

Create a new `OneIntegrationCreate` entity instance. Pass `nil` for no initial data.

#### `OneIntegrationDetail(data map[string]any) CloudflareZeroTrustEntity`

Create a new `OneIntegrationDetail` entity instance. Pass `nil` for no initial data.

#### `OneIntegrationPause(data map[string]any) CloudflareZeroTrustEntity`

Create a new `OneIntegrationPause` entity instance. Pass `nil` for no initial data.

#### `OneIntegrationResume(data map[string]any) CloudflareZeroTrustEntity`

Create a new `OneIntegrationResume` entity instance. Pass `nil` for no initial data.

#### `OneIntegrationUpdate(data map[string]any) CloudflareZeroTrustEntity`

Create a new `OneIntegrationUpdate` entity instance. Pass `nil` for no initial data.

#### `OnePaginatedApplicationListList(data map[string]any) CloudflareZeroTrustEntity`

Create a new `OnePaginatedApplicationListList` entity instance. Pass `nil` for no initial data.

#### `OnePaginatedAuthMethodDetailList(data map[string]any) CloudflareZeroTrustEntity`

Create a new `OnePaginatedAuthMethodDetailList` entity instance. Pass `nil` for no initial data.

#### `OnePaginatedIntegrationV2ListItemList(data map[string]any) CloudflareZeroTrustEntity`

Create a new `OnePaginatedIntegrationV2ListItemList` entity instance. Pass `nil` for no initial data.

#### `OnePaginatedSetupFlowList(data map[string]any) CloudflareZeroTrustEntity`

Create a new `OnePaginatedSetupFlowList` entity instance. Pass `nil` for no initial data.

#### `OverrideCode(data map[string]any) CloudflareZeroTrustEntity`

Create a new `OverrideCode` entity instance. Pass `nil` for no initial data.

#### `Pacfile(data map[string]any) CloudflareZeroTrustEntity`

Create a new `Pacfile` entity instance. Pass `nil` for no initial data.

#### `PhysicalDevice(data map[string]any) CloudflareZeroTrustEntity`

Create a new `PhysicalDevice` entity instance. Pass `nil` for no initial data.

#### `ProxyEndpoint(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ProxyEndpoint` entity instance. Pass `nil` for no initial data.

#### `Registration(data map[string]any) CloudflareZeroTrustEntity`

Create a new `Registration` entity instance. Pass `nil` for no initial data.

#### `Rule(data map[string]any) CloudflareZeroTrustEntity`

Create a new `Rule` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesApiResponseSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesApiResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesComponentsSchemasResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesComponentsSchemasResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesComponentsSchemasSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesComponentsSchemasSingle` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesDefaultDeviceSetting(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesDefaultDeviceSetting` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesDevice(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesDevice` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesDeviceSetting(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesDeviceSetting` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesDeviceSettingsResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesDeviceSettingsResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesDevicesPolicyCertificatesSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesDevicesPolicyCertificatesSingle` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesFallbackDomainResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesFallbackDomainResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesGlobalWarpOverride(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesGlobalWarpOverride` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesId(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesId` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesOverrideCode(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesOverrideCode` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSchemasId(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesSchemasId` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSchemasResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesSchemasResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSchemasSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesSchemasSingle` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesSingle` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSplitTunnelIncludeResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesSplitTunnelIncludeResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesSplitTunnelResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesSplitTunnelResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TeamsDevicesZeroTrustAccountDeviceSetting(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TeamsDevicesZeroTrustAccountDeviceSetting` entity instance. Pass `nil` for no initial data.

#### `Tunnel(data map[string]any) CloudflareZeroTrustEntity`

Create a new `Tunnel` entity instance. Pass `nil` for no initial data.

#### `TunnelCfdTunnelResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelCfdTunnelResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelCfdTunnelResponseSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelCfdTunnelResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelConfiguration(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelConfiguration` entity instance. Pass `nil` for no initial data.

#### `TunnelEmpty(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelEmpty` entity instance. Pass `nil` for no initial data.

#### `TunnelHostnameRouteResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelHostnameRouteResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelHostnameRouteResponseSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelHostnameRouteResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelMeshConfigurationResponseSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelMeshConfigurationResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelRouteResponseSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelRouteResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelSubnetResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelSubnetResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelSubnetResponseSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelSubnetResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelSubnetResponseSingleNullable(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelSubnetResponseSingleNullable` entity instance. Pass `nil` for no initial data.

#### `TunnelTeamnetResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelTeamnetResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelTeamnetResponseSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelTeamnetResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelClient(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelTunnelClient` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelConnection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelTunnelConnection` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelResponseToken(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelTunnelResponseToken` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelWarpConnectorClient(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelTunnelWarpConnectorClient` entity instance. Pass `nil` for no initial data.

#### `TunnelTunnelWarpConnectorConnection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelTunnelWarpConnectorConnection` entity instance. Pass `nil` for no initial data.

#### `TunnelVnetResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelVnetResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelVnetResponseSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelVnetResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelWarpConnectorResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelWarpConnectorResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TunnelWarpConnectorResponseSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelWarpConnectorResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TunnelZeroTrustConnectivitySetting(data map[string]any) CloudflareZeroTrustEntity`

Create a new `TunnelZeroTrustConnectivitySetting` entity instance. Pass `nil` for no initial data.

#### `Warp(data map[string]any) CloudflareZeroTrustEntity`

Create a new `Warp` entity instance. Pass `nil` for no initial data.

#### `WarpChangeEvent(data map[string]any) CloudflareZeroTrustEntity`

Create a new `WarpChangeEvent` entity instance. Pass `nil` for no initial data.

#### `WarpTeamsDeviceApiOther(data map[string]any) CloudflareZeroTrustEntity`

Create a new `WarpTeamsDeviceApiOther` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayApplicationsReviewStatus(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayApplicationsReviewStatus` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayCsvOperationSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayCsvOperationSingle` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayCustomCertificateSetting(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayCustomCertificateSetting` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayGatewayAccount(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayGatewayAccount` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayGatewayAccountConfig(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayGatewayAccountConfig` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayGatewayAccountEgressCidrPairList(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayGatewayAccountEgressCidrPairList` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayGatewayAccountLoggingSetting(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayGatewayAccountLoggingSetting` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayListItemResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayListItemResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayListSingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayListSingle` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection10(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayResponseCollection10` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection2(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayResponseCollection2` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection3(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayResponseCollection3` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection4(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayResponseCollection4` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection5(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayResponseCollection5` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection6(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayResponseCollection6` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection7(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayResponseCollection7` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection8(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayResponseCollection8` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewayResponseCollection9(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewayResponseCollection9` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingle(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewaySingle` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse2(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewaySingleResponse2` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse3(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewaySingleResponse3` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse4(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewaySingleResponse4` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse5(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewaySingleResponse5` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse6(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewaySingleResponse6` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponse7(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewaySingleResponse7` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustGatewaySingleResponseWithListItem(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustGatewaySingleResponseWithListItem` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustRiskScoring(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustRiskScoring` entity instance. Pass `nil` for no initial data.

#### `ZeroTrustRiskScoringIntegration(data map[string]any) CloudflareZeroTrustEntity`

Create a new `ZeroTrustRiskScoringIntegration` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AlexandriaDeleteApplicationEntity

```go
alexandriaDeleteApplication := client.AlexandriaDeleteApplication(nil)
fmt.Println(alexandriaDeleteApplication.GetName()) // "alexandria_delete_application"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AlexandriaDeleteApplication(nil).Remove(map[string]any{"account_id": "account_id", "id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlexandriaDeleteApplicationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AlexandriaGetApplicationEntity

```go
alexandriaGetApplication := client.AlexandriaGetApplication(nil)
fmt.Println(alexandriaGetApplication.GetName()) // "alexandria_get_application"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category_id` | `int` | Yes | Returns the category ID. |
| `errors` | `[]any` | Yes |  |
| `hostnames` | `[]any` | No | Hostnames matched by the application. |
| `human_id` | `string` | Yes | Returns the human readable ID. |
| `id` | `string` | No |  |
| `ip_subnets` | `[]any` | No | IP subnets for this application. |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | Yes | Returns the application name. |
| `port_protocols` | `[]any` | No | Port and protocol pairs matched by the application. |
| `result` | `map[string]any` | Yes | Returns the list of applications. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |
| `support_domains` | `[]any` | No | Support domains matched by the application. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `category_id` | - | - | - | - |
| `errors` | - | - | - | - |
| `hostnames` | - | - | - | - |
| `human_id` | - | - | - | - |
| `id` | - | - | - | - |
| `ip_subnets` | - | - | - | - |
| `messages` | - | - | - | - |
| `name` | - | - | - | - |
| `port_protocols` | - | - | - | - |
| `result` | - | Yes | - | - |
| `success` | - | - | - | - |
| `support_domains` | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AlexandriaGetApplication(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AlexandriaGetApplication(nil).Load(map[string]any{"id": 1, "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AlexandriaGetApplication(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "category_id": 1,
    "errors": []any{},
    "human_id": "example_human_id",
    "messages": []any{},
    "name": "example_name",
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AlexandriaGetApplication(nil).Update(map[string]any{
    "id": 1,
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlexandriaGetApplicationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AlexandriaGetCategoryEntity

```go
alexandriaGetCategory := client.AlexandriaGetCategory(nil)
fmt.Println(alexandriaGetCategory.GetName()) // "alexandria_get_category"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes | Returns the list of categories. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `id` | - | - |
| `messages` | - | - |
| `result` | - | Yes |
| `success` | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AlexandriaGetCategory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AlexandriaGetCategory(nil).Load(map[string]any{"id": 1, "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlexandriaGetCategoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ClientVersionEntity

```go
clientVersion := client.ClientVersion(nil)
fmt.Println(clientVersion.GetName()) // "client_version"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ClientVersion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClientVersionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CniEntity

```go
cni := client.Cni(nil)
fmt.Println(cni.GetName()) // "cni"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Cni(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CniEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeploymentGroupEntity

```go
deploymentGroup := client.DeploymentGroup(nil)
fmt.Println(deploymentGroup.GetName()) // "deployment_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for the deployment group. |
| `policy_ids` | `[]any` | No | Contains an optional list of policy IDs assigned to a group. |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |
| `version_config` | `[]any` | Yes | Contains at least one version configuration. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DeploymentGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DeploymentGroup(nil).Load(map[string]any{"id": "deployment_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DeploymentGroup(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
    "version_config": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DeploymentGroup(nil).Update(map[string]any{
    "id": "deployment_group_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DeploymentGroup(nil).Remove(map[string]any{"id": "deployment_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeploymentGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DexRemoteCommandEntity

```go
dexRemoteCommand := client.DexRemoteCommand(nil)
fmt.Println(dexRemoteCommand.GetName()) // "dex_remote_command"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commands` | `[]any` | Yes | List of device-level commands to execute |
| `result` | `map[string]any` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `commands` | - | - |
| `result` | Yes | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DexRemoteCommand(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DexRemoteCommand(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "commands": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DexRemoteCommandEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DexRuleEntity

```go
dexRule := client.DexRule(nil)
fmt.Println(dexRule.GetName()) // "dex_rule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `match` | `string` | Yes | The wirefilter expression to match. |
| `name` | `string` | Yes | The name of the Rule. |
| `result` | `map[string]any` | No |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `description` | - | - | - | - |
| `id` | - | - | - | - |
| `match` | - | - | Yes | - |
| `name` | - | - | Yes | - |
| `result` | Yes | - | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DexRule(nil).Load(map[string]any{"id": "dex_rule_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DexRule(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "match": "example_match",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DexRule(nil).Update(map[string]any{
    "id": "dex_rule_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DexRule(nil).Remove(map[string]any{"id": "dex_rule_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DexRuleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DexSyntheticApplicationMonitoringEntity

```go
dexSyntheticApplicationMonitoring := client.DexSyntheticApplicationMonitoring(nil)
fmt.Println(dexSyntheticApplicationMonitoring.GetName()) // "dex_synthetic_application_monitoring"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes | array of colos. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | Yes |
| `success` | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DexSyntheticApplicationMonitoring(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DexSyntheticApplicationMonitoring(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DexSyntheticApplicationMonitoringEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DigitalExperienceMonitoringDeviceEntity

```go
digitalExperienceMonitoringDevice := client.DigitalExperienceMonitoringDevice(nil)
fmt.Println(digitalExperienceMonitoringDevice.GetName()) // "digital_experience_monitoring_device"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alwaysOn` | `bool` | No |  |
| `batteryCharging` | `bool` | No |  |
| `batteryCycles` | `int` | No |  |
| `batteryPct` | `float64` | No |  |
| `colo` | `string` | Yes | Cloudflare colo airport code. |
| `connectionType` | `string` | No |  |
| `cpuPct` | `float64` | No |  |
| `cpuPctByApp` | `[]any` | No |  |
| `deviceId` | `string` | Yes | Device identifier (UUID v4) |
| `deviceIpv4` | `map[string]any` | No |  |
| `deviceIpv6` | `map[string]any` | No |  |
| `deviceName` | `string` | No | Device identifier (human readable). |
| `deviceRegistration` | `string` | No | Deprecated: use registrationId. |
| `diskReadBps` | `int` | No |  |
| `diskUsagePct` | `float64` | No |  |
| `diskWriteBps` | `int` | No |  |
| `dohSubdomain` | `string` | No |  |
| `estimatedLossPct` | `float64` | No |  |
| `firewallEnabled` | `bool` | No |  |
| `gatewayIpv4` | `map[string]any` | No |  |
| `gatewayIpv6` | `map[string]any` | No |  |
| `handshakeLatencyMs` | `float64` | No |  |
| `ispIpv4` | `map[string]any` | No |  |
| `ispIpv6` | `map[string]any` | No |  |
| `metal` | `string` | No |  |
| `mode` | `string` | Yes | The mode under which the WARP client is run. |
| `networkRcvdBps` | `int` | No |  |
| `networkSentBps` | `int` | No |  |
| `networkSsid` | `string` | No |  |
| `personEmail` | `string` | No | User contact email address |
| `platform` | `string` | Yes | Operating system. |
| `ramAvailableKb` | `int` | No |  |
| `ramUsedPct` | `float64` | No |  |
| `ramUsedPctByApp` | `[]any` | No |  |
| `registrationId` | `string` | No | Device registration identifier (UUID v4). |
| `rtt` | `map[string]any` | No | Round-trip time statistics for the WARP tunnel. |
| `status` | `string` | Yes | Network status. |
| `switchLocked` | `bool` | No |  |
| `timestamp` | `string` | Yes |  |
| `tunnelStats` | `map[string]any` | No | WARP tunnel packet and byte counters. |
| `tunnelType` | `string` | No |  |
| `version` | `string` | Yes | WARP client version. |
| `wifiStrengthDbm` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DigitalExperienceMonitoringDevice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DigitalExperienceMonitoringDeviceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DigitalExperienceMonitoringDexDeleteResponseCollectionEntity

```go
digitalExperienceMonitoringDexDeleteResponseCollection := client.DigitalExperienceMonitoringDexDeleteResponseCollection(nil)
fmt.Println(digitalExperienceMonitoringDexDeleteResponseCollection.GetName()) // "digital_experience_monitoring_dex_delete_response_collection"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DigitalExperienceMonitoringDexDeleteResponseCollection(nil).Remove(map[string]any{"account_id": "account_id", "dex_test_id": "dex_test_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DigitalExperienceMonitoringDexDeleteResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DigitalExperienceMonitoringDexResponseCollectionEntity

```go
digitalExperienceMonitoringDexResponseCollection := client.DigitalExperienceMonitoringDexResponseCollection(nil)
fmt.Println(digitalExperienceMonitoringDexResponseCollection.GetName()) // "digital_experience_monitoring_dex_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DigitalExperienceMonitoringDexResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DigitalExperienceMonitoringDexResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DigitalExperienceMonitoringDexSingleEntity

```go
digitalExperienceMonitoringDexSingle := client.DigitalExperienceMonitoringDexSingle(nil)
fmt.Println(digitalExperienceMonitoringDexSingle.GetName()) // "digital_experience_monitoring_dex_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No | Date the test was created, in RFC 3339 format. |
| `data` | `map[string]any` | Yes | The configuration object which contains the details for the WARP client to conduct the test. |
| `description` | `string` | No | Additional details about the test. |
| `enabled` | `bool` | Yes | Determines whether or not the test is active. |
| `interval` | `string` | Yes | How often the test will run. |
| `name` | `string` | Yes | The name of the DEX test. |
| `result` | `map[string]any` | Yes |  |
| `target_policies` | `any` | No |  |
| `targeted` | `bool` | No |  |
| `test_id` | `string` | No | The unique identifier for the test. |
| `updated` | `string` | No | Date the test was last updated, in RFC 3339 format. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DigitalExperienceMonitoringDexSingle(nil).Load(map[string]any{"account_id": "account_id", "dex_test_id": "dex_test_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DigitalExperienceMonitoringDexSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "data": map[string]any{},
    "enabled": true,
    "interval": "example_interval",
    "name": "example_name",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DigitalExperienceMonitoringDexSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "dex_test_id": "dex_test_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DigitalExperienceMonitoringDexSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusDeviceEntity

```go
digitalExperienceMonitoringFleetStatusDevice := client.DigitalExperienceMonitoringFleetStatusDevice(nil)
fmt.Println(digitalExperienceMonitoringFleetStatusDevice.GetName()) // "digital_experience_monitoring_fleet_status_device"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DigitalExperienceMonitoringFleetStatusDevice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DigitalExperienceMonitoringFleetStatusDeviceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusLiveEntity

```go
digitalExperienceMonitoringFleetStatusLive := client.DigitalExperienceMonitoringFleetStatusLive(nil)
fmt.Println(digitalExperienceMonitoringFleetStatusLive.GetName()) // "digital_experience_monitoring_fleet_status_live"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DigitalExperienceMonitoringFleetStatusLive(nil).Load(map[string]any{"account_id": "account_id", "since_minute": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DigitalExperienceMonitoringFleetStatusLiveEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusOverTimeEntity

```go
digitalExperienceMonitoringFleetStatusOverTime := client.DigitalExperienceMonitoringFleetStatusOverTime(nil)
fmt.Println(digitalExperienceMonitoringFleetStatusOverTime.GetName()) // "digital_experience_monitoring_fleet_status_over_time"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DigitalExperienceMonitoringFleetStatusOverTime(nil).Load(map[string]any{"account_id": "account_id", "from": "from", "to": "to"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DigitalExperienceMonitoringFleetStatusOverTimeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IntegrationEntity

```go
integration := client.Integration(nil)
fmt.Println(integration.GetName()) // "integration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Integration(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InterconnectEntity

```go
interconnect := client.Interconnect(nil)
fmt.Println(interconnect.GetName()) // "interconnect"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Interconnect(nil).Load(map[string]any{"account_id": "account_id", "icon": "icon"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Interconnect(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InterconnectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IpProfileEntity

```go
ipProfile := client.IpProfile(nil)
fmt.Println(ipProfile.GetName()) // "ip_profile"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | An optional description of the Device IP profile. |
| `enabled` | `bool` | No | Whether the Device IP profile will be applied to matching devices. |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `match` | `string` | Yes | The wirefilter expression to match registrations. |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for the Device IP profile. |
| `precedence` | `int` | Yes | The precedence of the Device IP profile. |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IpProfile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IpProfile(nil).Load(map[string]any{"id": "ip_profile_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.IpProfile(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "match": "example_match",
    "messages": []any{},
    "name": "example_name",
    "precedence": 1,
    "result": map[string]any{},
    "result_info": map[string]any{},
    "subnet_id": "example_subnet_id",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IpProfile(nil).Update(map[string]any{
    "id": "ip_profile_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.IpProfile(nil).Remove(map[string]any{"id": "ip_profile_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IpProfileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListEntity

```go
list := client.List(nil)
fmt.Println(list.GetName()) // "list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.List(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LocationEntity

```go
location := client.Location(nil)
fmt.Println(location.GetName()) // "location"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Location(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LocationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NscCniEntity

```go
nscCni := client.NscCni(nil)
fmt.Println(nscCni.GetName()) // "nsc_cni"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | Customer account tag |
| `bgp` | `map[string]any` | Yes |  |
| `bgp_mode` | `string` | No | The BGP mode for a CNI. |
| `cust_ip` | `string` | Yes | Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`. |
| `id` | `string` | Yes |  |
| `interconnect` | `string` | Yes | Interconnect identifier hosting this CNI |
| `magic` | `map[string]any` | Yes |  |
| `p2p_ip` | `string` | Yes | Cloudflare end of the point-to-point link |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NscCni(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NscCni(nil).Load(map[string]any{"id": "nsc_cni_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.NscCni(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "account": "example_account",
    "bgp": map[string]any{},
    "cust_ip": "example_cust_ip",
    "id": "example_id",
    "interconnect": "example_interconnect",
    "magic": map[string]any{},
    "p2p_ip": "example_p2p_ip",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NscCni(nil).Update(map[string]any{
    "id": "nsc_cni_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NscCniEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NscDefaultNameEntity

```go
nscDefaultName := client.NscDefaultName(nil)
fmt.Println(nscDefaultName.GetName()) // "nsc_default_name"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The default customer name for the interconnect |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NscDefaultName(nil).Load(map[string]any{"account_id": "account_id", "interconnect_id": "interconnect_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NscDefaultNameEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NscInterconnectEntity

```go
nscInterconnect := client.NscInterconnect(nil)
fmt.Println(nscInterconnect.GetName()) // "nsc_interconnect"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `[]any` | Yes |  |
| `next` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NscInterconnect(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NscInterconnect(nil).Load(map[string]any{"id": "nsc_interconnect_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.NscInterconnect(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "items": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NscInterconnectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NscSettingEntity

```go
nscSetting := client.NscSetting(nil)
fmt.Println(nscSetting.GetName()) // "nsc_setting"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NscSetting(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NscSetting(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NscSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NscSlotInfoEntity

```go
nscSlotInfo := client.NscSlotInfo(nil)
fmt.Println(nscSlotInfo.GetName()) // "nsc_slot_info"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | Customer account tag |
| `address` | `[]any` | Yes |  |
| `ccr_device_name` | `string` | No |  |
| `facility` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Slot ID |
| `name` | `string` | Yes |  |
| `occupied` | `bool` | Yes | Whether the slot is occupied or not |
| `site` | `string` | Yes |  |
| `speed` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NscSlotInfo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NscSlotInfo(nil).Load(map[string]any{"account_id": "account_id", "slot": "slot"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NscSlotInfoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NscStatusInfoEntity

```go
nscStatusInfo := client.NscStatusInfo(nil)
fmt.Println(nscStatusInfo.GetName()) // "nsc_status_info"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NscStatusInfo(nil).Load(map[string]any{"account_id": "account_id", "icon": "icon"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NscStatusInfoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OneApplicationDetailEntity

```go
oneApplicationDetail := client.OneApplicationDetail(nil)
fmt.Println(oneApplicationDetail.GetName()) // "one_application_detail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | No | List of errors. |
| `messages` | `[]any` | No | List of messages. |
| `result` | `any` | Yes | The requested item. |
| `success` | `bool` | Yes | Whether the request succeeded. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OneApplicationDetail(nil).Load(map[string]any{"account_id": "account_id", "application_id": "application_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OneApplicationDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OneIntegrationCreateEntity

```go
oneIntegrationCreate := client.OneIntegrationCreate(nil)
fmt.Println(oneIntegrationCreate.GetName()) // "one_integration_create"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `string` | Yes | Vendor/application slug (e.g., GOOGLE_WORKSPACE). |
| `auth_method` | `string` | No | Authentication method slug (uses default if omitted). |
| `credentials` | `map[string]any` | Yes | Credentials for the integration. |
| `dlp_profiles` | `[]any` | No | List of DLP profile IDs to associate. |
| `name` | `string` | Yes | Name of the integration. |
| `permissions` | `[]any` | No | List of permission scopes (uses policy defaults if empty). |
| `use_cases` | `[]any` | No | List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']). |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OneIntegrationCreate(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "application": "example_application",
    "credentials": map[string]any{},
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OneIntegrationCreateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OneIntegrationDetailEntity

```go
oneIntegrationDetail := client.OneIntegrationDetail(nil)
fmt.Println(oneIntegrationDetail.GetName()) // "one_integration_detail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | No | List of errors. |
| `id` | `string` | No |  |
| `messages` | `[]any` | No | List of messages. |
| `result` | `any` | Yes | The requested item. |
| `success` | `bool` | Yes | Whether the request succeeded. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OneIntegrationDetail(nil).Load(map[string]any{"id": "one_integration_detail_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OneIntegrationDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OneIntegrationPauseEntity

```go
oneIntegrationPause := client.OneIntegrationPause(nil)
fmt.Println(oneIntegrationPause.GetName()) // "one_integration_pause"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | No | List of errors. |
| `messages` | `[]any` | No | List of messages. |
| `result` | `any` | Yes | The requested item. |
| `success` | `bool` | Yes | Whether the request succeeded. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OneIntegrationPause(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "integration_id": "example_integration_id",
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OneIntegrationPauseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OneIntegrationResumeEntity

```go
oneIntegrationResume := client.OneIntegrationResume(nil)
fmt.Println(oneIntegrationResume.GetName()) // "one_integration_resume"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | No | List of errors. |
| `messages` | `[]any` | No | List of messages. |
| `result` | `any` | Yes | The requested item. |
| `success` | `bool` | Yes | Whether the request succeeded. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OneIntegrationResume(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "integration_id": "example_integration_id",
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OneIntegrationResumeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OneIntegrationUpdateEntity

```go
oneIntegrationUpdate := client.OneIntegrationUpdate(nil)
fmt.Println(oneIntegrationUpdate.GetName()) // "one_integration_update"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credentials` | `map[string]any` | No | Partial credential fields to merge with existing. |
| `dlp_profiles` | `[]any` | No | List of DLP profile IDs to associate with the integration. |
| `errors` | `[]any` | No | List of errors. |
| `id` | `string` | No |  |
| `messages` | `[]any` | No | List of messages. |
| `name` | `string` | No | Name of the integration. |
| `permissions` | `[]any` | No | List of permission scopes granted to the integration. |
| `result` | `any` | Yes | The requested item. |
| `success` | `bool` | Yes | Whether the request succeeded. |
| `use_cases` | `[]any` | No | List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']). |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OneIntegrationUpdate(nil).Update(map[string]any{
    "account_id": "account_id",
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OneIntegrationUpdateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OnePaginatedApplicationListListEntity

```go
onePaginatedApplicationListList := client.OnePaginatedApplicationListList(nil)
fmt.Println(onePaginatedApplicationListList.GetName()) // "one_paginated_application_list_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_methods` | `[]any` | Yes | Available auth methods. |
| `category` | `string` | Yes | Vendor category (e.g. |
| `description` | `string` | Yes | Brief description of the integration. |
| `display_name` | `string` | Yes | Human-readable vendor name. |
| `dlp_enabled` | `bool` | Yes | Whether DLP scanning is supported. |
| `id` | `string` | Yes | Vendor identifier (e.g. |
| `logo` | `string` | Yes | Logo path. |
| `permissions` | `[]any` | Yes | All permissions with severity. |
| `supported_environments` | `[]any` | Yes | Environments this vendor supports (standard, fedramp). |
| `use_cases` | `[]any` | Yes | Supported use cases. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OnePaginatedApplicationListList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OnePaginatedApplicationListListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OnePaginatedAuthMethodDetailListEntity

```go
onePaginatedAuthMethodDetailList := client.OnePaginatedAuthMethodDetailList(nil)
fmt.Println(onePaginatedAuthMethodDetailList.GetName()) // "one_paginated_auth_method_detail_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes | Human-readable auth method name. |
| `human_interaction_required` | `bool` | Yes | Whether setup requires human interaction or integration can be created purely using API (e.g., For OAuth can not be created without user interaction). |
| `id` | `string` | Yes | Auth method identifier. |
| `instructions` | `any` | Yes | Step-by-step instructions for obtaining credentials. |
| `payload_example` | `map[string]any` | Yes | Example credentials payload with placeholder values. |
| `payload_schema` | `map[string]any` | Yes | JSON Schema for the credentials object in POST /v2/integrations request. |
| `redirect_url` | `string` | Yes | OAuth redirect URL for vendors requiring human interaction. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OnePaginatedAuthMethodDetailList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OnePaginatedAuthMethodDetailListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OnePaginatedIntegrationV2ListItemListEntity

```go
onePaginatedIntegrationV2ListItemList := client.OnePaginatedIntegrationV2ListItemList(nil)
fmt.Println(onePaginatedIntegrationV2ListItemList.GetName()) // "one_paginated_integration_v2_list_item_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `map[string]any` | Yes |  |
| `created` | `string` | Yes | When the integration was created. |
| `id` | `string` | Yes | Integration ID. |
| `is_paused` | `bool` | Yes | Whether the user paused the integration. |
| `name` | `string` | Yes | Name of the integration. |
| `status` | `string` | Yes | Integration status. |
| `updated` | `string` | Yes | When the integration was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OnePaginatedIntegrationV2ListItemList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OnePaginatedIntegrationV2ListItemListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OnePaginatedSetupFlowListEntity

```go
onePaginatedSetupFlowList := client.OnePaginatedSetupFlowList(nil)
fmt.Println(onePaginatedSetupFlowList.GetName()) // "one_paginated_setup_flow_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_config` | `any` | No | OAuth configuration (present for OAuth-based flows). |
| `default` | `bool` | Yes | Whether this is the default auth method. |
| `description` | `string` | Yes | Flow description. |
| `id` | `string` | Yes | Setup flow identifier. |
| `name` | `string` | Yes | Human-readable flow name. |
| `steps` | `[]any` | Yes | Ordered list of setup steps. |
| `supported_environments` | `[]any` | Yes | Environments this auth method supports (standard, fedramp). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OnePaginatedSetupFlowList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OnePaginatedSetupFlowListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OverrideCodeEntity

```go
overrideCode := client.OverrideCode(nil)
fmt.Println(overrideCode.GetName()) // "override_code"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `device_id` | `string` | No | Physical device ID. |
| `duration_hours` | `int` | Yes | Number of hours for which the override code should remain valid. |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `scope` | `string` | Yes | Whether the code applies to every device in the account or one physical device. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `type` | `string` | Yes | The feature that the override code applies to. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OverrideCode(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "duration_hours": 1,
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "scope": "example_scope",
    "success": true,
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OverrideCodeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PacfileEntity

```go
pacfile := client.Pacfile(nil)
fmt.Println(pacfile.GetName()) // "pacfile"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Pacfile(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PacfileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PhysicalDeviceEntity

```go
physicalDevice := client.PhysicalDevice(nil)
fmt.Println(physicalDevice.GetName()) // "physical_device"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes | A WARP Device. |
| `result_info` | `map[string]any` | Yes | V4 public API Pagination/Cursor info. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `tags` | `map[string]any` | No | Replaces all tags assigned to the physical device. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PhysicalDevice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PhysicalDevice(nil).Load(map[string]any{"id": "physical_device_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PhysicalDevice(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "id": "example_id",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PhysicalDevice(nil).Update(map[string]any{
    "id": "physical_device_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PhysicalDevice(nil).Remove(map[string]any{"id": "physical_device_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PhysicalDeviceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProxyEndpointEntity

```go
proxyEndpoint := client.ProxyEndpoint(nil)
fmt.Println(proxyEndpoint.GetName()) // "proxy_endpoint"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProxyEndpoint(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProxyEndpointEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RegistrationEntity

```go
registration := client.Registration(nil)
fmt.Println(registration.GetName()) // "registration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes | A WARP configuration tied to a single user. |
| `result_info` | `map[string]any` | Yes | V4 public API Pagination/Cursor info. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Registration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Registration(nil).Load(map[string]any{"id": "registration_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Registration(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "id": []any{},
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Registration(nil).Remove(map[string]any{"id": "registration_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RegistrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RuleEntity

```go
rule := client.Rule(nil)
fmt.Println(rule.GetName()) // "rule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Rule(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RuleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesApiResponseSingleEntity

```go
teamsDevicesApiResponseSingle := client.TeamsDevicesApiResponseSingle(nil)
fmt.Println(teamsDevicesApiResponseSingle.GetName()) // "teams_devices_api_response_single"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TeamsDevicesApiResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesApiResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesComponentsSchemasResponseCollectionEntity

```go
teamsDevicesComponentsSchemasResponseCollection := client.TeamsDevicesComponentsSchemasResponseCollection(nil)
fmt.Println(teamsDevicesComponentsSchemasResponseCollection.GetName()) // "teams_devices_components_schemas_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TeamsDevicesComponentsSchemasResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TeamsDevicesComponentsSchemasResponseCollection(nil).Remove(map[string]any{"account_id": "account_id", "network_id": "network_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesComponentsSchemasResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesComponentsSchemasSingleEntity

```go
teamsDevicesComponentsSchemasSingle := client.TeamsDevicesComponentsSchemasSingle(nil)
fmt.Println(teamsDevicesComponentsSchemasSingle.GetName()) // "teams_devices_components_schemas_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `map[string]any` | Yes | The configuration object containing information for the WARP client to detect the managed network. |
| `name` | `string` | Yes | The name of the device managed network. |
| `result` | `map[string]any` | No |  |
| `type` | `string` | Yes | The type of device managed network. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `config` | - | - | Yes |
| `name` | - | - | Yes |
| `result` | - | - | - |
| `type` | - | - | Yes |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TeamsDevicesComponentsSchemasSingle(nil).Load(map[string]any{"account_id": "account_id", "network_id": "network_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TeamsDevicesComponentsSchemasSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "config": map[string]any{},
    "name": "example_name",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TeamsDevicesComponentsSchemasSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "network_id": "network_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesComponentsSchemasSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesDefaultDeviceSettingEntity

```go
teamsDevicesDefaultDeviceSetting := client.TeamsDevicesDefaultDeviceSetting(nil)
fmt.Println(teamsDevicesDefaultDeviceSetting.GetName()) // "teams_devices_default_device_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_mode_switch` | `bool` | No | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `bool` | No | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `bool` | No | Whether to allow devices to leave the organization. |
| `auto_connect` | `float64` | No | The amount of time in seconds to reconnect after having been disabled. |
| `captive_portal` | `float64` | No | Turn on the captive portal after the specified amount of time. |
| `disable_auto_fallback` | `bool` | No | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `[]any` | No | List of DNS search suffixes to apply to clients. |
| `exclude` | `[]any` | No | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `bool` | No | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `map[string]any` | Yes | Global Acceleration settings for China. |
| `include` | `[]any` | No | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `float64` | No | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `float64` | No | The size of the subnet for the local access network. |
| `register_interface_ip_with_dns` | `bool` | No | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `map[string]any` | No |  |
| `sccm_vpn_boundary_support` | `bool` | No | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `map[string]any` | No |  |
| `support_url` | `string` | No | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `bool` | No | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | No | Determines which tunnel protocol to use. |
| `uninstall_protection` | `bool` | No | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `map[string]any` | Yes | Virtual network access settings for the device. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TeamsDevicesDefaultDeviceSetting(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TeamsDevicesDefaultDeviceSetting(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesDefaultDeviceSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesDeviceEntity

```go
teamsDevicesDevice := client.TeamsDevicesDevice(nil)
fmt.Println(teamsDevicesDevice.GetName()) // "teams_devices_device"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TeamsDevicesDevice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TeamsDevicesDevice(nil).Load(map[string]any{"id": "teams_devices_device_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesDeviceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesDeviceSettingEntity

```go
teamsDevicesDeviceSetting := client.TeamsDevicesDeviceSetting(nil)
fmt.Println(teamsDevicesDeviceSetting.GetName()) // "teams_devices_device_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_mode_switch` | `bool` | No | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `bool` | No | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `bool` | No | Whether to allow devices to leave the organization. |
| `auto_connect` | `float64` | No | The amount of time in seconds to reconnect after having been disabled. |
| `browser_extension_config` | `map[string]any` | Yes | Browser extension proxy settings. |
| `captive_portal` | `float64` | No | Turn on the captive portal after the specified amount of time. |
| `default` | `bool` | No | Whether the policy is the account default. |
| `description` | `string` | No | A description of the policy. |
| `disable_auto_fallback` | `bool` | No | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `[]any` | No | List of DNS search suffixes to apply to clients. |
| `enabled` | `bool` | No | Whether the policy will be applied to matching devices. |
| `exclude` | `[]any` | No | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `bool` | No | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `map[string]any` | Yes | Global Acceleration settings for China. |
| `include` | `[]any` | No | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `float64` | No | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `float64` | No | The size of the subnet for the local access network. |
| `match` | `string` | No | The wirefilter expression to match devices. |
| `name` | `string` | Yes | The name of the device settings profile. |
| `precedence` | `float64` | No | The precedence of the policy. |
| `profile_type` | `string` | No | The client type to which the device settings profile applies. |
| `register_interface_ip_with_dns` | `bool` | No | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `map[string]any` | No |  |
| `sccm_vpn_boundary_support` | `bool` | No | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `map[string]any` | No |  |
| `support_url` | `string` | No | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `bool` | No | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | No | Determines which tunnel protocol to use. |
| `uninstall_protection` | `bool` | No | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `map[string]any` | Yes | Virtual network access settings for the device. |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TeamsDevicesDeviceSetting(nil).Load(map[string]any{"account_id": "account_id", "policy_id": "policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TeamsDevicesDeviceSetting(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "browser_extension_config": map[string]any{},
    "global_acceleration": map[string]any{},
    "name": "example_name",
    "virtual_networks": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TeamsDevicesDeviceSetting(nil).Update(map[string]any{
    "account_id": "account_id",
    "policy_id": "policy_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesDeviceSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesDeviceSettingsResponseCollectionEntity

```go
teamsDevicesDeviceSettingsResponseCollection := client.TeamsDevicesDeviceSettingsResponseCollection(nil)
fmt.Println(teamsDevicesDeviceSettingsResponseCollection.GetName()) // "teams_devices_device_settings_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TeamsDevicesDeviceSettingsResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TeamsDevicesDeviceSettingsResponseCollection(nil).Remove(map[string]any{"account_id": "account_id", "policy_id": "policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesDeviceSettingsResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesDevicesPolicyCertificatesSingleEntity

```go
teamsDevicesDevicesPolicyCertificatesSingle := client.TeamsDevicesDevicesPolicyCertificatesSingle(nil)
fmt.Println(teamsDevicesDevicesPolicyCertificatesSingle.GetName()) // "teams_devices_devices_policy_certificates_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | The current status of the device policy certificate provisioning feature for WARP clients. |
| `result` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TeamsDevicesDevicesPolicyCertificatesSingle(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TeamsDevicesDevicesPolicyCertificatesSingle(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesDevicesPolicyCertificatesSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesFallbackDomainResponseCollectionEntity

```go
teamsDevicesFallbackDomainResponseCollection := client.TeamsDevicesFallbackDomainResponseCollection(nil)
fmt.Println(teamsDevicesFallbackDomainResponseCollection.GetName()) // "teams_devices_fallback_domain_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TeamsDevicesFallbackDomainResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TeamsDevicesFallbackDomainResponseCollection(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TeamsDevicesFallbackDomainResponseCollection(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesFallbackDomainResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesGlobalWarpOverrideEntity

```go
teamsDevicesGlobalWarpOverride := client.TeamsDevicesGlobalWarpOverride(nil)
fmt.Println(teamsDevicesGlobalWarpOverride.GetName()) // "teams_devices_global_warp_override"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disconnect` | `bool` | Yes | Disconnects all devices on the account using Global WARP override. |
| `justification` | `string` | No | Reasoning for setting the Global WARP override state. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TeamsDevicesGlobalWarpOverride(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TeamsDevicesGlobalWarpOverride(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "disconnect": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesGlobalWarpOverrideEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesIdEntity

```go
teamsDevicesId := client.TeamsDevicesId(nil)
fmt.Println(teamsDevicesId.GetName()) // "teams_devices_id"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TeamsDevicesId(nil).Remove(map[string]any{"account_id": "account_id", "rule_id": "rule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesIdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesOverrideCodeEntity

```go
teamsDevicesOverrideCode := client.TeamsDevicesOverrideCode(nil)
fmt.Println(teamsDevicesOverrideCode.GetName()) // "teams_devices_override_code"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TeamsDevicesOverrideCode(nil).Load(map[string]any{"account_id": "account_id", "device_id": "device_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesOverrideCodeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesResponseCollectionEntity

```go
teamsDevicesResponseCollection := client.TeamsDevicesResponseCollection(nil)
fmt.Println(teamsDevicesResponseCollection.GetName()) // "teams_devices_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TeamsDevicesResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesSchemasIdEntity

```go
teamsDevicesSchemasId := client.TeamsDevicesSchemasId(nil)
fmt.Println(teamsDevicesSchemasId.GetName()) // "teams_devices_schemas_id"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TeamsDevicesSchemasId(nil).Remove(map[string]any{"account_id": "account_id", "integration_id": "integration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesSchemasIdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesSchemasResponseCollectionEntity

```go
teamsDevicesSchemasResponseCollection := client.TeamsDevicesSchemasResponseCollection(nil)
fmt.Println(teamsDevicesSchemasResponseCollection.GetName()) // "teams_devices_schemas_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TeamsDevicesSchemasResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesSchemasResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesSchemasSingleEntity

```go
teamsDevicesSchemasSingle := client.TeamsDevicesSchemasSingle(nil)
fmt.Println(teamsDevicesSchemasSingle.GetName()) // "teams_devices_schemas_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `map[string]any` | Yes | The configuration object containing third-party integration information. |
| `interval` | `string` | Yes | The interval between each posture check with the third-party API. |
| `name` | `string` | Yes | The name of the device posture integration. |
| `result` | `map[string]any` | No |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TeamsDevicesSchemasSingle(nil).Load(map[string]any{"account_id": "account_id", "integration_id": "integration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TeamsDevicesSchemasSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "config": map[string]any{},
    "interval": "example_interval",
    "name": "example_name",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TeamsDevicesSchemasSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "integration_id": "integration_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesSchemasSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesSingleEntity

```go
teamsDevicesSingle := client.TeamsDevicesSingle(nil)
fmt.Println(teamsDevicesSingle.GetName()) // "teams_devices_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | The description of the device posture rule. |
| `expiration` | `string` | No | Sets the expiration time for a posture check result. |
| `input` | `map[string]any` | No | The value to be checked against. |
| `match` | `[]any` | No | The conditions that the client must match to run the rule. |
| `name` | `string` | Yes | The name of the device posture rule. |
| `result` | `map[string]any` | No |  |
| `schedule` | `string` | No | Polling frequency for the WARP client posture check. |
| `type` | `string` | Yes | The type of device posture rule. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TeamsDevicesSingle(nil).Load(map[string]any{"account_id": "account_id", "rule_id": "rule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TeamsDevicesSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "name": "example_name",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TeamsDevicesSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "rule_id": "rule_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesSplitTunnelIncludeResponseCollectionEntity

```go
teamsDevicesSplitTunnelIncludeResponseCollection := client.TeamsDevicesSplitTunnelIncludeResponseCollection(nil)
fmt.Println(teamsDevicesSplitTunnelIncludeResponseCollection.GetName()) // "teams_devices_split_tunnel_include_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TeamsDevicesSplitTunnelIncludeResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TeamsDevicesSplitTunnelIncludeResponseCollection(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesSplitTunnelIncludeResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesSplitTunnelResponseCollectionEntity

```go
teamsDevicesSplitTunnelResponseCollection := client.TeamsDevicesSplitTunnelResponseCollection(nil)
fmt.Println(teamsDevicesSplitTunnelResponseCollection.GetName()) // "teams_devices_split_tunnel_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TeamsDevicesSplitTunnelResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TeamsDevicesSplitTunnelResponseCollection(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TeamsDevicesSplitTunnelResponseCollection(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesSplitTunnelResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamsDevicesZeroTrustAccountDeviceSettingEntity

```go
teamsDevicesZeroTrustAccountDeviceSetting := client.TeamsDevicesZeroTrustAccountDeviceSetting(nil)
fmt.Println(teamsDevicesZeroTrustAccountDeviceSetting.GetName()) // "teams_devices_zero_trust_account_device_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disable_for_time` | `float64` | No | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| `external_emergency_signal_enabled` | `bool` | No | Controls whether the external emergency disconnect feature is enabled. |
| `external_emergency_signal_fingerprint` | `string` | No | The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. |
| `external_emergency_signal_interval` | `string` | No | The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). |
| `external_emergency_signal_url` | `string` | No | The HTTPS URL from which to fetch the emergency disconnect signal. |
| `gateway_proxy_enabled` | `bool` | No | Enable gateway proxy filtering on TCP. |
| `gateway_udp_proxy_enabled` | `bool` | No | Enable gateway proxy filtering on UDP. |
| `result` | `map[string]any` | No |  |
| `root_certificate_installation_enabled` | `bool` | No | Enable installation of cloudflare managed root certificate. |
| `use_zt_virtual_ip` | `bool` | No | Enable using CGNAT virtual IPv4. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TeamsDevicesZeroTrustAccountDeviceSetting(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TeamsDevicesZeroTrustAccountDeviceSetting(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TeamsDevicesZeroTrustAccountDeviceSetting(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamsDevicesZeroTrustAccountDeviceSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelEntity

```go
tunnel := client.Tunnel(nil)
fmt.Println(tunnel.GetName()) // "tunnel"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Tunnel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelCfdTunnelResponseCollectionEntity

```go
tunnelCfdTunnelResponseCollection := client.TunnelCfdTunnelResponseCollection(nil)
fmt.Println(tunnelCfdTunnelResponseCollection.GetName()) // "tunnel_cfd_tunnel_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TunnelCfdTunnelResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelCfdTunnelResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelCfdTunnelResponseSingleEntity

```go
tunnelCfdTunnelResponseSingle := client.TunnelCfdTunnelResponseSingle(nil)
fmt.Println(tunnelCfdTunnelResponseSingle.GetName()) // "tunnel_cfd_tunnel_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config_src` | `string` | No | Indicates if this is a locally or remotely configured tunnel. |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TunnelCfdTunnelResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "tunnel_id": "tunnel_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TunnelCfdTunnelResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TunnelCfdTunnelResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "tunnel_id": "tunnel_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TunnelCfdTunnelResponseSingle(nil).Remove(map[string]any{"account_id": "account_id", "tunnel_id": "tunnel_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelCfdTunnelResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelConfigurationEntity

```go
tunnelConfiguration := client.TunnelConfiguration(nil)
fmt.Println(tunnelConfiguration.GetName()) // "tunnel_configuration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `map[string]any` | No | The tunnel configuration and ingress rules. |
| `result` | `map[string]any` | No | Cloudflare Tunnel configuration |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TunnelConfiguration(nil).Load(map[string]any{"account_id": "account_id", "cfd_tunnel_id": "cfd_tunnel_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TunnelConfiguration(nil).Update(map[string]any{
    "account_id": "account_id",
    "cfd_tunnel_id": "cfd_tunnel_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelConfigurationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelEmptyEntity

```go
tunnelEmpty := client.TunnelEmpty(nil)
fmt.Println(tunnelEmpty.GetName()) // "tunnel_empty"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `string` | Yes | UUID of the Cloudflare Tunnel connector. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TunnelEmpty(nil).Update(map[string]any{
    "account_id": "account_id",
    "warp_connector_id": "warp_connector_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TunnelEmpty(nil).Remove(map[string]any{"account_id": "account_id", "cfd_tunnel_id": "cfd_tunnel_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelEmptyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelHostnameRouteResponseCollectionEntity

```go
tunnelHostnameRouteResponseCollection := client.TunnelHostnameRouteResponseCollection(nil)
fmt.Println(tunnelHostnameRouteResponseCollection.GetName()) // "tunnel_hostname_route_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TunnelHostnameRouteResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelHostnameRouteResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelHostnameRouteResponseSingleEntity

```go
tunnelHostnameRouteResponseSingle := client.TunnelHostnameRouteResponseSingle(nil)
fmt.Println(tunnelHostnameRouteResponseSingle.GetName()) // "tunnel_hostname_route_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | An optional description of the hostname route. |
| `errors` | `[]any` | Yes |  |
| `hostname` | `string` | No | The hostname of the route. |
| `messages` | `[]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TunnelHostnameRouteResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "hostname_route_id": "hostname_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TunnelHostnameRouteResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TunnelHostnameRouteResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "hostname_route_id": "hostname_route_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TunnelHostnameRouteResponseSingle(nil).Remove(map[string]any{"account_id": "account_id", "hostname_route_id": "hostname_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelHostnameRouteResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelMeshConfigurationResponseSingleEntity

```go
tunnelMeshConfigurationResponseSingle := client.TunnelMeshConfigurationResponseSingle(nil)
fmt.Println(tunnelMeshConfigurationResponseSingle.GetName()) // "tunnel_mesh_configuration_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `map[string]any` | No | Provider-specific configuration. |
| `ha_mode` | `string` | Yes | High-availability mode for the WARP Connector tunnel. |
| `result` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TunnelMeshConfigurationResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "warp_connector_id": "warp_connector_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TunnelMeshConfigurationResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "warp_connector_id": "warp_connector_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelMeshConfigurationResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelRouteResponseSingleEntity

```go
tunnelRouteResponseSingle := client.TunnelRouteResponseSingle(nil)
fmt.Println(tunnelRouteResponseSingle.GetName()) // "tunnel_route_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Optional remark describing the route. |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TunnelRouteResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "route_id": "route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TunnelRouteResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "network": "example_network",
    "result": "example_result",
    "success": true,
    "tunnel_id": "example_tunnel_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TunnelRouteResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TunnelRouteResponseSingle(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelRouteResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelSubnetResponseCollectionEntity

```go
tunnelSubnetResponseCollection := client.TunnelSubnetResponseCollection(nil)
fmt.Println(tunnelSubnetResponseCollection.GetName()) // "tunnel_subnet_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TunnelSubnetResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelSubnetResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelSubnetResponseSingleEntity

```go
tunnelSubnetResponseSingle := client.TunnelSubnetResponseSingle(nil)
fmt.Println(tunnelSubnetResponseSingle.GetName()) // "tunnel_subnet_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | An optional description of the subnet. |
| `errors` | `[]any` | Yes |  |
| `is_default_network` | `bool` | No | If `true`, this is the default subnet for the account. |
| `messages` | `[]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TunnelSubnetResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "address_family": "address_family"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TunnelSubnetResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "network": "example_network",
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TunnelSubnetResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "address_family": "address_family",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelSubnetResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelSubnetResponseSingleNullableEntity

```go
tunnelSubnetResponseSingleNullable := client.TunnelSubnetResponseSingleNullable(nil)
fmt.Println(tunnelSubnetResponseSingleNullable.GetName()) // "tunnel_subnet_response_single_nullable"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TunnelSubnetResponseSingleNullable(nil).Remove(map[string]any{"account_id": "account_id", "subnet_id": "subnet_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelSubnetResponseSingleNullableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelTeamnetResponseCollectionEntity

```go
tunnelTeamnetResponseCollection := client.TunnelTeamnetResponseCollection(nil)
fmt.Println(tunnelTeamnetResponseCollection.GetName()) // "tunnel_teamnet_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TunnelTeamnetResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelTeamnetResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelTeamnetResponseSingleEntity

```go
tunnelTeamnetResponseSingle := client.TunnelTeamnetResponseSingle(nil)
fmt.Println(tunnelTeamnetResponseSingle.GetName()) // "tunnel_teamnet_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TunnelTeamnetResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "ip": "ip"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelTeamnetResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelTunnelClientEntity

```go
tunnelTunnelClient := client.TunnelTunnelClient(nil)
fmt.Println(tunnelTunnelClient.GetName()) // "tunnel_tunnel_client"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TunnelTunnelClient(nil).Load(map[string]any{"account_id": "account_id", "cfd_tunnel_id": "cfd_tunnel_id", "connector_id": "connector_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelTunnelClientEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelTunnelConnectionEntity

```go
tunnelTunnelConnection := client.TunnelTunnelConnection(nil)
fmt.Println(tunnelTunnelConnection.GetName()) // "tunnel_tunnel_connection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TunnelTunnelConnection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelTunnelConnectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelTunnelResponseTokenEntity

```go
tunnelTunnelResponseToken := client.TunnelTunnelResponseToken(nil)
fmt.Println(tunnelTunnelResponseToken.GetName()) // "tunnel_tunnel_response_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `resources` | `[]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TunnelTunnelResponseToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TunnelTunnelResponseToken(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "cfd_tunnel_id": "example_cfd_tunnel_id",
    "errors": []any{},
    "messages": []any{},
    "resources": []any{},
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelTunnelResponseTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelTunnelWarpConnectorClientEntity

```go
tunnelTunnelWarpConnectorClient := client.TunnelTunnelWarpConnectorClient(nil)
fmt.Println(tunnelTunnelWarpConnectorClient.GetName()) // "tunnel_tunnel_warp_connector_client"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TunnelTunnelWarpConnectorClient(nil).Load(map[string]any{"account_id": "account_id", "connector_id": "connector_id", "warp_connector_id": "warp_connector_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelTunnelWarpConnectorClientEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelTunnelWarpConnectorConnectionEntity

```go
tunnelTunnelWarpConnectorConnection := client.TunnelTunnelWarpConnectorConnection(nil)
fmt.Println(tunnelTunnelWarpConnectorConnection.GetName()) // "tunnel_tunnel_warp_connector_connection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TunnelTunnelWarpConnectorConnection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelTunnelWarpConnectorConnectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelVnetResponseCollectionEntity

```go
tunnelVnetResponseCollection := client.TunnelVnetResponseCollection(nil)
fmt.Println(tunnelVnetResponseCollection.GetName()) // "tunnel_vnet_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TunnelVnetResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelVnetResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelVnetResponseSingleEntity

```go
tunnelVnetResponseSingle := client.TunnelVnetResponseSingle(nil)
fmt.Println(tunnelVnetResponseSingle.GetName()) // "tunnel_vnet_response_single"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TunnelVnetResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "virtual_network_id": "virtual_network_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TunnelVnetResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TunnelVnetResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "virtual_network_id": "virtual_network_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TunnelVnetResponseSingle(nil).Remove(map[string]any{"account_id": "account_id", "virtual_network_id": "virtual_network_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelVnetResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelWarpConnectorResponseCollectionEntity

```go
tunnelWarpConnectorResponseCollection := client.TunnelWarpConnectorResponseCollection(nil)
fmt.Println(tunnelWarpConnectorResponseCollection.GetName()) // "tunnel_warp_connector_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TunnelWarpConnectorResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelWarpConnectorResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelWarpConnectorResponseSingleEntity

```go
tunnelWarpConnectorResponseSingle := client.TunnelWarpConnectorResponseSingle(nil)
fmt.Println(tunnelWarpConnectorResponseSingle.GetName()) // "tunnel_warp_connector_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `ha` | `bool` | No | Indicates that the tunnel will be created to be highly available. |
| `messages` | `[]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TunnelWarpConnectorResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "tunnel_id": "tunnel_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TunnelWarpConnectorResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TunnelWarpConnectorResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "tunnel_id": "tunnel_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TunnelWarpConnectorResponseSingle(nil).Remove(map[string]any{"account_id": "account_id", "tunnel_id": "tunnel_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelWarpConnectorResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TunnelZeroTrustConnectivitySettingEntity

```go
tunnelZeroTrustConnectivitySetting := client.TunnelZeroTrustConnectivitySetting(nil)
fmt.Println(tunnelZeroTrustConnectivitySetting.GetName()) // "tunnel_zero_trust_connectivity_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `icmp_proxy_enabled` | `bool` | No | A flag to enable the ICMP proxy for the account network. |
| `messages` | `[]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TunnelZeroTrustConnectivitySetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TunnelZeroTrustConnectivitySetting(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TunnelZeroTrustConnectivitySettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WarpEntity

```go
warp := client.Warp(nil)
fmt.Println(warp.GetName()) // "warp"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | An optional description of the subnet. |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `is_default_network` | `bool` | No | If `true`, this is the default subnet for the account. |
| `messages` | `[]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Warp(nil).Load(map[string]any{"id": "warp_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Warp(nil).Update(map[string]any{
    "id": "warp_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WarpEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WarpChangeEventEntity

```go
warpChangeEvent := client.WarpChangeEvent(nil)
fmt.Println(warpChangeEvent.GetName()) // "warp_change_event"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WarpChangeEvent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WarpChangeEventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WarpTeamsDeviceApiOtherEntity

```go
warpTeamsDeviceApiOther := client.WarpTeamsDeviceApiOther(nil)
fmt.Println(warpTeamsDeviceApiOther.GetName()) // "warp_teams_device_api_other"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WarpTeamsDeviceApiOther(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WarpTeamsDeviceApiOtherEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayApplicationsReviewStatusEntity

```go
zeroTrustGatewayApplicationsReviewStatus := client.ZeroTrustGatewayApplicationsReviewStatus(nil)
fmt.Println(zeroTrustGatewayApplicationsReviewStatus.GetName()) // "zero_trust_gateway_applications_review_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_apps` | `[]any` | Yes | Contains the ids of the approved applications. |
| `in_review_apps` | `[]any` | Yes | Contains the ids of the applications in review. |
| `result` | `map[string]any` | No |  |
| `unapproved_apps` | `[]any` | Yes | Contains the ids of the unapproved applications. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewayApplicationsReviewStatus(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZeroTrustGatewayApplicationsReviewStatus(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayApplicationsReviewStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayCsvOperationSingleEntity

```go
zeroTrustGatewayCsvOperationSingle := client.ZeroTrustGatewayCsvOperationSingle(nil)
fmt.Println(zeroTrustGatewayCsvOperationSingle.GetName()) // "zero_trust_gateway_csv_operation_single"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ZeroTrustGatewayCsvOperationSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayCsvOperationSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayCustomCertificateSettingEntity

```go
zeroTrustGatewayCustomCertificateSetting := client.ZeroTrustGatewayCustomCertificateSetting(nil)
fmt.Println(zeroTrustGatewayCustomCertificateSetting.GetName()) // "zero_trust_gateway_custom_certificate_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `binding_status` | `string` | No | Indicate the internal certificate status. |
| `enabled` | `bool` | Yes | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| `id` | `string` | No | Specify the UUID of the certificate (ID from MTLS certificate store). |
| `updated_at` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewayCustomCertificateSetting(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayCustomCertificateSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountEntity

```go
zeroTrustGatewayGatewayAccount := client.ZeroTrustGatewayGatewayAccount(nil)
fmt.Println(zeroTrustGatewayGatewayAccount.GetName()) // "zero_trust_gateway_gateway_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewayGatewayAccount(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ZeroTrustGatewayGatewayAccount(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayGatewayAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountConfigEntity

```go
zeroTrustGatewayGatewayAccountConfig := client.ZeroTrustGatewayGatewayAccountConfig(nil)
fmt.Println(zeroTrustGatewayGatewayAccountConfig.GetName()) // "zero_trust_gateway_gateway_account_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |
| `settings` | `map[string]any` | No | Specify account settings. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewayGatewayAccountConfig(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZeroTrustGatewayGatewayAccountConfig(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayGatewayAccountConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity

```go
zeroTrustGatewayGatewayAccountEgressCidrPairList := client.ZeroTrustGatewayGatewayAccountEgressCidrPairList(nil)
fmt.Println(zeroTrustGatewayGatewayAccountEgressCidrPairList.GetName()) // "zero_trust_gateway_gateway_account_egress_cidr_pair_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZeroTrustGatewayGatewayAccountEgressCidrPairList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountLoggingSettingEntity

```go
zeroTrustGatewayGatewayAccountLoggingSetting := client.ZeroTrustGatewayGatewayAccountLoggingSetting(nil)
fmt.Println(zeroTrustGatewayGatewayAccountLoggingSetting.GetName()) // "zero_trust_gateway_gateway_account_logging_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redact_pii` | `bool` | No | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `result` | `map[string]any` | No |  |
| `settings_by_rule_type` | `map[string]any` | No | Configure logging settings for each rule type. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewayGatewayAccountLoggingSetting(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZeroTrustGatewayGatewayAccountLoggingSetting(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayGatewayAccountLoggingSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayListItemResponseCollectionEntity

```go
zeroTrustGatewayListItemResponseCollection := client.ZeroTrustGatewayListItemResponseCollection(nil)
fmt.Println(zeroTrustGatewayListItemResponseCollection.GetName()) // "zero_trust_gateway_list_item_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No | Provide the list items. |
| `result_info` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZeroTrustGatewayListItemResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayListItemResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayListSingleEntity

```go
zeroTrustGatewayListSingle := client.ZeroTrustGatewayListSingle(nil)
fmt.Println(zeroTrustGatewayListSingle.GetName()) // "zero_trust_gateway_list_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `append` | `[]any` | No | Add items to the list. |
| `description` | `string` | No | Provide the list description. |
| `items` | `[]any` | No | Add items to the list. |
| `name` | `string` | Yes | Specify the list name. |
| `remove` | `[]any` | No | Lists of item values you want to remove. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewayListSingle(nil).Load(map[string]any{"account_id": "account_id", "list_id": "list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZeroTrustGatewayListSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "list_id": "list_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayListSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollectionEntity

```go
zeroTrustGatewayResponseCollection := client.ZeroTrustGatewayResponseCollection(nil)
fmt.Println(zeroTrustGatewayResponseCollection.GetName()) // "zero_trust_gateway_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZeroTrustGatewayResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection10Entity

```go
zeroTrustGatewayResponseCollection10 := client.ZeroTrustGatewayResponseCollection10(nil)
fmt.Println(zeroTrustGatewayResponseCollection10.GetName()) // "zero_trust_gateway_response_collection_10"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |
| `result_info` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZeroTrustGatewayResponseCollection10(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayResponseCollection10Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection2Entity

```go
zeroTrustGatewayResponseCollection2 := client.ZeroTrustGatewayResponseCollection2(nil)
fmt.Println(zeroTrustGatewayResponseCollection2.GetName()) // "zero_trust_gateway_response_collection_2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZeroTrustGatewayResponseCollection2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayResponseCollection2Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection3Entity

```go
zeroTrustGatewayResponseCollection3 := client.ZeroTrustGatewayResponseCollection3(nil)
fmt.Println(zeroTrustGatewayResponseCollection3.GetName()) // "zero_trust_gateway_response_collection_3"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZeroTrustGatewayResponseCollection3(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayResponseCollection3Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection4Entity

```go
zeroTrustGatewayResponseCollection4 := client.ZeroTrustGatewayResponseCollection4(nil)
fmt.Println(zeroTrustGatewayResponseCollection4.GetName()) // "zero_trust_gateway_response_collection_4"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZeroTrustGatewayResponseCollection4(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayResponseCollection4Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection5Entity

```go
zeroTrustGatewayResponseCollection5 := client.ZeroTrustGatewayResponseCollection5(nil)
fmt.Println(zeroTrustGatewayResponseCollection5.GetName()) // "zero_trust_gateway_response_collection_5"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZeroTrustGatewayResponseCollection5(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayResponseCollection5Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection6Entity

```go
zeroTrustGatewayResponseCollection6 := client.ZeroTrustGatewayResponseCollection6(nil)
fmt.Println(zeroTrustGatewayResponseCollection6.GetName()) // "zero_trust_gateway_response_collection_6"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZeroTrustGatewayResponseCollection6(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZeroTrustGatewayResponseCollection6(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayResponseCollection6Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection7Entity

```go
zeroTrustGatewayResponseCollection7 := client.ZeroTrustGatewayResponseCollection7(nil)
fmt.Println(zeroTrustGatewayResponseCollection7.GetName()) // "zero_trust_gateway_response_collection_7"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZeroTrustGatewayResponseCollection7(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayResponseCollection7Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection8Entity

```go
zeroTrustGatewayResponseCollection8 := client.ZeroTrustGatewayResponseCollection8(nil)
fmt.Println(zeroTrustGatewayResponseCollection8.GetName()) // "zero_trust_gateway_response_collection_8"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZeroTrustGatewayResponseCollection8(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayResponseCollection8Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection9Entity

```go
zeroTrustGatewayResponseCollection9 := client.ZeroTrustGatewayResponseCollection9(nil)
fmt.Println(zeroTrustGatewayResponseCollection9.GetName()) // "zero_trust_gateway_response_collection_9"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZeroTrustGatewayResponseCollection9(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewayResponseCollection9Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewaySingleEntity

```go
zeroTrustGatewaySingle := client.ZeroTrustGatewaySingle(nil)
fmt.Println(zeroTrustGatewaySingle.GetName()) // "zero_trust_gateway_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |
| `validity_period_days` | `int` | No | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewaySingle(nil).Load(map[string]any{"account_id": "account_id", "certificate_id": "certificate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ZeroTrustGatewaySingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewaySingle(nil).Remove(map[string]any{"account_id": "account_id", "certificate_id": "certificate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewaySingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse2Entity

```go
zeroTrustGatewaySingleResponse2 := client.ZeroTrustGatewaySingleResponse2(nil)
fmt.Println(zeroTrustGatewaySingleResponse2.GetName()) // "zero_trust_gateway_single_response_2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewaySingleResponse2(nil).Load(map[string]any{"account_id": "account_id", "operation_id": "operation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewaySingleResponse2Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse3Entity

```go
zeroTrustGatewaySingleResponse3 := client.ZeroTrustGatewaySingleResponse3(nil)
fmt.Println(zeroTrustGatewaySingleResponse3.GetName()) // "zero_trust_gateway_single_response_3"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_default` | `bool` | No | Indicate whether this location is the default location. |
| `dns_destination_ips_id` | `string` | No | Specify the identifier of the pair of IPv4 addresses assigned to this location. |
| `ecs_support` | `bool` | No | Indicate whether the location must resolve EDNS queries. |
| `endpoints` | `map[string]any` | Yes | Configure the destination endpoints for this location. |
| `max_ttl` | `map[string]any` | Yes | Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. |
| `name` | `string` | Yes | Specify the location name. |
| `networks` | `[]any` | No | Specify the list of network ranges from which requests at this location originate. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewaySingleResponse3(nil).Load(map[string]any{"account_id": "account_id", "location_id": "location_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ZeroTrustGatewaySingleResponse3(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "endpoints": map[string]any{},
    "max_ttl": map[string]any{},
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZeroTrustGatewaySingleResponse3(nil).Update(map[string]any{
    "account_id": "account_id",
    "location_id": "location_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewaySingleResponse3Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse4Entity

```go
zeroTrustGatewaySingleResponse4 := client.ZeroTrustGatewaySingleResponse4(nil)
fmt.Println(zeroTrustGatewaySingleResponse4.GetName()) // "zero_trust_gateway_single_response_4"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`. |
| `description` | `string` | No | Specify the rule description. |
| `device_posture` | `string` | No | Specify the wirefilter expression used for device posture check. |
| `enabled` | `bool` | No | Specify whether the rule is enabled. |
| `expiration` | `map[string]any` | Yes | Defines the expiration time stamp and default duration of a DNS policy. |
| `filters` | `[]any` | No | Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| `identity` | `string` | No | Specify the wirefilter expression used for identity matching. |
| `name` | `string` | Yes | Specify the rule name. |
| `precedence` | `int` | No | Set the order of your rules. |
| `result` | `map[string]any` | Yes |  |
| `rule_settings` | `map[string]any` | No | Defines settings for this rule. |
| `schedule` | `map[string]any` | No | Defines the schedule for activating DNS policies. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewaySingleResponse4(nil).Load(map[string]any{"account_id": "account_id", "rule_id": "rule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ZeroTrustGatewaySingleResponse4(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "action": "example_action",
    "expiration": map[string]any{},
    "name": "example_name",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZeroTrustGatewaySingleResponse4(nil).Update(map[string]any{
    "account_id": "account_id",
    "rule_id": "rule_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewaySingleResponse4Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse5Entity

```go
zeroTrustGatewaySingleResponse5 := client.ZeroTrustGatewaySingleResponse5(nil)
fmt.Println(zeroTrustGatewaySingleResponse5.GetName()) // "zero_trust_gateway_single_response_5"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ips` | `[]any` | No | Specify the list of CIDRs to restrict ingress connections. |
| `kind` | `string` | No | The proxy endpoint kind. |
| `name` | `string` | No | Specify the name of the proxy endpoint. |
| `result` | `any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewaySingleResponse5(nil).Load(map[string]any{"account_id": "account_id", "proxy_endpoint_id": "proxy_endpoint_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ZeroTrustGatewaySingleResponse5(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZeroTrustGatewaySingleResponse5(nil).Update(map[string]any{
    "account_id": "account_id",
    "proxy_endpoint_id": "proxy_endpoint_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewaySingleResponse5Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse6Entity

```go
zeroTrustGatewaySingleResponse6 := client.ZeroTrustGatewaySingleResponse6(nil)
fmt.Println(zeroTrustGatewaySingleResponse6.GetName()) // "zero_trust_gateway_single_response_6"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `public_key` | `string` | Yes | Provide the Base64-encoded HPKE public key that encrypts SSH session logs. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewaySingleResponse6(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ZeroTrustGatewaySingleResponse6(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "public_key": "example_public_key",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZeroTrustGatewaySingleResponse6(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewaySingleResponse6Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse7Entity

```go
zeroTrustGatewaySingleResponse7 := client.ZeroTrustGatewaySingleResponse7(nil)
fmt.Println(zeroTrustGatewaySingleResponse7.GetName()) // "zero_trust_gateway_single_response_7"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contents` | `string` | Yes | Actual contents of the PAC file |
| `description` | `string` | No | Detailed description of the PAC file. |
| `name` | `string` | Yes | Name of the PAC file. |
| `result` | `map[string]any` | No |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustGatewaySingleResponse7(nil).Load(map[string]any{"account_id": "account_id", "pacfile_id": "pacfile_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ZeroTrustGatewaySingleResponse7(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "contents": "example_contents",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZeroTrustGatewaySingleResponse7(nil).Update(map[string]any{
    "account_id": "account_id",
    "pacfile_id": "pacfile_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewaySingleResponse7Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustGatewaySingleResponseWithListItemEntity

```go
zeroTrustGatewaySingleResponseWithListItem := client.ZeroTrustGatewaySingleResponseWithListItem(nil)
fmt.Println(zeroTrustGatewaySingleResponseWithListItem.GetName()) // "zero_trust_gateway_single_response_with_list_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Provide the list description. |
| `items` | `[]any` | No | Add items to the list. |
| `name` | `string` | Yes | Specify the list name. |
| `type` | `string` | Yes | Specify the list type. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ZeroTrustGatewaySingleResponseWithListItem(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "name": "example_name",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustGatewaySingleResponseWithListItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustRiskScoringEntity

```go
zeroTrustRiskScoring := client.ZeroTrustRiskScoring(nil)
fmt.Println(zeroTrustRiskScoring.GetName()) // "zero_trust_risk_scoring"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `behaviors` | `map[string]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustRiskScoring(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ZeroTrustRiskScoring(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "zt_risk_scoring_id": "example_zt_risk_scoring_id",
    "behaviors": map[string]any{},
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZeroTrustRiskScoring(nil).Update(map[string]any{
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustRiskScoringEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZeroTrustRiskScoringIntegrationEntity

```go
zeroTrustRiskScoringIntegration := client.ZeroTrustRiskScoringIntegration(nil)
fmt.Println(zeroTrustRiskScoringIntegration.GetName()) // "zero_trust_risk_scoring_integration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether this integration is enabled. |
| `id` | `string` | No |  |
| `integration_type` | `string` | Yes |  |
| `reference_id` | `string` | No | A reference id that can be supplied by the client. |
| `result` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZeroTrustRiskScoringIntegration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZeroTrustRiskScoringIntegration(nil).Load(map[string]any{"id": "zero_trust_risk_scoring_integration_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ZeroTrustRiskScoringIntegration(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "active": true,
    "integration_type": "example_integration_type",
    "result": map[string]any{},
    "tenant_url": "example_tenant_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZeroTrustRiskScoringIntegration(nil).Update(map[string]any{
    "id": "zero_trust_risk_scoring_integration_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ZeroTrustRiskScoringIntegration(nil).Remove(map[string]any{"id": "zero_trust_risk_scoring_integration_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZeroTrustRiskScoringIntegrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudflareZeroTrustSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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

