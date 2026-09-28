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
(0, node_test_1.describe)('ZeroTrustRiskScoringIntegrationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.ZeroTrustRiskScoringIntegration();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'zero_trust_risk_scoring_integration.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active": { "a": true, "h": "Active", "n": "active", "r": true, "sh": "Whether this integration is enabled.", "t": "`$BOOLEAN`", "key$": "active", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "integration_type": { "a": true, "h": "Integration Type", "n": "integration_type", "r": true, "t": "`$STRING`", "key$": "integration_type", "index$": 2 }, "reference_id": { "a": true, "h": "Reference Id", "n": "reference_id", "r": false, "sh": "A reference id that can be supplied by the client.", "t": "`$STRING`", "key$": "reference_id", "index$": 3 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "list": { "req": false, "type": "`$ARRAY`" } }, "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 4 }, "tenant_url": { "a": true, "fo": "uri", "h": "Tenant Url", "n": "tenant_url", "r": true, "sh": "The base url of the tenant, e.g.", "t": "`$STRING`", "key$": "tenant_url", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "zero_trust_risk_scoring_integration", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/zt_risk_scoring/integrations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/zt_risk_scoring/integrations", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "zt_risk_scoring" }, { "lit": "integrations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/zt_risk_scoring/integrations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/zt_risk_scoring/integrations", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "zt_risk_scoring" }, { "lit": "integrations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "integration_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "integration_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "zt_risk_scoring" }, { "lit": "integrations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/zt_risk_scoring/integrations/reference_id/{reference_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "reference_id", "or": "reference_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/zt_risk_scoring/integrations/reference_id/{reference_id}", "q": { "exist": ["account_id", "reference_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "zt_risk_scoring" }, { "lit": "integrations" }, { "lit": "reference_id" }, { "var": "reference_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "integration_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "integration_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "zt_risk_scoring" }, { "lit": "integrations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "integration_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "integration_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "zt_risk_scoring" }, { "lit": "integrations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "zero_trust_risk_scoring_integration", "name__orig": "zero_trust_risk_scoring_integration", "Name": "ZeroTrustRiskScoringIntegration", "name_": "zero_trust_risk_scoring_integration", "name-": "zero-trust-risk-scoring-integration", "NAME": "ZERO_TRUST_RISK_SCORING_INTEGRATION", "index$": 118 }, { "active": true, "entity": "zero_trust_risk_scoring_integration", "key$": "BasicZeroTrustRiskScoringIntegrationFlow", "kind": "basic", "name": "BasicZeroTrustRiskScoringIntegrationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "zero_trust_risk_scoring_integration_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "zero_trust_risk_scoring_integration_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "zero_trust_risk_scoring_integration_ref01", "srcdatavar": "zero_trust_risk_scoring_integration_ref01_data", "suffix": "_up0", "textfield": "integration_type" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-zero_trust_risk_scoring_integration_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "zero_trust_risk_scoring_integration_ref01", "srcdatavar": "zero_trust_risk_scoring_integration_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "zero_trust_risk_scoring_integration01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-zero_trust_risk_scoring_integration_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "zero_trust_risk_scoring_integration_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "zero_trust_risk_scoring_integration01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "zero_trust_risk_scoring_integration_ref01" } }], "index$": 5 }] }, 'ZeroTrustRiskScoringIntegration', { "POST /accounts/{account_id}/zt_risk_scoring/integrations": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "integration_type": { "type": "string", "enum": ["Okta"], "x-ref": "#/components/schemas/dlp_RiskScoreIntegrationType", "key$": "integration_type" }, "reference_id": { "description": "A reference id that can be supplied by the client. Currently this should be set to the Access-Okta IDP ID (a UUIDv4).\nhttps://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider", "type": "string", "nullable": true, "key$": "reference_id" }, "tenant_url": { "description": "The base url of the tenant, e.g. \"https://tenant.okta.com\".", "type": "string", "format": "uri", "key$": "tenant_url" } }, "required": ["integration_type", "tenant_url"], "x-ref": "#/components/schemas/dlp_CreateIntegrationBody", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /accounts/{account_id}/zt_risk_scoring/integrations": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "integration_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }] }, "GET /accounts/{account_id}/zt_risk_scoring/integrations/reference_id/{reference_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "reference_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 1 }] }, "DELETE /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "integration_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }] }, "PUT /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "active": { "description": "Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.", "type": "boolean", "key$": "active" }, "reference_id": { "description": "A reference id that can be supplied by the client. Currently this should be set to the Access-Okta IDP ID (a UUIDv4).\nhttps://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider", "type": "string", "nullable": true, "key$": "reference_id" }, "tenant_url": { "description": "The base url of the tenant, e.g. \"https://tenant.okta.com\".", "type": "string", "format": "uri", "key$": "tenant_url" } }, "required": ["tenant_url", "active"], "x-ref": "#/components/schemas/dlp_UpdateIntegrationBody", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "integration_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const zero_trust_risk_scoring_integration_ref01_ent = client.ZeroTrustRiskScoringIntegration();
        let zero_trust_risk_scoring_integration_ref01_data = setup.data.new.zero_trust_risk_scoring_integration['zero_trust_risk_scoring_integration_ref01'];
        zero_trust_risk_scoring_integration_ref01_data['account_id'] = setup.idmap['account01'];
        zero_trust_risk_scoring_integration_ref01_data = (await zero_trust_risk_scoring_integration_ref01_ent.create(zero_trust_risk_scoring_integration_ref01_data)).data();
        (0, node_assert_1.default)(null != zero_trust_risk_scoring_integration_ref01_data.id);
        // LIST
        const zero_trust_risk_scoring_integration_ref01_match = {};
        zero_trust_risk_scoring_integration_ref01_match['account_id'] = setup.idmap['account01'];
        const zero_trust_risk_scoring_integration_ref01_list = (await zero_trust_risk_scoring_integration_ref01_ent.list(zero_trust_risk_scoring_integration_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(zero_trust_risk_scoring_integration_ref01_list, { id: zero_trust_risk_scoring_integration_ref01_data.id })));
        // UPDATE
        const zero_trust_risk_scoring_integration_ref01_data_up0 = {};
        zero_trust_risk_scoring_integration_ref01_data_up0.id = zero_trust_risk_scoring_integration_ref01_data.id;
        zero_trust_risk_scoring_integration_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const zero_trust_risk_scoring_integration_ref01_markdef_up0 = { name: 'integration_type', value: 'Mark01-zero_trust_risk_scoring_integration_ref01_' + setup.now };
        zero_trust_risk_scoring_integration_ref01_data_up0[zero_trust_risk_scoring_integration_ref01_markdef_up0.name] = zero_trust_risk_scoring_integration_ref01_markdef_up0.value;
        const zero_trust_risk_scoring_integration_ref01_resdata_up0 = (await zero_trust_risk_scoring_integration_ref01_ent.update(zero_trust_risk_scoring_integration_ref01_data_up0)).data();
        (0, node_assert_1.default)(zero_trust_risk_scoring_integration_ref01_resdata_up0.id === zero_trust_risk_scoring_integration_ref01_data_up0.id);
        (0, node_assert_1.default)(zero_trust_risk_scoring_integration_ref01_resdata_up0[zero_trust_risk_scoring_integration_ref01_markdef_up0.name] === zero_trust_risk_scoring_integration_ref01_markdef_up0.value);
        // LOAD
        const zero_trust_risk_scoring_integration_ref01_match_dt0 = {};
        zero_trust_risk_scoring_integration_ref01_match_dt0.id = zero_trust_risk_scoring_integration_ref01_data.id;
        const zero_trust_risk_scoring_integration_ref01_data_dt0 = (await zero_trust_risk_scoring_integration_ref01_ent.load(zero_trust_risk_scoring_integration_ref01_match_dt0)).data();
        (0, node_assert_1.default)(zero_trust_risk_scoring_integration_ref01_data_dt0.id === zero_trust_risk_scoring_integration_ref01_data.id);
        // REMOVE
        const zero_trust_risk_scoring_integration_ref01_match_rm0 = { id: zero_trust_risk_scoring_integration_ref01_data.id };
        await zero_trust_risk_scoring_integration_ref01_ent.remove(zero_trust_risk_scoring_integration_ref01_match_rm0);
        // LIST
        const zero_trust_risk_scoring_integration_ref01_match_rt0 = {};
        zero_trust_risk_scoring_integration_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        const zero_trust_risk_scoring_integration_ref01_list_rt0 = (await zero_trust_risk_scoring_integration_ref01_ent.list(zero_trust_risk_scoring_integration_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(zero_trust_risk_scoring_integration_ref01_list_rt0, { id: zero_trust_risk_scoring_integration_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/zero_trust_risk_scoring_integration/ZeroTrustRiskScoringIntegrationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['zero_trust_risk_scoring_integration01', 'zero_trust_risk_scoring_integration02', 'zero_trust_risk_scoring_integration03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_RISK_SCORING_INTEGRATION_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_RISK_SCORING_INTEGRATION_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_RISK_SCORING_INTEGRATION_ENTID'];
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
//# sourceMappingURL=ZeroTrustRiskScoringIntegrationEntity.test.js.map