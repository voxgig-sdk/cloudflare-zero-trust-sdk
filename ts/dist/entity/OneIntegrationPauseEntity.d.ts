import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { OneIntegrationPause, OneIntegrationPauseCreateData } from '../CloudflareZeroTrustTypes';
declare class OneIntegrationPauseEntity extends CloudflareZeroTrustEntityBase<OneIntegrationPause> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: OneIntegrationPauseEntity): OneIntegrationPauseEntity;
    create(this: any, reqdata?: OneIntegrationPauseCreateData, ctrl?: Control): Promise<OneIntegrationPauseEntity>;
}
export { OneIntegrationPauseEntity };
