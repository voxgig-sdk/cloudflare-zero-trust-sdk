-- Typed models for the CloudflareZeroTrust SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class AlexandriaDeleteApplication
---@field id? string

---@class AlexandriaDeleteApplicationRemoveMatch
---@field account_id string
---@field id number

---@class AlexandriaGetApplication
---@field category_id number
---@field errors table
---@field hostnames? table
---@field human_id string
---@field id? string
---@field ip_subnets? table
---@field messages table
---@field name string
---@field port_protocols? table
---@field result table
---@field success boolean
---@field support_domains? table

---@class AlexandriaGetApplicationLoadMatch
---@field account_id string
---@field id number

---@class AlexandriaGetApplicationListMatch
---@field account_id string
---@field field? string
---@field filter? string
---@field limit? number
---@field offset? number
---@field order_by? string
---@field search? string

---@class AlexandriaGetApplicationCreateData
---@field account_id string
---@field category_id number
---@field errors table
---@field hostnames? table
---@field human_id string
---@field id? string
---@field ip_subnets? table
---@field messages table
---@field name string
---@field port_protocols? table
---@field result table
---@field success boolean
---@field support_domains? table

---@class AlexandriaGetApplicationUpdateData
---@field account_id string
---@field id number
---@field category_id? number
---@field errors? table
---@field hostnames? table
---@field human_id? string
---@field ip_subnets? table
---@field messages? table
---@field name? string
---@field port_protocols? table
---@field result? table
---@field success? boolean
---@field support_domains? table

---@class AlexandriaGetCategory
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field success boolean

---@class AlexandriaGetCategoryLoadMatch
---@field account_id string
---@field id number

---@class AlexandriaGetCategoryListMatch
---@field account_id string
---@field limit? number
---@field offset? number

---@class ClientVersion
---@field errors table
---@field messages table
---@field result table
---@field result_info table
---@field success boolean

---@class ClientVersionListMatch
---@field account_id string
---@field page? number
---@field per_page? number
---@field release_track string
---@field target_environment string

---@class Cni
---@field id? string

---@class CniRemoveMatch
---@field account_id string
---@field id string

---@class DeploymentGroup
---@field errors table
---@field id? string
---@field messages table
---@field name string
---@field policy_ids? table
---@field result table
---@field result_info table
---@field success boolean
---@field version_config table

---@class DeploymentGroupLoadMatch
---@field account_id string
---@field id string

---@class DeploymentGroupListMatch
---@field account_id string
---@field page? number
---@field per_page? number

---@class DeploymentGroupCreateData
---@field account_id string
---@field errors table
---@field id? string
---@field messages table
---@field name string
---@field policy_ids? table
---@field result table
---@field result_info table
---@field success boolean
---@field version_config table

---@class DeploymentGroupUpdateData
---@field account_id string
---@field id string
---@field errors? table
---@field messages? table
---@field name? string
---@field policy_ids? table
---@field result? table
---@field result_info? table
---@field success? boolean
---@field version_config? table

---@class DeploymentGroupRemoveMatch
---@field account_id string
---@field id string

---@class DexRemoteCommand
---@field commands table
---@field result? table

---@class DexRemoteCommandLoadMatch
---@field account_id string
---@field command_type? string
---@field device_id? string
---@field from? string
---@field page? number
---@field per_page? number
---@field status? string
---@field to? string
---@field user_email? string
---@field search? string
---@field command_id? string
---@field filename? string

---@class DexRemoteCommandCreateData
---@field account_id string
---@field commands table
---@field result? table

---@class DexRule
---@field description? string
---@field id? string
---@field match string
---@field name string
---@field result? table

---@class DexRuleLoadMatch
---@field account_id string
---@field name? string
---@field page? number
---@field per_page? number
---@field sort_by? string
---@field sort_order? string
---@field id? string

---@class DexRuleCreateData
---@field account_id string
---@field description? string
---@field id? string
---@field match string
---@field name string
---@field result? table

---@class DexRuleUpdateData
---@field account_id string
---@field id string
---@field description? string
---@field match? string
---@field name? string
---@field result? table

---@class DexRuleRemoveMatch
---@field account_id string
---@field id string

---@class DexSyntheticApplicationMonitoring
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class DexSyntheticApplicationMonitoringLoadMatch
---@field account_id string
---@field device_id? string
---@field cursor? string
---@field from? string
---@field page? number
---@field per_page? number
---@field sort_by? string
---@field sort_order? string
---@field to? string
---@field colo? string
---@field kind? string
---@field registration_id? string
---@field test_name? string
---@field test_id? string
---@field interval? string
---@field http_test_id? string
---@field traceroute_test_id? string
---@field traceroute_test_result_id? string

---@class DexSyntheticApplicationMonitoringListMatch
---@field account_id string
---@field from string
---@field sort_by? string
---@field to string

---@class DigitalExperienceMonitoringDevice
---@field alwaysOn? boolean
---@field batteryCharging? boolean
---@field batteryCycles? number
---@field batteryPct? number
---@field colo string
---@field connectionType? string
---@field cpuPct? number
---@field cpuPctByApp? table
---@field deviceId string
---@field deviceIpv4? table
---@field deviceIpv6? table
---@field deviceName? string
---@field deviceRegistration? string
---@field diskReadBps? number
---@field diskUsagePct? number
---@field diskWriteBps? number
---@field dohSubdomain? string
---@field estimatedLossPct? number
---@field firewallEnabled? boolean
---@field gatewayIpv4? table
---@field gatewayIpv6? table
---@field handshakeLatencyMs? number
---@field ispIpv4? table
---@field ispIpv6? table
---@field metal? string
---@field mode string
---@field networkRcvdBps? number
---@field networkSentBps? number
---@field networkSsid? string
---@field personEmail? string
---@field platform string
---@field ramAvailableKb? number
---@field ramUsedPct? number
---@field ramUsedPctByApp? table
---@field registrationId? string
---@field rtt? table
---@field status string
---@field switchLocked? boolean
---@field timestamp string
---@field tunnelStats? table
---@field tunnelType? string
---@field version string
---@field wifiStrengthDbm? number

---@class DigitalExperienceMonitoringDeviceListMatch
---@field account_id string
---@field device_id string
---@field colo? string
---@field since_minute number
---@field time_now? string

---@class DigitalExperienceMonitoringDexDeleteResponseCollection

---@class DigitalExperienceMonitoringDexDeleteResponseCollectionRemoveMatch
---@field account_id string
---@field dex_test_id string

---@class DigitalExperienceMonitoringDexResponseCollection
---@field result? table

---@class DigitalExperienceMonitoringDexResponseCollectionListMatch
---@field account_id string
---@field kind? string
---@field page? number
---@field per_page? number
---@field test_name? string

