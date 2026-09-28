# cloudflare-zero-trust-mcp

[MCP](https://modelcontextprotocol.io) server exposing the CloudflareZeroTrust SDK as
two agent tools — `cloudflare-zero-trust_list` and `cloudflare-zero-trust_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudflare-zero-trust-mcp)
make build

# 2. Provide credentials via the environment
export CLOUDFLARE_ZERO_TRUST_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user cloudflare-zero-trust \
  -- /absolute/path/to/cloudflare-zero-trust-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./cloudflare-zero-trust-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// cloudflare-zero-trust_list: first page of records
{ "entity": "alexandria_get_application" }
{ "entity": "alexandria_get_application", "query": { } }

// cloudflare-zero-trust_load: one record by id
{ "entity": "alexandria_get_application", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudflare-zero-trust-mcp
   ```

2. **Set your API key:**

   ```sh
   export CLOUDFLARE_ZERO_TRUST_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user cloudflare-zero-trust \
     -- "$PWD"/dist/*/cloudflare-zero-trust-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `cloudflare-zero-trust_list` and `cloudflare-zero-trust_load` tools now appear
   in new sessions. Ask the agent to *"list alexandria_get_application using cloudflare-zero-trust"*
   and it calls `cloudflare-zero-trust_list` with `{"entity":"alexandria_get_application"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDFLARE_ZERO_TRUST_APIKEY=sk_live_xxx            # API key
export CLOUDFLARE_ZERO_TRUST_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./cloudflare-zero-trust-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `cloudflare-zero-trust_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "alexandria_get_application" }
```

### Call the `cloudflare-zero-trust_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "alexandria_get_application", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `cloudflare-zero-trust_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `cloudflare-zero-trust_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 119 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDFLARE_ZERO_TRUST_APIKEY` | API key sent with every request. |
| `CLOUDFLARE_ZERO_TRUST_BASE` | Optional override of the API base URL. |

### Entities

The 119 entities valid as the `entity` argument:

alexandria_delete_application | alexandria_get_application | alexandria_get_category | client_version | cni | deployment_group | dex_remote_command | dex_rule | dex_synthetic_application_monitoring | digital_experience_monitoring_device | digital_experience_monitoring_dex_delete_response_collection | digital_experience_monitoring_dex_response_collection | digital_experience_monitoring_dex_single | digital_experience_monitoring_fleet_status_device | digital_experience_monitoring_fleet_status_live | digital_experience_monitoring_fleet_status_over_time | integration | interconnect | ip_profile | list | location | nsc_cni | nsc_default_name | nsc_interconnect | nsc_setting | nsc_slot_info | nsc_status_info | one_application_detail | one_integration_create | one_integration_detail | one_integration_pause | one_integration_resume | one_integration_update | one_paginated_application_list_list | one_paginated_auth_method_detail_list | one_paginated_integration_v2_list_item_list | one_paginated_setup_flow_list | override_code | pacfile | physical_device | proxy_endpoint | registration | rule | teams_devices_api_response_single | teams_devices_components_schemas_response_collection | teams_devices_components_schemas_single | teams_devices_default_device_setting | teams_devices_device | teams_devices_device_setting | teams_devices_device_settings_response_collection | teams_devices_devices_policy_certificates_single | teams_devices_fallback_domain_response_collection | teams_devices_global_warp_override | teams_devices_id | teams_devices_override_code | teams_devices_response_collection | teams_devices_schemas_id | teams_devices_schemas_response_collection | teams_devices_schemas_single | teams_devices_single | teams_devices_split_tunnel_include_response_collection | teams_devices_split_tunnel_response_collection | teams_devices_zero_trust_account_device_setting | tunnel | tunnel_cfd_tunnel_response_collection | tunnel_cfd_tunnel_response_single | tunnel_configuration | tunnel_empty | tunnel_hostname_route_response_collection | tunnel_hostname_route_response_single | tunnel_mesh_configuration_response_single | tunnel_route_response_single | tunnel_subnet_response_collection | tunnel_subnet_response_single | tunnel_subnet_response_single_nullable | tunnel_teamnet_response_collection | tunnel_teamnet_response_single | tunnel_tunnel_client | tunnel_tunnel_connection | tunnel_tunnel_response_token | tunnel_tunnel_warp_connector_client | tunnel_tunnel_warp_connector_connection | tunnel_vnet_response_collection | tunnel_vnet_response_single | tunnel_warp_connector_response_collection | tunnel_warp_connector_response_single | tunnel_zero_trust_connectivity_setting | warp | warp_change_event | warp_teams_device_api_other | zero_trust_gateway_applications_review_status | zero_trust_gateway_csv_operation_single | zero_trust_gateway_custom_certificate_setting | zero_trust_gateway_gateway_account | zero_trust_gateway_gateway_account_config | zero_trust_gateway_gateway_account_egress_cidr_pair_list | zero_trust_gateway_gateway_account_logging_setting | zero_trust_gateway_list_item_response_collection | zero_trust_gateway_list_single | zero_trust_gateway_response_collection | zero_trust_gateway_response_collection_10 | zero_trust_gateway_response_collection_2 | zero_trust_gateway_response_collection_3 | zero_trust_gateway_response_collection_4 | zero_trust_gateway_response_collection_5 | zero_trust_gateway_response_collection_6 | zero_trust_gateway_response_collection_7 | zero_trust_gateway_response_collection_8 | zero_trust_gateway_response_collection_9 | zero_trust_gateway_single | zero_trust_gateway_single_response_2 | zero_trust_gateway_single_response_3 | zero_trust_gateway_single_response_4 | zero_trust_gateway_single_response_5 | zero_trust_gateway_single_response_6 | zero_trust_gateway_single_response_7 | zero_trust_gateway_single_response_with_list_item | zero_trust_risk_scoring | zero_trust_risk_scoring_integration

### Smoke test via HTTP (raw JSON-RPC)

```sh
./cloudflare-zero-trust-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"cloudflare-zero-trust_load","arguments":{"entity":"alexandria_get_application","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
