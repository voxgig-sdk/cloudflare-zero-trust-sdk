import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayListItemResponseCollection, ZeroTrustGatewayListItemResponseCollectionListMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayListItemResponseCollectionEntity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayListItemResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayListItemResponseCollectionEntity): ZeroTrustGatewayListItemResponseCollectionEntity;
    list(this: any, reqmatch?: ZeroTrustGatewayListItemResponseCollectionListMatch, ctrl?: Control): Promise<ZeroTrustGatewayListItemResponseCollectionEntity[]>;
}
export { ZeroTrustGatewayListItemResponseCollectionEntity };
