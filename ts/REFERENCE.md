# CloudflareZeroTrust TypeScript SDK Reference

Complete API reference for the CloudflareZeroTrust TypeScript SDK.


## CloudflareZeroTrustSDK

### Constructor

```ts
new CloudflareZeroTrustSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareZeroTrustSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudflareZeroTrustSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudflareZeroTrustSDK` instance in test mode.


### Instance Methods

#### `AlexandriaDeleteApplication(data?: object)`

Create a new `AlexandriaDeleteApplication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlexandriaDeleteApplicationEntity` instance.

#### `AlexandriaGetApplication(data?: object)`

Create a new `AlexandriaGetApplication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlexandriaGetApplicationEntity` instance.

#### `AlexandriaGetCategory(data?: object)`

Create a new `AlexandriaGetCategory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlexandriaGetCategoryEntity` instance.

#### `ClientVersion(data?: object)`

Create a new `ClientVersion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClientVersionEntity` instance.

#### `Cni(data?: object)`

Create a new `Cni` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CniEntity` instance.

#### `DeploymentGroup(data?: object)`

Create a new `DeploymentGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeploymentGroupEntity` instance.

#### `DexRemoteCommand(data?: object)`

Create a new `DexRemoteCommand` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DexRemoteCommandEntity` instance.

#### `DexRule(data?: object)`

Create a new `DexRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DexRuleEntity` instance.

#### `DexSyntheticApplicationMonitoring(data?: object)`

Create a new `DexSyntheticApplicationMonitoring` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DexSyntheticApplicationMonitoringEntity` instance.

#### `DigitalExperienceMonitoringDevice(data?: object)`

Create a new `DigitalExperienceMonitoringDevice` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DigitalExperienceMonitoringDeviceEntity` instance.

#### `DigitalExperienceMonitoringDexDeleteResponseCollection(data?: object)`

Create a new `DigitalExperienceMonitoringDexDeleteResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DigitalExperienceMonitoringDexDeleteResponseCollectionEntity` instance.

#### `DigitalExperienceMonitoringDexResponseCollection(data?: object)`

Create a new `DigitalExperienceMonitoringDexResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DigitalExperienceMonitoringDexResponseCollectionEntity` instance.

#### `DigitalExperienceMonitoringDexSingle(data?: object)`

Create a new `DigitalExperienceMonitoringDexSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DigitalExperienceMonitoringDexSingleEntity` instance.

#### `DigitalExperienceMonitoringFleetStatusDevice(data?: object)`

Create a new `DigitalExperienceMonitoringFleetStatusDevice` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DigitalExperienceMonitoringFleetStatusDeviceEntity` instance.

#### `DigitalExperienceMonitoringFleetStatusLive(data?: object)`

Create a new `DigitalExperienceMonitoringFleetStatusLive` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DigitalExperienceMonitoringFleetStatusLiveEntity` instance.

#### `DigitalExperienceMonitoringFleetStatusOverTime(data?: object)`

Create a new `DigitalExperienceMonitoringFleetStatusOverTime` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DigitalExperienceMonitoringFleetStatusOverTimeEntity` instance.

#### `Integration(data?: object)`

Create a new `Integration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationEntity` instance.

#### `Interconnect(data?: object)`

Create a new `Interconnect` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InterconnectEntity` instance.

#### `IpProfile(data?: object)`

Create a new `IpProfile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IpProfileEntity` instance.

#### `List(data?: object)`

Create a new `List` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListEntity` instance.

#### `Location(data?: object)`

Create a new `Location` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LocationEntity` instance.

#### `NscCni(data?: object)`

Create a new `NscCni` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NscCniEntity` instance.

#### `NscDefaultName(data?: object)`

Create a new `NscDefaultName` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NscDefaultNameEntity` instance.

#### `NscInterconnect(data?: object)`

Create a new `NscInterconnect` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NscInterconnectEntity` instance.

#### `NscSetting(data?: object)`

Create a new `NscSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NscSettingEntity` instance.

#### `NscSlotInfo(data?: object)`

Create a new `NscSlotInfo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NscSlotInfoEntity` instance.

#### `NscStatusInfo(data?: object)`

Create a new `NscStatusInfo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NscStatusInfoEntity` instance.

#### `OneApplicationDetail(data?: object)`

Create a new `OneApplicationDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OneApplicationDetailEntity` instance.

#### `OneIntegrationCreate(data?: object)`

Create a new `OneIntegrationCreate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OneIntegrationCreateEntity` instance.

#### `OneIntegrationDetail(data?: object)`

Create a new `OneIntegrationDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OneIntegrationDetailEntity` instance.

#### `OneIntegrationPause(data?: object)`

Create a new `OneIntegrationPause` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OneIntegrationPauseEntity` instance.

#### `OneIntegrationResume(data?: object)`

Create a new `OneIntegrationResume` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OneIntegrationResumeEntity` instance.

#### `OneIntegrationUpdate(data?: object)`

Create a new `OneIntegrationUpdate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OneIntegrationUpdateEntity` instance.

#### `OnePaginatedApplicationListList(data?: object)`

Create a new `OnePaginatedApplicationListList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OnePaginatedApplicationListListEntity` instance.

#### `OnePaginatedAuthMethodDetailList(data?: object)`

Create a new `OnePaginatedAuthMethodDetailList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OnePaginatedAuthMethodDetailListEntity` instance.

#### `OnePaginatedIntegrationV2ListItemList(data?: object)`

Create a new `OnePaginatedIntegrationV2ListItemList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OnePaginatedIntegrationV2ListItemListEntity` instance.

#### `OnePaginatedSetupFlowList(data?: object)`

Create a new `OnePaginatedSetupFlowList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OnePaginatedSetupFlowListEntity` instance.

#### `OverrideCode(data?: object)`

Create a new `OverrideCode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OverrideCodeEntity` instance.

#### `Pacfile(data?: object)`

Create a new `Pacfile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PacfileEntity` instance.

#### `PhysicalDevice(data?: object)`

Create a new `PhysicalDevice` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PhysicalDeviceEntity` instance.

#### `ProxyEndpoint(data?: object)`

Create a new `ProxyEndpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProxyEndpointEntity` instance.

#### `Registration(data?: object)`

Create a new `Registration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RegistrationEntity` instance.

#### `Rule(data?: object)`

Create a new `Rule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RuleEntity` instance.

#### `TeamsDevicesApiResponseSingle(data?: object)`

Create a new `TeamsDevicesApiResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesApiResponseSingleEntity` instance.

#### `TeamsDevicesComponentsSchemasResponseCollection(data?: object)`

Create a new `TeamsDevicesComponentsSchemasResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesComponentsSchemasResponseCollectionEntity` instance.

#### `TeamsDevicesComponentsSchemasSingle(data?: object)`

Create a new `TeamsDevicesComponentsSchemasSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesComponentsSchemasSingleEntity` instance.

#### `TeamsDevicesDefaultDeviceSetting(data?: object)`

Create a new `TeamsDevicesDefaultDeviceSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesDefaultDeviceSettingEntity` instance.

#### `TeamsDevicesDevice(data?: object)`

Create a new `TeamsDevicesDevice` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesDeviceEntity` instance.

#### `TeamsDevicesDeviceSetting(data?: object)`

Create a new `TeamsDevicesDeviceSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesDeviceSettingEntity` instance.

#### `TeamsDevicesDeviceSettingsResponseCollection(data?: object)`

Create a new `TeamsDevicesDeviceSettingsResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesDeviceSettingsResponseCollectionEntity` instance.

#### `TeamsDevicesDevicesPolicyCertificatesSingle(data?: object)`

Create a new `TeamsDevicesDevicesPolicyCertificatesSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesDevicesPolicyCertificatesSingleEntity` instance.

#### `TeamsDevicesFallbackDomainResponseCollection(data?: object)`

Create a new `TeamsDevicesFallbackDomainResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesFallbackDomainResponseCollectionEntity` instance.

#### `TeamsDevicesGlobalWarpOverride(data?: object)`

Create a new `TeamsDevicesGlobalWarpOverride` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesGlobalWarpOverrideEntity` instance.

#### `TeamsDevicesId(data?: object)`

Create a new `TeamsDevicesId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesIdEntity` instance.

#### `TeamsDevicesOverrideCode(data?: object)`

Create a new `TeamsDevicesOverrideCode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesOverrideCodeEntity` instance.

#### `TeamsDevicesResponseCollection(data?: object)`

Create a new `TeamsDevicesResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesResponseCollectionEntity` instance.

#### `TeamsDevicesSchemasId(data?: object)`

Create a new `TeamsDevicesSchemasId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesSchemasIdEntity` instance.

#### `TeamsDevicesSchemasResponseCollection(data?: object)`

Create a new `TeamsDevicesSchemasResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesSchemasResponseCollectionEntity` instance.

#### `TeamsDevicesSchemasSingle(data?: object)`

Create a new `TeamsDevicesSchemasSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesSchemasSingleEntity` instance.

#### `TeamsDevicesSingle(data?: object)`

Create a new `TeamsDevicesSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesSingleEntity` instance.

#### `TeamsDevicesSplitTunnelIncludeResponseCollection(data?: object)`

Create a new `TeamsDevicesSplitTunnelIncludeResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesSplitTunnelIncludeResponseCollectionEntity` instance.

#### `TeamsDevicesSplitTunnelResponseCollection(data?: object)`

Create a new `TeamsDevicesSplitTunnelResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesSplitTunnelResponseCollectionEntity` instance.

#### `TeamsDevicesZeroTrustAccountDeviceSetting(data?: object)`

Create a new `TeamsDevicesZeroTrustAccountDeviceSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamsDevicesZeroTrustAccountDeviceSettingEntity` instance.

#### `Tunnel(data?: object)`

Create a new `Tunnel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelEntity` instance.

#### `TunnelCfdTunnelResponseCollection(data?: object)`

Create a new `TunnelCfdTunnelResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelCfdTunnelResponseCollectionEntity` instance.

#### `TunnelCfdTunnelResponseSingle(data?: object)`

Create a new `TunnelCfdTunnelResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelCfdTunnelResponseSingleEntity` instance.

#### `TunnelConfiguration(data?: object)`

Create a new `TunnelConfiguration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelConfigurationEntity` instance.

#### `TunnelEmpty(data?: object)`

Create a new `TunnelEmpty` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelEmptyEntity` instance.

#### `TunnelHostnameRouteResponseCollection(data?: object)`

Create a new `TunnelHostnameRouteResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelHostnameRouteResponseCollectionEntity` instance.

#### `TunnelHostnameRouteResponseSingle(data?: object)`

Create a new `TunnelHostnameRouteResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelHostnameRouteResponseSingleEntity` instance.

#### `TunnelMeshConfigurationResponseSingle(data?: object)`

Create a new `TunnelMeshConfigurationResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelMeshConfigurationResponseSingleEntity` instance.

#### `TunnelRouteResponseSingle(data?: object)`

Create a new `TunnelRouteResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelRouteResponseSingleEntity` instance.

#### `TunnelSubnetResponseCollection(data?: object)`

Create a new `TunnelSubnetResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelSubnetResponseCollectionEntity` instance.

#### `TunnelSubnetResponseSingle(data?: object)`

Create a new `TunnelSubnetResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelSubnetResponseSingleEntity` instance.

#### `TunnelSubnetResponseSingleNullable(data?: object)`

Create a new `TunnelSubnetResponseSingleNullable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelSubnetResponseSingleNullableEntity` instance.

#### `TunnelTeamnetResponseCollection(data?: object)`

Create a new `TunnelTeamnetResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelTeamnetResponseCollectionEntity` instance.

#### `TunnelTeamnetResponseSingle(data?: object)`

Create a new `TunnelTeamnetResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelTeamnetResponseSingleEntity` instance.

#### `TunnelTunnelClient(data?: object)`

Create a new `TunnelTunnelClient` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelTunnelClientEntity` instance.

#### `TunnelTunnelConnection(data?: object)`

Create a new `TunnelTunnelConnection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelTunnelConnectionEntity` instance.

#### `TunnelTunnelResponseToken(data?: object)`

Create a new `TunnelTunnelResponseToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelTunnelResponseTokenEntity` instance.

#### `TunnelTunnelWarpConnectorClient(data?: object)`

Create a new `TunnelTunnelWarpConnectorClient` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelTunnelWarpConnectorClientEntity` instance.

#### `TunnelTunnelWarpConnectorConnection(data?: object)`

Create a new `TunnelTunnelWarpConnectorConnection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelTunnelWarpConnectorConnectionEntity` instance.

#### `TunnelVnetResponseCollection(data?: object)`

Create a new `TunnelVnetResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelVnetResponseCollectionEntity` instance.

#### `TunnelVnetResponseSingle(data?: object)`

Create a new `TunnelVnetResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelVnetResponseSingleEntity` instance.

#### `TunnelWarpConnectorResponseCollection(data?: object)`

Create a new `TunnelWarpConnectorResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelWarpConnectorResponseCollectionEntity` instance.

#### `TunnelWarpConnectorResponseSingle(data?: object)`

Create a new `TunnelWarpConnectorResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelWarpConnectorResponseSingleEntity` instance.

#### `TunnelZeroTrustConnectivitySetting(data?: object)`

Create a new `TunnelZeroTrustConnectivitySetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TunnelZeroTrustConnectivitySettingEntity` instance.

#### `Warp(data?: object)`

Create a new `Warp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WarpEntity` instance.

#### `WarpChangeEvent(data?: object)`

Create a new `WarpChangeEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WarpChangeEventEntity` instance.

#### `WarpTeamsDeviceApiOther(data?: object)`

Create a new `WarpTeamsDeviceApiOther` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WarpTeamsDeviceApiOtherEntity` instance.

#### `ZeroTrustGatewayApplicationsReviewStatus(data?: object)`

Create a new `ZeroTrustGatewayApplicationsReviewStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayApplicationsReviewStatusEntity` instance.

#### `ZeroTrustGatewayCsvOperationSingle(data?: object)`

Create a new `ZeroTrustGatewayCsvOperationSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayCsvOperationSingleEntity` instance.

#### `ZeroTrustGatewayCustomCertificateSetting(data?: object)`

Create a new `ZeroTrustGatewayCustomCertificateSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayCustomCertificateSettingEntity` instance.

#### `ZeroTrustGatewayGatewayAccount(data?: object)`

Create a new `ZeroTrustGatewayGatewayAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayGatewayAccountEntity` instance.

#### `ZeroTrustGatewayGatewayAccountConfig(data?: object)`

Create a new `ZeroTrustGatewayGatewayAccountConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayGatewayAccountConfigEntity` instance.

#### `ZeroTrustGatewayGatewayAccountEgressCidrPairList(data?: object)`

Create a new `ZeroTrustGatewayGatewayAccountEgressCidrPairList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity` instance.

#### `ZeroTrustGatewayGatewayAccountLoggingSetting(data?: object)`

Create a new `ZeroTrustGatewayGatewayAccountLoggingSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayGatewayAccountLoggingSettingEntity` instance.

#### `ZeroTrustGatewayListItemResponseCollection(data?: object)`

Create a new `ZeroTrustGatewayListItemResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayListItemResponseCollectionEntity` instance.

#### `ZeroTrustGatewayListSingle(data?: object)`

Create a new `ZeroTrustGatewayListSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayListSingleEntity` instance.

#### `ZeroTrustGatewayResponseCollection(data?: object)`

Create a new `ZeroTrustGatewayResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayResponseCollectionEntity` instance.

#### `ZeroTrustGatewayResponseCollection10(data?: object)`

Create a new `ZeroTrustGatewayResponseCollection10` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayResponseCollection10Entity` instance.

#### `ZeroTrustGatewayResponseCollection2(data?: object)`

Create a new `ZeroTrustGatewayResponseCollection2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayResponseCollection2Entity` instance.

#### `ZeroTrustGatewayResponseCollection3(data?: object)`

Create a new `ZeroTrustGatewayResponseCollection3` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayResponseCollection3Entity` instance.

#### `ZeroTrustGatewayResponseCollection4(data?: object)`

Create a new `ZeroTrustGatewayResponseCollection4` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayResponseCollection4Entity` instance.

#### `ZeroTrustGatewayResponseCollection5(data?: object)`

Create a new `ZeroTrustGatewayResponseCollection5` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayResponseCollection5Entity` instance.

#### `ZeroTrustGatewayResponseCollection6(data?: object)`

Create a new `ZeroTrustGatewayResponseCollection6` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayResponseCollection6Entity` instance.

#### `ZeroTrustGatewayResponseCollection7(data?: object)`

Create a new `ZeroTrustGatewayResponseCollection7` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayResponseCollection7Entity` instance.

#### `ZeroTrustGatewayResponseCollection8(data?: object)`

Create a new `ZeroTrustGatewayResponseCollection8` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayResponseCollection8Entity` instance.

#### `ZeroTrustGatewayResponseCollection9(data?: object)`

Create a new `ZeroTrustGatewayResponseCollection9` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewayResponseCollection9Entity` instance.

#### `ZeroTrustGatewaySingle(data?: object)`

Create a new `ZeroTrustGatewaySingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewaySingleEntity` instance.

#### `ZeroTrustGatewaySingleResponse2(data?: object)`

Create a new `ZeroTrustGatewaySingleResponse2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewaySingleResponse2Entity` instance.

#### `ZeroTrustGatewaySingleResponse3(data?: object)`

Create a new `ZeroTrustGatewaySingleResponse3` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewaySingleResponse3Entity` instance.

#### `ZeroTrustGatewaySingleResponse4(data?: object)`

Create a new `ZeroTrustGatewaySingleResponse4` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewaySingleResponse4Entity` instance.

#### `ZeroTrustGatewaySingleResponse5(data?: object)`

Create a new `ZeroTrustGatewaySingleResponse5` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewaySingleResponse5Entity` instance.

#### `ZeroTrustGatewaySingleResponse6(data?: object)`

Create a new `ZeroTrustGatewaySingleResponse6` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewaySingleResponse6Entity` instance.

#### `ZeroTrustGatewaySingleResponse7(data?: object)`

Create a new `ZeroTrustGatewaySingleResponse7` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewaySingleResponse7Entity` instance.

#### `ZeroTrustGatewaySingleResponseWithListItem(data?: object)`

Create a new `ZeroTrustGatewaySingleResponseWithListItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustGatewaySingleResponseWithListItemEntity` instance.

#### `ZeroTrustRiskScoring(data?: object)`

Create a new `ZeroTrustRiskScoring` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustRiskScoringEntity` instance.

