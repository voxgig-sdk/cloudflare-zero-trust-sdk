import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesId, TeamsDevicesIdRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesIdEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesId> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesIdEntity): TeamsDevicesIdEntity;
    remove(this: any, reqmatch?: TeamsDevicesIdRemoveMatch, ctrl?: Control): Promise<TeamsDevicesIdEntity>;
}
export { TeamsDevicesIdEntity };
