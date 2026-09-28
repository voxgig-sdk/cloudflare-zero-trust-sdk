# CloudflareZeroTrust SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudflareZeroTrustFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudflareZeroTrustBaseFeature.new
    when "test"
      CloudflareZeroTrustTestFeature.new
    else
      CloudflareZeroTrustBaseFeature.new
    end
  end
end
