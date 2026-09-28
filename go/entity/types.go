// Typed models for the CloudflareZeroTrust SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go/core"
)

// ClientVersion is the typed data model for the client_version entity.
type ClientVersion struct {
}

// ClientVersionListMatch is the typed request payload for ClientVersion.ListTyped.
type ClientVersionListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	ReleaseTrack string `json:"release_track"`
	TargetEnvironment string `json:"target_environment"`
}

// Cni is the typed data model for the cni entity.
type Cni struct {
}

// CniRemoveMatch is the typed request payload for Cni.RemoveTyped.
type CniRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DeploymentGroup is the typed data model for the deployment_group entity.
type DeploymentGroup struct {
}

// DeploymentGroupLoadMatch is the typed request payload for DeploymentGroup.LoadTyped.
type DeploymentGroupLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DeploymentGroupListMatch is the typed request payload for DeploymentGroup.ListTyped.
type DeploymentGroupListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// DeploymentGroupCreateData is the typed request payload for DeploymentGroup.CreateTyped.
type DeploymentGroupCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Name string `json:"name"`
	PolicyIds *[]any `json:"policy_ids,omitempty"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Success bool `json:"success"`
	VersionConfig []any `json:"version_config"`
}

// DeploymentGroupUpdateData is the typed request payload for DeploymentGroup.UpdateTyped.
type DeploymentGroupUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	PolicyIds *[]any `json:"policy_ids,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success *bool `json:"success,omitempty"`
	VersionConfig *[]any `json:"version_config,omitempty"`
}

// DeploymentGroupRemoveMatch is the typed request payload for DeploymentGroup.RemoveTyped.
type DeploymentGroupRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DexRemoteCommand is the typed data model for the dex_remote_command entity.
type DexRemoteCommand struct {
}

// DexRemoteCommandLoadMatch is the typed request payload for DexRemoteCommand.LoadTyped.
type DexRemoteCommandLoadMatch struct {
	AccountId string `json:"account_id"`
	CommandType *string `json:"command_type,omitempty"`
	DeviceId *string `json:"device_id,omitempty"`
	From *string `json:"from,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
	To *string `json:"to,omitempty"`
	UserEmail *string `json:"user_email,omitempty"`
	Search *string `json:"search,omitempty"`
	CommandId *string `json:"command_id,omitempty"`
	Filename *string `json:"filename,omitempty"`
}

// DexRemoteCommandCreateData is the typed request payload for DexRemoteCommand.CreateTyped.
type DexRemoteCommandCreateData struct {
	AccountId string `json:"account_id"`
	Commands []any `json:"commands"`
	Result *map[string]any `json:"result,omitempty"`
}

// DexRule is the typed data model for the dex_rule entity.
type DexRule struct {
}

// DexRuleLoadMatch is the typed request payload for DexRule.LoadTyped.
type DexRuleLoadMatch struct {
	AccountId string `json:"account_id"`
	Name *string `json:"name,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	Id *string `json:"id,omitempty"`
}

// DexRuleCreateData is the typed request payload for DexRule.CreateTyped.
type DexRuleCreateData struct {
	AccountId string `json:"account_id"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Match string `json:"match"`
	Name string `json:"name"`
	Result *map[string]any `json:"result,omitempty"`
}

// DexRuleUpdateData is the typed request payload for DexRule.UpdateTyped.
type DexRuleUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Match *string `json:"match,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// DexRuleRemoveMatch is the typed request payload for DexRule.RemoveTyped.
type DexRuleRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// DexSyntheticApplicationMonitoring is the typed data model for the dex_synthetic_application_monitoring entity.
type DexSyntheticApplicationMonitoring struct {
}

// DexSyntheticApplicationMonitoringLoadMatch is the typed request payload for DexSyntheticApplicationMonitoring.LoadTyped.
type DexSyntheticApplicationMonitoringLoadMatch struct {
	AccountId string `json:"account_id"`
	DeviceId *string `json:"device_id,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	From *string `json:"from,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	To *string `json:"to,omitempty"`
	Colo *string `json:"colo,omitempty"`
	Kind *string `json:"kind,omitempty"`
	RegistrationId *string `json:"registration_id,omitempty"`
	TestName *string `json:"test_name,omitempty"`
	TestId *string `json:"test_id,omitempty"`
	Interval *string `json:"interval,omitempty"`
	HttpTestId *string `json:"http_test_id,omitempty"`
	TracerouteTestId *string `json:"traceroute_test_id,omitempty"`
	TracerouteTestResultId *string `json:"traceroute_test_result_id,omitempty"`
}

// DexSyntheticApplicationMonitoringListMatch is the typed request payload for DexSyntheticApplicationMonitoring.ListTyped.
type DexSyntheticApplicationMonitoringListMatch struct {
	AccountId string `json:"account_id"`
	From string `json:"from"`
	SortBy *string `json:"sort_by,omitempty"`
	To string `json:"to"`
}

// DigitalExperienceMonitoringDevice is the typed data model for the digital_experience_monitoring_device entity.
type DigitalExperienceMonitoringDevice struct {
}

// DigitalExperienceMonitoringDeviceListMatch is the typed request payload for DigitalExperienceMonitoringDevice.ListTyped.
type DigitalExperienceMonitoringDeviceListMatch struct {
	AccountId string `json:"account_id"`
	DeviceId string `json:"device_id"`
	Colo *string `json:"colo,omitempty"`
	SinceMinute float64 `json:"since_minute"`
	TimeNow *string `json:"time_now,omitempty"`
}

// DigitalExperienceMonitoringDexDeleteResponseCollection is the typed data model for the digital_experience_monitoring_dex_delete_response_collection entity.
type DigitalExperienceMonitoringDexDeleteResponseCollection struct {
}

// DigitalExperienceMonitoringDexDeleteResponseCollectionRemoveMatch is the typed request payload for DigitalExperienceMonitoringDexDeleteResponseCollection.RemoveTyped.
type DigitalExperienceMonitoringDexDeleteResponseCollectionRemoveMatch struct {
	AccountId string `json:"account_id"`
	DexTestId string `json:"dex_test_id"`
}

// DigitalExperienceMonitoringDexResponseCollection is the typed data model for the digital_experience_monitoring_dex_response_collection entity.
type DigitalExperienceMonitoringDexResponseCollection struct {
}

// DigitalExperienceMonitoringDexResponseCollectionListMatch is the typed request payload for DigitalExperienceMonitoringDexResponseCollection.ListTyped.
type DigitalExperienceMonitoringDexResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	Kind *string `json:"kind,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	TestName *string `json:"test_name,omitempty"`
}

// DigitalExperienceMonitoringDexSingle is the typed data model for the digital_experience_monitoring_dex_single entity.
type DigitalExperienceMonitoringDexSingle struct {
}

// DigitalExperienceMonitoringDexSingleLoadMatch is the typed request payload for DigitalExperienceMonitoringDexSingle.LoadTyped.
type DigitalExperienceMonitoringDexSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	DexTestId string `json:"dex_test_id"`
}

// DigitalExperienceMonitoringDexSingleCreateData is the typed request payload for DigitalExperienceMonitoringDexSingle.CreateTyped.
type DigitalExperienceMonitoringDexSingleCreateData struct {
	AccountId string `json:"account_id"`
	Created *string `json:"created,omitempty"`
	Data map[string]any `json:"data"`
	Description *string `json:"description,omitempty"`
	Enabled bool `json:"enabled"`
	Interval string `json:"interval"`
	Name string `json:"name"`
	Result map[string]any `json:"result"`
	TargetPolicies *any `json:"target_policies,omitempty"`
	Targeted *bool `json:"targeted,omitempty"`
	TestId *string `json:"test_id,omitempty"`
	Updated *string `json:"updated,omitempty"`
}

// DigitalExperienceMonitoringDexSingleUpdateData is the typed request payload for DigitalExperienceMonitoringDexSingle.UpdateTyped.
type DigitalExperienceMonitoringDexSingleUpdateData struct {
	AccountId string `json:"account_id"`
	DexTestId string `json:"dex_test_id"`
	Created *string `json:"created,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Interval *string `json:"interval,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	TargetPolicies *any `json:"target_policies,omitempty"`
	Targeted *bool `json:"targeted,omitempty"`
	TestId *string `json:"test_id,omitempty"`
	Updated *string `json:"updated,omitempty"`
}

// DigitalExperienceMonitoringFleetStatusDevice is the typed data model for the digital_experience_monitoring_fleet_status_device entity.
type DigitalExperienceMonitoringFleetStatusDevice struct {
}

// DigitalExperienceMonitoringFleetStatusDeviceListMatch is the typed request payload for DigitalExperienceMonitoringFleetStatusDevice.ListTyped.
type DigitalExperienceMonitoringFleetStatusDeviceListMatch struct {
	AccountId string `json:"account_id"`
	Colo *string `json:"colo,omitempty"`
	DeviceId *string `json:"device_id,omitempty"`
	From string `json:"from"`
	Mode *string `json:"mode,omitempty"`
	Page float64 `json:"page"`
	PerPage float64 `json:"per_page"`
	Platform *string `json:"platform,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	To string `json:"to"`
	Version *string `json:"version,omitempty"`
}

// DigitalExperienceMonitoringFleetStatusLive is the typed data model for the digital_experience_monitoring_fleet_status_live entity.
type DigitalExperienceMonitoringFleetStatusLive struct {
}

// DigitalExperienceMonitoringFleetStatusLiveLoadMatch is the typed request payload for DigitalExperienceMonitoringFleetStatusLive.LoadTyped.
type DigitalExperienceMonitoringFleetStatusLiveLoadMatch struct {
	AccountId string `json:"account_id"`
	SinceMinute float64 `json:"since_minute"`
}

// DigitalExperienceMonitoringFleetStatusOverTime is the typed data model for the digital_experience_monitoring_fleet_status_over_time entity.
type DigitalExperienceMonitoringFleetStatusOverTime struct {
}

// DigitalExperienceMonitoringFleetStatusOverTimeLoadMatch is the typed request payload for DigitalExperienceMonitoringFleetStatusOverTime.LoadTyped.
type DigitalExperienceMonitoringFleetStatusOverTimeLoadMatch struct {
	AccountId string `json:"account_id"`
	Colo *string `json:"colo,omitempty"`
	DeviceId *string `json:"device_id,omitempty"`
	From string `json:"from"`
	To string `json:"to"`
}

// Interconnect is the typed data model for the interconnect entity.
type Interconnect struct {
}

// InterconnectLoadMatch is the typed request payload for Interconnect.LoadTyped.
type InterconnectLoadMatch struct {
	AccountId string `json:"account_id"`
	Icon string `json:"icon"`
	Name *string `json:"name,omitempty"`
}

// InterconnectRemoveMatch is the typed request payload for Interconnect.RemoveTyped.
type InterconnectRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// IpProfile is the typed data model for the ip_profile entity.
type IpProfile struct {
}

// IpProfileLoadMatch is the typed request payload for IpProfile.LoadTyped.
type IpProfileLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// IpProfileListMatch is the typed request payload for IpProfile.ListTyped.
type IpProfileListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// IpProfileCreateData is the typed request payload for IpProfile.CreateTyped.
type IpProfileCreateData struct {
	AccountId string `json:"account_id"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Match string `json:"match"`
	Messages []any `json:"messages"`
	Name string `json:"name"`
	Precedence int `json:"precedence"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	SubnetId string `json:"subnet_id"`
	Success bool `json:"success"`
}

// IpProfileUpdateData is the typed request payload for IpProfile.UpdateTyped.
type IpProfileUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Match *string `json:"match,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	Precedence *int `json:"precedence,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	SubnetId *string `json:"subnet_id,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// IpProfileRemoveMatch is the typed request payload for IpProfile.RemoveTyped.
type IpProfileRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// List is the typed data model for the list entity.
type List struct {
}

// ListRemoveMatch is the typed request payload for List.RemoveTyped.
type ListRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Location is the typed data model for the location entity.
type Location struct {
}

// LocationRemoveMatch is the typed request payload for Location.RemoveTyped.
type LocationRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// NscCni is the typed data model for the nsc_cni entity.
type NscCni struct {
}

// NscCniLoadMatch is the typed request payload for NscCni.LoadTyped.
type NscCniLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// NscCniListMatch is the typed request payload for NscCni.ListTyped.
type NscCniListMatch struct {
	AccountId string `json:"account_id"`
	Cursor *int `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Slot *string `json:"slot,omitempty"`
	TunnelId *string `json:"tunnel_id,omitempty"`
}

