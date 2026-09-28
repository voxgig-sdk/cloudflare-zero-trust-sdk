import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { DigitalExperienceMonitoringFleetStatusOverTime, DigitalExperienceMonitoringFleetStatusOverTimeLoadMatch } from '../CloudflareZeroTrustTypes';
declare class DigitalExperienceMonitoringFleetStatusOverTimeEntity extends CloudflareZeroTrustEntityBase<DigitalExperienceMonitoringFleetStatusOverTime> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: DigitalExperienceMonitoringFleetStatusOverTimeEntity): DigitalExperienceMonitoringFleetStatusOverTimeEntity;
    load(this: any, reqmatch?: DigitalExperienceMonitoringFleetStatusOverTimeLoadMatch, ctrl?: Control): Promise<DigitalExperienceMonitoringFleetStatusOverTimeEntity>;
}
export { DigitalExperienceMonitoringFleetStatusOverTimeEntity };
