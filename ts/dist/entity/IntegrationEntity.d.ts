import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { Integration, IntegrationRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class IntegrationEntity extends CloudflareZeroTrustEntityBase<Integration> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: IntegrationEntity): IntegrationEntity;
    remove(this: any, reqmatch?: IntegrationRemoveMatch, ctrl?: Control): Promise<IntegrationEntity>;
}
export { IntegrationEntity };
