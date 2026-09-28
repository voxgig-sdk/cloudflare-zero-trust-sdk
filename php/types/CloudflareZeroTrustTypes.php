<?php
declare(strict_types=1);

// Typed models for the CloudflareZeroTrust SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** AlexandriaDeleteApplication entity data model. */
class AlexandriaDeleteApplication
{
    public ?string $id = null;
}

/** Request payload for AlexandriaDeleteApplication#remove. */
class AlexandriaDeleteApplicationRemoveMatch
{
    public string $account_id;
    public int $id;
}

/** AlexandriaGetApplication entity data model. */
class AlexandriaGetApplication
{
    public int $category_id;
    public array $errors;
    public ?array $hostnames = null;
    public string $human_id;
    public ?string $id = null;
    public ?array $ip_subnets = null;
    public array $messages;
    public string $name;
    public ?array $port_protocols = null;
    public array $result;
    public bool $success;
    public ?array $support_domains = null;
}

/** Request payload for AlexandriaGetApplication#load. */
class AlexandriaGetApplicationLoadMatch
{
    public string $account_id;
    public int $id;
}

/** Request payload for AlexandriaGetApplication#list. */
class AlexandriaGetApplicationListMatch
{
    public string $account_id;
    public ?string $field = null;
    public ?string $filter = null;
    public ?int $limit = null;
    public ?int $offset = null;
    public ?string $order_by = null;
    public ?string $search = null;
}

/** Request payload for AlexandriaGetApplication#create. */
class AlexandriaGetApplicationCreateData
{
    public string $account_id;
    public int $category_id;
    public array $errors;
    public ?array $hostnames = null;
    public string $human_id;
    public ?string $id = null;
    public ?array $ip_subnets = null;
    public array $messages;
    public string $name;
    public ?array $port_protocols = null;
    public array $result;
    public bool $success;
    public ?array $support_domains = null;
}

/** Request payload for AlexandriaGetApplication#update. */
class AlexandriaGetApplicationUpdateData
{
    public string $account_id;
    public int $id;
    public ?int $category_id = null;
    public ?array $errors = null;
    public ?array $hostnames = null;
    public ?string $human_id = null;
    public ?array $ip_subnets = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?array $port_protocols = null;
    public ?array $result = null;
    public ?bool $success = null;
    public ?array $support_domains = null;
}

/** AlexandriaGetCategory entity data model. */
class AlexandriaGetCategory
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for AlexandriaGetCategory#load. */
class AlexandriaGetCategoryLoadMatch
{
    public string $account_id;
    public int $id;
}

/** Request payload for AlexandriaGetCategory#list. */
class AlexandriaGetCategoryListMatch
{
    public string $account_id;
    public ?int $limit = null;
    public ?int $offset = null;
}

/** ClientVersion entity data model. */
class ClientVersion
{
    public array $errors;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for ClientVersion#list. */
class ClientVersionListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public string $release_track;
    public string $target_environment;
}

/** Cni entity data model. */
class Cni
{
    public ?string $id = null;
}

/** Request payload for Cni#remove. */
class CniRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** DeploymentGroup entity data model. */
class DeploymentGroup
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public ?array $policy_ids = null;
    public array $result;
    public array $result_info;
    public bool $success;
    public array $version_config;
}

/** Request payload for DeploymentGroup#load. */
class DeploymentGroupLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for DeploymentGroup#list. */
class DeploymentGroupListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for DeploymentGroup#create. */
class DeploymentGroupCreateData
{
    public string $account_id;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public ?array $policy_ids = null;
    public array $result;
    public array $result_info;
    public bool $success;
    public array $version_config;
}

/** Request payload for DeploymentGroup#update. */
class DeploymentGroupUpdateData
{
    public string $account_id;
    public string $id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?array $policy_ids = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?bool $success = null;
    public ?array $version_config = null;
}

/** Request payload for DeploymentGroup#remove. */
class DeploymentGroupRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** DexRemoteCommand entity data model. */
class DexRemoteCommand
{
    public array $commands;
    public ?array $result = null;
}

/** Request payload for DexRemoteCommand#load. */
class DexRemoteCommandLoadMatch
{
    public string $account_id;
    public ?string $command_type = null;
    public ?string $device_id = null;
    public ?string $from = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $status = null;
    public ?string $to = null;
    public ?string $user_email = null;
    public ?string $search = null;
    public ?string $command_id = null;
    public ?string $filename = null;
}

/** Request payload for DexRemoteCommand#create. */
class DexRemoteCommandCreateData
{
    public string $account_id;
    public array $commands;
    public ?array $result = null;
}

/** DexRule entity data model. */
class DexRule
{
    public ?string $description = null;
    public ?string $id = null;
    public string $match;
    public string $name;
    public ?array $result = null;
}

/** Request payload for DexRule#load. */
class DexRuleLoadMatch
{
    public string $account_id;
    public ?string $name = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $id = null;
}

/** Request payload for DexRule#create. */
class DexRuleCreateData
{
    public string $account_id;
    public ?string $description = null;
    public ?string $id = null;
    public string $match;
    public string $name;
    public ?array $result = null;
}

/** Request payload for DexRule#update. */
class DexRuleUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $description = null;
    public ?string $match = null;
    public ?string $name = null;
    public ?array $result = null;
}

/** Request payload for DexRule#remove. */
class DexRuleRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** DexSyntheticApplicationMonitoring entity data model. */
class DexSyntheticApplicationMonitoring
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for DexSyntheticApplicationMonitoring#load. */
class DexSyntheticApplicationMonitoringLoadMatch
{
    public string $account_id;
    public ?string $device_id = null;
    public ?string $cursor = null;
    public ?string $from = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $to = null;
    public ?string $colo = null;
    public ?string $kind = null;
    public ?string $registration_id = null;
    public ?string $test_name = null;
    public ?string $test_id = null;
    public ?string $interval = null;
    public ?string $http_test_id = null;
    public ?string $traceroute_test_id = null;
    public ?string $traceroute_test_result_id = null;
}

/** Request payload for DexSyntheticApplicationMonitoring#list. */
class DexSyntheticApplicationMonitoringListMatch
{
    public string $account_id;
    public string $from;
    public ?string $sort_by = null;
    public string $to;
}

/** DigitalExperienceMonitoringDevice entity data model. */
class DigitalExperienceMonitoringDevice
{
    public ?bool $alwaysOn = null;
    public ?bool $batteryCharging = null;
    public ?int $batteryCycles = null;
    public ?float $batteryPct = null;
    public string $colo;
    public ?string $connectionType = null;
    public ?float $cpuPct = null;
    public ?array $cpuPctByApp = null;
    public string $deviceId;
    public ?array $deviceIpv4 = null;
    public ?array $deviceIpv6 = null;
    public ?string $deviceName = null;
    public ?string $deviceRegistration = null;
    public ?int $diskReadBps = null;
    public ?float $diskUsagePct = null;
    public ?int $diskWriteBps = null;
    public ?string $dohSubdomain = null;
    public ?float $estimatedLossPct = null;
    public ?bool $firewallEnabled = null;
    public ?array $gatewayIpv4 = null;
    public ?array $gatewayIpv6 = null;
    public ?float $handshakeLatencyMs = null;
    public ?array $ispIpv4 = null;
    public ?array $ispIpv6 = null;
    public ?string $metal = null;
    public string $mode;
    public ?int $networkRcvdBps = null;
    public ?int $networkSentBps = null;
    public ?string $networkSsid = null;
    public ?string $personEmail = null;
    public string $platform;
    public ?int $ramAvailableKb = null;
    public ?float $ramUsedPct = null;
    public ?array $ramUsedPctByApp = null;
    public ?string $registrationId = null;
    public ?array $rtt = null;
    public string $status;
    public ?bool $switchLocked = null;
    public string $timestamp;
    public ?array $tunnelStats = null;
    public ?string $tunnelType = null;
    public string $version;
    public ?int $wifiStrengthDbm = null;
}

/** Request payload for DigitalExperienceMonitoringDevice#list. */
class DigitalExperienceMonitoringDeviceListMatch
{
    public string $account_id;
    public string $device_id;
    public ?string $colo = null;
    public float $since_minute;
    public ?string $time_now = null;
}

/** DigitalExperienceMonitoringDexDeleteResponseCollection entity data model. */
class DigitalExperienceMonitoringDexDeleteResponseCollection
{
}

/** Request payload for DigitalExperienceMonitoringDexDeleteResponseCollection#remove. */
class DigitalExperienceMonitoringDexDeleteResponseCollectionRemoveMatch
{
    public string $account_id;
    public string $dex_test_id;
}

/** DigitalExperienceMonitoringDexResponseCollection entity data model. */
class DigitalExperienceMonitoringDexResponseCollection
{
    public ?array $result = null;
}

/** Request payload for DigitalExperienceMonitoringDexResponseCollection#list. */
class DigitalExperienceMonitoringDexResponseCollectionListMatch
{
    public string $account_id;
    public ?string $kind = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $test_name = null;
}

/** DigitalExperienceMonitoringDexSingle entity data model. */
class DigitalExperienceMonitoringDexSingle
{
    public ?string $created = null;
    public array $data;
    public ?string $description = null;
    public bool $enabled;
    public string $interval;
    public string $name;
    public array $result;
    public mixed $target_policies = null;
    public ?bool $targeted = null;
    public ?string $test_id = null;
    public ?string $updated = null;
}

/** Request payload for DigitalExperienceMonitoringDexSingle#load. */
class DigitalExperienceMonitoringDexSingleLoadMatch
{
    public string $account_id;
    public string $dex_test_id;
}

/** Request payload for DigitalExperienceMonitoringDexSingle#create. */
class DigitalExperienceMonitoringDexSingleCreateData
{
    public string $account_id;
    public ?string $created = null;
    public array $data;
    public ?string $description = null;
    public bool $enabled;
    public string $interval;
    public string $name;
    public array $result;
    public mixed $target_policies = null;
    public ?bool $targeted = null;
    public ?string $test_id = null;
    public ?string $updated = null;
}

