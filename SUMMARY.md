# Cloudflare Zero Trust Gateway

Cloudflare Zero Trust Gateway: policies, proxy endpoints, audit rules, categories, and DEX.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 104 entities and 242 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [ClientVersion](docs/api/client_version.html)

Results: List client versions response.; List target environments response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Indicates whether the API call was successful.

### [Cni](docs/api/cni.html)

Results: CNI has been successfully deleted.

SDK operations: `remove`.

### [DeploymentGroup](docs/api/deployment_group.html)

Results: Creates deployment group response.; Lists deployment group response.; Gets deployment group response.; Deletes deployment group response.; Updates deployment group response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: The ID of the deployment group.
- `name`: A user-friendly name for the deployment group.
- `policy_ids`: Contains a list of policy IDs assigned to this deployment group.
- `success`: Indicates whether the API call was successful.
- `version_config`: Contains version configurations for different target environments.

### [DexRemoteCommand](docs/api/dex_remote_command.html)

Results: Create commands response.; Get commands response.; List of eligible devices.; Get command artifacts response.; Get commands quota response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `commands`: List of created commands

### [DexRule](docs/api/dex_rule.html)

Results: Success response.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `match`: The wirefilter expression to match.
- `name`: The name of the Rule.

### [DexSyntheticApplicationMonitoring](docs/api/dex_synthetic_application_monitoring.html)

Results: List colos response.; List of ISPs observed for the device.; Success response.; DEX HTTP test details response.; DEX traceroute test details response.; DEX HTTP test percentiles response.; Device status over time response.; DEX Traceroute test percentiles response.; DEX traceroute test network path response.; DEX unique devices targeted response.; DEX traceroute test result network path response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `result`: array of colos.
- `success`: Whether the API call was successful.

### [DigitalExperienceMonitoringDevice](docs/api/digital_experience_monitoring_device.html)

Results: Get the latest status of a device.

SDK operations: `list`.

Key fields to recognise:

- `colo`: Cloudflare colo airport code.
- `deviceId`: Device identifier (UUID v4)
- `deviceName`: Device identifier (human readable).
- `deviceRegistration`: Deprecated: use registrationId. Device registration identifier (UUID).
- `mode`: The mode under which the WARP client is run.

### [DigitalExperienceMonitoringDexDeleteResponseCollection](docs/api/digital_experience_monitoring_dex_delete_response_collection.html)

Results: Delete Device DEX test response.

SDK operations: `remove`.

### [DigitalExperienceMonitoringDexResponseCollection](docs/api/digital_experience_monitoring_dex_response_collection.html)

Results: Device DEX test details response.

SDK operations: `list`.

### [DigitalExperienceMonitoringDexSingle](docs/api/digital_experience_monitoring_dex_single.html)

Results: Update Dex test response.; Device DEX test details response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `created`: Date the test was created, in RFC 3339 format.
- `data`: The configuration object which contains the details for the WARP client to conduct the test.
- `description`: Additional details about the test.
- `enabled`: Determines whether or not the test is active.
- `interval`: How often the test will run.

### [DigitalExperienceMonitoringFleetStatusDevice](docs/api/digital_experience_monitoring_fleet_status_device.html)

Results: List devices response.

SDK operations: `list`.

### [DigitalExperienceMonitoringFleetStatusLive](docs/api/digital_experience_monitoring_fleet_status_live.html)

Results: Get device details (live) response.

SDK operations: `load`.

### [DigitalExperienceMonitoringFleetStatusOverTime](docs/api/digital_experience_monitoring_fleet_status_over_time.html)

Results: Get DEX devices aggregate success response.

SDK operations: `load`.

### [Interconnect](docs/api/interconnect.html)

Results: Generated LOA in PDF format; Successfully deleted interconnect.

SDK operations: `load`, `remove`.

### [IpProfile](docs/api/ip_profile.html)

Results: Create Device IP profile response.; List Device IP profiles response.; Get Device IP profile response.; Delete Device IP profile response.; Update Device IP profile response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `description`: An optional description of the Device IP profile.
- `enabled`: Whether the Device IP profile is enabled.
- `id`: The ID of the Device IP profile.
- `match`: The wirefilter expression to match registrations. Available values: &quot;identity.name&quot;, &quot;identity.email&quot;, &quot;identity.groups.id&quot;, &quot;identity.groups.name&quot;, &quot;identity.groups.email&quot;, &quot;identity.saml_attributes&quot;.
- `name`: A user-friendly name for the Device IP profile.

### [List](docs/api/list.html)

Results: Delete Zero Trust list response.

SDK operations: `remove`.

### [Location](docs/api/location.html)

Results: Deletes a Zero Trust Gateway location response.

SDK operations: `remove`.

### [NscCni](docs/api/nsc_cni.html)

Results: CNI was successfully created; List of matching CNI objects; CNI&#39;s associated data; CNI has been successfully modified.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `account`: Customer account tag
- `bgp_mode`: The BGP mode for a CNI. Controls the customer-facing data path: * `DynamicRouteExchange`, Full BGP: routes flow through to conduit via CRE / bgp-bridge / bgp-bridge-receiver. * `AdvertiseOnly`, static advertisement via taserver, no routes exchanged with Conduit
- `cust_ip`: Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`.
- `interconnect`: Interconnect identifier hosting this CNI
- `p2p_ip`: Cloudflare end of the point-to-point link

### [NscDefaultName](docs/api/nsc_default_name.html)

Results: Default customer name.

SDK operations: `load`.

Key fields to recognise:

- `name`: The default customer name for the interconnect

### [NscInterconnect](docs/api/nsc_interconnect.html)

Results: Information about the new interconnect; List of matching interconnect objects; Information about the specified interconnect.

SDK operations: `create`, `list`, `load`.

### [NscSetting](docs/api/nsc_setting.html)

Results: The active account settings values.

SDK operations: `load`, `update`.

### [NscSlotInfo](docs/api/nsc_slot_info.html)

Results: List of matching slots; Information about the specified slot.

SDK operations: `list`, `load`.

Key fields to recognise:

- `account`: Customer account tag
- `id`: Slot ID
- `occupied`: Whether the slot is occupied or not

### [NscStatusInfo](docs/api/nsc_status_info.html)

Results: Current interconnect status.

SDK operations: `load`.

### [OverrideCode](docs/api/override_code.html)

Results: Override code response.

SDK operations: `create`.

Key fields to recognise:

- `device_id`: Physical device ID.
- `duration_hours`: Number of hours for which the override code should remain valid.
- `scope`: Whether the code applies to every device in the account or one physical device.
- `success`: Whether the API call was successful.
- `type`: The feature that the override code applies to.

### [Pacfile](docs/api/pacfile.html)

Results: Returns a deleted PAC file response.

SDK operations: `remove`.

### [PhysicalDevice](docs/api/physical_device.html)

Results: Revoke device registrations response.; Returns a list of Devices.; Returns a Device.; Device was successfully deleted.; Delete a list of registrations response.; Returns the updated Device.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: The unique ID of the device.
- `result`: A WARP Device.
- `result_info`: V4 public API Pagination/Cursor info.
- `success`: Whether the API call was successful.
- `tags`: Tags assigned to the device. An empty object if the device has no tags.

### [ProxyEndpoint](docs/api/proxy_endpoint.html)

Results: Returns a deleted proxy endpoint response.

SDK operations: `remove`.

### [Registration](docs/api/registration.html)

Results: Revoke registrations response.; Unrevoke registrations response.; List of registrations response.; Returns a Registration.; Registration deleted response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `id`: The ID of the registration.
- `result`: A WARP configuration tied to a single user. Multiple registrations can be created from a single WARP device.
- `result_info`: V4 public API Pagination/Cursor info.
- `success`: Whether the API call was successful.

### [Rule](docs/api/rule.html)

Results: Delete a Zero Trust Gateway rule response.

SDK operations: `remove`.

### [TeamsDevicesApiResponseSingle](docs/api/teams_devices_api_response_single.html)

Results: Revoke devices response.; Unrevoke devices response.

SDK operations: `create`.

### [TeamsDevicesComponentsSchemasResponseCollection](docs/api/teams_devices_components_schemas_response_collection.html)

Results: List your device managed networks response.; Delete a device managed network response.

SDK operations: `list`, `remove`.

### [TeamsDevicesComponentsSchemasSingle](docs/api/teams_devices_components_schemas_single.html)

Results: Create a device managed networks response.; Get device managed network details response.; Update a device managed network response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `config`: The configuration object containing information for the WARP client to detect the managed network.
- `name`: The name of the device managed network. This name must be unique.
- `type`: The type of device managed network.

### [TeamsDevicesDefaultDeviceSetting](docs/api/teams_devices_default_device_setting.html)

Results: Get the default device settings profile response.; Update the default device settings profile response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `allow_mode_switch`: Whether to allow the user to switch WARP between modes.
- `allow_updates`: Whether to receive update notifications when a new version of the client is available.
- `allowed_to_leave`: Whether to allow devices to leave the organization.
- `auto_connect`: The amount of time in seconds to reconnect after having been disabled.
- `captive_portal`: Turn on the captive portal after the specified amount of time.

### [TeamsDevicesDevice](docs/api/teams_devices_device.html)

Results: List devices response.; Get device details response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `id`: Registration ID. Equal to Device ID except for accounts which enabled [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/).

### [TeamsDevicesDeviceSetting](docs/api/teams_devices_device_setting.html)

Results: Create a device settings profile response.; Get device settings profile by ID response.; Update a device settings profile Policy response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `allow_mode_switch`: Whether to allow the user to switch WARP between modes.
- `allow_updates`: Whether to receive update notifications when a new version of the client is available.
- `allowed_to_leave`: Whether to allow devices to leave the organization.
- `auto_connect`: The amount of time in seconds to reconnect after having been disabled.
- `browser_extension_config`: Browser extension proxy settings. Required when profile_type is browser_extension and invalid for WARP profiles.

### [TeamsDevicesDeviceSettingsResponseCollection](docs/api/teams_devices_device_settings_response_collection.html)

Results: List device settings profiles response.; Delete a device settings profile response.

SDK operations: `list`, `remove`.

### [TeamsDevicesFallbackDomainResponseCollection](docs/api/teams_devices_fallback_domain_response_collection.html)

Results: Get the Local Domain Fallback list for a device settings profile response.; Get your Local Domain Fallback list response.; Reset the Local Domain Fallback list for a device settings profile response.; Reset your Local Domain Fallback list response.; Set the Local Domain Fallback list for a device settings profile response.; Set your Local Domain Fallback list response.

SDK operations: `list`, `remove`, `update`.

### [TeamsDevicesGlobalWarpOverride](docs/api/teams_devices_global_warp_override.html)

Results: Set Global WARP disconnect state response.; Get Global WARP disconnect state response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `disconnect`: Disconnects all devices on the account using Global WARP override.
- `justification`: Reasoning for setting the Global WARP override state.

### [TeamsDevicesId](docs/api/teams_devices_id.html)

Results: Delete a device posture rule response.

SDK operations: `remove`.

### [TeamsDevicesOverrideCode](docs/api/teams_devices_override_code.html)

Results: Get an admin override code for a device response.

SDK operations: `load`.

### [TeamsDevicesResponseCollection](docs/api/teams_devices_response_collection.html)

Results: List device posture rules response.

SDK operations: `list`.

### [TeamsDevicesSchemasId](docs/api/teams_devices_schemas_id.html)

Results: Delete a device posture integration response.

SDK operations: `remove`.

### [TeamsDevicesSchemasResponseCollection](docs/api/teams_devices_schemas_response_collection.html)

Results: List your device posture integrations response.

SDK operations: `list`.

### [TeamsDevicesSchemasSingle](docs/api/teams_devices_schemas_single.html)

Results: Create a device posture integration response.; Get device posture integration details response.; Update a device posture integration response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `config`: The configuration object containing third-party integration information.
- `interval`: The interval between each posture check with the third-party API. Use `m` for minutes (for example `5m`) and `h` for hours (for example `12h`).
- `name`: The name of the device posture integration.
- `type`: The type of device posture integration.

### [TeamsDevicesSingle](docs/api/teams_devices_single.html)

Results: Create device posture rule response.; Get device posture rule details response.; Update a device posture rule response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `description`: The description of the device posture rule.
- `expiration`: Sets the expiration time for a posture check result. If empty, the result remains valid until it is overwritten by new data from the WARP client.
- `input`: The value to be checked against.
- `match`: The conditions that the client must match to run the rule.
- `name`: The name of the device posture rule.

### [TeamsDevicesSplitTunnelIncludeResponseCollection](docs/api/teams_devices_split_tunnel_include_response_collection.html)

Results: Get the Split Tunnel include list for a device settings profile response.; Get the Split Tunnel include list response.; Set the Split Tunnel include list for a device settings profile response.; Set the Split Tunnel include list response.

SDK operations: `list`, `update`.

### [TeamsDevicesSplitTunnelResponseCollection](docs/api/teams_devices_split_tunnel_response_collection.html)

Results: Get the Split Tunnel exclude list for a device settings profile response.; Get the Split Tunnel exclude list response.; Reset the Split Tunnel exclude list for a device settings profile response.; Reset the Split Tunnel exclude list response.; Set the Split Tunnel exclude list for a device settings profile response.; Set the Split Tunnel exclude list response.

SDK operations: `list`, `remove`, `update`.

### [TeamsDevicesZeroTrustAccountDeviceSetting](docs/api/teams_devices_zero_trust_account_device_setting.html)

Results: Get device settings for a Zero Trust account response.; Update device settings for a Zero Trust account response.; Reset response for device settings for a Zero Trust account.

SDK operations: `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `disable_for_time`: Sets the time limit, in seconds, that a user can use an override code to bypass WARP.
- `external_emergency_signal_enabled`: Controls whether the external emergency disconnect feature is enabled.
- `external_emergency_signal_fingerprint`: The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. If provided, the WARP client will use this value to verify the server&#39;s identity. The device will ignore any response if the server&#39;s certificate fingerprint does not exactly match this value.
- `external_emergency_signal_interval`: The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (for example, &quot;5m&quot;, &quot;2m30s&quot;, &quot;1h&quot;). Minimum 30 seconds.
- `external_emergency_signal_url`: The HTTPS URL from which to fetch the emergency disconnect signal. Must use HTTPS and have an IPv4 or IPv6 address as the host.

