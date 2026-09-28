import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { DigitalExperienceMonitoringDexResponseCollection, DigitalExperienceMonitoringDexResponseCollectionListMatch } from '../CloudflareZeroTrustTypes';
declare class DigitalExperienceMonitoringDexResponseCollectionEntity extends CloudflareZeroTrustEntityBase<DigitalExperienceMonitoringDexResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: DigitalExperienceMonitoringDexResponseCollectionEntity): DigitalExperienceMonitoringDexResponseCollectionEntity;
    list(this: any, reqmatch?: DigitalExperienceMonitoringDexResponseCollectionListMatch, ctrl?: Control): Promise<DigitalExperienceMonitoringDexResponseCollectionEntity[]>;
}
export { DigitalExperienceMonitoringDexResponseCollectionEntity };
