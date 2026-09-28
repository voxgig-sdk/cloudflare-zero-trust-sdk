import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { NscSetting, NscSettingLoadMatch, NscSettingUpdateData } from '../CloudflareZeroTrustTypes';
declare class NscSettingEntity extends CloudflareZeroTrustEntityBase<NscSetting> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: NscSettingEntity): NscSettingEntity;
    load(this: any, reqmatch?: NscSettingLoadMatch, ctrl?: Control): Promise<NscSettingEntity>;
    update(this: any, reqdata?: NscSettingUpdateData, ctrl?: Control): Promise<NscSettingEntity>;
}
export { NscSettingEntity };
