import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { OneIntegrationUpdate, OneIntegrationUpdateUpdateData } from '../CloudflareZeroTrustTypes';
declare class OneIntegrationUpdateEntity extends CloudflareZeroTrustEntityBase<OneIntegrationUpdate> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: OneIntegrationUpdateEntity): OneIntegrationUpdateEntity;
    update(this: any, reqdata?: OneIntegrationUpdateUpdateData, ctrl?: Control): Promise<OneIntegrationUpdateEntity>;
}
export { OneIntegrationUpdateEntity };
