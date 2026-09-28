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
(0, node_test_1.describe)('NscInterconnectEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.NscInterconnect();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'nsc_interconnect.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "items": { "a": true, "h": "Items", "n": "items", "r": true, "t": "`$ARRAY`", "key$": "items", "index$": 1 }, "next": { "a": true, "fo": "int32", "h": "Next", "n": "next", "r": false, "t": "`$INTEGER`", "key$": "next", "index$": 2 } }, "id": { "field": "id", "name": "id" }, "name": "nsc_interconnect", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/cni/interconnects", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/cni/interconnects", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cni" }, { "lit": "interconnects" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cni/interconnects", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "site", "or": "site", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cni/interconnects", "q": { "exist": ["account_id", "cursor", "limit", "site", "type"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cni" }, { "lit": "interconnects" }], "t": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cni/interconnects/{icon}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "icon", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cni/interconnects/{icon}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "icon": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cni" }, { "lit": "interconnects" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "nsc_interconnect", "name__orig": "nsc_interconnect", "Name": "NscInterconnect", "name_": "nsc_interconnect", "name-": "nsc-interconnect", "NAME": "NSC_INTERCONNECT", "index$": 23 }, { "active": true, "entity": "nsc_interconnect", "key$": "BasicNscInterconnectFlow", "kind": "basic", "name": "BasicNscInterconnectFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "nsc_interconnect_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "nsc_interconnect_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "nsc_interconnect_ref01", "srcdatavar": "nsc_interconnect_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "nsc_interconnect01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-nsc_interconnect_ref01" } }], "index$": 2 }] }, 'NscInterconnect', { "POST /accounts/{account_id}/cni/interconnects": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "discriminator": { "mapping": { "direct": "#/components/schemas/nsc_InterconnectCreate_Physical_Body", "gcp_partner": "#/components/schemas/nsc_InterconnectCreate_GcpPartner_Body" }, "propertyName": "type" }, "oneOf": [{ "type": "object", "allOf": [{ "properties": { "account": {}, "type": {} }, "required": ["type", "account"], "type": "object" }, { "properties": { "slot_id": {}, "speed": {} }, "required": ["slot_id"], "type": "object" }], "title": "Physical", "x-ref": "#/components/schemas/nsc_InterconnectCreate_Physical_Body" }, { "type": "object", "allOf": [{ "properties": { "account": {}, "type": {} }, "required": ["type", "account"], "type": "object" }, { "properties": { "bandwidth": {}, "pairing_key": {} }, "required": ["pairing_key", "bandwidth"], "type": "object" }], "title": "GcpPartner", "x-ref": "#/components/schemas/nsc_InterconnectCreate_GcpPartner_Body" }], "x-ref": "#/components/schemas/nsc_InterconnectCreate", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Customer account tag", "type": "string", "x-ref": "#/components/schemas/nsc_AccountTag" }, "index$": 0 }] }, "GET /accounts/{account_id}/cni/interconnects": { "protocol": "http", "parameters": [{ "name": "site", "in": "query", "description": "If specified, only show interconnects located at the given site", "schema": { "type": "string", "nullable": true }, "index$": 0 }, { "name": "type", "in": "query", "description": "If specified, only show interconnects of the given type", "schema": { "type": "string", "nullable": true }, "index$": 1 }, { "name": "cursor", "in": "query", "schema": { "type": "integer", "format": "int32", "nullable": true }, "index$": 2 }, { "name": "limit", "in": "query", "schema": { "type": "integer", "minimum": 0, "nullable": true }, "index$": 3 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Customer account tag", "type": "string", "x-ref": "#/components/schemas/nsc_AccountTag" }, "index$": 4 }] }, "GET /accounts/{account_id}/cni/interconnects/{icon}": { "protocol": "http", "parameters": [{ "name": "icon", "in": "path", "description": "Interconnect name to retrieve information about", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Customer account tag", "type": "string", "x-ref": "#/components/schemas/nsc_AccountTag" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const nsc_interconnect_ref01_ent = client.NscInterconnect();
        let nsc_interconnect_ref01_data = setup.data.new.nsc_interconnect['nsc_interconnect_ref01'];
        nsc_interconnect_ref01_data['account_id'] = setup.idmap['account01'];
        nsc_interconnect_ref01_data = (await nsc_interconnect_ref01_ent.create(nsc_interconnect_ref01_data)).data();
        (0, node_assert_1.default)(null != nsc_interconnect_ref01_data.id);
        // LIST
        const nsc_interconnect_ref01_match = {};
        nsc_interconnect_ref01_match['account_id'] = setup.idmap['account01'];
        const nsc_interconnect_ref01_list = (await nsc_interconnect_ref01_ent.list(nsc_interconnect_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(nsc_interconnect_ref01_list, { id: nsc_interconnect_ref01_data.id })));
        // LOAD
        const nsc_interconnect_ref01_match_dt0 = {};
        nsc_interconnect_ref01_match_dt0.id = nsc_interconnect_ref01_data.id;
        const nsc_interconnect_ref01_data_dt0 = (await nsc_interconnect_ref01_ent.load(nsc_interconnect_ref01_match_dt0)).data();
        (0, node_assert_1.default)(nsc_interconnect_ref01_data_dt0.id === nsc_interconnect_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/nsc_interconnect/NscInterconnectTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['nsc_interconnect01', 'nsc_interconnect02', 'nsc_interconnect03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_NSC_INTERCONNECT_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_NSC_INTERCONNECT_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_NSC_INTERCONNECT_ENTID'];
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
//# sourceMappingURL=NscInterconnectEntity.test.js.map