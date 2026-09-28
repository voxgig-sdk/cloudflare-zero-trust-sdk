# CloudflareZeroTrust SDK utility: make_context

from cloudflarezerotrust_sdk.core.context import CloudflareZeroTrustContext


def make_context_util(ctxmap, basectx):
    return CloudflareZeroTrustContext(ctxmap, basectx)
