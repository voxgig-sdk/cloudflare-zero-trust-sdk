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
(0, node_test_1.describe)('TunnelHostnameRouteResponseCollectionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.TunnelHostnameRouteResponseCollection();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tunnel_hostname_route_response_collection.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$ARRAY`", "key$": "result", "index$": 0 } }, "name": "tunnel_hostname_route_response_collection", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/zerotrust/routes/hostname", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "example%20comment", "k": "query", "n": "comment", "or": "comment", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "2019-10-12T07%3A20%3A50.52Z", "k": "query", "n": "existed_at", "or": "existed_at", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "office-1.local", "k": "query", "n": "hostname", "or": "hostname", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "k": "query", "n": "id", "or": "id", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": true, "k": "query", "n": "is_deleted", "or": "is_deleted", "r": false, "t": "`$BOOLEAN`", "index$": 4 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 5 }, { "a": true, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$NUMBER`", "index$": 6 }, { "a": true, "ex": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "k": "query", "n": "tunnel_id", "or": "tunnel_id", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/zerotrust/routes/hostname", "q": { "exist": ["account_id", "comment", "existed_at", "hostname", "id", "is_deleted", "page", "per_page", "tunnel_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "zerotrust" }, { "lit": "routes" }, { "lit": "hostname" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "tunnel_hostname_route_response_collection", "name__orig": "tunnel_hostname_route_response_collection", "Name": "TunnelHostnameRouteResponseCollection", "name_": "tunnel_hostname_route_response_collection", "name-": "tunnel-hostname-route-response-collection", "NAME": "TUNNEL_HOSTNAME_ROUTE_RESPONSE_COLLECTION", "index$": 68 }, { "active": true, "entity": "tunnel_hostname_route_response_collection", "key$": "BasicTunnelHostnameRouteResponseCollectionFlow", "kind": "basic", "name": "BasicTunnelHostnameRouteResponseCollectionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "tunnel_hostname_route_response_collection_ref01" } }], "index$": 0 }] }, 'TunnelHostnameRouteResponseCollection', { "GET /accounts/{account_id}/zerotrust/routes/hostname": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Cloudflare account ID", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/tunnel_account_id" }, "index$": 0 }, { "name": "id", "in": "query", "schema": { "description": "The hostname route ID.", "type": "string", "format": "uuid", "example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "x-auditable": true, "x-ref": "#/components/schemas/tunnel_hostname_route_id" }, "index$": 1 }, { "name": "hostname", "in": "query", "description": "If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive.", "schema": { "description": "The hostname of the route.", "type": "string", "example": "office-1.local", "x-auditable": true, "x-ref": "#/components/schemas/tunnel_hostname" }, "index$": 2 }, { "name": "tunnel_id", "in": "query", "description": "If set, only list hostname routes that point to a specific tunnel.", "schema": { "description": "UUID of the tunnel.", "type": "string", "format": "uuid", "example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-auditable": true, "x-ref": "#/components/schemas/tunnel_tunnel_id-3" }, "index$": 3 }, { "name": "comment", "in": "query", "schema": { "description": "If set, only list hostname routes with the given comment.", "type": "string", "example": "example%20comment", "x-ref": "#/components/schemas/tunnel_hostname_query_comment" }, "index$": 4 }, { "name": "existed_at", "in": "query", "schema": { "description": "If provided, include only resources that were created (and not deleted) before this time. URL encoded.", "type": "string", "format": "url-encoded-date-time", "example": "2019-10-12T07%3A20%3A50.52Z", "x-ref": "#/components/schemas/tunnel_existed_at" }, "index$": 5 }, { "name": "is_deleted", "in": "query", "schema": { "description": "If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes.", "type": "boolean", "example": true, "default": false }, "index$": 6 }, { "name": "per_page", "in": "query", "schema": { "description": "Number of results to display.", "type": "number", "maximum": 1000, "minimum": 1, "x-ref": "#/components/schemas/tunnel_per_page" }, "index$": 7 }, { "name": "page", "in": "query", "schema": { "description": "Page number of paginated results.", "type": "number", "default": 1, "minimum": 1, "x-ref": "#/components/schemas/tunnel_page_number" }, "index$": 8 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let tunnel_hostname_route_response_collection_ref01_data = Object.values(setup.data.existing.tunnel_hostname_route_response_collection)[0];
        // LIST
        const tunnel_hostname_route_response_collection_ref01_ent = client.TunnelHostnameRouteResponseCollection();
        const tunnel_hostname_route_response_collection_ref01_match = {};
        tunnel_hostname_route_response_collection_ref01_match['account_id'] = setup.idmap['account01'];
        const tunnel_hostname_route_response_collection_ref01_list = (await tunnel_hostname_route_response_collection_ref01_ent.list(tunnel_hostname_route_response_collection_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tunnel_hostname_route_response_collection/TunnelHostnameRouteResponseCollectionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tunnel_hostname_route_response_collection01', 'tunnel_hostname_route_response_collection02', 'tunnel_hostname_route_response_collection03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_HOSTNAME_ROUTE_RESPONSE_COLLECTION_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_HOSTNAME_ROUTE_RESPONSE_COLLECTION_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_HOSTNAME_ROUTE_RESPONSE_COLLECTION_ENTID'];
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
//# sourceMappingURL=TunnelHostnameRouteResponseCollectionEntity.test.js.map