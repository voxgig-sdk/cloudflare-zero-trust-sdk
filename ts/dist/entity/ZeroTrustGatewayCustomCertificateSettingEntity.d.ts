import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayCustomCertificateSetting, ZeroTrustGatewayCustomCertificateSettingLoadMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayCustomCertificateSettingEntity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayCustomCertificateSetting> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayCustomCertificateSettingEntity): ZeroTrustGatewayCustomCertificateSettingEntity;
    load(this: any, reqmatch?: ZeroTrustGatewayCustomCertificateSettingLoadMatch, ctrl?: Control): Promise<ZeroTrustGatewayCustomCertificateSettingEntity>;
}
export { ZeroTrustGatewayCustomCertificateSettingEntity };
