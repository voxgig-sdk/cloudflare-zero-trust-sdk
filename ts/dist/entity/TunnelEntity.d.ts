import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { Tunnel, TunnelListMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelEntity extends CloudflareZeroTrustEntityBase<Tunnel> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelEntity): TunnelEntity;
    list(this: any, reqmatch?: TunnelListMatch, ctrl?: Control): Promise<TunnelEntity[]>;
}
export { TunnelEntity };
