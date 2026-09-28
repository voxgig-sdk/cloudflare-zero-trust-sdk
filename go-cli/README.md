# cloudflare-zero-trust-cli

boru-driven command-line client **and** interactive REPL for the CloudflareZeroTrust
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudflare-zero-trust-cli)
make build

# 2. See usage (words, entities, env vars)
./cloudflare-zero-trust-cli --help

# 3. Provide credentials once, via the environment
export CLOUDFLARE_ZERO_TRUST_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:

# 5. Override the API base URL for a single call
CLOUDFLARE_ZERO_TRUST_BASE=https://api.example.com ./cloudflare-zero-trust-cli --help

# 6. No arguments -> interactive REPL
./cloudflare-zero-trust-cli
cloudflare-zero-trust> /help
cloudflare-zero-trust> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudflare-zero-trust-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export CLOUDFLARE_ZERO_TRUST_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/cloudflare-zero-trust-cli --help
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDFLARE_ZERO_TRUST_APIKEY=sk_live_xxx            # API key
export CLOUDFLARE_ZERO_TRUST_BASE=https://api.example.com  # optional: override the API base URL
./cloudflare-zero-trust-cli --help
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `cloudflare-zero-trust>`). Each line is
evaluated as its own boru expression:

```text
$ ./cloudflare-zero-trust-cli
cloudflare-zero-trust> /help
cloudflare-zero-trust> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 119 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `alexandria_delete_application`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDFLARE_ZERO_TRUST_APIKEY` | API key sent with every request. |
| `CLOUDFLARE_ZERO_TRUST_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/cloudflare-zero-trust-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 119 entities this SDK exposes (any is valid as `<entity>`):

alexandria_delete_application alexandria_get_application alexandria_get_category client_version cni deployment_group dex_remote_command dex_rule dex_synthetic_application_monitoring digital_experience_monitoring_device digital_experience_monitoring_dex_delete_response_collection digital_experience_monitoring_dex_response_collection digital_experience_monitoring_dex_single digital_experience_monitoring_fleet_status_device digital_experience_monitoring_fleet_status_live digital_experience_monitoring_fleet_status_over_time integration interconnect ip_profile list location nsc_cni nsc_default_name nsc_interconnect nsc_setting nsc_slot_info nsc_status_info one_application_detail one_integration_create one_integration_detail one_integration_pause one_integration_resume one_integration_update one_paginated_application_list_list one_paginated_auth_method_detail_list one_paginated_integration_v2_list_item_list one_paginated_setup_flow_list override_code pacfile physical_device proxy_endpoint registration rule teams_devices_api_response_single teams_devices_components_schemas_response_collection teams_devices_components_schemas_single teams_devices_default_device_setting teams_devices_device teams_devices_device_setting teams_devices_device_settings_response_collection teams_devices_devices_policy_certificates_single teams_devices_fallback_domain_response_collection teams_devices_global_warp_override teams_devices_id teams_devices_override_code teams_devices_response_collection teams_devices_schemas_id teams_devices_schemas_response_collection teams_devices_schemas_single teams_devices_single teams_devices_split_tunnel_include_response_collection teams_devices_split_tunnel_response_collection teams_devices_zero_trust_account_device_setting tunnel tunnel_cfd_tunnel_response_collection tunnel_cfd_tunnel_response_single tunnel_configuration tunnel_empty tunnel_hostname_route_response_collection tunnel_hostname_route_response_single tunnel_mesh_configuration_response_single tunnel_route_response_single tunnel_subnet_response_collection tunnel_subnet_response_single tunnel_subnet_response_single_nullable tunnel_teamnet_response_collection tunnel_teamnet_response_single tunnel_tunnel_client tunnel_tunnel_connection tunnel_tunnel_response_token tunnel_tunnel_warp_connector_client tunnel_tunnel_warp_connector_connection tunnel_vnet_response_collection tunnel_vnet_response_single tunnel_warp_connector_response_collection tunnel_warp_connector_response_single tunnel_zero_trust_connectivity_setting warp warp_change_event warp_teams_device_api_other zero_trust_gateway_applications_review_status zero_trust_gateway_csv_operation_single zero_trust_gateway_custom_certificate_setting zero_trust_gateway_gateway_account zero_trust_gateway_gateway_account_config zero_trust_gateway_gateway_account_egress_cidr_pair_list zero_trust_gateway_gateway_account_logging_setting zero_trust_gateway_list_item_response_collection zero_trust_gateway_list_single zero_trust_gateway_response_collection zero_trust_gateway_response_collection_10 zero_trust_gateway_response_collection_2 zero_trust_gateway_response_collection_3 zero_trust_gateway_response_collection_4 zero_trust_gateway_response_collection_5 zero_trust_gateway_response_collection_6 zero_trust_gateway_response_collection_7 zero_trust_gateway_response_collection_8 zero_trust_gateway_response_collection_9 zero_trust_gateway_single zero_trust_gateway_single_response_2 zero_trust_gateway_single_response_3 zero_trust_gateway_single_response_4 zero_trust_gateway_single_response_5 zero_trust_gateway_single_response_6 zero_trust_gateway_single_response_7 zero_trust_gateway_single_response_with_list_item zero_trust_risk_scoring zero_trust_risk_scoring_integration

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./cloudflare-zero-trust-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
