# Typed models for the CloudflareZeroTrust SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AlexandriaDeleteApplication(TypedDict, total=False):
    id: str


class AlexandriaDeleteApplicationRemoveMatch(TypedDict):
    account_id: str
    id: int


class AlexandriaGetApplicationRequired(TypedDict):
    category_id: int
    errors: list
    human_id: str
    messages: list
    name: str
    result: dict
    success: bool


class AlexandriaGetApplication(AlexandriaGetApplicationRequired, total=False):
    hostnames: list
    id: str
    ip_subnets: list
    port_protocols: list
    support_domains: list


class AlexandriaGetApplicationLoadMatch(TypedDict):
    account_id: str
    id: int


class AlexandriaGetApplicationListMatchRequired(TypedDict):
    account_id: str


class AlexandriaGetApplicationListMatch(AlexandriaGetApplicationListMatchRequired, total=False):
    field: str
    filter: str
    limit: int
    offset: int
    order_by: str
    search: str


class AlexandriaGetApplicationCreateDataRequired(TypedDict):
    account_id: str
    category_id: int
    errors: list
    human_id: str
    messages: list
    name: str
    result: dict
    success: bool


class AlexandriaGetApplicationCreateData(AlexandriaGetApplicationCreateDataRequired, total=False):
    hostnames: list
    id: str
    ip_subnets: list
    port_protocols: list
    support_domains: list


class AlexandriaGetApplicationUpdateDataRequired(TypedDict):
    account_id: str
    id: int


class AlexandriaGetApplicationUpdateData(AlexandriaGetApplicationUpdateDataRequired, total=False):
    category_id: int
    errors: list
    hostnames: list
    human_id: str
    ip_subnets: list
    messages: list
    name: str
    port_protocols: list
    result: dict
    success: bool
    support_domains: list


class AlexandriaGetCategoryRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class AlexandriaGetCategory(AlexandriaGetCategoryRequired, total=False):
    id: str


class AlexandriaGetCategoryLoadMatch(TypedDict):
    account_id: str
    id: int


class AlexandriaGetCategoryListMatchRequired(TypedDict):
    account_id: str


class AlexandriaGetCategoryListMatch(AlexandriaGetCategoryListMatchRequired, total=False):
    limit: int
    offset: int


class ClientVersion(TypedDict):
    errors: list
    messages: list
    result: list
    result_info: dict
    success: bool


class ClientVersionListMatchRequired(TypedDict):
    account_id: str
    release_track: str
    target_environment: str


class ClientVersionListMatch(ClientVersionListMatchRequired, total=False):
    page: int
    per_page: int


class Cni(TypedDict, total=False):
    id: str


class CniRemoveMatch(TypedDict):
    account_id: str
    id: str


class DeploymentGroupRequired(TypedDict):
    errors: list
    messages: list
    name: str
    result: dict
    result_info: dict
    success: bool
    version_config: list


class DeploymentGroup(DeploymentGroupRequired, total=False):
    id: str
    policy_ids: list


class DeploymentGroupLoadMatch(TypedDict):
    account_id: str
    id: str


class DeploymentGroupListMatchRequired(TypedDict):
    account_id: str


class DeploymentGroupListMatch(DeploymentGroupListMatchRequired, total=False):
    page: int
    per_page: int


class DeploymentGroupCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    name: str
    result: dict
    result_info: dict
    success: bool
    version_config: list


class DeploymentGroupCreateData(DeploymentGroupCreateDataRequired, total=False):
    id: str
    policy_ids: list


class DeploymentGroupUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class DeploymentGroupUpdateData(DeploymentGroupUpdateDataRequired, total=False):
    errors: list
    messages: list
    name: str
    policy_ids: list
    result: dict
    result_info: dict
    success: bool
    version_config: list


class DeploymentGroupRemoveMatch(TypedDict):
    account_id: str
    id: str


class DexRemoteCommandRequired(TypedDict):
    commands: list


class DexRemoteCommand(DexRemoteCommandRequired, total=False):
    result: dict


class DexRemoteCommandLoadMatchRequired(TypedDict):
    account_id: str


class DexRemoteCommandLoadMatch(DexRemoteCommandLoadMatchRequired, total=False):
    command_type: str
    device_id: str
    page: float
    per_page: float
    status: str
    to: str
    user_email: str
    search: str
    command_id: str
    filename: str


class DexRemoteCommandCreateDataRequired(TypedDict):
    account_id: str
    commands: list


class DexRemoteCommandCreateData(DexRemoteCommandCreateDataRequired, total=False):
    result: dict


class DexRuleRequired(TypedDict):
    match: str
    name: str


class DexRule(DexRuleRequired, total=False):
    description: str
    id: str
    result: dict


class DexRuleLoadMatchRequired(TypedDict):
    account_id: str


class DexRuleLoadMatch(DexRuleLoadMatchRequired, total=False):
    name: str
    page: float
    per_page: float
    sort_by: str
    sort_order: str
    id: str


class DexRuleCreateDataRequired(TypedDict):
    account_id: str
    match: str
    name: str


class DexRuleCreateData(DexRuleCreateDataRequired, total=False):
    description: str
    id: str
    result: dict


class DexRuleUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class DexRuleUpdateData(DexRuleUpdateDataRequired, total=False):
    description: str
    match: str
    name: str
    result: dict


class DexRuleRemoveMatch(TypedDict):
    account_id: str
    id: str


