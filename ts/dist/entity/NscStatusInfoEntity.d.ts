import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { NscStatusInfo, NscStatusInfoLoadMatch } from '../CloudflareZeroTrustTypes';
declare class NscStatusInfoEntity extends CloudflareZeroTrustEntityBase<NscStatusInfo> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: NscStatusInfoEntity): NscStatusInfoEntity;
    load(this: any, reqmatch?: NscStatusInfoLoadMatch, ctrl?: Control): Promise<NscStatusInfoEntity>;
}
export { NscStatusInfoEntity };
