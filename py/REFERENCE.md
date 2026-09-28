# CloudflareZeroTrust Python SDK Reference

Complete API reference for the CloudflareZeroTrust Python SDK.


## CloudflareZeroTrustSDK

### Constructor

```python
from cloudflarezerotrust_sdk import CloudflareZeroTrustSDK

client = CloudflareZeroTrustSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareZeroTrustSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudflareZeroTrustSDK.test()
```


### Instance Methods

#### `ClientVersion(data=None)`

Create a new `ClientVersionEntity` instance. Pass `None` for no initial data.

#### `Cni(data=None)`

Create a new `CniEntity` instance. Pass `None` for no initial data.

#### `DeploymentGroup(data=None)`

Create a new `DeploymentGroupEntity` instance. Pass `None` for no initial data.

#### `DexRemoteCommand(data=None)`

Create a new `DexRemoteCommandEntity` instance. Pass `None` for no initial data.

#### `DexRule(data=None)`

Create a new `DexRuleEntity` instance. Pass `None` for no initial data.

#### `DexSyntheticApplicationMonitoring(data=None)`

Create a new `DexSyntheticApplicationMonitoringEntity` instance. Pass `None` for no initial data.

#### `DigitalExperienceMonitoringDevice(data=None)`

Create a new `DigitalExperienceMonitoringDeviceEntity` instance. Pass `None` for no initial data.

#### `DigitalExperienceMonitoringDexDeleteResponseCollection(data=None)`

Create a new `DigitalExperienceMonitoringDexDeleteResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `DigitalExperienceMonitoringDexResponseCollection(data=None)`

Create a new `DigitalExperienceMonitoringDexResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `DigitalExperienceMonitoringDexSingle(data=None)`

Create a new `DigitalExperienceMonitoringDexSingleEntity` instance. Pass `None` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusDevice(data=None)`

Create a new `DigitalExperienceMonitoringFleetStatusDeviceEntity` instance. Pass `None` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusLive(data=None)`

Create a new `DigitalExperienceMonitoringFleetStatusLiveEntity` instance. Pass `None` for no initial data.

#### `DigitalExperienceMonitoringFleetStatusOverTime(data=None)`

Create a new `DigitalExperienceMonitoringFleetStatusOverTimeEntity` instance. Pass `None` for no initial data.

#### `Interconnect(data=None)`

Create a new `InterconnectEntity` instance. Pass `None` for no initial data.

#### `IpProfile(data=None)`

Create a new `IpProfileEntity` instance. Pass `None` for no initial data.

#### `List(data=None)`

Create a new `ListEntity` instance. Pass `None` for no initial data.

#### `Location(data=None)`

Create a new `LocationEntity` instance. Pass `None` for no initial data.

#### `NscCni(data=None)`

Create a new `NscCniEntity` instance. Pass `None` for no initial data.

#### `NscDefaultName(data=None)`

Create a new `NscDefaultNameEntity` instance. Pass `None` for no initial data.

#### `NscInterconnect(data=None)`

Create a new `NscInterconnectEntity` instance. Pass `None` for no initial data.

#### `NscSetting(data=None)`

Create a new `NscSettingEntity` instance. Pass `None` for no initial data.

#### `NscSlotInfo(data=None)`

Create a new `NscSlotInfoEntity` instance. Pass `None` for no initial data.

#### `NscStatusInfo(data=None)`

Create a new `NscStatusInfoEntity` instance. Pass `None` for no initial data.

#### `OverrideCode(data=None)`

Create a new `OverrideCodeEntity` instance. Pass `None` for no initial data.

#### `Pacfile(data=None)`

Create a new `PacfileEntity` instance. Pass `None` for no initial data.

#### `PhysicalDevice(data=None)`

Create a new `PhysicalDeviceEntity` instance. Pass `None` for no initial data.

#### `ProxyEndpoint(data=None)`

Create a new `ProxyEndpointEntity` instance. Pass `None` for no initial data.

#### `Registration(data=None)`

Create a new `RegistrationEntity` instance. Pass `None` for no initial data.

#### `Rule(data=None)`

Create a new `RuleEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesApiResponseSingle(data=None)`

Create a new `TeamsDevicesApiResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesComponentsSchemasResponseCollection(data=None)`

Create a new `TeamsDevicesComponentsSchemasResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesComponentsSchemasSingle(data=None)`

Create a new `TeamsDevicesComponentsSchemasSingleEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesDefaultDeviceSetting(data=None)`

Create a new `TeamsDevicesDefaultDeviceSettingEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesDevice(data=None)`

Create a new `TeamsDevicesDeviceEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesDeviceSetting(data=None)`

Create a new `TeamsDevicesDeviceSettingEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesDeviceSettingsResponseCollection(data=None)`

Create a new `TeamsDevicesDeviceSettingsResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesFallbackDomainResponseCollection(data=None)`

Create a new `TeamsDevicesFallbackDomainResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesGlobalWarpOverride(data=None)`

Create a new `TeamsDevicesGlobalWarpOverrideEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesId(data=None)`

Create a new `TeamsDevicesIdEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesOverrideCode(data=None)`

Create a new `TeamsDevicesOverrideCodeEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesResponseCollection(data=None)`

Create a new `TeamsDevicesResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesSchemasId(data=None)`

Create a new `TeamsDevicesSchemasIdEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesSchemasResponseCollection(data=None)`

Create a new `TeamsDevicesSchemasResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesSchemasSingle(data=None)`

Create a new `TeamsDevicesSchemasSingleEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesSingle(data=None)`

Create a new `TeamsDevicesSingleEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesSplitTunnelIncludeResponseCollection(data=None)`

Create a new `TeamsDevicesSplitTunnelIncludeResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesSplitTunnelResponseCollection(data=None)`

Create a new `TeamsDevicesSplitTunnelResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TeamsDevicesZeroTrustAccountDeviceSetting(data=None)`

Create a new `TeamsDevicesZeroTrustAccountDeviceSettingEntity` instance. Pass `None` for no initial data.

#### `Tunnel(data=None)`

Create a new `TunnelEntity` instance. Pass `None` for no initial data.

#### `TunnelCfdTunnelResponseCollection(data=None)`

Create a new `TunnelCfdTunnelResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TunnelCfdTunnelResponseSingle(data=None)`

Create a new `TunnelCfdTunnelResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TunnelConfiguration(data=None)`

Create a new `TunnelConfigurationEntity` instance. Pass `None` for no initial data.

#### `TunnelEmpty(data=None)`

Create a new `TunnelEmptyEntity` instance. Pass `None` for no initial data.

#### `TunnelHostnameRouteResponseCollection(data=None)`

Create a new `TunnelHostnameRouteResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TunnelHostnameRouteResponseSingle(data=None)`

Create a new `TunnelHostnameRouteResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TunnelMeshConfigurationResponseSingle(data=None)`

Create a new `TunnelMeshConfigurationResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TunnelRouteResponseSingle(data=None)`

Create a new `TunnelRouteResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TunnelSubnetResponseCollection(data=None)`

Create a new `TunnelSubnetResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TunnelSubnetResponseSingle(data=None)`

Create a new `TunnelSubnetResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TunnelSubnetResponseSingleNullable(data=None)`

Create a new `TunnelSubnetResponseSingleNullableEntity` instance. Pass `None` for no initial data.

#### `TunnelTeamnetResponseCollection(data=None)`

Create a new `TunnelTeamnetResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TunnelTeamnetResponseSingle(data=None)`

Create a new `TunnelTeamnetResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TunnelTunnelClient(data=None)`

Create a new `TunnelTunnelClientEntity` instance. Pass `None` for no initial data.

#### `TunnelTunnelConnection(data=None)`

Create a new `TunnelTunnelConnectionEntity` instance. Pass `None` for no initial data.

#### `TunnelTunnelResponseToken(data=None)`

Create a new `TunnelTunnelResponseTokenEntity` instance. Pass `None` for no initial data.

#### `TunnelTunnelWarpConnectorClient(data=None)`

Create a new `TunnelTunnelWarpConnectorClientEntity` instance. Pass `None` for no initial data.

#### `TunnelTunnelWarpConnectorConnection(data=None)`

Create a new `TunnelTunnelWarpConnectorConnectionEntity` instance. Pass `None` for no initial data.

#### `TunnelVnetResponseCollection(data=None)`

Create a new `TunnelVnetResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TunnelVnetResponseSingle(data=None)`

Create a new `TunnelVnetResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TunnelWarpConnectorResponseCollection(data=None)`

Create a new `TunnelWarpConnectorResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TunnelWarpConnectorResponseSingle(data=None)`

Create a new `TunnelWarpConnectorResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TunnelZeroTrustConnectivitySetting(data=None)`

