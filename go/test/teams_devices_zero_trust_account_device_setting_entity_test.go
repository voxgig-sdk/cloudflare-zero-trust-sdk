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

func TestTeamsDevicesZeroTrustAccountDeviceSettingEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TeamsDevicesZeroTrustAccountDeviceSetting(nil)
		if ent == nil {
			t.Fatal("expected non-nil TeamsDevicesZeroTrustAccountDeviceSettingEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := teams_devices_zero_trust_account_device_settingBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "teams_devices_zero_trust_account_device_setting." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_ZERO_TRUST_ACCOUNT_DEVICE_SETTING_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		teamsDevicesZeroTrustAccountDeviceSettingRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.teams_devices_zero_trust_account_device_setting")))
		var teamsDevicesZeroTrustAccountDeviceSettingRef01Data map[string]any
		if len(teamsDevicesZeroTrustAccountDeviceSettingRef01DataRaw) > 0 {
			teamsDevicesZeroTrustAccountDeviceSettingRef01Data = core.ToMapAny(teamsDevicesZeroTrustAccountDeviceSettingRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = teamsDevicesZeroTrustAccountDeviceSettingRef01Data

		// UPDATE
		teamsDevicesZeroTrustAccountDeviceSettingRef01Ent := client.TeamsDevicesZeroTrustAccountDeviceSetting(nil)
		teamsDevicesZeroTrustAccountDeviceSettingRef01DataUp0Up := map[string]any{
		}

		teamsDevicesZeroTrustAccountDeviceSettingRef01MarkdefUp0Name := "external_emergency_signal_fingerprint"
		teamsDevicesZeroTrustAccountDeviceSettingRef01MarkdefUp0Value := fmt.Sprintf("Mark01-teams_devices_zero_trust_account_device_setting_ref01_%d", setup.now)
		teamsDevicesZeroTrustAccountDeviceSettingRef01DataUp0Up[teamsDevicesZeroTrustAccountDeviceSettingRef01MarkdefUp0Name] = teamsDevicesZeroTrustAccountDeviceSettingRef01MarkdefUp0Value

		teamsDevicesZeroTrustAccountDeviceSettingRef01ResdataUp0Result, err := teamsDevicesZeroTrustAccountDeviceSettingRef01Ent.Update(teamsDevicesZeroTrustAccountDeviceSettingRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		teamsDevicesZeroTrustAccountDeviceSettingRef01ResdataUp0 := core.ToMapAny(entityData(teamsDevicesZeroTrustAccountDeviceSettingRef01ResdataUp0Result))
		if teamsDevicesZeroTrustAccountDeviceSettingRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if teamsDevicesZeroTrustAccountDeviceSettingRef01ResdataUp0[teamsDevicesZeroTrustAccountDeviceSettingRef01MarkdefUp0Name] != teamsDevicesZeroTrustAccountDeviceSettingRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", teamsDevicesZeroTrustAccountDeviceSettingRef01MarkdefUp0Name, teamsDevicesZeroTrustAccountDeviceSettingRef01ResdataUp0[teamsDevicesZeroTrustAccountDeviceSettingRef01MarkdefUp0Name])
		}

		// LOAD
		teamsDevicesZeroTrustAccountDeviceSettingRef01MatchDt0 := map[string]any{}
		teamsDevicesZeroTrustAccountDeviceSettingRef01DataDt0Loaded, err := teamsDevicesZeroTrustAccountDeviceSettingRef01Ent.Load(teamsDevicesZeroTrustAccountDeviceSettingRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if teamsDevicesZeroTrustAccountDeviceSettingRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func teams_devices_zero_trust_account_device_settingBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "teams_devices_zero_trust_account_device_setting", "TeamsDevicesZeroTrustAccountDeviceSettingTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read teams_devices_zero_trust_account_device_setting test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse teams_devices_zero_trust_account_device_setting test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"teams_devices_zero_trust_account_device_setting01", "teams_devices_zero_trust_account_device_setting02", "teams_devices_zero_trust_account_device_setting03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_ZERO_TRUST_ACCOUNT_DEVICE_SETTING_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_ZERO_TRUST_ACCOUNT_DEVICE_SETTING_ENTID": idmap,
		"CLOUDFLARE_ZERO_TRUST_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_ZERO_TRUST_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_ZERO_TRUST_ACCOUNT_DEVICE_SETTING_ENTID"])
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
