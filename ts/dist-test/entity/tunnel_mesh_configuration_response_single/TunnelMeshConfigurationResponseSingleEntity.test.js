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
(0, node_test_1.describe)('TunnelMeshConfigurationResponseSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.TunnelMeshConfigurationResponseSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tunnel_mesh_configuration_response_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "config": { "a": true, "h": "Config", "n": "config", "r": false, "sh": "Provider-specific configuration.", "t": "`$OBJECT`", "union": { "branches": 3, "count": 1, "depth": 0 }, "key$": "config", "index$": 0 }, "ha_mode": { "a": true, "h": "Ha Mode", "n": "ha_mode", "r": true, "sh": "High-availability mode for the WARP Connector tunnel.", "t": "`$STRING`", "key$": "ha_mode", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "union": { "branches": 2, "count": 1, "depth": 2 }, "key$": "result", "index$": 2 } }, "name": "tunnel_mesh_configuration_response_single", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/warp_connector/{tunnel_id}/configurations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "warp_connector_id", "or": "tunnel_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/warp_connector/{tunnel_id}/configurations", "q": { "exist": ["account_id", "warp_connector_id"] }, "r": { "param": { "tunnel_id": "warp_connector_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "warp_connector" }, { "var": "warp_connector_id" }, { "lit": "configurations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/warp_connector/{tunnel_id}/configurations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "k": "param", "n": "warp_connector_id", "or": "tunnel_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/warp_connector/{tunnel_id}/configurations", "q": { "exist": ["account_id", "warp_connector_id"] }, "r": { "param": { "tunnel_id": "warp_connector_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "warp_connector" }, { "var": "warp_connector_id" }, { "lit": "configurations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "tunnel_mesh_configuration_response_single", "name__orig": "tunnel_mesh_configuration_response_single", "Name": "TunnelMeshConfigurationResponseSingle", "name_": "tunnel_mesh_configuration_response_single", "name-": "tunnel-mesh-configuration-response-single", "NAME": "TUNNEL_MESH_CONFIGURATION_RESPONSE_SINGLE", "index$": 70 }, { "active": true, "entity": "tunnel_mesh_configuration_response_single", "key$": "BasicTunnelMeshConfigurationResponseSingleFlow", "kind": "basic", "name": "BasicTunnelMeshConfigurationResponseSingleFlow", "param": {}, "step": [{ "a": true, "d": { "account_id": "account01" }, "i": { "ref": "tunnel_mesh_configuration_response_single_ref01", "srcdatavar": "tunnel_mesh_configuration_response_single_ref01_data", "suffix": "_up0", "textfield": "ha_mode" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tunnel_mesh_configuration_response_single_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "tunnel_mesh_configuration_response_single_ref01", "srcdatavar": "tunnel_mesh_configuration_response_single_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "tunnel_mesh_configuration_response_single01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tunnel_mesh_configuration_response_single_ref01" } }], "index$": 1 }] }, 'TunnelMeshConfigurationResponseSingle', { "GET /accounts/{account_id}/warp_connector/{tunnel_id}/configurations": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/tunnel_identifier" }, "index$": 0 }, { "name": "tunnel_id", "in": "path", "required": true, "schema": { "description": "UUID of the tunnel.", "type": "string", "format": "uuid", "example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "readOnly": true, "x-ref": "#/components/schemas/tunnel_tunnel_id-2" }, "index$": 1 }] }, "PUT /accounts/{account_id}/warp_connector/{tunnel_id}/configurations": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "config": { "description": "Provider-specific configuration. Required shape depends on ha_mode. For `aws`, must contain `fnr_id`. For `local`, must contain `vips`. For `none` and `disabled`, must be empty or omitted.", "type": "object", "nullable": true, "oneOf": [{ "type": "object", "properties": { "fnr_id": {} }, "required": ["fnr_id"], "x-ref": "#/components/schemas/tunnel_mesh_aws_config" }, { "type": "object", "properties": { "vips": {}, "vips_previous": {} }, "required": ["vips"], "x-ref": "#/components/schemas/tunnel_mesh_local_config" }, { "additionalProperties": false, "description": "Empty object for none/disabled modes.", "type": "object" }], "key$": "config" }, "ha_mode": { "description": "High-availability mode for the WARP Connector tunnel. `none` means HA is enabled but no provider is configured yet (newly created tunnels default to this). `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move for failover. `local` uses virtual IPs (VIPs) on the local interface.", "type": "string", "example": "aws", "enum": ["none", "disabled", "aws", "local"], "x-auditable": true, "x-ref": "#/components/schemas/tunnel_mesh_ha_mode", "key$": "ha_mode" } }, "required": ["ha_mode"], "x-ref": "#/components/schemas/tunnel_mesh_configuration_request_body", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/tunnel_identifier" }, "index$": 0 }, { "name": "tunnel_id", "in": "path", "required": true, "schema": { "description": "UUID of the tunnel.", "type": "string", "format": "uuid", "example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415", "maxLength": 36, "readOnly": true, "x-ref": "#/components/schemas/tunnel_tunnel_id-2" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let tunnel_mesh_configuration_response_single_ref01_data = Object.values(setup.data.existing.tunnel_mesh_configuration_response_single)[0];
        // UPDATE
        const tunnel_mesh_configuration_response_single_ref01_ent = client.TunnelMeshConfigurationResponseSingle();
        const tunnel_mesh_configuration_response_single_ref01_data_up0 = {};
        tunnel_mesh_configuration_response_single_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const tunnel_mesh_configuration_response_single_ref01_markdef_up0 = { name: 'ha_mode', value: 'Mark01-tunnel_mesh_configuration_response_single_ref01_' + setup.now };
        tunnel_mesh_configuration_response_single_ref01_data_up0[tunnel_mesh_configuration_response_single_ref01_markdef_up0.name] = tunnel_mesh_configuration_response_single_ref01_markdef_up0.value;
        const tunnel_mesh_configuration_response_single_ref01_resdata_up0 = (await tunnel_mesh_configuration_response_single_ref01_ent.update(tunnel_mesh_configuration_response_single_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != tunnel_mesh_configuration_response_single_ref01_resdata_up0);
        (0, node_assert_1.default)(tunnel_mesh_configuration_response_single_ref01_resdata_up0[tunnel_mesh_configuration_response_single_ref01_markdef_up0.name] === tunnel_mesh_configuration_response_single_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tunnel_mesh_configuration_response_single/TunnelMeshConfigurationResponseSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tunnel_mesh_configuration_response_single01', 'tunnel_mesh_configuration_response_single02', 'tunnel_mesh_configuration_response_single03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_MESH_CONFIGURATION_RESPONSE_SINGLE_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_MESH_CONFIGURATION_RESPONSE_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TUNNEL_MESH_CONFIGURATION_RESPONSE_SINGLE_ENTID'];
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
//# sourceMappingURL=TunnelMeshConfigurationResponseSingleEntity.test.js.map