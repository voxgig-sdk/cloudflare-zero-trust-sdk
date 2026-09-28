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
(0, node_test_1.describe)('ZeroTrustGatewaySingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.ZeroTrustGatewaySingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['create', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'zero_trust_gateway_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "key$": "result", "index$": 0 }, "validity_period_days": { "a": true, "h": "Validity Period Days", "n": "validity_period_days", "r": false, "sh": "Sets the certificate validity period in days (range: 1-10,950 days / ~30 years).", "t": "`$INTEGER`", "key$": "validity_period_days", "index$": 1 } }, "name": "zero_trust_gateway_single", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/gateway/certificates/{certificate_id}/activate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "certificate_id", "or": "certificate_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/gateway/certificates/{certificate_id}/activate", "q": { "$action": "activate", "exist": ["account_id", "certificate_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "gateway" }, { "lit": "certificates" }, { "var": "certificate_id" }, { "lit": "activate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/gateway/certificates/{certificate_id}/deactivate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "certificate_id", "or": "certificate_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/gateway/certificates/{certificate_id}/deactivate", "q": { "exist": ["account_id", "certificate_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "gateway" }, { "lit": "certificates" }, { "var": "certificate_id" }, { "lit": "deactivate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/gateway/certificates", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/gateway/certificates", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "gateway" }, { "lit": "certificates" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/gateway/certificates/{certificate_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "certificate_id", "or": "certificate_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/gateway/certificates/{certificate_id}", "q": { "exist": ["account_id", "certificate_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "gateway" }, { "lit": "certificates" }, { "var": "certificate_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/gateway/certificates/{certificate_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "certificate_id", "or": "certificate_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/gateway/certificates/{certificate_id}", "q": { "exist": ["account_id", "certificate_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "gateway" }, { "lit": "certificates" }, { "var": "certificate_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "zero_trust_gateway_single", "name__orig": "zero_trust_gateway_single", "Name": "ZeroTrustGatewaySingle", "name_": "zero_trust_gateway_single", "name-": "zero-trust-gateway-single", "NAME": "ZERO_TRUST_GATEWAY_SINGLE", "index$": 109 }, { "active": true, "entity": "zero_trust_gateway_single", "key$": "BasicZeroTrustGatewaySingleFlow", "kind": "basic", "name": "BasicZeroTrustGatewaySingleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "zero_trust_gateway_single_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "zero_trust_gateway_single_ref01", "srcdatavar": "zero_trust_gateway_single_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "zero_trust_gateway_single01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-zero_trust_gateway_single_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "zero_trust_gateway_single_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "zero_trust_gateway_single01" }, "o": "remove", "s": [], "v": [], "index$": 2 }] }, 'ZeroTrustGatewaySingle', { "POST /accounts/{account_id}/gateway/certificates/{certificate_id}/activate": { "protocol": "http", "parameters": [{ "name": "certificate_id", "in": "path", "required": true, "schema": { "description": "Identify the certificate with a UUID.", "type": "string", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_uuid" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Specify the Cloudflare account identifier.", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_identifier-2" }, "index$": 1 }] }, "POST /accounts/{account_id}/gateway/certificates/{certificate_id}/deactivate": { "protocol": "http", "parameters": [{ "name": "certificate_id", "in": "path", "required": true, "schema": { "description": "Identify the certificate with a UUID.", "type": "string", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_uuid" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Specify the Cloudflare account identifier.", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_identifier-2" }, "index$": 1 }] }, "POST /accounts/{account_id}/gateway/certificates": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "validity_period_days": { "description": "Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). Defaults to 1,825 days (5 years). **Important**: This field is only settable during the certificate creation.  Certificates becomes immutable after creation - use the `/activate` and `/deactivate` endpoints to manage certificate lifecycle.", "type": "integer", "example": 1826, "x-auditable": true, "key$": "validity_period_days" } }, "x-ref": "#/components/schemas/zero-trust-gateway_generate-cert-request", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Specify the Cloudflare account identifier.", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_identifier-2" }, "index$": 0 }] }, "GET /accounts/{account_id}/gateway/certificates/{certificate_id}": { "protocol": "http", "parameters": [{ "name": "certificate_id", "in": "path", "required": true, "schema": { "description": "Identify the certificate with a UUID.", "type": "string", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_uuid" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Specify the Cloudflare account identifier.", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_identifier-2" }, "index$": 1 }] }, "DELETE /accounts/{account_id}/gateway/certificates/{certificate_id}": { "protocol": "http", "parameters": [{ "name": "certificate_id", "in": "path", "required": true, "schema": { "description": "Identify the certificate with a UUID.", "type": "string", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_uuid" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Specify the Cloudflare account identifier.", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_identifier-2" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const zero_trust_gateway_single_ref01_ent = client.ZeroTrustGatewaySingle();
        let zero_trust_gateway_single_ref01_data = setup.data.new.zero_trust_gateway_single['zero_trust_gateway_single_ref01'];
        zero_trust_gateway_single_ref01_data['account_id'] = setup.idmap['account01'];
        zero_trust_gateway_single_ref01_data = (await zero_trust_gateway_single_ref01_ent.create(zero_trust_gateway_single_ref01_data)).data();
        (0, node_assert_1.default)(null != zero_trust_gateway_single_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/zero_trust_gateway_single/ZeroTrustGatewaySingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['zero_trust_gateway_single01', 'zero_trust_gateway_single02', 'zero_trust_gateway_single03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_ENTID'];
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
//# sourceMappingURL=ZeroTrustGatewaySingleEntity.test.js.map