// NscCniCreateData is the typed request payload for NscCni.CreateTyped.
type NscCniCreateData struct {
	AccountId string `json:"account_id"`
	Account string `json:"account"`
	Bgp map[string]any `json:"bgp"`
	BgpMode *string `json:"bgp_mode,omitempty"`
	CustIp string `json:"cust_ip"`
	Id string `json:"id"`
	Interconnect string `json:"interconnect"`
	Magic map[string]any `json:"magic"`
	P2pIp string `json:"p2p_ip"`
}

// NscCniUpdateData is the typed request payload for NscCni.UpdateTyped.
type NscCniUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Account *string `json:"account,omitempty"`
	Bgp *map[string]any `json:"bgp,omitempty"`
	BgpMode *string `json:"bgp_mode,omitempty"`
	CustIp *string `json:"cust_ip,omitempty"`
	Interconnect *string `json:"interconnect,omitempty"`
	Magic *map[string]any `json:"magic,omitempty"`
	P2pIp *string `json:"p2p_ip,omitempty"`
}

// NscDefaultName is the typed data model for the nsc_default_name entity.
type NscDefaultName struct {
}

// NscDefaultNameLoadMatch is the typed request payload for NscDefaultName.LoadTyped.
type NscDefaultNameLoadMatch struct {
	AccountId string `json:"account_id"`
	InterconnectId string `json:"interconnect_id"`
}

// NscInterconnect is the typed data model for the nsc_interconnect entity.
type NscInterconnect struct {
}

// NscInterconnectLoadMatch is the typed request payload for NscInterconnect.LoadTyped.
type NscInterconnectLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// NscInterconnectListMatch is the typed request payload for NscInterconnect.ListTyped.
type NscInterconnectListMatch struct {
	AccountId string `json:"account_id"`
	Cursor *int `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Site *string `json:"site,omitempty"`
	Type *string `json:"type,omitempty"`
}

// NscInterconnectCreateData is the typed request payload for NscInterconnect.CreateTyped.
type NscInterconnectCreateData struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	Items []any `json:"items"`
	Next *int `json:"next,omitempty"`
}

// NscSetting is the typed data model for the nsc_setting entity.
type NscSetting struct {
}

// NscSettingLoadMatch is the typed request payload for NscSetting.LoadTyped.
type NscSettingLoadMatch struct {
	AccountId string `json:"account_id"`
}

// NscSettingUpdateData is the typed request payload for NscSetting.UpdateTyped.
type NscSettingUpdateData struct {
	AccountId string `json:"account_id"`
	DefaultAsn *int `json:"default_asn,omitempty"`
}

// NscSlotInfo is the typed data model for the nsc_slot_info entity.
type NscSlotInfo struct {
}

// NscSlotInfoLoadMatch is the typed request payload for NscSlotInfo.LoadTyped.
type NscSlotInfoLoadMatch struct {
	AccountId string `json:"account_id"`
	Slot string `json:"slot"`
}

// NscSlotInfoListMatch is the typed request payload for NscSlotInfo.ListTyped.
type NscSlotInfoListMatch struct {
	AccountId string `json:"account_id"`
	AddressContain *string `json:"address_contain,omitempty"`
	Cursor *int `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Occupied *bool `json:"occupied,omitempty"`
	Site *string `json:"site,omitempty"`
	Speed *string `json:"speed,omitempty"`
}

// NscStatusInfo is the typed data model for the nsc_status_info entity.
type NscStatusInfo struct {
}

// NscStatusInfoLoadMatch is the typed request payload for NscStatusInfo.LoadTyped.
type NscStatusInfoLoadMatch struct {
	AccountId string `json:"account_id"`
	Icon string `json:"icon"`
}

// OverrideCode is the typed data model for the override_code entity.
type OverrideCode struct {
}

// OverrideCodeCreateData is the typed request payload for OverrideCode.CreateTyped.
type OverrideCodeCreateData struct {
	AccountId string `json:"account_id"`
	DeviceId *string `json:"device_id,omitempty"`
	DurationHours int `json:"duration_hours"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	Scope string `json:"scope"`
	Success bool `json:"success"`
	Type string `json:"type"`
}

// Pacfile is the typed data model for the pacfile entity.
type Pacfile struct {
}

// PacfileRemoveMatch is the typed request payload for Pacfile.RemoveTyped.
type PacfileRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// PhysicalDevice is the typed data model for the physical_device entity.
type PhysicalDevice struct {
}

// PhysicalDeviceLoadMatch is the typed request payload for PhysicalDevice.LoadTyped.
type PhysicalDeviceLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Include *string `json:"include,omitempty"`
}

// PhysicalDeviceListMatch is the typed request payload for PhysicalDevice.ListTyped.
type PhysicalDeviceListMatch struct {
	AccountId string `json:"account_id"`
	ActiveRegistration *string `json:"active_registration,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	HasRegistrationType *bool `json:"has_registration_type,omitempty"`
	Id *[]any `json:"id,omitempty"`
	Include *string `json:"include,omitempty"`
	LastSeenRegistrationPolicyId *string `json:"last_seen_registration_policy_id,omitempty"`
	LastSeenUserEmail *string `json:"last_seen_user_email,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Search *string `json:"search,omitempty"`
	SeenAfter *string `json:"seen_after,omitempty"`
	SeenBefore *string `json:"seen_before,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
}

// PhysicalDeviceCreateData is the typed request payload for PhysicalDevice.CreateTyped.
type PhysicalDeviceCreateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Success bool `json:"success"`
	Tags *map[string]any `json:"tags,omitempty"`
}

// PhysicalDeviceUpdateData is the typed request payload for PhysicalDevice.UpdateTyped.
type PhysicalDeviceUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success *bool `json:"success,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
}

// PhysicalDeviceRemoveMatch is the typed request payload for PhysicalDevice.RemoveTyped.
type PhysicalDeviceRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// ProxyEndpoint is the typed data model for the proxy_endpoint entity.
type ProxyEndpoint struct {
}

// ProxyEndpointRemoveMatch is the typed request payload for ProxyEndpoint.RemoveTyped.
type ProxyEndpointRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Registration is the typed data model for the registration entity.
type Registration struct {
}

// RegistrationLoadMatch is the typed request payload for Registration.LoadTyped.
type RegistrationLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Include *string `json:"include,omitempty"`
}

// RegistrationListMatch is the typed request payload for Registration.ListTyped.
type RegistrationListMatch struct {
	AccountId string `json:"account_id"`
	Cursor *string `json:"cursor,omitempty"`
	DeviceId *string `json:"device_id,omitempty"`
	Id *[]any `json:"id,omitempty"`
	Include *string `json:"include,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	PolicyId *string `json:"policy_id,omitempty"`
	RegistrationType *string `json:"registration_type,omitempty"`
	Search *string `json:"search,omitempty"`
	SeenAfter *string `json:"seen_after,omitempty"`
	SeenBefore *string `json:"seen_before,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	Status *string `json:"status,omitempty"`
	UserId *[]any `json:"user_id,omitempty"`
}

// RegistrationCreateData is the typed request payload for Registration.CreateTyped.
type RegistrationCreateData struct {
	AccountId string `json:"account_id"`
	Id []any `json:"id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Success bool `json:"success"`
}

// RegistrationRemoveMatch is the typed request payload for Registration.RemoveTyped.
type RegistrationRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Rule is the typed data model for the rule entity.
type Rule struct {
}

// RuleRemoveMatch is the typed request payload for Rule.RemoveTyped.
type RuleRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// TeamsDevicesApiResponseSingle is the typed data model for the teams_devices_api_response_single entity.
type TeamsDevicesApiResponseSingle struct {
}

// TeamsDevicesApiResponseSingleCreateData is the typed request payload for TeamsDevicesApiResponseSingle.CreateTyped.
type TeamsDevicesApiResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
}

// TeamsDevicesComponentsSchemasResponseCollection is the typed data model for the teams_devices_components_schemas_response_collection entity.
type TeamsDevicesComponentsSchemasResponseCollection struct {
}

// TeamsDevicesComponentsSchemasResponseCollectionListMatch is the typed request payload for TeamsDevicesComponentsSchemasResponseCollection.ListTyped.
type TeamsDevicesComponentsSchemasResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
}

// TeamsDevicesComponentsSchemasResponseCollectionRemoveMatch is the typed request payload for TeamsDevicesComponentsSchemasResponseCollection.RemoveTyped.
type TeamsDevicesComponentsSchemasResponseCollectionRemoveMatch struct {
	AccountId string `json:"account_id"`
	NetworkId string `json:"network_id"`
}

// TeamsDevicesComponentsSchemasSingle is the typed data model for the teams_devices_components_schemas_single entity.
type TeamsDevicesComponentsSchemasSingle struct {
}

// TeamsDevicesComponentsSchemasSingleLoadMatch is the typed request payload for TeamsDevicesComponentsSchemasSingle.LoadTyped.
type TeamsDevicesComponentsSchemasSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	NetworkId string `json:"network_id"`
}

// TeamsDevicesComponentsSchemasSingleCreateData is the typed request payload for TeamsDevicesComponentsSchemasSingle.CreateTyped.
type TeamsDevicesComponentsSchemasSingleCreateData struct {
	AccountId string `json:"account_id"`
	Config map[string]any `json:"config"`
	Name string `json:"name"`
	Result *map[string]any `json:"result,omitempty"`
	Type string `json:"type"`
}

