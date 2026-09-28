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
(0, node_test_1.describe)('DexRemoteCommandEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.DexRemoteCommand();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'dex_remote_command.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "commands": { "a": true, "h": "Commands", "n": "commands", "r": true, "sh": "List of device-level commands to execute", "t": "`$ARRAY`", "union": { "branches": 3, "count": 1, "depth": 3 }, "key$": "commands", "index$": 0 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "load": { "req": true, "type": "`$OBJECT`" } }, "r": false, "t": "`$OBJECT`", "key$": "result", "index$": 1 } }, "name": "dex_remote_command", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/dex/commands", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01a7362d577a6c3019a474fd6f485823", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/dex/commands", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dex" }, { "lit": "commands" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/dex/commands", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01a7362d577a6c3019a474fd6f485823", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "command_type", "or": "command_type", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "device_id", "or": "device_id", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "2023-08-20T20:45:00Z", "k": "query", "n": "from", "or": "from", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": true, "t": "`$NUMBER`", "index$": 3 }, { "a": true, "ex": 10, "k": "query", "n": "per_page", "or": "per_page", "r": true, "t": "`$NUMBER`", "index$": 4 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": "2023-08-24T20:45:00Z", "k": "query", "n": "to", "or": "to", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "user_email", "or": "user_email", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/dex/commands", "q": { "exist": ["account_id", "command_type", "device_id", "from", "page", "per_page", "status", "to", "user_email"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dex" }, { "lit": "commands" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/dex/commands/devices", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01a7362d577a6c3019a474fd6f485823", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": true, "t": "`$NUMBER`", "index$": 0 }, { "a": true, "ex": 10, "k": "query", "n": "per_page", "or": "per_page", "r": true, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/dex/commands/devices", "q": { "exist": ["account_id", "page", "per_page", "search"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dex" }, { "lit": "commands" }, { "lit": "devices" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/dex/commands/{command_id}/downloads/{filename}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01a7362d577a6c3019a474fd6f485823", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5758fefe-ae7e-4538-a39b-1fef6abcb909", "k": "param", "n": "command_id", "or": "command_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "filename", "or": "filename", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/dex/commands/{command_id}/downloads/{filename}", "q": { "exist": ["account_id", "command_id", "filename"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dex" }, { "lit": "commands" }, { "var": "command_id" }, { "lit": "downloads" }, { "var": "filename" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/dex/commands/quota", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01a7362d577a6c3019a474fd6f485823", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/dex/commands/quota", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "dex" }, { "lit": "commands" }, { "lit": "quota" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "dex_remote_command", "name__orig": "dex_remote_command", "Name": "DexRemoteCommand", "name_": "dex_remote_command", "name-": "dex-remote-command", "NAME": "DEX_REMOTE_COMMAND", "index$": 3 }, { "active": true, "entity": "dex_remote_command", "key$": "BasicDexRemoteCommandFlow", "kind": "basic", "name": "BasicDexRemoteCommandFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "dex_remote_command_ref01" }, "m": { "account_id": "account01", "command_id": "command01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "dex_remote_command_ref01", "srcdatavar": "dex_remote_command_ref01_data", "suffix": "_dt0" }, "m": { "id": "dex_remote_command01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dex_remote_command_ref01" } }], "index$": 1 }] }, 'DexRemoteCommand', { "POST /accounts/{account_id}/dex/commands": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "commands": { "description": "List of device-level commands to execute", "type": "array", "items": { "properties": { "args": { "description": "Command arguments. Allowed fields depend on `type`.", "type": "object", "oneOf": [] }, "device_id": { "description": "Unique identifier for the physical device", "type": "string" }, "registration_id": { "description": "Unique identifier for the device registration. Required for multi-user devices to target the correct user session.", "type": "string" }, "type": { "description": "Type of command to execute on the device", "type": "string", "enum": [], "x-auditable": true }, "user_email": { "description": "Email tied to the device", "type": "string" } }, "required": ["device_id", "user_email", "type"], "type": "object" }, "maxItems": 20, "key$": "commands" } }, "required": ["commands"], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Unique Cloudflare account ID.", "required": true, "schema": { "description": "Unique identifier linked to an account.", "type": "string", "example": "01a7362d577a6c3019a474fd6f485823", "maxLength": 32, "readOnly": true, "x-ref": "#/components/schemas/digital-experience-monitoring_account_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/dex/commands": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Unique Cloudflare account ID.", "required": true, "schema": { "description": "Unique identifier linked to an account.", "type": "string", "example": "01a7362d577a6c3019a474fd6f485823", "maxLength": 32, "readOnly": true, "x-ref": "#/components/schemas/digital-experience-monitoring_account_identifier" }, "index$": 0 }, { "name": "page", "in": "query", "description": "Page number of paginated results.", "required": true, "schema": { "type": "number", "example": 1, "default": 1, "minimum": 1 }, "index$": 1 }, { "name": "per_page", "in": "query", "description": "Number of results per page.", "required": true, "schema": { "type": "number", "example": 10, "maximum": 50, "minimum": 1 }, "index$": 2 }, { "name": "from", "in": "query", "description": "Start time for the query in ISO (RFC3339 - ISO 8601) format.", "schema": { "type": "string", "format": "date-time", "example": "2023-08-20T20:45:00Z" }, "index$": 3 }, { "name": "to", "in": "query", "description": "End time for the query in ISO (RFC3339 - ISO 8601) format.", "schema": { "type": "string", "format": "date-time", "example": "2023-08-24T20:45:00Z" }, "index$": 4 }, { "name": "device_id", "in": "query", "description": "Unique identifier for a device.", "schema": { "type": "string" }, "index$": 5 }, { "name": "user_email", "in": "query", "description": "Email tied to the device.", "schema": { "type": "string" }, "index$": 6 }, { "name": "command_type", "in": "query", "description": "Optionally filter executed commands by command type.", "schema": { "type": "string", "enum": ["pcap", "speed-test", "warp-diag"] }, "index$": 7 }, { "name": "status", "in": "query", "description": "Optionally filter executed commands by status.", "schema": { "type": "string", "enum": ["PENDING_EXEC", "PENDING_UPLOAD", "SUCCESS", "FAILED"] }, "index$": 8 }] }, "GET /accounts/{account_id}/dex/commands/devices": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Unique Cloudflare account ID.", "required": true, "schema": { "description": "Unique identifier linked to an account.", "type": "string", "example": "01a7362d577a6c3019a474fd6f485823", "maxLength": 32, "readOnly": true, "x-ref": "#/components/schemas/digital-experience-monitoring_account_identifier" }, "index$": 0 }, { "name": "page", "in": "query", "description": "Page number of paginated results.", "required": true, "schema": { "type": "number", "example": 1, "default": 1, "minimum": 1 }, "index$": 1 }, { "name": "per_page", "in": "query", "description": "Number of results per page.", "required": true, "schema": { "type": "number", "example": 10, "maximum": 50, "minimum": 1 }, "index$": 2 }, { "name": "search", "in": "query", "description": "Filter devices by name or email.", "schema": { "type": "string" }, "index$": 3 }] }, "GET /accounts/{account_id}/dex/commands/{command_id}/downloads/{filename}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Unique Cloudflare account ID.", "required": true, "schema": { "description": "Unique identifier linked to an account.", "type": "string", "example": "01a7362d577a6c3019a474fd6f485823", "maxLength": 32, "readOnly": true, "x-ref": "#/components/schemas/digital-experience-monitoring_account_identifier" }, "index$": 0 }, { "name": "command_id", "in": "path", "description": "Unique identifier for command.", "required": true, "schema": { "description": "Unique identifier for a command", "type": "string", "example": "5758fefe-ae7e-4538-a39b-1fef6abcb909", "x-ref": "#/components/schemas/digital-experience-monitoring_command_id" }, "index$": 1 }, { "name": "filename", "in": "path", "description": "The name of the file to be downloaded, including the `.zip` extension.", "required": true, "schema": { "type": "string" }, "index$": 2 }] }, "GET /accounts/{account_id}/dex/commands/quota": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "description": "Unique Cloudflare account ID.", "required": true, "schema": { "description": "Unique identifier linked to an account.", "type": "string", "example": "01a7362d577a6c3019a474fd6f485823", "maxLength": 32, "readOnly": true, "x-ref": "#/components/schemas/digital-experience-monitoring_account_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const dex_remote_command_ref01_ent = client.DexRemoteCommand();
        let dex_remote_command_ref01_data = setup.data.new.dex_remote_command['dex_remote_command_ref01'];
        dex_remote_command_ref01_data['account_id'] = setup.idmap['account01'];
        dex_remote_command_ref01_data['command_id'] = setup.idmap['command01'];
        dex_remote_command_ref01_data = (await dex_remote_command_ref01_ent.create(dex_remote_command_ref01_data)).data();
        (0, node_assert_1.default)(null != dex_remote_command_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/dex_remote_command/DexRemoteCommandTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['dex_remote_command01', 'dex_remote_command02', 'dex_remote_command03', 'account01', 'command01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_DEX_REMOTE_COMMAND_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_DEX_REMOTE_COMMAND_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_DEX_REMOTE_COMMAND_ENTID'];
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
//# sourceMappingURL=DexRemoteCommandEntity.test.js.map