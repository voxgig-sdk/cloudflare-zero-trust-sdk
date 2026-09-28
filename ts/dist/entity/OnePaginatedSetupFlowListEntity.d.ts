import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { OnePaginatedSetupFlowList, OnePaginatedSetupFlowListListMatch } from '../CloudflareZeroTrustTypes';
declare class OnePaginatedSetupFlowListEntity extends CloudflareZeroTrustEntityBase<OnePaginatedSetupFlowList> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: OnePaginatedSetupFlowListEntity): OnePaginatedSetupFlowListEntity;
    list(this: any, reqmatch?: OnePaginatedSetupFlowListListMatch, ctrl?: Control): Promise<OnePaginatedSetupFlowListEntity[]>;
}
export { OnePaginatedSetupFlowListEntity };
