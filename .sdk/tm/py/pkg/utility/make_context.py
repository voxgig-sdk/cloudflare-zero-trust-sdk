# CloudflareZeroTrust SDK utility: make_context

from projectname_sdk.core.context import CloudflareZeroTrustContext


def make_context_util(ctxmap, basectx):
    return CloudflareZeroTrustContext(ctxmap, basectx)
