import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { DexSyntheticApplicationMonitoring, DexSyntheticApplicationMonitoringLoadMatch, DexSyntheticApplicationMonitoringListMatch } from '../CloudflareZeroTrustTypes';
declare class DexSyntheticApplicationMonitoringEntity extends CloudflareZeroTrustEntityBase<DexSyntheticApplicationMonitoring> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: DexSyntheticApplicationMonitoringEntity): DexSyntheticApplicationMonitoringEntity;
    load(this: any, reqmatch?: DexSyntheticApplicationMonitoringLoadMatch, ctrl?: Control): Promise<DexSyntheticApplicationMonitoringEntity>;
    list(this: any, reqmatch?: DexSyntheticApplicationMonitoringListMatch, ctrl?: Control): Promise<DexSyntheticApplicationMonitoringEntity[]>;
}
export { DexSyntheticApplicationMonitoringEntity };
