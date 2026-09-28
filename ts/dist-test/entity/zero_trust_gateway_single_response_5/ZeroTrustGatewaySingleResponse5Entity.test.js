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
(0, node_test_1.describe)('ZeroTrustGatewaySingleResponse5Entity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.ZeroTrustGatewaySingleResponse5();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'zero_trust_gateway_single_response_5.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "ips": { "a": true, "h": "Ips", "n": "ips", "r": false, "sh": "Specify the list of CIDRs to restrict ingress connections.", "t": "`$ARRAY`", "key$": "ips", "index$": 0 }, "kind": { "a": true, "h": "Kind", "n": "kind", "r": false, "sh": "The proxy endpoint kind.", "t": "`$STRING`", "key$": "kind", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Specify the name of the proxy endpoint.", "t": "`$STRING`", "key$": "name", "index$": 2 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$ANY`", "key$": "result", "index$": 3 } }, "name": "zero_trust_gateway_single_response_5", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/gateway/proxy_endpoints", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/gateway/proxy_endpoints", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "gateway" }, { "lit": "proxy_endpoints" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "ed35569b41ce4d1facfe683550f54086", "k": "param", "n": "proxy_endpoint_id", "or": "proxy_endpoint_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}", "q": { "exist": ["account_id", "proxy_endpoint_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "gateway" }, { "lit": "proxy_endpoints" }, { "var": "proxy_endpoint_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "ed35569b41ce4d1facfe683550f54086", "k": "param", "n": "proxy_endpoint_id", "or": "proxy_endpoint_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}", "q": { "exist": ["account_id", "proxy_endpoint_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "gateway" }, { "lit": "proxy_endpoints" }, { "var": "proxy_endpoint_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.proxy_endpoint"]] }, "key$": "zero_trust_gateway_single_response_5", "name__orig": "zero_trust_gateway_single_response_5", "Name": "ZeroTrustGatewaySingleResponse5", "name_": "zero_trust_gateway_single_response_5", "name-": "zero-trust-gateway-single-response-5", "NAME": "ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_5", "index$": 113 }, { "active": true, "entity": "zero_trust_gateway_single_response_5", "key$": "BasicZeroTrustGatewaySingleResponse5Flow", "kind": "basic", "name": "BasicZeroTrustGatewaySingleResponse5Flow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "zero_trust_gateway_single_response_5_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "zero_trust_gateway_single_response_5_ref01", "srcdatavar": "zero_trust_gateway_single_response_5_ref01_data", "suffix": "_up0", "textfield": "kind" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-zero_trust_gateway_single_response_5_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "zero_trust_gateway_single_response_5_ref01", "srcdatavar": "zero_trust_gateway_single_response_5_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "zero_trust_gateway_single_response_501" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-zero_trust_gateway_single_response_5_ref01" } }], "index$": 2 }] }, 'ZeroTrustGatewaySingleResponse5', { "POST /accounts/{account_id}/gateway/proxy_endpoints": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "kind": { "description": "The proxy endpoint kind.", "type": "string", "default": "ip", "enum": ["ip", "identity"], "key$": "kind" } }, "discriminator": { "mapping": { "identity": "#/components/schemas/zero-trust-gateway_proxy-endpoint-identity-create", "ip": "#/components/schemas/zero-trust-gateway_proxy-endpoint-ip-create" }, "propertyName": "kind" }, "oneOf": [{ "type": "object", "properties": { "kind": { "description": "The proxy endpoint kind", "type": "string", "example": "ip", "enum": ["ip"], "x-auditable": true }, "name": { "description": "Specify the name of the proxy endpoint.", "type": "string", "example": "Devops team", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_name-6" } }, "required": ["name", "ips"], "x-ref": "#/components/schemas/zero-trust-gateway_proxy-endpoint-ip-create" }, { "type": "object", "properties": { "kind": { "description": "The proxy endpoint kind", "type": "string", "example": "identity", "enum": ["identity"], "x-auditable": true }, "name": { "description": "Specify the name of the proxy endpoint.", "type": "string", "example": "Devops team", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_name-6" } }, "required": ["kind", "name"], "x-ref": "#/components/schemas/zero-trust-gateway_proxy-endpoint-identity-create" }], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Specify the Cloudflare account identifier.", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_identifier-2" }, "index$": 0 }] }, "GET /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}": { "protocol": "http", "parameters": [{ "name": "proxy_endpoint_id", "in": "path", "required": true, "schema": { "type": "string", "example": "ed35569b41ce4d1facfe683550f54086", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_uuid-3" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Specify the Cloudflare account identifier.", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_identifier-2" }, "index$": 1 }] }, "PATCH /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "ips": { "description": "Specify the list of CIDRs to restrict ingress connections.", "type": "array", "items": { "description": "Specify an IPv4 or IPv6 CIDR. Limit IPv6 to a maximum of /109 and IPv4 to a maximum of /25.", "example": "192.0.2.1/32", "type": "string", "x-auditable": true }, "x-ref": "#/components/schemas/zero-trust-gateway_ips", "key$": "ips" }, "name": { "description": "Specify the name of the proxy endpoint.", "type": "string", "example": "Devops team", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_name-6", "key$": "name" } }, "index$": 1 } } } }, "parameters": [{ "name": "proxy_endpoint_id", "in": "path", "required": true, "schema": { "type": "string", "example": "ed35569b41ce4d1facfe683550f54086", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_uuid-3" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "description": "Specify the Cloudflare account identifier.", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_identifier-2" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const zero_trust_gateway_single_response_5_ref01_ent = client.ZeroTrustGatewaySingleResponse5();
        let zero_trust_gateway_single_response_5_ref01_data = setup.data.new.zero_trust_gateway_single_response_5['zero_trust_gateway_single_response_5_ref01'];
        zero_trust_gateway_single_response_5_ref01_data['account_id'] = setup.idmap['account01'];
        zero_trust_gateway_single_response_5_ref01_data = (await zero_trust_gateway_single_response_5_ref01_ent.create(zero_trust_gateway_single_response_5_ref01_data)).data();
        (0, node_assert_1.default)(null != zero_trust_gateway_single_response_5_ref01_data);
        // UPDATE
        const zero_trust_gateway_single_response_5_ref01_data_up0 = {};
        zero_trust_gateway_single_response_5_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const zero_trust_gateway_single_response_5_ref01_markdef_up0 = { name: 'kind', value: 'Mark01-zero_trust_gateway_single_response_5_ref01_' + setup.now };
        zero_trust_gateway_single_response_5_ref01_data_up0[zero_trust_gateway_single_response_5_ref01_markdef_up0.name] = zero_trust_gateway_single_response_5_ref01_markdef_up0.value;
        const zero_trust_gateway_single_response_5_ref01_resdata_up0 = (await zero_trust_gateway_single_response_5_ref01_ent.update(zero_trust_gateway_single_response_5_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != zero_trust_gateway_single_response_5_ref01_resdata_up0);
        (0, node_assert_1.default)(zero_trust_gateway_single_response_5_ref01_resdata_up0[zero_trust_gateway_single_response_5_ref01_markdef_up0.name] === zero_trust_gateway_single_response_5_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/zero_trust_gateway_single_response_5/ZeroTrustGatewaySingleResponse5TestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['zero_trust_gateway_single_response_501', 'zero_trust_gateway_single_response_502', 'zero_trust_gateway_single_response_503', 'proxy_endpoint01', 'proxy_endpoint02', 'proxy_endpoint03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_5_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_5_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_5_ENTID'];
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
//# sourceMappingURL=ZeroTrustGatewaySingleResponse5Entity.test.js.map