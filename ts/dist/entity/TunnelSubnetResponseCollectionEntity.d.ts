import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelSubnetResponseCollection, TunnelSubnetResponseCollectionListMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelSubnetResponseCollectionEntity extends CloudflareZeroTrustEntityBase<TunnelSubnetResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelSubnetResponseCollectionEntity): TunnelSubnetResponseCollectionEntity;
    list(this: any, reqmatch?: TunnelSubnetResponseCollectionListMatch, ctrl?: Control): Promise<TunnelSubnetResponseCollectionEntity[]>;
}
export { TunnelSubnetResponseCollectionEntity };
