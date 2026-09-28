import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { WarpChangeEvent, WarpChangeEventListMatch } from '../CloudflareZeroTrustTypes';
declare class WarpChangeEventEntity extends CloudflareZeroTrustEntityBase<WarpChangeEvent> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: WarpChangeEventEntity): WarpChangeEventEntity;
    list(this: any, reqmatch?: WarpChangeEventListMatch, ctrl?: Control): Promise<WarpChangeEventEntity[]>;
}
export { WarpChangeEventEntity };
