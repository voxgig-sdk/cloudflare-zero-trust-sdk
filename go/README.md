# CloudflareZeroTrust Golang SDK



The Golang SDK for the CloudflareZeroTrust API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AlexandriaDeleteApplication(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudflare-zero-trust-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go=../cloudflare-zero-trust-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go"
)

func main() {
    client := sdk.NewCloudflareZeroTrustSDK(map[string]any{
        "apikey": os.Getenv("CLOUDFLARE_ZERO_TRUST_APIKEY"),
    })

    // Remove a alexandriaDeleteApplication.
    removed, err := client.AlexandriaDeleteApplication(nil).Remove(map[string]any{"account_id": "example_account_id", "id": 1}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
teamsdevicesglobalwarpoverride, err := client.TeamsDevicesGlobalWarpOverride(nil).Load(map[string]any{"account_id": "example"}, nil)
if err != nil {
    // handle err
    return
}
_ = teamsdevicesglobalwarpoverride
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

teamsDevicesGlobalWarpOverride, err := client.TeamsDevicesGlobalWarpOverride(nil).Load(
    map[string]any{"account_id": "example"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesGlobalWarpOverride) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudflareZeroTrustSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_ZERO_TRUST_TEST_LIVE=TRUE
CLOUDFLARE_ZERO_TRUST_APIKEY=<your-key>
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewCloudflareZeroTrustSDK

```go
func NewCloudflareZeroTrustSDK(options map[string]any) *CloudflareZeroTrustSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareZeroTrustSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareZeroTrustSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `AlexandriaDeleteApplication` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an AlexandriaDeleteApplication entity instance. |
| `AlexandriaGetApplication` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an AlexandriaGetApplication entity instance. |
| `AlexandriaGetCategory` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an AlexandriaGetCategory entity instance. |
| `ClientVersion` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ClientVersion entity instance. |
| `Cni` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a Cni entity instance. |
| `DeploymentGroup` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a DeploymentGroup entity instance. |
| `DexRemoteCommand` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a DexRemoteCommand entity instance. |
| `DexRule` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a DexRule entity instance. |
| `DexSyntheticApplicationMonitoring` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a DexSyntheticApplicationMonitoring entity instance. |
| `DigitalExperienceMonitoringDevice` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a DigitalExperienceMonitoringDevice entity instance. |
| `DigitalExperienceMonitoringDexDeleteResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a DigitalExperienceMonitoringDexDeleteResponseCollection entity instance. |
| `DigitalExperienceMonitoringDexResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a DigitalExperienceMonitoringDexResponseCollection entity instance. |
| `DigitalExperienceMonitoringDexSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a DigitalExperienceMonitoringDexSingle entity instance. |
| `DigitalExperienceMonitoringFleetStatusDevice` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a DigitalExperienceMonitoringFleetStatusDevice entity instance. |
| `DigitalExperienceMonitoringFleetStatusLive` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a DigitalExperienceMonitoringFleetStatusLive entity instance. |
| `DigitalExperienceMonitoringFleetStatusOverTime` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a DigitalExperienceMonitoringFleetStatusOverTime entity instance. |
| `Integration` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an Integration entity instance. |
| `Interconnect` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an Interconnect entity instance. |
| `IpProfile` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an IpProfile entity instance. |
| `List` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a List entity instance. |
| `Location` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a Location entity instance. |
| `NscCni` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a NscCni entity instance. |
| `NscDefaultName` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a NscDefaultName entity instance. |
| `NscInterconnect` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a NscInterconnect entity instance. |
| `NscSetting` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a NscSetting entity instance. |
| `NscSlotInfo` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a NscSlotInfo entity instance. |
| `NscStatusInfo` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a NscStatusInfo entity instance. |
| `OneApplicationDetail` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an OneApplicationDetail entity instance. |
| `OneIntegrationCreate` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an OneIntegrationCreate entity instance. |
| `OneIntegrationDetail` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an OneIntegrationDetail entity instance. |
| `OneIntegrationPause` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an OneIntegrationPause entity instance. |
| `OneIntegrationResume` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an OneIntegrationResume entity instance. |
| `OneIntegrationUpdate` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an OneIntegrationUpdate entity instance. |
| `OnePaginatedApplicationListList` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an OnePaginatedApplicationListList entity instance. |
| `OnePaginatedAuthMethodDetailList` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an OnePaginatedAuthMethodDetailList entity instance. |
| `OnePaginatedIntegrationV2ListItemList` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an OnePaginatedIntegrationV2ListItemList entity instance. |
| `OnePaginatedSetupFlowList` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an OnePaginatedSetupFlowList entity instance. |
| `OverrideCode` | `(data map[string]any) CloudflareZeroTrustEntity` | Create an OverrideCode entity instance. |
| `Pacfile` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a Pacfile entity instance. |
| `PhysicalDevice` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a PhysicalDevice entity instance. |
| `ProxyEndpoint` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ProxyEndpoint entity instance. |
| `Registration` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a Registration entity instance. |
| `Rule` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a Rule entity instance. |
| `TeamsDevicesApiResponseSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesApiResponseSingle entity instance. |
| `TeamsDevicesComponentsSchemasResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesComponentsSchemasResponseCollection entity instance. |
| `TeamsDevicesComponentsSchemasSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesComponentsSchemasSingle entity instance. |
| `TeamsDevicesDefaultDeviceSetting` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesDefaultDeviceSetting entity instance. |
| `TeamsDevicesDevice` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesDevice entity instance. |
| `TeamsDevicesDeviceSetting` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesDeviceSetting entity instance. |
| `TeamsDevicesDeviceSettingsResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesDeviceSettingsResponseCollection entity instance. |
| `TeamsDevicesDevicesPolicyCertificatesSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesDevicesPolicyCertificatesSingle entity instance. |
| `TeamsDevicesFallbackDomainResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesFallbackDomainResponseCollection entity instance. |
| `TeamsDevicesGlobalWarpOverride` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesGlobalWarpOverride entity instance. |
| `TeamsDevicesId` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesId entity instance. |
| `TeamsDevicesOverrideCode` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesOverrideCode entity instance. |
| `TeamsDevicesResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesResponseCollection entity instance. |
| `TeamsDevicesSchemasId` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesSchemasId entity instance. |
| `TeamsDevicesSchemasResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesSchemasResponseCollection entity instance. |
| `TeamsDevicesSchemasSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesSchemasSingle entity instance. |
| `TeamsDevicesSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesSingle entity instance. |
| `TeamsDevicesSplitTunnelIncludeResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesSplitTunnelIncludeResponseCollection entity instance. |
| `TeamsDevicesSplitTunnelResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesSplitTunnelResponseCollection entity instance. |
| `TeamsDevicesZeroTrustAccountDeviceSetting` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TeamsDevicesZeroTrustAccountDeviceSetting entity instance. |
| `Tunnel` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a Tunnel entity instance. |
| `TunnelCfdTunnelResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelCfdTunnelResponseCollection entity instance. |
| `TunnelCfdTunnelResponseSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelCfdTunnelResponseSingle entity instance. |
| `TunnelConfiguration` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelConfiguration entity instance. |
| `TunnelEmpty` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelEmpty entity instance. |
| `TunnelHostnameRouteResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelHostnameRouteResponseCollection entity instance. |
| `TunnelHostnameRouteResponseSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelHostnameRouteResponseSingle entity instance. |
| `TunnelMeshConfigurationResponseSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelMeshConfigurationResponseSingle entity instance. |
| `TunnelRouteResponseSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelRouteResponseSingle entity instance. |
| `TunnelSubnetResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelSubnetResponseCollection entity instance. |
| `TunnelSubnetResponseSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelSubnetResponseSingle entity instance. |
| `TunnelSubnetResponseSingleNullable` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelSubnetResponseSingleNullable entity instance. |
| `TunnelTeamnetResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelTeamnetResponseCollection entity instance. |
| `TunnelTeamnetResponseSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelTeamnetResponseSingle entity instance. |
| `TunnelTunnelClient` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelTunnelClient entity instance. |
| `TunnelTunnelConnection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelTunnelConnection entity instance. |
| `TunnelTunnelResponseToken` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelTunnelResponseToken entity instance. |
| `TunnelTunnelWarpConnectorClient` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelTunnelWarpConnectorClient entity instance. |
| `TunnelTunnelWarpConnectorConnection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelTunnelWarpConnectorConnection entity instance. |
| `TunnelVnetResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelVnetResponseCollection entity instance. |
| `TunnelVnetResponseSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelVnetResponseSingle entity instance. |
| `TunnelWarpConnectorResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelWarpConnectorResponseCollection entity instance. |
| `TunnelWarpConnectorResponseSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelWarpConnectorResponseSingle entity instance. |
| `TunnelZeroTrustConnectivitySetting` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a TunnelZeroTrustConnectivitySetting entity instance. |
| `Warp` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a Warp entity instance. |
| `WarpChangeEvent` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a WarpChangeEvent entity instance. |
| `WarpTeamsDeviceApiOther` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a WarpTeamsDeviceApiOther entity instance. |
| `ZeroTrustGatewayApplicationsReviewStatus` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayApplicationsReviewStatus entity instance. |
| `ZeroTrustGatewayCsvOperationSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayCsvOperationSingle entity instance. |
| `ZeroTrustGatewayCustomCertificateSetting` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayCustomCertificateSetting entity instance. |
| `ZeroTrustGatewayGatewayAccount` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayGatewayAccount entity instance. |
| `ZeroTrustGatewayGatewayAccountConfig` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayGatewayAccountConfig entity instance. |
| `ZeroTrustGatewayGatewayAccountEgressCidrPairList` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayGatewayAccountEgressCidrPairList entity instance. |
| `ZeroTrustGatewayGatewayAccountLoggingSetting` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayGatewayAccountLoggingSetting entity instance. |
| `ZeroTrustGatewayListItemResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayListItemResponseCollection entity instance. |
| `ZeroTrustGatewayListSingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayListSingle entity instance. |
| `ZeroTrustGatewayResponseCollection` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayResponseCollection entity instance. |
| `ZeroTrustGatewayResponseCollection10` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayResponseCollection10 entity instance. |
| `ZeroTrustGatewayResponseCollection2` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayResponseCollection2 entity instance. |
| `ZeroTrustGatewayResponseCollection3` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayResponseCollection3 entity instance. |
| `ZeroTrustGatewayResponseCollection4` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayResponseCollection4 entity instance. |
| `ZeroTrustGatewayResponseCollection5` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayResponseCollection5 entity instance. |
| `ZeroTrustGatewayResponseCollection6` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayResponseCollection6 entity instance. |
| `ZeroTrustGatewayResponseCollection7` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayResponseCollection7 entity instance. |
| `ZeroTrustGatewayResponseCollection8` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayResponseCollection8 entity instance. |
| `ZeroTrustGatewayResponseCollection9` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewayResponseCollection9 entity instance. |
| `ZeroTrustGatewaySingle` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewaySingle entity instance. |
| `ZeroTrustGatewaySingleResponse2` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewaySingleResponse2 entity instance. |
| `ZeroTrustGatewaySingleResponse3` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewaySingleResponse3 entity instance. |
| `ZeroTrustGatewaySingleResponse4` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewaySingleResponse4 entity instance. |
| `ZeroTrustGatewaySingleResponse5` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewaySingleResponse5 entity instance. |
| `ZeroTrustGatewaySingleResponse6` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewaySingleResponse6 entity instance. |
| `ZeroTrustGatewaySingleResponse7` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewaySingleResponse7 entity instance. |
| `ZeroTrustGatewaySingleResponseWithListItem` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustGatewaySingleResponseWithListItem entity instance. |
| `ZeroTrustRiskScoring` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustRiskScoring entity instance. |
| `ZeroTrustRiskScoringIntegration` | `(data map[string]any) CloudflareZeroTrustEntity` | Create a ZeroTrustRiskScoringIntegration entity instance. |

### Entity interface (CloudflareZeroTrustEntity)

All entities implement the `CloudflareZeroTrustEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    alexandriaDeleteApplication, err := client.AlexandriaDeleteApplication(nil).Remove(nil, nil)
    if err != nil { /* handle */ }
    // alexandriaDeleteApplication is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### AlexandriaDeleteApplication

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/resource-library/applications/{id}`

#### AlexandriaGetApplication

| Field | Description |
| --- | --- |
| `"category_id"` | Returns the category ID. |
| `"errors"` |  |
| `"hostnames"` | Hostnames matched by the application. |
| `"human_id"` | Returns the human readable ID. |
| `"id"` |  |
| `"ip_subnets"` | IP subnets for this application. |
| `"messages"` |  |
| `"name"` | Returns the application name. |
| `"port_protocols"` | Port and protocol pairs matched by the application. |
| `"result"` | Returns the list of applications. |
| `"success"` | Indicates whether the API call was successful. |
| `"support_domains"` | Support domains matched by the application. |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/resource-library/applications`

#### AlexandriaGetCategory

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` | Returns the list of categories. |
| `"success"` | Indicates whether the API call was successful. |

Operations: List, Load.

API path: `/accounts/{account_id}/resource-library/categories`

#### ClientVersion

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` | Indicates whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/devices/client-versions`

#### Cni

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/cni/cnis/{cni}`

#### DeploymentGroup

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"name"` | A user-friendly name for the deployment group. |
| `"policy_ids"` | Contains an optional list of policy IDs assigned to a group. |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` | Indicates whether the API call was successful. |
| `"version_config"` | Contains at least one version configuration. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/devices/deployment-groups`

#### DexRemoteCommand

| Field | Description |
| --- | --- |
| `"commands"` | List of device-level commands to execute |
| `"result"` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/dex/commands`

#### DexRule

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"id"` |  |
| `"match"` | The wirefilter expression to match. |
| `"name"` | The name of the Rule. |
| `"result"` |  |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/dex/rules`

#### DexSyntheticApplicationMonitoring

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | array of colos. |
| `"success"` | Whether the API call was successful. |

Operations: List, Load.

API path: `/accounts/{account_id}/dex/colos`

#### DigitalExperienceMonitoringDevice

| Field | Description |
| --- | --- |
| `"alwaysOn"` |  |
| `"batteryCharging"` |  |
| `"batteryCycles"` |  |
| `"batteryPct"` |  |
| `"colo"` | Cloudflare colo airport code. |
| `"connectionType"` |  |
| `"cpuPct"` |  |
| `"cpuPctByApp"` |  |
| `"deviceId"` | Device identifier (UUID v4) |
| `"deviceIpv4"` |  |
| `"deviceIpv6"` |  |
| `"deviceName"` | Device identifier (human readable). |
| `"deviceRegistration"` | Deprecated: use registrationId. |
| `"diskReadBps"` |  |
| `"diskUsagePct"` |  |
| `"diskWriteBps"` |  |
| `"dohSubdomain"` |  |
| `"estimatedLossPct"` |  |
| `"firewallEnabled"` |  |
| `"gatewayIpv4"` |  |
| `"gatewayIpv6"` |  |
| `"handshakeLatencyMs"` |  |
| `"ispIpv4"` |  |
| `"ispIpv6"` |  |
| `"metal"` |  |
| `"mode"` | The mode under which the WARP client is run. |
| `"networkRcvdBps"` |  |
| `"networkSentBps"` |  |
| `"networkSsid"` |  |
| `"personEmail"` | User contact email address |
| `"platform"` | Operating system. |
| `"ramAvailableKb"` |  |
| `"ramUsedPct"` |  |
| `"ramUsedPctByApp"` |  |
| `"registrationId"` | Device registration identifier (UUID v4). |
| `"rtt"` | Round-trip time statistics for the WARP tunnel. |
| `"status"` | Network status. |
| `"switchLocked"` |  |
| `"timestamp"` |  |
| `"tunnelStats"` | WARP tunnel packet and byte counters. |
| `"tunnelType"` |  |
| `"version"` | WARP client version. |
| `"wifiStrengthDbm"` |  |

Operations: List.

API path: `/accounts/{account_id}/dex/devices/{device_id}/fleet-status/live`

#### DigitalExperienceMonitoringDexDeleteResponseCollection

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}`

#### DigitalExperienceMonitoringDexResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/dex/devices/dex_tests`

#### DigitalExperienceMonitoringDexSingle

| Field | Description |
| --- | --- |
| `"created"` | Date the test was created, in RFC 3339 format. |
| `"data"` | The configuration object which contains the details for the WARP client to conduct the test. |
| `"description"` | Additional details about the test. |
| `"enabled"` | Determines whether or not the test is active. |
| `"interval"` | How often the test will run. |
| `"name"` | The name of the DEX test. |
| `"result"` |  |
| `"target_policies"` |  |
| `"targeted"` |  |
| `"test_id"` | The unique identifier for the test. |
| `"updated"` | Date the test was last updated, in RFC 3339 format. |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/dex/devices/dex_tests`

#### DigitalExperienceMonitoringFleetStatusDevice

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/dex/fleet-status/devices`

#### DigitalExperienceMonitoringFleetStatusLive

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/dex/fleet-status/live`

#### DigitalExperienceMonitoringFleetStatusOverTime

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/dex/fleet-status/over-time`

#### Integration

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/one/integrations/{id}`

#### Interconnect

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load, Remove.

API path: `/accounts/{account_id}/cni/interconnects/{icon}/loa`

#### IpProfile

| Field | Description |
| --- | --- |
| `"description"` | An optional description of the Device IP profile. |
| `"enabled"` | Whether the Device IP profile will be applied to matching devices. |
| `"errors"` |  |
| `"id"` |  |
| `"match"` | The wirefilter expression to match registrations. |
| `"messages"` |  |
| `"name"` | A user-friendly name for the Device IP profile. |
| `"precedence"` | The precedence of the Device IP profile. |
| `"result"` |  |
| `"result_info"` |  |
| `"subnet_id"` | The ID of the Subnet. |
| `"success"` | Whether the API call was successful. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/devices/ip-profiles`

#### List

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/gateway/lists/{list_id}`

#### Location

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/gateway/locations/{location_id}`

#### NscCni

| Field | Description |
| --- | --- |
| `"account"` | Customer account tag |
| `"bgp"` |  |
| `"bgp_mode"` | The BGP mode for a CNI. |
| `"cust_ip"` | Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`. |
| `"id"` |  |
| `"interconnect"` | Interconnect identifier hosting this CNI |
| `"magic"` |  |
| `"p2p_ip"` | Cloudflare end of the point-to-point link |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/cni/cnis`

#### NscDefaultName

| Field | Description |
| --- | --- |
| `"name"` | The default customer name for the interconnect |

Operations: Load.

API path: `/accounts/{account_id}/cni/interconnects/{icon}/loa/default`

#### NscInterconnect

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"items"` |  |
| `"next"` |  |

Operations: Create, List, Load.

API path: `/accounts/{account_id}/cni/interconnects`

#### NscSetting

| Field | Description |
| --- | --- |
| `"default_asn"` |  |

Operations: Load, Update.

API path: `/accounts/{account_id}/cni/settings`

#### NscSlotInfo

| Field | Description |
| --- | --- |
| `"account"` | Customer account tag |
| `"address"` |  |
| `"ccr_device_name"` |  |
| `"facility"` |  |
| `"id"` | Slot ID |
| `"name"` |  |
| `"occupied"` | Whether the slot is occupied or not |
| `"site"` |  |
| `"speed"` |  |

Operations: List, Load.

API path: `/accounts/{account_id}/cni/slots`

#### NscStatusInfo

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/accounts/{account_id}/cni/interconnects/{icon}/status`

#### OneApplicationDetail

| Field | Description |
| --- | --- |
| `"errors"` | List of errors. |
| `"messages"` | List of messages. |
| `"result"` | The requested item. |
| `"success"` | Whether the request succeeded. |

Operations: Load.

API path: `/accounts/{account_id}/one/applications/{application_id}`

#### OneIntegrationCreate

| Field | Description |
| --- | --- |
| `"application"` | Vendor/application slug (e.g., GOOGLE_WORKSPACE). |
| `"auth_method"` | Authentication method slug (uses default if omitted). |
| `"credentials"` | Credentials for the integration. |
| `"dlp_profiles"` | List of DLP profile IDs to associate. |
| `"name"` | Name of the integration. |
| `"permissions"` | List of permission scopes (uses policy defaults if empty). |
| `"use_cases"` | List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']). |

Operations: Create.

API path: `/accounts/{account_id}/one/integrations`

#### OneIntegrationDetail

| Field | Description |
| --- | --- |
| `"errors"` | List of errors. |
| `"id"` |  |
| `"messages"` | List of messages. |
| `"result"` | The requested item. |
| `"success"` | Whether the request succeeded. |

Operations: Load.

API path: `/accounts/{account_id}/one/integrations/{id}`

#### OneIntegrationPause

| Field | Description |
| --- | --- |
| `"errors"` | List of errors. |
| `"messages"` | List of messages. |
| `"result"` | The requested item. |
| `"success"` | Whether the request succeeded. |

Operations: Create.

API path: `/accounts/{account_id}/one/integrations/{id}/pause`

#### OneIntegrationResume

| Field | Description |
| --- | --- |
| `"errors"` | List of errors. |
| `"messages"` | List of messages. |
| `"result"` | The requested item. |
| `"success"` | Whether the request succeeded. |

Operations: Create.

API path: `/accounts/{account_id}/one/integrations/{id}/resume`

#### OneIntegrationUpdate

| Field | Description |
| --- | --- |
| `"credentials"` | Partial credential fields to merge with existing. |
| `"dlp_profiles"` | List of DLP profile IDs to associate with the integration. |
| `"errors"` | List of errors. |
| `"id"` |  |
| `"messages"` | List of messages. |
| `"name"` | Name of the integration. |
| `"permissions"` | List of permission scopes granted to the integration. |
| `"result"` | The requested item. |
| `"success"` | Whether the request succeeded. |
| `"use_cases"` | List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']). |

Operations: Update.

API path: `/accounts/{account_id}/one/integrations/{id}`

#### OnePaginatedApplicationListList

| Field | Description |
| --- | --- |
| `"auth_methods"` | Available auth methods. |
| `"category"` | Vendor category (e.g. |
| `"description"` | Brief description of the integration. |
| `"display_name"` | Human-readable vendor name. |
| `"dlp_enabled"` | Whether DLP scanning is supported. |
| `"id"` | Vendor identifier (e.g. |
| `"logo"` | Logo path. |
| `"permissions"` | All permissions with severity. |
| `"supported_environments"` | Environments this vendor supports (standard, fedramp). |
| `"use_cases"` | Supported use cases. |

Operations: List.

API path: `/accounts/{account_id}/one/applications`

#### OnePaginatedAuthMethodDetailList

| Field | Description |
| --- | --- |
| `"display_name"` | Human-readable auth method name. |
| `"human_interaction_required"` | Whether setup requires human interaction or integration can be created purely using API (e.g., For OAuth can not be created without user interaction). |
| `"id"` | Auth method identifier. |
| `"instructions"` | Step-by-step instructions for obtaining credentials. |
| `"payload_example"` | Example credentials payload with placeholder values. |
| `"payload_schema"` | JSON Schema for the credentials object in POST /v2/integrations request. |
| `"redirect_url"` | OAuth redirect URL for vendors requiring human interaction. |

Operations: List.

API path: `/accounts/{account_id}/one/applications/{application_id}/auth-methods`

#### OnePaginatedIntegrationV2ListItemList

| Field | Description |
| --- | --- |
| `"application"` |  |
| `"created"` | When the integration was created. |
| `"id"` | Integration ID. |
| `"is_paused"` | Whether the user paused the integration. |
| `"name"` | Name of the integration. |
| `"status"` | Integration status. |
| `"updated"` | When the integration was last updated. |

Operations: List.

API path: `/accounts/{account_id}/one/integrations`

#### OnePaginatedSetupFlowList

| Field | Description |
| --- | --- |
| `"auth_config"` | OAuth configuration (present for OAuth-based flows). |
| `"default"` | Whether this is the default auth method. |
| `"description"` | Flow description. |
| `"id"` | Setup flow identifier. |
| `"name"` | Human-readable flow name. |
| `"steps"` | Ordered list of setup steps. |
| `"supported_environments"` | Environments this auth method supports (standard, fedramp). |

Operations: List.

API path: `/accounts/{account_id}/one/applications/{application_id}/setup-flows`

#### OverrideCode

| Field | Description |
| --- | --- |
| `"device_id"` | Physical device ID. |
| `"duration_hours"` | Number of hours for which the override code should remain valid. |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"scope"` | Whether the code applies to every device in the account or one physical device. |
| `"success"` | Whether the API call was successful. |
| `"type"` | The feature that the override code applies to. |

Operations: Create.

API path: `/accounts/{account_id}/devices/override_codes`

#### Pacfile

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/gateway/pacfiles/{pacfile_id}`

#### PhysicalDevice

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` | A WARP Device. |
| `"result_info"` | V4 public API Pagination/Cursor info. |
| `"success"` | Whether the API call was successful. |
| `"tags"` | Replaces all tags assigned to the physical device. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/devices/physical-devices/{device_id}/revoke`

#### ProxyEndpoint

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}`

#### Registration

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` | A WARP configuration tied to a single user. |
| `"result_info"` | V4 public API Pagination/Cursor info. |
| `"success"` | Whether the API call was successful. |

Operations: Create, List, Load, Remove.

API path: `/accounts/{account_id}/devices/registrations/revoke`

#### Rule

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/gateway/rules/{rule_id}`

#### TeamsDevicesApiResponseSingle

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/accounts/{account_id}/devices/revoke`

#### TeamsDevicesComponentsSchemasResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List, Remove.

API path: `/accounts/{account_id}/devices/networks`

#### TeamsDevicesComponentsSchemasSingle

| Field | Description |
| --- | --- |
| `"config"` | The configuration object containing information for the WARP client to detect the managed network. |
| `"name"` | The name of the device managed network. |
| `"result"` |  |
| `"type"` | The type of device managed network. |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/devices/networks`

#### TeamsDevicesDefaultDeviceSetting

| Field | Description |
| --- | --- |
| `"allow_mode_switch"` | Whether to allow the user to switch WARP between modes. |
| `"allow_updates"` | Whether to receive update notifications when a new version of the client is available. |
| `"allowed_to_leave"` | Whether to allow devices to leave the organization. |
| `"auto_connect"` | The amount of time in seconds to reconnect after having been disabled. |
| `"captive_portal"` | Turn on the captive portal after the specified amount of time. |
| `"disable_auto_fallback"` | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `"dns_search_suffixes"` | List of DNS search suffixes to apply to clients. |
| `"exclude"` | List of routes excluded in the WARP client's tunnel. |
| `"exclude_office_ips"` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `"global_acceleration"` | Global Acceleration settings for China. |
| `"include"` | List of routes included in the WARP client's tunnel. |
| `"lan_allow_minutes"` | The amount of time in minutes a user is allowed access to their LAN. |
| `"lan_allow_subnet_size"` | The size of the subnet for the local access network. |
| `"register_interface_ip_with_dns"` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `"result"` |  |
| `"sccm_vpn_boundary_support"` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `"service_mode_v2"` |  |
| `"support_url"` | The URL to launch when the Send Feedback button is clicked. |
| `"switch_locked"` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `"tunnel_protocol"` | Determines which tunnel protocol to use. |
| `"uninstall_protection"` | Determines whether uninstalling the WARP client requires an override code. |
| `"virtual_networks"` | Virtual network access settings for the device. |

Operations: Load, Update.

API path: `/accounts/{account_id}/devices/policy`

#### TeamsDevicesDevice

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"result"` |  |

Operations: List, Load.

API path: `/accounts/{account_id}/devices`

#### TeamsDevicesDeviceSetting

| Field | Description |
| --- | --- |
| `"allow_mode_switch"` | Whether to allow the user to switch WARP between modes. |
| `"allow_updates"` | Whether to receive update notifications when a new version of the client is available. |
| `"allowed_to_leave"` | Whether to allow devices to leave the organization. |
| `"auto_connect"` | The amount of time in seconds to reconnect after having been disabled. |
| `"browser_extension_config"` | Browser extension proxy settings. |
| `"captive_portal"` | Turn on the captive portal after the specified amount of time. |
| `"default"` | Whether the policy is the account default. |
| `"description"` | A description of the policy. |
| `"disable_auto_fallback"` | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `"dns_search_suffixes"` | List of DNS search suffixes to apply to clients. |
| `"enabled"` | Whether the policy will be applied to matching devices. |
| `"exclude"` | List of routes excluded in the WARP client's tunnel. |
| `"exclude_office_ips"` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `"global_acceleration"` | Global Acceleration settings for China. |
| `"include"` | List of routes included in the WARP client's tunnel. |
| `"lan_allow_minutes"` | The amount of time in minutes a user is allowed access to their LAN. |
| `"lan_allow_subnet_size"` | The size of the subnet for the local access network. |
| `"match"` | The wirefilter expression to match devices. |
| `"name"` | The name of the device settings profile. |
| `"precedence"` | The precedence of the policy. |
| `"profile_type"` | The client type to which the device settings profile applies. |
| `"register_interface_ip_with_dns"` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `"result"` |  |
| `"sccm_vpn_boundary_support"` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `"service_mode_v2"` |  |
| `"support_url"` | The URL to launch when the Send Feedback button is clicked. |
| `"switch_locked"` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `"tunnel_protocol"` | Determines which tunnel protocol to use. |
| `"uninstall_protection"` | Determines whether uninstalling the WARP client requires an override code. |
| `"virtual_networks"` | Virtual network access settings for the device. |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/devices/policy`

#### TeamsDevicesDeviceSettingsResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List, Remove.

API path: `/accounts/{account_id}/devices/policies`

#### TeamsDevicesDevicesPolicyCertificatesSingle

| Field | Description |
| --- | --- |
| `"enabled"` | The current status of the device policy certificate provisioning feature for WARP clients. |
| `"result"` |  |

Operations: Load, Update.

API path: `/zones/{zone_id}/devices/policy/certificates`

#### TeamsDevicesFallbackDomainResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List, Remove, Update.

API path: `/accounts/{account_id}/devices/policy/{policy_id}/fallback_domains`

#### TeamsDevicesGlobalWarpOverride

| Field | Description |
| --- | --- |
| `"disconnect"` | Disconnects all devices on the account using Global WARP override. |
| `"justification"` | Reasoning for setting the Global WARP override state. |
| `"result"` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/devices/resilience/disconnect`

#### TeamsDevicesId

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/devices/posture/{rule_id}`

#### TeamsDevicesOverrideCode

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/devices/{device_id}/override_codes`

#### TeamsDevicesResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/devices/posture`

#### TeamsDevicesSchemasId

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/devices/posture/integration/{integration_id}`

#### TeamsDevicesSchemasResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/devices/posture/integration`

#### TeamsDevicesSchemasSingle

| Field | Description |
| --- | --- |
| `"config"` | The configuration object containing third-party integration information. |
| `"interval"` | The interval between each posture check with the third-party API. |
| `"name"` | The name of the device posture integration. |
| `"result"` |  |
| `"type"` | The type of device posture integration. |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/devices/posture/integration`

#### TeamsDevicesSingle

| Field | Description |
| --- | --- |
| `"description"` | The description of the device posture rule. |
| `"expiration"` | Sets the expiration time for a posture check result. |
| `"input"` | The value to be checked against. |
| `"match"` | The conditions that the client must match to run the rule. |
| `"name"` | The name of the device posture rule. |
| `"result"` |  |
| `"schedule"` | Polling frequency for the WARP client posture check. |
| `"type"` | The type of device posture rule. |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/devices/posture`

#### TeamsDevicesSplitTunnelIncludeResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List, Update.

API path: `/accounts/{account_id}/devices/policy/{policy_id}/include`

#### TeamsDevicesSplitTunnelResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List, Remove, Update.

API path: `/accounts/{account_id}/devices/policy/{policy_id}/exclude`

#### TeamsDevicesZeroTrustAccountDeviceSetting

| Field | Description |
| --- | --- |
| `"disable_for_time"` | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| `"external_emergency_signal_enabled"` | Controls whether the external emergency disconnect feature is enabled. |
| `"external_emergency_signal_fingerprint"` | The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. |
| `"external_emergency_signal_interval"` | The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). |
| `"external_emergency_signal_url"` | The HTTPS URL from which to fetch the emergency disconnect signal. |
| `"gateway_proxy_enabled"` | Enable gateway proxy filtering on TCP. |
| `"gateway_udp_proxy_enabled"` | Enable gateway proxy filtering on UDP. |
| `"result"` |  |
| `"root_certificate_installation_enabled"` | Enable installation of cloudflare managed root certificate. |
| `"use_zt_virtual_ip"` | Enable using CGNAT virtual IPv4. |

Operations: Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/devices/settings`

#### Tunnel

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/tunnels`

#### TunnelCfdTunnelResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/cfd_tunnel`

#### TunnelCfdTunnelResponseSingle

| Field | Description |
| --- | --- |
| `"config_src"` | Indicates if this is a locally or remotely configured tunnel. |
| `"errors"` |  |
| `"messages"` |  |
| `"name"` | A user-friendly name for a tunnel. |
| `"result"` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `"success"` | Whether the API call was successful |
| `"tunnel_secret"` | Sets the password required to run a locally-managed tunnel. |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/cfd_tunnel`

#### TunnelConfiguration

| Field | Description |
| --- | --- |
| `"config"` | The tunnel configuration and ingress rules. |
| `"result"` | Cloudflare Tunnel configuration |

Operations: Load, Update.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations`

#### TunnelEmpty

| Field | Description |
| --- | --- |
| `"client_id"` | UUID of the Cloudflare Tunnel connector. |

Operations: Remove, Update.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections`

#### TunnelHostnameRouteResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/zerotrust/routes/hostname`

#### TunnelHostnameRouteResponseSingle

| Field | Description |
| --- | --- |
| `"comment"` | An optional description of the hostname route. |
| `"errors"` |  |
| `"hostname"` | The hostname of the route. |
| `"messages"` |  |
| `"result"` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `"success"` | Whether the API call was successful |
| `"tunnel_id"` | UUID of the tunnel. |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/zerotrust/routes/hostname`

#### TunnelMeshConfigurationResponseSingle

| Field | Description |
| --- | --- |
| `"config"` | Provider-specific configuration. |
| `"ha_mode"` | High-availability mode for the WARP Connector tunnel. |
| `"result"` |  |

Operations: Load, Update.

API path: `/accounts/{account_id}/warp_connector/{tunnel_id}/configurations`

#### TunnelRouteResponseSingle

| Field | Description |
| --- | --- |
| `"comment"` | Optional remark describing the route. |
| `"errors"` |  |
| `"messages"` |  |
| `"network"` | The private IPv4 or IPv6 range connected by the route, in CIDR notation. |
| `"result"` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `"success"` | Whether the API call was successful |
| `"tunnel_id"` | UUID of the tunnel. |
| `"virtual_network_id"` | UUID of the virtual network. |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}`

#### TunnelSubnetResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/zerotrust/subnets`

#### TunnelSubnetResponseSingle

| Field | Description |
| --- | --- |
| `"comment"` | An optional description of the subnet. |
| `"errors"` |  |
| `"is_default_network"` | If `true`, this is the default subnet for the account. |
| `"messages"` |  |
| `"name"` | A user-friendly name for the subnet. |
| `"network"` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `"result"` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `"success"` | Whether the API call was successful |

Operations: Create, Load, Patch, Update.

API path: `/accounts/{account_id}/zerotrust/subnets/warp`

#### TunnelSubnetResponseSingleNullable

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}`

#### TunnelTeamnetResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/teamnet/routes`

#### TunnelTeamnetResponseSingle

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `"success"` | Whether the API call was successful |

Operations: Load.

API path: `/accounts/{account_id}/teamnet/routes/ip/{ip}`

#### TunnelTunnelClient

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `"success"` | Whether the API call was successful |

Operations: Load.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}`

#### TunnelTunnelConnection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections`

