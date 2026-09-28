# TunnelSubnetResponseSingle entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareZeroTrust_sdk"
require_relative "runner"

class TunnelSubnetResponseSingleEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareZeroTrustSDK.test(nil, nil)
    ent = testsdk.TunnelSubnetResponseSingle(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = tunnel_subnet_response_single_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "tunnel_subnet_response_single." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_SUBNET_RESPONSE_SINGLE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    tunnel_subnet_response_single_ref01_ent = client.TunnelSubnetResponseSingle(nil)
    tunnel_subnet_response_single_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.tunnel_subnet_response_single"), "tunnel_subnet_response_single_ref01"))
    tunnel_subnet_response_single_ref01_data["account_id"] = setup[:idmap]["account01"]

    tunnel_subnet_response_single_ref01_data_result = tunnel_subnet_response_single_ref01_ent.create(tunnel_subnet_response_single_ref01_data, nil)
    tunnel_subnet_response_single_ref01_data = Helpers.to_map(tunnel_subnet_response_single_ref01_data_result.respond_to?(:data_get) ? tunnel_subnet_response_single_ref01_data_result.data_get : tunnel_subnet_response_single_ref01_data_result)
    assert !tunnel_subnet_response_single_ref01_data.nil?

    # UPDATE
    tunnel_subnet_response_single_ref01_data_up0_up = {
      "account_id" => setup[:idmap]["account_id"],
    }

    tunnel_subnet_response_single_ref01_markdef_up0_name = "comment"
    tunnel_subnet_response_single_ref01_markdef_up0_value = "Mark01-tunnel_subnet_response_single_ref01_#{setup[:now]}"
    tunnel_subnet_response_single_ref01_data_up0_up[tunnel_subnet_response_single_ref01_markdef_up0_name] = tunnel_subnet_response_single_ref01_markdef_up0_value

    tunnel_subnet_response_single_ref01_resdata_up0_result = tunnel_subnet_response_single_ref01_ent.update(tunnel_subnet_response_single_ref01_data_up0_up, nil)
    tunnel_subnet_response_single_ref01_resdata_up0 = Helpers.to_map(tunnel_subnet_response_single_ref01_resdata_up0_result.respond_to?(:data_get) ? tunnel_subnet_response_single_ref01_resdata_up0_result.data_get : tunnel_subnet_response_single_ref01_resdata_up0_result)
    assert !tunnel_subnet_response_single_ref01_resdata_up0.nil?
    assert_equal tunnel_subnet_response_single_ref01_resdata_up0[tunnel_subnet_response_single_ref01_markdef_up0_name], tunnel_subnet_response_single_ref01_markdef_up0_value

    # LOAD
    tunnel_subnet_response_single_ref01_match_dt0 = {}
    tunnel_subnet_response_single_ref01_data_dt0_loaded = tunnel_subnet_response_single_ref01_ent.load(tunnel_subnet_response_single_ref01_match_dt0, nil)
    assert !tunnel_subnet_response_single_ref01_data_dt0_loaded.nil?

  end
end

def tunnel_subnet_response_single_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "tunnel_subnet_response_single", "TunnelSubnetResponseSingleTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareZeroTrustSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["tunnel_subnet_response_single01", "tunnel_subnet_response_single02", "tunnel_subnet_response_single03", "account01"],
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
  entid_env_raw = ENV["CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_SUBNET_RESPONSE_SINGLE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_SUBNET_RESPONSE_SINGLE_ENTID" => idmap,
    "CLOUDFLARE_ZERO_TRUST_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_SUBNET_RESPONSE_SINGLE_ENTID"])
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
