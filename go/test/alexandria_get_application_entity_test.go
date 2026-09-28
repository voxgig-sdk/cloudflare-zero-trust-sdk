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

func TestAlexandriaGetApplicationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AlexandriaGetApplication(nil)
		if ent == nil {
			t.Fatal("expected non-nil AlexandriaGetApplicationEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"alexandria_get_application": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.AlexandriaGetApplication(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.AlexandriaGetApplication(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := alexandria_get_applicationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "alexandria_get_application." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_APPLICATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		alexandriaGetApplicationRef01Ent := client.AlexandriaGetApplication(nil)
		alexandriaGetApplicationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "alexandria_get_application"}), "alexandria_get_application_ref01"))
		alexandriaGetApplicationRef01Data["account_id"] = setup.idmap["account01"]

		alexandriaGetApplicationRef01DataResult, err := alexandriaGetApplicationRef01Ent.Create(alexandriaGetApplicationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		alexandriaGetApplicationRef01Data = core.ToMapAny(entityData(alexandriaGetApplicationRef01DataResult))
		if alexandriaGetApplicationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if alexandriaGetApplicationRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		alexandriaGetApplicationRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		alexandriaGetApplicationRef01ListResult, err := alexandriaGetApplicationRef01Ent.List(alexandriaGetApplicationRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		alexandriaGetApplicationRef01List, alexandriaGetApplicationRef01ListOk := alexandriaGetApplicationRef01ListResult.([]any)
		if !alexandriaGetApplicationRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", alexandriaGetApplicationRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(alexandriaGetApplicationRef01List), map[string]any{"id": alexandriaGetApplicationRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		alexandriaGetApplicationRef01DataUp0Up := map[string]any{
			"id": alexandriaGetApplicationRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		alexandriaGetApplicationRef01MarkdefUp0Name := "human_id"
		alexandriaGetApplicationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-alexandria_get_application_ref01_%d", setup.now)
		alexandriaGetApplicationRef01DataUp0Up[alexandriaGetApplicationRef01MarkdefUp0Name] = alexandriaGetApplicationRef01MarkdefUp0Value

		alexandriaGetApplicationRef01ResdataUp0Result, err := alexandriaGetApplicationRef01Ent.Update(alexandriaGetApplicationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		alexandriaGetApplicationRef01ResdataUp0 := core.ToMapAny(entityData(alexandriaGetApplicationRef01ResdataUp0Result))
		if alexandriaGetApplicationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if alexandriaGetApplicationRef01ResdataUp0["id"] != alexandriaGetApplicationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if alexandriaGetApplicationRef01ResdataUp0[alexandriaGetApplicationRef01MarkdefUp0Name] != alexandriaGetApplicationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", alexandriaGetApplicationRef01MarkdefUp0Name, alexandriaGetApplicationRef01ResdataUp0[alexandriaGetApplicationRef01MarkdefUp0Name])
		}

		// LOAD
		alexandriaGetApplicationRef01MatchDt0 := map[string]any{
			"id": alexandriaGetApplicationRef01Data["id"],
		}
		alexandriaGetApplicationRef01DataDt0Loaded, err := alexandriaGetApplicationRef01Ent.Load(alexandriaGetApplicationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		alexandriaGetApplicationRef01DataDt0LoadResult := core.ToMapAny(entityData(alexandriaGetApplicationRef01DataDt0Loaded))
		if alexandriaGetApplicationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if alexandriaGetApplicationRef01DataDt0LoadResult["id"] != alexandriaGetApplicationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func alexandria_get_applicationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "alexandria_get_application", "AlexandriaGetApplicationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read alexandria_get_application test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse alexandria_get_application test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"alexandria_get_application01", "alexandria_get_application02", "alexandria_get_application03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_APPLICATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_APPLICATION_ENTID": idmap,
		"CLOUDFLARE_ZERO_TRUST_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_ZERO_TRUST_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_ZERO_TRUST_TEST_ALEXANDRIA_GET_APPLICATION_ENTID"])
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
