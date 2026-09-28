import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelSubnetResponseSingleNullable, TunnelSubnetResponseSingleNullableRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelSubnetResponseSingleNullableEntity extends CloudflareZeroTrustEntityBase<TunnelSubnetResponseSingleNullable> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelSubnetResponseSingleNullableEntity): TunnelSubnetResponseSingleNullableEntity;
    remove(this: any, reqmatch?: TunnelSubnetResponseSingleNullableRemoveMatch, ctrl?: Control): Promise<TunnelSubnetResponseSingleNullableEntity>;
}
export { TunnelSubnetResponseSingleNullableEntity };
