import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { NscInterconnect, NscInterconnectLoadMatch, NscInterconnectListMatch, NscInterconnectCreateData } from '../CloudflareZeroTrustTypes';
declare class NscInterconnectEntity extends CloudflareZeroTrustEntityBase<NscInterconnect> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: NscInterconnectEntity): NscInterconnectEntity;
    load(this: any, reqmatch?: NscInterconnectLoadMatch, ctrl?: Control): Promise<NscInterconnectEntity>;
    list(this: any, reqmatch?: NscInterconnectListMatch, ctrl?: Control): Promise<NscInterconnectEntity[]>;
    create(this: any, reqdata?: NscInterconnectCreateData, ctrl?: Control): Promise<NscInterconnectEntity>;
}
export { NscInterconnectEntity };