/** Request payload for DigitalExperienceMonitoringDexSingle#update. */
class DigitalExperienceMonitoringDexSingleUpdateData
{
    public string $account_id;
    public string $dex_test_id;
    public ?string $created = null;
    public ?array $data = null;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?string $interval = null;
    public ?string $name = null;
    public ?array $result = null;
    public mixed $target_policies = null;
    public ?bool $targeted = null;
    public ?string $test_id = null;
    public ?string $updated = null;
}

/** DigitalExperienceMonitoringFleetStatusDevice entity data model. */
class DigitalExperienceMonitoringFleetStatusDevice
{
    public ?array $result = null;
}

/** Request payload for DigitalExperienceMonitoringFleetStatusDevice#list. */
class DigitalExperienceMonitoringFleetStatusDeviceListMatch
{
    public string $account_id;
    public ?string $colo = null;
    public ?string $device_id = null;
    public string $from;
    public ?string $mode = null;
    public float $page;
    public float $per_page;
    public ?string $platform = null;
    public ?string $sort_by = null;
    public ?string $source = null;
    public ?string $status = null;
    public string $to;
    public ?string $version = null;
}

/** DigitalExperienceMonitoringFleetStatusLive entity data model. */
class DigitalExperienceMonitoringFleetStatusLive
{
    public ?array $result = null;
}

/** Request payload for DigitalExperienceMonitoringFleetStatusLive#load. */
class DigitalExperienceMonitoringFleetStatusLiveLoadMatch
{
    public string $account_id;
    public float $since_minute;
}

/** DigitalExperienceMonitoringFleetStatusOverTime entity data model. */
class DigitalExperienceMonitoringFleetStatusOverTime
{
    public ?array $result = null;
}

/** Request payload for DigitalExperienceMonitoringFleetStatusOverTime#load. */
class DigitalExperienceMonitoringFleetStatusOverTimeLoadMatch
{
    public string $account_id;
    public ?string $colo = null;
    public ?string $device_id = null;
    public string $from;
    public string $to;
}

/** Integration entity data model. */
class Integration
{
    public ?string $id = null;
}

/** Request payload for Integration#remove. */
class IntegrationRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Interconnect entity data model. */
class Interconnect
{
    public ?string $id = null;
}

/** Request payload for Interconnect#load. */
class InterconnectLoadMatch
{
    public string $account_id;
    public string $icon;
    public ?string $name = null;
}

/** Request payload for Interconnect#remove. */
class InterconnectRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** IpProfile entity data model. */
class IpProfile
{
    public ?string $description = null;
    public ?bool $enabled = null;
    public array $errors;
    public ?string $id = null;
    public string $match;
    public array $messages;
    public string $name;
    public int $precedence;
    public array $result;
    public array $result_info;
    public string $subnet_id;
    public bool $success;
}

/** Request payload for IpProfile#load. */
class IpProfileLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for IpProfile#list. */
class IpProfileListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for IpProfile#create. */
class IpProfileCreateData
{
    public string $account_id;
    public ?string $description = null;
    public ?bool $enabled = null;
    public array $errors;
    public ?string $id = null;
    public string $match;
    public array $messages;
    public string $name;
    public int $precedence;
    public array $result;
    public array $result_info;
    public string $subnet_id;
    public bool $success;
}

/** Request payload for IpProfile#update. */
class IpProfileUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?array $errors = null;
    public ?string $match = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?int $precedence = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?string $subnet_id = null;
    public ?bool $success = null;
}

/** Request payload for IpProfile#remove. */
class IpProfileRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** List entity data model. */
class ListType
{
    public ?string $id = null;
}

/** Request payload for List#remove. */
class ListRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Location entity data model. */
class Location
{
    public ?string $id = null;
}

/** Request payload for Location#remove. */
class LocationRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** NscCni entity data model. */
class NscCni
{
    public string $account;
    public array $bgp;
    public ?string $bgp_mode = null;
    public string $cust_ip;
    public string $id;
    public string $interconnect;
    public array $magic;
    public string $p2p_ip;
}

/** Request payload for NscCni#load. */
class NscCniLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for NscCni#list. */
class NscCniListMatch
{
    public string $account_id;
    public ?int $cursor = null;
    public ?int $limit = null;
    public ?string $slot = null;
    public ?string $tunnel_id = null;
}

/** Request payload for NscCni#create. */
class NscCniCreateData
{
    public string $account_id;
    public string $account;
    public array $bgp;
    public ?string $bgp_mode = null;
    public string $cust_ip;
    public string $id;
    public string $interconnect;
    public array $magic;
    public string $p2p_ip;
}

/** Request payload for NscCni#update. */
class NscCniUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $account = null;
    public ?array $bgp = null;
    public ?string $bgp_mode = null;
    public ?string $cust_ip = null;
    public ?string $interconnect = null;
    public ?array $magic = null;
    public ?string $p2p_ip = null;
}

/** NscDefaultName entity data model. */
class NscDefaultName
{
    public string $name;
}

/** Request payload for NscDefaultName#load. */
class NscDefaultNameLoadMatch
{
    public string $account_id;
    public string $interconnect_id;
}

/** NscInterconnect entity data model. */
class NscInterconnect
{
    public ?string $id = null;
    public array $items;
    public ?int $next = null;
}

/** Request payload for NscInterconnect#load. */
class NscInterconnectLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for NscInterconnect#list. */
class NscInterconnectListMatch
{
    public string $account_id;
    public ?int $cursor = null;
    public ?int $limit = null;
    public ?string $site = null;
    public ?string $type = null;
}

/** Request payload for NscInterconnect#create. */
class NscInterconnectCreateData
{
    public string $account_id;
    public ?string $id = null;
    public array $items;
    public ?int $next = null;
}

/** NscSetting entity data model. */
class NscSetting
{
    public int $default_asn;
}

/** Request payload for NscSetting#load. */
class NscSettingLoadMatch
{
    public string $account_id;
}

/** Request payload for NscSetting#update. */
class NscSettingUpdateData
{
    public string $account_id;
    public ?int $default_asn = null;
}

/** NscSlotInfo entity data model. */
class NscSlotInfo
{
    public ?string $account = null;
    public array $address;
    public ?string $ccr_device_name = null;
    public array $facility;
    public string $id;
    public string $name;
    public bool $occupied;
    public string $site;
    public string $speed;
}

/** Request payload for NscSlotInfo#load. */
class NscSlotInfoLoadMatch
{
    public string $account_id;
    public string $slot;
}

/** Request payload for NscSlotInfo#list. */
class NscSlotInfoListMatch
{
    public string $account_id;
    public ?string $address_contain = null;
    public ?int $cursor = null;
    public ?int $limit = null;
    public ?bool $occupied = null;
    public ?string $site = null;
    public ?string $speed = null;
}

/** NscStatusInfo entity data model. */
class NscStatusInfo
{
}

/** Request payload for NscStatusInfo#load. */
class NscStatusInfoLoadMatch
{
    public string $account_id;
    public string $icon;
}

/** OneApplicationDetail entity data model. */
class OneApplicationDetail
{
    public ?array $errors = null;
    public ?array $messages = null;
    public mixed $result;
    public bool $success;
}

/** Request payload for OneApplicationDetail#load. */
class OneApplicationDetailLoadMatch
{
    public string $account_id;
    public string $application_id;
}

/** OneIntegrationCreate entity data model. */
class OneIntegrationCreate
{
    public string $application;
    public ?string $auth_method = null;
    public array $credentials;
    public ?array $dlp_profiles = null;
    public string $name;
    public ?array $permissions = null;
    public ?array $use_cases = null;
}

/** Request payload for OneIntegrationCreate#create. */
class OneIntegrationCreateCreateData
{
    public string $account_id;
    public string $application;
    public ?string $auth_method = null;
    public array $credentials;
    public ?array $dlp_profiles = null;
    public string $name;
    public ?array $permissions = null;
    public ?array $use_cases = null;
}

/** OneIntegrationDetail entity data model. */
class OneIntegrationDetail
{
    public ?array $errors = null;
    public ?string $id = null;
    public ?array $messages = null;
    public mixed $result;
    public bool $success;
}

/** Request payload for OneIntegrationDetail#load. */
class OneIntegrationDetailLoadMatch
{
    public string $account_id;
    public string $id;
}

/** OneIntegrationPause entity data model. */
class OneIntegrationPause
{
    public ?array $errors = null;
    public ?array $messages = null;
    public mixed $result;
    public bool $success;
}

/** Request payload for OneIntegrationPause#create. */
class OneIntegrationPauseCreateData
{
    public string $account_id;
    public string $integration_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public mixed $result;
    public bool $success;
}

/** OneIntegrationResume entity data model. */
class OneIntegrationResume
{
    public ?array $errors = null;
    public ?array $messages = null;
    public mixed $result;
    public bool $success;
}

/** Request payload for OneIntegrationResume#create. */
class OneIntegrationResumeCreateData
{
    public string $account_id;
    public string $integration_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public mixed $result;
    public bool $success;
}

/** OneIntegrationUpdate entity data model. */
class OneIntegrationUpdate
{
    public ?array $credentials = null;
    public ?array $dlp_profiles = null;
    public ?array $errors = null;
    public ?string $id = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?array $permissions = null;
    public mixed $result;
    public bool $success;
    public ?array $use_cases = null;
}

/** Request payload for OneIntegrationUpdate#update. */
class OneIntegrationUpdateUpdateData
{
    public string $account_id;
    public string $id;
    public ?array $credentials = null;
    public ?array $dlp_profiles = null;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?array $permissions = null;
    public mixed $result = null;
    public ?bool $success = null;
    public ?array $use_cases = null;
}

