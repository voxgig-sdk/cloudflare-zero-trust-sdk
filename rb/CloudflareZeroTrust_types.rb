# frozen_string_literal: true

# Typed models for the CloudflareZeroTrust SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# ClientVersion entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
ClientVersion = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for ClientVersion#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] release_track
#   @return [String]
#
# @!attribute [rw] target_environment
#   @return [String]
ClientVersionListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  :release_track,
  :target_environment,
  keyword_init: true
)

# Cni entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Cni = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Cni#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
CniRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# DeploymentGroup entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] policy_ids
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] version_config
#   @return [Array]
DeploymentGroup = Struct.new(
  :errors,
  :id,
  :messages,
  :name,
  :policy_ids,
  :result,
  :result_info,
  :success,
  :version_config,
  keyword_init: true
)

# Request payload for DeploymentGroup#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DeploymentGroupLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for DeploymentGroup#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
DeploymentGroupListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for DeploymentGroup#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] policy_ids
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] version_config
#   @return [Array]
DeploymentGroupCreateData = Struct.new(
  :account_id,
  :errors,
  :id,
  :messages,
  :name,
  :policy_ids,
  :result,
  :result_info,
  :success,
  :version_config,
  keyword_init: true
)

# Request payload for DeploymentGroup#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] policy_ids
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] version_config
#   @return [Array, nil]
DeploymentGroupUpdateData = Struct.new(
  :account_id,
  :id,
  :errors,
  :messages,
  :name,
  :policy_ids,
  :result,
  :result_info,
  :success,
  :version_config,
  keyword_init: true
)

# Request payload for DeploymentGroup#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DeploymentGroupRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# DexRemoteCommand entity data model.
#
# @!attribute [rw] commands
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
DexRemoteCommand = Struct.new(
  :commands,
  :result,
  keyword_init: true
)

# Request payload for DexRemoteCommand#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] command_type
#   @return [String, nil]
#
# @!attribute [rw] device_id
#   @return [String, nil]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String, nil]
#
# @!attribute [rw] user_email
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] command_id
#   @return [String, nil]
#
# @!attribute [rw] filename
#   @return [String, nil]
DexRemoteCommandLoadMatch = Struct.new(
  :account_id,
  :command_type,
  :device_id,
  :from,
  :page,
  :per_page,
  :status,
  :to,
  :user_email,
  :search,
  :command_id,
  :filename,
  keyword_init: true
)

# Request payload for DexRemoteCommand#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] commands
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
DexRemoteCommandCreateData = Struct.new(
  :account_id,
  :commands,
  :result,
  keyword_init: true
)

# DexRule entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] match
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
DexRule = Struct.new(
  :description,
  :id,
  :match,
  :name,
  :result,
  keyword_init: true
)

# Request payload for DexRule#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
DexRuleLoadMatch = Struct.new(
  :account_id,
  :name,
  :page,
  :per_page,
  :sort_by,
  :sort_order,
  :id,
  keyword_init: true
)

# Request payload for DexRule#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] match
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
DexRuleCreateData = Struct.new(
  :account_id,
  :description,
  :id,
  :match,
  :name,
  :result,
  keyword_init: true
)

# Request payload for DexRule#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] match
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
DexRuleUpdateData = Struct.new(
  :account_id,
  :id,
  :description,
  :match,
  :name,
  :result,
  keyword_init: true
)

# Request payload for DexRule#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
DexRuleRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# DexSyntheticApplicationMonitoring entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
DexSyntheticApplicationMonitoring = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for DexSyntheticApplicationMonitoring#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] device_id
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String, nil]
#
# @!attribute [rw] colo
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] registration_id
#   @return [String, nil]
#
# @!attribute [rw] test_name
#   @return [String, nil]
#
# @!attribute [rw] test_id
#   @return [String, nil]
#
# @!attribute [rw] interval
#   @return [String, nil]
#
# @!attribute [rw] http_test_id
#   @return [String, nil]
#
# @!attribute [rw] traceroute_test_id
#   @return [String, nil]
#
# @!attribute [rw] traceroute_test_result_id
#   @return [String, nil]
DexSyntheticApplicationMonitoringLoadMatch = Struct.new(
  :account_id,
  :device_id,
  :cursor,
  :from,
  :page,
  :per_page,
  :sort_by,
  :sort_order,
  :to,
  :colo,
  :kind,
  :registration_id,
  :test_name,
  :test_id,
  :interval,
  :http_test_id,
  :traceroute_test_id,
  :traceroute_test_result_id,
  keyword_init: true
)

# Request payload for DexSyntheticApplicationMonitoring#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] from
#   @return [String]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String]
DexSyntheticApplicationMonitoringListMatch = Struct.new(
  :account_id,
  :from,
  :sort_by,
  :to,
  keyword_init: true
)

# DigitalExperienceMonitoringDevice entity data model.
#
# @!attribute [rw] alwaysOn
#   @return [Boolean, nil]
#
# @!attribute [rw] batteryCharging
#   @return [Boolean, nil]
#
# @!attribute [rw] batteryCycles
#   @return [Integer, nil]
#
# @!attribute [rw] batteryPct
#   @return [Float, nil]
#
# @!attribute [rw] colo
#   @return [String]
#
# @!attribute [rw] connectionType
#   @return [String, nil]
#
# @!attribute [rw] cpuPct
#   @return [Float, nil]
#
# @!attribute [rw] cpuPctByApp
#   @return [Array, nil]
#
# @!attribute [rw] deviceId
#   @return [String]
#
# @!attribute [rw] deviceIpv4
#   @return [Hash, nil]
#
# @!attribute [rw] deviceIpv6
#   @return [Hash, nil]
#
# @!attribute [rw] deviceName
#   @return [String, nil]
#
# @!attribute [rw] deviceRegistration
#   @return [String, nil]
#
# @!attribute [rw] diskReadBps
#   @return [Integer, nil]
#
# @!attribute [rw] diskUsagePct
#   @return [Float, nil]
#
# @!attribute [rw] diskWriteBps
#   @return [Integer, nil]
#
# @!attribute [rw] dohSubdomain
#   @return [String, nil]
#
# @!attribute [rw] estimatedLossPct
#   @return [Float, nil]
#
# @!attribute [rw] firewallEnabled
#   @return [Boolean, nil]
#
# @!attribute [rw] gatewayIpv4
#   @return [Hash, nil]
#
# @!attribute [rw] gatewayIpv6
#   @return [Hash, nil]
#
# @!attribute [rw] handshakeLatencyMs
#   @return [Float, nil]
#
# @!attribute [rw] ispIpv4
#   @return [Hash, nil]
#
# @!attribute [rw] ispIpv6
#   @return [Hash, nil]
#
# @!attribute [rw] metal
#   @return [String, nil]
#
# @!attribute [rw] mode
#   @return [String]
#
# @!attribute [rw] networkRcvdBps
#   @return [Integer, nil]
#
# @!attribute [rw] networkSentBps
#   @return [Integer, nil]
#
# @!attribute [rw] networkSsid
#   @return [String, nil]
#
# @!attribute [rw] personEmail
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String]
#
# @!attribute [rw] ramAvailableKb
#   @return [Integer, nil]
#
# @!attribute [rw] ramUsedPct
#   @return [Float, nil]
#
# @!attribute [rw] ramUsedPctByApp
#   @return [Array, nil]
#
# @!attribute [rw] registrationId
#   @return [String, nil]
#
# @!attribute [rw] rtt
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] switchLocked
#   @return [Boolean, nil]
#
# @!attribute [rw] timestamp
#   @return [String]
#
# @!attribute [rw] tunnelStats
#   @return [Hash, nil]
#
# @!attribute [rw] tunnelType
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String]
#
# @!attribute [rw] wifiStrengthDbm
#   @return [Integer, nil]
DigitalExperienceMonitoringDevice = Struct.new(
  :alwaysOn,
  :batteryCharging,
  :batteryCycles,
  :batteryPct,
  :colo,
  :connectionType,
  :cpuPct,
  :cpuPctByApp,
  :deviceId,
  :deviceIpv4,
  :deviceIpv6,
  :deviceName,
  :deviceRegistration,
  :diskReadBps,
  :diskUsagePct,
  :diskWriteBps,
  :dohSubdomain,
  :estimatedLossPct,
  :firewallEnabled,
  :gatewayIpv4,
  :gatewayIpv6,
  :handshakeLatencyMs,
  :ispIpv4,
  :ispIpv6,
  :metal,
  :mode,
  :networkRcvdBps,
  :networkSentBps,
  :networkSsid,
  :personEmail,
  :platform,
  :ramAvailableKb,
  :ramUsedPct,
  :ramUsedPctByApp,
  :registrationId,
  :rtt,
  :status,
  :switchLocked,
  :timestamp,
  :tunnelStats,
  :tunnelType,
  :version,
  :wifiStrengthDbm,
  keyword_init: true
)

# Request payload for DigitalExperienceMonitoringDevice#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] device_id
#   @return [String]
#
# @!attribute [rw] colo
#   @return [String, nil]
#
# @!attribute [rw] since_minute
#   @return [Float]
#
# @!attribute [rw] time_now
#   @return [String, nil]
DigitalExperienceMonitoringDeviceListMatch = Struct.new(
  :account_id,
  :device_id,
  :colo,
  :since_minute,
  :time_now,
  keyword_init: true
)

# DigitalExperienceMonitoringDexDeleteResponseCollection entity data model.
class DigitalExperienceMonitoringDexDeleteResponseCollection
end

# Request payload for DigitalExperienceMonitoringDexDeleteResponseCollection#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dex_test_id
#   @return [String]
DigitalExperienceMonitoringDexDeleteResponseCollectionRemoveMatch = Struct.new(
  :account_id,
  :dex_test_id,
  keyword_init: true
)

# DigitalExperienceMonitoringDexResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
DigitalExperienceMonitoringDexResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for DigitalExperienceMonitoringDexResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] test_name
#   @return [String, nil]
DigitalExperienceMonitoringDexResponseCollectionListMatch = Struct.new(
  :account_id,
  :kind,
  :page,
  :per_page,
  :test_name,
  keyword_init: true
)

# DigitalExperienceMonitoringDexSingle entity data model.
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] interval
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] target_policies
#   @return [Object, nil]
#
# @!attribute [rw] targeted
#   @return [Boolean, nil]
#
# @!attribute [rw] test_id
#   @return [String, nil]
#
# @!attribute [rw] updated
#   @return [String, nil]
DigitalExperienceMonitoringDexSingle = Struct.new(
  :created,
  :data,
  :description,
  :enabled,
  :interval,
  :name,
  :result,
  :target_policies,
  :targeted,
  :test_id,
  :updated,
  keyword_init: true
)

# Request payload for DigitalExperienceMonitoringDexSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dex_test_id
#   @return [String]
DigitalExperienceMonitoringDexSingleLoadMatch = Struct.new(
  :account_id,
  :dex_test_id,
  keyword_init: true
)

# Request payload for DigitalExperienceMonitoringDexSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] interval
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] target_policies
#   @return [Object, nil]
#
# @!attribute [rw] targeted
#   @return [Boolean, nil]
#
# @!attribute [rw] test_id
#   @return [String, nil]
#
# @!attribute [rw] updated
#   @return [String, nil]
DigitalExperienceMonitoringDexSingleCreateData = Struct.new(
  :account_id,
  :created,
  :data,
  :description,
  :enabled,
  :interval,
  :name,
  :result,
  :target_policies,
  :targeted,
  :test_id,
  :updated,
  keyword_init: true
)

# Request payload for DigitalExperienceMonitoringDexSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dex_test_id
#   @return [String]
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] interval
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] target_policies
#   @return [Object, nil]
#
# @!attribute [rw] targeted
#   @return [Boolean, nil]
#
# @!attribute [rw] test_id
#   @return [String, nil]
#
# @!attribute [rw] updated
#   @return [String, nil]
DigitalExperienceMonitoringDexSingleUpdateData = Struct.new(
  :account_id,
  :dex_test_id,
  :created,
  :data,
  :description,
  :enabled,
  :interval,
  :name,
  :result,
  :target_policies,
  :targeted,
  :test_id,
  :updated,
  keyword_init: true
)

# DigitalExperienceMonitoringFleetStatusDevice entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
DigitalExperienceMonitoringFleetStatusDevice = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for DigitalExperienceMonitoringFleetStatusDevice#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] colo
#   @return [String, nil]
#
# @!attribute [rw] device_id
#   @return [String, nil]
#
# @!attribute [rw] from
#   @return [String]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float]
#
# @!attribute [rw] per_page
#   @return [Float]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String]
#
# @!attribute [rw] version
#   @return [String, nil]
DigitalExperienceMonitoringFleetStatusDeviceListMatch = Struct.new(
  :account_id,
  :colo,
  :device_id,
  :from,
  :mode,
  :page,
  :per_page,
  :platform,
  :sort_by,
  :source,
  :status,
  :to,
  :version,
  keyword_init: true
)

# DigitalExperienceMonitoringFleetStatusLive entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
DigitalExperienceMonitoringFleetStatusLive = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for DigitalExperienceMonitoringFleetStatusLive#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] since_minute
#   @return [Float]
DigitalExperienceMonitoringFleetStatusLiveLoadMatch = Struct.new(
  :account_id,
  :since_minute,
  keyword_init: true
)

# DigitalExperienceMonitoringFleetStatusOverTime entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
DigitalExperienceMonitoringFleetStatusOverTime = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for DigitalExperienceMonitoringFleetStatusOverTime#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] colo
#   @return [String, nil]
#
# @!attribute [rw] device_id
#   @return [String, nil]
#
# @!attribute [rw] from
#   @return [String]
#
# @!attribute [rw] to
#   @return [String]
DigitalExperienceMonitoringFleetStatusOverTimeLoadMatch = Struct.new(
  :account_id,
  :colo,
  :device_id,
  :from,
  :to,
  keyword_init: true
)

# Interconnect entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Interconnect = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Interconnect#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] icon
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
InterconnectLoadMatch = Struct.new(
  :account_id,
  :icon,
  :name,
  keyword_init: true
)

# Request payload for Interconnect#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
InterconnectRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# IpProfile entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] match
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] precedence
#   @return [Integer]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] subnet_id
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
IpProfile = Struct.new(
  :description,
  :enabled,
  :errors,
  :id,
  :match,
  :messages,
  :name,
  :precedence,
  :result,
  :result_info,
  :subnet_id,
  :success,
  keyword_init: true
)

# Request payload for IpProfile#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
IpProfileLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for IpProfile#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
IpProfileListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for IpProfile#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] match
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] precedence
#   @return [Integer]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] subnet_id
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
IpProfileCreateData = Struct.new(
  :account_id,
  :description,
  :enabled,
  :errors,
  :id,
  :match,
  :messages,
  :name,
  :precedence,
  :result,
  :result_info,
  :subnet_id,
  :success,
  keyword_init: true
)

# Request payload for IpProfile#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] match
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] precedence
#   @return [Integer, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] subnet_id
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
IpProfileUpdateData = Struct.new(
  :account_id,
  :id,
  :description,
  :enabled,
  :errors,
  :match,
  :messages,
  :name,
  :precedence,
  :result,
  :result_info,
  :subnet_id,
  :success,
  keyword_init: true
)

# Request payload for IpProfile#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
IpProfileRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# List entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
List = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for List#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ListRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Location entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Location = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Location#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
LocationRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# NscCni entity data model.
#
# @!attribute [rw] account
#   @return [String]
#
# @!attribute [rw] bgp
#   @return [Hash]
#
# @!attribute [rw] bgp_mode
#   @return [String, nil]
#
# @!attribute [rw] cust_ip
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] interconnect
#   @return [String]
#
# @!attribute [rw] magic
#   @return [Hash]
#
# @!attribute [rw] p2p_ip
#   @return [String]
NscCni = Struct.new(
  :account,
  :bgp,
  :bgp_mode,
  :cust_ip,
  :id,
  :interconnect,
  :magic,
  :p2p_ip,
  keyword_init: true
)

# Request payload for NscCni#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
NscCniLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for NscCni#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [Integer, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] slot
#   @return [String, nil]
#
# @!attribute [rw] tunnel_id
#   @return [String, nil]
NscCniListMatch = Struct.new(
  :account_id,
  :cursor,
  :limit,
  :slot,
  :tunnel_id,
  keyword_init: true
)

# Request payload for NscCni#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] account
#   @return [String]
#
# @!attribute [rw] bgp
#   @return [Hash]
#
# @!attribute [rw] bgp_mode
#   @return [String, nil]
#
# @!attribute [rw] cust_ip
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] interconnect
#   @return [String]
#
# @!attribute [rw] magic
#   @return [Hash]
#
# @!attribute [rw] p2p_ip
#   @return [String]
NscCniCreateData = Struct.new(
  :account_id,
  :account,
  :bgp,
  :bgp_mode,
  :cust_ip,
  :id,
  :interconnect,
  :magic,
  :p2p_ip,
  keyword_init: true
)

# Request payload for NscCni#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] account
#   @return [String, nil]
#
# @!attribute [rw] bgp
#   @return [Hash, nil]
#
# @!attribute [rw] bgp_mode
#   @return [String, nil]
#
# @!attribute [rw] cust_ip
#   @return [String, nil]
#
# @!attribute [rw] interconnect
#   @return [String, nil]
#
# @!attribute [rw] magic
#   @return [Hash, nil]
#
# @!attribute [rw] p2p_ip
#   @return [String, nil]
NscCniUpdateData = Struct.new(
  :account_id,
  :id,
  :account,
  :bgp,
  :bgp_mode,
  :cust_ip,
  :interconnect,
  :magic,
  :p2p_ip,
  keyword_init: true
)

# NscDefaultName entity data model.
#
# @!attribute [rw] name
#   @return [String]
NscDefaultName = Struct.new(
  :name,
  keyword_init: true
)

# Request payload for NscDefaultName#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] interconnect_id
#   @return [String]
NscDefaultNameLoadMatch = Struct.new(
  :account_id,
  :interconnect_id,
  keyword_init: true
)

# NscInterconnect entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array]
#
# @!attribute [rw] next
#   @return [Integer, nil]
NscInterconnect = Struct.new(
  :id,
  :items,
  :next,
  keyword_init: true
)

# Request payload for NscInterconnect#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
NscInterconnectLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for NscInterconnect#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [Integer, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] site
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
NscInterconnectListMatch = Struct.new(
  :account_id,
  :cursor,
  :limit,
  :site,
  :type,
  keyword_init: true
)

# Request payload for NscInterconnect#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array]
#
# @!attribute [rw] next
#   @return [Integer, nil]
NscInterconnectCreateData = Struct.new(
  :account_id,
  :id,
  :items,
  :next,
  keyword_init: true
)

# NscSetting entity data model.
#
# @!attribute [rw] default_asn
#   @return [Integer]
NscSetting = Struct.new(
  :default_asn,
  keyword_init: true
)

# Request payload for NscSetting#load.
#
# @!attribute [rw] account_id
#   @return [String]
NscSettingLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for NscSetting#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] default_asn
#   @return [Integer, nil]
NscSettingUpdateData = Struct.new(
  :account_id,
  :default_asn,
  keyword_init: true
)

# NscSlotInfo entity data model.
#
# @!attribute [rw] account
#   @return [String, nil]
#
# @!attribute [rw] address
#   @return [Array]
#
# @!attribute [rw] ccr_device_name
#   @return [String, nil]
#
# @!attribute [rw] facility
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] occupied
#   @return [Boolean]
#
# @!attribute [rw] site
#   @return [String]
#
# @!attribute [rw] speed
#   @return [String]
NscSlotInfo = Struct.new(
  :account,
  :address,
  :ccr_device_name,
  :facility,
  :id,
  :name,
  :occupied,
  :site,
  :speed,
  keyword_init: true
)

# Request payload for NscSlotInfo#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] slot
#   @return [String]
NscSlotInfoLoadMatch = Struct.new(
  :account_id,
  :slot,
  keyword_init: true
)

# Request payload for NscSlotInfo#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] address_contain
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [Integer, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] occupied
#   @return [Boolean, nil]
#
# @!attribute [rw] site
#   @return [String, nil]
#
# @!attribute [rw] speed
#   @return [String, nil]
NscSlotInfoListMatch = Struct.new(
  :account_id,
  :address_contain,
  :cursor,
  :limit,
  :occupied,
  :site,
  :speed,
  keyword_init: true
)

# NscStatusInfo entity data model.
class NscStatusInfo
end

# Request payload for NscStatusInfo#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] icon
#   @return [String]
NscStatusInfoLoadMatch = Struct.new(
  :account_id,
  :icon,
  keyword_init: true
)

# OverrideCode entity data model.
#
# @!attribute [rw] device_id
#   @return [String, nil]
#
# @!attribute [rw] duration_hours
#   @return [Integer]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] scope
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] type
#   @return [String]
OverrideCode = Struct.new(
  :device_id,
  :duration_hours,
  :errors,
  :messages,
  :result,
  :scope,
  :success,
  :type,
  keyword_init: true
)

# Request payload for OverrideCode#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] device_id
#   @return [String, nil]
#
# @!attribute [rw] duration_hours
#   @return [Integer]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] scope
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] type
#   @return [String]
OverrideCodeCreateData = Struct.new(
  :account_id,
  :device_id,
  :duration_hours,
  :errors,
  :messages,
  :result,
  :scope,
  :success,
  :type,
  keyword_init: true
)

# Pacfile entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Pacfile = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Pacfile#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PacfileRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# PhysicalDevice entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tags
#   @return [Hash, nil]
PhysicalDevice = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :result_info,
  :success,
  :tags,
  keyword_init: true
)

# Request payload for PhysicalDevice#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] include
#   @return [String, nil]
PhysicalDeviceLoadMatch = Struct.new(
  :account_id,
  :id,
  :include,
  keyword_init: true
)