### [Tunnel](docs/api/tunnel.html)

Results: List Tunnels response.

SDK operations: `list`.

Key fields to recognise:

- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.

### [TunnelCfdTunnelResponseCollection](docs/api/tunnel_cfd_tunnel_response_collection.html)

Results: List Cloudflare Tunnels response.

SDK operations: `list`.

Key fields to recognise:

- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.

### [TunnelCfdTunnelResponseSingle](docs/api/tunnel_cfd_tunnel_response_single.html)

Results: Create a Cloudflare Tunnel response; Get a Cloudflare Tunnel response; Delete a Cloudflare Tunnel response; Update a Cloudflare Tunnel response.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `config_src`: Indicates if this is a locally or remotely configured tunnel. If `local`, manage the tunnel using a YAML file on the origin machine. If `cloudflare`, manage the tunnel on the Zero Trust dashboard.
- `name`: A user-friendly name for a tunnel.
- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.
- `success`: Whether the API call was successful
- `tunnel_secret`: Sets the password required to run a locally-managed tunnel.

### [TunnelConfiguration](docs/api/tunnel_configuration.html)

Results: Get configuration response; Put configuration response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `config`: The tunnel configuration and ingress rules.
- `result`: Cloudflare Tunnel configuration

### [TunnelEmpty](docs/api/tunnel_empty.html)

Results: Clean up Cloudflare Tunnel connections response; Manual failover response.

SDK operations: `remove`, `update`.

Key fields to recognise:

- `client_id`: UUID of the Cloudflare Tunnel connector.

### [TunnelHostnameRouteResponseCollection](docs/api/tunnel_hostname_route_response_collection.html)

Results: List hostname routes response.

SDK operations: `list`.

Key fields to recognise:

- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.

### [TunnelHostnameRouteResponseSingle](docs/api/tunnel_hostname_route_response_single.html)

Results: Create hostname route response; Get hostname route response; Delete hostname route response; Update hostname route response.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `comment`: An optional description of the hostname route.
- `hostname`: The hostname of the route.
- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.
- `success`: Whether the API call was successful
- `tunnel_id`: UUID of the tunnel.

### [TunnelMeshConfigurationResponseSingle](docs/api/tunnel_mesh_configuration_response_single.html)

