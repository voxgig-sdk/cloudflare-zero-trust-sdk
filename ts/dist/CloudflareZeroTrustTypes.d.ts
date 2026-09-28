export interface AlexandriaDeleteApplication {
    id?: string;
}
export interface AlexandriaDeleteApplicationRemoveMatch {
    account_id: string;
    id: number;
}
export interface AlexandriaGetApplication {
    category_id: number;
    errors: any[];
    hostnames?: any[];
    human_id: string;
    id?: string;
    ip_subnets?: any[];
    messages: any[];
    name: string;
    port_protocols?: any[];
    result: Record<string, any>;
    success: boolean;
    support_domains?: any[];
}
export interface AlexandriaGetApplicationLoadMatch {
    account_id: string;
    id: number;
}
export interface AlexandriaGetApplicationListMatch {
    account_id: string;
    field?: string;
    filter?: string;
    limit?: number;
    offset?: number;
    order_by?: string;
    search?: string;
}
export interface AlexandriaGetApplicationCreateData {
    account_id: string;
    category_id: number;
    errors: any[];
    hostnames?: any[];
    human_id: string;
    id?: string;
    ip_subnets?: any[];
    messages: any[];
    name: string;
    port_protocols?: any[];
    result: Record<string, any>;
    success: boolean;
    support_domains?: any[];
}
export interface AlexandriaGetApplicationUpdateData {
    account_id: string;
    id: number;
    category_id?: number;
    errors?: any[];
    hostnames?: any[];
    human_id?: string;
    ip_subnets?: any[];
    messages?: any[];
    name?: string;
    port_protocols?: any[];
    result?: Record<string, any>;
    success?: boolean;
    support_domains?: any[];
}
export interface AlexandriaGetCategory {
    errors: any[];
    id?: string;
    messages: any[];
    result: Record<string, any>;
    success: boolean;
}
export interface AlexandriaGetCategoryLoadMatch {
    account_id: string;
    id: number;
}
export interface AlexandriaGetCategoryListMatch {
    account_id: string;
    limit?: number;
    offset?: number;
}
export interface ClientVersion {
    errors: any[];
    messages: any[];
    result: any[];
    result_info: Record<string, any>;
    success: boolean;
}
export interface ClientVersionListMatch {
    account_id: string;
    page?: number;
    per_page?: number;
    release_track: string;
    target_environment: string;
    $action?: string;
    [action: string]: any;
}
export interface Cni {
    id?: string;
}
export interface CniRemoveMatch {
    account_id: string;
    id: string;
}
export interface DeploymentGroup {
    errors: any[];
    id?: string;
    messages: any[];
    name: string;
    policy_ids?: any[];
    result: Record<string, any>;
    result_info: Record<string, any>;
    success: boolean;
    version_config: any[];
}
export interface DeploymentGroupLoadMatch {
    account_id: string;
    id: string;
}
export interface DeploymentGroupListMatch {
    account_id: string;
    page?: number;
    per_page?: number;
}
export interface DeploymentGroupCreateData {
    account_id: string;
    errors: any[];
    id?: string;
    messages: any[];
    name: string;
    policy_ids?: any[];
    result: Record<string, any>;
    result_info: Record<string, any>;
    success: boolean;
    version_config: any[];
}
export interface DeploymentGroupUpdateData {
    account_id: string;
    id: string;
    errors?: any[];
    messages?: any[];
    name?: string;
    policy_ids?: any[];
    result?: Record<string, any>;
    result_info?: Record<string, any>;
    success?: boolean;
    version_config?: any[];
}
export interface DeploymentGroupRemoveMatch {
    account_id: string;
    id: string;
}
export interface DexRemoteCommand {
    commands: any[];
    result?: Record<string, any>;
}
export interface DexRemoteCommandLoadMatch {
    account_id: string;
    command_type?: string;
    device_id?: string;
    from?: string;
    page?: number;
    per_page?: number;
    status?: string;
    to?: string;
    user_email?: string;
    search?: string;
    command_id?: string;
    filename?: string;
}
export interface DexRemoteCommandCreateData {
    account_id: string;
    commands: any[];
    result?: Record<string, any>;
}
export interface DexRule {
    description?: string;
    id?: string;
    match: string;
    name: string;
    result?: Record<string, any>;
}
export interface DexRuleLoadMatch {
    account_id: string;
    name?: string;
    page?: number;
    per_page?: number;
    sort_by?: string;
    sort_order?: string;
    id?: string;
}
export interface DexRuleCreateData {
    account_id: string;
    description?: string;
    id?: string;
    match: string;
    name: string;
    result?: Record<string, any>;
}
export interface DexRuleUpdateData {
    account_id: string;
    id: string;
    description?: string;
    match?: string;
    name?: string;
    result?: Record<string, any>;
}
export interface DexRuleRemoveMatch {
    account_id: string;
    id: string;
}
export interface DexSyntheticApplicationMonitoring {
    errors: any[];
    messages: any[];
    result: Record<string, any>;
    success: boolean;
}
export interface DexSyntheticApplicationMonitoringLoadMatch {
    account_id: string;
    device_id?: string;
    cursor?: string;
    from?: string;
    page?: number;
    per_page?: number;
    sort_by?: string;
    sort_order?: string;
    to?: string;
    colo?: string;
    kind?: string;
    registration_id?: string;
    test_name?: string;
    test_id?: string;
    interval?: string;
    http_test_id?: string;
    traceroute_test_id?: string;
    traceroute_test_result_id?: string;
}
export interface DexSyntheticApplicationMonitoringListMatch {
    account_id: string;
    from: string;
    sort_by?: string;
    to: string;
}
export interface DigitalExperienceMonitoringDevice {
    alwaysOn?: boolean;
    batteryCharging?: boolean;
    batteryCycles?: number;
    batteryPct?: number;
    colo: string;
    connectionType?: string;
    cpuPct?: number;
    cpuPctByApp?: any[];
    deviceId: string;
    deviceIpv4?: Record<string, any>;
    deviceIpv6?: Record<string, any>;
    deviceName?: string;
    deviceRegistration?: string;
    diskReadBps?: number;
    diskUsagePct?: number;
    diskWriteBps?: number;
    dohSubdomain?: string;
    estimatedLossPct?: number;
    firewallEnabled?: boolean;
    gatewayIpv4?: Record<string, any>;
    gatewayIpv6?: Record<string, any>;
    handshakeLatencyMs?: number;
    ispIpv4?: Record<string, any>;
    ispIpv6?: Record<string, any>;
    metal?: string;
    mode: string;
    networkRcvdBps?: number;
    networkSentBps?: number;
    networkSsid?: string;
    personEmail?: string;
    platform: string;
    ramAvailableKb?: number;
    ramUsedPct?: number;
    ramUsedPctByApp?: any[];
    registrationId?: string;
    rtt?: Record<string, any>;
    status: string;
    switchLocked?: boolean;
    timestamp: string;
    tunnelStats?: Record<string, any>;
    tunnelType?: string;
    version: string;
    wifiStrengthDbm?: number;
}
export interface DigitalExperienceMonitoringDeviceListMatch {
    account_id: string;
    device_id: string;
    colo?: string;
    since_minute: number;
    time_now?: string;
}
export interface DigitalExperienceMonitoringDexDeleteResponseCollection {
}
export interface DigitalExperienceMonitoringDexDeleteResponseCollectionRemoveMatch {
    account_id: string;
    dex_test_id: string;
}
export interface DigitalExperienceMonitoringDexResponseCollection {
    result?: any[];
}
export interface DigitalExperienceMonitoringDexResponseCollectionListMatch {
    account_id: string;
    kind?: string;
    page?: number;
    per_page?: number;
    test_name?: string;
}
export interface DigitalExperienceMonitoringDexSingle {
    created?: string;
    data: Record<string, any>;
    description?: string;
    enabled: boolean;
    interval: string;
    name: string;
    result: Record<string, any>;
    target_policies?: any;
    targeted?: boolean;
    test_id?: string;
    updated?: string;
}
export interface DigitalExperienceMonitoringDexSingleLoadMatch {
    account_id: string;
    dex_test_id: string;
}
export interface DigitalExperienceMonitoringDexSingleCreateData {
    account_id: string;
    created?: string;
    data: Record<string, any>;
    description?: string;
    enabled: boolean;
    interval: string;
    name: string;
    result: Record<string, any>;
    target_policies?: any;
    targeted?: boolean;
    test_id?: string;
    updated?: string;
}
export interface DigitalExperienceMonitoringDexSingleUpdateData {
    account_id: string;
    dex_test_id: string;
    created?: string;
    data?: Record<string, any>;
    description?: string;
    enabled?: boolean;
    interval?: string;
    name?: string;
    result?: Record<string, any>;
    target_policies?: any;
    targeted?: boolean;
    test_id?: string;
    updated?: string;
}
export interface DigitalExperienceMonitoringFleetStatusDevice {
    result?: any[];
}
export interface DigitalExperienceMonitoringFleetStatusDeviceListMatch {
    account_id: string;
    colo?: string;
    device_id?: string;
    from: string;
    mode?: string;
    page: number;
    per_page: number;
    platform?: string;
    sort_by?: string;
    source?: string;
    status?: string;
    to: string;
    version?: string;
}
export interface DigitalExperienceMonitoringFleetStatusLive {
    result?: Record<string, any>;
}
export interface DigitalExperienceMonitoringFleetStatusLiveLoadMatch {
    account_id: string;
    since_minute: number;
}
export interface DigitalExperienceMonitoringFleetStatusOverTime {
    result?: Record<string, any>;
}
export interface DigitalExperienceMonitoringFleetStatusOverTimeLoadMatch {
    account_id: string;
    colo?: string;
    device_id?: string;
    from: string;
    to: string;
}
export interface Integration {
    id?: string;
}
export interface IntegrationRemoveMatch {
    account_id: string;
    id: string;
}
export interface Interconnect {
    id?: string;
}
export interface InterconnectLoadMatch {
    account_id: string;
    icon: string;
    name?: string;
    $action?: string;
    [action: string]: any;
}
export interface InterconnectRemoveMatch {
    account_id: string;
    id: string;
}
export interface IpProfile {
    description?: string;
    enabled?: boolean;
    errors: any[];
    id?: string;
    match: string;
    messages: any[];
    name: string;
    precedence: number;
    result: Record<string, any>;
    result_info: Record<string, any>;
    subnet_id: string;
    success: boolean;
}
export interface IpProfileLoadMatch {
    account_id: string;
    id: string;
}
export interface IpProfileListMatch {
    account_id: string;
    page?: number;
    per_page?: number;
}
export interface IpProfileCreateData {
    account_id: string;
    description?: string;
    enabled?: boolean;
    errors: any[];
    id?: string;
    match: string;
    messages: any[];
    name: string;
    precedence: number;
    result: Record<string, any>;
    result_info: Record<string, any>;
    subnet_id: string;
    success: boolean;
}
export interface IpProfileUpdateData {
    account_id: string;
    id: string;
    description?: string;
    enabled?: boolean;
    errors?: any[];
    match?: string;
    messages?: any[];
    name?: string;
    precedence?: number;
    result?: Record<string, any>;
    result_info?: Record<string, any>;
    subnet_id?: string;
    success?: boolean;
}
export interface IpProfileRemoveMatch {
    account_id: string;
    id: string;
}
export interface List {
    id?: string;
}
export interface ListRemoveMatch {
    account_id: string;
    id: string;
}
export interface Location {
    id?: string;
}
export interface LocationRemoveMatch {
    account_id: string;
    id: string;
}
export interface NscCni {
    account: string;
    bgp: Record<string, any>;
    bgp_mode?: string;
    cust_ip: string;
    id: string;
    interconnect: string;
    magic: Record<string, any>;
    p2p_ip: string;
}
export interface NscCniLoadMatch {
    account_id: string;
    id: string;
}
export interface NscCniListMatch {
    account_id: string;
    cursor?: number;
    limit?: number;
    slot?: string;
    tunnel_id?: string;
}
export interface NscCniCreateData {
    account_id: string;
    account: string;
    bgp: Record<string, any>;
    bgp_mode?: string;
    cust_ip: string;
    id: string;
    interconnect: string;
    magic: Record<string, any>;
    p2p_ip: string;
}
export interface NscCniUpdateData {
    account_id: string;
    id: string;
    account?: string;
    bgp?: Record<string, any>;
    bgp_mode?: string;
    cust_ip?: string;
    interconnect?: string;
    magic?: Record<string, any>;
    p2p_ip?: string;
}
export interface NscDefaultName {
    name: string;
}
export interface NscDefaultNameLoadMatch {
    account_id: string;
    interconnect_id: string;
}
export interface NscInterconnect {
    id?: string;
    items: any[];
    next?: number;
}
export interface NscInterconnectLoadMatch {
    account_id: string;
    id: string;
}
export interface NscInterconnectListMatch {
    account_id: string;
    cursor?: number;
    limit?: number;
    site?: string;
    type?: string;
}
export interface NscInterconnectCreateData {
    account_id: string;
    id?: string;
    items: any[];
    next?: number;
}
export interface NscSetting {
    default_asn: number;
}
export interface NscSettingLoadMatch {
    account_id: string;
}
export interface NscSettingUpdateData {
    account_id: string;
    default_asn?: number;
}
export interface NscSlotInfo {
    account?: string;
    address: any[];
    ccr_device_name?: string;
    facility: Record<string, any>;
    id: string;
    name: string;
    occupied: boolean;
    site: string;
    speed: string;
}
export interface NscSlotInfoLoadMatch {
    account_id: string;
    slot: string;
}
export interface NscSlotInfoListMatch {
    account_id: string;
    address_contain?: string;
    cursor?: number;
    limit?: number;
    occupied?: boolean;
    site?: string;
    speed?: string;
}
export interface NscStatusInfo {
}
export interface NscStatusInfoLoadMatch {
    account_id: string;
    icon: string;
}
export interface OneApplicationDetail {
    errors?: any[];
    messages?: any[];
    result: any;
    success: boolean;
}
export interface OneApplicationDetailLoadMatch {
    account_id: string;
    application_id: string;
}
export interface OneIntegrationCreate {
    application: string;
    auth_method?: string;
    credentials: Record<string, any>;
    dlp_profiles?: any[];
    name: string;
    permissions?: any[];
    use_cases?: any[];
}
export interface OneIntegrationCreateCreateData {
    account_id: string;
    application: string;
    auth_method?: string;
    credentials: Record<string, any>;
    dlp_profiles?: any[];
    name: string;
    permissions?: any[];
    use_cases?: any[];
}
export interface OneIntegrationDetail {
    errors?: any[];
    id?: string;
    messages?: any[];
    result: any;
    success: boolean;
}
export interface OneIntegrationDetailLoadMatch {
    account_id: string;
    id: string;
}
export interface OneIntegrationPause {
    errors?: any[];
    messages?: any[];
    result: any;
    success: boolean;
}
export interface OneIntegrationPauseCreateData {
    account_id: string;
    integration_id: string;
    errors?: any[];
    messages?: any[];
    result: any;
    success: boolean;
}
export interface OneIntegrationResume {
    errors?: any[];
    messages?: any[];
    result: any;
    success: boolean;
}
export interface OneIntegrationResumeCreateData {
    account_id: string;
    integration_id: string;
    errors?: any[];
    messages?: any[];
    result: any;
    success: boolean;
}
export interface OneIntegrationUpdate {
    credentials?: Record<string, any>;
    dlp_profiles?: any[];
    errors?: any[];
    id?: string;
    messages?: any[];
    name?: string;
    permissions?: any[];
    result: any;
    success: boolean;
    use_cases?: any[];
}
export interface OneIntegrationUpdateUpdateData {
    account_id: string;
    id: string;
    credentials?: Record<string, any>;
    dlp_profiles?: any[];
    errors?: any[];
    messages?: any[];
    name?: string;
    permissions?: any[];
    result?: any;
    success?: boolean;
    use_cases?: any[];
}
export interface OnePaginatedApplicationListList {
    auth_methods: any[];
    category: string;
    description: string;
    display_name: string;
    dlp_enabled: boolean;
    id: string;
    logo: string;
    permissions: any[];
    supported_environments: any[];
    use_cases: any[];
}
export interface OnePaginatedApplicationListListListMatch {
    account_id: string;
    environment?: string;
    page?: number;
    page_size?: number;
}
export interface OnePaginatedAuthMethodDetailList {
    display_name: string;
    human_interaction_required: boolean;
    id: string;
    instructions: any;
    payload_example: Record<string, any>;
    payload_schema: Record<string, any>;
    redirect_url: string;
}
export interface OnePaginatedAuthMethodDetailListListMatch {
    account_id: string;
    application_id: string;
    page?: number;
    page_size?: number;
}
export interface OnePaginatedIntegrationV2ListItemList {
    application: Record<string, any>;
    created: string;
    id: string;
    is_paused: boolean;
    name: string;
    status: string;
    updated: string;
}
export interface OnePaginatedIntegrationV2ListItemListListMatch {
    account_id: string;
    application?: string;
    direction?: string;
    dlp_enabled?: boolean;
    order?: string;
    page?: number;
    page_size?: number;
    search?: string;
    status?: string;
    use_case?: string;
}
export interface OnePaginatedSetupFlowList {
    auth_config?: any;
    default: boolean;
    description: string;
    id: string;
    name: string;
    steps: any[];
    supported_environments: any[];
}
export interface OnePaginatedSetupFlowListListMatch {
    account_id: string;
    application_id: string;
    auth_method?: string;
    environment?: string;
    page?: number;
    page_size?: number;
}
export interface OverrideCode {
    device_id?: string;
    duration_hours: number;
    errors: any[];
    messages: any[];
    result: Record<string, any>;
    scope: string;
    success: boolean;
    type: string;
}
export interface OverrideCodeCreateData {
    account_id: string;
    device_id?: string;
    duration_hours: number;
    errors: any[];
    messages: any[];
    result: Record<string, any>;
    scope: string;
    success: boolean;
    type: string;
}
export interface Pacfile {
    id?: string;
}
export interface PacfileRemoveMatch {
    account_id: string;
    id: string;
}
export interface PhysicalDevice {
    errors: any[];
    id?: string;
    messages: any[];
    result: Record<string, any>;
    result_info: Record<string, any>;
    success: boolean;
    tags?: Record<string, any>;
}
export interface PhysicalDeviceLoadMatch {
    account_id: string;
    id: string;
    include?: string;
}
export interface PhysicalDeviceListMatch {
    account_id: string;
    active_registration?: string;
    cursor?: string;
    has_registration_type?: boolean;
    id?: any[];
    include?: string;
    last_seen_registration_policy_id?: string;
    last_seen_user_email?: string;
    per_page?: number;
    search?: string;
    seen_after?: string;
    seen_before?: string;
    sort_by?: string;
    sort_order?: string;
    tag?: any[];
}
export interface PhysicalDeviceCreateData {
    account_id: string;
    id: string;
    errors: any[];
    messages: any[];
    result: Record<string, any>;
    result_info: Record<string, any>;
    success: boolean;
    tags?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface PhysicalDeviceUpdateData {
    account_id: string;
    id: string;
    errors?: any[];
    messages?: any[];
    result?: Record<string, any>;
    result_info?: Record<string, any>;
    success?: boolean;
    tags?: Record<string, any>;
}
export interface PhysicalDeviceRemoveMatch {
    account_id: string;
    id: string;
}
export interface ProxyEndpoint {
    id?: string;
}
export interface ProxyEndpointRemoveMatch {
    account_id: string;
    id: string;
}
export interface Registration {
    errors: any[];
    id?: string;
    messages: any[];
    result: Record<string, any>;
    result_info: Record<string, any>;
    success: boolean;
}
export interface RegistrationLoadMatch {
    account_id: string;
    id: string;
    include?: string;
}
export interface RegistrationListMatch {
    account_id: string;
    cursor?: string;
    device_id?: string;
    id?: any[];
    include?: string;
    per_page?: number;
    policy_id?: string;
    registration_type?: string;
    search?: string;
    seen_after?: string;
    seen_before?: string;
    sort_by?: string;
    sort_order?: string;
    status?: string;
    user_id?: any[];
}
export interface RegistrationCreateData {
    account_id: string;
    id: any[];
    errors: any[];
    messages: any[];
    result: Record<string, any>;
    result_info: Record<string, any>;
    success: boolean;
    $action?: string;
    [action: string]: any;
}
export interface RegistrationRemoveMatch {
    account_id: string;
    id: string;
}
export interface Rule {
    id?: string;
}
export interface RuleRemoveMatch {
    account_id: string;
    id: string;
}
export interface TeamsDevicesApiResponseSingle {
}
export interface TeamsDevicesApiResponseSingleCreateData {
    account_id: string;
}
export interface TeamsDevicesComponentsSchemasResponseCollection {
    result?: any[];
}
export interface TeamsDevicesComponentsSchemasResponseCollectionListMatch {
    account_id: string;
}
export interface TeamsDevicesComponentsSchemasResponseCollectionRemoveMatch {
    account_id: string;
    network_id: string;
}
export interface TeamsDevicesComponentsSchemasSingle {
    config: Record<string, any>;
    name: string;
    result?: Record<string, any>;
    type: string;
}
export interface TeamsDevicesComponentsSchemasSingleLoadMatch {
    account_id: string;
    network_id: string;
}
export interface TeamsDevicesComponentsSchemasSingleCreateData {
    account_id: string;
    config: Record<string, any>;
    name: string;
    result?: Record<string, any>;
    type: string;
}
export interface TeamsDevicesComponentsSchemasSingleUpdateData {
    account_id: string;
    network_id: string;
    config?: Record<string, any>;
    name?: string;
    result?: Record<string, any>;
    type?: string;
}
export interface TeamsDevicesDefaultDeviceSetting {
    allow_mode_switch?: boolean;
    allow_updates?: boolean;
    allowed_to_leave?: boolean;
    auto_connect?: number;
    captive_portal?: number;
    disable_auto_fallback?: boolean;
    dns_search_suffixes?: any[];
    exclude?: any[];
    exclude_office_ips?: boolean;
    global_acceleration: Record<string, any>;
    include?: any[];
    lan_allow_minutes?: number;
    lan_allow_subnet_size?: number;
    register_interface_ip_with_dns?: boolean;
    result?: Record<string, any>;
    sccm_vpn_boundary_support?: boolean;
    service_mode_v2?: Record<string, any>;
    support_url?: string;
    switch_locked?: boolean;
    tunnel_protocol?: string;
    uninstall_protection?: boolean;
    virtual_networks: Record<string, any>;
}
export interface TeamsDevicesDefaultDeviceSettingLoadMatch {
    account_id: string;
}
export interface TeamsDevicesDefaultDeviceSettingUpdateData {
    account_id: string;
    allow_mode_switch?: boolean;
    allow_updates?: boolean;
    allowed_to_leave?: boolean;
    auto_connect?: number;
    captive_portal?: number;
    disable_auto_fallback?: boolean;
    dns_search_suffixes?: any[];
    exclude?: any[];
    exclude_office_ips?: boolean;
    global_acceleration?: Record<string, any>;
    include?: any[];
    lan_allow_minutes?: number;
    lan_allow_subnet_size?: number;
    register_interface_ip_with_dns?: boolean;
    result?: Record<string, any>;
    sccm_vpn_boundary_support?: boolean;
    service_mode_v2?: Record<string, any>;
    support_url?: string;
    switch_locked?: boolean;
    tunnel_protocol?: string;
    uninstall_protection?: boolean;
    virtual_networks?: Record<string, any>;
}
export interface TeamsDevicesDevice {
    id?: string;
    result?: Record<string, any>;
}
export interface TeamsDevicesDeviceLoadMatch {
    account_id: string;
    id: string;
}
export interface TeamsDevicesDeviceListMatch {
    account_id: string;
}
export interface TeamsDevicesDeviceSetting {
    allow_mode_switch?: boolean;
    allow_updates?: boolean;
    allowed_to_leave?: boolean;
    auto_connect?: number;
    browser_extension_config: Record<string, any>;
    captive_portal?: number;
    default?: boolean;
    description?: string;
    disable_auto_fallback?: boolean;
    dns_search_suffixes?: any[];
    enabled?: boolean;
    exclude?: any[];
    exclude_office_ips?: boolean;
    global_acceleration: Record<string, any>;
    include?: any[];
    lan_allow_minutes?: number;
    lan_allow_subnet_size?: number;
    match?: string;
    name: string;
    precedence?: number;
    profile_type?: string;
    register_interface_ip_with_dns?: boolean;
    result?: Record<string, any>;
    sccm_vpn_boundary_support?: boolean;
    service_mode_v2?: Record<string, any>;
    support_url?: string;
    switch_locked?: boolean;
    tunnel_protocol?: string;
    uninstall_protection?: boolean;
    virtual_networks: Record<string, any>;
}
export interface TeamsDevicesDeviceSettingLoadMatch {
    account_id: string;
    policy_id: string;
}
export interface TeamsDevicesDeviceSettingCreateData {
    account_id: string;
    allow_mode_switch?: boolean;
    allow_updates?: boolean;
    allowed_to_leave?: boolean;
    auto_connect?: number;
    browser_extension_config: Record<string, any>;
    captive_portal?: number;
    default?: boolean;
    description?: string;
    disable_auto_fallback?: boolean;
    dns_search_suffixes?: any[];
    enabled?: boolean;
    exclude?: any[];
    exclude_office_ips?: boolean;
    global_acceleration: Record<string, any>;
    include?: any[];
    lan_allow_minutes?: number;
    lan_allow_subnet_size?: number;
    match?: string;
    name: string;
    precedence?: number;
    profile_type?: string;
    register_interface_ip_with_dns?: boolean;
    result?: Record<string, any>;
    sccm_vpn_boundary_support?: boolean;
    service_mode_v2?: Record<string, any>;
    support_url?: string;
    switch_locked?: boolean;
    tunnel_protocol?: string;
    uninstall_protection?: boolean;
    virtual_networks: Record<string, any>;
}
export interface TeamsDevicesDeviceSettingUpdateData {
    account_id: string;
    policy_id: string;
    allow_mode_switch?: boolean;
    allow_updates?: boolean;
    allowed_to_leave?: boolean;
    auto_connect?: number;
    browser_extension_config?: Record<string, any>;
    captive_portal?: number;
    default?: boolean;
    description?: string;
    disable_auto_fallback?: boolean;
    dns_search_suffixes?: any[];
    enabled?: boolean;
    exclude?: any[];
    exclude_office_ips?: boolean;
    global_acceleration?: Record<string, any>;
    include?: any[];
    lan_allow_minutes?: number;
    lan_allow_subnet_size?: number;
    match?: string;
    name?: string;
    precedence?: number;
    profile_type?: string;
    register_interface_ip_with_dns?: boolean;
    result?: Record<string, any>;
    sccm_vpn_boundary_support?: boolean;
    service_mode_v2?: Record<string, any>;
    support_url?: string;
    switch_locked?: boolean;
    tunnel_protocol?: string;
    uninstall_protection?: boolean;
    virtual_networks?: Record<string, any>;
}
export interface TeamsDevicesDeviceSettingsResponseCollection {
    result?: any[];
}
export interface TeamsDevicesDeviceSettingsResponseCollectionListMatch {
    account_id: string;
    profile_type?: string;
}
export interface TeamsDevicesDeviceSettingsResponseCollectionRemoveMatch {
    account_id: string;
    policy_id: string;
}
export interface TeamsDevicesDevicesPolicyCertificatesSingle {
    enabled: boolean;
    result: Record<string, any>;
}
export interface TeamsDevicesDevicesPolicyCertificatesSingleLoadMatch {
    zone_id: string;
}
export interface TeamsDevicesDevicesPolicyCertificatesSingleUpdateData {
    zone_id: string;
    enabled?: boolean;
    result?: Record<string, any>;
}
export interface TeamsDevicesFallbackDomainResponseCollection {
    result?: any[];
}
export interface TeamsDevicesFallbackDomainResponseCollectionListMatch {
    account_id: string;
    policy_id?: string;
}
export interface TeamsDevicesFallbackDomainResponseCollectionUpdateData {
    account_id: string;
    policy_id?: string;
    result?: any[];
}
export interface TeamsDevicesFallbackDomainResponseCollectionRemoveMatch {
    account_id: string;
    policy_id?: string;
    reset_default?: boolean;
}
export interface TeamsDevicesGlobalWarpOverride {
    disconnect: boolean;
    justification?: string;
    result?: Record<string, any>;
}
export interface TeamsDevicesGlobalWarpOverrideLoadMatch {
    account_id: string;
}
export interface TeamsDevicesGlobalWarpOverrideCreateData {
    account_id: string;
    disconnect: boolean;
    justification?: string;
    result?: Record<string, any>;
}
export interface TeamsDevicesId {
}
export interface TeamsDevicesIdRemoveMatch {
    account_id: string;
    rule_id: string;
}
export interface TeamsDevicesOverrideCode {
    result?: Record<string, any>;
}
export interface TeamsDevicesOverrideCodeLoadMatch {
    account_id: string;
    device_id: string;
}
export interface TeamsDevicesResponseCollection {
    result?: any[];
}
export interface TeamsDevicesResponseCollectionListMatch {
    account_id: string;
}
export interface TeamsDevicesSchemasId {
}
export interface TeamsDevicesSchemasIdRemoveMatch {
    account_id: string;
    integration_id: string;
}
export interface TeamsDevicesSchemasResponseCollection {
    result?: any[];
}
export interface TeamsDevicesSchemasResponseCollectionListMatch {
    account_id: string;
}
export interface TeamsDevicesSchemasSingle {
    config: Record<string, any>;
    interval: string;
    name: string;
    result?: Record<string, any>;
    type: string;
}
export interface TeamsDevicesSchemasSingleLoadMatch {
    account_id: string;
    integration_id: string;
}
export interface TeamsDevicesSchemasSingleCreateData {
    account_id: string;
    config: Record<string, any>;
    interval: string;
    name: string;
    result?: Record<string, any>;
    type: string;
}
export interface TeamsDevicesSchemasSingleUpdateData {
    account_id: string;
    integration_id: string;
    config?: Record<string, any>;
    interval?: string;
    name?: string;
    result?: Record<string, any>;
    type?: string;
}
export interface TeamsDevicesSingle {
    description?: string;
    expiration?: string;
    input?: Record<string, any>;
    match?: any[];
    name: string;
    result?: Record<string, any>;
    schedule?: string;
    type: string;
}
export interface TeamsDevicesSingleLoadMatch {
    account_id: string;
    rule_id: string;
}
export interface TeamsDevicesSingleCreateData {
    account_id: string;
    description?: string;
    expiration?: string;
    input?: Record<string, any>;
    match?: any[];
    name: string;
    result?: Record<string, any>;
    schedule?: string;
    type: string;
}
export interface TeamsDevicesSingleUpdateData {
    account_id: string;
    rule_id: string;
    description?: string;
    expiration?: string;
    input?: Record<string, any>;
    match?: any[];
    name?: string;
    result?: Record<string, any>;
    schedule?: string;
    type?: string;
}
export interface TeamsDevicesSplitTunnelIncludeResponseCollection {
    result?: any[];
}
export interface TeamsDevicesSplitTunnelIncludeResponseCollectionListMatch {
    account_id: string;
    policy_id?: string;
}
export interface TeamsDevicesSplitTunnelIncludeResponseCollectionUpdateData {
    account_id: string;
    policy_id?: string;
    result?: any[];
}
export interface TeamsDevicesSplitTunnelResponseCollection {
    result?: any[];
}
export interface TeamsDevicesSplitTunnelResponseCollectionListMatch {
    account_id: string;
    policy_id?: string;
}
export interface TeamsDevicesSplitTunnelResponseCollectionUpdateData {
    account_id: string;
    policy_id?: string;
    result?: any[];
}
export interface TeamsDevicesSplitTunnelResponseCollectionRemoveMatch {
    account_id: string;
    policy_id?: string;
    reset_default?: boolean;
}
export interface TeamsDevicesZeroTrustAccountDeviceSetting {
    disable_for_time?: number;
    external_emergency_signal_enabled?: boolean;
    external_emergency_signal_fingerprint?: string;
    external_emergency_signal_interval?: string;
    external_emergency_signal_url?: string;
    gateway_proxy_enabled?: boolean;
    gateway_udp_proxy_enabled?: boolean;
    result?: Record<string, any>;
    root_certificate_installation_enabled?: boolean;
    use_zt_virtual_ip?: boolean;
}
export interface TeamsDevicesZeroTrustAccountDeviceSettingLoadMatch {
    account_id: string;
}
export interface TeamsDevicesZeroTrustAccountDeviceSettingUpdateData {
    account_id: string;
    disable_for_time?: number;
    external_emergency_signal_enabled?: boolean;
    external_emergency_signal_fingerprint?: string;
    external_emergency_signal_interval?: string;
    external_emergency_signal_url?: string;
    gateway_proxy_enabled?: boolean;
    gateway_udp_proxy_enabled?: boolean;
    result?: Record<string, any>;
    root_certificate_installation_enabled?: boolean;
    use_zt_virtual_ip?: boolean;
}
export interface TeamsDevicesZeroTrustAccountDeviceSettingRemoveMatch {
    account_id: string;
}
export interface Tunnel {
    result?: any[];
}
export interface TunnelListMatch {
    account_id: string;
    exclude_prefix?: string;
    existed_at?: string;
    include_prefix?: string;
    is_deleted?: boolean;
    name?: string;
    page?: number;
    per_page?: number;
    status?: string;
    tun_type?: any[];
    uuid?: string;
    was_active_at?: string;
    was_inactive_at?: string;
}
export interface TunnelCfdTunnelResponseCollection {
    result?: any[];
}
export interface TunnelCfdTunnelResponseCollectionListMatch {
    account_id: string;
    exclude_prefix?: string;
    existed_at?: string;
    include_prefix?: string;
    is_deleted?: boolean;
    name?: string;
    page?: number;
    per_page?: number;
    status?: string;
    uuid?: string;
    was_active_at?: string;
    was_inactive_at?: string;
}
export interface TunnelCfdTunnelResponseSingle {
    config_src?: string;
    errors: any[];
    messages: any[];
    name: string;
    result: string;
    success: boolean;
    tunnel_secret?: string;
}
export interface TunnelCfdTunnelResponseSingleLoadMatch {
    account_id: string;
    tunnel_id: string;
}
export interface TunnelCfdTunnelResponseSingleCreateData {
    account_id: string;
    config_src?: string;
    errors: any[];
    messages: any[];
    name: string;
    result: string;
    success: boolean;
    tunnel_secret?: string;
}
export interface TunnelCfdTunnelResponseSingleUpdateData {
    account_id: string;
    tunnel_id: string;
    config_src?: string;
    errors?: any[];
    messages?: any[];
    name?: string;
    result?: string;
    success?: boolean;
    tunnel_secret?: string;
}
export interface TunnelCfdTunnelResponseSingleRemoveMatch {
    account_id: string;
    tunnel_id: string;
}
export interface TunnelConfiguration {
    config?: Record<string, any>;
    result?: Record<string, any>;
}
export interface TunnelConfigurationLoadMatch {
    account_id: string;
    cfd_tunnel_id: string;
}
export interface TunnelConfigurationUpdateData {
    account_id: string;
    cfd_tunnel_id: string;
    config?: Record<string, any>;
    result?: Record<string, any>;
}
export interface TunnelEmpty {
    client_id: string;
}
export interface TunnelEmptyUpdateData {
    account_id: string;
    warp_connector_id: string;
    client_id?: string;
}
export interface TunnelEmptyRemoveMatch {
    account_id: string;
    cfd_tunnel_id: string;
    client_id?: string;
}
export interface TunnelHostnameRouteResponseCollection {
    result?: any[];
}
export interface TunnelHostnameRouteResponseCollectionListMatch {
    account_id: string;
    comment?: string;
    existed_at?: string;
    hostname?: string;
    id?: string;
    is_deleted?: boolean;
    page?: number;
    per_page?: number;
    tunnel_id?: string;
}
export interface TunnelHostnameRouteResponseSingle {
    comment?: string;
    errors: any[];
    hostname?: string;
    messages: any[];
    result: string;
    success: boolean;
    tunnel_id?: string;
}
export interface TunnelHostnameRouteResponseSingleLoadMatch {
    account_id: string;
    hostname_route_id: string;
}
export interface TunnelHostnameRouteResponseSingleCreateData {
    account_id: string;
    comment?: string;
    errors: any[];
    hostname?: string;
    messages: any[];
    result: string;
    success: boolean;
    tunnel_id?: string;
}
export interface TunnelHostnameRouteResponseSingleUpdateData {
    account_id: string;
    hostname_route_id: string;
    comment?: string;
    errors?: any[];
    hostname?: string;
    messages?: any[];
    result?: string;
    success?: boolean;
    tunnel_id?: string;
}
export interface TunnelHostnameRouteResponseSingleRemoveMatch {
    account_id: string;
    hostname_route_id: string;
}
export interface TunnelMeshConfigurationResponseSingle {
    config?: Record<string, any>;
    ha_mode: string;
    result: Record<string, any>;
}
export interface TunnelMeshConfigurationResponseSingleLoadMatch {
    account_id: string;
    warp_connector_id: string;
}
export interface TunnelMeshConfigurationResponseSingleUpdateData {
    account_id: string;
    warp_connector_id: string;
    config?: Record<string, any>;
    ha_mode?: string;
    result?: Record<string, any>;
}
export interface TunnelRouteResponseSingle {
    comment?: string;
    errors: any[];
    messages: any[];
    network: string;
    result: string;
    success: boolean;
    tunnel_id: string;
    virtual_network_id?: string;
}
export interface TunnelRouteResponseSingleLoadMatch {
    account_id: string;
    route_id: string;
}
export interface TunnelRouteResponseSingleCreateData {
    account_id: string;
    ip_network_encoded?: string;
    comment?: string;
    errors: any[];
    messages: any[];
    network: string;
    result: string;
    success: boolean;
    tunnel_id: string;
    virtual_network_id?: string;
}
export interface TunnelRouteResponseSingleUpdateData {
    account_id: string;
    ip_network_encoded?: string;
    route_id?: string;
    comment?: string;
    errors?: any[];
    messages?: any[];
    network?: string;
    result?: string;
    success?: boolean;
    tunnel_id?: string;
    virtual_network_id?: string;
}
export interface TunnelRouteResponseSingleRemoveMatch {
    account_id: string;
    ip_network_encoded?: string;
    tun_type?: string;
    tunnel_id?: string;
    virtual_network_id?: string;
    route_id?: string;
}
export interface TunnelSubnetResponseCollection {
    result?: any[];
}
export interface TunnelSubnetResponseCollectionListMatch {
    account_id: string;
    address_family?: string;
    comment?: string;
    existed_at?: string;
    is_default_network?: boolean;
    is_deleted?: boolean;
    name?: string;
    network?: any;
    page?: number;
    per_page?: number;
    sort_order?: string;
    subnet_type?: string;
}
export interface TunnelSubnetResponseSingle {
    comment?: string;
    errors: any[];
    is_default_network?: boolean;
    messages: any[];
    name: string;
    network: string;
    result: string;
    success: boolean;
}
export interface TunnelSubnetResponseSingleLoadMatch {
    account_id: string;
    address_family: string;
}
export interface TunnelSubnetResponseSingleCreateData {
    account_id: string;
    comment?: string;
    errors: any[];
    is_default_network?: boolean;
    messages: any[];
    name: string;
    network: string;
    result: string;
    success: boolean;
}
export interface TunnelSubnetResponseSingleUpdateData {
    account_id: string;
    address_family: string;
    comment?: string;
    errors?: any[];
    is_default_network?: boolean;
    messages?: any[];
    name?: string;
    network?: string;
    result?: string;
    success?: boolean;
}
export interface TunnelSubnetResponseSingleNullable {
}
export interface TunnelSubnetResponseSingleNullableRemoveMatch {
    account_id: string;
    subnet_id: string;
}
export interface TunnelTeamnetResponseCollection {
    result?: any[];
}
export interface TunnelTeamnetResponseCollectionListMatch {
    account_id: string;
    comment?: string;
    existed_at?: string;
    is_deleted?: boolean;
    network_subset?: any;
    network_superset?: any;
    page?: number;
    per_page?: number;
    route_id?: string;
    tun_type?: any[];
    tunnel_id?: string;
    virtual_network_id?: string;
}
export interface TunnelTeamnetResponseSingle {
    errors: any[];
    messages: any[];
    result: string;
    success: boolean;
}
export interface TunnelTeamnetResponseSingleLoadMatch {
    account_id: string;
    ip: string;
    default_virtual_network_fallback?: boolean;
    virtual_network_id?: string;
}
export interface TunnelTunnelClient {
    errors: any[];
    messages: any[];
    result: string;
    success: boolean;
}
export interface TunnelTunnelClientLoadMatch {
    account_id: string;
    cfd_tunnel_id: string;
    connector_id: string;
}
export interface TunnelTunnelConnection {
    result?: any[];
}
export interface TunnelTunnelConnectionListMatch {
    account_id: string;
    cfd_tunnel_id: string;
}
export interface TunnelTunnelResponseToken {
    errors: any[];
    messages: any[];
    resources: any[];
    result: string;
    success: boolean;
}
export interface TunnelTunnelResponseTokenListMatch {
    account_id: string;
    cfd_tunnel_id?: string;
    warp_connector_id?: string;
}
export interface TunnelTunnelResponseTokenCreateData {
    account_id: string;
    cfd_tunnel_id: string;
    errors: any[];
    messages: any[];
    resources: any[];
    result: string;
    success: boolean;
}
export interface TunnelTunnelWarpConnectorClient {
    errors: any[];
    messages: any[];
    result: string;
    success: boolean;
}
export interface TunnelTunnelWarpConnectorClientLoadMatch {
    account_id: string;
    connector_id: string;
    warp_connector_id: string;
}
export interface TunnelTunnelWarpConnectorConnection {
    result?: any[];
}
export interface TunnelTunnelWarpConnectorConnectionListMatch {
    account_id: string;
    warp_connector_id: string;
}
export interface TunnelVnetResponseCollection {
    result?: any[];
}
export interface TunnelVnetResponseCollectionListMatch {
    account_id: string;
    id?: string;
    is_default?: boolean;
    is_default_network?: boolean;
    is_deleted?: boolean;
    name?: string;
}
export interface TunnelVnetResponseSingle {
    comment?: string;
    is_default?: boolean;
    is_default_network?: boolean;
    name?: string;
}
export interface TunnelVnetResponseSingleLoadMatch {
    account_id: string;
    virtual_network_id: string;
}
export interface TunnelVnetResponseSingleCreateData {
    account_id: string;
    comment?: string;
    is_default?: boolean;
    is_default_network?: boolean;
    name?: string;
}
export interface TunnelVnetResponseSingleUpdateData {
    account_id: string;
    virtual_network_id: string;
    comment?: string;
    is_default?: boolean;
    is_default_network?: boolean;
    name?: string;
}
export interface TunnelVnetResponseSingleRemoveMatch {
    account_id: string;
    virtual_network_id: string;
}
export interface TunnelWarpConnectorResponseCollection {
    result?: any[];
}
export interface TunnelWarpConnectorResponseCollectionListMatch {
    account_id: string;
    exclude_prefix?: string;
    existed_at?: string;
    include_prefix?: string;
    is_deleted?: boolean;
    name?: string;
    page?: number;
    per_page?: number;
    status?: string;
    uuid?: string;
    was_active_at?: string;
    was_inactive_at?: string;
}
export interface TunnelWarpConnectorResponseSingle {
    errors: any[];
    ha?: boolean;
    messages: any[];
    name: string;
    result: string;
    success: boolean;
    tunnel_secret?: string;
}
export interface TunnelWarpConnectorResponseSingleLoadMatch {
    account_id: string;
    tunnel_id: string;
}
export interface TunnelWarpConnectorResponseSingleCreateData {
    account_id: string;
    errors: any[];
    ha?: boolean;
    messages: any[];
    name: string;
    result: string;
    success: boolean;
    tunnel_secret?: string;
}
export interface TunnelWarpConnectorResponseSingleUpdateData {
    account_id: string;
    tunnel_id: string;
    errors?: any[];
    ha?: boolean;
    messages?: any[];
    name?: string;
    result?: string;
    success?: boolean;
    tunnel_secret?: string;
}
export interface TunnelWarpConnectorResponseSingleRemoveMatch {
    account_id: string;
    tunnel_id: string;
}
export interface TunnelZeroTrustConnectivitySetting {
    errors: any[];
    icmp_proxy_enabled?: boolean;
    messages: any[];
    offramp_warp_enabled?: boolean;
    result: string;
    success: boolean;
}
export interface TunnelZeroTrustConnectivitySettingListMatch {
    account_id: string;
}
export interface TunnelZeroTrustConnectivitySettingUpdateData {
    account_id: string;
    errors?: any[];
    icmp_proxy_enabled?: boolean;
    messages?: any[];
    offramp_warp_enabled?: boolean;
    result?: string;
    success?: boolean;
}
export interface Warp {
    comment?: string;
    errors: any[];
    id?: string;
    is_default_network?: boolean;
    messages: any[];
    name?: string;
    network?: string;
    result: string;
    success: boolean;
}
export interface WarpLoadMatch {
    account_id: string;
    id: string;
}
export interface WarpUpdateData {
    account_id: string;
    id: string;
    comment?: string;
    errors?: any[];
    is_default_network?: boolean;
    messages?: any[];
    name?: string;
    network?: string;
    result?: string;
    success?: boolean;
}
export interface WarpChangeEvent {
    result?: any[];
}
export interface WarpChangeEventListMatch {
    account_id: string;
    account_name?: string;
    config_name?: string;
    from: string;
    page: number;
    per_page: number;
    sort_order?: string;
    to: string;
    toggle?: string;
    type?: string;
}
export interface WarpTeamsDeviceApiOther {
    errors: any[];
    messages: any[];
    result: any;
    success: boolean;
}
export interface WarpTeamsDeviceApiOtherListMatch {
    account_id: string;
    registration_id: string;
}
export interface ZeroTrustGatewayApplicationsReviewStatus {
    approved_apps: any[];
    in_review_apps: any[];
    result?: Record<string, any>;
    unapproved_apps: any[];
}
export interface ZeroTrustGatewayApplicationsReviewStatusLoadMatch {
    account_id: string;
}
export interface ZeroTrustGatewayApplicationsReviewStatusUpdateData {
    account_id: string;
    approved_apps?: any[];
    in_review_apps?: any[];
    result?: Record<string, any>;
    unapproved_apps?: any[];
}
export interface ZeroTrustGatewayCsvOperationSingle {
}
export interface ZeroTrustGatewayCsvOperationSingleCreateData {
    account_id: string;
}
export interface ZeroTrustGatewayCustomCertificateSetting {
    binding_status?: string;
    enabled: boolean;
    id?: string;
    updated_at?: string;
}
export interface ZeroTrustGatewayCustomCertificateSettingLoadMatch {
    account_id: string;
}
export interface ZeroTrustGatewayGatewayAccount {
    result?: Record<string, any>;
}
export interface ZeroTrustGatewayGatewayAccountLoadMatch {
    account_id: string;
}
export interface ZeroTrustGatewayGatewayAccountCreateData {
    account_id: string;
    result?: Record<string, any>;
}
export interface ZeroTrustGatewayGatewayAccountConfig {
    result?: Record<string, any>;
    settings?: Record<string, any>;
}
export interface ZeroTrustGatewayGatewayAccountConfigLoadMatch {
    account_id: string;
}
export interface ZeroTrustGatewayGatewayAccountConfigUpdateData {
    account_id: string;
    result?: Record<string, any>;
    settings?: Record<string, any>;
}
export interface ZeroTrustGatewayGatewayAccountEgressCidrPairList {
    result?: any[];
}
export interface ZeroTrustGatewayGatewayAccountEgressCidrPairListListMatch {
    account_id: string;
}
export interface ZeroTrustGatewayGatewayAccountLoggingSetting {
    redact_pii?: boolean;
    result?: Record<string, any>;
    settings_by_rule_type?: Record<string, any>;
}
export interface ZeroTrustGatewayGatewayAccountLoggingSettingLoadMatch {
    account_id: string;
}
export interface ZeroTrustGatewayGatewayAccountLoggingSettingUpdateData {
    account_id: string;
    redact_pii?: boolean;
    result?: Record<string, any>;
    settings_by_rule_type?: Record<string, any>;
}
export interface ZeroTrustGatewayListItemResponseCollection {
    result?: any[];
    result_info?: Record<string, any>;
}
export interface ZeroTrustGatewayListItemResponseCollectionListMatch {
    account_id: string;
    list_id: string;
    page?: number;
    per_page?: number;
}
export interface ZeroTrustGatewayListSingle {
    append?: any[];
    description?: string;
    items?: any[];
    name: string;
    remove?: any[];
    result?: Record<string, any>;
}
export interface ZeroTrustGatewayListSingleLoadMatch {
    account_id: string;
    list_id: string;
}
export interface ZeroTrustGatewayListSingleUpdateData {
    account_id: string;
    list_id: string;
    append?: any[];
    description?: string;
    items?: any[];
    name?: string;
    remove?: any[];
    result?: Record<string, any>;
}
export interface ZeroTrustGatewayResponseCollection {
    result?: any[];
}
export interface ZeroTrustGatewayResponseCollectionListMatch {
    account_id: string;
}
export interface ZeroTrustGatewayResponseCollection10 {
    result?: any[];
    result_info?: Record<string, any>;
}
export interface ZeroTrustGatewayResponseCollection10ListMatch {
    account_id: string;
    page?: number;
    per_page?: number;
}
export interface ZeroTrustGatewayResponseCollection2 {
    result?: any[];
}
export interface ZeroTrustGatewayResponseCollection2ListMatch {
    account_id: string;
}
export interface ZeroTrustGatewayResponseCollection3 {
    result?: any[];
}
export interface ZeroTrustGatewayResponseCollection3ListMatch {
    account_id: string;
    direction?: string;
    filter?: any[];
    order_by?: string;
    search?: string;
    type?: string;
}
export interface ZeroTrustGatewayResponseCollection4 {
    result?: any[];
}
export interface ZeroTrustGatewayResponseCollection4ListMatch {
    account_id: string;
}
export interface ZeroTrustGatewayResponseCollection5 {
    result?: any[];
}
export interface ZeroTrustGatewayResponseCollection5ListMatch {
    account_id: string;
    direction?: string;
    filter?: any[];
    order_by?: string;
    search?: string;
}
export interface ZeroTrustGatewayResponseCollection6 {
    result?: any[];
}
export interface ZeroTrustGatewayResponseCollection6ListMatch {
    account_id: string;
    direction?: string;
    filter?: any[];
    order_by?: string;
    search?: string;
}
export interface ZeroTrustGatewayResponseCollection6UpdateData {
    account_id: string;
    result?: any[];
}
export interface ZeroTrustGatewayResponseCollection7 {
    result?: any[];
}
export interface ZeroTrustGatewayResponseCollection7ListMatch {
    account_id: string;
}
export interface ZeroTrustGatewayResponseCollection8 {
    result?: any[];
}
export interface ZeroTrustGatewayResponseCollection8ListMatch {
    account_id: string;
}
export interface ZeroTrustGatewayResponseCollection9 {
    result?: any[];
}
export interface ZeroTrustGatewayResponseCollection9ListMatch {
    account_id: string;
    direction?: string;
    filter?: any[];
    order_by?: string;
    search?: string;
}
export interface ZeroTrustGatewaySingle {
    result?: Record<string, any>;
    validity_period_days?: number;
}
export interface ZeroTrustGatewaySingleLoadMatch {
    account_id: string;
    certificate_id: string;
}
export interface ZeroTrustGatewaySingleCreateData {
    account_id: string;
    certificate_id?: string;
    result?: Record<string, any>;
    validity_period_days?: number;
    $action?: string;
    [action: string]: any;
}
export interface ZeroTrustGatewaySingleRemoveMatch {
    account_id: string;
    certificate_id: string;
}
export interface ZeroTrustGatewaySingleResponse2 {
    result?: Record<string, any>;
}
export interface ZeroTrustGatewaySingleResponse2LoadMatch {
    account_id: string;
    operation_id: string;
}
export interface ZeroTrustGatewaySingleResponse3 {
    client_default?: boolean;
    dns_destination_ips_id?: string;
    ecs_support?: boolean;
    endpoints: Record<string, any>;
    max_ttl: Record<string, any>;
    name: string;
    networks?: any[];
    result?: Record<string, any>;
}
export interface ZeroTrustGatewaySingleResponse3LoadMatch {
    account_id: string;
    location_id: string;
}
export interface ZeroTrustGatewaySingleResponse3CreateData {
    account_id: string;
    client_default?: boolean;
    dns_destination_ips_id?: string;
    ecs_support?: boolean;
    endpoints: Record<string, any>;
    max_ttl: Record<string, any>;
    name: string;
    networks?: any[];
    result?: Record<string, any>;
}
export interface ZeroTrustGatewaySingleResponse3UpdateData {
    account_id: string;
    location_id: string;
    client_default?: boolean;
    dns_destination_ips_id?: string;
    ecs_support?: boolean;
    endpoints?: Record<string, any>;
    max_ttl?: Record<string, any>;
    name?: string;
    networks?: any[];
    result?: Record<string, any>;
}
export interface ZeroTrustGatewaySingleResponse4 {
    action: string;
    description?: string;
    device_posture?: string;
    enabled?: boolean;
    expiration: Record<string, any>;
    filters?: any[];
    identity?: string;
    name: string;
    precedence?: number;
    result: Record<string, any>;
    rule_settings?: Record<string, any>;
    schedule?: Record<string, any>;
    traffic?: string;
}
export interface ZeroTrustGatewaySingleResponse4LoadMatch {
    account_id: string;
    rule_id: string;
}
export interface ZeroTrustGatewaySingleResponse4CreateData {
    account_id: string;
    rule_id?: string;
    action: string;
    description?: string;
    device_posture?: string;
    enabled?: boolean;
    expiration: Record<string, any>;
    filters?: any[];
    identity?: string;
    name: string;
    precedence?: number;
    result: Record<string, any>;
    rule_settings?: Record<string, any>;
    schedule?: Record<string, any>;
    traffic?: string;
}
export interface ZeroTrustGatewaySingleResponse4UpdateData {
    account_id: string;
    rule_id: string;
    action?: string;
    description?: string;
    device_posture?: string;
    enabled?: boolean;
    expiration?: Record<string, any>;
    filters?: any[];
    identity?: string;
    name?: string;
    precedence?: number;
    result?: Record<string, any>;
    rule_settings?: Record<string, any>;
    schedule?: Record<string, any>;
    traffic?: string;
}
export interface ZeroTrustGatewaySingleResponse5 {
    ips?: any[];
    kind?: string;
    name?: string;
    result?: any;
}
export interface ZeroTrustGatewaySingleResponse5LoadMatch {
    account_id: string;
    proxy_endpoint_id: string;
}
export interface ZeroTrustGatewaySingleResponse5CreateData {
    account_id: string;
    ips?: any[];
    kind?: string;
    name?: string;
    result?: any;
}
export interface ZeroTrustGatewaySingleResponse5UpdateData {
    account_id: string;
    proxy_endpoint_id: string;
    ips?: any[];
    kind?: string;
    name?: string;
    result?: any;
}
export interface ZeroTrustGatewaySingleResponse6 {
    public_key: string;
    result?: Record<string, any>;
}
export interface ZeroTrustGatewaySingleResponse6LoadMatch {
    account_id: string;
}
export interface ZeroTrustGatewaySingleResponse6CreateData {
    account_id: string;
    public_key: string;
    result?: Record<string, any>;
}
export interface ZeroTrustGatewaySingleResponse6UpdateData {
    account_id: string;
    public_key?: string;
    result?: Record<string, any>;
}
export interface ZeroTrustGatewaySingleResponse7 {
    contents: string;
    description?: string;
    name: string;
    result?: Record<string, any>;
    slug?: string;
}
export interface ZeroTrustGatewaySingleResponse7LoadMatch {
    account_id: string;
    pacfile_id: string;
}
export interface ZeroTrustGatewaySingleResponse7CreateData {
    account_id: string;
    contents: string;
    description?: string;
    name: string;
    result?: Record<string, any>;
    slug?: string;
}
export interface ZeroTrustGatewaySingleResponse7UpdateData {
    account_id: string;
    pacfile_id: string;
    contents?: string;
    description?: string;
    name?: string;
    result?: Record<string, any>;
    slug?: string;
}
export interface ZeroTrustGatewaySingleResponseWithListItem {
    description?: string;
    items?: any[];
    name: string;
    type: string;
}
export interface ZeroTrustGatewaySingleResponseWithListItemCreateData {
    account_id: string;
    description?: string;
    items?: any[];
    name: string;
    type: string;
}
export interface ZeroTrustRiskScoring {
    behaviors: Record<string, any>;
    result: Record<string, any>;
}
export interface ZeroTrustRiskScoringLoadMatch {
    account_id: string;
    user_id?: string;
}
export interface ZeroTrustRiskScoringCreateData {
    account_id: string;
    zt_risk_scoring_id: string;
    behaviors: Record<string, any>;
    result: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface ZeroTrustRiskScoringUpdateData {
    account_id: string;
    behaviors?: Record<string, any>;
    result?: Record<string, any>;
}
export interface ZeroTrustRiskScoringIntegration {
    active: boolean;
    id?: string;
    integration_type: string;
    reference_id?: string;
    result: Record<string, any>;
    tenant_url: string;
}
export interface ZeroTrustRiskScoringIntegrationLoadMatch {
    account_id: string;
    id?: string;
    reference_id?: string;
}
export interface ZeroTrustRiskScoringIntegrationListMatch {
    account_id: string;
}
export interface ZeroTrustRiskScoringIntegrationCreateData {
    account_id: string;
    active: boolean;
    id?: string;
    integration_type: string;
    reference_id?: string;
    result: Record<string, any>;
    tenant_url: string;
}
export interface ZeroTrustRiskScoringIntegrationUpdateData {
    account_id: string;
    id: string;
    active?: boolean;
    integration_type?: string;
    reference_id?: string;
    result?: Record<string, any>;
    tenant_url?: string;
}
export interface ZeroTrustRiskScoringIntegrationRemoveMatch {
    account_id: string;
    id: string;
}
