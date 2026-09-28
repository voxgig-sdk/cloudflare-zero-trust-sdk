import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { OneIntegrationDetail, OneIntegrationDetailLoadMatch } from '../CloudflareZeroTrustTypes';
declare class OneIntegrationDetailEntity extends CloudflareZeroTrustEntityBase<OneIntegrationDetail> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: OneIntegrationDetailEntity): OneIntegrationDetailEntity;
    load(this: any, reqmatch?: OneIntegrationDetailLoadMatch, ctrl?: Control): Promise<OneIntegrationDetailEntity>;
}
export { OneIntegrationDetailEntity };
