import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { WarpTeamsDeviceApiOther, WarpTeamsDeviceApiOtherListMatch } from '../CloudflareZeroTrustTypes';
declare class WarpTeamsDeviceApiOtherEntity extends CloudflareZeroTrustEntityBase<WarpTeamsDeviceApiOther> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: WarpTeamsDeviceApiOtherEntity): WarpTeamsDeviceApiOtherEntity;
    list(this: any, reqmatch?: WarpTeamsDeviceApiOtherListMatch, ctrl?: Control): Promise<WarpTeamsDeviceApiOtherEntity[]>;
}
export { WarpTeamsDeviceApiOtherEntity };
