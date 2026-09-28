import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewaySingleResponse3, ZeroTrustGatewaySingleResponse3LoadMatch, ZeroTrustGatewaySingleResponse3CreateData, ZeroTrustGatewaySingleResponse3UpdateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewaySingleResponse3Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewaySingleResponse3> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewaySingleResponse3Entity): ZeroTrustGatewaySingleResponse3Entity;
    load(this: any, reqmatch?: ZeroTrustGatewaySingleResponse3LoadMatch, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse3Entity>;
    create(this: any, reqdata?: ZeroTrustGatewaySingleResponse3CreateData, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse3Entity>;
    update(this: any, reqdata?: ZeroTrustGatewaySingleResponse3UpdateData, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse3Entity>;
}
export { ZeroTrustGatewaySingleResponse3Entity };
