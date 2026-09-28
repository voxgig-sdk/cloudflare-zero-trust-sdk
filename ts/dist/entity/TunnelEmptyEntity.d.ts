import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelEmpty, TunnelEmptyUpdateData, TunnelEmptyRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelEmptyEntity extends CloudflareZeroTrustEntityBase<TunnelEmpty> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelEmptyEntity): TunnelEmptyEntity;
    update(this: any, reqdata?: TunnelEmptyUpdateData, ctrl?: Control): Promise<TunnelEmptyEntity>;
    remove(this: any, reqmatch?: TunnelEmptyRemoveMatch, ctrl?: Control): Promise<TunnelEmptyEntity>;
}
export { TunnelEmptyEntity };
