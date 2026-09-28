import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { Warp, WarpLoadMatch, WarpUpdateData } from '../CloudflareZeroTrustTypes';
declare class WarpEntity extends CloudflareZeroTrustEntityBase<Warp> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: WarpEntity): WarpEntity;
    load(this: any, reqmatch?: WarpLoadMatch, ctrl?: Control): Promise<WarpEntity>;
    update(this: any, reqdata?: WarpUpdateData, ctrl?: Control): Promise<WarpEntity>;
}
export { WarpEntity };