class DexSyntheticApplicationMonitoring(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class DexSyntheticApplicationMonitoringLoadMatchRequired(TypedDict):
    account_id: str


class DexSyntheticApplicationMonitoringLoadMatch(DexSyntheticApplicationMonitoringLoadMatchRequired, total=False):
    device_id: str
    cursor: str
    page: int
    per_page: int
    sort_by: str
    sort_order: str
    to: str
    colo: str
    kind: str
    registration_id: str
    test_name: str
    test_id: str
    interval: str
    http_test_id: str
    traceroute_test_id: str
    traceroute_test_result_id: str


class DexSyntheticApplicationMonitoringListMatchRequired(TypedDict):
    account_id: str
    to: str


class DexSyntheticApplicationMonitoringListMatch(DexSyntheticApplicationMonitoringListMatchRequired, total=False):
    sort_by: str


class DigitalExperienceMonitoringDeviceRequired(TypedDict):
    colo: str
    deviceId: str
    mode: str
    platform: str
    status: str
    timestamp: str
    version: str


class DigitalExperienceMonitoringDevice(DigitalExperienceMonitoringDeviceRequired, total=False):
    alwaysOn: bool
    batteryCharging: bool
    batteryCycles: int
    batteryPct: float
    connectionType: str
    cpuPct: float
    cpuPctByApp: list
    deviceIpv4: dict
    deviceIpv6: dict
    deviceName: str
    deviceRegistration: str
    diskReadBps: int
    diskUsagePct: float
    diskWriteBps: int
    dohSubdomain: str
    estimatedLossPct: float
    firewallEnabled: bool
    gatewayIpv4: dict
    gatewayIpv6: dict
    handshakeLatencyMs: float
    ispIpv4: dict
    ispIpv6: dict
    metal: str
    networkRcvdBps: int
    networkSentBps: int
    networkSsid: str
    personEmail: str
    ramAvailableKb: int
    ramUsedPct: float
    ramUsedPctByApp: list
    registrationId: str
    rtt: dict
    switchLocked: bool
    tunnelStats: dict
    tunnelType: str
    wifiStrengthDbm: int


class DigitalExperienceMonitoringDeviceListMatchRequired(TypedDict):
    account_id: str
    device_id: str
    since_minute: float


class DigitalExperienceMonitoringDeviceListMatch(DigitalExperienceMonitoringDeviceListMatchRequired, total=False):
    colo: str
    time_now: str


class DigitalExperienceMonitoringDexDeleteResponseCollection(TypedDict):
    pass


class DigitalExperienceMonitoringDexDeleteResponseCollectionRemoveMatch(TypedDict):
    account_id: str
    dex_test_id: str


class DigitalExperienceMonitoringDexResponseCollection(TypedDict, total=False):
    result: list


class DigitalExperienceMonitoringDexResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class DigitalExperienceMonitoringDexResponseCollectionListMatch(DigitalExperienceMonitoringDexResponseCollectionListMatchRequired, total=False):
    kind: str
    page: float
    per_page: float
    test_name: str


class DigitalExperienceMonitoringDexSingleRequired(TypedDict):
    data: dict
    enabled: bool
    interval: str
    name: str
    result: dict


class DigitalExperienceMonitoringDexSingle(DigitalExperienceMonitoringDexSingleRequired, total=False):
    created: str
    description: str
    target_policies: Any
    targeted: bool
    test_id: str
    updated: str


class DigitalExperienceMonitoringDexSingleLoadMatch(TypedDict):
    account_id: str
    dex_test_id: str


class DigitalExperienceMonitoringDexSingleCreateDataRequired(TypedDict):
    account_id: str
    data: dict
    enabled: bool
    interval: str
    name: str
    result: dict


class DigitalExperienceMonitoringDexSingleCreateData(DigitalExperienceMonitoringDexSingleCreateDataRequired, total=False):
    created: str
    description: str
    target_policies: Any
    targeted: bool
    test_id: str
    updated: str


class DigitalExperienceMonitoringDexSingleUpdateDataRequired(TypedDict):
    account_id: str
    dex_test_id: str


class DigitalExperienceMonitoringDexSingleUpdateData(DigitalExperienceMonitoringDexSingleUpdateDataRequired, total=False):
    created: str
    data: dict
    description: str
    enabled: bool
    interval: str
    name: str
    result: dict
    target_policies: Any
    targeted: bool
    test_id: str
    updated: str


class DigitalExperienceMonitoringFleetStatusDevice(TypedDict, total=False):
    result: list


class DigitalExperienceMonitoringFleetStatusDeviceListMatchRequired(TypedDict):
    account_id: str
    page: float
    per_page: float
    to: str


class DigitalExperienceMonitoringFleetStatusDeviceListMatch(DigitalExperienceMonitoringFleetStatusDeviceListMatchRequired, total=False):
    colo: str
    device_id: str
    mode: str
    platform: str
    sort_by: str
    source: str
    status: str
    version: str


class DigitalExperienceMonitoringFleetStatusLive(TypedDict, total=False):
    result: dict


class DigitalExperienceMonitoringFleetStatusLiveLoadMatch(TypedDict):
    account_id: str
    since_minute: float


class DigitalExperienceMonitoringFleetStatusOverTime(TypedDict, total=False):
    result: dict


class DigitalExperienceMonitoringFleetStatusOverTimeLoadMatchRequired(TypedDict):
    account_id: str
    to: str


class DigitalExperienceMonitoringFleetStatusOverTimeLoadMatch(DigitalExperienceMonitoringFleetStatusOverTimeLoadMatchRequired, total=False):
    colo: str
    device_id: str


class Integration(TypedDict, total=False):
    id: str


class IntegrationRemoveMatch(TypedDict):
    account_id: str
    id: str


class Interconnect(TypedDict, total=False):
    id: str


class InterconnectLoadMatchRequired(TypedDict):
    account_id: str
    icon: str


class InterconnectLoadMatch(InterconnectLoadMatchRequired, total=False):
    name: str


class InterconnectRemoveMatch(TypedDict):
    account_id: str
    id: str


class IpProfileRequired(TypedDict):
    errors: list
    match: str
    messages: list
    name: str
    precedence: int
    result: dict
    result_info: dict
    subnet_id: str
    success: bool


class IpProfile(IpProfileRequired, total=False):
    description: str
    enabled: bool
    id: str


class IpProfileLoadMatch(TypedDict):
    account_id: str
    id: str


class IpProfileListMatchRequired(TypedDict):
    account_id: str


class IpProfileListMatch(IpProfileListMatchRequired, total=False):
    page: int
    per_page: int


class IpProfileCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    match: str
    messages: list
    name: str
    precedence: int
    result: dict
    result_info: dict
    subnet_id: str
    success: bool


class IpProfileCreateData(IpProfileCreateDataRequired, total=False):
    description: str
    enabled: bool
    id: str


class IpProfileUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class IpProfileUpdateData(IpProfileUpdateDataRequired, total=False):
    description: str
    enabled: bool
    errors: list
    match: str
    messages: list
    name: str
    precedence: int
    result: dict
    result_info: dict
    subnet_id: str
    success: bool


class IpProfileRemoveMatch(TypedDict):
    account_id: str
    id: str


class List(TypedDict, total=False):
    id: str


class ListRemoveMatch(TypedDict):
    account_id: str
    id: str


class Location(TypedDict, total=False):
    id: str


class LocationRemoveMatch(TypedDict):
    account_id: str
    id: str


class NscCniRequired(TypedDict):
    account: str
    bgp: dict
    cust_ip: str
    id: str
    interconnect: str
    magic: dict
    p2p_ip: str


class NscCni(NscCniRequired, total=False):
    bgp_mode: str


class NscCniLoadMatch(TypedDict):
    account_id: str
    id: str


class NscCniListMatchRequired(TypedDict):
    account_id: str


class NscCniListMatch(NscCniListMatchRequired, total=False):
    cursor: int
    limit: int
    slot: str
    tunnel_id: str


class NscCniCreateDataRequired(TypedDict):
    account_id: str
    account: str
    bgp: dict
    cust_ip: str
    id: str
    interconnect: str
    magic: dict
    p2p_ip: str


class NscCniCreateData(NscCniCreateDataRequired, total=False):
    bgp_mode: str


class NscCniUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class NscCniUpdateData(NscCniUpdateDataRequired, total=False):
    account: str
    bgp: dict
    bgp_mode: str
    cust_ip: str
    interconnect: str
    magic: dict
    p2p_ip: str


class NscDefaultName(TypedDict):
    name: str


class NscDefaultNameLoadMatch(TypedDict):
    account_id: str
    interconnect_id: str


class NscInterconnectRequired(TypedDict):
    items: list


class NscInterconnect(NscInterconnectRequired, total=False):
    id: str
    next: int


class NscInterconnectLoadMatch(TypedDict):
    account_id: str
    id: str


class NscInterconnectListMatchRequired(TypedDict):
    account_id: str


class NscInterconnectListMatch(NscInterconnectListMatchRequired, total=False):
    cursor: int
    limit: int
    site: str
    type: str


class NscInterconnectCreateDataRequired(TypedDict):
    account_id: str
    items: list


class NscInterconnectCreateData(NscInterconnectCreateDataRequired, total=False):
    id: str
    next: int


class NscSetting(TypedDict):
    default_asn: int


class NscSettingLoadMatch(TypedDict):
    account_id: str


class NscSettingUpdateDataRequired(TypedDict):
    account_id: str


class NscSettingUpdateData(NscSettingUpdateDataRequired, total=False):
    default_asn: int


class NscSlotInfoRequired(TypedDict):
    address: list
    facility: dict
    id: str
    name: str
    occupied: bool
    site: str
    speed: str


class NscSlotInfo(NscSlotInfoRequired, total=False):
    account: str
    ccr_device_name: str


class NscSlotInfoLoadMatch(TypedDict):
    account_id: str
    slot: str


class NscSlotInfoListMatchRequired(TypedDict):
    account_id: str


class NscSlotInfoListMatch(NscSlotInfoListMatchRequired, total=False):
    address_contain: str
    cursor: int
    limit: int
    occupied: bool
    site: str
    speed: str


class NscStatusInfo(TypedDict):
    pass


class NscStatusInfoLoadMatch(TypedDict):
    account_id: str
    icon: str


class OneApplicationDetailRequired(TypedDict):
    result: Any
    success: bool


class OneApplicationDetail(OneApplicationDetailRequired, total=False):
    errors: list
    messages: list


class OneApplicationDetailLoadMatch(TypedDict):
    account_id: str
    application_id: str


class OneIntegrationCreateRequired(TypedDict):
    application: str
    credentials: dict
    name: str


class OneIntegrationCreate(OneIntegrationCreateRequired, total=False):
    auth_method: str
    dlp_profiles: list
    permissions: list
    use_cases: list


class OneIntegrationCreateCreateDataRequired(TypedDict):
    account_id: str
    application: str
    credentials: dict
    name: str


class OneIntegrationCreateCreateData(OneIntegrationCreateCreateDataRequired, total=False):
    auth_method: str
    dlp_profiles: list
    permissions: list
    use_cases: list


class OneIntegrationDetailRequired(TypedDict):
    result: Any
    success: bool


class OneIntegrationDetail(OneIntegrationDetailRequired, total=False):
    errors: list
    id: str
    messages: list


class OneIntegrationDetailLoadMatch(TypedDict):
    account_id: str
    id: str


class OneIntegrationPauseRequired(TypedDict):
    result: Any
    success: bool


class OneIntegrationPause(OneIntegrationPauseRequired, total=False):
    errors: list
    messages: list


class OneIntegrationPauseCreateDataRequired(TypedDict):
    account_id: str
    integration_id: str
    result: Any
    success: bool


class OneIntegrationPauseCreateData(OneIntegrationPauseCreateDataRequired, total=False):
    errors: list
    messages: list


class OneIntegrationResumeRequired(TypedDict):
    result: Any
    success: bool


class OneIntegrationResume(OneIntegrationResumeRequired, total=False):
    errors: list
    messages: list


class OneIntegrationResumeCreateDataRequired(TypedDict):
    account_id: str
    integration_id: str
    result: Any
    success: bool


class OneIntegrationResumeCreateData(OneIntegrationResumeCreateDataRequired, total=False):
    errors: list
    messages: list


class OneIntegrationUpdateRequired(TypedDict):
    result: Any
    success: bool


class OneIntegrationUpdate(OneIntegrationUpdateRequired, total=False):
    credentials: dict
    dlp_profiles: list
    errors: list
    id: str
    messages: list
    name: str
    permissions: list
    use_cases: list


class OneIntegrationUpdateUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class OneIntegrationUpdateUpdateData(OneIntegrationUpdateUpdateDataRequired, total=False):
    credentials: dict
    dlp_profiles: list
    errors: list
    messages: list
    name: str
    permissions: list
    result: Any
    success: bool
    use_cases: list


class OnePaginatedApplicationListList(TypedDict):
    auth_methods: list
    category: str
    description: str
    display_name: str
    dlp_enabled: bool
    id: str
    logo: str
    permissions: list
    supported_environments: list
    use_cases: list


class OnePaginatedApplicationListListListMatchRequired(TypedDict):
    account_id: str


class OnePaginatedApplicationListListListMatch(OnePaginatedApplicationListListListMatchRequired, total=False):
    environment: str
    page: int
    page_size: int


class OnePaginatedAuthMethodDetailList(TypedDict):
    display_name: str
    human_interaction_required: bool
    id: str
    instructions: Any
    payload_example: dict
    payload_schema: dict
    redirect_url: str


class OnePaginatedAuthMethodDetailListListMatchRequired(TypedDict):
    account_id: str
    application_id: str


class OnePaginatedAuthMethodDetailListListMatch(OnePaginatedAuthMethodDetailListListMatchRequired, total=False):
    page: int
    page_size: int


class OnePaginatedIntegrationV2ListItemList(TypedDict):
    application: dict
    created: str
    id: str
    is_paused: bool
    name: str
    status: str
    updated: str


class OnePaginatedIntegrationV2ListItemListListMatchRequired(TypedDict):
    account_id: str


class OnePaginatedIntegrationV2ListItemListListMatch(OnePaginatedIntegrationV2ListItemListListMatchRequired, total=False):
    application: str
    direction: str
    dlp_enabled: bool
    order: str
    page: int
    page_size: int
    search: str
    status: str
    use_case: str


class OnePaginatedSetupFlowListRequired(TypedDict):
    default: bool
    description: str
    id: str
    name: str
    steps: list
    supported_environments: list


class OnePaginatedSetupFlowList(OnePaginatedSetupFlowListRequired, total=False):
    auth_config: Any


class OnePaginatedSetupFlowListListMatchRequired(TypedDict):
    account_id: str
    application_id: str


class OnePaginatedSetupFlowListListMatch(OnePaginatedSetupFlowListListMatchRequired, total=False):
    auth_method: str
    environment: str
    page: int
    page_size: int


class OverrideCodeRequired(TypedDict):
    duration_hours: int
    errors: list
    messages: list
    result: dict
    scope: str
    success: bool
    type: str


class OverrideCode(OverrideCodeRequired, total=False):
    device_id: str


class OverrideCodeCreateDataRequired(TypedDict):
    account_id: str
    duration_hours: int
    errors: list
    messages: list
    result: dict
    scope: str
    success: bool
    type: str


class OverrideCodeCreateData(OverrideCodeCreateDataRequired, total=False):
    device_id: str


class Pacfile(TypedDict, total=False):
    id: str


class PacfileRemoveMatch(TypedDict):
    account_id: str
    id: str


class PhysicalDeviceRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class PhysicalDevice(PhysicalDeviceRequired, total=False):
    id: str
    tags: dict


class PhysicalDeviceLoadMatchRequired(TypedDict):
    account_id: str
    id: str


class PhysicalDeviceLoadMatch(PhysicalDeviceLoadMatchRequired, total=False):
    include: str


class PhysicalDeviceListMatchRequired(TypedDict):
    account_id: str


class PhysicalDeviceListMatch(PhysicalDeviceListMatchRequired, total=False):
    active_registration: str
    cursor: str
    has_registration_type: bool
    id: list
    include: str
    last_seen_registration_policy_id: str
    last_seen_user_email: str
    per_page: int
    search: str
    seen_after: str
    seen_before: str
    sort_by: str
    sort_order: str
    tag: list


class PhysicalDeviceCreateDataRequired(TypedDict):
    account_id: str
    id: str
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class PhysicalDeviceCreateData(PhysicalDeviceCreateDataRequired, total=False):
    tags: dict


class PhysicalDeviceUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class PhysicalDeviceUpdateData(PhysicalDeviceUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool
    tags: dict


class PhysicalDeviceRemoveMatch(TypedDict):
    account_id: str
    id: str


class ProxyEndpoint(TypedDict, total=False):
    id: str


class ProxyEndpointRemoveMatch(TypedDict):
    account_id: str
    id: str


class RegistrationRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class Registration(RegistrationRequired, total=False):
    id: str


class RegistrationLoadMatchRequired(TypedDict):
    account_id: str
    id: str


class RegistrationLoadMatch(RegistrationLoadMatchRequired, total=False):
    include: str


class RegistrationListMatchRequired(TypedDict):
    account_id: str


class RegistrationListMatch(RegistrationListMatchRequired, total=False):
    cursor: str
    device_id: str
    id: list
    include: str
    per_page: int
    policy_id: str
    registration_type: str
    search: str
    seen_after: str
    seen_before: str
    sort_by: str
    sort_order: str
    status: str
    user_id: list


class RegistrationCreateData(TypedDict):
    account_id: str
    id: list
    errors: list
    messages: list
    result: dict
    result_info: dict
    success: bool


class RegistrationRemoveMatch(TypedDict):
    account_id: str
    id: str


class Rule(TypedDict, total=False):
    id: str


class RuleRemoveMatch(TypedDict):
    account_id: str
    id: str


class TeamsDevicesApiResponseSingle(TypedDict):
    pass


class TeamsDevicesApiResponseSingleCreateData(TypedDict):
    account_id: str


class TeamsDevicesComponentsSchemasResponseCollection(TypedDict, total=False):
    result: list


class TeamsDevicesComponentsSchemasResponseCollectionListMatch(TypedDict):
    account_id: str


class TeamsDevicesComponentsSchemasResponseCollectionRemoveMatch(TypedDict):
    account_id: str
    network_id: str


class TeamsDevicesComponentsSchemasSingleRequired(TypedDict):
    config: dict
    name: str
    type: str


class TeamsDevicesComponentsSchemasSingle(TeamsDevicesComponentsSchemasSingleRequired, total=False):
    result: dict


class TeamsDevicesComponentsSchemasSingleLoadMatch(TypedDict):
    account_id: str
    network_id: str


class TeamsDevicesComponentsSchemasSingleCreateDataRequired(TypedDict):
    account_id: str
    config: dict
    name: str
    type: str


class TeamsDevicesComponentsSchemasSingleCreateData(TeamsDevicesComponentsSchemasSingleCreateDataRequired, total=False):
    result: dict


class TeamsDevicesComponentsSchemasSingleUpdateDataRequired(TypedDict):
    account_id: str
    network_id: str


class TeamsDevicesComponentsSchemasSingleUpdateData(TeamsDevicesComponentsSchemasSingleUpdateDataRequired, total=False):
    config: dict
    name: str
    result: dict
    type: str


class TeamsDevicesDefaultDeviceSettingRequired(TypedDict):
    global_acceleration: dict
    virtual_networks: dict


class TeamsDevicesDefaultDeviceSetting(TeamsDevicesDefaultDeviceSettingRequired, total=False):
    allow_mode_switch: bool
    allow_updates: bool
    allowed_to_leave: bool
    auto_connect: float
    captive_portal: float
    disable_auto_fallback: bool
    dns_search_suffixes: list
    exclude: list
    exclude_office_ips: bool
    include: list
    lan_allow_minutes: float
    lan_allow_subnet_size: float
    register_interface_ip_with_dns: bool
    result: dict
    sccm_vpn_boundary_support: bool
    service_mode_v2: dict
    support_url: str
    switch_locked: bool
    tunnel_protocol: str
    uninstall_protection: bool


class TeamsDevicesDefaultDeviceSettingLoadMatch(TypedDict):
    account_id: str


class TeamsDevicesDefaultDeviceSettingUpdateDataRequired(TypedDict):
    account_id: str


class TeamsDevicesDefaultDeviceSettingUpdateData(TeamsDevicesDefaultDeviceSettingUpdateDataRequired, total=False):
    allow_mode_switch: bool
    allow_updates: bool
    allowed_to_leave: bool
    auto_connect: float
    captive_portal: float
    disable_auto_fallback: bool
    dns_search_suffixes: list
    exclude: list
    exclude_office_ips: bool
    global_acceleration: dict
    include: list
    lan_allow_minutes: float
    lan_allow_subnet_size: float
    register_interface_ip_with_dns: bool
    result: dict
    sccm_vpn_boundary_support: bool
    service_mode_v2: dict
    support_url: str
    switch_locked: bool
    tunnel_protocol: str
    uninstall_protection: bool
    virtual_networks: dict


class TeamsDevicesDevice(TypedDict, total=False):
    id: str
    result: dict


class TeamsDevicesDeviceLoadMatch(TypedDict):
    account_id: str
    id: str


class TeamsDevicesDeviceListMatch(TypedDict):
    account_id: str


class TeamsDevicesDeviceSettingRequired(TypedDict):
    browser_extension_config: dict
    global_acceleration: dict
    name: str
    virtual_networks: dict


class TeamsDevicesDeviceSetting(TeamsDevicesDeviceSettingRequired, total=False):
    allow_mode_switch: bool
    allow_updates: bool
    allowed_to_leave: bool
    auto_connect: float
    captive_portal: float
    default: bool
    description: str
    disable_auto_fallback: bool
    dns_search_suffixes: list
    enabled: bool
    exclude: list
    exclude_office_ips: bool
    include: list
    lan_allow_minutes: float
    lan_allow_subnet_size: float
    match: str
    precedence: float
    profile_type: str
    register_interface_ip_with_dns: bool
    result: dict
    sccm_vpn_boundary_support: bool
    service_mode_v2: dict
    support_url: str
    switch_locked: bool
    tunnel_protocol: str
    uninstall_protection: bool


class TeamsDevicesDeviceSettingLoadMatch(TypedDict):
    account_id: str
    policy_id: str


class TeamsDevicesDeviceSettingCreateDataRequired(TypedDict):
    account_id: str
    browser_extension_config: dict
    global_acceleration: dict
    name: str
    virtual_networks: dict


class TeamsDevicesDeviceSettingCreateData(TeamsDevicesDeviceSettingCreateDataRequired, total=False):
    allow_mode_switch: bool
    allow_updates: bool
    allowed_to_leave: bool
    auto_connect: float
    captive_portal: float
    default: bool
    description: str
    disable_auto_fallback: bool
    dns_search_suffixes: list
    enabled: bool
    exclude: list
    exclude_office_ips: bool
    include: list
    lan_allow_minutes: float
    lan_allow_subnet_size: float
    match: str
    precedence: float
    profile_type: str
    register_interface_ip_with_dns: bool
    result: dict
    sccm_vpn_boundary_support: bool
    service_mode_v2: dict
    support_url: str
    switch_locked: bool
    tunnel_protocol: str
    uninstall_protection: bool


class TeamsDevicesDeviceSettingUpdateDataRequired(TypedDict):
    account_id: str
    policy_id: str


class TeamsDevicesDeviceSettingUpdateData(TeamsDevicesDeviceSettingUpdateDataRequired, total=False):
    allow_mode_switch: bool
    allow_updates: bool
    allowed_to_leave: bool
    auto_connect: float
    browser_extension_config: dict
    captive_portal: float
    default: bool
    description: str
    disable_auto_fallback: bool
    dns_search_suffixes: list
    enabled: bool
    exclude: list
    exclude_office_ips: bool
    global_acceleration: dict
    include: list
    lan_allow_minutes: float
    lan_allow_subnet_size: float
    match: str
    name: str
    precedence: float
    profile_type: str
    register_interface_ip_with_dns: bool
    result: dict
    sccm_vpn_boundary_support: bool
    service_mode_v2: dict
    support_url: str
    switch_locked: bool
    tunnel_protocol: str
    uninstall_protection: bool
    virtual_networks: dict


class TeamsDevicesDeviceSettingsResponseCollection(TypedDict, total=False):
    result: list


class TeamsDevicesDeviceSettingsResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class TeamsDevicesDeviceSettingsResponseCollectionListMatch(TeamsDevicesDeviceSettingsResponseCollectionListMatchRequired, total=False):
    profile_type: str


class TeamsDevicesDeviceSettingsResponseCollectionRemoveMatch(TypedDict):
    account_id: str
    policy_id: str


class TeamsDevicesDevicesPolicyCertificatesSingle(TypedDict):
    enabled: bool
    result: dict


class TeamsDevicesDevicesPolicyCertificatesSingleLoadMatch(TypedDict):
    zone_id: str


class TeamsDevicesDevicesPolicyCertificatesSingleUpdateDataRequired(TypedDict):
    zone_id: str


class TeamsDevicesDevicesPolicyCertificatesSingleUpdateData(TeamsDevicesDevicesPolicyCertificatesSingleUpdateDataRequired, total=False):
    enabled: bool
    result: dict


class TeamsDevicesFallbackDomainResponseCollection(TypedDict, total=False):
    result: list


class TeamsDevicesFallbackDomainResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class TeamsDevicesFallbackDomainResponseCollectionListMatch(TeamsDevicesFallbackDomainResponseCollectionListMatchRequired, total=False):
    policy_id: str


class TeamsDevicesFallbackDomainResponseCollectionUpdateDataRequired(TypedDict):
    account_id: str


class TeamsDevicesFallbackDomainResponseCollectionUpdateData(TeamsDevicesFallbackDomainResponseCollectionUpdateDataRequired, total=False):
    policy_id: str
    result: list


class TeamsDevicesFallbackDomainResponseCollectionRemoveMatchRequired(TypedDict):
    account_id: str


class TeamsDevicesFallbackDomainResponseCollectionRemoveMatch(TeamsDevicesFallbackDomainResponseCollectionRemoveMatchRequired, total=False):
    policy_id: str
    reset_default: bool


class TeamsDevicesGlobalWarpOverrideRequired(TypedDict):
    disconnect: bool


class TeamsDevicesGlobalWarpOverride(TeamsDevicesGlobalWarpOverrideRequired, total=False):
    justification: str
    result: dict


class TeamsDevicesGlobalWarpOverrideLoadMatch(TypedDict):
    account_id: str


class TeamsDevicesGlobalWarpOverrideCreateDataRequired(TypedDict):
    account_id: str
    disconnect: bool


class TeamsDevicesGlobalWarpOverrideCreateData(TeamsDevicesGlobalWarpOverrideCreateDataRequired, total=False):
    justification: str
    result: dict


class TeamsDevicesId(TypedDict):
    pass


class TeamsDevicesIdRemoveMatch(TypedDict):
    account_id: str
    rule_id: str


class TeamsDevicesOverrideCode(TypedDict, total=False):
    result: dict


class TeamsDevicesOverrideCodeLoadMatch(TypedDict):
    account_id: str
    device_id: str


class TeamsDevicesResponseCollection(TypedDict, total=False):
    result: list


class TeamsDevicesResponseCollectionListMatch(TypedDict):
    account_id: str


class TeamsDevicesSchemasId(TypedDict):
    pass


class TeamsDevicesSchemasIdRemoveMatch(TypedDict):
    account_id: str
    integration_id: str


class TeamsDevicesSchemasResponseCollection(TypedDict, total=False):
    result: list


class TeamsDevicesSchemasResponseCollectionListMatch(TypedDict):
    account_id: str


class TeamsDevicesSchemasSingleRequired(TypedDict):
    config: dict
    interval: str
    name: str
    type: str


class TeamsDevicesSchemasSingle(TeamsDevicesSchemasSingleRequired, total=False):
    result: dict


class TeamsDevicesSchemasSingleLoadMatch(TypedDict):
    account_id: str
    integration_id: str


class TeamsDevicesSchemasSingleCreateDataRequired(TypedDict):
    account_id: str
    config: dict
    interval: str
    name: str
    type: str


class TeamsDevicesSchemasSingleCreateData(TeamsDevicesSchemasSingleCreateDataRequired, total=False):
    result: dict


class TeamsDevicesSchemasSingleUpdateDataRequired(TypedDict):
    account_id: str
    integration_id: str


class TeamsDevicesSchemasSingleUpdateData(TeamsDevicesSchemasSingleUpdateDataRequired, total=False):
    config: dict
    interval: str
    name: str
    result: dict
    type: str


class TeamsDevicesSingleRequired(TypedDict):
    name: str
    type: str


class TeamsDevicesSingle(TeamsDevicesSingleRequired, total=False):
    description: str
    expiration: str
    input: dict
    match: list
    result: dict
    schedule: str


class TeamsDevicesSingleLoadMatch(TypedDict):
    account_id: str
    rule_id: str


class TeamsDevicesSingleCreateDataRequired(TypedDict):
    account_id: str
    name: str
    type: str


class TeamsDevicesSingleCreateData(TeamsDevicesSingleCreateDataRequired, total=False):
    description: str
    expiration: str
    input: dict
    match: list
    result: dict
    schedule: str


class TeamsDevicesSingleUpdateDataRequired(TypedDict):
    account_id: str
    rule_id: str


class TeamsDevicesSingleUpdateData(TeamsDevicesSingleUpdateDataRequired, total=False):
    description: str
    expiration: str
    input: dict
    match: list
    name: str
    result: dict
    schedule: str
    type: str


class TeamsDevicesSplitTunnelIncludeResponseCollection(TypedDict, total=False):
    result: list


class TeamsDevicesSplitTunnelIncludeResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class TeamsDevicesSplitTunnelIncludeResponseCollectionListMatch(TeamsDevicesSplitTunnelIncludeResponseCollectionListMatchRequired, total=False):
    policy_id: str


class TeamsDevicesSplitTunnelIncludeResponseCollectionUpdateDataRequired(TypedDict):
    account_id: str


class TeamsDevicesSplitTunnelIncludeResponseCollectionUpdateData(TeamsDevicesSplitTunnelIncludeResponseCollectionUpdateDataRequired, total=False):
    policy_id: str
    result: list


class TeamsDevicesSplitTunnelResponseCollection(TypedDict, total=False):
    result: list


class TeamsDevicesSplitTunnelResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class TeamsDevicesSplitTunnelResponseCollectionListMatch(TeamsDevicesSplitTunnelResponseCollectionListMatchRequired, total=False):
    policy_id: str


class TeamsDevicesSplitTunnelResponseCollectionUpdateDataRequired(TypedDict):
    account_id: str


class TeamsDevicesSplitTunnelResponseCollectionUpdateData(TeamsDevicesSplitTunnelResponseCollectionUpdateDataRequired, total=False):
    policy_id: str
    result: list


class TeamsDevicesSplitTunnelResponseCollectionRemoveMatchRequired(TypedDict):
    account_id: str


class TeamsDevicesSplitTunnelResponseCollectionRemoveMatch(TeamsDevicesSplitTunnelResponseCollectionRemoveMatchRequired, total=False):
    policy_id: str
    reset_default: bool


class TeamsDevicesZeroTrustAccountDeviceSetting(TypedDict, total=False):
    disable_for_time: float
    external_emergency_signal_enabled: bool
    external_emergency_signal_fingerprint: str
    external_emergency_signal_interval: str
    external_emergency_signal_url: str
    gateway_proxy_enabled: bool
    gateway_udp_proxy_enabled: bool
    result: dict
    root_certificate_installation_enabled: bool
    use_zt_virtual_ip: bool


class TeamsDevicesZeroTrustAccountDeviceSettingLoadMatch(TypedDict):
    account_id: str


class TeamsDevicesZeroTrustAccountDeviceSettingUpdateDataRequired(TypedDict):
    account_id: str


class TeamsDevicesZeroTrustAccountDeviceSettingUpdateData(TeamsDevicesZeroTrustAccountDeviceSettingUpdateDataRequired, total=False):
    disable_for_time: float
    external_emergency_signal_enabled: bool
    external_emergency_signal_fingerprint: str
    external_emergency_signal_interval: str
    external_emergency_signal_url: str
    gateway_proxy_enabled: bool
    gateway_udp_proxy_enabled: bool
    result: dict
    root_certificate_installation_enabled: bool
    use_zt_virtual_ip: bool


class TeamsDevicesZeroTrustAccountDeviceSettingRemoveMatch(TypedDict):
    account_id: str


class Tunnel(TypedDict, total=False):
    result: list


class TunnelListMatchRequired(TypedDict):
    account_id: str


class TunnelListMatch(TunnelListMatchRequired, total=False):
    exclude_prefix: str
    existed_at: str
    include_prefix: str
    is_deleted: bool
    name: str
    page: float
    per_page: float
    status: str
    tun_type: list
    uuid: str
    was_active_at: str
    was_inactive_at: str


class TunnelCfdTunnelResponseCollection(TypedDict, total=False):
    result: list


class TunnelCfdTunnelResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class TunnelCfdTunnelResponseCollectionListMatch(TunnelCfdTunnelResponseCollectionListMatchRequired, total=False):
    exclude_prefix: str
    existed_at: str
    include_prefix: str
    is_deleted: bool
    name: str
    page: float
    per_page: float
    status: str
    uuid: str
    was_active_at: str
    was_inactive_at: str


class TunnelCfdTunnelResponseSingleRequired(TypedDict):
    errors: list
    messages: list
    name: str
    result: str
    success: bool


class TunnelCfdTunnelResponseSingle(TunnelCfdTunnelResponseSingleRequired, total=False):
    config_src: str
    tunnel_secret: str


class TunnelCfdTunnelResponseSingleLoadMatch(TypedDict):
    account_id: str
    tunnel_id: str


class TunnelCfdTunnelResponseSingleCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    name: str
    result: str
    success: bool


class TunnelCfdTunnelResponseSingleCreateData(TunnelCfdTunnelResponseSingleCreateDataRequired, total=False):
    config_src: str
    tunnel_secret: str


class TunnelCfdTunnelResponseSingleUpdateDataRequired(TypedDict):
    account_id: str
    tunnel_id: str


class TunnelCfdTunnelResponseSingleUpdateData(TunnelCfdTunnelResponseSingleUpdateDataRequired, total=False):
    config_src: str
    errors: list
    messages: list
    name: str
    result: str
    success: bool
    tunnel_secret: str


class TunnelCfdTunnelResponseSingleRemoveMatch(TypedDict):
    account_id: str
    tunnel_id: str


class TunnelConfiguration(TypedDict, total=False):
    config: dict
    result: dict


class TunnelConfigurationLoadMatch(TypedDict):
    account_id: str
    cfd_tunnel_id: str


class TunnelConfigurationUpdateDataRequired(TypedDict):
    account_id: str
    cfd_tunnel_id: str


class TunnelConfigurationUpdateData(TunnelConfigurationUpdateDataRequired, total=False):
    config: dict
    result: dict


class TunnelEmpty(TypedDict):
    client_id: str


class TunnelEmptyUpdateDataRequired(TypedDict):
    account_id: str
    warp_connector_id: str


class TunnelEmptyUpdateData(TunnelEmptyUpdateDataRequired, total=False):
    client_id: str


class TunnelEmptyRemoveMatchRequired(TypedDict):
    account_id: str
    cfd_tunnel_id: str


class TunnelEmptyRemoveMatch(TunnelEmptyRemoveMatchRequired, total=False):
    client_id: str


class TunnelHostnameRouteResponseCollection(TypedDict, total=False):
    result: list


class TunnelHostnameRouteResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class TunnelHostnameRouteResponseCollectionListMatch(TunnelHostnameRouteResponseCollectionListMatchRequired, total=False):
    comment: str
    existed_at: str
    hostname: str
    id: str
    is_deleted: bool
    page: float
    per_page: float
    tunnel_id: str


class TunnelHostnameRouteResponseSingleRequired(TypedDict):
    errors: list
    messages: list
    result: str
    success: bool


class TunnelHostnameRouteResponseSingle(TunnelHostnameRouteResponseSingleRequired, total=False):
    comment: str
    hostname: str
    tunnel_id: str


class TunnelHostnameRouteResponseSingleLoadMatch(TypedDict):
    account_id: str
    hostname_route_id: str


class TunnelHostnameRouteResponseSingleCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    result: str
    success: bool


class TunnelHostnameRouteResponseSingleCreateData(TunnelHostnameRouteResponseSingleCreateDataRequired, total=False):
    comment: str
    hostname: str
    tunnel_id: str


class TunnelHostnameRouteResponseSingleUpdateDataRequired(TypedDict):
    account_id: str
    hostname_route_id: str


class TunnelHostnameRouteResponseSingleUpdateData(TunnelHostnameRouteResponseSingleUpdateDataRequired, total=False):
    comment: str
    errors: list
    hostname: str
    messages: list
    result: str
    success: bool
    tunnel_id: str


class TunnelHostnameRouteResponseSingleRemoveMatch(TypedDict):
    account_id: str
    hostname_route_id: str


class TunnelMeshConfigurationResponseSingleRequired(TypedDict):
    ha_mode: str
    result: dict


class TunnelMeshConfigurationResponseSingle(TunnelMeshConfigurationResponseSingleRequired, total=False):
    config: dict


class TunnelMeshConfigurationResponseSingleLoadMatch(TypedDict):
    account_id: str
    warp_connector_id: str


class TunnelMeshConfigurationResponseSingleUpdateDataRequired(TypedDict):
    account_id: str
    warp_connector_id: str


class TunnelMeshConfigurationResponseSingleUpdateData(TunnelMeshConfigurationResponseSingleUpdateDataRequired, total=False):
    config: dict
    ha_mode: str
    result: dict


class TunnelRouteResponseSingleRequired(TypedDict):
    errors: list
    messages: list
    network: str
    result: str
    success: bool
    tunnel_id: str


class TunnelRouteResponseSingle(TunnelRouteResponseSingleRequired, total=False):
    comment: str
    virtual_network_id: str


class TunnelRouteResponseSingleLoadMatch(TypedDict):
    account_id: str
    route_id: str


class TunnelRouteResponseSingleCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    network: str
    result: str
    success: bool
    tunnel_id: str


class TunnelRouteResponseSingleCreateData(TunnelRouteResponseSingleCreateDataRequired, total=False):
    ip_network_encoded: str
    comment: str
    virtual_network_id: str


class TunnelRouteResponseSingleUpdateDataRequired(TypedDict):
    account_id: str


class TunnelRouteResponseSingleUpdateData(TunnelRouteResponseSingleUpdateDataRequired, total=False):
    ip_network_encoded: str
    route_id: str
    comment: str
    errors: list
    messages: list
    network: str
    result: str
    success: bool
    tunnel_id: str
    virtual_network_id: str


class TunnelRouteResponseSingleRemoveMatchRequired(TypedDict):
    account_id: str


class TunnelRouteResponseSingleRemoveMatch(TunnelRouteResponseSingleRemoveMatchRequired, total=False):
    ip_network_encoded: str
    tun_type: str
    tunnel_id: str
    virtual_network_id: str
    route_id: str


class TunnelSubnetResponseCollection(TypedDict, total=False):
    result: list


class TunnelSubnetResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class TunnelSubnetResponseCollectionListMatch(TunnelSubnetResponseCollectionListMatchRequired, total=False):
    address_family: str
    comment: str
    existed_at: str
    is_default_network: bool
    is_deleted: bool
    name: str
    network: Any
    page: float
    per_page: float
    sort_order: str
    subnet_type: str


class TunnelSubnetResponseSingleRequired(TypedDict):
    errors: list
    messages: list
    name: str
    network: str
    result: str
    success: bool


class TunnelSubnetResponseSingle(TunnelSubnetResponseSingleRequired, total=False):
    comment: str
    is_default_network: bool


class TunnelSubnetResponseSingleLoadMatch(TypedDict):
    account_id: str
    address_family: str


class TunnelSubnetResponseSingleCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    name: str
    network: str
    result: str
    success: bool


class TunnelSubnetResponseSingleCreateData(TunnelSubnetResponseSingleCreateDataRequired, total=False):
    comment: str
    is_default_network: bool


class TunnelSubnetResponseSingleUpdateDataRequired(TypedDict):
    account_id: str
    address_family: str


class TunnelSubnetResponseSingleUpdateData(TunnelSubnetResponseSingleUpdateDataRequired, total=False):
    comment: str
    errors: list
    is_default_network: bool
    messages: list
    name: str
    network: str
    result: str
    success: bool


class TunnelSubnetResponseSingleNullable(TypedDict):
    pass


class TunnelSubnetResponseSingleNullableRemoveMatch(TypedDict):
    account_id: str
    subnet_id: str


class TunnelTeamnetResponseCollection(TypedDict, total=False):
    result: list


class TunnelTeamnetResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class TunnelTeamnetResponseCollectionListMatch(TunnelTeamnetResponseCollectionListMatchRequired, total=False):
    comment: str
    existed_at: str
    is_deleted: bool
    network_subset: Any
    network_superset: Any
    page: float
    per_page: float
    route_id: str
    tun_type: list
    tunnel_id: str
    virtual_network_id: str


class TunnelTeamnetResponseSingle(TypedDict):
    errors: list
    messages: list
    result: str
    success: bool


class TunnelTeamnetResponseSingleLoadMatchRequired(TypedDict):
    account_id: str
    ip: str


class TunnelTeamnetResponseSingleLoadMatch(TunnelTeamnetResponseSingleLoadMatchRequired, total=False):
    default_virtual_network_fallback: bool
    virtual_network_id: str


class TunnelTunnelClient(TypedDict):
    errors: list
    messages: list
    result: str
    success: bool


class TunnelTunnelClientLoadMatch(TypedDict):
    account_id: str
    cfd_tunnel_id: str
    connector_id: str


class TunnelTunnelConnection(TypedDict, total=False):
    result: list


class TunnelTunnelConnectionListMatch(TypedDict):
    account_id: str
    cfd_tunnel_id: str


class TunnelTunnelResponseToken(TypedDict):
    errors: list
    messages: list
    resources: list
    result: str
    success: bool


class TunnelTunnelResponseTokenListMatchRequired(TypedDict):
    account_id: str


class TunnelTunnelResponseTokenListMatch(TunnelTunnelResponseTokenListMatchRequired, total=False):
    cfd_tunnel_id: str
    warp_connector_id: str


class TunnelTunnelResponseTokenCreateData(TypedDict):
    account_id: str
    cfd_tunnel_id: str
    errors: list
    messages: list
    resources: list
    result: str
    success: bool


class TunnelTunnelWarpConnectorClient(TypedDict):
    errors: list
    messages: list
    result: str
    success: bool


class TunnelTunnelWarpConnectorClientLoadMatch(TypedDict):
    account_id: str
    connector_id: str
    warp_connector_id: str


class TunnelTunnelWarpConnectorConnection(TypedDict, total=False):
    result: list


class TunnelTunnelWarpConnectorConnectionListMatch(TypedDict):
    account_id: str
    warp_connector_id: str


class TunnelVnetResponseCollection(TypedDict, total=False):
    result: list


class TunnelVnetResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class TunnelVnetResponseCollectionListMatch(TunnelVnetResponseCollectionListMatchRequired, total=False):
    id: str
    is_default: bool
    is_default_network: bool
    is_deleted: bool
    name: str


class TunnelVnetResponseSingle(TypedDict, total=False):
    comment: str
    is_default: bool
    is_default_network: bool
    name: str


class TunnelVnetResponseSingleLoadMatch(TypedDict):
    account_id: str
    virtual_network_id: str


class TunnelVnetResponseSingleCreateDataRequired(TypedDict):
    account_id: str


class TunnelVnetResponseSingleCreateData(TunnelVnetResponseSingleCreateDataRequired, total=False):
    comment: str
    is_default: bool
    is_default_network: bool
    name: str


class TunnelVnetResponseSingleUpdateDataRequired(TypedDict):
    account_id: str
    virtual_network_id: str


class TunnelVnetResponseSingleUpdateData(TunnelVnetResponseSingleUpdateDataRequired, total=False):
    comment: str
    is_default: bool
    is_default_network: bool
    name: str


class TunnelVnetResponseSingleRemoveMatch(TypedDict):
    account_id: str
    virtual_network_id: str


class TunnelWarpConnectorResponseCollection(TypedDict, total=False):
    result: list


class TunnelWarpConnectorResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class TunnelWarpConnectorResponseCollectionListMatch(TunnelWarpConnectorResponseCollectionListMatchRequired, total=False):
    exclude_prefix: str
    existed_at: str
    include_prefix: str
    is_deleted: bool
    name: str
    page: float
    per_page: float
    status: str
    uuid: str
    was_active_at: str
    was_inactive_at: str


class TunnelWarpConnectorResponseSingleRequired(TypedDict):
    errors: list
    messages: list
    name: str
    result: str
    success: bool


class TunnelWarpConnectorResponseSingle(TunnelWarpConnectorResponseSingleRequired, total=False):
    ha: bool
    tunnel_secret: str


class TunnelWarpConnectorResponseSingleLoadMatch(TypedDict):
    account_id: str
    tunnel_id: str


class TunnelWarpConnectorResponseSingleCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    name: str
    result: str
    success: bool


class TunnelWarpConnectorResponseSingleCreateData(TunnelWarpConnectorResponseSingleCreateDataRequired, total=False):
    ha: bool
    tunnel_secret: str


class TunnelWarpConnectorResponseSingleUpdateDataRequired(TypedDict):
    account_id: str
    tunnel_id: str


class TunnelWarpConnectorResponseSingleUpdateData(TunnelWarpConnectorResponseSingleUpdateDataRequired, total=False):
    errors: list
    ha: bool
    messages: list
    name: str
    result: str
    success: bool
    tunnel_secret: str


class TunnelWarpConnectorResponseSingleRemoveMatch(TypedDict):
    account_id: str
    tunnel_id: str


class TunnelZeroTrustConnectivitySettingRequired(TypedDict):
    errors: list
    messages: list
    result: str
    success: bool


class TunnelZeroTrustConnectivitySetting(TunnelZeroTrustConnectivitySettingRequired, total=False):
    icmp_proxy_enabled: bool
    offramp_warp_enabled: bool


class TunnelZeroTrustConnectivitySettingListMatch(TypedDict):
    account_id: str


class TunnelZeroTrustConnectivitySettingUpdateDataRequired(TypedDict):
    account_id: str


class TunnelZeroTrustConnectivitySettingUpdateData(TunnelZeroTrustConnectivitySettingUpdateDataRequired, total=False):
    errors: list
    icmp_proxy_enabled: bool
    messages: list
    offramp_warp_enabled: bool
    result: str
    success: bool


class WarpRequired(TypedDict):
    errors: list
    messages: list
    result: str
    success: bool


class Warp(WarpRequired, total=False):
    comment: str
    id: str
    is_default_network: bool
    name: str
    network: str


class WarpLoadMatch(TypedDict):
    account_id: str
    id: str


class WarpUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class WarpUpdateData(WarpUpdateDataRequired, total=False):
    comment: str
    errors: list
    is_default_network: bool
    messages: list
    name: str
    network: str
    result: str
    success: bool


class WarpChangeEvent(TypedDict, total=False):
    result: list


class WarpChangeEventListMatchRequired(TypedDict):
    account_id: str
    page: float
    per_page: float
    to: str


class WarpChangeEventListMatch(WarpChangeEventListMatchRequired, total=False):
    account_name: str
    config_name: str
    sort_order: str
    toggle: str
    type: str


class WarpTeamsDeviceApiOther(TypedDict):
    errors: list
    messages: list
    result: Any
    success: bool


class WarpTeamsDeviceApiOtherListMatch(TypedDict):
    account_id: str
    registration_id: str


class ZeroTrustGatewayApplicationsReviewStatusRequired(TypedDict):
    approved_apps: list
    in_review_apps: list
    unapproved_apps: list


class ZeroTrustGatewayApplicationsReviewStatus(ZeroTrustGatewayApplicationsReviewStatusRequired, total=False):
    result: dict


class ZeroTrustGatewayApplicationsReviewStatusLoadMatch(TypedDict):
    account_id: str


class ZeroTrustGatewayApplicationsReviewStatusUpdateDataRequired(TypedDict):
    account_id: str


class ZeroTrustGatewayApplicationsReviewStatusUpdateData(ZeroTrustGatewayApplicationsReviewStatusUpdateDataRequired, total=False):
    approved_apps: list
    in_review_apps: list
    result: dict
    unapproved_apps: list


class ZeroTrustGatewayCsvOperationSingle(TypedDict):
    pass


class ZeroTrustGatewayCsvOperationSingleCreateData(TypedDict):
    account_id: str


class ZeroTrustGatewayCustomCertificateSettingRequired(TypedDict):
    enabled: bool


class ZeroTrustGatewayCustomCertificateSetting(ZeroTrustGatewayCustomCertificateSettingRequired, total=False):
    binding_status: str
    id: str
    updated_at: str


class ZeroTrustGatewayCustomCertificateSettingLoadMatch(TypedDict):
    account_id: str


class ZeroTrustGatewayGatewayAccount(TypedDict, total=False):
    result: dict


class ZeroTrustGatewayGatewayAccountLoadMatch(TypedDict):
    account_id: str


class ZeroTrustGatewayGatewayAccountCreateDataRequired(TypedDict):
    account_id: str


class ZeroTrustGatewayGatewayAccountCreateData(ZeroTrustGatewayGatewayAccountCreateDataRequired, total=False):
    result: dict


class ZeroTrustGatewayGatewayAccountConfig(TypedDict, total=False):
    result: dict
    settings: dict


class ZeroTrustGatewayGatewayAccountConfigLoadMatch(TypedDict):
    account_id: str


class ZeroTrustGatewayGatewayAccountConfigUpdateDataRequired(TypedDict):
    account_id: str


class ZeroTrustGatewayGatewayAccountConfigUpdateData(ZeroTrustGatewayGatewayAccountConfigUpdateDataRequired, total=False):
    result: dict
    settings: dict


class ZeroTrustGatewayGatewayAccountEgressCidrPairList(TypedDict, total=False):
    result: list


class ZeroTrustGatewayGatewayAccountEgressCidrPairListListMatch(TypedDict):
    account_id: str


class ZeroTrustGatewayGatewayAccountLoggingSetting(TypedDict, total=False):
    redact_pii: bool
    result: dict
    settings_by_rule_type: dict


class ZeroTrustGatewayGatewayAccountLoggingSettingLoadMatch(TypedDict):
    account_id: str


class ZeroTrustGatewayGatewayAccountLoggingSettingUpdateDataRequired(TypedDict):
    account_id: str


class ZeroTrustGatewayGatewayAccountLoggingSettingUpdateData(ZeroTrustGatewayGatewayAccountLoggingSettingUpdateDataRequired, total=False):
    redact_pii: bool
    result: dict
    settings_by_rule_type: dict


class ZeroTrustGatewayListItemResponseCollection(TypedDict, total=False):
    result: list
    result_info: dict


class ZeroTrustGatewayListItemResponseCollectionListMatchRequired(TypedDict):
    account_id: str
    list_id: str


class ZeroTrustGatewayListItemResponseCollectionListMatch(ZeroTrustGatewayListItemResponseCollectionListMatchRequired, total=False):
    page: int
    per_page: int


class ZeroTrustGatewayListSingleRequired(TypedDict):
    name: str


class ZeroTrustGatewayListSingle(ZeroTrustGatewayListSingleRequired, total=False):
    append: list
    description: str
    items: list
    remove: list
    result: dict


class ZeroTrustGatewayListSingleLoadMatch(TypedDict):
    account_id: str
    list_id: str


class ZeroTrustGatewayListSingleUpdateDataRequired(TypedDict):
    account_id: str
    list_id: str


class ZeroTrustGatewayListSingleUpdateData(ZeroTrustGatewayListSingleUpdateDataRequired, total=False):
    append: list
    description: str
    items: list
    name: str
    remove: list
    result: dict


class ZeroTrustGatewayResponseCollection(TypedDict, total=False):
    result: list


class ZeroTrustGatewayResponseCollectionListMatch(TypedDict):
    account_id: str


class ZeroTrustGatewayResponseCollection10(TypedDict, total=False):
    result: list
    result_info: dict


class ZeroTrustGatewayResponseCollection10ListMatchRequired(TypedDict):
    account_id: str


class ZeroTrustGatewayResponseCollection10ListMatch(ZeroTrustGatewayResponseCollection10ListMatchRequired, total=False):
    page: int
    per_page: int


class ZeroTrustGatewayResponseCollection2(TypedDict, total=False):
    result: list


class ZeroTrustGatewayResponseCollection2ListMatch(TypedDict):
    account_id: str


class ZeroTrustGatewayResponseCollection3(TypedDict, total=False):
    result: list


class ZeroTrustGatewayResponseCollection3ListMatchRequired(TypedDict):
    account_id: str


class ZeroTrustGatewayResponseCollection3ListMatch(ZeroTrustGatewayResponseCollection3ListMatchRequired, total=False):
    direction: str
    filter: list
    order_by: str
    search: str
    type: str


class ZeroTrustGatewayResponseCollection4(TypedDict, total=False):
    result: list


class ZeroTrustGatewayResponseCollection4ListMatch(TypedDict):
    account_id: str


class ZeroTrustGatewayResponseCollection5(TypedDict, total=False):
    result: list


class ZeroTrustGatewayResponseCollection5ListMatchRequired(TypedDict):
    account_id: str


class ZeroTrustGatewayResponseCollection5ListMatch(ZeroTrustGatewayResponseCollection5ListMatchRequired, total=False):
    direction: str
    filter: list
    order_by: str
    search: str


class ZeroTrustGatewayResponseCollection6(TypedDict, total=False):
    result: list


class ZeroTrustGatewayResponseCollection6ListMatchRequired(TypedDict):
    account_id: str


class ZeroTrustGatewayResponseCollection6ListMatch(ZeroTrustGatewayResponseCollection6ListMatchRequired, total=False):
    direction: str
    filter: list
    order_by: str
    search: str


class ZeroTrustGatewayResponseCollection6UpdateDataRequired(TypedDict):
    account_id: str


class ZeroTrustGatewayResponseCollection6UpdateData(ZeroTrustGatewayResponseCollection6UpdateDataRequired, total=False):
    result: list


class ZeroTrustGatewayResponseCollection7(TypedDict, total=False):
    result: list


class ZeroTrustGatewayResponseCollection7ListMatch(TypedDict):
    account_id: str


class ZeroTrustGatewayResponseCollection8(TypedDict, total=False):
    result: list


class ZeroTrustGatewayResponseCollection8ListMatch(TypedDict):
    account_id: str


class ZeroTrustGatewayResponseCollection9(TypedDict, total=False):
    result: list


class ZeroTrustGatewayResponseCollection9ListMatchRequired(TypedDict):
    account_id: str


class ZeroTrustGatewayResponseCollection9ListMatch(ZeroTrustGatewayResponseCollection9ListMatchRequired, total=False):
    direction: str
    filter: list
    order_by: str
    search: str


class ZeroTrustGatewaySingle(TypedDict, total=False):
    result: dict
    validity_period_days: int


class ZeroTrustGatewaySingleLoadMatch(TypedDict):
    account_id: str
    certificate_id: str


class ZeroTrustGatewaySingleCreateDataRequired(TypedDict):
    account_id: str


class ZeroTrustGatewaySingleCreateData(ZeroTrustGatewaySingleCreateDataRequired, total=False):
    certificate_id: str
    result: dict
    validity_period_days: int


class ZeroTrustGatewaySingleRemoveMatch(TypedDict):
    account_id: str
    certificate_id: str


class ZeroTrustGatewaySingleResponse2(TypedDict, total=False):
    result: dict


class ZeroTrustGatewaySingleResponse2LoadMatch(TypedDict):
    account_id: str
    operation_id: str


class ZeroTrustGatewaySingleResponse3Required(TypedDict):
    endpoints: dict
    max_ttl: dict
    name: str


class ZeroTrustGatewaySingleResponse3(ZeroTrustGatewaySingleResponse3Required, total=False):
    client_default: bool
    dns_destination_ips_id: str
    ecs_support: bool
    networks: list
    result: dict


class ZeroTrustGatewaySingleResponse3LoadMatch(TypedDict):
    account_id: str
    location_id: str


class ZeroTrustGatewaySingleResponse3CreateDataRequired(TypedDict):
    account_id: str
    endpoints: dict
    max_ttl: dict
    name: str


class ZeroTrustGatewaySingleResponse3CreateData(ZeroTrustGatewaySingleResponse3CreateDataRequired, total=False):
    client_default: bool
    dns_destination_ips_id: str
    ecs_support: bool
    networks: list
    result: dict


class ZeroTrustGatewaySingleResponse3UpdateDataRequired(TypedDict):
    account_id: str
    location_id: str


class ZeroTrustGatewaySingleResponse3UpdateData(ZeroTrustGatewaySingleResponse3UpdateDataRequired, total=False):
    client_default: bool
    dns_destination_ips_id: str
    ecs_support: bool
    endpoints: dict
    max_ttl: dict
    name: str
    networks: list
    result: dict


class ZeroTrustGatewaySingleResponse4Required(TypedDict):
    action: str
    expiration: dict
    name: str
    result: dict


class ZeroTrustGatewaySingleResponse4(ZeroTrustGatewaySingleResponse4Required, total=False):
    description: str
    device_posture: str
    enabled: bool
    filters: list
    identity: str
    precedence: int
    rule_settings: dict
    schedule: dict
    traffic: str


class ZeroTrustGatewaySingleResponse4LoadMatch(TypedDict):
    account_id: str
    rule_id: str


class ZeroTrustGatewaySingleResponse4CreateDataRequired(TypedDict):
    account_id: str
    action: str
    expiration: dict
    name: str
    result: dict


class ZeroTrustGatewaySingleResponse4CreateData(ZeroTrustGatewaySingleResponse4CreateDataRequired, total=False):
    rule_id: str
    description: str
    device_posture: str
    enabled: bool
    filters: list
    identity: str
    precedence: int
    rule_settings: dict
    schedule: dict
    traffic: str


class ZeroTrustGatewaySingleResponse4UpdateDataRequired(TypedDict):
    account_id: str
    rule_id: str


class ZeroTrustGatewaySingleResponse4UpdateData(ZeroTrustGatewaySingleResponse4UpdateDataRequired, total=False):
    action: str
    description: str
    device_posture: str
    enabled: bool
    expiration: dict
    filters: list
    identity: str
    name: str
    precedence: int
    result: dict
    rule_settings: dict
    schedule: dict
    traffic: str


class ZeroTrustGatewaySingleResponse5(TypedDict, total=False):
    ips: list
    kind: str
    name: str
    result: Any


class ZeroTrustGatewaySingleResponse5LoadMatch(TypedDict):
    account_id: str
    proxy_endpoint_id: str


class ZeroTrustGatewaySingleResponse5CreateDataRequired(TypedDict):
    account_id: str


class ZeroTrustGatewaySingleResponse5CreateData(ZeroTrustGatewaySingleResponse5CreateDataRequired, total=False):
    ips: list
    kind: str
    name: str
    result: Any


class ZeroTrustGatewaySingleResponse5UpdateDataRequired(TypedDict):
    account_id: str
    proxy_endpoint_id: str


class ZeroTrustGatewaySingleResponse5UpdateData(ZeroTrustGatewaySingleResponse5UpdateDataRequired, total=False):
    ips: list
    kind: str
    name: str
    result: Any


class ZeroTrustGatewaySingleResponse6Required(TypedDict):
    public_key: str


class ZeroTrustGatewaySingleResponse6(ZeroTrustGatewaySingleResponse6Required, total=False):
    result: dict


class ZeroTrustGatewaySingleResponse6LoadMatch(TypedDict):
    account_id: str


class ZeroTrustGatewaySingleResponse6CreateDataRequired(TypedDict):
    account_id: str
    public_key: str


class ZeroTrustGatewaySingleResponse6CreateData(ZeroTrustGatewaySingleResponse6CreateDataRequired, total=False):
    result: dict


class ZeroTrustGatewaySingleResponse6UpdateDataRequired(TypedDict):
    account_id: str


class ZeroTrustGatewaySingleResponse6UpdateData(ZeroTrustGatewaySingleResponse6UpdateDataRequired, total=False):
    public_key: str
    result: dict


class ZeroTrustGatewaySingleResponse7Required(TypedDict):
    contents: str
    name: str


class ZeroTrustGatewaySingleResponse7(ZeroTrustGatewaySingleResponse7Required, total=False):
    description: str
    result: dict
    slug: str


class ZeroTrustGatewaySingleResponse7LoadMatch(TypedDict):
    account_id: str
    pacfile_id: str


class ZeroTrustGatewaySingleResponse7CreateDataRequired(TypedDict):
    account_id: str
    contents: str
    name: str


class ZeroTrustGatewaySingleResponse7CreateData(ZeroTrustGatewaySingleResponse7CreateDataRequired, total=False):
    description: str
    result: dict
    slug: str


class ZeroTrustGatewaySingleResponse7UpdateDataRequired(TypedDict):
    account_id: str
    pacfile_id: str


class ZeroTrustGatewaySingleResponse7UpdateData(ZeroTrustGatewaySingleResponse7UpdateDataRequired, total=False):
    contents: str
    description: str
    name: str
    result: dict
    slug: str


class ZeroTrustGatewaySingleResponseWithListItemRequired(TypedDict):
    name: str
    type: str


class ZeroTrustGatewaySingleResponseWithListItem(ZeroTrustGatewaySingleResponseWithListItemRequired, total=False):
    description: str
    items: list


class ZeroTrustGatewaySingleResponseWithListItemCreateDataRequired(TypedDict):
    account_id: str
    name: str
    type: str


class ZeroTrustGatewaySingleResponseWithListItemCreateData(ZeroTrustGatewaySingleResponseWithListItemCreateDataRequired, total=False):
    description: str
    items: list


class ZeroTrustRiskScoring(TypedDict):
    behaviors: dict
    result: dict


class ZeroTrustRiskScoringLoadMatchRequired(TypedDict):
    account_id: str


class ZeroTrustRiskScoringLoadMatch(ZeroTrustRiskScoringLoadMatchRequired, total=False):
    user_id: str


class ZeroTrustRiskScoringCreateData(TypedDict):
    account_id: str
    zt_risk_scoring_id: str
    behaviors: dict
    result: dict


class ZeroTrustRiskScoringUpdateDataRequired(TypedDict):
    account_id: str


class ZeroTrustRiskScoringUpdateData(ZeroTrustRiskScoringUpdateDataRequired, total=False):
    behaviors: dict
    result: dict


class ZeroTrustRiskScoringIntegrationRequired(TypedDict):
    active: bool
    integration_type: str
    result: dict
    tenant_url: str


class ZeroTrustRiskScoringIntegration(ZeroTrustRiskScoringIntegrationRequired, total=False):
    id: str
    reference_id: str


class ZeroTrustRiskScoringIntegrationLoadMatchRequired(TypedDict):
    account_id: str


class ZeroTrustRiskScoringIntegrationLoadMatch(ZeroTrustRiskScoringIntegrationLoadMatchRequired, total=False):
    id: str
    reference_id: str


class ZeroTrustRiskScoringIntegrationListMatch(TypedDict):
    account_id: str


class ZeroTrustRiskScoringIntegrationCreateDataRequired(TypedDict):
    account_id: str
    active: bool
    integration_type: str
    result: dict
    tenant_url: str


class ZeroTrustRiskScoringIntegrationCreateData(ZeroTrustRiskScoringIntegrationCreateDataRequired, total=False):
    id: str
    reference_id: str


class ZeroTrustRiskScoringIntegrationUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class ZeroTrustRiskScoringIntegrationUpdateData(ZeroTrustRiskScoringIntegrationUpdateDataRequired, total=False):
    active: bool
    integration_type: str
    reference_id: str
    result: dict
    tenant_url: str


class ZeroTrustRiskScoringIntegrationRemoveMatch(TypedDict):
    account_id: str
    id: str