// TeamsDevicesComponentsSchemasSingleUpdateData is the typed request payload for TeamsDevicesComponentsSchemasSingle.UpdateTyped.
type TeamsDevicesComponentsSchemasSingleUpdateData struct {
	AccountId string `json:"account_id"`
	NetworkId string `json:"network_id"`
	Config *map[string]any `json:"config,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Type *string `json:"type,omitempty"`
}

// TeamsDevicesDefaultDeviceSetting is the typed data model for the teams_devices_default_device_setting entity.
type TeamsDevicesDefaultDeviceSetting struct {
}

// TeamsDevicesDefaultDeviceSettingLoadMatch is the typed request payload for TeamsDevicesDefaultDeviceSetting.LoadTyped.
type TeamsDevicesDefaultDeviceSettingLoadMatch struct {
	AccountId string `json:"account_id"`
}

// TeamsDevicesDefaultDeviceSettingUpdateData is the typed request payload for TeamsDevicesDefaultDeviceSetting.UpdateTyped.
type TeamsDevicesDefaultDeviceSettingUpdateData struct {
	AccountId string `json:"account_id"`
	AllowModeSwitch *bool `json:"allow_mode_switch,omitempty"`
	AllowUpdates *bool `json:"allow_updates,omitempty"`
	AllowedToLeave *bool `json:"allowed_to_leave,omitempty"`
	AutoConnect *float64 `json:"auto_connect,omitempty"`
	CaptivePortal *float64 `json:"captive_portal,omitempty"`
	DisableAutoFallback *bool `json:"disable_auto_fallback,omitempty"`
	DnsSearchSuffixes *[]any `json:"dns_search_suffixes,omitempty"`
	Exclude *[]any `json:"exclude,omitempty"`
	ExcludeOfficeIps *bool `json:"exclude_office_ips,omitempty"`
	GlobalAcceleration *map[string]any `json:"global_acceleration,omitempty"`
	Include *[]any `json:"include,omitempty"`
	LanAllowMinutes *float64 `json:"lan_allow_minutes,omitempty"`
	LanAllowSubnetSize *float64 `json:"lan_allow_subnet_size,omitempty"`
	RegisterInterfaceIpWithDns *bool `json:"register_interface_ip_with_dns,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	SccmVpnBoundarySupport *bool `json:"sccm_vpn_boundary_support,omitempty"`
	ServiceModeV2 *map[string]any `json:"service_mode_v2,omitempty"`
	SupportUrl *string `json:"support_url,omitempty"`
	SwitchLocked *bool `json:"switch_locked,omitempty"`
	TunnelProtocol *string `json:"tunnel_protocol,omitempty"`
	UninstallProtection *bool `json:"uninstall_protection,omitempty"`
	VirtualNetworks *map[string]any `json:"virtual_networks,omitempty"`
}

// TeamsDevicesDevice is the typed data model for the teams_devices_device entity.
type TeamsDevicesDevice struct {
}

// TeamsDevicesDeviceLoadMatch is the typed request payload for TeamsDevicesDevice.LoadTyped.
type TeamsDevicesDeviceLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// TeamsDevicesDeviceListMatch is the typed request payload for TeamsDevicesDevice.ListTyped.
type TeamsDevicesDeviceListMatch struct {
	AccountId string `json:"account_id"`
}

// TeamsDevicesDeviceSetting is the typed data model for the teams_devices_device_setting entity.
type TeamsDevicesDeviceSetting struct {
}

// TeamsDevicesDeviceSettingLoadMatch is the typed request payload for TeamsDevicesDeviceSetting.LoadTyped.
type TeamsDevicesDeviceSettingLoadMatch struct {
	AccountId string `json:"account_id"`
	PolicyId string `json:"policy_id"`
}

// TeamsDevicesDeviceSettingCreateData is the typed request payload for TeamsDevicesDeviceSetting.CreateTyped.
type TeamsDevicesDeviceSettingCreateData struct {
	AccountId string `json:"account_id"`
	AllowModeSwitch *bool `json:"allow_mode_switch,omitempty"`
	AllowUpdates *bool `json:"allow_updates,omitempty"`
	AllowedToLeave *bool `json:"allowed_to_leave,omitempty"`
	AutoConnect *float64 `json:"auto_connect,omitempty"`
	BrowserExtensionConfig map[string]any `json:"browser_extension_config"`
	CaptivePortal *float64 `json:"captive_portal,omitempty"`
	Default *bool `json:"default,omitempty"`
	Description *string `json:"description,omitempty"`
	DisableAutoFallback *bool `json:"disable_auto_fallback,omitempty"`
	DnsSearchSuffixes *[]any `json:"dns_search_suffixes,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Exclude *[]any `json:"exclude,omitempty"`
	ExcludeOfficeIps *bool `json:"exclude_office_ips,omitempty"`
	GlobalAcceleration map[string]any `json:"global_acceleration"`
	Include *[]any `json:"include,omitempty"`
	LanAllowMinutes *float64 `json:"lan_allow_minutes,omitempty"`
	LanAllowSubnetSize *float64 `json:"lan_allow_subnet_size,omitempty"`
	Match *string `json:"match,omitempty"`
	Name string `json:"name"`
	Precedence *float64 `json:"precedence,omitempty"`
	ProfileType *string `json:"profile_type,omitempty"`
	RegisterInterfaceIpWithDns *bool `json:"register_interface_ip_with_dns,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	SccmVpnBoundarySupport *bool `json:"sccm_vpn_boundary_support,omitempty"`
	ServiceModeV2 *map[string]any `json:"service_mode_v2,omitempty"`
	SupportUrl *string `json:"support_url,omitempty"`
	SwitchLocked *bool `json:"switch_locked,omitempty"`
	TunnelProtocol *string `json:"tunnel_protocol,omitempty"`
	UninstallProtection *bool `json:"uninstall_protection,omitempty"`
	VirtualNetworks map[string]any `json:"virtual_networks"`
}

// TeamsDevicesDeviceSettingUpdateData is the typed request payload for TeamsDevicesDeviceSetting.UpdateTyped.
type TeamsDevicesDeviceSettingUpdateData struct {
	AccountId string `json:"account_id"`
	PolicyId string `json:"policy_id"`
	AllowModeSwitch *bool `json:"allow_mode_switch,omitempty"`
	AllowUpdates *bool `json:"allow_updates,omitempty"`
	AllowedToLeave *bool `json:"allowed_to_leave,omitempty"`
	AutoConnect *float64 `json:"auto_connect,omitempty"`
	BrowserExtensionConfig *map[string]any `json:"browser_extension_config,omitempty"`
	CaptivePortal *float64 `json:"captive_portal,omitempty"`
	Default *bool `json:"default,omitempty"`
	Description *string `json:"description,omitempty"`
	DisableAutoFallback *bool `json:"disable_auto_fallback,omitempty"`
	DnsSearchSuffixes *[]any `json:"dns_search_suffixes,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Exclude *[]any `json:"exclude,omitempty"`
	ExcludeOfficeIps *bool `json:"exclude_office_ips,omitempty"`
	GlobalAcceleration *map[string]any `json:"global_acceleration,omitempty"`
	Include *[]any `json:"include,omitempty"`
	LanAllowMinutes *float64 `json:"lan_allow_minutes,omitempty"`
	LanAllowSubnetSize *float64 `json:"lan_allow_subnet_size,omitempty"`
	Match *string `json:"match,omitempty"`
	Name *string `json:"name,omitempty"`
	Precedence *float64 `json:"precedence,omitempty"`
	ProfileType *string `json:"profile_type,omitempty"`
	RegisterInterfaceIpWithDns *bool `json:"register_interface_ip_with_dns,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	SccmVpnBoundarySupport *bool `json:"sccm_vpn_boundary_support,omitempty"`
	ServiceModeV2 *map[string]any `json:"service_mode_v2,omitempty"`
	SupportUrl *string `json:"support_url,omitempty"`
	SwitchLocked *bool `json:"switch_locked,omitempty"`
	TunnelProtocol *string `json:"tunnel_protocol,omitempty"`
	UninstallProtection *bool `json:"uninstall_protection,omitempty"`
	VirtualNetworks *map[string]any `json:"virtual_networks,omitempty"`
}

// TeamsDevicesDeviceSettingsResponseCollection is the typed data model for the teams_devices_device_settings_response_collection entity.
type TeamsDevicesDeviceSettingsResponseCollection struct {
}

// TeamsDevicesDeviceSettingsResponseCollectionListMatch is the typed request payload for TeamsDevicesDeviceSettingsResponseCollection.ListTyped.
type TeamsDevicesDeviceSettingsResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	ProfileType *string `json:"profile_type,omitempty"`
}

// TeamsDevicesDeviceSettingsResponseCollectionRemoveMatch is the typed request payload for TeamsDevicesDeviceSettingsResponseCollection.RemoveTyped.
type TeamsDevicesDeviceSettingsResponseCollectionRemoveMatch struct {
	AccountId string `json:"account_id"`
	PolicyId string `json:"policy_id"`
}

// TeamsDevicesFallbackDomainResponseCollection is the typed data model for the teams_devices_fallback_domain_response_collection entity.
type TeamsDevicesFallbackDomainResponseCollection struct {
}

// TeamsDevicesFallbackDomainResponseCollectionListMatch is the typed request payload for TeamsDevicesFallbackDomainResponseCollection.ListTyped.
type TeamsDevicesFallbackDomainResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	PolicyId *string `json:"policy_id,omitempty"`
}

// TeamsDevicesFallbackDomainResponseCollectionUpdateData is the typed request payload for TeamsDevicesFallbackDomainResponseCollection.UpdateTyped.
type TeamsDevicesFallbackDomainResponseCollectionUpdateData struct {
	AccountId string `json:"account_id"`
	PolicyId *string `json:"policy_id,omitempty"`
	Result *[]any `json:"result,omitempty"`
}

// TeamsDevicesFallbackDomainResponseCollectionRemoveMatch is the typed request payload for TeamsDevicesFallbackDomainResponseCollection.RemoveTyped.
type TeamsDevicesFallbackDomainResponseCollectionRemoveMatch struct {
	AccountId string `json:"account_id"`
	PolicyId *string `json:"policy_id,omitempty"`
	ResetDefault *bool `json:"reset_default,omitempty"`
}

// TeamsDevicesGlobalWarpOverride is the typed data model for the teams_devices_global_warp_override entity.
type TeamsDevicesGlobalWarpOverride struct {
}

// TeamsDevicesGlobalWarpOverrideLoadMatch is the typed request payload for TeamsDevicesGlobalWarpOverride.LoadTyped.
type TeamsDevicesGlobalWarpOverrideLoadMatch struct {
	AccountId string `json:"account_id"`
}

