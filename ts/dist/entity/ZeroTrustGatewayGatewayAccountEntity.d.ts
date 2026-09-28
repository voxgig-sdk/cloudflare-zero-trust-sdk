import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayGatewayAccount, ZeroTrustGatewayGatewayAccountLoadMatch, ZeroTrustGatewayGatewayAccountCreateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayGatewayAccountEntity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayGatewayAccount> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayGatewayAccountEntity): ZeroTrustGatewayGatewayAccountEntity;
    load(this: any, reqmatch?: ZeroTrustGatewayGatewayAccountLoadMatch, ctrl?: Control): Promise<ZeroTrustGatewayGatewayAccountEntity>;
    create(this: any, reqdata?: ZeroTrustGatewayGatewayAccountCreateData, ctrl?: Control): Promise<ZeroTrustGatewayGatewayAccountEntity>;
}
export { ZeroTrustGatewayGatewayAccountEntity };
