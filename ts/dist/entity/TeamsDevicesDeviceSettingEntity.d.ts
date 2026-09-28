import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesDeviceSetting, TeamsDevicesDeviceSettingLoadMatch, TeamsDevicesDeviceSettingCreateData, TeamsDevicesDeviceSettingUpdateData } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesDeviceSettingEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesDeviceSetting> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesDeviceSettingEntity): TeamsDevicesDeviceSettingEntity;
    load(this: any, reqmatch?: TeamsDevicesDeviceSettingLoadMatch, ctrl?: Control): Promise<TeamsDevicesDeviceSettingEntity>;
    create(this: any, reqdata?: TeamsDevicesDeviceSettingCreateData, ctrl?: Control): Promise<TeamsDevicesDeviceSettingEntity>;
    update(this: any, reqdata?: TeamsDevicesDeviceSettingUpdateData, ctrl?: Control): Promise<TeamsDevicesDeviceSettingEntity>;
}
export { TeamsDevicesDeviceSettingEntity };