# Request payload for PhysicalDevice#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] active_registration
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] has_registration_type
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Array, nil]
#
# @!attribute [rw] include
#   @return [String, nil]
#
# @!attribute [rw] last_seen_registration_policy_id
#   @return [String, nil]
#
# @!attribute [rw] last_seen_user_email
#   @return [String, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] seen_after
#   @return [String, nil]
#
# @!attribute [rw] seen_before
#   @return [String, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
PhysicalDeviceListMatch = Struct.new(
  :account_id,
  :active_registration,
  :cursor,
  :has_registration_type,
  :id,
  :include,
  :last_seen_registration_policy_id,
  :last_seen_user_email,
  :per_page,
  :search,
  :seen_after,
  :seen_before,
  :sort_by,
  :sort_order,
  :tag,
  keyword_init: true
)

# Request payload for PhysicalDevice#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tags
#   @return [Hash, nil]
PhysicalDeviceCreateData = Struct.new(
  :account_id,
  :id,
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  :tags,
  keyword_init: true
)

# Request payload for PhysicalDevice#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] tags
#   @return [Hash, nil]
PhysicalDeviceUpdateData = Struct.new(
  :account_id,
  :id,
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  :tags,
  keyword_init: true
)

# Request payload for PhysicalDevice#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
PhysicalDeviceRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# ProxyEndpoint entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
ProxyEndpoint = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ProxyEndpoint#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ProxyEndpointRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Registration entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
Registration = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for Registration#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] include
#   @return [String, nil]
RegistrationLoadMatch = Struct.new(
  :account_id,
  :id,
  :include,
  keyword_init: true
)

# Request payload for Registration#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] device_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Array, nil]
#
# @!attribute [rw] include
#   @return [String, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] policy_id
#   @return [String, nil]
#
# @!attribute [rw] registration_type
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] seen_after
#   @return [String, nil]
#
# @!attribute [rw] seen_before
#   @return [String, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Array, nil]
RegistrationListMatch = Struct.new(
  :account_id,
  :cursor,
  :device_id,
  :id,
  :include,
  :per_page,
  :policy_id,
  :registration_type,
  :search,
  :seen_after,
  :seen_before,
  :sort_by,
  :sort_order,
  :status,
  :user_id,
  keyword_init: true
)

# Request payload for Registration#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Array]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
RegistrationCreateData = Struct.new(
  :account_id,
  :id,
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for Registration#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
RegistrationRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Rule entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Rule = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Rule#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
RuleRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# TeamsDevicesApiResponseSingle entity data model.
class TeamsDevicesApiResponseSingle
end

# Request payload for TeamsDevicesApiResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
TeamsDevicesApiResponseSingleCreateData = Struct.new(
  :account_id,
  keyword_init: true
)

# TeamsDevicesComponentsSchemasResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TeamsDevicesComponentsSchemasResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TeamsDevicesComponentsSchemasResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
TeamsDevicesComponentsSchemasResponseCollectionListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for TeamsDevicesComponentsSchemasResponseCollection#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] network_id
#   @return [String]
TeamsDevicesComponentsSchemasResponseCollectionRemoveMatch = Struct.new(
  :account_id,
  :network_id,
  keyword_init: true
)

# TeamsDevicesComponentsSchemasSingle entity data model.
#
# @!attribute [rw] config
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
TeamsDevicesComponentsSchemasSingle = Struct.new(
  :config,
  :name,
  :result,
  :type,
  keyword_init: true
)

# Request payload for TeamsDevicesComponentsSchemasSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] network_id
#   @return [String]
TeamsDevicesComponentsSchemasSingleLoadMatch = Struct.new(
  :account_id,
  :network_id,
  keyword_init: true
)

# Request payload for TeamsDevicesComponentsSchemasSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] config
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
TeamsDevicesComponentsSchemasSingleCreateData = Struct.new(
  :account_id,
  :config,
  :name,
  :result,
  :type,
  keyword_init: true
)

# Request payload for TeamsDevicesComponentsSchemasSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] network_id
#   @return [String]
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
TeamsDevicesComponentsSchemasSingleUpdateData = Struct.new(
  :account_id,
  :network_id,
  :config,
  :name,
  :result,
  :type,
  keyword_init: true
)

# TeamsDevicesDefaultDeviceSetting entity data model.
#
# @!attribute [rw] allow_mode_switch
#   @return [Boolean, nil]
#
# @!attribute [rw] allow_updates
#   @return [Boolean, nil]
#
# @!attribute [rw] allowed_to_leave
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_connect
#   @return [Float, nil]
#
# @!attribute [rw] captive_portal
#   @return [Float, nil]
#
# @!attribute [rw] disable_auto_fallback
#   @return [Boolean, nil]
#
# @!attribute [rw] dns_search_suffixes
#   @return [Array, nil]
#
# @!attribute [rw] exclude
#   @return [Array, nil]
#
# @!attribute [rw] exclude_office_ips
#   @return [Boolean, nil]
#
# @!attribute [rw] global_acceleration
#   @return [Hash]
#
# @!attribute [rw] include
#   @return [Array, nil]
#
# @!attribute [rw] lan_allow_minutes
#   @return [Float, nil]
#
# @!attribute [rw] lan_allow_subnet_size
#   @return [Float, nil]
#
# @!attribute [rw] register_interface_ip_with_dns
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] sccm_vpn_boundary_support
#   @return [Boolean, nil]
#
# @!attribute [rw] service_mode_v2
#   @return [Hash, nil]
#
# @!attribute [rw] support_url
#   @return [String, nil]
#
# @!attribute [rw] switch_locked
#   @return [Boolean, nil]
#
# @!attribute [rw] tunnel_protocol
#   @return [String, nil]
#
# @!attribute [rw] uninstall_protection
#   @return [Boolean, nil]
#
# @!attribute [rw] virtual_networks
#   @return [Hash]
TeamsDevicesDefaultDeviceSetting = Struct.new(
  :allow_mode_switch,
  :allow_updates,
  :allowed_to_leave,
  :auto_connect,
  :captive_portal,
  :disable_auto_fallback,
  :dns_search_suffixes,
  :exclude,
  :exclude_office_ips,
  :global_acceleration,
  :include,
  :lan_allow_minutes,
  :lan_allow_subnet_size,
  :register_interface_ip_with_dns,
  :result,
  :sccm_vpn_boundary_support,
  :service_mode_v2,
  :support_url,
  :switch_locked,
  :tunnel_protocol,
  :uninstall_protection,
  :virtual_networks,
  keyword_init: true
)

# Request payload for TeamsDevicesDefaultDeviceSetting#load.
#
# @!attribute [rw] account_id
#   @return [String]
TeamsDevicesDefaultDeviceSettingLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for TeamsDevicesDefaultDeviceSetting#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] allow_mode_switch
#   @return [Boolean, nil]
#
# @!attribute [rw] allow_updates
#   @return [Boolean, nil]
#
# @!attribute [rw] allowed_to_leave
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_connect
#   @return [Float, nil]
#
# @!attribute [rw] captive_portal
#   @return [Float, nil]
#
# @!attribute [rw] disable_auto_fallback
#   @return [Boolean, nil]
#
# @!attribute [rw] dns_search_suffixes
#   @return [Array, nil]
#
# @!attribute [rw] exclude
#   @return [Array, nil]
#
# @!attribute [rw] exclude_office_ips
#   @return [Boolean, nil]
#
# @!attribute [rw] global_acceleration
#   @return [Hash, nil]
#
# @!attribute [rw] include
#   @return [Array, nil]
#
# @!attribute [rw] lan_allow_minutes
#   @return [Float, nil]
#
# @!attribute [rw] lan_allow_subnet_size
#   @return [Float, nil]
#
# @!attribute [rw] register_interface_ip_with_dns
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] sccm_vpn_boundary_support
#   @return [Boolean, nil]
#
# @!attribute [rw] service_mode_v2
#   @return [Hash, nil]
#
# @!attribute [rw] support_url
#   @return [String, nil]
#
# @!attribute [rw] switch_locked
#   @return [Boolean, nil]
#
# @!attribute [rw] tunnel_protocol
#   @return [String, nil]
#
# @!attribute [rw] uninstall_protection
#   @return [Boolean, nil]
#
# @!attribute [rw] virtual_networks
#   @return [Hash, nil]
TeamsDevicesDefaultDeviceSettingUpdateData = Struct.new(
  :account_id,
  :allow_mode_switch,
  :allow_updates,
  :allowed_to_leave,
  :auto_connect,
  :captive_portal,
  :disable_auto_fallback,
  :dns_search_suffixes,
  :exclude,
  :exclude_office_ips,
  :global_acceleration,
  :include,
  :lan_allow_minutes,
  :lan_allow_subnet_size,
  :register_interface_ip_with_dns,
  :result,
  :sccm_vpn_boundary_support,
  :service_mode_v2,
  :support_url,
  :switch_locked,
  :tunnel_protocol,
  :uninstall_protection,
  :virtual_networks,
  keyword_init: true
)

# TeamsDevicesDevice entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TeamsDevicesDevice = Struct.new(
  :id,
  :result,
  keyword_init: true
)

# Request payload for TeamsDevicesDevice#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
TeamsDevicesDeviceLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for TeamsDevicesDevice#list.
#
# @!attribute [rw] account_id
#   @return [String]
TeamsDevicesDeviceListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# TeamsDevicesDeviceSetting entity data model.
#
# @!attribute [rw] allow_mode_switch
#   @return [Boolean, nil]
#
# @!attribute [rw] allow_updates
#   @return [Boolean, nil]
#
# @!attribute [rw] allowed_to_leave
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_connect
#   @return [Float, nil]
#
# @!attribute [rw] browser_extension_config
#   @return [Hash]
#
# @!attribute [rw] captive_portal
#   @return [Float, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disable_auto_fallback
#   @return [Boolean, nil]
#
# @!attribute [rw] dns_search_suffixes
#   @return [Array, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] exclude
#   @return [Array, nil]
#
# @!attribute [rw] exclude_office_ips
#   @return [Boolean, nil]
#
# @!attribute [rw] global_acceleration
#   @return [Hash]
#
# @!attribute [rw] include
#   @return [Array, nil]
#
# @!attribute [rw] lan_allow_minutes
#   @return [Float, nil]
#
# @!attribute [rw] lan_allow_subnet_size
#   @return [Float, nil]
#
# @!attribute [rw] match
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] precedence
#   @return [Float, nil]
#
# @!attribute [rw] profile_type
#   @return [String, nil]
#
# @!attribute [rw] register_interface_ip_with_dns
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] sccm_vpn_boundary_support
#   @return [Boolean, nil]
#
# @!attribute [rw] service_mode_v2
#   @return [Hash, nil]
#
# @!attribute [rw] support_url
#   @return [String, nil]
#
# @!attribute [rw] switch_locked
#   @return [Boolean, nil]
#
# @!attribute [rw] tunnel_protocol
#   @return [String, nil]
#
# @!attribute [rw] uninstall_protection
#   @return [Boolean, nil]
#
# @!attribute [rw] virtual_networks
#   @return [Hash]
TeamsDevicesDeviceSetting = Struct.new(
  :allow_mode_switch,
  :allow_updates,
  :allowed_to_leave,
  :auto_connect,
  :browser_extension_config,
  :captive_portal,
  :default,
  :description,
  :disable_auto_fallback,
  :dns_search_suffixes,
  :enabled,
  :exclude,
  :exclude_office_ips,
  :global_acceleration,
  :include,
  :lan_allow_minutes,
  :lan_allow_subnet_size,
  :match,
  :name,
  :precedence,
  :profile_type,
  :register_interface_ip_with_dns,
  :result,
  :sccm_vpn_boundary_support,
  :service_mode_v2,
  :support_url,
  :switch_locked,
  :tunnel_protocol,
  :uninstall_protection,
  :virtual_networks,
  keyword_init: true
)

