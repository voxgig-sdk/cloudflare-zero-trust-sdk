import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelSubnetResponseSingle, TunnelSubnetResponseSingleLoadMatch, TunnelSubnetResponseSingleCreateData, TunnelSubnetResponseSingleUpdateData } from '../CloudflareZeroTrustTypes';
declare class TunnelSubnetResponseSingleEntity extends CloudflareZeroTrustEntityBase<TunnelSubnetResponseSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelSubnetResponseSingleEntity): TunnelSubnetResponseSingleEntity;
    load(this: any, reqmatch?: TunnelSubnetResponseSingleLoadMatch, ctrl?: Control): Promise<TunnelSubnetResponseSingleEntity>;
    create(this: any, reqdata?: TunnelSubnetResponseSingleCreateData, ctrl?: Control): Promise<TunnelSubnetResponseSingleEntity>;
    update(this: any, reqdata?: TunnelSubnetResponseSingleUpdateData, ctrl?: Control): Promise<TunnelSubnetResponseSingleEntity>;
}
export { TunnelSubnetResponseSingleEntity };
