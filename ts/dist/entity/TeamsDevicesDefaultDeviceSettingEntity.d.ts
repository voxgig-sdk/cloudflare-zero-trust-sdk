import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesDefaultDeviceSetting, TeamsDevicesDefaultDeviceSettingLoadMatch, TeamsDevicesDefaultDeviceSettingUpdateData } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesDefaultDeviceSettingEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesDefaultDeviceSetting> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesDefaultDeviceSettingEntity): TeamsDevicesDefaultDeviceSettingEntity;
    load(this: any, reqmatch?: TeamsDevicesDefaultDeviceSettingLoadMatch, ctrl?: Control): Promise<TeamsDevicesDefaultDeviceSettingEntity>;
    update(this: any, reqdata?: TeamsDevicesDefaultDeviceSettingUpdateData, ctrl?: Control): Promise<TeamsDevicesDefaultDeviceSettingEntity>;
}
export { TeamsDevicesDefaultDeviceSettingEntity };
