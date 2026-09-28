import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayResponseCollection9, ZeroTrustGatewayResponseCollection9ListMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayResponseCollection9Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayResponseCollection9> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayResponseCollection9Entity): ZeroTrustGatewayResponseCollection9Entity;
    list(this: any, reqmatch?: ZeroTrustGatewayResponseCollection9ListMatch, ctrl?: Control): Promise<ZeroTrustGatewayResponseCollection9Entity[]>;
}
export { ZeroTrustGatewayResponseCollection9Entity };
