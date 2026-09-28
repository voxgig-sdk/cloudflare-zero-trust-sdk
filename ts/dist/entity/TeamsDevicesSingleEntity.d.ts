import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesSingle, TeamsDevicesSingleLoadMatch, TeamsDevicesSingleCreateData, TeamsDevicesSingleUpdateData } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesSingleEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesSingleEntity): TeamsDevicesSingleEntity;
    load(this: any, reqmatch?: TeamsDevicesSingleLoadMatch, ctrl?: Control): Promise<TeamsDevicesSingleEntity>;
    create(this: any, reqdata?: TeamsDevicesSingleCreateData, ctrl?: Control): Promise<TeamsDevicesSingleEntity>;
    update(this: any, reqdata?: TeamsDevicesSingleUpdateData, ctrl?: Control): Promise<TeamsDevicesSingleEntity>;
}
export { TeamsDevicesSingleEntity };
