import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayResponseCollection2, ZeroTrustGatewayResponseCollection2ListMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayResponseCollection2Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayResponseCollection2> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayResponseCollection2Entity): ZeroTrustGatewayResponseCollection2Entity;
    list(this: any, reqmatch?: ZeroTrustGatewayResponseCollection2ListMatch, ctrl?: Control): Promise<ZeroTrustGatewayResponseCollection2Entity[]>;
}
export { ZeroTrustGatewayResponseCollection2Entity };
