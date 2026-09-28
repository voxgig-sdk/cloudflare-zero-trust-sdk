# Registration entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareZeroTrust_sdk"
require_relative "runner"

class RegistrationEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareZeroTrustSDK.test(nil, nil)
    ent = testsdk.Registration(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "registration" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareZeroTrustSDK.test(seed, nil)
    seen = base.Registration(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareZeroTrustConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareZeroTrustSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Registration(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = registration_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "registration." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_REGISTRATION_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    registration_ref01_ent = client.Registration(nil)
    registration_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.registration"), "registration_ref01"))
    registration_ref01_data["account_id"] = setup[:idmap]["account01"]

    registration_ref01_data_result = registration_ref01_ent.create(registration_ref01_data, nil)
    registration_ref01_data = Helpers.to_map(registration_ref01_data_result.respond_to?(:data_get) ? registration_ref01_data_result.data_get : registration_ref01_data_result)
    assert !registration_ref01_data.nil?
    assert !registration_ref01_data["id"].nil?

    # LIST
    registration_ref01_match = {
      "account_id" => setup[:idmap]["account01"],
    }

    registration_ref01_list_result = registration_ref01_ent.list(registration_ref01_match, nil)
    assert registration_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(registration_ref01_list_result),
      { "id" => registration_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # LOAD
    registration_ref01_match_dt0 = {
      "id" => registration_ref01_data["id"],
    }
    registration_ref01_data_dt0_loaded = registration_ref01_ent.load(registration_ref01_match_dt0, nil)
    registration_ref01_data_dt0_load_result = Helpers.to_map(registration_ref01_data_dt0_loaded.respond_to?(:data_get) ? registration_ref01_data_dt0_loaded.data_get : registration_ref01_data_dt0_loaded)
    assert !registration_ref01_data_dt0_load_result.nil?
    assert_equal registration_ref01_data_dt0_load_result["id"], registration_ref01_data["id"]

    # REMOVE
    registration_ref01_match_rm0 = {
      "id" => registration_ref01_data["id"],
    }
    registration_ref01_ent.remove(registration_ref01_match_rm0, nil)

    # LIST
    registration_ref01_match_rt0 = {
      "account_id" => setup[:idmap]["account01"],
    }

    registration_ref01_list_rt0_result = registration_ref01_ent.list(registration_ref01_match_rt0, nil)
    assert registration_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(registration_ref01_list_rt0_result),
      { "id" => registration_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def registration_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "registration", "RegistrationTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareZeroTrustSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["registration01", "registration02", "registration03", "account01"],
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
  entid_env_raw = ENV["CLOUDFLARE_ZERO_TRUST_TEST_REGISTRATION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_ZERO_TRUST_TEST_REGISTRATION_ENTID" => idmap,
    "CLOUDFLARE_ZERO_TRUST_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_ZERO_TRUST_TEST_REGISTRATION_ENTID"])
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
