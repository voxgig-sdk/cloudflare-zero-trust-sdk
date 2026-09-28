import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { Cni, CniRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class CniEntity extends CloudflareZeroTrustEntityBase<Cni> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: CniEntity): CniEntity;
    remove(this: any, reqmatch?: CniRemoveMatch, ctrl?: Control): Promise<CniEntity>;
}
export { CniEntity };
