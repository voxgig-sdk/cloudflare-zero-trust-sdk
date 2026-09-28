import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesSplitTunnelIncludeResponseCollection, TeamsDevicesSplitTunnelIncludeResponseCollectionListMatch, TeamsDevicesSplitTunnelIncludeResponseCollectionUpdateData } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesSplitTunnelIncludeResponseCollectionEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesSplitTunnelIncludeResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesSplitTunnelIncludeResponseCollectionEntity): TeamsDevicesSplitTunnelIncludeResponseCollectionEntity;
    list(this: any, reqmatch?: TeamsDevicesSplitTunnelIncludeResponseCollectionListMatch, ctrl?: Control): Promise<TeamsDevicesSplitTunnelIncludeResponseCollectionEntity[]>;
    update(this: any, reqdata?: TeamsDevicesSplitTunnelIncludeResponseCollectionUpdateData, ctrl?: Control): Promise<TeamsDevicesSplitTunnelIncludeResponseCollectionEntity>;
}
export { TeamsDevicesSplitTunnelIncludeResponseCollectionEntity };
