import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { Interconnect, InterconnectLoadMatch, InterconnectRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class InterconnectEntity extends CloudflareZeroTrustEntityBase<Interconnect> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: InterconnectEntity): InterconnectEntity;
    load(this: any, reqmatch?: InterconnectLoadMatch, ctrl?: Control): Promise<InterconnectEntity>;
    remove(this: any, reqmatch?: InterconnectRemoveMatch, ctrl?: Control): Promise<InterconnectEntity>;
}
export { InterconnectEntity };
