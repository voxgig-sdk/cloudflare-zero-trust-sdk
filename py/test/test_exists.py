# CloudflareZeroTrust SDK exists test

import pytest
from cloudflarezerotrust_sdk import CloudflareZeroTrustSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudflareZeroTrustSDK.test(None, None)
        assert testsdk is not None
