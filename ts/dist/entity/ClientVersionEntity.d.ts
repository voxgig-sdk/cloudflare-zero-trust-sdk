import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ClientVersion, ClientVersionListMatch } from '../CloudflareZeroTrustTypes';
declare class ClientVersionEntity extends CloudflareZeroTrustEntityBase<ClientVersion> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ClientVersionEntity): ClientVersionEntity;
    list(this: any, reqmatch?: ClientVersionListMatch, ctrl?: Control): Promise<ClientVersionEntity[]>;
}
export { ClientVersionEntity };