# Request payload for TeamsDevicesDeviceSetting#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] policy_id
#   @return [String]
TeamsDevicesDeviceSettingLoadMatch = Struct.new(
  :account_id,
  :policy_id,
  keyword_init: true
)

# Request payload for TeamsDevicesDeviceSetting#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] allow_mode_switch
#   @return [Boolean, nil]
#
# @!attribute [rw] allow_updates
#   @return [Boolean, nil]
#
# @!attribute [rw] allowed_to_leave
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_connect
#   @return [Float, nil]
#
# @!attribute [rw] browser_extension_config
#   @return [Hash]
#
# @!attribute [rw] captive_portal
#   @return [Float, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disable_auto_fallback
#   @return [Boolean, nil]
#
# @!attribute [rw] dns_search_suffixes
#   @return [Array, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] exclude
#   @return [Array, nil]
#
# @!attribute [rw] exclude_office_ips
#   @return [Boolean, nil]
#
# @!attribute [rw] global_acceleration
#   @return [Hash]
#
# @!attribute [rw] include
#   @return [Array, nil]
#
# @!attribute [rw] lan_allow_minutes
#   @return [Float, nil]
#
# @!attribute [rw] lan_allow_subnet_size
#   @return [Float, nil]
#
# @!attribute [rw] match
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] precedence
#   @return [Float, nil]
#
# @!attribute [rw] profile_type
#   @return [String, nil]
#
# @!attribute [rw] register_interface_ip_with_dns
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] sccm_vpn_boundary_support
#   @return [Boolean, nil]
#
# @!attribute [rw] service_mode_v2
#   @return [Hash, nil]
#
# @!attribute [rw] support_url
#   @return [String, nil]
#
# @!attribute [rw] switch_locked
#   @return [Boolean, nil]
#
# @!attribute [rw] tunnel_protocol
#   @return [String, nil]
#
# @!attribute [rw] uninstall_protection
#   @return [Boolean, nil]
#
# @!attribute [rw] virtual_networks
#   @return [Hash]
TeamsDevicesDeviceSettingCreateData = Struct.new(
  :account_id,
  :allow_mode_switch,
  :allow_updates,
  :allowed_to_leave,
  :auto_connect,
  :browser_extension_config,
  :captive_portal,
  :default,
  :description,
  :disable_auto_fallback,
  :dns_search_suffixes,
  :enabled,
  :exclude,
  :exclude_office_ips,
  :global_acceleration,
  :include,
  :lan_allow_minutes,
  :lan_allow_subnet_size,
  :match,
  :name,
  :precedence,
  :profile_type,
  :register_interface_ip_with_dns,
  :result,
  :sccm_vpn_boundary_support,
  :service_mode_v2,
  :support_url,
  :switch_locked,
  :tunnel_protocol,
  :uninstall_protection,
  :virtual_networks,
  keyword_init: true
)

# Request payload for TeamsDevicesDeviceSetting#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] policy_id
#   @return [String]
#
# @!attribute [rw] allow_mode_switch
#   @return [Boolean, nil]
#
# @!attribute [rw] allow_updates
#   @return [Boolean, nil]
#
# @!attribute [rw] allowed_to_leave
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_connect
#   @return [Float, nil]
#
# @!attribute [rw] browser_extension_config
#   @return [Hash, nil]
#
# @!attribute [rw] captive_portal
#   @return [Float, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] disable_auto_fallback
#   @return [Boolean, nil]
#
# @!attribute [rw] dns_search_suffixes
#   @return [Array, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] exclude
#   @return [Array, nil]
#
# @!attribute [rw] exclude_office_ips
#   @return [Boolean, nil]
#
# @!attribute [rw] global_acceleration
#   @return [Hash, nil]
#
# @!attribute [rw] include
#   @return [Array, nil]
#
# @!attribute [rw] lan_allow_minutes
#   @return [Float, nil]
#
# @!attribute [rw] lan_allow_subnet_size
#   @return [Float, nil]
#
# @!attribute [rw] match
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] precedence
#   @return [Float, nil]
#
# @!attribute [rw] profile_type
#   @return [String, nil]
#
# @!attribute [rw] register_interface_ip_with_dns
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] sccm_vpn_boundary_support
#   @return [Boolean, nil]
#
# @!attribute [rw] service_mode_v2
#   @return [Hash, nil]
#
# @!attribute [rw] support_url
#   @return [String, nil]
#
# @!attribute [rw] switch_locked
#   @return [Boolean, nil]
#
# @!attribute [rw] tunnel_protocol
#   @return [String, nil]
#
# @!attribute [rw] uninstall_protection
#   @return [Boolean, nil]
#
# @!attribute [rw] virtual_networks
#   @return [Hash, nil]
TeamsDevicesDeviceSettingUpdateData = Struct.new(
  :account_id,
  :policy_id,
  :allow_mode_switch,
  :allow_updates,
  :allowed_to_leave,
  :auto_connect,
  :browser_extension_config,
  :captive_portal,
  :default,
  :description,
  :disable_auto_fallback,
  :dns_search_suffixes,
  :enabled,
  :exclude,
  :exclude_office_ips,
  :global_acceleration,
  :include,
  :lan_allow_minutes,
  :lan_allow_subnet_size,
  :match,
  :name,
  :precedence,
  :profile_type,
  :register_interface_ip_with_dns,
  :result,
  :sccm_vpn_boundary_support,
  :service_mode_v2,
  :support_url,
  :switch_locked,
  :tunnel_protocol,
  :uninstall_protection,
  :virtual_networks,
  keyword_init: true
)

# TeamsDevicesDeviceSettingsResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TeamsDevicesDeviceSettingsResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TeamsDevicesDeviceSettingsResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] profile_type
#   @return [String, nil]
TeamsDevicesDeviceSettingsResponseCollectionListMatch = Struct.new(
  :account_id,
  :profile_type,
  keyword_init: true
)

# Request payload for TeamsDevicesDeviceSettingsResponseCollection#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] policy_id
#   @return [String]
TeamsDevicesDeviceSettingsResponseCollectionRemoveMatch = Struct.new(
  :account_id,
  :policy_id,
  keyword_init: true
)

# TeamsDevicesFallbackDomainResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TeamsDevicesFallbackDomainResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TeamsDevicesFallbackDomainResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] policy_id
#   @return [String, nil]
TeamsDevicesFallbackDomainResponseCollectionListMatch = Struct.new(
  :account_id,
  :policy_id,
  keyword_init: true
)

# Request payload for TeamsDevicesFallbackDomainResponseCollection#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] policy_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
TeamsDevicesFallbackDomainResponseCollectionUpdateData = Struct.new(
  :account_id,
  :policy_id,
  :result,
  keyword_init: true
)

# Request payload for TeamsDevicesFallbackDomainResponseCollection#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] policy_id
#   @return [String, nil]
#
# @!attribute [rw] reset_default
#   @return [Boolean, nil]
TeamsDevicesFallbackDomainResponseCollectionRemoveMatch = Struct.new(
  :account_id,
  :policy_id,
  :reset_default,
  keyword_init: true
)

# TeamsDevicesGlobalWarpOverride entity data model.
#
# @!attribute [rw] disconnect
#   @return [Boolean]
#
# @!attribute [rw] justification
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TeamsDevicesGlobalWarpOverride = Struct.new(
  :disconnect,
  :justification,
  :result,
  keyword_init: true
)

# Request payload for TeamsDevicesGlobalWarpOverride#load.
#
# @!attribute [rw] account_id
#   @return [String]
TeamsDevicesGlobalWarpOverrideLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for TeamsDevicesGlobalWarpOverride#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] disconnect
#   @return [Boolean]
#
# @!attribute [rw] justification
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TeamsDevicesGlobalWarpOverrideCreateData = Struct.new(
  :account_id,
  :disconnect,
  :justification,
  :result,
  keyword_init: true
)

# TeamsDevicesId entity data model.
class TeamsDevicesId
end

# Request payload for TeamsDevicesId#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] rule_id
#   @return [String]
TeamsDevicesIdRemoveMatch = Struct.new(
  :account_id,
  :rule_id,
  keyword_init: true
)

# TeamsDevicesOverrideCode entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
TeamsDevicesOverrideCode = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TeamsDevicesOverrideCode#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] device_id
#   @return [String]
TeamsDevicesOverrideCodeLoadMatch = Struct.new(
  :account_id,
  :device_id,
  keyword_init: true
)

# TeamsDevicesResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TeamsDevicesResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TeamsDevicesResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
TeamsDevicesResponseCollectionListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# TeamsDevicesSchemasId entity data model.
class TeamsDevicesSchemasId
end

# Request payload for TeamsDevicesSchemasId#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] integration_id
#   @return [String]
TeamsDevicesSchemasIdRemoveMatch = Struct.new(
  :account_id,
  :integration_id,
  keyword_init: true
)

# TeamsDevicesSchemasResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TeamsDevicesSchemasResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TeamsDevicesSchemasResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
TeamsDevicesSchemasResponseCollectionListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# TeamsDevicesSchemasSingle entity data model.
#
# @!attribute [rw] config
#   @return [Hash]
#
# @!attribute [rw] interval
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
TeamsDevicesSchemasSingle = Struct.new(
  :config,
  :interval,
  :name,
  :result,
  :type,
  keyword_init: true
)

# Request payload for TeamsDevicesSchemasSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] integration_id
#   @return [String]
TeamsDevicesSchemasSingleLoadMatch = Struct.new(
  :account_id,
  :integration_id,
  keyword_init: true
)

# Request payload for TeamsDevicesSchemasSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] config
#   @return [Hash]
#
# @!attribute [rw] interval
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String]
TeamsDevicesSchemasSingleCreateData = Struct.new(
  :account_id,
  :config,
  :interval,
  :name,
  :result,
  :type,
  keyword_init: true
)

# Request payload for TeamsDevicesSchemasSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] integration_id
#   @return [String]
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] interval
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
TeamsDevicesSchemasSingleUpdateData = Struct.new(
  :account_id,
  :integration_id,
  :config,
  :interval,
  :name,
  :result,
  :type,
  keyword_init: true
)

# TeamsDevicesSingle entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration
#   @return [String, nil]
#
# @!attribute [rw] input
#   @return [Hash, nil]
#
# @!attribute [rw] match
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] schedule
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
TeamsDevicesSingle = Struct.new(
  :description,
  :expiration,
  :input,
  :match,
  :name,
  :result,
  :schedule,
  :type,
  keyword_init: true
)

# Request payload for TeamsDevicesSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] rule_id
#   @return [String]
TeamsDevicesSingleLoadMatch = Struct.new(
  :account_id,
  :rule_id,
  keyword_init: true
)

