import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { DigitalExperienceMonitoringDexSingle, DigitalExperienceMonitoringDexSingleLoadMatch, DigitalExperienceMonitoringDexSingleCreateData, DigitalExperienceMonitoringDexSingleUpdateData } from '../CloudflareZeroTrustTypes';
declare class DigitalExperienceMonitoringDexSingleEntity extends CloudflareZeroTrustEntityBase<DigitalExperienceMonitoringDexSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: DigitalExperienceMonitoringDexSingleEntity): DigitalExperienceMonitoringDexSingleEntity;
    load(this: any, reqmatch?: DigitalExperienceMonitoringDexSingleLoadMatch, ctrl?: Control): Promise<DigitalExperienceMonitoringDexSingleEntity>;
    create(this: any, reqdata?: DigitalExperienceMonitoringDexSingleCreateData, ctrl?: Control): Promise<DigitalExperienceMonitoringDexSingleEntity>;
    update(this: any, reqdata?: DigitalExperienceMonitoringDexSingleUpdateData, ctrl?: Control): Promise<DigitalExperienceMonitoringDexSingleEntity>;
}
export { DigitalExperienceMonitoringDexSingleEntity };
