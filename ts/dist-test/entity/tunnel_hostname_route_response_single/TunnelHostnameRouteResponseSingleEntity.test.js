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
(0, node_test_1.describe)('TunnelHostnameRouteResponseSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.TunnelHostnameRouteResponseSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tunnel_hostname_route_response_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "comment": { "a": true, "h": "Comment", "n": "comment", "r": false, "sh": "An optional description of the hostname route.", "t": "`$STRING`", "key$": "comment", "index$": 0 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 1 }, "hostname": { "a": true, "h": "Hostname", "n": "hostname", "r": false, "sh": "The hostname of the route.", "t": "`$STRING`", "key$": "hostname", "index$": 2 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 3 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "load": { "req": false, "type": "`$OBJECT`" } }, "r": true, "ro": true, "sh": "The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.", "t": "`$STRING`", "union": { "branches": 3, "count": 1, "depth": 0 }, "key$": "result", "index$": 4 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful", "t": "`$BOOLEAN`", "key$": "success", "index$": 5 }, "tunnel_id": { "a": true, "fo": "uuid", "h": "Tunnel Id", "n": "tunnel_id", "r": false, "sh": "UUID of the tunnel.", "t": "`$STRING`", "key$": "tunnel_id", "index$": 6 } }, "name": "tunnel_hostname_route_response_single", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/zerotrust/routes/hostname", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/zerotrust/routes/hostname", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "zerotrust" }, { "lit": "routes" }, { "lit": "hostname" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "hostname_route_id", "or": "hostname_route_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}", "q": { "exist": ["account_id", "hostname_route_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "zerotrust" }, { "lit": "routes" }, { "lit": "hostname" }, { "var": "hostname_route_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "hostname_route_id", "or": "hostname_route_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}", "q": { "exist": ["account_id", "hostname_route_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "zerotrust" }, { "lit": "routes" }, { "lit": "hostname" }, { "var": "hostname_route_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "hostname_route_id", "or": "hostname_route_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}", "q": { "exist": ["account_id", "hostname_route_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "zerotrust" }, { "lit": "routes" }, { "lit": "hostname" }, { "var": "hostname_route_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "tunnel_hostname_route_response_single", "name__orig": "tunnel_hostname_route_response_single", "Name": "TunnelHostnameRouteResponseSingle", "name_": "tunnel_hostname_route_response_single", "name-": "tunnel-hostname-route-response-single", "NAME": "TUNNEL_HOSTNAME_ROUTE_RESPONSE_SINGLE", "index$": 69 }, { "active": true, "entity": "tunnel_hostname_route_response_single", "key$": "BasicTunnelHostnameRouteResponseSingleFlow", "kind": "basic", "name": "BasicTunnelHostnameRouteResponseSingleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "tunnel_hostname_route_response_single_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "tunnel_hostname_route_response_single_ref01", "srcdatavar": "tunnel_hostname_route_response_single_ref01_data", "suffix": "_up0", "textfield": "comment" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tunnel_hostname_route_response_single_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "tunnel_hostname_route_response_single_ref01", "srcdatavar": "tunnel_hostname_route_response_single_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "tunnel_hostname_route_response_single01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tunnel_hostname_route_response_single_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "tunnel_hostname_route_response_single_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "tunnel_hostname_route_response_single01" }, "o": "remove", "s": [], "v": [], "index$": 3 }] }, 'TunnelHostnameRouteResponseSingle', { "POST /accounts/{account_id}/zerotrust/routes/hostname": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "comment": { "description": "An optional description of the hostname route.", "type": "string", "example": "example comment", "x-auditable": true, "x-ref": "#/components/schemas/tunnel_hostname_comment", "key$": "comment" }, "hostname": { "description": "The hostname of the route.", "type": "string", "example": "office-1.local", "x-auditable": true, "x-ref": "#/components/schemas/tunnel_hostname", "key$": "hostname" }, "tunnel_id": { "description": "UUID of the tunnel.", "type": "string", "format": "uuid", "example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-auditable": true, "x-ref": "#/components/schemas/tunnel_tunnel_id-3", "key$": "tunnel_id" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Cloudflare account ID", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/tunnel_account_id" }, "index$": 0 }] }, "GET /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Cloudflare account ID", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/tunnel_account_id" }, "index$": 0 }, { "name": "hostname_route_id", "in": "path", "required": true, "schema": { "description": "The hostname route ID.", "type": "string", "format": "uuid", "example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "x-auditable": true, "x-ref": "#/components/schemas/tunnel_hostname_route_id" }, "index$": 1 }] }, "DELETE /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Cloudflare account ID", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/tunnel_account_id" }, "index$": 0 }, { "name": "hostname_route_id", "in": "path", "required": true, "schema": { "description": "The hostname route ID.", "type": "string", "format": "uuid", "example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "x-auditable": true, "x-ref": "#/components/schemas/tunnel_hostname_route_id" }, "index$": 1 }] }, "PATCH /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "comment": { "description": "An optional description of the hostname route.", "type": "string", "example": "example comment", "x-auditable": true, "x-ref": "#/components/schemas/tunnel_hostname_comment", "key$": "comment" }, "hostname": { "description": "The hostname of the route.", "type": "string", "example": "office-1.local", "x-auditable": true, "x-ref": "#/components/schemas/tunnel_hostname", "key$": "hostname" }, "tunnel_id": { "description": "UUID of the tunnel.", "type": "string", "format": "uuid", "example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-auditable": true, "x-ref": "#/components/schemas/tunnel_tunnel_id-3", "key$": "tunnel_id" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Cloudflare account ID", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/tunnel_account_id" }, "index$": 0 }, { "name": "hostname_route_id", "in": "path", "required": true, "schema": { "description": "The hostname route ID.", "type": "string", "format": "uuid", "example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "x-auditable": true, "x-ref": "#/components/schemas/tunnel_hostname_route_id" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const tunnel_hostname_route_response_single_ref01_ent = client.TunnelHostnameRouteResponseSingle();
        let tunnel_hostname_route_response_single_ref01_data = setup.data.new.tunnel_hostname_route_response_single['tunnel_hostname_route_response_single_ref01'];
        tunnel_hostname_route_response_single_ref01_data['account_id'] = setup.idmap['account01'];
        tunnel_hostname_route_response_single_ref01_data = (await tunnel_hostname_route_response_single_ref01_ent.create(tunnel_hostname_route_response_single_ref01_data)).data();
        (0, node_assert_1.default)(null != tunnel_hostname_route_response_single_ref01_data);
        // UPDATE
        const tunnel_hostname_route_response_single_ref01_data_up0 = {};
        tunnel_hostname_route_response_single_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const tunnel_hostname_route_response_single_ref01_markdef_up0 = { name: 'comment', value: 'Mark01-tunnel_hostname_route_response_single_ref01_' + setup.now };
        tunnel_hostname_route_response_single_ref01_data_up0[tunnel_hostname_route_response_single_ref01_markdef_up0.name] = tunnel_hostname_route_response_single_ref01_markdef_up0.value;
        const tunnel_hostname_route_response_single_ref01_resdata_up0 = (await tunnel_hostname_route_response_single_ref01_ent.update(tunnel_hostname_route_response_single_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != tunnel_hostname_route_response_single_ref01_resdata_up0);
        (0, node_assert_1.default)(tunnel_hostname_route_response_single_ref01_resdata_up0[tunnel_hostname_route_response_single_ref01_markdef_up0.name] === tunnel_hostname_route_response_single_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tunnel_hostname_route_response_single/TunnelHostnameRouteResponseSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tunnel_hostname_route_response_single01', 'tunnel_hostname_route_response_single02', 'tunnel_hostname_route_response_single03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_HOSTNAME_ROUTE_RESPONSE_SINGLE_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_HOSTNAME_ROUTE_RESPONSE_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_HOSTNAME_ROUTE_RESPONSE_SINGLE_ENTID'];
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
//# sourceMappingURL=TunnelHostnameRouteResponseSingleEntity.test.js.map