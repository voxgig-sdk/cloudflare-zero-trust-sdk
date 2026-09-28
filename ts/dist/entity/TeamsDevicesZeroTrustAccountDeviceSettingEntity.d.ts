import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesZeroTrustAccountDeviceSetting, TeamsDevicesZeroTrustAccountDeviceSettingLoadMatch, TeamsDevicesZeroTrustAccountDeviceSettingUpdateData, TeamsDevicesZeroTrustAccountDeviceSettingRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesZeroTrustAccountDeviceSettingEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesZeroTrustAccountDeviceSetting> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesZeroTrustAccountDeviceSettingEntity): TeamsDevicesZeroTrustAccountDeviceSettingEntity;
    load(this: any, reqmatch?: TeamsDevicesZeroTrustAccountDeviceSettingLoadMatch, ctrl?: Control): Promise<TeamsDevicesZeroTrustAccountDeviceSettingEntity>;
    update(this: any, reqdata?: TeamsDevicesZeroTrustAccountDeviceSettingUpdateData, ctrl?: Control): Promise<TeamsDevicesZeroTrustAccountDeviceSettingEntity>;
    remove(this: any, reqmatch?: TeamsDevicesZeroTrustAccountDeviceSettingRemoveMatch, ctrl?: Control): Promise<TeamsDevicesZeroTrustAccountDeviceSettingEntity>;
}
export { TeamsDevicesZeroTrustAccountDeviceSettingEntity };
