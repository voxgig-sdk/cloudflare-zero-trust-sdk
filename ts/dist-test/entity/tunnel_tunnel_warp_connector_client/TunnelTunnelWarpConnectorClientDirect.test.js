"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('TunnelTunnelWarpConnectorClientDirect', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('direct-exists', async () => {
        const sdk = new __1.CloudflareZeroTrustSDK({
            base: 'http://localhost:8080',
            system: { fetch: async () => ({}) }
        });
        (0, node_assert_1.default)('function' === typeof sdk.direct);
        (0, node_assert_1.default)('function' === typeof sdk.prepare);
    });
    (0, node_test_1.test)('direct-load-tunnel_tunnel_warp_connector_client', async (t) => {
        if (liveScenariosActive()) {
            t.skip('Covered by live operation scenarios');
            return;
        }
        const setup = directSetup({ id: 'direct01' });
        if ((0, utility_1.maybeSkipControl)(t, 'direct', 'direct-load-tunnel_tunnel_warp_connector_client', setup.live))
            return;
        const { client, calls } = setup;
        const params = {};
        const query = {};
        if (setup.live) {
            params.account_id = "699d98642c564d2e855e9661899b7252";
            params.connector_id = "1bedc50d-42b3-473c-b108-ff3d10c0d925";
            params.warp_connector_id = "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415";
        }
        else {
            params.account_id = 'direct01';
            params.connector_id = 'direct02';
            params.warp_connector_id = 'direct03';
        }
        const result = await client.direct({
            path: 'accounts/{account_id}/warp_connector/{warp_connector_id}/connectors/{connector_id}',
            method: 'GET',
            params,
            query,
        });
        if (setup.live) {
            // STRICT live mode: a non-2xx is a real failure - this project owns
            // the server it points at, so there is nothing to be lenient about.
            //
            // What is NOT asserted here is the MOCK's own fixtures. `direct01`
            // is a scripted id and `calls` records the mock transport; neither
            // exists on a live run, so asserting them made strict mode mean
            // "compare the live server against the mock's script" - a suite that
            // could not pass against any real API, including this project's own.
            (0, node_assert_1.default)(result.ok === true, 'Live request failed: HTTP ' + result.status);
            (0, node_assert_1.default)(result.status >= 200 && result.status < 300);
            (0, node_assert_1.default)(null != result.data);
        }
        else {
            (0, node_assert_1.default)(result.ok === true);
            (0, node_assert_1.default)(result.status === 200);
            (0, node_assert_1.default)(null != result.data);
            (0, node_assert_1.default)(result.data.id === 'direct01');
            (0, node_assert_1.default)(calls.length === 1);
            (0, node_assert_1.default)(calls[0].init.method === 'GET');
            (0, node_assert_1.default)(calls[0].url.includes('direct01'));
            (0, node_assert_1.default)(calls[0].url.includes('direct02'));
            (0, node_assert_1.default)(calls[0].url.includes('direct03'));
        }
    });
});
function liveScenariosActive() { return false && process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE === 'TRUE'; }
function directSetup(mockres) {
    const calls = [];
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_TUNNEL_WARP_CONNECTOR_CLIENT_ENTID': {},
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    if (live) {
        const transport = (0, live_runner_1.createLiveTransport)();
        // Merged so the generated fields win: sdk-test-control.json's
        // test.client.options adds to the live client, it does not redirect it.
        const client = new __1.CloudflareZeroTrustSDK(Object.assign({}, (0, utility_1.liveClientOptions)(), { system: { fetch: transport.fetch },
            apikey: env.CLOUDFLARE_ZERO_TRUST_APIKEY,
        }));
        let idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_TUNNEL_WARP_CONNECTOR_CLIENT_ENTID'];
        if ('string' === typeof idmap && idmap.startsWith('{')) {
            idmap = JSON.parse(idmap);
        }
        return { client, calls, live, idmap, transport };
    }
    const mockFetch = async (url, init) => {
        calls.push({ url, init });
        return {
            status: 200,
            statusText: 'OK',
            headers: {},
            json: async () => (null != mockres ? mockres : { id: 'direct01' }),
        };
    };
    const client = new __1.CloudflareZeroTrustSDK({
        base: 'http://localhost:8080',
        system: { fetch: mockFetch },
    });
    return { client, calls, live, idmap: {} };
}
// direct() returns the raw response body. List endpoints often wrap the
// array in an envelope (e.g. { data: [...] }, { entities: [...] },
// { pagination, data: [...] }). The test transforms the raw body to
// extract the first array — either the body itself or the first array
// property of an envelope object.
function unwrapListData(data) {
    if (Array.isArray(data))
        return data;
    if (data && 'object' === typeof data) {
        for (const v of Object.values(data)) {
            if (Array.isArray(v))
                return v;
        }
    }
    return null;
}
//# sourceMappingURL=TunnelTunnelWarpConnectorClientDirect.test.js.map