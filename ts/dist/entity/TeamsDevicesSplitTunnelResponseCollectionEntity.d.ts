import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesSplitTunnelResponseCollection, TeamsDevicesSplitTunnelResponseCollectionListMatch, TeamsDevicesSplitTunnelResponseCollectionUpdateData, TeamsDevicesSplitTunnelResponseCollectionRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesSplitTunnelResponseCollectionEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesSplitTunnelResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesSplitTunnelResponseCollectionEntity): TeamsDevicesSplitTunnelResponseCollectionEntity;
    list(this: any, reqmatch?: TeamsDevicesSplitTunnelResponseCollectionListMatch, ctrl?: Control): Promise<TeamsDevicesSplitTunnelResponseCollectionEntity[]>;
    update(this: any, reqdata?: TeamsDevicesSplitTunnelResponseCollectionUpdateData, ctrl?: Control): Promise<TeamsDevicesSplitTunnelResponseCollectionEntity>;
    remove(this: any, reqmatch?: TeamsDevicesSplitTunnelResponseCollectionRemoveMatch, ctrl?: Control): Promise<TeamsDevicesSplitTunnelResponseCollectionEntity>;
}
export { TeamsDevicesSplitTunnelResponseCollectionEntity };
