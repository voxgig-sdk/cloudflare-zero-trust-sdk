package voxgigcloudflarezerotrustsdk

import (
	"github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go/core"
	"github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go/entity"
	"github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudflareZeroTrustSDK = core.CloudflareZeroTrustSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudflareZeroTrustEntity = core.CloudflareZeroTrustEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudflareZeroTrustError = core.CloudflareZeroTrustError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAlexandriaDeleteApplicationEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewAlexandriaDeleteApplicationEntity(client, entopts)
	}
	core.NewAlexandriaGetApplicationEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewAlexandriaGetApplicationEntity(client, entopts)
	}
	core.NewAlexandriaGetCategoryEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewAlexandriaGetCategoryEntity(client, entopts)
	}
	core.NewClientVersionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewClientVersionEntity(client, entopts)
	}
	core.NewCniEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewCniEntity(client, entopts)
	}
	core.NewDeploymentGroupEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewDeploymentGroupEntity(client, entopts)
	}
	core.NewDexRemoteCommandEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewDexRemoteCommandEntity(client, entopts)
	}
	core.NewDexRuleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewDexRuleEntity(client, entopts)
	}
	core.NewDexSyntheticApplicationMonitoringEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewDexSyntheticApplicationMonitoringEntity(client, entopts)
	}
	core.NewDigitalExperienceMonitoringDeviceEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewDigitalExperienceMonitoringDeviceEntity(client, entopts)
	}
	core.NewDigitalExperienceMonitoringDexDeleteResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewDigitalExperienceMonitoringDexDeleteResponseCollectionEntity(client, entopts)
	}
	core.NewDigitalExperienceMonitoringDexResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewDigitalExperienceMonitoringDexResponseCollectionEntity(client, entopts)
	}
	core.NewDigitalExperienceMonitoringDexSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewDigitalExperienceMonitoringDexSingleEntity(client, entopts)
	}
	core.NewDigitalExperienceMonitoringFleetStatusDeviceEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewDigitalExperienceMonitoringFleetStatusDeviceEntity(client, entopts)
	}
	core.NewDigitalExperienceMonitoringFleetStatusLiveEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewDigitalExperienceMonitoringFleetStatusLiveEntity(client, entopts)
	}
	core.NewDigitalExperienceMonitoringFleetStatusOverTimeEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewDigitalExperienceMonitoringFleetStatusOverTimeEntity(client, entopts)
	}
	core.NewIntegrationEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewIntegrationEntity(client, entopts)
	}
	core.NewInterconnectEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewInterconnectEntity(client, entopts)
	}
	core.NewIpProfileEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewIpProfileEntity(client, entopts)
	}
	core.NewListEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewListEntity(client, entopts)
	}
	core.NewLocationEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewLocationEntity(client, entopts)
	}
	core.NewNscCniEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewNscCniEntity(client, entopts)
	}
	core.NewNscDefaultNameEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewNscDefaultNameEntity(client, entopts)
	}
	core.NewNscInterconnectEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewNscInterconnectEntity(client, entopts)
	}
	core.NewNscSettingEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewNscSettingEntity(client, entopts)
	}
	core.NewNscSlotInfoEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewNscSlotInfoEntity(client, entopts)
	}
	core.NewNscStatusInfoEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewNscStatusInfoEntity(client, entopts)
	}
	core.NewOneApplicationDetailEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewOneApplicationDetailEntity(client, entopts)
	}
	core.NewOneIntegrationCreateEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewOneIntegrationCreateEntity(client, entopts)
	}
	core.NewOneIntegrationDetailEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewOneIntegrationDetailEntity(client, entopts)
	}
	core.NewOneIntegrationPauseEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewOneIntegrationPauseEntity(client, entopts)
	}
	core.NewOneIntegrationResumeEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewOneIntegrationResumeEntity(client, entopts)
	}
	core.NewOneIntegrationUpdateEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewOneIntegrationUpdateEntity(client, entopts)
	}
	core.NewOnePaginatedApplicationListListEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewOnePaginatedApplicationListListEntity(client, entopts)
	}
	core.NewOnePaginatedAuthMethodDetailListEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewOnePaginatedAuthMethodDetailListEntity(client, entopts)
	}
	core.NewOnePaginatedIntegrationV2ListItemListEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewOnePaginatedIntegrationV2ListItemListEntity(client, entopts)
	}
	core.NewOnePaginatedSetupFlowListEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewOnePaginatedSetupFlowListEntity(client, entopts)
	}
	core.NewOverrideCodeEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewOverrideCodeEntity(client, entopts)
	}
	core.NewPacfileEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewPacfileEntity(client, entopts)
	}
	core.NewPhysicalDeviceEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewPhysicalDeviceEntity(client, entopts)
	}
	core.NewProxyEndpointEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewProxyEndpointEntity(client, entopts)
	}
	core.NewRegistrationEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewRegistrationEntity(client, entopts)
	}
	core.NewRuleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewRuleEntity(client, entopts)
	}
	core.NewTeamsDevicesApiResponseSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesApiResponseSingleEntity(client, entopts)
	}
	core.NewTeamsDevicesComponentsSchemasResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesComponentsSchemasResponseCollectionEntity(client, entopts)
	}
	core.NewTeamsDevicesComponentsSchemasSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesComponentsSchemasSingleEntity(client, entopts)
	}
	core.NewTeamsDevicesDefaultDeviceSettingEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesDefaultDeviceSettingEntity(client, entopts)
	}
	core.NewTeamsDevicesDeviceEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesDeviceEntity(client, entopts)
	}
	core.NewTeamsDevicesDeviceSettingEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesDeviceSettingEntity(client, entopts)
	}
	core.NewTeamsDevicesDeviceSettingsResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesDeviceSettingsResponseCollectionEntity(client, entopts)
	}
	core.NewTeamsDevicesDevicesPolicyCertificatesSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesDevicesPolicyCertificatesSingleEntity(client, entopts)
	}
	core.NewTeamsDevicesFallbackDomainResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesFallbackDomainResponseCollectionEntity(client, entopts)
	}
	core.NewTeamsDevicesGlobalWarpOverrideEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesGlobalWarpOverrideEntity(client, entopts)
	}
	core.NewTeamsDevicesIdEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesIdEntity(client, entopts)
	}
	core.NewTeamsDevicesOverrideCodeEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesOverrideCodeEntity(client, entopts)
	}
	core.NewTeamsDevicesResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesResponseCollectionEntity(client, entopts)
	}
	core.NewTeamsDevicesSchemasIdEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesSchemasIdEntity(client, entopts)
	}
	core.NewTeamsDevicesSchemasResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesSchemasResponseCollectionEntity(client, entopts)
	}
	core.NewTeamsDevicesSchemasSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesSchemasSingleEntity(client, entopts)
	}
	core.NewTeamsDevicesSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesSingleEntity(client, entopts)
	}
	core.NewTeamsDevicesSplitTunnelIncludeResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesSplitTunnelIncludeResponseCollectionEntity(client, entopts)
	}
	core.NewTeamsDevicesSplitTunnelResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesSplitTunnelResponseCollectionEntity(client, entopts)
	}
	core.NewTeamsDevicesZeroTrustAccountDeviceSettingEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTeamsDevicesZeroTrustAccountDeviceSettingEntity(client, entopts)
	}
	core.NewTunnelEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelEntity(client, entopts)
	}
	core.NewTunnelCfdTunnelResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelCfdTunnelResponseCollectionEntity(client, entopts)
	}
	core.NewTunnelCfdTunnelResponseSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelCfdTunnelResponseSingleEntity(client, entopts)
	}
	core.NewTunnelConfigurationEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelConfigurationEntity(client, entopts)
	}
	core.NewTunnelEmptyEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelEmptyEntity(client, entopts)
	}
	core.NewTunnelHostnameRouteResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelHostnameRouteResponseCollectionEntity(client, entopts)
	}
	core.NewTunnelHostnameRouteResponseSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelHostnameRouteResponseSingleEntity(client, entopts)
	}
	core.NewTunnelMeshConfigurationResponseSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelMeshConfigurationResponseSingleEntity(client, entopts)
	}
	core.NewTunnelRouteResponseSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelRouteResponseSingleEntity(client, entopts)
	}
	core.NewTunnelSubnetResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelSubnetResponseCollectionEntity(client, entopts)
	}
	core.NewTunnelSubnetResponseSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelSubnetResponseSingleEntity(client, entopts)
	}
	core.NewTunnelSubnetResponseSingleNullableEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelSubnetResponseSingleNullableEntity(client, entopts)
	}
	core.NewTunnelTeamnetResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelTeamnetResponseCollectionEntity(client, entopts)
	}
	core.NewTunnelTeamnetResponseSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelTeamnetResponseSingleEntity(client, entopts)
	}
	core.NewTunnelTunnelClientEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelTunnelClientEntity(client, entopts)
	}
	core.NewTunnelTunnelConnectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelTunnelConnectionEntity(client, entopts)
	}
	core.NewTunnelTunnelResponseTokenEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelTunnelResponseTokenEntity(client, entopts)
	}
	core.NewTunnelTunnelWarpConnectorClientEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelTunnelWarpConnectorClientEntity(client, entopts)
	}
	core.NewTunnelTunnelWarpConnectorConnectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelTunnelWarpConnectorConnectionEntity(client, entopts)
	}
	core.NewTunnelVnetResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelVnetResponseCollectionEntity(client, entopts)
	}
	core.NewTunnelVnetResponseSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelVnetResponseSingleEntity(client, entopts)
	}
	core.NewTunnelWarpConnectorResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelWarpConnectorResponseCollectionEntity(client, entopts)
	}
	core.NewTunnelWarpConnectorResponseSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelWarpConnectorResponseSingleEntity(client, entopts)
	}
	core.NewTunnelZeroTrustConnectivitySettingEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewTunnelZeroTrustConnectivitySettingEntity(client, entopts)
	}
	core.NewWarpEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewWarpEntity(client, entopts)
	}
	core.NewWarpChangeEventEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewWarpChangeEventEntity(client, entopts)
	}
	core.NewWarpTeamsDeviceApiOtherEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewWarpTeamsDeviceApiOtherEntity(client, entopts)
	}
	core.NewZeroTrustGatewayApplicationsReviewStatusEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayApplicationsReviewStatusEntity(client, entopts)
	}
	core.NewZeroTrustGatewayCsvOperationSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayCsvOperationSingleEntity(client, entopts)
	}
	core.NewZeroTrustGatewayCustomCertificateSettingEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayCustomCertificateSettingEntity(client, entopts)
	}
	core.NewZeroTrustGatewayGatewayAccountEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayGatewayAccountEntity(client, entopts)
	}
	core.NewZeroTrustGatewayGatewayAccountConfigEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayGatewayAccountConfigEntity(client, entopts)
	}
	core.NewZeroTrustGatewayGatewayAccountEgressCidrPairListEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayGatewayAccountEgressCidrPairListEntity(client, entopts)
	}
	core.NewZeroTrustGatewayGatewayAccountLoggingSettingEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayGatewayAccountLoggingSettingEntity(client, entopts)
	}
	core.NewZeroTrustGatewayListItemResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayListItemResponseCollectionEntity(client, entopts)
	}
	core.NewZeroTrustGatewayListSingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayListSingleEntity(client, entopts)
	}
	core.NewZeroTrustGatewayResponseCollectionEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayResponseCollectionEntity(client, entopts)
	}
	core.NewZeroTrustGatewayResponseCollection10EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayResponseCollection10Entity(client, entopts)
	}
	core.NewZeroTrustGatewayResponseCollection2EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayResponseCollection2Entity(client, entopts)
	}
	core.NewZeroTrustGatewayResponseCollection3EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayResponseCollection3Entity(client, entopts)
	}
	core.NewZeroTrustGatewayResponseCollection4EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayResponseCollection4Entity(client, entopts)
	}
	core.NewZeroTrustGatewayResponseCollection5EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayResponseCollection5Entity(client, entopts)
	}
	core.NewZeroTrustGatewayResponseCollection6EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayResponseCollection6Entity(client, entopts)
	}
	core.NewZeroTrustGatewayResponseCollection7EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayResponseCollection7Entity(client, entopts)
	}
	core.NewZeroTrustGatewayResponseCollection8EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayResponseCollection8Entity(client, entopts)
	}
	core.NewZeroTrustGatewayResponseCollection9EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewayResponseCollection9Entity(client, entopts)
	}
	core.NewZeroTrustGatewaySingleEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewaySingleEntity(client, entopts)
	}
	core.NewZeroTrustGatewaySingleResponse2EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewaySingleResponse2Entity(client, entopts)
	}
	core.NewZeroTrustGatewaySingleResponse3EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewaySingleResponse3Entity(client, entopts)
	}
	core.NewZeroTrustGatewaySingleResponse4EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewaySingleResponse4Entity(client, entopts)
	}
	core.NewZeroTrustGatewaySingleResponse5EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewaySingleResponse5Entity(client, entopts)
	}
	core.NewZeroTrustGatewaySingleResponse6EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewaySingleResponse6Entity(client, entopts)
	}
	core.NewZeroTrustGatewaySingleResponse7EntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewaySingleResponse7Entity(client, entopts)
	}
	core.NewZeroTrustGatewaySingleResponseWithListItemEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustGatewaySingleResponseWithListItemEntity(client, entopts)
	}
	core.NewZeroTrustRiskScoringEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustRiskScoringEntity(client, entopts)
	}
	core.NewZeroTrustRiskScoringIntegrationEntityFunc = func(client *core.CloudflareZeroTrustSDK, entopts map[string]any) core.CloudflareZeroTrustEntity {
		return entity.NewZeroTrustRiskScoringIntegrationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudflareZeroTrustSDK = core.NewCloudflareZeroTrustSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudflareZeroTrustSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudflareZeroTrustSDK  { return NewCloudflareZeroTrustSDK(nil) }
func Test() *CloudflareZeroTrustSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
