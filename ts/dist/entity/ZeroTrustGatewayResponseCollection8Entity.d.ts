import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayResponseCollection8, ZeroTrustGatewayResponseCollection8ListMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayResponseCollection8Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayResponseCollection8> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayResponseCollection8Entity): ZeroTrustGatewayResponseCollection8Entity;
    list(this: any, reqmatch?: ZeroTrustGatewayResponseCollection8ListMatch, ctrl?: Control): Promise<ZeroTrustGatewayResponseCollection8Entity[]>;
}
export { ZeroTrustGatewayResponseCollection8Entity };
