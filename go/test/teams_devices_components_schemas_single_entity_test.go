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

func TestTeamsDevicesComponentsSchemasSingleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TeamsDevicesComponentsSchemasSingle(nil)
		if ent == nil {
			t.Fatal("expected non-nil TeamsDevicesComponentsSchemasSingleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := teams_devices_components_schemas_singleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "teams_devices_components_schemas_single." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_COMPONENTS_SCHEMAS_SINGLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		teamsDevicesComponentsSchemasSingleRef01Ent := client.TeamsDevicesComponentsSchemasSingle(nil)
		teamsDevicesComponentsSchemasSingleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "teams_devices_components_schemas_single"}), "teams_devices_components_schemas_single_ref01"))
		teamsDevicesComponentsSchemasSingleRef01Data["account_id"] = setup.idmap["account01"]

		teamsDevicesComponentsSchemasSingleRef01DataResult, err := teamsDevicesComponentsSchemasSingleRef01Ent.Create(teamsDevicesComponentsSchemasSingleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		teamsDevicesComponentsSchemasSingleRef01Data = core.ToMapAny(entityData(teamsDevicesComponentsSchemasSingleRef01DataResult))
		if teamsDevicesComponentsSchemasSingleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		teamsDevicesComponentsSchemasSingleRef01DataUp0Up := map[string]any{
			"account_id": setup.idmap["account_id"],
		}

		teamsDevicesComponentsSchemasSingleRef01MarkdefUp0Name := "name"
		teamsDevicesComponentsSchemasSingleRef01MarkdefUp0Value := fmt.Sprintf("Mark01-teams_devices_components_schemas_single_ref01_%d", setup.now)
		teamsDevicesComponentsSchemasSingleRef01DataUp0Up[teamsDevicesComponentsSchemasSingleRef01MarkdefUp0Name] = teamsDevicesComponentsSchemasSingleRef01MarkdefUp0Value

		teamsDevicesComponentsSchemasSingleRef01ResdataUp0Result, err := teamsDevicesComponentsSchemasSingleRef01Ent.Update(teamsDevicesComponentsSchemasSingleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		teamsDevicesComponentsSchemasSingleRef01ResdataUp0 := core.ToMapAny(entityData(teamsDevicesComponentsSchemasSingleRef01ResdataUp0Result))
		if teamsDevicesComponentsSchemasSingleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if teamsDevicesComponentsSchemasSingleRef01ResdataUp0[teamsDevicesComponentsSchemasSingleRef01MarkdefUp0Name] != teamsDevicesComponentsSchemasSingleRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", teamsDevicesComponentsSchemasSingleRef01MarkdefUp0Name, teamsDevicesComponentsSchemasSingleRef01ResdataUp0[teamsDevicesComponentsSchemasSingleRef01MarkdefUp0Name])
		}

		// LOAD
		teamsDevicesComponentsSchemasSingleRef01MatchDt0 := map[string]any{}
		teamsDevicesComponentsSchemasSingleRef01DataDt0Loaded, err := teamsDevicesComponentsSchemasSingleRef01Ent.Load(teamsDevicesComponentsSchemasSingleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if teamsDevicesComponentsSchemasSingleRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func teams_devices_components_schemas_singleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "teams_devices_components_schemas_single", "TeamsDevicesComponentsSchemasSingleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read teams_devices_components_schemas_single test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse teams_devices_components_schemas_single test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"teams_devices_components_schemas_single01", "teams_devices_components_schemas_single02", "teams_devices_components_schemas_single03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_COMPONENTS_SCHEMAS_SINGLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_COMPONENTS_SCHEMAS_SINGLE_ENTID": idmap,
		"CLOUDFLARE_ZERO_TRUST_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_ZERO_TRUST_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_COMPONENTS_SCHEMAS_SINGLE_ENTID"])
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
