import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesSchemasId, TeamsDevicesSchemasIdRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesSchemasIdEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesSchemasId> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesSchemasIdEntity): TeamsDevicesSchemasIdEntity;
    remove(this: any, reqmatch?: TeamsDevicesSchemasIdRemoveMatch, ctrl?: Control): Promise<TeamsDevicesSchemasIdEntity>;
}
export { TeamsDevicesSchemasIdEntity };
