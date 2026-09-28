import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { OneApplicationDetail, OneApplicationDetailLoadMatch } from '../CloudflareZeroTrustTypes';
declare class OneApplicationDetailEntity extends CloudflareZeroTrustEntityBase<OneApplicationDetail> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: OneApplicationDetailEntity): OneApplicationDetailEntity;
    load(this: any, reqmatch?: OneApplicationDetailLoadMatch, ctrl?: Control): Promise<OneApplicationDetailEntity>;
}
export { OneApplicationDetailEntity };
