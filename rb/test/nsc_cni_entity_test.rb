# NscCni entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareZeroTrust_sdk"
require_relative "runner"

class NscCniEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareZeroTrustSDK.test(nil, nil)
    ent = testsdk.NscCni(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "nsc_cni" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareZeroTrustSDK.test(seed, nil)
    seen = base.NscCni(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareZeroTrustConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareZeroTrustSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.NscCni(nil).stream("list", nil, nil).each do |item|
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
    setup = nsc_cni_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "nsc_cni." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_NSC_CNI_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    nsc_cni_ref01_ent = client.NscCni(nil)
    nsc_cni_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.nsc_cni"), "nsc_cni_ref01"))
    nsc_cni_ref01_data["account_id"] = setup[:idmap]["account01"]

    nsc_cni_ref01_data_result = nsc_cni_ref01_ent.create(nsc_cni_ref01_data, nil)
    nsc_cni_ref01_data = Helpers.to_map(nsc_cni_ref01_data_result.respond_to?(:data_get) ? nsc_cni_ref01_data_result.data_get : nsc_cni_ref01_data_result)
    assert !nsc_cni_ref01_data.nil?
    assert !nsc_cni_ref01_data["id"].nil?

    # LIST
    nsc_cni_ref01_match = {
      "account_id" => setup[:idmap]["account01"],
    }

    nsc_cni_ref01_list_result = nsc_cni_ref01_ent.list(nsc_cni_ref01_match, nil)
    assert nsc_cni_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(nsc_cni_ref01_list_result),
      { "id" => nsc_cni_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    nsc_cni_ref01_data_up0_up = {
      "id" => nsc_cni_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
    }

    nsc_cni_ref01_markdef_up0_name = "account"
    nsc_cni_ref01_markdef_up0_value = "Mark01-nsc_cni_ref01_#{setup[:now]}"
    nsc_cni_ref01_data_up0_up[nsc_cni_ref01_markdef_up0_name] = nsc_cni_ref01_markdef_up0_value

    nsc_cni_ref01_resdata_up0_result = nsc_cni_ref01_ent.update(nsc_cni_ref01_data_up0_up, nil)
    nsc_cni_ref01_resdata_up0 = Helpers.to_map(nsc_cni_ref01_resdata_up0_result.respond_to?(:data_get) ? nsc_cni_ref01_resdata_up0_result.data_get : nsc_cni_ref01_resdata_up0_result)
    assert !nsc_cni_ref01_resdata_up0.nil?
    assert_equal nsc_cni_ref01_resdata_up0["id"], nsc_cni_ref01_data_up0_up["id"]
    assert_equal nsc_cni_ref01_resdata_up0[nsc_cni_ref01_markdef_up0_name], nsc_cni_ref01_markdef_up0_value

    # LOAD
    nsc_cni_ref01_match_dt0 = {
      "id" => nsc_cni_ref01_data["id"],
    }
    nsc_cni_ref01_data_dt0_loaded = nsc_cni_ref01_ent.load(nsc_cni_ref01_match_dt0, nil)
    nsc_cni_ref01_data_dt0_load_result = Helpers.to_map(nsc_cni_ref01_data_dt0_loaded.respond_to?(:data_get) ? nsc_cni_ref01_data_dt0_loaded.data_get : nsc_cni_ref01_data_dt0_loaded)
    assert !nsc_cni_ref01_data_dt0_load_result.nil?
    assert_equal nsc_cni_ref01_data_dt0_load_result["id"], nsc_cni_ref01_data["id"]

  end
end

def nsc_cni_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "nsc_cni", "NscCniTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareZeroTrustSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["nsc_cni01", "nsc_cni02", "nsc_cni03", "account01"],
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
  entid_env_raw = ENV["CLOUDFLARE_ZERO_TRUST_TEST_NSC_CNI_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_ZERO_TRUST_TEST_NSC_CNI_ENTID" => idmap,
    "CLOUDFLARE_ZERO_TRUST_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_ZERO_TRUST_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_ZERO_TRUST_TEST_NSC_CNI_ENTID"])
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
