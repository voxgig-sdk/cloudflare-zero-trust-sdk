import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { AlexandriaGetCategory, AlexandriaGetCategoryLoadMatch, AlexandriaGetCategoryListMatch } from '../CloudflareZeroTrustTypes';
declare class AlexandriaGetCategoryEntity extends CloudflareZeroTrustEntityBase<AlexandriaGetCategory> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: AlexandriaGetCategoryEntity): AlexandriaGetCategoryEntity;
    load(this: any, reqmatch?: AlexandriaGetCategoryLoadMatch, ctrl?: Control): Promise<AlexandriaGetCategoryEntity>;
    list(this: any, reqmatch?: AlexandriaGetCategoryListMatch, ctrl?: Control): Promise<AlexandriaGetCategoryEntity[]>;
}
export { AlexandriaGetCategoryEntity };
