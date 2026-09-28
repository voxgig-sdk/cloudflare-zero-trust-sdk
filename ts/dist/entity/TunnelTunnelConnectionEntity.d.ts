import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelTunnelConnection, TunnelTunnelConnectionListMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelTunnelConnectionEntity extends CloudflareZeroTrustEntityBase<TunnelTunnelConnection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelTunnelConnectionEntity): TunnelTunnelConnectionEntity;
    list(this: any, reqmatch?: TunnelTunnelConnectionListMatch, ctrl?: Control): Promise<TunnelTunnelConnectionEntity[]>;
}
export { TunnelTunnelConnectionEntity };