// TeamsDevicesGlobalWarpOverrideCreateData is the typed request payload for TeamsDevicesGlobalWarpOverride.CreateTyped.
type TeamsDevicesGlobalWarpOverrideCreateData struct {
	AccountId string `json:"account_id"`
	Disconnect bool `json:"disconnect"`
	Justification *string `json:"justification,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// TeamsDevicesId is the typed data model for the teams_devices_id entity.
type TeamsDevicesId struct {
}

// TeamsDevicesIdRemoveMatch is the typed request payload for TeamsDevicesId.RemoveTyped.
type TeamsDevicesIdRemoveMatch struct {
	AccountId string `json:"account_id"`
	RuleId string `json:"rule_id"`
}

// TeamsDevicesOverrideCode is the typed data model for the teams_devices_override_code entity.
type TeamsDevicesOverrideCode struct {
}

// TeamsDevicesOverrideCodeLoadMatch is the typed request payload for TeamsDevicesOverrideCode.LoadTyped.
type TeamsDevicesOverrideCodeLoadMatch struct {
	AccountId string `json:"account_id"`
	DeviceId string `json:"device_id"`
}

// TeamsDevicesResponseCollection is the typed data model for the teams_devices_response_collection entity.
type TeamsDevicesResponseCollection struct {
}

// TeamsDevicesResponseCollectionListMatch is the typed request payload for TeamsDevicesResponseCollection.ListTyped.
type TeamsDevicesResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
}

// TeamsDevicesSchemasId is the typed data model for the teams_devices_schemas_id entity.
type TeamsDevicesSchemasId struct {
}

// TeamsDevicesSchemasIdRemoveMatch is the typed request payload for TeamsDevicesSchemasId.RemoveTyped.
type TeamsDevicesSchemasIdRemoveMatch struct {
	AccountId string `json:"account_id"`
	IntegrationId string `json:"integration_id"`
}

// TeamsDevicesSchemasResponseCollection is the typed data model for the teams_devices_schemas_response_collection entity.
type TeamsDevicesSchemasResponseCollection struct {
}

// TeamsDevicesSchemasResponseCollectionListMatch is the typed request payload for TeamsDevicesSchemasResponseCollection.ListTyped.
type TeamsDevicesSchemasResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
}

// TeamsDevicesSchemasSingle is the typed data model for the teams_devices_schemas_single entity.
type TeamsDevicesSchemasSingle struct {
}

// TeamsDevicesSchemasSingleLoadMatch is the typed request payload for TeamsDevicesSchemasSingle.LoadTyped.
type TeamsDevicesSchemasSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	IntegrationId string `json:"integration_id"`
}

// TeamsDevicesSchemasSingleCreateData is the typed request payload for TeamsDevicesSchemasSingle.CreateTyped.
type TeamsDevicesSchemasSingleCreateData struct {
	AccountId string `json:"account_id"`
	Config map[string]any `json:"config"`
	Interval string `json:"interval"`
	Name string `json:"name"`
	Result *map[string]any `json:"result,omitempty"`
	Type string `json:"type"`
}

// TeamsDevicesSchemasSingleUpdateData is the typed request payload for TeamsDevicesSchemasSingle.UpdateTyped.
type TeamsDevicesSchemasSingleUpdateData struct {
	AccountId string `json:"account_id"`
	IntegrationId string `json:"integration_id"`
	Config *map[string]any `json:"config,omitempty"`
	Interval *string `json:"interval,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Type *string `json:"type,omitempty"`
}

// TeamsDevicesSingle is the typed data model for the teams_devices_single entity.
type TeamsDevicesSingle struct {
}

// TeamsDevicesSingleLoadMatch is the typed request payload for TeamsDevicesSingle.LoadTyped.
type TeamsDevicesSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	RuleId string `json:"rule_id"`
}

// TeamsDevicesSingleCreateData is the typed request payload for TeamsDevicesSingle.CreateTyped.
type TeamsDevicesSingleCreateData struct {
	AccountId string `json:"account_id"`
	Description *string `json:"description,omitempty"`
	Expiration *string `json:"expiration,omitempty"`
	Input *map[string]any `json:"input,omitempty"`
	Match *[]any `json:"match,omitempty"`
	Name string `json:"name"`
	Result *map[string]any `json:"result,omitempty"`
	Schedule *string `json:"schedule,omitempty"`
	Type string `json:"type"`
}

// TeamsDevicesSingleUpdateData is the typed request payload for TeamsDevicesSingle.UpdateTyped.
type TeamsDevicesSingleUpdateData struct {
	AccountId string `json:"account_id"`
	RuleId string `json:"rule_id"`
	Description *string `json:"description,omitempty"`
	Expiration *string `json:"expiration,omitempty"`
	Input *map[string]any `json:"input,omitempty"`
	Match *[]any `json:"match,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Schedule *string `json:"schedule,omitempty"`
	Type *string `json:"type,omitempty"`
}

// TeamsDevicesSplitTunnelIncludeResponseCollection is the typed data model for the teams_devices_split_tunnel_include_response_collection entity.
type TeamsDevicesSplitTunnelIncludeResponseCollection struct {
}

// TeamsDevicesSplitTunnelIncludeResponseCollectionListMatch is the typed request payload for TeamsDevicesSplitTunnelIncludeResponseCollection.ListTyped.
type TeamsDevicesSplitTunnelIncludeResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	PolicyId *string `json:"policy_id,omitempty"`
}

// TeamsDevicesSplitTunnelIncludeResponseCollectionUpdateData is the typed request payload for TeamsDevicesSplitTunnelIncludeResponseCollection.UpdateTyped.
type TeamsDevicesSplitTunnelIncludeResponseCollectionUpdateData struct {
	AccountId string `json:"account_id"`
	PolicyId *string `json:"policy_id,omitempty"`
	Result *[]any `json:"result,omitempty"`
}

// TeamsDevicesSplitTunnelResponseCollection is the typed data model for the teams_devices_split_tunnel_response_collection entity.
type TeamsDevicesSplitTunnelResponseCollection struct {
}

// TeamsDevicesSplitTunnelResponseCollectionListMatch is the typed request payload for TeamsDevicesSplitTunnelResponseCollection.ListTyped.
type TeamsDevicesSplitTunnelResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	PolicyId *string `json:"policy_id,omitempty"`
}

// TeamsDevicesSplitTunnelResponseCollectionUpdateData is the typed request payload for TeamsDevicesSplitTunnelResponseCollection.UpdateTyped.
type TeamsDevicesSplitTunnelResponseCollectionUpdateData struct {
	AccountId string `json:"account_id"`
	PolicyId *string `json:"policy_id,omitempty"`
	Result *[]any `json:"result,omitempty"`
}

// TeamsDevicesSplitTunnelResponseCollectionRemoveMatch is the typed request payload for TeamsDevicesSplitTunnelResponseCollection.RemoveTyped.
type TeamsDevicesSplitTunnelResponseCollectionRemoveMatch struct {
	AccountId string `json:"account_id"`
	PolicyId *string `json:"policy_id,omitempty"`
	ResetDefault *bool `json:"reset_default,omitempty"`
}

// TeamsDevicesZeroTrustAccountDeviceSetting is the typed data model for the teams_devices_zero_trust_account_device_setting entity.
type TeamsDevicesZeroTrustAccountDeviceSetting struct {
}

// TeamsDevicesZeroTrustAccountDeviceSettingLoadMatch is the typed request payload for TeamsDevicesZeroTrustAccountDeviceSetting.LoadTyped.
type TeamsDevicesZeroTrustAccountDeviceSettingLoadMatch struct {
	AccountId string `json:"account_id"`
}

// TeamsDevicesZeroTrustAccountDeviceSettingUpdateData is the typed request payload for TeamsDevicesZeroTrustAccountDeviceSetting.UpdateTyped.
type TeamsDevicesZeroTrustAccountDeviceSettingUpdateData struct {
	AccountId string `json:"account_id"`
	DisableForTime *float64 `json:"disable_for_time,omitempty"`
	ExternalEmergencySignalEnabled *bool `json:"external_emergency_signal_enabled,omitempty"`
	ExternalEmergencySignalFingerprint *string `json:"external_emergency_signal_fingerprint,omitempty"`
	ExternalEmergencySignalInterval *string `json:"external_emergency_signal_interval,omitempty"`
	ExternalEmergencySignalUrl *string `json:"external_emergency_signal_url,omitempty"`
	GatewayProxyEnabled *bool `json:"gateway_proxy_enabled,omitempty"`
	GatewayUdpProxyEnabled *bool `json:"gateway_udp_proxy_enabled,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	RootCertificateInstallationEnabled *bool `json:"root_certificate_installation_enabled,omitempty"`
	UseZtVirtualIp *bool `json:"use_zt_virtual_ip,omitempty"`
}

// TeamsDevicesZeroTrustAccountDeviceSettingRemoveMatch is the typed request payload for TeamsDevicesZeroTrustAccountDeviceSetting.RemoveTyped.
type TeamsDevicesZeroTrustAccountDeviceSettingRemoveMatch struct {
	AccountId string `json:"account_id"`
}

// Tunnel is the typed data model for the tunnel entity.
type Tunnel struct {
}

// TunnelListMatch is the typed request payload for Tunnel.ListTyped.
type TunnelListMatch struct {
	AccountId string `json:"account_id"`
	ExcludePrefix *string `json:"exclude_prefix,omitempty"`
	ExistedAt *string `json:"existed_at,omitempty"`
	IncludePrefix *string `json:"include_prefix,omitempty"`
	IsDeleted *bool `json:"is_deleted,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
	TunType *[]any `json:"tun_type,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	WasActiveAt *string `json:"was_active_at,omitempty"`
	WasInactiveAt *string `json:"was_inactive_at,omitempty"`
}

// TunnelCfdTunnelResponseCollection is the typed data model for the tunnel_cfd_tunnel_response_collection entity.
type TunnelCfdTunnelResponseCollection struct {
}

// TunnelCfdTunnelResponseCollectionListMatch is the typed request payload for TunnelCfdTunnelResponseCollection.ListTyped.
type TunnelCfdTunnelResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	ExcludePrefix *string `json:"exclude_prefix,omitempty"`
	ExistedAt *string `json:"existed_at,omitempty"`
	IncludePrefix *string `json:"include_prefix,omitempty"`
	IsDeleted *bool `json:"is_deleted,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	WasActiveAt *string `json:"was_active_at,omitempty"`
	WasInactiveAt *string `json:"was_inactive_at,omitempty"`
}

// TunnelCfdTunnelResponseSingle is the typed data model for the tunnel_cfd_tunnel_response_single entity.
type TunnelCfdTunnelResponseSingle struct {
}

// TunnelCfdTunnelResponseSingleLoadMatch is the typed request payload for TunnelCfdTunnelResponseSingle.LoadTyped.
type TunnelCfdTunnelResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	TunnelId string `json:"tunnel_id"`
}

// TunnelCfdTunnelResponseSingleCreateData is the typed request payload for TunnelCfdTunnelResponseSingle.CreateTyped.
type TunnelCfdTunnelResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	ConfigSrc *string `json:"config_src,omitempty"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Name string `json:"name"`
	Result string `json:"result"`
	Success bool `json:"success"`
	TunnelSecret *string `json:"tunnel_secret,omitempty"`
}