/** OnePaginatedApplicationListList entity data model. */
class OnePaginatedApplicationListList
{
    public array $auth_methods;
    public string $category;
    public string $description;
    public string $display_name;
    public bool $dlp_enabled;
    public string $id;
    public string $logo;
    public array $permissions;
    public array $supported_environments;
    public array $use_cases;
}

/** Request payload for OnePaginatedApplicationListList#list. */
class OnePaginatedApplicationListListListMatch
{
    public string $account_id;
    public ?string $environment = null;
    public ?int $page = null;
    public ?int $page_size = null;
}

/** OnePaginatedAuthMethodDetailList entity data model. */
class OnePaginatedAuthMethodDetailList
{
    public string $display_name;
    public bool $human_interaction_required;
    public string $id;
    public mixed $instructions;
    public array $payload_example;
    public array $payload_schema;
    public string $redirect_url;
}

/** Request payload for OnePaginatedAuthMethodDetailList#list. */
class OnePaginatedAuthMethodDetailListListMatch
{
    public string $account_id;
    public string $application_id;
    public ?int $page = null;
    public ?int $page_size = null;
}

/** OnePaginatedIntegrationV2ListItemList entity data model. */
class OnePaginatedIntegrationV2ListItemList
{
    public array $application;
    public string $created;
    public string $id;
    public bool $is_paused;
    public string $name;
    public string $status;
    public string $updated;
}

/** Request payload for OnePaginatedIntegrationV2ListItemList#list. */
class OnePaginatedIntegrationV2ListItemListListMatch
{
    public string $account_id;
    public ?string $application = null;
    public ?string $direction = null;
    public ?bool $dlp_enabled = null;
    public ?string $order = null;
    public ?int $page = null;
    public ?int $page_size = null;
    public ?string $search = null;
    public ?string $status = null;
    public ?string $use_case = null;
}

/** OnePaginatedSetupFlowList entity data model. */
class OnePaginatedSetupFlowList
{
    public mixed $auth_config = null;
    public bool $default;
    public string $description;
    public string $id;
    public string $name;
    public array $steps;
    public array $supported_environments;
}

/** Request payload for OnePaginatedSetupFlowList#list. */
class OnePaginatedSetupFlowListListMatch
{
    public string $account_id;
    public string $application_id;
    public ?string $auth_method = null;
    public ?string $environment = null;
    public ?int $page = null;
    public ?int $page_size = null;
}

/** OverrideCode entity data model. */
class OverrideCode
{
    public ?string $device_id = null;
    public int $duration_hours;
    public array $errors;
    public array $messages;
    public array $result;
    public string $scope;
    public bool $success;
    public string $type;
}

/** Request payload for OverrideCode#create. */
class OverrideCodeCreateData
{
    public string $account_id;
    public ?string $device_id = null;
    public int $duration_hours;
    public array $errors;
    public array $messages;
    public array $result;
    public string $scope;
    public bool $success;
    public string $type;
}

/** Pacfile entity data model. */
class Pacfile
{
    public ?string $id = null;
}

/** Request payload for Pacfile#remove. */
class PacfileRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** PhysicalDevice entity data model. */
class PhysicalDevice
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
    public ?array $tags = null;
}

/** Request payload for PhysicalDevice#load. */
class PhysicalDeviceLoadMatch
{
    public string $account_id;
    public string $id;
    public ?string $include = null;
}

/** Request payload for PhysicalDevice#list. */
class PhysicalDeviceListMatch
{
    public string $account_id;
    public ?string $active_registration = null;
    public ?string $cursor = null;
    public ?bool $has_registration_type = null;
    public ?array $id = null;
    public ?string $include = null;
    public ?string $last_seen_registration_policy_id = null;
    public ?string $last_seen_user_email = null;
    public ?int $per_page = null;
    public ?string $search = null;
    public ?string $seen_after = null;
    public ?string $seen_before = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?array $tag = null;
}

/** Request payload for PhysicalDevice#create. */
class PhysicalDeviceCreateData
{
    public string $account_id;
    public string $id;
    public array $errors;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
    public ?array $tags = null;
}

/** Request payload for PhysicalDevice#update. */
class PhysicalDeviceUpdateData
{
    public string $account_id;
    public string $id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?bool $success = null;
    public ?array $tags = null;
}

/** Request payload for PhysicalDevice#remove. */
class PhysicalDeviceRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** ProxyEndpoint entity data model. */
class ProxyEndpoint
{
    public ?string $id = null;
}

/** Request payload for ProxyEndpoint#remove. */
class ProxyEndpointRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Registration entity data model. */
class Registration
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for Registration#load. */
class RegistrationLoadMatch
{
    public string $account_id;
    public string $id;
    public ?string $include = null;
}

/** Request payload for Registration#list. */
class RegistrationListMatch
{
    public string $account_id;
    public ?string $cursor = null;
    public ?string $device_id = null;
    public ?array $id = null;
    public ?string $include = null;
    public ?int $per_page = null;
    public ?string $policy_id = null;
    public ?string $registration_type = null;
    public ?string $search = null;
    public ?string $seen_after = null;
    public ?string $seen_before = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $status = null;
    public ?array $user_id = null;
}

