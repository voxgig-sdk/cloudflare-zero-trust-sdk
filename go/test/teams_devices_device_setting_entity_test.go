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

func TestTeamsDevicesDeviceSettingEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TeamsDevicesDeviceSetting(nil)
		if ent == nil {
			t.Fatal("expected non-nil TeamsDevicesDeviceSettingEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := teams_devices_device_settingBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "teams_devices_device_setting." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEVICE_SETTING_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		teamsDevicesDeviceSettingRef01Ent := client.TeamsDevicesDeviceSetting(nil)
		teamsDevicesDeviceSettingRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "teams_devices_device_setting"}), "teams_devices_device_setting_ref01"))
		teamsDevicesDeviceSettingRef01Data["account_id"] = setup.idmap["account01"]

		teamsDevicesDeviceSettingRef01DataResult, err := teamsDevicesDeviceSettingRef01Ent.Create(teamsDevicesDeviceSettingRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		teamsDevicesDeviceSettingRef01Data = core.ToMapAny(entityData(teamsDevicesDeviceSettingRef01DataResult))
		if teamsDevicesDeviceSettingRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		teamsDevicesDeviceSettingRef01DataUp0Up := map[string]any{
			"account_id": setup.idmap["account_id"],
		}

		teamsDevicesDeviceSettingRef01MarkdefUp0Name := "description"
		teamsDevicesDeviceSettingRef01MarkdefUp0Value := fmt.Sprintf("Mark01-teams_devices_device_setting_ref01_%d", setup.now)
		teamsDevicesDeviceSettingRef01DataUp0Up[teamsDevicesDeviceSettingRef01MarkdefUp0Name] = teamsDevicesDeviceSettingRef01MarkdefUp0Value

		teamsDevicesDeviceSettingRef01ResdataUp0Result, err := teamsDevicesDeviceSettingRef01Ent.Update(teamsDevicesDeviceSettingRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		teamsDevicesDeviceSettingRef01ResdataUp0 := core.ToMapAny(entityData(teamsDevicesDeviceSettingRef01ResdataUp0Result))
		if teamsDevicesDeviceSettingRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if teamsDevicesDeviceSettingRef01ResdataUp0[teamsDevicesDeviceSettingRef01MarkdefUp0Name] != teamsDevicesDeviceSettingRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", teamsDevicesDeviceSettingRef01MarkdefUp0Name, teamsDevicesDeviceSettingRef01ResdataUp0[teamsDevicesDeviceSettingRef01MarkdefUp0Name])
		}

		// LOAD
		teamsDevicesDeviceSettingRef01MatchDt0 := map[string]any{}
		teamsDevicesDeviceSettingRef01DataDt0Loaded, err := teamsDevicesDeviceSettingRef01Ent.Load(teamsDevicesDeviceSettingRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if teamsDevicesDeviceSettingRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func teams_devices_device_settingBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "teams_devices_device_setting", "TeamsDevicesDeviceSettingTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read teams_devices_device_setting test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse teams_devices_device_setting test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"teams_devices_device_setting01", "teams_devices_device_setting02", "teams_devices_device_setting03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEVICE_SETTING_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEVICE_SETTING_ENTID": idmap,
		"CLOUDFLARE_ZERO_TRUST_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_ZERO_TRUST_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEVICE_SETTING_ENTID"])
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
