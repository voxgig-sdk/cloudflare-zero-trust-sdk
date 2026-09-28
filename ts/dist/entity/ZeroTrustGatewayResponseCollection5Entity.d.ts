import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayResponseCollection5, ZeroTrustGatewayResponseCollection5ListMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayResponseCollection5Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayResponseCollection5> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayResponseCollection5Entity): ZeroTrustGatewayResponseCollection5Entity;
    list(this: any, reqmatch?: ZeroTrustGatewayResponseCollection5ListMatch, ctrl?: Control): Promise<ZeroTrustGatewayResponseCollection5Entity[]>;
}
export { ZeroTrustGatewayResponseCollection5Entity };
