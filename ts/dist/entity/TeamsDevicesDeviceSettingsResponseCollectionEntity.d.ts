import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesDeviceSettingsResponseCollection, TeamsDevicesDeviceSettingsResponseCollectionListMatch, TeamsDevicesDeviceSettingsResponseCollectionRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesDeviceSettingsResponseCollectionEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesDeviceSettingsResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesDeviceSettingsResponseCollectionEntity): TeamsDevicesDeviceSettingsResponseCollectionEntity;
    list(this: any, reqmatch?: TeamsDevicesDeviceSettingsResponseCollectionListMatch, ctrl?: Control): Promise<TeamsDevicesDeviceSettingsResponseCollectionEntity[]>;
    remove(this: any, reqmatch?: TeamsDevicesDeviceSettingsResponseCollectionRemoveMatch, ctrl?: Control): Promise<TeamsDevicesDeviceSettingsResponseCollectionEntity>;
}
export { TeamsDevicesDeviceSettingsResponseCollectionEntity };
