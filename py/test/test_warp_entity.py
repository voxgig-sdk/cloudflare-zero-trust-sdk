# Warp entity test

import json
import os
import time

import pytest

from cloudflarezerotrust_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflarezerotrust_sdk import CloudflareZeroTrustSDK
from cloudflarezerotrust_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestWarpEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareZeroTrustSDK.test(None, None)
        ent = testsdk.Warp(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _warp_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "warp." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_ZERO_TRUST_TEST_WARP_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        warp_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.warp")))
        warp_ref01_data = None
        if len(warp_ref01_data_raw) > 0:
            warp_ref01_data = helpers.to_map(warp_ref01_data_raw[0][1])

        # UPDATE
        warp_ref01_ent = client.Warp(None)
        warp_ref01_data_up0_up = {
            "id": warp_ref01_data["id"],
            "account_id": setup["idmap"]["account_id"],
        }

        warp_ref01_markdef_up0_name = "comment"
        warp_ref01_markdef_up0_value = "Mark01-warp_ref01_" + str(setup["now"])
        warp_ref01_data_up0_up[warp_ref01_markdef_up0_name] = warp_ref01_markdef_up0_value

        warp_ref01_resdata_up0 = helpers.to_map(runner.entity_data(warp_ref01_ent.update(warp_ref01_data_up0_up, None)))
        assert warp_ref01_resdata_up0 is not None
        assert warp_ref01_resdata_up0["id"] == warp_ref01_data_up0_up["id"]
        assert warp_ref01_resdata_up0[warp_ref01_markdef_up0_name] == warp_ref01_markdef_up0_value

        # LOAD
        warp_ref01_match_dt0 = {
            "id": warp_ref01_data["id"],
        }
        warp_ref01_data_dt0_loaded = warp_ref01_ent.load(warp_ref01_match_dt0, None)
        warp_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(warp_ref01_data_dt0_loaded))
        assert warp_ref01_data_dt0_load_result is not None
        assert warp_ref01_data_dt0_load_result["id"] == warp_ref01_data["id"]



def _warp_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/warp/WarpTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareZeroTrustSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["warp01", "warp02", "warp03", "account01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "CLOUDFLARE_ZERO_TRUST_TEST_WARP_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_ZERO_TRUST_TEST_WARP_ENTID": idmap,
        "CLOUDFLARE_ZERO_TRUST_TEST_LIVE": "FALSE",
        "CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_ZERO_TRUST_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_ZERO_TRUST_TEST_WARP_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("account_id") is None:
        idmap_resolved["account_id"] = idmap_resolved.get("account01")

    if env.get("CLOUDFLARE_ZERO_TRUST_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("CLOUDFLARE_ZERO_TRUST_APIKEY"),
            },
            extra or {},
        ])
        client = CloudflareZeroTrustSDK(helpers.to_map(merged_opts))

    _live = env.get("CLOUDFLARE_ZERO_TRUST_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
