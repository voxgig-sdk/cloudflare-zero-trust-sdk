<?php
declare(strict_types=1);

// CloudflareZeroTrust SDK base feature

class CloudflareZeroTrustBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CloudflareZeroTrustContext $ctx, array $options): void {}
    public function PostConstruct(CloudflareZeroTrustContext $ctx): void {}
    public function PostConstructEntity(CloudflareZeroTrustContext $ctx): void {}
    public function SetData(CloudflareZeroTrustContext $ctx): void {}
    public function GetData(CloudflareZeroTrustContext $ctx): void {}
    public function GetMatch(CloudflareZeroTrustContext $ctx): void {}
    public function SetMatch(CloudflareZeroTrustContext $ctx): void {}
    public function PrePoint(CloudflareZeroTrustContext $ctx): void {}
    public function PreSpec(CloudflareZeroTrustContext $ctx): void {}
    public function PreRequest(CloudflareZeroTrustContext $ctx): void {}
    public function PreResponse(CloudflareZeroTrustContext $ctx): void {}
    public function PreResult(CloudflareZeroTrustContext $ctx): void {}
    public function PreDone(CloudflareZeroTrustContext $ctx): void {}
    public function PreUnexpected(CloudflareZeroTrustContext $ctx): void {}
}
