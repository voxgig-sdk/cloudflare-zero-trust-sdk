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
(0, node_test_1.describe)('OnePaginatedIntegrationV2ListItemListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.OnePaginatedIntegrationV2ListItemList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'one_paginated_integration_v2_list_item_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "application": { "a": true, "h": "Application", "n": "application", "r": true, "ro": true, "t": "`$OBJECT`", "key$": "application", "index$": 0 }, "created": { "a": true, "fo": "date-time", "h": "Created", "n": "created", "r": true, "ro": true, "sh": "When the integration was created.", "t": "`$STRING`", "key$": "created", "index$": 1 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "ro": true, "sh": "Integration ID.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "is_paused": { "a": true, "h": "Is Paused", "n": "is_paused", "r": true, "ro": true, "sh": "Whether the user paused the integration.", "t": "`$BOOLEAN`", "key$": "is_paused", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "ro": true, "sh": "Name of the integration.", "t": "`$STRING`", "key$": "name", "index$": 4 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Integration status.", "t": "`$STRING`", "key$": "status", "index$": 5 }, "updated": { "a": true, "fo": "date-time", "h": "Updated", "n": "updated", "r": true, "ro": true, "sh": "When the integration was last updated.", "t": "`$STRING`", "key$": "updated", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "one_paginated_integration_v2_list_item_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/one/integrations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "application", "or": "application", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "direction", "or": "direction", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "dlp_enabled", "or": "dlp_enabled", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "k": "query", "n": "order", "or": "order", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "use_case", "or": "use_case", "r": false, "t": "`$STRING`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/one/integrations", "q": { "exist": ["account_id", "application", "direction", "dlp_enabled", "order", "page", "page_size", "search", "status", "use_case"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "one" }, { "lit": "integrations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "one_paginated_integration_v2_list_item_list", "name__orig": "one_paginated_integration_v2_list_item_list", "Name": "OnePaginatedIntegrationV2ListItemList", "name_": "one_paginated_integration_v2_list_item_list", "name-": "one-paginated-integration-v2-list-item-list", "NAME": "ONE_PAGINATED_INTEGRATION_V2_LIST_ITEM_LIST", "index$": 35 }, { "active": true, "entity": "one_paginated_integration_v2_list_item_list", "key$": "BasicOnePaginatedIntegrationV2ListItemListFlow", "kind": "basic", "name": "BasicOnePaginatedIntegrationV2ListItemListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "one_paginated_integration_v2_list_item_list_ref01" } }], "index$": 0 }] }, 'OnePaginatedIntegrationV2ListItemList', { "GET /accounts/{account_id}/one/integrations": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Cloudflare account identifier.", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }, { "name": "application", "in": "query", "description": "Filter by application/vendor (e.g., GOOGLE_WORKSPACE, MICROSOFT_INTERNAL).", "schema": { "type": "string" }, "index$": 1 }, { "name": "direction", "in": "query", "description": "Direction to order results.", "schema": { "type": "string", "enum": ["asc", "desc"] }, "index$": 2 }, { "name": "dlp_enabled", "in": "query", "description": "Filter by DLP enabled status (true/false).", "schema": { "type": "boolean" }, "index$": 3 }, { "name": "order", "in": "query", "description": "Field to order results by.", "schema": { "type": "string", "enum": ["application", "created", "name", "status"] }, "index$": 4 }, { "name": "page", "in": "query", "description": "Page number within the paginated result set.", "schema": { "type": "integer" }, "index$": 5 }, { "name": "page_size", "in": "query", "description": "Number of results per page.", "schema": { "type": "integer" }, "index$": 6 }, { "name": "search", "in": "query", "description": "Search integrations by name or application.", "schema": { "type": "string" }, "index$": 7 }, { "name": "status", "in": "query", "description": "Filter by integration status.", "schema": { "type": "string", "enum": ["Healthy", "Initializing", "Offline", "Unhealthy"] }, "index$": 8 }, { "name": "use_cases", "in": "query", "description": "Filter by enabled use cases (e.g., casb, ces). Matches integrations enrolled in any of the specified values. Can be specified multiple times.", "schema": { "type": "string" }, "index$": 9 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let one_paginated_integration_v2_list_item_list_ref01_data = Object.values(setup.data.existing.one_paginated_integration_v2_list_item_list)[0];
        // LIST
        const one_paginated_integration_v2_list_item_list_ref01_ent = client.OnePaginatedIntegrationV2ListItemList();
        const one_paginated_integration_v2_list_item_list_ref01_match = {};
        one_paginated_integration_v2_list_item_list_ref01_match['account_id'] = setup.idmap['account01'];
        const one_paginated_integration_v2_list_item_list_ref01_list = (await one_paginated_integration_v2_list_item_list_ref01_ent.list(one_paginated_integration_v2_list_item_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/one_paginated_integration_v2_list_item_list/OnePaginatedIntegrationV2ListItemListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['one_paginated_integration_v2_list_item_list01', 'one_paginated_integration_v2_list_item_list02', 'one_paginated_integration_v2_list_item_list03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_ONE_PAGINATED_INTEGRATION_V2_LIST_ITEM_LIST_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_PAGINATED_INTEGRATION_V2_LIST_ITEM_LIST_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_PAGINATED_INTEGRATION_V2_LIST_ITEM_LIST_ENTID'];
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
//# sourceMappingURL=OnePaginatedIntegrationV2ListItemListEntity.test.js.map