---@class DigitalExperienceMonitoringDexSingle
---@field created? string
---@field data table
---@field description? string
---@field enabled boolean
---@field interval string
---@field name string
---@field result table
---@field target_policies? any
---@field targeted? boolean
---@field test_id? string
---@field updated? string

---@class DigitalExperienceMonitoringDexSingleLoadMatch
---@field account_id string
---@field dex_test_id string

---@class DigitalExperienceMonitoringDexSingleCreateData
---@field account_id string
---@field created? string
---@field data table
---@field description? string
---@field enabled boolean
---@field interval string
---@field name string
---@field result table
---@field target_policies? any
---@field targeted? boolean
---@field test_id? string
---@field updated? string

---@class DigitalExperienceMonitoringDexSingleUpdateData
---@field account_id string
---@field dex_test_id string
---@field created? string
---@field data? table
---@field description? string
---@field enabled? boolean
---@field interval? string
---@field name? string
---@field result? table
---@field target_policies? any
---@field targeted? boolean
---@field test_id? string
---@field updated? string

---@class DigitalExperienceMonitoringFleetStatusDevice
---@field result? table

---@class DigitalExperienceMonitoringFleetStatusDeviceListMatch
---@field account_id string
---@field colo? string
---@field device_id? string
---@field from string
---@field mode? string
---@field page number
---@field per_page number
---@field platform? string
---@field sort_by? string
---@field source? string
---@field status? string
---@field to string
---@field version? string

---@class DigitalExperienceMonitoringFleetStatusLive
---@field result? table

---@class DigitalExperienceMonitoringFleetStatusLiveLoadMatch
---@field account_id string
---@field since_minute number

---@class DigitalExperienceMonitoringFleetStatusOverTime
---@field result? table

---@class DigitalExperienceMonitoringFleetStatusOverTimeLoadMatch
---@field account_id string
---@field colo? string
---@field device_id? string
---@field from string
---@field to string

---@class Integration
---@field id? string

---@class IntegrationRemoveMatch
---@field account_id string
---@field id string

---@class Interconnect
---@field id? string

---@class InterconnectLoadMatch
---@field account_id string
---@field icon string
---@field name? string

---@class InterconnectRemoveMatch
---@field account_id string
---@field id string

---@class IpProfile
---@field description? string
---@field enabled? boolean
---@field errors table
---@field id? string
---@field match string
---@field messages table
---@field name string
---@field precedence number
---@field result table
---@field result_info table
---@field subnet_id string
---@field success boolean

---@class IpProfileLoadMatch
---@field account_id string
---@field id string

---@class IpProfileListMatch
---@field account_id string
---@field page? number
---@field per_page? number

---@class IpProfileCreateData
---@field account_id string
---@field description? string
---@field enabled? boolean
---@field errors table
---@field id? string
---@field match string
---@field messages table
---@field name string
---@field precedence number
---@field result table
---@field result_info table
---@field subnet_id string
---@field success boolean

---@class IpProfileUpdateData
---@field account_id string
---@field id string
---@field description? string
---@field enabled? boolean
---@field errors? table
---@field match? string
---@field messages? table
---@field name? string
---@field precedence? number
---@field result? table
---@field result_info? table
---@field subnet_id? string
---@field success? boolean

---@class IpProfileRemoveMatch
---@field account_id string
---@field id string

---@class List
---@field id? string

---@class ListRemoveMatch
---@field account_id string
---@field id string

---@class Location
---@field id? string

---@class LocationRemoveMatch
---@field account_id string
---@field id string

---@class NscCni
---@field account string
---@field bgp table
---@field bgp_mode? string
---@field cust_ip string
---@field id string
---@field interconnect string
---@field magic table
---@field p2p_ip string

---@class NscCniLoadMatch
---@field account_id string
---@field id string

---@class NscCniListMatch
---@field account_id string
---@field cursor? number
---@field limit? number
---@field slot? string
---@field tunnel_id? string

---@class NscCniCreateData
---@field account_id string
---@field account string
---@field bgp table
---@field bgp_mode? string
---@field cust_ip string
---@field id string
---@field interconnect string
---@field magic table
---@field p2p_ip string

---@class NscCniUpdateData
---@field account_id string
---@field id string
---@field account? string
---@field bgp? table
---@field bgp_mode? string
---@field cust_ip? string
---@field interconnect? string
---@field magic? table
---@field p2p_ip? string

---@class NscDefaultName
---@field name string

---@class NscDefaultNameLoadMatch
---@field account_id string
---@field interconnect_id string

---@class NscInterconnect
---@field id? string
---@field items table
---@field next? number

---@class NscInterconnectLoadMatch
---@field account_id string
---@field id string

---@class NscInterconnectListMatch
---@field account_id string
---@field cursor? number
---@field limit? number
---@field site? string
---@field type? string

---@class NscInterconnectCreateData
---@field account_id string
---@field id? string
---@field items table
---@field next? number

---@class NscSetting
---@field default_asn number

---@class NscSettingLoadMatch
---@field account_id string

---@class NscSettingUpdateData
---@field account_id string
---@field default_asn? number

---@class NscSlotInfo
---@field account? string
---@field address table
---@field ccr_device_name? string
---@field facility table
---@field id string
---@field name string
---@field occupied boolean
---@field site string
---@field speed string

---@class NscSlotInfoLoadMatch
---@field account_id string
---@field slot string

---@class NscSlotInfoListMatch
---@field account_id string
---@field address_contain? string
---@field cursor? number
---@field limit? number
---@field occupied? boolean
---@field site? string
---@field speed? string

---@class NscStatusInfo

---@class NscStatusInfoLoadMatch
---@field account_id string
---@field icon string

---@class OneApplicationDetail
---@field errors? table
---@field messages? table
---@field result any
---@field success boolean

---@class OneApplicationDetailLoadMatch
---@field account_id string
---@field application_id string

---@class OneIntegrationCreate
---@field application string
---@field auth_method? string
---@field credentials table
---@field dlp_profiles? table
---@field name string
---@field permissions? table
---@field use_cases? table

---@class OneIntegrationCreateCreateData
---@field account_id string
---@field application string
---@field auth_method? string
---@field credentials table
---@field dlp_profiles? table
---@field name string
---@field permissions? table
---@field use_cases? table

---@class OneIntegrationDetail
---@field errors? table
---@field id? string
---@field messages? table
---@field result any
---@field success boolean

---@class OneIntegrationDetailLoadMatch
---@field account_id string
---@field id string

---@class OneIntegrationPause
---@field errors? table
---@field messages? table
---@field result any
---@field success boolean

---@class OneIntegrationPauseCreateData
---@field account_id string
---@field integration_id string
---@field errors? table
---@field messages? table
---@field result any
---@field success boolean

