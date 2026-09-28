# CloudflareZeroTrust SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'CloudflareZeroTrust_types'


class CloudflareZeroTrustSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = CloudflareZeroTrustUtility.new
    @_utility = utility

    config = CloudflareZeroTrustConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = CloudflareZeroTrustHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = CloudflareZeroTrustHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, CloudflareZeroTrustFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    CloudflareZeroTrustUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = CloudflareZeroTrustHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = CloudflareZeroTrustHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = CloudflareZeroTrustHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = CloudflareZeroTrustSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => CloudflareZeroTrustError.new(
        "#{op}_allow",
        "CloudflareZeroTrustSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue CloudflareZeroTrustError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = CloudflareZeroTrustHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = CloudflareZeroTrustHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = CloudflareZeroTrustError.new(
        "graphql_error", "CloudflareZeroTrustSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.ClientVersion.list / client.ClientVersion.load({ "id" => ... })
  def ClientVersion(data = nil)
    require_relative 'entity/client_version_entity'
    ClientVersionEntity.new(self, data)
  end


  # Canonical facade: client.Cni.list / client.Cni.load({ "id" => ... })
  def Cni(data = nil)
    require_relative 'entity/cni_entity'
    CniEntity.new(self, data)
  end


  # Canonical facade: client.DeploymentGroup.list / client.DeploymentGroup.load({ "id" => ... })
  def DeploymentGroup(data = nil)
    require_relative 'entity/deployment_group_entity'
    DeploymentGroupEntity.new(self, data)
  end


  # Canonical facade: client.DexRemoteCommand.list / client.DexRemoteCommand.load({ "id" => ... })
  def DexRemoteCommand(data = nil)
    require_relative 'entity/dex_remote_command_entity'
    DexRemoteCommandEntity.new(self, data)
  end


  # Canonical facade: client.DexRule.list / client.DexRule.load({ "id" => ... })
  def DexRule(data = nil)
    require_relative 'entity/dex_rule_entity'
    DexRuleEntity.new(self, data)
  end


  # Canonical facade: client.DexSyntheticApplicationMonitoring.list / client.DexSyntheticApplicationMonitoring.load({ "id" => ... })
  def DexSyntheticApplicationMonitoring(data = nil)
    require_relative 'entity/dex_synthetic_application_monitoring_entity'
    DexSyntheticApplicationMonitoringEntity.new(self, data)
  end


  # Canonical facade: client.DigitalExperienceMonitoringDevice.list / client.DigitalExperienceMonitoringDevice.load({ "id" => ... })
  def DigitalExperienceMonitoringDevice(data = nil)
    require_relative 'entity/digital_experience_monitoring_device_entity'
    DigitalExperienceMonitoringDeviceEntity.new(self, data)
  end


  # Canonical facade: client.DigitalExperienceMonitoringDexDeleteResponseCollection.list / client.DigitalExperienceMonitoringDexDeleteResponseCollection.load({ "id" => ... })
  def DigitalExperienceMonitoringDexDeleteResponseCollection(data = nil)
    require_relative 'entity/digital_experience_monitoring_dex_delete_response_collection_entity'
    DigitalExperienceMonitoringDexDeleteResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.DigitalExperienceMonitoringDexResponseCollection.list / client.DigitalExperienceMonitoringDexResponseCollection.load({ "id" => ... })
  def DigitalExperienceMonitoringDexResponseCollection(data = nil)
    require_relative 'entity/digital_experience_monitoring_dex_response_collection_entity'
    DigitalExperienceMonitoringDexResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.DigitalExperienceMonitoringDexSingle.list / client.DigitalExperienceMonitoringDexSingle.load({ "id" => ... })
  def DigitalExperienceMonitoringDexSingle(data = nil)
    require_relative 'entity/digital_experience_monitoring_dex_single_entity'
    DigitalExperienceMonitoringDexSingleEntity.new(self, data)
  end


  # Canonical facade: client.DigitalExperienceMonitoringFleetStatusDevice.list / client.DigitalExperienceMonitoringFleetStatusDevice.load({ "id" => ... })
  def DigitalExperienceMonitoringFleetStatusDevice(data = nil)
    require_relative 'entity/digital_experience_monitoring_fleet_status_device_entity'
    DigitalExperienceMonitoringFleetStatusDeviceEntity.new(self, data)
  end


  # Canonical facade: client.DigitalExperienceMonitoringFleetStatusLive.list / client.DigitalExperienceMonitoringFleetStatusLive.load({ "id" => ... })
  def DigitalExperienceMonitoringFleetStatusLive(data = nil)
    require_relative 'entity/digital_experience_monitoring_fleet_status_live_entity'
    DigitalExperienceMonitoringFleetStatusLiveEntity.new(self, data)
  end


  # Canonical facade: client.DigitalExperienceMonitoringFleetStatusOverTime.list / client.DigitalExperienceMonitoringFleetStatusOverTime.load({ "id" => ... })
  def DigitalExperienceMonitoringFleetStatusOverTime(data = nil)
    require_relative 'entity/digital_experience_monitoring_fleet_status_over_time_entity'
    DigitalExperienceMonitoringFleetStatusOverTimeEntity.new(self, data)
  end


  # Canonical facade: client.Interconnect.list / client.Interconnect.load({ "id" => ... })
  def Interconnect(data = nil)
    require_relative 'entity/interconnect_entity'
    InterconnectEntity.new(self, data)
  end


  # Canonical facade: client.IpProfile.list / client.IpProfile.load({ "id" => ... })
  def IpProfile(data = nil)
    require_relative 'entity/ip_profile_entity'
    IpProfileEntity.new(self, data)
  end


  # Canonical facade: client.List.list / client.List.load({ "id" => ... })
  def List(data = nil)
    require_relative 'entity/list_entity'
    ListEntity.new(self, data)
  end


  # Canonical facade: client.Location.list / client.Location.load({ "id" => ... })
  def Location(data = nil)
    require_relative 'entity/location_entity'
    LocationEntity.new(self, data)
  end


  # Canonical facade: client.NscCni.list / client.NscCni.load({ "id" => ... })
  def NscCni(data = nil)
    require_relative 'entity/nsc_cni_entity'
    NscCniEntity.new(self, data)
  end


  # Canonical facade: client.NscDefaultName.list / client.NscDefaultName.load({ "id" => ... })
  def NscDefaultName(data = nil)
    require_relative 'entity/nsc_default_name_entity'
    NscDefaultNameEntity.new(self, data)
  end


  # Canonical facade: client.NscInterconnect.list / client.NscInterconnect.load({ "id" => ... })
  def NscInterconnect(data = nil)
    require_relative 'entity/nsc_interconnect_entity'
    NscInterconnectEntity.new(self, data)
  end


  # Canonical facade: client.NscSetting.list / client.NscSetting.load({ "id" => ... })
  def NscSetting(data = nil)
    require_relative 'entity/nsc_setting_entity'
    NscSettingEntity.new(self, data)
  end


  # Canonical facade: client.NscSlotInfo.list / client.NscSlotInfo.load({ "id" => ... })
  def NscSlotInfo(data = nil)
    require_relative 'entity/nsc_slot_info_entity'
    NscSlotInfoEntity.new(self, data)
  end


  # Canonical facade: client.NscStatusInfo.list / client.NscStatusInfo.load({ "id" => ... })
  def NscStatusInfo(data = nil)
    require_relative 'entity/nsc_status_info_entity'
    NscStatusInfoEntity.new(self, data)
  end


  # Canonical facade: client.OverrideCode.list / client.OverrideCode.load({ "id" => ... })
  def OverrideCode(data = nil)
    require_relative 'entity/override_code_entity'
    OverrideCodeEntity.new(self, data)
  end


  # Canonical facade: client.Pacfile.list / client.Pacfile.load({ "id" => ... })
  def Pacfile(data = nil)
    require_relative 'entity/pacfile_entity'
    PacfileEntity.new(self, data)
  end


  # Canonical facade: client.PhysicalDevice.list / client.PhysicalDevice.load({ "id" => ... })
  def PhysicalDevice(data = nil)
    require_relative 'entity/physical_device_entity'
    PhysicalDeviceEntity.new(self, data)
  end


  # Canonical facade: client.ProxyEndpoint.list / client.ProxyEndpoint.load({ "id" => ... })
  def ProxyEndpoint(data = nil)
    require_relative 'entity/proxy_endpoint_entity'
    ProxyEndpointEntity.new(self, data)
  end


  # Canonical facade: client.Registration.list / client.Registration.load({ "id" => ... })
  def Registration(data = nil)
    require_relative 'entity/registration_entity'
    RegistrationEntity.new(self, data)
  end


  # Canonical facade: client.Rule.list / client.Rule.load({ "id" => ... })
  def Rule(data = nil)
    require_relative 'entity/rule_entity'
    RuleEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesApiResponseSingle.list / client.TeamsDevicesApiResponseSingle.load({ "id" => ... })
  def TeamsDevicesApiResponseSingle(data = nil)
    require_relative 'entity/teams_devices_api_response_single_entity'
    TeamsDevicesApiResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesComponentsSchemasResponseCollection.list / client.TeamsDevicesComponentsSchemasResponseCollection.load({ "id" => ... })
  def TeamsDevicesComponentsSchemasResponseCollection(data = nil)
    require_relative 'entity/teams_devices_components_schemas_response_collection_entity'
    TeamsDevicesComponentsSchemasResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesComponentsSchemasSingle.list / client.TeamsDevicesComponentsSchemasSingle.load({ "id" => ... })
  def TeamsDevicesComponentsSchemasSingle(data = nil)
    require_relative 'entity/teams_devices_components_schemas_single_entity'
    TeamsDevicesComponentsSchemasSingleEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesDefaultDeviceSetting.list / client.TeamsDevicesDefaultDeviceSetting.load({ "id" => ... })
  def TeamsDevicesDefaultDeviceSetting(data = nil)
    require_relative 'entity/teams_devices_default_device_setting_entity'
    TeamsDevicesDefaultDeviceSettingEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesDevice.list / client.TeamsDevicesDevice.load({ "id" => ... })
  def TeamsDevicesDevice(data = nil)
    require_relative 'entity/teams_devices_device_entity'
    TeamsDevicesDeviceEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesDeviceSetting.list / client.TeamsDevicesDeviceSetting.load({ "id" => ... })
  def TeamsDevicesDeviceSetting(data = nil)
    require_relative 'entity/teams_devices_device_setting_entity'
    TeamsDevicesDeviceSettingEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesDeviceSettingsResponseCollection.list / client.TeamsDevicesDeviceSettingsResponseCollection.load({ "id" => ... })
  def TeamsDevicesDeviceSettingsResponseCollection(data = nil)
    require_relative 'entity/teams_devices_device_settings_response_collection_entity'
    TeamsDevicesDeviceSettingsResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesFallbackDomainResponseCollection.list / client.TeamsDevicesFallbackDomainResponseCollection.load({ "id" => ... })
  def TeamsDevicesFallbackDomainResponseCollection(data = nil)
    require_relative 'entity/teams_devices_fallback_domain_response_collection_entity'
    TeamsDevicesFallbackDomainResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesGlobalWarpOverride.list / client.TeamsDevicesGlobalWarpOverride.load({ "id" => ... })
  def TeamsDevicesGlobalWarpOverride(data = nil)
    require_relative 'entity/teams_devices_global_warp_override_entity'
    TeamsDevicesGlobalWarpOverrideEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesId.list / client.TeamsDevicesId.load({ "id" => ... })
  def TeamsDevicesId(data = nil)
    require_relative 'entity/teams_devices_id_entity'
    TeamsDevicesIdEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesOverrideCode.list / client.TeamsDevicesOverrideCode.load({ "id" => ... })
  def TeamsDevicesOverrideCode(data = nil)
    require_relative 'entity/teams_devices_override_code_entity'
    TeamsDevicesOverrideCodeEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesResponseCollection.list / client.TeamsDevicesResponseCollection.load({ "id" => ... })
  def TeamsDevicesResponseCollection(data = nil)
    require_relative 'entity/teams_devices_response_collection_entity'
    TeamsDevicesResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesSchemasId.list / client.TeamsDevicesSchemasId.load({ "id" => ... })
  def TeamsDevicesSchemasId(data = nil)
    require_relative 'entity/teams_devices_schemas_id_entity'
    TeamsDevicesSchemasIdEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesSchemasResponseCollection.list / client.TeamsDevicesSchemasResponseCollection.load({ "id" => ... })
  def TeamsDevicesSchemasResponseCollection(data = nil)
    require_relative 'entity/teams_devices_schemas_response_collection_entity'
    TeamsDevicesSchemasResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesSchemasSingle.list / client.TeamsDevicesSchemasSingle.load({ "id" => ... })
  def TeamsDevicesSchemasSingle(data = nil)
    require_relative 'entity/teams_devices_schemas_single_entity'
    TeamsDevicesSchemasSingleEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesSingle.list / client.TeamsDevicesSingle.load({ "id" => ... })
  def TeamsDevicesSingle(data = nil)
    require_relative 'entity/teams_devices_single_entity'
    TeamsDevicesSingleEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesSplitTunnelIncludeResponseCollection.list / client.TeamsDevicesSplitTunnelIncludeResponseCollection.load({ "id" => ... })
  def TeamsDevicesSplitTunnelIncludeResponseCollection(data = nil)
    require_relative 'entity/teams_devices_split_tunnel_include_response_collection_entity'
    TeamsDevicesSplitTunnelIncludeResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesSplitTunnelResponseCollection.list / client.TeamsDevicesSplitTunnelResponseCollection.load({ "id" => ... })
  def TeamsDevicesSplitTunnelResponseCollection(data = nil)
    require_relative 'entity/teams_devices_split_tunnel_response_collection_entity'
    TeamsDevicesSplitTunnelResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TeamsDevicesZeroTrustAccountDeviceSetting.list / client.TeamsDevicesZeroTrustAccountDeviceSetting.load({ "id" => ... })
  def TeamsDevicesZeroTrustAccountDeviceSetting(data = nil)
    require_relative 'entity/teams_devices_zero_trust_account_device_setting_entity'
    TeamsDevicesZeroTrustAccountDeviceSettingEntity.new(self, data)
  end


  # Canonical facade: client.Tunnel.list / client.Tunnel.load({ "id" => ... })
  def Tunnel(data = nil)
    require_relative 'entity/tunnel_entity'
    TunnelEntity.new(self, data)
  end


  # Canonical facade: client.TunnelCfdTunnelResponseCollection.list / client.TunnelCfdTunnelResponseCollection.load({ "id" => ... })
  def TunnelCfdTunnelResponseCollection(data = nil)
    require_relative 'entity/tunnel_cfd_tunnel_response_collection_entity'
    TunnelCfdTunnelResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TunnelCfdTunnelResponseSingle.list / client.TunnelCfdTunnelResponseSingle.load({ "id" => ... })
  def TunnelCfdTunnelResponseSingle(data = nil)
    require_relative 'entity/tunnel_cfd_tunnel_response_single_entity'
    TunnelCfdTunnelResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TunnelConfiguration.list / client.TunnelConfiguration.load({ "id" => ... })
  def TunnelConfiguration(data = nil)
    require_relative 'entity/tunnel_configuration_entity'
    TunnelConfigurationEntity.new(self, data)
  end


  # Canonical facade: client.TunnelEmpty.list / client.TunnelEmpty.load({ "id" => ... })
  def TunnelEmpty(data = nil)
    require_relative 'entity/tunnel_empty_entity'
    TunnelEmptyEntity.new(self, data)
  end


  # Canonical facade: client.TunnelHostnameRouteResponseCollection.list / client.TunnelHostnameRouteResponseCollection.load({ "id" => ... })
  def TunnelHostnameRouteResponseCollection(data = nil)
    require_relative 'entity/tunnel_hostname_route_response_collection_entity'
    TunnelHostnameRouteResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TunnelHostnameRouteResponseSingle.list / client.TunnelHostnameRouteResponseSingle.load({ "id" => ... })
  def TunnelHostnameRouteResponseSingle(data = nil)
    require_relative 'entity/tunnel_hostname_route_response_single_entity'
    TunnelHostnameRouteResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TunnelMeshConfigurationResponseSingle.list / client.TunnelMeshConfigurationResponseSingle.load({ "id" => ... })
  def TunnelMeshConfigurationResponseSingle(data = nil)
    require_relative 'entity/tunnel_mesh_configuration_response_single_entity'
    TunnelMeshConfigurationResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TunnelRouteResponseSingle.list / client.TunnelRouteResponseSingle.load({ "id" => ... })
  def TunnelRouteResponseSingle(data = nil)
    require_relative 'entity/tunnel_route_response_single_entity'
    TunnelRouteResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TunnelSubnetResponseCollection.list / client.TunnelSubnetResponseCollection.load({ "id" => ... })
  def TunnelSubnetResponseCollection(data = nil)
    require_relative 'entity/tunnel_subnet_response_collection_entity'
    TunnelSubnetResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TunnelSubnetResponseSingle.list / client.TunnelSubnetResponseSingle.load({ "id" => ... })
  def TunnelSubnetResponseSingle(data = nil)
    require_relative 'entity/tunnel_subnet_response_single_entity'
    TunnelSubnetResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TunnelSubnetResponseSingleNullable.list / client.TunnelSubnetResponseSingleNullable.load({ "id" => ... })
  def TunnelSubnetResponseSingleNullable(data = nil)
    require_relative 'entity/tunnel_subnet_response_single_nullable_entity'
    TunnelSubnetResponseSingleNullableEntity.new(self, data)
  end


  # Canonical facade: client.TunnelTeamnetResponseCollection.list / client.TunnelTeamnetResponseCollection.load({ "id" => ... })
  def TunnelTeamnetResponseCollection(data = nil)
    require_relative 'entity/tunnel_teamnet_response_collection_entity'
    TunnelTeamnetResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TunnelTeamnetResponseSingle.list / client.TunnelTeamnetResponseSingle.load({ "id" => ... })
  def TunnelTeamnetResponseSingle(data = nil)
    require_relative 'entity/tunnel_teamnet_response_single_entity'
    TunnelTeamnetResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TunnelTunnelClient.list / client.TunnelTunnelClient.load({ "id" => ... })
  def TunnelTunnelClient(data = nil)
    require_relative 'entity/tunnel_tunnel_client_entity'
    TunnelTunnelClientEntity.new(self, data)
  end


  # Canonical facade: client.TunnelTunnelConnection.list / client.TunnelTunnelConnection.load({ "id" => ... })
  def TunnelTunnelConnection(data = nil)
    require_relative 'entity/tunnel_tunnel_connection_entity'
    TunnelTunnelConnectionEntity.new(self, data)
  end


  # Canonical facade: client.TunnelTunnelResponseToken.list / client.TunnelTunnelResponseToken.load({ "id" => ... })
  def TunnelTunnelResponseToken(data = nil)
    require_relative 'entity/tunnel_tunnel_response_token_entity'
    TunnelTunnelResponseTokenEntity.new(self, data)
  end


  # Canonical facade: client.TunnelTunnelWarpConnectorClient.list / client.TunnelTunnelWarpConnectorClient.load({ "id" => ... })
  def TunnelTunnelWarpConnectorClient(data = nil)
    require_relative 'entity/tunnel_tunnel_warp_connector_client_entity'
    TunnelTunnelWarpConnectorClientEntity.new(self, data)
  end


  # Canonical facade: client.TunnelTunnelWarpConnectorConnection.list / client.TunnelTunnelWarpConnectorConnection.load({ "id" => ... })
  def TunnelTunnelWarpConnectorConnection(data = nil)
    require_relative 'entity/tunnel_tunnel_warp_connector_connection_entity'
    TunnelTunnelWarpConnectorConnectionEntity.new(self, data)
  end


  # Canonical facade: client.TunnelVnetResponseCollection.list / client.TunnelVnetResponseCollection.load({ "id" => ... })
  def TunnelVnetResponseCollection(data = nil)
    require_relative 'entity/tunnel_vnet_response_collection_entity'
    TunnelVnetResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TunnelVnetResponseSingle.list / client.TunnelVnetResponseSingle.load({ "id" => ... })
  def TunnelVnetResponseSingle(data = nil)
    require_relative 'entity/tunnel_vnet_response_single_entity'
    TunnelVnetResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TunnelWarpConnectorResponseCollection.list / client.TunnelWarpConnectorResponseCollection.load({ "id" => ... })
  def TunnelWarpConnectorResponseCollection(data = nil)
    require_relative 'entity/tunnel_warp_connector_response_collection_entity'
    TunnelWarpConnectorResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TunnelWarpConnectorResponseSingle.list / client.TunnelWarpConnectorResponseSingle.load({ "id" => ... })
  def TunnelWarpConnectorResponseSingle(data = nil)
    require_relative 'entity/tunnel_warp_connector_response_single_entity'
    TunnelWarpConnectorResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TunnelZeroTrustConnectivitySetting.list / client.TunnelZeroTrustConnectivitySetting.load({ "id" => ... })
  def TunnelZeroTrustConnectivitySetting(data = nil)
    require_relative 'entity/tunnel_zero_trust_connectivity_setting_entity'
    TunnelZeroTrustConnectivitySettingEntity.new(self, data)
  end


  # Canonical facade: client.Warp.list / client.Warp.load({ "id" => ... })
  def Warp(data = nil)
    require_relative 'entity/warp_entity'
    WarpEntity.new(self, data)
  end


  # Canonical facade: client.WarpChangeEvent.list / client.WarpChangeEvent.load({ "id" => ... })
  def WarpChangeEvent(data = nil)
    require_relative 'entity/warp_change_event_entity'
    WarpChangeEventEntity.new(self, data)
  end


  # Canonical facade: client.WarpTeamsDeviceApiOther.list / client.WarpTeamsDeviceApiOther.load({ "id" => ... })
  def WarpTeamsDeviceApiOther(data = nil)
    require_relative 'entity/warp_teams_device_api_other_entity'
    WarpTeamsDeviceApiOtherEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayApplicationsReviewStatus.list / client.ZeroTrustGatewayApplicationsReviewStatus.load({ "id" => ... })
  def ZeroTrustGatewayApplicationsReviewStatus(data = nil)
    require_relative 'entity/zero_trust_gateway_applications_review_status_entity'
    ZeroTrustGatewayApplicationsReviewStatusEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayCsvOperationSingle.list / client.ZeroTrustGatewayCsvOperationSingle.load({ "id" => ... })
  def ZeroTrustGatewayCsvOperationSingle(data = nil)
    require_relative 'entity/zero_trust_gateway_csv_operation_single_entity'
    ZeroTrustGatewayCsvOperationSingleEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayCustomCertificateSetting.list / client.ZeroTrustGatewayCustomCertificateSetting.load({ "id" => ... })
  def ZeroTrustGatewayCustomCertificateSetting(data = nil)
    require_relative 'entity/zero_trust_gateway_custom_certificate_setting_entity'
    ZeroTrustGatewayCustomCertificateSettingEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayGatewayAccount.list / client.ZeroTrustGatewayGatewayAccount.load({ "id" => ... })
  def ZeroTrustGatewayGatewayAccount(data = nil)
    require_relative 'entity/zero_trust_gateway_gateway_account_entity'
    ZeroTrustGatewayGatewayAccountEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayGatewayAccountConfig.list / client.ZeroTrustGatewayGatewayAccountConfig.load({ "id" => ... })
  def ZeroTrustGatewayGatewayAccountConfig(data = nil)
    require_relative 'entity/zero_trust_gateway_gateway_account_config_entity'
    ZeroTrustGatewayGatewayAccountConfigEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayGatewayAccountEgressCidrPairList.list / client.ZeroTrustGatewayGatewayAccountEgressCidrPairList.load({ "id" => ... })
  def ZeroTrustGatewayGatewayAccountEgressCidrPairList(data = nil)
    require_relative 'entity/zero_trust_gateway_gateway_account_egress_cidr_pair_list_entity'
    ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayGatewayAccountLoggingSetting.list / client.ZeroTrustGatewayGatewayAccountLoggingSetting.load({ "id" => ... })
  def ZeroTrustGatewayGatewayAccountLoggingSetting(data = nil)
    require_relative 'entity/zero_trust_gateway_gateway_account_logging_setting_entity'
    ZeroTrustGatewayGatewayAccountLoggingSettingEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayListItemResponseCollection.list / client.ZeroTrustGatewayListItemResponseCollection.load({ "id" => ... })
  def ZeroTrustGatewayListItemResponseCollection(data = nil)
    require_relative 'entity/zero_trust_gateway_list_item_response_collection_entity'
    ZeroTrustGatewayListItemResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayListSingle.list / client.ZeroTrustGatewayListSingle.load({ "id" => ... })
  def ZeroTrustGatewayListSingle(data = nil)
    require_relative 'entity/zero_trust_gateway_list_single_entity'
    ZeroTrustGatewayListSingleEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayResponseCollection.list / client.ZeroTrustGatewayResponseCollection.load({ "id" => ... })
  def ZeroTrustGatewayResponseCollection(data = nil)
    require_relative 'entity/zero_trust_gateway_response_collection_entity'
    ZeroTrustGatewayResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayResponseCollection10.list / client.ZeroTrustGatewayResponseCollection10.load({ "id" => ... })
  def ZeroTrustGatewayResponseCollection10(data = nil)
    require_relative 'entity/zero_trust_gateway_response_collection_10_entity'
    ZeroTrustGatewayResponseCollection10Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayResponseCollection2.list / client.ZeroTrustGatewayResponseCollection2.load({ "id" => ... })
  def ZeroTrustGatewayResponseCollection2(data = nil)
    require_relative 'entity/zero_trust_gateway_response_collection_2_entity'
    ZeroTrustGatewayResponseCollection2Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayResponseCollection3.list / client.ZeroTrustGatewayResponseCollection3.load({ "id" => ... })
  def ZeroTrustGatewayResponseCollection3(data = nil)
    require_relative 'entity/zero_trust_gateway_response_collection_3_entity'
    ZeroTrustGatewayResponseCollection3Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayResponseCollection4.list / client.ZeroTrustGatewayResponseCollection4.load({ "id" => ... })
  def ZeroTrustGatewayResponseCollection4(data = nil)
    require_relative 'entity/zero_trust_gateway_response_collection_4_entity'
    ZeroTrustGatewayResponseCollection4Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayResponseCollection5.list / client.ZeroTrustGatewayResponseCollection5.load({ "id" => ... })
  def ZeroTrustGatewayResponseCollection5(data = nil)
    require_relative 'entity/zero_trust_gateway_response_collection_5_entity'
    ZeroTrustGatewayResponseCollection5Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayResponseCollection6.list / client.ZeroTrustGatewayResponseCollection6.load({ "id" => ... })
  def ZeroTrustGatewayResponseCollection6(data = nil)
    require_relative 'entity/zero_trust_gateway_response_collection_6_entity'
    ZeroTrustGatewayResponseCollection6Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayResponseCollection7.list / client.ZeroTrustGatewayResponseCollection7.load({ "id" => ... })
  def ZeroTrustGatewayResponseCollection7(data = nil)
    require_relative 'entity/zero_trust_gateway_response_collection_7_entity'
    ZeroTrustGatewayResponseCollection7Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayResponseCollection8.list / client.ZeroTrustGatewayResponseCollection8.load({ "id" => ... })
  def ZeroTrustGatewayResponseCollection8(data = nil)
    require_relative 'entity/zero_trust_gateway_response_collection_8_entity'
    ZeroTrustGatewayResponseCollection8Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewayResponseCollection9.list / client.ZeroTrustGatewayResponseCollection9.load({ "id" => ... })
  def ZeroTrustGatewayResponseCollection9(data = nil)
    require_relative 'entity/zero_trust_gateway_response_collection_9_entity'
    ZeroTrustGatewayResponseCollection9Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewaySingle.list / client.ZeroTrustGatewaySingle.load({ "id" => ... })
  def ZeroTrustGatewaySingle(data = nil)
    require_relative 'entity/zero_trust_gateway_single_entity'
    ZeroTrustGatewaySingleEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewaySingleResponse2.list / client.ZeroTrustGatewaySingleResponse2.load({ "id" => ... })
  def ZeroTrustGatewaySingleResponse2(data = nil)
    require_relative 'entity/zero_trust_gateway_single_response_2_entity'
    ZeroTrustGatewaySingleResponse2Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewaySingleResponse3.list / client.ZeroTrustGatewaySingleResponse3.load({ "id" => ... })
  def ZeroTrustGatewaySingleResponse3(data = nil)
    require_relative 'entity/zero_trust_gateway_single_response_3_entity'
    ZeroTrustGatewaySingleResponse3Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewaySingleResponse4.list / client.ZeroTrustGatewaySingleResponse4.load({ "id" => ... })
  def ZeroTrustGatewaySingleResponse4(data = nil)
    require_relative 'entity/zero_trust_gateway_single_response_4_entity'
    ZeroTrustGatewaySingleResponse4Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewaySingleResponse5.list / client.ZeroTrustGatewaySingleResponse5.load({ "id" => ... })
  def ZeroTrustGatewaySingleResponse5(data = nil)
    require_relative 'entity/zero_trust_gateway_single_response_5_entity'
    ZeroTrustGatewaySingleResponse5Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewaySingleResponse6.list / client.ZeroTrustGatewaySingleResponse6.load({ "id" => ... })
  def ZeroTrustGatewaySingleResponse6(data = nil)
    require_relative 'entity/zero_trust_gateway_single_response_6_entity'
    ZeroTrustGatewaySingleResponse6Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewaySingleResponse7.list / client.ZeroTrustGatewaySingleResponse7.load({ "id" => ... })
  def ZeroTrustGatewaySingleResponse7(data = nil)
    require_relative 'entity/zero_trust_gateway_single_response_7_entity'
    ZeroTrustGatewaySingleResponse7Entity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustGatewaySingleResponseWithListItem.list / client.ZeroTrustGatewaySingleResponseWithListItem.load({ "id" => ... })
  def ZeroTrustGatewaySingleResponseWithListItem(data = nil)
    require_relative 'entity/zero_trust_gateway_single_response_with_list_item_entity'
    ZeroTrustGatewaySingleResponseWithListItemEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustRiskScoring.list / client.ZeroTrustRiskScoring.load({ "id" => ... })
  def ZeroTrustRiskScoring(data = nil)
    require_relative 'entity/zero_trust_risk_scoring_entity'
    ZeroTrustRiskScoringEntity.new(self, data)
  end


  # Canonical facade: client.ZeroTrustRiskScoringIntegration.list / client.ZeroTrustRiskScoringIntegration.load({ "id" => ... })
  def ZeroTrustRiskScoringIntegration(data = nil)
    require_relative 'entity/zero_trust_risk_scoring_integration_entity'
    ZeroTrustRiskScoringIntegrationEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = CloudflareZeroTrustSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
