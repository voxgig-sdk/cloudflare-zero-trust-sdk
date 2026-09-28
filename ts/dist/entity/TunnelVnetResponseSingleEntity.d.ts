import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelVnetResponseSingle, TunnelVnetResponseSingleLoadMatch, TunnelVnetResponseSingleCreateData, TunnelVnetResponseSingleUpdateData, TunnelVnetResponseSingleRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelVnetResponseSingleEntity extends CloudflareZeroTrustEntityBase<TunnelVnetResponseSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelVnetResponseSingleEntity): TunnelVnetResponseSingleEntity;
    load(this: any, reqmatch?: TunnelVnetResponseSingleLoadMatch, ctrl?: Control): Promise<TunnelVnetResponseSingleEntity>;
    create(this: any, reqdata?: TunnelVnetResponseSingleCreateData, ctrl?: Control): Promise<TunnelVnetResponseSingleEntity>;
    update(this: any, reqdata?: TunnelVnetResponseSingleUpdateData, ctrl?: Control): Promise<TunnelVnetResponseSingleEntity>;
    remove(this: any, reqmatch?: TunnelVnetResponseSingleRemoveMatch, ctrl?: Control): Promise<TunnelVnetResponseSingleEntity>;
}
export { TunnelVnetResponseSingleEntity };