# Request payload for TeamsDevicesSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration
#   @return [String, nil]
#
# @!attribute [rw] input
#   @return [Hash, nil]
#
# @!attribute [rw] match
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] schedule
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
TeamsDevicesSingleCreateData = Struct.new(
  :account_id,
  :description,
  :expiration,
  :input,
  :match,
  :name,
  :result,
  :schedule,
  :type,
  keyword_init: true
)

# Request payload for TeamsDevicesSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] rule_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration
#   @return [String, nil]
#
# @!attribute [rw] input
#   @return [Hash, nil]
#
# @!attribute [rw] match
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] schedule
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
TeamsDevicesSingleUpdateData = Struct.new(
  :account_id,
  :rule_id,
  :description,
  :expiration,
  :input,
  :match,
  :name,
  :result,
  :schedule,
  :type,
  keyword_init: true
)

# TeamsDevicesSplitTunnelIncludeResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TeamsDevicesSplitTunnelIncludeResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TeamsDevicesSplitTunnelIncludeResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] policy_id
#   @return [String, nil]
TeamsDevicesSplitTunnelIncludeResponseCollectionListMatch = Struct.new(
  :account_id,
  :policy_id,
  keyword_init: true
)

# Request payload for TeamsDevicesSplitTunnelIncludeResponseCollection#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] policy_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
TeamsDevicesSplitTunnelIncludeResponseCollectionUpdateData = Struct.new(
  :account_id,
  :policy_id,
  :result,
  keyword_init: true
)

# TeamsDevicesSplitTunnelResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TeamsDevicesSplitTunnelResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TeamsDevicesSplitTunnelResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] policy_id
#   @return [String, nil]
TeamsDevicesSplitTunnelResponseCollectionListMatch = Struct.new(
  :account_id,
  :policy_id,
  keyword_init: true
)

# Request payload for TeamsDevicesSplitTunnelResponseCollection#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] policy_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
TeamsDevicesSplitTunnelResponseCollectionUpdateData = Struct.new(
  :account_id,
  :policy_id,
  :result,
  keyword_init: true
)

# Request payload for TeamsDevicesSplitTunnelResponseCollection#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] policy_id
#   @return [String, nil]
#
# @!attribute [rw] reset_default
#   @return [Boolean, nil]
TeamsDevicesSplitTunnelResponseCollectionRemoveMatch = Struct.new(
  :account_id,
  :policy_id,
  :reset_default,
  keyword_init: true
)

# TeamsDevicesZeroTrustAccountDeviceSetting entity data model.
#
# @!attribute [rw] disable_for_time
#   @return [Float, nil]
#
# @!attribute [rw] external_emergency_signal_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] external_emergency_signal_fingerprint
#   @return [String, nil]
#
# @!attribute [rw] external_emergency_signal_interval
#   @return [String, nil]
#
# @!attribute [rw] external_emergency_signal_url
#   @return [String, nil]
#
# @!attribute [rw] gateway_proxy_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] gateway_udp_proxy_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] root_certificate_installation_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] use_zt_virtual_ip
#   @return [Boolean, nil]
TeamsDevicesZeroTrustAccountDeviceSetting = Struct.new(
  :disable_for_time,
  :external_emergency_signal_enabled,
  :external_emergency_signal_fingerprint,
  :external_emergency_signal_interval,
  :external_emergency_signal_url,
  :gateway_proxy_enabled,
  :gateway_udp_proxy_enabled,
  :result,
  :root_certificate_installation_enabled,
  :use_zt_virtual_ip,
  keyword_init: true
)

# Request payload for TeamsDevicesZeroTrustAccountDeviceSetting#load.
#
# @!attribute [rw] account_id
#   @return [String]
TeamsDevicesZeroTrustAccountDeviceSettingLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for TeamsDevicesZeroTrustAccountDeviceSetting#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] disable_for_time
#   @return [Float, nil]
#
# @!attribute [rw] external_emergency_signal_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] external_emergency_signal_fingerprint
#   @return [String, nil]
#
# @!attribute [rw] external_emergency_signal_interval
#   @return [String, nil]
#
# @!attribute [rw] external_emergency_signal_url
#   @return [String, nil]
#
# @!attribute [rw] gateway_proxy_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] gateway_udp_proxy_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] root_certificate_installation_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] use_zt_virtual_ip
#   @return [Boolean, nil]
TeamsDevicesZeroTrustAccountDeviceSettingUpdateData = Struct.new(
  :account_id,
  :disable_for_time,
  :external_emergency_signal_enabled,
  :external_emergency_signal_fingerprint,
  :external_emergency_signal_interval,
  :external_emergency_signal_url,
  :gateway_proxy_enabled,
  :gateway_udp_proxy_enabled,
  :result,
  :root_certificate_installation_enabled,
  :use_zt_virtual_ip,
  keyword_init: true
)

# Request payload for TeamsDevicesZeroTrustAccountDeviceSetting#remove.
#
# @!attribute [rw] account_id
#   @return [String]
TeamsDevicesZeroTrustAccountDeviceSettingRemoveMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Tunnel entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
Tunnel = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for Tunnel#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] exclude_prefix
#   @return [String, nil]
#
# @!attribute [rw] existed_at
#   @return [String, nil]
#
# @!attribute [rw] include_prefix
#   @return [String, nil]
#
# @!attribute [rw] is_deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] tun_type
#   @return [Array, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] was_active_at
#   @return [String, nil]
#
# @!attribute [rw] was_inactive_at
#   @return [String, nil]
TunnelListMatch = Struct.new(
  :account_id,
  :exclude_prefix,
  :existed_at,
  :include_prefix,
  :is_deleted,
  :name,
  :page,
  :per_page,
  :status,
  :tun_type,
  :uuid,
  :was_active_at,
  :was_inactive_at,
  keyword_init: true
)

# TunnelCfdTunnelResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TunnelCfdTunnelResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TunnelCfdTunnelResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] exclude_prefix
#   @return [String, nil]
#
# @!attribute [rw] existed_at
#   @return [String, nil]
#
# @!attribute [rw] include_prefix
#   @return [String, nil]
#
# @!attribute [rw] is_deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] was_active_at
#   @return [String, nil]
#
# @!attribute [rw] was_inactive_at
#   @return [String, nil]
TunnelCfdTunnelResponseCollectionListMatch = Struct.new(
  :account_id,
  :exclude_prefix,
  :existed_at,
  :include_prefix,
  :is_deleted,
  :name,
  :page,
  :per_page,
  :status,
  :uuid,
  :was_active_at,
  :was_inactive_at,
  keyword_init: true
)

# TunnelCfdTunnelResponseSingle entity data model.
#
# @!attribute [rw] config_src
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tunnel_secret
#   @return [String, nil]
TunnelCfdTunnelResponseSingle = Struct.new(
  :config_src,
  :errors,
  :messages,
  :name,
  :result,
  :success,
  :tunnel_secret,
  keyword_init: true
)

# Request payload for TunnelCfdTunnelResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] tunnel_id
#   @return [String]
TunnelCfdTunnelResponseSingleLoadMatch = Struct.new(
  :account_id,
  :tunnel_id,
  keyword_init: true
)

# Request payload for TunnelCfdTunnelResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] config_src
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tunnel_secret
#   @return [String, nil]
TunnelCfdTunnelResponseSingleCreateData = Struct.new(
  :account_id,
  :config_src,
  :errors,
  :messages,
  :name,
  :result,
  :success,
  :tunnel_secret,
  keyword_init: true
)

# Request payload for TunnelCfdTunnelResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] tunnel_id
#   @return [String]
#
# @!attribute [rw] config_src
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] tunnel_secret
#   @return [String, nil]
TunnelCfdTunnelResponseSingleUpdateData = Struct.new(
  :account_id,
  :tunnel_id,
  :config_src,
  :errors,
  :messages,
  :name,
  :result,
  :success,
  :tunnel_secret,
  keyword_init: true
)

# Request payload for TunnelCfdTunnelResponseSingle#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] tunnel_id
#   @return [String]
TunnelCfdTunnelResponseSingleRemoveMatch = Struct.new(
  :account_id,
  :tunnel_id,
  keyword_init: true
)

# TunnelConfiguration entity data model.
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TunnelConfiguration = Struct.new(
  :config,
  :result,
  keyword_init: true
)

# Request payload for TunnelConfiguration#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cfd_tunnel_id
#   @return [String]
TunnelConfigurationLoadMatch = Struct.new(
  :account_id,
  :cfd_tunnel_id,
  keyword_init: true
)

# Request payload for TunnelConfiguration#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cfd_tunnel_id
#   @return [String]
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TunnelConfigurationUpdateData = Struct.new(
  :account_id,
  :cfd_tunnel_id,
  :config,
  :result,
  keyword_init: true
)

# TunnelEmpty entity data model.
#
# @!attribute [rw] client_id
#   @return [String]
TunnelEmpty = Struct.new(
  :client_id,
  keyword_init: true
)

# Request payload for TunnelEmpty#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] warp_connector_id
#   @return [String]
#
# @!attribute [rw] client_id
#   @return [String, nil]
TunnelEmptyUpdateData = Struct.new(
  :account_id,
  :warp_connector_id,
  :client_id,
  keyword_init: true
)

# Request payload for TunnelEmpty#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cfd_tunnel_id
#   @return [String]
#
# @!attribute [rw] client_id
#   @return [String, nil]
TunnelEmptyRemoveMatch = Struct.new(
  :account_id,
  :cfd_tunnel_id,
  :client_id,
  keyword_init: true
)

# TunnelHostnameRouteResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TunnelHostnameRouteResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TunnelHostnameRouteResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] existed_at
#   @return [String, nil]
#
# @!attribute [rw] hostname
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] tunnel_id
#   @return [String, nil]
TunnelHostnameRouteResponseCollectionListMatch = Struct.new(
  :account_id,
  :comment,
  :existed_at,
  :hostname,
  :id,
  :is_deleted,
  :page,
  :per_page,
  :tunnel_id,
  keyword_init: true
)

# TunnelHostnameRouteResponseSingle entity data model.
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] hostname
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tunnel_id
#   @return [String, nil]
TunnelHostnameRouteResponseSingle = Struct.new(
  :comment,
  :errors,
  :hostname,
  :messages,
  :result,
  :success,
  :tunnel_id,
  keyword_init: true
)

# Request payload for TunnelHostnameRouteResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] hostname_route_id
#   @return [String]
TunnelHostnameRouteResponseSingleLoadMatch = Struct.new(
  :account_id,
  :hostname_route_id,
  keyword_init: true
)

# Request payload for TunnelHostnameRouteResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] hostname
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tunnel_id
#   @return [String, nil]
TunnelHostnameRouteResponseSingleCreateData = Struct.new(
  :account_id,
  :comment,
  :errors,
  :hostname,
  :messages,
  :result,
  :success,
  :tunnel_id,
  keyword_init: true
)

# Request payload for TunnelHostnameRouteResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] hostname_route_id
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] hostname
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] tunnel_id
#   @return [String, nil]
TunnelHostnameRouteResponseSingleUpdateData = Struct.new(
  :account_id,
  :hostname_route_id,
  :comment,
  :errors,
  :hostname,
  :messages,
  :result,
  :success,
  :tunnel_id,
  keyword_init: true
)

