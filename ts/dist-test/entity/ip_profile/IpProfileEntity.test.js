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
(0, node_test_1.describe)('IpProfileEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.IpProfile();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ip_profile.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "An optional description of the Device IP profile.", "t": "`$STRING`", "key$": "description", "index$": 0 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": false, "sh": "Whether the Device IP profile will be applied to matching devices.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 1 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "match": { "a": true, "h": "Match", "n": "match", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The wirefilter expression to match registrations.", "t": "`$STRING`", "key$": "match", "index$": 4 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "A user-friendly name for the Device IP profile.", "t": "`$STRING`", "key$": "name", "index$": 6 }, "precedence": { "a": true, "h": "Precedence", "n": "precedence", "op": { "update": { "req": false, "type": "`$INTEGER`" } }, "r": true, "sh": "The precedence of the Device IP profile.", "t": "`$INTEGER`", "key$": "precedence", "index$": 7 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 8 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": true, "t": "`$OBJECT`", "key$": "result_info", "index$": 9 }, "subnet_id": { "a": true, "h": "Subnet Id", "n": "subnet_id", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The ID of the Subnet.", "t": "`$STRING`", "key$": "subnet_id", "index$": 10 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "ip_profile", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/devices/ip-profiles", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/devices/ip-profiles", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "ip-profiles" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/devices/ip-profiles", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 50, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/devices/ip-profiles", "q": { "exist": ["account_id", "page", "per_page"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "ip-profiles" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/devices/ip-profiles/{profile_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "profile_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/devices/ip-profiles/{profile_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "profile_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "ip-profiles" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/devices/ip-profiles/{profile_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "profile_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/devices/ip-profiles/{profile_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "profile_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "ip-profiles" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/devices/ip-profiles/{profile_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "profile_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/devices/ip-profiles/{profile_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "profile_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "ip-profiles" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "ip_profile", "name__orig": "ip_profile", "Name": "IpProfile", "name_": "ip_profile", "name-": "ip-profile", "NAME": "IP_PROFILE", "index$": 18 }, { "active": true, "entity": "ip_profile", "key$": "BasicIpProfileFlow", "kind": "basic", "name": "BasicIpProfileFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "ip_profile_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "ip_profile_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "ip_profile_ref01", "srcdatavar": "ip_profile_ref01_data", "suffix": "_up0", "textfield": "description" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ip_profile_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "ip_profile_ref01", "srcdatavar": "ip_profile_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "ip_profile01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ip_profile_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "ip_profile_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "ip_profile01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "ip_profile_ref01" } }], "index$": 5 }] }, 'IpProfile', { "POST /accounts/{account_id}/devices/ip-profiles": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "description": { "description": "An optional description of the Device IP profile.", "type": "string", "example": "example comment", "nullable": true, "x-auditable": true, "key$": "description" }, "enabled": { "description": "Whether the Device IP profile will be applied to matching devices.", "type": "boolean", "example": true, "default": true, "x-auditable": true, "key$": "enabled" }, "match": { "description": "The wirefilter expression to match registrations. Available values: \"identity.name\", \"identity.email\", \"identity.groups.id\", \"identity.groups.name\", \"identity.groups.email\", \"identity.saml_attributes\".", "type": "string", "example": "identity.email == \"test@cloudflare.com\"", "maxLength": 10000, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_ip_profile_match", "key$": "match" }, "name": { "description": "A user-friendly name for the Device IP profile.", "type": "string", "example": "IPv4 Cloudflare Source IPs", "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_ip_profile_name", "key$": "name" }, "precedence": { "description": "The precedence of the Device IP profile. Lower values indicate higher precedence. Device IP profile will be evaluated in ascending order of this field.", "type": "integer", "example": 100, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_ip_profile_precedence", "key$": "precedence" }, "subnet_id": { "description": "The ID of the Subnet.", "type": "string", "example": "b70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_ip_profile_subnet_id", "key$": "subnet_id" } }, "required": ["name", "subnet_id", "precedence", "match"], "x-ref": "#/components/schemas/teams-devices_ip_profile_create_request", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /accounts/{account_id}/devices/ip-profiles": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "page", "in": "query", "description": "The page number to return.", "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 1 }, { "name": "per_page", "in": "query", "description": "The number of IP profiles to return per page.", "schema": { "type": "integer", "default": 50, "maximum": 100, "minimum": 1 }, "index$": 2 }] }, "GET /accounts/{account_id}/devices/ip-profiles/{profile_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "profile_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 1 }] }, "DELETE /accounts/{account_id}/devices/ip-profiles/{profile_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "profile_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 1 }] }, "PATCH /accounts/{account_id}/devices/ip-profiles/{profile_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "description": { "description": "An optional description of the Device IP profile.", "type": "string", "example": "example comment", "x-auditable": true, "key$": "description" }, "enabled": { "description": "Whether the Device IP profile is enabled.", "type": "boolean", "example": true, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_ip_profile_enabled", "key$": "enabled" }, "match": { "description": "The wirefilter expression to match registrations. Available values: \"identity.name\", \"identity.email\", \"identity.groups.id\", \"identity.groups.name\", \"identity.groups.email\", \"identity.saml_attributes\".", "type": "string", "example": "identity.email == \"test@cloudflare.com\"", "maxLength": 10000, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_ip_profile_match", "key$": "match" }, "name": { "description": "A user-friendly name for the Device IP profile.", "type": "string", "example": "IPv4 Cloudflare Source IPs", "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_ip_profile_name", "key$": "name" }, "precedence": { "description": "The precedence of the Device IP profile. Lower values indicate higher precedence. Device IP profile will be evaluated in ascending order of this field.", "type": "integer", "example": 100, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_ip_profile_precedence", "key$": "precedence" }, "subnet_id": { "description": "The ID of the Subnet.", "type": "string", "example": "b70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_ip_profile_subnet_id", "key$": "subnet_id" } }, "x-ref": "#/components/schemas/teams-devices_ip_profile_update_request", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "profile_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ip_profile_ref01_ent = client.IpProfile();
        let ip_profile_ref01_data = setup.data.new.ip_profile['ip_profile_ref01'];
        ip_profile_ref01_data['account_id'] = setup.idmap['account01'];
        ip_profile_ref01_data = (await ip_profile_ref01_ent.create(ip_profile_ref01_data)).data();
        (0, node_assert_1.default)(null != ip_profile_ref01_data.id);
        // LIST
        const ip_profile_ref01_match = {};
        ip_profile_ref01_match['account_id'] = setup.idmap['account01'];
        const ip_profile_ref01_list = (await ip_profile_ref01_ent.list(ip_profile_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(ip_profile_ref01_list, { id: ip_profile_ref01_data.id })));
        // UPDATE
        const ip_profile_ref01_data_up0 = {};
        ip_profile_ref01_data_up0.id = ip_profile_ref01_data.id;
        ip_profile_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const ip_profile_ref01_markdef_up0 = { name: 'description', value: 'Mark01-ip_profile_ref01_' + setup.now };
        ip_profile_ref01_data_up0[ip_profile_ref01_markdef_up0.name] = ip_profile_ref01_markdef_up0.value;
        const ip_profile_ref01_resdata_up0 = (await ip_profile_ref01_ent.update(ip_profile_ref01_data_up0)).data();
        (0, node_assert_1.default)(ip_profile_ref01_resdata_up0.id === ip_profile_ref01_data_up0.id);
        (0, node_assert_1.default)(ip_profile_ref01_resdata_up0[ip_profile_ref01_markdef_up0.name] === ip_profile_ref01_markdef_up0.value);
        // LOAD
        const ip_profile_ref01_match_dt0 = {};
        ip_profile_ref01_match_dt0.id = ip_profile_ref01_data.id;
        const ip_profile_ref01_data_dt0 = (await ip_profile_ref01_ent.load(ip_profile_ref01_match_dt0)).data();
        (0, node_assert_1.default)(ip_profile_ref01_data_dt0.id === ip_profile_ref01_data.id);
        // REMOVE
        const ip_profile_ref01_match_rm0 = { id: ip_profile_ref01_data.id };
        await ip_profile_ref01_ent.remove(ip_profile_ref01_match_rm0);
        // LIST
        const ip_profile_ref01_match_rt0 = {};
        ip_profile_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        const ip_profile_ref01_list_rt0 = (await ip_profile_ref01_ent.list(ip_profile_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(ip_profile_ref01_list_rt0, { id: ip_profile_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ip_profile/IpProfileTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ip_profile01', 'ip_profile02', 'ip_profile03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_IP_PROFILE_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_IP_PROFILE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_IP_PROFILE_ENTID'];
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
//# sourceMappingURL=IpProfileEntity.test.js.map