import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelCfdTunnelResponseSingle, TunnelCfdTunnelResponseSingleLoadMatch, TunnelCfdTunnelResponseSingleCreateData, TunnelCfdTunnelResponseSingleUpdateData, TunnelCfdTunnelResponseSingleRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelCfdTunnelResponseSingleEntity extends CloudflareZeroTrustEntityBase<TunnelCfdTunnelResponseSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelCfdTunnelResponseSingleEntity): TunnelCfdTunnelResponseSingleEntity;
    load(this: any, reqmatch?: TunnelCfdTunnelResponseSingleLoadMatch, ctrl?: Control): Promise<TunnelCfdTunnelResponseSingleEntity>;
    create(this: any, reqdata?: TunnelCfdTunnelResponseSingleCreateData, ctrl?: Control): Promise<TunnelCfdTunnelResponseSingleEntity>;
    update(this: any, reqdata?: TunnelCfdTunnelResponseSingleUpdateData, ctrl?: Control): Promise<TunnelCfdTunnelResponseSingleEntity>;
    remove(this: any, reqmatch?: TunnelCfdTunnelResponseSingleRemoveMatch, ctrl?: Control): Promise<TunnelCfdTunnelResponseSingleEntity>;
}
export { TunnelCfdTunnelResponseSingleEntity };
