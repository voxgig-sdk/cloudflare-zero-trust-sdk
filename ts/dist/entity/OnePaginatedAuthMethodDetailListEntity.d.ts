import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { OnePaginatedAuthMethodDetailList, OnePaginatedAuthMethodDetailListListMatch } from '../CloudflareZeroTrustTypes';
declare class OnePaginatedAuthMethodDetailListEntity extends CloudflareZeroTrustEntityBase<OnePaginatedAuthMethodDetailList> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: OnePaginatedAuthMethodDetailListEntity): OnePaginatedAuthMethodDetailListEntity;
    list(this: any, reqmatch?: OnePaginatedAuthMethodDetailListListMatch, ctrl?: Control): Promise<OnePaginatedAuthMethodDetailListEntity[]>;
}
export { OnePaginatedAuthMethodDetailListEntity };
