import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesSchemasResponseCollection, TeamsDevicesSchemasResponseCollectionListMatch } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesSchemasResponseCollectionEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesSchemasResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesSchemasResponseCollectionEntity): TeamsDevicesSchemasResponseCollectionEntity;
    list(this: any, reqmatch?: TeamsDevicesSchemasResponseCollectionListMatch, ctrl?: Control): Promise<TeamsDevicesSchemasResponseCollectionEntity[]>;
}
export { TeamsDevicesSchemasResponseCollectionEntity };
