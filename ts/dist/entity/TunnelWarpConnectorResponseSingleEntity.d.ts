import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelWarpConnectorResponseSingle, TunnelWarpConnectorResponseSingleLoadMatch, TunnelWarpConnectorResponseSingleCreateData, TunnelWarpConnectorResponseSingleUpdateData, TunnelWarpConnectorResponseSingleRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelWarpConnectorResponseSingleEntity extends CloudflareZeroTrustEntityBase<TunnelWarpConnectorResponseSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelWarpConnectorResponseSingleEntity): TunnelWarpConnectorResponseSingleEntity;
    load(this: any, reqmatch?: TunnelWarpConnectorResponseSingleLoadMatch, ctrl?: Control): Promise<TunnelWarpConnectorResponseSingleEntity>;
    create(this: any, reqdata?: TunnelWarpConnectorResponseSingleCreateData, ctrl?: Control): Promise<TunnelWarpConnectorResponseSingleEntity>;
    update(this: any, reqdata?: TunnelWarpConnectorResponseSingleUpdateData, ctrl?: Control): Promise<TunnelWarpConnectorResponseSingleEntity>;
    remove(this: any, reqmatch?: TunnelWarpConnectorResponseSingleRemoveMatch, ctrl?: Control): Promise<TunnelWarpConnectorResponseSingleEntity>;
}
export { TunnelWarpConnectorResponseSingleEntity };
