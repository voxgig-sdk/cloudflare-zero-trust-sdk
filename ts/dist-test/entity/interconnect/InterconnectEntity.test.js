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
(0, node_test_1.describe)('InterconnectEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.Interconnect();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'interconnect.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "interconnect", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/cni/interconnects/{icon}/loa", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "icon", "or": "icon", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/cni/interconnects/{icon}/loa", "q": { "$action": "loa", "exist": ["account_id", "icon", "name"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cni" }, { "lit": "interconnects" }, { "var": "icon" }, { "lit": "loa" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/cni/interconnects/{icon}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "icon", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/cni/interconnects/{icon}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "icon": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "cni" }, { "lit": "interconnects" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "interconnect", "name__orig": "interconnect", "Name": "Interconnect", "name_": "interconnect", "name-": "interconnect", "NAME": "INTERCONNECT", "index$": 13 }, { "active": true, "entity": "interconnect", "key$": "BasicInterconnectFlow", "kind": "basic", "name": "BasicInterconnectFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "interconnect_ref01", "srcdatavar": "interconnect_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "interconnect01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-interconnect_ref01" } }], "index$": 0 }] }, 'Interconnect', { "GET /accounts/{account_id}/cni/interconnects/{icon}/loa": { "protocol": "http", "parameters": [{ "name": "icon", "in": "path", "description": "Interconnect name to retrieve information about", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "name", "in": "query", "description": "Custom name to use in the LOA instead of the account name (200 Character limit)", "schema": { "type": "string", "nullable": true }, "index$": 1 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Customer account tag", "type": "string", "x-ref": "#/components/schemas/nsc_AccountTag" }, "index$": 2 }] }, "DELETE /accounts/{account_id}/cni/interconnects/{icon}": { "protocol": "http", "parameters": [{ "name": "icon", "in": "path", "description": "Interconnect name to retrieve information about", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Customer account tag", "type": "string", "x-ref": "#/components/schemas/nsc_AccountTag" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let interconnect_ref01_data = Object.values(setup.data.existing.interconnect)[0];
        // LOAD
        const interconnect_ref01_ent = client.Interconnect();
        const interconnect_ref01_match_dt0 = {};
        interconnect_ref01_match_dt0.id = interconnect_ref01_data.id;
        const interconnect_ref01_data_dt0 = (await interconnect_ref01_ent.load(interconnect_ref01_match_dt0)).data();
        (0, node_assert_1.default)(interconnect_ref01_data_dt0.id === interconnect_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/interconnect/InterconnectTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['interconnect01', 'interconnect02', 'interconnect03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_INTERCONNECT_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_INTERCONNECT_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_INTERCONNECT_ENTID'];
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
//# sourceMappingURL=InterconnectEntity.test.js.map