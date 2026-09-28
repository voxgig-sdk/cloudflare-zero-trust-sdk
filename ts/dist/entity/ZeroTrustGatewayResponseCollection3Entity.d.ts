import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayResponseCollection3, ZeroTrustGatewayResponseCollection3ListMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayResponseCollection3Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayResponseCollection3> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayResponseCollection3Entity): ZeroTrustGatewayResponseCollection3Entity;
    list(this: any, reqmatch?: ZeroTrustGatewayResponseCollection3ListMatch, ctrl?: Control): Promise<ZeroTrustGatewayResponseCollection3Entity[]>;
}
export { ZeroTrustGatewayResponseCollection3Entity };
