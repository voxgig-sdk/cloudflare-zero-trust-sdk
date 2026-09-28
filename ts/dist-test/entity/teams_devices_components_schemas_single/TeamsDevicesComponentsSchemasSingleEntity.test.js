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
(0, node_test_1.describe)('TeamsDevicesComponentsSchemasSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.TeamsDevicesComponentsSchemasSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'teams_devices_components_schemas_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "config": { "a": true, "h": "Config", "n": "config", "op": { "update": { "req": false, "type": "`$OBJECT`" } }, "r": true, "sh": "The configuration object containing information for the WARP client to detect the managed network.", "t": "`$OBJECT`", "key$": "config", "index$": 0 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The name of the device managed network.", "t": "`$STRING`", "key$": "name", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "key$": "result", "index$": 2 }, "type": { "a": true, "h": "Type", "n": "type", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The type of device managed network.", "t": "`$STRING`", "key$": "type", "index$": 3 } }, "name": "teams_devices_components_schemas_single", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/devices/networks", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/devices/networks", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "networks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/devices/networks/{network_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "network_id", "or": "network_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/devices/networks/{network_id}", "q": { "exist": ["account_id", "network_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "networks" }, { "var": "network_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/devices/networks/{network_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "network_id", "or": "network_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/devices/networks/{network_id}", "q": { "exist": ["account_id", "network_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "networks" }, { "var": "network_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "teams_devices_components_schemas_single", "name__orig": "teams_devices_components_schemas_single", "Name": "TeamsDevicesComponentsSchemasSingle", "name_": "teams_devices_components_schemas_single", "name-": "teams-devices-components-schemas-single", "NAME": "TEAMS_DEVICES_COMPONENTS_SCHEMAS_SINGLE", "index$": 31 }, { "active": true, "entity": "teams_devices_components_schemas_single", "key$": "BasicTeamsDevicesComponentsSchemasSingleFlow", "kind": "basic", "name": "BasicTeamsDevicesComponentsSchemasSingleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "teams_devices_components_schemas_single_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "teams_devices_components_schemas_single_ref01", "srcdatavar": "teams_devices_components_schemas_single_ref01_data", "suffix": "_up0", "textfield": "name" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-teams_devices_components_schemas_single_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "teams_devices_components_schemas_single_ref01", "srcdatavar": "teams_devices_components_schemas_single_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "teams_devices_components_schemas_single01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-teams_devices_components_schemas_single_ref01" } }], "index$": 2 }] }, 'TeamsDevicesComponentsSchemasSingle', { "POST /accounts/{account_id}/devices/networks": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "config": { "description": "The configuration object containing information for the WARP client to detect the managed network.", "type": "object", "example": { "sha256": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c", "tls_sockaddr": "foo.bar:1234" }, "oneOf": [{ "type": "object", "properties": { "sha256": {}, "tls_sockaddr": {} }, "required": ["tls_sockaddr"], "x-ref": "#/components/schemas/teams-devices_tls_config_request" }], "x-ref": "#/components/schemas/teams-devices_schemas-config_request", "key$": "config" }, "name": { "description": "The name of the device managed network. This name must be unique.", "type": "string", "example": "managed-network-1", "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_device-managed-networks_components-schemas-name", "key$": "name" }, "type": { "description": "The type of device managed network.", "type": "string", "example": "tls", "enum": ["tls"], "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_components-schemas-type", "key$": "type" } }, "required": ["name", "type", "config"], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/teams-devices_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/devices/networks/{network_id}": { "protocol": "http", "parameters": [{ "name": "network_id", "in": "path", "required": true, "schema": { "description": "API UUID.", "type": "string", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_uuid" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/teams-devices_identifier" }, "index$": 1 }] }, "PUT /accounts/{account_id}/devices/networks/{network_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "config": { "description": "The configuration object containing information for the WARP client to detect the managed network.", "type": "object", "example": { "sha256": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c", "tls_sockaddr": "foo.bar:1234" }, "oneOf": [{ "type": "object", "properties": { "sha256": {}, "tls_sockaddr": {} }, "required": ["tls_sockaddr"], "x-ref": "#/components/schemas/teams-devices_tls_config_request" }], "x-ref": "#/components/schemas/teams-devices_schemas-config_request", "key$": "config" }, "name": { "description": "The name of the device managed network. This name must be unique.", "type": "string", "example": "managed-network-1", "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_device-managed-networks_components-schemas-name", "key$": "name" }, "type": { "description": "The type of device managed network.", "type": "string", "example": "tls", "enum": ["tls"], "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_components-schemas-type", "key$": "type" } }, "index$": 1 } } } }, "parameters": [{ "name": "network_id", "in": "path", "required": true, "schema": { "description": "API UUID.", "type": "string", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_uuid" }, "index$": 0 }, { "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/teams-devices_identifier" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const teams_devices_components_schemas_single_ref01_ent = client.TeamsDevicesComponentsSchemasSingle();
        let teams_devices_components_schemas_single_ref01_data = setup.data.new.teams_devices_components_schemas_single['teams_devices_components_schemas_single_ref01'];
        teams_devices_components_schemas_single_ref01_data['account_id'] = setup.idmap['account01'];
        teams_devices_components_schemas_single_ref01_data = (await teams_devices_components_schemas_single_ref01_ent.create(teams_devices_components_schemas_single_ref01_data)).data();
        (0, node_assert_1.default)(null != teams_devices_components_schemas_single_ref01_data);
        // UPDATE
        const teams_devices_components_schemas_single_ref01_data_up0 = {};
        teams_devices_components_schemas_single_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const teams_devices_components_schemas_single_ref01_markdef_up0 = { name: 'name', value: 'Mark01-teams_devices_components_schemas_single_ref01_' + setup.now };
        teams_devices_components_schemas_single_ref01_data_up0[teams_devices_components_schemas_single_ref01_markdef_up0.name] = teams_devices_components_schemas_single_ref01_markdef_up0.value;
        const teams_devices_components_schemas_single_ref01_resdata_up0 = (await teams_devices_components_schemas_single_ref01_ent.update(teams_devices_components_schemas_single_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != teams_devices_components_schemas_single_ref01_resdata_up0);
        (0, node_assert_1.default)(teams_devices_components_schemas_single_ref01_resdata_up0[teams_devices_components_schemas_single_ref01_markdef_up0.name] === teams_devices_components_schemas_single_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/teams_devices_components_schemas_single/TeamsDevicesComponentsSchemasSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['teams_devices_components_schemas_single01', 'teams_devices_components_schemas_single02', 'teams_devices_components_schemas_single03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_COMPONENTS_SCHEMAS_SINGLE_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_COMPONENTS_SCHEMAS_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_COMPONENTS_SCHEMAS_SINGLE_ENTID'];
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
//# sourceMappingURL=TeamsDevicesComponentsSchemasSingleEntity.test.js.map