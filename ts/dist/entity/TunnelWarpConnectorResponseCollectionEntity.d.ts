import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelWarpConnectorResponseCollection, TunnelWarpConnectorResponseCollectionListMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelWarpConnectorResponseCollectionEntity extends CloudflareZeroTrustEntityBase<TunnelWarpConnectorResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelWarpConnectorResponseCollectionEntity): TunnelWarpConnectorResponseCollectionEntity;
    list(this: any, reqmatch?: TunnelWarpConnectorResponseCollectionListMatch, ctrl?: Control): Promise<TunnelWarpConnectorResponseCollectionEntity[]>;
}
export { TunnelWarpConnectorResponseCollectionEntity };
