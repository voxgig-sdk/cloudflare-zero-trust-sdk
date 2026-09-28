import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayListSingle, ZeroTrustGatewayListSingleLoadMatch, ZeroTrustGatewayListSingleUpdateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayListSingleEntity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayListSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayListSingleEntity): ZeroTrustGatewayListSingleEntity;
    load(this: any, reqmatch?: ZeroTrustGatewayListSingleLoadMatch, ctrl?: Control): Promise<ZeroTrustGatewayListSingleEntity>;
    update(this: any, reqdata?: ZeroTrustGatewayListSingleUpdateData, ctrl?: Control): Promise<ZeroTrustGatewayListSingleEntity>;
}
export { ZeroTrustGatewayListSingleEntity };
