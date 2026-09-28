<?php
declare(strict_types=1);

// DexRule entity test

require_once __DIR__ . '/../cloudflarezerotrust_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class DexRuleEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudflareZeroTrustSDK::test(null, null);
        $ent = $testsdk->DexRule(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = dex_rule_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "dex_rule." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $dex_rule_ref01_ent = $client->DexRule(null);
        $dex_rule_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.dex_rule"), "dex_rule_ref01"));
        $dex_rule_ref01_data["account_id"] = $setup["idmap"]["account01"];

        $dex_rule_ref01_data_result = $dex_rule_ref01_ent->create($dex_rule_ref01_data, null);
        $dex_rule_ref01_data = Helpers::to_map(is_object($dex_rule_ref01_data_result) && method_exists($dex_rule_ref01_data_result, 'data_get') ? $dex_rule_ref01_data_result->data_get() : $dex_rule_ref01_data_result);
        $this->assertNotNull($dex_rule_ref01_data);
        $this->assertNotNull($dex_rule_ref01_data["id"]);

        // UPDATE
        $dex_rule_ref01_data_up0_up = [
            "id" => $dex_rule_ref01_data["id"],
            "account_id" => $setup["idmap"]["account_id"],
        ];

        $dex_rule_ref01_markdef_up0_name = "description";
        $dex_rule_ref01_markdef_up0_value = "Mark01-dex_rule_ref01_" . $setup["now"];
        $dex_rule_ref01_data_up0_up[$dex_rule_ref01_markdef_up0_name] = $dex_rule_ref01_markdef_up0_value;

        $dex_rule_ref01_resdata_up0_result = $dex_rule_ref01_ent->update($dex_rule_ref01_data_up0_up, null);
        $dex_rule_ref01_resdata_up0 = Helpers::to_map(is_object($dex_rule_ref01_resdata_up0_result) && method_exists($dex_rule_ref01_resdata_up0_result, 'data_get') ? $dex_rule_ref01_resdata_up0_result->data_get() : $dex_rule_ref01_resdata_up0_result);
        $this->assertNotNull($dex_rule_ref01_resdata_up0);
        $this->assertEquals($dex_rule_ref01_resdata_up0["id"], $dex_rule_ref01_data_up0_up["id"]);
        $this->assertEquals($dex_rule_ref01_resdata_up0[$dex_rule_ref01_markdef_up0_name], $dex_rule_ref01_markdef_up0_value);

        // LOAD
        $dex_rule_ref01_match_dt0 = [
            "id" => $dex_rule_ref01_data["id"],
        ];
        $dex_rule_ref01_data_dt0_loaded = $dex_rule_ref01_ent->load($dex_rule_ref01_match_dt0, null);
        $dex_rule_ref01_data_dt0_load_result = Helpers::to_map(is_object($dex_rule_ref01_data_dt0_loaded) && method_exists($dex_rule_ref01_data_dt0_loaded, 'data_get') ? $dex_rule_ref01_data_dt0_loaded->data_get() : $dex_rule_ref01_data_dt0_loaded);
        $this->assertNotNull($dex_rule_ref01_data_dt0_load_result);
        $this->assertEquals($dex_rule_ref01_data_dt0_load_result["id"], $dex_rule_ref01_data["id"]);

        // REMOVE
        $dex_rule_ref01_match_rm0 = [
            "id" => $dex_rule_ref01_data["id"],
        ];
        $dex_rule_ref01_ent->remove($dex_rule_ref01_match_rm0, null);

    }
}

function dex_rule_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/dex_rule/DexRuleTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudflareZeroTrustSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["dex_rule01", "dex_rule02", "dex_rule03", "account01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID" => $idmap,
        "CLOUDFLARE_ZERO_TRUST_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN" => "FALSE",
        "CLOUDFLARE_ZERO_TRUST_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["account_id"])) {
        $idmap_resolved["account_id"] = $idmap_resolved["account01"];
    }

    if ($env["CLOUDFLARE_ZERO_TRUST_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["CLOUDFLARE_ZERO_TRUST_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new CloudflareZeroTrustSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["CLOUDFLARE_ZERO_TRUST_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
