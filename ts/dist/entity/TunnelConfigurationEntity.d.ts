import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelConfiguration, TunnelConfigurationLoadMatch, TunnelConfigurationUpdateData } from '../CloudflareZeroTrustTypes';
declare class TunnelConfigurationEntity extends CloudflareZeroTrustEntityBase<TunnelConfiguration> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelConfigurationEntity): TunnelConfigurationEntity;
    load(this: any, reqmatch?: TunnelConfigurationLoadMatch, ctrl?: Control): Promise<TunnelConfigurationEntity>;
    update(this: any, reqdata?: TunnelConfigurationUpdateData, ctrl?: Control): Promise<TunnelConfigurationEntity>;
}
export { TunnelConfigurationEntity };
