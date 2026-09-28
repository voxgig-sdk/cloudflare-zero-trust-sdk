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

func TestDexRuleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DexRule(nil)
		if ent == nil {
			t.Fatal("expected non-nil DexRuleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := dex_ruleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "dex_rule." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		dexRuleRef01Ent := client.DexRule(nil)
		dexRuleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "dex_rule"}), "dex_rule_ref01"))
		dexRuleRef01Data["account_id"] = setup.idmap["account01"]

		dexRuleRef01DataResult, err := dexRuleRef01Ent.Create(dexRuleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		dexRuleRef01Data = core.ToMapAny(entityData(dexRuleRef01DataResult))
		if dexRuleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if dexRuleRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		dexRuleRef01DataUp0Up := map[string]any{
			"id": dexRuleRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		dexRuleRef01MarkdefUp0Name := "description"
		dexRuleRef01MarkdefUp0Value := fmt.Sprintf("Mark01-dex_rule_ref01_%d", setup.now)
		dexRuleRef01DataUp0Up[dexRuleRef01MarkdefUp0Name] = dexRuleRef01MarkdefUp0Value

		dexRuleRef01ResdataUp0Result, err := dexRuleRef01Ent.Update(dexRuleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		dexRuleRef01ResdataUp0 := core.ToMapAny(entityData(dexRuleRef01ResdataUp0Result))
		if dexRuleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if dexRuleRef01ResdataUp0["id"] != dexRuleRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if dexRuleRef01ResdataUp0[dexRuleRef01MarkdefUp0Name] != dexRuleRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", dexRuleRef01MarkdefUp0Name, dexRuleRef01ResdataUp0[dexRuleRef01MarkdefUp0Name])
		}

		// LOAD
		dexRuleRef01MatchDt0 := map[string]any{
			"id": dexRuleRef01Data["id"],
		}
		dexRuleRef01DataDt0Loaded, err := dexRuleRef01Ent.Load(dexRuleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		dexRuleRef01DataDt0LoadResult := core.ToMapAny(entityData(dexRuleRef01DataDt0Loaded))
		if dexRuleRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if dexRuleRef01DataDt0LoadResult["id"] != dexRuleRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		dexRuleRef01MatchRm0 := map[string]any{
			"id": dexRuleRef01Data["id"],
		}
		_, err = dexRuleRef01Ent.Remove(dexRuleRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func dex_ruleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "dex_rule", "DexRuleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read dex_rule test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse dex_rule test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"dex_rule01", "dex_rule02", "dex_rule03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID": idmap,
		"CLOUDFLARE_ZERO_TRUST_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_ZERO_TRUST_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_ZERO_TRUST_TEST_DEX_RULE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
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
