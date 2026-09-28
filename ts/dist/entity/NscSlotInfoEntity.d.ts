import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { NscSlotInfo, NscSlotInfoLoadMatch, NscSlotInfoListMatch } from '../CloudflareZeroTrustTypes';
declare class NscSlotInfoEntity extends CloudflareZeroTrustEntityBase<NscSlotInfo> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: NscSlotInfoEntity): NscSlotInfoEntity;
    load(this: any, reqmatch?: NscSlotInfoLoadMatch, ctrl?: Control): Promise<NscSlotInfoEntity>;
    list(this: any, reqmatch?: NscSlotInfoListMatch, ctrl?: Control): Promise<NscSlotInfoEntity[]>;
}
export { NscSlotInfoEntity };