Create a new `TunnelZeroTrustConnectivitySettingEntity` instance. Pass `None` for no initial data.

#### `Warp(data=None)`

Create a new `WarpEntity` instance. Pass `None` for no initial data.

#### `WarpChangeEvent(data=None)`

Create a new `WarpChangeEventEntity` instance. Pass `None` for no initial data.

#### `WarpTeamsDeviceApiOther(data=None)`

Create a new `WarpTeamsDeviceApiOtherEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayApplicationsReviewStatus(data=None)`

Create a new `ZeroTrustGatewayApplicationsReviewStatusEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayCsvOperationSingle(data=None)`

Create a new `ZeroTrustGatewayCsvOperationSingleEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayCustomCertificateSetting(data=None)`

Create a new `ZeroTrustGatewayCustomCertificateSettingEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayGatewayAccount(data=None)`

Create a new `ZeroTrustGatewayGatewayAccountEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayGatewayAccountConfig(data=None)`

Create a new `ZeroTrustGatewayGatewayAccountConfigEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayGatewayAccountEgressCidrPairList(data=None)`

Create a new `ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayGatewayAccountLoggingSetting(data=None)`

Create a new `ZeroTrustGatewayGatewayAccountLoggingSettingEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayListItemResponseCollection(data=None)`

Create a new `ZeroTrustGatewayListItemResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayListSingle(data=None)`

Create a new `ZeroTrustGatewayListSingleEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayResponseCollection(data=None)`

Create a new `ZeroTrustGatewayResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayResponseCollection10(data=None)`

Create a new `ZeroTrustGatewayResponseCollection10Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayResponseCollection2(data=None)`

Create a new `ZeroTrustGatewayResponseCollection2Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayResponseCollection3(data=None)`

Create a new `ZeroTrustGatewayResponseCollection3Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayResponseCollection4(data=None)`

Create a new `ZeroTrustGatewayResponseCollection4Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayResponseCollection5(data=None)`

Create a new `ZeroTrustGatewayResponseCollection5Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayResponseCollection6(data=None)`

Create a new `ZeroTrustGatewayResponseCollection6Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayResponseCollection7(data=None)`

Create a new `ZeroTrustGatewayResponseCollection7Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayResponseCollection8(data=None)`

Create a new `ZeroTrustGatewayResponseCollection8Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewayResponseCollection9(data=None)`

Create a new `ZeroTrustGatewayResponseCollection9Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewaySingle(data=None)`

Create a new `ZeroTrustGatewaySingleEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewaySingleResponse2(data=None)`

Create a new `ZeroTrustGatewaySingleResponse2Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewaySingleResponse3(data=None)`

Create a new `ZeroTrustGatewaySingleResponse3Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewaySingleResponse4(data=None)`

Create a new `ZeroTrustGatewaySingleResponse4Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewaySingleResponse5(data=None)`

Create a new `ZeroTrustGatewaySingleResponse5Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewaySingleResponse6(data=None)`

Create a new `ZeroTrustGatewaySingleResponse6Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewaySingleResponse7(data=None)`

Create a new `ZeroTrustGatewaySingleResponse7Entity` instance. Pass `None` for no initial data.

#### `ZeroTrustGatewaySingleResponseWithListItem(data=None)`

Create a new `ZeroTrustGatewaySingleResponseWithListItemEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustRiskScoring(data=None)`

Create a new `ZeroTrustRiskScoringEntity` instance. Pass `None` for no initial data.

#### `ZeroTrustRiskScoringIntegration(data=None)`

Create a new `ZeroTrustRiskScoringIntegrationEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ClientVersionEntity

```python
client_version = client.ClientVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ClientVersion().list({"account_id": "example", "release_track": "example", "target_environment": "example"})
for client_version in results:
    print(client_version)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClientVersionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CniEntity

```python
cni = client.Cni()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Cni().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CniEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeploymentGroupEntity

```python
deployment_group = client.DeploymentGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `name` | `str` | Yes | A user-friendly name for the deployment group. |
| `policy_ids` | `list` | No | Contains an optional list of policy IDs assigned to a group. |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |
| `version_config` | `list` | Yes | Contains at least one version configuration. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `errors` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `messages` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `policy_ids` | - | - | - | - | - |
| `result` | - | - | - | - | - |
| `result_info` | - | - | - | - | - |
| `success` | - | - | - | - | - |
| `version_config` | - | - | - | Yes | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DeploymentGroup().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
    "version_config": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DeploymentGroup().list({"account_id": "example"})
