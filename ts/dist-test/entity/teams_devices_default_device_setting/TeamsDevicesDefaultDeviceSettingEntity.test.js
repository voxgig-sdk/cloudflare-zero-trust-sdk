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
(0, node_test_1.describe)('TeamsDevicesDefaultDeviceSettingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZERO_TRUST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZeroTrustSDK.test();
        const ent = testsdk.TeamsDevicesDefaultDeviceSetting();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'teams_devices_default_device_setting.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "allow_mode_switch": { "a": true, "h": "Allow Mode Switch", "n": "allow_mode_switch", "r": false, "sh": "Whether to allow the user to switch WARP between modes.", "t": "`$BOOLEAN`", "key$": "allow_mode_switch", "index$": 0 }, "allow_updates": { "a": true, "h": "Allow Updates", "n": "allow_updates", "r": false, "sh": "Whether to receive update notifications when a new version of the client is available.", "t": "`$BOOLEAN`", "key$": "allow_updates", "index$": 1 }, "allowed_to_leave": { "a": true, "h": "Allowed To Leave", "n": "allowed_to_leave", "r": false, "sh": "Whether to allow devices to leave the organization.", "t": "`$BOOLEAN`", "key$": "allowed_to_leave", "index$": 2 }, "auto_connect": { "a": true, "h": "Auto Connect", "n": "auto_connect", "r": false, "sh": "The amount of time in seconds to reconnect after having been disabled.", "t": "`$NUMBER`", "key$": "auto_connect", "index$": 3 }, "captive_portal": { "a": true, "h": "Captive Portal", "n": "captive_portal", "r": false, "sh": "Turn on the captive portal after the specified amount of time.", "t": "`$NUMBER`", "key$": "captive_portal", "index$": 4 }, "disable_auto_fallback": { "a": true, "h": "Disable Auto Fallback", "n": "disable_auto_fallback", "r": false, "sh": "If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.", "t": "`$BOOLEAN`", "key$": "disable_auto_fallback", "index$": 5 }, "dns_search_suffixes": { "a": true, "h": "Dns Search Suffixes", "n": "dns_search_suffixes", "r": false, "sh": "List of DNS search suffixes to apply to clients.", "t": "`$ARRAY`", "key$": "dns_search_suffixes", "index$": 6 }, "exclude": { "a": true, "h": "Exclude", "n": "exclude", "r": false, "sh": "List of routes excluded in the WARP client's tunnel.", "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 1 }, "key$": "exclude", "index$": 7 }, "exclude_office_ips": { "a": true, "h": "Exclude Office Ips", "n": "exclude_office_ips", "r": false, "sh": "Whether to add Microsoft IPs to Split Tunnel exclusions.", "t": "`$BOOLEAN`", "key$": "exclude_office_ips", "index$": 8 }, "global_acceleration": { "a": true, "h": "Global Acceleration", "n": "global_acceleration", "r": true, "sh": "Global Acceleration settings for China.", "t": "`$OBJECT`", "key$": "global_acceleration", "index$": 9 }, "include": { "a": true, "h": "Include", "n": "include", "r": false, "sh": "List of routes included in the WARP client's tunnel.", "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 1 }, "key$": "include", "index$": 10 }, "lan_allow_minutes": { "a": true, "h": "Lan Allow Minutes", "n": "lan_allow_minutes", "r": false, "sh": "The amount of time in minutes a user is allowed access to their LAN.", "t": "`$NUMBER`", "key$": "lan_allow_minutes", "index$": 11 }, "lan_allow_subnet_size": { "a": true, "h": "Lan Allow Subnet Size", "n": "lan_allow_subnet_size", "r": false, "sh": "The size of the subnet for the local access network.", "t": "`$NUMBER`", "key$": "lan_allow_subnet_size", "index$": 12 }, "register_interface_ip_with_dns": { "a": true, "h": "Register Interface Ip With Dns", "n": "register_interface_ip_with_dns", "r": false, "sh": "Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.", "t": "`$BOOLEAN`", "key$": "register_interface_ip_with_dns", "index$": 13 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "union": { "branches": 2, "count": 2, "depth": 3 }, "key$": "result", "index$": 14 }, "sccm_vpn_boundary_support": { "a": true, "h": "Sccm Vpn Boundary Support", "n": "sccm_vpn_boundary_support", "r": false, "sh": "Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary.", "t": "`$BOOLEAN`", "key$": "sccm_vpn_boundary_support", "index$": 15 }, "service_mode_v2": { "a": true, "h": "Service Mode V2", "n": "service_mode_v2", "r": false, "t": "`$OBJECT`", "key$": "service_mode_v2", "index$": 16 }, "support_url": { "a": true, "h": "Support Url", "n": "support_url", "r": false, "sh": "The URL to launch when the Send Feedback button is clicked.", "t": "`$STRING`", "key$": "support_url", "index$": 17 }, "switch_locked": { "a": true, "h": "Switch Locked", "n": "switch_locked", "r": false, "sh": "Whether to allow the user to turn off the WARP switch and disconnect the client.", "t": "`$BOOLEAN`", "key$": "switch_locked", "index$": 18 }, "tunnel_protocol": { "a": true, "h": "Tunnel Protocol", "n": "tunnel_protocol", "r": false, "sh": "Determines which tunnel protocol to use.", "t": "`$STRING`", "key$": "tunnel_protocol", "index$": 19 }, "uninstall_protection": { "a": true, "h": "Uninstall Protection", "n": "uninstall_protection", "r": false, "sh": "Determines whether uninstalling the WARP client requires an override code.", "t": "`$BOOLEAN`", "key$": "uninstall_protection", "index$": 20 }, "virtual_networks": { "a": true, "h": "Virtual Networks", "n": "virtual_networks", "r": true, "sh": "Virtual network access settings for the device.", "t": "`$OBJECT`", "key$": "virtual_networks", "index$": 21 } }, "name": "teams_devices_default_device_setting", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/devices/policy", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/devices/policy", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "policy" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /accounts/{account_id}/devices/policy", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "699d98642c564d2e855e9661899b7252", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/accounts/{account_id}/devices/policy", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "devices" }, { "lit": "policy" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "teams_devices_default_device_setting", "name__orig": "teams_devices_default_device_setting", "Name": "TeamsDevicesDefaultDeviceSetting", "name_": "teams_devices_default_device_setting", "name-": "teams-devices-default-device-setting", "NAME": "TEAMS_DEVICES_DEFAULT_DEVICE_SETTING", "index$": 46 }, { "active": true, "entity": "teams_devices_default_device_setting", "key$": "BasicTeamsDevicesDefaultDeviceSettingFlow", "kind": "basic", "name": "BasicTeamsDevicesDefaultDeviceSettingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "teams_devices_default_device_setting_ref01", "srcdatavar": "teams_devices_default_device_setting_ref01_data", "suffix": "_up0", "textfield": "support_url" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-teams_devices_default_device_setting_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "teams_devices_default_device_setting_ref01", "srcdatavar": "teams_devices_default_device_setting_ref01_data", "suffix": "_dt0" }, "m": { "id": "teams_devices_default_device_setting01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-teams_devices_default_device_setting_ref01" } }], "index$": 1 }] }, 'TeamsDevicesDefaultDeviceSetting', { "GET /accounts/{account_id}/devices/policy": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/teams-devices_identifier" }, "index$": 0 }] }, "PATCH /accounts/{account_id}/devices/policy": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "allow_mode_switch": { "description": "Whether to allow the user to switch WARP between modes.", "type": "boolean", "example": true, "default": false, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_allow_mode_switch", "key$": "allow_mode_switch" }, "allow_updates": { "description": "Whether to receive update notifications when a new version of the client is available.", "type": "boolean", "example": true, "default": false, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_allow_updates", "key$": "allow_updates" }, "allowed_to_leave": { "description": "Whether to allow devices to leave the organization.", "type": "boolean", "example": true, "default": true, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_allowed_to_leave", "key$": "allowed_to_leave" }, "auto_connect": { "description": "The amount of time in seconds to reconnect after having been disabled.", "type": "number", "example": 0, "default": 0, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_auto_connect", "key$": "auto_connect" }, "captive_portal": { "description": "Turn on the captive portal after the specified amount of time.", "type": "number", "example": 180, "default": 180, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_captive_portal", "key$": "captive_portal" }, "disable_auto_fallback": { "description": "If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.", "type": "boolean", "example": true, "default": false, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_disable_auto_fallback", "key$": "disable_auto_fallback" }, "dns_search_suffixes": { "description": "List of DNS search suffixes to apply to clients. Suffixes are evaluated in order. Use an empty array to clear.", "type": "array", "items": { "type": "object", "properties": { "description": { "description": "A description of the DNS search suffix.", "example": "Example internal domains", "type": "string", "x-auditable": true, "x-stainless-terraform-configurability": "computed_optional" }, "suffix": { "description": "The DNS search suffix to append when resolving short hostnames.", "example": "internal.corp", "type": "string", "x-auditable": true } }, "required": ["suffix"], "x-ref": "#/components/schemas/teams-devices_dns_search_suffix" }, "default": [], "x-stainless-terraform-configurability": "computed_optional", "x-ref": "#/components/schemas/teams-devices_dns_search_suffixes", "key$": "dns_search_suffixes" }, "exclude": { "description": "List of routes excluded in the WARP client's tunnel. Both 'exclude' and 'include' cannot be set in the same request.", "type": "array", "items": { "type": "object", "oneOf": [{ "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/teams-devices_exclude_split_tunnel_with_address" }, { "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/teams-devices_exclude_split_tunnel_with_host" }], "x-ref": "#/components/schemas/teams-devices_split_tunnel" }, "x-stainless-terraform-configurability": "computed_optional", "x-ref": "#/components/schemas/teams-devices_exclude_request", "key$": "exclude" }, "exclude_office_ips": { "description": "Whether to add Microsoft IPs to Split Tunnel exclusions.", "type": "boolean", "example": true, "default": false, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_exclude_office_ips", "key$": "exclude_office_ips" }, "global_acceleration": { "description": "Global Acceleration settings for China. When configured, WARP clients connect to the Global Accelerator addresses instead of the default ones. Please contact your account representative to enable this feature on your account. See https://developers.cloudflare.com/china-network/concepts/global-acceleration/.", "type": "object", "properties": { "api_endpoints": { "description": "IP:port entries for the API endpoints.", "example": ["198.51.100.1:443"], "items": { "type": "string", "x-auditable": true }, "maxItems": 5, "type": "array" }, "autoswitch": { "default": false, "description": "Automatically switch Global Acceleration regions based on device location. Defaults to false when not provided.", "example": true, "type": "boolean", "x-auditable": true }, "enabled": { "description": "Global acceleration settings are used only when \"enabled\".", "example": true, "type": "boolean", "x-auditable": true }, "masque_endpoints": { "description": "IP:port entries for the MASQUE tunnel endpoints. Either wireguard_endpoints or masque_endpoints must be provided.", "example": ["198.51.100.1:443"], "items": { "type": "string", "x-auditable": true }, "maxItems": 5, "type": "array" }, "wireguard_endpoints": { "description": "IP:port entries for the WireGuard tunnel endpoints. Either wireguard_endpoints or masque_endpoints must be provided.", "example": ["198.51.100.1:2408"], "items": { "type": "string", "x-auditable": true }, "maxItems": 5, "type": "array" } }, "nullable": true, "required": ["enabled", "wireguard_endpoints", "masque_endpoints", "api_endpoints"], "x-ref": "#/components/schemas/teams-devices_global_acceleration", "key$": "global_acceleration" }, "include": { "description": "List of routes included in the WARP client's tunnel. Both 'exclude' and 'include' cannot be set in the same request.", "type": "array", "items": { "type": "object", "oneOf": [{ "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/teams-devices_include_split_tunnel_with_address" }, { "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/teams-devices_include_split_tunnel_with_host" }], "x-ref": "#/components/schemas/teams-devices_split_tunnel_include" }, "x-stainless-terraform-configurability": "computed_optional", "x-ref": "#/components/schemas/teams-devices_include_request", "key$": "include" }, "lan_allow_minutes": { "description": "The amount of time in minutes a user is allowed access to their LAN. A value of 0 will allow LAN access until the next WARP reconnection, such as a reboot or a laptop waking from sleep. Note that this field is omitted from the response if null or unset.", "type": "number", "example": 30, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_lan_allow_minutes", "key$": "lan_allow_minutes" }, "lan_allow_subnet_size": { "description": "The size of the subnet for the local access network. Note that this field is omitted from the response if null or unset.", "type": "number", "example": 24, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_lan_allow_subnet_size", "key$": "lan_allow_subnet_size" }, "register_interface_ip_with_dns": { "description": "Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.", "type": "boolean", "example": true, "default": true, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_register_interface_ip_with_dns", "key$": "register_interface_ip_with_dns" }, "sccm_vpn_boundary_support": { "description": "Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. (Windows only).", "type": "boolean", "example": false, "default": false, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_sccm_vpn_boundary_support", "key$": "sccm_vpn_boundary_support" }, "service_mode_v2": { "type": "object", "properties": { "mode": { "description": "The mode to run the WARP client under.", "example": "proxy", "type": "string", "x-auditable": true, "x-stainless-terraform-configurability": "computed_optional" }, "port": { "description": "The port number when used with proxy mode.", "example": 3000, "type": "number", "x-auditable": true, "x-stainless-terraform-configurability": "computed_optional" } }, "x-stainless-terraform-configurability": "computed_optional", "x-ref": "#/components/schemas/teams-devices_service_mode_v2", "key$": "service_mode_v2" }, "support_url": { "description": "The URL to launch when the Send Feedback button is clicked.", "type": "string", "example": "https://1.1.1.1/help", "default": "", "x-ref": "#/components/schemas/teams-devices_support_url", "key$": "support_url" }, "switch_locked": { "description": "Whether to allow the user to turn off the WARP switch and disconnect the client.", "type": "boolean", "example": true, "default": false, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_switch_locked", "key$": "switch_locked" }, "tunnel_protocol": { "description": "Determines which tunnel protocol to use.", "type": "string", "example": "wireguard", "default": "", "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_tunnel_protocol", "key$": "tunnel_protocol" }, "uninstall_protection": { "description": "Determines whether uninstalling the WARP client requires an override code. (Windows only).", "type": "boolean", "example": false, "default": false, "x-auditable": true, "x-ref": "#/components/schemas/teams-devices_uninstall_protection", "key$": "uninstall_protection" }, "virtual_networks": { "description": "Virtual network access settings for the device.", "type": "object", "properties": { "allowed": { "description": "List of virtual network IDs the device is allowed to access. When virtual_networks is set, at least one entry is required.", "example": ["f174e90a-fafe-4643-bbbc-4a0ed4fc8415"], "items": { "format": "uuid", "type": "string", "x-auditable": true }, "minItems": 1, "type": "array", "uniqueItems": true }, "default": { "description": "The default virtual network ID. Must be included in the `allowed` list.", "example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415", "format": "uuid", "type": "string", "x-auditable": true } }, "nullable": true, "required": ["allowed", "default"], "x-ref": "#/components/schemas/teams-devices_virtual_networks", "key$": "virtual_networks" } }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "type": "string", "example": "699d98642c564d2e855e9661899b7252", "x-ref": "#/components/schemas/teams-devices_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let teams_devices_default_device_setting_ref01_data = Object.values(setup.data.existing.teams_devices_default_device_setting)[0];
        // UPDATE
        const teams_devices_default_device_setting_ref01_ent = client.TeamsDevicesDefaultDeviceSetting();
        const teams_devices_default_device_setting_ref01_data_up0 = {};
        const teams_devices_default_device_setting_ref01_markdef_up0 = { name: 'support_url', value: 'Mark01-teams_devices_default_device_setting_ref01_' + setup.now };
        teams_devices_default_device_setting_ref01_data_up0[teams_devices_default_device_setting_ref01_markdef_up0.name] = teams_devices_default_device_setting_ref01_markdef_up0.value;
        const teams_devices_default_device_setting_ref01_resdata_up0 = (await teams_devices_default_device_setting_ref01_ent.update(teams_devices_default_device_setting_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != teams_devices_default_device_setting_ref01_resdata_up0);
        (0, node_assert_1.default)(teams_devices_default_device_setting_ref01_resdata_up0[teams_devices_default_device_setting_ref01_markdef_up0.name] === teams_devices_default_device_setting_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/teams_devices_default_device_setting/TeamsDevicesDefaultDeviceSettingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZeroTrustSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['teams_devices_default_device_setting01', 'teams_devices_default_device_setting02', 'teams_devices_default_device_setting03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEFAULT_DEVICE_SETTING_ENTID': idmap,
        'CLOUDFLARE_ZERO_TRUST_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZERO_TRUST_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEFAULT_DEVICE_SETTING_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZERO_TRUST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZERO_TRUST_TEST_TEAMS_DEVICES_DEFAULT_DEVICE_SETTING_ENTID'];
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
//# sourceMappingURL=TeamsDevicesDefaultDeviceSettingEntity.test.js.map