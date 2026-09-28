import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { DigitalExperienceMonitoringFleetStatusDevice, DigitalExperienceMonitoringFleetStatusDeviceListMatch } from '../CloudflareZeroTrustTypes';
declare class DigitalExperienceMonitoringFleetStatusDeviceEntity extends CloudflareZeroTrustEntityBase<DigitalExperienceMonitoringFleetStatusDevice> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: DigitalExperienceMonitoringFleetStatusDeviceEntity): DigitalExperienceMonitoringFleetStatusDeviceEntity;
    list(this: any, reqmatch?: DigitalExperienceMonitoringFleetStatusDeviceListMatch, ctrl?: Control): Promise<DigitalExperienceMonitoringFleetStatusDeviceEntity[]>;
}
export { DigitalExperienceMonitoringFleetStatusDeviceEntity };