for deployment_group in results:
    print(deployment_group)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DeploymentGroup().load({"id": "deployment_group_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DeploymentGroup().remove({"id": "deployment_group_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DeploymentGroup().update({
    "id": "deployment_group_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DexRemoteCommandEntity

```python
dex_remote_command = client.DexRemoteCommand()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commands` | `list` | Yes | List of device-level commands to execute |
| `result` | `dict` | No |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `commands` | - | - |
| `result` | Yes | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DexRemoteCommand().create({
    "account_id": "example_account_id",  # str
    "commands": [],  # list
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DexRemoteCommand().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DexRemoteCommandEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DexRuleEntity

```python
dex_rule = client.DexRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `match` | `str` | Yes | The wirefilter expression to match. |
| `name` | `str` | Yes | The name of the Rule. |
| `result` | `dict` | No |  |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `description` | - | - | - | - |
| `id` | - | - | - | - |
| `match` | - | - | Yes | - |
| `name` | - | - | Yes | - |
| `result` | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DexRule().create({
    "account_id": "example_account_id",  # str
    "match": "example_match",  # str
    "name": "example_name",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DexRule().load({"id": "dex_rule_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DexRule().remove({"id": "dex_rule_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DexRule().update({
    "id": "dex_rule_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DexRuleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DexSyntheticApplicationMonitoringEntity

```python
dex_synthetic_application_monitoring = client.DexSyntheticApplicationMonitoring()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes | array of colos. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | Yes |
| `success` | - | - |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DexSyntheticApplicationMonitoring().list({"account_id": "example", "from": "example", "to": "example"})
for dex_synthetic_application_monitoring in results:
    print(dex_synthetic_application_monitoring)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DexSyntheticApplicationMonitoring().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DexSyntheticApplicationMonitoringEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DigitalExperienceMonitoringDeviceEntity

```python
digital_experience_monitoring_device = client.DigitalExperienceMonitoringDevice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alwaysOn` | `bool` | No |  |
| `batteryCharging` | `bool` | No |  |
| `batteryCycles` | `int` | No |  |
| `batteryPct` | `float` | No |  |
| `colo` | `str` | Yes | Cloudflare colo airport code. |
| `connectionType` | `str` | No |  |
| `cpuPct` | `float` | No |  |
| `cpuPctByApp` | `list` | No |  |
| `deviceId` | `str` | Yes | Device identifier (UUID v4) |
| `deviceIpv4` | `dict` | No |  |
| `deviceIpv6` | `dict` | No |  |
| `deviceName` | `str` | No | Device identifier (human readable). |
| `deviceRegistration` | `str` | No | Deprecated: use registrationId. |
| `diskReadBps` | `int` | No |  |
| `diskUsagePct` | `float` | No |  |
| `diskWriteBps` | `int` | No |  |
| `dohSubdomain` | `str` | No |  |
| `estimatedLossPct` | `float` | No |  |
| `firewallEnabled` | `bool` | No |  |
| `gatewayIpv4` | `dict` | No |  |
| `gatewayIpv6` | `dict` | No |  |
| `handshakeLatencyMs` | `float` | No |  |
| `ispIpv4` | `dict` | No |  |
| `ispIpv6` | `dict` | No |  |
| `metal` | `str` | No |  |
| `mode` | `str` | Yes | The mode under which the WARP client is run. |
| `networkRcvdBps` | `int` | No |  |
| `networkSentBps` | `int` | No |  |
| `networkSsid` | `str` | No |  |
| `personEmail` | `str` | No | User contact email address |
| `platform` | `str` | Yes | Operating system. |
| `ramAvailableKb` | `int` | No |  |
| `ramUsedPct` | `float` | No |  |
| `ramUsedPctByApp` | `list` | No |  |
| `registrationId` | `str` | No | Device registration identifier (UUID v4). |
| `rtt` | `dict` | No | Round-trip time statistics for the WARP tunnel. |
| `status` | `str` | Yes | Network status. |
| `switchLocked` | `bool` | No |  |
| `timestamp` | `str` | Yes |  |
| `tunnelStats` | `dict` | No | WARP tunnel packet and byte counters. |
| `tunnelType` | `str` | No |  |
| `version` | `str` | Yes | WARP client version. |
| `wifiStrengthDbm` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DigitalExperienceMonitoringDevice().list({"account_id": "example", "device_id": "example", "since_minute": 1})
for digital_experience_monitoring_device in results:
    print(digital_experience_monitoring_device)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringDeviceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DigitalExperienceMonitoringDexDeleteResponseCollectionEntity

```python
digital_experience_monitoring_dex_delete_response_collection = client.DigitalExperienceMonitoringDexDeleteResponseCollection()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DigitalExperienceMonitoringDexDeleteResponseCollection().remove({"account_id": "account_id", "dex_test_id": "dex_test_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringDexDeleteResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DigitalExperienceMonitoringDexResponseCollectionEntity

```python
digital_experience_monitoring_dex_response_collection = client.DigitalExperienceMonitoringDexResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DigitalExperienceMonitoringDexResponseCollection().list({"account_id": "example"})
for digital_experience_monitoring_dex_response_collection in results:
    print(digital_experience_monitoring_dex_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringDexResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DigitalExperienceMonitoringDexSingleEntity

```python
digital_experience_monitoring_dex_single = client.DigitalExperienceMonitoringDexSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `str` | No | Date the test was created, in RFC 3339 format. |
| `data` | `dict` | Yes | The configuration object which contains the details for the WARP client to conduct the test. |
| `description` | `str` | No | Additional details about the test. |
| `enabled` | `bool` | Yes | Determines whether or not the test is active. |
| `interval` | `str` | Yes | How often the test will run. |
| `name` | `str` | Yes | The name of the DEX test. |
| `result` | `dict` | Yes |  |
| `target_policies` | `Any` | No |  |
| `targeted` | `bool` | No |  |
| `test_id` | `str` | No | The unique identifier for the test. |
| `updated` | `str` | No | Date the test was last updated, in RFC 3339 format. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DigitalExperienceMonitoringDexSingle().create({
    "account_id": "example_account_id",  # str
    "data": {},  # dict
    "enabled": True,  # bool
    "interval": "example_interval",  # str
    "name": "example_name",  # str
    "result": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DigitalExperienceMonitoringDexSingle().load({"account_id": "account_id", "dex_test_id": "dex_test_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DigitalExperienceMonitoringDexSingle().update({
    "account_id": "account_id",
    "dex_test_id": "dex_test_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringDexSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusDeviceEntity

```python
digital_experience_monitoring_fleet_status_device = client.DigitalExperienceMonitoringFleetStatusDevice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DigitalExperienceMonitoringFleetStatusDevice().list({"account_id": "example", "from": "example", "page": 1, "per_page": 1, "to": "example"})
for digital_experience_monitoring_fleet_status_device in results:
    print(digital_experience_monitoring_fleet_status_device)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringFleetStatusDeviceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusLiveEntity

```python
digital_experience_monitoring_fleet_status_live = client.DigitalExperienceMonitoringFleetStatusLive()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DigitalExperienceMonitoringFleetStatusLive().load({"account_id": "account_id", "since_minute": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringFleetStatusLiveEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DigitalExperienceMonitoringFleetStatusOverTimeEntity

```python
digital_experience_monitoring_fleet_status_over_time = client.DigitalExperienceMonitoringFleetStatusOverTime()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DigitalExperienceMonitoringFleetStatusOverTime().load({"account_id": "account_id", "from": "from", "to": "to"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DigitalExperienceMonitoringFleetStatusOverTimeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InterconnectEntity

```python
interconnect = client.Interconnect()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Interconnect().load({"account_id": "account_id", "icon": "icon"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Interconnect().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InterconnectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IpProfileEntity

```python
ip_profile = client.IpProfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | An optional description of the Device IP profile. |
| `enabled` | `bool` | No | Whether the Device IP profile will be applied to matching devices. |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `match` | `str` | Yes | The wirefilter expression to match registrations. |
| `messages` | `list` | Yes |  |
| `name` | `str` | Yes | A user-friendly name for the Device IP profile. |
| `precedence` | `int` | Yes | The precedence of the Device IP profile. |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `subnet_id` | `str` | Yes | The ID of the Subnet. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `enabled` | - | - | - | - | - |
| `errors` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `match` | - | - | - | Yes | - |
| `messages` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `precedence` | - | - | - | Yes | - |
| `result` | - | - | - | - | - |
| `result_info` | - | - | - | - | - |
| `subnet_id` | - | - | - | Yes | - |
| `success` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IpProfile().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "match": "example_match",  # str
    "messages": [],  # list
    "name": "example_name",  # str
    "precedence": 1,  # int
    "result": {},  # dict
    "result_info": {},  # dict
    "subnet_id": "example_subnet_id",  # str
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IpProfile().list({"account_id": "example"})
for ip_profile in results:
    print(ip_profile)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IpProfile().load({"id": "ip_profile_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.IpProfile().remove({"id": "ip_profile_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IpProfile().update({
    "id": "ip_profile_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpProfileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListEntity

```python
list = client.List()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.List().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LocationEntity

```python
location = client.Location()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Location().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LocationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NscCniEntity

```python
nsc_cni = client.NscCni()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `str` | Yes | Customer account tag |
| `bgp` | `dict` | Yes |  |
| `bgp_mode` | `str` | No | The BGP mode for a CNI. |
| `cust_ip` | `str` | Yes | Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`. |
| `id` | `str` | Yes |  |
| `interconnect` | `str` | Yes | Interconnect identifier hosting this CNI |
| `magic` | `dict` | Yes |  |
| `p2p_ip` | `str` | Yes | Cloudflare end of the point-to-point link |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.NscCni().create({
    "account_id": "example_account_id",  # str
    "account": "example_account",  # str
    "bgp": {},  # dict
    "cust_ip": "example_cust_ip",  # str
    "id": "example_id",  # str
    "interconnect": "example_interconnect",  # str
    "magic": {},  # dict
    "p2p_ip": "example_p2p_ip",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NscCni().list({"account_id": "example"})
for nsc_cni in results:
    print(nsc_cni)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NscCni().load({"id": "nsc_cni_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NscCni().update({
    "id": "nsc_cni_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NscCniEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NscDefaultNameEntity

```python
nsc_default_name = client.NscDefaultName()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `str` | Yes | The default customer name for the interconnect |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NscDefaultName().load({"account_id": "account_id", "interconnect_id": "interconnect_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NscDefaultNameEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NscInterconnectEntity

```python
nsc_interconnect = client.NscInterconnect()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `items` | `list` | Yes |  |
| `next` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.NscInterconnect().create({
    "account_id": "example_account_id",  # str
    "items": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NscInterconnect().list({"account_id": "example"})
for nsc_interconnect in results:
    print(nsc_interconnect)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NscInterconnect().load({"id": "nsc_interconnect_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NscInterconnectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NscSettingEntity

```python
nsc_setting = client.NscSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_asn` | `int` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `default_asn` | - | Yes |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NscSetting().load({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NscSetting().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NscSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NscSlotInfoEntity

```python
nsc_slot_info = client.NscSlotInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `str` | No | Customer account tag |
| `address` | `list` | Yes |  |
| `ccr_device_name` | `str` | No |  |
| `facility` | `dict` | Yes |  |
| `id` | `str` | Yes | Slot ID |
| `name` | `str` | Yes |  |
| `occupied` | `bool` | Yes | Whether the slot is occupied or not |
| `site` | `str` | Yes |  |
| `speed` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NscSlotInfo().list({"account_id": "example"})
for nsc_slot_info in results:
    print(nsc_slot_info)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NscSlotInfo().load({"account_id": "account_id", "slot": "slot"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NscSlotInfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NscStatusInfoEntity

```python
nsc_status_info = client.NscStatusInfo()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NscStatusInfo().load({"account_id": "account_id", "icon": "icon"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NscStatusInfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OverrideCodeEntity

```python
override_code = client.OverrideCode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `device_id` | `str` | No | Physical device ID. |
| `duration_hours` | `int` | Yes | Number of hours for which the override code should remain valid. |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `scope` | `str` | Yes | Whether the code applies to every device in the account or one physical device. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `type` | `str` | Yes | The feature that the override code applies to. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OverrideCode().create({
    "account_id": "example_account_id",  # str
    "duration_hours": 1,  # int
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "scope": "example_scope",  # str
    "success": True,  # bool
    "type": "example_type",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OverrideCodeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PacfileEntity

```python
pacfile = client.Pacfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Pacfile().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PacfileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PhysicalDeviceEntity

```python
physical_device = client.PhysicalDevice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes | A WARP Device. |
| `result_info` | `dict` | Yes | V4 public API Pagination/Cursor info. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `tags` | `dict` | No | Replaces all tags assigned to the physical device. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PhysicalDevice().create({
    "account_id": "example_account_id",  # str
    "id": "example_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PhysicalDevice().list({"account_id": "example"})
for physical_device in results:
    print(physical_device)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PhysicalDevice().load({"id": "physical_device_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PhysicalDevice().remove({"id": "physical_device_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PhysicalDevice().update({
    "id": "physical_device_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PhysicalDeviceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProxyEndpointEntity

```python
proxy_endpoint = client.ProxyEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProxyEndpoint().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProxyEndpointEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RegistrationEntity

```python
registration = client.Registration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes | A WARP configuration tied to a single user. |
| `result_info` | `dict` | Yes | V4 public API Pagination/Cursor info. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Registration().create({
    "account_id": "example_account_id",  # str
    "id": [],  # list
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Registration().list({"account_id": "example"})
for registration in results:
    print(registration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Registration().load({"id": "registration_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Registration().remove({"id": "registration_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegistrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RuleEntity

```python
rule = client.Rule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Rule().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RuleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesApiResponseSingleEntity

```python
teams_devices_api_response_single = client.TeamsDevicesApiResponseSingle()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TeamsDevicesApiResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesApiResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesComponentsSchemasResponseCollectionEntity

```python
teams_devices_components_schemas_response_collection = client.TeamsDevicesComponentsSchemasResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TeamsDevicesComponentsSchemasResponseCollection().list({"account_id": "example"})
for teams_devices_components_schemas_response_collection in results:
    print(teams_devices_components_schemas_response_collection)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TeamsDevicesComponentsSchemasResponseCollection().remove({"account_id": "account_id", "network_id": "network_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesComponentsSchemasResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesComponentsSchemasSingleEntity

```python
teams_devices_components_schemas_single = client.TeamsDevicesComponentsSchemasSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `dict` | Yes | The configuration object containing information for the WARP client to detect the managed network. |
| `name` | `str` | Yes | The name of the device managed network. |
| `result` | `dict` | No |  |
| `type` | `str` | Yes | The type of device managed network. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `config` | - | - | Yes |
| `name` | - | - | Yes |
| `result` | - | - | - |
| `type` | - | - | Yes |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TeamsDevicesComponentsSchemasSingle().create({
    "account_id": "example_account_id",  # str
    "config": {},  # dict
    "name": "example_name",  # str
    "type": "example_type",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TeamsDevicesComponentsSchemasSingle().load({"account_id": "account_id", "network_id": "network_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TeamsDevicesComponentsSchemasSingle().update({
    "account_id": "account_id",
    "network_id": "network_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesComponentsSchemasSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesDefaultDeviceSettingEntity

```python
teams_devices_default_device_setting = client.TeamsDevicesDefaultDeviceSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_mode_switch` | `bool` | No | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `bool` | No | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `bool` | No | Whether to allow devices to leave the organization. |
| `auto_connect` | `float` | No | The amount of time in seconds to reconnect after having been disabled. |
| `captive_portal` | `float` | No | Turn on the captive portal after the specified amount of time. |
| `disable_auto_fallback` | `bool` | No | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `list` | No | List of DNS search suffixes to apply to clients. |
| `exclude` | `list` | No | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `bool` | No | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `dict` | Yes | Global Acceleration settings for China. |
| `include` | `list` | No | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `float` | No | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `float` | No | The size of the subnet for the local access network. |
| `register_interface_ip_with_dns` | `bool` | No | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `dict` | No |  |
| `sccm_vpn_boundary_support` | `bool` | No | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `dict` | No |  |
| `support_url` | `str` | No | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `bool` | No | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `str` | No | Determines which tunnel protocol to use. |
| `uninstall_protection` | `bool` | No | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `dict` | Yes | Virtual network access settings for the device. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TeamsDevicesDefaultDeviceSetting().load({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TeamsDevicesDefaultDeviceSetting().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesDefaultDeviceSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesDeviceEntity

```python
teams_devices_device = client.TeamsDevicesDevice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `result` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TeamsDevicesDevice().list({"account_id": "example"})
for teams_devices_device in results:
    print(teams_devices_device)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TeamsDevicesDevice().load({"id": "teams_devices_device_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesDeviceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesDeviceSettingEntity

```python
teams_devices_device_setting = client.TeamsDevicesDeviceSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_mode_switch` | `bool` | No | Whether to allow the user to switch WARP between modes. |
| `allow_updates` | `bool` | No | Whether to receive update notifications when a new version of the client is available. |
| `allowed_to_leave` | `bool` | No | Whether to allow devices to leave the organization. |
| `auto_connect` | `float` | No | The amount of time in seconds to reconnect after having been disabled. |
| `browser_extension_config` | `dict` | Yes | Browser extension proxy settings. |
| `captive_portal` | `float` | No | Turn on the captive portal after the specified amount of time. |
| `default` | `bool` | No | Whether the policy is the account default. |
| `description` | `str` | No | A description of the policy. |
| `disable_auto_fallback` | `bool` | No | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| `dns_search_suffixes` | `list` | No | List of DNS search suffixes to apply to clients. |
| `enabled` | `bool` | No | Whether the policy will be applied to matching devices. |
| `exclude` | `list` | No | List of routes excluded in the WARP client's tunnel. |
| `exclude_office_ips` | `bool` | No | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| `global_acceleration` | `dict` | Yes | Global Acceleration settings for China. |
| `include` | `list` | No | List of routes included in the WARP client's tunnel. |
| `lan_allow_minutes` | `float` | No | The amount of time in minutes a user is allowed access to their LAN. |
| `lan_allow_subnet_size` | `float` | No | The size of the subnet for the local access network. |
| `match` | `str` | No | The wirefilter expression to match devices. |
| `name` | `str` | Yes | The name of the device settings profile. |
| `precedence` | `float` | No | The precedence of the policy. |
| `profile_type` | `str` | No | The client type to which the device settings profile applies. |
| `register_interface_ip_with_dns` | `bool` | No | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| `result` | `dict` | No |  |
| `sccm_vpn_boundary_support` | `bool` | No | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. |
| `service_mode_v2` | `dict` | No |  |
| `support_url` | `str` | No | The URL to launch when the Send Feedback button is clicked. |
| `switch_locked` | `bool` | No | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| `tunnel_protocol` | `str` | No | Determines which tunnel protocol to use. |
| `uninstall_protection` | `bool` | No | Determines whether uninstalling the WARP client requires an override code. |
| `virtual_networks` | `dict` | Yes | Virtual network access settings for the device. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `allow_mode_switch` | - | - | - |
| `allow_updates` | - | - | - |
| `allowed_to_leave` | - | - | - |
| `auto_connect` | - | - | - |
| `browser_extension_config` | - | - | - |
| `captive_portal` | - | - | - |
| `default` | - | - | - |
| `description` | - | - | - |
| `disable_auto_fallback` | - | - | - |
| `dns_search_suffixes` | - | - | - |
| `enabled` | - | - | - |
| `exclude` | - | - | - |
| `exclude_office_ips` | - | - | - |
| `global_acceleration` | - | - | - |
| `include` | - | - | - |
| `lan_allow_minutes` | - | - | - |
| `lan_allow_subnet_size` | - | - | - |
| `match` | - | - | - |
| `name` | - | - | Yes |
| `precedence` | - | - | - |
| `profile_type` | - | - | - |
| `register_interface_ip_with_dns` | - | - | - |
| `result` | - | - | - |
| `sccm_vpn_boundary_support` | - | - | - |
| `service_mode_v2` | - | - | - |
| `support_url` | - | - | - |
| `switch_locked` | - | - | - |
| `tunnel_protocol` | - | - | - |
| `uninstall_protection` | - | - | - |
| `virtual_networks` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TeamsDevicesDeviceSetting().create({
    "account_id": "example_account_id",  # str
    "browser_extension_config": {},  # dict
    "global_acceleration": {},  # dict
    "name": "example_name",  # str
    "virtual_networks": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TeamsDevicesDeviceSetting().load({"account_id": "account_id", "policy_id": "policy_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TeamsDevicesDeviceSetting().update({
    "account_id": "account_id",
    "policy_id": "policy_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesDeviceSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesDeviceSettingsResponseCollectionEntity

```python
teams_devices_device_settings_response_collection = client.TeamsDevicesDeviceSettingsResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TeamsDevicesDeviceSettingsResponseCollection().list({"account_id": "example"})
for teams_devices_device_settings_response_collection in results:
    print(teams_devices_device_settings_response_collection)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TeamsDevicesDeviceSettingsResponseCollection().remove({"account_id": "account_id", "policy_id": "policy_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesDeviceSettingsResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesFallbackDomainResponseCollectionEntity

```python
teams_devices_fallback_domain_response_collection = client.TeamsDevicesFallbackDomainResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TeamsDevicesFallbackDomainResponseCollection().list({"account_id": "example"})
for teams_devices_fallback_domain_response_collection in results:
    print(teams_devices_fallback_domain_response_collection)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TeamsDevicesFallbackDomainResponseCollection().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TeamsDevicesFallbackDomainResponseCollection().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesFallbackDomainResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesGlobalWarpOverrideEntity

```python
teams_devices_global_warp_override = client.TeamsDevicesGlobalWarpOverride()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disconnect` | `bool` | Yes | Disconnects all devices on the account using Global WARP override. |
| `justification` | `str` | No | Reasoning for setting the Global WARP override state. |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TeamsDevicesGlobalWarpOverride().create({
    "account_id": "example_account_id",  # str
    "disconnect": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TeamsDevicesGlobalWarpOverride().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesGlobalWarpOverrideEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesIdEntity

```python
teams_devices_id = client.TeamsDevicesId()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TeamsDevicesId().remove({"account_id": "account_id", "rule_id": "rule_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesIdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesOverrideCodeEntity

```python
teams_devices_override_code = client.TeamsDevicesOverrideCode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TeamsDevicesOverrideCode().load({"account_id": "account_id", "device_id": "device_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesOverrideCodeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesResponseCollectionEntity

```python
teams_devices_response_collection = client.TeamsDevicesResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TeamsDevicesResponseCollection().list({"account_id": "example"})
for teams_devices_response_collection in results:
    print(teams_devices_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesSchemasIdEntity

```python
teams_devices_schemas_id = client.TeamsDevicesSchemasId()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TeamsDevicesSchemasId().remove({"account_id": "account_id", "integration_id": "integration_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesSchemasIdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesSchemasResponseCollectionEntity

```python
teams_devices_schemas_response_collection = client.TeamsDevicesSchemasResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TeamsDevicesSchemasResponseCollection().list({"account_id": "example"})
for teams_devices_schemas_response_collection in results:
    print(teams_devices_schemas_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesSchemasResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesSchemasSingleEntity

```python
teams_devices_schemas_single = client.TeamsDevicesSchemasSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `dict` | Yes | The configuration object containing third-party integration information. |
| `interval` | `str` | Yes | The interval between each posture check with the third-party API. |
| `name` | `str` | Yes | The name of the device posture integration. |
| `result` | `dict` | No |  |
| `type` | `str` | Yes | The type of device posture integration. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `config` | - | - | Yes |
| `interval` | - | - | Yes |
| `name` | - | - | Yes |
| `result` | - | - | - |
| `type` | - | - | Yes |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TeamsDevicesSchemasSingle().create({
    "account_id": "example_account_id",  # str
    "config": {},  # dict
    "interval": "example_interval",  # str
    "name": "example_name",  # str
    "type": "example_type",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TeamsDevicesSchemasSingle().load({"account_id": "account_id", "integration_id": "integration_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TeamsDevicesSchemasSingle().update({
    "account_id": "account_id",
    "integration_id": "integration_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesSchemasSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesSingleEntity

```python
teams_devices_single = client.TeamsDevicesSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | The description of the device posture rule. |
| `expiration` | `str` | No | Sets the expiration time for a posture check result. |
| `input` | `dict` | No | The value to be checked against. |
| `match` | `list` | No | The conditions that the client must match to run the rule. |
| `name` | `str` | Yes | The name of the device posture rule. |
| `result` | `dict` | No |  |
| `schedule` | `str` | No | Polling frequency for the WARP client posture check. |
| `type` | `str` | Yes | The type of device posture rule. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TeamsDevicesSingle().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "type": "example_type",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TeamsDevicesSingle().load({"account_id": "account_id", "rule_id": "rule_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TeamsDevicesSingle().update({
    "account_id": "account_id",
    "rule_id": "rule_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesSplitTunnelIncludeResponseCollectionEntity

```python
teams_devices_split_tunnel_include_response_collection = client.TeamsDevicesSplitTunnelIncludeResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TeamsDevicesSplitTunnelIncludeResponseCollection().list({"account_id": "example"})
for teams_devices_split_tunnel_include_response_collection in results:
    print(teams_devices_split_tunnel_include_response_collection)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TeamsDevicesSplitTunnelIncludeResponseCollection().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesSplitTunnelIncludeResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesSplitTunnelResponseCollectionEntity

```python
teams_devices_split_tunnel_response_collection = client.TeamsDevicesSplitTunnelResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TeamsDevicesSplitTunnelResponseCollection().list({"account_id": "example"})
for teams_devices_split_tunnel_response_collection in results:
    print(teams_devices_split_tunnel_response_collection)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TeamsDevicesSplitTunnelResponseCollection().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TeamsDevicesSplitTunnelResponseCollection().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesSplitTunnelResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamsDevicesZeroTrustAccountDeviceSettingEntity

```python
teams_devices_zero_trust_account_device_setting = client.TeamsDevicesZeroTrustAccountDeviceSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disable_for_time` | `float` | No | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| `external_emergency_signal_enabled` | `bool` | No | Controls whether the external emergency disconnect feature is enabled. |
| `external_emergency_signal_fingerprint` | `str` | No | The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. |
| `external_emergency_signal_interval` | `str` | No | The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). |
| `external_emergency_signal_url` | `str` | No | The HTTPS URL from which to fetch the emergency disconnect signal. |
| `gateway_proxy_enabled` | `bool` | No | Enable gateway proxy filtering on TCP. |
| `gateway_udp_proxy_enabled` | `bool` | No | Enable gateway proxy filtering on UDP. |
| `result` | `dict` | No |  |
| `root_certificate_installation_enabled` | `bool` | No | Enable installation of cloudflare managed root certificate. |
| `use_zt_virtual_ip` | `bool` | No | Enable using CGNAT virtual IPv4. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TeamsDevicesZeroTrustAccountDeviceSetting().load({"account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TeamsDevicesZeroTrustAccountDeviceSetting().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TeamsDevicesZeroTrustAccountDeviceSetting().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamsDevicesZeroTrustAccountDeviceSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelEntity

```python
tunnel = client.Tunnel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Tunnel().list({"account_id": "example"})
for tunnel in results:
    print(tunnel)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelCfdTunnelResponseCollectionEntity

```python
tunnel_cfd_tunnel_response_collection = client.TunnelCfdTunnelResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TunnelCfdTunnelResponseCollection().list({"account_id": "example"})
for tunnel_cfd_tunnel_response_collection in results:
    print(tunnel_cfd_tunnel_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelCfdTunnelResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelCfdTunnelResponseSingleEntity

```python
tunnel_cfd_tunnel_response_single = client.TunnelCfdTunnelResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config_src` | `str` | No | Indicates if this is a locally or remotely configured tunnel. |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `name` | `str` | Yes | A user-friendly name for a tunnel. |
| `result` | `str` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |
| `tunnel_secret` | `str` | No | Sets the password required to run a locally-managed tunnel. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `config_src` | - | - | - | - |
| `errors` | - | - | - | - |
| `messages` | - | - | - | - |
| `name` | - | - | Yes | - |
| `result` | Yes | - | - | - |
| `success` | - | - | - | - |
| `tunnel_secret` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TunnelCfdTunnelResponseSingle().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "result": "example_result",  # str
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TunnelCfdTunnelResponseSingle().load({"account_id": "account_id", "tunnel_id": "tunnel_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TunnelCfdTunnelResponseSingle().remove({"account_id": "account_id", "tunnel_id": "tunnel_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TunnelCfdTunnelResponseSingle().update({
    "account_id": "account_id",
    "tunnel_id": "tunnel_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelCfdTunnelResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelConfigurationEntity

```python
tunnel_configuration = client.TunnelConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `dict` | No | The tunnel configuration and ingress rules. |
| `result` | `dict` | No | Cloudflare Tunnel configuration |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TunnelConfiguration().load({"account_id": "account_id", "cfd_tunnel_id": "cfd_tunnel_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TunnelConfiguration().update({
    "account_id": "account_id",
    "cfd_tunnel_id": "cfd_tunnel_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelConfigurationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelEmptyEntity

```python
tunnel_empty = client.TunnelEmpty()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `str` | Yes | UUID of the Cloudflare Tunnel connector. |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TunnelEmpty().remove({"account_id": "account_id", "cfd_tunnel_id": "cfd_tunnel_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TunnelEmpty().update({
    "account_id": "account_id",
    "warp_connector_id": "warp_connector_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelEmptyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelHostnameRouteResponseCollectionEntity

```python
tunnel_hostname_route_response_collection = client.TunnelHostnameRouteResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TunnelHostnameRouteResponseCollection().list({"account_id": "example"})
for tunnel_hostname_route_response_collection in results:
    print(tunnel_hostname_route_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelHostnameRouteResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelHostnameRouteResponseSingleEntity

```python
tunnel_hostname_route_response_single = client.TunnelHostnameRouteResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `str` | No | An optional description of the hostname route. |
| `errors` | `list` | Yes |  |
| `hostname` | `str` | No | The hostname of the route. |
| `messages` | `list` | Yes |  |
| `result` | `str` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |
| `tunnel_id` | `str` | No | UUID of the tunnel. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `comment` | - | - | - | - |
| `errors` | - | - | - | - |
| `hostname` | - | - | - | - |
| `messages` | - | - | - | - |
| `result` | Yes | - | - | - |
| `success` | - | - | - | - |
| `tunnel_id` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TunnelHostnameRouteResponseSingle().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": "example_result",  # str
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TunnelHostnameRouteResponseSingle().load({"account_id": "account_id", "hostname_route_id": "hostname_route_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TunnelHostnameRouteResponseSingle().remove({"account_id": "account_id", "hostname_route_id": "hostname_route_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TunnelHostnameRouteResponseSingle().update({
    "account_id": "account_id",
    "hostname_route_id": "hostname_route_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelHostnameRouteResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelMeshConfigurationResponseSingleEntity

```python
tunnel_mesh_configuration_response_single = client.TunnelMeshConfigurationResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `dict` | No | Provider-specific configuration. |
| `ha_mode` | `str` | Yes | High-availability mode for the WARP Connector tunnel. |
| `result` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TunnelMeshConfigurationResponseSingle().load({"account_id": "account_id", "warp_connector_id": "warp_connector_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TunnelMeshConfigurationResponseSingle().update({
    "account_id": "account_id",
    "warp_connector_id": "warp_connector_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelMeshConfigurationResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelRouteResponseSingleEntity

```python
tunnel_route_response_single = client.TunnelRouteResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `str` | No | Optional remark describing the route. |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `network` | `str` | Yes | The private IPv4 or IPv6 range connected by the route, in CIDR notation. |
| `result` | `str` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |
| `tunnel_id` | `str` | Yes | UUID of the tunnel. |
| `virtual_network_id` | `str` | No | UUID of the virtual network. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `comment` | - | - | - | - |
| `errors` | - | - | - | - |
| `messages` | - | - | - | - |
| `network` | - | - | Yes | - |
| `result` | Yes | - | Yes | - |
| `success` | - | - | - | - |
| `tunnel_id` | - | - | Yes | - |
| `virtual_network_id` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TunnelRouteResponseSingle().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "network": "example_network",  # str
    "result": "example_result",  # str
    "success": True,  # bool
    "tunnel_id": "example_tunnel_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TunnelRouteResponseSingle().load({"account_id": "account_id", "route_id": "route_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TunnelRouteResponseSingle().remove({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TunnelRouteResponseSingle().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelRouteResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelSubnetResponseCollectionEntity

```python
tunnel_subnet_response_collection = client.TunnelSubnetResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TunnelSubnetResponseCollection().list({"account_id": "example"})
for tunnel_subnet_response_collection in results:
    print(tunnel_subnet_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelSubnetResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelSubnetResponseSingleEntity

```python
tunnel_subnet_response_single = client.TunnelSubnetResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `str` | No | An optional description of the subnet. |
| `errors` | `list` | Yes |  |
| `is_default_network` | `bool` | No | If `true`, this is the default subnet for the account. |
| `messages` | `list` | Yes |  |
| `name` | `str` | Yes | A user-friendly name for the subnet. |
| `network` | `str` | Yes | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `str` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `comment` | - | - | - |
| `errors` | - | - | - |
| `is_default_network` | - | - | - |
| `messages` | - | - | - |
| `name` | - | - | Yes |
| `network` | - | - | Yes |
| `result` | Yes | - | - |
| `success` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TunnelSubnetResponseSingle().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "network": "example_network",  # str
    "result": "example_result",  # str
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TunnelSubnetResponseSingle().load({"account_id": "account_id", "address_family": "address_family"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TunnelSubnetResponseSingle().update({
    "account_id": "account_id",
    "address_family": "address_family",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelSubnetResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelSubnetResponseSingleNullableEntity

```python
tunnel_subnet_response_single_nullable = client.TunnelSubnetResponseSingleNullable()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TunnelSubnetResponseSingleNullable().remove({"account_id": "account_id", "subnet_id": "subnet_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelSubnetResponseSingleNullableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelTeamnetResponseCollectionEntity

```python
tunnel_teamnet_response_collection = client.TunnelTeamnetResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TunnelTeamnetResponseCollection().list({"account_id": "example"})
for tunnel_teamnet_response_collection in results:
    print(tunnel_teamnet_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTeamnetResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelTeamnetResponseSingleEntity

```python
tunnel_teamnet_response_single = client.TunnelTeamnetResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `str` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TunnelTeamnetResponseSingle().load({"account_id": "account_id", "ip": "ip"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTeamnetResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelTunnelClientEntity

```python
tunnel_tunnel_client = client.TunnelTunnelClient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `str` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TunnelTunnelClient().load({"account_id": "account_id", "cfd_tunnel_id": "cfd_tunnel_id", "connector_id": "connector_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTunnelClientEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelTunnelConnectionEntity

```python
tunnel_tunnel_connection = client.TunnelTunnelConnection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TunnelTunnelConnection().list({"account_id": "example", "cfd_tunnel_id": "example"})
for tunnel_tunnel_connection in results:
    print(tunnel_tunnel_connection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTunnelConnectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelTunnelResponseTokenEntity

```python
tunnel_tunnel_response_token = client.TunnelTunnelResponseToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `resources` | `list` | Yes |  |
| `result` | `str` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `resources` | - | - |
| `result` | Yes | - |
| `success` | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TunnelTunnelResponseToken().create({
    "account_id": "example_account_id",  # str
    "cfd_tunnel_id": "example_cfd_tunnel_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "resources": [],  # list
    "result": "example_result",  # str
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TunnelTunnelResponseToken().list({"account_id": "example"})
for tunnel_tunnel_response_token in results:
    print(tunnel_tunnel_response_token)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTunnelResponseTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelTunnelWarpConnectorClientEntity

```python
tunnel_tunnel_warp_connector_client = client.TunnelTunnelWarpConnectorClient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `str` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `errors` | - |
| `messages` | - |
| `result` | Yes |
| `success` | - |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TunnelTunnelWarpConnectorClient().load({"account_id": "account_id", "connector_id": "connector_id", "warp_connector_id": "warp_connector_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTunnelWarpConnectorClientEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelTunnelWarpConnectorConnectionEntity

```python
tunnel_tunnel_warp_connector_connection = client.TunnelTunnelWarpConnectorConnection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TunnelTunnelWarpConnectorConnection().list({"account_id": "example", "warp_connector_id": "example"})
for tunnel_tunnel_warp_connector_connection in results:
    print(tunnel_tunnel_warp_connector_connection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelTunnelWarpConnectorConnectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelVnetResponseCollectionEntity

```python
tunnel_vnet_response_collection = client.TunnelVnetResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TunnelVnetResponseCollection().list({"account_id": "example"})
for tunnel_vnet_response_collection in results:
    print(tunnel_vnet_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelVnetResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelVnetResponseSingleEntity

```python
tunnel_vnet_response_single = client.TunnelVnetResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `str` | No | Optional remark describing the virtual network. |
| `is_default` | `bool` | No | If `true`, this virtual network is the default for the account. |
| `is_default_network` | `bool` | No | If `true`, this virtual network is the default for the account. |
| `name` | `str` | No | A user-friendly name for the virtual network. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `comment` | - | - | - | - |
| `is_default` | - | - | - | - |
| `is_default_network` | - | - | - | - |
| `name` | - | Yes | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TunnelVnetResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TunnelVnetResponseSingle().load({"account_id": "account_id", "virtual_network_id": "virtual_network_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TunnelVnetResponseSingle().remove({"account_id": "account_id", "virtual_network_id": "virtual_network_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TunnelVnetResponseSingle().update({
    "account_id": "account_id",
    "virtual_network_id": "virtual_network_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelVnetResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelWarpConnectorResponseCollectionEntity

```python
tunnel_warp_connector_response_collection = client.TunnelWarpConnectorResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TunnelWarpConnectorResponseCollection().list({"account_id": "example"})
for tunnel_warp_connector_response_collection in results:
    print(tunnel_warp_connector_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelWarpConnectorResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelWarpConnectorResponseSingleEntity

```python
tunnel_warp_connector_response_single = client.TunnelWarpConnectorResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `ha` | `bool` | No | Indicates that the tunnel will be created to be highly available. |
| `messages` | `list` | Yes |  |
| `name` | `str` | Yes | A user-friendly name for a tunnel. |
| `result` | `str` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |
| `tunnel_secret` | `str` | No | Sets the password required to run a locally-managed tunnel. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `errors` | - | - | - | - |
| `ha` | - | - | - | - |
| `messages` | - | - | - | - |
| `name` | - | - | Yes | - |
| `result` | Yes | - | - | - |
| `success` | - | - | - | - |
| `tunnel_secret` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TunnelWarpConnectorResponseSingle().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "result": "example_result",  # str
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TunnelWarpConnectorResponseSingle().load({"account_id": "account_id", "tunnel_id": "tunnel_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TunnelWarpConnectorResponseSingle().remove({"account_id": "account_id", "tunnel_id": "tunnel_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TunnelWarpConnectorResponseSingle().update({
    "account_id": "account_id",
    "tunnel_id": "tunnel_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelWarpConnectorResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TunnelZeroTrustConnectivitySettingEntity

```python
tunnel_zero_trust_connectivity_setting = client.TunnelZeroTrustConnectivitySetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `icmp_proxy_enabled` | `bool` | No | A flag to enable the ICMP proxy for the account network. |
| `messages` | `list` | Yes |  |
| `offramp_warp_enabled` | `bool` | No | A flag to enable WARP to WARP traffic. |
| `result` | `str` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `errors` | - | - |
| `icmp_proxy_enabled` | - | - |
| `messages` | - | - |
| `offramp_warp_enabled` | - | - |
| `result` | Yes | - |
| `success` | - | - |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TunnelZeroTrustConnectivitySetting().list({"account_id": "example"})
for tunnel_zero_trust_connectivity_setting in results:
    print(tunnel_zero_trust_connectivity_setting)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TunnelZeroTrustConnectivitySetting().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TunnelZeroTrustConnectivitySettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WarpEntity

```python
warp = client.Warp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `str` | No | An optional description of the subnet. |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `is_default_network` | `bool` | No | If `true`, this is the default subnet for the account. |
| `messages` | `list` | Yes |  |
| `name` | `str` | No | A user-friendly name for the subnet. |
| `network` | `str` | No | The private IPv4 or IPv6 range defining the subnet, in CIDR notation. |
| `result` | `str` | Yes | The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel. |
| `success` | `bool` | Yes | Whether the API call was successful |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `comment` | - | - |
| `errors` | - | - |
| `id` | - | - |
| `is_default_network` | - | - |
| `messages` | - | - |
| `name` | - | - |
| `network` | - | - |
| `result` | Yes | - |
| `success` | - | - |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Warp().load({"id": "warp_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Warp().update({
    "id": "warp_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WarpEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WarpChangeEventEntity

```python
warp_change_event = client.WarpChangeEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WarpChangeEvent().list({"account_id": "example", "from": "example", "page": 1, "per_page": 1, "to": "example"})
for warp_change_event in results:
    print(warp_change_event)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WarpChangeEventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WarpTeamsDeviceApiOtherEntity

```python
warp_teams_device_api_other = client.WarpTeamsDeviceApiOther()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `Any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WarpTeamsDeviceApiOther().list({"account_id": "example", "registration_id": "example"})
for warp_teams_device_api_other in results:
    print(warp_teams_device_api_other)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WarpTeamsDeviceApiOtherEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayApplicationsReviewStatusEntity

```python
zero_trust_gateway_applications_review_status = client.ZeroTrustGatewayApplicationsReviewStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_apps` | `list` | Yes | Contains the ids of the approved applications. |
| `in_review_apps` | `list` | Yes | Contains the ids of the applications in review. |
| `result` | `dict` | No |  |
| `unapproved_apps` | `list` | Yes | Contains the ids of the unapproved applications. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustGatewayApplicationsReviewStatus().load({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZeroTrustGatewayApplicationsReviewStatus().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayApplicationsReviewStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayCsvOperationSingleEntity

```python
zero_trust_gateway_csv_operation_single = client.ZeroTrustGatewayCsvOperationSingle()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ZeroTrustGatewayCsvOperationSingle().create({
    "account_id": "example_account_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayCsvOperationSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayCustomCertificateSettingEntity

```python
zero_trust_gateway_custom_certificate_setting = client.ZeroTrustGatewayCustomCertificateSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `binding_status` | `str` | No | Indicate the internal certificate status. |
| `enabled` | `bool` | Yes | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| `id` | `str` | No | Specify the UUID of the certificate (ID from MTLS certificate store). |
| `updated_at` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustGatewayCustomCertificateSetting().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayCustomCertificateSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountEntity

```python
zero_trust_gateway_gateway_account = client.ZeroTrustGatewayGatewayAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ZeroTrustGatewayGatewayAccount().create({
    "account_id": "example_account_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustGatewayGatewayAccount().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayGatewayAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountConfigEntity

```python
zero_trust_gateway_gateway_account_config = client.ZeroTrustGatewayGatewayAccountConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |
| `settings` | `dict` | No | Specify account settings. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustGatewayGatewayAccountConfig().load({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZeroTrustGatewayGatewayAccountConfig().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayGatewayAccountConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity

```python
zero_trust_gateway_gateway_account_egress_cidr_pair_list = client.ZeroTrustGatewayGatewayAccountEgressCidrPairList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZeroTrustGatewayGatewayAccountEgressCidrPairList().list({"account_id": "example"})
for zero_trust_gateway_gateway_account_egress_cidr_pair_list in results:
    print(zero_trust_gateway_gateway_account_egress_cidr_pair_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayGatewayAccountLoggingSettingEntity

```python
zero_trust_gateway_gateway_account_logging_setting = client.ZeroTrustGatewayGatewayAccountLoggingSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redact_pii` | `bool` | No | Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent). |
| `result` | `dict` | No |  |
| `settings_by_rule_type` | `dict` | No | Configure logging settings for each rule type. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustGatewayGatewayAccountLoggingSetting().load({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZeroTrustGatewayGatewayAccountLoggingSetting().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayGatewayAccountLoggingSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayListItemResponseCollectionEntity

```python
zero_trust_gateway_list_item_response_collection = client.ZeroTrustGatewayListItemResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No | Provide the list items. |
| `result_info` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZeroTrustGatewayListItemResponseCollection().list({"account_id": "example", "list_id": "example"})
for zero_trust_gateway_list_item_response_collection in results:
    print(zero_trust_gateway_list_item_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayListItemResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayListSingleEntity

```python
zero_trust_gateway_list_single = client.ZeroTrustGatewayListSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `append` | `list` | No | Add items to the list. |
| `description` | `str` | No | Provide the list description. |
| `items` | `list` | No | Add items to the list. |
| `name` | `str` | Yes | Specify the list name. |
| `remove` | `list` | No | Lists of item values you want to remove. |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustGatewayListSingle().load({"account_id": "account_id", "list_id": "list_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZeroTrustGatewayListSingle().update({
    "account_id": "account_id",
    "list_id": "list_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayListSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayResponseCollectionEntity

```python
zero_trust_gateway_response_collection = client.ZeroTrustGatewayResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZeroTrustGatewayResponseCollection().list({"account_id": "example"})
for zero_trust_gateway_response_collection in results:
    print(zero_trust_gateway_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection10Entity

```python
zero_trust_gateway_response_collection_10 = client.ZeroTrustGatewayResponseCollection10()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |
| `result_info` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZeroTrustGatewayResponseCollection10().list({"account_id": "example"})
for zero_trust_gateway_response_collection_10 in results:
    print(zero_trust_gateway_response_collection_10)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection10Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection2Entity

```python
zero_trust_gateway_response_collection_2 = client.ZeroTrustGatewayResponseCollection2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZeroTrustGatewayResponseCollection2().list({"account_id": "example"})
for zero_trust_gateway_response_collection_2 in results:
    print(zero_trust_gateway_response_collection_2)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection3Entity

```python
zero_trust_gateway_response_collection_3 = client.ZeroTrustGatewayResponseCollection3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZeroTrustGatewayResponseCollection3().list({"account_id": "example"})
for zero_trust_gateway_response_collection_3 in results:
    print(zero_trust_gateway_response_collection_3)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection3Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection4Entity

```python
zero_trust_gateway_response_collection_4 = client.ZeroTrustGatewayResponseCollection4()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZeroTrustGatewayResponseCollection4().list({"account_id": "example"})
for zero_trust_gateway_response_collection_4 in results:
    print(zero_trust_gateway_response_collection_4)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection4Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection5Entity

```python
zero_trust_gateway_response_collection_5 = client.ZeroTrustGatewayResponseCollection5()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZeroTrustGatewayResponseCollection5().list({"account_id": "example"})
for zero_trust_gateway_response_collection_5 in results:
    print(zero_trust_gateway_response_collection_5)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection5Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection6Entity

```python
zero_trust_gateway_response_collection_6 = client.ZeroTrustGatewayResponseCollection6()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZeroTrustGatewayResponseCollection6().list({"account_id": "example"})
for zero_trust_gateway_response_collection_6 in results:
    print(zero_trust_gateway_response_collection_6)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZeroTrustGatewayResponseCollection6().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection6Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection7Entity

```python
zero_trust_gateway_response_collection_7 = client.ZeroTrustGatewayResponseCollection7()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZeroTrustGatewayResponseCollection7().list({"account_id": "example"})
for zero_trust_gateway_response_collection_7 in results:
    print(zero_trust_gateway_response_collection_7)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection7Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection8Entity

```python
zero_trust_gateway_response_collection_8 = client.ZeroTrustGatewayResponseCollection8()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZeroTrustGatewayResponseCollection8().list({"account_id": "example"})
for zero_trust_gateway_response_collection_8 in results:
    print(zero_trust_gateway_response_collection_8)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection8Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewayResponseCollection9Entity

```python
zero_trust_gateway_response_collection_9 = client.ZeroTrustGatewayResponseCollection9()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZeroTrustGatewayResponseCollection9().list({"account_id": "example"})
for zero_trust_gateway_response_collection_9 in results:
    print(zero_trust_gateway_response_collection_9)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewayResponseCollection9Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewaySingleEntity

```python
zero_trust_gateway_single = client.ZeroTrustGatewaySingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |
| `validity_period_days` | `int` | No | Sets the certificate validity period in days (range: 1-10,950 days / ~30 years). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingle().create({
    "account_id": "example_account_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingle().load({"account_id": "account_id", "certificate_id": "certificate_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ZeroTrustGatewaySingle().remove({"account_id": "account_id", "certificate_id": "certificate_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse2Entity

```python
zero_trust_gateway_single_response_2 = client.ZeroTrustGatewaySingleResponse2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse2().load({"account_id": "account_id", "operation_id": "operation_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponse2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse3Entity

```python
zero_trust_gateway_single_response_3 = client.ZeroTrustGatewaySingleResponse3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_default` | `bool` | No | Indicate whether this location is the default location. |
| `dns_destination_ips_id` | `str` | No | Specify the identifier of the pair of IPv4 addresses assigned to this location. |
| `ecs_support` | `bool` | No | Indicate whether the location must resolve EDNS queries. |
| `endpoints` | `dict` | Yes | Configure the destination endpoints for this location. |
| `max_ttl` | `dict` | Yes | Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. |
| `name` | `str` | Yes | Specify the location name. |
| `networks` | `list` | No | Specify the list of network ranges from which requests at this location originate. |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse3().create({
    "account_id": "example_account_id",  # str
    "endpoints": {},  # dict
    "max_ttl": {},  # dict
    "name": "example_name",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse3().load({"account_id": "account_id", "location_id": "location_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse3().update({
    "account_id": "account_id",
    "location_id": "location_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponse3Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse4Entity

```python
zero_trust_gateway_single_response_4 = client.ZeroTrustGatewaySingleResponse4()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes | Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`. |
| `description` | `str` | No | Specify the rule description. |
| `device_posture` | `str` | No | Specify the wirefilter expression used for device posture check. |
| `enabled` | `bool` | No | Specify whether the rule is enabled. |
| `expiration` | `dict` | Yes | Defines the expiration time stamp and default duration of a DNS policy. |
| `filters` | `list` | No | Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. |
| `identity` | `str` | No | Specify the wirefilter expression used for identity matching. |
| `name` | `str` | Yes | Specify the rule name. |
| `precedence` | `int` | No | Set the order of your rules. |
| `result` | `dict` | Yes |  |
| `rule_settings` | `dict` | No | Defines settings for this rule. |
| `schedule` | `dict` | No | Defines the schedule for activating DNS policies. |
| `traffic` | `str` | No | Specify the wirefilter expression used for traffic matching. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `action` | - | - | - |
| `description` | - | - | - |
| `device_posture` | - | - | - |
| `enabled` | - | - | - |
| `expiration` | - | - | - |
| `filters` | - | - | - |
| `identity` | - | - | - |
| `name` | - | - | - |
| `precedence` | - | - | - |
| `result` | - | - | - |
| `rule_settings` | - | - | - |
| `schedule` | - | - | - |
| `traffic` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse4().create({
    "account_id": "example_account_id",  # str
    "action": "example_action",  # str
    "expiration": {},  # dict
    "name": "example_name",  # str
    "result": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse4().load({"account_id": "account_id", "rule_id": "rule_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse4().update({
    "account_id": "account_id",
    "rule_id": "rule_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponse4Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse5Entity

```python
zero_trust_gateway_single_response_5 = client.ZeroTrustGatewaySingleResponse5()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ips` | `list` | No | Specify the list of CIDRs to restrict ingress connections. |
| `kind` | `str` | No | The proxy endpoint kind. |
| `name` | `str` | No | Specify the name of the proxy endpoint. |
| `result` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse5().create({
    "account_id": "example_account_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse5().load({"account_id": "account_id", "proxy_endpoint_id": "proxy_endpoint_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse5().update({
    "account_id": "account_id",
    "proxy_endpoint_id": "proxy_endpoint_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponse5Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse6Entity

```python
zero_trust_gateway_single_response_6 = client.ZeroTrustGatewaySingleResponse6()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `public_key` | `str` | Yes | Provide the Base64-encoded HPKE public key that encrypts SSH session logs. |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse6().create({
    "account_id": "example_account_id",  # str
    "public_key": "example_public_key",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse6().load({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse6().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponse6Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewaySingleResponse7Entity

```python
zero_trust_gateway_single_response_7 = client.ZeroTrustGatewaySingleResponse7()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contents` | `str` | Yes | Actual contents of the PAC file |
| `description` | `str` | No | Detailed description of the PAC file. |
| `name` | `str` | Yes | Name of the PAC file. |
| `result` | `dict` | No |  |
| `slug` | `str` | No | URL-friendly version of the PAC file name. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `contents` | - | - | - |
| `description` | - | - | Yes |
| `name` | - | - | - |
| `result` | - | - | - |
| `slug` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse7().create({
    "account_id": "example_account_id",  # str
    "contents": "example_contents",  # str
    "name": "example_name",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse7().load({"account_id": "account_id", "pacfile_id": "pacfile_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponse7().update({
    "account_id": "account_id",
    "pacfile_id": "pacfile_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponse7Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustGatewaySingleResponseWithListItemEntity

```python
zero_trust_gateway_single_response_with_list_item = client.ZeroTrustGatewaySingleResponseWithListItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | Provide the list description. |
| `items` | `list` | No | Add items to the list. |
| `name` | `str` | Yes | Specify the list name. |
| `type` | `str` | Yes | Specify the list type. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ZeroTrustGatewaySingleResponseWithListItem().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "type": "example_type",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustGatewaySingleResponseWithListItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustRiskScoringEntity

```python
zero_trust_risk_scoring = client.ZeroTrustRiskScoring()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `behaviors` | `dict` | Yes |  |
| `result` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ZeroTrustRiskScoring().create({
    "account_id": "example_account_id",  # str
    "zt_risk_scoring_id": "example_zt_risk_scoring_id",  # str
    "behaviors": {},  # dict
    "result": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustRiskScoring().load({"account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZeroTrustRiskScoring().update({
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustRiskScoringEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZeroTrustRiskScoringIntegrationEntity

```python
zero_trust_risk_scoring_integration = client.ZeroTrustRiskScoringIntegration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Whether this integration is enabled. |
| `id` | `str` | No |  |
| `integration_type` | `str` | Yes |  |
| `reference_id` | `str` | No | A reference id that can be supplied by the client. |
| `result` | `dict` | Yes |  |
| `tenant_url` | `str` | Yes | The base url of the tenant, e.g. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `active` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `integration_type` | - | - | - | - | - |
| `reference_id` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |
| `tenant_url` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ZeroTrustRiskScoringIntegration().create({
    "account_id": "example_account_id",  # str
    "active": True,  # bool
    "integration_type": "example_integration_type",  # str
    "result": {},  # dict
    "tenant_url": "example_tenant_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZeroTrustRiskScoringIntegration().list({"account_id": "example"})
for zero_trust_risk_scoring_integration in results:
    print(zero_trust_risk_scoring_integration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZeroTrustRiskScoringIntegration().load({"id": "zero_trust_risk_scoring_integration_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ZeroTrustRiskScoringIntegration().remove({"id": "zero_trust_risk_scoring_integration_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZeroTrustRiskScoringIntegration().update({
    "id": "zero_trust_risk_scoring_integration_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZeroTrustRiskScoringIntegrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = CloudflareZeroTrustSDK({
    "feature": {
        "test": {"active": True},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

