-- AlexandriaGetApplication entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-zero-trust_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("AlexandriaGetApplicationEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:AlexandriaGetApplication(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["alexandria_get_application"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:AlexandriaGetApplication(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:AlexandriaGetApplication(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = alexandria_get_application_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "alexandria_get_application." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_APPLICATION_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local alexandria_get_application_ref01_ent = client:AlexandriaGetApplication(nil)
    local alexandria_get_application_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.alexandria_get_application"), "alexandria_get_application_ref01"))
    alexandria_get_application_ref01_data["account_id"] = setup.idmap["account01"]

    local alexandria_get_application_ref01_data_result, err = alexandria_get_application_ref01_ent:create(alexandria_get_application_ref01_data, nil)
    assert.is_nil(err)
    alexandria_get_application_ref01_data = helpers.to_map(type(alexandria_get_application_ref01_data_result) == 'table' and alexandria_get_application_ref01_data_result.data_get and alexandria_get_application_ref01_data_result:data_get() or alexandria_get_application_ref01_data_result)
    assert.is_not_nil(alexandria_get_application_ref01_data)
    assert.is_not_nil(alexandria_get_application_ref01_data["id"])

    -- LIST
    local alexandria_get_application_ref01_match = {
      ["account_id"] = setup.idmap["account01"],
    }

    local alexandria_get_application_ref01_list_result, err = alexandria_get_application_ref01_ent:list(alexandria_get_application_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(alexandria_get_application_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(alexandria_get_application_ref01_list_result),
      { id = alexandria_get_application_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local alexandria_get_application_ref01_data_up0_up = {
      id = alexandria_get_application_ref01_data["id"],
      ["account_id"] = setup.idmap["account_id"],
    }

    local alexandria_get_application_ref01_markdef_up0_name = "human_id"
    local alexandria_get_application_ref01_markdef_up0_value = "Mark01-alexandria_get_application_ref01_" .. tostring(setup.now)
    alexandria_get_application_ref01_data_up0_up[alexandria_get_application_ref01_markdef_up0_name] = alexandria_get_application_ref01_markdef_up0_value

    local alexandria_get_application_ref01_resdata_up0_result, err = alexandria_get_application_ref01_ent:update(alexandria_get_application_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local alexandria_get_application_ref01_resdata_up0 = helpers.to_map(type(alexandria_get_application_ref01_resdata_up0_result) == 'table' and alexandria_get_application_ref01_resdata_up0_result.data_get and alexandria_get_application_ref01_resdata_up0_result:data_get() or alexandria_get_application_ref01_resdata_up0_result)
    assert.is_not_nil(alexandria_get_application_ref01_resdata_up0)
    assert.are.equal(alexandria_get_application_ref01_resdata_up0["id"], alexandria_get_application_ref01_data_up0_up["id"])
    assert.are.equal(alexandria_get_application_ref01_resdata_up0[alexandria_get_application_ref01_markdef_up0_name], alexandria_get_application_ref01_markdef_up0_value)

    -- LOAD
    local alexandria_get_application_ref01_match_dt0 = {
      id = alexandria_get_application_ref01_data["id"],
    }
    local alexandria_get_application_ref01_data_dt0_loaded, err = alexandria_get_application_ref01_ent:load(alexandria_get_application_ref01_match_dt0, nil)
    assert.is_nil(err)
    local alexandria_get_application_ref01_data_dt0_load_result = helpers.to_map(type(alexandria_get_application_ref01_data_dt0_loaded) == 'table' and alexandria_get_application_ref01_data_dt0_loaded.data_get and alexandria_get_application_ref01_data_dt0_loaded:data_get() or alexandria_get_application_ref01_data_dt0_loaded)
    assert.is_not_nil(alexandria_get_application_ref01_data_dt0_load_result)
    assert.are.equal(alexandria_get_application_ref01_data_dt0_load_result["id"], alexandria_get_application_ref01_data["id"])

  end)
end)

function alexandria_get_application_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/alexandria_get_application/AlexandriaGetApplicationTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read alexandria_get_application test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "alexandria_get_application01", "alexandria_get_application02", "alexandria_get_application03", "account01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_APPLICATION_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_APPLICATION_ENTID"] = idmap,
    ["CLOUDFLARE_ZERO_TRUST_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_ZERO_TRUST_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_APPLICATION_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"] == nil then
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end

  if env["CLOUDFLARE_ZERO_TRUST_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["CLOUDFLARE_ZERO_TRUST_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["CLOUDFLARE_ZERO_TRUST_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
