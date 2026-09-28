import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayResponseCollection4, ZeroTrustGatewayResponseCollection4ListMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayResponseCollection4Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayResponseCollection4> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayResponseCollection4Entity): ZeroTrustGatewayResponseCollection4Entity;
    list(this: any, reqmatch?: ZeroTrustGatewayResponseCollection4ListMatch, ctrl?: Control): Promise<ZeroTrustGatewayResponseCollection4Entity[]>;
}
export { ZeroTrustGatewayResponseCollection4Entity };
