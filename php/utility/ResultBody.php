<?php
declare(strict_types=1);

// CloudflareZeroTrust SDK utility: result_body

class CloudflareZeroTrustResultBody
{
    public static function call(CloudflareZeroTrustContext $ctx): ?CloudflareZeroTrustResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
