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
(0, node_test_1.describe)('NscCniEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.NscCni();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'nsc_cni.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "account": { "a": true, "h": "Account", "n": "account", "r": true, "sh": "Customer account tag", "t": "`$STRING`", "key$": "account", "index$": 0 }, "bgp": { "a": true, "h": "Bgp", "n": "bgp", "r": true, "t": "`$OBJECT`", "key$": "bgp", "index$": 1 }, "bgp_mode": { "a": true, "h": "Bgp Mode", "n": "bgp_mode", "r": false, "sh": "The BGP mode for a CNI.", "t": "`$STRING`", "key$": "bgp_mode", "index$": 2 }, "cust_ip": { "a": true, "fo": "A.B.C.D/N", "h": "Cust Ip", "n": "cust_ip", "r": true, "sh": "Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`.", "t": "`$STRING`", "key$": "cust_ip", "index$": 3 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 4 }, "interconnect": { "a": true, "h": "Interconnect", "n": "interconnect", "r": true, "sh": "Interconnect identifier hosting this CNI", "t": "`$STRING`", "key$": "interconnect", "index$": 5 }, "magic": { "a": true, "h": "Magic", "n": "magic", "r": true, "t": "`$OBJECT`", "key$": "magic", "index$": 6 }, "p2p_ip": { "a": true, "fo": "A.B.C.D/N", "h": "P2p Ip", "n": "p2p_ip", "r": true, "sh": "Cloudflare end of the point-to-point link", "t": "`$STRING`", "key$": "p2p_ip", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "nsc_cni", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/cni/cnis", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/cni/cnis", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cni" }, { "lit": "cnis" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cni/cnis", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "slot", "or": "slot", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "tunnel_id", "or": "tunnel_id", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cni/cnis", "q": { "exist": ["account_id", "cursor", "limit", "slot", "tunnel_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cni" }, { "lit": "cnis" }], "t": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cni/cnis/{cni}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "cni", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cni/cnis/{cni}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "cni": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cni" }, { "lit": "cnis" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/cni/cnis/{cni}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "cni", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/cni/cnis/{cni}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "cni": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cni" }, { "lit": "cnis" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "nsc_cni", "name__orig": "nsc_cni", "Name": "NscCni", "name_": "nsc_cni", "name-": "nsc-cni", "NAME": "NSC_CNI", "index$": 21 }, { "active": true, "entity": "nsc_cni", "key$": "BasicNscCniFlow", "kind": "basic", "name": "BasicNscCniFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "nsc_cni_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "nsc_cni_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "nsc_cni_ref01", "srcdatavar": "nsc_cni_ref01_data", "suffix": "_up0", "textfield": "account" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-nsc_cni_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "nsc_cni_ref01", "srcdatavar": "nsc_cni_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "nsc_cni01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-nsc_cni_ref01" } }], "index$": 3 }] }, 'NscCni', { "POST /accounts/{account_id}/cni/cnis": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "account": { "description": "Customer account tag", "type": "string", "x-ref": "#/components/schemas/nsc_AccountTag", "key$": "account" }, "bgp": { "type": "object", "properties": { "customer_asn": { "description": "ASN used on the customer end of the BGP session", "format": "int32", "minimum": 0, "type": "integer" }, "extra_prefixes": { "description": "Extra set of static prefixes to advertise to the customer's end of the session", "example": "192.168.3.4/31", "items": { "format": "A.B.C.D/N", "type": "string" }, "type": "array" }, "md5_key": { "description": "MD5 key to use for session authentication.\n\nNote that *this is not a security measure*. MD5 is not a valid security mechanism, and the\nkey is not treated as a secret value. This is *only* supported for preventing\nmisconfiguration, not for defending against malicious attacks.\n\nThe MD5 key, if set, must be of non-zero length and consist only of the following types of\ncharacter:\n\n* ASCII alphanumerics: `[a-zA-Z0-9]`\n* Special characters in the set `'!@#$%^&*()+[]{}<>/.,;:_-~`= \\|`\n\nIn other words, MD5 keys may contain any printable ASCII character aside from newline\n(0x0A), quotation mark (`\"`), vertical tab (0x0B), carriage return (0x0D), tab (0x09),\nform feed (0x0C), and the question mark (`?`). Requests specifying an MD5 key with one\nor more of these disallowed characters will be rejected.", "nullable": true, "type": "string" } }, "required": ["customer_asn", "extra_prefixes"], "x-ref": "#/components/schemas/nsc_BgpControl", "key$": "bgp" }, "interconnect": { "type": "string", "key$": "interconnect" }, "magic": { "type": "object", "properties": { "conduit_name": { "type": "string" }, "description": { "type": "string" }, "mtu": { "format": "int32", "minimum": 0, "type": "integer" } }, "required": ["conduit_name", "description", "mtu"], "x-ref": "#/components/schemas/nsc_MagicSettings", "key$": "magic" } }, "required": ["interconnect", "account", "magic"], "x-ref": "#/components/schemas/nsc_CniCreate", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Customer account tag", "type": "string", "x-ref": "#/components/schemas/nsc_AccountTag" }, "index$": 0 }] }, "GET /accounts/{account_id}/cni/cnis": { "protocol": "http", "parameters": [{ "name": "slot", "in": "query", "description": "If specified, only show CNIs associated with the specified slot", "schema": { "type": "string", "nullable": true }, "index$": 0 }, { "name": "tunnel_id", "in": "query", "description": "If specified, only show cnis associated with the specified tunnel id", "schema": { "type": "string", "nullable": true }, "index$": 1 }, { "name": "cursor", "in": "query", "schema": { "type": "integer", "format": "int32", "nullable": true }, "index$": 2 }, { "name": "limit", "in": "query", "schema": { "type": "integer", "minimum": 0, "nullable": true }, "index$": 3 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Customer account tag", "type": "string", "x-ref": "#/components/schemas/nsc_AccountTag" }, "index$": 4 }] }, "GET /accounts/{account_id}/cni/cnis/{cni}": { "protocol": "http", "parameters": [{ "name": "cni", "in": "path", "description": "CNI ID to retrieve information about", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Customer account tag", "type": "string", "x-ref": "#/components/schemas/nsc_AccountTag" }, "index$": 1 }] }, "PUT /accounts/{account_id}/cni/cnis/{cni}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "account": { "description": "Customer account tag", "type": "string", "x-ref": "#/components/schemas/nsc_AccountTag", "key$": "account" }, "bgp": { "properties": { "customer_asn": { "description": "ASN used on the customer end of the BGP session", "format": "int32", "minimum": 0, "type": "integer" }, "extra_prefixes": { "description": "Extra set of static prefixes to advertise to the customer's end of the session", "example": "192.168.3.4/31", "items": { "format": "A.B.C.D/N", "type": "string" }, "type": "array" }, "md5_key": { "description": "MD5 key to use for session authentication.\n\nNote that *this is not a security measure*. MD5 is not a valid security mechanism, and the\nkey is not treated as a secret value. This is *only* supported for preventing\nmisconfiguration, not for defending against malicious attacks.\n\nThe MD5 key, if set, must be of non-zero length and consist only of the following types of\ncharacter:\n\n* ASCII alphanumerics: `[a-zA-Z0-9]`\n* Special characters in the set `'!@#$%^&*()+[]{}<>/.,;:_-~`= \\|`\n\nIn other words, MD5 keys may contain any printable ASCII character aside from newline\n(0x0A), quotation mark (`\"`), vertical tab (0x0B), carriage return (0x0D), tab (0x09),\nform feed (0x0C), and the question mark (`?`). Requests specifying an MD5 key with one\nor more of these disallowed characters will be rejected.", "nullable": true, "type": "string" } }, "required": ["customer_asn", "extra_prefixes"], "type": "object", "x-ref": "#/components/schemas/nsc_BgpControl", "key$": "bgp" }, "bgp_mode": { "description": "The BGP mode for a CNI.\n\nControls the customer-facing data path:\n* `DynamicRouteExchange` — Full BGP: routes flow through to conduit via CRE / bgp-bridge /\nbgp-bridge-receiver.\n* `AdvertiseOnly` — static advertisement via taserver, no routes exchanged with Conduit", "enum": ["dynamic_route_exchange", "advertise_only"], "type": "string", "x-ref": "#/components/schemas/nsc_BgpMode", "key$": "bgp_mode" }, "cust_ip": { "description": "Customer end of the point-to-point link\n\nThis should always be inside the same prefix as `p2p_ip`.", "example": "192.168.3.4/31", "format": "A.B.C.D/N", "type": "string", "key$": "cust_ip" }, "id": { "format": "uuid", "type": "string", "key$": "id" }, "interconnect": { "description": "Interconnect identifier hosting this CNI", "type": "string", "key$": "interconnect" }, "magic": { "properties": { "conduit_name": { "type": "string" }, "description": { "type": "string" }, "mtu": { "format": "int32", "minimum": 0, "type": "integer" } }, "required": ["conduit_name", "description", "mtu"], "type": "object", "x-ref": "#/components/schemas/nsc_MagicSettings", "key$": "magic" }, "p2p_ip": { "description": "Cloudflare end of the point-to-point link", "example": "192.168.3.4/31", "format": "A.B.C.D/N", "type": "string", "key$": "p2p_ip" } }, "required": ["id", "interconnect", "account", "p2p_ip", "cust_ip", "magic"], "x-ref": "#/components/schemas/nsc_Cni", "index$": 1 } } } }, "parameters": [{ "name": "cni", "in": "path", "description": "CNI ID to retrieve information about", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Customer account tag", "type": "string", "x-ref": "#/components/schemas/nsc_AccountTag" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const nsc_cni_ref01_ent = client.NscCni();
        let nsc_cni_ref01_data = setup.data.new.nsc_cni['nsc_cni_ref01'];
        nsc_cni_ref01_data['account_id'] = setup.idmap['account01'];
        nsc_cni_ref01_data = (await nsc_cni_ref01_ent.create(nsc_cni_ref01_data)).data();
        (0, node_assert_1.default)(null != nsc_cni_ref01_data.id);
        // LIST
        const nsc_cni_ref01_match = {};
        nsc_cni_ref01_match['account_id'] = setup.idmap['account01'];
        const nsc_cni_ref01_list = (await nsc_cni_ref01_ent.list(nsc_cni_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(nsc_cni_ref01_list, { id: nsc_cni_ref01_data.id })));
        // UPDATE
        const nsc_cni_ref01_data_up0 = {};
        nsc_cni_ref01_data_up0.id = nsc_cni_ref01_data.id;
        nsc_cni_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const nsc_cni_ref01_markdef_up0 = { name: 'account', value: 'Mark01-nsc_cni_ref01_' + setup.now };
        nsc_cni_ref01_data_up0[nsc_cni_ref01_markdef_up0.name] = nsc_cni_ref01_markdef_up0.value;
        const nsc_cni_ref01_resdata_up0 = (await nsc_cni_ref01_ent.update(nsc_cni_ref01_data_up0)).data();
        (0, node_assert_1.default)(nsc_cni_ref01_resdata_up0.id === nsc_cni_ref01_data_up0.id);
        (0, node_assert_1.default)(nsc_cni_ref01_resdata_up0[nsc_cni_ref01_markdef_up0.name] === nsc_cni_ref01_markdef_up0.value);
        // LOAD
        const nsc_cni_ref01_match_dt0 = {};
        nsc_cni_ref01_match_dt0.id = nsc_cni_ref01_data.id;
        const nsc_cni_ref01_data_dt0 = (await nsc_cni_ref01_ent.load(nsc_cni_ref01_match_dt0)).data();
        (0, node_assert_1.default)(nsc_cni_ref01_data_dt0.id === nsc_cni_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/nsc_cni/NscCniTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['nsc_cni01', 'nsc_cni02', 'nsc_cni03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_NSC_CNI_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_NSC_CNI_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_NSC_CNI_ENTID'];
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
//# sourceMappingURL=NscCniEntity.test.js.map