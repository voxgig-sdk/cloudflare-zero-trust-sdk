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

func TestPhysicalDeviceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PhysicalDevice(nil)
		if ent == nil {
			t.Fatal("expected non-nil PhysicalDeviceEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"physical_device": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.PhysicalDevice(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.PhysicalDevice(nil).Stream("list", nil, nil) {
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
		setup := physical_deviceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "physical_device." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_PHYSICAL_DEVICE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		physicalDeviceRef01Ent := client.PhysicalDevice(nil)
		physicalDeviceRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "physical_device"}), "physical_device_ref01"))
		physicalDeviceRef01Data["account_id"] = setup.idmap["account01"]
		physicalDeviceRef01Data["device_id"] = setup.idmap["device01"]

		physicalDeviceRef01DataResult, err := physicalDeviceRef01Ent.Create(physicalDeviceRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		physicalDeviceRef01Data = core.ToMapAny(entityData(physicalDeviceRef01DataResult))
		if physicalDeviceRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if physicalDeviceRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		physicalDeviceRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		physicalDeviceRef01ListResult, err := physicalDeviceRef01Ent.List(physicalDeviceRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		physicalDeviceRef01List, physicalDeviceRef01ListOk := physicalDeviceRef01ListResult.([]any)
		if !physicalDeviceRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", physicalDeviceRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(physicalDeviceRef01List), map[string]any{"id": physicalDeviceRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		physicalDeviceRef01DataUp0Up := map[string]any{
			"id": physicalDeviceRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		physicalDeviceRef01ResdataUp0Result, err := physicalDeviceRef01Ent.Update(physicalDeviceRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		physicalDeviceRef01ResdataUp0 := core.ToMapAny(entityData(physicalDeviceRef01ResdataUp0Result))
		if physicalDeviceRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if physicalDeviceRef01ResdataUp0["id"] != physicalDeviceRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		physicalDeviceRef01MatchDt0 := map[string]any{
			"id": physicalDeviceRef01Data["id"],
		}
		physicalDeviceRef01DataDt0Loaded, err := physicalDeviceRef01Ent.Load(physicalDeviceRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		physicalDeviceRef01DataDt0LoadResult := core.ToMapAny(entityData(physicalDeviceRef01DataDt0Loaded))
		if physicalDeviceRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if physicalDeviceRef01DataDt0LoadResult["id"] != physicalDeviceRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		physicalDeviceRef01MatchRm0 := map[string]any{
			"id": physicalDeviceRef01Data["id"],
		}
		_, err = physicalDeviceRef01Ent.Remove(physicalDeviceRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		physicalDeviceRef01MatchRt0 := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		physicalDeviceRef01ListRt0Result, err := physicalDeviceRef01Ent.List(physicalDeviceRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		physicalDeviceRef01ListRt0, physicalDeviceRef01ListRt0Ok := physicalDeviceRef01ListRt0Result.([]any)
		if !physicalDeviceRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", physicalDeviceRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(physicalDeviceRef01ListRt0), map[string]any{"id": physicalDeviceRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func physical_deviceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "physical_device", "PhysicalDeviceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read physical_device test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse physical_device test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"physical_device01", "physical_device02", "physical_device03", "account01", "device01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_ZERO_TRUST_TEST_PHYSICAL_DEVICE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_ZERO_TRUST_TEST_PHYSICAL_DEVICE_ENTID": idmap,
		"CLOUDFLARE_ZERO_TRUST_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_ZERO_TRUST_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_ZERO_TRUST_TEST_PHYSICAL_DEVICE_ENTID"])
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