---@class OneIntegrationResume
---@field errors? table
---@field messages? table
---@field result any
---@field success boolean

---@class OneIntegrationResumeCreateData
---@field account_id string
---@field integration_id string
---@field errors? table
---@field messages? table
---@field result any
---@field success boolean

---@class OneIntegrationUpdate
---@field credentials? table
---@field dlp_profiles? table
---@field errors? table
---@field id? string
---@field messages? table
---@field name? string
---@field permissions? table
---@field result any
---@field success boolean
---@field use_cases? table

---@class OneIntegrationUpdateUpdateData
---@field account_id string
---@field id string
---@field credentials? table
---@field dlp_profiles? table
---@field errors? table
---@field messages? table
---@field name? string
---@field permissions? table
---@field result? any
---@field success? boolean
---@field use_cases? table

---@class OnePaginatedApplicationListList
---@field auth_methods table
---@field category string
---@field description string
---@field display_name string
---@field dlp_enabled boolean
---@field id string
---@field logo string
---@field permissions table
---@field supported_environments table
---@field use_cases table

---@class OnePaginatedApplicationListListListMatch
---@field account_id string
---@field environment? string
---@field page? number
---@field page_size? number

---@class OnePaginatedAuthMethodDetailList
---@field display_name string
---@field human_interaction_required boolean
---@field id string
---@field instructions any
---@field payload_example table
---@field payload_schema table
---@field redirect_url string

---@class OnePaginatedAuthMethodDetailListListMatch
---@field account_id string
---@field application_id string
---@field page? number
---@field page_size? number

---@class OnePaginatedIntegrationV2ListItemList
---@field application table
---@field created string
---@field id string
---@field is_paused boolean
---@field name string
---@field status string
---@field updated string

---@class OnePaginatedIntegrationV2ListItemListListMatch
---@field account_id string
---@field application? string
---@field direction? string
---@field dlp_enabled? boolean
---@field order? string
---@field page? number
---@field page_size? number
---@field search? string
---@field status? string
---@field use_case? string

---@class OnePaginatedSetupFlowList
---@field auth_config? any
---@field default boolean
---@field description string
---@field id string
---@field name string
---@field steps table
---@field supported_environments table

---@class OnePaginatedSetupFlowListListMatch
---@field account_id string
---@field application_id string
---@field auth_method? string
---@field environment? string
---@field page? number
---@field page_size? number

---@class OverrideCode
---@field device_id? string
---@field duration_hours number
---@field errors table
---@field messages table
---@field result table
---@field scope string
---@field success boolean
---@field type string

---@class OverrideCodeCreateData
---@field account_id string
---@field device_id? string
---@field duration_hours number
---@field errors table
---@field messages table
---@field result table
---@field scope string
---@field success boolean
---@field type string

---@class Pacfile
---@field id? string

---@class PacfileRemoveMatch
---@field account_id string
---@field id string

---@class PhysicalDevice
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field result_info table
---@field success boolean
---@field tags? table

---@class PhysicalDeviceLoadMatch
---@field account_id string
---@field id string
---@field include? string

---@class PhysicalDeviceListMatch
---@field account_id string
---@field active_registration? string
---@field cursor? string
---@field has_registration_type? boolean
---@field id? table
---@field include? string
---@field last_seen_registration_policy_id? string
---@field last_seen_user_email? string
---@field per_page? number
---@field search? string
---@field seen_after? string
---@field seen_before? string
---@field sort_by? string
---@field sort_order? string
---@field tag? table

---@class PhysicalDeviceCreateData
---@field account_id string
---@field id string
---@field errors table
---@field messages table
---@field result table
---@field result_info table
---@field success boolean
---@field tags? table

---@class PhysicalDeviceUpdateData
---@field account_id string
---@field id string
---@field errors? table
---@field messages? table
---@field result? table
---@field result_info? table
---@field success? boolean
---@field tags? table

---@class PhysicalDeviceRemoveMatch
---@field account_id string
---@field id string

---@class ProxyEndpoint
---@field id? string

---@class ProxyEndpointRemoveMatch
---@field account_id string
---@field id string

---@class Registration
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field result_info table
---@field success boolean

---@class RegistrationLoadMatch
---@field account_id string
---@field id string
---@field include? string

---@class RegistrationListMatch
---@field account_id string
---@field cursor? string
---@field device_id? string
---@field id? table
---@field include? string
---@field per_page? number
---@field policy_id? string
---@field registration_type? string
---@field search? string
---@field seen_after? string
---@field seen_before? string
---@field sort_by? string
---@field sort_order? string
---@field status? string
---@field user_id? table

---@class RegistrationCreateData
---@field account_id string
---@field id table
---@field errors table
---@field messages table
---@field result table
---@field result_info table
---@field success boolean

---@class RegistrationRemoveMatch
---@field account_id string
---@field id string

---@class Rule
---@field id? string

---@class RuleRemoveMatch
---@field account_id string
---@field id string

---@class TeamsDevicesApiResponseSingle

---@class TeamsDevicesApiResponseSingleCreateData
---@field account_id string

---@class TeamsDevicesComponentsSchemasResponseCollection
---@field result? table

---@class TeamsDevicesComponentsSchemasResponseCollectionListMatch
---@field account_id string

---@class TeamsDevicesComponentsSchemasResponseCollectionRemoveMatch
---@field account_id string
---@field network_id string

---@class TeamsDevicesComponentsSchemasSingle
---@field config table
---@field name string
---@field result? table
---@field type string

---@class TeamsDevicesComponentsSchemasSingleLoadMatch
---@field account_id string
---@field network_id string

---@class TeamsDevicesComponentsSchemasSingleCreateData
---@field account_id string
---@field config table
---@field name string
---@field result? table
---@field type string

---@class TeamsDevicesComponentsSchemasSingleUpdateData
---@field account_id string
---@field network_id string
---@field config? table
---@field name? string
---@field result? table
---@field type? string

---@class TeamsDevicesDefaultDeviceSetting
---@field allow_mode_switch? boolean
---@field allow_updates? boolean
---@field allowed_to_leave? boolean
---@field auto_connect? number
---@field captive_portal? number
---@field disable_auto_fallback? boolean
---@field dns_search_suffixes? table
---@field exclude? table
---@field exclude_office_ips? boolean
---@field global_acceleration table
---@field include? table
---@field lan_allow_minutes? number
---@field lan_allow_subnet_size? number
---@field register_interface_ip_with_dns? boolean
---@field result? table
---@field sccm_vpn_boundary_support? boolean
---@field service_mode_v2? table
---@field support_url? string
---@field switch_locked? boolean
---@field tunnel_protocol? string
---@field uninstall_protection? boolean
---@field virtual_networks table

