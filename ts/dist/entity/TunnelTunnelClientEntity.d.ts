import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelTunnelClient, TunnelTunnelClientLoadMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelTunnelClientEntity extends CloudflareZeroTrustEntityBase<TunnelTunnelClient> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelTunnelClientEntity): TunnelTunnelClientEntity;
    load(this: any, reqmatch?: TunnelTunnelClientLoadMatch, ctrl?: Control): Promise<TunnelTunnelClientEntity>;
}
export { TunnelTunnelClientEntity };
