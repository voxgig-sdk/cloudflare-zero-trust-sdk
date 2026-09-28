<?php
declare(strict_types=1);

// TunnelTunnelWarpConnectorClient direct test

require_once __DIR__ . '/../cloudflarezerotrust_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;

class TunnelTunnelWarpConnectorClientDirectTest extends TestCase
{
    public function test_direct_load_tunnel_tunnel_warp_connector_client(): void
    {
        $setup = tunnel_tunnel_warp_connector_client_direct_setup(["id" => "direct01"]);
        [$_shouldSkip, $_reason] = Runner::is_control_skipped("direct", "direct-load-tunnel_tunnel_warp_connector_client", $setup["live"] ? "live" : "unit");
        if ($_shouldSkip) {
            $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
            return;
        }
        $client = $setup["client"];

        $params = [];
        $query = [];
        if ($setup["live"]) {
            $params["account_id"] = "699d98642c564d2e855e9661899b7252";
            $params["connector_id"] = "1bedc50d-42b3-473c-b108-ff3d10c0d925";
            $params["warp_connector_id"] = "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415";
        } else {
            $params["account_id"] = "direct01";
            $params["connector_id"] = "direct02";
            $params["warp_connector_id"] = "direct03";
        }

        $result = $client->direct([
            "path" => "accounts/{account_id}/warp_connector/{warp_connector_id}/connectors/{connector_id}",
            "method" => "GET",
            "params" => $params,
            "query" => $query,
        ]);
        if ($setup["live"]) {
            // Live mode is lenient: synthetic IDs frequently 4xx. Skip
            // rather than fail when the load endpoint isn't reachable
            // with the IDs we can construct from setup.idmap.
            if (!empty($result["err"])) {
                $this->markTestSkipped("load call failed (likely synthetic IDs against live API): " . (string)$result["err"]);
                return;
            }
            if (empty($result["ok"])) {
                $this->markTestSkipped("load call not ok (likely synthetic IDs against live API)");
                return;
            }
            $status = Helpers::to_int($result["status"]);
            if ($status < 200 || $status >= 300) {
                $this->markTestSkipped("expected 2xx status, got " . $status);
                return;
            }
        } else {
            $this->assertArrayNotHasKey("err", $result);
            $this->assertTrue($result["ok"]);
            $this->assertEquals(200, Helpers::to_int($result["status"]));
            $this->assertNotNull($result["data"]);
            if (is_array($result["data"]) && isset($result["data"]["id"])) {
                $this->assertEquals("direct01", $result["data"]["id"]);
            }
            $this->assertCount(1, $setup["calls"]);
        }
    }

}


function tunnel_tunnel_warp_connector_client_direct_setup($mockres)
{
    Runner::load_env_local();

    $calls = new \ArrayObject();

    $env = Runner::env_override([
        "CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_TUNNEL_WARP_CONNECTOR_CLIENT_ENTID" => [],
        "CLOUDFLARE_ZERO_TRUST_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_ZERO_TRUST_APIKEY" => "",
    ]);

    $live = $env["CLOUDFLARE_ZERO_TRUST_TEST_LIVE"] === "TRUE";

    if ($live) {
        // Merged so the generated fields win: sdk-test-control.json's
        // test.client.options adds to the live client, it does not redirect it.
        $merged_opts = array_merge(Runner::live_client_options(), [
            "apikey" => $env["CLOUDFLARE_ZERO_TRUST_APIKEY"],
        ]);
        $client = new CloudflareZeroTrustSDK($merged_opts);
        return [
            "client" => $client,
            "calls" => $calls,
            "live" => true,
            "idmap" => [],
        ];
    }

    $mock_fetch = function ($url, $init) use ($calls, $mockres) {
        $calls[] = ["url" => $url, "init" => $init];
        return [
            [
                "status" => 200,
                "statusText" => "OK",
                "headers" => [],
                "json" => function () use ($mockres) {
                    if ($mockres !== null) {
                        return $mockres;
                    }
                    return ["id" => "direct01"];
                },
                "body" => "mock",
            ],
            null,
        ];
    };

    $client = new CloudflareZeroTrustSDK([
        "base" => "http://localhost:8080",
        "system" => [
            "fetch" => $mock_fetch,
        ],
    ]);

    return [
        "client" => $client,
        "calls" => $calls,
        "live" => false,
        "idmap" => [],
    ];
}
