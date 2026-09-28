import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { OverrideCode, OverrideCodeCreateData } from '../CloudflareZeroTrustTypes';
declare class OverrideCodeEntity extends CloudflareZeroTrustEntityBase<OverrideCode> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: OverrideCodeEntity): OverrideCodeEntity;
    create(this: any, reqdata?: OverrideCodeCreateData, ctrl?: Control): Promise<OverrideCodeEntity>;
}
export { OverrideCodeEntity };
