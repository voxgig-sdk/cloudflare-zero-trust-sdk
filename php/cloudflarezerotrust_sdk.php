<?php
declare(strict_types=1);

// CloudflareZeroTrust SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CloudflareZeroTrustSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CloudflareZeroTrustUtility();
        $this->_utility = $utility;

        $config = CloudflareZeroTrustConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CloudflareZeroTrustHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CloudflareZeroTrustHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CloudflareZeroTrustFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CloudflareZeroTrustFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CloudflareZeroTrustUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CloudflareZeroTrustHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CloudflareZeroTrustHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CloudflareZeroTrustHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CloudflareZeroTrustSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CloudflareZeroTrustError($op . "_allow",
                "CloudflareZeroTrustSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CloudflareZeroTrustHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CloudflareZeroTrustHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CloudflareZeroTrustError("graphql_error",
                "CloudflareZeroTrustSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_alexandria_delete_application = null;

    // Canonical facade: $client->AlexandriaDeleteApplication()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->alexandria_delete_application()
    // resolves here too.
    public function AlexandriaDeleteApplication($data = null)
    {
        require_once __DIR__ . '/entity/alexandria_delete_application_entity.php';
        if ($data === null) {
            if ($this->_alexandria_delete_application === null) {
                $this->_alexandria_delete_application = new AlexandriaDeleteApplicationEntity($this, null);
            }
            return $this->_alexandria_delete_application;
        }
        return new AlexandriaDeleteApplicationEntity($this, $data);
    }


    private $_alexandria_get_application = null;

    // Canonical facade: $client->AlexandriaGetApplication()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->alexandria_get_application()
    // resolves here too.
    public function AlexandriaGetApplication($data = null)
    {
        require_once __DIR__ . '/entity/alexandria_get_application_entity.php';
        if ($data === null) {
            if ($this->_alexandria_get_application === null) {
                $this->_alexandria_get_application = new AlexandriaGetApplicationEntity($this, null);
            }
            return $this->_alexandria_get_application;
        }
        return new AlexandriaGetApplicationEntity($this, $data);
    }


    private $_alexandria_get_category = null;

    // Canonical facade: $client->AlexandriaGetCategory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->alexandria_get_category()
    // resolves here too.
    public function AlexandriaGetCategory($data = null)
    {
        require_once __DIR__ . '/entity/alexandria_get_category_entity.php';
        if ($data === null) {
            if ($this->_alexandria_get_category === null) {
                $this->_alexandria_get_category = new AlexandriaGetCategoryEntity($this, null);
            }
            return $this->_alexandria_get_category;
        }
        return new AlexandriaGetCategoryEntity($this, $data);
    }


    private $_client_version = null;

    // Canonical facade: $client->ClientVersion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->client_version()
    // resolves here too.
    public function ClientVersion($data = null)
    {
        require_once __DIR__ . '/entity/client_version_entity.php';
        if ($data === null) {
            if ($this->_client_version === null) {
                $this->_client_version = new ClientVersionEntity($this, null);
            }
            return $this->_client_version;
        }
        return new ClientVersionEntity($this, $data);
    }


    private $_cni = null;

    // Canonical facade: $client->Cni()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cni()
    // resolves here too.
    public function Cni($data = null)
    {
        require_once __DIR__ . '/entity/cni_entity.php';
        if ($data === null) {
            if ($this->_cni === null) {
                $this->_cni = new CniEntity($this, null);
            }
            return $this->_cni;
        }
        return new CniEntity($this, $data);
    }


    private $_deployment_group = null;

    // Canonical facade: $client->DeploymentGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->deployment_group()
    // resolves here too.
    public function DeploymentGroup($data = null)
    {
        require_once __DIR__ . '/entity/deployment_group_entity.php';
        if ($data === null) {
            if ($this->_deployment_group === null) {
                $this->_deployment_group = new DeploymentGroupEntity($this, null);
            }
            return $this->_deployment_group;
        }
        return new DeploymentGroupEntity($this, $data);
    }


    private $_dex_remote_command = null;

    // Canonical facade: $client->DexRemoteCommand()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dex_remote_command()
    // resolves here too.
    public function DexRemoteCommand($data = null)
    {
        require_once __DIR__ . '/entity/dex_remote_command_entity.php';
        if ($data === null) {
            if ($this->_dex_remote_command === null) {
                $this->_dex_remote_command = new DexRemoteCommandEntity($this, null);
            }
            return $this->_dex_remote_command;
        }
        return new DexRemoteCommandEntity($this, $data);
    }


    private $_dex_rule = null;

    // Canonical facade: $client->DexRule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dex_rule()
    // resolves here too.
    public function DexRule($data = null)
    {
        require_once __DIR__ . '/entity/dex_rule_entity.php';
        if ($data === null) {
            if ($this->_dex_rule === null) {
                $this->_dex_rule = new DexRuleEntity($this, null);
            }
            return $this->_dex_rule;
        }
        return new DexRuleEntity($this, $data);
    }


    private $_dex_synthetic_application_monitoring = null;

    // Canonical facade: $client->DexSyntheticApplicationMonitoring()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dex_synthetic_application_monitoring()
    // resolves here too.
    public function DexSyntheticApplicationMonitoring($data = null)
    {
        require_once __DIR__ . '/entity/dex_synthetic_application_monitoring_entity.php';
        if ($data === null) {
            if ($this->_dex_synthetic_application_monitoring === null) {
                $this->_dex_synthetic_application_monitoring = new DexSyntheticApplicationMonitoringEntity($this, null);
            }
            return $this->_dex_synthetic_application_monitoring;
        }
        return new DexSyntheticApplicationMonitoringEntity($this, $data);
    }


    private $_digital_experience_monitoring_device = null;

    // Canonical facade: $client->DigitalExperienceMonitoringDevice()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->digital_experience_monitoring_device()
    // resolves here too.
    public function DigitalExperienceMonitoringDevice($data = null)
    {
        require_once __DIR__ . '/entity/digital_experience_monitoring_device_entity.php';
        if ($data === null) {
            if ($this->_digital_experience_monitoring_device === null) {
                $this->_digital_experience_monitoring_device = new DigitalExperienceMonitoringDeviceEntity($this, null);
            }
            return $this->_digital_experience_monitoring_device;
        }
        return new DigitalExperienceMonitoringDeviceEntity($this, $data);
    }


    private $_digital_experience_monitoring_dex_delete_response_collection = null;

    // Canonical facade: $client->DigitalExperienceMonitoringDexDeleteResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->digital_experience_monitoring_dex_delete_response_collection()
    // resolves here too.
    public function DigitalExperienceMonitoringDexDeleteResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/digital_experience_monitoring_dex_delete_response_collection_entity.php';
        if ($data === null) {
            if ($this->_digital_experience_monitoring_dex_delete_response_collection === null) {
                $this->_digital_experience_monitoring_dex_delete_response_collection = new DigitalExperienceMonitoringDexDeleteResponseCollectionEntity($this, null);
            }
            return $this->_digital_experience_monitoring_dex_delete_response_collection;
        }
        return new DigitalExperienceMonitoringDexDeleteResponseCollectionEntity($this, $data);
    }


    private $_digital_experience_monitoring_dex_response_collection = null;

    // Canonical facade: $client->DigitalExperienceMonitoringDexResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->digital_experience_monitoring_dex_response_collection()
    // resolves here too.
    public function DigitalExperienceMonitoringDexResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/digital_experience_monitoring_dex_response_collection_entity.php';
        if ($data === null) {
            if ($this->_digital_experience_monitoring_dex_response_collection === null) {
                $this->_digital_experience_monitoring_dex_response_collection = new DigitalExperienceMonitoringDexResponseCollectionEntity($this, null);
            }
            return $this->_digital_experience_monitoring_dex_response_collection;
        }
        return new DigitalExperienceMonitoringDexResponseCollectionEntity($this, $data);
    }


    private $_digital_experience_monitoring_dex_single = null;

    // Canonical facade: $client->DigitalExperienceMonitoringDexSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->digital_experience_monitoring_dex_single()
    // resolves here too.
    public function DigitalExperienceMonitoringDexSingle($data = null)
    {
        require_once __DIR__ . '/entity/digital_experience_monitoring_dex_single_entity.php';
        if ($data === null) {
            if ($this->_digital_experience_monitoring_dex_single === null) {
                $this->_digital_experience_monitoring_dex_single = new DigitalExperienceMonitoringDexSingleEntity($this, null);
            }
            return $this->_digital_experience_monitoring_dex_single;
        }
        return new DigitalExperienceMonitoringDexSingleEntity($this, $data);
    }


    private $_digital_experience_monitoring_fleet_status_device = null;

    // Canonical facade: $client->DigitalExperienceMonitoringFleetStatusDevice()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->digital_experience_monitoring_fleet_status_device()
    // resolves here too.
    public function DigitalExperienceMonitoringFleetStatusDevice($data = null)
    {
        require_once __DIR__ . '/entity/digital_experience_monitoring_fleet_status_device_entity.php';
        if ($data === null) {
            if ($this->_digital_experience_monitoring_fleet_status_device === null) {
                $this->_digital_experience_monitoring_fleet_status_device = new DigitalExperienceMonitoringFleetStatusDeviceEntity($this, null);
            }
            return $this->_digital_experience_monitoring_fleet_status_device;
        }
        return new DigitalExperienceMonitoringFleetStatusDeviceEntity($this, $data);
    }


    private $_digital_experience_monitoring_fleet_status_live = null;

    // Canonical facade: $client->DigitalExperienceMonitoringFleetStatusLive()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->digital_experience_monitoring_fleet_status_live()
    // resolves here too.
    public function DigitalExperienceMonitoringFleetStatusLive($data = null)
    {
        require_once __DIR__ . '/entity/digital_experience_monitoring_fleet_status_live_entity.php';
        if ($data === null) {
            if ($this->_digital_experience_monitoring_fleet_status_live === null) {
                $this->_digital_experience_monitoring_fleet_status_live = new DigitalExperienceMonitoringFleetStatusLiveEntity($this, null);
            }
            return $this->_digital_experience_monitoring_fleet_status_live;
        }
        return new DigitalExperienceMonitoringFleetStatusLiveEntity($this, $data);
    }


    private $_digital_experience_monitoring_fleet_status_over_time = null;

    // Canonical facade: $client->DigitalExperienceMonitoringFleetStatusOverTime()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->digital_experience_monitoring_fleet_status_over_time()
    // resolves here too.
    public function DigitalExperienceMonitoringFleetStatusOverTime($data = null)
    {
        require_once __DIR__ . '/entity/digital_experience_monitoring_fleet_status_over_time_entity.php';
        if ($data === null) {
            if ($this->_digital_experience_monitoring_fleet_status_over_time === null) {
                $this->_digital_experience_monitoring_fleet_status_over_time = new DigitalExperienceMonitoringFleetStatusOverTimeEntity($this, null);
            }
            return $this->_digital_experience_monitoring_fleet_status_over_time;
        }
        return new DigitalExperienceMonitoringFleetStatusOverTimeEntity($this, $data);
    }


    private $_integration = null;

    // Canonical facade: $client->Integration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->integration()
    // resolves here too.
    public function Integration($data = null)
    {
        require_once __DIR__ . '/entity/integration_entity.php';
        if ($data === null) {
            if ($this->_integration === null) {
                $this->_integration = new IntegrationEntity($this, null);
            }
            return $this->_integration;
        }
        return new IntegrationEntity($this, $data);
    }


    private $_interconnect = null;

    // Canonical facade: $client->Interconnect()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->interconnect()
    // resolves here too.
    public function Interconnect($data = null)
    {
        require_once __DIR__ . '/entity/interconnect_entity.php';
        if ($data === null) {
            if ($this->_interconnect === null) {
                $this->_interconnect = new InterconnectEntity($this, null);
            }
            return $this->_interconnect;
        }
        return new InterconnectEntity($this, $data);
    }


    private $_ip_profile = null;

    // Canonical facade: $client->IpProfile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ip_profile()
    // resolves here too.
    public function IpProfile($data = null)
    {
        require_once __DIR__ . '/entity/ip_profile_entity.php';
        if ($data === null) {
            if ($this->_ip_profile === null) {
                $this->_ip_profile = new IpProfileEntity($this, null);
            }
            return $this->_ip_profile;
        }
        return new IpProfileEntity($this, $data);
    }


    private $_list = null;

    // Canonical facade: $client->List()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list()
    // resolves here too.
    public function List($data = null)
    {
        require_once __DIR__ . '/entity/list_entity.php';
        if ($data === null) {
            if ($this->_list === null) {
                $this->_list = new ListEntity($this, null);
            }
            return $this->_list;
        }
        return new ListEntity($this, $data);
    }


    private $_location = null;

    // Canonical facade: $client->Location()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->location()
    // resolves here too.
    public function Location($data = null)
    {
        require_once __DIR__ . '/entity/location_entity.php';
        if ($data === null) {
            if ($this->_location === null) {
                $this->_location = new LocationEntity($this, null);
            }
            return $this->_location;
        }
        return new LocationEntity($this, $data);
    }


    private $_nsc_cni = null;

    // Canonical facade: $client->NscCni()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->nsc_cni()
    // resolves here too.
    public function NscCni($data = null)
    {
        require_once __DIR__ . '/entity/nsc_cni_entity.php';
        if ($data === null) {
            if ($this->_nsc_cni === null) {
                $this->_nsc_cni = new NscCniEntity($this, null);
            }
            return $this->_nsc_cni;
        }
        return new NscCniEntity($this, $data);
    }


    private $_nsc_default_name = null;

    // Canonical facade: $client->NscDefaultName()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->nsc_default_name()
    // resolves here too.
    public function NscDefaultName($data = null)
    {
        require_once __DIR__ . '/entity/nsc_default_name_entity.php';
        if ($data === null) {
            if ($this->_nsc_default_name === null) {
                $this->_nsc_default_name = new NscDefaultNameEntity($this, null);
            }
            return $this->_nsc_default_name;
        }
        return new NscDefaultNameEntity($this, $data);
    }


    private $_nsc_interconnect = null;

    // Canonical facade: $client->NscInterconnect()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->nsc_interconnect()
    // resolves here too.
    public function NscInterconnect($data = null)
    {
        require_once __DIR__ . '/entity/nsc_interconnect_entity.php';
        if ($data === null) {
            if ($this->_nsc_interconnect === null) {
                $this->_nsc_interconnect = new NscInterconnectEntity($this, null);
            }
            return $this->_nsc_interconnect;
        }
        return new NscInterconnectEntity($this, $data);
    }


    private $_nsc_setting = null;

    // Canonical facade: $client->NscSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->nsc_setting()
    // resolves here too.
    public function NscSetting($data = null)
    {
        require_once __DIR__ . '/entity/nsc_setting_entity.php';
        if ($data === null) {
            if ($this->_nsc_setting === null) {
                $this->_nsc_setting = new NscSettingEntity($this, null);
            }
            return $this->_nsc_setting;
        }
        return new NscSettingEntity($this, $data);
    }


    private $_nsc_slot_info = null;

    // Canonical facade: $client->NscSlotInfo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->nsc_slot_info()
    // resolves here too.
    public function NscSlotInfo($data = null)
    {
        require_once __DIR__ . '/entity/nsc_slot_info_entity.php';
        if ($data === null) {
            if ($this->_nsc_slot_info === null) {
                $this->_nsc_slot_info = new NscSlotInfoEntity($this, null);
            }
            return $this->_nsc_slot_info;
        }
        return new NscSlotInfoEntity($this, $data);
    }


    private $_nsc_status_info = null;

    // Canonical facade: $client->NscStatusInfo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->nsc_status_info()
    // resolves here too.
    public function NscStatusInfo($data = null)
    {
        require_once __DIR__ . '/entity/nsc_status_info_entity.php';
        if ($data === null) {
            if ($this->_nsc_status_info === null) {
                $this->_nsc_status_info = new NscStatusInfoEntity($this, null);
            }
            return $this->_nsc_status_info;
        }
        return new NscStatusInfoEntity($this, $data);
    }


    private $_one_application_detail = null;

    // Canonical facade: $client->OneApplicationDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->one_application_detail()
    // resolves here too.
    public function OneApplicationDetail($data = null)
    {
        require_once __DIR__ . '/entity/one_application_detail_entity.php';
        if ($data === null) {
            if ($this->_one_application_detail === null) {
                $this->_one_application_detail = new OneApplicationDetailEntity($this, null);
            }
            return $this->_one_application_detail;
        }
        return new OneApplicationDetailEntity($this, $data);
    }


    private $_one_integration_create = null;

    // Canonical facade: $client->OneIntegrationCreate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->one_integration_create()
    // resolves here too.
    public function OneIntegrationCreate($data = null)
    {
        require_once __DIR__ . '/entity/one_integration_create_entity.php';
        if ($data === null) {
            if ($this->_one_integration_create === null) {
                $this->_one_integration_create = new OneIntegrationCreateEntity($this, null);
            }
            return $this->_one_integration_create;
        }
        return new OneIntegrationCreateEntity($this, $data);
    }


    private $_one_integration_detail = null;

    // Canonical facade: $client->OneIntegrationDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->one_integration_detail()
    // resolves here too.
    public function OneIntegrationDetail($data = null)
    {
        require_once __DIR__ . '/entity/one_integration_detail_entity.php';
        if ($data === null) {
            if ($this->_one_integration_detail === null) {
                $this->_one_integration_detail = new OneIntegrationDetailEntity($this, null);
            }
            return $this->_one_integration_detail;
        }
        return new OneIntegrationDetailEntity($this, $data);
    }


    private $_one_integration_pause = null;

    // Canonical facade: $client->OneIntegrationPause()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->one_integration_pause()
    // resolves here too.
    public function OneIntegrationPause($data = null)
    {
        require_once __DIR__ . '/entity/one_integration_pause_entity.php';
        if ($data === null) {
            if ($this->_one_integration_pause === null) {
                $this->_one_integration_pause = new OneIntegrationPauseEntity($this, null);
            }
            return $this->_one_integration_pause;
        }
        return new OneIntegrationPauseEntity($this, $data);
    }


    private $_one_integration_resume = null;

    // Canonical facade: $client->OneIntegrationResume()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->one_integration_resume()
    // resolves here too.
    public function OneIntegrationResume($data = null)
    {
        require_once __DIR__ . '/entity/one_integration_resume_entity.php';
        if ($data === null) {
            if ($this->_one_integration_resume === null) {
                $this->_one_integration_resume = new OneIntegrationResumeEntity($this, null);
            }
            return $this->_one_integration_resume;
        }
        return new OneIntegrationResumeEntity($this, $data);
    }


    private $_one_integration_update = null;

    // Canonical facade: $client->OneIntegrationUpdate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->one_integration_update()
    // resolves here too.
    public function OneIntegrationUpdate($data = null)
    {
        require_once __DIR__ . '/entity/one_integration_update_entity.php';
        if ($data === null) {
            if ($this->_one_integration_update === null) {
                $this->_one_integration_update = new OneIntegrationUpdateEntity($this, null);
            }
            return $this->_one_integration_update;
        }
        return new OneIntegrationUpdateEntity($this, $data);
    }


    private $_one_paginated_application_list_list = null;

    // Canonical facade: $client->OnePaginatedApplicationListList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->one_paginated_application_list_list()
    // resolves here too.
    public function OnePaginatedApplicationListList($data = null)
    {
        require_once __DIR__ . '/entity/one_paginated_application_list_list_entity.php';
        if ($data === null) {
            if ($this->_one_paginated_application_list_list === null) {
                $this->_one_paginated_application_list_list = new OnePaginatedApplicationListListEntity($this, null);
            }
            return $this->_one_paginated_application_list_list;
        }
        return new OnePaginatedApplicationListListEntity($this, $data);
    }


    private $_one_paginated_auth_method_detail_list = null;

    // Canonical facade: $client->OnePaginatedAuthMethodDetailList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->one_paginated_auth_method_detail_list()
    // resolves here too.
    public function OnePaginatedAuthMethodDetailList($data = null)
    {
        require_once __DIR__ . '/entity/one_paginated_auth_method_detail_list_entity.php';
        if ($data === null) {
            if ($this->_one_paginated_auth_method_detail_list === null) {
                $this->_one_paginated_auth_method_detail_list = new OnePaginatedAuthMethodDetailListEntity($this, null);
            }
            return $this->_one_paginated_auth_method_detail_list;
        }
        return new OnePaginatedAuthMethodDetailListEntity($this, $data);
    }


    private $_one_paginated_integration_v2_list_item_list = null;

    // Canonical facade: $client->OnePaginatedIntegrationV2ListItemList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->one_paginated_integration_v2_list_item_list()
    // resolves here too.
    public function OnePaginatedIntegrationV2ListItemList($data = null)
    {
        require_once __DIR__ . '/entity/one_paginated_integration_v2_list_item_list_entity.php';
        if ($data === null) {
            if ($this->_one_paginated_integration_v2_list_item_list === null) {
                $this->_one_paginated_integration_v2_list_item_list = new OnePaginatedIntegrationV2ListItemListEntity($this, null);
            }
            return $this->_one_paginated_integration_v2_list_item_list;
        }
        return new OnePaginatedIntegrationV2ListItemListEntity($this, $data);
    }


    private $_one_paginated_setup_flow_list = null;

    // Canonical facade: $client->OnePaginatedSetupFlowList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->one_paginated_setup_flow_list()
    // resolves here too.
    public function OnePaginatedSetupFlowList($data = null)
    {
        require_once __DIR__ . '/entity/one_paginated_setup_flow_list_entity.php';
        if ($data === null) {
            if ($this->_one_paginated_setup_flow_list === null) {
                $this->_one_paginated_setup_flow_list = new OnePaginatedSetupFlowListEntity($this, null);
            }
            return $this->_one_paginated_setup_flow_list;
        }
        return new OnePaginatedSetupFlowListEntity($this, $data);
    }


    private $_override_code = null;

    // Canonical facade: $client->OverrideCode()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->override_code()
    // resolves here too.
    public function OverrideCode($data = null)
    {
        require_once __DIR__ . '/entity/override_code_entity.php';
        if ($data === null) {
            if ($this->_override_code === null) {
                $this->_override_code = new OverrideCodeEntity($this, null);
            }
            return $this->_override_code;
        }
        return new OverrideCodeEntity($this, $data);
    }


    private $_pacfile = null;

    // Canonical facade: $client->Pacfile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pacfile()
    // resolves here too.
    public function Pacfile($data = null)
    {
        require_once __DIR__ . '/entity/pacfile_entity.php';
        if ($data === null) {
            if ($this->_pacfile === null) {
                $this->_pacfile = new PacfileEntity($this, null);
            }
            return $this->_pacfile;
        }
        return new PacfileEntity($this, $data);
    }


    private $_physical_device = null;

    // Canonical facade: $client->PhysicalDevice()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->physical_device()
    // resolves here too.
    public function PhysicalDevice($data = null)
    {
        require_once __DIR__ . '/entity/physical_device_entity.php';
        if ($data === null) {
            if ($this->_physical_device === null) {
                $this->_physical_device = new PhysicalDeviceEntity($this, null);
            }
            return $this->_physical_device;
        }
        return new PhysicalDeviceEntity($this, $data);
    }


    private $_proxy_endpoint = null;

    // Canonical facade: $client->ProxyEndpoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->proxy_endpoint()
    // resolves here too.
    public function ProxyEndpoint($data = null)
    {
        require_once __DIR__ . '/entity/proxy_endpoint_entity.php';
        if ($data === null) {
            if ($this->_proxy_endpoint === null) {
                $this->_proxy_endpoint = new ProxyEndpointEntity($this, null);
            }
            return $this->_proxy_endpoint;
        }
        return new ProxyEndpointEntity($this, $data);
    }


    private $_registration = null;

    // Canonical facade: $client->Registration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->registration()
    // resolves here too.
    public function Registration($data = null)
    {
        require_once __DIR__ . '/entity/registration_entity.php';
        if ($data === null) {
            if ($this->_registration === null) {
                $this->_registration = new RegistrationEntity($this, null);
            }
            return $this->_registration;
        }
        return new RegistrationEntity($this, $data);
    }


    private $_rule = null;

    // Canonical facade: $client->Rule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rule()
    // resolves here too.
    public function Rule($data = null)
    {
        require_once __DIR__ . '/entity/rule_entity.php';
        if ($data === null) {
            if ($this->_rule === null) {
                $this->_rule = new RuleEntity($this, null);
            }
            return $this->_rule;
        }
        return new RuleEntity($this, $data);
    }


    private $_teams_devices_api_response_single = null;

    // Canonical facade: $client->TeamsDevicesApiResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_api_response_single()
    // resolves here too.
    public function TeamsDevicesApiResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_api_response_single_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_api_response_single === null) {
                $this->_teams_devices_api_response_single = new TeamsDevicesApiResponseSingleEntity($this, null);
            }
            return $this->_teams_devices_api_response_single;
        }
        return new TeamsDevicesApiResponseSingleEntity($this, $data);
    }


    private $_teams_devices_components_schemas_response_collection = null;

    // Canonical facade: $client->TeamsDevicesComponentsSchemasResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_components_schemas_response_collection()
    // resolves here too.
    public function TeamsDevicesComponentsSchemasResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_components_schemas_response_collection_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_components_schemas_response_collection === null) {
                $this->_teams_devices_components_schemas_response_collection = new TeamsDevicesComponentsSchemasResponseCollectionEntity($this, null);
            }
            return $this->_teams_devices_components_schemas_response_collection;
        }
        return new TeamsDevicesComponentsSchemasResponseCollectionEntity($this, $data);
    }


    private $_teams_devices_components_schemas_single = null;

    // Canonical facade: $client->TeamsDevicesComponentsSchemasSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_components_schemas_single()
    // resolves here too.
    public function TeamsDevicesComponentsSchemasSingle($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_components_schemas_single_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_components_schemas_single === null) {
                $this->_teams_devices_components_schemas_single = new TeamsDevicesComponentsSchemasSingleEntity($this, null);
            }
            return $this->_teams_devices_components_schemas_single;
        }
        return new TeamsDevicesComponentsSchemasSingleEntity($this, $data);
    }


    private $_teams_devices_default_device_setting = null;

    // Canonical facade: $client->TeamsDevicesDefaultDeviceSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_default_device_setting()
    // resolves here too.
    public function TeamsDevicesDefaultDeviceSetting($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_default_device_setting_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_default_device_setting === null) {
                $this->_teams_devices_default_device_setting = new TeamsDevicesDefaultDeviceSettingEntity($this, null);
            }
            return $this->_teams_devices_default_device_setting;
        }
        return new TeamsDevicesDefaultDeviceSettingEntity($this, $data);
    }


    private $_teams_devices_device = null;

    // Canonical facade: $client->TeamsDevicesDevice()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_device()
    // resolves here too.
    public function TeamsDevicesDevice($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_device_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_device === null) {
                $this->_teams_devices_device = new TeamsDevicesDeviceEntity($this, null);
            }
            return $this->_teams_devices_device;
        }
        return new TeamsDevicesDeviceEntity($this, $data);
    }


    private $_teams_devices_device_setting = null;

    // Canonical facade: $client->TeamsDevicesDeviceSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_device_setting()
    // resolves here too.
    public function TeamsDevicesDeviceSetting($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_device_setting_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_device_setting === null) {
                $this->_teams_devices_device_setting = new TeamsDevicesDeviceSettingEntity($this, null);
            }
            return $this->_teams_devices_device_setting;
        }
        return new TeamsDevicesDeviceSettingEntity($this, $data);
    }


    private $_teams_devices_device_settings_response_collection = null;

    // Canonical facade: $client->TeamsDevicesDeviceSettingsResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_device_settings_response_collection()
    // resolves here too.
    public function TeamsDevicesDeviceSettingsResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_device_settings_response_collection_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_device_settings_response_collection === null) {
                $this->_teams_devices_device_settings_response_collection = new TeamsDevicesDeviceSettingsResponseCollectionEntity($this, null);
            }
            return $this->_teams_devices_device_settings_response_collection;
        }
        return new TeamsDevicesDeviceSettingsResponseCollectionEntity($this, $data);
    }


    private $_teams_devices_devices_policy_certificates_single = null;

    // Canonical facade: $client->TeamsDevicesDevicesPolicyCertificatesSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_devices_policy_certificates_single()
    // resolves here too.
    public function TeamsDevicesDevicesPolicyCertificatesSingle($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_devices_policy_certificates_single_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_devices_policy_certificates_single === null) {
                $this->_teams_devices_devices_policy_certificates_single = new TeamsDevicesDevicesPolicyCertificatesSingleEntity($this, null);
            }
            return $this->_teams_devices_devices_policy_certificates_single;
        }
        return new TeamsDevicesDevicesPolicyCertificatesSingleEntity($this, $data);
    }


    private $_teams_devices_fallback_domain_response_collection = null;

    // Canonical facade: $client->TeamsDevicesFallbackDomainResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_fallback_domain_response_collection()
    // resolves here too.
    public function TeamsDevicesFallbackDomainResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_fallback_domain_response_collection_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_fallback_domain_response_collection === null) {
                $this->_teams_devices_fallback_domain_response_collection = new TeamsDevicesFallbackDomainResponseCollectionEntity($this, null);
            }
            return $this->_teams_devices_fallback_domain_response_collection;
        }
        return new TeamsDevicesFallbackDomainResponseCollectionEntity($this, $data);
    }


    private $_teams_devices_global_warp_override = null;

    // Canonical facade: $client->TeamsDevicesGlobalWarpOverride()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_global_warp_override()
    // resolves here too.
    public function TeamsDevicesGlobalWarpOverride($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_global_warp_override_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_global_warp_override === null) {
                $this->_teams_devices_global_warp_override = new TeamsDevicesGlobalWarpOverrideEntity($this, null);
            }
            return $this->_teams_devices_global_warp_override;
        }
        return new TeamsDevicesGlobalWarpOverrideEntity($this, $data);
    }


    private $_teams_devices_id = null;

    // Canonical facade: $client->TeamsDevicesId()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_id()
    // resolves here too.
    public function TeamsDevicesId($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_id_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_id === null) {
                $this->_teams_devices_id = new TeamsDevicesIdEntity($this, null);
            }
            return $this->_teams_devices_id;
        }
        return new TeamsDevicesIdEntity($this, $data);
    }


    private $_teams_devices_override_code = null;

    // Canonical facade: $client->TeamsDevicesOverrideCode()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_override_code()
    // resolves here too.
    public function TeamsDevicesOverrideCode($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_override_code_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_override_code === null) {
                $this->_teams_devices_override_code = new TeamsDevicesOverrideCodeEntity($this, null);
            }
            return $this->_teams_devices_override_code;
        }
        return new TeamsDevicesOverrideCodeEntity($this, $data);
    }


    private $_teams_devices_response_collection = null;

    // Canonical facade: $client->TeamsDevicesResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_response_collection()
    // resolves here too.
    public function TeamsDevicesResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_response_collection_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_response_collection === null) {
                $this->_teams_devices_response_collection = new TeamsDevicesResponseCollectionEntity($this, null);
            }
            return $this->_teams_devices_response_collection;
        }
        return new TeamsDevicesResponseCollectionEntity($this, $data);
    }


    private $_teams_devices_schemas_id = null;

    // Canonical facade: $client->TeamsDevicesSchemasId()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_schemas_id()
    // resolves here too.
    public function TeamsDevicesSchemasId($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_schemas_id_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_schemas_id === null) {
                $this->_teams_devices_schemas_id = new TeamsDevicesSchemasIdEntity($this, null);
            }
            return $this->_teams_devices_schemas_id;
        }
        return new TeamsDevicesSchemasIdEntity($this, $data);
    }


    private $_teams_devices_schemas_response_collection = null;

    // Canonical facade: $client->TeamsDevicesSchemasResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_schemas_response_collection()
    // resolves here too.
    public function TeamsDevicesSchemasResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_schemas_response_collection_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_schemas_response_collection === null) {
                $this->_teams_devices_schemas_response_collection = new TeamsDevicesSchemasResponseCollectionEntity($this, null);
            }
            return $this->_teams_devices_schemas_response_collection;
        }
        return new TeamsDevicesSchemasResponseCollectionEntity($this, $data);
    }


    private $_teams_devices_schemas_single = null;

    // Canonical facade: $client->TeamsDevicesSchemasSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_schemas_single()
    // resolves here too.
    public function TeamsDevicesSchemasSingle($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_schemas_single_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_schemas_single === null) {
                $this->_teams_devices_schemas_single = new TeamsDevicesSchemasSingleEntity($this, null);
            }
            return $this->_teams_devices_schemas_single;
        }
        return new TeamsDevicesSchemasSingleEntity($this, $data);
    }


    private $_teams_devices_single = null;

    // Canonical facade: $client->TeamsDevicesSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_single()
    // resolves here too.
    public function TeamsDevicesSingle($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_single_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_single === null) {
                $this->_teams_devices_single = new TeamsDevicesSingleEntity($this, null);
            }
            return $this->_teams_devices_single;
        }
        return new TeamsDevicesSingleEntity($this, $data);
    }


    private $_teams_devices_split_tunnel_include_response_collection = null;

    // Canonical facade: $client->TeamsDevicesSplitTunnelIncludeResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_split_tunnel_include_response_collection()
    // resolves here too.
    public function TeamsDevicesSplitTunnelIncludeResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_split_tunnel_include_response_collection_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_split_tunnel_include_response_collection === null) {
                $this->_teams_devices_split_tunnel_include_response_collection = new TeamsDevicesSplitTunnelIncludeResponseCollectionEntity($this, null);
            }
            return $this->_teams_devices_split_tunnel_include_response_collection;
        }
        return new TeamsDevicesSplitTunnelIncludeResponseCollectionEntity($this, $data);
    }


    private $_teams_devices_split_tunnel_response_collection = null;

    // Canonical facade: $client->TeamsDevicesSplitTunnelResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_split_tunnel_response_collection()
    // resolves here too.
    public function TeamsDevicesSplitTunnelResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_split_tunnel_response_collection_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_split_tunnel_response_collection === null) {
                $this->_teams_devices_split_tunnel_response_collection = new TeamsDevicesSplitTunnelResponseCollectionEntity($this, null);
            }
            return $this->_teams_devices_split_tunnel_response_collection;
        }
        return new TeamsDevicesSplitTunnelResponseCollectionEntity($this, $data);
    }


    private $_teams_devices_zero_trust_account_device_setting = null;

    // Canonical facade: $client->TeamsDevicesZeroTrustAccountDeviceSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->teams_devices_zero_trust_account_device_setting()
    // resolves here too.
    public function TeamsDevicesZeroTrustAccountDeviceSetting($data = null)
    {
        require_once __DIR__ . '/entity/teams_devices_zero_trust_account_device_setting_entity.php';
        if ($data === null) {
            if ($this->_teams_devices_zero_trust_account_device_setting === null) {
                $this->_teams_devices_zero_trust_account_device_setting = new TeamsDevicesZeroTrustAccountDeviceSettingEntity($this, null);
            }
            return $this->_teams_devices_zero_trust_account_device_setting;
        }
        return new TeamsDevicesZeroTrustAccountDeviceSettingEntity($this, $data);
    }


    private $_tunnel = null;

    // Canonical facade: $client->Tunnel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel()
    // resolves here too.
    public function Tunnel($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_entity.php';
        if ($data === null) {
            if ($this->_tunnel === null) {
                $this->_tunnel = new TunnelEntity($this, null);
            }
            return $this->_tunnel;
        }
        return new TunnelEntity($this, $data);
    }


    private $_tunnel_cfd_tunnel_response_collection = null;

    // Canonical facade: $client->TunnelCfdTunnelResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_cfd_tunnel_response_collection()
    // resolves here too.
    public function TunnelCfdTunnelResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_cfd_tunnel_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tunnel_cfd_tunnel_response_collection === null) {
                $this->_tunnel_cfd_tunnel_response_collection = new TunnelCfdTunnelResponseCollectionEntity($this, null);
            }
            return $this->_tunnel_cfd_tunnel_response_collection;
        }
        return new TunnelCfdTunnelResponseCollectionEntity($this, $data);
    }


    private $_tunnel_cfd_tunnel_response_single = null;

    // Canonical facade: $client->TunnelCfdTunnelResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_cfd_tunnel_response_single()
    // resolves here too.
    public function TunnelCfdTunnelResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_cfd_tunnel_response_single_entity.php';
        if ($data === null) {
            if ($this->_tunnel_cfd_tunnel_response_single === null) {
                $this->_tunnel_cfd_tunnel_response_single = new TunnelCfdTunnelResponseSingleEntity($this, null);
            }
            return $this->_tunnel_cfd_tunnel_response_single;
        }
        return new TunnelCfdTunnelResponseSingleEntity($this, $data);
    }


    private $_tunnel_configuration = null;

    // Canonical facade: $client->TunnelConfiguration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_configuration()
    // resolves here too.
    public function TunnelConfiguration($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_configuration_entity.php';
        if ($data === null) {
            if ($this->_tunnel_configuration === null) {
                $this->_tunnel_configuration = new TunnelConfigurationEntity($this, null);
            }
            return $this->_tunnel_configuration;
        }
        return new TunnelConfigurationEntity($this, $data);
    }


    private $_tunnel_empty = null;

    // Canonical facade: $client->TunnelEmpty()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_empty()
    // resolves here too.
    public function TunnelEmpty($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_empty_entity.php';
        if ($data === null) {
            if ($this->_tunnel_empty === null) {
                $this->_tunnel_empty = new TunnelEmptyEntity($this, null);
            }
            return $this->_tunnel_empty;
        }
        return new TunnelEmptyEntity($this, $data);
    }


    private $_tunnel_hostname_route_response_collection = null;

    // Canonical facade: $client->TunnelHostnameRouteResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_hostname_route_response_collection()
    // resolves here too.
    public function TunnelHostnameRouteResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_hostname_route_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tunnel_hostname_route_response_collection === null) {
                $this->_tunnel_hostname_route_response_collection = new TunnelHostnameRouteResponseCollectionEntity($this, null);
            }
            return $this->_tunnel_hostname_route_response_collection;
        }
        return new TunnelHostnameRouteResponseCollectionEntity($this, $data);
    }


    private $_tunnel_hostname_route_response_single = null;

    // Canonical facade: $client->TunnelHostnameRouteResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_hostname_route_response_single()
    // resolves here too.
    public function TunnelHostnameRouteResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_hostname_route_response_single_entity.php';
        if ($data === null) {
            if ($this->_tunnel_hostname_route_response_single === null) {
                $this->_tunnel_hostname_route_response_single = new TunnelHostnameRouteResponseSingleEntity($this, null);
            }
            return $this->_tunnel_hostname_route_response_single;
        }
        return new TunnelHostnameRouteResponseSingleEntity($this, $data);
    }


    private $_tunnel_mesh_configuration_response_single = null;

    // Canonical facade: $client->TunnelMeshConfigurationResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_mesh_configuration_response_single()
    // resolves here too.
    public function TunnelMeshConfigurationResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_mesh_configuration_response_single_entity.php';
        if ($data === null) {
            if ($this->_tunnel_mesh_configuration_response_single === null) {
                $this->_tunnel_mesh_configuration_response_single = new TunnelMeshConfigurationResponseSingleEntity($this, null);
            }
            return $this->_tunnel_mesh_configuration_response_single;
        }
        return new TunnelMeshConfigurationResponseSingleEntity($this, $data);
    }


    private $_tunnel_route_response_single = null;

    // Canonical facade: $client->TunnelRouteResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_route_response_single()
    // resolves here too.
    public function TunnelRouteResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_route_response_single_entity.php';
        if ($data === null) {
            if ($this->_tunnel_route_response_single === null) {
                $this->_tunnel_route_response_single = new TunnelRouteResponseSingleEntity($this, null);
            }
            return $this->_tunnel_route_response_single;
        }
        return new TunnelRouteResponseSingleEntity($this, $data);
    }


    private $_tunnel_subnet_response_collection = null;

    // Canonical facade: $client->TunnelSubnetResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_subnet_response_collection()
    // resolves here too.
    public function TunnelSubnetResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_subnet_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tunnel_subnet_response_collection === null) {
                $this->_tunnel_subnet_response_collection = new TunnelSubnetResponseCollectionEntity($this, null);
            }
            return $this->_tunnel_subnet_response_collection;
        }
        return new TunnelSubnetResponseCollectionEntity($this, $data);
    }


    private $_tunnel_subnet_response_single = null;

    // Canonical facade: $client->TunnelSubnetResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_subnet_response_single()
    // resolves here too.
    public function TunnelSubnetResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_subnet_response_single_entity.php';
        if ($data === null) {
            if ($this->_tunnel_subnet_response_single === null) {
                $this->_tunnel_subnet_response_single = new TunnelSubnetResponseSingleEntity($this, null);
            }
            return $this->_tunnel_subnet_response_single;
        }
        return new TunnelSubnetResponseSingleEntity($this, $data);
    }


    private $_tunnel_subnet_response_single_nullable = null;

    // Canonical facade: $client->TunnelSubnetResponseSingleNullable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_subnet_response_single_nullable()
    // resolves here too.
    public function TunnelSubnetResponseSingleNullable($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_subnet_response_single_nullable_entity.php';
        if ($data === null) {
            if ($this->_tunnel_subnet_response_single_nullable === null) {
                $this->_tunnel_subnet_response_single_nullable = new TunnelSubnetResponseSingleNullableEntity($this, null);
            }
            return $this->_tunnel_subnet_response_single_nullable;
        }
        return new TunnelSubnetResponseSingleNullableEntity($this, $data);
    }


    private $_tunnel_teamnet_response_collection = null;

    // Canonical facade: $client->TunnelTeamnetResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_teamnet_response_collection()
    // resolves here too.
    public function TunnelTeamnetResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_teamnet_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tunnel_teamnet_response_collection === null) {
                $this->_tunnel_teamnet_response_collection = new TunnelTeamnetResponseCollectionEntity($this, null);
            }
            return $this->_tunnel_teamnet_response_collection;
        }
        return new TunnelTeamnetResponseCollectionEntity($this, $data);
    }


    private $_tunnel_teamnet_response_single = null;

    // Canonical facade: $client->TunnelTeamnetResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_teamnet_response_single()
    // resolves here too.
    public function TunnelTeamnetResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_teamnet_response_single_entity.php';
        if ($data === null) {
            if ($this->_tunnel_teamnet_response_single === null) {
                $this->_tunnel_teamnet_response_single = new TunnelTeamnetResponseSingleEntity($this, null);
            }
            return $this->_tunnel_teamnet_response_single;
        }
        return new TunnelTeamnetResponseSingleEntity($this, $data);
    }


    private $_tunnel_tunnel_client = null;

    // Canonical facade: $client->TunnelTunnelClient()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_tunnel_client()
    // resolves here too.
    public function TunnelTunnelClient($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_tunnel_client_entity.php';
        if ($data === null) {
            if ($this->_tunnel_tunnel_client === null) {
                $this->_tunnel_tunnel_client = new TunnelTunnelClientEntity($this, null);
            }
            return $this->_tunnel_tunnel_client;
        }
        return new TunnelTunnelClientEntity($this, $data);
    }


    private $_tunnel_tunnel_connection = null;

    // Canonical facade: $client->TunnelTunnelConnection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_tunnel_connection()
    // resolves here too.
    public function TunnelTunnelConnection($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_tunnel_connection_entity.php';
        if ($data === null) {
            if ($this->_tunnel_tunnel_connection === null) {
                $this->_tunnel_tunnel_connection = new TunnelTunnelConnectionEntity($this, null);
            }
            return $this->_tunnel_tunnel_connection;
        }
        return new TunnelTunnelConnectionEntity($this, $data);
    }


    private $_tunnel_tunnel_response_token = null;

    // Canonical facade: $client->TunnelTunnelResponseToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_tunnel_response_token()
    // resolves here too.
    public function TunnelTunnelResponseToken($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_tunnel_response_token_entity.php';
        if ($data === null) {
            if ($this->_tunnel_tunnel_response_token === null) {
                $this->_tunnel_tunnel_response_token = new TunnelTunnelResponseTokenEntity($this, null);
            }
            return $this->_tunnel_tunnel_response_token;
        }
        return new TunnelTunnelResponseTokenEntity($this, $data);
    }


    private $_tunnel_tunnel_warp_connector_client = null;

    // Canonical facade: $client->TunnelTunnelWarpConnectorClient()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_tunnel_warp_connector_client()
    // resolves here too.
    public function TunnelTunnelWarpConnectorClient($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_tunnel_warp_connector_client_entity.php';
        if ($data === null) {
            if ($this->_tunnel_tunnel_warp_connector_client === null) {
                $this->_tunnel_tunnel_warp_connector_client = new TunnelTunnelWarpConnectorClientEntity($this, null);
            }
            return $this->_tunnel_tunnel_warp_connector_client;
        }
        return new TunnelTunnelWarpConnectorClientEntity($this, $data);
    }


    private $_tunnel_tunnel_warp_connector_connection = null;

    // Canonical facade: $client->TunnelTunnelWarpConnectorConnection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_tunnel_warp_connector_connection()
    // resolves here too.
    public function TunnelTunnelWarpConnectorConnection($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_tunnel_warp_connector_connection_entity.php';
        if ($data === null) {
            if ($this->_tunnel_tunnel_warp_connector_connection === null) {
                $this->_tunnel_tunnel_warp_connector_connection = new TunnelTunnelWarpConnectorConnectionEntity($this, null);
            }
            return $this->_tunnel_tunnel_warp_connector_connection;
        }
        return new TunnelTunnelWarpConnectorConnectionEntity($this, $data);
    }


    private $_tunnel_vnet_response_collection = null;

    // Canonical facade: $client->TunnelVnetResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_vnet_response_collection()
    // resolves here too.
    public function TunnelVnetResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_vnet_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tunnel_vnet_response_collection === null) {
                $this->_tunnel_vnet_response_collection = new TunnelVnetResponseCollectionEntity($this, null);
            }
            return $this->_tunnel_vnet_response_collection;
        }
        return new TunnelVnetResponseCollectionEntity($this, $data);
    }


    private $_tunnel_vnet_response_single = null;

    // Canonical facade: $client->TunnelVnetResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_vnet_response_single()
    // resolves here too.
    public function TunnelVnetResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_vnet_response_single_entity.php';
        if ($data === null) {
            if ($this->_tunnel_vnet_response_single === null) {
                $this->_tunnel_vnet_response_single = new TunnelVnetResponseSingleEntity($this, null);
            }
            return $this->_tunnel_vnet_response_single;
        }
        return new TunnelVnetResponseSingleEntity($this, $data);
    }


    private $_tunnel_warp_connector_response_collection = null;

    // Canonical facade: $client->TunnelWarpConnectorResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_warp_connector_response_collection()
    // resolves here too.
    public function TunnelWarpConnectorResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_warp_connector_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tunnel_warp_connector_response_collection === null) {
                $this->_tunnel_warp_connector_response_collection = new TunnelWarpConnectorResponseCollectionEntity($this, null);
            }
            return $this->_tunnel_warp_connector_response_collection;
        }
        return new TunnelWarpConnectorResponseCollectionEntity($this, $data);
    }


    private $_tunnel_warp_connector_response_single = null;

    // Canonical facade: $client->TunnelWarpConnectorResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_warp_connector_response_single()
    // resolves here too.
    public function TunnelWarpConnectorResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_warp_connector_response_single_entity.php';
        if ($data === null) {
            if ($this->_tunnel_warp_connector_response_single === null) {
                $this->_tunnel_warp_connector_response_single = new TunnelWarpConnectorResponseSingleEntity($this, null);
            }
            return $this->_tunnel_warp_connector_response_single;
        }
        return new TunnelWarpConnectorResponseSingleEntity($this, $data);
    }


    private $_tunnel_zero_trust_connectivity_setting = null;

    // Canonical facade: $client->TunnelZeroTrustConnectivitySetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tunnel_zero_trust_connectivity_setting()
    // resolves here too.
    public function TunnelZeroTrustConnectivitySetting($data = null)
    {
        require_once __DIR__ . '/entity/tunnel_zero_trust_connectivity_setting_entity.php';
        if ($data === null) {
            if ($this->_tunnel_zero_trust_connectivity_setting === null) {
                $this->_tunnel_zero_trust_connectivity_setting = new TunnelZeroTrustConnectivitySettingEntity($this, null);
            }
            return $this->_tunnel_zero_trust_connectivity_setting;
        }
        return new TunnelZeroTrustConnectivitySettingEntity($this, $data);
    }


    private $_warp = null;

    // Canonical facade: $client->Warp()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->warp()
    // resolves here too.
    public function Warp($data = null)
    {
        require_once __DIR__ . '/entity/warp_entity.php';
        if ($data === null) {
            if ($this->_warp === null) {
                $this->_warp = new WarpEntity($this, null);
            }
            return $this->_warp;
        }
        return new WarpEntity($this, $data);
    }


    private $_warp_change_event = null;

    // Canonical facade: $client->WarpChangeEvent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->warp_change_event()
    // resolves here too.
    public function WarpChangeEvent($data = null)
    {
        require_once __DIR__ . '/entity/warp_change_event_entity.php';
        if ($data === null) {
            if ($this->_warp_change_event === null) {
                $this->_warp_change_event = new WarpChangeEventEntity($this, null);
            }
            return $this->_warp_change_event;
        }
        return new WarpChangeEventEntity($this, $data);
    }


    private $_warp_teams_device_api_other = null;

    // Canonical facade: $client->WarpTeamsDeviceApiOther()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->warp_teams_device_api_other()
    // resolves here too.
    public function WarpTeamsDeviceApiOther($data = null)
    {
        require_once __DIR__ . '/entity/warp_teams_device_api_other_entity.php';
        if ($data === null) {
            if ($this->_warp_teams_device_api_other === null) {
                $this->_warp_teams_device_api_other = new WarpTeamsDeviceApiOtherEntity($this, null);
            }
            return $this->_warp_teams_device_api_other;
        }
        return new WarpTeamsDeviceApiOtherEntity($this, $data);
    }


    private $_zero_trust_gateway_applications_review_status = null;

    // Canonical facade: $client->ZeroTrustGatewayApplicationsReviewStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_applications_review_status()
    // resolves here too.
    public function ZeroTrustGatewayApplicationsReviewStatus($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_applications_review_status_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_applications_review_status === null) {
                $this->_zero_trust_gateway_applications_review_status = new ZeroTrustGatewayApplicationsReviewStatusEntity($this, null);
            }
            return $this->_zero_trust_gateway_applications_review_status;
        }
        return new ZeroTrustGatewayApplicationsReviewStatusEntity($this, $data);
    }


    private $_zero_trust_gateway_csv_operation_single = null;

    // Canonical facade: $client->ZeroTrustGatewayCsvOperationSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_csv_operation_single()
    // resolves here too.
    public function ZeroTrustGatewayCsvOperationSingle($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_csv_operation_single_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_csv_operation_single === null) {
                $this->_zero_trust_gateway_csv_operation_single = new ZeroTrustGatewayCsvOperationSingleEntity($this, null);
            }
            return $this->_zero_trust_gateway_csv_operation_single;
        }
        return new ZeroTrustGatewayCsvOperationSingleEntity($this, $data);
    }


    private $_zero_trust_gateway_custom_certificate_setting = null;

    // Canonical facade: $client->ZeroTrustGatewayCustomCertificateSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_custom_certificate_setting()
    // resolves here too.
    public function ZeroTrustGatewayCustomCertificateSetting($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_custom_certificate_setting_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_custom_certificate_setting === null) {
                $this->_zero_trust_gateway_custom_certificate_setting = new ZeroTrustGatewayCustomCertificateSettingEntity($this, null);
            }
            return $this->_zero_trust_gateway_custom_certificate_setting;
        }
        return new ZeroTrustGatewayCustomCertificateSettingEntity($this, $data);
    }


    private $_zero_trust_gateway_gateway_account = null;

    // Canonical facade: $client->ZeroTrustGatewayGatewayAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_gateway_account()
    // resolves here too.
    public function ZeroTrustGatewayGatewayAccount($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_gateway_account_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_gateway_account === null) {
                $this->_zero_trust_gateway_gateway_account = new ZeroTrustGatewayGatewayAccountEntity($this, null);
            }
            return $this->_zero_trust_gateway_gateway_account;
        }
        return new ZeroTrustGatewayGatewayAccountEntity($this, $data);
    }


    private $_zero_trust_gateway_gateway_account_config = null;

    // Canonical facade: $client->ZeroTrustGatewayGatewayAccountConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_gateway_account_config()
    // resolves here too.
    public function ZeroTrustGatewayGatewayAccountConfig($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_gateway_account_config_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_gateway_account_config === null) {
                $this->_zero_trust_gateway_gateway_account_config = new ZeroTrustGatewayGatewayAccountConfigEntity($this, null);
            }
            return $this->_zero_trust_gateway_gateway_account_config;
        }
        return new ZeroTrustGatewayGatewayAccountConfigEntity($this, $data);
    }


    private $_zero_trust_gateway_gateway_account_egress_cidr_pair_list = null;

    // Canonical facade: $client->ZeroTrustGatewayGatewayAccountEgressCidrPairList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_gateway_account_egress_cidr_pair_list()
    // resolves here too.
    public function ZeroTrustGatewayGatewayAccountEgressCidrPairList($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_gateway_account_egress_cidr_pair_list_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_gateway_account_egress_cidr_pair_list === null) {
                $this->_zero_trust_gateway_gateway_account_egress_cidr_pair_list = new ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity($this, null);
            }
            return $this->_zero_trust_gateway_gateway_account_egress_cidr_pair_list;
        }
        return new ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity($this, $data);
    }


    private $_zero_trust_gateway_gateway_account_logging_setting = null;

    // Canonical facade: $client->ZeroTrustGatewayGatewayAccountLoggingSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_gateway_account_logging_setting()
    // resolves here too.
    public function ZeroTrustGatewayGatewayAccountLoggingSetting($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_gateway_account_logging_setting_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_gateway_account_logging_setting === null) {
                $this->_zero_trust_gateway_gateway_account_logging_setting = new ZeroTrustGatewayGatewayAccountLoggingSettingEntity($this, null);
            }
            return $this->_zero_trust_gateway_gateway_account_logging_setting;
        }
        return new ZeroTrustGatewayGatewayAccountLoggingSettingEntity($this, $data);
    }


    private $_zero_trust_gateway_list_item_response_collection = null;

    // Canonical facade: $client->ZeroTrustGatewayListItemResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_list_item_response_collection()
    // resolves here too.
    public function ZeroTrustGatewayListItemResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_list_item_response_collection_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_list_item_response_collection === null) {
                $this->_zero_trust_gateway_list_item_response_collection = new ZeroTrustGatewayListItemResponseCollectionEntity($this, null);
            }
            return $this->_zero_trust_gateway_list_item_response_collection;
        }
        return new ZeroTrustGatewayListItemResponseCollectionEntity($this, $data);
    }


    private $_zero_trust_gateway_list_single = null;

    // Canonical facade: $client->ZeroTrustGatewayListSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_list_single()
    // resolves here too.
    public function ZeroTrustGatewayListSingle($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_list_single_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_list_single === null) {
                $this->_zero_trust_gateway_list_single = new ZeroTrustGatewayListSingleEntity($this, null);
            }
            return $this->_zero_trust_gateway_list_single;
        }
        return new ZeroTrustGatewayListSingleEntity($this, $data);
    }


    private $_zero_trust_gateway_response_collection = null;

    // Canonical facade: $client->ZeroTrustGatewayResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_response_collection()
    // resolves here too.
    public function ZeroTrustGatewayResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_response_collection_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_response_collection === null) {
                $this->_zero_trust_gateway_response_collection = new ZeroTrustGatewayResponseCollectionEntity($this, null);
            }
            return $this->_zero_trust_gateway_response_collection;
        }
        return new ZeroTrustGatewayResponseCollectionEntity($this, $data);
    }


    private $_zero_trust_gateway_response_collection_10 = null;

    // Canonical facade: $client->ZeroTrustGatewayResponseCollection10()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_response_collection_10()
    // resolves here too.
    public function ZeroTrustGatewayResponseCollection10($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_response_collection_10_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_response_collection_10 === null) {
                $this->_zero_trust_gateway_response_collection_10 = new ZeroTrustGatewayResponseCollection10Entity($this, null);
            }
            return $this->_zero_trust_gateway_response_collection_10;
        }
        return new ZeroTrustGatewayResponseCollection10Entity($this, $data);
    }


    private $_zero_trust_gateway_response_collection_2 = null;

    // Canonical facade: $client->ZeroTrustGatewayResponseCollection2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_response_collection_2()
    // resolves here too.
    public function ZeroTrustGatewayResponseCollection2($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_response_collection_2_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_response_collection_2 === null) {
                $this->_zero_trust_gateway_response_collection_2 = new ZeroTrustGatewayResponseCollection2Entity($this, null);
            }
            return $this->_zero_trust_gateway_response_collection_2;
        }
        return new ZeroTrustGatewayResponseCollection2Entity($this, $data);
    }


    private $_zero_trust_gateway_response_collection_3 = null;

    // Canonical facade: $client->ZeroTrustGatewayResponseCollection3()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_response_collection_3()
    // resolves here too.
    public function ZeroTrustGatewayResponseCollection3($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_response_collection_3_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_response_collection_3 === null) {
                $this->_zero_trust_gateway_response_collection_3 = new ZeroTrustGatewayResponseCollection3Entity($this, null);
            }
            return $this->_zero_trust_gateway_response_collection_3;
        }
        return new ZeroTrustGatewayResponseCollection3Entity($this, $data);
    }


    private $_zero_trust_gateway_response_collection_4 = null;

    // Canonical facade: $client->ZeroTrustGatewayResponseCollection4()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_response_collection_4()
    // resolves here too.
    public function ZeroTrustGatewayResponseCollection4($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_response_collection_4_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_response_collection_4 === null) {
                $this->_zero_trust_gateway_response_collection_4 = new ZeroTrustGatewayResponseCollection4Entity($this, null);
            }
            return $this->_zero_trust_gateway_response_collection_4;
        }
        return new ZeroTrustGatewayResponseCollection4Entity($this, $data);
    }


    private $_zero_trust_gateway_response_collection_5 = null;

    // Canonical facade: $client->ZeroTrustGatewayResponseCollection5()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_response_collection_5()
    // resolves here too.
    public function ZeroTrustGatewayResponseCollection5($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_response_collection_5_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_response_collection_5 === null) {
                $this->_zero_trust_gateway_response_collection_5 = new ZeroTrustGatewayResponseCollection5Entity($this, null);
            }
            return $this->_zero_trust_gateway_response_collection_5;
        }
        return new ZeroTrustGatewayResponseCollection5Entity($this, $data);
    }


    private $_zero_trust_gateway_response_collection_6 = null;

    // Canonical facade: $client->ZeroTrustGatewayResponseCollection6()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_response_collection_6()
    // resolves here too.
    public function ZeroTrustGatewayResponseCollection6($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_response_collection_6_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_response_collection_6 === null) {
                $this->_zero_trust_gateway_response_collection_6 = new ZeroTrustGatewayResponseCollection6Entity($this, null);
            }
            return $this->_zero_trust_gateway_response_collection_6;
        }
        return new ZeroTrustGatewayResponseCollection6Entity($this, $data);
    }


    private $_zero_trust_gateway_response_collection_7 = null;

    // Canonical facade: $client->ZeroTrustGatewayResponseCollection7()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_response_collection_7()
    // resolves here too.
    public function ZeroTrustGatewayResponseCollection7($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_response_collection_7_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_response_collection_7 === null) {
                $this->_zero_trust_gateway_response_collection_7 = new ZeroTrustGatewayResponseCollection7Entity($this, null);
            }
            return $this->_zero_trust_gateway_response_collection_7;
        }
        return new ZeroTrustGatewayResponseCollection7Entity($this, $data);
    }


    private $_zero_trust_gateway_response_collection_8 = null;

    // Canonical facade: $client->ZeroTrustGatewayResponseCollection8()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_response_collection_8()
    // resolves here too.
    public function ZeroTrustGatewayResponseCollection8($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_response_collection_8_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_response_collection_8 === null) {
                $this->_zero_trust_gateway_response_collection_8 = new ZeroTrustGatewayResponseCollection8Entity($this, null);
            }
            return $this->_zero_trust_gateway_response_collection_8;
        }
        return new ZeroTrustGatewayResponseCollection8Entity($this, $data);
    }


    private $_zero_trust_gateway_response_collection_9 = null;

    // Canonical facade: $client->ZeroTrustGatewayResponseCollection9()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_response_collection_9()
    // resolves here too.
    public function ZeroTrustGatewayResponseCollection9($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_response_collection_9_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_response_collection_9 === null) {
                $this->_zero_trust_gateway_response_collection_9 = new ZeroTrustGatewayResponseCollection9Entity($this, null);
            }
            return $this->_zero_trust_gateway_response_collection_9;
        }
        return new ZeroTrustGatewayResponseCollection9Entity($this, $data);
    }


    private $_zero_trust_gateway_single = null;

    // Canonical facade: $client->ZeroTrustGatewaySingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_single()
    // resolves here too.
    public function ZeroTrustGatewaySingle($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_single_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_single === null) {
                $this->_zero_trust_gateway_single = new ZeroTrustGatewaySingleEntity($this, null);
            }
            return $this->_zero_trust_gateway_single;
        }
        return new ZeroTrustGatewaySingleEntity($this, $data);
    }


    private $_zero_trust_gateway_single_response_2 = null;

    // Canonical facade: $client->ZeroTrustGatewaySingleResponse2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_single_response_2()
    // resolves here too.
    public function ZeroTrustGatewaySingleResponse2($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_single_response_2_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_single_response_2 === null) {
                $this->_zero_trust_gateway_single_response_2 = new ZeroTrustGatewaySingleResponse2Entity($this, null);
            }
            return $this->_zero_trust_gateway_single_response_2;
        }
        return new ZeroTrustGatewaySingleResponse2Entity($this, $data);
    }


    private $_zero_trust_gateway_single_response_3 = null;

    // Canonical facade: $client->ZeroTrustGatewaySingleResponse3()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_single_response_3()
    // resolves here too.
    public function ZeroTrustGatewaySingleResponse3($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_single_response_3_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_single_response_3 === null) {
                $this->_zero_trust_gateway_single_response_3 = new ZeroTrustGatewaySingleResponse3Entity($this, null);
            }
            return $this->_zero_trust_gateway_single_response_3;
        }
        return new ZeroTrustGatewaySingleResponse3Entity($this, $data);
    }


    private $_zero_trust_gateway_single_response_4 = null;

    // Canonical facade: $client->ZeroTrustGatewaySingleResponse4()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_single_response_4()
    // resolves here too.
    public function ZeroTrustGatewaySingleResponse4($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_single_response_4_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_single_response_4 === null) {
                $this->_zero_trust_gateway_single_response_4 = new ZeroTrustGatewaySingleResponse4Entity($this, null);
            }
            return $this->_zero_trust_gateway_single_response_4;
        }
        return new ZeroTrustGatewaySingleResponse4Entity($this, $data);
    }


    private $_zero_trust_gateway_single_response_5 = null;

    // Canonical facade: $client->ZeroTrustGatewaySingleResponse5()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_single_response_5()
    // resolves here too.
    public function ZeroTrustGatewaySingleResponse5($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_single_response_5_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_single_response_5 === null) {
                $this->_zero_trust_gateway_single_response_5 = new ZeroTrustGatewaySingleResponse5Entity($this, null);
            }
            return $this->_zero_trust_gateway_single_response_5;
        }
        return new ZeroTrustGatewaySingleResponse5Entity($this, $data);
    }


    private $_zero_trust_gateway_single_response_6 = null;

    // Canonical facade: $client->ZeroTrustGatewaySingleResponse6()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_single_response_6()
    // resolves here too.
    public function ZeroTrustGatewaySingleResponse6($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_single_response_6_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_single_response_6 === null) {
                $this->_zero_trust_gateway_single_response_6 = new ZeroTrustGatewaySingleResponse6Entity($this, null);
            }
            return $this->_zero_trust_gateway_single_response_6;
        }
        return new ZeroTrustGatewaySingleResponse6Entity($this, $data);
    }


    private $_zero_trust_gateway_single_response_7 = null;

    // Canonical facade: $client->ZeroTrustGatewaySingleResponse7()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_single_response_7()
    // resolves here too.
    public function ZeroTrustGatewaySingleResponse7($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_single_response_7_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_single_response_7 === null) {
                $this->_zero_trust_gateway_single_response_7 = new ZeroTrustGatewaySingleResponse7Entity($this, null);
            }
            return $this->_zero_trust_gateway_single_response_7;
        }
        return new ZeroTrustGatewaySingleResponse7Entity($this, $data);
    }


    private $_zero_trust_gateway_single_response_with_list_item = null;

    // Canonical facade: $client->ZeroTrustGatewaySingleResponseWithListItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_gateway_single_response_with_list_item()
    // resolves here too.
    public function ZeroTrustGatewaySingleResponseWithListItem($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_gateway_single_response_with_list_item_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_gateway_single_response_with_list_item === null) {
                $this->_zero_trust_gateway_single_response_with_list_item = new ZeroTrustGatewaySingleResponseWithListItemEntity($this, null);
            }
            return $this->_zero_trust_gateway_single_response_with_list_item;
        }
        return new ZeroTrustGatewaySingleResponseWithListItemEntity($this, $data);
    }


    private $_zero_trust_risk_scoring = null;

    // Canonical facade: $client->ZeroTrustRiskScoring()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_risk_scoring()
    // resolves here too.
    public function ZeroTrustRiskScoring($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_risk_scoring_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_risk_scoring === null) {
                $this->_zero_trust_risk_scoring = new ZeroTrustRiskScoringEntity($this, null);
            }
            return $this->_zero_trust_risk_scoring;
        }
        return new ZeroTrustRiskScoringEntity($this, $data);
    }


    private $_zero_trust_risk_scoring_integration = null;

    // Canonical facade: $client->ZeroTrustRiskScoringIntegration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zero_trust_risk_scoring_integration()
    // resolves here too.
    public function ZeroTrustRiskScoringIntegration($data = null)
    {
        require_once __DIR__ . '/entity/zero_trust_risk_scoring_integration_entity.php';
        if ($data === null) {
            if ($this->_zero_trust_risk_scoring_integration === null) {
                $this->_zero_trust_risk_scoring_integration = new ZeroTrustRiskScoringIntegrationEntity($this, null);
            }
            return $this->_zero_trust_risk_scoring_integration;
        }
        return new ZeroTrustRiskScoringIntegrationEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CloudflareZeroTrustSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
