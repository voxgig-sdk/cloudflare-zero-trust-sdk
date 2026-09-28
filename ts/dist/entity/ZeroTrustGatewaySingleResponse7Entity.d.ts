import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewaySingleResponse7, ZeroTrustGatewaySingleResponse7LoadMatch, ZeroTrustGatewaySingleResponse7CreateData, ZeroTrustGatewaySingleResponse7UpdateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewaySingleResponse7Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewaySingleResponse7> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewaySingleResponse7Entity): ZeroTrustGatewaySingleResponse7Entity;
    load(this: any, reqmatch?: ZeroTrustGatewaySingleResponse7LoadMatch, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse7Entity>;
    create(this: any, reqdata?: ZeroTrustGatewaySingleResponse7CreateData, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse7Entity>;
    update(this: any, reqdata?: ZeroTrustGatewaySingleResponse7UpdateData, ctrl?: Control): Promise<ZeroTrustGatewaySingleResponse7Entity>;
}
export { ZeroTrustGatewaySingleResponse7Entity };
