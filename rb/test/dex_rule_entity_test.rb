# DexRule entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareZeroTrust_sdk"
require_relative "runner"

class DexRuleEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareZeroTrustSDK.test(nil, nil)
    ent = testsdk.DexRule(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = dex_rule_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "dex_rule." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    dex_rule_ref01_ent = client.DexRule(nil)
    dex_rule_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.dex_rule"), "dex_rule_ref01"))
    dex_rule_ref01_data["account_id"] = setup[:idmap]["account01"]

    dex_rule_ref01_data_result = dex_rule_ref01_ent.create(dex_rule_ref01_data, nil)
    dex_rule_ref01_data = Helpers.to_map(dex_rule_ref01_data_result.respond_to?(:data_get) ? dex_rule_ref01_data_result.data_get : dex_rule_ref01_data_result)
    assert !dex_rule_ref01_data.nil?
    assert !dex_rule_ref01_data["id"].nil?

    # UPDATE
    dex_rule_ref01_data_up0_up = {
      "id" => dex_rule_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
    }

    dex_rule_ref01_markdef_up0_name = "description"
    dex_rule_ref01_markdef_up0_value = "Mark01-dex_rule_ref01_#{setup[:now]}"
    dex_rule_ref01_data_up0_up[dex_rule_ref01_markdef_up0_name] = dex_rule_ref01_markdef_up0_value

    dex_rule_ref01_resdata_up0_result = dex_rule_ref01_ent.update(dex_rule_ref01_data_up0_up, nil)
    dex_rule_ref01_resdata_up0 = Helpers.to_map(dex_rule_ref01_resdata_up0_result.respond_to?(:data_get) ? dex_rule_ref01_resdata_up0_result.data_get : dex_rule_ref01_resdata_up0_result)
    assert !dex_rule_ref01_resdata_up0.nil?
    assert_equal dex_rule_ref01_resdata_up0["id"], dex_rule_ref01_data_up0_up["id"]
    assert_equal dex_rule_ref01_resdata_up0[dex_rule_ref01_markdef_up0_name], dex_rule_ref01_markdef_up0_value

    # LOAD
    dex_rule_ref01_match_dt0 = {
      "id" => dex_rule_ref01_data["id"],
    }
    dex_rule_ref01_data_dt0_loaded = dex_rule_ref01_ent.load(dex_rule_ref01_match_dt0, nil)
    dex_rule_ref01_data_dt0_load_result = Helpers.to_map(dex_rule_ref01_data_dt0_loaded.respond_to?(:data_get) ? dex_rule_ref01_data_dt0_loaded.data_get : dex_rule_ref01_data_dt0_loaded)
    assert !dex_rule_ref01_data_dt0_load_result.nil?
    assert_equal dex_rule_ref01_data_dt0_load_result["id"], dex_rule_ref01_data["id"]

    # REMOVE
    dex_rule_ref01_match_rm0 = {
      "id" => dex_rule_ref01_data["id"],
    }
    dex_rule_ref01_ent.remove(dex_rule_ref01_match_rm0, nil)

  end
end

def dex_rule_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "dex_rule", "DexRuleTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareZeroTrustSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["dex_rule01", "dex_rule02", "dex_rule03", "account01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID" => idmap,
    "CLOUDFLARE_ZERO_TRUST_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"].nil?
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end

  if env["CLOUDFLARE_ZERO_TRUST_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CLOUDFLARE_ZERO_TRUST_APIKEY"],
      },
      extra || {},
    ])
    client = CloudflareZeroTrustSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CLOUDFLARE_ZERO_TRUST_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
