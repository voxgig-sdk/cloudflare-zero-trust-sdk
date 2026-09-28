# ZeroTrustGatewaySingleResponse5 entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareZeroTrust_sdk"
require_relative "runner"

class ZeroTrustGatewaySingleResponse5EntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareZeroTrustSDK.test(nil, nil)
    ent = testsdk.ZeroTrustGatewaySingleResponse5(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = zero_trust_gateway_single_response_5_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "zero_trust_gateway_single_response_5." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_5_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    zero_trust_gateway_single_response_5_ref01_ent = client.ZeroTrustGatewaySingleResponse5(nil)
    zero_trust_gateway_single_response_5_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.zero_trust_gateway_single_response_5"), "zero_trust_gateway_single_response_5_ref01"))
    zero_trust_gateway_single_response_5_ref01_data["account_id"] = setup[:idmap]["account01"]

    zero_trust_gateway_single_response_5_ref01_data_result = zero_trust_gateway_single_response_5_ref01_ent.create(zero_trust_gateway_single_response_5_ref01_data, nil)
    zero_trust_gateway_single_response_5_ref01_data = Helpers.to_map(zero_trust_gateway_single_response_5_ref01_data_result.respond_to?(:data_get) ? zero_trust_gateway_single_response_5_ref01_data_result.data_get : zero_trust_gateway_single_response_5_ref01_data_result)
    assert !zero_trust_gateway_single_response_5_ref01_data.nil?

    # UPDATE
    zero_trust_gateway_single_response_5_ref01_data_up0_up = {
      "account_id" => setup[:idmap]["account_id"],
    }

    zero_trust_gateway_single_response_5_ref01_markdef_up0_name = "kind"
    zero_trust_gateway_single_response_5_ref01_markdef_up0_value = "Mark01-zero_trust_gateway_single_response_5_ref01_#{setup[:now]}"
    zero_trust_gateway_single_response_5_ref01_data_up0_up[zero_trust_gateway_single_response_5_ref01_markdef_up0_name] = zero_trust_gateway_single_response_5_ref01_markdef_up0_value

    zero_trust_gateway_single_response_5_ref01_resdata_up0_result = zero_trust_gateway_single_response_5_ref01_ent.update(zero_trust_gateway_single_response_5_ref01_data_up0_up, nil)
    zero_trust_gateway_single_response_5_ref01_resdata_up0 = Helpers.to_map(zero_trust_gateway_single_response_5_ref01_resdata_up0_result.respond_to?(:data_get) ? zero_trust_gateway_single_response_5_ref01_resdata_up0_result.data_get : zero_trust_gateway_single_response_5_ref01_resdata_up0_result)
    assert !zero_trust_gateway_single_response_5_ref01_resdata_up0.nil?
    assert_equal zero_trust_gateway_single_response_5_ref01_resdata_up0[zero_trust_gateway_single_response_5_ref01_markdef_up0_name], zero_trust_gateway_single_response_5_ref01_markdef_up0_value

    # LOAD
    zero_trust_gateway_single_response_5_ref01_match_dt0 = {}
    zero_trust_gateway_single_response_5_ref01_data_dt0_loaded = zero_trust_gateway_single_response_5_ref01_ent.load(zero_trust_gateway_single_response_5_ref01_match_dt0, nil)
    assert !zero_trust_gateway_single_response_5_ref01_data_dt0_loaded.nil?

  end
end

def zero_trust_gateway_single_response_5_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "zero_trust_gateway_single_response_5", "ZeroTrustGatewaySingleResponse5TestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareZeroTrustSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["zero_trust_gateway_single_response_501", "zero_trust_gateway_single_response_502", "zero_trust_gateway_single_response_503", "proxy_endpoint01", "proxy_endpoint02", "proxy_endpoint03", "account01"],
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
  entid_env_raw = ENV["CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_5_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_5_ENTID" => idmap,
    "CLOUDFLARE_ZERO_TRUST_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_5_ENTID"])
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
