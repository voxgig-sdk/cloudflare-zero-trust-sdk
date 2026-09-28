import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesDevicesPolicyCertificatesSingle, TeamsDevicesDevicesPolicyCertificatesSingleLoadMatch, TeamsDevicesDevicesPolicyCertificatesSingleUpdateData } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesDevicesPolicyCertificatesSingleEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesDevicesPolicyCertificatesSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesDevicesPolicyCertificatesSingleEntity): TeamsDevicesDevicesPolicyCertificatesSingleEntity;
    load(this: any, reqmatch?: TeamsDevicesDevicesPolicyCertificatesSingleLoadMatch, ctrl?: Control): Promise<TeamsDevicesDevicesPolicyCertificatesSingleEntity>;
    update(this: any, reqdata?: TeamsDevicesDevicesPolicyCertificatesSingleUpdateData, ctrl?: Control): Promise<TeamsDevicesDevicesPolicyCertificatesSingleEntity>;
}
export { TeamsDevicesDevicesPolicyCertificatesSingleEntity };
