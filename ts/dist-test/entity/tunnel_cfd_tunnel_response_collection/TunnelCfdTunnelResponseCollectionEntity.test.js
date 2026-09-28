"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('TunnelCfdTunnelResponseCollectionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.TunnelCfdTunnelResponseCollection();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tunnel_cfd_tunnel_response_collection.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$ARRAY`", "key$": "result", "index$": 0 } }, "name": "tunnel_cfd_tunnel_response_collection", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cfd_tunnel", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "vpc1-", "k": "query", "n": "exclude_prefix", "or": "exclude_prefix", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "2019-10-12T07%3A20%3A50.52Z", "k": "query", "n": "existed_at", "or": "existed_at", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "vpc1-", "k": "query", "n": "include_prefix", "or": "include_prefix", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": true, "k": "query", "n": "is_deleted", "or": "is_deleted", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "ex": "blog", "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 5 }, { "a": true, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$NUMBER`", "index$": 6 }, { "a": true, "ex": "healthy", "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "ex": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "k": "query", "n": "uuid", "or": "uuid", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "ex": "2009-11-10T23:00:00Z", "k": "query", "n": "was_active_at", "or": "was_active_at", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "ex": "2009-11-10T23:00:00Z", "k": "query", "n": "was_inactive_at", "or": "was_inactive_at", "r": false, "t": "`$STRING`", "index$": 10 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cfd_tunnel", "q": { "exist": ["account_id", "exclude_prefix", "existed_at", "include_prefix", "is_deleted", "name", "page", "per_page", "status", "uuid", "was_active_at", "was_inactive_at"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cfd_tunnel" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "tunnel_cfd_tunnel_response_collection", "name__orig": "tunnel_cfd_tunnel_response_collection", "Name": "TunnelCfdTunnelResponseCollection", "name_": "tunnel_cfd_tunnel_response_collection", "name-": "tunnel-cfd-tunnel-response-collection", "NAME": "TUNNEL_CFD_TUNNEL_RESPONSE_COLLECTION", "index$": 64 }, { "active": true, "entity": "tunnel_cfd_tunnel_response_collection", "key$": "BasicTunnelCfdTunnelResponseCollectionFlow", "kind": "basic", "name": "BasicTunnelCfdTunnelResponseCollectionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "tunnel_cfd_tunnel_response_collection_ref01" } }], "index$": 0 }] }, 'TunnelCfdTunnelResponseCollection', { "GET /accounts/{account_id}/cfd_tunnel": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Cloudflare account ID", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/tunnel_account_id" }, "index$": 0 }, { "name": "name", "in": "query", "schema": { "description": "A user-friendly name for a tunnel.", "type": "string", "example": "blog", "x-ref": "#/components/schemas/tunnel_tunnel_name" }, "index$": 1 }, { "name": "is_deleted", "in": "query", "schema": { "description": "If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.", "type": "boolean", "example": true }, "index$": 2 }, { "name": "existed_at", "in": "query", "schema": { "description": "If provided, include only resources that were created (and not deleted) before this time. URL encoded.", "type": "string", "format": "url-encoded-date-time", "example": "2019-10-12T07%3A20%3A50.52Z", "x-ref": "#/components/schemas/tunnel_existed_at" }, "index$": 3 }, { "name": "uuid", "in": "query", "schema": { "description": "UUID of the tunnel.", "type": "string", "format": "uuid", "example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/tunnel_tunnel_id" }, "index$": 4 }, { "name": "was_active_at", "in": "query", "schema": { "type": "string", "format": "date-time", "example": "2009-11-10T23:00:00Z" }, "index$": 5 }, { "name": "was_inactive_at", "in": "query", "schema": { "type": "string", "format": "date-time", "example": "2009-11-10T23:00:00Z" }, "index$": 6 }, { "name": "include_prefix", "in": "query", "schema": { "type": "string", "example": "vpc1-" }, "index$": 7 }, { "name": "exclude_prefix", "in": "query", "schema": { "type": "string", "example": "vpc1-" }, "index$": 8 }, { "name": "status", "in": "query", "schema": { "description": "The status of the tunnel. Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).", "type": "string", "example": "healthy", "enum": ["inactive", "degraded", "healthy", "down"], "x-ref": "#/components/schemas/tunnel_status" }, "index$": 9 }, { "name": "per_page", "in": "query", "schema": { "description": "Number of results to display.", "type": "number", "maximum": 1000, "minimum": 1, "x-ref": "#/components/schemas/tunnel_per_page" }, "index$": 10 }, { "name": "page", "in": "query", "schema": { "description": "Page number of paginated results.", "type": "number", "default": 1, "minimum": 1, "x-ref": "#/components/schemas/tunnel_page_number" }, "index$": 11 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let tunnel_cfd_tunnel_response_collection_ref01_data = Object.values(setup.data.existing.tunnel_cfd_tunnel_response_collection)[0];
        // LIST
        const tunnel_cfd_tunnel_response_collection_ref01_ent = client.TunnelCfdTunnelResponseCollection();
        const tunnel_cfd_tunnel_response_collection_ref01_match = {};
        tunnel_cfd_tunnel_response_collection_ref01_match['account_id'] = setup.idmap['account01'];
        const tunnel_cfd_tunnel_response_collection_ref01_list = (await tunnel_cfd_tunnel_response_collection_ref01_ent.list(tunnel_cfd_tunnel_response_collection_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tunnel_cfd_tunnel_response_collection/TunnelCfdTunnelResponseCollectionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tunnel_cfd_tunnel_response_collection01', 'tunnel_cfd_tunnel_response_collection02', 'tunnel_cfd_tunnel_response_collection03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_CFD_TUNNEL_RESPONSE_COLLECTION_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_CFD_TUNNEL_RESPONSE_COLLECTION_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_CFD_TUNNEL_RESPONSE_COLLECTION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudflareZeroTrustSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDFLARE_ZERO_TRUST_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=TunnelCfdTunnelResponseCollectionEntity.test.js.map