// TunnelCfdTunnelResponseSingleUpdateData is the typed request payload for TunnelCfdTunnelResponseSingle.UpdateTyped.
type TunnelCfdTunnelResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	TunnelId string `json:"tunnel_id"`
	ConfigSrc *string `json:"config_src,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *string `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	TunnelSecret *string `json:"tunnel_secret,omitempty"`
}

// TunnelCfdTunnelResponseSingleRemoveMatch is the typed request payload for TunnelCfdTunnelResponseSingle.RemoveTyped.
type TunnelCfdTunnelResponseSingleRemoveMatch struct {
	AccountId string `json:"account_id"`
	TunnelId string `json:"tunnel_id"`
}

// TunnelConfiguration is the typed data model for the tunnel_configuration entity.
type TunnelConfiguration struct {
}

// TunnelConfigurationLoadMatch is the typed request payload for TunnelConfiguration.LoadTyped.
type TunnelConfigurationLoadMatch struct {
	AccountId string `json:"account_id"`
	CfdTunnelId string `json:"cfd_tunnel_id"`
}

// TunnelConfigurationUpdateData is the typed request payload for TunnelConfiguration.UpdateTyped.
type TunnelConfigurationUpdateData struct {
	AccountId string `json:"account_id"`
	CfdTunnelId string `json:"cfd_tunnel_id"`
	Config *map[string]any `json:"config,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// TunnelEmpty is the typed data model for the tunnel_empty entity.
type TunnelEmpty struct {
}

// TunnelEmptyUpdateData is the typed request payload for TunnelEmpty.UpdateTyped.
type TunnelEmptyUpdateData struct {
	AccountId string `json:"account_id"`
	WarpConnectorId string `json:"warp_connector_id"`
	ClientId *string `json:"client_id,omitempty"`
}

// TunnelEmptyRemoveMatch is the typed request payload for TunnelEmpty.RemoveTyped.
type TunnelEmptyRemoveMatch struct {
	AccountId string `json:"account_id"`
	CfdTunnelId string `json:"cfd_tunnel_id"`
	ClientId *string `json:"client_id,omitempty"`
}

// TunnelHostnameRouteResponseCollection is the typed data model for the tunnel_hostname_route_response_collection entity.
type TunnelHostnameRouteResponseCollection struct {
}

// TunnelHostnameRouteResponseCollectionListMatch is the typed request payload for TunnelHostnameRouteResponseCollection.ListTyped.
type TunnelHostnameRouteResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	Comment *string `json:"comment,omitempty"`
	ExistedAt *string `json:"existed_at,omitempty"`
	Hostname *string `json:"hostname,omitempty"`
	Id *string `json:"id,omitempty"`
	IsDeleted *bool `json:"is_deleted,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	TunnelId *string `json:"tunnel_id,omitempty"`
}

// TunnelHostnameRouteResponseSingle is the typed data model for the tunnel_hostname_route_response_single entity.
type TunnelHostnameRouteResponseSingle struct {
}

// TunnelHostnameRouteResponseSingleLoadMatch is the typed request payload for TunnelHostnameRouteResponseSingle.LoadTyped.
type TunnelHostnameRouteResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	HostnameRouteId string `json:"hostname_route_id"`
}

// TunnelHostnameRouteResponseSingleCreateData is the typed request payload for TunnelHostnameRouteResponseSingle.CreateTyped.
type TunnelHostnameRouteResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	Comment *string `json:"comment,omitempty"`
	Errors []any `json:"errors"`
	Hostname *string `json:"hostname,omitempty"`
	Messages []any `json:"messages"`
	Result string `json:"result"`
	Success bool `json:"success"`
	TunnelId *string `json:"tunnel_id,omitempty"`
}

// TunnelHostnameRouteResponseSingleUpdateData is the typed request payload for TunnelHostnameRouteResponseSingle.UpdateTyped.
type TunnelHostnameRouteResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	HostnameRouteId string `json:"hostname_route_id"`
	Comment *string `json:"comment,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Hostname *string `json:"hostname,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *string `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	TunnelId *string `json:"tunnel_id,omitempty"`
}

// TunnelHostnameRouteResponseSingleRemoveMatch is the typed request payload for TunnelHostnameRouteResponseSingle.RemoveTyped.
type TunnelHostnameRouteResponseSingleRemoveMatch struct {
	AccountId string `json:"account_id"`
	HostnameRouteId string `json:"hostname_route_id"`
}

// TunnelMeshConfigurationResponseSingle is the typed data model for the tunnel_mesh_configuration_response_single entity.
type TunnelMeshConfigurationResponseSingle struct {
}

// TunnelMeshConfigurationResponseSingleLoadMatch is the typed request payload for TunnelMeshConfigurationResponseSingle.LoadTyped.
type TunnelMeshConfigurationResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	WarpConnectorId string `json:"warp_connector_id"`
}

// TunnelMeshConfigurationResponseSingleUpdateData is the typed request payload for TunnelMeshConfigurationResponseSingle.UpdateTyped.
type TunnelMeshConfigurationResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	WarpConnectorId string `json:"warp_connector_id"`
	Config *map[string]any `json:"config,omitempty"`
	HaMode *string `json:"ha_mode,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// TunnelRouteResponseSingle is the typed data model for the tunnel_route_response_single entity.
type TunnelRouteResponseSingle struct {
}

// TunnelRouteResponseSingleLoadMatch is the typed request payload for TunnelRouteResponseSingle.LoadTyped.
type TunnelRouteResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	RouteId string `json:"route_id"`
}

// TunnelRouteResponseSingleCreateData is the typed request payload for TunnelRouteResponseSingle.CreateTyped.
type TunnelRouteResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	IpNetworkEncoded *string `json:"ip_network_encoded,omitempty"`
	Comment *string `json:"comment,omitempty"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Network string `json:"network"`
	Result string `json:"result"`
	Success bool `json:"success"`
	TunnelId string `json:"tunnel_id"`
	VirtualNetworkId *string `json:"virtual_network_id,omitempty"`
}

// TunnelRouteResponseSingleUpdateData is the typed request payload for TunnelRouteResponseSingle.UpdateTyped.
type TunnelRouteResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	IpNetworkEncoded *string `json:"ip_network_encoded,omitempty"`
	RouteId *string `json:"route_id,omitempty"`
	Comment *string `json:"comment,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Network *string `json:"network,omitempty"`
	Result *string `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	TunnelId *string `json:"tunnel_id,omitempty"`
	VirtualNetworkId *string `json:"virtual_network_id,omitempty"`
}

// TunnelRouteResponseSingleRemoveMatch is the typed request payload for TunnelRouteResponseSingle.RemoveTyped.
type TunnelRouteResponseSingleRemoveMatch struct {
	AccountId string `json:"account_id"`
	IpNetworkEncoded *string `json:"ip_network_encoded,omitempty"`
	TunType *string `json:"tun_type,omitempty"`
	TunnelId *string `json:"tunnel_id,omitempty"`
	VirtualNetworkId *string `json:"virtual_network_id,omitempty"`
	RouteId *string `json:"route_id,omitempty"`
}

// TunnelSubnetResponseCollection is the typed data model for the tunnel_subnet_response_collection entity.
type TunnelSubnetResponseCollection struct {
}

// TunnelSubnetResponseCollectionListMatch is the typed request payload for TunnelSubnetResponseCollection.ListTyped.
type TunnelSubnetResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	AddressFamily *string `json:"address_family,omitempty"`
	Comment *string `json:"comment,omitempty"`
	ExistedAt *string `json:"existed_at,omitempty"`
	IsDefaultNetwork *bool `json:"is_default_network,omitempty"`
	IsDeleted *bool `json:"is_deleted,omitempty"`
	Name *string `json:"name,omitempty"`
	Network *any `json:"network,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	SubnetType *string `json:"subnet_type,omitempty"`
}

// TunnelSubnetResponseSingle is the typed data model for the tunnel_subnet_response_single entity.
type TunnelSubnetResponseSingle struct {
}

// TunnelSubnetResponseSingleLoadMatch is the typed request payload for TunnelSubnetResponseSingle.LoadTyped.
type TunnelSubnetResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	AddressFamily string `json:"address_family"`
}

// TunnelSubnetResponseSingleCreateData is the typed request payload for TunnelSubnetResponseSingle.CreateTyped.
type TunnelSubnetResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	Comment *string `json:"comment,omitempty"`
	Errors []any `json:"errors"`
	IsDefaultNetwork *bool `json:"is_default_network,omitempty"`
	Messages []any `json:"messages"`
	Name string `json:"name"`
	Network string `json:"network"`
	Result string `json:"result"`
	Success bool `json:"success"`
}

// TunnelSubnetResponseSingleUpdateData is the typed request payload for TunnelSubnetResponseSingle.UpdateTyped.
type TunnelSubnetResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	AddressFamily string `json:"address_family"`
	Comment *string `json:"comment,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	IsDefaultNetwork *bool `json:"is_default_network,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	Network *string `json:"network,omitempty"`
	Result *string `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// TunnelSubnetResponseSingleNullable is the typed data model for the tunnel_subnet_response_single_nullable entity.
type TunnelSubnetResponseSingleNullable struct {
}

// TunnelSubnetResponseSingleNullableRemoveMatch is the typed request payload for TunnelSubnetResponseSingleNullable.RemoveTyped.
type TunnelSubnetResponseSingleNullableRemoveMatch struct {
	AccountId string `json:"account_id"`
	SubnetId string `json:"subnet_id"`
}

// TunnelTeamnetResponseCollection is the typed data model for the tunnel_teamnet_response_collection entity.
type TunnelTeamnetResponseCollection struct {
}

// TunnelTeamnetResponseCollectionListMatch is the typed request payload for TunnelTeamnetResponseCollection.ListTyped.
type TunnelTeamnetResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	Comment *string `json:"comment,omitempty"`
	ExistedAt *string `json:"existed_at,omitempty"`
	IsDeleted *bool `json:"is_deleted,omitempty"`
	NetworkSubset *any `json:"network_subset,omitempty"`
	NetworkSuperset *any `json:"network_superset,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	RouteId *string `json:"route_id,omitempty"`
	TunType *[]any `json:"tun_type,omitempty"`
	TunnelId *string `json:"tunnel_id,omitempty"`
	VirtualNetworkId *string `json:"virtual_network_id,omitempty"`
}

// TunnelTeamnetResponseSingle is the typed data model for the tunnel_teamnet_response_single entity.
type TunnelTeamnetResponseSingle struct {
}

// TunnelTeamnetResponseSingleLoadMatch is the typed request payload for TunnelTeamnetResponseSingle.LoadTyped.
type TunnelTeamnetResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	Ip string `json:"ip"`
	DefaultVirtualNetworkFallback *bool `json:"default_virtual_network_fallback,omitempty"`
	VirtualNetworkId *string `json:"virtual_network_id,omitempty"`
}

// TunnelTunnelClient is the typed data model for the tunnel_tunnel_client entity.
type TunnelTunnelClient struct {
}

