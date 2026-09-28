import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayGatewayAccountLoggingSetting, ZeroTrustGatewayGatewayAccountLoggingSettingLoadMatch, ZeroTrustGatewayGatewayAccountLoggingSettingUpdateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayGatewayAccountLoggingSettingEntity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayGatewayAccountLoggingSetting> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayGatewayAccountLoggingSettingEntity): ZeroTrustGatewayGatewayAccountLoggingSettingEntity;
    load(this: any, reqmatch?: ZeroTrustGatewayGatewayAccountLoggingSettingLoadMatch, ctrl?: Control): Promise<ZeroTrustGatewayGatewayAccountLoggingSettingEntity>;
    update(this: any, reqdata?: ZeroTrustGatewayGatewayAccountLoggingSettingUpdateData, ctrl?: Control): Promise<ZeroTrustGatewayGatewayAccountLoggingSettingEntity>;
}
export { ZeroTrustGatewayGatewayAccountLoggingSettingEntity };
