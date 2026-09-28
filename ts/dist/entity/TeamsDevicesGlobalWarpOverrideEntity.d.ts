import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesGlobalWarpOverride, TeamsDevicesGlobalWarpOverrideLoadMatch, TeamsDevicesGlobalWarpOverrideCreateData } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesGlobalWarpOverrideEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesGlobalWarpOverride> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesGlobalWarpOverrideEntity): TeamsDevicesGlobalWarpOverrideEntity;
    load(this: any, reqmatch?: TeamsDevicesGlobalWarpOverrideLoadMatch, ctrl?: Control): Promise<TeamsDevicesGlobalWarpOverrideEntity>;
    create(this: any, reqdata?: TeamsDevicesGlobalWarpOverrideCreateData, ctrl?: Control): Promise<TeamsDevicesGlobalWarpOverrideEntity>;
}
export { TeamsDevicesGlobalWarpOverrideEntity };
