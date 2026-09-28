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
(0, node_test_1.describe)('ZeroTrustGatewaySingleResponseWithListItemEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.ZeroTrustGatewaySingleResponseWithListItem();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'zero_trust_gateway_single_response_with_list_item.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Provide the list description.", "t": "`$STRING`", "key$": "description", "index$": 0 }, "items": { "a": true, "h": "Items", "n": "items", "r": false, "sh": "Add items to the list.", "t": "`$ARRAY`", "key$": "items", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Specify the list name.", "t": "`$STRING`", "key$": "name", "index$": 2 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "Specify the list type.", "t": "`$STRING`", "key$": "type", "index$": 3 } }, "name": "zero_trust_gateway_single_response_with_list_item", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/gateway/lists", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/gateway/lists", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "gateway" }, { "lit": "lists" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "zero_trust_gateway_single_response_with_list_item", "name__orig": "zero_trust_gateway_single_response_with_list_item", "Name": "ZeroTrustGatewaySingleResponseWithListItem", "name_": "zero_trust_gateway_single_response_with_list_item", "name-": "zero-trust-gateway-single-response-with-list-item", "NAME": "ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_WITH_LIST_ITEM", "index$": 116 }, { "active": true, "entity": "zero_trust_gateway_single_response_with_list_item", "key$": "BasicZeroTrustGatewaySingleResponseWithListItemFlow", "kind": "basic", "name": "BasicZeroTrustGatewaySingleResponseWithListItemFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "zero_trust_gateway_single_response_with_list_item_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ZeroTrustGatewaySingleResponseWithListItem', { "POST /accounts/{account_id}/gateway/lists": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "description": { "description": "Provide the list description.", "type": "string", "example": "The serial numbers for administrators", "x-auditable": true, "x-stainless-terraform-configurability": "computed_optional", "x-ref": "#/components/schemas/zero-trust-gateway_description", "key$": "description" }, "items": { "description": "Add items to the list.", "type": "array", "items": { "properties": { "description": { "description": "Provide the list item description (optional).", "type": "string", "example": "Austin office IP", "minimum": 0, "x-ref": "#/components/schemas/zero-trust-gateway_description_item" }, "value": { "description": "Specify the item value.", "type": "string", "example": "8GE8721REF", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_value" } }, "type": "object" }, "x-stainless-collection-type": "set", "x-ref": "#/components/schemas/zero-trust-gateway_items-input", "key$": "items" }, "name": { "description": "Specify the list name.", "type": "string", "example": "Admin Serial Numbers", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_name", "key$": "name" }, "type": { "description": "Specify the list type.", "type": "string", "example": "SERIAL", "enum": ["SERIAL", "URL", "DOMAIN", "EMAIL", "IP", "CATEGORY", "LOCATION", "DEVICE", "AAGUID"], "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_type-2", "key$": "type" } }, "required": ["name", "type"], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Specify the Cloudflare account identifier.", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_identifier-2" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const zero_trust_gateway_single_response_with_list_item_ref01_ent = client.ZeroTrustGatewaySingleResponseWithListItem();
        let zero_trust_gateway_single_response_with_list_item_ref01_data = setup.data.new.zero_trust_gateway_single_response_with_list_item['zero_trust_gateway_single_response_with_list_item_ref01'];
        zero_trust_gateway_single_response_with_list_item_ref01_data['account_id'] = setup.idmap['account01'];
        zero_trust_gateway_single_response_with_list_item_ref01_data = (await zero_trust_gateway_single_response_with_list_item_ref01_ent.create(zero_trust_gateway_single_response_with_list_item_ref01_data)).data();
        (0, node_assert_1.default)(null != zero_trust_gateway_single_response_with_list_item_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/zero_trust_gateway_single_response_with_list_item/ZeroTrustGatewaySingleResponseWithListItemTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['zero_trust_gateway_single_response_with_list_item01', 'zero_trust_gateway_single_response_with_list_item02', 'zero_trust_gateway_single_response_with_list_item03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_WITH_LIST_ITEM_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_WITH_LIST_ITEM_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_SINGLE_RESPONSE_WITH_LIST_ITEM_ENTID'];
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
//# sourceMappingURL=ZeroTrustGatewaySingleResponseWithListItemEntity.test.js.map