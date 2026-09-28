import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewaySingleResponseWithListItem, ZeroTrustGatewaySingleResponseWithListItemCreateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewaySingleResponseWithListItemEntity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewaySingleResponseWithListItem> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewaySingleResponseWithListItemEntity): ZeroTrustGatewaySingleResponseWithListItemEntity;
    create(this: any, reqdata?: ZeroTrustGatewaySingleResponseWithListItemCreateData, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponseWithListItemEntity>;
}
export { ZeroTrustGatewaySingleResponseWithListItemEntity };
