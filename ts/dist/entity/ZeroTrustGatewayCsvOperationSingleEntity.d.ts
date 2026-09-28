import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayCsvOperationSingle, ZeroTrustGatewayCsvOperationSingleCreateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayCsvOperationSingleEntity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayCsvOperationSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayCsvOperationSingleEntity): ZeroTrustGatewayCsvOperationSingleEntity;
    create(this: any, reqdata?: ZeroTrustGatewayCsvOperationSingleCreateData, ctrl?: Control): Promise<ZeroTrustGatewayCsvOperationSingleEntity>;
}
export { ZeroTrustGatewayCsvOperationSingleEntity };
