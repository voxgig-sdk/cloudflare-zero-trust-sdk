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
(0, node_test_1.describe)('TeamsDevicesFallbackDomainResponseCollectionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.TeamsDevicesFallbackDomainResponseCollection();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'teams_devices_fallback_domain_response_collection.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$ARRAY`", "key$": "result", "index$": 0 } }, "name": "teams_devices_fallback_domain_response_collection", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "policy_id", "or": "policy_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/devices/policy/{policy_id}/fallback_domains", "q": { "exist": ["account_id", "policy_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "policy" }, { "var": "policy_id" }, { "lit": "fallback_domains" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/devices/policy/fallback_domains", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/devices/policy/fallback_domains", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "policy" }, { "lit": "fallback_domains" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "policy_id", "or": "policy_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": true, "k": "query", "n": "reset_default", "or": "reset_default", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/devices/policy/{policy_id}/fallback_domains", "q": { "exist": ["account_id", "policy_id", "reset_default"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "policy" }, { "var": "policy_id" }, { "lit": "fallback_domains" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /accounts/{account_id}/devices/policy/fallback_domains", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": true, "k": "query", "n": "reset_default", "or": "reset_default", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/devices/policy/fallback_domains", "q": { "exist": ["account_id", "reset_default"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "policy" }, { "lit": "fallback_domains" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "policy_id", "or": "policy_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/devices/policy/{policy_id}/fallback_domains", "q": { "exist": ["account_id", "policy_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "policy" }, { "var": "policy_id" }, { "lit": "fallback_domains" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /accounts/{account_id}/devices/policy/fallback_domains", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/devices/policy/fallback_domains", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "policy" }, { "lit": "fallback_domains" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "teams_devices_fallback_domain_response_collection", "name__orig": "teams_devices_fallback_domain_response_collection", "Name": "TeamsDevicesFallbackDomainResponseCollection", "name_": "teams_devices_fallback_domain_response_collection", "name-": "teams-devices-fallback-domain-response-collection", "NAME": "TEAMS_DEVICES_FALLBACK_DOMAIN_RESPONSE_COLLECTION", "index$": 51 }, { "active": true, "entity": "teams_devices_fallback_domain_response_collection", "key$": "BasicTeamsDevicesFallbackDomainResponseCollectionFlow", "kind": "basic", "name": "BasicTeamsDevicesFallbackDomainResponseCollectionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "teams_devices_fallback_domain_response_collection_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "teams_devices_fallback_domain_response_collection_ref01", "srcdatavar": "teams_devices_fallback_domain_response_collection_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-teams_devices_fallback_domain_response_collection_ref01" } }], "v": [], "index$": 1 }] }, 'TeamsDevicesFallbackDomainResponseCollection', { "GET /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains": { "protocol": "http", "parameters": [{ "name": "policy_id", "in": "path", "required": true, "schema": { "type": "string", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_schemas-uuid" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/teams-devices_identifier" }, "index$": 1 }] }, "GET /accounts/{account_id}/devices/policy/fallback_domains": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/teams-devices_identifier" }, "index$": 0 }] }, "DELETE /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains": { "protocol": "http", "parameters": [{ "name": "policy_id", "in": "path", "required": true, "schema": { "type": "string", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_schemas-uuid" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/teams-devices_identifier" }, "index$": 1 }, { "name": "reset_defaults", "in": "query", "description": "Deprecated and ignored. Deleting the list always restores the defaults.", "schema": { "type": "boolean", "default": true }, "deprecated": true, "index$": 2 }] }, "DELETE /accounts/{account_id}/devices/policy/fallback_domains": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/teams-devices_identifier" }, "index$": 0 }, { "name": "reset_defaults", "in": "query", "description": "Deprecated and ignored. Deleting the list always restores the defaults.", "schema": { "type": "boolean", "default": true }, "deprecated": true, "index$": 1 }] }, "PUT /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "description": { "description": "A description of the fallback domain, displayed in the client UI.", "example": "Domain bypass for local development", "maxLength": 100, "type": "string", "x-auditable": true }, "dns_server": { "description": "A list of IP addresses to handle domain resolution.", "items": { "description": "IPv4 or IPv6 address.", "example": "1.1.1.1", "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_ip" }, "type": "array" }, "suffix": { "description": "The domain suffix to match when resolving locally.", "example": "example.com", "type": "string", "x-auditable": true } }, "required": ["suffix"], "x-ref": "#/components/schemas/teams-devices_fallback_domain" }, "index$": 1 } } } }, "parameters": [{ "name": "policy_id", "in": "path", "required": true, "schema": { "type": "string", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_schemas-uuid" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/teams-devices_identifier" }, "index$": 1 }] }, "PUT /accounts/{account_id}/devices/policy/fallback_domains": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "description": { "description": "A description of the fallback domain, displayed in the client UI.", "example": "Domain bypass for local development", "maxLength": 100, "type": "string", "x-auditable": true }, "dns_server": { "description": "A list of IP addresses to handle domain resolution.", "items": { "description": "IPv4 or IPv6 address.", "example": "1.1.1.1", "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_ip" }, "type": "array" }, "suffix": { "description": "The domain suffix to match when resolving locally.", "example": "example.com", "type": "string", "x-auditable": true } }, "required": ["suffix"], "x-ref": "#/components/schemas/teams-devices_fallback_domain" }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/teams-devices_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let teams_devices_fallback_domain_response_collection_ref01_data = Object.values(setup.data.existing.teams_devices_fallback_domain_response_collection)[0];
        // LIST
        const teams_devices_fallback_domain_response_collection_ref01_ent = client.TeamsDevicesFallbackDomainResponseCollection();
        const teams_devices_fallback_domain_response_collection_ref01_match = {};
        teams_devices_fallback_domain_response_collection_ref01_match['account_id'] = setup.idmap['account01'];
        const teams_devices_fallback_domain_response_collection_ref01_list = (await teams_devices_fallback_domain_response_collection_ref01_ent.list(teams_devices_fallback_domain_response_collection_ref01_match)).map((e) => e.data());
        // UPDATE
        const teams_devices_fallback_domain_response_collection_ref01_data_up0 = {};
        const teams_devices_fallback_domain_response_collection_ref01_resdata_up0 = (await teams_devices_fallback_domain_response_collection_ref01_ent.update(teams_devices_fallback_domain_response_collection_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != teams_devices_fallback_domain_response_collection_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/teams_devices_fallback_domain_response_collection/TeamsDevicesFallbackDomainResponseCollectionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['teams_devices_fallback_domain_response_collection01', 'teams_devices_fallback_domain_response_collection02', 'teams_devices_fallback_domain_response_collection03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_FALLBACK_DOMAIN_RESPONSE_COLLECTION_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_FALLBACK_DOMAIN_RESPONSE_COLLECTION_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_FALLBACK_DOMAIN_RESPONSE_COLLECTION_ENTID'];
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
//# sourceMappingURL=TeamsDevicesFallbackDomainResponseCollectionEntity.test.js.map