// TunnelTunnelClientLoadMatch is the typed request payload for TunnelTunnelClient.LoadTyped.
type TunnelTunnelClientLoadMatch struct {
	AccountId string `json:"account_id"`
	CfdTunnelId string `json:"cfd_tunnel_id"`
	ConnectorId string `json:"connector_id"`
}

// TunnelTunnelConnection is the typed data model for the tunnel_tunnel_connection entity.
type TunnelTunnelConnection struct {
}

// TunnelTunnelConnectionListMatch is the typed request payload for TunnelTunnelConnection.ListTyped.
type TunnelTunnelConnectionListMatch struct {
	AccountId string `json:"account_id"`
	CfdTunnelId string `json:"cfd_tunnel_id"`
}

// TunnelTunnelResponseToken is the typed data model for the tunnel_tunnel_response_token entity.
type TunnelTunnelResponseToken struct {
}

// TunnelTunnelResponseTokenListMatch is the typed request payload for TunnelTunnelResponseToken.ListTyped.
type TunnelTunnelResponseTokenListMatch struct {
	AccountId string `json:"account_id"`
	CfdTunnelId *string `json:"cfd_tunnel_id,omitempty"`
	WarpConnectorId *string `json:"warp_connector_id,omitempty"`
}

// TunnelTunnelResponseTokenCreateData is the typed request payload for TunnelTunnelResponseToken.CreateTyped.
type TunnelTunnelResponseTokenCreateData struct {
	AccountId string `json:"account_id"`
	CfdTunnelId string `json:"cfd_tunnel_id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Resources []any `json:"resources"`
	Result string `json:"result"`
	Success bool `json:"success"`
}

// TunnelTunnelWarpConnectorClient is the typed data model for the tunnel_tunnel_warp_connector_client entity.
type TunnelTunnelWarpConnectorClient struct {
}

// TunnelTunnelWarpConnectorClientLoadMatch is the typed request payload for TunnelTunnelWarpConnectorClient.LoadTyped.
type TunnelTunnelWarpConnectorClientLoadMatch struct {
	AccountId string `json:"account_id"`
	ConnectorId string `json:"connector_id"`
	WarpConnectorId string `json:"warp_connector_id"`
}

// TunnelTunnelWarpConnectorConnection is the typed data model for the tunnel_tunnel_warp_connector_connection entity.
type TunnelTunnelWarpConnectorConnection struct {
}

// TunnelTunnelWarpConnectorConnectionListMatch is the typed request payload for TunnelTunnelWarpConnectorConnection.ListTyped.
type TunnelTunnelWarpConnectorConnectionListMatch struct {
	AccountId string `json:"account_id"`
	WarpConnectorId string `json:"warp_connector_id"`
}

// TunnelVnetResponseCollection is the typed data model for the tunnel_vnet_response_collection entity.
type TunnelVnetResponseCollection struct {
}

// TunnelVnetResponseCollectionListMatch is the typed request payload for TunnelVnetResponseCollection.ListTyped.
type TunnelVnetResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	IsDefault *bool `json:"is_default,omitempty"`
	IsDefaultNetwork *bool `json:"is_default_network,omitempty"`
	IsDeleted *bool `json:"is_deleted,omitempty"`
	Name *string `json:"name,omitempty"`
}

// TunnelVnetResponseSingle is the typed data model for the tunnel_vnet_response_single entity.
type TunnelVnetResponseSingle struct {
}

// TunnelVnetResponseSingleLoadMatch is the typed request payload for TunnelVnetResponseSingle.LoadTyped.
type TunnelVnetResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	VirtualNetworkId string `json:"virtual_network_id"`
}

// TunnelVnetResponseSingleCreateData is the typed request payload for TunnelVnetResponseSingle.CreateTyped.
type TunnelVnetResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	Comment *string `json:"comment,omitempty"`
	IsDefault *bool `json:"is_default,omitempty"`
	IsDefaultNetwork *bool `json:"is_default_network,omitempty"`
	Name *string `json:"name,omitempty"`
}

// TunnelVnetResponseSingleUpdateData is the typed request payload for TunnelVnetResponseSingle.UpdateTyped.
type TunnelVnetResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	VirtualNetworkId string `json:"virtual_network_id"`
	Comment *string `json:"comment,omitempty"`
	IsDefault *bool `json:"is_default,omitempty"`
	IsDefaultNetwork *bool `json:"is_default_network,omitempty"`
	Name *string `json:"name,omitempty"`
}

// TunnelVnetResponseSingleRemoveMatch is the typed request payload for TunnelVnetResponseSingle.RemoveTyped.
type TunnelVnetResponseSingleRemoveMatch struct {
	AccountId string `json:"account_id"`
	VirtualNetworkId string `json:"virtual_network_id"`
}

// TunnelWarpConnectorResponseCollection is the typed data model for the tunnel_warp_connector_response_collection entity.
type TunnelWarpConnectorResponseCollection struct {
}

// TunnelWarpConnectorResponseCollectionListMatch is the typed request payload for TunnelWarpConnectorResponseCollection.ListTyped.
type TunnelWarpConnectorResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	ExcludePrefix *string `json:"exclude_prefix,omitempty"`
	ExistedAt *string `json:"existed_at,omitempty"`
	IncludePrefix *string `json:"include_prefix,omitempty"`
	IsDeleted *bool `json:"is_deleted,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
	WasActiveAt *string `json:"was_active_at,omitempty"`
	WasInactiveAt *string `json:"was_inactive_at,omitempty"`
}

// TunnelWarpConnectorResponseSingle is the typed data model for the tunnel_warp_connector_response_single entity.
type TunnelWarpConnectorResponseSingle struct {
}

// TunnelWarpConnectorResponseSingleLoadMatch is the typed request payload for TunnelWarpConnectorResponseSingle.LoadTyped.
type TunnelWarpConnectorResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	TunnelId string `json:"tunnel_id"`
}

// TunnelWarpConnectorResponseSingleCreateData is the typed request payload for TunnelWarpConnectorResponseSingle.CreateTyped.
type TunnelWarpConnectorResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Ha *bool `json:"ha,omitempty"`
	Messages []any `json:"messages"`
	Name string `json:"name"`
	Result string `json:"result"`
	Success bool `json:"success"`
	TunnelSecret *string `json:"tunnel_secret,omitempty"`
}

// TunnelWarpConnectorResponseSingleUpdateData is the typed request payload for TunnelWarpConnectorResponseSingle.UpdateTyped.
type TunnelWarpConnectorResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	TunnelId string `json:"tunnel_id"`
	Errors *[]any `json:"errors,omitempty"`
	Ha *bool `json:"ha,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *string `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	TunnelSecret *string `json:"tunnel_secret,omitempty"`
}

// TunnelWarpConnectorResponseSingleRemoveMatch is the typed request payload for TunnelWarpConnectorResponseSingle.RemoveTyped.
type TunnelWarpConnectorResponseSingleRemoveMatch struct {
	AccountId string `json:"account_id"`
	TunnelId string `json:"tunnel_id"`
}

// TunnelZeroTrustConnectivitySetting is the typed data model for the tunnel_zero_trust_connectivity_setting entity.
type TunnelZeroTrustConnectivitySetting struct {
}

// TunnelZeroTrustConnectivitySettingListMatch is the typed request payload for TunnelZeroTrustConnectivitySetting.ListTyped.
type TunnelZeroTrustConnectivitySettingListMatch struct {
	AccountId string `json:"account_id"`
}

// TunnelZeroTrustConnectivitySettingUpdateData is the typed request payload for TunnelZeroTrustConnectivitySetting.UpdateTyped.
type TunnelZeroTrustConnectivitySettingUpdateData struct {
	AccountId string `json:"account_id"`
	Errors *[]any `json:"errors,omitempty"`
	IcmpProxyEnabled *bool `json:"icmp_proxy_enabled,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	OfframpWarpEnabled *bool `json:"offramp_warp_enabled,omitempty"`
	Result *string `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// Warp is the typed data model for the warp entity.
type Warp struct {
}

// WarpLoadMatch is the typed request payload for Warp.LoadTyped.
type WarpLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// WarpUpdateData is the typed request payload for Warp.UpdateTyped.
type WarpUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Comment *string `json:"comment,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	IsDefaultNetwork *bool `json:"is_default_network,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	Network *string `json:"network,omitempty"`
	Result *string `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// WarpChangeEvent is the typed data model for the warp_change_event entity.
type WarpChangeEvent struct {
}

// WarpChangeEventListMatch is the typed request payload for WarpChangeEvent.ListTyped.
type WarpChangeEventListMatch struct {
	AccountId string `json:"account_id"`
	AccountName *string `json:"account_name,omitempty"`
	ConfigName *string `json:"config_name,omitempty"`
	From string `json:"from"`
	Page float64 `json:"page"`
	PerPage float64 `json:"per_page"`
	SortOrder *string `json:"sort_order,omitempty"`
	To string `json:"to"`
	Toggle *string `json:"toggle,omitempty"`
	Type *string `json:"type,omitempty"`
}

// WarpTeamsDeviceApiOther is the typed data model for the warp_teams_device_api_other entity.
type WarpTeamsDeviceApiOther struct {
}

// WarpTeamsDeviceApiOtherListMatch is the typed request payload for WarpTeamsDeviceApiOther.ListTyped.
type WarpTeamsDeviceApiOtherListMatch struct {
	AccountId string `json:"account_id"`
	RegistrationId string `json:"registration_id"`
}

// ZeroTrustGatewayApplicationsReviewStatus is the typed data model for the zero_trust_gateway_applications_review_status entity.
type ZeroTrustGatewayApplicationsReviewStatus struct {
}

// ZeroTrustGatewayApplicationsReviewStatusLoadMatch is the typed request payload for ZeroTrustGatewayApplicationsReviewStatus.LoadTyped.
type ZeroTrustGatewayApplicationsReviewStatusLoadMatch struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustGatewayApplicationsReviewStatusUpdateData is the typed request payload for ZeroTrustGatewayApplicationsReviewStatus.UpdateTyped.
type ZeroTrustGatewayApplicationsReviewStatusUpdateData struct {
	AccountId string `json:"account_id"`
	ApprovedApps *[]any `json:"approved_apps,omitempty"`
	InReviewApps *[]any `json:"in_review_apps,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	UnapprovedApps *[]any `json:"unapproved_apps,omitempty"`
}

// ZeroTrustGatewayCsvOperationSingle is the typed data model for the zero_trust_gateway_csv_operation_single entity.
type ZeroTrustGatewayCsvOperationSingle struct {
}

// ZeroTrustGatewayCsvOperationSingleCreateData is the typed request payload for ZeroTrustGatewayCsvOperationSingle.CreateTyped.
type ZeroTrustGatewayCsvOperationSingleCreateData struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustGatewayCustomCertificateSetting is the typed data model for the zero_trust_gateway_custom_certificate_setting entity.
type ZeroTrustGatewayCustomCertificateSetting struct {
}

