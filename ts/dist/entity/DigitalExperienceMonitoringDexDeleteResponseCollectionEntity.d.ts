import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { DigitalExperienceMonitoringDexDeleteResponseCollection, DigitalExperienceMonitoringDexDeleteResponseCollectionRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class DigitalExperienceMonitoringDexDeleteResponseCollectionEntity extends CloudflareZeroTrustEntityBase<DigitalExperienceMonitoringDexDeleteResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: DigitalExperienceMonitoringDexDeleteResponseCollectionEntity): DigitalExperienceMonitoringDexDeleteResponseCollectionEntity;
    remove(this: any, reqmatch?: DigitalExperienceMonitoringDexDeleteResponseCollectionRemoveMatch, ctrl?: Control): Promise<DigitalExperienceMonitoringDexDeleteResponseCollectionEntity>;
}
export { DigitalExperienceMonitoringDexDeleteResponseCollectionEntity };
