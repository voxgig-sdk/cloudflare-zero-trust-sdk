import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { DigitalExperienceMonitoringFleetStatusLive, DigitalExperienceMonitoringFleetStatusLiveLoadMatch } from '../CloudflareZeroTrustTypes';
declare class DigitalExperienceMonitoringFleetStatusLiveEntity extends CloudflareZeroTrustEntityBase<DigitalExperienceMonitoringFleetStatusLive> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: DigitalExperienceMonitoringFleetStatusLiveEntity): DigitalExperienceMonitoringFleetStatusLiveEntity;
    load(this: any, reqmatch?: DigitalExperienceMonitoringFleetStatusLiveLoadMatch, ctrl?: Control): Promise<DigitalExperienceMonitoringFleetStatusLiveEntity>;
}
export { DigitalExperienceMonitoringFleetStatusLiveEntity };
