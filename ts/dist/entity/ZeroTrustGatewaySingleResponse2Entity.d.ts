import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewaySingleResponse2, ZeroTrustGatewaySingleResponse2LoadMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewaySingleResponse2Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewaySingleResponse2> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewaySingleResponse2Entity): ZeroTrustGatewaySingleResponse2Entity;
    load(this: any, reqmatch?: ZeroTrustGatewaySingleResponse2LoadMatch, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse2Entity>;
}
export { ZeroTrustGatewaySingleResponse2Entity };