#### TunnelTunnelResponseToken

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"resources"` |  |
| `"result"` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `"success"` | Whether the API call was successful |

Operations: Create, List.

API path: `/accounts/{account_id}/cfd_tunnel/{tunnel_id}/management`

#### TunnelTunnelWarpConnectorClient

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `"success"` | Whether the API call was successful |

Operations: Load.

API path: `/accounts/{account_id}/warp_connector/{tunnel_id}/connectors/{connector_id}`

#### TunnelTunnelWarpConnectorConnection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/warp_connector/{tunnel_id}/connections`

#### TunnelVnetResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/teamnet/virtual_networks`

#### TunnelVnetResponseSingle

| Field | Description |
| --- | --- |
| `"comment"` | Optional remark describing the virtual network. |
| `"is_default"` | If `true`, this virtual network is the default for the account. |
| `"is_default_network"` | If `true`, this virtual network is the default for the account. |
| `"name"` | A user-friendly name for the virtual network. |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/teamnet/virtual_networks`

#### TunnelWarpConnectorResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/warp_connector`

#### TunnelWarpConnectorResponseSingle

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"ha"` | Indicates that the tunnel will be created to be highly available. |
| `"messages"` |  |
| `"name"` | A user-friendly name for a tunnel. |
| `"result"` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `"success"` | Whether the API call was successful |
| `"tunnel_secret"` | Sets the password required to run a locally-managed tunnel. |

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/warp_connector`

