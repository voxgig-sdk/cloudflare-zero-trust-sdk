# TeamsDevicesDeviceSetting entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareZeroTrust_sdk"
require_relative "runner"

class TeamsDevicesDeviceSettingEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareZeroTrustSDK.test(nil, nil)
    ent = testsdk.TeamsDevicesDeviceSetting(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = teams_devices_device_setting_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "teams_devices_device_setting." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEVICE_SETTING_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    teams_devices_device_setting_ref01_ent = client.TeamsDevicesDeviceSetting(nil)
    teams_devices_device_setting_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.teams_devices_device_setting"), "teams_devices_device_setting_ref01"))
    teams_devices_device_setting_ref01_data["account_id"] = setup[:idmap]["account01"]

    teams_devices_device_setting_ref01_data_result = teams_devices_device_setting_ref01_ent.create(teams_devices_device_setting_ref01_data, nil)
    teams_devices_device_setting_ref01_data = Helpers.to_map(teams_devices_device_setting_ref01_data_result.respond_to?(:data_get) ? teams_devices_device_setting_ref01_data_result.data_get : teams_devices_device_setting_ref01_data_result)
    assert !teams_devices_device_setting_ref01_data.nil?

    # UPDATE
    teams_devices_device_setting_ref01_data_up0_up = {
      "account_id" => setup[:idmap]["account_id"],
    }

    teams_devices_device_setting_ref01_markdef_up0_name = "description"
    teams_devices_device_setting_ref01_markdef_up0_value = "Mark01-teams_devices_device_setting_ref01_#{setup[:now]}"
    teams_devices_device_setting_ref01_data_up0_up[teams_devices_device_setting_ref01_markdef_up0_name] = teams_devices_device_setting_ref01_markdef_up0_value

    teams_devices_device_setting_ref01_resdata_up0_result = teams_devices_device_setting_ref01_ent.update(teams_devices_device_setting_ref01_data_up0_up, nil)
    teams_devices_device_setting_ref01_resdata_up0 = Helpers.to_map(teams_devices_device_setting_ref01_resdata_up0_result.respond_to?(:data_get) ? teams_devices_device_setting_ref01_resdata_up0_result.data_get : teams_devices_device_setting_ref01_resdata_up0_result)
    assert !teams_devices_device_setting_ref01_resdata_up0.nil?
    assert_equal teams_devices_device_setting_ref01_resdata_up0[teams_devices_device_setting_ref01_markdef_up0_name], teams_devices_device_setting_ref01_markdef_up0_value

    # LOAD
    teams_devices_device_setting_ref01_match_dt0 = {}
    teams_devices_device_setting_ref01_data_dt0_loaded = teams_devices_device_setting_ref01_ent.load(teams_devices_device_setting_ref01_match_dt0, nil)
    assert !teams_devices_device_setting_ref01_data_dt0_loaded.nil?

  end
end

def teams_devices_device_setting_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "teams_devices_device_setting", "TeamsDevicesDeviceSettingTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareZeroTrustSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["teams_devices_device_setting01", "teams_devices_device_setting02", "teams_devices_device_setting03", "account01"],
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
  entid_env_raw = ENV["CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEVICE_SETTING_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEVICE_SETTING_ENTID" => idmap,
    "CLOUDFLARE_ZERO_TRUST_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEVICE_SETTING_ENTID"])
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
