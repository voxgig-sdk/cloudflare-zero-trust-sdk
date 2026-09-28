# NscStatusInfo entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareZeroTrust_sdk"
require_relative "runner"

class NscStatusInfoEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareZeroTrustSDK.test(nil, nil)
    ent = testsdk.NscStatusInfo(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = nsc_status_info_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "nsc_status_info." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_NSC_STATUS_INFO_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    nsc_status_info_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.nsc_status_info")))
    nsc_status_info_ref01_data = nil
    if nsc_status_info_ref01_data_raw.length > 0
      nsc_status_info_ref01_data = Helpers.to_map(nsc_status_info_ref01_data_raw[0][1])
    end

    # LOAD
    nsc_status_info_ref01_ent = client.NscStatusInfo(nil)
    nsc_status_info_ref01_match_dt0 = {}
    nsc_status_info_ref01_data_dt0_loaded = nsc_status_info_ref01_ent.load(nsc_status_info_ref01_match_dt0, nil)
    assert !nsc_status_info_ref01_data_dt0_loaded.nil?

  end
end

def nsc_status_info_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "nsc_status_info", "NscStatusInfoTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareZeroTrustSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["nsc_status_info01", "nsc_status_info02", "nsc_status_info03", "interconnect01", "interconnect02", "interconnect03", "account01"],
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
  entid_env_raw = ENV["CLOUDFLARE_ZERO_TRUST_TEST_NSC_STATUS_INFO_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_ZERO_TRUST_TEST_NSC_STATUS_INFO_ENTID" => idmap,
    "CLOUDFLARE_ZERO_TRUST_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_ZERO_TRUST_TEST_NSC_STATUS_INFO_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
