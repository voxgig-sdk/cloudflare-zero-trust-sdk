import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayGatewayAccountConfig, ZeroTrustGatewayGatewayAccountConfigLoadMatch, ZeroTrustGatewayGatewayAccountConfigUpdateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayGatewayAccountConfigEntity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayGatewayAccountConfig> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayGatewayAccountConfigEntity): ZeroTrustGatewayGatewayAccountConfigEntity;
    load(this: any, reqmatch?: ZeroTrustGatewayGatewayAccountConfigLoadMatch, ctrl?: Control): Promise<ZeroTrustGatewayGatewayAccountConfigEntity>;
    update(this: any, reqdata?: ZeroTrustGatewayGatewayAccountConfigUpdateData, ctrl?: Control): Promise<ZeroTrustGatewayGatewayAccountConfigEntity>;
}
export { ZeroTrustGatewayGatewayAccountConfigEntity };