// ZeroTrustGatewayCustomCertificateSettingLoadMatch is the typed request payload for ZeroTrustGatewayCustomCertificateSetting.LoadTyped.
type ZeroTrustGatewayCustomCertificateSettingLoadMatch struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustGatewayGatewayAccount is the typed data model for the zero_trust_gateway_gateway_account entity.
type ZeroTrustGatewayGatewayAccount struct {
}

// ZeroTrustGatewayGatewayAccountLoadMatch is the typed request payload for ZeroTrustGatewayGatewayAccount.LoadTyped.
type ZeroTrustGatewayGatewayAccountLoadMatch struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustGatewayGatewayAccountCreateData is the typed request payload for ZeroTrustGatewayGatewayAccount.CreateTyped.
type ZeroTrustGatewayGatewayAccountCreateData struct {
	AccountId string `json:"account_id"`
	Result *map[string]any `json:"result,omitempty"`
}

// ZeroTrustGatewayGatewayAccountConfig is the typed data model for the zero_trust_gateway_gateway_account_config entity.
type ZeroTrustGatewayGatewayAccountConfig struct {
}

// ZeroTrustGatewayGatewayAccountConfigLoadMatch is the typed request payload for ZeroTrustGatewayGatewayAccountConfig.LoadTyped.
type ZeroTrustGatewayGatewayAccountConfigLoadMatch struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustGatewayGatewayAccountConfigUpdateData is the typed request payload for ZeroTrustGatewayGatewayAccountConfig.UpdateTyped.
type ZeroTrustGatewayGatewayAccountConfigUpdateData struct {
	AccountId string `json:"account_id"`
	Result *map[string]any `json:"result,omitempty"`
	Settings *map[string]any `json:"settings,omitempty"`
}

// ZeroTrustGatewayGatewayAccountEgressCidrPairList is the typed data model for the zero_trust_gateway_gateway_account_egress_cidr_pair_list entity.
type ZeroTrustGatewayGatewayAccountEgressCidrPairList struct {
}

// ZeroTrustGatewayGatewayAccountEgressCidrPairListListMatch is the typed request payload for ZeroTrustGatewayGatewayAccountEgressCidrPairList.ListTyped.
type ZeroTrustGatewayGatewayAccountEgressCidrPairListListMatch struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustGatewayGatewayAccountLoggingSetting is the typed data model for the zero_trust_gateway_gateway_account_logging_setting entity.
type ZeroTrustGatewayGatewayAccountLoggingSetting struct {
}

// ZeroTrustGatewayGatewayAccountLoggingSettingLoadMatch is the typed request payload for ZeroTrustGatewayGatewayAccountLoggingSetting.LoadTyped.
type ZeroTrustGatewayGatewayAccountLoggingSettingLoadMatch struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustGatewayGatewayAccountLoggingSettingUpdateData is the typed request payload for ZeroTrustGatewayGatewayAccountLoggingSetting.UpdateTyped.
type ZeroTrustGatewayGatewayAccountLoggingSettingUpdateData struct {
	AccountId string `json:"account_id"`
	RedactPii *bool `json:"redact_pii,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	SettingsByRuleType *map[string]any `json:"settings_by_rule_type,omitempty"`
}

// ZeroTrustGatewayListItemResponseCollection is the typed data model for the zero_trust_gateway_list_item_response_collection entity.
type ZeroTrustGatewayListItemResponseCollection struct {
}

// ZeroTrustGatewayListItemResponseCollectionListMatch is the typed request payload for ZeroTrustGatewayListItemResponseCollection.ListTyped.
type ZeroTrustGatewayListItemResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	ListId string `json:"list_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ZeroTrustGatewayListSingle is the typed data model for the zero_trust_gateway_list_single entity.
type ZeroTrustGatewayListSingle struct {
}

// ZeroTrustGatewayListSingleLoadMatch is the typed request payload for ZeroTrustGatewayListSingle.LoadTyped.
type ZeroTrustGatewayListSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	ListId string `json:"list_id"`
}