---@class TeamsDevicesDefaultDeviceSettingLoadMatch
---@field account_id string

---@class TeamsDevicesDefaultDeviceSettingUpdateData
---@field account_id string
---@field allow_mode_switch? boolean
---@field allow_updates? boolean
---@field allowed_to_leave? boolean
---@field auto_connect? number
---@field captive_portal? number
---@field disable_auto_fallback? boolean
---@field dns_search_suffixes? table
---@field exclude? table
---@field exclude_office_ips? boolean
---@field global_acceleration? table
---@field include? table
---@field lan_allow_minutes? number
---@field lan_allow_subnet_size? number
---@field register_interface_ip_with_dns? boolean
---@field result? table
---@field sccm_vpn_boundary_support? boolean
---@field service_mode_v2? table
---@field support_url? string
---@field switch_locked? boolean
---@field tunnel_protocol? string
---@field uninstall_protection? boolean
---@field virtual_networks? table

---@class TeamsDevicesDevice
---@field id? string
---@field result? table

---@class TeamsDevicesDeviceLoadMatch
---@field account_id string
---@field id string

---@class TeamsDevicesDeviceListMatch
---@field account_id string

---@class TeamsDevicesDeviceSetting
---@field allow_mode_switch? boolean
---@field allow_updates? boolean
---@field allowed_to_leave? boolean
---@field auto_connect? number
---@field browser_extension_config table
---@field captive_portal? number
---@field default? boolean
---@field description? string
---@field disable_auto_fallback? boolean
---@field dns_search_suffixes? table
---@field enabled? boolean
---@field exclude? table
---@field exclude_office_ips? boolean
---@field global_acceleration table
---@field include? table
---@field lan_allow_minutes? number
---@field lan_allow_subnet_size? number
---@field match? string
---@field name string
---@field precedence? number
---@field profile_type? string
---@field register_interface_ip_with_dns? boolean
---@field result? table
---@field sccm_vpn_boundary_support? boolean
---@field service_mode_v2? table
---@field support_url? string
---@field switch_locked? boolean
---@field tunnel_protocol? string
---@field uninstall_protection? boolean
---@field virtual_networks table

---@class TeamsDevicesDeviceSettingLoadMatch
---@field account_id string
---@field policy_id string

---@class TeamsDevicesDeviceSettingCreateData
---@field account_id string
---@field allow_mode_switch? boolean
---@field allow_updates? boolean
---@field allowed_to_leave? boolean
---@field auto_connect? number
---@field browser_extension_config table
---@field captive_portal? number
---@field default? boolean
---@field description? string
---@field disable_auto_fallback? boolean
---@field dns_search_suffixes? table
---@field enabled? boolean
---@field exclude? table
---@field exclude_office_ips? boolean
---@field global_acceleration table
---@field include? table
---@field lan_allow_minutes? number
---@field lan_allow_subnet_size? number
---@field match? string
---@field name string
---@field precedence? number
---@field profile_type? string
---@field register_interface_ip_with_dns? boolean
---@field result? table
---@field sccm_vpn_boundary_support? boolean
---@field service_mode_v2? table
---@field support_url? string
---@field switch_locked? boolean
---@field tunnel_protocol? string
---@field uninstall_protection? boolean
---@field virtual_networks table

---@class TeamsDevicesDeviceSettingUpdateData
---@field account_id string
---@field policy_id string
---@field allow_mode_switch? boolean
---@field allow_updates? boolean
---@field allowed_to_leave? boolean
---@field auto_connect? number
---@field browser_extension_config? table
---@field captive_portal? number
---@field default? boolean
---@field description? string
---@field disable_auto_fallback? boolean
---@field dns_search_suffixes? table
---@field enabled? boolean
---@field exclude? table
---@field exclude_office_ips? boolean
---@field global_acceleration? table
---@field include? table
---@field lan_allow_minutes? number
---@field lan_allow_subnet_size? number
---@field match? string
---@field name? string
---@field precedence? number
---@field profile_type? string
---@field register_interface_ip_with_dns? boolean
---@field result? table
---@field sccm_vpn_boundary_support? boolean
---@field service_mode_v2? table
---@field support_url? string
---@field switch_locked? boolean
---@field tunnel_protocol? string
---@field uninstall_protection? boolean
---@field virtual_networks? table

---@class TeamsDevicesDeviceSettingsResponseCollection
---@field result? table

---@class TeamsDevicesDeviceSettingsResponseCollectionListMatch
---@field account_id string
---@field profile_type? string

---@class TeamsDevicesDeviceSettingsResponseCollectionRemoveMatch
---@field account_id string
---@field policy_id string

---@class TeamsDevicesDevicesPolicyCertificatesSingle
---@field enabled boolean
---@field result table

---@class TeamsDevicesDevicesPolicyCertificatesSingleLoadMatch
---@field zone_id string

---@class TeamsDevicesDevicesPolicyCertificatesSingleUpdateData
---@field zone_id string
---@field enabled? boolean
---@field result? table

---@class TeamsDevicesFallbackDomainResponseCollection
---@field result? table

---@class TeamsDevicesFallbackDomainResponseCollectionListMatch
---@field account_id string
---@field policy_id? string

---@class TeamsDevicesFallbackDomainResponseCollectionUpdateData
---@field account_id string
---@field policy_id? string
---@field result? table

---@class TeamsDevicesFallbackDomainResponseCollectionRemoveMatch
---@field account_id string
---@field policy_id? string
---@field reset_default? boolean

---@class TeamsDevicesGlobalWarpOverride
---@field disconnect boolean
---@field justification? string
---@field result? table

---@class TeamsDevicesGlobalWarpOverrideLoadMatch
---@field account_id string

---@class TeamsDevicesGlobalWarpOverrideCreateData
---@field account_id string
---@field disconnect boolean
---@field justification? string
---@field result? table

---@class TeamsDevicesId

---@class TeamsDevicesIdRemoveMatch
---@field account_id string
---@field rule_id string

---@class TeamsDevicesOverrideCode
---@field result? table

---@class TeamsDevicesOverrideCodeLoadMatch
---@field account_id string
---@field device_id string

---@class TeamsDevicesResponseCollection
---@field result? table

---@class TeamsDevicesResponseCollectionListMatch
---@field account_id string

---@class TeamsDevicesSchemasId

---@class TeamsDevicesSchemasIdRemoveMatch
---@field account_id string
---@field integration_id string

---@class TeamsDevicesSchemasResponseCollection
---@field result? table

---@class TeamsDevicesSchemasResponseCollectionListMatch
---@field account_id string

---@class TeamsDevicesSchemasSingle
---@field config table
---@field interval string
---@field name string
---@field result? table
---@field type string

