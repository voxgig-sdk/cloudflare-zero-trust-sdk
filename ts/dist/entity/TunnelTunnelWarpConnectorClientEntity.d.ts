import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelTunnelWarpConnectorClient, TunnelTunnelWarpConnectorClientLoadMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelTunnelWarpConnectorClientEntity extends CloudflareZeroTrustEntityBase<TunnelTunnelWarpConnectorClient> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelTunnelWarpConnectorClientEntity): TunnelTunnelWarpConnectorClientEntity;
    load(this: any, reqmatch?: TunnelTunnelWarpConnectorClientLoadMatch, ctrl?: Control): Promise<TunnelTunnelWarpConnectorClientEntity>;
}
export { TunnelTunnelWarpConnectorClientEntity };
