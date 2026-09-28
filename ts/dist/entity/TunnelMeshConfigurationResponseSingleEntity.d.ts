import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelMeshConfigurationResponseSingle, TunnelMeshConfigurationResponseSingleLoadMatch, TunnelMeshConfigurationResponseSingleUpdateData } from '../CloudflareZeroTrustTypes';
declare class TunnelMeshConfigurationResponseSingleEntity extends CloudflareZeroTrustEntityBase<TunnelMeshConfigurationResponseSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelMeshConfigurationResponseSingleEntity): TunnelMeshConfigurationResponseSingleEntity;
    load(this: any, reqmatch?: TunnelMeshConfigurationResponseSingleLoadMatch, ctrl?: Control): Promise<TunnelMeshConfigurationResponseSingleEntity>;
    update(this: any, reqdata?: TunnelMeshConfigurationResponseSingleUpdateData, ctrl?: Control): Promise<TunnelMeshConfigurationResponseSingleEntity>;
}
export { TunnelMeshConfigurationResponseSingleEntity };
