import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayResponseCollection7, ZeroTrustGatewayResponseCollection7ListMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayResponseCollection7Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayResponseCollection7> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayResponseCollection7Entity): ZeroTrustGatewayResponseCollection7Entity;
    list(this: any, reqmatch?: ZeroTrustGatewayResponseCollection7ListMatch, ctrl?: Control): Promise<ZeroTrustGatewayResponseCollection7Entity[]>;
}
export { ZeroTrustGatewayResponseCollection7Entity };
