import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelTunnelResponseToken, TunnelTunnelResponseTokenListMatch, TunnelTunnelResponseTokenCreateData } from '../CloudflareZeroTrustTypes';
declare class TunnelTunnelResponseTokenEntity extends CloudflareZeroTrustEntityBase<TunnelTunnelResponseToken> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelTunnelResponseTokenEntity): TunnelTunnelResponseTokenEntity;
    list(this: any, reqmatch?: TunnelTunnelResponseTokenListMatch, ctrl?: Control): Promise<TunnelTunnelResponseTokenEntity[]>;
    create(this: any, reqdata?: TunnelTunnelResponseTokenCreateData, ctrl?: Control): Promise<TunnelTunnelResponseTokenEntity>;
}
export { TunnelTunnelResponseTokenEntity };
