import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesOverrideCode, TeamsDevicesOverrideCodeLoadMatch } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesOverrideCodeEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesOverrideCode> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesOverrideCodeEntity): TeamsDevicesOverrideCodeEntity;
    load(this: any, reqmatch?: TeamsDevicesOverrideCodeLoadMatch, ctrl?: Control): Promise<TeamsDevicesOverrideCodeEntity>;
}
export { TeamsDevicesOverrideCodeEntity };