Results: Get WARP Connector HA configuration response; Update WARP Connector HA configuration response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `config`: Provider-specific configuration. Present for `aws` and `local` modes.
- `ha_mode`: High-availability mode for the WARP Connector tunnel. `none` means HA is enabled but no provider is configured yet (newly created tunnels default to this). `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move for failover. `local` uses virtual IPs (VIPs) on the local interface.

### [TunnelRouteResponseSingle](docs/api/tunnel_route_response_single.html)

Results: Create a tunnel route response; Get a tunnel route response; Delete a tunnel route response; Update a tunnel route response.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `comment`: Optional remark describing the route.
- `network`: The private IPv4 or IPv6 range connected by the route, in CIDR notation.
- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.
- `success`: Whether the API call was successful
- `tunnel_id`: UUID of the tunnel.

### [TunnelSubnetResponseCollection](docs/api/tunnel_subnet_response_collection.html)

Results: List subnets response.

SDK operations: `list`.

Key fields to recognise:

- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.

### [TunnelSubnetResponseSingle](docs/api/tunnel_subnet_response_single.html)

Results: Create subnet response; Get Initial Resolved IP Subnet response; Update subnet response; Update Initial Resolved IP Subnet response.

SDK operations: `create`, `load`, `patch`, `update`.

Key fields to recognise:

- `comment`: An optional description of the subnet.
- `is_default_network`: If `true`, this is the default subnet for the account. There can only be one default subnet per account.
- `name`: A user-friendly name for the subnet.
- `network`: The private IPv4 or IPv6 range defining the subnet, in CIDR notation.
- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.

### [TunnelSubnetResponseSingleNullable](docs/api/tunnel_subnet_response_single_nullable.html)

Results: Delete subnet response.

SDK operations: `remove`.

### [TunnelTeamnetResponseCollection](docs/api/tunnel_teamnet_response_collection.html)

Results: List tunnel routes response.

SDK operations: `list`.

Key fields to recognise:

- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.

### [TunnelTeamnetResponseSingle](docs/api/tunnel_teamnet_response_single.html)

Results: Get tunnel route by IP response.

SDK operations: `load`.

Key fields to recognise:

- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.
- `success`: Whether the API call was successful

### [TunnelTunnelClient](docs/api/tunnel_tunnel_client.html)

Results: Get Cloudflare Tunnel connector response.

SDK operations: `load`.

Key fields to recognise:

- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.
- `success`: Whether the API call was successful

### [TunnelTunnelConnection](docs/api/tunnel_tunnel_connection.html)

Results: List Cloudflare Tunnel connections response.

SDK operations: `list`.

Key fields to recognise:

- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.

### [TunnelTunnelResponseToken](docs/api/tunnel_tunnel_response_token.html)

Results: Get a Cloudflare Tunnel management token response; Get a Cloudflare Tunnel token response; Get a Warp Connector Tunnel token response.

SDK operations: `create`, `list`.

Key fields to recognise:

- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.
- `success`: Whether the API call was successful

### [TunnelTunnelWarpConnectorClient](docs/api/tunnel_tunnel_warp_connector_client.html)

Results: Get WARP Connector Tunnel connector response.

SDK operations: `load`.

Key fields to recognise:

- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.
- `success`: Whether the API call was successful

### [TunnelTunnelWarpConnectorConnection](docs/api/tunnel_tunnel_warp_connector_connection.html)

Results: List WARP Connector Tunnel connections response.

SDK operations: `list`.

Key fields to recognise:

- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.

### [TunnelVnetResponseCollection](docs/api/tunnel_vnet_response_collection.html)

Results: List virtual networks response.

SDK operations: `list`.

Key fields to recognise:

- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.

### [TunnelVnetResponseSingle](docs/api/tunnel_vnet_response_single.html)

Results: Create a virtual network response; A virtual network response; Delete a virtual network response; Update a virtual network response.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `comment`: Optional remark describing the virtual network.
- `is_default`: If `true`, this virtual network is the default for the account.
- `is_default_network`: If `true`, this virtual network is the default for the account.
- `name`: A user-friendly name for the virtual network.

### [TunnelWarpConnectorResponseCollection](docs/api/tunnel_warp_connector_response_collection.html)

Results: List Warp Connector Tunnels response.

SDK operations: `list`.

Key fields to recognise:

- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.

### [TunnelWarpConnectorResponseSingle](docs/api/tunnel_warp_connector_response_single.html)

Results: Create a Warp Connector Tunnel response; Get a Warp Connector Tunnel response; Delete a Warp Connector Tunnel response; Update a Warp Connector Tunnel response.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `ha`: Indicates that the tunnel will be created to be highly available.
- `name`: A user-friendly name for a tunnel.
- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.
- `success`: Whether the API call was successful
- `tunnel_secret`: Sets the password required to run a locally-managed tunnel.

### [TunnelZeroTrustConnectivitySetting](docs/api/tunnel_zero_trust_connectivity_setting.html)

Results: Get Zero Trust Connectivity Settings response; Update Zero Trust Connectivity Settings response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `icmp_proxy_enabled`: A flag to enable the ICMP proxy for the account network.
- `offramp_warp_enabled`: A flag to enable WARP to WARP traffic.
- `result`: The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.
- `success`: Whether the API call was successful

### [Warp](docs/api/warp.html)

Results: Get subnet response; Update subnet response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `comment`: An optional description of the subnet.
- `id`: The UUID of the subnet.
- `is_default_network`: If `true`, this is the default subnet for the account. There can only be one default subnet per account.
- `name`: A user-friendly name for the subnet.
- `network`: The private IPv4 or IPv6 range defining the subnet, in CIDR notation.

### [WarpChangeEvent](docs/api/warp_change_event.html)

Results: Success response.

SDK operations: `list`.

### [WarpTeamsDeviceApiOther](docs/api/warp_teams_device_api_other.html)

Results: Get admin override codes for a registration response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [ZeroTrustGatewayApplicationsReviewStatus](docs/api/zero_trust_gateway_applications_review_status.html)

Results: List applications review status response.; Update applications review status response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `approved_apps`: Contains the ids of the approved applications.
- `in_review_apps`: Contains the ids of the applications in review.
- `unapproved_apps`: Contains the ids of the unapproved applications.

### [ZeroTrustGatewayCsvOperationSingle](docs/api/zero_trust_gateway_csv_operation_single.html)

Results: Create Zero Trust list from CSV response.

SDK operations: `create`.

### [ZeroTrustGatewayCustomCertificateSetting](docs/api/zero_trust_gateway_custom_certificate_setting.html)

Results: Zero Trust account configuration response.

SDK operations: `load`.

Key fields to recognise:

- `binding_status`: Indicate the internal certificate status.
- `enabled`: Specify whether to enable a custom certificate authority for signing Gateway traffic.
- `id`: Specify the UUID of the certificate (ID from MTLS certificate store).

### [ZeroTrustGatewayGatewayAccount](docs/api/zero_trust_gateway_gateway_account.html)

Results: Create Zero Trust account response.; Zero Trust account information response.

SDK operations: `create`, `load`.

### [ZeroTrustGatewayGatewayAccountConfig](docs/api/zero_trust_gateway_gateway_account_config.html)

Results: Zero Trust account configuration response.

SDK operations: `load`, `patch`, `update`.

Key fields to recognise:

- `settings`: Specify account settings.

### [ZeroTrustGatewayGatewayAccountEgressCidrPairList](docs/api/zero_trust_gateway_gateway_account_egress_cidr_pair_list.html)

Results: List of egress CIDR pairs.

SDK operations: `list`.

### [ZeroTrustGatewayGatewayAccountLoggingSetting](docs/api/zero_trust_gateway_gateway_account_logging_setting.html)

Results: Logging settings retrieval response.; Logging settings update response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `redact_pii`: Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent).
- `settings_by_rule_type`: Configure logging settings for each rule type.

### [ZeroTrustGatewayListItemResponseCollection](docs/api/zero_trust_gateway_list_item_response_collection.html)

Results: Get Zero Trust list items response.

SDK operations: `list`.

Key fields to recognise:

- `result`: Provide the list items.

### [ZeroTrustGatewayListSingle](docs/api/zero_trust_gateway_list_single.html)

Results: Get Zero Trust list details response.; Patch Zero Trust list response.; Update Zero Trust list response.

SDK operations: `load`, `patch`, `update`.

Key fields to recognise:

- `append`: Add items to the list.
- `description`: Provide the list description.
- `items`: Provide the list items.
- `name`: Specify the list name.
- `remove`: Lists of item values you want to remove.

### [ZeroTrustGatewayResponseCollection](docs/api/zero_trust_gateway_response_collection.html)

Results: Lists Zero Trust certificates response.

SDK operations: `list`.

### [ZeroTrustGatewayResponseCollection10](docs/api/zero_trust_gateway_response_collection_10.html)

Results: Returns a list of PAC files response.

SDK operations: `list`.

### [ZeroTrustGatewayResponseCollection2](docs/api/zero_trust_gateway_response_collection_2.html)

Results: List Zero Trust Gateway DNS destination IPv4 address pairs response.

SDK operations: `list`.

### [ZeroTrustGatewayResponseCollection3](docs/api/zero_trust_gateway_response_collection_3.html)

Results: List Zero Trust lists response.

SDK operations: `list`.

### [ZeroTrustGatewayResponseCollection4](docs/api/zero_trust_gateway_response_collection_4.html)

Results: List Zero Trust Gateway operations response.

SDK operations: `list`.

Key fields to recognise:

- `result`: The result of the operation. Only present when the operation has completed successfully.

### [ZeroTrustGatewayResponseCollection5](docs/api/zero_trust_gateway_response_collection_5.html)

Results: Lists Zero Trust Gateway locations response.

SDK operations: `list`.

### [ZeroTrustGatewayResponseCollection6](docs/api/zero_trust_gateway_response_collection_6.html)

Results: List Zero Trust Gateway rules response.; Patch multiple Zero Trust Gateway rules response.

SDK operations: `list`, `update`.

### [ZeroTrustGatewayResponseCollection7](docs/api/zero_trust_gateway_response_collection_7.html)

Results: List application and application type mappings response.

SDK operations: `list`.

### [ZeroTrustGatewayResponseCollection8](docs/api/zero_trust_gateway_response_collection_8.html)

Results: List categories response.

SDK operations: `list`.

### [ZeroTrustGatewayResponseCollection9](docs/api/zero_trust_gateway_response_collection_9.html)

Results: Returns a list of proxy endpoints response.

SDK operations: `list`.

### [ZeroTrustGatewaySingle](docs/api/zero_trust_gateway_single.html)

Results: Activates Zero Trust certificate details response.; Deactivate Zero Trust certificate details response.; Creates Zero Trust certificate response.; Gets Zero Trust certificate details response.; Deletes Zero Trust certificate response.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `validity_period_days`: Sets the certificate validity period in days (range: 1-10,950 days / ~30 years).

### [ZeroTrustGatewaySingleResponse2](docs/api/zero_trust_gateway_single_response_2.html)

Results: Zero Trust Gateway operation details response.

SDK operations: `load`.

Key fields to recognise:

- `result`: The result of the operation. Only present when the operation has completed successfully.

### [ZeroTrustGatewaySingleResponse3](docs/api/zero_trust_gateway_single_response_3.html)

Results: Creates a Zero Trust Gateway location response.; Gets Zero Trust Gateway location details response.; Updates a Zero Trust Gateway location response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `client_default`: Indicate whether this location is the default location.
- `dns_destination_ips_id`: Indicate the identifier of the pair of IPv4 addresses assigned to this location.
- `ecs_support`: Indicate whether the location must resolve EDNS queries.
- `endpoints`: Configure the destination endpoints for this location.
- `max_ttl`: Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting. Omitting `max_ttl` on update resets it to `inherit`.

### [ZeroTrustGatewaySingleResponse4](docs/api/zero_trust_gateway_single_response_4.html)

Results: Reset the expiration of a Zero Trust Gateway rule response.; Create a Zero Trust Gateway rule response.; Get Zero Trust Gateway rule details response.; Patch a Zero Trust Gateway rule response.; Update a Zero Trust Gateway rule response.

SDK operations: `create`, `load`, `patch`, `update`.

Key fields to recognise:

- `action`: Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`.
- `description`: Specify the rule description.
- `device_posture`: Specify the wirefilter expression used for device posture check. The API automatically formats and sanitizes expressions before storing them. To prevent Terraform state drift, use the formatted expression returned in the API response.
- `enabled`: Specify whether the rule is enabled.
- `expiration`: Defines the expiration time stamp and default duration of a DNS policy. Takes precedence over the policy&#39;s `schedule` configuration, if any. This does not apply to HTTP or network policies. Settable only for `dns` rules.

### [ZeroTrustGatewaySingleResponse5](docs/api/zero_trust_gateway_single_response_5.html)

