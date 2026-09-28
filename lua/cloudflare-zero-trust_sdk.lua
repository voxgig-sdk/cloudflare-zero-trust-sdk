-- CloudflareZeroTrust SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("cloudflare-zero-trust_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CloudflareZeroTrustSDK = {}
CloudflareZeroTrustSDK.__index = CloudflareZeroTrustSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CloudflareZeroTrustSDK._make_feature = _make_feature


function CloudflareZeroTrustSDK.new(options)
  local self = setmetatable({}, CloudflareZeroTrustSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function CloudflareZeroTrustSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CloudflareZeroTrustSDK:get_utility()
  return Utility.copy(self._utility)
end


function CloudflareZeroTrustSDK:get_root_ctx()
  return self._rootctx
end


function CloudflareZeroTrustSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CloudflareZeroTrustSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CloudflareZeroTrustSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function CloudflareZeroTrustSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CloudflareZeroTrustSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CloudflareZeroTrustSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CloudflareZeroTrustSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CloudflareZeroTrustSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:ClientVersion():list() / client:ClientVersion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ClientVersion(data)
  local EntityMod = require("entity.client_version_entity")
  if data == nil then
    if self._client_version == nil then
      self._client_version = EntityMod.new(self, nil)
    end
    return self._client_version
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Cni():list() / client:Cni():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:Cni(data)
  local EntityMod = require("entity.cni_entity")
  if data == nil then
    if self._cni == nil then
      self._cni = EntityMod.new(self, nil)
    end
    return self._cni
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DeploymentGroup():list() / client:DeploymentGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:DeploymentGroup(data)
  local EntityMod = require("entity.deployment_group_entity")
  if data == nil then
    if self._deployment_group == nil then
      self._deployment_group = EntityMod.new(self, nil)
    end
    return self._deployment_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DexRemoteCommand():list() / client:DexRemoteCommand():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:DexRemoteCommand(data)
  local EntityMod = require("entity.dex_remote_command_entity")
  if data == nil then
    if self._dex_remote_command == nil then
      self._dex_remote_command = EntityMod.new(self, nil)
    end
    return self._dex_remote_command
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DexRule():list() / client:DexRule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:DexRule(data)
  local EntityMod = require("entity.dex_rule_entity")
  if data == nil then
    if self._dex_rule == nil then
      self._dex_rule = EntityMod.new(self, nil)
    end
    return self._dex_rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DexSyntheticApplicationMonitoring():list() / client:DexSyntheticApplicationMonitoring():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:DexSyntheticApplicationMonitoring(data)
  local EntityMod = require("entity.dex_synthetic_application_monitoring_entity")
  if data == nil then
    if self._dex_synthetic_application_monitoring == nil then
      self._dex_synthetic_application_monitoring = EntityMod.new(self, nil)
    end
    return self._dex_synthetic_application_monitoring
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DigitalExperienceMonitoringDevice():list() / client:DigitalExperienceMonitoringDevice():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:DigitalExperienceMonitoringDevice(data)
  local EntityMod = require("entity.digital_experience_monitoring_device_entity")
  if data == nil then
    if self._digital_experience_monitoring_device == nil then
      self._digital_experience_monitoring_device = EntityMod.new(self, nil)
    end
    return self._digital_experience_monitoring_device
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DigitalExperienceMonitoringDexDeleteResponseCollection():list() / client:DigitalExperienceMonitoringDexDeleteResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:DigitalExperienceMonitoringDexDeleteResponseCollection(data)
  local EntityMod = require("entity.digital_experience_monitoring_dex_delete_response_collection_entity")
  if data == nil then
    if self._digital_experience_monitoring_dex_delete_response_collection == nil then
      self._digital_experience_monitoring_dex_delete_response_collection = EntityMod.new(self, nil)
    end
    return self._digital_experience_monitoring_dex_delete_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DigitalExperienceMonitoringDexResponseCollection():list() / client:DigitalExperienceMonitoringDexResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:DigitalExperienceMonitoringDexResponseCollection(data)
  local EntityMod = require("entity.digital_experience_monitoring_dex_response_collection_entity")
  if data == nil then
    if self._digital_experience_monitoring_dex_response_collection == nil then
      self._digital_experience_monitoring_dex_response_collection = EntityMod.new(self, nil)
    end
    return self._digital_experience_monitoring_dex_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DigitalExperienceMonitoringDexSingle():list() / client:DigitalExperienceMonitoringDexSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:DigitalExperienceMonitoringDexSingle(data)
  local EntityMod = require("entity.digital_experience_monitoring_dex_single_entity")
  if data == nil then
    if self._digital_experience_monitoring_dex_single == nil then
      self._digital_experience_monitoring_dex_single = EntityMod.new(self, nil)
    end
    return self._digital_experience_monitoring_dex_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DigitalExperienceMonitoringFleetStatusDevice():list() / client:DigitalExperienceMonitoringFleetStatusDevice():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:DigitalExperienceMonitoringFleetStatusDevice(data)
  local EntityMod = require("entity.digital_experience_monitoring_fleet_status_device_entity")
  if data == nil then
    if self._digital_experience_monitoring_fleet_status_device == nil then
      self._digital_experience_monitoring_fleet_status_device = EntityMod.new(self, nil)
    end
    return self._digital_experience_monitoring_fleet_status_device
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DigitalExperienceMonitoringFleetStatusLive():list() / client:DigitalExperienceMonitoringFleetStatusLive():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:DigitalExperienceMonitoringFleetStatusLive(data)
  local EntityMod = require("entity.digital_experience_monitoring_fleet_status_live_entity")
  if data == nil then
    if self._digital_experience_monitoring_fleet_status_live == nil then
      self._digital_experience_monitoring_fleet_status_live = EntityMod.new(self, nil)
    end
    return self._digital_experience_monitoring_fleet_status_live
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DigitalExperienceMonitoringFleetStatusOverTime():list() / client:DigitalExperienceMonitoringFleetStatusOverTime():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:DigitalExperienceMonitoringFleetStatusOverTime(data)
  local EntityMod = require("entity.digital_experience_monitoring_fleet_status_over_time_entity")
  if data == nil then
    if self._digital_experience_monitoring_fleet_status_over_time == nil then
      self._digital_experience_monitoring_fleet_status_over_time = EntityMod.new(self, nil)
    end
    return self._digital_experience_monitoring_fleet_status_over_time
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Interconnect():list() / client:Interconnect():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:Interconnect(data)
  local EntityMod = require("entity.interconnect_entity")
  if data == nil then
    if self._interconnect == nil then
      self._interconnect = EntityMod.new(self, nil)
    end
    return self._interconnect
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IpProfile():list() / client:IpProfile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:IpProfile(data)
  local EntityMod = require("entity.ip_profile_entity")
  if data == nil then
    if self._ip_profile == nil then
      self._ip_profile = EntityMod.new(self, nil)
    end
    return self._ip_profile
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:List():list() / client:List():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:List(data)
  local EntityMod = require("entity.list_entity")
  if data == nil then
    if self._list == nil then
      self._list = EntityMod.new(self, nil)
    end
    return self._list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Location():list() / client:Location():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:Location(data)
  local EntityMod = require("entity.location_entity")
  if data == nil then
    if self._location == nil then
      self._location = EntityMod.new(self, nil)
    end
    return self._location
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NscCni():list() / client:NscCni():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:NscCni(data)
  local EntityMod = require("entity.nsc_cni_entity")
  if data == nil then
    if self._nsc_cni == nil then
      self._nsc_cni = EntityMod.new(self, nil)
    end
    return self._nsc_cni
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NscDefaultName():list() / client:NscDefaultName():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:NscDefaultName(data)
  local EntityMod = require("entity.nsc_default_name_entity")
  if data == nil then
    if self._nsc_default_name == nil then
      self._nsc_default_name = EntityMod.new(self, nil)
    end
    return self._nsc_default_name
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NscInterconnect():list() / client:NscInterconnect():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:NscInterconnect(data)
  local EntityMod = require("entity.nsc_interconnect_entity")
  if data == nil then
    if self._nsc_interconnect == nil then
      self._nsc_interconnect = EntityMod.new(self, nil)
    end
    return self._nsc_interconnect
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NscSetting():list() / client:NscSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:NscSetting(data)
  local EntityMod = require("entity.nsc_setting_entity")
  if data == nil then
    if self._nsc_setting == nil then
      self._nsc_setting = EntityMod.new(self, nil)
    end
    return self._nsc_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NscSlotInfo():list() / client:NscSlotInfo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:NscSlotInfo(data)
  local EntityMod = require("entity.nsc_slot_info_entity")
  if data == nil then
    if self._nsc_slot_info == nil then
      self._nsc_slot_info = EntityMod.new(self, nil)
    end
    return self._nsc_slot_info
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NscStatusInfo():list() / client:NscStatusInfo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:NscStatusInfo(data)
  local EntityMod = require("entity.nsc_status_info_entity")
  if data == nil then
    if self._nsc_status_info == nil then
      self._nsc_status_info = EntityMod.new(self, nil)
    end
    return self._nsc_status_info
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OverrideCode():list() / client:OverrideCode():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:OverrideCode(data)
  local EntityMod = require("entity.override_code_entity")
  if data == nil then
    if self._override_code == nil then
      self._override_code = EntityMod.new(self, nil)
    end
    return self._override_code
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Pacfile():list() / client:Pacfile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:Pacfile(data)
  local EntityMod = require("entity.pacfile_entity")
  if data == nil then
    if self._pacfile == nil then
      self._pacfile = EntityMod.new(self, nil)
    end
    return self._pacfile
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PhysicalDevice():list() / client:PhysicalDevice():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:PhysicalDevice(data)
  local EntityMod = require("entity.physical_device_entity")
  if data == nil then
    if self._physical_device == nil then
      self._physical_device = EntityMod.new(self, nil)
    end
    return self._physical_device
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProxyEndpoint():list() / client:ProxyEndpoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ProxyEndpoint(data)
  local EntityMod = require("entity.proxy_endpoint_entity")
  if data == nil then
    if self._proxy_endpoint == nil then
      self._proxy_endpoint = EntityMod.new(self, nil)
    end
    return self._proxy_endpoint
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Registration():list() / client:Registration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:Registration(data)
  local EntityMod = require("entity.registration_entity")
  if data == nil then
    if self._registration == nil then
      self._registration = EntityMod.new(self, nil)
    end
    return self._registration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Rule():list() / client:Rule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:Rule(data)
  local EntityMod = require("entity.rule_entity")
  if data == nil then
    if self._rule == nil then
      self._rule = EntityMod.new(self, nil)
    end
    return self._rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesApiResponseSingle():list() / client:TeamsDevicesApiResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesApiResponseSingle(data)
  local EntityMod = require("entity.teams_devices_api_response_single_entity")
  if data == nil then
    if self._teams_devices_api_response_single == nil then
      self._teams_devices_api_response_single = EntityMod.new(self, nil)
    end
    return self._teams_devices_api_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesComponentsSchemasResponseCollection():list() / client:TeamsDevicesComponentsSchemasResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesComponentsSchemasResponseCollection(data)
  local EntityMod = require("entity.teams_devices_components_schemas_response_collection_entity")
  if data == nil then
    if self._teams_devices_components_schemas_response_collection == nil then
      self._teams_devices_components_schemas_response_collection = EntityMod.new(self, nil)
    end
    return self._teams_devices_components_schemas_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesComponentsSchemasSingle():list() / client:TeamsDevicesComponentsSchemasSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesComponentsSchemasSingle(data)
  local EntityMod = require("entity.teams_devices_components_schemas_single_entity")
  if data == nil then
    if self._teams_devices_components_schemas_single == nil then
      self._teams_devices_components_schemas_single = EntityMod.new(self, nil)
    end
    return self._teams_devices_components_schemas_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesDefaultDeviceSetting():list() / client:TeamsDevicesDefaultDeviceSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesDefaultDeviceSetting(data)
  local EntityMod = require("entity.teams_devices_default_device_setting_entity")
  if data == nil then
    if self._teams_devices_default_device_setting == nil then
      self._teams_devices_default_device_setting = EntityMod.new(self, nil)
    end
    return self._teams_devices_default_device_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesDevice():list() / client:TeamsDevicesDevice():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesDevice(data)
  local EntityMod = require("entity.teams_devices_device_entity")
  if data == nil then
    if self._teams_devices_device == nil then
      self._teams_devices_device = EntityMod.new(self, nil)
    end
    return self._teams_devices_device
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesDeviceSetting():list() / client:TeamsDevicesDeviceSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesDeviceSetting(data)
  local EntityMod = require("entity.teams_devices_device_setting_entity")
  if data == nil then
    if self._teams_devices_device_setting == nil then
      self._teams_devices_device_setting = EntityMod.new(self, nil)
    end
    return self._teams_devices_device_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesDeviceSettingsResponseCollection():list() / client:TeamsDevicesDeviceSettingsResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesDeviceSettingsResponseCollection(data)
  local EntityMod = require("entity.teams_devices_device_settings_response_collection_entity")
  if data == nil then
    if self._teams_devices_device_settings_response_collection == nil then
      self._teams_devices_device_settings_response_collection = EntityMod.new(self, nil)
    end
    return self._teams_devices_device_settings_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesFallbackDomainResponseCollection():list() / client:TeamsDevicesFallbackDomainResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesFallbackDomainResponseCollection(data)
  local EntityMod = require("entity.teams_devices_fallback_domain_response_collection_entity")
  if data == nil then
    if self._teams_devices_fallback_domain_response_collection == nil then
      self._teams_devices_fallback_domain_response_collection = EntityMod.new(self, nil)
    end
    return self._teams_devices_fallback_domain_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesGlobalWarpOverride():list() / client:TeamsDevicesGlobalWarpOverride():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesGlobalWarpOverride(data)
  local EntityMod = require("entity.teams_devices_global_warp_override_entity")
  if data == nil then
    if self._teams_devices_global_warp_override == nil then
      self._teams_devices_global_warp_override = EntityMod.new(self, nil)
    end
    return self._teams_devices_global_warp_override
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesId():list() / client:TeamsDevicesId():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesId(data)
  local EntityMod = require("entity.teams_devices_id_entity")
  if data == nil then
    if self._teams_devices_id == nil then
      self._teams_devices_id = EntityMod.new(self, nil)
    end
    return self._teams_devices_id
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesOverrideCode():list() / client:TeamsDevicesOverrideCode():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesOverrideCode(data)
  local EntityMod = require("entity.teams_devices_override_code_entity")
  if data == nil then
    if self._teams_devices_override_code == nil then
      self._teams_devices_override_code = EntityMod.new(self, nil)
    end
    return self._teams_devices_override_code
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesResponseCollection():list() / client:TeamsDevicesResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesResponseCollection(data)
  local EntityMod = require("entity.teams_devices_response_collection_entity")
  if data == nil then
    if self._teams_devices_response_collection == nil then
      self._teams_devices_response_collection = EntityMod.new(self, nil)
    end
    return self._teams_devices_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesSchemasId():list() / client:TeamsDevicesSchemasId():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesSchemasId(data)
  local EntityMod = require("entity.teams_devices_schemas_id_entity")
  if data == nil then
    if self._teams_devices_schemas_id == nil then
      self._teams_devices_schemas_id = EntityMod.new(self, nil)
    end
    return self._teams_devices_schemas_id
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesSchemasResponseCollection():list() / client:TeamsDevicesSchemasResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesSchemasResponseCollection(data)
  local EntityMod = require("entity.teams_devices_schemas_response_collection_entity")
  if data == nil then
    if self._teams_devices_schemas_response_collection == nil then
      self._teams_devices_schemas_response_collection = EntityMod.new(self, nil)
    end
    return self._teams_devices_schemas_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesSchemasSingle():list() / client:TeamsDevicesSchemasSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesSchemasSingle(data)
  local EntityMod = require("entity.teams_devices_schemas_single_entity")
  if data == nil then
    if self._teams_devices_schemas_single == nil then
      self._teams_devices_schemas_single = EntityMod.new(self, nil)
    end
    return self._teams_devices_schemas_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesSingle():list() / client:TeamsDevicesSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesSingle(data)
  local EntityMod = require("entity.teams_devices_single_entity")
  if data == nil then
    if self._teams_devices_single == nil then
      self._teams_devices_single = EntityMod.new(self, nil)
    end
    return self._teams_devices_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesSplitTunnelIncludeResponseCollection():list() / client:TeamsDevicesSplitTunnelIncludeResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesSplitTunnelIncludeResponseCollection(data)
  local EntityMod = require("entity.teams_devices_split_tunnel_include_response_collection_entity")
  if data == nil then
    if self._teams_devices_split_tunnel_include_response_collection == nil then
      self._teams_devices_split_tunnel_include_response_collection = EntityMod.new(self, nil)
    end
    return self._teams_devices_split_tunnel_include_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesSplitTunnelResponseCollection():list() / client:TeamsDevicesSplitTunnelResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesSplitTunnelResponseCollection(data)
  local EntityMod = require("entity.teams_devices_split_tunnel_response_collection_entity")
  if data == nil then
    if self._teams_devices_split_tunnel_response_collection == nil then
      self._teams_devices_split_tunnel_response_collection = EntityMod.new(self, nil)
    end
    return self._teams_devices_split_tunnel_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TeamsDevicesZeroTrustAccountDeviceSetting():list() / client:TeamsDevicesZeroTrustAccountDeviceSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TeamsDevicesZeroTrustAccountDeviceSetting(data)
  local EntityMod = require("entity.teams_devices_zero_trust_account_device_setting_entity")
  if data == nil then
    if self._teams_devices_zero_trust_account_device_setting == nil then
      self._teams_devices_zero_trust_account_device_setting = EntityMod.new(self, nil)
    end
    return self._teams_devices_zero_trust_account_device_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Tunnel():list() / client:Tunnel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:Tunnel(data)
  local EntityMod = require("entity.tunnel_entity")
  if data == nil then
    if self._tunnel == nil then
      self._tunnel = EntityMod.new(self, nil)
    end
    return self._tunnel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelCfdTunnelResponseCollection():list() / client:TunnelCfdTunnelResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelCfdTunnelResponseCollection(data)
  local EntityMod = require("entity.tunnel_cfd_tunnel_response_collection_entity")
  if data == nil then
    if self._tunnel_cfd_tunnel_response_collection == nil then
      self._tunnel_cfd_tunnel_response_collection = EntityMod.new(self, nil)
    end
    return self._tunnel_cfd_tunnel_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelCfdTunnelResponseSingle():list() / client:TunnelCfdTunnelResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelCfdTunnelResponseSingle(data)
  local EntityMod = require("entity.tunnel_cfd_tunnel_response_single_entity")
  if data == nil then
    if self._tunnel_cfd_tunnel_response_single == nil then
      self._tunnel_cfd_tunnel_response_single = EntityMod.new(self, nil)
    end
    return self._tunnel_cfd_tunnel_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelConfiguration():list() / client:TunnelConfiguration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelConfiguration(data)
  local EntityMod = require("entity.tunnel_configuration_entity")
  if data == nil then
    if self._tunnel_configuration == nil then
      self._tunnel_configuration = EntityMod.new(self, nil)
    end
    return self._tunnel_configuration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelEmpty():list() / client:TunnelEmpty():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelEmpty(data)
  local EntityMod = require("entity.tunnel_empty_entity")
  if data == nil then
    if self._tunnel_empty == nil then
      self._tunnel_empty = EntityMod.new(self, nil)
    end
    return self._tunnel_empty
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelHostnameRouteResponseCollection():list() / client:TunnelHostnameRouteResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelHostnameRouteResponseCollection(data)
  local EntityMod = require("entity.tunnel_hostname_route_response_collection_entity")
  if data == nil then
    if self._tunnel_hostname_route_response_collection == nil then
      self._tunnel_hostname_route_response_collection = EntityMod.new(self, nil)
    end
    return self._tunnel_hostname_route_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelHostnameRouteResponseSingle():list() / client:TunnelHostnameRouteResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelHostnameRouteResponseSingle(data)
  local EntityMod = require("entity.tunnel_hostname_route_response_single_entity")
  if data == nil then
    if self._tunnel_hostname_route_response_single == nil then
      self._tunnel_hostname_route_response_single = EntityMod.new(self, nil)
    end
    return self._tunnel_hostname_route_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelMeshConfigurationResponseSingle():list() / client:TunnelMeshConfigurationResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelMeshConfigurationResponseSingle(data)
  local EntityMod = require("entity.tunnel_mesh_configuration_response_single_entity")
  if data == nil then
    if self._tunnel_mesh_configuration_response_single == nil then
      self._tunnel_mesh_configuration_response_single = EntityMod.new(self, nil)
    end
    return self._tunnel_mesh_configuration_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelRouteResponseSingle():list() / client:TunnelRouteResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelRouteResponseSingle(data)
  local EntityMod = require("entity.tunnel_route_response_single_entity")
  if data == nil then
    if self._tunnel_route_response_single == nil then
      self._tunnel_route_response_single = EntityMod.new(self, nil)
    end
    return self._tunnel_route_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelSubnetResponseCollection():list() / client:TunnelSubnetResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelSubnetResponseCollection(data)
  local EntityMod = require("entity.tunnel_subnet_response_collection_entity")
  if data == nil then
    if self._tunnel_subnet_response_collection == nil then
      self._tunnel_subnet_response_collection = EntityMod.new(self, nil)
    end
    return self._tunnel_subnet_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelSubnetResponseSingle():list() / client:TunnelSubnetResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelSubnetResponseSingle(data)
  local EntityMod = require("entity.tunnel_subnet_response_single_entity")
  if data == nil then
    if self._tunnel_subnet_response_single == nil then
      self._tunnel_subnet_response_single = EntityMod.new(self, nil)
    end
    return self._tunnel_subnet_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelSubnetResponseSingleNullable():list() / client:TunnelSubnetResponseSingleNullable():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelSubnetResponseSingleNullable(data)
  local EntityMod = require("entity.tunnel_subnet_response_single_nullable_entity")
  if data == nil then
    if self._tunnel_subnet_response_single_nullable == nil then
      self._tunnel_subnet_response_single_nullable = EntityMod.new(self, nil)
    end
    return self._tunnel_subnet_response_single_nullable
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelTeamnetResponseCollection():list() / client:TunnelTeamnetResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelTeamnetResponseCollection(data)
  local EntityMod = require("entity.tunnel_teamnet_response_collection_entity")
  if data == nil then
    if self._tunnel_teamnet_response_collection == nil then
      self._tunnel_teamnet_response_collection = EntityMod.new(self, nil)
    end
    return self._tunnel_teamnet_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelTeamnetResponseSingle():list() / client:TunnelTeamnetResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelTeamnetResponseSingle(data)
  local EntityMod = require("entity.tunnel_teamnet_response_single_entity")
  if data == nil then
    if self._tunnel_teamnet_response_single == nil then
      self._tunnel_teamnet_response_single = EntityMod.new(self, nil)
    end
    return self._tunnel_teamnet_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelTunnelClient():list() / client:TunnelTunnelClient():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelTunnelClient(data)
  local EntityMod = require("entity.tunnel_tunnel_client_entity")
  if data == nil then
    if self._tunnel_tunnel_client == nil then
      self._tunnel_tunnel_client = EntityMod.new(self, nil)
    end
    return self._tunnel_tunnel_client
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelTunnelConnection():list() / client:TunnelTunnelConnection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelTunnelConnection(data)
  local EntityMod = require("entity.tunnel_tunnel_connection_entity")
  if data == nil then
    if self._tunnel_tunnel_connection == nil then
      self._tunnel_tunnel_connection = EntityMod.new(self, nil)
    end
    return self._tunnel_tunnel_connection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelTunnelResponseToken():list() / client:TunnelTunnelResponseToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelTunnelResponseToken(data)
  local EntityMod = require("entity.tunnel_tunnel_response_token_entity")
  if data == nil then
    if self._tunnel_tunnel_response_token == nil then
      self._tunnel_tunnel_response_token = EntityMod.new(self, nil)
    end
    return self._tunnel_tunnel_response_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelTunnelWarpConnectorClient():list() / client:TunnelTunnelWarpConnectorClient():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelTunnelWarpConnectorClient(data)
  local EntityMod = require("entity.tunnel_tunnel_warp_connector_client_entity")
  if data == nil then
    if self._tunnel_tunnel_warp_connector_client == nil then
      self._tunnel_tunnel_warp_connector_client = EntityMod.new(self, nil)
    end
    return self._tunnel_tunnel_warp_connector_client
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelTunnelWarpConnectorConnection():list() / client:TunnelTunnelWarpConnectorConnection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelTunnelWarpConnectorConnection(data)
  local EntityMod = require("entity.tunnel_tunnel_warp_connector_connection_entity")
  if data == nil then
    if self._tunnel_tunnel_warp_connector_connection == nil then
      self._tunnel_tunnel_warp_connector_connection = EntityMod.new(self, nil)
    end
    return self._tunnel_tunnel_warp_connector_connection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelVnetResponseCollection():list() / client:TunnelVnetResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelVnetResponseCollection(data)
  local EntityMod = require("entity.tunnel_vnet_response_collection_entity")
  if data == nil then
    if self._tunnel_vnet_response_collection == nil then
      self._tunnel_vnet_response_collection = EntityMod.new(self, nil)
    end
    return self._tunnel_vnet_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelVnetResponseSingle():list() / client:TunnelVnetResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelVnetResponseSingle(data)
  local EntityMod = require("entity.tunnel_vnet_response_single_entity")
  if data == nil then
    if self._tunnel_vnet_response_single == nil then
      self._tunnel_vnet_response_single = EntityMod.new(self, nil)
    end
    return self._tunnel_vnet_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelWarpConnectorResponseCollection():list() / client:TunnelWarpConnectorResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelWarpConnectorResponseCollection(data)
  local EntityMod = require("entity.tunnel_warp_connector_response_collection_entity")
  if data == nil then
    if self._tunnel_warp_connector_response_collection == nil then
      self._tunnel_warp_connector_response_collection = EntityMod.new(self, nil)
    end
    return self._tunnel_warp_connector_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelWarpConnectorResponseSingle():list() / client:TunnelWarpConnectorResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelWarpConnectorResponseSingle(data)
  local EntityMod = require("entity.tunnel_warp_connector_response_single_entity")
  if data == nil then
    if self._tunnel_warp_connector_response_single == nil then
      self._tunnel_warp_connector_response_single = EntityMod.new(self, nil)
    end
    return self._tunnel_warp_connector_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TunnelZeroTrustConnectivitySetting():list() / client:TunnelZeroTrustConnectivitySetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:TunnelZeroTrustConnectivitySetting(data)
  local EntityMod = require("entity.tunnel_zero_trust_connectivity_setting_entity")
  if data == nil then
    if self._tunnel_zero_trust_connectivity_setting == nil then
      self._tunnel_zero_trust_connectivity_setting = EntityMod.new(self, nil)
    end
    return self._tunnel_zero_trust_connectivity_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Warp():list() / client:Warp():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:Warp(data)
  local EntityMod = require("entity.warp_entity")
  if data == nil then
    if self._warp == nil then
      self._warp = EntityMod.new(self, nil)
    end
    return self._warp
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WarpChangeEvent():list() / client:WarpChangeEvent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:WarpChangeEvent(data)
  local EntityMod = require("entity.warp_change_event_entity")
  if data == nil then
    if self._warp_change_event == nil then
      self._warp_change_event = EntityMod.new(self, nil)
    end
    return self._warp_change_event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WarpTeamsDeviceApiOther():list() / client:WarpTeamsDeviceApiOther():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:WarpTeamsDeviceApiOther(data)
  local EntityMod = require("entity.warp_teams_device_api_other_entity")
  if data == nil then
    if self._warp_teams_device_api_other == nil then
      self._warp_teams_device_api_other = EntityMod.new(self, nil)
    end
    return self._warp_teams_device_api_other
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayApplicationsReviewStatus():list() / client:ZeroTrustGatewayApplicationsReviewStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayApplicationsReviewStatus(data)
  local EntityMod = require("entity.zero_trust_gateway_applications_review_status_entity")
  if data == nil then
    if self._zero_trust_gateway_applications_review_status == nil then
      self._zero_trust_gateway_applications_review_status = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_applications_review_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayCsvOperationSingle():list() / client:ZeroTrustGatewayCsvOperationSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayCsvOperationSingle(data)
  local EntityMod = require("entity.zero_trust_gateway_csv_operation_single_entity")
  if data == nil then
    if self._zero_trust_gateway_csv_operation_single == nil then
      self._zero_trust_gateway_csv_operation_single = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_csv_operation_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayCustomCertificateSetting():list() / client:ZeroTrustGatewayCustomCertificateSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayCustomCertificateSetting(data)
  local EntityMod = require("entity.zero_trust_gateway_custom_certificate_setting_entity")
  if data == nil then
    if self._zero_trust_gateway_custom_certificate_setting == nil then
      self._zero_trust_gateway_custom_certificate_setting = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_custom_certificate_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayGatewayAccount():list() / client:ZeroTrustGatewayGatewayAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayGatewayAccount(data)
  local EntityMod = require("entity.zero_trust_gateway_gateway_account_entity")
  if data == nil then
    if self._zero_trust_gateway_gateway_account == nil then
      self._zero_trust_gateway_gateway_account = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_gateway_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayGatewayAccountConfig():list() / client:ZeroTrustGatewayGatewayAccountConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayGatewayAccountConfig(data)
  local EntityMod = require("entity.zero_trust_gateway_gateway_account_config_entity")
  if data == nil then
    if self._zero_trust_gateway_gateway_account_config == nil then
      self._zero_trust_gateway_gateway_account_config = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_gateway_account_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayGatewayAccountEgressCidrPairList():list() / client:ZeroTrustGatewayGatewayAccountEgressCidrPairList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayGatewayAccountEgressCidrPairList(data)
  local EntityMod = require("entity.zero_trust_gateway_gateway_account_egress_cidr_pair_list_entity")
  if data == nil then
    if self._zero_trust_gateway_gateway_account_egress_cidr_pair_list == nil then
      self._zero_trust_gateway_gateway_account_egress_cidr_pair_list = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_gateway_account_egress_cidr_pair_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayGatewayAccountLoggingSetting():list() / client:ZeroTrustGatewayGatewayAccountLoggingSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayGatewayAccountLoggingSetting(data)
  local EntityMod = require("entity.zero_trust_gateway_gateway_account_logging_setting_entity")
  if data == nil then
    if self._zero_trust_gateway_gateway_account_logging_setting == nil then
      self._zero_trust_gateway_gateway_account_logging_setting = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_gateway_account_logging_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayListItemResponseCollection():list() / client:ZeroTrustGatewayListItemResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayListItemResponseCollection(data)
  local EntityMod = require("entity.zero_trust_gateway_list_item_response_collection_entity")
  if data == nil then
    if self._zero_trust_gateway_list_item_response_collection == nil then
      self._zero_trust_gateway_list_item_response_collection = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_list_item_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayListSingle():list() / client:ZeroTrustGatewayListSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayListSingle(data)
  local EntityMod = require("entity.zero_trust_gateway_list_single_entity")
  if data == nil then
    if self._zero_trust_gateway_list_single == nil then
      self._zero_trust_gateway_list_single = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_list_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayResponseCollection():list() / client:ZeroTrustGatewayResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayResponseCollection(data)
  local EntityMod = require("entity.zero_trust_gateway_response_collection_entity")
  if data == nil then
    if self._zero_trust_gateway_response_collection == nil then
      self._zero_trust_gateway_response_collection = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayResponseCollection10():list() / client:ZeroTrustGatewayResponseCollection10():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayResponseCollection10(data)
  local EntityMod = require("entity.zero_trust_gateway_response_collection_10_entity")
  if data == nil then
    if self._zero_trust_gateway_response_collection_10 == nil then
      self._zero_trust_gateway_response_collection_10 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_response_collection_10
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayResponseCollection2():list() / client:ZeroTrustGatewayResponseCollection2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayResponseCollection2(data)
  local EntityMod = require("entity.zero_trust_gateway_response_collection_2_entity")
  if data == nil then
    if self._zero_trust_gateway_response_collection_2 == nil then
      self._zero_trust_gateway_response_collection_2 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_response_collection_2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayResponseCollection3():list() / client:ZeroTrustGatewayResponseCollection3():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayResponseCollection3(data)
  local EntityMod = require("entity.zero_trust_gateway_response_collection_3_entity")
  if data == nil then
    if self._zero_trust_gateway_response_collection_3 == nil then
      self._zero_trust_gateway_response_collection_3 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_response_collection_3
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayResponseCollection4():list() / client:ZeroTrustGatewayResponseCollection4():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayResponseCollection4(data)
  local EntityMod = require("entity.zero_trust_gateway_response_collection_4_entity")
  if data == nil then
    if self._zero_trust_gateway_response_collection_4 == nil then
      self._zero_trust_gateway_response_collection_4 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_response_collection_4
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayResponseCollection5():list() / client:ZeroTrustGatewayResponseCollection5():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayResponseCollection5(data)
  local EntityMod = require("entity.zero_trust_gateway_response_collection_5_entity")
  if data == nil then
    if self._zero_trust_gateway_response_collection_5 == nil then
      self._zero_trust_gateway_response_collection_5 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_response_collection_5
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayResponseCollection6():list() / client:ZeroTrustGatewayResponseCollection6():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayResponseCollection6(data)
  local EntityMod = require("entity.zero_trust_gateway_response_collection_6_entity")
  if data == nil then
    if self._zero_trust_gateway_response_collection_6 == nil then
      self._zero_trust_gateway_response_collection_6 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_response_collection_6
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayResponseCollection7():list() / client:ZeroTrustGatewayResponseCollection7():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayResponseCollection7(data)
  local EntityMod = require("entity.zero_trust_gateway_response_collection_7_entity")
  if data == nil then
    if self._zero_trust_gateway_response_collection_7 == nil then
      self._zero_trust_gateway_response_collection_7 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_response_collection_7
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayResponseCollection8():list() / client:ZeroTrustGatewayResponseCollection8():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayResponseCollection8(data)
  local EntityMod = require("entity.zero_trust_gateway_response_collection_8_entity")
  if data == nil then
    if self._zero_trust_gateway_response_collection_8 == nil then
      self._zero_trust_gateway_response_collection_8 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_response_collection_8
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewayResponseCollection9():list() / client:ZeroTrustGatewayResponseCollection9():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewayResponseCollection9(data)
  local EntityMod = require("entity.zero_trust_gateway_response_collection_9_entity")
  if data == nil then
    if self._zero_trust_gateway_response_collection_9 == nil then
      self._zero_trust_gateway_response_collection_9 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_response_collection_9
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewaySingle():list() / client:ZeroTrustGatewaySingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewaySingle(data)
  local EntityMod = require("entity.zero_trust_gateway_single_entity")
  if data == nil then
    if self._zero_trust_gateway_single == nil then
      self._zero_trust_gateway_single = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewaySingleResponse2():list() / client:ZeroTrustGatewaySingleResponse2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewaySingleResponse2(data)
  local EntityMod = require("entity.zero_trust_gateway_single_response_2_entity")
  if data == nil then
    if self._zero_trust_gateway_single_response_2 == nil then
      self._zero_trust_gateway_single_response_2 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_single_response_2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewaySingleResponse3():list() / client:ZeroTrustGatewaySingleResponse3():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewaySingleResponse3(data)
  local EntityMod = require("entity.zero_trust_gateway_single_response_3_entity")
  if data == nil then
    if self._zero_trust_gateway_single_response_3 == nil then
      self._zero_trust_gateway_single_response_3 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_single_response_3
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewaySingleResponse4():list() / client:ZeroTrustGatewaySingleResponse4():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewaySingleResponse4(data)
  local EntityMod = require("entity.zero_trust_gateway_single_response_4_entity")
  if data == nil then
    if self._zero_trust_gateway_single_response_4 == nil then
      self._zero_trust_gateway_single_response_4 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_single_response_4
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewaySingleResponse5():list() / client:ZeroTrustGatewaySingleResponse5():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewaySingleResponse5(data)
  local EntityMod = require("entity.zero_trust_gateway_single_response_5_entity")
  if data == nil then
    if self._zero_trust_gateway_single_response_5 == nil then
      self._zero_trust_gateway_single_response_5 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_single_response_5
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewaySingleResponse6():list() / client:ZeroTrustGatewaySingleResponse6():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewaySingleResponse6(data)
  local EntityMod = require("entity.zero_trust_gateway_single_response_6_entity")
  if data == nil then
    if self._zero_trust_gateway_single_response_6 == nil then
      self._zero_trust_gateway_single_response_6 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_single_response_6
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewaySingleResponse7():list() / client:ZeroTrustGatewaySingleResponse7():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewaySingleResponse7(data)
  local EntityMod = require("entity.zero_trust_gateway_single_response_7_entity")
  if data == nil then
    if self._zero_trust_gateway_single_response_7 == nil then
      self._zero_trust_gateway_single_response_7 = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_single_response_7
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustGatewaySingleResponseWithListItem():list() / client:ZeroTrustGatewaySingleResponseWithListItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustGatewaySingleResponseWithListItem(data)
  local EntityMod = require("entity.zero_trust_gateway_single_response_with_list_item_entity")
  if data == nil then
    if self._zero_trust_gateway_single_response_with_list_item == nil then
      self._zero_trust_gateway_single_response_with_list_item = EntityMod.new(self, nil)
    end
    return self._zero_trust_gateway_single_response_with_list_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustRiskScoring():list() / client:ZeroTrustRiskScoring():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustRiskScoring(data)
  local EntityMod = require("entity.zero_trust_risk_scoring_entity")
  if data == nil then
    if self._zero_trust_risk_scoring == nil then
      self._zero_trust_risk_scoring = EntityMod.new(self, nil)
    end
    return self._zero_trust_risk_scoring
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ZeroTrustRiskScoringIntegration():list() / client:ZeroTrustRiskScoringIntegration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareZeroTrustSDK:ZeroTrustRiskScoringIntegration(data)
  local EntityMod = require("entity.zero_trust_risk_scoring_integration_entity")
  if data == nil then
    if self._zero_trust_risk_scoring_integration == nil then
      self._zero_trust_risk_scoring_integration = EntityMod.new(self, nil)
    end
    return self._zero_trust_risk_scoring_integration
  end
  return EntityMod.new(self, data)
end




function CloudflareZeroTrustSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CloudflareZeroTrustSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CloudflareZeroTrustSDK
