import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelZeroTrustConnectivitySetting, TunnelZeroTrustConnectivitySettingListMatch, TunnelZeroTrustConnectivitySettingUpdateData } from '../CloudflareZeroTrustTypes';
declare class TunnelZeroTrustConnectivitySettingEntity extends CloudflareZeroTrustEntityBase<TunnelZeroTrustConnectivitySetting> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelZeroTrustConnectivitySettingEntity): TunnelZeroTrustConnectivitySettingEntity;
    list(this: any, reqmatch?: TunnelZeroTrustConnectivitySettingListMatch, ctrl?: Control): Promise<TunnelZeroTrustConnectivitySettingEntity[]>;
    update(this: any, reqdata?: TunnelZeroTrustConnectivitySettingUpdateData, ctrl?: Control): Promise<TunnelZeroTrustConnectivitySettingEntity>;
}
export { TunnelZeroTrustConnectivitySettingEntity };