# Request payload for TunnelHostnameRouteResponseSingle#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] hostname_route_id
#   @return [String]
TunnelHostnameRouteResponseSingleRemoveMatch = Struct.new(
  :account_id,
  :hostname_route_id,
  keyword_init: true
)

# TunnelMeshConfigurationResponseSingle entity data model.
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] ha_mode
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
TunnelMeshConfigurationResponseSingle = Struct.new(
  :config,
  :ha_mode,
  :result,
  keyword_init: true
)

# Request payload for TunnelMeshConfigurationResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] warp_connector_id
#   @return [String]
TunnelMeshConfigurationResponseSingleLoadMatch = Struct.new(
  :account_id,
  :warp_connector_id,
  keyword_init: true
)

# Request payload for TunnelMeshConfigurationResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] warp_connector_id
#   @return [String]
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] ha_mode
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TunnelMeshConfigurationResponseSingleUpdateData = Struct.new(
  :account_id,
  :warp_connector_id,
  :config,
  :ha_mode,
  :result,
  keyword_init: true
)

# TunnelRouteResponseSingle entity data model.
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] network
#   @return [String]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tunnel_id
#   @return [String]
#
# @!attribute [rw] virtual_network_id
#   @return [String, nil]
TunnelRouteResponseSingle = Struct.new(
  :comment,
  :errors,
  :messages,
  :network,
  :result,
  :success,
  :tunnel_id,
  :virtual_network_id,
  keyword_init: true
)

# Request payload for TunnelRouteResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] route_id
#   @return [String]
TunnelRouteResponseSingleLoadMatch = Struct.new(
  :account_id,
  :route_id,
  keyword_init: true
)

# Request payload for TunnelRouteResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] ip_network_encoded
#   @return [String, nil]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] network
#   @return [String]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tunnel_id
#   @return [String]
#
# @!attribute [rw] virtual_network_id
#   @return [String, nil]
TunnelRouteResponseSingleCreateData = Struct.new(
  :account_id,
  :ip_network_encoded,
  :comment,
  :errors,
  :messages,
  :network,
  :result,
  :success,
  :tunnel_id,
  :virtual_network_id,
  keyword_init: true
)

# Request payload for TunnelRouteResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] ip_network_encoded
#   @return [String, nil]
#
# @!attribute [rw] route_id
#   @return [String, nil]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] network
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] tunnel_id
#   @return [String, nil]
#
# @!attribute [rw] virtual_network_id
#   @return [String, nil]
TunnelRouteResponseSingleUpdateData = Struct.new(
  :account_id,
  :ip_network_encoded,
  :route_id,
  :comment,
  :errors,
  :messages,
  :network,
  :result,
  :success,
  :tunnel_id,
  :virtual_network_id,
  keyword_init: true
)

# Request payload for TunnelRouteResponseSingle#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] ip_network_encoded
#   @return [String, nil]
#
# @!attribute [rw] tun_type
#   @return [String, nil]
#
# @!attribute [rw] tunnel_id
#   @return [String, nil]
#
# @!attribute [rw] virtual_network_id
#   @return [String, nil]
#
# @!attribute [rw] route_id
#   @return [String, nil]
TunnelRouteResponseSingleRemoveMatch = Struct.new(
  :account_id,
  :ip_network_encoded,
  :tun_type,
  :tunnel_id,
  :virtual_network_id,
  :route_id,
  keyword_init: true
)

# TunnelSubnetResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TunnelSubnetResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TunnelSubnetResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] address_family
#   @return [String, nil]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] existed_at
#   @return [String, nil]
#
# @!attribute [rw] is_default_network
#   @return [Boolean, nil]
#
# @!attribute [rw] is_deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] network
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] subnet_type
#   @return [String, nil]
TunnelSubnetResponseCollectionListMatch = Struct.new(
  :account_id,
  :address_family,
  :comment,
  :existed_at,
  :is_default_network,
  :is_deleted,
  :name,
  :network,
  :page,
  :per_page,
  :sort_order,
  :subnet_type,
  keyword_init: true
)

# TunnelSubnetResponseSingle entity data model.
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] is_default_network
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] network
#   @return [String]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
TunnelSubnetResponseSingle = Struct.new(
  :comment,
  :errors,
  :is_default_network,
  :messages,
  :name,
  :network,
  :result,
  :success,
  keyword_init: true
)

# Request payload for TunnelSubnetResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] address_family
#   @return [String]
TunnelSubnetResponseSingleLoadMatch = Struct.new(
  :account_id,
  :address_family,
  keyword_init: true
)

# Request payload for TunnelSubnetResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] is_default_network
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] network
#   @return [String]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
TunnelSubnetResponseSingleCreateData = Struct.new(
  :account_id,
  :comment,
  :errors,
  :is_default_network,
  :messages,
  :name,
  :network,
  :result,
  :success,
  keyword_init: true
)

# Request payload for TunnelSubnetResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] address_family
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] is_default_network
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] network
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
TunnelSubnetResponseSingleUpdateData = Struct.new(
  :account_id,
  :address_family,
  :comment,
  :errors,
  :is_default_network,
  :messages,
  :name,
  :network,
  :result,
  :success,
  keyword_init: true
)

# TunnelSubnetResponseSingleNullable entity data model.
class TunnelSubnetResponseSingleNullable
end

# Request payload for TunnelSubnetResponseSingleNullable#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] subnet_id
#   @return [String]
TunnelSubnetResponseSingleNullableRemoveMatch = Struct.new(
  :account_id,
  :subnet_id,
  keyword_init: true
)

# TunnelTeamnetResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TunnelTeamnetResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TunnelTeamnetResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] existed_at
#   @return [String, nil]
#
# @!attribute [rw] is_deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] network_subset
#   @return [Object, nil]
#
# @!attribute [rw] network_superset
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] route_id
#   @return [String, nil]
#
# @!attribute [rw] tun_type
#   @return [Array, nil]
#
# @!attribute [rw] tunnel_id
#   @return [String, nil]
#
# @!attribute [rw] virtual_network_id
#   @return [String, nil]
TunnelTeamnetResponseCollectionListMatch = Struct.new(
  :account_id,
  :comment,
  :existed_at,
  :is_deleted,
  :network_subset,
  :network_superset,
  :page,
  :per_page,
  :route_id,
  :tun_type,
  :tunnel_id,
  :virtual_network_id,
  keyword_init: true
)

# TunnelTeamnetResponseSingle entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
TunnelTeamnetResponseSingle = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for TunnelTeamnetResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] ip
#   @return [String]
#
# @!attribute [rw] default_virtual_network_fallback
#   @return [Boolean, nil]
#
# @!attribute [rw] virtual_network_id
#   @return [String, nil]
TunnelTeamnetResponseSingleLoadMatch = Struct.new(
  :account_id,
  :ip,
  :default_virtual_network_fallback,
  :virtual_network_id,
  keyword_init: true
)

# TunnelTunnelClient entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
TunnelTunnelClient = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for TunnelTunnelClient#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cfd_tunnel_id
#   @return [String]
#
# @!attribute [rw] connector_id
#   @return [String]
TunnelTunnelClientLoadMatch = Struct.new(
  :account_id,
  :cfd_tunnel_id,
  :connector_id,
  keyword_init: true
)

# TunnelTunnelConnection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TunnelTunnelConnection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TunnelTunnelConnection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cfd_tunnel_id
#   @return [String]
TunnelTunnelConnectionListMatch = Struct.new(
  :account_id,
  :cfd_tunnel_id,
  keyword_init: true
)

# TunnelTunnelResponseToken entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] resources
#   @return [Array]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
TunnelTunnelResponseToken = Struct.new(
  :errors,
  :messages,
  :resources,
  :result,
  :success,
  keyword_init: true
)

# Request payload for TunnelTunnelResponseToken#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cfd_tunnel_id
#   @return [String, nil]
#
# @!attribute [rw] warp_connector_id
#   @return [String, nil]
TunnelTunnelResponseTokenListMatch = Struct.new(
  :account_id,
  :cfd_tunnel_id,
  :warp_connector_id,
  keyword_init: true
)

# Request payload for TunnelTunnelResponseToken#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] cfd_tunnel_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] resources
#   @return [Array]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
TunnelTunnelResponseTokenCreateData = Struct.new(
  :account_id,
  :cfd_tunnel_id,
  :errors,
  :messages,
  :resources,
  :result,
  :success,
  keyword_init: true
)

# TunnelTunnelWarpConnectorClient entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
TunnelTunnelWarpConnectorClient = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for TunnelTunnelWarpConnectorClient#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] connector_id
#   @return [String]
#
# @!attribute [rw] warp_connector_id
#   @return [String]
TunnelTunnelWarpConnectorClientLoadMatch = Struct.new(
  :account_id,
  :connector_id,
  :warp_connector_id,
  keyword_init: true
)

# TunnelTunnelWarpConnectorConnection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TunnelTunnelWarpConnectorConnection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TunnelTunnelWarpConnectorConnection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] warp_connector_id
#   @return [String]
TunnelTunnelWarpConnectorConnectionListMatch = Struct.new(
  :account_id,
  :warp_connector_id,
  keyword_init: true
)

# TunnelVnetResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TunnelVnetResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TunnelVnetResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_default
#   @return [Boolean, nil]
#
# @!attribute [rw] is_default_network
#   @return [Boolean, nil]
#
# @!attribute [rw] is_deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
TunnelVnetResponseCollectionListMatch = Struct.new(
  :account_id,
  :id,
  :is_default,
  :is_default_network,
  :is_deleted,
  :name,
  keyword_init: true
)

# TunnelVnetResponseSingle entity data model.
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] is_default
#   @return [Boolean, nil]
#
# @!attribute [rw] is_default_network
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
TunnelVnetResponseSingle = Struct.new(
  :comment,
  :is_default,
  :is_default_network,
  :name,
  keyword_init: true
)

# Request payload for TunnelVnetResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] virtual_network_id
#   @return [String]
TunnelVnetResponseSingleLoadMatch = Struct.new(
  :account_id,
  :virtual_network_id,
  keyword_init: true
)

# Request payload for TunnelVnetResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] is_default
#   @return [Boolean, nil]
#
# @!attribute [rw] is_default_network
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
TunnelVnetResponseSingleCreateData = Struct.new(
  :account_id,
  :comment,
  :is_default,
  :is_default_network,
  :name,
  keyword_init: true
)

# Request payload for TunnelVnetResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] virtual_network_id
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] is_default
#   @return [Boolean, nil]
#
# @!attribute [rw] is_default_network
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
TunnelVnetResponseSingleUpdateData = Struct.new(
  :account_id,
  :virtual_network_id,
  :comment,
  :is_default,
  :is_default_network,
  :name,
  keyword_init: true
)

# Request payload for TunnelVnetResponseSingle#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] virtual_network_id
#   @return [String]
TunnelVnetResponseSingleRemoveMatch = Struct.new(
  :account_id,
  :virtual_network_id,
  keyword_init: true
)

# TunnelWarpConnectorResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TunnelWarpConnectorResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TunnelWarpConnectorResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] exclude_prefix
#   @return [String, nil]
#
# @!attribute [rw] existed_at
#   @return [String, nil]
#
# @!attribute [rw] include_prefix
#   @return [String, nil]
#
# @!attribute [rw] is_deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
#
# @!attribute [rw] was_active_at
#   @return [String, nil]
#
# @!attribute [rw] was_inactive_at
#   @return [String, nil]
TunnelWarpConnectorResponseCollectionListMatch = Struct.new(
  :account_id,
  :exclude_prefix,
  :existed_at,
  :include_prefix,
  :is_deleted,
  :name,
  :page,
  :per_page,
  :status,
  :uuid,
  :was_active_at,
  :was_inactive_at,
  keyword_init: true
)

# TunnelWarpConnectorResponseSingle entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] ha
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tunnel_secret
#   @return [String, nil]
TunnelWarpConnectorResponseSingle = Struct.new(
  :errors,
  :ha,
  :messages,
  :name,
  :result,
  :success,
  :tunnel_secret,
  keyword_init: true
)

# Request payload for TunnelWarpConnectorResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] tunnel_id
#   @return [String]
TunnelWarpConnectorResponseSingleLoadMatch = Struct.new(
  :account_id,
  :tunnel_id,
  keyword_init: true
)

# Request payload for TunnelWarpConnectorResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] ha
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] tunnel_secret
#   @return [String, nil]
TunnelWarpConnectorResponseSingleCreateData = Struct.new(
  :account_id,
  :errors,
  :ha,
  :messages,
  :name,
  :result,
  :success,
  :tunnel_secret,
  keyword_init: true
)

# Request payload for TunnelWarpConnectorResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] tunnel_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] ha
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] tunnel_secret
#   @return [String, nil]
TunnelWarpConnectorResponseSingleUpdateData = Struct.new(
  :account_id,
  :tunnel_id,
  :errors,
  :ha,
  :messages,
  :name,
  :result,
  :success,
  :tunnel_secret,
  keyword_init: true
)

# Request payload for TunnelWarpConnectorResponseSingle#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] tunnel_id
#   @return [String]
TunnelWarpConnectorResponseSingleRemoveMatch = Struct.new(
  :account_id,
  :tunnel_id,
  keyword_init: true
)

# TunnelZeroTrustConnectivitySetting entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] icmp_proxy_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] offramp_warp_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
TunnelZeroTrustConnectivitySetting = Struct.new(
  :errors,
  :icmp_proxy_enabled,
  :messages,
  :offramp_warp_enabled,
  :result,
  :success,
  keyword_init: true
)

# Request payload for TunnelZeroTrustConnectivitySetting#list.
#
# @!attribute [rw] account_id
#   @return [String]
TunnelZeroTrustConnectivitySettingListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for TunnelZeroTrustConnectivitySetting#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] icmp_proxy_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] offramp_warp_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
TunnelZeroTrustConnectivitySettingUpdateData = Struct.new(
  :account_id,
  :errors,
  :icmp_proxy_enabled,
  :messages,
  :offramp_warp_enabled,
  :result,
  :success,
  keyword_init: true
)

# Warp entity data model.
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_default_network
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] network
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
Warp = Struct.new(
  :comment,
  :errors,
  :id,
  :is_default_network,
  :messages,
  :name,
  :network,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Warp#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
WarpLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for Warp#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] comment
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] is_default_network
#   @return [Boolean, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] network
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
WarpUpdateData = Struct.new(
  :account_id,
  :id,
  :comment,
  :errors,
  :is_default_network,
  :messages,
  :name,
  :network,
  :result,
  :success,
  keyword_init: true
)

# WarpChangeEvent entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
WarpChangeEvent = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for WarpChangeEvent#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] account_name
#   @return [String, nil]
#
# @!attribute [rw] config_name
#   @return [String, nil]
#
# @!attribute [rw] from
#   @return [String]
#
# @!attribute [rw] page
#   @return [Float]
#
# @!attribute [rw] per_page
#   @return [Float]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String]
#
# @!attribute [rw] toggle
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
WarpChangeEventListMatch = Struct.new(
  :account_id,
  :account_name,
  :config_name,
  :from,
  :page,
  :per_page,
  :sort_order,
  :to,
  :toggle,
  :type,
  keyword_init: true
)

# WarpTeamsDeviceApiOther entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object]
#
# @!attribute [rw] success
#   @return [Boolean]
WarpTeamsDeviceApiOther = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for WarpTeamsDeviceApiOther#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] registration_id
#   @return [String]
WarpTeamsDeviceApiOtherListMatch = Struct.new(
  :account_id,
  :registration_id,
  keyword_init: true
)

# ZeroTrustGatewayApplicationsReviewStatus entity data model.
#
# @!attribute [rw] approved_apps
#   @return [Array]
#
# @!attribute [rw] in_review_apps
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] unapproved_apps
#   @return [Array]
ZeroTrustGatewayApplicationsReviewStatus = Struct.new(
  :approved_apps,
  :in_review_apps,
  :result,
  :unapproved_apps,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayApplicationsReviewStatus#load.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustGatewayApplicationsReviewStatusLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayApplicationsReviewStatus#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] approved_apps
#   @return [Array, nil]
#
# @!attribute [rw] in_review_apps
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] unapproved_apps
#   @return [Array, nil]
ZeroTrustGatewayApplicationsReviewStatusUpdateData = Struct.new(
  :account_id,
  :approved_apps,
  :in_review_apps,
  :result,
  :unapproved_apps,
  keyword_init: true
)

# ZeroTrustGatewayCsvOperationSingle entity data model.
class ZeroTrustGatewayCsvOperationSingle
end

# Request payload for ZeroTrustGatewayCsvOperationSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustGatewayCsvOperationSingleCreateData = Struct.new(
  :account_id,
  keyword_init: true
)

# ZeroTrustGatewayCustomCertificateSetting entity data model.
#
# @!attribute [rw] binding_status
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ZeroTrustGatewayCustomCertificateSetting = Struct.new(
  :binding_status,
  :enabled,
  :id,
  :updated_at,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayCustomCertificateSetting#load.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustGatewayCustomCertificateSettingLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# ZeroTrustGatewayGatewayAccount entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
ZeroTrustGatewayGatewayAccount = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayGatewayAccount#load.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustGatewayGatewayAccountLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayGatewayAccount#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ZeroTrustGatewayGatewayAccountCreateData = Struct.new(
  :account_id,
  :result,
  keyword_init: true
)

# ZeroTrustGatewayGatewayAccountConfig entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] settings
#   @return [Hash, nil]
ZeroTrustGatewayGatewayAccountConfig = Struct.new(
  :result,
  :settings,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayGatewayAccountConfig#load.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustGatewayGatewayAccountConfigLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayGatewayAccountConfig#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] settings
#   @return [Hash, nil]
ZeroTrustGatewayGatewayAccountConfigUpdateData = Struct.new(
  :account_id,
  :result,
  :settings,
  keyword_init: true
)

# ZeroTrustGatewayGatewayAccountEgressCidrPairList entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ZeroTrustGatewayGatewayAccountEgressCidrPairList = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayGatewayAccountEgressCidrPairList#list.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustGatewayGatewayAccountEgressCidrPairListListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# ZeroTrustGatewayGatewayAccountLoggingSetting entity data model.
#
# @!attribute [rw] redact_pii
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] settings_by_rule_type
#   @return [Hash, nil]
ZeroTrustGatewayGatewayAccountLoggingSetting = Struct.new(
  :redact_pii,
  :result,
  :settings_by_rule_type,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayGatewayAccountLoggingSetting#load.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustGatewayGatewayAccountLoggingSettingLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayGatewayAccountLoggingSetting#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] redact_pii
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] settings_by_rule_type
#   @return [Hash, nil]
ZeroTrustGatewayGatewayAccountLoggingSettingUpdateData = Struct.new(
  :account_id,
  :redact_pii,
  :result,
  :settings_by_rule_type,
  keyword_init: true
)

# ZeroTrustGatewayListItemResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
ZeroTrustGatewayListItemResponseCollection = Struct.new(
  :result,
  :result_info,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayListItemResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] list_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
ZeroTrustGatewayListItemResponseCollectionListMatch = Struct.new(
  :account_id,
  :list_id,
  :page,
  :per_page,
  keyword_init: true
)

# ZeroTrustGatewayListSingle entity data model.
#
# @!attribute [rw] append
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] remove
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ZeroTrustGatewayListSingle = Struct.new(
  :append,
  :description,
  :items,
  :name,
  :remove,
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayListSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] list_id
#   @return [String]
ZeroTrustGatewayListSingleLoadMatch = Struct.new(
  :account_id,
  :list_id,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayListSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] list_id
#   @return [String]
#
# @!attribute [rw] append
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] remove
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ZeroTrustGatewayListSingleUpdateData = Struct.new(
  :account_id,
  :list_id,
  :append,
  :description,
  :items,
  :name,
  :remove,
  :result,
  keyword_init: true
)

# ZeroTrustGatewayResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ZeroTrustGatewayResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustGatewayResponseCollectionListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# ZeroTrustGatewayResponseCollection10 entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
ZeroTrustGatewayResponseCollection10 = Struct.new(
  :result,
  :result_info,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayResponseCollection10#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
ZeroTrustGatewayResponseCollection10ListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  keyword_init: true
)

# ZeroTrustGatewayResponseCollection2 entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ZeroTrustGatewayResponseCollection2 = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayResponseCollection2#list.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustGatewayResponseCollection2ListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# ZeroTrustGatewayResponseCollection3 entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ZeroTrustGatewayResponseCollection3 = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayResponseCollection3#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
ZeroTrustGatewayResponseCollection3ListMatch = Struct.new(
  :account_id,
  :direction,
  :filter,
  :order_by,
  :search,
  :type,
  keyword_init: true
)

# ZeroTrustGatewayResponseCollection4 entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ZeroTrustGatewayResponseCollection4 = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayResponseCollection4#list.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustGatewayResponseCollection4ListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# ZeroTrustGatewayResponseCollection5 entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ZeroTrustGatewayResponseCollection5 = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayResponseCollection5#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
ZeroTrustGatewayResponseCollection5ListMatch = Struct.new(
  :account_id,
  :direction,
  :filter,
  :order_by,
  :search,
  keyword_init: true
)

# ZeroTrustGatewayResponseCollection6 entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ZeroTrustGatewayResponseCollection6 = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayResponseCollection6#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
ZeroTrustGatewayResponseCollection6ListMatch = Struct.new(
  :account_id,
  :direction,
  :filter,
  :order_by,
  :search,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayResponseCollection6#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Array, nil]
ZeroTrustGatewayResponseCollection6UpdateData = Struct.new(
  :account_id,
  :result,
  keyword_init: true
)

# ZeroTrustGatewayResponseCollection7 entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ZeroTrustGatewayResponseCollection7 = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayResponseCollection7#list.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustGatewayResponseCollection7ListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# ZeroTrustGatewayResponseCollection8 entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ZeroTrustGatewayResponseCollection8 = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayResponseCollection8#list.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustGatewayResponseCollection8ListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# ZeroTrustGatewayResponseCollection9 entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ZeroTrustGatewayResponseCollection9 = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewayResponseCollection9#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
ZeroTrustGatewayResponseCollection9ListMatch = Struct.new(
  :account_id,
  :direction,
  :filter,
  :order_by,
  :search,
  keyword_init: true
)

# ZeroTrustGatewaySingle entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] validity_period_days
#   @return [Integer, nil]
ZeroTrustGatewaySingle = Struct.new(
  :result,
  :validity_period_days,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] certificate_id
#   @return [String]
ZeroTrustGatewaySingleLoadMatch = Struct.new(
  :account_id,
  :certificate_id,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] certificate_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] validity_period_days
