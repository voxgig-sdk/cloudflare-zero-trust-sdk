import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesDevice, TeamsDevicesDeviceLoadMatch, TeamsDevicesDeviceListMatch } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesDeviceEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesDevice> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesDeviceEntity): TeamsDevicesDeviceEntity;
    load(this: any, reqmatch?: TeamsDevicesDeviceLoadMatch, ctrl?: Control): Promise<TeamsDevicesDeviceEntity>;
    list(this: any, reqmatch?: TeamsDevicesDeviceListMatch, ctrl?: Control): Promise<TeamsDevicesDeviceEntity[]>;
}
export { TeamsDevicesDeviceEntity };
