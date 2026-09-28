package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewClientVersionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewCniEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewDeploymentGroupEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewDexRemoteCommandEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewDexRuleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewDexSyntheticApplicationMonitoringEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewDigitalExperienceMonitoringDeviceEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewDigitalExperienceMonitoringDexDeleteResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewDigitalExperienceMonitoringDexResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewDigitalExperienceMonitoringDexSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewDigitalExperienceMonitoringFleetStatusDeviceEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewDigitalExperienceMonitoringFleetStatusLiveEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewDigitalExperienceMonitoringFleetStatusOverTimeEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewInterconnectEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewIpProfileEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewListEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewLocationEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewNscCniEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewNscDefaultNameEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewNscInterconnectEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewNscSettingEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewNscSlotInfoEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewNscStatusInfoEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewOverrideCodeEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewPacfileEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewPhysicalDeviceEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewProxyEndpointEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewRegistrationEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewRuleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesApiResponseSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesComponentsSchemasResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesComponentsSchemasSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesDefaultDeviceSettingEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesDeviceEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesDeviceSettingEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesDeviceSettingsResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesFallbackDomainResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesGlobalWarpOverrideEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesIdEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesOverrideCodeEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesSchemasIdEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesSchemasResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesSchemasSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesSplitTunnelIncludeResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesSplitTunnelResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTeamsDevicesZeroTrustAccountDeviceSettingEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelCfdTunnelResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelCfdTunnelResponseSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelConfigurationEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelEmptyEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelHostnameRouteResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelHostnameRouteResponseSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelMeshConfigurationResponseSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelRouteResponseSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelSubnetResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelSubnetResponseSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelSubnetResponseSingleNullableEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelTeamnetResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelTeamnetResponseSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelTunnelClientEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelTunnelConnectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelTunnelResponseTokenEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelTunnelWarpConnectorClientEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelTunnelWarpConnectorConnectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelVnetResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelVnetResponseSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelWarpConnectorResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelWarpConnectorResponseSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewTunnelZeroTrustConnectivitySettingEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewWarpEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewWarpChangeEventEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewWarpTeamsDeviceApiOtherEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayApplicationsReviewStatusEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayCsvOperationSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayCustomCertificateSettingEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayGatewayAccountEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayGatewayAccountConfigEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayGatewayAccountEgressCidrPairListEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayGatewayAccountLoggingSettingEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayListItemResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayListSingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayResponseCollectionEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayResponseCollection10EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayResponseCollection2EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayResponseCollection3EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayResponseCollection4EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayResponseCollection5EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayResponseCollection6EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayResponseCollection7EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayResponseCollection8EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewayResponseCollection9EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewaySingleEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewaySingleResponse2EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewaySingleResponse3EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewaySingleResponse4EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewaySingleResponse5EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewaySingleResponse6EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewaySingleResponse7EntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustGatewaySingleResponseWithListItemEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustRiskScoringEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

var NewZeroTrustRiskScoringIntegrationEntityFunc func(client *CloudflareZeroTrustSDK, entopts map[string]any) CloudflareZeroTrustEntity

