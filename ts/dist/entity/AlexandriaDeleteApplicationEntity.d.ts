import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { AlexandriaDeleteApplication, AlexandriaDeleteApplicationRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class AlexandriaDeleteApplicationEntity extends CloudflareZeroTrustEntityBase<AlexandriaDeleteApplication> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: AlexandriaDeleteApplicationEntity): AlexandriaDeleteApplicationEntity;
    remove(this: any, reqmatch?: AlexandriaDeleteApplicationRemoveMatch, ctrl?: Control): Promise<AlexandriaDeleteApplicationEntity>;
}
export { AlexandriaDeleteApplicationEntity };
