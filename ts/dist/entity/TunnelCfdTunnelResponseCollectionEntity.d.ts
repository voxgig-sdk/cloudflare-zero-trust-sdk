import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelCfdTunnelResponseCollection, TunnelCfdTunnelResponseCollectionListMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelCfdTunnelResponseCollectionEntity extends CloudflareZeroTrustEntityBase<TunnelCfdTunnelResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelCfdTunnelResponseCollectionEntity): TunnelCfdTunnelResponseCollectionEntity;
    list(this: any, reqmatch?: TunnelCfdTunnelResponseCollectionListMatch, ctrl?: Control): Promise<TunnelCfdTunnelResponseCollectionEntity[]>;
}
export { TunnelCfdTunnelResponseCollectionEntity };
