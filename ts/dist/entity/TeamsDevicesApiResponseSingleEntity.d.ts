import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesApiResponseSingle, TeamsDevicesApiResponseSingleCreateData } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesApiResponseSingleEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesApiResponseSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesApiResponseSingleEntity): TeamsDevicesApiResponseSingleEntity;
    create(this: any, reqdata?: TeamsDevicesApiResponseSingleCreateData, ctrl?: Control): Promise<TeamsDevicesApiResponseSingleEntity>;
}
export { TeamsDevicesApiResponseSingleEntity };