/** Request payload for Registration#create. */
class RegistrationCreateData
{
    public string $account_id;
    public array $id;
    public array $errors;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for Registration#remove. */
class RegistrationRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Rule entity data model. */
class Rule
{
    public ?string $id = null;
}

/** Request payload for Rule#remove. */
class RuleRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** TeamsDevicesApiResponseSingle entity data model. */
class TeamsDevicesApiResponseSingle
{
}

/** Request payload for TeamsDevicesApiResponseSingle#create. */
class TeamsDevicesApiResponseSingleCreateData
{
    public string $account_id;
}

/** TeamsDevicesComponentsSchemasResponseCollection entity data model. */
class TeamsDevicesComponentsSchemasResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TeamsDevicesComponentsSchemasResponseCollection#list. */
class TeamsDevicesComponentsSchemasResponseCollectionListMatch
{
    public string $account_id;
}

/** Request payload for TeamsDevicesComponentsSchemasResponseCollection#remove. */
class TeamsDevicesComponentsSchemasResponseCollectionRemoveMatch
{
    public string $account_id;
    public string $network_id;
}

/** TeamsDevicesComponentsSchemasSingle entity data model. */
class TeamsDevicesComponentsSchemasSingle
{
    public array $config;
    public string $name;
    public ?array $result = null;
    public string $type;
}

/** Request payload for TeamsDevicesComponentsSchemasSingle#load. */
class TeamsDevicesComponentsSchemasSingleLoadMatch
{
    public string $account_id;
    public string $network_id;
}

/** Request payload for TeamsDevicesComponentsSchemasSingle#create. */
class TeamsDevicesComponentsSchemasSingleCreateData
{
    public string $account_id;
    public array $config;
    public string $name;
    public ?array $result = null;
    public string $type;
}

/** Request payload for TeamsDevicesComponentsSchemasSingle#update. */
class TeamsDevicesComponentsSchemasSingleUpdateData
{
    public string $account_id;
    public string $network_id;
    public ?array $config = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?string $type = null;
}

/** TeamsDevicesDefaultDeviceSetting entity data model. */
class TeamsDevicesDefaultDeviceSetting
{
    public ?bool $allow_mode_switch = null;
    public ?bool $allow_updates = null;
    public ?bool $allowed_to_leave = null;
    public ?float $auto_connect = null;
    public ?float $captive_portal = null;
    public ?bool $disable_auto_fallback = null;
    public ?array $dns_search_suffixes = null;
    public ?array $exclude = null;
    public ?bool $exclude_office_ips = null;
    public array $global_acceleration;
    public ?array $include = null;
    public ?float $lan_allow_minutes = null;
    public ?float $lan_allow_subnet_size = null;
    public ?bool $register_interface_ip_with_dns = null;
    public ?array $result = null;
    public ?bool $sccm_vpn_boundary_support = null;
    public ?array $service_mode_v2 = null;
    public ?string $support_url = null;
    public ?bool $switch_locked = null;
    public ?string $tunnel_protocol = null;
    public ?bool $uninstall_protection = null;
    public array $virtual_networks;
}

/** Request payload for TeamsDevicesDefaultDeviceSetting#load. */
class TeamsDevicesDefaultDeviceSettingLoadMatch
{
    public string $account_id;
}

/** Request payload for TeamsDevicesDefaultDeviceSetting#update. */
class TeamsDevicesDefaultDeviceSettingUpdateData
{
    public string $account_id;
    public ?bool $allow_mode_switch = null;
    public ?bool $allow_updates = null;
    public ?bool $allowed_to_leave = null;
    public ?float $auto_connect = null;
    public ?float $captive_portal = null;
    public ?bool $disable_auto_fallback = null;
    public ?array $dns_search_suffixes = null;
    public ?array $exclude = null;
    public ?bool $exclude_office_ips = null;
    public ?array $global_acceleration = null;
    public ?array $include = null;
    public ?float $lan_allow_minutes = null;
    public ?float $lan_allow_subnet_size = null;
    public ?bool $register_interface_ip_with_dns = null;
    public ?array $result = null;
    public ?bool $sccm_vpn_boundary_support = null;
    public ?array $service_mode_v2 = null;
    public ?string $support_url = null;
    public ?bool $switch_locked = null;
    public ?string $tunnel_protocol = null;
    public ?bool $uninstall_protection = null;
    public ?array $virtual_networks = null;
}

/** TeamsDevicesDevice entity data model. */
class TeamsDevicesDevice
{
    public ?string $id = null;
    public ?array $result = null;
}

/** Request payload for TeamsDevicesDevice#load. */
class TeamsDevicesDeviceLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for TeamsDevicesDevice#list. */
class TeamsDevicesDeviceListMatch
{
    public string $account_id;
}

/** TeamsDevicesDeviceSetting entity data model. */
class TeamsDevicesDeviceSetting
{
    public ?bool $allow_mode_switch = null;
    public ?bool $allow_updates = null;
    public ?bool $allowed_to_leave = null;
    public ?float $auto_connect = null;
    public array $browser_extension_config;
    public ?float $captive_portal = null;
    public ?bool $default = null;
    public ?string $description = null;
    public ?bool $disable_auto_fallback = null;
    public ?array $dns_search_suffixes = null;
    public ?bool $enabled = null;
    public ?array $exclude = null;
    public ?bool $exclude_office_ips = null;
    public array $global_acceleration;
    public ?array $include = null;
    public ?float $lan_allow_minutes = null;
    public ?float $lan_allow_subnet_size = null;
    public ?string $match = null;
    public string $name;
    public ?float $precedence = null;
    public ?string $profile_type = null;
    public ?bool $register_interface_ip_with_dns = null;
    public ?array $result = null;
    public ?bool $sccm_vpn_boundary_support = null;
    public ?array $service_mode_v2 = null;
    public ?string $support_url = null;
    public ?bool $switch_locked = null;
    public ?string $tunnel_protocol = null;
    public ?bool $uninstall_protection = null;
    public array $virtual_networks;
}

/** Request payload for TeamsDevicesDeviceSetting#load. */
class TeamsDevicesDeviceSettingLoadMatch
{
    public string $account_id;
    public string $policy_id;
}

/** Request payload for TeamsDevicesDeviceSetting#create. */
class TeamsDevicesDeviceSettingCreateData
{
    public string $account_id;
    public ?bool $allow_mode_switch = null;
    public ?bool $allow_updates = null;
    public ?bool $allowed_to_leave = null;
    public ?float $auto_connect = null;
    public array $browser_extension_config;
    public ?float $captive_portal = null;
    public ?bool $default = null;
    public ?string $description = null;
    public ?bool $disable_auto_fallback = null;
    public ?array $dns_search_suffixes = null;
    public ?bool $enabled = null;
    public ?array $exclude = null;
    public ?bool $exclude_office_ips = null;
    public array $global_acceleration;
    public ?array $include = null;
    public ?float $lan_allow_minutes = null;
    public ?float $lan_allow_subnet_size = null;
    public ?string $match = null;
    public string $name;
    public ?float $precedence = null;
    public ?string $profile_type = null;
    public ?bool $register_interface_ip_with_dns = null;
    public ?array $result = null;
    public ?bool $sccm_vpn_boundary_support = null;
    public ?array $service_mode_v2 = null;
    public ?string $support_url = null;
    public ?bool $switch_locked = null;
    public ?string $tunnel_protocol = null;
    public ?bool $uninstall_protection = null;
    public array $virtual_networks;
}

/** Request payload for TeamsDevicesDeviceSetting#update. */
class TeamsDevicesDeviceSettingUpdateData
{
    public string $account_id;
    public string $policy_id;
    public ?bool $allow_mode_switch = null;
    public ?bool $allow_updates = null;
    public ?bool $allowed_to_leave = null;
    public ?float $auto_connect = null;
    public ?array $browser_extension_config = null;
    public ?float $captive_portal = null;
    public ?bool $default = null;
    public ?string $description = null;
    public ?bool $disable_auto_fallback = null;
    public ?array $dns_search_suffixes = null;
    public ?bool $enabled = null;
    public ?array $exclude = null;
    public ?bool $exclude_office_ips = null;
    public ?array $global_acceleration = null;
    public ?array $include = null;
    public ?float $lan_allow_minutes = null;
    public ?float $lan_allow_subnet_size = null;
    public ?string $match = null;
    public ?string $name = null;
    public ?float $precedence = null;
    public ?string $profile_type = null;
    public ?bool $register_interface_ip_with_dns = null;
    public ?array $result = null;
    public ?bool $sccm_vpn_boundary_support = null;
    public ?array $service_mode_v2 = null;
    public ?string $support_url = null;
    public ?bool $switch_locked = null;
    public ?string $tunnel_protocol = null;
    public ?bool $uninstall_protection = null;
    public ?array $virtual_networks = null;
}

/** TeamsDevicesDeviceSettingsResponseCollection entity data model. */
class TeamsDevicesDeviceSettingsResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TeamsDevicesDeviceSettingsResponseCollection#list. */
class TeamsDevicesDeviceSettingsResponseCollectionListMatch
{
    public string $account_id;
    public ?string $profile_type = null;
}

/** Request payload for TeamsDevicesDeviceSettingsResponseCollection#remove. */
class TeamsDevicesDeviceSettingsResponseCollectionRemoveMatch
{
    public string $account_id;
    public string $policy_id;
}

/** TeamsDevicesDevicesPolicyCertificatesSingle entity data model. */
class TeamsDevicesDevicesPolicyCertificatesSingle
{
    public bool $enabled;
    public array $result;
}

/** Request payload for TeamsDevicesDevicesPolicyCertificatesSingle#load. */
class TeamsDevicesDevicesPolicyCertificatesSingleLoadMatch
{
    public string $zone_id;
}

/** Request payload for TeamsDevicesDevicesPolicyCertificatesSingle#update. */
class TeamsDevicesDevicesPolicyCertificatesSingleUpdateData
{
    public string $zone_id;
    public ?bool $enabled = null;
    public ?array $result = null;
}

/** TeamsDevicesFallbackDomainResponseCollection entity data model. */
class TeamsDevicesFallbackDomainResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TeamsDevicesFallbackDomainResponseCollection#list. */
class TeamsDevicesFallbackDomainResponseCollectionListMatch
{
    public string $account_id;
    public ?string $policy_id = null;
}

/** Request payload for TeamsDevicesFallbackDomainResponseCollection#update. */
class TeamsDevicesFallbackDomainResponseCollectionUpdateData
{
    public string $account_id;
    public ?string $policy_id = null;
    public ?array $result = null;
}

/** Request payload for TeamsDevicesFallbackDomainResponseCollection#remove. */
class TeamsDevicesFallbackDomainResponseCollectionRemoveMatch
{
    public string $account_id;
    public ?string $policy_id = null;
    public ?bool $reset_default = null;
}

/** TeamsDevicesGlobalWarpOverride entity data model. */
class TeamsDevicesGlobalWarpOverride
{
    public bool $disconnect;
    public ?string $justification = null;
    public ?array $result = null;
}

/** Request payload for TeamsDevicesGlobalWarpOverride#load. */
class TeamsDevicesGlobalWarpOverrideLoadMatch
{
    public string $account_id;
}

/** Request payload for TeamsDevicesGlobalWarpOverride#create. */
class TeamsDevicesGlobalWarpOverrideCreateData
{
    public string $account_id;
    public bool $disconnect;
    public ?string $justification = null;
    public ?array $result = null;
}

/** TeamsDevicesId entity data model. */
class TeamsDevicesId
{
}

/** Request payload for TeamsDevicesId#remove. */
class TeamsDevicesIdRemoveMatch
{
    public string $account_id;
    public string $rule_id;
}

/** TeamsDevicesOverrideCode entity data model. */
class TeamsDevicesOverrideCode
{
    public ?array $result = null;
}

/** Request payload for TeamsDevicesOverrideCode#load. */
class TeamsDevicesOverrideCodeLoadMatch
{
    public string $account_id;
    public string $device_id;
}

/** TeamsDevicesResponseCollection entity data model. */
class TeamsDevicesResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TeamsDevicesResponseCollection#list. */
class TeamsDevicesResponseCollectionListMatch
{
    public string $account_id;
}

/** TeamsDevicesSchemasId entity data model. */
class TeamsDevicesSchemasId
{
}

/** Request payload for TeamsDevicesSchemasId#remove. */
class TeamsDevicesSchemasIdRemoveMatch
{
    public string $account_id;
    public string $integration_id;
}

/** TeamsDevicesSchemasResponseCollection entity data model. */
class TeamsDevicesSchemasResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TeamsDevicesSchemasResponseCollection#list. */
class TeamsDevicesSchemasResponseCollectionListMatch
{
    public string $account_id;
}

/** TeamsDevicesSchemasSingle entity data model. */
class TeamsDevicesSchemasSingle
{
    public array $config;
    public string $interval;
    public string $name;
    public ?array $result = null;
    public string $type;
}

/** Request payload for TeamsDevicesSchemasSingle#load. */
class TeamsDevicesSchemasSingleLoadMatch
{
    public string $account_id;
    public string $integration_id;
}

/** Request payload for TeamsDevicesSchemasSingle#create. */
class TeamsDevicesSchemasSingleCreateData
{
    public string $account_id;
    public array $config;
    public string $interval;
    public string $name;
    public ?array $result = null;
    public string $type;
}

/** Request payload for TeamsDevicesSchemasSingle#update. */
class TeamsDevicesSchemasSingleUpdateData
{
    public string $account_id;
    public string $integration_id;
    public ?array $config = null;
    public ?string $interval = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?string $type = null;
}

/** TeamsDevicesSingle entity data model. */
class TeamsDevicesSingle
{
    public ?string $description = null;
    public ?string $expiration = null;
    public ?array $input = null;
    public ?array $match = null;
    public string $name;
    public ?array $result = null;
    public ?string $schedule = null;
    public string $type;
}

/** Request payload for TeamsDevicesSingle#load. */
class TeamsDevicesSingleLoadMatch
{
    public string $account_id;
    public string $rule_id;
}

/** Request payload for TeamsDevicesSingle#create. */
class TeamsDevicesSingleCreateData
{
    public string $account_id;
    public ?string $description = null;
    public ?string $expiration = null;
    public ?array $input = null;
    public ?array $match = null;
    public string $name;
    public ?array $result = null;
    public ?string $schedule = null;
    public string $type;
}

/** Request payload for TeamsDevicesSingle#update. */
class TeamsDevicesSingleUpdateData
{
    public string $account_id;
    public string $rule_id;
    public ?string $description = null;
    public ?string $expiration = null;
    public ?array $input = null;
    public ?array $match = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?string $schedule = null;
    public ?string $type = null;
}

/** TeamsDevicesSplitTunnelIncludeResponseCollection entity data model. */
class TeamsDevicesSplitTunnelIncludeResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TeamsDevicesSplitTunnelIncludeResponseCollection#list. */
class TeamsDevicesSplitTunnelIncludeResponseCollectionListMatch
{
    public string $account_id;
    public ?string $policy_id = null;
}

/** Request payload for TeamsDevicesSplitTunnelIncludeResponseCollection#update. */
class TeamsDevicesSplitTunnelIncludeResponseCollectionUpdateData
{
    public string $account_id;
    public ?string $policy_id = null;
    public ?array $result = null;
}

/** TeamsDevicesSplitTunnelResponseCollection entity data model. */
class TeamsDevicesSplitTunnelResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TeamsDevicesSplitTunnelResponseCollection#list. */
class TeamsDevicesSplitTunnelResponseCollectionListMatch
{
    public string $account_id;
    public ?string $policy_id = null;
}

/** Request payload for TeamsDevicesSplitTunnelResponseCollection#update. */
class TeamsDevicesSplitTunnelResponseCollectionUpdateData
{
    public string $account_id;
    public ?string $policy_id = null;
    public ?array $result = null;
}

/** Request payload for TeamsDevicesSplitTunnelResponseCollection#remove. */
class TeamsDevicesSplitTunnelResponseCollectionRemoveMatch
{
    public string $account_id;
    public ?string $policy_id = null;
    public ?bool $reset_default = null;
}

/** TeamsDevicesZeroTrustAccountDeviceSetting entity data model. */
class TeamsDevicesZeroTrustAccountDeviceSetting
{
    public ?float $disable_for_time = null;
    public ?bool $external_emergency_signal_enabled = null;
    public ?string $external_emergency_signal_fingerprint = null;
    public ?string $external_emergency_signal_interval = null;
    public ?string $external_emergency_signal_url = null;
    public ?bool $gateway_proxy_enabled = null;
    public ?bool $gateway_udp_proxy_enabled = null;
    public ?array $result = null;
    public ?bool $root_certificate_installation_enabled = null;
    public ?bool $use_zt_virtual_ip = null;
}

/** Request payload for TeamsDevicesZeroTrustAccountDeviceSetting#load. */
class TeamsDevicesZeroTrustAccountDeviceSettingLoadMatch
{
    public string $account_id;
}

/** Request payload for TeamsDevicesZeroTrustAccountDeviceSetting#update. */
class TeamsDevicesZeroTrustAccountDeviceSettingUpdateData
{
    public string $account_id;
    public ?float $disable_for_time = null;
    public ?bool $external_emergency_signal_enabled = null;
    public ?string $external_emergency_signal_fingerprint = null;
    public ?string $external_emergency_signal_interval = null;
    public ?string $external_emergency_signal_url = null;
    public ?bool $gateway_proxy_enabled = null;
    public ?bool $gateway_udp_proxy_enabled = null;
    public ?array $result = null;
    public ?bool $root_certificate_installation_enabled = null;
    public ?bool $use_zt_virtual_ip = null;
}

/** Request payload for TeamsDevicesZeroTrustAccountDeviceSetting#remove. */
class TeamsDevicesZeroTrustAccountDeviceSettingRemoveMatch
{
    public string $account_id;
}

/** Tunnel entity data model. */
class Tunnel
{
    public ?array $result = null;
}

/** Request payload for Tunnel#list. */
class TunnelListMatch
{
    public string $account_id;
    public ?string $exclude_prefix = null;
    public ?string $existed_at = null;
    public ?string $include_prefix = null;
    public ?bool $is_deleted = null;
    public ?string $name = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $status = null;
    public ?array $tun_type = null;
    public ?string $uuid = null;
    public ?string $was_active_at = null;
    public ?string $was_inactive_at = null;
}

/** TunnelCfdTunnelResponseCollection entity data model. */
class TunnelCfdTunnelResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TunnelCfdTunnelResponseCollection#list. */
class TunnelCfdTunnelResponseCollectionListMatch
{
    public string $account_id;
    public ?string $exclude_prefix = null;
    public ?string $existed_at = null;
    public ?string $include_prefix = null;
    public ?bool $is_deleted = null;
    public ?string $name = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $status = null;
    public ?string $uuid = null;
    public ?string $was_active_at = null;
    public ?string $was_inactive_at = null;
}

/** TunnelCfdTunnelResponseSingle entity data model. */
class TunnelCfdTunnelResponseSingle
{
    public ?string $config_src = null;
    public array $errors;
    public array $messages;
    public string $name;
    public string $result;
    public bool $success;
    public ?string $tunnel_secret = null;
}

/** Request payload for TunnelCfdTunnelResponseSingle#load. */
class TunnelCfdTunnelResponseSingleLoadMatch
{
    public string $account_id;
    public string $tunnel_id;
}

/** Request payload for TunnelCfdTunnelResponseSingle#create. */
class TunnelCfdTunnelResponseSingleCreateData
{
    public string $account_id;
    public ?string $config_src = null;
    public array $errors;
    public array $messages;
    public string $name;
    public string $result;
    public bool $success;
    public ?string $tunnel_secret = null;
}

/** Request payload for TunnelCfdTunnelResponseSingle#update. */
class TunnelCfdTunnelResponseSingleUpdateData
{
    public string $account_id;
    public string $tunnel_id;
    public ?string $config_src = null;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?string $result = null;
    public ?bool $success = null;
    public ?string $tunnel_secret = null;
}

/** Request payload for TunnelCfdTunnelResponseSingle#remove. */
class TunnelCfdTunnelResponseSingleRemoveMatch
{
    public string $account_id;
    public string $tunnel_id;
}

/** TunnelConfiguration entity data model. */
class TunnelConfiguration
{
    public ?array $config = null;
    public ?array $result = null;
}

/** Request payload for TunnelConfiguration#load. */
class TunnelConfigurationLoadMatch
{
    public string $account_id;
    public string $cfd_tunnel_id;
}

/** Request payload for TunnelConfiguration#update. */
class TunnelConfigurationUpdateData
{
    public string $account_id;
    public string $cfd_tunnel_id;
    public ?array $config = null;
    public ?array $result = null;
}

/** TunnelEmpty entity data model. */
class TunnelEmpty
{
    public string $client_id;
}

/** Request payload for TunnelEmpty#update. */
class TunnelEmptyUpdateData
{
    public string $account_id;
    public string $warp_connector_id;
    public ?string $client_id = null;
}

/** Request payload for TunnelEmpty#remove. */
class TunnelEmptyRemoveMatch
{
    public string $account_id;
    public string $cfd_tunnel_id;
    public ?string $client_id = null;
}

/** TunnelHostnameRouteResponseCollection entity data model. */
class TunnelHostnameRouteResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TunnelHostnameRouteResponseCollection#list. */
class TunnelHostnameRouteResponseCollectionListMatch
{
    public string $account_id;
    public ?string $comment = null;
    public ?string $existed_at = null;
    public ?string $hostname = null;
    public ?string $id = null;
    public ?bool $is_deleted = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $tunnel_id = null;
}

/** TunnelHostnameRouteResponseSingle entity data model. */
class TunnelHostnameRouteResponseSingle
{
    public ?string $comment = null;
    public array $errors;
    public ?string $hostname = null;
    public array $messages;
    public string $result;
    public bool $success;
    public ?string $tunnel_id = null;
}

/** Request payload for TunnelHostnameRouteResponseSingle#load. */
class TunnelHostnameRouteResponseSingleLoadMatch
{
    public string $account_id;
    public string $hostname_route_id;
}

/** Request payload for TunnelHostnameRouteResponseSingle#create. */
class TunnelHostnameRouteResponseSingleCreateData
{
    public string $account_id;
    public ?string $comment = null;
    public array $errors;
    public ?string $hostname = null;
    public array $messages;
    public string $result;
    public bool $success;
    public ?string $tunnel_id = null;
}

/** Request payload for TunnelHostnameRouteResponseSingle#update. */
class TunnelHostnameRouteResponseSingleUpdateData
{
    public string $account_id;
    public string $hostname_route_id;
    public ?string $comment = null;
    public ?array $errors = null;
    public ?string $hostname = null;
    public ?array $messages = null;
    public ?string $result = null;
    public ?bool $success = null;
    public ?string $tunnel_id = null;
}

/** Request payload for TunnelHostnameRouteResponseSingle#remove. */
class TunnelHostnameRouteResponseSingleRemoveMatch
{
    public string $account_id;
    public string $hostname_route_id;
}

/** TunnelMeshConfigurationResponseSingle entity data model. */
class TunnelMeshConfigurationResponseSingle
{
    public ?array $config = null;
    public string $ha_mode;
    public array $result;
}

/** Request payload for TunnelMeshConfigurationResponseSingle#load. */
class TunnelMeshConfigurationResponseSingleLoadMatch
{
    public string $account_id;
    public string $warp_connector_id;
}

/** Request payload for TunnelMeshConfigurationResponseSingle#update. */
class TunnelMeshConfigurationResponseSingleUpdateData
{
    public string $account_id;
    public string $warp_connector_id;
    public ?array $config = null;
    public ?string $ha_mode = null;
    public ?array $result = null;
}

/** TunnelRouteResponseSingle entity data model. */
class TunnelRouteResponseSingle
{
    public ?string $comment = null;
    public array $errors;
    public array $messages;
    public string $network;
    public string $result;
    public bool $success;
    public string $tunnel_id;
    public ?string $virtual_network_id = null;
}

/** Request payload for TunnelRouteResponseSingle#load. */
class TunnelRouteResponseSingleLoadMatch
{
    public string $account_id;
    public string $route_id;
}

/** Request payload for TunnelRouteResponseSingle#create. */
class TunnelRouteResponseSingleCreateData
{
    public string $account_id;
    public ?string $ip_network_encoded = null;
    public ?string $comment = null;
    public array $errors;
    public array $messages;
    public string $network;
    public string $result;
    public bool $success;
    public string $tunnel_id;
    public ?string $virtual_network_id = null;
}

/** Request payload for TunnelRouteResponseSingle#update. */
class TunnelRouteResponseSingleUpdateData
{
    public string $account_id;
    public ?string $ip_network_encoded = null;
    public ?string $route_id = null;
    public ?string $comment = null;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?string $network = null;
    public ?string $result = null;
    public ?bool $success = null;
    public ?string $tunnel_id = null;
    public ?string $virtual_network_id = null;
}

/** Request payload for TunnelRouteResponseSingle#remove. */
class TunnelRouteResponseSingleRemoveMatch
{
    public string $account_id;
    public ?string $ip_network_encoded = null;
    public ?string $tun_type = null;
    public ?string $tunnel_id = null;
    public ?string $virtual_network_id = null;
    public ?string $route_id = null;
}

/** TunnelSubnetResponseCollection entity data model. */
class TunnelSubnetResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TunnelSubnetResponseCollection#list. */
class TunnelSubnetResponseCollectionListMatch
{
    public string $account_id;
    public ?string $address_family = null;
    public ?string $comment = null;
    public ?string $existed_at = null;
    public ?bool $is_default_network = null;
    public ?bool $is_deleted = null;
    public ?string $name = null;
    public mixed $network = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $sort_order = null;
    public ?string $subnet_type = null;
}

/** TunnelSubnetResponseSingle entity data model. */
class TunnelSubnetResponseSingle
{
    public ?string $comment = null;
    public array $errors;
    public ?bool $is_default_network = null;
    public array $messages;
    public string $name;
    public string $network;
    public string $result;
    public bool $success;
}

/** Request payload for TunnelSubnetResponseSingle#load. */
class TunnelSubnetResponseSingleLoadMatch
{
    public string $account_id;
    public string $address_family;
}

/** Request payload for TunnelSubnetResponseSingle#create. */
class TunnelSubnetResponseSingleCreateData
{
    public string $account_id;
    public ?string $comment = null;
    public array $errors;
    public ?bool $is_default_network = null;
    public array $messages;
    public string $name;
    public string $network;
    public string $result;
    public bool $success;
}

/** Request payload for TunnelSubnetResponseSingle#update. */
class TunnelSubnetResponseSingleUpdateData
{
    public string $account_id;
    public string $address_family;
    public ?string $comment = null;
    public ?array $errors = null;
    public ?bool $is_default_network = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?string $network = null;
    public ?string $result = null;
    public ?bool $success = null;
}

/** TunnelSubnetResponseSingleNullable entity data model. */
class TunnelSubnetResponseSingleNullable
{
}

/** Request payload for TunnelSubnetResponseSingleNullable#remove. */
class TunnelSubnetResponseSingleNullableRemoveMatch
{
    public string $account_id;
    public string $subnet_id;
}

/** TunnelTeamnetResponseCollection entity data model. */
class TunnelTeamnetResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TunnelTeamnetResponseCollection#list. */
class TunnelTeamnetResponseCollectionListMatch
{
    public string $account_id;
    public ?string $comment = null;
    public ?string $existed_at = null;
    public ?bool $is_deleted = null;
    public mixed $network_subset = null;
    public mixed $network_superset = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $route_id = null;
    public ?array $tun_type = null;
    public ?string $tunnel_id = null;
    public ?string $virtual_network_id = null;
}

/** TunnelTeamnetResponseSingle entity data model. */
class TunnelTeamnetResponseSingle
{
    public array $errors;
    public array $messages;
    public string $result;
    public bool $success;
}

/** Request payload for TunnelTeamnetResponseSingle#load. */
class TunnelTeamnetResponseSingleLoadMatch
{
    public string $account_id;
    public string $ip;
    public ?bool $default_virtual_network_fallback = null;
    public ?string $virtual_network_id = null;
}

/** TunnelTunnelClient entity data model. */
class TunnelTunnelClient
{
    public array $errors;
    public array $messages;
    public string $result;
    public bool $success;
}

/** Request payload for TunnelTunnelClient#load. */
class TunnelTunnelClientLoadMatch
{
    public string $account_id;
    public string $cfd_tunnel_id;
    public string $connector_id;
}

/** TunnelTunnelConnection entity data model. */
class TunnelTunnelConnection
{
    public ?array $result = null;
}

/** Request payload for TunnelTunnelConnection#list. */
class TunnelTunnelConnectionListMatch
{
    public string $account_id;
    public string $cfd_tunnel_id;
}

/** TunnelTunnelResponseToken entity data model. */
class TunnelTunnelResponseToken
{
    public array $errors;
    public array $messages;
    public array $resources;
    public string $result;
    public bool $success;
}

/** Request payload for TunnelTunnelResponseToken#list. */
class TunnelTunnelResponseTokenListMatch
{
    public string $account_id;
    public ?string $cfd_tunnel_id = null;
    public ?string $warp_connector_id = null;
}

/** Request payload for TunnelTunnelResponseToken#create. */
class TunnelTunnelResponseTokenCreateData
{
    public string $account_id;
    public string $cfd_tunnel_id;
    public array $errors;
    public array $messages;
    public array $resources;
    public string $result;
    public bool $success;
}

/** TunnelTunnelWarpConnectorClient entity data model. */
class TunnelTunnelWarpConnectorClient
{
    public array $errors;
    public array $messages;
    public string $result;
    public bool $success;
}

/** Request payload for TunnelTunnelWarpConnectorClient#load. */
class TunnelTunnelWarpConnectorClientLoadMatch
{
    public string $account_id;
    public string $connector_id;
    public string $warp_connector_id;
}

/** TunnelTunnelWarpConnectorConnection entity data model. */
class TunnelTunnelWarpConnectorConnection
{
    public ?array $result = null;
}

/** Request payload for TunnelTunnelWarpConnectorConnection#list. */
class TunnelTunnelWarpConnectorConnectionListMatch
{
    public string $account_id;
    public string $warp_connector_id;
}

/** TunnelVnetResponseCollection entity data model. */
class TunnelVnetResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TunnelVnetResponseCollection#list. */
class TunnelVnetResponseCollectionListMatch
{
    public string $account_id;
    public ?string $id = null;
    public ?bool $is_default = null;
    public ?bool $is_default_network = null;
    public ?bool $is_deleted = null;
    public ?string $name = null;
}

/** TunnelVnetResponseSingle entity data model. */
class TunnelVnetResponseSingle
{
    public ?string $comment = null;
    public ?bool $is_default = null;
    public ?bool $is_default_network = null;
    public ?string $name = null;
}

/** Request payload for TunnelVnetResponseSingle#load. */
class TunnelVnetResponseSingleLoadMatch
{
    public string $account_id;
    public string $virtual_network_id;
}

/** Request payload for TunnelVnetResponseSingle#create. */
class TunnelVnetResponseSingleCreateData
{
    public string $account_id;
    public ?string $comment = null;
    public ?bool $is_default = null;
    public ?bool $is_default_network = null;
    public ?string $name = null;
}

/** Request payload for TunnelVnetResponseSingle#update. */
class TunnelVnetResponseSingleUpdateData
{
    public string $account_id;
    public string $virtual_network_id;
    public ?string $comment = null;
    public ?bool $is_default = null;
    public ?bool $is_default_network = null;
    public ?string $name = null;
}

/** Request payload for TunnelVnetResponseSingle#remove. */
class TunnelVnetResponseSingleRemoveMatch
{
    public string $account_id;
    public string $virtual_network_id;
}

/** TunnelWarpConnectorResponseCollection entity data model. */
class TunnelWarpConnectorResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TunnelWarpConnectorResponseCollection#list. */
class TunnelWarpConnectorResponseCollectionListMatch
{
    public string $account_id;
    public ?string $exclude_prefix = null;
    public ?string $existed_at = null;
    public ?string $include_prefix = null;
    public ?bool $is_deleted = null;
    public ?string $name = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $status = null;
    public ?string $uuid = null;
    public ?string $was_active_at = null;
    public ?string $was_inactive_at = null;
}

/** TunnelWarpConnectorResponseSingle entity data model. */
class TunnelWarpConnectorResponseSingle
{
    public array $errors;
    public ?bool $ha = null;
    public array $messages;
    public string $name;
    public string $result;
    public bool $success;
    public ?string $tunnel_secret = null;
}

/** Request payload for TunnelWarpConnectorResponseSingle#load. */
class TunnelWarpConnectorResponseSingleLoadMatch
{
    public string $account_id;
    public string $tunnel_id;
}

/** Request payload for TunnelWarpConnectorResponseSingle#create. */
class TunnelWarpConnectorResponseSingleCreateData
{
    public string $account_id;
    public array $errors;
    public ?bool $ha = null;
    public array $messages;
    public string $name;
    public string $result;
    public bool $success;
    public ?string $tunnel_secret = null;
}

/** Request payload for TunnelWarpConnectorResponseSingle#update. */
class TunnelWarpConnectorResponseSingleUpdateData
{
    public string $account_id;
    public string $tunnel_id;
    public ?array $errors = null;
    public ?bool $ha = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?string $result = null;
    public ?bool $success = null;
    public ?string $tunnel_secret = null;
}

/** Request payload for TunnelWarpConnectorResponseSingle#remove. */
class TunnelWarpConnectorResponseSingleRemoveMatch
{
    public string $account_id;
    public string $tunnel_id;
}

/** TunnelZeroTrustConnectivitySetting entity data model. */
class TunnelZeroTrustConnectivitySetting
{
    public array $errors;
    public ?bool $icmp_proxy_enabled = null;
    public array $messages;
    public ?bool $offramp_warp_enabled = null;
    public string $result;
    public bool $success;
}

/** Request payload for TunnelZeroTrustConnectivitySetting#list. */
class TunnelZeroTrustConnectivitySettingListMatch
{
    public string $account_id;
}

/** Request payload for TunnelZeroTrustConnectivitySetting#update. */
class TunnelZeroTrustConnectivitySettingUpdateData
{
    public string $account_id;
    public ?array $errors = null;
    public ?bool $icmp_proxy_enabled = null;
    public ?array $messages = null;
    public ?bool $offramp_warp_enabled = null;
    public ?string $result = null;
    public ?bool $success = null;
}

/** Warp entity data model. */
class Warp
{
    public ?string $comment = null;
    public array $errors;
    public ?string $id = null;
    public ?bool $is_default_network = null;
    public array $messages;
    public ?string $name = null;
    public ?string $network = null;
    public string $result;
    public bool $success;
}

/** Request payload for Warp#load. */
class WarpLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for Warp#update. */
class WarpUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $comment = null;
    public ?array $errors = null;
    public ?bool $is_default_network = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?string $network = null;
    public ?string $result = null;
    public ?bool $success = null;
}

