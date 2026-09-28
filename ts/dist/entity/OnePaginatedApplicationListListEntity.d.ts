import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { OnePaginatedApplicationListList, OnePaginatedApplicationListListListMatch } from '../CloudflareZeroTrustTypes';
declare class OnePaginatedApplicationListListEntity extends CloudflareZeroTrustEntityBase<OnePaginatedApplicationListList> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: OnePaginatedApplicationListListEntity): OnePaginatedApplicationListListEntity;
    list(this: any, reqmatch?: OnePaginatedApplicationListListListMatch, ctrl?: Control): Promise<OnePaginatedApplicationListListEntity[]>;
}
export { OnePaginatedApplicationListListEntity };
