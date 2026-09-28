# CloudflareZeroTrust SDK utility: make_context
require_relative '../core/context'
module CloudflareZeroTrustUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudflareZeroTrustContext.new(ctxmap, basectx)
  }
end
