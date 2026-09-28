# OneIntegrationUpdate entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareZeroTrust_sdk"
require_relative "runner"

class OneIntegrationUpdateEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareZeroTrustSDK.test(nil, nil)
    ent = testsdk.OneIntegrationUpdate(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = one_integration_update_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "one_integration_update." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_ONE_INTEGRATION_UPDATE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    one_integration_update_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.one_integration_update")))
    one_integration_update_ref01_data = nil
    if one_integration_update_ref01_data_raw.length > 0
      one_integration_update_ref01_data = Helpers.to_map(one_integration_update_ref01_data_raw[0][1])
    end

    # UPDATE
    one_integration_update_ref01_ent = client.OneIntegrationUpdate(nil)
    one_integration_update_ref01_data_up0_up = {
      "id" => one_integration_update_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
    }

    one_integration_update_ref01_markdef_up0_name = "name"
    one_integration_update_ref01_markdef_up0_value = "Mark01-one_integration_update_ref01_#{setup[:now]}"
    one_integration_update_ref01_data_up0_up[one_integration_update_ref01_markdef_up0_name] = one_integration_update_ref01_markdef_up0_value

    one_integration_update_ref01_resdata_up0_result = one_integration_update_ref01_ent.update(one_integration_update_ref01_data_up0_up, nil)
    one_integration_update_ref01_resdata_up0 = Helpers.to_map(one_integration_update_ref01_resdata_up0_result.respond_to?(:data_get) ? one_integration_update_ref01_resdata_up0_result.data_get : one_integration_update_ref01_resdata_up0_result)
    assert !one_integration_update_ref01_resdata_up0.nil?
    assert_equal one_integration_update_ref01_resdata_up0["id"], one_integration_update_ref01_data_up0_up["id"]
    assert_equal one_integration_update_ref01_resdata_up0[one_integration_update_ref01_markdef_up0_name], one_integration_update_ref01_markdef_up0_value

  end
end

def one_integration_update_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "one_integration_update", "OneIntegrationUpdateTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareZeroTrustSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["one_integration_update01", "one_integration_update02", "one_integration_update03", "account01"],
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
  entid_env_raw = ENV["CLOUDFLARE_ZERO_TRUST_TEST_ONE_INTEGRATION_UPDATE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_ZERO_TRUST_TEST_ONE_INTEGRATION_UPDATE_ENTID" => idmap,
    "CLOUDFLARE_ZERO_TRUST_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_ZERO_TRUST_TEST_ONE_INTEGRATION_UPDATE_ENTID"])
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
