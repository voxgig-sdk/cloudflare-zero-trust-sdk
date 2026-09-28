import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelRouteResponseSingle, TunnelRouteResponseSingleLoadMatch, TunnelRouteResponseSingleCreateData, TunnelRouteResponseSingleUpdateData, TunnelRouteResponseSingleRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelRouteResponseSingleEntity extends CloudflareZeroTrustEntityBase<TunnelRouteResponseSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelRouteResponseSingleEntity): TunnelRouteResponseSingleEntity;
    load(this: any, reqmatch?: TunnelRouteResponseSingleLoadMatch, ctrl?: Control): Promise<TunnelRouteResponseSingleEntity>;
    create(this: any, reqdata?: TunnelRouteResponseSingleCreateData, ctrl?: Control): Promise<TunnelRouteResponseSingleEntity>;
    update(this: any, reqdata?: TunnelRouteResponseSingleUpdateData, ctrl?: Control): Promise<TunnelRouteResponseSingleEntity>;
    remove(this: any, reqmatch?: TunnelRouteResponseSingleRemoveMatch, ctrl?: Control): Promise<TunnelRouteResponseSingleEntity>;
}
export { TunnelRouteResponseSingleEntity };
