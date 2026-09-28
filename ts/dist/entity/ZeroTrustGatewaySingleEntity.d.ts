import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewaySingle, ZeroTrustGatewaySingleLoadMatch, ZeroTrustGatewaySingleCreateData, ZeroTrustGatewaySingleRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewaySingleEntity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewaySingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewaySingleEntity): ZeroTrustGatewaySingleEntity;
    load(this: any, reqmatch?: ZeroTrustGatewaySingleLoadMatch, ctrl?: Control): Promise<ZeroTrustGatewaySingleEntity>;
    create(this: any, reqdata?: ZeroTrustGatewaySingleCreateData, ctrl?: Control): Promise<ZeroTrustGatewaySingleEntity>;
    remove(this: any, reqmatch?: ZeroTrustGatewaySingleRemoveMatch, ctrl?: Control): Promise<ZeroTrustGatewaySingleEntity>;
}
export { ZeroTrustGatewaySingleEntity };
