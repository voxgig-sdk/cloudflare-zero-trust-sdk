import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { Location, LocationRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class LocationEntity extends CloudflareZeroTrustEntityBase<Location> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: LocationEntity): LocationEntity;
    remove(this: any, reqmatch?: LocationRemoveMatch, ctrl?: Control): Promise<LocationEntity>;
}
export { LocationEntity };
