<?php
declare(strict_types=1);

// CloudflareZeroTrust SDK utility: prepare_path

class CloudflareZeroTrustPreparePath
{
    public static function call(CloudflareZeroTrustContext $ctx): string
    {
        $point = $ctx->point;
        $parts = [];
        if ($point) {
            $p = \Voxgig\Struct\Struct::getprop($point, 'parts');
            if (is_array($p)) {
                $parts = $p;
            }
        }
        return \Voxgig\Struct\Struct::join($parts, '/', true);
    }
}
