package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go"
	"github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go/utility/struct"
)

func TestZeroTrustGatewaySingleResponse6Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ZeroTrustGatewaySingleResponse6(nil)
		if ent == nil {
			t.Fatal("expected non-nil ZeroTrustGatewaySingleResponse6Entity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := zero_trust_gateway_single_response_6BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "zero_trust_gateway_single_response_6." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_6_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		zeroTrustGatewaySingleResponse6Ref01Ent := client.ZeroTrustGatewaySingleResponse6(nil)
		zeroTrustGatewaySingleResponse6Ref01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "zero_trust_gateway_single_response_6"}), "zero_trust_gateway_single_response_6_ref01"))
		zeroTrustGatewaySingleResponse6Ref01Data["account_id"] = setup.idmap["account01"]

		zeroTrustGatewaySingleResponse6Ref01DataResult, err := zeroTrustGatewaySingleResponse6Ref01Ent.Create(zeroTrustGatewaySingleResponse6Ref01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		zeroTrustGatewaySingleResponse6Ref01Data = core.ToMapAny(entityData(zeroTrustGatewaySingleResponse6Ref01DataResult))
		if zeroTrustGatewaySingleResponse6Ref01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		zeroTrustGatewaySingleResponse6Ref01DataUp0Up := map[string]any{
		}

		zeroTrustGatewaySingleResponse6Ref01MarkdefUp0Name := "public_key"
		zeroTrustGatewaySingleResponse6Ref01MarkdefUp0Value := fmt.Sprintf("Mark01-zero_trust_gateway_single_response_6_ref01_%d", setup.now)
		zeroTrustGatewaySingleResponse6Ref01DataUp0Up[zeroTrustGatewaySingleResponse6Ref01MarkdefUp0Name] = zeroTrustGatewaySingleResponse6Ref01MarkdefUp0Value

		zeroTrustGatewaySingleResponse6Ref01ResdataUp0Result, err := zeroTrustGatewaySingleResponse6Ref01Ent.Update(zeroTrustGatewaySingleResponse6Ref01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		zeroTrustGatewaySingleResponse6Ref01ResdataUp0 := core.ToMapAny(entityData(zeroTrustGatewaySingleResponse6Ref01ResdataUp0Result))
		if zeroTrustGatewaySingleResponse6Ref01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if zeroTrustGatewaySingleResponse6Ref01ResdataUp0[zeroTrustGatewaySingleResponse6Ref01MarkdefUp0Name] != zeroTrustGatewaySingleResponse6Ref01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", zeroTrustGatewaySingleResponse6Ref01MarkdefUp0Name, zeroTrustGatewaySingleResponse6Ref01ResdataUp0[zeroTrustGatewaySingleResponse6Ref01MarkdefUp0Name])
		}

		// LOAD
		zeroTrustGatewaySingleResponse6Ref01MatchDt0 := map[string]any{}
		zeroTrustGatewaySingleResponse6Ref01DataDt0Loaded, err := zeroTrustGatewaySingleResponse6Ref01Ent.Load(zeroTrustGatewaySingleResponse6Ref01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if zeroTrustGatewaySingleResponse6Ref01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func zero_trust_gateway_single_response_6BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "zero_trust_gateway_single_response_6", "ZeroTrustGatewaySingleResponse6TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read zero_trust_gateway_single_response_6 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse zero_trust_gateway_single_response_6 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"zero_trust_gateway_single_response_601", "zero_trust_gateway_single_response_602", "zero_trust_gateway_single_response_603", "account01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_6_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_6_ENTID": idmap,
		"CLOUDFLARE_ZERO_TRUST_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_ZERO_TRUST_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_6_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CLOUDFLARE_ZERO_TRUST_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDFLARE_ZERO_TRUST_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCloudflareZeroTrustSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDFLARE_ZERO_TRUST_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
