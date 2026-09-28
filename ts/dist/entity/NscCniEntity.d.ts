import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { NscCni, NscCniLoadMatch, NscCniListMatch, NscCniCreateData, NscCniUpdateData } from '../CloudflareZeroTrustTypes';
declare class NscCniEntity extends CloudflareZeroTrustEntityBase<NscCni> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: NscCniEntity): NscCniEntity;
    load(this: any, reqmatch?: NscCniLoadMatch, ctrl?: Control): Promise<NscCniEntity>;
    list(this: any, reqmatch?: NscCniListMatch, ctrl?: Control): Promise<NscCniEntity[]>;
    create(this: any, reqdata?: NscCniCreateData, ctrl?: Control): Promise<NscCniEntity>;
    update(this: any, reqdata?: NscCniUpdateData, ctrl?: Control): Promise<NscCniEntity>;
}
export { NscCniEntity };