Results: Returns a created proxy endpoint response.; Returns a proxy endpoint response.; Returns an updated proxy endpoint response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `ips`: Specify the list of CIDRs to restrict ingress connections.
- `kind`: The proxy endpoint kind
- `name`: Specify the name of the proxy endpoint.

### [ZeroTrustGatewaySingleResponse6](docs/api/zero_trust_gateway_single_response_6.html)

Results: Rotate Zero Trust SSH account seed response.; Get Zero Trust SSH settings response.; Update Zero Trust SSH settings response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `public_key`: Provide the Base64-encoded HPKE public key that encrypts SSH session logs. See https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/use-cases/ssh/ssh-infrastructure-access/#enable-ssh-command-logging.

### [ZeroTrustGatewaySingleResponse7](docs/api/zero_trust_gateway_single_response_7.html)

Results: Returns a created PAC file response.; Returns a PAC file response.; Update a Zero Trust Gateway PAC file response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `contents`: Actual contents of the PAC file
- `description`: Detailed description of the PAC file.
- `name`: Name of the PAC file.
- `slug`: URL-friendly version of the PAC file name.

### [ZeroTrustGatewaySingleResponseWithListItem](docs/api/zero_trust_gateway_single_response_with_list_item.html)

Results: Create Zero Trust list response.

SDK operations: `create`.

Key fields to recognise:

- `description`: Provide the list description.
- `items`: Provide the list items.
- `name`: Specify the list name.
- `type`: Specify the list type.

### [ZeroTrustRiskScoring](docs/api/zero_trust_risk_scoring.html)

Results: Dataset created successfully.; Risk events.; Risk scoring behaviors.; Risk score for all users in the account.

SDK operations: `create`, `load`, `update`.

### [ZeroTrustRiskScoringIntegration](docs/api/zero_trust_risk_scoring_integration.html)

