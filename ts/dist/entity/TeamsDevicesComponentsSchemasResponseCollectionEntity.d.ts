import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesComponentsSchemasResponseCollection, TeamsDevicesComponentsSchemasResponseCollectionListMatch, TeamsDevicesComponentsSchemasResponseCollectionRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesComponentsSchemasResponseCollectionEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesComponentsSchemasResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesComponentsSchemasResponseCollectionEntity): TeamsDevicesComponentsSchemasResponseCollectionEntity;
    list(this: any, reqmatch?: TeamsDevicesComponentsSchemasResponseCollectionListMatch, ctrl?: Control): Promise<TeamsDevicesComponentsSchemasResponseCollectionEntity[]>;
    remove(this: any, reqmatch?: TeamsDevicesComponentsSchemasResponseCollectionRemoveMatch, ctrl?: Control): Promise<TeamsDevicesComponentsSchemasResponseCollectionEntity>;
}
export { TeamsDevicesComponentsSchemasResponseCollectionEntity };
