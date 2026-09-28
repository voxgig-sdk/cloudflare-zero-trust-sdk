import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewaySingleResponse5, ZeroTrustGatewaySingleResponse5LoadMatch, ZeroTrustGatewaySingleResponse5CreateData, ZeroTrustGatewaySingleResponse5UpdateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewaySingleResponse5Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewaySingleResponse5> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewaySingleResponse5Entity): ZeroTrustGatewaySingleResponse5Entity;
    load(this: any, reqmatch?: ZeroTrustGatewaySingleResponse5LoadMatch, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse5Entity>;
    create(this: any, reqdata?: ZeroTrustGatewaySingleResponse5CreateData, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse5Entity>;
    update(this: any, reqdata?: ZeroTrustGatewaySingleResponse5UpdateData, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse5Entity>;
}
export { ZeroTrustGatewaySingleResponse5Entity };
