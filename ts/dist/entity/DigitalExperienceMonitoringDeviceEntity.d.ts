import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { DigitalExperienceMonitoringDevice, DigitalExperienceMonitoringDeviceListMatch } from '../CloudflareZeroTrustTypes';
declare class DigitalExperienceMonitoringDeviceEntity extends CloudflareZeroTrustEntityBase<DigitalExperienceMonitoringDevice> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: DigitalExperienceMonitoringDeviceEntity): DigitalExperienceMonitoringDeviceEntity;
    list(this: any, reqmatch?: DigitalExperienceMonitoringDeviceListMatch, ctrl?: Control): Promise<DigitalExperienceMonitoringDeviceEntity[]>;
}
export { DigitalExperienceMonitoringDeviceEntity };
