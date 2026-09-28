<?php
declare(strict_types=1);

// CloudflareZeroTrust SDK utility: result_headers

class CloudflareZeroTrustResultHeaders
{
    public static function call(CloudflareZeroTrustContext $ctx): ?CloudflareZeroTrustResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
