# CloudflareZeroTrust SDK exists test

require "minitest/autorun"
require_relative "../CloudflareZeroTrust_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CloudflareZeroTrustSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
