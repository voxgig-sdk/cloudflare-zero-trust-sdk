import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { Pacfile, PacfileRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class PacfileEntity extends CloudflareZeroTrustEntityBase<Pacfile> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: PacfileEntity): PacfileEntity;
    remove(this: any, reqmatch?: PacfileRemoveMatch, ctrl?: Control): Promise<PacfileEntity>;
}
export { PacfileEntity };