#### TunnelZeroTrustConnectivitySetting

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"icmp_proxy_enabled"` | A flag to enable the ICMP proxy for the account network. |
| `"messages"` |  |
| `"offramp_warp_enabled"` | A flag to enable WARP to WARP traffic. |
| `"result"` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `"success"` | Whether the API call was successful |

Operations: List, Update.

API path: `/accounts/{account_id}/zerotrust/connectivity_settings`

#### Warp

| Field | Description |
| --- | --- |
| `"comment"` | An optional description of the subnet. |
| `"errors"` |  |
| `"id"` |  |
| `"is_default_network"` | If `true`, this is the default subnet for the account. |
| `"messages"` |  |
| `"name"` | A user-friendly name for the subnet. |
| `"network"` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `"result"` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `"success"` | Whether the API call was successful |

Operations: Load, Update.

API path: `/accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}`

#### WarpChangeEvent

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/dex/warp-change-events`

#### WarpTeamsDeviceApiOther

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/devices/registrations/{registration_id}/override_codes`

#### ZeroTrustGatewayApplicationsReviewStatus

| Field | Description |
| --- | --- |
| `"approved_apps"` | Contains the ids of the approved applications. |
| `"in_review_apps"` | Contains the ids of the applications in review. |
| `"result"` |  |
| `"unapproved_apps"` | Contains the ids of the unapproved applications. |

Operations: Load, Update.

API path: `/accounts/{account_id}/gateway/apps/review_status`

#### ZeroTrustGatewayCsvOperationSingle

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/accounts/{account_id}/gateway/lists/upload`

#### ZeroTrustGatewayCustomCertificateSetting

| Field | Description |
| --- | --- |
| `"binding_status"` | Indicate the internal certificate status. |
| `"enabled"` | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| `"id"` | Specify the UUID of the certificate (ID from MTLS certificate store). |
| `"updated_at"` |  |

Operations: Load.

API path: `/accounts/{account_id}/gateway/configuration/custom_certificate`

#### ZeroTrustGatewayGatewayAccount

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/gateway`

#### ZeroTrustGatewayGatewayAccountConfig

| Field | Description |
| --- | --- |
| `"result"` |  |
| `"settings"` | Specify account settings. |

Operations: Load, Patch, Update.

API path: `/accounts/{account_id}/gateway/configuration`

#### ZeroTrustGatewayGatewayAccountEgressCidrPairList

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/egress_cidr_pairs`

