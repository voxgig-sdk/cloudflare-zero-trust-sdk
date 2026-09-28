import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { OneIntegrationCreate, OneIntegrationCreateCreateData } from '../CloudflareZeroTrustTypes';
declare class OneIntegrationCreateEntity extends CloudflareZeroTrustEntityBase<OneIntegrationCreate> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: OneIntegrationCreateEntity): OneIntegrationCreateEntity;
    create(this: any, reqdata?: OneIntegrationCreateCreateData, ctrl?: Control): Promise<OneIntegrationCreateEntity>;
}
export { OneIntegrationCreateEntity };
