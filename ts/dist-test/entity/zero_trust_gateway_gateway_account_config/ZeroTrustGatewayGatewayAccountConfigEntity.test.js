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
(0, node_test_1.describe)('ZeroTrustGatewayGatewayAccountConfigEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.ZeroTrustGatewayGatewayAccountConfig();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'zero_trust_gateway_gateway_account_config.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "key$": "result", "index$": 0 }, "settings": { "a": true, "h": "Settings", "n": "settings", "r": false, "sh": "Specify account settings.", "t": "`$OBJECT`", "key$": "settings", "index$": 1 } }, "name": "zero_trust_gateway_gateway_account_config", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/gateway/configuration", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/gateway/configuration", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "gateway" }, { "lit": "configuration" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "patch": { "input": "data", "name": "patch", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/gateway/configuration", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/gateway/configuration", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "gateway" }, { "lit": "configuration" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "patch" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/gateway/configuration", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/gateway/configuration", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "gateway" }, { "lit": "configuration" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "zero_trust_gateway_gateway_account_config", "name__orig": "zero_trust_gateway_gateway_account_config", "Name": "ZeroTrustGatewayGatewayAccountConfig", "name_": "zero_trust_gateway_gateway_account_config", "name-": "zero-trust-gateway-gateway-account-config", "NAME": "ZERO_TRUST_GATEWAY_GATEWAY_ACCOUNT_CONFIG", "index$": 79 }, { "active": true, "entity": "zero_trust_gateway_gateway_account_config", "key$": "BasicZeroTrustGatewayGatewayAccountConfigFlow", "kind": "basic", "name": "BasicZeroTrustGatewayGatewayAccountConfigFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "zero_trust_gateway_gateway_account_config_ref01", "srcdatavar": "zero_trust_gateway_gateway_account_config_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-zero_trust_gateway_gateway_account_config_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "zero_trust_gateway_gateway_account_config_ref01", "srcdatavar": "zero_trust_gateway_gateway_account_config_ref01_data", "suffix": "_dt0" }, "m": { "id": "zero_trust_gateway_gateway_account_config01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-zero_trust_gateway_gateway_account_config_ref01" } }], "index$": 1 }] }, 'ZeroTrustGatewayGatewayAccountConfig', { "GET /accounts/{account_id}/gateway/configuration": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Specify the Cloudflare account identifier.", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/zero-trust-gateway_identifier" }, "index$": 0 }] }, "PATCH /accounts/{account_id}/gateway/configuration": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Specify account settings.", "properties": { "settings": { "description": "Specify account settings.", "properties": { "activity_log": { "description": "Specify activity log settings.", "nullable": true, "properties": { "enabled": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_activity-log-settings", "x-stainless-terraform-configurability": "optional" }, "antivirus": { "description": "Specify anti-virus settings.", "nullable": true, "properties": { "enabled_download_phase": {}, "enabled_upload_phase": {}, "fail_closed": {}, "notification_settings": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_anti-virus-settings", "x-stainless-terraform-configurability": "optional" }, "block_page": { "description": "Specify block page layout settings.", "nullable": true, "properties": { "background_color": {}, "enabled": {}, "footer_text": {}, "header_text": {}, "include_context": {}, "logo_path": {}, "mailto_address": {}, "mailto_subject": {}, "mode": {}, "name": {}, "read_only": {}, "source_account": {}, "suppress_footer": {}, "target_uri": {}, "version": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_block-page-settings", "x-stainless-terraform-configurability": "optional" }, "body_scanning": { "description": "Specify the DLP inspection mode.", "nullable": true, "properties": { "inspection_mode": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_body-scanning-settings", "x-stainless-terraform-configurability": "optional" }, "browser_isolation": { "description": "Specify Clientless Browser Isolation settings.", "nullable": true, "properties": { "non_identity_enabled": {}, "url_browser_isolation_enabled": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_browser-isolation-settings", "x-stainless-terraform-configurability": "optional" }, "certificate": { "description": "Specify certificate settings for Gateway TLS interception. If unset, the Cloudflare Root CA handles interception.", "nullable": true, "properties": { "id": {} }, "required": ["id"], "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_certificate-settings", "x-stainless-terraform-configurability": "optional" }, "custom_certificate": { "deprecated": true, "description": "Specify custom certificate settings for BYO-PKI. This field is deprecated; use `certificate` instead.", "nullable": true, "properties": { "binding_status": {}, "enabled": {}, "id": {}, "updated_at": {} }, "required": ["enabled"], "type": "object", "x-fern-availability": "deprecated", "x-ref": "#/components/schemas/zero-trust-gateway_custom-certificate-settings", "x-stainless-terraform-configurability": "optional" }, "extended_email_matching": { "description": "Configures user email settings for firewall policies. When you enable this, the system standardizes email addresses in the identity portion of the rule to match extended email variants in firewall policies. When you disable this setting, the system matches email addresses exactly as you provide them. Enable this setting if your email uses `.` or `+` modifiers.", "nullable": true, "properties": { "enabled": {}, "read_only": {}, "source_account": {}, "version": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_extended-email-matching", "x-stainless-terraform-configurability": "optional" }, "fips": { "description": "Specify FIPS settings.", "nullable": true, "properties": { "tls": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_fips-settings", "x-stainless-terraform-configurability": "optional" }, "host_selector": { "description": "Enable host selection in egress policies.", "nullable": true, "properties": { "enabled": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_host-selector-settings", "x-stainless-terraform-configurability": "optional" }, "inspection": { "description": "Define the proxy inspection mode.", "nullable": true, "properties": { "mode": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_inspection-settings", "x-stainless-terraform-configurability": "optional" }, "max_ttl_secs": { "description": "Account-level cap on DNS response TTLs, in seconds. Gateway rewrites DNS responses so returned record TTLs do not exceed this value. Null means no cap. Each DNS location can inherit, override, or disable it through the location `max_ttl` setting.", "example": 3600, "maximum": 36000, "minimum": 60, "nullable": true, "type": "integer", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_max-ttl-secs", "x-stainless-terraform-configurability": "optional" }, "protocol_detection": { "description": "Specify whether to detect protocols from the initial bytes of client traffic.", "nullable": true, "properties": { "enabled": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_protocol-detection", "x-stainless-terraform-configurability": "optional" }, "sandbox": { "description": "Specify whether to enable the sandbox.", "nullable": true, "properties": { "enabled": {}, "fallback_action": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_sandbox", "x-stainless-terraform-configurability": "optional" }, "tls_decrypt": { "description": "Specify whether to inspect encrypted HTTP traffic.", "nullable": true, "properties": { "enabled": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_tls-settings", "x-stainless-terraform-configurability": "optional" } }, "type": "object", "key$": "settings" } }, "x-ref": "#/components/schemas/zero-trust-gateway_gateway-account-settings", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Specify the Cloudflare account identifier.", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/zero-trust-gateway_identifier" }, "index$": 0 }] }, "PUT /accounts/{account_id}/gateway/configuration": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Specify account settings.", "properties": { "settings": { "description": "Specify account settings.", "properties": { "activity_log": { "description": "Specify activity log settings.", "nullable": true, "properties": { "enabled": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_activity-log-settings", "x-stainless-terraform-configurability": "optional" }, "antivirus": { "description": "Specify anti-virus settings.", "nullable": true, "properties": { "enabled_download_phase": {}, "enabled_upload_phase": {}, "fail_closed": {}, "notification_settings": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_anti-virus-settings", "x-stainless-terraform-configurability": "optional" }, "block_page": { "description": "Specify block page layout settings.", "nullable": true, "properties": { "background_color": {}, "enabled": {}, "footer_text": {}, "header_text": {}, "include_context": {}, "logo_path": {}, "mailto_address": {}, "mailto_subject": {}, "mode": {}, "name": {}, "read_only": {}, "source_account": {}, "suppress_footer": {}, "target_uri": {}, "version": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_block-page-settings", "x-stainless-terraform-configurability": "optional" }, "body_scanning": { "description": "Specify the DLP inspection mode.", "nullable": true, "properties": { "inspection_mode": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_body-scanning-settings", "x-stainless-terraform-configurability": "optional" }, "browser_isolation": { "description": "Specify Clientless Browser Isolation settings.", "nullable": true, "properties": { "non_identity_enabled": {}, "url_browser_isolation_enabled": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_browser-isolation-settings", "x-stainless-terraform-configurability": "optional" }, "certificate": { "description": "Specify certificate settings for Gateway TLS interception. If unset, the Cloudflare Root CA handles interception.", "nullable": true, "properties": { "id": {} }, "required": ["id"], "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_certificate-settings", "x-stainless-terraform-configurability": "optional" }, "custom_certificate": { "deprecated": true, "description": "Specify custom certificate settings for BYO-PKI. This field is deprecated; use `certificate` instead.", "nullable": true, "properties": { "binding_status": {}, "enabled": {}, "id": {}, "updated_at": {} }, "required": ["enabled"], "type": "object", "x-fern-availability": "deprecated", "x-ref": "#/components/schemas/zero-trust-gateway_custom-certificate-settings", "x-stainless-terraform-configurability": "optional" }, "extended_email_matching": { "description": "Configures user email settings for firewall policies. When you enable this, the system standardizes email addresses in the identity portion of the rule to match extended email variants in firewall policies. When you disable this setting, the system matches email addresses exactly as you provide them. Enable this setting if your email uses `.` or `+` modifiers.", "nullable": true, "properties": { "enabled": {}, "read_only": {}, "source_account": {}, "version": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_extended-email-matching", "x-stainless-terraform-configurability": "optional" }, "fips": { "description": "Specify FIPS settings.", "nullable": true, "properties": { "tls": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_fips-settings", "x-stainless-terraform-configurability": "optional" }, "host_selector": { "description": "Enable host selection in egress policies.", "nullable": true, "properties": { "enabled": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_host-selector-settings", "x-stainless-terraform-configurability": "optional" }, "inspection": { "description": "Define the proxy inspection mode.", "nullable": true, "properties": { "mode": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_inspection-settings", "x-stainless-terraform-configurability": "optional" }, "max_ttl_secs": { "description": "Account-level cap on DNS response TTLs, in seconds. Gateway rewrites DNS responses so returned record TTLs do not exceed this value. Null means no cap. Each DNS location can inherit, override, or disable it through the location `max_ttl` setting.", "example": 3600, "maximum": 36000, "minimum": 60, "nullable": true, "type": "integer", "x-auditable": true, "x-ref": "#/components/schemas/zero-trust-gateway_max-ttl-secs", "x-stainless-terraform-configurability": "optional" }, "protocol_detection": { "description": "Specify whether to detect protocols from the initial bytes of client traffic.", "nullable": true, "properties": { "enabled": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_protocol-detection", "x-stainless-terraform-configurability": "optional" }, "sandbox": { "description": "Specify whether to enable the sandbox.", "nullable": true, "properties": { "enabled": {}, "fallback_action": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_sandbox", "x-stainless-terraform-configurability": "optional" }, "tls_decrypt": { "description": "Specify whether to inspect encrypted HTTP traffic.", "nullable": true, "properties": { "enabled": {} }, "type": "object", "x-ref": "#/components/schemas/zero-trust-gateway_tls-settings", "x-stainless-terraform-configurability": "optional" } }, "type": "object", "key$": "settings" } }, "x-ref": "#/components/schemas/zero-trust-gateway_gateway-account-settings", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Specify the Cloudflare account identifier.", "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/zero-trust-gateway_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let zero_trust_gateway_gateway_account_config_ref01_data = Object.values(setup.data.existing.zero_trust_gateway_gateway_account_config)[0];
        // UPDATE
        const zero_trust_gateway_gateway_account_config_ref01_ent = client.ZeroTrustGatewayGatewayAccountConfig();
        const zero_trust_gateway_gateway_account_config_ref01_data_up0 = {};
        const zero_trust_gateway_gateway_account_config_ref01_resdata_up0 = (await zero_trust_gateway_gateway_account_config_ref01_ent.update(zero_trust_gateway_gateway_account_config_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != zero_trust_gateway_gateway_account_config_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/zero_trust_gateway_gateway_account_config/ZeroTrustGatewayGatewayAccountConfigTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['zero_trust_gateway_gateway_account_config01', 'zero_trust_gateway_gateway_account_config02', 'zero_trust_gateway_gateway_account_config03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_GATEWAY_ACCOUNT_CONFIG_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_GATEWAY_ACCOUNT_CONFIG_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_ZERO_TRUST_GATEWAY_GATEWAY_ACCOUNT_CONFIG_ENTID'];
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
//# sourceMappingURL=ZeroTrustGatewayGatewayAccountConfigEntity.test.js.map