-- CloudflareZeroTrust SDK error

local CloudflareZeroTrustError = {}
CloudflareZeroTrustError.__index = CloudflareZeroTrustError


function CloudflareZeroTrustError.new(code, msg, ctx)
  local self = setmetatable({}, CloudflareZeroTrustError)
  self.is_sdk_error = true
  self.sdk = "CloudflareZeroTrust"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudflareZeroTrustError:error()
  return self.msg
end


function CloudflareZeroTrustError:__tostring()
  return self.msg
end


return CloudflareZeroTrustError