---@class TeamsDevicesSchemasSingleLoadMatch
---@field account_id string
---@field integration_id string

---@class TeamsDevicesSchemasSingleCreateData
---@field account_id string
---@field config table
---@field interval string
---@field name string
---@field result? table
---@field type string

---@class TeamsDevicesSchemasSingleUpdateData
---@field account_id string
---@field integration_id string
---@field config? table
---@field interval? string
---@field name? string
---@field result? table
---@field type? string

---@class TeamsDevicesSingle
---@field description? string
---@field expiration? string
---@field input? table
---@field match? table
---@field name string
---@field result? table
---@field schedule? string
---@field type string

---@class TeamsDevicesSingleLoadMatch
---@field account_id string
---@field rule_id string

---@class TeamsDevicesSingleCreateData
---@field account_id string
---@field description? string
---@field expiration? string
---@field input? table
---@field match? table
---@field name string
---@field result? table
---@field schedule? string
---@field type string

---@class TeamsDevicesSingleUpdateData
---@field account_id string
---@field rule_id string
---@field description? string
---@field expiration? string
---@field input? table
---@field match? table
---@field name? string
---@field result? table
---@field schedule? string
---@field type? string

---@class TeamsDevicesSplitTunnelIncludeResponseCollection
---@field result? table

---@class TeamsDevicesSplitTunnelIncludeResponseCollectionListMatch
---@field account_id string
---@field policy_id? string

---@class TeamsDevicesSplitTunnelIncludeResponseCollectionUpdateData
---@field account_id string
---@field policy_id? string
---@field result? table

---@class TeamsDevicesSplitTunnelResponseCollection
---@field result? table

---@class TeamsDevicesSplitTunnelResponseCollectionListMatch
---@field account_id string
---@field policy_id? string

---@class TeamsDevicesSplitTunnelResponseCollectionUpdateData
---@field account_id string
---@field policy_id? string
---@field result? table

---@class TeamsDevicesSplitTunnelResponseCollectionRemoveMatch
---@field account_id string
---@field policy_id? string
---@field reset_default? boolean

---@class TeamsDevicesZeroTrustAccountDeviceSetting
---@field disable_for_time? number
---@field external_emergency_signal_enabled? boolean
---@field external_emergency_signal_fingerprint? string
---@field external_emergency_signal_interval? string
---@field external_emergency_signal_url? string
---@field gateway_proxy_enabled? boolean
---@field gateway_udp_proxy_enabled? boolean
---@field result? table
---@field root_certificate_installation_enabled? boolean
---@field use_zt_virtual_ip? boolean

---@class TeamsDevicesZeroTrustAccountDeviceSettingLoadMatch
---@field account_id string

---@class TeamsDevicesZeroTrustAccountDeviceSettingUpdateData
---@field account_id string
---@field disable_for_time? number
---@field external_emergency_signal_enabled? boolean
---@field external_emergency_signal_fingerprint? string
---@field external_emergency_signal_interval? string
---@field external_emergency_signal_url? string
---@field gateway_proxy_enabled? boolean
---@field gateway_udp_proxy_enabled? boolean
---@field result? table
---@field root_certificate_installation_enabled? boolean
---@field use_zt_virtual_ip? boolean

---@class TeamsDevicesZeroTrustAccountDeviceSettingRemoveMatch
---@field account_id string

---@class Tunnel
---@field result? table

---@class TunnelListMatch
---@field account_id string
---@field exclude_prefix? string
---@field existed_at? string
---@field include_prefix? string
---@field is_deleted? boolean
---@field name? string
---@field page? number
---@field per_page? number
---@field status? string
---@field tun_type? table
---@field uuid? string
---@field was_active_at? string
---@field was_inactive_at? string

---@class TunnelCfdTunnelResponseCollection
---@field result? table

---@class TunnelCfdTunnelResponseCollectionListMatch
---@field account_id string
---@field exclude_prefix? string
---@field existed_at? string
---@field include_prefix? string
---@field is_deleted? boolean
---@field name? string
---@field page? number
---@field per_page? number
---@field status? string
---@field uuid? string
---@field was_active_at? string
---@field was_inactive_at? string

---@class TunnelCfdTunnelResponseSingle
---@field config_src? string
---@field errors table
---@field messages table
---@field name string
---@field result string
---@field success boolean
---@field tunnel_secret? string

---@class TunnelCfdTunnelResponseSingleLoadMatch
---@field account_id string
---@field tunnel_id string

---@class TunnelCfdTunnelResponseSingleCreateData
---@field account_id string
---@field config_src? string
---@field errors table
---@field messages table
---@field name string
---@field result string
---@field success boolean
---@field tunnel_secret? string

---@class TunnelCfdTunnelResponseSingleUpdateData
---@field account_id string
---@field tunnel_id string
---@field config_src? string
---@field errors? table
---@field messages? table
---@field name? string
---@field result? string
---@field success? boolean
---@field tunnel_secret? string

---@class TunnelCfdTunnelResponseSingleRemoveMatch
---@field account_id string
---@field tunnel_id string

---@class TunnelConfiguration
---@field config? table
---@field result? table

---@class TunnelConfigurationLoadMatch
---@field account_id string
---@field cfd_tunnel_id string

---@class TunnelConfigurationUpdateData
---@field account_id string
---@field cfd_tunnel_id string
---@field config? table
---@field result? table

---@class TunnelEmpty
---@field client_id string

---@class TunnelEmptyUpdateData
---@field account_id string
---@field warp_connector_id string
---@field client_id? string

---@class TunnelEmptyRemoveMatch
---@field account_id string
---@field cfd_tunnel_id string
---@field client_id? string

---@class TunnelHostnameRouteResponseCollection
---@field result? table

---@class TunnelHostnameRouteResponseCollectionListMatch
---@field account_id string
---@field comment? string
---@field existed_at? string
---@field hostname? string
---@field id? string
---@field is_deleted? boolean
---@field page? number
---@field per_page? number
---@field tunnel_id? string

---@class TunnelHostnameRouteResponseSingle
---@field comment? string
---@field errors table
---@field hostname? string
---@field messages table
---@field result string
---@field success boolean
---@field tunnel_id? string

---@class TunnelHostnameRouteResponseSingleLoadMatch
---@field account_id string
---@field hostname_route_id string

---@class TunnelHostnameRouteResponseSingleCreateData
---@field account_id string
---@field comment? string
---@field errors table
---@field hostname? string
---@field messages table
---@field result string
---@field success boolean
---@field tunnel_id? string

---@class TunnelHostnameRouteResponseSingleUpdateData
---@field account_id string
---@field hostname_route_id string
---@field comment? string
---@field errors? table
---@field hostname? string
---@field messages? table
---@field result? string
---@field success? boolean
---@field tunnel_id? string

