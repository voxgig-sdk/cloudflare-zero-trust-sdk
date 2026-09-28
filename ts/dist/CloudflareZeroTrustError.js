"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareZeroTrustError = void 0;
class CloudflareZeroTrustError extends Error {
    isCloudflareZeroTrustError = true;
    sdk = 'CloudflareZeroTrust';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CloudflareZeroTrustError = CloudflareZeroTrustError;
//# sourceMappingURL=CloudflareZeroTrustError.js.map