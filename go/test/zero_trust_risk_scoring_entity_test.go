package sdktest

import (
	"encoding/json"
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

func TestZeroTrustRiskScoringEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ZeroTrustRiskScoring(nil)
		if ent == nil {
			t.Fatal("expected non-nil ZeroTrustRiskScoringEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := zero_trust_risk_scoringBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "zero_trust_risk_scoring." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_RISK_SCORING_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		zeroTrustRiskScoringRef01Ent := client.ZeroTrustRiskScoring(nil)
		zeroTrustRiskScoringRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "zero_trust_risk_scoring"}), "zero_trust_risk_scoring_ref01"))
		zeroTrustRiskScoringRef01Data["account_id"] = setup.idmap["account01"]
		zeroTrustRiskScoringRef01Data["zt_risk_scoring_id"] = setup.idmap["zt_risk_scoring01"]

		zeroTrustRiskScoringRef01DataResult, err := zeroTrustRiskScoringRef01Ent.Create(zeroTrustRiskScoringRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		zeroTrustRiskScoringRef01Data = core.ToMapAny(entityData(zeroTrustRiskScoringRef01DataResult))
		if zeroTrustRiskScoringRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		zeroTrustRiskScoringRef01DataUp0Up := map[string]any{
		}

		zeroTrustRiskScoringRef01ResdataUp0Result, err := zeroTrustRiskScoringRef01Ent.Update(zeroTrustRiskScoringRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		zeroTrustRiskScoringRef01ResdataUp0 := core.ToMapAny(entityData(zeroTrustRiskScoringRef01ResdataUp0Result))
		if zeroTrustRiskScoringRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

		// LOAD
		zeroTrustRiskScoringRef01MatchDt0 := map[string]any{}
		zeroTrustRiskScoringRef01DataDt0Loaded, err := zeroTrustRiskScoringRef01Ent.Load(zeroTrustRiskScoringRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if zeroTrustRiskScoringRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func zero_trust_risk_scoringBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "zero_trust_risk_scoring", "ZeroTrustRiskScoringTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read zero_trust_risk_scoring test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse zero_trust_risk_scoring test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"zero_trust_risk_scoring01", "zero_trust_risk_scoring02", "zero_trust_risk_scoring03", "account01", "zt_risk_scoring01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_RISK_SCORING_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_RISK_SCORING_ENTID": idmap,
		"CLOUDFLARE_ZERO_TRUST_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_ZERO_TRUST_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_RISK_SCORING_ENTID"])
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
