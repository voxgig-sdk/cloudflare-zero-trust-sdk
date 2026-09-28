import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelHostnameRouteResponseSingle, TunnelHostnameRouteResponseSingleLoadMatch, TunnelHostnameRouteResponseSingleCreateData, TunnelHostnameRouteResponseSingleUpdateData, TunnelHostnameRouteResponseSingleRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelHostnameRouteResponseSingleEntity extends CloudflareZeroTrustEntityBase<TunnelHostnameRouteResponseSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelHostnameRouteResponseSingleEntity): TunnelHostnameRouteResponseSingleEntity;
    load(this: any, reqmatch?: TunnelHostnameRouteResponseSingleLoadMatch, ctrl?: Control): Promise<TunnelHostnameRouteResponseSingleEntity>;
    create(this: any, reqdata?: TunnelHostnameRouteResponseSingleCreateData, ctrl?: Control): Promise<TunnelHostnameRouteResponseSingleEntity>;
    update(this: any, reqdata?: TunnelHostnameRouteResponseSingleUpdateData, ctrl?: Control): Promise<TunnelHostnameRouteResponseSingleEntity>;
    remove(this: any, reqmatch?: TunnelHostnameRouteResponseSingleRemoveMatch, ctrl?: Control): Promise<TunnelHostnameRouteResponseSingleEntity>;
}
export { TunnelHostnameRouteResponseSingleEntity };