// ZeroTrustGatewayListSingleUpdateData is the typed request payload for ZeroTrustGatewayListSingle.UpdateTyped.
type ZeroTrustGatewayListSingleUpdateData struct {
	AccountId string `json:"account_id"`
	ListId string `json:"list_id"`
	Append *[]any `json:"append,omitempty"`
	Description *string `json:"description,omitempty"`
	Items *[]any `json:"items,omitempty"`
	Name *string `json:"name,omitempty"`
	Remove *[]any `json:"remove,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// ZeroTrustGatewayResponseCollection is the typed data model for the zero_trust_gateway_response_collection entity.
type ZeroTrustGatewayResponseCollection struct {
}

// ZeroTrustGatewayResponseCollectionListMatch is the typed request payload for ZeroTrustGatewayResponseCollection.ListTyped.
type ZeroTrustGatewayResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustGatewayResponseCollection10 is the typed data model for the zero_trust_gateway_response_collection_10 entity.
type ZeroTrustGatewayResponseCollection10 struct {
}

// ZeroTrustGatewayResponseCollection10ListMatch is the typed request payload for ZeroTrustGatewayResponseCollection10.ListTyped.
type ZeroTrustGatewayResponseCollection10ListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ZeroTrustGatewayResponseCollection2 is the typed data model for the zero_trust_gateway_response_collection_2 entity.
type ZeroTrustGatewayResponseCollection2 struct {
}

// ZeroTrustGatewayResponseCollection2ListMatch is the typed request payload for ZeroTrustGatewayResponseCollection2.ListTyped.
type ZeroTrustGatewayResponseCollection2ListMatch struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustGatewayResponseCollection3 is the typed data model for the zero_trust_gateway_response_collection_3 entity.
type ZeroTrustGatewayResponseCollection3 struct {
}

// ZeroTrustGatewayResponseCollection3ListMatch is the typed request payload for ZeroTrustGatewayResponseCollection3.ListTyped.
type ZeroTrustGatewayResponseCollection3ListMatch struct {
	AccountId string `json:"account_id"`
	Direction *string `json:"direction,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Search *string `json:"search,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ZeroTrustGatewayResponseCollection4 is the typed data model for the zero_trust_gateway_response_collection_4 entity.
type ZeroTrustGatewayResponseCollection4 struct {
}

// ZeroTrustGatewayResponseCollection4ListMatch is the typed request payload for ZeroTrustGatewayResponseCollection4.ListTyped.
type ZeroTrustGatewayResponseCollection4ListMatch struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustGatewayResponseCollection5 is the typed data model for the zero_trust_gateway_response_collection_5 entity.
type ZeroTrustGatewayResponseCollection5 struct {
}

// ZeroTrustGatewayResponseCollection5ListMatch is the typed request payload for ZeroTrustGatewayResponseCollection5.ListTyped.
type ZeroTrustGatewayResponseCollection5ListMatch struct {
	AccountId string `json:"account_id"`
	Direction *string `json:"direction,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Search *string `json:"search,omitempty"`
}

// ZeroTrustGatewayResponseCollection6 is the typed data model for the zero_trust_gateway_response_collection_6 entity.
type ZeroTrustGatewayResponseCollection6 struct {
}

// ZeroTrustGatewayResponseCollection6ListMatch is the typed request payload for ZeroTrustGatewayResponseCollection6.ListTyped.
type ZeroTrustGatewayResponseCollection6ListMatch struct {
	AccountId string `json:"account_id"`
	Direction *string `json:"direction,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Search *string `json:"search,omitempty"`
}

// ZeroTrustGatewayResponseCollection6UpdateData is the typed request payload for ZeroTrustGatewayResponseCollection6.UpdateTyped.
type ZeroTrustGatewayResponseCollection6UpdateData struct {
	AccountId string `json:"account_id"`
	Result *[]any `json:"result,omitempty"`
}

// ZeroTrustGatewayResponseCollection7 is the typed data model for the zero_trust_gateway_response_collection_7 entity.
type ZeroTrustGatewayResponseCollection7 struct {
}

// ZeroTrustGatewayResponseCollection7ListMatch is the typed request payload for ZeroTrustGatewayResponseCollection7.ListTyped.
type ZeroTrustGatewayResponseCollection7ListMatch struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustGatewayResponseCollection8 is the typed data model for the zero_trust_gateway_response_collection_8 entity.
type ZeroTrustGatewayResponseCollection8 struct {
}

// ZeroTrustGatewayResponseCollection8ListMatch is the typed request payload for ZeroTrustGatewayResponseCollection8.ListTyped.
type ZeroTrustGatewayResponseCollection8ListMatch struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustGatewayResponseCollection9 is the typed data model for the zero_trust_gateway_response_collection_9 entity.
type ZeroTrustGatewayResponseCollection9 struct {
}

// ZeroTrustGatewayResponseCollection9ListMatch is the typed request payload for ZeroTrustGatewayResponseCollection9.ListTyped.
type ZeroTrustGatewayResponseCollection9ListMatch struct {
	AccountId string `json:"account_id"`
	Direction *string `json:"direction,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Search *string `json:"search,omitempty"`
}

// ZeroTrustGatewaySingle is the typed data model for the zero_trust_gateway_single entity.
type ZeroTrustGatewaySingle struct {
}

// ZeroTrustGatewaySingleLoadMatch is the typed request payload for ZeroTrustGatewaySingle.LoadTyped.
type ZeroTrustGatewaySingleLoadMatch struct {
	AccountId string `json:"account_id"`
	CertificateId string `json:"certificate_id"`
}

// ZeroTrustGatewaySingleCreateData is the typed request payload for ZeroTrustGatewaySingle.CreateTyped.
type ZeroTrustGatewaySingleCreateData struct {
	AccountId string `json:"account_id"`
	CertificateId *string `json:"certificate_id,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ValidityPeriodDays *int `json:"validity_period_days,omitempty"`
}

// ZeroTrustGatewaySingleRemoveMatch is the typed request payload for ZeroTrustGatewaySingle.RemoveTyped.
type ZeroTrustGatewaySingleRemoveMatch struct {
	AccountId string `json:"account_id"`
	CertificateId string `json:"certificate_id"`
}

// ZeroTrustGatewaySingleResponse2 is the typed data model for the zero_trust_gateway_single_response_2 entity.
type ZeroTrustGatewaySingleResponse2 struct {
}

// ZeroTrustGatewaySingleResponse2LoadMatch is the typed request payload for ZeroTrustGatewaySingleResponse2.LoadTyped.
type ZeroTrustGatewaySingleResponse2LoadMatch struct {
	AccountId string `json:"account_id"`
	OperationId string `json:"operation_id"`
}

// ZeroTrustGatewaySingleResponse3 is the typed data model for the zero_trust_gateway_single_response_3 entity.
type ZeroTrustGatewaySingleResponse3 struct {
}

// ZeroTrustGatewaySingleResponse3LoadMatch is the typed request payload for ZeroTrustGatewaySingleResponse3.LoadTyped.
type ZeroTrustGatewaySingleResponse3LoadMatch struct {
	AccountId string `json:"account_id"`
	LocationId string `json:"location_id"`
}

// ZeroTrustGatewaySingleResponse3CreateData is the typed request payload for ZeroTrustGatewaySingleResponse3.CreateTyped.
type ZeroTrustGatewaySingleResponse3CreateData struct {
	AccountId string `json:"account_id"`
	ClientDefault *bool `json:"client_default,omitempty"`
	DnsDestinationIpsId *string `json:"dns_destination_ips_id,omitempty"`
	EcsSupport *bool `json:"ecs_support,omitempty"`
	Endpoints map[string]any `json:"endpoints"`
	MaxTtl map[string]any `json:"max_ttl"`
	Name string `json:"name"`
	Networks *[]any `json:"networks,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// ZeroTrustGatewaySingleResponse3UpdateData is the typed request payload for ZeroTrustGatewaySingleResponse3.UpdateTyped.
type ZeroTrustGatewaySingleResponse3UpdateData struct {
	AccountId string `json:"account_id"`
	LocationId string `json:"location_id"`
	ClientDefault *bool `json:"client_default,omitempty"`
	DnsDestinationIpsId *string `json:"dns_destination_ips_id,omitempty"`
	EcsSupport *bool `json:"ecs_support,omitempty"`
	Endpoints *map[string]any `json:"endpoints,omitempty"`
	MaxTtl *map[string]any `json:"max_ttl,omitempty"`
	Name *string `json:"name,omitempty"`
	Networks *[]any `json:"networks,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// ZeroTrustGatewaySingleResponse4 is the typed data model for the zero_trust_gateway_single_response_4 entity.
type ZeroTrustGatewaySingleResponse4 struct {
}

// ZeroTrustGatewaySingleResponse4LoadMatch is the typed request payload for ZeroTrustGatewaySingleResponse4.LoadTyped.
type ZeroTrustGatewaySingleResponse4LoadMatch struct {
	AccountId string `json:"account_id"`
	RuleId string `json:"rule_id"`
}

// ZeroTrustGatewaySingleResponse4CreateData is the typed request payload for ZeroTrustGatewaySingleResponse4.CreateTyped.
type ZeroTrustGatewaySingleResponse4CreateData struct {
	AccountId string `json:"account_id"`
	RuleId *string `json:"rule_id,omitempty"`
	Action string `json:"action"`
	Description *string `json:"description,omitempty"`
	DevicePosture *string `json:"device_posture,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Expiration map[string]any `json:"expiration"`
	Filters *[]any `json:"filters,omitempty"`
	Identity *string `json:"identity,omitempty"`
	Name string `json:"name"`
	Precedence *int `json:"precedence,omitempty"`
	Result map[string]any `json:"result"`
	RuleSettings *map[string]any `json:"rule_settings,omitempty"`
	Schedule *map[string]any `json:"schedule,omitempty"`
	Traffic *string `json:"traffic,omitempty"`
}

// ZeroTrustGatewaySingleResponse4UpdateData is the typed request payload for ZeroTrustGatewaySingleResponse4.UpdateTyped.
type ZeroTrustGatewaySingleResponse4UpdateData struct {
	AccountId string `json:"account_id"`
	RuleId string `json:"rule_id"`
	Action *string `json:"action,omitempty"`
	Description *string `json:"description,omitempty"`
	DevicePosture *string `json:"device_posture,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Expiration *map[string]any `json:"expiration,omitempty"`
	Filters *[]any `json:"filters,omitempty"`
	Identity *string `json:"identity,omitempty"`
	Name *string `json:"name,omitempty"`
	Precedence *int `json:"precedence,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	RuleSettings *map[string]any `json:"rule_settings,omitempty"`
	Schedule *map[string]any `json:"schedule,omitempty"`
	Traffic *string `json:"traffic,omitempty"`
}

// ZeroTrustGatewaySingleResponse5 is the typed data model for the zero_trust_gateway_single_response_5 entity.
type ZeroTrustGatewaySingleResponse5 struct {
}

// ZeroTrustGatewaySingleResponse5LoadMatch is the typed request payload for ZeroTrustGatewaySingleResponse5.LoadTyped.
type ZeroTrustGatewaySingleResponse5LoadMatch struct {
	AccountId string `json:"account_id"`
	ProxyEndpointId string `json:"proxy_endpoint_id"`
}

// ZeroTrustGatewaySingleResponse5CreateData is the typed request payload for ZeroTrustGatewaySingleResponse5.CreateTyped.
type ZeroTrustGatewaySingleResponse5CreateData struct {
	AccountId string `json:"account_id"`
	Ips *[]any `json:"ips,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *any `json:"result,omitempty"`
}

// ZeroTrustGatewaySingleResponse5UpdateData is the typed request payload for ZeroTrustGatewaySingleResponse5.UpdateTyped.
type ZeroTrustGatewaySingleResponse5UpdateData struct {
	AccountId string `json:"account_id"`
	ProxyEndpointId string `json:"proxy_endpoint_id"`
	Ips *[]any `json:"ips,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *any `json:"result,omitempty"`
}

// ZeroTrustGatewaySingleResponse6 is the typed data model for the zero_trust_gateway_single_response_6 entity.
type ZeroTrustGatewaySingleResponse6 struct {
}

// ZeroTrustGatewaySingleResponse6LoadMatch is the typed request payload for ZeroTrustGatewaySingleResponse6.LoadTyped.
type ZeroTrustGatewaySingleResponse6LoadMatch struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustGatewaySingleResponse6CreateData is the typed request payload for ZeroTrustGatewaySingleResponse6.CreateTyped.
type ZeroTrustGatewaySingleResponse6CreateData struct {
	AccountId string `json:"account_id"`
	PublicKey string `json:"public_key"`
	Result *map[string]any `json:"result,omitempty"`
}

// ZeroTrustGatewaySingleResponse6UpdateData is the typed request payload for ZeroTrustGatewaySingleResponse6.UpdateTyped.
type ZeroTrustGatewaySingleResponse6UpdateData struct {
	AccountId string `json:"account_id"`
	PublicKey *string `json:"public_key,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// ZeroTrustGatewaySingleResponse7 is the typed data model for the zero_trust_gateway_single_response_7 entity.
type ZeroTrustGatewaySingleResponse7 struct {
}

// ZeroTrustGatewaySingleResponse7LoadMatch is the typed request payload for ZeroTrustGatewaySingleResponse7.LoadTyped.
type ZeroTrustGatewaySingleResponse7LoadMatch struct {
	AccountId string `json:"account_id"`
	PacfileId string `json:"pacfile_id"`
}

// ZeroTrustGatewaySingleResponse7CreateData is the typed request payload for ZeroTrustGatewaySingleResponse7.CreateTyped.
type ZeroTrustGatewaySingleResponse7CreateData struct {
	AccountId string `json:"account_id"`
	Contents string `json:"contents"`
	Description *string `json:"description,omitempty"`
	Name string `json:"name"`
	Result *map[string]any `json:"result,omitempty"`
	Slug *string `json:"slug,omitempty"`
}

// ZeroTrustGatewaySingleResponse7UpdateData is the typed request payload for ZeroTrustGatewaySingleResponse7.UpdateTyped.
type ZeroTrustGatewaySingleResponse7UpdateData struct {
	AccountId string `json:"account_id"`
	PacfileId string `json:"pacfile_id"`
	Contents *string `json:"contents,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Slug *string `json:"slug,omitempty"`
}

// ZeroTrustGatewaySingleResponseWithListItem is the typed data model for the zero_trust_gateway_single_response_with_list_item entity.
type ZeroTrustGatewaySingleResponseWithListItem struct {
}

// ZeroTrustGatewaySingleResponseWithListItemCreateData is the typed request payload for ZeroTrustGatewaySingleResponseWithListItem.CreateTyped.
type ZeroTrustGatewaySingleResponseWithListItemCreateData struct {
	AccountId string `json:"account_id"`
	Description *string `json:"description,omitempty"`
	Items *[]any `json:"items,omitempty"`
	Name string `json:"name"`
	Type string `json:"type"`
}

// ZeroTrustRiskScoring is the typed data model for the zero_trust_risk_scoring entity.
type ZeroTrustRiskScoring struct {
}

// ZeroTrustRiskScoringLoadMatch is the typed request payload for ZeroTrustRiskScoring.LoadTyped.
type ZeroTrustRiskScoringLoadMatch struct {
	AccountId string `json:"account_id"`
	UserId *string `json:"user_id,omitempty"`
}

// ZeroTrustRiskScoringCreateData is the typed request payload for ZeroTrustRiskScoring.CreateTyped.
type ZeroTrustRiskScoringCreateData struct {
	AccountId string `json:"account_id"`
	ZtRiskScoringId string `json:"zt_risk_scoring_id"`
	Behaviors map[string]any `json:"behaviors"`
	Result map[string]any `json:"result"`
}

// ZeroTrustRiskScoringUpdateData is the typed request payload for ZeroTrustRiskScoring.UpdateTyped.
type ZeroTrustRiskScoringUpdateData struct {
	AccountId string `json:"account_id"`
	Behaviors *map[string]any `json:"behaviors,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// ZeroTrustRiskScoringIntegration is the typed data model for the zero_trust_risk_scoring_integration entity.
type ZeroTrustRiskScoringIntegration struct {
}

// ZeroTrustRiskScoringIntegrationLoadMatch is the typed request payload for ZeroTrustRiskScoringIntegration.LoadTyped.
type ZeroTrustRiskScoringIntegrationLoadMatch struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	ReferenceId *string `json:"reference_id,omitempty"`
}

// ZeroTrustRiskScoringIntegrationListMatch is the typed request payload for ZeroTrustRiskScoringIntegration.ListTyped.
type ZeroTrustRiskScoringIntegrationListMatch struct {
	AccountId string `json:"account_id"`
}

// ZeroTrustRiskScoringIntegrationCreateData is the typed request payload for ZeroTrustRiskScoringIntegration.CreateTyped.
type ZeroTrustRiskScoringIntegrationCreateData struct {
	AccountId string `json:"account_id"`
	Active bool `json:"active"`
	Id *string `json:"id,omitempty"`
	IntegrationType string `json:"integration_type"`
	ReferenceId *string `json:"reference_id,omitempty"`
	Result map[string]any `json:"result"`
	TenantUrl string `json:"tenant_url"`
}

// ZeroTrustRiskScoringIntegrationUpdateData is the typed request payload for ZeroTrustRiskScoringIntegration.UpdateTyped.
type ZeroTrustRiskScoringIntegrationUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Active *bool `json:"active,omitempty"`
	IntegrationType *string `json:"integration_type,omitempty"`
	ReferenceId *string `json:"reference_id,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	TenantUrl *string `json:"tenant_url,omitempty"`
}

// ZeroTrustRiskScoringIntegrationRemoveMatch is the typed request payload for ZeroTrustRiskScoringIntegration.RemoveTyped.
type ZeroTrustRiskScoringIntegrationRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
