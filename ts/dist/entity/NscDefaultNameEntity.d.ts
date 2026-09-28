import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { NscDefaultName, NscDefaultNameLoadMatch } from '../CloudflareZeroTrustTypes';
declare class NscDefaultNameEntity extends CloudflareZeroTrustEntityBase<NscDefaultName> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: NscDefaultNameEntity): NscDefaultNameEntity;
    load(this: any, reqmatch?: NscDefaultNameLoadMatch, ctrl?: Control): Promise<NscDefaultNameEntity>;
}
export { NscDefaultNameEntity };
