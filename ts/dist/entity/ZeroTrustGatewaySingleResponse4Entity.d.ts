import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewaySingleResponse4, ZeroTrustGatewaySingleResponse4LoadMatch, ZeroTrustGatewaySingleResponse4CreateData, ZeroTrustGatewaySingleResponse4UpdateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewaySingleResponse4Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewaySingleResponse4> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewaySingleResponse4Entity): ZeroTrustGatewaySingleResponse4Entity;
    load(this: any, reqmatch?: ZeroTrustGatewaySingleResponse4LoadMatch, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse4Entity>;
    create(this: any, reqdata?: ZeroTrustGatewaySingleResponse4CreateData, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse4Entity>;
    update(this: any, reqdata?: ZeroTrustGatewaySingleResponse4UpdateData, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse4Entity>;
}
export { ZeroTrustGatewaySingleResponse4Entity };