---@class TunnelHostnameRouteResponseSingleRemoveMatch
---@field account_id string
---@field hostname_route_id string

---@class TunnelMeshConfigurationResponseSingle
---@field config? table
---@field ha_mode string
---@field result table

---@class TunnelMeshConfigurationResponseSingleLoadMatch
---@field account_id string
---@field warp_connector_id string

---@class TunnelMeshConfigurationResponseSingleUpdateData
---@field account_id string
---@field warp_connector_id string
---@field config? table
---@field ha_mode? string
---@field result? table

---@class TunnelRouteResponseSingle
---@field comment? string
---@field errors table
---@field messages table
---@field network string
---@field result string
---@field success boolean
---@field tunnel_id string
---@field virtual_network_id? string

---@class TunnelRouteResponseSingleLoadMatch
---@field account_id string
---@field route_id string

---@class TunnelRouteResponseSingleCreateData
---@field account_id string
---@field ip_network_encoded? string
---@field comment? string
---@field errors table
---@field messages table
---@field network string
---@field result string
---@field success boolean
---@field tunnel_id string
---@field virtual_network_id? string

---@class TunnelRouteResponseSingleUpdateData
---@field account_id string
---@field ip_network_encoded? string
---@field route_id? string
---@field comment? string
---@field errors? table
---@field messages? table
---@field network? string
---@field result? string
---@field success? boolean
---@field tunnel_id? string
---@field virtual_network_id? string

---@class TunnelRouteResponseSingleRemoveMatch
---@field account_id string
---@field ip_network_encoded? string
---@field tun_type? string
---@field tunnel_id? string
---@field virtual_network_id? string
---@field route_id? string

---@class TunnelSubnetResponseCollection
---@field result? table

---@class TunnelSubnetResponseCollectionListMatch
---@field account_id string
---@field address_family? string
---@field comment? string
---@field existed_at? string
---@field is_default_network? boolean
---@field is_deleted? boolean
---@field name? string
---@field network? any
---@field page? number
---@field per_page? number
---@field sort_order? string
---@field subnet_type? string

---@class TunnelSubnetResponseSingle
---@field comment? string
---@field errors table
---@field is_default_network? boolean
---@field messages table
---@field name string
---@field network string
---@field result string
---@field success boolean

---@class TunnelSubnetResponseSingleLoadMatch
---@field account_id string
---@field address_family string

---@class TunnelSubnetResponseSingleCreateData
---@field account_id string
---@field comment? string
---@field errors table
---@field is_default_network? boolean
---@field messages table
---@field name string
---@field network string
---@field result string
---@field success boolean

---@class TunnelSubnetResponseSingleUpdateData
---@field account_id string
---@field address_family string
---@field comment? string
---@field errors? table
---@field is_default_network? boolean
---@field messages? table
---@field name? string
---@field network? string
---@field result? string
---@field success? boolean

---@class TunnelSubnetResponseSingleNullable

---@class TunnelSubnetResponseSingleNullableRemoveMatch
---@field account_id string
---@field subnet_id string

---@class TunnelTeamnetResponseCollection
---@field result? table

---@class TunnelTeamnetResponseCollectionListMatch
---@field account_id string
---@field comment? string
---@field existed_at? string
---@field is_deleted? boolean
---@field network_subset? any
---@field network_superset? any
---@field page? number
---@field per_page? number
---@field route_id? string
---@field tun_type? table
---@field tunnel_id? string
---@field virtual_network_id? string

---@class TunnelTeamnetResponseSingle
---@field errors table
---@field messages table
---@field result string
---@field success boolean

---@class TunnelTeamnetResponseSingleLoadMatch
---@field account_id string
---@field ip string
---@field default_virtual_network_fallback? boolean
---@field virtual_network_id? string

---@class TunnelTunnelClient
---@field errors table
---@field messages table
---@field result string
---@field success boolean

---@class TunnelTunnelClientLoadMatch
---@field account_id string
---@field cfd_tunnel_id string
---@field connector_id string

---@class TunnelTunnelConnection
---@field result? table

---@class TunnelTunnelConnectionListMatch
---@field account_id string
---@field cfd_tunnel_id string

---@class TunnelTunnelResponseToken
---@field errors table
---@field messages table
---@field resources table
---@field result string
---@field success boolean

---@class TunnelTunnelResponseTokenListMatch
---@field account_id string
---@field cfd_tunnel_id? string
---@field warp_connector_id? string

---@class TunnelTunnelResponseTokenCreateData
---@field account_id string
---@field cfd_tunnel_id string
---@field errors table
---@field messages table
---@field resources table
---@field result string
---@field success boolean

---@class TunnelTunnelWarpConnectorClient
---@field errors table
---@field messages table
---@field result string
---@field success boolean

---@class TunnelTunnelWarpConnectorClientLoadMatch
---@field account_id string
---@field connector_id string
---@field warp_connector_id string

---@class TunnelTunnelWarpConnectorConnection
---@field result? table

---@class TunnelTunnelWarpConnectorConnectionListMatch
---@field account_id string
---@field warp_connector_id string

---@class TunnelVnetResponseCollection
---@field result? table

---@class TunnelVnetResponseCollectionListMatch
---@field account_id string
---@field id? string
---@field is_default? boolean
---@field is_default_network? boolean
---@field is_deleted? boolean
---@field name? string

---@class TunnelVnetResponseSingle
---@field comment? string
---@field is_default? boolean
---@field is_default_network? boolean
---@field name? string

---@class TunnelVnetResponseSingleLoadMatch
---@field account_id string
---@field virtual_network_id string

---@class TunnelVnetResponseSingleCreateData
---@field account_id string
---@field comment? string
---@field is_default? boolean
---@field is_default_network? boolean
---@field name? string

---@class TunnelVnetResponseSingleUpdateData
---@field account_id string
---@field virtual_network_id string
---@field comment? string
---@field is_default? boolean
---@field is_default_network? boolean
---@field name? string

---@class TunnelVnetResponseSingleRemoveMatch
---@field account_id string
---@field virtual_network_id string

---@class TunnelWarpConnectorResponseCollection
---@field result? table

---@class TunnelWarpConnectorResponseCollectionListMatch
---@field account_id string
---@field exclude_prefix? string
---@field existed_at? string
---@field include_prefix? string
---@field is_deleted? boolean
---@field name? string
---@field page? number
---@field per_page? number
---@field status? string
---@field uuid? string
---@field was_active_at? string
---@field was_inactive_at? string

---@class TunnelWarpConnectorResponseSingle
---@field errors table
---@field ha? boolean
---@field messages table
---@field name string
---@field result string
---@field success boolean
---@field tunnel_secret? string