/** WarpChangeEvent entity data model. */
class WarpChangeEvent
{
    public ?array $result = null;
}

/** Request payload for WarpChangeEvent#list. */
class WarpChangeEventListMatch
{
    public string $account_id;
    public ?string $account_name = null;
    public ?string $config_name = null;
    public string $from;
    public float $page;
    public float $per_page;
    public ?string $sort_order = null;
    public string $to;
    public ?string $toggle = null;
    public ?string $type = null;
}

/** WarpTeamsDeviceApiOther entity data model. */
class WarpTeamsDeviceApiOther
{
    public array $errors;
    public array $messages;
    public mixed $result;
    public bool $success;
}

/** Request payload for WarpTeamsDeviceApiOther#list. */
class WarpTeamsDeviceApiOtherListMatch
{
    public string $account_id;
    public string $registration_id;
}

/** ZeroTrustGatewayApplicationsReviewStatus entity data model. */
class ZeroTrustGatewayApplicationsReviewStatus
{
    public array $approved_apps;
    public array $in_review_apps;
    public ?array $result = null;
    public array $unapproved_apps;
}

/** Request payload for ZeroTrustGatewayApplicationsReviewStatus#load. */
class ZeroTrustGatewayApplicationsReviewStatusLoadMatch
{
    public string $account_id;
}

