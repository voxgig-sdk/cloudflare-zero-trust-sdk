import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { OnePaginatedIntegrationV2ListItemList, OnePaginatedIntegrationV2ListItemListListMatch } from '../CloudflareZeroTrustTypes';
declare class OnePaginatedIntegrationV2ListItemListEntity extends CloudflareZeroTrustEntityBase<OnePaginatedIntegrationV2ListItemList> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: OnePaginatedIntegrationV2ListItemListEntity): OnePaginatedIntegrationV2ListItemListEntity;
    list(this: any, reqmatch?: OnePaginatedIntegrationV2ListItemListListMatch, ctrl?: Control): Promise<OnePaginatedIntegrationV2ListItemListEntity[]>;
}
export { OnePaginatedIntegrationV2ListItemListEntity };
