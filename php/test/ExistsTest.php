<?php
declare(strict_types=1);

// CloudflareZeroTrust SDK exists test

require_once __DIR__ . '/../cloudflarezerotrust_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CloudflareZeroTrustSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
