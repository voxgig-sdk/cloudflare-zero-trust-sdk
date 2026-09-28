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

func TestZeroTrustGatewayGatewayAccountLoggingSettingEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ZeroTrustGatewayGatewayAccountLoggingSetting(nil)
		if ent == nil {
			t.Fatal("expected non-nil ZeroTrustGatewayGatewayAccountLoggingSettingEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := zero_trust_gateway_gateway_account_logging_settingBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "zero_trust_gateway_gateway_account_logging_setting." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_GATEWAY_ACCOUNT_LOGGING_SETTING_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		zeroTrustGatewayGatewayAccountLoggingSettingRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.zero_trust_gateway_gateway_account_logging_setting")))
		var zeroTrustGatewayGatewayAccountLoggingSettingRef01Data map[string]any
		if len(zeroTrustGatewayGatewayAccountLoggingSettingRef01DataRaw) > 0 {
			zeroTrustGatewayGatewayAccountLoggingSettingRef01Data = core.ToMapAny(zeroTrustGatewayGatewayAccountLoggingSettingRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = zeroTrustGatewayGatewayAccountLoggingSettingRef01Data

		// UPDATE
		zeroTrustGatewayGatewayAccountLoggingSettingRef01Ent := client.ZeroTrustGatewayGatewayAccountLoggingSetting(nil)
		zeroTrustGatewayGatewayAccountLoggingSettingRef01DataUp0Up := map[string]any{
		}

		zeroTrustGatewayGatewayAccountLoggingSettingRef01ResdataUp0Result, err := zeroTrustGatewayGatewayAccountLoggingSettingRef01Ent.Update(zeroTrustGatewayGatewayAccountLoggingSettingRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		zeroTrustGatewayGatewayAccountLoggingSettingRef01ResdataUp0 := core.ToMapAny(entityData(zeroTrustGatewayGatewayAccountLoggingSettingRef01ResdataUp0Result))
		if zeroTrustGatewayGatewayAccountLoggingSettingRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

		// LOAD
		zeroTrustGatewayGatewayAccountLoggingSettingRef01MatchDt0 := map[string]any{}
		zeroTrustGatewayGatewayAccountLoggingSettingRef01DataDt0Loaded, err := zeroTrustGatewayGatewayAccountLoggingSettingRef01Ent.Load(zeroTrustGatewayGatewayAccountLoggingSettingRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if zeroTrustGatewayGatewayAccountLoggingSettingRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func zero_trust_gateway_gateway_account_logging_settingBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "zero_trust_gateway_gateway_account_logging_setting", "ZeroTrustGatewayGatewayAccountLoggingSettingTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read zero_trust_gateway_gateway_account_logging_setting test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse zero_trust_gateway_gateway_account_logging_setting test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"zero_trust_gateway_gateway_account_logging_setting01", "zero_trust_gateway_gateway_account_logging_setting02", "zero_trust_gateway_gateway_account_logging_setting03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_GATEWAY_ACCOUNT_LOGGING_SETTING_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_GATEWAY_ACCOUNT_LOGGING_SETTING_ENTID": idmap,
		"CLOUDFLARE_ZERO_TRUST_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_ZERO_TRUST_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_GATEWAY_ACCOUNT_LOGGING_SETTING_ENTID"])
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
