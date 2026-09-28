package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CloudflareZeroTrust",
			"slug": "cloudflare-zero-trust",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.cloudflare.com/client/v4",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-Auth-Email",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"client_version": map[string]any{},
				"cni": map[string]any{},
				"deployment_group": map[string]any{},
				"dex_remote_command": map[string]any{},
				"dex_rule": map[string]any{},
				"dex_synthetic_application_monitoring": map[string]any{},
				"digital_experience_monitoring_device": map[string]any{},
				"digital_experience_monitoring_dex_delete_response_collection": map[string]any{},
				"digital_experience_monitoring_dex_response_collection": map[string]any{},
				"digital_experience_monitoring_dex_single": map[string]any{},
				"digital_experience_monitoring_fleet_status_device": map[string]any{},
				"digital_experience_monitoring_fleet_status_live": map[string]any{},
				"digital_experience_monitoring_fleet_status_over_time": map[string]any{},
				"interconnect": map[string]any{},
				"ip_profile": map[string]any{},
				"list": map[string]any{},
				"location": map[string]any{},
				"nsc_cni": map[string]any{},
				"nsc_default_name": map[string]any{},
				"nsc_interconnect": map[string]any{},
				"nsc_setting": map[string]any{},
				"nsc_slot_info": map[string]any{},
				"nsc_status_info": map[string]any{},
				"override_code": map[string]any{},
				"pacfile": map[string]any{},
				"physical_device": map[string]any{},
				"proxy_endpoint": map[string]any{},
				"registration": map[string]any{},
				"rule": map[string]any{},
				"teams_devices_api_response_single": map[string]any{},
				"teams_devices_components_schemas_response_collection": map[string]any{},
				"teams_devices_components_schemas_single": map[string]any{},
				"teams_devices_default_device_setting": map[string]any{},
				"teams_devices_device": map[string]any{},
				"teams_devices_device_setting": map[string]any{},
				"teams_devices_device_settings_response_collection": map[string]any{},
				"teams_devices_fallback_domain_response_collection": map[string]any{},
				"teams_devices_global_warp_override": map[string]any{},
				"teams_devices_id": map[string]any{},
				"teams_devices_override_code": map[string]any{},
				"teams_devices_response_collection": map[string]any{},
				"teams_devices_schemas_id": map[string]any{},
				"teams_devices_schemas_response_collection": map[string]any{},
				"teams_devices_schemas_single": map[string]any{},
				"teams_devices_single": map[string]any{},
				"teams_devices_split_tunnel_include_response_collection": map[string]any{},
				"teams_devices_split_tunnel_response_collection": map[string]any{},
				"teams_devices_zero_trust_account_device_setting": map[string]any{},
				"tunnel": map[string]any{},
				"tunnel_cfd_tunnel_response_collection": map[string]any{},
				"tunnel_cfd_tunnel_response_single": map[string]any{},
				"tunnel_configuration": map[string]any{},
				"tunnel_empty": map[string]any{},
				"tunnel_hostname_route_response_collection": map[string]any{},
				"tunnel_hostname_route_response_single": map[string]any{},
				"tunnel_mesh_configuration_response_single": map[string]any{},
				"tunnel_route_response_single": map[string]any{},
				"tunnel_subnet_response_collection": map[string]any{},
				"tunnel_subnet_response_single": map[string]any{},
				"tunnel_subnet_response_single_nullable": map[string]any{},
				"tunnel_teamnet_response_collection": map[string]any{},
				"tunnel_teamnet_response_single": map[string]any{},
				"tunnel_tunnel_client": map[string]any{},
				"tunnel_tunnel_connection": map[string]any{},
				"tunnel_tunnel_response_token": map[string]any{},
				"tunnel_tunnel_warp_connector_client": map[string]any{},
				"tunnel_tunnel_warp_connector_connection": map[string]any{},
				"tunnel_vnet_response_collection": map[string]any{},
				"tunnel_vnet_response_single": map[string]any{},
				"tunnel_warp_connector_response_collection": map[string]any{},
				"tunnel_warp_connector_response_single": map[string]any{},
				"tunnel_zero_trust_connectivity_setting": map[string]any{},
				"warp": map[string]any{},
				"warp_change_event": map[string]any{},
				"warp_teams_device_api_other": map[string]any{},
				"zero_trust_gateway_applications_review_status": map[string]any{},
				"zero_trust_gateway_csv_operation_single": map[string]any{},
				"zero_trust_gateway_custom_certificate_setting": map[string]any{},
				"zero_trust_gateway_gateway_account": map[string]any{},
				"zero_trust_gateway_gateway_account_config": map[string]any{},
				"zero_trust_gateway_gateway_account_egress_cidr_pair_list": map[string]any{},
				"zero_trust_gateway_gateway_account_logging_setting": map[string]any{},
				"zero_trust_gateway_list_item_response_collection": map[string]any{},
				"zero_trust_gateway_list_single": map[string]any{},
				"zero_trust_gateway_response_collection": map[string]any{},
				"zero_trust_gateway_response_collection_10": map[string]any{},
				"zero_trust_gateway_response_collection_2": map[string]any{},
				"zero_trust_gateway_response_collection_3": map[string]any{},
				"zero_trust_gateway_response_collection_4": map[string]any{},
				"zero_trust_gateway_response_collection_5": map[string]any{},
				"zero_trust_gateway_response_collection_6": map[string]any{},
				"zero_trust_gateway_response_collection_7": map[string]any{},
				"zero_trust_gateway_response_collection_8": map[string]any{},
				"zero_trust_gateway_response_collection_9": map[string]any{},
				"zero_trust_gateway_single": map[string]any{},
				"zero_trust_gateway_single_response_2": map[string]any{},
				"zero_trust_gateway_single_response_3": map[string]any{},
				"zero_trust_gateway_single_response_4": map[string]any{},
				"zero_trust_gateway_single_response_5": map[string]any{},
				"zero_trust_gateway_single_response_6": map[string]any{},
				"zero_trust_gateway_single_response_7": map[string]any{},
				"zero_trust_gateway_single_response_with_list_item": map[string]any{},
				"zero_trust_risk_scoring": map[string]any{},
				"zero_trust_risk_scoring_integration": map[string]any{},
			},
		},
		"entity": map[string]any{
			"client_version": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the API call was successful.",
					},
				},
				"name": "client_version",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/client-versions",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "client-versions",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"client-versions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "release_track",
											"orig": "release_track",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "target_environment",
											"orig": "target_environment",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
										"release_track",
										"target_environment",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/client-versions/target-environments",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "client-versions",
									},
									map[string]any{
										"lit": "target-environments",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"client-versions",
									"target-environments",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "target_environment",
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cni": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "cni",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/cni/cnis/{cni}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "cnis",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"cnis",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"cni": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "cni",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"deployment_group": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "A user-friendly name for the deployment group.",
					},
					map[string]any{
						"name": "policy_ids",
						"title": "Policy Ids",
						"type": "`$ARRAY`",
						"short": "Contains an optional list of policy IDs assigned to a group.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the API call was successful.",
					},
					map[string]any{
						"name": "version_config",
						"title": "Version Config",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "Contains at least one version configuration.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "deployment_group",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/devices/deployment-groups",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "deployment-groups",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"deployment-groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/deployment-groups",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "deployment-groups",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"deployment-groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/deployment-groups/{group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "deployment-groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"deployment-groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/deployment-groups/{group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "deployment-groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"deployment-groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/devices/deployment-groups/{group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "deployment-groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"deployment-groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dex_remote_command": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "commands",
						"title": "Commands",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of device-level commands to execute",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"load": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
					},
				},
				"name": "dex_remote_command",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dex/commands",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "commands",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"commands",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/commands",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "commands",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"commands",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
									"query": []any{
										map[string]any{
											"name": "command_type",
											"orig": "command_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2023-08-20T20:45:00Z",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 10,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2023-08-24T20:45:00Z",
										},
										map[string]any{
											"name": "user_email",
											"orig": "user_email",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"command_type",
										"device_id",
										"from",
										"page",
										"per_page",
										"status",
										"to",
										"user_email",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/commands/devices",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "commands",
									},
									map[string]any{
										"lit": "devices",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"commands",
									"devices",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 10,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
										"search",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/commands/{command_id}/downloads/{filename}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "commands",
									},
									map[string]any{
										"var": "command_id",
									},
									map[string]any{
										"lit": "downloads",
									},
									map[string]any{
										"var": "filename",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"commands",
									"{command_id}",
									"downloads",
									"{filename}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "command_id",
											"orig": "command_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5758fefe-ae7e-4538-a39b-1fef6abcb909",
										},
										map[string]any{
											"name": "filename",
											"orig": "filename",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"command_id",
										"filename",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/commands/quota",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "commands",
									},
									map[string]any{
										"lit": "quota",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"commands",
									"quota",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dex_rule": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "match",
						"title": "Match",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The wirefilter expression to match.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The name of the Rule.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"load": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dex_rule",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dex/rules",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "rules",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"rules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/rules",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "rules",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"rules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
									"query": []any{
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 10,
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "ASC",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"name",
										"page",
										"per_page",
										"sort_by",
										"sort_order",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/rules/{rule_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "rules",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"rules",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"rule_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dex/rules/{rule_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "rules",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"rules",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"rule_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/dex/rules/{rule_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "rules",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"rules",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"rule_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dex_synthetic_application_monitoring": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
							"load": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "array of colos.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "dex_synthetic_application_monitoring",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/colos",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "colos",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"colos",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
									"query": []any{
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-08-20T20:45:00Z",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-08-24T20:45:00Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"from",
										"sort_by",
										"to",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/devices/{device_id}/isps",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"var": "device_id",
									},
									map[string]any{
										"lit": "isps",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"devices",
									"{device_id}",
									"isps",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"reqd": true,
											"example": 10,
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "time_start",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "DESC",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cursor",
										"device_id",
										"from",
										"page",
										"per_page",
										"sort_by",
										"sort_order",
										"to",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/tests/overview",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "tests",
									},
									map[string]any{
										"lit": "overview",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"tests",
									"overview",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
									"query": []any{
										map[string]any{
											"name": "colo",
											"orig": "colo",
											"type": "`$STRING`",
											"kind": "query",
											"example": "SJC",
										},
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "kind",
											"orig": "kind",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "registration_id",
											"orig": "registration_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
										},
										map[string]any{
											"name": "test_name",
											"orig": "test_name",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"colo",
										"device_id",
										"kind",
										"page",
										"per_page",
										"registration_id",
										"test_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/http-tests/{test_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "http-tests",
									},
									map[string]any{
										"var": "test_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"http-tests",
									"{test_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "test_id",
											"orig": "test_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
									"query": []any{
										map[string]any{
											"name": "colo",
											"orig": "colo",
											"type": "`$STRING`",
											"kind": "query",
											"example": "SJC",
										},
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": 1689520412000,
										},
										map[string]any{
											"name": "interval",
											"orig": "interval",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": 1689606812000,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"colo",
										"device_id",
										"from",
										"interval",
										"test_id",
										"to",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/traceroute-tests/{test_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "traceroute-tests",
									},
									map[string]any{
										"var": "test_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"traceroute-tests",
									"{test_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "test_id",
											"orig": "test_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
									"query": []any{
										map[string]any{
											"name": "colo",
											"orig": "colo",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": 1689520412000,
										},
										map[string]any{
											"name": "interval",
											"orig": "interval",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": 1689606812000,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"colo",
										"device_id",
										"from",
										"interval",
										"test_id",
										"to",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/http-tests/{test_id}/percentiles",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "http-tests",
									},
									map[string]any{
										"var": "http_test_id",
									},
									map[string]any{
										"lit": "percentiles",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"http-tests",
									"{http_test_id}",
									"percentiles",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"test_id": "http_test_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "http_test_id",
											"orig": "test_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
									"query": []any{
										map[string]any{
											"name": "colo",
											"orig": "colo",
											"type": "`$STRING`",
											"kind": "query",
											"example": "SJC",
										},
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-09-20T17:00:00Z",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-09-20T17:00:00Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"colo",
										"device_id",
										"from",
										"http_test_id",
										"to",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/devices/{device_id}/fleet-status/over-time",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"var": "device_id",
									},
									map[string]any{
										"lit": "fleet-status",
									},
									map[string]any{
										"lit": "over-time",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"devices",
									"{device_id}",
									"fleet-status",
									"over-time",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7",
										},
									},
									"query": []any{
										map[string]any{
											"name": "colo",
											"orig": "colo",
											"type": "`$STRING`",
											"kind": "query",
											"example": "SJC",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-10-11 00:00:00+00",
										},
										map[string]any{
											"name": "interval",
											"orig": "interval",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-10-11 00:00:00+00",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"colo",
										"device_id",
										"from",
										"interval",
										"to",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/traceroute-tests/{test_id}/percentiles",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "traceroute-tests",
									},
									map[string]any{
										"var": "traceroute_test_id",
									},
									map[string]any{
										"lit": "percentiles",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"traceroute-tests",
									"{traceroute_test_id}",
									"percentiles",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"test_id": "traceroute_test_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "traceroute_test_id",
											"orig": "test_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
									"query": []any{
										map[string]any{
											"name": "colo",
											"orig": "colo",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-09-20T17:00:00Z",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-09-20T17:00:00Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"colo",
										"device_id",
										"from",
										"to",
										"traceroute_test_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/traceroute-tests/{test_id}/network-path",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "traceroute-tests",
									},
									map[string]any{
										"var": "traceroute_test_id",
									},
									map[string]any{
										"lit": "network-path",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"traceroute-tests",
									"{traceroute_test_id}",
									"network-path",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"test_id": "traceroute_test_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "traceroute_test_id",
											"orig": "test_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
									"query": []any{
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": 1689520412000,
										},
										map[string]any{
											"name": "interval",
											"orig": "interval",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": 1689606812000,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"device_id",
										"from",
										"interval",
										"to",
										"traceroute_test_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/tests/unique-devices",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "tests",
									},
									map[string]any{
										"lit": "unique-devices",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"tests",
									"unique-devices",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
									"query": []any{
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "test_name",
											"orig": "test_name",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"device_id",
										"test_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/traceroute-test-results/{test_result_id}/network-path",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "traceroute-test-results",
									},
									map[string]any{
										"var": "traceroute_test_result_id",
									},
									map[string]any{
										"lit": "network-path",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"traceroute-test-results",
									"{traceroute_test_result_id}",
									"network-path",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"test_result_id": "traceroute_test_result_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "traceroute_test_result_id",
											"orig": "test_result_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"traceroute_test_result_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"digital_experience_monitoring_device": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "alwaysOn",
						"title": "Always On",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "batteryCharging",
						"title": "Battery Charging",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "batteryCycles",
						"title": "Battery Cycles",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "batteryPct",
						"title": "Battery Pct",
						"type": "`$NUMBER`",
						"format": "float",
					},
					map[string]any{
						"name": "colo",
						"title": "Colo",
						"type": "`$STRING`",
						"req": true,
						"short": "Cloudflare colo airport code.",
					},
					map[string]any{
						"name": "connectionType",
						"title": "Connection Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cpuPct",
						"title": "Cpu Pct",
						"type": "`$NUMBER`",
						"format": "float",
					},
					map[string]any{
						"name": "cpuPctByApp",
						"title": "Cpu Pct By App",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "deviceId",
						"title": "Device Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Device identifier (UUID v4)",
					},
					map[string]any{
						"name": "deviceIpv4",
						"title": "Device Ipv4",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "deviceIpv6",
						"title": "Device Ipv6",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "deviceName",
						"title": "Device Name",
						"type": "`$STRING`",
						"short": "Device identifier (human readable).",
					},
					map[string]any{
						"name": "deviceRegistration",
						"title": "Device Registration",
						"type": "`$STRING`",
						"short": "Deprecated: use registrationId.",
						"deprecated": true,
					},
					map[string]any{
						"name": "diskReadBps",
						"title": "Disk Read Bps",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "diskUsagePct",
						"title": "Disk Usage Pct",
						"type": "`$NUMBER`",
						"format": "float",
					},
					map[string]any{
						"name": "diskWriteBps",
						"title": "Disk Write Bps",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "dohSubdomain",
						"title": "Doh Subdomain",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "estimatedLossPct",
						"title": "Estimated Loss Pct",
						"type": "`$NUMBER`",
						"format": "float",
					},
					map[string]any{
						"name": "firewallEnabled",
						"title": "Firewall Enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "gatewayIpv4",
						"title": "Gateway Ipv4",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "gatewayIpv6",
						"title": "Gateway Ipv6",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "handshakeLatencyMs",
						"title": "Handshake Latency Ms",
						"type": "`$NUMBER`",
						"format": "int64",
					},
					map[string]any{
						"name": "ispIpv4",
						"title": "Isp Ipv4",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ispIpv6",
						"title": "Isp Ipv6",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "metal",
						"title": "Metal",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mode",
						"title": "Mode",
						"type": "`$STRING`",
						"req": true,
						"short": "The mode under which the WARP client is run.",
					},
					map[string]any{
						"name": "networkRcvdBps",
						"title": "Network Rcvd Bps",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "networkSentBps",
						"title": "Network Sent Bps",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "networkSsid",
						"title": "Network Ssid",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "personEmail",
						"title": "Person Email",
						"type": "`$STRING`",
						"short": "User contact email address",
					},
					map[string]any{
						"name": "platform",
						"title": "Platform",
						"type": "`$STRING`",
						"req": true,
						"short": "Operating system.",
					},
					map[string]any{
						"name": "ramAvailableKb",
						"title": "Ram Available Kb",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "ramUsedPct",
						"title": "Ram Used Pct",
						"type": "`$NUMBER`",
						"format": "float",
					},
					map[string]any{
						"name": "ramUsedPctByApp",
						"title": "Ram Used Pct By App",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "registrationId",
						"title": "Registration Id",
						"type": "`$STRING`",
						"short": "Device registration identifier (UUID v4).",
					},
					map[string]any{
						"name": "rtt",
						"title": "Rtt",
						"type": "`$OBJECT`",
						"short": "Round-trip time statistics for the WARP tunnel.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Network status.",
					},
					map[string]any{
						"name": "switchLocked",
						"title": "Switch Locked",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "timestamp",
						"title": "Timestamp",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "tunnelStats",
						"title": "Tunnel Stats",
						"type": "`$OBJECT`",
						"short": "WARP tunnel packet and byte counters.",
					},
					map[string]any{
						"name": "tunnelType",
						"title": "Tunnel Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "version",
						"title": "Version",
						"type": "`$STRING`",
						"req": true,
						"short": "WARP client version.",
					},
					map[string]any{
						"name": "wifiStrengthDbm",
						"title": "Wifi Strength Dbm",
						"type": "`$INTEGER`",
						"format": "int64",
					},
				},
				"name": "digital_experience_monitoring_device",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/devices/{device_id}/fleet-status/live",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"var": "device_id",
									},
									map[string]any{
										"lit": "fleet-status",
									},
									map[string]any{
										"lit": "live",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"devices",
									"{device_id}",
									"fleet-status",
									"live",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7",
										},
									},
									"query": []any{
										map[string]any{
											"name": "colo",
											"orig": "colo",
											"type": "`$STRING`",
											"kind": "query",
											"example": "SJC",
										},
										map[string]any{
											"name": "since_minute",
											"orig": "since_minute",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 10,
										},
										map[string]any{
											"name": "time_now",
											"orig": "time_now",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2023-10-11T00:00:00Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"colo",
										"device_id",
										"since_minute",
										"time_now",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"digital_experience_monitoring_dex_delete_response_collection": map[string]any{
				"fields": []any{},
				"name": "digital_experience_monitoring_dex_delete_response_collection",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "dex_tests",
									},
									map[string]any{
										"var": "dex_test_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"devices",
									"dex_tests",
									"{dex_test_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "dex_test_id",
											"orig": "dex_test_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"dex_test_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"digital_experience_monitoring_dex_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "digital_experience_monitoring_dex_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/devices/dex_tests",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "dex_tests",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"devices",
									"dex_tests",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
									"query": []any{
										map[string]any{
											"name": "kind",
											"orig": "kind",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "test_name",
											"orig": "test_name",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"kind",
										"page",
										"per_page",
										"test_name",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"digital_experience_monitoring_dex_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created",
						"title": "Created",
						"type": "`$STRING`",
						"short": "Date the test was created, in RFC 3339 format.",
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The configuration object which contains the details for the WARP client to conduct the test.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Additional details about the test.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Determines whether or not the test is active.",
					},
					map[string]any{
						"name": "interval",
						"title": "Interval",
						"type": "`$STRING`",
						"req": true,
						"short": "How often the test will run.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the DEX test.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "target_policies",
						"title": "Target Policies",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "targeted",
						"title": "Targeted",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "test_id",
						"title": "Test Id",
						"type": "`$STRING`",
						"short": "The unique identifier for the test.",
						"readOnly": true,
					},
					map[string]any{
						"name": "updated",
						"title": "Updated",
						"type": "`$STRING`",
						"short": "Date the test was last updated, in RFC 3339 format.",
						"readOnly": true,
						"format": "date-time",
					},
				},
				"name": "digital_experience_monitoring_dex_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/dex/devices/dex_tests",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "dex_tests",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"devices",
									"dex_tests",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "dex_tests",
									},
									map[string]any{
										"var": "dex_test_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"devices",
									"dex_tests",
									"{dex_test_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "dex_test_id",
											"orig": "dex_test_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "372e67954025e0ba6aaa6d586b9e0b59",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"dex_test_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "dex_tests",
									},
									map[string]any{
										"var": "dex_test_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"devices",
									"dex_tests",
									"{dex_test_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
										map[string]any{
											"name": "dex_test_id",
											"orig": "dex_test_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"dex_test_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"digital_experience_monitoring_fleet_status_device": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "digital_experience_monitoring_fleet_status_device",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/fleet-status/devices",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "fleet-status",
									},
									map[string]any{
										"lit": "devices",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"fleet-status",
									"devices",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
									"query": []any{
										map[string]any{
											"name": "colo",
											"orig": "colo",
											"type": "`$STRING`",
											"kind": "query",
											"example": "SJC",
										},
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-10-11 00:00:00+00",
										},
										map[string]any{
											"name": "mode",
											"orig": "mode",
											"type": "`$STRING`",
											"kind": "query",
											"example": "proxy",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 10,
										},
										map[string]any{
											"name": "platform",
											"orig": "platform",
											"type": "`$STRING`",
											"kind": "query",
											"example": "windows",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "timestamp",
										},
										map[string]any{
											"name": "source",
											"orig": "source",
											"type": "`$STRING`",
											"kind": "query",
											"example": "last_seen",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "connected",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-10-11 00:00:00+00",
										},
										map[string]any{
											"name": "version",
											"orig": "version",
											"type": "`$STRING`",
											"kind": "query",
											"example": "1.0.0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"colo",
										"device_id",
										"from",
										"mode",
										"page",
										"per_page",
										"platform",
										"sort_by",
										"source",
										"status",
										"to",
										"version",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"digital_experience_monitoring_fleet_status_live": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "digital_experience_monitoring_fleet_status_live",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/fleet-status/live",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "fleet-status",
									},
									map[string]any{
										"lit": "live",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"fleet-status",
									"live",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
									"query": []any{
										map[string]any{
											"name": "since_minute",
											"orig": "since_minute",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 10,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"since_minute",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"digital_experience_monitoring_fleet_status_over_time": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "digital_experience_monitoring_fleet_status_over_time",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/fleet-status/over-time",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "fleet-status",
									},
									map[string]any{
										"lit": "over-time",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"fleet-status",
									"over-time",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
									"query": []any{
										map[string]any{
											"name": "colo",
											"orig": "colo",
											"type": "`$STRING`",
											"kind": "query",
											"example": "SJC",
										},
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-10-11 00:00:00+00",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-10-11 00:00:00+00",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"colo",
										"device_id",
										"from",
										"to",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"interconnect": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "interconnect",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cni/interconnects/{icon}/loa",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "interconnects",
									},
									map[string]any{
										"var": "icon",
									},
									map[string]any{
										"lit": "loa",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"interconnects",
									"{icon}",
									"loa",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "icon",
											"orig": "icon",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "loa",
									"exist": []any{
										"account_id",
										"icon",
										"name",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/cni/interconnects/{icon}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "interconnects",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"interconnects",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"icon": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "icon",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ip_profile": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "An optional description of the Device IP profile.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Whether the Device IP profile will be applied to matching devices.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "match",
						"title": "Match",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The wirefilter expression to match registrations.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "A user-friendly name for the Device IP profile.",
					},
					map[string]any{
						"name": "precedence",
						"title": "Precedence",
						"type": "`$INTEGER`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"short": "The precedence of the Device IP profile.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "subnet_id",
						"title": "Subnet Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The ID of the Subnet.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ip_profile",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/devices/ip-profiles",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "ip-profiles",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"ip-profiles",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/ip-profiles",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "ip-profiles",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"ip-profiles",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/ip-profiles/{profile_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "ip-profiles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"ip-profiles",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"profile_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "profile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/ip-profiles/{profile_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "ip-profiles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"ip-profiles",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"profile_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "profile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/devices/ip-profiles/{profile_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "ip-profiles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"ip-profiles",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"profile_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "profile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/gateway/lists/{list_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"lists",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"list_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "id",
											"orig": "list_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"location": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "location",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/gateway/locations/{location_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "locations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"locations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"location_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "id",
											"orig": "location_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed35569b41ce4d1facfe683550f54086",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"nsc_cni": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account",
						"title": "Account",
						"type": "`$STRING`",
						"req": true,
						"short": "Customer account tag",
					},
					map[string]any{
						"name": "bgp",
						"title": "Bgp",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "bgp_mode",
						"title": "Bgp Mode",
						"type": "`$STRING`",
						"short": "The BGP mode for a CNI.",
					},
					map[string]any{
						"name": "cust_ip",
						"title": "Cust Ip",
						"type": "`$STRING`",
						"req": true,
						"short": "Customer end of the point-to-point link This should always be inside the same prefix as `p2p_ip`.",
						"format": "A.B.C.D/N",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "interconnect",
						"title": "Interconnect",
						"type": "`$STRING`",
						"req": true,
						"short": "Interconnect identifier hosting this CNI",
					},
					map[string]any{
						"name": "magic",
						"title": "Magic",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "p2p_ip",
						"title": "P2p Ip",
						"type": "`$STRING`",
						"req": true,
						"short": "Cloudflare end of the point-to-point link",
						"format": "A.B.C.D/N",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "nsc_cni",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/cni/cnis",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "cnis",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"cnis",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cni/cnis",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "cnis",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"cnis",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "slot",
											"orig": "slot",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cursor",
										"limit",
										"slot",
										"tunnel_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cni/cnis/{cni}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "cnis",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"cnis",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"cni": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "cni",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/cni/cnis/{cni}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "cnis",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"cnis",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"cni": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "cni",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"nsc_default_name": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The default customer name for the interconnect",
					},
				},
				"name": "nsc_default_name",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cni/interconnects/{icon}/loa/default",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "interconnects",
									},
									map[string]any{
										"var": "interconnect_id",
									},
									map[string]any{
										"lit": "loa",
									},
									map[string]any{
										"lit": "default",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"interconnects",
									"{interconnect_id}",
									"loa",
									"default",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"icon": "interconnect_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "interconnect_id",
											"orig": "icon",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"interconnect_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.interconnect",
						},
					},
				},
			},
			"nsc_interconnect": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "items",
						"title": "Items",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "next",
						"title": "Next",
						"type": "`$INTEGER`",
						"format": "int32",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "nsc_interconnect",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/cni/interconnects",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "interconnects",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"interconnects",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cni/interconnects",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "interconnects",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"interconnects",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "site",
											"orig": "site",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cursor",
										"limit",
										"site",
										"type",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cni/interconnects/{icon}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "interconnects",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"interconnects",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"icon": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "icon",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"nsc_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "default_asn",
						"title": "Default Asn",
						"type": "`$INTEGER`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"format": "int32",
					},
				},
				"name": "nsc_setting",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cni/settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/cni/settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"nsc_slot_info": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account",
						"title": "Account",
						"type": "`$STRING`",
						"short": "Customer account tag",
					},
					map[string]any{
						"name": "address",
						"title": "Address",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "ccr_device_name",
						"title": "Ccr Device Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "facility",
						"title": "Facility",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Slot ID",
						"format": "uuid",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "occupied",
						"title": "Occupied",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the slot is occupied or not",
					},
					map[string]any{
						"name": "site",
						"title": "Site",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "speed",
						"title": "Speed",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "nsc_slot_info",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cni/slots",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "slots",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"slots",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "address_contain",
											"orig": "address_contain",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "occupied",
											"orig": "occupied",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "site",
											"orig": "site",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "speed",
											"orig": "speed",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"address_contain",
										"cursor",
										"limit",
										"occupied",
										"site",
										"speed",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cni/slots/{slot}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "slots",
									},
									map[string]any{
										"var": "slot",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"slots",
									"{slot}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.facility`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "slot",
											"orig": "slot",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"slot",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"nsc_status_info": map[string]any{
				"fields": []any{},
				"name": "nsc_status_info",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cni/interconnects/{icon}/status",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cni",
									},
									map[string]any{
										"lit": "interconnects",
									},
									map[string]any{
										"var": "icon",
									},
									map[string]any{
										"lit": "status",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cni",
									"interconnects",
									"{icon}",
									"status",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "icon",
											"orig": "icon",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"icon",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.interconnect",
						},
					},
				},
			},
			"override_code": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "device_id",
						"title": "Device Id",
						"type": "`$STRING`",
						"short": "Physical device ID.",
						"format": "uuid",
					},
					map[string]any{
						"name": "duration_hours",
						"title": "Duration Hours",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of hours for which the override code should remain valid.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "scope",
						"title": "Scope",
						"type": "`$STRING`",
						"req": true,
						"short": "Whether the code applies to every device in the account or one physical device.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The feature that the override code applies to.",
					},
				},
				"name": "override_code",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/devices/override_codes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "override_codes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"override_codes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"pacfile": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "pacfile",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/gateway/pacfiles/{pacfile_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "pacfiles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"pacfiles",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"pacfile_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "id",
											"orig": "pacfile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed35569b41ce4d1facfe683550f54086",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"physical_device": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A WARP Device.",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "V4 public API Pagination/Cursor info.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$OBJECT`",
						"short": "Replaces all tags assigned to the physical device.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "physical_device",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/devices/physical-devices/{device_id}/revoke",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "physical-devices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "revoke",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"physical-devices",
									"{id}",
									"revoke",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"device_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "revoke",
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/physical-devices",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "physical-devices",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"physical-devices",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "active_registration",
											"orig": "active_registration",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "has_registration_type",
											"orig": "has_registration_type",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": "warp",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "last_seen_registration_policy_id",
											"orig": "last_seen_registration_policy_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "11ffb86f-3f0c-4306-b4a2-e62f872b166a",
										},
										map[string]any{
											"name": "last_seen_user_email",
											"orig": "last_seen_user_email",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "seen_after",
											"orig": "seen_after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "seen_before",
											"orig": "seen_before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "tag",
											"orig": "tag",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"environment:production",
												"fleet:warehouse",
											},
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"active_registration",
										"cursor",
										"has_registration_type",
										"id",
										"include",
										"last_seen_registration_policy_id",
										"last_seen_user_email",
										"per_page",
										"search",
										"seen_after",
										"seen_before",
										"sort_by",
										"sort_order",
										"tag",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/physical-devices/{device_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "physical-devices",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"physical-devices",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"device_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"include",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/physical-devices/{device_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "physical-devices",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"physical-devices",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"device_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/registrations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "registrations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"registrations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$ARRAY`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/devices/physical-devices/{device_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "physical-devices",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"physical-devices",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"device_id": "id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"tags": "`reqdata.tag`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"proxy_endpoint": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "proxy_endpoint",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "proxy_endpoints",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"proxy_endpoints",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"proxy_endpoint_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "id",
											"orig": "proxy_endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed35569b41ce4d1facfe683550f54086",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"registration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A WARP configuration tied to a single user.",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "V4 public API Pagination/Cursor info.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "registration",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/devices/registrations/revoke",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "registrations",
									},
									map[string]any{
										"lit": "revoke",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"registrations",
									"revoke",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$ARRAY`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "revoke",
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/devices/registrations/unrevoke",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "registrations",
									},
									map[string]any{
										"lit": "unrevoke",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"registrations",
									"unrevoke",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$ARRAY`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "unrevoke",
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/registrations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "registrations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"registrations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "11ffb86f-3f0c-4306-b4a2-e62f872b166a",
										},
										map[string]any{
											"name": "registration_type",
											"orig": "registration_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "warp",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "seen_after",
											"orig": "seen_after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "seen_before",
											"orig": "seen_before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "user_id",
											"orig": "user_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cursor",
										"device_id",
										"id",
										"include",
										"per_page",
										"policy_id",
										"registration_type",
										"search",
										"seen_after",
										"seen_before",
										"sort_by",
										"sort_order",
										"status",
										"user_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/registrations/{registration_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "registrations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"registrations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"registration_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "registration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"include",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/registrations/{registration_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "registrations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"registrations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"registration_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "registration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rule": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "rule",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/gateway/rules/{rule_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "rules",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"rules",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"rule_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_api_response_single": map[string]any{
				"fields": []any{},
				"name": "teams_devices_api_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/devices/revoke",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "revoke",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"revoke",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/devices/unrevoke",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "unrevoke",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"unrevoke",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_components_schemas_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "teams_devices_components_schemas_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/networks",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "networks",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"networks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/networks/{network_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "networks",
									},
									map[string]any{
										"var": "network_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"networks",
									"{network_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "network_id",
											"orig": "network_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"network_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_components_schemas_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "config",
						"title": "Config",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "The configuration object containing information for the WARP client to detect the managed network.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The name of the device managed network.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The type of device managed network.",
					},
				},
				"name": "teams_devices_components_schemas_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/devices/networks",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "networks",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"networks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/networks/{network_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "networks",
									},
									map[string]any{
										"var": "network_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"networks",
									"{network_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "network_id",
											"orig": "network_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"network_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/devices/networks/{network_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "networks",
									},
									map[string]any{
										"var": "network_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"networks",
									"{network_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "network_id",
											"orig": "network_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"network_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_default_device_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_mode_switch",
						"title": "Allow Mode Switch",
						"type": "`$BOOLEAN`",
						"short": "Whether to allow the user to switch WARP between modes.",
					},
					map[string]any{
						"name": "allow_updates",
						"title": "Allow Updates",
						"type": "`$BOOLEAN`",
						"short": "Whether to receive update notifications when a new version of the client is available.",
					},
					map[string]any{
						"name": "allowed_to_leave",
						"title": "Allowed To Leave",
						"type": "`$BOOLEAN`",
						"short": "Whether to allow devices to leave the organization.",
					},
					map[string]any{
						"name": "auto_connect",
						"title": "Auto Connect",
						"type": "`$NUMBER`",
						"short": "The amount of time in seconds to reconnect after having been disabled.",
					},
					map[string]any{
						"name": "captive_portal",
						"title": "Captive Portal",
						"type": "`$NUMBER`",
						"short": "Turn on the captive portal after the specified amount of time.",
					},
					map[string]any{
						"name": "disable_auto_fallback",
						"title": "Disable Auto Fallback",
						"type": "`$BOOLEAN`",
						"short": "If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.",
					},
					map[string]any{
						"name": "dns_search_suffixes",
						"title": "Dns Search Suffixes",
						"type": "`$ARRAY`",
						"short": "List of DNS search suffixes to apply to clients.",
					},
					map[string]any{
						"name": "exclude",
						"title": "Exclude",
						"type": "`$ARRAY`",
						"short": "List of routes excluded in the WARP client's tunnel.",
					},
					map[string]any{
						"name": "exclude_office_ips",
						"title": "Exclude Office Ips",
						"type": "`$BOOLEAN`",
						"short": "Whether to add Microsoft IPs to Split Tunnel exclusions.",
					},
					map[string]any{
						"name": "global_acceleration",
						"title": "Global Acceleration",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Global Acceleration settings for China.",
					},
					map[string]any{
						"name": "include",
						"title": "Include",
						"type": "`$ARRAY`",
						"short": "List of routes included in the WARP client's tunnel.",
					},
					map[string]any{
						"name": "lan_allow_minutes",
						"title": "Lan Allow Minutes",
						"type": "`$NUMBER`",
						"short": "The amount of time in minutes a user is allowed access to their LAN.",
					},
					map[string]any{
						"name": "lan_allow_subnet_size",
						"title": "Lan Allow Subnet Size",
						"type": "`$NUMBER`",
						"short": "The size of the subnet for the local access network.",
					},
					map[string]any{
						"name": "register_interface_ip_with_dns",
						"title": "Register Interface Ip With Dns",
						"type": "`$BOOLEAN`",
						"short": "Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sccm_vpn_boundary_support",
						"title": "Sccm Vpn Boundary Support",
						"type": "`$BOOLEAN`",
						"short": "Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary.",
					},
					map[string]any{
						"name": "service_mode_v2",
						"title": "Service Mode V2",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "support_url",
						"title": "Support Url",
						"type": "`$STRING`",
						"short": "The URL to launch when the Send Feedback button is clicked.",
					},
					map[string]any{
						"name": "switch_locked",
						"title": "Switch Locked",
						"type": "`$BOOLEAN`",
						"short": "Whether to allow the user to turn off the WARP switch and disconnect the client.",
					},
					map[string]any{
						"name": "tunnel_protocol",
						"title": "Tunnel Protocol",
						"type": "`$STRING`",
						"short": "Determines which tunnel protocol to use.",
					},
					map[string]any{
						"name": "uninstall_protection",
						"title": "Uninstall Protection",
						"type": "`$BOOLEAN`",
						"short": "Determines whether uninstalling the WARP client requires an override code.",
					},
					map[string]any{
						"name": "virtual_networks",
						"title": "Virtual Networks",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Virtual network access settings for the device.",
					},
				},
				"name": "teams_devices_default_device_setting",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/policy",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/devices/policy",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_device": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "teams_devices_device",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/{device_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"device_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_device_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_mode_switch",
						"title": "Allow Mode Switch",
						"type": "`$BOOLEAN`",
						"short": "Whether to allow the user to switch WARP between modes.",
					},
					map[string]any{
						"name": "allow_updates",
						"title": "Allow Updates",
						"type": "`$BOOLEAN`",
						"short": "Whether to receive update notifications when a new version of the client is available.",
					},
					map[string]any{
						"name": "allowed_to_leave",
						"title": "Allowed To Leave",
						"type": "`$BOOLEAN`",
						"short": "Whether to allow devices to leave the organization.",
					},
					map[string]any{
						"name": "auto_connect",
						"title": "Auto Connect",
						"type": "`$NUMBER`",
						"short": "The amount of time in seconds to reconnect after having been disabled.",
					},
					map[string]any{
						"name": "browser_extension_config",
						"title": "Browser Extension Config",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Browser extension proxy settings.",
					},
					map[string]any{
						"name": "captive_portal",
						"title": "Captive Portal",
						"type": "`$NUMBER`",
						"short": "Turn on the captive portal after the specified amount of time.",
					},
					map[string]any{
						"name": "default",
						"title": "Default",
						"type": "`$BOOLEAN`",
						"short": "Whether the policy is the account default.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "A description of the policy.",
					},
					map[string]any{
						"name": "disable_auto_fallback",
						"title": "Disable Auto Fallback",
						"type": "`$BOOLEAN`",
						"short": "If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.",
					},
					map[string]any{
						"name": "dns_search_suffixes",
						"title": "Dns Search Suffixes",
						"type": "`$ARRAY`",
						"short": "List of DNS search suffixes to apply to clients.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Whether the policy will be applied to matching devices.",
					},
					map[string]any{
						"name": "exclude",
						"title": "Exclude",
						"type": "`$ARRAY`",
						"short": "List of routes excluded in the WARP client's tunnel.",
					},
					map[string]any{
						"name": "exclude_office_ips",
						"title": "Exclude Office Ips",
						"type": "`$BOOLEAN`",
						"short": "Whether to add Microsoft IPs to Split Tunnel exclusions.",
					},
					map[string]any{
						"name": "global_acceleration",
						"title": "Global Acceleration",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Global Acceleration settings for China.",
					},
					map[string]any{
						"name": "include",
						"title": "Include",
						"type": "`$ARRAY`",
						"short": "List of routes included in the WARP client's tunnel.",
					},
					map[string]any{
						"name": "lan_allow_minutes",
						"title": "Lan Allow Minutes",
						"type": "`$NUMBER`",
						"short": "The amount of time in minutes a user is allowed access to their LAN.",
					},
					map[string]any{
						"name": "lan_allow_subnet_size",
						"title": "Lan Allow Subnet Size",
						"type": "`$NUMBER`",
						"short": "The size of the subnet for the local access network.",
					},
					map[string]any{
						"name": "match",
						"title": "Match",
						"type": "`$STRING`",
						"short": "The wirefilter expression to match devices.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The name of the device settings profile.",
					},
					map[string]any{
						"name": "precedence",
						"title": "Precedence",
						"type": "`$NUMBER`",
						"short": "The precedence of the policy.",
					},
					map[string]any{
						"name": "profile_type",
						"title": "Profile Type",
						"type": "`$STRING`",
						"short": "The client type to which the device settings profile applies.",
					},
					map[string]any{
						"name": "register_interface_ip_with_dns",
						"title": "Register Interface Ip With Dns",
						"type": "`$BOOLEAN`",
						"short": "Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sccm_vpn_boundary_support",
						"title": "Sccm Vpn Boundary Support",
						"type": "`$BOOLEAN`",
						"short": "Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary.",
					},
					map[string]any{
						"name": "service_mode_v2",
						"title": "Service Mode V2",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "support_url",
						"title": "Support Url",
						"type": "`$STRING`",
						"short": "The URL to launch when the Send Feedback button is clicked.",
					},
					map[string]any{
						"name": "switch_locked",
						"title": "Switch Locked",
						"type": "`$BOOLEAN`",
						"short": "Whether to allow the user to turn off the WARP switch and disconnect the client.",
					},
					map[string]any{
						"name": "tunnel_protocol",
						"title": "Tunnel Protocol",
						"type": "`$STRING`",
						"short": "Determines which tunnel protocol to use.",
					},
					map[string]any{
						"name": "uninstall_protection",
						"title": "Uninstall Protection",
						"type": "`$BOOLEAN`",
						"short": "Determines whether uninstalling the WARP client requires an override code.",
					},
					map[string]any{
						"name": "virtual_networks",
						"title": "Virtual Networks",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Virtual network access settings for the device.",
					},
				},
				"name": "teams_devices_device_setting",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/devices/policy",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/policy/{policy_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"var": "policy_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"{policy_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"policy_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/devices/policy/{policy_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"var": "policy_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"{policy_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"policy_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_device_settings_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "teams_devices_device_settings_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/policies",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policies",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policies",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "profile_type",
											"orig": "profile_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "warp",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"profile_type",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/policy/{policy_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"var": "policy_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"{policy_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"policy_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_fallback_domain_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "teams_devices_fallback_domain_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/policy/{policy_id}/fallback_domains",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"var": "policy_id",
									},
									map[string]any{
										"lit": "fallback_domains",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"{policy_id}",
									"fallback_domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"policy_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/policy/fallback_domains",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"lit": "fallback_domains",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"fallback_domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/policy/{policy_id}/fallback_domains",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"var": "policy_id",
									},
									map[string]any{
										"lit": "fallback_domains",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"{policy_id}",
									"fallback_domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
									"query": []any{
										map[string]any{
											"name": "reset_default",
											"orig": "reset_default",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"policy_id",
										"reset_default",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/policy/fallback_domains",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"lit": "fallback_domains",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"fallback_domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "reset_default",
											"orig": "reset_default",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"reset_default",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/devices/policy/{policy_id}/fallback_domains",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"var": "policy_id",
									},
									map[string]any{
										"lit": "fallback_domains",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"{policy_id}",
									"fallback_domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"policy_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/devices/policy/fallback_domains",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"lit": "fallback_domains",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"fallback_domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_global_warp_override": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "disconnect",
						"title": "Disconnect",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Disconnects all devices on the account using Global WARP override.",
					},
					map[string]any{
						"name": "justification",
						"title": "Justification",
						"type": "`$STRING`",
						"short": "Reasoning for setting the Global WARP override state.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "teams_devices_global_warp_override",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/devices/resilience/disconnect",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "resilience",
									},
									map[string]any{
										"lit": "disconnect",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"resilience",
									"disconnect",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/resilience/disconnect",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "resilience",
									},
									map[string]any{
										"lit": "disconnect",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"resilience",
									"disconnect",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_id": map[string]any{
				"fields": []any{},
				"name": "teams_devices_id",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/posture/{rule_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"var": "rule_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"posture",
									"{rule_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "rule_id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"rule_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_override_code": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "teams_devices_override_code",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/{device_id}/override_codes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"var": "device_id",
									},
									map[string]any{
										"lit": "override_codes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"{device_id}",
									"override_codes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "device_id",
											"orig": "device_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"device_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "teams_devices_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/posture",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "posture",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"posture",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_schemas_id": map[string]any{
				"fields": []any{},
				"name": "teams_devices_schemas_id",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/posture/integration/{integration_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "integration",
									},
									map[string]any{
										"var": "integration_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"posture",
									"integration",
									"{integration_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "integration_id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"integration_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_schemas_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "teams_devices_schemas_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/posture/integration",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "integration",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"posture",
									"integration",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_schemas_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "config",
						"title": "Config",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "The configuration object containing third-party integration information.",
					},
					map[string]any{
						"name": "interval",
						"title": "Interval",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The interval between each posture check with the third-party API.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The name of the device posture integration.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The type of device posture integration.",
					},
				},
				"name": "teams_devices_schemas_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/devices/posture/integration",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "integration",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"posture",
									"integration",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/posture/integration/{integration_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "integration",
									},
									map[string]any{
										"var": "integration_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"posture",
									"integration",
									"{integration_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "integration_id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"integration_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/devices/posture/integration/{integration_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"lit": "integration",
									},
									map[string]any{
										"var": "integration_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"posture",
									"integration",
									"{integration_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "integration_id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"integration_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "The description of the device posture rule.",
					},
					map[string]any{
						"name": "expiration",
						"title": "Expiration",
						"type": "`$STRING`",
						"short": "Sets the expiration time for a posture check result.",
					},
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"short": "The value to be checked against.",
					},
					map[string]any{
						"name": "match",
						"title": "Match",
						"type": "`$ARRAY`",
						"short": "The conditions that the client must match to run the rule.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the device posture rule.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "schedule",
						"title": "Schedule",
						"type": "`$STRING`",
						"short": "Polling frequency for the WARP client posture check.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of device posture rule.",
					},
				},
				"name": "teams_devices_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/devices/posture",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "posture",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"posture",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/posture/{rule_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"var": "rule_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"posture",
									"{rule_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "rule_id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"rule_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/devices/posture/{rule_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "posture",
									},
									map[string]any{
										"var": "rule_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"posture",
									"{rule_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "rule_id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"rule_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_split_tunnel_include_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "teams_devices_split_tunnel_include_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/policy/{policy_id}/include",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"var": "policy_id",
									},
									map[string]any{
										"lit": "include",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"{policy_id}",
									"include",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"policy_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/policy/include",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"lit": "include",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"include",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/devices/policy/{policy_id}/include",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"var": "policy_id",
									},
									map[string]any{
										"lit": "include",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"{policy_id}",
									"include",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"policy_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/devices/policy/include",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"lit": "include",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"include",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_split_tunnel_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "teams_devices_split_tunnel_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/policy/{policy_id}/exclude",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"var": "policy_id",
									},
									map[string]any{
										"lit": "exclude",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"{policy_id}",
									"exclude",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"policy_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/policy/exclude",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"lit": "exclude",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"exclude",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/policy/{policy_id}/exclude",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"var": "policy_id",
									},
									map[string]any{
										"lit": "exclude",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"{policy_id}",
									"exclude",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
									"query": []any{
										map[string]any{
											"name": "reset_default",
											"orig": "reset_default",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"policy_id",
										"reset_default",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/policy/exclude",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"lit": "exclude",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"exclude",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "reset_default",
											"orig": "reset_default",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"reset_default",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/devices/policy/{policy_id}/exclude",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"var": "policy_id",
									},
									map[string]any{
										"lit": "exclude",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"{policy_id}",
									"exclude",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"policy_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/devices/policy/exclude",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "policy",
									},
									map[string]any{
										"lit": "exclude",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"policy",
									"exclude",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"teams_devices_zero_trust_account_device_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "disable_for_time",
						"title": "Disable For Time",
						"type": "`$NUMBER`",
						"short": "Sets the time limit, in seconds, that a user can use an override code to bypass WARP.",
					},
					map[string]any{
						"name": "external_emergency_signal_enabled",
						"title": "External Emergency Signal Enabled",
						"type": "`$BOOLEAN`",
						"short": "Controls whether the external emergency disconnect feature is enabled.",
					},
					map[string]any{
						"name": "external_emergency_signal_fingerprint",
						"title": "External Emergency Signal Fingerprint",
						"type": "`$STRING`",
						"short": "The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url.",
					},
					map[string]any{
						"name": "external_emergency_signal_interval",
						"title": "External Emergency Signal Interval",
						"type": "`$STRING`",
						"short": "The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., \"5m\", \"2m30s\", \"1h\").",
					},
					map[string]any{
						"name": "external_emergency_signal_url",
						"title": "External Emergency Signal Url",
						"type": "`$STRING`",
						"short": "The HTTPS URL from which to fetch the emergency disconnect signal.",
					},
					map[string]any{
						"name": "gateway_proxy_enabled",
						"title": "Gateway Proxy Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable gateway proxy filtering on TCP.",
					},
					map[string]any{
						"name": "gateway_udp_proxy_enabled",
						"title": "Gateway Udp Proxy Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable gateway proxy filtering on UDP.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "root_certificate_installation_enabled",
						"title": "Root Certificate Installation Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable installation of cloudflare managed root certificate.",
					},
					map[string]any{
						"name": "use_zt_virtual_ip",
						"title": "Use Zt Virtual Ip",
						"type": "`$BOOLEAN`",
						"short": "Enable using CGNAT virtual IPv4.",
					},
				},
				"name": "teams_devices_zero_trust_account_device_setting",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/devices/settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/devices/settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/devices/settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tunnel",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/tunnels",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "tunnels",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"tunnels",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "exclude_prefix",
											"orig": "exclude_prefix",
											"type": "`$STRING`",
											"kind": "query",
											"example": "vpc1-",
										},
										map[string]any{
											"name": "existed_at",
											"orig": "existed_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2019-10-12T07%3A20%3A50.52Z",
										},
										map[string]any{
											"name": "include_prefix",
											"orig": "include_prefix",
											"type": "`$STRING`",
											"kind": "query",
											"example": "vpc1-",
										},
										map[string]any{
											"name": "is_deleted",
											"orig": "is_deleted",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "blog",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "healthy",
										},
										map[string]any{
											"name": "tun_type",
											"orig": "tun_type",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": "cfd_tunnel,warp_connector",
										},
										map[string]any{
											"name": "uuid",
											"orig": "uuid",
											"type": "`$STRING`",
											"kind": "query",
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
										map[string]any{
											"name": "was_active_at",
											"orig": "was_active_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2009-11-10T23:00:00Z",
										},
										map[string]any{
											"name": "was_inactive_at",
											"orig": "was_inactive_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2009-11-10T23:00:00Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"exclude_prefix",
										"existed_at",
										"include_prefix",
										"is_deleted",
										"name",
										"page",
										"per_page",
										"status",
										"tun_type",
										"uuid",
										"was_active_at",
										"was_inactive_at",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_cfd_tunnel_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tunnel_cfd_tunnel_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cfd_tunnel",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cfd_tunnel",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cfd_tunnel",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "exclude_prefix",
											"orig": "exclude_prefix",
											"type": "`$STRING`",
											"kind": "query",
											"example": "vpc1-",
										},
										map[string]any{
											"name": "existed_at",
											"orig": "existed_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2019-10-12T07%3A20%3A50.52Z",
										},
										map[string]any{
											"name": "include_prefix",
											"orig": "include_prefix",
											"type": "`$STRING`",
											"kind": "query",
											"example": "vpc1-",
										},
										map[string]any{
											"name": "is_deleted",
											"orig": "is_deleted",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "blog",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "healthy",
										},
										map[string]any{
											"name": "uuid",
											"orig": "uuid",
											"type": "`$STRING`",
											"kind": "query",
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
										map[string]any{
											"name": "was_active_at",
											"orig": "was_active_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2009-11-10T23:00:00Z",
										},
										map[string]any{
											"name": "was_inactive_at",
											"orig": "was_inactive_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2009-11-10T23:00:00Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"exclude_prefix",
										"existed_at",
										"include_prefix",
										"is_deleted",
										"name",
										"page",
										"per_page",
										"status",
										"uuid",
										"was_active_at",
										"was_inactive_at",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_cfd_tunnel_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "config_src",
						"title": "Config Src",
						"type": "`$STRING`",
						"short": "Indicates if this is a locally or remotely configured tunnel.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "A user-friendly name for a tunnel.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"load": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.",
						"readOnly": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
					map[string]any{
						"name": "tunnel_secret",
						"title": "Tunnel Secret",
						"type": "`$STRING`",
						"short": "Sets the password required to run a locally-managed tunnel.",
					},
				},
				"name": "tunnel_cfd_tunnel_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/cfd_tunnel",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cfd_tunnel",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cfd_tunnel",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cfd_tunnel/{tunnel_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cfd_tunnel",
									},
									map[string]any{
										"var": "tunnel_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cfd_tunnel",
									"{tunnel_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"tunnel_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/cfd_tunnel/{tunnel_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cfd_tunnel",
									},
									map[string]any{
										"var": "tunnel_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cfd_tunnel",
									"{tunnel_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"tunnel_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/cfd_tunnel/{tunnel_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cfd_tunnel",
									},
									map[string]any{
										"var": "tunnel_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cfd_tunnel",
									"{tunnel_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"tunnel_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_configuration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "config",
						"title": "Config",
						"type": "`$OBJECT`",
						"short": "The tunnel configuration and ingress rules.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"short": "Cloudflare Tunnel configuration",
					},
				},
				"name": "tunnel_configuration",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cfd_tunnel",
									},
									map[string]any{
										"var": "cfd_tunnel_id",
									},
									map[string]any{
										"lit": "configurations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cfd_tunnel",
									"{cfd_tunnel_id}",
									"configurations",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tunnel_id": "cfd_tunnel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "cfd_tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cfd_tunnel_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cfd_tunnel",
									},
									map[string]any{
										"var": "cfd_tunnel_id",
									},
									map[string]any{
										"lit": "configurations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cfd_tunnel",
									"{cfd_tunnel_id}",
									"configurations",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tunnel_id": "cfd_tunnel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "cfd_tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cfd_tunnel_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_empty": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "client_id",
						"title": "Client Id",
						"type": "`$STRING`",
						"req": true,
						"short": "UUID of the Cloudflare Tunnel connector.",
						"format": "uuid",
					},
				},
				"name": "tunnel_empty",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cfd_tunnel",
									},
									map[string]any{
										"var": "cfd_tunnel_id",
									},
									map[string]any{
										"lit": "connections",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cfd_tunnel",
									"{cfd_tunnel_id}",
									"connections",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tunnel_id": "cfd_tunnel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "cfd_tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
									"query": []any{
										map[string]any{
											"name": "client_id",
											"orig": "client_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "1bedc50d-42b3-473c-b108-ff3d10c0d925",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cfd_tunnel_id",
										"client_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/warp_connector/{tunnel_id}/failover",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "warp_connector",
									},
									map[string]any{
										"var": "warp_connector_id",
									},
									map[string]any{
										"lit": "failover",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"warp_connector",
									"{warp_connector_id}",
									"failover",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tunnel_id": "warp_connector_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "warp_connector_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"warp_connector_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_hostname_route_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tunnel_hostname_route_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/zerotrust/routes/hostname",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"lit": "hostname",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"routes",
									"hostname",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "comment",
											"orig": "comment",
											"type": "`$STRING`",
											"kind": "query",
											"example": "example%20comment",
										},
										map[string]any{
											"name": "existed_at",
											"orig": "existed_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2019-10-12T07%3A20%3A50.52Z",
										},
										map[string]any{
											"name": "hostname",
											"orig": "hostname",
											"type": "`$STRING`",
											"kind": "query",
											"example": "office-1.local",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
										map[string]any{
											"name": "is_deleted",
											"orig": "is_deleted",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"comment",
										"existed_at",
										"hostname",
										"id",
										"is_deleted",
										"page",
										"per_page",
										"tunnel_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_hostname_route_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "comment",
						"title": "Comment",
						"type": "`$STRING`",
						"short": "An optional description of the hostname route.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "hostname",
						"title": "Hostname",
						"type": "`$STRING`",
						"short": "The hostname of the route.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"load": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.",
						"readOnly": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
					map[string]any{
						"name": "tunnel_id",
						"title": "Tunnel Id",
						"type": "`$STRING`",
						"short": "UUID of the tunnel.",
						"format": "uuid",
					},
				},
				"name": "tunnel_hostname_route_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/zerotrust/routes/hostname",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"lit": "hostname",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"routes",
									"hostname",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"lit": "hostname",
									},
									map[string]any{
										"var": "hostname_route_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"routes",
									"hostname",
									"{hostname_route_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "hostname_route_id",
											"orig": "hostname_route_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"hostname_route_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"lit": "hostname",
									},
									map[string]any{
										"var": "hostname_route_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"routes",
									"hostname",
									"{hostname_route_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "hostname_route_id",
											"orig": "hostname_route_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"hostname_route_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"lit": "hostname",
									},
									map[string]any{
										"var": "hostname_route_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"routes",
									"hostname",
									"{hostname_route_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "hostname_route_id",
											"orig": "hostname_route_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"hostname_route_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_mesh_configuration_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "config",
						"title": "Config",
						"type": "`$OBJECT`",
						"short": "Provider-specific configuration.",
					},
					map[string]any{
						"name": "ha_mode",
						"title": "Ha Mode",
						"type": "`$STRING`",
						"req": true,
						"short": "High-availability mode for the WARP Connector tunnel.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "tunnel_mesh_configuration_response_single",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/warp_connector/{tunnel_id}/configurations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "warp_connector",
									},
									map[string]any{
										"var": "warp_connector_id",
									},
									map[string]any{
										"lit": "configurations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"warp_connector",
									"{warp_connector_id}",
									"configurations",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tunnel_id": "warp_connector_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "warp_connector_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"warp_connector_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/warp_connector/{tunnel_id}/configurations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "warp_connector",
									},
									map[string]any{
										"var": "warp_connector_id",
									},
									map[string]any{
										"lit": "configurations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"warp_connector",
									"{warp_connector_id}",
									"configurations",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tunnel_id": "warp_connector_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "warp_connector_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"warp_connector_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_route_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "comment",
						"title": "Comment",
						"type": "`$STRING`",
						"short": "Optional remark describing the route.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "network",
						"title": "Network",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The private IPv4 or IPv6 range connected by the route, in CIDR notation.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"load": map[string]any{
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.",
						"readOnly": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
					map[string]any{
						"name": "tunnel_id",
						"title": "Tunnel Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "UUID of the tunnel.",
						"readOnly": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "virtual_network_id",
						"title": "Virtual Network Id",
						"type": "`$STRING`",
						"short": "UUID of the virtual network.",
						"format": "uuid",
					},
				},
				"name": "tunnel_route_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"lit": "network",
									},
									map[string]any{
										"var": "ip_network_encoded",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"routes",
									"network",
									"{ip_network_encoded}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "ip_network_encoded",
											"orig": "ip_network_encoded",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "172.16.0.0%2F16",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"ip_network_encoded",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/teamnet/routes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "routes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"routes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/teamnet/routes/{route_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "route_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"routes",
									"{route_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "route_id",
											"orig": "route_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"route_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"lit": "network",
									},
									map[string]any{
										"var": "ip_network_encoded",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"routes",
									"network",
									"{ip_network_encoded}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "ip_network_encoded",
											"orig": "ip_network_encoded",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "172.16.0.0%2F16",
										},
									},
									"query": []any{
										map[string]any{
											"name": "tun_type",
											"orig": "tun_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "cfd_tunnel",
										},
										map[string]any{
											"name": "tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
										map[string]any{
											"name": "virtual_network_id",
											"orig": "virtual_network_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"ip_network_encoded",
										"tun_type",
										"tunnel_id",
										"virtual_network_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/teamnet/routes/{route_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "route_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"routes",
									"{route_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "route_id",
											"orig": "route_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"route_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"lit": "network",
									},
									map[string]any{
										"var": "ip_network_encoded",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"routes",
									"network",
									"{ip_network_encoded}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "ip_network_encoded",
											"orig": "ip_network_encoded",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "172.16.0.0%2F16",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"ip_network_encoded",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/teamnet/routes/{route_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"var": "route_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"routes",
									"{route_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "route_id",
											"orig": "route_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"route_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_subnet_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tunnel_subnet_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/zerotrust/subnets",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "subnets",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"subnets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "address_family",
											"orig": "address_family",
											"type": "`$STRING`",
											"kind": "query",
											"example": "v4",
										},
										map[string]any{
											"name": "comment",
											"orig": "comment",
											"type": "`$STRING`",
											"kind": "query",
											"example": "example%20comment",
										},
										map[string]any{
											"name": "existed_at",
											"orig": "existed_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2019-10-12T07%3A20%3A50.52Z",
										},
										map[string]any{
											"name": "is_default_network",
											"orig": "is_default_network",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "is_deleted",
											"orig": "is_deleted",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "IPv4%20Cloudflare%20Source%20IPs",
										},
										map[string]any{
											"name": "network",
											"orig": "network",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "subnet_type",
											"orig": "subnet_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "cloudflare_source,warp",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"address_family",
										"comment",
										"existed_at",
										"is_default_network",
										"is_deleted",
										"name",
										"network",
										"page",
										"per_page",
										"sort_order",
										"subnet_type",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_subnet_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "comment",
						"title": "Comment",
						"type": "`$STRING`",
						"short": "An optional description of the subnet.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "is_default_network",
						"title": "Is Default Network",
						"type": "`$BOOLEAN`",
						"short": "If `true`, this is the default subnet for the account.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"patch": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "A user-friendly name for the subnet.",
					},
					map[string]any{
						"name": "network",
						"title": "Network",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"patch": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The private IPv4 or IPv6 range defining the subnet, in CIDR notation.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"load": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.",
						"readOnly": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "tunnel_subnet_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/zerotrust/subnets/warp",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "subnets",
									},
									map[string]any{
										"lit": "warp",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"subnets",
									"warp",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/zerotrust/subnets/initial_resolved_ip/{address_family}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "subnets",
									},
									map[string]any{
										"lit": "initial_resolved_ip",
									},
									map[string]any{
										"var": "address_family",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"subnets",
									"initial_resolved_ip",
									"{address_family}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "address_family",
											"orig": "address_family",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "v4",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"address_family",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/zerotrust/subnets/cloudflare_source/{address_family}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "subnets",
									},
									map[string]any{
										"lit": "cloudflare_source",
									},
									map[string]any{
										"var": "address_family",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"subnets",
									"cloudflare_source",
									"{address_family}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "address_family",
											"orig": "address_family",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "v4",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"address_family",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/zerotrust/subnets/initial_resolved_ip/{address_family}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "subnets",
									},
									map[string]any{
										"lit": "initial_resolved_ip",
									},
									map[string]any{
										"var": "address_family",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"subnets",
									"initial_resolved_ip",
									"{address_family}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "address_family",
											"orig": "address_family",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "v4",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"address_family",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_subnet_response_single_nullable": map[string]any{
				"fields": []any{},
				"name": "tunnel_subnet_response_single_nullable",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "subnets",
									},
									map[string]any{
										"lit": "warp",
									},
									map[string]any{
										"var": "subnet_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"subnets",
									"warp",
									"{subnet_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "subnet_id",
											"orig": "subnet_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"subnet_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.warp",
						},
					},
				},
			},
			"tunnel_teamnet_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tunnel_teamnet_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/teamnet/routes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "routes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"routes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "comment",
											"orig": "comment",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Example comment for this route.",
										},
										map[string]any{
											"name": "existed_at",
											"orig": "existed_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2019-10-12T07%3A20%3A50.52Z",
										},
										map[string]any{
											"name": "is_deleted",
											"orig": "is_deleted",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "network_subset",
											"orig": "network_subset",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "network_superset",
											"orig": "network_superset",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "route_id",
											"orig": "route_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
										map[string]any{
											"name": "tun_type",
											"orig": "tun_type",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": "cfd_tunnel,warp_connector",
										},
										map[string]any{
											"name": "tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
										map[string]any{
											"name": "virtual_network_id",
											"orig": "virtual_network_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"comment",
										"existed_at",
										"is_deleted",
										"network_subset",
										"network_superset",
										"page",
										"per_page",
										"route_id",
										"tun_type",
										"tunnel_id",
										"virtual_network_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_teamnet_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"load": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.",
						"readOnly": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "tunnel_teamnet_response_single",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/teamnet/routes/ip/{ip}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "routes",
									},
									map[string]any{
										"lit": "ip",
									},
									map[string]any{
										"var": "ip",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"routes",
									"ip",
									"{ip}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "ip",
											"orig": "ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "10.1.0.137",
										},
									},
									"query": []any{
										map[string]any{
											"name": "default_virtual_network_fallback",
											"orig": "default_virtual_network_fallback",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "virtual_network_id",
											"orig": "virtual_network_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"default_virtual_network_fallback",
										"ip",
										"virtual_network_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_tunnel_client": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"load": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.",
						"readOnly": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "tunnel_tunnel_client",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cfd_tunnel",
									},
									map[string]any{
										"var": "cfd_tunnel_id",
									},
									map[string]any{
										"lit": "connectors",
									},
									map[string]any{
										"var": "connector_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cfd_tunnel",
									"{cfd_tunnel_id}",
									"connectors",
									"{connector_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tunnel_id": "cfd_tunnel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "cfd_tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
										map[string]any{
											"name": "connector_id",
											"orig": "connector_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "1bedc50d-42b3-473c-b108-ff3d10c0d925",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cfd_tunnel_id",
										"connector_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_tunnel_connection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tunnel_tunnel_connection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cfd_tunnel",
									},
									map[string]any{
										"var": "cfd_tunnel_id",
									},
									map[string]any{
										"lit": "connections",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cfd_tunnel",
									"{cfd_tunnel_id}",
									"connections",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tunnel_id": "cfd_tunnel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "cfd_tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cfd_tunnel_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_tunnel_response_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.",
						"readOnly": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "tunnel_tunnel_response_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/cfd_tunnel/{tunnel_id}/management",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cfd_tunnel",
									},
									map[string]any{
										"var": "cfd_tunnel_id",
									},
									map[string]any{
										"lit": "management",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cfd_tunnel",
									"{cfd_tunnel_id}",
									"management",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tunnel_id": "cfd_tunnel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "cfd_tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cfd_tunnel_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/cfd_tunnel/{tunnel_id}/token",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "cfd_tunnel",
									},
									map[string]any{
										"var": "cfd_tunnel_id",
									},
									map[string]any{
										"lit": "token",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"cfd_tunnel",
									"{cfd_tunnel_id}",
									"token",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tunnel_id": "cfd_tunnel_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "cfd_tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"cfd_tunnel_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/warp_connector/{tunnel_id}/token",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "warp_connector",
									},
									map[string]any{
										"var": "warp_connector_id",
									},
									map[string]any{
										"lit": "token",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"warp_connector",
									"{warp_connector_id}",
									"token",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tunnel_id": "warp_connector_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "warp_connector_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"warp_connector_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_tunnel_warp_connector_client": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"load": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.",
						"readOnly": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "tunnel_tunnel_warp_connector_client",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/warp_connector/{tunnel_id}/connectors/{connector_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "warp_connector",
									},
									map[string]any{
										"var": "warp_connector_id",
									},
									map[string]any{
										"lit": "connectors",
									},
									map[string]any{
										"var": "connector_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"warp_connector",
									"{warp_connector_id}",
									"connectors",
									"{connector_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tunnel_id": "warp_connector_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "connector_id",
											"orig": "connector_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "1bedc50d-42b3-473c-b108-ff3d10c0d925",
										},
										map[string]any{
											"name": "warp_connector_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"connector_id",
										"warp_connector_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_tunnel_warp_connector_connection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tunnel_tunnel_warp_connector_connection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/warp_connector/{tunnel_id}/connections",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "warp_connector",
									},
									map[string]any{
										"var": "warp_connector_id",
									},
									map[string]any{
										"lit": "connections",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"warp_connector",
									"{warp_connector_id}",
									"connections",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tunnel_id": "warp_connector_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "warp_connector_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"warp_connector_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_vnet_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tunnel_vnet_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/teamnet/virtual_networks",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "virtual_networks",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"virtual_networks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
										map[string]any{
											"name": "is_default",
											"orig": "is_default",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "is_default_network",
											"orig": "is_default_network",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "is_deleted",
											"orig": "is_deleted",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "us-east-1-vpc",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"is_default",
										"is_default_network",
										"is_deleted",
										"name",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_vnet_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "comment",
						"title": "Comment",
						"type": "`$STRING`",
						"short": "Optional remark describing the virtual network.",
					},
					map[string]any{
						"name": "is_default",
						"title": "Is Default",
						"type": "`$BOOLEAN`",
						"short": "If `true`, this virtual network is the default for the account.",
						"deprecated": true,
					},
					map[string]any{
						"name": "is_default_network",
						"title": "Is Default Network",
						"type": "`$BOOLEAN`",
						"short": "If `true`, this virtual network is the default for the account.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "A user-friendly name for the virtual network.",
					},
				},
				"name": "tunnel_vnet_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/teamnet/virtual_networks",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "virtual_networks",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"virtual_networks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "virtual_networks",
									},
									map[string]any{
										"var": "virtual_network_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"virtual_networks",
									"{virtual_network_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "virtual_network_id",
											"orig": "virtual_network_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"virtual_network_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "virtual_networks",
									},
									map[string]any{
										"var": "virtual_network_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"virtual_networks",
									"{virtual_network_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "virtual_network_id",
											"orig": "virtual_network_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"virtual_network_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "teamnet",
									},
									map[string]any{
										"lit": "virtual_networks",
									},
									map[string]any{
										"var": "virtual_network_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"teamnet",
									"virtual_networks",
									"{virtual_network_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "virtual_network_id",
											"orig": "virtual_network_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"virtual_network_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_warp_connector_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tunnel_warp_connector_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/warp_connector",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "warp_connector",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"warp_connector",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "exclude_prefix",
											"orig": "exclude_prefix",
											"type": "`$STRING`",
											"kind": "query",
											"example": "vpc1-",
										},
										map[string]any{
											"name": "existed_at",
											"orig": "existed_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2019-10-12T07%3A20%3A50.52Z",
										},
										map[string]any{
											"name": "include_prefix",
											"orig": "include_prefix",
											"type": "`$STRING`",
											"kind": "query",
											"example": "vpc1-",
										},
										map[string]any{
											"name": "is_deleted",
											"orig": "is_deleted",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "blog",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "healthy",
										},
										map[string]any{
											"name": "uuid",
											"orig": "uuid",
											"type": "`$STRING`",
											"kind": "query",
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
										map[string]any{
											"name": "was_active_at",
											"orig": "was_active_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2009-11-10T23:00:00Z",
										},
										map[string]any{
											"name": "was_inactive_at",
											"orig": "was_inactive_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2009-11-10T23:00:00Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"exclude_prefix",
										"existed_at",
										"include_prefix",
										"is_deleted",
										"name",
										"page",
										"per_page",
										"status",
										"uuid",
										"was_active_at",
										"was_inactive_at",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_warp_connector_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "ha",
						"title": "Ha",
						"type": "`$BOOLEAN`",
						"short": "Indicates that the tunnel will be created to be highly available.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "A user-friendly name for a tunnel.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"load": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.",
						"readOnly": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
					map[string]any{
						"name": "tunnel_secret",
						"title": "Tunnel Secret",
						"type": "`$STRING`",
						"short": "Sets the password required to run a locally-managed tunnel.",
					},
				},
				"name": "tunnel_warp_connector_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/warp_connector",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "warp_connector",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"warp_connector",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/warp_connector/{tunnel_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "warp_connector",
									},
									map[string]any{
										"var": "tunnel_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"warp_connector",
									"{tunnel_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"tunnel_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/warp_connector/{tunnel_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "warp_connector",
									},
									map[string]any{
										"var": "tunnel_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"warp_connector",
									"{tunnel_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"tunnel_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/warp_connector/{tunnel_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "warp_connector",
									},
									map[string]any{
										"var": "tunnel_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"warp_connector",
									"{tunnel_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "tunnel_id",
											"orig": "tunnel_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"tunnel_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tunnel_zero_trust_connectivity_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "icmp_proxy_enabled",
						"title": "Icmp Proxy Enabled",
						"type": "`$BOOLEAN`",
						"short": "A flag to enable the ICMP proxy for the account network.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "offramp_warp_enabled",
						"title": "Offramp Warp Enabled",
						"type": "`$BOOLEAN`",
						"short": "A flag to enable WARP to WARP traffic.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.",
						"readOnly": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "tunnel_zero_trust_connectivity_setting",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/zerotrust/connectivity_settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "connectivity_settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"connectivity_settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/zerotrust/connectivity_settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "connectivity_settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"connectivity_settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"warp": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "comment",
						"title": "Comment",
						"type": "`$STRING`",
						"short": "An optional description of the subnet.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_default_network",
						"title": "Is Default Network",
						"type": "`$BOOLEAN`",
						"short": "If `true`, this is the default subnet for the account.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "A user-friendly name for the subnet.",
					},
					map[string]any{
						"name": "network",
						"title": "Network",
						"type": "`$STRING`",
						"short": "The private IPv4 or IPv6 range defining the subnet, in CIDR notation.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"load": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "The Tunnel Token is used as a mechanism to authenticate the operation of a tunnel.",
						"readOnly": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "warp",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "subnets",
									},
									map[string]any{
										"lit": "warp",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"subnets",
									"warp",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subnet_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "id",
											"orig": "subnet_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zerotrust",
									},
									map[string]any{
										"lit": "subnets",
									},
									map[string]any{
										"lit": "warp",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zerotrust",
									"subnets",
									"warp",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subnet_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "id",
											"orig": "subnet_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f70ff985-a4ef-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"warp_change_event": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "warp_change_event",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/dex/warp-change-events",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "dex",
									},
									map[string]any{
										"lit": "warp-change-events",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"dex",
									"warp-change-events",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "01a7362d577a6c3019a474fd6f485823",
										},
									},
									"query": []any{
										map[string]any{
											"name": "account_name",
											"orig": "account_name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Myorg",
										},
										map[string]any{
											"name": "config_name",
											"orig": "config_name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "MASQUE",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-09-20T17:00:00Z",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 10,
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "ASC",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2023-09-20T17:00:00Z",
										},
										map[string]any{
											"name": "toggle",
											"orig": "toggle",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"account_name",
										"config_name",
										"from",
										"page",
										"per_page",
										"sort_order",
										"to",
										"toggle",
										"type",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"warp_teams_device_api_other": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "warp_teams_device_api_other",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/devices/registrations/{registration_id}/override_codes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "devices",
									},
									map[string]any{
										"lit": "registrations",
									},
									map[string]any{
										"var": "registration_id",
									},
									map[string]any{
										"lit": "override_codes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"devices",
									"registrations",
									"{registration_id}",
									"override_codes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "registration_id",
											"orig": "registration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"registration_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.registration",
						},
					},
				},
			},
			"zero_trust_gateway_applications_review_status": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "approved_apps",
						"title": "Approved Apps",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains the ids of the approved applications.",
					},
					map[string]any{
						"name": "in_review_apps",
						"title": "In Review Apps",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains the ids of the applications in review.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "unapproved_apps",
						"title": "Unapproved Apps",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains the ids of the unapproved applications.",
					},
				},
				"name": "zero_trust_gateway_applications_review_status",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/apps/review_status",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"lit": "review_status",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"apps",
									"review_status",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/gateway/apps/review_status",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "apps",
									},
									map[string]any{
										"lit": "review_status",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"apps",
									"review_status",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_csv_operation_single": map[string]any{
				"fields": []any{},
				"name": "zero_trust_gateway_csv_operation_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/gateway/lists/upload",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"lit": "upload",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"lists",
									"upload",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_custom_certificate_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "binding_status",
						"title": "Binding Status",
						"type": "`$STRING`",
						"short": "Indicate the internal certificate status.",
						"readOnly": true,
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Specify whether to enable a custom certificate authority for signing Gateway traffic.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Specify the UUID of the certificate (ID from MTLS certificate store).",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"readOnly": true,
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "zero_trust_gateway_custom_certificate_setting",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/configuration/custom_certificate",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "configuration",
									},
									map[string]any{
										"lit": "custom_certificate",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"configuration",
									"custom_certificate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_gateway_account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "zero_trust_gateway_gateway_account",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/gateway",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_gateway_account_config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "settings",
						"title": "Settings",
						"type": "`$OBJECT`",
						"short": "Specify account settings.",
					},
				},
				"name": "zero_trust_gateway_gateway_account_config",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/configuration",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "configuration",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"configuration",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/gateway/configuration",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "configuration",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"configuration",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/gateway/configuration",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "configuration",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"configuration",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_gateway_account_egress_cidr_pair_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "zero_trust_gateway_gateway_account_egress_cidr_pair_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/egress_cidr_pairs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "egress_cidr_pairs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"egress_cidr_pairs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_gateway_account_logging_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "redact_pii",
						"title": "Redact Pii",
						"type": "`$BOOLEAN`",
						"short": "Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent).",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "settings_by_rule_type",
						"title": "Settings By Rule Type",
						"type": "`$OBJECT`",
						"short": "Configure logging settings for each rule type.",
					},
				},
				"name": "zero_trust_gateway_gateway_account_logging_setting",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/logging",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "logging",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"logging",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/gateway/logging",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "logging",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"logging",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_list_item_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"short": "Provide the list items.",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
					},
				},
				"name": "zero_trust_gateway_list_item_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/lists/{list_id}/items",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "list_id",
									},
									map[string]any{
										"lit": "items",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"lists",
									"{list_id}",
									"items",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "list_id",
											"orig": "list_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"list_id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.list",
						},
					},
				},
			},
			"zero_trust_gateway_list_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "append",
						"title": "Append",
						"type": "`$ARRAY`",
						"short": "Add items to the list.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Provide the list description.",
					},
					map[string]any{
						"name": "items",
						"title": "Items",
						"type": "`$ARRAY`",
						"short": "Add items to the list.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Specify the list name.",
					},
					map[string]any{
						"name": "remove",
						"title": "Remove",
						"type": "`$ARRAY`",
						"short": "Lists of item values you want to remove.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "zero_trust_gateway_list_single",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/lists/{list_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "list_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"lists",
									"{list_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "list_id",
											"orig": "list_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"list_id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/gateway/lists/{list_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "list_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"lists",
									"{list_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "list_id",
											"orig": "list_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"list_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/gateway/lists/{list_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "list_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"lists",
									"{list_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "list_id",
											"orig": "list_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"list_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.list",
						},
					},
				},
			},
			"zero_trust_gateway_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "zero_trust_gateway_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/certificates",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "certificates",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_response_collection_10": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
					},
				},
				"name": "zero_trust_gateway_response_collection_10",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/pacfiles",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "pacfiles",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"pacfiles",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_response_collection_2": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "zero_trust_gateway_response_collection_2",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/dns_destination_ips",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "dns_destination_ips",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"dns_destination_ips",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_response_collection_3": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "zero_trust_gateway_response_collection_3",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/lists",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "lists",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"lists",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "SERIAL",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"direction",
										"filter",
										"order_by",
										"search",
										"type",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_response_collection_4": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "zero_trust_gateway_response_collection_4",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/operations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "operations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"operations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_response_collection_5": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "zero_trust_gateway_response_collection_5",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/locations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "locations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"locations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"is_default:true",
											},
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"direction",
										"filter",
										"order_by",
										"search",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_response_collection_6": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "zero_trust_gateway_response_collection_6",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/rules",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "rules",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"rules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"direction",
										"filter",
										"order_by",
										"search",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/rules/tenant",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "rules",
									},
									map[string]any{
										"lit": "tenant",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"rules",
									"tenant",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/gateway/rules",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "rules",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"rules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_response_collection_7": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "zero_trust_gateway_response_collection_7",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/app_types",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "app_types",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"app_types",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_response_collection_8": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "zero_trust_gateway_response_collection_8",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/categories",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "categories",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"categories",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_response_collection_9": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "zero_trust_gateway_response_collection_9",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/proxy_endpoints",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "proxy_endpoints",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"proxy_endpoints",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"kind:identity",
											},
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"direction",
										"filter",
										"order_by",
										"search",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "validity_period_days",
						"title": "Validity Period Days",
						"type": "`$INTEGER`",
						"short": "Sets the certificate validity period in days (range: 1-10,950 days / ~30 years).",
					},
				},
				"name": "zero_trust_gateway_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/gateway/certificates/{certificate_id}/activate",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "certificates",
									},
									map[string]any{
										"var": "certificate_id",
									},
									map[string]any{
										"lit": "activate",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"certificates",
									"{certificate_id}",
									"activate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "certificate_id",
											"orig": "certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"$action": "activate",
									"exist": []any{
										"account_id",
										"certificate_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/gateway/certificates/{certificate_id}/deactivate",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "certificates",
									},
									map[string]any{
										"var": "certificate_id",
									},
									map[string]any{
										"lit": "deactivate",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"certificates",
									"{certificate_id}",
									"deactivate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "certificate_id",
											"orig": "certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"certificate_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/gateway/certificates",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "certificates",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/certificates/{certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "certificates",
									},
									map[string]any{
										"var": "certificate_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"certificates",
									"{certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "certificate_id",
											"orig": "certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"certificate_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/gateway/certificates/{certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "certificates",
									},
									map[string]any{
										"var": "certificate_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"certificates",
									"{certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "certificate_id",
											"orig": "certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"certificate_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_single_response_2": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"readOnly": true,
					},
				},
				"name": "zero_trust_gateway_single_response_2",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/operations/{operation_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "operations",
									},
									map[string]any{
										"var": "operation_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"operations",
									"{operation_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "operation_id",
											"orig": "operation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"operation_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_single_response_3": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "client_default",
						"title": "Client Default",
						"type": "`$BOOLEAN`",
						"short": "Indicate whether this location is the default location.",
					},
					map[string]any{
						"name": "dns_destination_ips_id",
						"title": "Dns Destination Ips Id",
						"type": "`$STRING`",
						"short": "Specify the identifier of the pair of IPv4 addresses assigned to this location.",
					},
					map[string]any{
						"name": "ecs_support",
						"title": "Ecs Support",
						"type": "`$BOOLEAN`",
						"short": "Indicate whether the location must resolve EDNS queries.",
					},
					map[string]any{
						"name": "endpoints",
						"title": "Endpoints",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Configure the destination endpoints for this location.",
					},
					map[string]any{
						"name": "max_ttl",
						"title": "Max Ttl",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Controls how DNS response TTLs are capped for this location relative to the account `max_ttl_secs` setting.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Specify the location name.",
					},
					map[string]any{
						"name": "networks",
						"title": "Networks",
						"type": "`$ARRAY`",
						"short": "Specify the list of network ranges from which requests at this location originate.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "zero_trust_gateway_single_response_3",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/gateway/locations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "locations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"locations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/locations/{location_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "locations",
									},
									map[string]any{
										"var": "location_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"locations",
									"{location_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "location_id",
											"orig": "location_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed35569b41ce4d1facfe683550f54086",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"location_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/gateway/locations/{location_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "locations",
									},
									map[string]any{
										"var": "location_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"locations",
									"{location_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "location_id",
											"orig": "location_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed35569b41ce4d1facfe683550f54086",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"location_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.location",
						},
					},
				},
			},
			"zero_trust_gateway_single_response_4": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action",
						"title": "Action",
						"type": "`$STRING`",
						"req": true,
						"short": "Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to `true`.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Specify the rule description.",
					},
					map[string]any{
						"name": "device_posture",
						"title": "Device Posture",
						"type": "`$STRING`",
						"short": "Specify the wirefilter expression used for device posture check.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Specify whether the rule is enabled.",
					},
					map[string]any{
						"name": "expiration",
						"title": "Expiration",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Defines the expiration time stamp and default duration of a DNS policy.",
					},
					map[string]any{
						"name": "filters",
						"title": "Filters",
						"type": "`$ARRAY`",
						"short": "Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions.",
					},
					map[string]any{
						"name": "identity",
						"title": "Identity",
						"type": "`$STRING`",
						"short": "Specify the wirefilter expression used for identity matching.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"patch": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Specify the rule name.",
					},
					map[string]any{
						"name": "precedence",
						"title": "Precedence",
						"type": "`$INTEGER`",
						"short": "Set the order of your rules.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "rule_settings",
						"title": "Rule Settings",
						"type": "`$OBJECT`",
						"short": "Defines settings for this rule.",
					},
					map[string]any{
						"name": "schedule",
						"title": "Schedule",
						"type": "`$OBJECT`",
						"short": "Defines the schedule for activating DNS policies.",
					},
					map[string]any{
						"name": "traffic",
						"title": "Traffic",
						"type": "`$STRING`",
						"short": "Specify the wirefilter expression used for traffic matching.",
					},
				},
				"name": "zero_trust_gateway_single_response_4",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/gateway/rules/{rule_id}/reset_expiration",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "rules",
									},
									map[string]any{
										"var": "rule_id",
									},
									map[string]any{
										"lit": "reset_expiration",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"rules",
									"{rule_id}",
									"reset_expiration",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "rule_id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"rule_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/gateway/rules",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "rules",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"rules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/rules/{rule_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "rules",
									},
									map[string]any{
										"var": "rule_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"rules",
									"{rule_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "rule_id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"rule_id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/gateway/rules/{rule_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "rules",
									},
									map[string]any{
										"var": "rule_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"rules",
									"{rule_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "rule_id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"rule_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/gateway/rules/{rule_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "rules",
									},
									map[string]any{
										"var": "rule_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"rules",
									"{rule_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "rule_id",
											"orig": "rule_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174e90a-fafe-4643-bbbc-4a0ed4fc8415",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"rule_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.rule",
						},
					},
				},
			},
			"zero_trust_gateway_single_response_5": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ips",
						"title": "Ips",
						"type": "`$ARRAY`",
						"short": "Specify the list of CIDRs to restrict ingress connections.",
					},
					map[string]any{
						"name": "kind",
						"title": "Kind",
						"type": "`$STRING`",
						"short": "The proxy endpoint kind.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Specify the name of the proxy endpoint.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
					},
				},
				"name": "zero_trust_gateway_single_response_5",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/gateway/proxy_endpoints",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "proxy_endpoints",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"proxy_endpoints",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "proxy_endpoints",
									},
									map[string]any{
										"var": "proxy_endpoint_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"proxy_endpoints",
									"{proxy_endpoint_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "proxy_endpoint_id",
											"orig": "proxy_endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed35569b41ce4d1facfe683550f54086",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"proxy_endpoint_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "proxy_endpoints",
									},
									map[string]any{
										"var": "proxy_endpoint_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"proxy_endpoints",
									"{proxy_endpoint_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "proxy_endpoint_id",
											"orig": "proxy_endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed35569b41ce4d1facfe683550f54086",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"proxy_endpoint_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.proxy_endpoint",
						},
					},
				},
			},
			"zero_trust_gateway_single_response_6": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "public_key",
						"title": "Public Key",
						"type": "`$STRING`",
						"req": true,
						"short": "Provide the Base64-encoded HPKE public key that encrypts SSH session logs.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "zero_trust_gateway_single_response_6",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/gateway/audit_ssh_settings/rotate_seed",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "audit_ssh_settings",
									},
									map[string]any{
										"lit": "rotate_seed",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"audit_ssh_settings",
									"rotate_seed",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/audit_ssh_settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "audit_ssh_settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"audit_ssh_settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/gateway/audit_ssh_settings",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "audit_ssh_settings",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"audit_ssh_settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_gateway_single_response_7": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "contents",
						"title": "Contents",
						"type": "`$STRING`",
						"req": true,
						"short": "Actual contents of the PAC file",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Detailed description of the PAC file.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the PAC file.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"short": "URL-friendly version of the PAC file name.",
					},
				},
				"name": "zero_trust_gateway_single_response_7",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/gateway/pacfiles",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "pacfiles",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"pacfiles",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/gateway/pacfiles/{pacfile_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "pacfiles",
									},
									map[string]any{
										"var": "pacfile_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"pacfiles",
									"{pacfile_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "pacfile_id",
											"orig": "pacfile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed35569b41ce4d1facfe683550f54086",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"pacfile_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/gateway/pacfiles/{pacfile_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "pacfiles",
									},
									map[string]any{
										"var": "pacfile_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"pacfiles",
									"{pacfile_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
										map[string]any{
											"name": "pacfile_id",
											"orig": "pacfile_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed35569b41ce4d1facfe683550f54086",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"pacfile_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.pacfile",
						},
					},
				},
			},
			"zero_trust_gateway_single_response_with_list_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Provide the list description.",
					},
					map[string]any{
						"name": "items",
						"title": "Items",
						"type": "`$ARRAY`",
						"short": "Add items to the list.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Specify the list name.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Specify the list type.",
					},
				},
				"name": "zero_trust_gateway_single_response_with_list_item",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/gateway/lists",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "gateway",
									},
									map[string]any{
										"lit": "lists",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"gateway",
									"lists",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_risk_scoring": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "behaviors",
						"title": "Behaviors",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "zero_trust_risk_scoring",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/zt_risk_scoring/{user_id}/reset",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zt_risk_scoring",
									},
									map[string]any{
										"var": "zt_risk_scoring_id",
									},
									map[string]any{
										"lit": "reset",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zt_risk_scoring",
									"{zt_risk_scoring_id}",
									"reset",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"user_id": "zt_risk_scoring_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "zt_risk_scoring_id",
											"orig": "user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "reset",
									"exist": []any{
										"account_id",
										"zt_risk_scoring_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/zt_risk_scoring/{user_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zt_risk_scoring",
									},
									map[string]any{
										"var": "user_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zt_risk_scoring",
									"{user_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "user_id",
											"orig": "user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"user_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/zt_risk_scoring/behaviors",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zt_risk_scoring",
									},
									map[string]any{
										"lit": "behaviors",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zt_risk_scoring",
									"behaviors",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/zt_risk_scoring/summary",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zt_risk_scoring",
									},
									map[string]any{
										"lit": "summary",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zt_risk_scoring",
									"summary",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/zt_risk_scoring/behaviors",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zt_risk_scoring",
									},
									map[string]any{
										"lit": "behaviors",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zt_risk_scoring",
									"behaviors",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zero_trust_risk_scoring_integration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"title": "Active",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether this integration is enabled.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "integration_type",
						"title": "Integration Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "reference_id",
						"title": "Reference Id",
						"type": "`$STRING`",
						"short": "A reference id that can be supplied by the client.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "tenant_url",
						"title": "Tenant Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The base url of the tenant, e.g.",
						"format": "uri",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "zero_trust_risk_scoring_integration",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/zt_risk_scoring/integrations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zt_risk_scoring",
									},
									map[string]any{
										"lit": "integrations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zt_risk_scoring",
									"integrations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/zt_risk_scoring/integrations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zt_risk_scoring",
									},
									map[string]any{
										"lit": "integrations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zt_risk_scoring",
									"integrations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zt_risk_scoring",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zt_risk_scoring",
									"integrations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"integration_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/zt_risk_scoring/integrations/reference_id/{reference_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zt_risk_scoring",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"lit": "reference_id",
									},
									map[string]any{
										"var": "reference_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zt_risk_scoring",
									"integrations",
									"reference_id",
									"{reference_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "reference_id",
											"orig": "reference_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"reference_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zt_risk_scoring",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zt_risk_scoring",
									"integrations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"integration_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "zt_risk_scoring",
									},
									map[string]any{
										"lit": "integrations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"zt_risk_scoring",
									"integrations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"integration_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "integration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
