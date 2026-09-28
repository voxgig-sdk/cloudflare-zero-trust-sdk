-- DexRule entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-zero-trust_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("DexRuleEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:DexRule(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = dex_rule_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "dex_rule." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local dex_rule_ref01_ent = client:DexRule(nil)
    local dex_rule_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.dex_rule"), "dex_rule_ref01"))
    dex_rule_ref01_data["account_id"] = setup.idmap["account01"]

    local dex_rule_ref01_data_result, err = dex_rule_ref01_ent:create(dex_rule_ref01_data, nil)
    assert.is_nil(err)
    dex_rule_ref01_data = helpers.to_map(type(dex_rule_ref01_data_result) == 'table' and dex_rule_ref01_data_result.data_get and dex_rule_ref01_data_result:data_get() or dex_rule_ref01_data_result)
    assert.is_not_nil(dex_rule_ref01_data)
    assert.is_not_nil(dex_rule_ref01_data["id"])

    -- UPDATE
    local dex_rule_ref01_data_up0_up = {
      id = dex_rule_ref01_data["id"],
      ["account_id"] = setup.idmap["account_id"],
    }

    local dex_rule_ref01_markdef_up0_name = "description"
    local dex_rule_ref01_markdef_up0_value = "Mark01-dex_rule_ref01_" .. tostring(setup.now)
    dex_rule_ref01_data_up0_up[dex_rule_ref01_markdef_up0_name] = dex_rule_ref01_markdef_up0_value

    local dex_rule_ref01_resdata_up0_result, err = dex_rule_ref01_ent:update(dex_rule_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local dex_rule_ref01_resdata_up0 = helpers.to_map(type(dex_rule_ref01_resdata_up0_result) == 'table' and dex_rule_ref01_resdata_up0_result.data_get and dex_rule_ref01_resdata_up0_result:data_get() or dex_rule_ref01_resdata_up0_result)
    assert.is_not_nil(dex_rule_ref01_resdata_up0)
    assert.are.equal(dex_rule_ref01_resdata_up0["id"], dex_rule_ref01_data_up0_up["id"])
    assert.are.equal(dex_rule_ref01_resdata_up0[dex_rule_ref01_markdef_up0_name], dex_rule_ref01_markdef_up0_value)

    -- LOAD
    local dex_rule_ref01_match_dt0 = {
      id = dex_rule_ref01_data["id"],
    }
    local dex_rule_ref01_data_dt0_loaded, err = dex_rule_ref01_ent:load(dex_rule_ref01_match_dt0, nil)
    assert.is_nil(err)
    local dex_rule_ref01_data_dt0_load_result = helpers.to_map(type(dex_rule_ref01_data_dt0_loaded) == 'table' and dex_rule_ref01_data_dt0_loaded.data_get and dex_rule_ref01_data_dt0_loaded:data_get() or dex_rule_ref01_data_dt0_loaded)
    assert.is_not_nil(dex_rule_ref01_data_dt0_load_result)
    assert.are.equal(dex_rule_ref01_data_dt0_load_result["id"], dex_rule_ref01_data["id"])

    -- REMOVE
    local dex_rule_ref01_match_rm0 = {
      id = dex_rule_ref01_data["id"],
    }
    local _, err = dex_rule_ref01_ent:remove(dex_rule_ref01_match_rm0, nil)
    assert.is_nil(err)

  end)
end)

function dex_rule_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/dex_rule/DexRuleTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read dex_rule test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "dex_rule01", "dex_rule02", "dex_rule03", "account01" },
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
  local entid_env_raw = os.getenv("CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID"] = idmap,
    ["CLOUDFLARE_ZERO_TRUST_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_ZERO_TRUST_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID"])
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
