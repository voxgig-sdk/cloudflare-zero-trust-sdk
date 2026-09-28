import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { OneIntegrationResume, OneIntegrationResumeCreateData } from '../CloudflareZeroTrustTypes';
declare class OneIntegrationResumeEntity extends CloudflareZeroTrustEntityBase<OneIntegrationResume> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: OneIntegrationResumeEntity): OneIntegrationResumeEntity;
    create(this: any, reqdata?: OneIntegrationResumeCreateData, ctrl?: Control): Promise<OneIntegrationResumeEntity>;
}
export { OneIntegrationResumeEntity };
