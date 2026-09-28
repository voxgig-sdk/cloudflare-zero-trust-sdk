import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewaySingleResponse6, ZeroTrustGatewaySingleResponse6LoadMatch, ZeroTrustGatewaySingleResponse6CreateData, ZeroTrustGatewaySingleResponse6UpdateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewaySingleResponse6Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewaySingleResponse6> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewaySingleResponse6Entity): ZeroTrustGatewaySingleResponse6Entity;
    load(this: any, reqmatch?: ZeroTrustGatewaySingleResponse6LoadMatch, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse6Entity>;
    create(this: any, reqdata?: ZeroTrustGatewaySingleResponse6CreateData, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse6Entity>;
    update(this: any, reqdata?: ZeroTrustGatewaySingleResponse6UpdateData, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse6Entity>;
}
export { ZeroTrustGatewaySingleResponse6Entity };