#   @return [Integer, nil]
ZeroTrustGatewaySingleCreateData = Struct.new(
  :account_id,
  :certificate_id,
  :result,
  :validity_period_days,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingle#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] certificate_id
#   @return [String]
ZeroTrustGatewaySingleRemoveMatch = Struct.new(
  :account_id,
  :certificate_id,
  keyword_init: true
)

# ZeroTrustGatewaySingleResponse2 entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
ZeroTrustGatewaySingleResponse2 = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse2#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] operation_id
#   @return [String]
ZeroTrustGatewaySingleResponse2LoadMatch = Struct.new(
  :account_id,
  :operation_id,
  keyword_init: true
)

# ZeroTrustGatewaySingleResponse3 entity data model.
#
# @!attribute [rw] client_default
#   @return [Boolean, nil]
#
# @!attribute [rw] dns_destination_ips_id
#   @return [String, nil]
#
# @!attribute [rw] ecs_support
#   @return [Boolean, nil]
#
# @!attribute [rw] endpoints
#   @return [Hash]
#
# @!attribute [rw] max_ttl
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] networks
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ZeroTrustGatewaySingleResponse3 = Struct.new(
  :client_default,
  :dns_destination_ips_id,
  :ecs_support,
  :endpoints,
  :max_ttl,
  :name,
  :networks,
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse3#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] location_id
#   @return [String]
ZeroTrustGatewaySingleResponse3LoadMatch = Struct.new(
  :account_id,
  :location_id,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse3#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] client_default
#   @return [Boolean, nil]
#
# @!attribute [rw] dns_destination_ips_id
#   @return [String, nil]
#
# @!attribute [rw] ecs_support
#   @return [Boolean, nil]
#
# @!attribute [rw] endpoints
#   @return [Hash]
#
# @!attribute [rw] max_ttl
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] networks
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ZeroTrustGatewaySingleResponse3CreateData = Struct.new(
  :account_id,
  :client_default,
  :dns_destination_ips_id,
  :ecs_support,
  :endpoints,
  :max_ttl,
  :name,
  :networks,
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse3#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] location_id
#   @return [String]
#
# @!attribute [rw] client_default
#   @return [Boolean, nil]
#
# @!attribute [rw] dns_destination_ips_id
#   @return [String, nil]
#
# @!attribute [rw] ecs_support
#   @return [Boolean, nil]
#
# @!attribute [rw] endpoints
#   @return [Hash, nil]
#
# @!attribute [rw] max_ttl
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] networks
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ZeroTrustGatewaySingleResponse3UpdateData = Struct.new(
  :account_id,
  :location_id,
  :client_default,
  :dns_destination_ips_id,
  :ecs_support,
  :endpoints,
  :max_ttl,
  :name,
  :networks,
  :result,
  keyword_init: true
)

# ZeroTrustGatewaySingleResponse4 entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] device_posture
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] expiration
#   @return [Hash]
#
# @!attribute [rw] filters
#   @return [Array, nil]
#
# @!attribute [rw] identity
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] precedence
#   @return [Integer, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] rule_settings
#   @return [Hash, nil]
#
# @!attribute [rw] schedule
#   @return [Hash, nil]
#
# @!attribute [rw] traffic
#   @return [String, nil]
ZeroTrustGatewaySingleResponse4 = Struct.new(
  :action,
  :description,
  :device_posture,
  :enabled,
  :expiration,
  :filters,
  :identity,
  :name,
  :precedence,
  :result,
  :rule_settings,
  :schedule,
  :traffic,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse4#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] rule_id
#   @return [String]
ZeroTrustGatewaySingleResponse4LoadMatch = Struct.new(
  :account_id,
  :rule_id,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse4#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] rule_id
#   @return [String, nil]
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] device_posture
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] expiration
#   @return [Hash]
#
# @!attribute [rw] filters
#   @return [Array, nil]
#
# @!attribute [rw] identity
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] precedence
#   @return [Integer, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] rule_settings
#   @return [Hash, nil]
#
# @!attribute [rw] schedule
#   @return [Hash, nil]
#
# @!attribute [rw] traffic
#   @return [String, nil]
ZeroTrustGatewaySingleResponse4CreateData = Struct.new(
  :account_id,
  :rule_id,
  :action,
  :description,
  :device_posture,
  :enabled,
  :expiration,
  :filters,
  :identity,
  :name,
  :precedence,
  :result,
  :rule_settings,
  :schedule,
  :traffic,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse4#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] rule_id
#   @return [String]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] device_posture
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] expiration
#   @return [Hash, nil]
#
# @!attribute [rw] filters
#   @return [Array, nil]
#
# @!attribute [rw] identity
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] precedence
#   @return [Integer, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] rule_settings
#   @return [Hash, nil]
#
# @!attribute [rw] schedule
#   @return [Hash, nil]
#
# @!attribute [rw] traffic
#   @return [String, nil]
ZeroTrustGatewaySingleResponse4UpdateData = Struct.new(
  :account_id,
  :rule_id,
  :action,
  :description,
  :device_posture,
  :enabled,
  :expiration,
  :filters,
  :identity,
  :name,
  :precedence,
  :result,
  :rule_settings,
  :schedule,
  :traffic,
  keyword_init: true
)

# ZeroTrustGatewaySingleResponse5 entity data model.
#
# @!attribute [rw] ips
#   @return [Array, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
ZeroTrustGatewaySingleResponse5 = Struct.new(
  :ips,
  :kind,
  :name,
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse5#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] proxy_endpoint_id
#   @return [String]
ZeroTrustGatewaySingleResponse5LoadMatch = Struct.new(
  :account_id,
  :proxy_endpoint_id,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse5#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] ips
#   @return [Array, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
ZeroTrustGatewaySingleResponse5CreateData = Struct.new(
  :account_id,
  :ips,
  :kind,
  :name,
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse5#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] proxy_endpoint_id
#   @return [String]
#
# @!attribute [rw] ips
#   @return [Array, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
ZeroTrustGatewaySingleResponse5UpdateData = Struct.new(
  :account_id,
  :proxy_endpoint_id,
  :ips,
  :kind,
  :name,
  :result,
  keyword_init: true
)

# ZeroTrustGatewaySingleResponse6 entity data model.
#
# @!attribute [rw] public_key
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ZeroTrustGatewaySingleResponse6 = Struct.new(
  :public_key,
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse6#load.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustGatewaySingleResponse6LoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse6#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] public_key
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ZeroTrustGatewaySingleResponse6CreateData = Struct.new(
  :account_id,
  :public_key,
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse6#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] public_key
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ZeroTrustGatewaySingleResponse6UpdateData = Struct.new(
  :account_id,
  :public_key,
  :result,
  keyword_init: true
)

# ZeroTrustGatewaySingleResponse7 entity data model.
#
# @!attribute [rw] contents
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
ZeroTrustGatewaySingleResponse7 = Struct.new(
  :contents,
  :description,
  :name,
  :result,
  :slug,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse7#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] pacfile_id
#   @return [String]
ZeroTrustGatewaySingleResponse7LoadMatch = Struct.new(
  :account_id,
  :pacfile_id,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse7#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] contents
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
ZeroTrustGatewaySingleResponse7CreateData = Struct.new(
  :account_id,
  :contents,
  :description,
  :name,
  :result,
  :slug,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponse7#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] pacfile_id
#   @return [String]
#
# @!attribute [rw] contents
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
ZeroTrustGatewaySingleResponse7UpdateData = Struct.new(
  :account_id,
  :pacfile_id,
  :contents,
  :description,
  :name,
  :result,
  :slug,
  keyword_init: true
)

# ZeroTrustGatewaySingleResponseWithListItem entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
ZeroTrustGatewaySingleResponseWithListItem = Struct.new(
  :description,
  :items,
  :name,
  :type,
  keyword_init: true
)

# Request payload for ZeroTrustGatewaySingleResponseWithListItem#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] items
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
ZeroTrustGatewaySingleResponseWithListItemCreateData = Struct.new(
  :account_id,
  :description,
  :items,
  :name,
  :type,
  keyword_init: true
)

# ZeroTrustRiskScoring entity data model.
#
# @!attribute [rw] behaviors
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash]
ZeroTrustRiskScoring = Struct.new(
  :behaviors,
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustRiskScoring#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String, nil]
ZeroTrustRiskScoringLoadMatch = Struct.new(
  :account_id,
  :user_id,
  keyword_init: true
)

# Request payload for ZeroTrustRiskScoring#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] zt_risk_scoring_id
#   @return [String]
#
# @!attribute [rw] behaviors
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash]
ZeroTrustRiskScoringCreateData = Struct.new(
  :account_id,
  :zt_risk_scoring_id,
  :behaviors,
  :result,
  keyword_init: true
)

# Request payload for ZeroTrustRiskScoring#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] behaviors
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ZeroTrustRiskScoringUpdateData = Struct.new(
  :account_id,
  :behaviors,
  :result,
  keyword_init: true
)

# ZeroTrustRiskScoringIntegration entity data model.
#
# @!attribute [rw] active
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] integration_type
#   @return [String]
#
# @!attribute [rw] reference_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] tenant_url
#   @return [String]
ZeroTrustRiskScoringIntegration = Struct.new(
  :active,
  :id,
  :integration_type,
  :reference_id,
  :result,
  :tenant_url,
  keyword_init: true
)

# Request payload for ZeroTrustRiskScoringIntegration#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] reference_id
#   @return [String, nil]
ZeroTrustRiskScoringIntegrationLoadMatch = Struct.new(
  :account_id,
  :id,
  :reference_id,
  keyword_init: true
)

# Request payload for ZeroTrustRiskScoringIntegration#list.
#
# @!attribute [rw] account_id
#   @return [String]
ZeroTrustRiskScoringIntegrationListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for ZeroTrustRiskScoringIntegration#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] active
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] integration_type
#   @return [String]
#
# @!attribute [rw] reference_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] tenant_url
#   @return [String]
ZeroTrustRiskScoringIntegrationCreateData = Struct.new(
  :account_id,
  :active,
  :id,
  :integration_type,
  :reference_id,
  :result,
  :tenant_url,
  keyword_init: true
)

# Request payload for ZeroTrustRiskScoringIntegration#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] integration_type
#   @return [String, nil]
#
# @!attribute [rw] reference_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] tenant_url
#   @return [String, nil]
ZeroTrustRiskScoringIntegrationUpdateData = Struct.new(
  :account_id,
  :id,
  :active,
  :integration_type,
  :reference_id,
  :result,
  :tenant_url,
  keyword_init: true
)

# Request payload for ZeroTrustRiskScoringIntegration#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ZeroTrustRiskScoringIntegrationRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

