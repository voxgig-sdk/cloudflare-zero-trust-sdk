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
(0, node_test_1.describe)('RegistrationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.Registration();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'registration.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 2 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "sh": "A WARP configuration tied to a single user.", "t": "`$OBJECT`", "key$": "result", "index$": 3 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": true, "sh": "V4 public API Pagination/Cursor info.", "t": "`$OBJECT`", "key$": "result_info", "index$": 4 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "registration", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/devices/registrations/revoke", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "id", "or": "id", "r": true, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/devices/registrations/revoke", "q": { "$action": "revoke", "exist": ["account_id", "id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "registrations" }, { "lit": "revoke" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /accounts/{account_id}/devices/registrations/unrevoke", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "id", "or": "id", "r": true, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/devices/registrations/unrevoke", "q": { "$action": "unrevoke", "exist": ["account_id", "id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "registrations" }, { "lit": "unrevoke" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/devices/registrations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "device_id", "or": "device_id", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "id", "or": "id", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "k": "query", "n": "include", "or": "include", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "ex": "11ffb86f-3f0c-4306-b4a2-e62f872b166a", "k": "query", "n": "policy_id", "or": "policy_id", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": "warp", "k": "query", "n": "registration_type", "or": "registration_type", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "seen_after", "or": "seen_after", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "query", "n": "seen_before", "or": "seen_before", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "sort_by", "or": "sort_by", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "k": "query", "n": "sort_order", "or": "sort_order", "r": false, "t": "`$STRING`", "index$": 11 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 12 }, { "a": true, "k": "query", "n": "user_id", "or": "user_id", "r": false, "t": "`$ARRAY`", "index$": 13 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/devices/registrations", "q": { "exist": ["account_id", "cursor", "device_id", "id", "include", "per_page", "policy_id", "registration_type", "search", "seen_after", "seen_before", "sort_by", "sort_order", "status", "user_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "registrations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/devices/registrations/{registration_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "registration_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "include", "or": "include", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/devices/registrations/{registration_id}", "q": { "exist": ["account_id", "id", "include"] }, "r": { "param": { "registration_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "registrations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/devices/registrations/{registration_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "registration_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/devices/registrations/{registration_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "registration_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "registrations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "registration", "name__orig": "registration", "Name": "Registration", "name_": "registration", "name-": "registration", "NAME": "REGISTRATION", "index$": 27 }, { "active": true, "entity": "registration", "key$": "BasicRegistrationFlow", "kind": "basic", "name": "BasicRegistrationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "registration_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "registration_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "registration_ref01", "srcdatavar": "registration_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "registration01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-registration_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "registration_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "registration01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "registration_ref01" } }], "index$": 4 }] }, 'Registration', { "POST /accounts/{account_id}/devices/registrations/revoke": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "id", "in": "query", "description": "A list of registration IDs to revoke.", "required": true, "schema": { "type": "array", "items": { "type": "string" } }, "index$": 1 }] }, "POST /accounts/{account_id}/devices/registrations/unrevoke": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "id", "in": "query", "description": "A list of registration IDs to unrevoke.", "required": true, "schema": { "type": "array", "items": { "type": "string" } }, "index$": 1 }] }, "GET /accounts/{account_id}/devices/registrations": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "description": "Filter by user ID.", "explode": true, "in": "query", "name": "user.id", "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_user_id", "index$": 1 }, { "description": "Filter by the last_seen timestamp - returns only registrations last seen after this timestamp.", "explode": false, "in": "query", "name": "seen_after", "schema": { "type": "string" }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_seen_after", "index$": 2 }, { "description": "Filter by the last_seen timestamp - returns only registrations last seen before this timestamp.", "explode": false, "in": "query", "name": "seen_before", "schema": { "type": "string" }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_seen_before", "index$": 3 }, { "description": "Filter by registration status. Defaults to 'active'.", "explode": false, "in": "query", "name": "status", "schema": { "type": "string", "enum": ["active", "all", "revoked"] }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_status", "index$": 4 }, { "description": "Filter by registration client type.", "explode": false, "in": "query", "name": "registration_type", "schema": { "description": "The registration client type, derived from device_type.", "type": "string", "example": "warp", "enum": ["warp", "browser_extension"], "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_registration_type" }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_registration_type", "index$": 5 }, { "description": "The maximum number of devices to return in a single response.", "explode": false, "in": "query", "name": "per_page", "schema": { "type": "integer", "format": "uint64" }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_per_page", "index$": 6 }, { "description": "Filter by registration details.", "explode": false, "in": "query", "name": "search", "schema": { "type": "string" }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_search", "index$": 7 }, { "description": "The registration field to order results by.", "explode": false, "in": "query", "name": "sort_by", "schema": { "type": "string", "enum": ["id", "user.name", "user.email", "last_seen_at", "created_at"] }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_sort_by", "index$": 8 }, { "description": "Sort direction.", "explode": false, "in": "query", "name": "sort_order", "schema": { "type": "string", "enum": ["asc", "desc"] }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_sort_order", "index$": 9 }, { "description": "Opaque token indicating the starting position when requesting the next set of records. A cursor value can be obtained from the result_info.cursor field in the response.", "explode": false, "in": "query", "name": "cursor", "schema": { "type": "string" }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_cursor", "index$": 10 }, { "description": "Filter by registration ID.", "explode": true, "in": "query", "name": "id", "schema": { "type": "array", "items": { "type": "string" } }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_id", "index$": 11 }, { "description": "Filter by WARP device ID.", "explode": false, "in": "query", "name": "device.id", "schema": { "type": "string" }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_device_id", "index$": 12 }, { "description": "Filter by the ID of the device settings profile assigned to the registration.", "explode": false, "in": "query", "name": "policy.id", "schema": { "description": "The ID of the device settings profile.", "type": "string", "format": "uuid", "example": "11ffb86f-3f0c-4306-b4a2-e62f872b166a" }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_policy_id", "index$": 13 }, { "description": "Comma-separated list of additional information that should be included in the registration response. Supported values are: \"policy\".\n", "in": "query", "name": "include", "schema": { "type": "string" }, "x-ref": "#/components/parameters/teams-devices_devices_list_registrations_param_include", "index$": 14 }] }, "GET /accounts/{account_id}/devices/registrations/{registration_id}": { "protocol": "http", "parameters": [{ "name": "registration_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "description": "Comma-separated list of additional information that should be included in the registration response. Supported values are: \"policy\".\n", "in": "query", "name": "include", "schema": { "type": "string" }, "x-ref": "#/components/parameters/teams-devices_devices_get_registration_param_include", "index$": 2 }] }, "DELETE /accounts/{account_id}/devices/registrations/{registration_id}": { "protocol": "http", "parameters": [{ "name": "registration_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const registration_ref01_ent = client.Registration();
        let registration_ref01_data = setup.data.new.registration['registration_ref01'];
        registration_ref01_data['account_id'] = setup.idmap['account01'];
        registration_ref01_data = (await registration_ref01_ent.create(registration_ref01_data)).data();
        (0, node_assert_1.default)(null != registration_ref01_data.id);
        // LIST
        const registration_ref01_match = {};
        registration_ref01_match['account_id'] = setup.idmap['account01'];
        const registration_ref01_list = (await registration_ref01_ent.list(registration_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(registration_ref01_list, { id: registration_ref01_data.id })));
        // LOAD
        const registration_ref01_match_dt0 = {};
        registration_ref01_match_dt0.id = registration_ref01_data.id;
        const registration_ref01_data_dt0 = (await registration_ref01_ent.load(registration_ref01_match_dt0)).data();
        (0, node_assert_1.default)(registration_ref01_data_dt0.id === registration_ref01_data.id);
        // REMOVE
        const registration_ref01_match_rm0 = { id: registration_ref01_data.id };
        await registration_ref01_ent.remove(registration_ref01_match_rm0);
        // LIST
        const registration_ref01_match_rt0 = {};
        registration_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        const registration_ref01_list_rt0 = (await registration_ref01_ent.list(registration_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(registration_ref01_list_rt0, { id: registration_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/registration/RegistrationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['registration01', 'registration02', 'registration03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_REGISTRATION_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_REGISTRATION_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_REGISTRATION_ENTID'];
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
//# sourceMappingURL=RegistrationEntity.test.js.map