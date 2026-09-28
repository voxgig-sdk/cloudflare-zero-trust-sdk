import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesResponseCollection, TeamsDevicesResponseCollectionListMatch } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesResponseCollectionEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesResponseCollectionEntity): TeamsDevicesResponseCollectionEntity;
    list(this: any, reqmatch?: TeamsDevicesResponseCollectionListMatch, ctrl?: Control): Promise<TeamsDevicesResponseCollectionEntity[]>;
}
export { TeamsDevicesResponseCollectionEntity };