#### ZeroTrustGatewayGatewayAccountLoggingSetting

| Field | Description |
| --- | --- |
| `"redact_pii"` | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `"result"` |  |
| `"settings_by_rule_type"` | Configure logging settings for each rule type. |

Operations: Load, Update.

API path: `/accounts/{account_id}/gateway/logging`

#### ZeroTrustGatewayListItemResponseCollection

| Field | Description |
| --- | --- |
| `"result"` | Provide the list items. |
| `"result_info"` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/lists/{list_id}/items`

#### ZeroTrustGatewayListSingle

| Field | Description |
| --- | --- |
| `"append"` | Add items to the list. |
| `"description"` | Provide the list description. |
| `"items"` | Add items to the list. |
| `"name"` | Specify the list name. |
| `"remove"` | Lists of item values you want to remove. |
| `"result"` |  |

Operations: Load, Patch, Update.

API path: `/accounts/{account_id}/gateway/lists/{list_id}`

#### ZeroTrustGatewayResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/certificates`

#### ZeroTrustGatewayResponseCollection10

| Field | Description |
| --- | --- |
| `"result"` |  |
| `"result_info"` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/pacfiles`

#### ZeroTrustGatewayResponseCollection2

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/dns_destination_ips`

#### ZeroTrustGatewayResponseCollection3

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/lists`

#### ZeroTrustGatewayResponseCollection4

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/operations`

#### ZeroTrustGatewayResponseCollection5

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/locations`

#### ZeroTrustGatewayResponseCollection6

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List, Update.

API path: `/accounts/{account_id}/gateway/rules`

#### ZeroTrustGatewayResponseCollection7

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/app_types`

#### ZeroTrustGatewayResponseCollection8

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/categories`

#### ZeroTrustGatewayResponseCollection9

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/gateway/proxy_endpoints`

#### ZeroTrustGatewaySingle

| Field | Description |
| --- | --- |
| `"result"` |  |
| `"validity_period_days"` | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

Operations: Create, Load, Remove.

API path: `/accounts/{account_id}/gateway/certificates/{certificate_id}/activate`

#### ZeroTrustGatewaySingleResponse2

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/gateway/operations/{operation_id}`

#### ZeroTrustGatewaySingleResponse3

| Field | Description |
| --- | --- |
| `"client_default"` | Indicate whether this location is the default location. |
| `"dns_destination_ips_id"` | Specify the identifier of the pair of IPv4 addresses assigned to this location. |
| `"ecs_support"` | Indicate whether the location must resolve EDNS queries. |
| `"endpoints"` | Configure the destination endpoints for this location. |
| `"max_ttl"` | Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. |
| `"name"` | Specify the location name. |
| `"networks"` | Specify the list of network ranges from which requests at this location originate. |
| `"result"` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/gateway/locations`

#### ZeroTrustGatewaySingleResponse4

| Field | Description |
| --- | --- |
| `"action"` | Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`. |
| `"description"` | Specify the rule description. |
| `"device_posture"` | Specify the wirefilter expression used for device posture check. |
| `"enabled"` | Specify whether the rule is enabled. |
| `"expiration"` | Defines the expiration time stamp and default duration of a DNS policy. |
| `"filters"` | Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| `"identity"` | Specify the wirefilter expression used for identity matching. |
| `"name"` | Specify the rule name. |
| `"precedence"` | Set the order of your rules. |
| `"result"` |  |
| `"rule_settings"` | Defines settings for this rule. |
| `"schedule"` | Defines the schedule for activating DNS policies. |
| `"traffic"` | Specify the wirefilter expression used for traffic matching. |

Operations: Create, Load, Patch, Update.

API path: `/accounts/{account_id}/gateway/rules/{rule_id}/reset_expiration`

#### ZeroTrustGatewaySingleResponse5

| Field | Description |
| --- | --- |
| `"ips"` | Specify the list of CIDRs to restrict ingress connections. |
| `"kind"` | The proxy endpoint kind. |
| `"name"` | Specify the name of the proxy endpoint. |
| `"result"` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/gateway/proxy_endpoints`

#### ZeroTrustGatewaySingleResponse6

| Field | Description |
| --- | --- |
| `"public_key"` | Provide the Base64-encoded HPKE public key that encrypts SSH session logs. |
| `"result"` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/gateway/audit_ssh_settings/rotate_seed`

#### ZeroTrustGatewaySingleResponse7

| Field | Description |
| --- | --- |
| `"contents"` | Actual contents of the PAC file |
| `"description"` | Detailed description of the PAC file. |
| `"name"` | Name of the PAC file. |
| `"result"` |  |
| `"slug"` | URL-friendly version of the PAC file name. |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/gateway/pacfiles`

#### ZeroTrustGatewaySingleResponseWithListItem

| Field | Description |
| --- | --- |
| `"description"` | Provide the list description. |
| `"items"` | Add items to the list. |
| `"name"` | Specify the list name. |
| `"type"` | Specify the list type. |

Operations: Create.

API path: `/accounts/{account_id}/gateway/lists`

#### ZeroTrustRiskScoring

| Field | Description |
| --- | --- |
| `"behaviors"` |  |
| `"result"` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/zt_risk_scoring/{user_id}/reset`

#### ZeroTrustRiskScoringIntegration

| Field | Description |
| --- | --- |
| `"active"` | Whether this integration is enabled. |
| `"id"` |  |
| `"integration_type"` |  |
| `"reference_id"` | A reference id that can be supplied by the client. |
| `"result"` |  |
| `"tenant_url"` | The base url of the tenant, e.g. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/zt_risk_scoring/integrations`



## Entities


### AlexandriaDeleteApplication