Results: Create response.; List response.; Get response.; Delete response.; Update response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `active`: Whether this integration is enabled and should export changes in risk score.
- `id`: The id of the integration, a UUIDv4.
- `reference_id`: A reference ID defined by the client. Should be set to the Access-Okta IDP integration ID. Useful when the risk-score integration needs to be associated with a secondary asset and recalled using that ID.
- `tenant_url`: The base URL for the tenant. for example &quot;https://tenant.okta.com&quot;.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [ClientVersion](docs/api/client_version.html) | `list` | `GET /accounts/{account_id}/devices/client-versions` | Required |
| [ClientVersion](docs/api/client_version.html) | `list` | `GET /accounts/{account_id}/devices/client-versions/target-environments` | Required |
| [Cni](docs/api/cni.html) | `remove` | `DELETE /accounts/{account_id}/cni/cnis/{cni}` | Required |
| [DeploymentGroup](docs/api/deployment_group.html) | `create` | `POST /accounts/{account_id}/devices/deployment-groups` | Required |
| [DeploymentGroup](docs/api/deployment_group.html) | `list` | `GET /accounts/{account_id}/devices/deployment-groups` | Required |
| [DeploymentGroup](docs/api/deployment_group.html) | `load` | `GET /accounts/{account_id}/devices/deployment-groups/{group_id}` | Required |
| [DeploymentGroup](docs/api/deployment_group.html) | `remove` | `DELETE /accounts/{account_id}/devices/deployment-groups/{group_id}` | Required |
| [DeploymentGroup](docs/api/deployment_group.html) | `update` | `PATCH /accounts/{account_id}/devices/deployment-groups/{group_id}` | Required |
| [DexRemoteCommand](docs/api/dex_remote_command.html) | `create` | `POST /accounts/{account_id}/dex/commands` | Required |
| [DexRemoteCommand](docs/api/dex_remote_command.html) | `load` | `GET /accounts/{account_id}/dex/commands` | Required |
| [DexRemoteCommand](docs/api/dex_remote_command.html) | `load` | `GET /accounts/{account_id}/dex/commands/devices` | Required |
| [DexRemoteCommand](docs/api/dex_remote_command.html) | `load` | `GET /accounts/{account_id}/dex/commands/{command_id}/downloads/{filename}` | Required |
| [DexRemoteCommand](docs/api/dex_remote_command.html) | `load` | `GET /accounts/{account_id}/dex/commands/quota` | Required |
| [DexRule](docs/api/dex_rule.html) | `create` | `POST /accounts/{account_id}/dex/rules` | Required |
| [DexRule](docs/api/dex_rule.html) | `load` | `GET /accounts/{account_id}/dex/rules` | Required |
| [DexRule](docs/api/dex_rule.html) | `load` | `GET /accounts/{account_id}/dex/rules/{rule_id}` | Required |
| [DexRule](docs/api/dex_rule.html) | `remove` | `DELETE /accounts/{account_id}/dex/rules/{rule_id}` | Required |
| [DexRule](docs/api/dex_rule.html) | `update` | `PATCH /accounts/{account_id}/dex/rules/{rule_id}` | Required |
| [DexSyntheticApplicationMonitoring](docs/api/dex_synthetic_application_monitoring.html) | `list` | `GET /accounts/{account_id}/dex/colos` | Required |
| [DexSyntheticApplicationMonitoring](docs/api/dex_synthetic_application_monitoring.html) | `load` | `GET /accounts/{account_id}/dex/devices/{device_id}/isps` | Required |
| [DexSyntheticApplicationMonitoring](docs/api/dex_synthetic_application_monitoring.html) | `load` | `GET /accounts/{account_id}/dex/tests/overview` | Required |
| [DexSyntheticApplicationMonitoring](docs/api/dex_synthetic_application_monitoring.html) | `load` | `GET /accounts/{account_id}/dex/http-tests/{test_id}` | Required |
| [DexSyntheticApplicationMonitoring](docs/api/dex_synthetic_application_monitoring.html) | `load` | `GET /accounts/{account_id}/dex/traceroute-tests/{test_id}` | Required |
| [DexSyntheticApplicationMonitoring](docs/api/dex_synthetic_application_monitoring.html) | `load` | `GET /accounts/{account_id}/dex/http-tests/{test_id}/percentiles` | Required |
| [DexSyntheticApplicationMonitoring](docs/api/dex_synthetic_application_monitoring.html) | `load` | `GET /accounts/{account_id}/dex/devices/{device_id}/fleet-status/over-time` | Required |
| [DexSyntheticApplicationMonitoring](docs/api/dex_synthetic_application_monitoring.html) | `load` | `GET /accounts/{account_id}/dex/traceroute-tests/{test_id}/percentiles` | Required |
| [DexSyntheticApplicationMonitoring](docs/api/dex_synthetic_application_monitoring.html) | `load` | `GET /accounts/{account_id}/dex/traceroute-tests/{test_id}/network-path` | Required |
| [DexSyntheticApplicationMonitoring](docs/api/dex_synthetic_application_monitoring.html) | `load` | `GET /accounts/{account_id}/dex/tests/unique-devices` | Required |
| [DexSyntheticApplicationMonitoring](docs/api/dex_synthetic_application_monitoring.html) | `load` | `GET /accounts/{account_id}/dex/traceroute-test-results/{test_result_id}/network-path` | Required |
| [DigitalExperienceMonitoringDevice](docs/api/digital_experience_monitoring_device.html) | `list` | `GET /accounts/{account_id}/dex/devices/{device_id}/fleet-status/live` | Required |
| [DigitalExperienceMonitoringDexDeleteResponseCollection](docs/api/digital_experience_monitoring_dex_delete_response_collection.html) | `remove` | `DELETE /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}` | Required |
| [DigitalExperienceMonitoringDexResponseCollection](docs/api/digital_experience_monitoring_dex_response_collection.html) | `list` | `GET /accounts/{account_id}/dex/devices/dex_tests` | Required |
| [DigitalExperienceMonitoringDexSingle](docs/api/digital_experience_monitoring_dex_single.html) | `create` | `POST /accounts/{account_id}/dex/devices/dex_tests` | Required |
| [DigitalExperienceMonitoringDexSingle](docs/api/digital_experience_monitoring_dex_single.html) | `load` | `GET /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}` | Required |
| [DigitalExperienceMonitoringDexSingle](docs/api/digital_experience_monitoring_dex_single.html) | `update` | `PUT /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}` | Required |
| [DigitalExperienceMonitoringFleetStatusDevice](docs/api/digital_experience_monitoring_fleet_status_device.html) | `list` | `GET /accounts/{account_id}/dex/fleet-status/devices` | Required |
| [DigitalExperienceMonitoringFleetStatusLive](docs/api/digital_experience_monitoring_fleet_status_live.html) | `load` | `GET /accounts/{account_id}/dex/fleet-status/live` | Required |
| [DigitalExperienceMonitoringFleetStatusOverTime](docs/api/digital_experience_monitoring_fleet_status_over_time.html) | `load` | `GET /accounts/{account_id}/dex/fleet-status/over-time` | Required |
| [Interconnect](docs/api/interconnect.html) | `load` | `GET /accounts/{account_id}/cni/interconnects/{icon}/loa` | Required |
| [Interconnect](docs/api/interconnect.html) | `remove` | `DELETE /accounts/{account_id}/cni/interconnects/{icon}` | Required |
| [IpProfile](docs/api/ip_profile.html) | `create` | `POST /accounts/{account_id}/devices/ip-profiles` | Required |
| [IpProfile](docs/api/ip_profile.html) | `list` | `GET /accounts/{account_id}/devices/ip-profiles` | Required |
| [IpProfile](docs/api/ip_profile.html) | `load` | `GET /accounts/{account_id}/devices/ip-profiles/{profile_id}` | Required |
| [IpProfile](docs/api/ip_profile.html) | `remove` | `DELETE /accounts/{account_id}/devices/ip-profiles/{profile_id}` | Required |
| [IpProfile](docs/api/ip_profile.html) | `update` | `PATCH /accounts/{account_id}/devices/ip-profiles/{profile_id}` | Required |
| [List](docs/api/list.html) | `remove` | `DELETE /accounts/{account_id}/gateway/lists/{list_id}` | Required |
| [Location](docs/api/location.html) | `remove` | `DELETE /accounts/{account_id}/gateway/locations/{location_id}` | Required |
| [NscCni](docs/api/nsc_cni.html) | `create` | `POST /accounts/{account_id}/cni/cnis` | Required |
| [NscCni](docs/api/nsc_cni.html) | `list` | `GET /accounts/{account_id}/cni/cnis` | Required |
| [NscCni](docs/api/nsc_cni.html) | `load` | `GET /accounts/{account_id}/cni/cnis/{cni}` | Required |
| [NscCni](docs/api/nsc_cni.html) | `update` | `PUT /accounts/{account_id}/cni/cnis/{cni}` | Required |
| [NscDefaultName](docs/api/nsc_default_name.html) | `load` | `GET /accounts/{account_id}/cni/interconnects/{icon}/loa/default` | Required |
| [NscInterconnect](docs/api/nsc_interconnect.html) | `create` | `POST /accounts/{account_id}/cni/interconnects` | Required |
| [NscInterconnect](docs/api/nsc_interconnect.html) | `list` | `GET /accounts/{account_id}/cni/interconnects` | Required |
| [NscInterconnect](docs/api/nsc_interconnect.html) | `load` | `GET /accounts/{account_id}/cni/interconnects/{icon}` | Required |
| [NscSetting](docs/api/nsc_setting.html) | `load` | `GET /accounts/{account_id}/cni/settings` | Required |
| [NscSetting](docs/api/nsc_setting.html) | `update` | `PUT /accounts/{account_id}/cni/settings` | Required |
| [NscSlotInfo](docs/api/nsc_slot_info.html) | `list` | `GET /accounts/{account_id}/cni/slots` | Required |
| [NscSlotInfo](docs/api/nsc_slot_info.html) | `load` | `GET /accounts/{account_id}/cni/slots/{slot}` | Required |
| [NscStatusInfo](docs/api/nsc_status_info.html) | `load` | `GET /accounts/{account_id}/cni/interconnects/{icon}/status` | Required |
| [OverrideCode](docs/api/override_code.html) | `create` | `POST /accounts/{account_id}/devices/override_codes` | Required |
| [Pacfile](docs/api/pacfile.html) | `remove` | `DELETE /accounts/{account_id}/gateway/pacfiles/{pacfile_id}` | Required |
| [PhysicalDevice](docs/api/physical_device.html) | `create` | `POST /accounts/{account_id}/devices/physical-devices/{device_id}/revoke` | Required |
| [PhysicalDevice](docs/api/physical_device.html) | `list` | `GET /accounts/{account_id}/devices/physical-devices` | Required |
| [PhysicalDevice](docs/api/physical_device.html) | `load` | `GET /accounts/{account_id}/devices/physical-devices/{device_id}` | Required |
| [PhysicalDevice](docs/api/physical_device.html) | `remove` | `DELETE /accounts/{account_id}/devices/physical-devices/{device_id}` | Required |
| [PhysicalDevice](docs/api/physical_device.html) | `remove` | `DELETE /accounts/{account_id}/devices/registrations` | Required |
| [PhysicalDevice](docs/api/physical_device.html) | `update` | `PATCH /accounts/{account_id}/devices/physical-devices/{device_id}` | Required |
| [ProxyEndpoint](docs/api/proxy_endpoint.html) | `remove` | `DELETE /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}` | Required |
| [Registration](docs/api/registration.html) | `create` | `POST /accounts/{account_id}/devices/registrations/revoke` | Required |
| [Registration](docs/api/registration.html) | `create` | `POST /accounts/{account_id}/devices/registrations/unrevoke` | Required |
| [Registration](docs/api/registration.html) | `list` | `GET /accounts/{account_id}/devices/registrations` | Required |
| [Registration](docs/api/registration.html) | `load` | `GET /accounts/{account_id}/devices/registrations/{registration_id}` | Required |
| [Registration](docs/api/registration.html) | `remove` | `DELETE /accounts/{account_id}/devices/registrations/{registration_id}` | Required |
| [Rule](docs/api/rule.html) | `remove` | `DELETE /accounts/{account_id}/gateway/rules/{rule_id}` | Required |
| [TeamsDevicesApiResponseSingle](docs/api/teams_devices_api_response_single.html) | `create` | `POST /accounts/{account_id}/devices/revoke` | Required |
| [TeamsDevicesApiResponseSingle](docs/api/teams_devices_api_response_single.html) | `create` | `POST /accounts/{account_id}/devices/unrevoke` | Required |
| [TeamsDevicesComponentsSchemasResponseCollection](docs/api/teams_devices_components_schemas_response_collection.html) | `list` | `GET /accounts/{account_id}/devices/networks` | Required |
| [TeamsDevicesComponentsSchemasResponseCollection](docs/api/teams_devices_components_schemas_response_collection.html) | `remove` | `DELETE /accounts/{account_id}/devices/networks/{network_id}` | Required |
| [TeamsDevicesComponentsSchemasSingle](docs/api/teams_devices_components_schemas_single.html) | `create` | `POST /accounts/{account_id}/devices/networks` | Required |
| [TeamsDevicesComponentsSchemasSingle](docs/api/teams_devices_components_schemas_single.html) | `load` | `GET /accounts/{account_id}/devices/networks/{network_id}` | Required |
| [TeamsDevicesComponentsSchemasSingle](docs/api/teams_devices_components_schemas_single.html) | `update` | `PUT /accounts/{account_id}/devices/networks/{network_id}` | Required |
| [TeamsDevicesDefaultDeviceSetting](docs/api/teams_devices_default_device_setting.html) | `load` | `GET /accounts/{account_id}/devices/policy` | Required |
| [TeamsDevicesDefaultDeviceSetting](docs/api/teams_devices_default_device_setting.html) | `update` | `PATCH /accounts/{account_id}/devices/policy` | Required |
| [TeamsDevicesDevice](docs/api/teams_devices_device.html) | `list` | `GET /accounts/{account_id}/devices` | Required |
| [TeamsDevicesDevice](docs/api/teams_devices_device.html) | `load` | `GET /accounts/{account_id}/devices/{device_id}` | Required |
| [TeamsDevicesDeviceSetting](docs/api/teams_devices_device_setting.html) | `create` | `POST /accounts/{account_id}/devices/policy` | Required |
| [TeamsDevicesDeviceSetting](docs/api/teams_devices_device_setting.html) | `load` | `GET /accounts/{account_id}/devices/policy/{policy_id}` | Required |
| [TeamsDevicesDeviceSetting](docs/api/teams_devices_device_setting.html) | `update` | `PATCH /accounts/{account_id}/devices/policy/{policy_id}` | Required |
| [TeamsDevicesDeviceSettingsResponseCollection](docs/api/teams_devices_device_settings_response_collection.html) | `list` | `GET /accounts/{account_id}/devices/policies` | Required |
| [TeamsDevicesDeviceSettingsResponseCollection](docs/api/teams_devices_device_settings_response_collection.html) | `remove` | `DELETE /accounts/{account_id}/devices/policy/{policy_id}` | Required |
| [TeamsDevicesFallbackDomainResponseCollection](docs/api/teams_devices_fallback_domain_response_collection.html) | `list` | `GET /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains` | Required |
| [TeamsDevicesFallbackDomainResponseCollection](docs/api/teams_devices_fallback_domain_response_collection.html) | `list` | `GET /accounts/{account_id}/devices/policy/fallback_domains` | Required |
| [TeamsDevicesFallbackDomainResponseCollection](docs/api/teams_devices_fallback_domain_response_collection.html) | `remove` | `DELETE /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains` | Required |
| [TeamsDevicesFallbackDomainResponseCollection](docs/api/teams_devices_fallback_domain_response_collection.html) | `remove` | `DELETE /accounts/{account_id}/devices/policy/fallback_domains` | Required |
| [TeamsDevicesFallbackDomainResponseCollection](docs/api/teams_devices_fallback_domain_response_collection.html) | `update` | `PUT /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains` | Required |
| [TeamsDevicesFallbackDomainResponseCollection](docs/api/teams_devices_fallback_domain_response_collection.html) | `update` | `PUT /accounts/{account_id}/devices/policy/fallback_domains` | Required |
| [TeamsDevicesGlobalWarpOverride](docs/api/teams_devices_global_warp_override.html) | `create` | `POST /accounts/{account_id}/devices/resilience/disconnect` | Required |
| [TeamsDevicesGlobalWarpOverride](docs/api/teams_devices_global_warp_override.html) | `load` | `GET /accounts/{account_id}/devices/resilience/disconnect` | Required |
| [TeamsDevicesId](docs/api/teams_devices_id.html) | `remove` | `DELETE /accounts/{account_id}/devices/posture/{rule_id}` | Required |
| [TeamsDevicesOverrideCode](docs/api/teams_devices_override_code.html) | `load` | `GET /accounts/{account_id}/devices/{device_id}/override_codes` | Required |
| [TeamsDevicesResponseCollection](docs/api/teams_devices_response_collection.html) | `list` | `GET /accounts/{account_id}/devices/posture` | Required |
| [TeamsDevicesSchemasId](docs/api/teams_devices_schemas_id.html) | `remove` | `DELETE /accounts/{account_id}/devices/posture/integration/{integration_id}` | Required |
| [TeamsDevicesSchemasResponseCollection](docs/api/teams_devices_schemas_response_collection.html) | `list` | `GET /accounts/{account_id}/devices/posture/integration` | Required |
| [TeamsDevicesSchemasSingle](docs/api/teams_devices_schemas_single.html) | `create` | `POST /accounts/{account_id}/devices/posture/integration` | Required |
| [TeamsDevicesSchemasSingle](docs/api/teams_devices_schemas_single.html) | `load` | `GET /accounts/{account_id}/devices/posture/integration/{integration_id}` | Required |
| [TeamsDevicesSchemasSingle](docs/api/teams_devices_schemas_single.html) | `update` | `PATCH /accounts/{account_id}/devices/posture/integration/{integration_id}` | Required |
| [TeamsDevicesSingle](docs/api/teams_devices_single.html) | `create` | `POST /accounts/{account_id}/devices/posture` | Required |
| [TeamsDevicesSingle](docs/api/teams_devices_single.html) | `load` | `GET /accounts/{account_id}/devices/posture/{rule_id}` | Required |
| [TeamsDevicesSingle](docs/api/teams_devices_single.html) | `update` | `PUT /accounts/{account_id}/devices/posture/{rule_id}` | Required |
| [TeamsDevicesSplitTunnelIncludeResponseCollection](docs/api/teams_devices_split_tunnel_include_response_collection.html) | `list` | `GET /accounts/{account_id}/devices/policy/{policy_id}/include` | Required |
| [TeamsDevicesSplitTunnelIncludeResponseCollection](docs/api/teams_devices_split_tunnel_include_response_collection.html) | `list` | `GET /accounts/{account_id}/devices/policy/include` | Required |
| [TeamsDevicesSplitTunnelIncludeResponseCollection](docs/api/teams_devices_split_tunnel_include_response_collection.html) | `update` | `PUT /accounts/{account_id}/devices/policy/{policy_id}/include` | Required |
| [TeamsDevicesSplitTunnelIncludeResponseCollection](docs/api/teams_devices_split_tunnel_include_response_collection.html) | `update` | `PUT /accounts/{account_id}/devices/policy/include` | Required |
| [TeamsDevicesSplitTunnelResponseCollection](docs/api/teams_devices_split_tunnel_response_collection.html) | `list` | `GET /accounts/{account_id}/devices/policy/{policy_id}/exclude` | Required |
| [TeamsDevicesSplitTunnelResponseCollection](docs/api/teams_devices_split_tunnel_response_collection.html) | `list` | `GET /accounts/{account_id}/devices/policy/exclude` | Required |
| [TeamsDevicesSplitTunnelResponseCollection](docs/api/teams_devices_split_tunnel_response_collection.html) | `remove` | `DELETE /accounts/{account_id}/devices/policy/{policy_id}/exclude` | Required |
| [TeamsDevicesSplitTunnelResponseCollection](docs/api/teams_devices_split_tunnel_response_collection.html) | `remove` | `DELETE /accounts/{account_id}/devices/policy/exclude` | Required |
| [TeamsDevicesSplitTunnelResponseCollection](docs/api/teams_devices_split_tunnel_response_collection.html) | `update` | `PUT /accounts/{account_id}/devices/policy/{policy_id}/exclude` | Required |
| [TeamsDevicesSplitTunnelResponseCollection](docs/api/teams_devices_split_tunnel_response_collection.html) | `update` | `PUT /accounts/{account_id}/devices/policy/exclude` | Required |
| [TeamsDevicesZeroTrustAccountDeviceSetting](docs/api/teams_devices_zero_trust_account_device_setting.html) | `load` | `GET /accounts/{account_id}/devices/settings` | Required |
| [TeamsDevicesZeroTrustAccountDeviceSetting](docs/api/teams_devices_zero_trust_account_device_setting.html) | `patch` | `PATCH /accounts/{account_id}/devices/settings` | Required |
| [TeamsDevicesZeroTrustAccountDeviceSetting](docs/api/teams_devices_zero_trust_account_device_setting.html) | `remove` | `DELETE /accounts/{account_id}/devices/settings` | Required |
| [TeamsDevicesZeroTrustAccountDeviceSetting](docs/api/teams_devices_zero_trust_account_device_setting.html) | `update` | `PUT /accounts/{account_id}/devices/settings` | Required |
| [Tunnel](docs/api/tunnel.html) | `list` | `GET /accounts/{account_id}/tunnels` | Required |
| [TunnelCfdTunnelResponseCollection](docs/api/tunnel_cfd_tunnel_response_collection.html) | `list` | `GET /accounts/{account_id}/cfd_tunnel` | Required |
| [TunnelCfdTunnelResponseSingle](docs/api/tunnel_cfd_tunnel_response_single.html) | `create` | `POST /accounts/{account_id}/cfd_tunnel` | Required |
| [TunnelCfdTunnelResponseSingle](docs/api/tunnel_cfd_tunnel_response_single.html) | `load` | `GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}` | Required |
| [TunnelCfdTunnelResponseSingle](docs/api/tunnel_cfd_tunnel_response_single.html) | `remove` | `DELETE /accounts/{account_id}/cfd_tunnel/{tunnel_id}` | Required |
| [TunnelCfdTunnelResponseSingle](docs/api/tunnel_cfd_tunnel_response_single.html) | `update` | `PATCH /accounts/{account_id}/cfd_tunnel/{tunnel_id}` | Required |
| [TunnelConfiguration](docs/api/tunnel_configuration.html) | `load` | `GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations` | Required |
| [TunnelConfiguration](docs/api/tunnel_configuration.html) | `update` | `PUT /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations` | Required |
| [TunnelEmpty](docs/api/tunnel_empty.html) | `remove` | `DELETE /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections` | Required |
| [TunnelEmpty](docs/api/tunnel_empty.html) | `update` | `PUT /accounts/{account_id}/warp_connector/{tunnel_id}/failover` | Required |
| [TunnelHostnameRouteResponseCollection](docs/api/tunnel_hostname_route_response_collection.html) | `list` | `GET /accounts/{account_id}/zerotrust/routes/hostname` | Required |
| [TunnelHostnameRouteResponseSingle](docs/api/tunnel_hostname_route_response_single.html) | `create` | `POST /accounts/{account_id}/zerotrust/routes/hostname` | Required |
| [TunnelHostnameRouteResponseSingle](docs/api/tunnel_hostname_route_response_single.html) | `load` | `GET /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}` | Required |
| [TunnelHostnameRouteResponseSingle](docs/api/tunnel_hostname_route_response_single.html) | `remove` | `DELETE /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}` | Required |
| [TunnelHostnameRouteResponseSingle](docs/api/tunnel_hostname_route_response_single.html) | `update` | `PATCH /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}` | Required |
| [TunnelMeshConfigurationResponseSingle](docs/api/tunnel_mesh_configuration_response_single.html) | `load` | `GET /accounts/{account_id}/warp_connector/{tunnel_id}/configurations` | Required |
| [TunnelMeshConfigurationResponseSingle](docs/api/tunnel_mesh_configuration_response_single.html) | `update` | `PUT /accounts/{account_id}/warp_connector/{tunnel_id}/configurations` | Required |
| [TunnelRouteResponseSingle](docs/api/tunnel_route_response_single.html) | `create` | `POST /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}` | Required |
| [TunnelRouteResponseSingle](docs/api/tunnel_route_response_single.html) | `create` | `POST /accounts/{account_id}/teamnet/routes` | Required |
| [TunnelRouteResponseSingle](docs/api/tunnel_route_response_single.html) | `load` | `GET /accounts/{account_id}/teamnet/routes/{route_id}` | Required |
| [TunnelRouteResponseSingle](docs/api/tunnel_route_response_single.html) | `remove` | `DELETE /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}` | Required |
| [TunnelRouteResponseSingle](docs/api/tunnel_route_response_single.html) | `remove` | `DELETE /accounts/{account_id}/teamnet/routes/{route_id}` | Required |
| [TunnelRouteResponseSingle](docs/api/tunnel_route_response_single.html) | `update` | `PATCH /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}` | Required |
| [TunnelRouteResponseSingle](docs/api/tunnel_route_response_single.html) | `update` | `PATCH /accounts/{account_id}/teamnet/routes/{route_id}` | Required |
| [TunnelSubnetResponseCollection](docs/api/tunnel_subnet_response_collection.html) | `list` | `GET /accounts/{account_id}/zerotrust/subnets` | Required |
| [TunnelSubnetResponseSingle](docs/api/tunnel_subnet_response_single.html) | `create` | `POST /accounts/{account_id}/zerotrust/subnets/warp` | Required |
| [TunnelSubnetResponseSingle](docs/api/tunnel_subnet_response_single.html) | `load` | `GET /accounts/{account_id}/zerotrust/subnets/initial_resolved_ip/{address_family}` | Required |
| [TunnelSubnetResponseSingle](docs/api/tunnel_subnet_response_single.html) | `patch` | `PATCH /accounts/{account_id}/zerotrust/subnets/cloudflare_source/{address_family}` | Required |
| [TunnelSubnetResponseSingle](docs/api/tunnel_subnet_response_single.html) | `update` | `PUT /accounts/{account_id}/zerotrust/subnets/initial_resolved_ip/{address_family}` | Required |
| [TunnelSubnetResponseSingleNullable](docs/api/tunnel_subnet_response_single_nullable.html) | `remove` | `DELETE /accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}` | Required |
| [TunnelTeamnetResponseCollection](docs/api/tunnel_teamnet_response_collection.html) | `list` | `GET /accounts/{account_id}/teamnet/routes` | Required |
| [TunnelTeamnetResponseSingle](docs/api/tunnel_teamnet_response_single.html) | `load` | `GET /accounts/{account_id}/teamnet/routes/ip/{ip}` | Required |
| [TunnelTunnelClient](docs/api/tunnel_tunnel_client.html) | `load` | `GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}` | Required |
| [TunnelTunnelConnection](docs/api/tunnel_tunnel_connection.html) | `list` | `GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections` | Required |
| [TunnelTunnelResponseToken](docs/api/tunnel_tunnel_response_token.html) | `create` | `POST /accounts/{account_id}/cfd_tunnel/{tunnel_id}/management` | Required |
| [TunnelTunnelResponseToken](docs/api/tunnel_tunnel_response_token.html) | `list` | `GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}/token` | Required |
| [TunnelTunnelResponseToken](docs/api/tunnel_tunnel_response_token.html) | `list` | `GET /accounts/{account_id}/warp_connector/{tunnel_id}/token` | Required |
| [TunnelTunnelWarpConnectorClient](docs/api/tunnel_tunnel_warp_connector_client.html) | `load` | `GET /accounts/{account_id}/warp_connector/{tunnel_id}/connectors/{connector_id}` | Required |
| [TunnelTunnelWarpConnectorConnection](docs/api/tunnel_tunnel_warp_connector_connection.html) | `list` | `GET /accounts/{account_id}/warp_connector/{tunnel_id}/connections` | Required |
| [TunnelVnetResponseCollection](docs/api/tunnel_vnet_response_collection.html) | `list` | `GET /accounts/{account_id}/teamnet/virtual_networks` | Required |
| [TunnelVnetResponseSingle](docs/api/tunnel_vnet_response_single.html) | `create` | `POST /accounts/{account_id}/teamnet/virtual_networks` | Required |
| [TunnelVnetResponseSingle](docs/api/tunnel_vnet_response_single.html) | `load` | `GET /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}` | Required |
| [TunnelVnetResponseSingle](docs/api/tunnel_vnet_response_single.html) | `remove` | `DELETE /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}` | Required |
| [TunnelVnetResponseSingle](docs/api/tunnel_vnet_response_single.html) | `update` | `PATCH /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}` | Required |
| [TunnelWarpConnectorResponseCollection](docs/api/tunnel_warp_connector_response_collection.html) | `list` | `GET /accounts/{account_id}/warp_connector` | Required |
| [TunnelWarpConnectorResponseSingle](docs/api/tunnel_warp_connector_response_single.html) | `create` | `POST /accounts/{account_id}/warp_connector` | Required |
| [TunnelWarpConnectorResponseSingle](docs/api/tunnel_warp_connector_response_single.html) | `load` | `GET /accounts/{account_id}/warp_connector/{tunnel_id}` | Required |
| [TunnelWarpConnectorResponseSingle](docs/api/tunnel_warp_connector_response_single.html) | `remove` | `DELETE /accounts/{account_id}/warp_connector/{tunnel_id}` | Required |
| [TunnelWarpConnectorResponseSingle](docs/api/tunnel_warp_connector_response_single.html) | `update` | `PATCH /accounts/{account_id}/warp_connector/{tunnel_id}` | Required |
| [TunnelZeroTrustConnectivitySetting](docs/api/tunnel_zero_trust_connectivity_setting.html) | `list` | `GET /accounts/{account_id}/zerotrust/connectivity_settings` | Required |
| [TunnelZeroTrustConnectivitySetting](docs/api/tunnel_zero_trust_connectivity_setting.html) | `update` | `PATCH /accounts/{account_id}/zerotrust/connectivity_settings` | Required |
| [Warp](docs/api/warp.html) | `load` | `GET /accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}` | Required |
| [Warp](docs/api/warp.html) | `update` | `PATCH /accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}` | Required |
| [WarpChangeEvent](docs/api/warp_change_event.html) | `list` | `GET /accounts/{account_id}/dex/warp-change-events` | Required |
| [WarpTeamsDeviceApiOther](docs/api/warp_teams_device_api_other.html) | `list` | `GET /accounts/{account_id}/devices/registrations/{registration_id}/override_codes` | Required |
| [ZeroTrustGatewayApplicationsReviewStatus](docs/api/zero_trust_gateway_applications_review_status.html) | `load` | `GET /accounts/{account_id}/gateway/apps/review_status` | Required |
| [ZeroTrustGatewayApplicationsReviewStatus](docs/api/zero_trust_gateway_applications_review_status.html) | `update` | `PUT /accounts/{account_id}/gateway/apps/review_status` | Required |
| [ZeroTrustGatewayCsvOperationSingle](docs/api/zero_trust_gateway_csv_operation_single.html) | `create` | `POST /accounts/{account_id}/gateway/lists/upload` | Required |
| [ZeroTrustGatewayCustomCertificateSetting](docs/api/zero_trust_gateway_custom_certificate_setting.html) | `load` | `GET /accounts/{account_id}/gateway/configuration/custom_certificate` | Required |
| [ZeroTrustGatewayGatewayAccount](docs/api/zero_trust_gateway_gateway_account.html) | `create` | `POST /accounts/{account_id}/gateway` | Required |
| [ZeroTrustGatewayGatewayAccount](docs/api/zero_trust_gateway_gateway_account.html) | `load` | `GET /accounts/{account_id}/gateway` | Required |
| [ZeroTrustGatewayGatewayAccountConfig](docs/api/zero_trust_gateway_gateway_account_config.html) | `load` | `GET /accounts/{account_id}/gateway/configuration` | Required |
| [ZeroTrustGatewayGatewayAccountConfig](docs/api/zero_trust_gateway_gateway_account_config.html) | `patch` | `PATCH /accounts/{account_id}/gateway/configuration` | Required |
| [ZeroTrustGatewayGatewayAccountConfig](docs/api/zero_trust_gateway_gateway_account_config.html) | `update` | `PUT /accounts/{account_id}/gateway/configuration` | Required |
| [ZeroTrustGatewayGatewayAccountEgressCidrPairList](docs/api/zero_trust_gateway_gateway_account_egress_cidr_pair_list.html) | `list` | `GET /accounts/{account_id}/gateway/egress_cidr_pairs` | Required |
| [ZeroTrustGatewayGatewayAccountLoggingSetting](docs/api/zero_trust_gateway_gateway_account_logging_setting.html) | `load` | `GET /accounts/{account_id}/gateway/logging` | Required |
| [ZeroTrustGatewayGatewayAccountLoggingSetting](docs/api/zero_trust_gateway_gateway_account_logging_setting.html) | `update` | `PUT /accounts/{account_id}/gateway/logging` | Required |
| [ZeroTrustGatewayListItemResponseCollection](docs/api/zero_trust_gateway_list_item_response_collection.html) | `list` | `GET /accounts/{account_id}/gateway/lists/{list_id}/items` | Required |
| [ZeroTrustGatewayListSingle](docs/api/zero_trust_gateway_list_single.html) | `load` | `GET /accounts/{account_id}/gateway/lists/{list_id}` | Required |
| [ZeroTrustGatewayListSingle](docs/api/zero_trust_gateway_list_single.html) | `patch` | `PATCH /accounts/{account_id}/gateway/lists/{list_id}` | Required |
| [ZeroTrustGatewayListSingle](docs/api/zero_trust_gateway_list_single.html) | `update` | `PUT /accounts/{account_id}/gateway/lists/{list_id}` | Required |
| [ZeroTrustGatewayResponseCollection](docs/api/zero_trust_gateway_response_collection.html) | `list` | `GET /accounts/{account_id}/gateway/certificates` | Required |
| [ZeroTrustGatewayResponseCollection10](docs/api/zero_trust_gateway_response_collection_10.html) | `list` | `GET /accounts/{account_id}/gateway/pacfiles` | Required |
| [ZeroTrustGatewayResponseCollection2](docs/api/zero_trust_gateway_response_collection_2.html) | `list` | `GET /accounts/{account_id}/gateway/dns_destination_ips` | Required |
| [ZeroTrustGatewayResponseCollection3](docs/api/zero_trust_gateway_response_collection_3.html) | `list` | `GET /accounts/{account_id}/gateway/lists` | Required |
| [ZeroTrustGatewayResponseCollection4](docs/api/zero_trust_gateway_response_collection_4.html) | `list` | `GET /accounts/{account_id}/gateway/operations` | Required |
| [ZeroTrustGatewayResponseCollection5](docs/api/zero_trust_gateway_response_collection_5.html) | `list` | `GET /accounts/{account_id}/gateway/locations` | Required |
| [ZeroTrustGatewayResponseCollection6](docs/api/zero_trust_gateway_response_collection_6.html) | `list` | `GET /accounts/{account_id}/gateway/rules` | Required |
| [ZeroTrustGatewayResponseCollection6](docs/api/zero_trust_gateway_response_collection_6.html) | `list` | `GET /accounts/{account_id}/gateway/rules/tenant` | Required |
| [ZeroTrustGatewayResponseCollection6](docs/api/zero_trust_gateway_response_collection_6.html) | `update` | `PATCH /accounts/{account_id}/gateway/rules` | Required |
| [ZeroTrustGatewayResponseCollection7](docs/api/zero_trust_gateway_response_collection_7.html) | `list` | `GET /accounts/{account_id}/gateway/app_types` | Required |
| [ZeroTrustGatewayResponseCollection8](docs/api/zero_trust_gateway_response_collection_8.html) | `list` | `GET /accounts/{account_id}/gateway/categories` | Required |
| [ZeroTrustGatewayResponseCollection9](docs/api/zero_trust_gateway_response_collection_9.html) | `list` | `GET /accounts/{account_id}/gateway/proxy_endpoints` | Required |
| [ZeroTrustGatewaySingle](docs/api/zero_trust_gateway_single.html) | `create` | `POST /accounts/{account_id}/gateway/certificates/{certificate_id}/activate` | Required |
| [ZeroTrustGatewaySingle](docs/api/zero_trust_gateway_single.html) | `create` | `POST /accounts/{account_id}/gateway/certificates/{certificate_id}/deactivate` | Required |
| [ZeroTrustGatewaySingle](docs/api/zero_trust_gateway_single.html) | `create` | `POST /accounts/{account_id}/gateway/certificates` | Required |
| [ZeroTrustGatewaySingle](docs/api/zero_trust_gateway_single.html) | `load` | `GET /accounts/{account_id}/gateway/certificates/{certificate_id}` | Required |
| [ZeroTrustGatewaySingle](docs/api/zero_trust_gateway_single.html) | `remove` | `DELETE /accounts/{account_id}/gateway/certificates/{certificate_id}` | Required |
| [ZeroTrustGatewaySingleResponse2](docs/api/zero_trust_gateway_single_response_2.html) | `load` | `GET /accounts/{account_id}/gateway/operations/{operation_id}` | Required |
| [ZeroTrustGatewaySingleResponse3](docs/api/zero_trust_gateway_single_response_3.html) | `create` | `POST /accounts/{account_id}/gateway/locations` | Required |
| [ZeroTrustGatewaySingleResponse3](docs/api/zero_trust_gateway_single_response_3.html) | `load` | `GET /accounts/{account_id}/gateway/locations/{location_id}` | Required |
| [ZeroTrustGatewaySingleResponse3](docs/api/zero_trust_gateway_single_response_3.html) | `update` | `PUT /accounts/{account_id}/gateway/locations/{location_id}` | Required |
| [ZeroTrustGatewaySingleResponse4](docs/api/zero_trust_gateway_single_response_4.html) | `create` | `POST /accounts/{account_id}/gateway/rules/{rule_id}/reset_expiration` | Required |
| [ZeroTrustGatewaySingleResponse4](docs/api/zero_trust_gateway_single_response_4.html) | `create` | `POST /accounts/{account_id}/gateway/rules` | Required |
| [ZeroTrustGatewaySingleResponse4](docs/api/zero_trust_gateway_single_response_4.html) | `load` | `GET /accounts/{account_id}/gateway/rules/{rule_id}` | Required |
| [ZeroTrustGatewaySingleResponse4](docs/api/zero_trust_gateway_single_response_4.html) | `patch` | `PATCH /accounts/{account_id}/gateway/rules/{rule_id}` | Required |
| [ZeroTrustGatewaySingleResponse4](docs/api/zero_trust_gateway_single_response_4.html) | `update` | `PUT /accounts/{account_id}/gateway/rules/{rule_id}` | Required |
| [ZeroTrustGatewaySingleResponse5](docs/api/zero_trust_gateway_single_response_5.html) | `create` | `POST /accounts/{account_id}/gateway/proxy_endpoints` | Required |
| [ZeroTrustGatewaySingleResponse5](docs/api/zero_trust_gateway_single_response_5.html) | `load` | `GET /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}` | Required |
| [ZeroTrustGatewaySingleResponse5](docs/api/zero_trust_gateway_single_response_5.html) | `update` | `PATCH /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}` | Required |
| [ZeroTrustGatewaySingleResponse6](docs/api/zero_trust_gateway_single_response_6.html) | `create` | `POST /accounts/{account_id}/gateway/audit_ssh_settings/rotate_seed` | Required |
| [ZeroTrustGatewaySingleResponse6](docs/api/zero_trust_gateway_single_response_6.html) | `load` | `GET /accounts/{account_id}/gateway/audit_ssh_settings` | Required |
| [ZeroTrustGatewaySingleResponse6](docs/api/zero_trust_gateway_single_response_6.html) | `update` | `PUT /accounts/{account_id}/gateway/audit_ssh_settings` | Required |
| [ZeroTrustGatewaySingleResponse7](docs/api/zero_trust_gateway_single_response_7.html) | `create` | `POST /accounts/{account_id}/gateway/pacfiles` | Required |
| [ZeroTrustGatewaySingleResponse7](docs/api/zero_trust_gateway_single_response_7.html) | `load` | `GET /accounts/{account_id}/gateway/pacfiles/{pacfile_id}` | Required |
| [ZeroTrustGatewaySingleResponse7](docs/api/zero_trust_gateway_single_response_7.html) | `update` | `PUT /accounts/{account_id}/gateway/pacfiles/{pacfile_id}` | Required |
| [ZeroTrustGatewaySingleResponseWithListItem](docs/api/zero_trust_gateway_single_response_with_list_item.html) | `create` | `POST /accounts/{account_id}/gateway/lists` | Required |
| [ZeroTrustRiskScoring](docs/api/zero_trust_risk_scoring.html) | `create` | `POST /accounts/{account_id}/zt_risk_scoring/{user_id}/reset` | Required |
| [ZeroTrustRiskScoring](docs/api/zero_trust_risk_scoring.html) | `load` | `GET /accounts/{account_id}/zt_risk_scoring/{user_id}` | Required |
| [ZeroTrustRiskScoring](docs/api/zero_trust_risk_scoring.html) | `load` | `GET /accounts/{account_id}/zt_risk_scoring/behaviors` | Required |
| [ZeroTrustRiskScoring](docs/api/zero_trust_risk_scoring.html) | `load` | `GET /accounts/{account_id}/zt_risk_scoring/summary` | Required |
| [ZeroTrustRiskScoring](docs/api/zero_trust_risk_scoring.html) | `update` | `PUT /accounts/{account_id}/zt_risk_scoring/behaviors` | Required |
| [ZeroTrustRiskScoringIntegration](docs/api/zero_trust_risk_scoring_integration.html) | `create` | `POST /accounts/{account_id}/zt_risk_scoring/integrations` | Required |
| [ZeroTrustRiskScoringIntegration](docs/api/zero_trust_risk_scoring_integration.html) | `list` | `GET /accounts/{account_id}/zt_risk_scoring/integrations` | Required |
| [ZeroTrustRiskScoringIntegration](docs/api/zero_trust_risk_scoring_integration.html) | `load` | `GET /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}` | Required |
| [ZeroTrustRiskScoringIntegration](docs/api/zero_trust_risk_scoring_integration.html) | `load` | `GET /accounts/{account_id}/zt_risk_scoring/integrations/reference_id/{reference_id}` | Required |
| [ZeroTrustRiskScoringIntegration](docs/api/zero_trust_risk_scoring_integration.html) | `remove` | `DELETE /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}` | Required |
| [ZeroTrustRiskScoringIntegration](docs/api/zero_trust_risk_scoring_integration.html) | `update` | `PUT /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}` | Required |

