import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelVnetResponseCollection, TunnelVnetResponseCollectionListMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelVnetResponseCollectionEntity extends CloudflareZeroTrustEntityBase<TunnelVnetResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelVnetResponseCollectionEntity): TunnelVnetResponseCollectionEntity;
    list(this: any, reqmatch?: TunnelVnetResponseCollectionListMatch, ctrl?: Control): Promise<TunnelVnetResponseCollectionEntity[]>;
}
export { TunnelVnetResponseCollectionEntity };
