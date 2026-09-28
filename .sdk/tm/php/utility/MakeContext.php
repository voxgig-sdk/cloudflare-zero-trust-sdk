<?php
declare(strict_types=1);

// CloudflareZeroTrust SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudflareZeroTrustMakeContext
{
    public static function call(array $ctxmap, ?CloudflareZeroTrustContext $basectx): CloudflareZeroTrustContext
    {
        return new CloudflareZeroTrustContext($ctxmap, $basectx);
    }
}
