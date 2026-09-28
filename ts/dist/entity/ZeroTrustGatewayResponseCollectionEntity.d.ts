import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayResponseCollection, ZeroTrustGatewayResponseCollectionListMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayResponseCollectionEntity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayResponseCollectionEntity): ZeroTrustGatewayResponseCollectionEntity;
    list(this: any, reqmatch?: ZeroTrustGatewayResponseCollectionListMatch, ctrl?: Control): Promise<ZeroTrustGatewayResponseCollectionEntity[]>;
}
export { ZeroTrustGatewayResponseCollectionEntity };
