import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayResponseCollection10, ZeroTrustGatewayResponseCollection10ListMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayResponseCollection10Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayResponseCollection10> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayResponseCollection10Entity): ZeroTrustGatewayResponseCollection10Entity;
    list(this: any, reqmatch?: ZeroTrustGatewayResponseCollection10ListMatch, ctrl?: Control): Promise<ZeroTrustGatewayResponseCollection10Entity[]>;
}
export { ZeroTrustGatewayResponseCollection10Entity };
