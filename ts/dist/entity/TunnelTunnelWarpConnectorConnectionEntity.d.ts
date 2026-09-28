import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelTunnelWarpConnectorConnection, TunnelTunnelWarpConnectorConnectionListMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelTunnelWarpConnectorConnectionEntity extends CloudflareZeroTrustEntityBase<TunnelTunnelWarpConnectorConnection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelTunnelWarpConnectorConnectionEntity): TunnelTunnelWarpConnectorConnectionEntity;
    list(this: any, reqmatch?: TunnelTunnelWarpConnectorConnectionListMatch, ctrl?: Control): Promise<TunnelTunnelWarpConnectorConnectionEntity[]>;
}
export { TunnelTunnelWarpConnectorConnectionEntity };