## Connect to the API

- Client API: `https://api.cloudflare.com/client/v4`

The default credential is sent in the `X-Auth-Email` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudflare-zero-trust_list`: List records for an entity. Supported entities: `client_version`, `deployment_group`, `dex_synthetic_application_monitoring`, `digital_experience_monitoring_device`, `digital_experience_monitoring_dex_response_collection`, `digital_experience_monitoring_fleet_status_device`, `ip_profile`, `nsc_cni`, `nsc_interconnect`, `nsc_slot_info`, `physical_device`, `registration`, `teams_devices_components_schemas_response_collection`, `teams_devices_device`, `teams_devices_device_settings_response_collection`, `teams_devices_fallback_domain_response_collection`, `teams_devices_response_collection`, `teams_devices_schemas_response_collection`, `teams_devices_split_tunnel_include_response_collection`, `teams_devices_split_tunnel_response_collection`, `tunnel`, `tunnel_cfd_tunnel_response_collection`, `tunnel_hostname_route_response_collection`, `tunnel_subnet_response_collection`, `tunnel_teamnet_response_collection`, `tunnel_tunnel_connection`, `tunnel_tunnel_response_token`, `tunnel_tunnel_warp_connector_connection`, `tunnel_vnet_response_collection`, `tunnel_warp_connector_response_collection`, `tunnel_zero_trust_connectivity_setting`, `warp_change_event`, `warp_teams_device_api_other`, `zero_trust_gateway_gateway_account_egress_cidr_pair_list`, `zero_trust_gateway_list_item_response_collection`, `zero_trust_gateway_response_collection`, `zero_trust_gateway_response_collection_10`, `zero_trust_gateway_response_collection_2`, `zero_trust_gateway_response_collection_3`, `zero_trust_gateway_response_collection_4`, `zero_trust_gateway_response_collection_5`, `zero_trust_gateway_response_collection_6`, `zero_trust_gateway_response_collection_7`, `zero_trust_gateway_response_collection_8`, `zero_trust_gateway_response_collection_9`, `zero_trust_risk_scoring_integration`.
- `cloudflare-zero-trust_load`: Load one record for an entity. Supported entities: `deployment_group`, `dex_remote_command`, `dex_rule`, `dex_synthetic_application_monitoring`, `digital_experience_monitoring_dex_single`, `digital_experience_monitoring_fleet_status_live`, `digital_experience_monitoring_fleet_status_over_time`, `interconnect`, `ip_profile`, `nsc_cni`, `nsc_default_name`, `nsc_interconnect`, `nsc_setting`, `nsc_slot_info`, `nsc_status_info`, `physical_device`, `registration`, `teams_devices_components_schemas_single`, `teams_devices_default_device_setting`, `teams_devices_device`, `teams_devices_device_setting`, `teams_devices_global_warp_override`, `teams_devices_override_code`, `teams_devices_schemas_single`, `teams_devices_single`, `teams_devices_zero_trust_account_device_setting`, `tunnel_cfd_tunnel_response_single`, `tunnel_configuration`, `tunnel_hostname_route_response_single`, `tunnel_mesh_configuration_response_single`, `tunnel_route_response_single`, `tunnel_subnet_response_single`, `tunnel_teamnet_response_single`, `tunnel_tunnel_client`, `tunnel_tunnel_warp_connector_client`, `tunnel_vnet_response_single`, `tunnel_warp_connector_response_single`, `warp`, `zero_trust_gateway_applications_review_status`, `zero_trust_gateway_custom_certificate_setting`, `zero_trust_gateway_gateway_account`, `zero_trust_gateway_gateway_account_config`, `zero_trust_gateway_gateway_account_logging_setting`, `zero_trust_gateway_list_single`, `zero_trust_gateway_single`, `zero_trust_gateway_single_response_2`, `zero_trust_gateway_single_response_3`, `zero_trust_gateway_single_response_4`, `zero_trust_gateway_single_response_5`, `zero_trust_gateway_single_response_6`, `zero_trust_gateway_single_response_7`, `zero_trust_risk_scoring`, `zero_trust_risk_scoring_integration`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