---@class TunnelWarpConnectorResponseSingleLoadMatch
---@field account_id string
---@field tunnel_id string

---@class TunnelWarpConnectorResponseSingleCreateData
---@field account_id string
---@field errors table
---@field ha? boolean
---@field messages table
---@field name string
---@field result string
---@field success boolean
---@field tunnel_secret? string

---@class TunnelWarpConnectorResponseSingleUpdateData
---@field account_id string
---@field tunnel_id string
---@field errors? table
---@field ha? boolean
---@field messages? table
---@field name? string
---@field result? string
---@field success? boolean
---@field tunnel_secret? string

---@class TunnelWarpConnectorResponseSingleRemoveMatch
---@field account_id string
---@field tunnel_id string

---@class TunnelZeroTrustConnectivitySetting
---@field errors table
---@field icmp_proxy_enabled? boolean
---@field messages table
---@field offramp_warp_enabled? boolean
---@field result string
---@field success boolean

---@class TunnelZeroTrustConnectivitySettingListMatch
---@field account_id string

---@class TunnelZeroTrustConnectivitySettingUpdateData
---@field account_id string
---@field errors? table
---@field icmp_proxy_enabled? boolean
---@field messages? table
---@field offramp_warp_enabled? boolean
---@field result? string
---@field success? boolean

---@class Warp
---@field comment? string
---@field errors table
---@field id? string
---@field is_default_network? boolean
---@field messages table
---@field name? string
---@field network? string
---@field result string
---@field success boolean

---@class WarpLoadMatch
---@field account_id string
---@field id string

---@class WarpUpdateData
---@field account_id string
---@field id string
---@field comment? string
---@field errors? table
---@field is_default_network? boolean
---@field messages? table
---@field name? string
---@field network? string
---@field result? string
---@field success? boolean

---@class WarpChangeEvent
---@field result? table

---@class WarpChangeEventListMatch
---@field account_id string
---@field account_name? string
---@field config_name? string
---@field from string
---@field page number
---@field per_page number
---@field sort_order? string
---@field to string
---@field toggle? string
---@field type? string

---@class WarpTeamsDeviceApiOther
---@field errors table
---@field messages table
---@field result any
---@field success boolean

---@class WarpTeamsDeviceApiOtherListMatch
---@field account_id string
---@field registration_id string

---@class ZeroTrustGatewayApplicationsReviewStatus
---@field approved_apps table
---@field in_review_apps table
---@field result? table
---@field unapproved_apps table

---@class ZeroTrustGatewayApplicationsReviewStatusLoadMatch
---@field account_id string

---@class ZeroTrustGatewayApplicationsReviewStatusUpdateData
---@field account_id string
---@field approved_apps? table
---@field in_review_apps? table
---@field result? table
---@field unapproved_apps? table

---@class ZeroTrustGatewayCsvOperationSingle

---@class ZeroTrustGatewayCsvOperationSingleCreateData
---@field account_id string

---@class ZeroTrustGatewayCustomCertificateSetting
---@field binding_status? string
---@field enabled boolean
---@field id? string
---@field updated_at? string

---@class ZeroTrustGatewayCustomCertificateSettingLoadMatch
---@field account_id string

---@class ZeroTrustGatewayGatewayAccount
---@field result? table

---@class ZeroTrustGatewayGatewayAccountLoadMatch
---@field account_id string

---@class ZeroTrustGatewayGatewayAccountCreateData
---@field account_id string
---@field result? table

---@class ZeroTrustGatewayGatewayAccountConfig
---@field result? table
---@field settings? table

---@class ZeroTrustGatewayGatewayAccountConfigLoadMatch
---@field account_id string

---@class ZeroTrustGatewayGatewayAccountConfigUpdateData
---@field account_id string
---@field result? table
---@field settings? table

---@class ZeroTrustGatewayGatewayAccountEgressCidrPairList
---@field result? table

---@class ZeroTrustGatewayGatewayAccountEgressCidrPairListListMatch
---@field account_id string

---@class ZeroTrustGatewayGatewayAccountLoggingSetting
---@field redact_pii? boolean
---@field result? table
---@field settings_by_rule_type? table

---@class ZeroTrustGatewayGatewayAccountLoggingSettingLoadMatch
---@field account_id string

---@class ZeroTrustGatewayGatewayAccountLoggingSettingUpdateData
---@field account_id string
---@field redact_pii? boolean
---@field result? table
---@field settings_by_rule_type? table

---@class ZeroTrustGatewayListItemResponseCollection
---@field result? table
---@field result_info? table

---@class ZeroTrustGatewayListItemResponseCollectionListMatch
---@field account_id string
---@field list_id string
---@field page? number
---@field per_page? number

---@class ZeroTrustGatewayListSingle
---@field append? table
---@field description? string
---@field items? table
---@field name string
---@field remove? table
---@field result? table

---@class ZeroTrustGatewayListSingleLoadMatch
---@field account_id string
---@field list_id string

---@class ZeroTrustGatewayListSingleUpdateData
---@field account_id string
---@field list_id string
---@field append? table
---@field description? string
---@field items? table
---@field name? string
---@field remove? table
---@field result? table

---@class ZeroTrustGatewayResponseCollection
---@field result? table

---@class ZeroTrustGatewayResponseCollectionListMatch
---@field account_id string

---@class ZeroTrustGatewayResponseCollection10
---@field result? table
---@field result_info? table

---@class ZeroTrustGatewayResponseCollection10ListMatch
---@field account_id string
---@field page? number
---@field per_page? number

---@class ZeroTrustGatewayResponseCollection2
---@field result? table

---@class ZeroTrustGatewayResponseCollection2ListMatch
---@field account_id string

---@class ZeroTrustGatewayResponseCollection3
---@field result? table

---@class ZeroTrustGatewayResponseCollection3ListMatch
---@field account_id string
---@field direction? string
---@field filter? table
---@field order_by? string
---@field search? string
---@field type? string

---@class ZeroTrustGatewayResponseCollection4
---@field result? table

---@class ZeroTrustGatewayResponseCollection4ListMatch
---@field account_id string

---@class ZeroTrustGatewayResponseCollection5
---@field result? table

---@class ZeroTrustGatewayResponseCollection5ListMatch
---@field account_id string
---@field direction? string
---@field filter? table
---@field order_by? string
---@field search? string

---@class ZeroTrustGatewayResponseCollection6
---@field result? table

---@class ZeroTrustGatewayResponseCollection6ListMatch
---@field account_id string
---@field direction? string
---@field filter? table
---@field order_by? string
---@field search? string

---@class ZeroTrustGatewayResponseCollection6UpdateData
---@field account_id string
---@field result? table