#### `ZeroTrustRiskScoringIntegration(data?: object)`

Create a new `ZeroTrustRiskScoringIntegration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZeroTrustRiskScoringIntegrationEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudflareZeroTrustSDK.test()`.

**Returns:** `CloudflareZeroTrustSDK` instance in test mode.


---

## AlexandriaDeleteApplicationEntity

```ts
const alexandria_delete_application = client.AlexandriaDeleteApplication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AlexandriaDeleteApplication().remove({ account_id: 'account_id', id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlexandriaDeleteApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlexandriaGetApplicationEntity

```ts
const alexandria_get_application = client.AlexandriaGetApplication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category_id` | `number` | Yes | Returns the category ID. |
| `errors` | `any[]` | Yes |  |
| `hostnames` | `any[]` | No | Hostnames matched by the application. |
| `human_id` | `string` | Yes | Returns the human readable ID. |
| `id` | `string` | No |  |
| `ip_subnets` | `any[]` | No | IP subnets for this application. |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | Yes | Returns the application name. |
| `port_protocols` | `any[]` | No | Port and protocol pairs matched by the application. |
| `result` | `Record<string, any>` | Yes | Returns the list of applications. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |
| `support_domains` | `any[]` | No | Support domains matched by the application. |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AlexandriaGetApplication().create({
  account_id: 'example_account_id',
  category_id: 1,
  errors: [],
  human_id: 'example_human_id',
  messages: [],
  name: 'example_name',
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AlexandriaGetApplication().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AlexandriaGetApplication().load({ id: 1, account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AlexandriaGetApplication().update({
  id: 1,
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlexandriaGetApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlexandriaGetCategoryEntity

```ts
const alexandria_get_category = client.AlexandriaGetCategory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes | Returns the list of categories. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `id` | - | - |
| `messages` | - | - |
| `result` | - | Yes |
| `success` | - | - |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AlexandriaGetCategory().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AlexandriaGetCategory().load({ id: 1, account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlexandriaGetCategoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ClientVersionEntity

```ts
const client_version = client.ClientVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `target_environment` | `/accounts/{account_id}/devices/client-versions/target-environments` | `client.ClientVersion().list({ $action: 'target_environment', ... })` |

An action returns that action's OWN response, which is not necessarily a
ClientVersion record — check the API definition for its shape.

```ts
const result = await client.ClientVersion().list({
  $action: 'target_environment',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ClientVersion().list({ account_id: "example", release_track: "example", target_environment: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClientVersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CniEntity

```ts
const cni = client.Cni()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Cni().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CniEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeploymentGroupEntity

```ts
const deployment_group = client.DeploymentGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for the deployment group. |
| `policy_ids` | `any[]` | No | Contains an optional list of policy IDs assigned to a group. |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |
| `version_config` | `any[]` | Yes | Contains at least one version configuration. |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DeploymentGroup().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DeploymentGroup().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DeploymentGroup().load({ id: 'deployment_group_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DeploymentGroup().remove({ id: 'deployment_group_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DeploymentGroup().update({
  id: 'deployment_group_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeploymentGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DexRemoteCommandEntity

```ts
const dex_remote_command = client.DexRemoteCommand()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commands` | `any[]` | Yes | List of device-level commands to execute |
| `result` | `Record<string, any>` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `commands` | - | - |
| `result` | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DexRemoteCommand().create({
  account_id: 'example_account_id',
  commands: [],
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DexRemoteCommand().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DexRemoteCommandEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DexRuleEntity

```ts
const dex_rule = client.DexRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `match` | `string` | Yes | The wirefilter expression to match. |
| `name` | `string` | Yes | The name of the Rule. |
| `result` | `Record<string, any>` | No |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `description` | - | - | - | - |
| `id` | - | - | - | - |
| `match` | - | - | Yes | - |
| `name` | - | - | Yes | - |
| `result` | Yes | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DexRule().create({
  account_id: 'example_account_id',
  match: 'example_match',
  name: 'example_name',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DexRule().load({ id: 'dex_rule_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DexRule().remove({ id: 'dex_rule_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DexRule().update({
  id: 'dex_rule_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DexRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DexSyntheticApplicationMonitoringEntity

```ts
const dex_synthetic_application_monitoring = client.DexSyntheticApplicationMonitoring()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes | array of colos. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | Yes |
| `success` | - | - |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DexSyntheticApplicationMonitoring().list({ account_id: "example", from: "example", to: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DexSyntheticApplicationMonitoring().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DexSyntheticApplicationMonitoringEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DigitalExperienceMonitoringDeviceEntity

```ts
const digital_experience_monitoring_device = client.DigitalExperienceMonitoringDevice()
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
| `cpuPctByApp` | `any[]` | No |  |
| `deviceId` | `string` | Yes | Device identifier (UUID v4) |
| `deviceIpv4` | `Record<string, any>` | No |  |
| `deviceIpv6` | `Record<string, any>` | No |  |
| `deviceName` | `string` | No | Device identifier (human readable). |
| `deviceRegistration` | `string` | No | Deprecated: use registrationId. |
| `diskReadBps` | `number` | No |  |
| `diskUsagePct` | `number` | No |  |
| `diskWriteBps` | `number` | No |  |
| `dohSubdomain` | `string` | No |  |
| `estimatedLossPct` | `number` | No |  |
| `firewallEnabled` | `boolean` | No |  |
| `gatewayIpv4` | `Record<string, any>` | No |  |
| `gatewayIpv6` | `Record<string, any>` | No |  |
| `handshakeLatencyMs` | `number` | No |  |
| `ispIpv4` | `Record<string, any>` | No |  |
| `ispIpv6` | `Record<string, any>` | No |  |
| `metal` | `string` | No |  |
| `mode` | `string` | Yes | The mode under which the WARP client is run. |
| `networkRcvdBps` | `number` | No |  |
| `networkSentBps` | `number` | No |  |
| `networkSsid` | `string` | No |  |
| `personEmail` | `string` | No | User contact email address |
| `platform` | `string` | Yes | Operating system. |
| `ramAvailableKb` | `number` | No |  |
| `ramUsedPct` | `number` | No |  |
| `ramUsedPctByApp` | `any[]` | No |  |
| `registrationId` | `string` | No | Device registration identifier (UUID v4). |
| `rtt` | `Record<string, any>` | No | Round-trip time statistics for the WARP tunnel. |
| `status` | `string` | Yes | Network status. |
| `switchLocked` | `boolean` | No |  |
| `timestamp` | `string` | Yes |  |
| `tunnelStats` | `Record<string, any>` | No | WARP tunnel packet and byte counters. |
| `tunnelType` | `string` | No |  |
| `version` | `string` | Yes | WARP client version. |
| `wifiStrengthDbm` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DigitalExperienceMonitoringDevice().list({ account_id: "example", device_id: "example", since_minute: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DigitalExperienceMonitoringDeviceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DigitalExperienceMonitoringDexDeleteResponseCollectionEntity

```ts
const digital_experience_monitoring_dex_delete_response_collection = client.DigitalExperienceMonitoringDexDeleteResponseCollection()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DigitalExperienceMonitoringDexDeleteResponseCollection().remove({ account_id: 'account_id', dex_test_id: 'dex_test_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DigitalExperienceMonitoringDexDeleteResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DigitalExperienceMonitoringDexResponseCollectionEntity

```ts
const digital_experience_monitoring_dex_response_collection = client.DigitalExperienceMonitoringDexResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DigitalExperienceMonitoringDexResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DigitalExperienceMonitoringDexResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DigitalExperienceMonitoringDexSingleEntity

```ts
const digital_experience_monitoring_dex_single = client.DigitalExperienceMonitoringDexSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No | Date the test was created, in RFC 3339 format. |
| `data` | `Record<string, any>` | Yes | The configuration object which contains the details for the WARP client to conduct the test. |
| `description` | `string` | No | Additional details about the test. |
| `enabled` | `boolean` | Yes | Determines whether or not the test is active. |
| `interval` | `string` | Yes | How often the test will run. |
| `name` | `string` | Yes | The name of the DEX test. |
| `result` | `Record<string, any>` | Yes |  |
| `target_policies` | `any` | No |  |
| `targeted` | `boolean` | No |  |
| `test_id` | `string` | No | The unique identifier for the test. |
| `updated` | `string` | No | Date the test was last updated, in RFC 3339 format. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DigitalExperienceMonitoringDexSingle().create({
  account_id: 'example_account_id',
  data: {},
  enabled: true,
  interval: 'example_interval',
  name: 'example_name',
  result: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DigitalExperienceMonitoringDexSingle().load({ account_id: 'account_id', dex_test_id: 'dex_test_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DigitalExperienceMonitoringDexSingle().update({
  account_id: 'account_id',
  dex_test_id: 'dex_test_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DigitalExperienceMonitoringDexSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DigitalExperienceMonitoringFleetStatusDeviceEntity

```ts
const digital_experience_monitoring_fleet_status_device = client.DigitalExperienceMonitoringFleetStatusDevice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DigitalExperienceMonitoringFleetStatusDevice().list({ account_id: "example", from: "example", page: 1, per_page: 1, to: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DigitalExperienceMonitoringFleetStatusDeviceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DigitalExperienceMonitoringFleetStatusLiveEntity

```ts
const digital_experience_monitoring_fleet_status_live = client.DigitalExperienceMonitoringFleetStatusLive()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DigitalExperienceMonitoringFleetStatusLive().load({ account_id: 'account_id', since_minute: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DigitalExperienceMonitoringFleetStatusLiveEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DigitalExperienceMonitoringFleetStatusOverTimeEntity

```ts
const digital_experience_monitoring_fleet_status_over_time = client.DigitalExperienceMonitoringFleetStatusOverTime()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DigitalExperienceMonitoringFleetStatusOverTime().load({ account_id: 'account_id', from: 'from', to: 'to' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DigitalExperienceMonitoringFleetStatusOverTimeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationEntity

```ts
const integration = client.Integration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Integration().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InterconnectEntity

```ts
const interconnect = client.Interconnect()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `loa` | `/accounts/{account_id}/cni/interconnects/{icon}/loa` | `client.Interconnect().load({ $action: 'loa', ... })` |

An action returns that action's OWN response, which is not necessarily a
Interconnect record — check the API definition for its shape.

```ts
const result = await client.Interconnect().load({
  $action: 'loa',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Interconnect().load({ account_id: 'account_id', icon: 'icon' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Interconnect().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InterconnectEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IpProfileEntity

```ts
const ip_profile = client.IpProfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | An optional description of the Device IP profile. |
| `enabled` | `boolean` | No | Whether the Device IP profile will be applied to matching devices. |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `match` | `string` | Yes | The wirefilter expression to match registrations. |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | Yes | A user-friendly name for the Device IP profile. |
| `precedence` | `number` | Yes | The precedence of the Device IP profile. |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IpProfile().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IpProfile().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IpProfile().load({ id: 'ip_profile_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.IpProfile().remove({ id: 'ip_profile_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IpProfile().update({
  id: 'ip_profile_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IpProfileEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListEntity

```ts
const list = client.List()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.List().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LocationEntity

```ts
const location = client.Location()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Location().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LocationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NscCniEntity

```ts
const nsc_cni = client.NscCni()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | Yes | Customer account tag |
| `bgp` | `Record<string, any>` | Yes |  |
| `bgp_mode` | `string` | No | The BGP mode for a CNI. |
| `cust_ip` | `string` | Yes | Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`. |
| `id` | `string` | Yes |  |
| `interconnect` | `string` | Yes | Interconnect identifier hosting this CNI |
| `magic` | `Record<string, any>` | Yes |  |
| `p2p_ip` | `string` | Yes | Cloudflare end of the point-to-point link |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NscCni().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NscCni().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NscCni().load({ id: 'nsc_cni_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NscCni().update({
  id: 'nsc_cni_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NscCniEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NscDefaultNameEntity

```ts
const nsc_default_name = client.NscDefaultName()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The default customer name for the interconnect |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NscDefaultName().load({ account_id: 'account_id', interconnect_id: 'interconnect_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NscDefaultNameEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NscInterconnectEntity

```ts
const nsc_interconnect = client.NscInterconnect()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `any[]` | Yes |  |
| `next` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NscInterconnect().create({
  account_id: 'example_account_id',
  items: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NscInterconnect().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NscInterconnect().load({ id: 'nsc_interconnect_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NscInterconnectEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NscSettingEntity

```ts
const nsc_setting = client.NscSetting()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NscSetting().load({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NscSetting().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NscSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NscSlotInfoEntity

```ts
const nsc_slot_info = client.NscSlotInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `string` | No | Customer account tag |
| `address` | `any[]` | Yes |  |
| `ccr_device_name` | `string` | No |  |
| `facility` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | Slot ID |
| `name` | `string` | Yes |  |
| `occupied` | `boolean` | Yes | Whether the slot is occupied or not |
| `site` | `string` | Yes |  |
| `speed` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NscSlotInfo().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NscSlotInfo().load({ account_id: 'account_id', slot: 'slot' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NscSlotInfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NscStatusInfoEntity

```ts
const nsc_status_info = client.NscStatusInfo()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NscStatusInfo().load({ account_id: 'account_id', icon: 'icon' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NscStatusInfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OneApplicationDetailEntity

```ts
const one_application_detail = client.OneApplicationDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | No | List of errors. |
| `messages` | `any[]` | No | List of messages. |
| `result` | `any` | Yes | The requested item. |
| `success` | `boolean` | Yes | Whether the request succeeded. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OneApplicationDetail().load({ account_id: 'account_id', application_id: 'application_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OneApplicationDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OneIntegrationCreateEntity

```ts
const one_integration_create = client.OneIntegrationCreate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `string` | Yes | Vendor/application slug (e.g., GOOGLE_WORKSPACE). |
| `auth_method` | `string` | No | Authentication method slug (uses default if omitted). |
| `credentials` | `Record<string, any>` | Yes | Credentials for the integration. |
| `dlp_profiles` | `any[]` | No | List of DLP profile IDs to associate. |
| `name` | `string` | Yes | Name of the integration. |
| `permissions` | `any[]` | No | List of permission scopes (uses policy defaults if empty). |
| `use_cases` | `any[]` | No | List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']). |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OneIntegrationCreate().create({
  account_id: 'example_account_id',
  application: 'example_application',
  credentials: {},
  name: 'example_name',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OneIntegrationCreateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OneIntegrationDetailEntity

```ts
const one_integration_detail = client.OneIntegrationDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | No | List of errors. |
| `id` | `string` | No |  |
| `messages` | `any[]` | No | List of messages. |
| `result` | `any` | Yes | The requested item. |
| `success` | `boolean` | Yes | Whether the request succeeded. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OneIntegrationDetail().load({ id: 'one_integration_detail_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OneIntegrationDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OneIntegrationPauseEntity

```ts
const one_integration_pause = client.OneIntegrationPause()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | No | List of errors. |
| `messages` | `any[]` | No | List of messages. |
| `result` | `any` | Yes | The requested item. |
| `success` | `boolean` | Yes | Whether the request succeeded. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OneIntegrationPause().create({
  account_id: 'example_account_id',
  integration_id: 'example_integration_id',
  result: 'example_result',
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OneIntegrationPauseEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OneIntegrationResumeEntity

```ts
const one_integration_resume = client.OneIntegrationResume()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | No | List of errors. |
| `messages` | `any[]` | No | List of messages. |
| `result` | `any` | Yes | The requested item. |
| `success` | `boolean` | Yes | Whether the request succeeded. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OneIntegrationResume().create({
  account_id: 'example_account_id',
  integration_id: 'example_integration_id',
  result: 'example_result',
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OneIntegrationResumeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OneIntegrationUpdateEntity

```ts
const one_integration_update = client.OneIntegrationUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credentials` | `Record<string, any>` | No | Partial credential fields to merge with existing. |
| `dlp_profiles` | `any[]` | No | List of DLP profile IDs to associate with the integration. |
| `errors` | `any[]` | No | List of errors. |
| `id` | `string` | No |  |
| `messages` | `any[]` | No | List of messages. |
| `name` | `string` | No | Name of the integration. |
| `permissions` | `any[]` | No | List of permission scopes granted to the integration. |
| `result` | `any` | Yes | The requested item. |
| `success` | `boolean` | Yes | Whether the request succeeded. |
| `use_cases` | `any[]` | No | List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']). |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OneIntegrationUpdate().update({
  account_id: 'account_id',
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OneIntegrationUpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OnePaginatedApplicationListListEntity

```ts
const one_paginated_application_list_list = client.OnePaginatedApplicationListList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_methods` | `any[]` | Yes | Available auth methods. |
| `category` | `string` | Yes | Vendor category (e.g. |
| `description` | `string` | Yes | Brief description of the integration. |
| `display_name` | `string` | Yes | Human-readable vendor name. |
| `dlp_enabled` | `boolean` | Yes | Whether DLP scanning is supported. |
| `id` | `string` | Yes | Vendor identifier (e.g. |
| `logo` | `string` | Yes | Logo path. |
| `permissions` | `any[]` | Yes | All permissions with severity. |
| `supported_environments` | `any[]` | Yes | Environments this vendor supports (standard, fedramp). |
| `use_cases` | `any[]` | Yes | Supported use cases. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OnePaginatedApplicationListList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OnePaginatedApplicationListListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OnePaginatedAuthMethodDetailListEntity

```ts
const one_paginated_auth_method_detail_list = client.OnePaginatedAuthMethodDetailList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | Yes | Human-readable auth method name. |
| `human_interaction_required` | `boolean` | Yes | Whether setup requires human interaction or integration can be created purely using API (e.g., For OAuth can not be created without user interaction). |
| `id` | `string` | Yes | Auth method identifier. |
| `instructions` | `any` | Yes | Step-by-step instructions for obtaining credentials. |
| `payload_example` | `Record<string, any>` | Yes | Example credentials payload with placeholder values. |
| `payload_schema` | `Record<string, any>` | Yes | JSON Schema for the credentials object in POST /v2/integrations request. |
| `redirect_url` | `string` | Yes | OAuth redirect URL for vendors requiring human interaction. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OnePaginatedAuthMethodDetailList().list({ account_id: "example", application_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OnePaginatedAuthMethodDetailListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OnePaginatedIntegrationV2ListItemListEntity

```ts
const one_paginated_integration_v2_list_item_list = client.OnePaginatedIntegrationV2ListItemList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `Record<string, any>` | Yes |  |
| `created` | `string` | Yes | When the integration was created. |
| `id` | `string` | Yes | Integration ID. |
| `is_paused` | `boolean` | Yes | Whether the user paused the integration. |
| `name` | `string` | Yes | Name of the integration. |
| `status` | `string` | Yes | Integration status. |
| `updated` | `string` | Yes | When the integration was last updated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OnePaginatedIntegrationV2ListItemList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OnePaginatedIntegrationV2ListItemListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OnePaginatedSetupFlowListEntity

```ts
const one_paginated_setup_flow_list = client.OnePaginatedSetupFlowList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_config` | `any` | No | OAuth configuration (present for OAuth-based flows). |
| `default` | `boolean` | Yes | Whether this is the default auth method. |
| `description` | `string` | Yes | Flow description. |
| `id` | `string` | Yes | Setup flow identifier. |
| `name` | `string` | Yes | Human-readable flow name. |
| `steps` | `any[]` | Yes | Ordered list of setup steps. |
| `supported_environments` | `any[]` | Yes | Environments this auth method supports (standard, fedramp). |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OnePaginatedSetupFlowList().list({ account_id: "example", application_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OnePaginatedSetupFlowListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OverrideCodeEntity

```ts
const override_code = client.OverrideCode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `device_id` | `string` | No | Physical device ID. |
| `duration_hours` | `number` | Yes | Number of hours for which the override code should remain valid. |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `scope` | `string` | Yes | Whether the code applies to every device in the account or one physical device. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `type` | `string` | Yes | The feature that the override code applies to. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OverrideCode().create({
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

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OverrideCodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PacfileEntity

```ts
const pacfile = client.Pacfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Pacfile().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PacfileEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PhysicalDeviceEntity

```ts
const physical_device = client.PhysicalDevice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes | A WARP Device. |
| `result_info` | `Record<string, any>` | Yes | V4 public API Pagination/Cursor info. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `tags` | `Record<string, any>` | No | Replaces all tags assigned to the physical device. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `revoke` | `/accounts/{account_id}/devices/physical-devices/{device_id}/revoke` | `client.PhysicalDevice().create({ $action: 'revoke', ... })` |

An action returns that action's OWN response, which is not necessarily a
PhysicalDevice record — check the API definition for its shape.

```ts
const result = await client.PhysicalDevice().create({
  $action: 'revoke',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PhysicalDevice().create({
  account_id: 'example_account_id',
  id: 'example_id',
  errors: [],
  messages: [],
  result: {},
  result_info: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PhysicalDevice().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PhysicalDevice().load({ id: 'physical_device_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PhysicalDevice().remove({ id: 'physical_device_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PhysicalDevice().update({
  id: 'physical_device_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PhysicalDeviceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProxyEndpointEntity

```ts
const proxy_endpoint = client.ProxyEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProxyEndpoint().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProxyEndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RegistrationEntity

```ts
const registration = client.Registration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes | A WARP configuration tied to a single user. |
| `result_info` | `Record<string, any>` | Yes | V4 public API Pagination/Cursor info. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `revoke` | `/accounts/{account_id}/devices/registrations/revoke` | `client.Registration().create({ $action: 'revoke', ... })` |
| `unrevoke` | `/accounts/{account_id}/devices/registrations/unrevoke` | `client.Registration().create({ $action: 'unrevoke', ... })` |

An action returns that action's OWN response, which is not necessarily a
Registration record — check the API definition for its shape.

```ts
const result = await client.Registration().create({
  $action: 'revoke',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Registration().create({
  account_id: 'example_account_id',
  id: [],
  errors: [],
  messages: [],
  result: {},
  result_info: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Registration().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Registration().load({ id: 'registration_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Registration().remove({ id: 'registration_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RegistrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RuleEntity

```ts
const rule = client.Rule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Rule().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesApiResponseSingleEntity

```ts
const teams_devices_api_response_single = client.TeamsDevicesApiResponseSingle()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TeamsDevicesApiResponseSingle().create({
  account_id: 'example_account_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesApiResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesComponentsSchemasResponseCollectionEntity

```ts
const teams_devices_components_schemas_response_collection = client.TeamsDevicesComponentsSchemasResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TeamsDevicesComponentsSchemasResponseCollection().list({ account_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TeamsDevicesComponentsSchemasResponseCollection().remove({ account_id: 'account_id', network_id: 'network_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesComponentsSchemasResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesComponentsSchemasSingleEntity

```ts
const teams_devices_components_schemas_single = client.TeamsDevicesComponentsSchemasSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Record<string, any>` | Yes | The configuration object containing information for the WARP client to detect the managed network. |
| `name` | `string` | Yes | The name of the device managed network. |
| `result` | `Record<string, any>` | No |  |
| `type` | `string` | Yes | The type of device managed network. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `config` | - | - | Yes |
| `name` | - | - | Yes |
| `result` | - | - | - |
| `type` | - | - | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TeamsDevicesComponentsSchemasSingle().create({
  account_id: 'example_account_id',
  config: {},
  name: 'example_name',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TeamsDevicesComponentsSchemasSingle().load({ account_id: 'account_id', network_id: 'network_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TeamsDevicesComponentsSchemasSingle().update({
  account_id: 'account_id',
  network_id: 'network_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesComponentsSchemasSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesDefaultDeviceSettingEntity

```ts
const teams_devices_default_device_setting = client.TeamsDevicesDefaultDeviceSetting()
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
| `dns_search_suffixes` | `any[]` | No | List of DNS search suffixes to apply to clients. |
| `exclude` | `any[]` | No | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `boolean` | No | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `Record<string, any>` | Yes | Global Acceleration settings for China. |
| `include` | `any[]` | No | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `number` | No | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `number` | No | The size of the subnet for the local access network. |
| `register_interface_ip_with_dns` | `boolean` | No | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `Record<string, any>` | No |  |
| `sccm_vpn_boundary_support` | `boolean` | No | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `Record<string, any>` | No |  |
| `support_url` | `string` | No | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `boolean` | No | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | No | Determines which tunnel protocol to use. |
| `uninstall_protection` | `boolean` | No | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `Record<string, any>` | Yes | Virtual network access settings for the device. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TeamsDevicesDefaultDeviceSetting().load({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TeamsDevicesDefaultDeviceSetting().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesDefaultDeviceSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesDeviceEntity

```ts
const teams_devices_device = client.TeamsDevicesDevice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TeamsDevicesDevice().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TeamsDevicesDevice().load({ id: 'teams_devices_device_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesDeviceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesDeviceSettingEntity

```ts
const teams_devices_device_setting = client.TeamsDevicesDeviceSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_mode_switch` | `boolean` | No | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `boolean` | No | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `boolean` | No | Whether to allow devices to leave the organization. |
| `auto_connect` | `number` | No | The amount of time in seconds to reconnect after having been disabled. |
| `browser_extension_config` | `Record<string, any>` | Yes | Browser extension proxy settings. |
| `captive_portal` | `number` | No | Turn on the captive portal after the specified amount of time. |
| `default` | `boolean` | No | Whether the policy is the account default. |
| `description` | `string` | No | A description of the policy. |
| `disable_auto_fallback` | `boolean` | No | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `any[]` | No | List of DNS search suffixes to apply to clients. |
| `enabled` | `boolean` | No | Whether the policy will be applied to matching devices. |
| `exclude` | `any[]` | No | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `boolean` | No | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `Record<string, any>` | Yes | Global Acceleration settings for China. |
| `include` | `any[]` | No | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `number` | No | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `number` | No | The size of the subnet for the local access network. |
| `match` | `string` | No | The wirefilter expression to match devices. |
| `name` | `string` | Yes | The name of the device settings profile. |
| `precedence` | `number` | No | The precedence of the policy. |
| `profile_type` | `string` | No | The client type to which the device settings profile applies. |
| `register_interface_ip_with_dns` | `boolean` | No | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `Record<string, any>` | No |  |
| `sccm_vpn_boundary_support` | `boolean` | No | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `Record<string, any>` | No |  |
| `support_url` | `string` | No | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `boolean` | No | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | No | Determines which tunnel protocol to use. |
| `uninstall_protection` | `boolean` | No | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `Record<string, any>` | Yes | Virtual network access settings for the device. |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TeamsDevicesDeviceSetting().create({
  account_id: 'example_account_id',
  browser_extension_config: {},
  global_acceleration: {},
  name: 'example_name',
  virtual_networks: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TeamsDevicesDeviceSetting().load({ account_id: 'account_id', policy_id: 'policy_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TeamsDevicesDeviceSetting().update({
  account_id: 'account_id',
  policy_id: 'policy_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesDeviceSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesDeviceSettingsResponseCollectionEntity

```ts
const teams_devices_device_settings_response_collection = client.TeamsDevicesDeviceSettingsResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TeamsDevicesDeviceSettingsResponseCollection().list({ account_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TeamsDevicesDeviceSettingsResponseCollection().remove({ account_id: 'account_id', policy_id: 'policy_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesDeviceSettingsResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesDevicesPolicyCertificatesSingleEntity

```ts
const teams_devices_devices_policy_certificates_single = client.TeamsDevicesDevicesPolicyCertificatesSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | The current status of the device policy certificate provisioning feature for WARP clients. |
| `result` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TeamsDevicesDevicesPolicyCertificatesSingle().load({ zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TeamsDevicesDevicesPolicyCertificatesSingle().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesDevicesPolicyCertificatesSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesFallbackDomainResponseCollectionEntity

```ts
const teams_devices_fallback_domain_response_collection = client.TeamsDevicesFallbackDomainResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TeamsDevicesFallbackDomainResponseCollection().list({ account_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TeamsDevicesFallbackDomainResponseCollection().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TeamsDevicesFallbackDomainResponseCollection().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesFallbackDomainResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesGlobalWarpOverrideEntity

```ts
const teams_devices_global_warp_override = client.TeamsDevicesGlobalWarpOverride()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disconnect` | `boolean` | Yes | Disconnects all devices on the account using Global WARP override. |
| `justification` | `string` | No | Reasoning for setting the Global WARP override state. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TeamsDevicesGlobalWarpOverride().create({
  account_id: 'example_account_id',
  disconnect: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TeamsDevicesGlobalWarpOverride().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesGlobalWarpOverrideEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesIdEntity

```ts
const teams_devices_id = client.TeamsDevicesId()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TeamsDevicesId().remove({ account_id: 'account_id', rule_id: 'rule_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesOverrideCodeEntity

```ts
const teams_devices_override_code = client.TeamsDevicesOverrideCode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TeamsDevicesOverrideCode().load({ account_id: 'account_id', device_id: 'device_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesOverrideCodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesResponseCollectionEntity

```ts
const teams_devices_response_collection = client.TeamsDevicesResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TeamsDevicesResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesSchemasIdEntity

```ts
const teams_devices_schemas_id = client.TeamsDevicesSchemasId()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TeamsDevicesSchemasId().remove({ account_id: 'account_id', integration_id: 'integration_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesSchemasIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesSchemasResponseCollectionEntity

```ts
const teams_devices_schemas_response_collection = client.TeamsDevicesSchemasResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TeamsDevicesSchemasResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesSchemasResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesSchemasSingleEntity

```ts
const teams_devices_schemas_single = client.TeamsDevicesSchemasSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Record<string, any>` | Yes | The configuration object containing third-party integration information. |
| `interval` | `string` | Yes | The interval between each posture check with the third-party API. |
| `name` | `string` | Yes | The name of the device posture integration. |
| `result` | `Record<string, any>` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TeamsDevicesSchemasSingle().create({
  account_id: 'example_account_id',
  config: {},
  interval: 'example_interval',
  name: 'example_name',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TeamsDevicesSchemasSingle().load({ account_id: 'account_id', integration_id: 'integration_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TeamsDevicesSchemasSingle().update({
  account_id: 'account_id',
  integration_id: 'integration_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesSchemasSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesSingleEntity

```ts
const teams_devices_single = client.TeamsDevicesSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | The description of the device posture rule. |
| `expiration` | `string` | No | Sets the expiration time for a posture check result. |
| `input` | `Record<string, any>` | No | The value to be checked against. |
| `match` | `any[]` | No | The conditions that the client must match to run the rule. |
| `name` | `string` | Yes | The name of the device posture rule. |
| `result` | `Record<string, any>` | No |  |
| `schedule` | `string` | No | Polling frequency for the WARP client posture check. |
| `type` | `string` | Yes | The type of device posture rule. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TeamsDevicesSingle().create({
  account_id: 'example_account_id',
  name: 'example_name',
  type: 'example_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TeamsDevicesSingle().load({ account_id: 'account_id', rule_id: 'rule_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TeamsDevicesSingle().update({
  account_id: 'account_id',
  rule_id: 'rule_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesSplitTunnelIncludeResponseCollectionEntity

```ts
const teams_devices_split_tunnel_include_response_collection = client.TeamsDevicesSplitTunnelIncludeResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TeamsDevicesSplitTunnelIncludeResponseCollection().list({ account_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TeamsDevicesSplitTunnelIncludeResponseCollection().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesSplitTunnelIncludeResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesSplitTunnelResponseCollectionEntity

```ts
const teams_devices_split_tunnel_response_collection = client.TeamsDevicesSplitTunnelResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TeamsDevicesSplitTunnelResponseCollection().list({ account_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TeamsDevicesSplitTunnelResponseCollection().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TeamsDevicesSplitTunnelResponseCollection().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesSplitTunnelResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamsDevicesZeroTrustAccountDeviceSettingEntity

```ts
const teams_devices_zero_trust_account_device_setting = client.TeamsDevicesZeroTrustAccountDeviceSetting()
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
| `result` | `Record<string, any>` | No |  |
| `root_certificate_installation_enabled` | `boolean` | No | Enable installation of cloudflare managed root certificate. |
| `use_zt_virtual_ip` | `boolean` | No | Enable using CGNAT virtual IPv4. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TeamsDevicesZeroTrustAccountDeviceSetting().load({ account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TeamsDevicesZeroTrustAccountDeviceSetting().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TeamsDevicesZeroTrustAccountDeviceSetting().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamsDevicesZeroTrustAccountDeviceSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelEntity

```ts
const tunnel = client.Tunnel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Tunnel().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelCfdTunnelResponseCollectionEntity

```ts
const tunnel_cfd_tunnel_response_collection = client.TunnelCfdTunnelResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TunnelCfdTunnelResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelCfdTunnelResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelCfdTunnelResponseSingleEntity

```ts
const tunnel_cfd_tunnel_response_single = client.TunnelCfdTunnelResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config_src` | `string` | No | Indicates if this is a locally or remotely configured tunnel. |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TunnelCfdTunnelResponseSingle().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  result: 'example_result',
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TunnelCfdTunnelResponseSingle().load({ account_id: 'account_id', tunnel_id: 'tunnel_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TunnelCfdTunnelResponseSingle().remove({ account_id: 'account_id', tunnel_id: 'tunnel_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TunnelCfdTunnelResponseSingle().update({
  account_id: 'account_id',
  tunnel_id: 'tunnel_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelCfdTunnelResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelConfigurationEntity

```ts
const tunnel_configuration = client.TunnelConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Record<string, any>` | No | The tunnel configuration and ingress rules. |
| `result` | `Record<string, any>` | No | Cloudflare Tunnel configuration |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TunnelConfiguration().load({ account_id: 'account_id', cfd_tunnel_id: 'cfd_tunnel_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TunnelConfiguration().update({
  account_id: 'account_id',
  cfd_tunnel_id: 'cfd_tunnel_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelConfigurationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelEmptyEntity

```ts
const tunnel_empty = client.TunnelEmpty()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `string` | Yes | UUID of the Cloudflare Tunnel connector. |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TunnelEmpty().remove({ account_id: 'account_id', cfd_tunnel_id: 'cfd_tunnel_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TunnelEmpty().update({
  account_id: 'account_id',
  warp_connector_id: 'warp_connector_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelEmptyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelHostnameRouteResponseCollectionEntity

```ts
const tunnel_hostname_route_response_collection = client.TunnelHostnameRouteResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TunnelHostnameRouteResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelHostnameRouteResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelHostnameRouteResponseSingleEntity

```ts
const tunnel_hostname_route_response_single = client.TunnelHostnameRouteResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | An optional description of the hostname route. |
| `errors` | `any[]` | Yes |  |
| `hostname` | `string` | No | The hostname of the route. |
| `messages` | `any[]` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TunnelHostnameRouteResponseSingle().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  result: 'example_result',
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TunnelHostnameRouteResponseSingle().load({ account_id: 'account_id', hostname_route_id: 'hostname_route_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TunnelHostnameRouteResponseSingle().remove({ account_id: 'account_id', hostname_route_id: 'hostname_route_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TunnelHostnameRouteResponseSingle().update({
  account_id: 'account_id',
  hostname_route_id: 'hostname_route_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelHostnameRouteResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelMeshConfigurationResponseSingleEntity

```ts
const tunnel_mesh_configuration_response_single = client.TunnelMeshConfigurationResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Record<string, any>` | No | Provider-specific configuration. |
| `ha_mode` | `string` | Yes | High-availability mode for the WARP Connector tunnel. |
| `result` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TunnelMeshConfigurationResponseSingle().load({ account_id: 'account_id', warp_connector_id: 'warp_connector_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TunnelMeshConfigurationResponseSingle().update({
  account_id: 'account_id',
  warp_connector_id: 'warp_connector_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelMeshConfigurationResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelRouteResponseSingleEntity

```ts
const tunnel_route_response_single = client.TunnelRouteResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | Optional remark describing the route. |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TunnelRouteResponseSingle().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  network: 'example_network',
  result: 'example_result',
  success: true,
  tunnel_id: 'example_tunnel_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TunnelRouteResponseSingle().load({ account_id: 'account_id', route_id: 'route_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TunnelRouteResponseSingle().remove({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TunnelRouteResponseSingle().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelRouteResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelSubnetResponseCollectionEntity

```ts
const tunnel_subnet_response_collection = client.TunnelSubnetResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TunnelSubnetResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelSubnetResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelSubnetResponseSingleEntity

```ts
const tunnel_subnet_response_single = client.TunnelSubnetResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | An optional description of the subnet. |
| `errors` | `any[]` | Yes |  |
| `is_default_network` | `boolean` | No | If `true`, this is the default subnet for the account. |
| `messages` | `any[]` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TunnelSubnetResponseSingle().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  network: 'example_network',
  result: 'example_result',
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TunnelSubnetResponseSingle().load({ account_id: 'account_id', address_family: 'address_family' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TunnelSubnetResponseSingle().update({
  account_id: 'account_id',
  address_family: 'address_family',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelSubnetResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelSubnetResponseSingleNullableEntity

```ts
const tunnel_subnet_response_single_nullable = client.TunnelSubnetResponseSingleNullable()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TunnelSubnetResponseSingleNullable().remove({ account_id: 'account_id', subnet_id: 'subnet_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelSubnetResponseSingleNullableEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelTeamnetResponseCollectionEntity

```ts
const tunnel_teamnet_response_collection = client.TunnelTeamnetResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TunnelTeamnetResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelTeamnetResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelTeamnetResponseSingleEntity

```ts
const tunnel_teamnet_response_single = client.TunnelTeamnetResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TunnelTeamnetResponseSingle().load({ account_id: 'account_id', ip: 'ip' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelTeamnetResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelTunnelClientEntity

```ts
const tunnel_tunnel_client = client.TunnelTunnelClient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TunnelTunnelClient().load({ account_id: 'account_id', cfd_tunnel_id: 'cfd_tunnel_id', connector_id: 'connector_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelTunnelClientEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelTunnelConnectionEntity

```ts
const tunnel_tunnel_connection = client.TunnelTunnelConnection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TunnelTunnelConnection().list({ account_id: "example", cfd_tunnel_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelTunnelConnectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelTunnelResponseTokenEntity

```ts
const tunnel_tunnel_response_token = client.TunnelTunnelResponseToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `resources` | `any[]` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TunnelTunnelResponseToken().create({
  account_id: 'example_account_id',
  cfd_tunnel_id: 'example_cfd_tunnel_id',
  errors: [],
  messages: [],
  resources: [],
  result: 'example_result',
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TunnelTunnelResponseToken().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelTunnelResponseTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelTunnelWarpConnectorClientEntity

```ts
const tunnel_tunnel_warp_connector_client = client.TunnelTunnelWarpConnectorClient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TunnelTunnelWarpConnectorClient().load({ account_id: 'account_id', connector_id: 'connector_id', warp_connector_id: 'warp_connector_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelTunnelWarpConnectorClientEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelTunnelWarpConnectorConnectionEntity

```ts
const tunnel_tunnel_warp_connector_connection = client.TunnelTunnelWarpConnectorConnection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TunnelTunnelWarpConnectorConnection().list({ account_id: "example", warp_connector_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelTunnelWarpConnectorConnectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelVnetResponseCollectionEntity

```ts
const tunnel_vnet_response_collection = client.TunnelVnetResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TunnelVnetResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelVnetResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelVnetResponseSingleEntity

```ts
const tunnel_vnet_response_single = client.TunnelVnetResponseSingle()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TunnelVnetResponseSingle().create({
  account_id: 'example_account_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TunnelVnetResponseSingle().load({ account_id: 'account_id', virtual_network_id: 'virtual_network_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TunnelVnetResponseSingle().remove({ account_id: 'account_id', virtual_network_id: 'virtual_network_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TunnelVnetResponseSingle().update({
  account_id: 'account_id',
  virtual_network_id: 'virtual_network_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelVnetResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelWarpConnectorResponseCollectionEntity

```ts
const tunnel_warp_connector_response_collection = client.TunnelWarpConnectorResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TunnelWarpConnectorResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelWarpConnectorResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelWarpConnectorResponseSingleEntity

```ts
const tunnel_warp_connector_response_single = client.TunnelWarpConnectorResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `ha` | `boolean` | No | Indicates that the tunnel will be created to be highly available. |
| `messages` | `any[]` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TunnelWarpConnectorResponseSingle().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  result: 'example_result',
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TunnelWarpConnectorResponseSingle().load({ account_id: 'account_id', tunnel_id: 'tunnel_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TunnelWarpConnectorResponseSingle().remove({ account_id: 'account_id', tunnel_id: 'tunnel_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TunnelWarpConnectorResponseSingle().update({
  account_id: 'account_id',
  tunnel_id: 'tunnel_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelWarpConnectorResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TunnelZeroTrustConnectivitySettingEntity

```ts
const tunnel_zero_trust_connectivity_setting = client.TunnelZeroTrustConnectivitySetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `icmp_proxy_enabled` | `boolean` | No | A flag to enable the ICMP proxy for the account network. |
| `messages` | `any[]` | Yes |  |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TunnelZeroTrustConnectivitySetting().list({ account_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TunnelZeroTrustConnectivitySetting().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TunnelZeroTrustConnectivitySettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WarpEntity

```ts
const warp = client.Warp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No | An optional description of the subnet. |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `is_default_network` | `boolean` | No | If `true`, this is the default subnet for the account. |
| `messages` | `any[]` | Yes |  |
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Warp().load({ id: 'warp_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Warp().update({
  id: 'warp_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WarpEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WarpChangeEventEntity

```ts
const warp_change_event = client.WarpChangeEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WarpChangeEvent().list({ account_id: "example", from: "example", page: 1, per_page: 1, to: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WarpChangeEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WarpTeamsDeviceApiOtherEntity

```ts
const warp_teams_device_api_other = client.WarpTeamsDeviceApiOther()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WarpTeamsDeviceApiOther().list({ account_id: "example", registration_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WarpTeamsDeviceApiOtherEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayApplicationsReviewStatusEntity

```ts
const zero_trust_gateway_applications_review_status = client.ZeroTrustGatewayApplicationsReviewStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_apps` | `any[]` | Yes | Contains the ids of the approved applications. |
| `in_review_apps` | `any[]` | Yes | Contains the ids of the applications in review. |
| `result` | `Record<string, any>` | No |  |
| `unapproved_apps` | `any[]` | Yes | Contains the ids of the unapproved applications. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewayApplicationsReviewStatus().load({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZeroTrustGatewayApplicationsReviewStatus().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayApplicationsReviewStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayCsvOperationSingleEntity

```ts
const zero_trust_gateway_csv_operation_single = client.ZeroTrustGatewayCsvOperationSingle()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ZeroTrustGatewayCsvOperationSingle().create({
  account_id: 'example_account_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayCsvOperationSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayCustomCertificateSettingEntity

```ts
const zero_trust_gateway_custom_certificate_setting = client.ZeroTrustGatewayCustomCertificateSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `binding_status` | `string` | No | Indicate the internal certificate status. |
| `enabled` | `boolean` | Yes | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| `id` | `string` | No | Specify the UUID of the certificate (ID from MTLS certificate store). |
| `updated_at` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewayCustomCertificateSetting().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayCustomCertificateSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayGatewayAccountEntity

```ts
const zero_trust_gateway_gateway_account = client.ZeroTrustGatewayGatewayAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ZeroTrustGatewayGatewayAccount().create({
  account_id: 'example_account_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewayGatewayAccount().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayGatewayAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayGatewayAccountConfigEntity

```ts
const zero_trust_gateway_gateway_account_config = client.ZeroTrustGatewayGatewayAccountConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |
| `settings` | `Record<string, any>` | No | Specify account settings. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewayGatewayAccountConfig().load({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZeroTrustGatewayGatewayAccountConfig().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayGatewayAccountConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity

```ts
const zero_trust_gateway_gateway_account_egress_cidr_pair_list = client.ZeroTrustGatewayGatewayAccountEgressCidrPairList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZeroTrustGatewayGatewayAccountEgressCidrPairList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayGatewayAccountLoggingSettingEntity

```ts
const zero_trust_gateway_gateway_account_logging_setting = client.ZeroTrustGatewayGatewayAccountLoggingSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redact_pii` | `boolean` | No | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `result` | `Record<string, any>` | No |  |
| `settings_by_rule_type` | `Record<string, any>` | No | Configure logging settings for each rule type. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewayGatewayAccountLoggingSetting().load({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZeroTrustGatewayGatewayAccountLoggingSetting().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayGatewayAccountLoggingSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayListItemResponseCollectionEntity

```ts
const zero_trust_gateway_list_item_response_collection = client.ZeroTrustGatewayListItemResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No | Provide the list items. |
| `result_info` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZeroTrustGatewayListItemResponseCollection().list({ account_id: "example", list_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayListItemResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayListSingleEntity

```ts
const zero_trust_gateway_list_single = client.ZeroTrustGatewayListSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `append` | `any[]` | No | Add items to the list. |
| `description` | `string` | No | Provide the list description. |
| `items` | `any[]` | No | Add items to the list. |
| `name` | `string` | Yes | Specify the list name. |
| `remove` | `any[]` | No | Lists of item values you want to remove. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewayListSingle().load({ account_id: 'account_id', list_id: 'list_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZeroTrustGatewayListSingle().update({
  account_id: 'account_id',
  list_id: 'list_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayListSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayResponseCollectionEntity

```ts
const zero_trust_gateway_response_collection = client.ZeroTrustGatewayResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZeroTrustGatewayResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayResponseCollection10Entity

```ts
const zero_trust_gateway_response_collection_10 = client.ZeroTrustGatewayResponseCollection10()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |
| `result_info` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZeroTrustGatewayResponseCollection10().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayResponseCollection10Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayResponseCollection2Entity

```ts
const zero_trust_gateway_response_collection_2 = client.ZeroTrustGatewayResponseCollection2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZeroTrustGatewayResponseCollection2().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayResponseCollection2Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayResponseCollection3Entity

```ts
const zero_trust_gateway_response_collection_3 = client.ZeroTrustGatewayResponseCollection3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZeroTrustGatewayResponseCollection3().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayResponseCollection3Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayResponseCollection4Entity

```ts
const zero_trust_gateway_response_collection_4 = client.ZeroTrustGatewayResponseCollection4()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZeroTrustGatewayResponseCollection4().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayResponseCollection4Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayResponseCollection5Entity

```ts
const zero_trust_gateway_response_collection_5 = client.ZeroTrustGatewayResponseCollection5()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZeroTrustGatewayResponseCollection5().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayResponseCollection5Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayResponseCollection6Entity

```ts
const zero_trust_gateway_response_collection_6 = client.ZeroTrustGatewayResponseCollection6()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZeroTrustGatewayResponseCollection6().list({ account_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZeroTrustGatewayResponseCollection6().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayResponseCollection6Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayResponseCollection7Entity

```ts
const zero_trust_gateway_response_collection_7 = client.ZeroTrustGatewayResponseCollection7()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZeroTrustGatewayResponseCollection7().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayResponseCollection7Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayResponseCollection8Entity

```ts
const zero_trust_gateway_response_collection_8 = client.ZeroTrustGatewayResponseCollection8()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZeroTrustGatewayResponseCollection8().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayResponseCollection8Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewayResponseCollection9Entity

```ts
const zero_trust_gateway_response_collection_9 = client.ZeroTrustGatewayResponseCollection9()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZeroTrustGatewayResponseCollection9().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewayResponseCollection9Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewaySingleEntity

```ts
const zero_trust_gateway_single = client.ZeroTrustGatewaySingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |
| `validity_period_days` | `number` | No | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `activate` | `/accounts/{account_id}/gateway/certificates/{certificate_id}/activate` | `client.ZeroTrustGatewaySingle().create({ $action: 'activate', ... })` |

An action returns that action's OWN response, which is not necessarily a
ZeroTrustGatewaySingle record — check the API definition for its shape.

```ts
const result = await client.ZeroTrustGatewaySingle().create({
  $action: 'activate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ZeroTrustGatewaySingle().create({
  account_id: 'example_account_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewaySingle().load({ account_id: 'account_id', certificate_id: 'certificate_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewaySingle().remove({ account_id: 'account_id', certificate_id: 'certificate_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewaySingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewaySingleResponse2Entity

```ts
const zero_trust_gateway_single_response_2 = client.ZeroTrustGatewaySingleResponse2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewaySingleResponse2().load({ account_id: 'account_id', operation_id: 'operation_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewaySingleResponse2Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewaySingleResponse3Entity

```ts
const zero_trust_gateway_single_response_3 = client.ZeroTrustGatewaySingleResponse3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_default` | `boolean` | No | Indicate whether this location is the default location. |
| `dns_destination_ips_id` | `string` | No | Specify the identifier of the pair of IPv4 addresses assigned to this location. |
| `ecs_support` | `boolean` | No | Indicate whether the location must resolve EDNS queries. |
| `endpoints` | `Record<string, any>` | Yes | Configure the destination endpoints for this location. |
| `max_ttl` | `Record<string, any>` | Yes | Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. |
| `name` | `string` | Yes | Specify the location name. |
| `networks` | `any[]` | No | Specify the list of network ranges from which requests at this location originate. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ZeroTrustGatewaySingleResponse3().create({
  account_id: 'example_account_id',
  endpoints: {},
  max_ttl: {},
  name: 'example_name',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewaySingleResponse3().load({ account_id: 'account_id', location_id: 'location_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZeroTrustGatewaySingleResponse3().update({
  account_id: 'account_id',
  location_id: 'location_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewaySingleResponse3Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewaySingleResponse4Entity

```ts
const zero_trust_gateway_single_response_4 = client.ZeroTrustGatewaySingleResponse4()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`. |
| `description` | `string` | No | Specify the rule description. |
| `device_posture` | `string` | No | Specify the wirefilter expression used for device posture check. |
| `enabled` | `boolean` | No | Specify whether the rule is enabled. |
| `expiration` | `Record<string, any>` | Yes | Defines the expiration time stamp and default duration of a DNS policy. |
| `filters` | `any[]` | No | Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| `identity` | `string` | No | Specify the wirefilter expression used for identity matching. |
| `name` | `string` | Yes | Specify the rule name. |
| `precedence` | `number` | No | Set the order of your rules. |
| `result` | `Record<string, any>` | Yes |  |
| `rule_settings` | `Record<string, any>` | No | Defines settings for this rule. |
| `schedule` | `Record<string, any>` | No | Defines the schedule for activating DNS policies. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ZeroTrustGatewaySingleResponse4().create({
  account_id: 'example_account_id',
  action: 'example_action',
  expiration: {},
  name: 'example_name',
  result: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewaySingleResponse4().load({ account_id: 'account_id', rule_id: 'rule_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZeroTrustGatewaySingleResponse4().update({
  account_id: 'account_id',
  rule_id: 'rule_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewaySingleResponse4Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewaySingleResponse5Entity

```ts
const zero_trust_gateway_single_response_5 = client.ZeroTrustGatewaySingleResponse5()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ips` | `any[]` | No | Specify the list of CIDRs to restrict ingress connections. |
| `kind` | `string` | No | The proxy endpoint kind. |
| `name` | `string` | No | Specify the name of the proxy endpoint. |
| `result` | `any` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ZeroTrustGatewaySingleResponse5().create({
  account_id: 'example_account_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewaySingleResponse5().load({ account_id: 'account_id', proxy_endpoint_id: 'proxy_endpoint_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZeroTrustGatewaySingleResponse5().update({
  account_id: 'account_id',
  proxy_endpoint_id: 'proxy_endpoint_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewaySingleResponse5Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewaySingleResponse6Entity

```ts
const zero_trust_gateway_single_response_6 = client.ZeroTrustGatewaySingleResponse6()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `public_key` | `string` | Yes | Provide the Base64-encoded HPKE public key that encrypts SSH session logs. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ZeroTrustGatewaySingleResponse6().create({
  account_id: 'example_account_id',
  public_key: 'example_public_key',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewaySingleResponse6().load({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZeroTrustGatewaySingleResponse6().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewaySingleResponse6Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewaySingleResponse7Entity

```ts
const zero_trust_gateway_single_response_7 = client.ZeroTrustGatewaySingleResponse7()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contents` | `string` | Yes | Actual contents of the PAC file |
| `description` | `string` | No | Detailed description of the PAC file. |
| `name` | `string` | Yes | Name of the PAC file. |
| `result` | `Record<string, any>` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ZeroTrustGatewaySingleResponse7().create({
  account_id: 'example_account_id',
  contents: 'example_contents',
  name: 'example_name',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustGatewaySingleResponse7().load({ account_id: 'account_id', pacfile_id: 'pacfile_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZeroTrustGatewaySingleResponse7().update({
  account_id: 'account_id',
  pacfile_id: 'pacfile_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewaySingleResponse7Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustGatewaySingleResponseWithListItemEntity

```ts
const zero_trust_gateway_single_response_with_list_item = client.ZeroTrustGatewaySingleResponseWithListItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Provide the list description. |
| `items` | `any[]` | No | Add items to the list. |
| `name` | `string` | Yes | Specify the list name. |
| `type` | `string` | Yes | Specify the list type. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ZeroTrustGatewaySingleResponseWithListItem().create({
  account_id: 'example_account_id',
  name: 'example_name',
  type: 'example_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustGatewaySingleResponseWithListItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustRiskScoringEntity

```ts
const zero_trust_risk_scoring = client.ZeroTrustRiskScoring()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `behaviors` | `Record<string, any>` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `reset` | `/accounts/{account_id}/zt_risk_scoring/{user_id}/reset` | `client.ZeroTrustRiskScoring().create({ $action: 'reset', ... })` |

An action returns that action's OWN response, which is not necessarily a
ZeroTrustRiskScoring record — check the API definition for its shape.

```ts
const result = await client.ZeroTrustRiskScoring().create({
  $action: 'reset',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ZeroTrustRiskScoring().create({
  account_id: 'example_account_id',
  zt_risk_scoring_id: 'example_zt_risk_scoring_id',
  behaviors: {},
  result: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustRiskScoring().load({ account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZeroTrustRiskScoring().update({
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustRiskScoringEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZeroTrustRiskScoringIntegrationEntity

```ts
const zero_trust_risk_scoring_integration = client.ZeroTrustRiskScoringIntegration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Whether this integration is enabled. |
| `id` | `string` | No |  |
| `integration_type` | `string` | Yes |  |
| `reference_id` | `string` | No | A reference id that can be supplied by the client. |
| `result` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ZeroTrustRiskScoringIntegration().create({
  account_id: 'example_account_id',
  active: true,
  integration_type: 'example_integration_type',
  result: {},
  tenant_url: 'example_tenant_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZeroTrustRiskScoringIntegration().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZeroTrustRiskScoringIntegration().load({ id: 'zero_trust_risk_scoring_integration_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ZeroTrustRiskScoringIntegration().remove({ id: 'zero_trust_risk_scoring_integration_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZeroTrustRiskScoringIntegration().update({
  id: 'zero_trust_risk_scoring_integration_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZeroTrustRiskScoringIntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZeroTrustSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CloudflareZeroTrustSDK({
  feature: {
    test: { active: true },
  }
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

