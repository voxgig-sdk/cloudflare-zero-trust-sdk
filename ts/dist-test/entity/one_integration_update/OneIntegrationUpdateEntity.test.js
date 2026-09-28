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
(0, node_test_1.describe)('OneIntegrationUpdateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.OneIntegrationUpdate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'one_integration_update.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "credentials": { "a": true, "h": "Credentials", "n": "credentials", "r": false, "sh": "Partial credential fields to merge with existing.", "t": "`$OBJECT`", "key$": "credentials", "index$": 0 }, "dlp_profiles": { "a": true, "h": "Dlp Profiles", "n": "dlp_profiles", "r": false, "sh": "List of DLP profile IDs to associate with the integration.", "t": "`$ARRAY`", "key$": "dlp_profiles", "index$": 1 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": false, "sh": "List of errors.", "t": "`$ARRAY`", "key$": "errors", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": false, "sh": "List of messages.", "t": "`$ARRAY`", "key$": "messages", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the integration.", "t": "`$STRING`", "key$": "name", "index$": 5 }, "permissions": { "a": true, "h": "Permissions", "n": "permissions", "r": false, "sh": "List of permission scopes granted to the integration.", "t": "`$ARRAY`", "key$": "permissions", "index$": 6 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "sh": "The requested item.", "t": "`$ANY`", "key$": "result", "index$": 7 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the request succeeded.", "t": "`$BOOLEAN`", "key$": "success", "index$": 8 }, "use_cases": { "a": true, "h": "Use Cases", "n": "use_cases", "r": false, "sh": "List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']).", "t": "`$ARRAY`", "key$": "use_cases", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "one_integration_update", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/one/integrations/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/one/integrations/{id}", "q": { "exist": ["account_id", "id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "one" }, { "lit": "integrations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "one_integration_update", "name__orig": "one_integration_update", "Name": "OneIntegrationUpdate", "name_": "one_integration_update", "name-": "one-integration-update", "NAME": "ONE_INTEGRATION_UPDATE", "index$": 32 }, { "active": true, "entity": "one_integration_update", "key$": "BasicOneIntegrationUpdateFlow", "kind": "basic", "name": "BasicOneIntegrationUpdateFlow", "param": {}, "step": [{ "a": true, "d": { "account_id": "account01" }, "i": { "ref": "one_integration_update_ref01", "srcdatavar": "one_integration_update_ref01_data", "suffix": "_up0", "textfield": "name" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-one_integration_update_ref01" } }], "v": [], "index$": 0 }] }, 'OneIntegrationUpdate', { "PATCH /accounts/{account_id}/one/integrations/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "examples": { "UpdateCredentials": { "summary": "Example credentials update request", "value": { "credentials": { "access_token": "new_access_token", "refresh_token": "new_refresh_token" } } }, "UpdateFields": { "summary": "Example update integration request", "value": { "credentials": { "admin_email": "admin@corp.com" }, "dlp_profiles": ["e91a2360-da51-4fdf-9711-bcdecd462614"], "name": "My Updated Integration", "permissions": ["https://www.googleapis.com/auth/drive.readonly"], "use_cases": ["casb", "ces"] } } }, "schema": { "description": "Serializer for v2 integration PATCH requests.", "type": "object", "properties": { "credentials": { "description": "Partial credential fields to merge with existing.", "type": "object", "additionalProperties": true, "key$": "credentials" }, "dlp_profiles": { "description": "List of DLP profile IDs to associate with the integration.", "type": "array", "items": { "format": "uuid", "type": "string" }, "maxItems": 20, "key$": "dlp_profiles" }, "name": { "description": "Name of the integration.", "type": "string", "maxLength": 256, "minLength": 1, "key$": "name" }, "permissions": { "description": "List of permission scopes granted to the integration.", "type": "array", "items": { "minLength": 1, "type": "string" }, "key$": "permissions" }, "use_cases": { "description": "List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']).", "type": "array", "items": { "description": "* `casb` - casb\n* `ces` - ces\n* `auto_remediation` - auto_remediation", "enum": ["casb", "ces", "auto_remediation"], "type": "string" }, "key$": "use_cases" } }, "x-ref": "#/components/schemas/one_PatchedUpdateIntegrationV2Request", "index$": 1 } }, "text/plain;charset=UTF-8": { "schema": { "description": "Serializer for v2 integration PATCH requests.", "type": "object", "properties": { "credentials": { "description": "Partial credential fields to merge with existing.", "type": "object", "additionalProperties": true, "key$": "credentials" }, "dlp_profiles": { "description": "List of DLP profile IDs to associate with the integration.", "type": "array", "items": { "format": "uuid", "type": "string" }, "maxItems": 20, "key$": "dlp_profiles" }, "name": { "description": "Name of the integration.", "type": "string", "maxLength": 256, "minLength": 1, "key$": "name" }, "permissions": { "description": "List of permission scopes granted to the integration.", "type": "array", "items": { "minLength": 1, "type": "string" }, "key$": "permissions" }, "use_cases": { "description": "List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']).", "type": "array", "items": { "description": "* `casb` - casb\n* `ces` - ces\n* `auto_remediation` - auto_remediation", "enum": ["casb", "ces", "auto_remediation"], "type": "string" }, "key$": "use_cases" } }, "x-ref": "#/components/schemas/one_PatchedUpdateIntegrationV2Request" } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Cloudflare account identifier.", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353" }, "index$": 0 }, { "name": "id", "in": "path", "description": "Integration ID.", "required": true, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let one_integration_update_ref01_data = Object.values(setup.data.existing.one_integration_update)[0];
        // UPDATE
        const one_integration_update_ref01_ent = client.OneIntegrationUpdate();
        const one_integration_update_ref01_data_up0 = {};
        one_integration_update_ref01_data_up0.id = one_integration_update_ref01_data.id;
        one_integration_update_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const one_integration_update_ref01_markdef_up0 = { name: 'name', value: 'Mark01-one_integration_update_ref01_' + setup.now };
        one_integration_update_ref01_data_up0[one_integration_update_ref01_markdef_up0.name] = one_integration_update_ref01_markdef_up0.value;
        const one_integration_update_ref01_resdata_up0 = (await one_integration_update_ref01_ent.update(one_integration_update_ref01_data_up0)).data();
        (0, node_assert_1.default)(one_integration_update_ref01_resdata_up0.id === one_integration_update_ref01_data_up0.id);
        (0, node_assert_1.default)(one_integration_update_ref01_resdata_up0[one_integration_update_ref01_markdef_up0.name] === one_integration_update_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/one_integration_update/OneIntegrationUpdateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['one_integration_update01', 'one_integration_update02', 'one_integration_update03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_ONE_INTEGRATION_UPDATE_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_INTEGRATION_UPDATE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ONE_INTEGRATION_UPDATE_ENTID'];
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
//# sourceMappingURL=OneIntegrationUpdateEntity.test.js.map