---@class ZeroTrustGatewayResponseCollection7
---@field result? table

---@class ZeroTrustGatewayResponseCollection7ListMatch
---@field account_id string

---@class ZeroTrustGatewayResponseCollection8
---@field result? table

---@class ZeroTrustGatewayResponseCollection8ListMatch
---@field account_id string

---@class ZeroTrustGatewayResponseCollection9
---@field result? table

---@class ZeroTrustGatewayResponseCollection9ListMatch
---@field account_id string
---@field direction? string
---@field filter? table
---@field order_by? string
---@field search? string

---@class ZeroTrustGatewaySingle
---@field result? table
---@field validity_period_days? number

---@class ZeroTrustGatewaySingleLoadMatch
---@field account_id string
---@field certificate_id string

---@class ZeroTrustGatewaySingleCreateData
---@field account_id string
---@field certificate_id? string
---@field result? table
---@field validity_period_days? number

---@class ZeroTrustGatewaySingleRemoveMatch
---@field account_id string
---@field certificate_id string

---@class ZeroTrustGatewaySingleResponse2
---@field result? table

---@class ZeroTrustGatewaySingleResponse2LoadMatch
---@field account_id string
---@field operation_id string

---@class ZeroTrustGatewaySingleResponse3
---@field client_default? boolean
---@field dns_destination_ips_id? string
---@field ecs_support? boolean
---@field endpoints table
---@field max_ttl table
---@field name string
---@field networks? table
---@field result? table

---@class ZeroTrustGatewaySingleResponse3LoadMatch
---@field account_id string
---@field location_id string

---@class ZeroTrustGatewaySingleResponse3CreateData
---@field account_id string
---@field client_default? boolean
---@field dns_destination_ips_id? string
---@field ecs_support? boolean
---@field endpoints table
---@field max_ttl table
---@field name string
---@field networks? table
---@field result? table

---@class ZeroTrustGatewaySingleResponse3UpdateData
---@field account_id string
---@field location_id string
---@field client_default? boolean
---@field dns_destination_ips_id? string
---@field ecs_support? boolean
---@field endpoints? table
---@field max_ttl? table
---@field name? string
---@field networks? table
---@field result? table

---@class ZeroTrustGatewaySingleResponse4
---@field action string
---@field description? string
---@field device_posture? string
---@field enabled? boolean
---@field expiration table
---@field filters? table
---@field identity? string
---@field name string
---@field precedence? number
---@field result table
---@field rule_settings? table
---@field schedule? table
---@field traffic? string

---@class ZeroTrustGatewaySingleResponse4LoadMatch
---@field account_id string
---@field rule_id string

---@class ZeroTrustGatewaySingleResponse4CreateData
---@field account_id string
---@field rule_id? string
---@field action string
---@field description? string
---@field device_posture? string
---@field enabled? boolean
---@field expiration table
---@field filters? table
---@field identity? string
---@field name string
---@field precedence? number
---@field result table
---@field rule_settings? table
---@field schedule? table
---@field traffic? string

---@class ZeroTrustGatewaySingleResponse4UpdateData
---@field account_id string
---@field rule_id string
---@field action? string
---@field description? string
---@field device_posture? string
---@field enabled? boolean
---@field expiration? table
---@field filters? table
---@field identity? string
---@field name? string
---@field precedence? number
---@field result? table
---@field rule_settings? table
---@field schedule? table
---@field traffic? string

---@class ZeroTrustGatewaySingleResponse5
---@field ips? table
---@field kind? string
---@field name? string
---@field result? any

---@class ZeroTrustGatewaySingleResponse5LoadMatch
---@field account_id string
---@field proxy_endpoint_id string

---@class ZeroTrustGatewaySingleResponse5CreateData
---@field account_id string
---@field ips? table
---@field kind? string
---@field name? string
---@field result? any

---@class ZeroTrustGatewaySingleResponse5UpdateData
---@field account_id string
---@field proxy_endpoint_id string
---@field ips? table
---@field kind? string
---@field name? string
---@field result? any

---@class ZeroTrustGatewaySingleResponse6
---@field public_key string
---@field result? table

---@class ZeroTrustGatewaySingleResponse6LoadMatch
---@field account_id string

---@class ZeroTrustGatewaySingleResponse6CreateData
---@field account_id string
---@field public_key string
---@field result? table

---@class ZeroTrustGatewaySingleResponse6UpdateData
---@field account_id string
---@field public_key? string
---@field result? table

---@class ZeroTrustGatewaySingleResponse7
---@field contents string
---@field description? string
---@field name string
---@field result? table
---@field slug? string

---@class ZeroTrustGatewaySingleResponse7LoadMatch
---@field account_id string
---@field pacfile_id string

---@class ZeroTrustGatewaySingleResponse7CreateData
---@field account_id string
---@field contents string
---@field description? string
---@field name string
---@field result? table
---@field slug? string

---@class ZeroTrustGatewaySingleResponse7UpdateData
---@field account_id string
---@field pacfile_id string
---@field contents? string
---@field description? string
---@field name? string
---@field result? table
---@field slug? string

---@class ZeroTrustGatewaySingleResponseWithListItem
---@field description? string
---@field items? table
---@field name string
---@field type string

---@class ZeroTrustGatewaySingleResponseWithListItemCreateData
---@field account_id string
---@field description? string
---@field items? table
---@field name string
---@field type string

---@class ZeroTrustRiskScoring
---@field behaviors table
---@field result table

---@class ZeroTrustRiskScoringLoadMatch
---@field account_id string
---@field user_id? string

---@class ZeroTrustRiskScoringCreateData
---@field account_id string
---@field zt_risk_scoring_id string
---@field behaviors table
---@field result table

---@class ZeroTrustRiskScoringUpdateData
---@field account_id string
---@field behaviors? table
---@field result? table

---@class ZeroTrustRiskScoringIntegration
---@field active boolean
---@field id? string
---@field integration_type string
---@field reference_id? string
---@field result table
---@field tenant_url string

---@class ZeroTrustRiskScoringIntegrationLoadMatch
---@field account_id string
---@field id? string
---@field reference_id? string

---@class ZeroTrustRiskScoringIntegrationListMatch
---@field account_id string

---@class ZeroTrustRiskScoringIntegrationCreateData
---@field account_id string
---@field active boolean
---@field id? string
---@field integration_type string
---@field reference_id? string
---@field result table
---@field tenant_url string

---@class ZeroTrustRiskScoringIntegrationUpdateData
---@field account_id string
---@field id string
---@field active? boolean
---@field integration_type? string
---@field reference_id? string
---@field result? table
---@field tenant_url? string

---@class ZeroTrustRiskScoringIntegrationRemoveMatch
---@field account_id string
---@field id string

local M = {}

return M