Create an instance: `alexandriaDeleteApplication := client.AlexandriaDeleteApplication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### AlexandriaGetApplication

Create an instance: `alexandriaGetApplication := client.AlexandriaGetApplication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category_id` | `int` | Returns the category ID. |
| `errors` | `[]any` |  |
| `hostnames` | `[]any` | Hostnames matched by the application. |
| `human_id` | `string` | Returns the human readable ID. |
| `id` | `string` |  |
| `ip_subnets` | `[]any` | IP subnets for this application. |
| `messages` | `[]any` |  |
| `name` | `string` | Returns the application name. |
| `port_protocols` | `[]any` | Port and protocol pairs matched by the application. |
| `result` | `map[string]any` | Returns the list of applications. |
| `success` | `bool` | Indicates whether the API call was successful. |
| `support_domains` | `[]any` | Support domains matched by the application. |

#### Example: Load

```go
alexandriaGetApplication, err := client.AlexandriaGetApplication(nil).Load(map[string]any{"id": 1, "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alexandriaGetApplication) // the loaded record
```

#### Example: List

```go
alexandriaGetApplications, err := client.AlexandriaGetApplication(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(alexandriaGetApplications) // the array of records
```

#### Example: Create

```go
result, err := client.AlexandriaGetApplication(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "category_id": 1,
    "errors": []any{},
    "human_id": "example_human_id",
    "messages": []any{},
    "name": "example_name",
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AlexandriaGetCategory

Create an instance: `alexandriaGetCategory := client.AlexandriaGetCategory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | Returns the list of categories. |
| `success` | `bool` | Indicates whether the API call was successful. |

#### Example: Load

```go
alexandriaGetCategory, err := client.AlexandriaGetCategory(nil).Load(map[string]any{"id": 1, "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alexandriaGetCategory) // the loaded record
```

#### Example: List

```go
alexandriaGetCategorys, err := client.AlexandriaGetCategory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(alexandriaGetCategorys) // the array of records
```


### ClientVersion

Create an instance: `clientVersion := client.ClientVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` | Indicates whether the API call was successful. |

#### Example: List

```go
clientVersions, err := client.ClientVersion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(clientVersions) // the array of records
```


### Cni

Create an instance: `cni := client.Cni(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DeploymentGroup

Create an instance: `deploymentGroup := client.DeploymentGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `name` | `string` | A user-friendly name for the deployment group. |
| `policy_ids` | `[]any` | Contains an optional list of policy IDs assigned to a group. |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` | Indicates whether the API call was successful. |
| `version_config` | `[]any` | Contains at least one version configuration. |

#### Example: Load

```go
deploymentGroup, err := client.DeploymentGroup(nil).Load(map[string]any{"id": "deployment_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(deploymentGroup) // the loaded record
```

#### Example: List

```go
deploymentGroups, err := client.DeploymentGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(deploymentGroups) // the array of records
```

#### Example: Create

```go
result, err := client.DeploymentGroup(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
    "version_config": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DexRemoteCommand

Create an instance: `dexRemoteCommand := client.DexRemoteCommand(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commands` | `[]any` | List of device-level commands to execute |
| `result` | `map[string]any` |  |

#### Example: Load

```go
dexRemoteCommand, err := client.DexRemoteCommand(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dexRemoteCommand) // the loaded record
```

#### Example: Create

```go
result, err := client.DexRemoteCommand(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "commands": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DexRule

Create an instance: `dexRule := client.DexRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `match` | `string` | The wirefilter expression to match. |
| `name` | `string` | The name of the Rule. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
dexRule, err := client.DexRule(nil).Load(map[string]any{"id": "dex_rule_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dexRule) // the loaded record
```

#### Example: Create

```go
result, err := client.DexRule(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "match": "example_match",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DexSyntheticApplicationMonitoring

Create an instance: `dexSyntheticApplicationMonitoring := client.DexSyntheticApplicationMonitoring(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | array of colos. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
dexSyntheticApplicationMonitoring, err := client.DexSyntheticApplicationMonitoring(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dexSyntheticApplicationMonitoring) // the loaded record
```

#### Example: List

```go
dexSyntheticApplicationMonitorings, err := client.DexSyntheticApplicationMonitoring(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dexSyntheticApplicationMonitorings) // the array of records
```


### DigitalExperienceMonitoringDevice

Create an instance: `digitalExperienceMonitoringDevice := client.DigitalExperienceMonitoringDevice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alwaysOn` | `bool` |  |
| `batteryCharging` | `bool` |  |
| `batteryCycles` | `int` |  |
| `batteryPct` | `float64` |  |
| `colo` | `string` | Cloudflare colo airport code. |
| `connectionType` | `string` |  |
| `cpuPct` | `float64` |  |
| `cpuPctByApp` | `[]any` |  |
| `deviceId` | `string` | Device identifier (UUID v4) |
| `deviceIpv4` | `map[string]any` |  |
| `deviceIpv6` | `map[string]any` |  |
| `deviceName` | `string` | Device identifier (human readable). |
| `deviceRegistration` | `string` | Deprecated: use registrationId. |
| `diskReadBps` | `int` |  |
| `diskUsagePct` | `float64` |  |
| `diskWriteBps` | `int` |  |
| `dohSubdomain` | `string` |  |
| `estimatedLossPct` | `float64` |  |
| `firewallEnabled` | `bool` |  |
| `gatewayIpv4` | `map[string]any` |  |
| `gatewayIpv6` | `map[string]any` |  |
| `handshakeLatencyMs` | `float64` |  |
| `ispIpv4` | `map[string]any` |  |
| `ispIpv6` | `map[string]any` |  |
| `metal` | `string` |  |
| `mode` | `string` | The mode under which the WARP client is run. |
| `networkRcvdBps` | `int` |  |
| `networkSentBps` | `int` |  |
| `networkSsid` | `string` |  |
| `personEmail` | `string` | User contact email address |
| `platform` | `string` | Operating system. |
| `ramAvailableKb` | `int` |  |
| `ramUsedPct` | `float64` |  |
| `ramUsedPctByApp` | `[]any` |  |
| `registrationId` | `string` | Device registration identifier (UUID v4). |
| `rtt` | `map[string]any` | Round-trip time statistics for the WARP tunnel. |
| `status` | `string` | Network status. |
| `switchLocked` | `bool` |  |
| `timestamp` | `string` |  |
| `tunnelStats` | `map[string]any` | WARP tunnel packet and byte counters. |
| `tunnelType` | `string` |  |
| `version` | `string` | WARP client version. |
| `wifiStrengthDbm` | `int` |  |

#### Example: List

```go
digitalExperienceMonitoringDevices, err := client.DigitalExperienceMonitoringDevice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(digitalExperienceMonitoringDevices) // the array of records
```


### DigitalExperienceMonitoringDexDeleteResponseCollection

Create an instance: `digitalExperienceMonitoringDexDeleteResponseCollection := client.DigitalExperienceMonitoringDexDeleteResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### DigitalExperienceMonitoringDexResponseCollection

Create an instance: `digitalExperienceMonitoringDexResponseCollection := client.DigitalExperienceMonitoringDexResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
digitalExperienceMonitoringDexResponseCollections, err := client.DigitalExperienceMonitoringDexResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(digitalExperienceMonitoringDexResponseCollections) // the array of records
```


### DigitalExperienceMonitoringDexSingle

Create an instance: `digitalExperienceMonitoringDexSingle := client.DigitalExperienceMonitoringDexSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` | Date the test was created, in RFC 3339 format. |
| `data` | `map[string]any` | The configuration object which contains the details for the WARP client to conduct the test. |
| `description` | `string` | Additional details about the test. |
| `enabled` | `bool` | Determines whether or not the test is active. |
| `interval` | `string` | How often the test will run. |
| `name` | `string` | The name of the DEX test. |
| `result` | `map[string]any` |  |
| `target_policies` | `any` |  |
| `targeted` | `bool` |  |
| `test_id` | `string` | The unique identifier for the test. |
| `updated` | `string` | Date the test was last updated, in RFC 3339 format. |

#### Example: Load

```go
digitalExperienceMonitoringDexSingle, err := client.DigitalExperienceMonitoringDexSingle(nil).Load(map[string]any{"account_id": "account_id", "dex_test_id": "dex_test_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(digitalExperienceMonitoringDexSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.DigitalExperienceMonitoringDexSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "data": map[string]any{},
    "enabled": true,
    "interval": "example_interval",
    "name": "example_name",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DigitalExperienceMonitoringFleetStatusDevice

Create an instance: `digitalExperienceMonitoringFleetStatusDevice := client.DigitalExperienceMonitoringFleetStatusDevice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
digitalExperienceMonitoringFleetStatusDevices, err := client.DigitalExperienceMonitoringFleetStatusDevice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(digitalExperienceMonitoringFleetStatusDevices) // the array of records
```


### DigitalExperienceMonitoringFleetStatusLive

Create an instance: `digitalExperienceMonitoringFleetStatusLive := client.DigitalExperienceMonitoringFleetStatusLive(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
digitalExperienceMonitoringFleetStatusLive, err := client.DigitalExperienceMonitoringFleetStatusLive(nil).Load(map[string]any{"account_id": "account_id", "since_minute": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(digitalExperienceMonitoringFleetStatusLive) // the loaded record
```


### DigitalExperienceMonitoringFleetStatusOverTime

Create an instance: `digitalExperienceMonitoringFleetStatusOverTime := client.DigitalExperienceMonitoringFleetStatusOverTime(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
digitalExperienceMonitoringFleetStatusOverTime, err := client.DigitalExperienceMonitoringFleetStatusOverTime(nil).Load(map[string]any{"account_id": "account_id", "from": "from", "to": "to"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(digitalExperienceMonitoringFleetStatusOverTime) // the loaded record
```


### Integration

Create an instance: `integration := client.Integration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Interconnect

Create an instance: `interconnect := client.Interconnect(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
interconnect, err := client.Interconnect(nil).Load(map[string]any{"account_id": "account_id", "icon": "icon"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(interconnect) // the loaded record
```


### IpProfile

Create an instance: `ipProfile := client.IpProfile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | An optional description of the Device IP profile. |
| `enabled` | `bool` | Whether the Device IP profile will be applied to matching devices. |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `match` | `string` | The wirefilter expression to match registrations. |
| `messages` | `[]any` |  |
| `name` | `string` | A user-friendly name for the Device IP profile. |
| `precedence` | `int` | The precedence of the Device IP profile. |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `subnet_id` | `string` | The ID of the Subnet. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
ipProfile, err := client.IpProfile(nil).Load(map[string]any{"id": "ip_profile_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(ipProfile) // the loaded record
```

#### Example: List

```go
ipProfiles, err := client.IpProfile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(ipProfiles) // the array of records
```

#### Example: Create

```go
result, err := client.IpProfile(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "match": "example_match",
    "messages": []any{},
    "name": "example_name",
    "precedence": 1,
    "result": map[string]any{},
    "result_info": map[string]any{},
    "subnet_id": "example_subnet_id",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### List

Create an instance: `list := client.List(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Location

Create an instance: `location := client.Location(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### NscCni

Create an instance: `nscCni := client.NscCni(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | Customer account tag |
| `bgp` | `map[string]any` |  |
| `bgp_mode` | `string` | The BGP mode for a CNI. |
| `cust_ip` | `string` | Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`. |
| `id` | `string` |  |
| `interconnect` | `string` | Interconnect identifier hosting this CNI |
| `magic` | `map[string]any` |  |
| `p2p_ip` | `string` | Cloudflare end of the point-to-point link |

#### Example: Load

```go
nscCni, err := client.NscCni(nil).Load(map[string]any{"id": "nsc_cni_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(nscCni) // the loaded record
```

#### Example: List

```go
nscCnis, err := client.NscCni(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(nscCnis) // the array of records
```

#### Example: Create

```go
result, err := client.NscCni(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "account": "example_account",
    "bgp": map[string]any{},
    "cust_ip": "example_cust_ip",
    "id": "example_id",
    "interconnect": "example_interconnect",
    "magic": map[string]any{},
    "p2p_ip": "example_p2p_ip",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### NscDefaultName

Create an instance: `nscDefaultName := client.NscDefaultName(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The default customer name for the interconnect |

#### Example: Load

```go
nscDefaultName, err := client.NscDefaultName(nil).Load(map[string]any{"account_id": "account_id", "interconnect_id": "interconnect_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(nscDefaultName) // the loaded record
```


### NscInterconnect

Create an instance: `nscInterconnect := client.NscInterconnect(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `items` | `[]any` |  |
| `next` | `int` |  |

#### Example: Load

```go
nscInterconnect, err := client.NscInterconnect(nil).Load(map[string]any{"id": "nsc_interconnect_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(nscInterconnect) // the loaded record
```

#### Example: List

```go
nscInterconnects, err := client.NscInterconnect(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(nscInterconnects) // the array of records
```

#### Example: Create

```go
result, err := client.NscInterconnect(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "items": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### NscSetting

Create an instance: `nscSetting := client.NscSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_asn` | `int` |  |

#### Example: Load

```go
nscSetting, err := client.NscSetting(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(nscSetting) // the loaded record
```


### NscSlotInfo

Create an instance: `nscSlotInfo := client.NscSlotInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `string` | Customer account tag |
| `address` | `[]any` |  |
| `ccr_device_name` | `string` |  |
| `facility` | `map[string]any` |  |
| `id` | `string` | Slot ID |
| `name` | `string` |  |
| `occupied` | `bool` | Whether the slot is occupied or not |
| `site` | `string` |  |
| `speed` | `string` |  |

#### Example: Load

```go
nscSlotInfo, err := client.NscSlotInfo(nil).Load(map[string]any{"account_id": "account_id", "slot": "slot"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(nscSlotInfo) // the loaded record
```

#### Example: List

```go
nscSlotInfos, err := client.NscSlotInfo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(nscSlotInfos) // the array of records
```


### NscStatusInfo

Create an instance: `nscStatusInfo := client.NscStatusInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
nscStatusInfo, err := client.NscStatusInfo(nil).Load(map[string]any{"account_id": "account_id", "icon": "icon"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(nscStatusInfo) // the loaded record
```


### OneApplicationDetail

Create an instance: `oneApplicationDetail := client.OneApplicationDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | List of errors. |
| `messages` | `[]any` | List of messages. |
| `result` | `any` | The requested item. |
| `success` | `bool` | Whether the request succeeded. |

#### Example: Load

```go
oneApplicationDetail, err := client.OneApplicationDetail(nil).Load(map[string]any{"account_id": "account_id", "application_id": "application_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(oneApplicationDetail) // the loaded record
```


### OneIntegrationCreate

Create an instance: `oneIntegrationCreate := client.OneIntegrationCreate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `string` | Vendor/application slug (e.g., GOOGLE_WORKSPACE). |
| `auth_method` | `string` | Authentication method slug (uses default if omitted). |
| `credentials` | `map[string]any` | Credentials for the integration. |
| `dlp_profiles` | `[]any` | List of DLP profile IDs to associate. |
| `name` | `string` | Name of the integration. |
| `permissions` | `[]any` | List of permission scopes (uses policy defaults if empty). |
| `use_cases` | `[]any` | List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']). |

#### Example: Create

```go
result, err := client.OneIntegrationCreate(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "application": "example_application",
    "credentials": map[string]any{},
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OneIntegrationDetail

Create an instance: `oneIntegrationDetail := client.OneIntegrationDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | List of errors. |
| `id` | `string` |  |
| `messages` | `[]any` | List of messages. |
| `result` | `any` | The requested item. |
| `success` | `bool` | Whether the request succeeded. |

#### Example: Load

```go
oneIntegrationDetail, err := client.OneIntegrationDetail(nil).Load(map[string]any{"id": "one_integration_detail_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(oneIntegrationDetail) // the loaded record
```


### OneIntegrationPause

Create an instance: `oneIntegrationPause := client.OneIntegrationPause(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | List of errors. |
| `messages` | `[]any` | List of messages. |
| `result` | `any` | The requested item. |
| `success` | `bool` | Whether the request succeeded. |

#### Example: Create

```go
result, err := client.OneIntegrationPause(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "integration_id": "example_integration_id",
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OneIntegrationResume

Create an instance: `oneIntegrationResume := client.OneIntegrationResume(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | List of errors. |
| `messages` | `[]any` | List of messages. |
| `result` | `any` | The requested item. |
| `success` | `bool` | Whether the request succeeded. |

#### Example: Create

```go
result, err := client.OneIntegrationResume(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "integration_id": "example_integration_id",
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OneIntegrationUpdate

Create an instance: `oneIntegrationUpdate := client.OneIntegrationUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credentials` | `map[string]any` | Partial credential fields to merge with existing. |
| `dlp_profiles` | `[]any` | List of DLP profile IDs to associate with the integration. |
| `errors` | `[]any` | List of errors. |
| `id` | `string` |  |
| `messages` | `[]any` | List of messages. |
| `name` | `string` | Name of the integration. |
| `permissions` | `[]any` | List of permission scopes granted to the integration. |
| `result` | `any` | The requested item. |
| `success` | `bool` | Whether the request succeeded. |
| `use_cases` | `[]any` | List of use case or feature slugs to enroll (e.g., ['casb', 'ces', 'auto_remediation']). |


### OnePaginatedApplicationListList

Create an instance: `onePaginatedApplicationListList := client.OnePaginatedApplicationListList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_methods` | `[]any` | Available auth methods. |
| `category` | `string` | Vendor category (e.g. |
| `description` | `string` | Brief description of the integration. |
| `display_name` | `string` | Human-readable vendor name. |
| `dlp_enabled` | `bool` | Whether DLP scanning is supported. |
| `id` | `string` | Vendor identifier (e.g. |
| `logo` | `string` | Logo path. |
| `permissions` | `[]any` | All permissions with severity. |
| `supported_environments` | `[]any` | Environments this vendor supports (standard, fedramp). |
| `use_cases` | `[]any` | Supported use cases. |

#### Example: List

```go
onePaginatedApplicationListLists, err := client.OnePaginatedApplicationListList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(onePaginatedApplicationListLists) // the array of records
```


### OnePaginatedAuthMethodDetailList

Create an instance: `onePaginatedAuthMethodDetailList := client.OnePaginatedAuthMethodDetailList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `display_name` | `string` | Human-readable auth method name. |
| `human_interaction_required` | `bool` | Whether setup requires human interaction or integration can be created purely using API (e.g., For OAuth can not be created without user interaction). |
| `id` | `string` | Auth method identifier. |
| `instructions` | `any` | Step-by-step instructions for obtaining credentials. |
| `payload_example` | `map[string]any` | Example credentials payload with placeholder values. |
| `payload_schema` | `map[string]any` | JSON Schema for the credentials object in POST /v2/integrations request. |
| `redirect_url` | `string` | OAuth redirect URL for vendors requiring human interaction. |

#### Example: List

```go
onePaginatedAuthMethodDetailLists, err := client.OnePaginatedAuthMethodDetailList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(onePaginatedAuthMethodDetailLists) // the array of records
```


### OnePaginatedIntegrationV2ListItemList

Create an instance: `onePaginatedIntegrationV2ListItemList := client.OnePaginatedIntegrationV2ListItemList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `map[string]any` |  |
| `created` | `string` | When the integration was created. |
| `id` | `string` | Integration ID. |
| `is_paused` | `bool` | Whether the user paused the integration. |
| `name` | `string` | Name of the integration. |
| `status` | `string` | Integration status. |
| `updated` | `string` | When the integration was last updated. |

#### Example: List

```go
onePaginatedIntegrationV2ListItemLists, err := client.OnePaginatedIntegrationV2ListItemList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(onePaginatedIntegrationV2ListItemLists) // the array of records
```


### OnePaginatedSetupFlowList

Create an instance: `onePaginatedSetupFlowList := client.OnePaginatedSetupFlowList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_config` | `any` | OAuth configuration (present for OAuth-based flows). |
| `default` | `bool` | Whether this is the default auth method. |
| `description` | `string` | Flow description. |
| `id` | `string` | Setup flow identifier. |
| `name` | `string` | Human-readable flow name. |
| `steps` | `[]any` | Ordered list of setup steps. |
| `supported_environments` | `[]any` | Environments this auth method supports (standard, fedramp). |

#### Example: List

```go
onePaginatedSetupFlowLists, err := client.OnePaginatedSetupFlowList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(onePaginatedSetupFlowLists) // the array of records
```


### OverrideCode

Create an instance: `overrideCode := client.OverrideCode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `device_id` | `string` | Physical device ID. |
| `duration_hours` | `int` | Number of hours for which the override code should remain valid. |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `scope` | `string` | Whether the code applies to every device in the account or one physical device. |
| `success` | `bool` | Whether the API call was successful. |
| `type` | `string` | The feature that the override code applies to. |

#### Example: Create

```go
result, err := client.OverrideCode(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "duration_hours": 1,
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "scope": "example_scope",
    "success": true,
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Pacfile

Create an instance: `pacfile := client.Pacfile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### PhysicalDevice

Create an instance: `physicalDevice := client.PhysicalDevice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | A WARP Device. |
| `result_info` | `map[string]any` | V4 public API Pagination/Cursor info. |
| `success` | `bool` | Whether the API call was successful. |
| `tags` | `map[string]any` | Replaces all tags assigned to the physical device. |

#### Example: Load

```go
physicalDevice, err := client.PhysicalDevice(nil).Load(map[string]any{"id": "physical_device_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(physicalDevice) // the loaded record
```

#### Example: List

```go
physicalDevices, err := client.PhysicalDevice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(physicalDevices) // the array of records
```

#### Example: Create

```go
result, err := client.PhysicalDevice(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "id": "example_id",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProxyEndpoint

Create an instance: `proxyEndpoint := client.ProxyEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Registration

Create an instance: `registration := client.Registration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | A WARP configuration tied to a single user. |
| `result_info` | `map[string]any` | V4 public API Pagination/Cursor info. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
registration, err := client.Registration(nil).Load(map[string]any{"id": "registration_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(registration) // the loaded record
```

#### Example: List

```go
registrations, err := client.Registration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(registrations) // the array of records
```

#### Example: Create

```go
result, err := client.Registration(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "id": []any{},
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Rule

Create an instance: `rule := client.Rule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### TeamsDevicesApiResponseSingle

Create an instance: `teamsDevicesApiResponseSingle := client.TeamsDevicesApiResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.TeamsDevicesApiResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TeamsDevicesComponentsSchemasResponseCollection

Create an instance: `teamsDevicesComponentsSchemasResponseCollection := client.TeamsDevicesComponentsSchemasResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
teamsDevicesComponentsSchemasResponseCollections, err := client.TeamsDevicesComponentsSchemasResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesComponentsSchemasResponseCollections) // the array of records
```


### TeamsDevicesComponentsSchemasSingle

Create an instance: `teamsDevicesComponentsSchemasSingle := client.TeamsDevicesComponentsSchemasSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `map[string]any` | The configuration object containing information for the WARP client to detect the managed network. |
| `name` | `string` | The name of the device managed network. |
| `result` | `map[string]any` |  |
| `type` | `string` | The type of device managed network. |

#### Example: Load

```go
teamsDevicesComponentsSchemasSingle, err := client.TeamsDevicesComponentsSchemasSingle(nil).Load(map[string]any{"account_id": "account_id", "network_id": "network_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesComponentsSchemasSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.TeamsDevicesComponentsSchemasSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "config": map[string]any{},
    "name": "example_name",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TeamsDevicesDefaultDeviceSetting

Create an instance: `teamsDevicesDefaultDeviceSetting := client.TeamsDevicesDefaultDeviceSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_mode_switch` | `bool` | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `bool` | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `bool` | Whether to allow devices to leave the organization. |
| `auto_connect` | `float64` | The amount of time in seconds to reconnect after having been disabled. |
| `captive_portal` | `float64` | Turn on the captive portal after the specified amount of time. |
| `disable_auto_fallback` | `bool` | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `[]any` | List of DNS search suffixes to apply to clients. |
| `exclude` | `[]any` | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `bool` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `map[string]any` | Global Acceleration settings for China. |
| `include` | `[]any` | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `float64` | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `float64` | The size of the subnet for the local access network. |
| `register_interface_ip_with_dns` | `bool` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `map[string]any` |  |
| `sccm_vpn_boundary_support` | `bool` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `map[string]any` |  |
| `support_url` | `string` | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `bool` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | Determines which tunnel protocol to use. |
| `uninstall_protection` | `bool` | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `map[string]any` | Virtual network access settings for the device. |

#### Example: Load

```go
teamsDevicesDefaultDeviceSetting, err := client.TeamsDevicesDefaultDeviceSetting(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesDefaultDeviceSetting) // the loaded record
```


### TeamsDevicesDevice

Create an instance: `teamsDevicesDevice := client.TeamsDevicesDevice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `map[string]any` |  |

#### Example: Load

```go
teamsDevicesDevice, err := client.TeamsDevicesDevice(nil).Load(map[string]any{"id": "teams_devices_device_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesDevice) // the loaded record
```

#### Example: List

```go
teamsDevicesDevices, err := client.TeamsDevicesDevice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesDevices) // the array of records
```


### TeamsDevicesDeviceSetting

Create an instance: `teamsDevicesDeviceSetting := client.TeamsDevicesDeviceSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_mode_switch` | `bool` | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `bool` | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `bool` | Whether to allow devices to leave the organization. |
| `auto_connect` | `float64` | The amount of time in seconds to reconnect after having been disabled. |
| `browser_extension_config` | `map[string]any` | Browser extension proxy settings. |
| `captive_portal` | `float64` | Turn on the captive portal after the specified amount of time. |
| `default` | `bool` | Whether the policy is the account default. |
| `description` | `string` | A description of the policy. |
| `disable_auto_fallback` | `bool` | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `[]any` | List of DNS search suffixes to apply to clients. |
| `enabled` | `bool` | Whether the policy will be applied to matching devices. |
| `exclude` | `[]any` | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `bool` | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `map[string]any` | Global Acceleration settings for China. |
| `include` | `[]any` | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `float64` | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `float64` | The size of the subnet for the local access network. |
| `match` | `string` | The wirefilter expression to match devices. |
| `name` | `string` | The name of the device settings profile. |
| `precedence` | `float64` | The precedence of the policy. |
| `profile_type` | `string` | The client type to which the device settings profile applies. |
| `register_interface_ip_with_dns` | `bool` | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `map[string]any` |  |
| `sccm_vpn_boundary_support` | `bool` | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `map[string]any` |  |
| `support_url` | `string` | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `bool` | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `string` | Determines which tunnel protocol to use. |
| `uninstall_protection` | `bool` | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `map[string]any` | Virtual network access settings for the device. |

#### Example: Load

```go
teamsDevicesDeviceSetting, err := client.TeamsDevicesDeviceSetting(nil).Load(map[string]any{"account_id": "account_id", "policy_id": "policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesDeviceSetting) // the loaded record
```

#### Example: Create

```go
result, err := client.TeamsDevicesDeviceSetting(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "browser_extension_config": map[string]any{},
    "global_acceleration": map[string]any{},
    "name": "example_name",
    "virtual_networks": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TeamsDevicesDeviceSettingsResponseCollection

Create an instance: `teamsDevicesDeviceSettingsResponseCollection := client.TeamsDevicesDeviceSettingsResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
teamsDevicesDeviceSettingsResponseCollections, err := client.TeamsDevicesDeviceSettingsResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesDeviceSettingsResponseCollections) // the array of records
```


### TeamsDevicesDevicesPolicyCertificatesSingle

Create an instance: `teamsDevicesDevicesPolicyCertificatesSingle := client.TeamsDevicesDevicesPolicyCertificatesSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | The current status of the device policy certificate provisioning feature for WARP clients. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
teamsDevicesDevicesPolicyCertificatesSingle, err := client.TeamsDevicesDevicesPolicyCertificatesSingle(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesDevicesPolicyCertificatesSingle) // the loaded record
```


### TeamsDevicesFallbackDomainResponseCollection

Create an instance: `teamsDevicesFallbackDomainResponseCollection := client.TeamsDevicesFallbackDomainResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
teamsDevicesFallbackDomainResponseCollections, err := client.TeamsDevicesFallbackDomainResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesFallbackDomainResponseCollections) // the array of records
```


### TeamsDevicesGlobalWarpOverride

Create an instance: `teamsDevicesGlobalWarpOverride := client.TeamsDevicesGlobalWarpOverride(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disconnect` | `bool` | Disconnects all devices on the account using Global WARP override. |
| `justification` | `string` | Reasoning for setting the Global WARP override state. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
teamsDevicesGlobalWarpOverride, err := client.TeamsDevicesGlobalWarpOverride(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesGlobalWarpOverride) // the loaded record
```

#### Example: Create

```go
result, err := client.TeamsDevicesGlobalWarpOverride(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "disconnect": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TeamsDevicesId

Create an instance: `teamsDevicesId := client.TeamsDevicesId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### TeamsDevicesOverrideCode

Create an instance: `teamsDevicesOverrideCode := client.TeamsDevicesOverrideCode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
teamsDevicesOverrideCode, err := client.TeamsDevicesOverrideCode(nil).Load(map[string]any{"account_id": "account_id", "device_id": "device_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesOverrideCode) // the loaded record
```


### TeamsDevicesResponseCollection

Create an instance: `teamsDevicesResponseCollection := client.TeamsDevicesResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
teamsDevicesResponseCollections, err := client.TeamsDevicesResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesResponseCollections) // the array of records
```


### TeamsDevicesSchemasId

Create an instance: `teamsDevicesSchemasId := client.TeamsDevicesSchemasId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### TeamsDevicesSchemasResponseCollection

Create an instance: `teamsDevicesSchemasResponseCollection := client.TeamsDevicesSchemasResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
teamsDevicesSchemasResponseCollections, err := client.TeamsDevicesSchemasResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesSchemasResponseCollections) // the array of records
```


### TeamsDevicesSchemasSingle

Create an instance: `teamsDevicesSchemasSingle := client.TeamsDevicesSchemasSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `map[string]any` | The configuration object containing third-party integration information. |
| `interval` | `string` | The interval between each posture check with the third-party API. |
| `name` | `string` | The name of the device posture integration. |
| `result` | `map[string]any` |  |
| `type` | `string` | The type of device posture integration. |

#### Example: Load

```go
teamsDevicesSchemasSingle, err := client.TeamsDevicesSchemasSingle(nil).Load(map[string]any{"account_id": "account_id", "integration_id": "integration_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesSchemasSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.TeamsDevicesSchemasSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "config": map[string]any{},
    "interval": "example_interval",
    "name": "example_name",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TeamsDevicesSingle

Create an instance: `teamsDevicesSingle := client.TeamsDevicesSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | The description of the device posture rule. |
| `expiration` | `string` | Sets the expiration time for a posture check result. |
| `input` | `map[string]any` | The value to be checked against. |
| `match` | `[]any` | The conditions that the client must match to run the rule. |
| `name` | `string` | The name of the device posture rule. |
| `result` | `map[string]any` |  |
| `schedule` | `string` | Polling frequency for the WARP client posture check. |
| `type` | `string` | The type of device posture rule. |

#### Example: Load

```go
teamsDevicesSingle, err := client.TeamsDevicesSingle(nil).Load(map[string]any{"account_id": "account_id", "rule_id": "rule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.TeamsDevicesSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "name": "example_name",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TeamsDevicesSplitTunnelIncludeResponseCollection

Create an instance: `teamsDevicesSplitTunnelIncludeResponseCollection := client.TeamsDevicesSplitTunnelIncludeResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
teamsDevicesSplitTunnelIncludeResponseCollections, err := client.TeamsDevicesSplitTunnelIncludeResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesSplitTunnelIncludeResponseCollections) // the array of records
```


### TeamsDevicesSplitTunnelResponseCollection

Create an instance: `teamsDevicesSplitTunnelResponseCollection := client.TeamsDevicesSplitTunnelResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
teamsDevicesSplitTunnelResponseCollections, err := client.TeamsDevicesSplitTunnelResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesSplitTunnelResponseCollections) // the array of records
```


### TeamsDevicesZeroTrustAccountDeviceSetting

Create an instance: `teamsDevicesZeroTrustAccountDeviceSetting := client.TeamsDevicesZeroTrustAccountDeviceSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disable_for_time` | `float64` | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| `external_emergency_signal_enabled` | `bool` | Controls whether the external emergency disconnect feature is enabled. |
| `external_emergency_signal_fingerprint` | `string` | The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. |
| `external_emergency_signal_interval` | `string` | The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). |
| `external_emergency_signal_url` | `string` | The HTTPS URL from which to fetch the emergency disconnect signal. |
| `gateway_proxy_enabled` | `bool` | Enable gateway proxy filtering on TCP. |
| `gateway_udp_proxy_enabled` | `bool` | Enable gateway proxy filtering on UDP. |
| `result` | `map[string]any` |  |
| `root_certificate_installation_enabled` | `bool` | Enable installation of cloudflare managed root certificate. |
| `use_zt_virtual_ip` | `bool` | Enable using CGNAT virtual IPv4. |

#### Example: Load

```go
teamsDevicesZeroTrustAccountDeviceSetting, err := client.TeamsDevicesZeroTrustAccountDeviceSetting(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamsDevicesZeroTrustAccountDeviceSetting) // the loaded record
```


### Tunnel

Create an instance: `tunnel := client.Tunnel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tunnels, err := client.Tunnel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnels) // the array of records
```


### TunnelCfdTunnelResponseCollection

Create an instance: `tunnelCfdTunnelResponseCollection := client.TunnelCfdTunnelResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tunnelCfdTunnelResponseCollections, err := client.TunnelCfdTunnelResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelCfdTunnelResponseCollections) // the array of records
```


### TunnelCfdTunnelResponseSingle

Create an instance: `tunnelCfdTunnelResponseSingle := client.TunnelCfdTunnelResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config_src` | `string` | Indicates if this is a locally or remotely configured tunnel. |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `name` | `string` | A user-friendly name for a tunnel. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |
| `tunnel_secret` | `string` | Sets the password required to run a locally-managed tunnel. |

#### Example: Load

```go
tunnelCfdTunnelResponseSingle, err := client.TunnelCfdTunnelResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "tunnel_id": "tunnel_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelCfdTunnelResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.TunnelCfdTunnelResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TunnelConfiguration

Create an instance: `tunnelConfiguration := client.TunnelConfiguration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `map[string]any` | The tunnel configuration and ingress rules. |
| `result` | `map[string]any` | Cloudflare Tunnel configuration |

#### Example: Load

```go
tunnelConfiguration, err := client.TunnelConfiguration(nil).Load(map[string]any{"account_id": "account_id", "cfd_tunnel_id": "cfd_tunnel_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelConfiguration) // the loaded record
```


### TunnelEmpty

Create an instance: `tunnelEmpty := client.TunnelEmpty(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_id` | `string` | UUID of the Cloudflare Tunnel connector. |


### TunnelHostnameRouteResponseCollection

Create an instance: `tunnelHostnameRouteResponseCollection := client.TunnelHostnameRouteResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tunnelHostnameRouteResponseCollections, err := client.TunnelHostnameRouteResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelHostnameRouteResponseCollections) // the array of records
```


### TunnelHostnameRouteResponseSingle

Create an instance: `tunnelHostnameRouteResponseSingle := client.TunnelHostnameRouteResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | An optional description of the hostname route. |
| `errors` | `[]any` |  |
| `hostname` | `string` | The hostname of the route. |
| `messages` | `[]any` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |
| `tunnel_id` | `string` | UUID of the tunnel. |

#### Example: Load

```go
tunnelHostnameRouteResponseSingle, err := client.TunnelHostnameRouteResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "hostname_route_id": "hostname_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelHostnameRouteResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.TunnelHostnameRouteResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TunnelMeshConfigurationResponseSingle

Create an instance: `tunnelMeshConfigurationResponseSingle := client.TunnelMeshConfigurationResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `map[string]any` | Provider-specific configuration. |
| `ha_mode` | `string` | High-availability mode for the WARP Connector tunnel. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
tunnelMeshConfigurationResponseSingle, err := client.TunnelMeshConfigurationResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "warp_connector_id": "warp_connector_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelMeshConfigurationResponseSingle) // the loaded record
```


### TunnelRouteResponseSingle

Create an instance: `tunnelRouteResponseSingle := client.TunnelRouteResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | Optional remark describing the route. |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `network` | `string` | The private IPv4 or IPv6 range connected by the route, in CIDR notation. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |
| `tunnel_id` | `string` | UUID of the tunnel. |
| `virtual_network_id` | `string` | UUID of the virtual network. |

#### Example: Load

```go
tunnelRouteResponseSingle, err := client.TunnelRouteResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "route_id": "route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelRouteResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.TunnelRouteResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "network": "example_network",
    "result": "example_result",
    "success": true,
    "tunnel_id": "example_tunnel_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TunnelSubnetResponseCollection

Create an instance: `tunnelSubnetResponseCollection := client.TunnelSubnetResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tunnelSubnetResponseCollections, err := client.TunnelSubnetResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelSubnetResponseCollections) // the array of records
```


### TunnelSubnetResponseSingle

Create an instance: `tunnelSubnetResponseSingle := client.TunnelSubnetResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | An optional description of the subnet. |
| `errors` | `[]any` |  |
| `is_default_network` | `bool` | If `true`, this is the default subnet for the account. |
| `messages` | `[]any` |  |
| `name` | `string` | A user-friendly name for the subnet. |
| `network` | `string` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```go
tunnelSubnetResponseSingle, err := client.TunnelSubnetResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "address_family": "address_family"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelSubnetResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.TunnelSubnetResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "network": "example_network",
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TunnelSubnetResponseSingleNullable

Create an instance: `tunnelSubnetResponseSingleNullable := client.TunnelSubnetResponseSingleNullable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### TunnelTeamnetResponseCollection

Create an instance: `tunnelTeamnetResponseCollection := client.TunnelTeamnetResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tunnelTeamnetResponseCollections, err := client.TunnelTeamnetResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelTeamnetResponseCollections) // the array of records
```


### TunnelTeamnetResponseSingle

Create an instance: `tunnelTeamnetResponseSingle := client.TunnelTeamnetResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```go
tunnelTeamnetResponseSingle, err := client.TunnelTeamnetResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "ip": "ip"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelTeamnetResponseSingle) // the loaded record
```


### TunnelTunnelClient

Create an instance: `tunnelTunnelClient := client.TunnelTunnelClient(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```go
tunnelTunnelClient, err := client.TunnelTunnelClient(nil).Load(map[string]any{"account_id": "account_id", "cfd_tunnel_id": "cfd_tunnel_id", "connector_id": "connector_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelTunnelClient) // the loaded record
```


### TunnelTunnelConnection

Create an instance: `tunnelTunnelConnection := client.TunnelTunnelConnection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tunnelTunnelConnections, err := client.TunnelTunnelConnection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelTunnelConnections) // the array of records
```


### TunnelTunnelResponseToken

Create an instance: `tunnelTunnelResponseToken := client.TunnelTunnelResponseToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `resources` | `[]any` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```go
tunnelTunnelResponseTokens, err := client.TunnelTunnelResponseToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelTunnelResponseTokens) // the array of records
```

#### Example: Create

```go
result, err := client.TunnelTunnelResponseToken(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "cfd_tunnel_id": "example_cfd_tunnel_id",
    "errors": []any{},
    "messages": []any{},
    "resources": []any{},
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TunnelTunnelWarpConnectorClient

Create an instance: `tunnelTunnelWarpConnectorClient := client.TunnelTunnelWarpConnectorClient(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```go
tunnelTunnelWarpConnectorClient, err := client.TunnelTunnelWarpConnectorClient(nil).Load(map[string]any{"account_id": "account_id", "connector_id": "connector_id", "warp_connector_id": "warp_connector_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelTunnelWarpConnectorClient) // the loaded record
```


### TunnelTunnelWarpConnectorConnection

Create an instance: `tunnelTunnelWarpConnectorConnection := client.TunnelTunnelWarpConnectorConnection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tunnelTunnelWarpConnectorConnections, err := client.TunnelTunnelWarpConnectorConnection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelTunnelWarpConnectorConnections) // the array of records
```


### TunnelVnetResponseCollection

Create an instance: `tunnelVnetResponseCollection := client.TunnelVnetResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tunnelVnetResponseCollections, err := client.TunnelVnetResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelVnetResponseCollections) // the array of records
```


### TunnelVnetResponseSingle

Create an instance: `tunnelVnetResponseSingle := client.TunnelVnetResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | Optional remark describing the virtual network. |
| `is_default` | `bool` | If `true`, this virtual network is the default for the account. |
| `is_default_network` | `bool` | If `true`, this virtual network is the default for the account. |
| `name` | `string` | A user-friendly name for the virtual network. |

#### Example: Load

```go
tunnelVnetResponseSingle, err := client.TunnelVnetResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "virtual_network_id": "virtual_network_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelVnetResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.TunnelVnetResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TunnelWarpConnectorResponseCollection

Create an instance: `tunnelWarpConnectorResponseCollection := client.TunnelWarpConnectorResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tunnelWarpConnectorResponseCollections, err := client.TunnelWarpConnectorResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelWarpConnectorResponseCollections) // the array of records
```


### TunnelWarpConnectorResponseSingle

Create an instance: `tunnelWarpConnectorResponseSingle := client.TunnelWarpConnectorResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `ha` | `bool` | Indicates that the tunnel will be created to be highly available. |
| `messages` | `[]any` |  |
| `name` | `string` | A user-friendly name for a tunnel. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |
| `tunnel_secret` | `string` | Sets the password required to run a locally-managed tunnel. |

#### Example: Load

```go
tunnelWarpConnectorResponseSingle, err := client.TunnelWarpConnectorResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "tunnel_id": "tunnel_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelWarpConnectorResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.TunnelWarpConnectorResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "result": "example_result",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TunnelZeroTrustConnectivitySetting

Create an instance: `tunnelZeroTrustConnectivitySetting := client.TunnelZeroTrustConnectivitySetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `icmp_proxy_enabled` | `bool` | A flag to enable the ICMP proxy for the account network. |
| `messages` | `[]any` |  |
| `offramp_warp_enabled` | `bool` | A flag to enable WARP to WARP traffic. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```go
tunnelZeroTrustConnectivitySettings, err := client.TunnelZeroTrustConnectivitySetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tunnelZeroTrustConnectivitySettings) // the array of records
```


### Warp

Create an instance: `warp := client.Warp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | An optional description of the subnet. |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `is_default_network` | `bool` | If `true`, this is the default subnet for the account. |
| `messages` | `[]any` |  |
| `name` | `string` | A user-friendly name for the subnet. |
| `network` | `string` | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `string` | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Whether the API call was successful |

#### Example: Load

```go
warp, err := client.Warp(nil).Load(map[string]any{"id": "warp_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(warp) // the loaded record
```


### WarpChangeEvent

Create an instance: `warpChangeEvent := client.WarpChangeEvent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
warpChangeEvents, err := client.WarpChangeEvent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(warpChangeEvents) // the array of records
```


### WarpTeamsDeviceApiOther

Create an instance: `warpTeamsDeviceApiOther := client.WarpTeamsDeviceApiOther(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
warpTeamsDeviceApiOthers, err := client.WarpTeamsDeviceApiOther(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(warpTeamsDeviceApiOthers) // the array of records
```


### ZeroTrustGatewayApplicationsReviewStatus

Create an instance: `zeroTrustGatewayApplicationsReviewStatus := client.ZeroTrustGatewayApplicationsReviewStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved_apps` | `[]any` | Contains the ids of the approved applications. |
| `in_review_apps` | `[]any` | Contains the ids of the applications in review. |
| `result` | `map[string]any` |  |
| `unapproved_apps` | `[]any` | Contains the ids of the unapproved applications. |

#### Example: Load

```go
zeroTrustGatewayApplicationsReviewStatus, err := client.ZeroTrustGatewayApplicationsReviewStatus(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayApplicationsReviewStatus) // the loaded record
```


### ZeroTrustGatewayCsvOperationSingle

Create an instance: `zeroTrustGatewayCsvOperationSingle := client.ZeroTrustGatewayCsvOperationSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.ZeroTrustGatewayCsvOperationSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ZeroTrustGatewayCustomCertificateSetting

Create an instance: `zeroTrustGatewayCustomCertificateSetting := client.ZeroTrustGatewayCustomCertificateSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `binding_status` | `string` | Indicate the internal certificate status. |
| `enabled` | `bool` | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| `id` | `string` | Specify the UUID of the certificate (ID from MTLS certificate store). |
| `updated_at` | `string` |  |

#### Example: Load

```go
zeroTrustGatewayCustomCertificateSetting, err := client.ZeroTrustGatewayCustomCertificateSetting(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayCustomCertificateSetting) // the loaded record
```


### ZeroTrustGatewayGatewayAccount

Create an instance: `zeroTrustGatewayGatewayAccount := client.ZeroTrustGatewayGatewayAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
zeroTrustGatewayGatewayAccount, err := client.ZeroTrustGatewayGatewayAccount(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayGatewayAccount) // the loaded record
```

#### Example: Create

```go
result, err := client.ZeroTrustGatewayGatewayAccount(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ZeroTrustGatewayGatewayAccountConfig

Create an instance: `zeroTrustGatewayGatewayAccountConfig := client.ZeroTrustGatewayGatewayAccountConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |
| `settings` | `map[string]any` | Specify account settings. |

#### Example: Load

```go
zeroTrustGatewayGatewayAccountConfig, err := client.ZeroTrustGatewayGatewayAccountConfig(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayGatewayAccountConfig) // the loaded record
```


### ZeroTrustGatewayGatewayAccountEgressCidrPairList

Create an instance: `zeroTrustGatewayGatewayAccountEgressCidrPairList := client.ZeroTrustGatewayGatewayAccountEgressCidrPairList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
zeroTrustGatewayGatewayAccountEgressCidrPairLists, err := client.ZeroTrustGatewayGatewayAccountEgressCidrPairList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayGatewayAccountEgressCidrPairLists) // the array of records
```


### ZeroTrustGatewayGatewayAccountLoggingSetting

Create an instance: `zeroTrustGatewayGatewayAccountLoggingSetting := client.ZeroTrustGatewayGatewayAccountLoggingSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `redact_pii` | `bool` | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `result` | `map[string]any` |  |
| `settings_by_rule_type` | `map[string]any` | Configure logging settings for each rule type. |

#### Example: Load

```go
zeroTrustGatewayGatewayAccountLoggingSetting, err := client.ZeroTrustGatewayGatewayAccountLoggingSetting(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayGatewayAccountLoggingSetting) // the loaded record
```


### ZeroTrustGatewayListItemResponseCollection

Create an instance: `zeroTrustGatewayListItemResponseCollection := client.ZeroTrustGatewayListItemResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` | Provide the list items. |
| `result_info` | `map[string]any` |  |

#### Example: List

```go
zeroTrustGatewayListItemResponseCollections, err := client.ZeroTrustGatewayListItemResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayListItemResponseCollections) // the array of records
```


### ZeroTrustGatewayListSingle

Create an instance: `zeroTrustGatewayListSingle := client.ZeroTrustGatewayListSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `append` | `[]any` | Add items to the list. |
| `description` | `string` | Provide the list description. |
| `items` | `[]any` | Add items to the list. |
| `name` | `string` | Specify the list name. |
| `remove` | `[]any` | Lists of item values you want to remove. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
zeroTrustGatewayListSingle, err := client.ZeroTrustGatewayListSingle(nil).Load(map[string]any{"account_id": "account_id", "list_id": "list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayListSingle) // the loaded record
```


### ZeroTrustGatewayResponseCollection

Create an instance: `zeroTrustGatewayResponseCollection := client.ZeroTrustGatewayResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
zeroTrustGatewayResponseCollections, err := client.ZeroTrustGatewayResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayResponseCollections) // the array of records
```


### ZeroTrustGatewayResponseCollection10

Create an instance: `zeroTrustGatewayResponseCollection10 := client.ZeroTrustGatewayResponseCollection10(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |
| `result_info` | `map[string]any` |  |

#### Example: List

```go
zeroTrustGatewayResponseCollection10s, err := client.ZeroTrustGatewayResponseCollection10(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayResponseCollection10s) // the array of records
```


### ZeroTrustGatewayResponseCollection2

Create an instance: `zeroTrustGatewayResponseCollection2 := client.ZeroTrustGatewayResponseCollection2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
zeroTrustGatewayResponseCollection2s, err := client.ZeroTrustGatewayResponseCollection2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayResponseCollection2s) // the array of records
```


### ZeroTrustGatewayResponseCollection3

Create an instance: `zeroTrustGatewayResponseCollection3 := client.ZeroTrustGatewayResponseCollection3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
zeroTrustGatewayResponseCollection3s, err := client.ZeroTrustGatewayResponseCollection3(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayResponseCollection3s) // the array of records
```


### ZeroTrustGatewayResponseCollection4

Create an instance: `zeroTrustGatewayResponseCollection4 := client.ZeroTrustGatewayResponseCollection4(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
zeroTrustGatewayResponseCollection4s, err := client.ZeroTrustGatewayResponseCollection4(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayResponseCollection4s) // the array of records
```


### ZeroTrustGatewayResponseCollection5

Create an instance: `zeroTrustGatewayResponseCollection5 := client.ZeroTrustGatewayResponseCollection5(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
zeroTrustGatewayResponseCollection5s, err := client.ZeroTrustGatewayResponseCollection5(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayResponseCollection5s) // the array of records
```


### ZeroTrustGatewayResponseCollection6

Create an instance: `zeroTrustGatewayResponseCollection6 := client.ZeroTrustGatewayResponseCollection6(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
zeroTrustGatewayResponseCollection6s, err := client.ZeroTrustGatewayResponseCollection6(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayResponseCollection6s) // the array of records
```


### ZeroTrustGatewayResponseCollection7

Create an instance: `zeroTrustGatewayResponseCollection7 := client.ZeroTrustGatewayResponseCollection7(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
zeroTrustGatewayResponseCollection7s, err := client.ZeroTrustGatewayResponseCollection7(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayResponseCollection7s) // the array of records
```


### ZeroTrustGatewayResponseCollection8

Create an instance: `zeroTrustGatewayResponseCollection8 := client.ZeroTrustGatewayResponseCollection8(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
zeroTrustGatewayResponseCollection8s, err := client.ZeroTrustGatewayResponseCollection8(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayResponseCollection8s) // the array of records
```


### ZeroTrustGatewayResponseCollection9

Create an instance: `zeroTrustGatewayResponseCollection9 := client.ZeroTrustGatewayResponseCollection9(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
zeroTrustGatewayResponseCollection9s, err := client.ZeroTrustGatewayResponseCollection9(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewayResponseCollection9s) // the array of records
```


### ZeroTrustGatewaySingle

Create an instance: `zeroTrustGatewaySingle := client.ZeroTrustGatewaySingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |
| `validity_period_days` | `int` | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

#### Example: Load

```go
zeroTrustGatewaySingle, err := client.ZeroTrustGatewaySingle(nil).Load(map[string]any{"account_id": "account_id", "certificate_id": "certificate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewaySingle) // the loaded record
```

#### Example: Create

```go
result, err := client.ZeroTrustGatewaySingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ZeroTrustGatewaySingleResponse2

Create an instance: `zeroTrustGatewaySingleResponse2 := client.ZeroTrustGatewaySingleResponse2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
zeroTrustGatewaySingleResponse2, err := client.ZeroTrustGatewaySingleResponse2(nil).Load(map[string]any{"account_id": "account_id", "operation_id": "operation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewaySingleResponse2) // the loaded record
```


### ZeroTrustGatewaySingleResponse3

Create an instance: `zeroTrustGatewaySingleResponse3 := client.ZeroTrustGatewaySingleResponse3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_default` | `bool` | Indicate whether this location is the default location. |
| `dns_destination_ips_id` | `string` | Specify the identifier of the pair of IPv4 addresses assigned to this location. |
| `ecs_support` | `bool` | Indicate whether the location must resolve EDNS queries. |
| `endpoints` | `map[string]any` | Configure the destination endpoints for this location. |
| `max_ttl` | `map[string]any` | Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. |
| `name` | `string` | Specify the location name. |
| `networks` | `[]any` | Specify the list of network ranges from which requests at this location originate. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
zeroTrustGatewaySingleResponse3, err := client.ZeroTrustGatewaySingleResponse3(nil).Load(map[string]any{"account_id": "account_id", "location_id": "location_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewaySingleResponse3) // the loaded record
```

#### Example: Create

```go
result, err := client.ZeroTrustGatewaySingleResponse3(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "endpoints": map[string]any{},
    "max_ttl": map[string]any{},
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ZeroTrustGatewaySingleResponse4

Create an instance: `zeroTrustGatewaySingleResponse4 := client.ZeroTrustGatewaySingleResponse4(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` | Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`. |
| `description` | `string` | Specify the rule description. |
| `device_posture` | `string` | Specify the wirefilter expression used for device posture check. |
| `enabled` | `bool` | Specify whether the rule is enabled. |
| `expiration` | `map[string]any` | Defines the expiration time stamp and default duration of a DNS policy. |
| `filters` | `[]any` | Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| `identity` | `string` | Specify the wirefilter expression used for identity matching. |
| `name` | `string` | Specify the rule name. |
| `precedence` | `int` | Set the order of your rules. |
| `result` | `map[string]any` |  |
| `rule_settings` | `map[string]any` | Defines settings for this rule. |
| `schedule` | `map[string]any` | Defines the schedule for activating DNS policies. |
| `traffic` | `string` | Specify the wirefilter expression used for traffic matching. |

#### Example: Load

```go
zeroTrustGatewaySingleResponse4, err := client.ZeroTrustGatewaySingleResponse4(nil).Load(map[string]any{"account_id": "account_id", "rule_id": "rule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewaySingleResponse4) // the loaded record
```

#### Example: Create

```go
result, err := client.ZeroTrustGatewaySingleResponse4(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "action": "example_action",
    "expiration": map[string]any{},
    "name": "example_name",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ZeroTrustGatewaySingleResponse5

Create an instance: `zeroTrustGatewaySingleResponse5 := client.ZeroTrustGatewaySingleResponse5(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ips` | `[]any` | Specify the list of CIDRs to restrict ingress connections. |
| `kind` | `string` | The proxy endpoint kind. |
| `name` | `string` | Specify the name of the proxy endpoint. |
| `result` | `any` |  |

#### Example: Load

```go
zeroTrustGatewaySingleResponse5, err := client.ZeroTrustGatewaySingleResponse5(nil).Load(map[string]any{"account_id": "account_id", "proxy_endpoint_id": "proxy_endpoint_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewaySingleResponse5) // the loaded record
```

#### Example: Create

```go
result, err := client.ZeroTrustGatewaySingleResponse5(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ZeroTrustGatewaySingleResponse6

Create an instance: `zeroTrustGatewaySingleResponse6 := client.ZeroTrustGatewaySingleResponse6(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `public_key` | `string` | Provide the Base64-encoded HPKE public key that encrypts SSH session logs. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
zeroTrustGatewaySingleResponse6, err := client.ZeroTrustGatewaySingleResponse6(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewaySingleResponse6) // the loaded record
```

#### Example: Create

```go
result, err := client.ZeroTrustGatewaySingleResponse6(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "public_key": "example_public_key",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ZeroTrustGatewaySingleResponse7

Create an instance: `zeroTrustGatewaySingleResponse7 := client.ZeroTrustGatewaySingleResponse7(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contents` | `string` | Actual contents of the PAC file |
| `description` | `string` | Detailed description of the PAC file. |
| `name` | `string` | Name of the PAC file. |
| `result` | `map[string]any` |  |
| `slug` | `string` | URL-friendly version of the PAC file name. |

#### Example: Load

```go
zeroTrustGatewaySingleResponse7, err := client.ZeroTrustGatewaySingleResponse7(nil).Load(map[string]any{"account_id": "account_id", "pacfile_id": "pacfile_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustGatewaySingleResponse7) // the loaded record
```

#### Example: Create

```go
result, err := client.ZeroTrustGatewaySingleResponse7(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "contents": "example_contents",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ZeroTrustGatewaySingleResponseWithListItem

Create an instance: `zeroTrustGatewaySingleResponseWithListItem := client.ZeroTrustGatewaySingleResponseWithListItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Provide the list description. |
| `items` | `[]any` | Add items to the list. |
| `name` | `string` | Specify the list name. |
| `type` | `string` | Specify the list type. |

#### Example: Create

```go
result, err := client.ZeroTrustGatewaySingleResponseWithListItem(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "name": "example_name",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ZeroTrustRiskScoring

Create an instance: `zeroTrustRiskScoring := client.ZeroTrustRiskScoring(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `behaviors` | `map[string]any` |  |
| `result` | `map[string]any` |  |

#### Example: Load

```go
zeroTrustRiskScoring, err := client.ZeroTrustRiskScoring(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustRiskScoring) // the loaded record
```

#### Example: Create

```go
result, err := client.ZeroTrustRiskScoring(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "zt_risk_scoring_id": "example_zt_risk_scoring_id",
    "behaviors": map[string]any{},
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ZeroTrustRiskScoringIntegration

Create an instance: `zeroTrustRiskScoringIntegration := client.ZeroTrustRiskScoringIntegration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Whether this integration is enabled. |
| `id` | `string` |  |
| `integration_type` | `string` |  |
| `reference_id` | `string` | A reference id that can be supplied by the client. |
| `result` | `map[string]any` |  |
| `tenant_url` | `string` | The base url of the tenant, e.g. |

#### Example: Load

```go
zeroTrustRiskScoringIntegration, err := client.ZeroTrustRiskScoringIntegration(nil).Load(map[string]any{"id": "zero_trust_risk_scoring_integration_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustRiskScoringIntegration) // the loaded record
```

#### Example: List

```go
zeroTrustRiskScoringIntegrations, err := client.ZeroTrustRiskScoringIntegration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zeroTrustRiskScoringIntegrations) // the array of records
```

#### Example: Create

```go
result, err := client.ZeroTrustRiskScoringIntegration(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "active": true,
    "integration_type": "example_integration_type",
    "result": map[string]any{},
    "tenant_url": "example_tenant_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

17 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `teams_devices_response_collection` | `result` | 20 | 3 levels |
| `teams_devices_single` | `input` | 20 | 0 levels |
| `teams_devices_single` | `result` | 20 | 2 levels |
| `teams_devices_schemas_single` | `config` | 8 | 0 levels |
| `dex_remote_command` | `commands` | 3 | 3 levels |
| `tunnel_cfd_tunnel_response_single` | `result` | 3 | 0 levels |
| `tunnel_hostname_route_response_single` | `result` | 3 | 0 levels |
| `tunnel_mesh_configuration_response_single` | `config` | 3 | 0 levels |
| `tunnel_route_response_single` | `result` | 3 | 0 levels |
| `tunnel_subnet_response_single` | `result` | 3 | 0 levels |
| `tunnel_teamnet_response_single` | `result` | 3 | 0 levels |
| `tunnel_tunnel_client` | `result` | 3 | 0 levels |
| `tunnel_tunnel_response_token` | `result` | 3 | 0 levels |
| `tunnel_tunnel_warp_connector_client` | `result` | 3 | 0 levels |
| `tunnel_warp_connector_response_single` | `result` | 3 | 0 levels |
| `tunnel_zero_trust_connectivity_setting` | `result` | 3 | 0 levels |
| `warp` | `result` | 3 | 0 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go/
├── cloudflare-zero-trust.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudflare-zero-trust-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
teamsdevicesglobalwarpoverride := client.TeamsDevicesGlobalWarpOverride(nil)
teamsdevicesglobalwarpoverride.Load(map[string]any{"account_id": "example"}, nil)

// teamsdevicesglobalwarpoverride.Data() now returns the teamsdevicesglobalwarpoverride data from the last load
// teamsdevicesglobalwarpoverride.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
