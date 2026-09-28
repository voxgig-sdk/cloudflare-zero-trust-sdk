import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayGatewayAccountEgressCidrPairList, ZeroTrustGatewayGatewayAccountEgressCidrPairListListMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayGatewayAccountEgressCidrPairList> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity): ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity;
    list(this: any, reqmatch?: ZeroTrustGatewayGatewayAccountEgressCidrPairListListMatch, ctrl?: Control): Promise<ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity[]>;
}
export { ZeroTrustGatewayGatewayAccountEgressCidrPairListEntity };
