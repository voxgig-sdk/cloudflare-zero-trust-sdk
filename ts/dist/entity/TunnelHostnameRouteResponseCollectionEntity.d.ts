import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelHostnameRouteResponseCollection, TunnelHostnameRouteResponseCollectionListMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelHostnameRouteResponseCollectionEntity extends CloudflareZeroTrustEntityBase<TunnelHostnameRouteResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelHostnameRouteResponseCollectionEntity): TunnelHostnameRouteResponseCollectionEntity;
    list(this: any, reqmatch?: TunnelHostnameRouteResponseCollectionListMatch, ctrl?: Control): Promise<TunnelHostnameRouteResponseCollectionEntity[]>;
}
export { TunnelHostnameRouteResponseCollectionEntity };
