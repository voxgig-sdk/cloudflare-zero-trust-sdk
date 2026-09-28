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
(0, node_test_1.describe)('TunnelTeamnetResponseSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.TunnelTeamnetResponseSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tunnel_teamnet_response_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "load": { "req": false, "type": "`$OBJECT`" } }, "r": true, "ro": true, "sh": "The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.", "t": "`$STRING`", "union": { "branches": 3, "count": 1, "depth": 0 }, "key$": "result", "index$": 2 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful", "t": "`$BOOLEAN`", "key$": "success", "index$": 3 } }, "name": "tunnel_teamnet_response_single", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/teamnet/routes/ip/{ip}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "10.1.0.137", "k": "param", "n": "ip", "or": "ip", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": true, "k": "query", "n": "default_virtual_network_fallback", "or": "default_virtual_network_fallback", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "ex": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "k": "query", "n": "virtual_network_id", "or": "virtual_network_id", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/teamnet/routes/ip/{ip}", "q": { "exist": ["account_id", "default_virtual_network_fallback", "ip", "virtual_network_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "teamnet" }, { "lit": "routes" }, { "lit": "ip" }, { "var": "ip" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "tunnel_teamnet_response_single", "name__orig": "tunnel_teamnet_response_single", "Name": "TunnelTeamnetResponseSingle", "name_": "tunnel_teamnet_response_single", "name-": "tunnel-teamnet-response-single", "NAME": "TUNNEL_TEAMNET_RESPONSE_SINGLE", "index$": 61 }, { "active": true, "entity": "tunnel_teamnet_response_single", "key$": "BasicTunnelTeamnetResponseSingleFlow", "kind": "basic", "name": "BasicTunnelTeamnetResponseSingleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "tunnel_teamnet_response_single_ref01", "srcdatavar": "tunnel_teamnet_response_single_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "tunnel_teamnet_response_single01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tunnel_teamnet_response_single_ref01" } }], "index$": 0 }] }, 'TunnelTeamnetResponseSingle', { "GET /accounts/{account_id}/teamnet/routes/ip/{ip}": { "protocol": "http", "parameters": [{ "name": "ip", "in": "path", "required": true, "schema": { "type": "string", "example": "10.1.0.137", "x-ref": "#/components/schemas/tunnel_ip" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Cloudflare account ID", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/tunnel_account_id" }, "index$": 1 }, { "name": "virtual_network_id", "in": "query", "schema": { "description": "UUID of the virtual network.", "type": "string", "format": "uuid", "example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "x-auditable": true, "x-ref": "#/components/schemas/tunnel_virtual_network_id" }, "index$": 2 }, { "name": "default_virtual_network_fallback", "in": "query", "description": "When the virtual_network_id parameter is not provided the request filter will default search routes that are in the default virtual network for the account. If this parameter is set to false, the search will include routes that do not have a virtual network.", "schema": { "type": "boolean", "default": true }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let tunnel_teamnet_response_single_ref01_data = Object.values(setup.data.existing.tunnel_teamnet_response_single)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const tunnel_teamnet_response_single_ref01_ent = client.TunnelTeamnetResponseSingle();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tunnel_teamnet_response_single/TunnelTeamnetResponseSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tunnel_teamnet_response_single01', 'tunnel_teamnet_response_single02', 'tunnel_teamnet_response_single03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_TEAMNET_RESPONSE_SINGLE_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_TEAMNET_RESPONSE_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_TEAMNET_RESPONSE_SINGLE_ENTID'];
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
//# sourceMappingURL=TunnelTeamnetResponseSingleEntity.test.js.map