/** Request payload for ZeroTrustGatewayApplicationsReviewStatus#update. */
class ZeroTrustGatewayApplicationsReviewStatusUpdateData
{
    public string $account_id;
    public ?array $approved_apps = null;
    public ?array $in_review_apps = null;
    public ?array $result = null;
    public ?array $unapproved_apps = null;
}

/** ZeroTrustGatewayCsvOperationSingle entity data model. */
class ZeroTrustGatewayCsvOperationSingle
{
}

/** Request payload for ZeroTrustGatewayCsvOperationSingle#create. */
class ZeroTrustGatewayCsvOperationSingleCreateData
{
    public string $account_id;
}

/** ZeroTrustGatewayCustomCertificateSetting entity data model. */
class ZeroTrustGatewayCustomCertificateSetting
{
    public ?string $binding_status = null;
    public bool $enabled;
    public ?string $id = null;
    public ?string $updated_at = null;
}

/** Request payload for ZeroTrustGatewayCustomCertificateSetting#load. */
class ZeroTrustGatewayCustomCertificateSettingLoadMatch
{
    public string $account_id;
}

/** ZeroTrustGatewayGatewayAccount entity data model. */
class ZeroTrustGatewayGatewayAccount
{
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewayGatewayAccount#load. */
class ZeroTrustGatewayGatewayAccountLoadMatch
{
    public string $account_id;
}

/** Request payload for ZeroTrustGatewayGatewayAccount#create. */
class ZeroTrustGatewayGatewayAccountCreateData
{
    public string $account_id;
    public ?array $result = null;
}

/** ZeroTrustGatewayGatewayAccountConfig entity data model. */
class ZeroTrustGatewayGatewayAccountConfig
{
    public ?array $result = null;
    public ?array $settings = null;
}

/** Request payload for ZeroTrustGatewayGatewayAccountConfig#load. */
class ZeroTrustGatewayGatewayAccountConfigLoadMatch
{
    public string $account_id;
}

/** Request payload for ZeroTrustGatewayGatewayAccountConfig#update. */
class ZeroTrustGatewayGatewayAccountConfigUpdateData
{
    public string $account_id;
    public ?array $result = null;
    public ?array $settings = null;
}

/** ZeroTrustGatewayGatewayAccountEgressCidrPairList entity data model. */
class ZeroTrustGatewayGatewayAccountEgressCidrPairList
{
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewayGatewayAccountEgressCidrPairList#list. */
class ZeroTrustGatewayGatewayAccountEgressCidrPairListListMatch
{
    public string $account_id;
}

/** ZeroTrustGatewayGatewayAccountLoggingSetting entity data model. */
class ZeroTrustGatewayGatewayAccountLoggingSetting
{
    public ?bool $redact_pii = null;
    public ?array $result = null;
    public ?array $settings_by_rule_type = null;
}

/** Request payload for ZeroTrustGatewayGatewayAccountLoggingSetting#load. */
class ZeroTrustGatewayGatewayAccountLoggingSettingLoadMatch
{
    public string $account_id;
}

/** Request payload for ZeroTrustGatewayGatewayAccountLoggingSetting#update. */
class ZeroTrustGatewayGatewayAccountLoggingSettingUpdateData
{
    public string $account_id;
    public ?bool $redact_pii = null;
    public ?array $result = null;
    public ?array $settings_by_rule_type = null;
}

/** ZeroTrustGatewayListItemResponseCollection entity data model. */
class ZeroTrustGatewayListItemResponseCollection
{
    public ?array $result = null;
    public ?array $result_info = null;
}

/** Request payload for ZeroTrustGatewayListItemResponseCollection#list. */
class ZeroTrustGatewayListItemResponseCollectionListMatch
{
    public string $account_id;
    public string $list_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** ZeroTrustGatewayListSingle entity data model. */
class ZeroTrustGatewayListSingle
{
    public ?array $append = null;
    public ?string $description = null;
    public ?array $items = null;
    public string $name;
    public ?array $remove = null;
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewayListSingle#load. */
class ZeroTrustGatewayListSingleLoadMatch
{
    public string $account_id;
    public string $list_id;
}

/** Request payload for ZeroTrustGatewayListSingle#update. */
class ZeroTrustGatewayListSingleUpdateData
{
    public string $account_id;
    public string $list_id;
    public ?array $append = null;
    public ?string $description = null;
    public ?array $items = null;
    public ?string $name = null;
    public ?array $remove = null;
    public ?array $result = null;
}

/** ZeroTrustGatewayResponseCollection entity data model. */
class ZeroTrustGatewayResponseCollection
{
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewayResponseCollection#list. */
class ZeroTrustGatewayResponseCollectionListMatch
{
    public string $account_id;
}

/** ZeroTrustGatewayResponseCollection10 entity data model. */
class ZeroTrustGatewayResponseCollection10
{
    public ?array $result = null;
    public ?array $result_info = null;
}

/** Request payload for ZeroTrustGatewayResponseCollection10#list. */
class ZeroTrustGatewayResponseCollection10ListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** ZeroTrustGatewayResponseCollection2 entity data model. */
class ZeroTrustGatewayResponseCollection2
{
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewayResponseCollection2#list. */
class ZeroTrustGatewayResponseCollection2ListMatch
{
    public string $account_id;
}

/** ZeroTrustGatewayResponseCollection3 entity data model. */
class ZeroTrustGatewayResponseCollection3
{
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewayResponseCollection3#list. */
class ZeroTrustGatewayResponseCollection3ListMatch
{
    public string $account_id;
    public ?string $direction = null;
    public ?array $filter = null;
    public ?string $order_by = null;
    public ?string $search = null;
    public ?string $type = null;
}

/** ZeroTrustGatewayResponseCollection4 entity data model. */
class ZeroTrustGatewayResponseCollection4
{
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewayResponseCollection4#list. */
class ZeroTrustGatewayResponseCollection4ListMatch
{
    public string $account_id;
}

/** ZeroTrustGatewayResponseCollection5 entity data model. */
class ZeroTrustGatewayResponseCollection5
{
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewayResponseCollection5#list. */
class ZeroTrustGatewayResponseCollection5ListMatch
{
    public string $account_id;
    public ?string $direction = null;
    public ?array $filter = null;
    public ?string $order_by = null;
    public ?string $search = null;
}

/** ZeroTrustGatewayResponseCollection6 entity data model. */
class ZeroTrustGatewayResponseCollection6
{
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewayResponseCollection6#list. */
class ZeroTrustGatewayResponseCollection6ListMatch
{
    public string $account_id;
    public ?string $direction = null;
    public ?array $filter = null;
    public ?string $order_by = null;
    public ?string $search = null;
}

/** Request payload for ZeroTrustGatewayResponseCollection6#update. */
class ZeroTrustGatewayResponseCollection6UpdateData
{
    public string $account_id;
    public ?array $result = null;
}

/** ZeroTrustGatewayResponseCollection7 entity data model. */
class ZeroTrustGatewayResponseCollection7
{
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewayResponseCollection7#list. */
class ZeroTrustGatewayResponseCollection7ListMatch
{
    public string $account_id;
}

/** ZeroTrustGatewayResponseCollection8 entity data model. */
class ZeroTrustGatewayResponseCollection8
{
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewayResponseCollection8#list. */
class ZeroTrustGatewayResponseCollection8ListMatch
{
    public string $account_id;
}

/** ZeroTrustGatewayResponseCollection9 entity data model. */
class ZeroTrustGatewayResponseCollection9
{
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewayResponseCollection9#list. */
class ZeroTrustGatewayResponseCollection9ListMatch
{
    public string $account_id;
    public ?string $direction = null;
    public ?array $filter = null;
    public ?string $order_by = null;
    public ?string $search = null;
}

/** ZeroTrustGatewaySingle entity data model. */
class ZeroTrustGatewaySingle
{
    public ?array $result = null;
    public ?int $validity_period_days = null;
}

/** Request payload for ZeroTrustGatewaySingle#load. */
class ZeroTrustGatewaySingleLoadMatch
{
    public string $account_id;
    public string $certificate_id;
}

/** Request payload for ZeroTrustGatewaySingle#create. */
class ZeroTrustGatewaySingleCreateData
{
    public string $account_id;
    public ?string $certificate_id = null;
    public ?array $result = null;
    public ?int $validity_period_days = null;
}

/** Request payload for ZeroTrustGatewaySingle#remove. */
class ZeroTrustGatewaySingleRemoveMatch
{
    public string $account_id;
    public string $certificate_id;
}

/** ZeroTrustGatewaySingleResponse2 entity data model. */
class ZeroTrustGatewaySingleResponse2
{
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewaySingleResponse2#load. */
class ZeroTrustGatewaySingleResponse2LoadMatch
{
    public string $account_id;
    public string $operation_id;
}

/** ZeroTrustGatewaySingleResponse3 entity data model. */
class ZeroTrustGatewaySingleResponse3
{
    public ?bool $client_default = null;
    public ?string $dns_destination_ips_id = null;
    public ?bool $ecs_support = null;
    public array $endpoints;
    public array $max_ttl;
    public string $name;
    public ?array $networks = null;
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewaySingleResponse3#load. */
class ZeroTrustGatewaySingleResponse3LoadMatch
{
    public string $account_id;
    public string $location_id;
}

/** Request payload for ZeroTrustGatewaySingleResponse3#create. */
class ZeroTrustGatewaySingleResponse3CreateData
{
    public string $account_id;
    public ?bool $client_default = null;
    public ?string $dns_destination_ips_id = null;
    public ?bool $ecs_support = null;
    public array $endpoints;
    public array $max_ttl;
    public string $name;
    public ?array $networks = null;
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewaySingleResponse3#update. */
class ZeroTrustGatewaySingleResponse3UpdateData
{
    public string $account_id;
    public string $location_id;
    public ?bool $client_default = null;
    public ?string $dns_destination_ips_id = null;
    public ?bool $ecs_support = null;
    public ?array $endpoints = null;
    public ?array $max_ttl = null;
    public ?string $name = null;
    public ?array $networks = null;
    public ?array $result = null;
}

/** ZeroTrustGatewaySingleResponse4 entity data model. */
class ZeroTrustGatewaySingleResponse4
{
    public string $action;
    public ?string $description = null;
    public ?string $device_posture = null;
    public ?bool $enabled = null;
    public array $expiration;
    public ?array $filters = null;
    public ?string $identity = null;
    public string $name;
    public ?int $precedence = null;
    public array $result;
    public ?array $rule_settings = null;
    public ?array $schedule = null;
    public ?string $traffic = null;
}

/** Request payload for ZeroTrustGatewaySingleResponse4#load. */
class ZeroTrustGatewaySingleResponse4LoadMatch
{
    public string $account_id;
    public string $rule_id;
}

/** Request payload for ZeroTrustGatewaySingleResponse4#create. */
class ZeroTrustGatewaySingleResponse4CreateData
{
    public string $account_id;
    public ?string $rule_id = null;
    public string $action;
    public ?string $description = null;
    public ?string $device_posture = null;
    public ?bool $enabled = null;
    public array $expiration;
    public ?array $filters = null;
    public ?string $identity = null;
    public string $name;
    public ?int $precedence = null;
    public array $result;
    public ?array $rule_settings = null;
    public ?array $schedule = null;
    public ?string $traffic = null;
}

/** Request payload for ZeroTrustGatewaySingleResponse4#update. */
class ZeroTrustGatewaySingleResponse4UpdateData
{
    public string $account_id;
    public string $rule_id;
    public ?string $action = null;
    public ?string $description = null;
    public ?string $device_posture = null;
    public ?bool $enabled = null;
    public ?array $expiration = null;
    public ?array $filters = null;
    public ?string $identity = null;
    public ?string $name = null;
    public ?int $precedence = null;
    public ?array $result = null;
    public ?array $rule_settings = null;
    public ?array $schedule = null;
    public ?string $traffic = null;
}

/** ZeroTrustGatewaySingleResponse5 entity data model. */
class ZeroTrustGatewaySingleResponse5
{
    public ?array $ips = null;
    public ?string $kind = null;
    public ?string $name = null;
    public mixed $result = null;
}

/** Request payload for ZeroTrustGatewaySingleResponse5#load. */
class ZeroTrustGatewaySingleResponse5LoadMatch
{
    public string $account_id;
    public string $proxy_endpoint_id;
}

/** Request payload for ZeroTrustGatewaySingleResponse5#create. */
class ZeroTrustGatewaySingleResponse5CreateData
{
    public string $account_id;
    public ?array $ips = null;
    public ?string $kind = null;
    public ?string $name = null;
    public mixed $result = null;
}

/** Request payload for ZeroTrustGatewaySingleResponse5#update. */
class ZeroTrustGatewaySingleResponse5UpdateData
{
    public string $account_id;
    public string $proxy_endpoint_id;
    public ?array $ips = null;
    public ?string $kind = null;
    public ?string $name = null;
    public mixed $result = null;
}

/** ZeroTrustGatewaySingleResponse6 entity data model. */
class ZeroTrustGatewaySingleResponse6
{
    public string $public_key;
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewaySingleResponse6#load. */
class ZeroTrustGatewaySingleResponse6LoadMatch
{
    public string $account_id;
}

/** Request payload for ZeroTrustGatewaySingleResponse6#create. */
class ZeroTrustGatewaySingleResponse6CreateData
{
    public string $account_id;
    public string $public_key;
    public ?array $result = null;
}

/** Request payload for ZeroTrustGatewaySingleResponse6#update. */
class ZeroTrustGatewaySingleResponse6UpdateData
{
    public string $account_id;
    public ?string $public_key = null;
    public ?array $result = null;
}

/** ZeroTrustGatewaySingleResponse7 entity data model. */
class ZeroTrustGatewaySingleResponse7
{
    public string $contents;
    public ?string $description = null;
    public string $name;
    public ?array $result = null;
    public ?string $slug = null;
}

/** Request payload for ZeroTrustGatewaySingleResponse7#load. */
class ZeroTrustGatewaySingleResponse7LoadMatch
{
    public string $account_id;
    public string $pacfile_id;
}

/** Request payload for ZeroTrustGatewaySingleResponse7#create. */
class ZeroTrustGatewaySingleResponse7CreateData
{
    public string $account_id;
    public string $contents;
    public ?string $description = null;
    public string $name;
    public ?array $result = null;
    public ?string $slug = null;
}

/** Request payload for ZeroTrustGatewaySingleResponse7#update. */
class ZeroTrustGatewaySingleResponse7UpdateData
{
    public string $account_id;
    public string $pacfile_id;
    public ?string $contents = null;
    public ?string $description = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?string $slug = null;
}

/** ZeroTrustGatewaySingleResponseWithListItem entity data model. */
class ZeroTrustGatewaySingleResponseWithListItem
{
    public ?string $description = null;
    public ?array $items = null;
    public string $name;
    public string $type;
}

/** Request payload for ZeroTrustGatewaySingleResponseWithListItem#create. */
class ZeroTrustGatewaySingleResponseWithListItemCreateData
{
    public string $account_id;
    public ?string $description = null;
    public ?array $items = null;
    public string $name;
    public string $type;
}

/** ZeroTrustRiskScoring entity data model. */
class ZeroTrustRiskScoring
{
    public array $behaviors;
    public array $result;
}

/** Request payload for ZeroTrustRiskScoring#load. */
class ZeroTrustRiskScoringLoadMatch
{
    public string $account_id;
    public ?string $user_id = null;
}

/** Request payload for ZeroTrustRiskScoring#create. */
class ZeroTrustRiskScoringCreateData
{
    public string $account_id;
    public string $zt_risk_scoring_id;
    public array $behaviors;
    public array $result;
}

/** Request payload for ZeroTrustRiskScoring#update. */
class ZeroTrustRiskScoringUpdateData
{
    public string $account_id;
    public ?array $behaviors = null;
    public ?array $result = null;
}

/** ZeroTrustRiskScoringIntegration entity data model. */
class ZeroTrustRiskScoringIntegration
{
    public bool $active;
    public ?string $id = null;
    public string $integration_type;
    public ?string $reference_id = null;
    public array $result;
    public string $tenant_url;
}

/** Request payload for ZeroTrustRiskScoringIntegration#load. */
class ZeroTrustRiskScoringIntegrationLoadMatch
{
    public string $account_id;
    public ?string $id = null;
    public ?string $reference_id = null;
}

/** Request payload for ZeroTrustRiskScoringIntegration#list. */
class ZeroTrustRiskScoringIntegrationListMatch
{
    public string $account_id;
}

/** Request payload for ZeroTrustRiskScoringIntegration#create. */
class ZeroTrustRiskScoringIntegrationCreateData
{
    public string $account_id;
    public bool $active;
    public ?string $id = null;
    public string $integration_type;
    public ?string $reference_id = null;
    public array $result;
    public string $tenant_url;
}

/** Request payload for ZeroTrustRiskScoringIntegration#update. */
class ZeroTrustRiskScoringIntegrationUpdateData
{
    public string $account_id;
    public string $id;
    public ?bool $active = null;
    public ?string $integration_type = null;
    public ?string $reference_id = null;
    public ?array $result = null;
    public ?string $tenant_url = null;
}

/** Request payload for ZeroTrustRiskScoringIntegration#remove. */
class ZeroTrustRiskScoringIntegrationRemoveMatch
{
    public string $account_id;
    public string $id;
}

