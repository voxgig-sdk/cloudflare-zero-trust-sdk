import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustRiskScoring, ZeroTrustRiskScoringLoadMatch, ZeroTrustRiskScoringCreateData, ZeroTrustRiskScoringUpdateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustRiskScoringEntity extends CloudflareZeroTrustEntityBase<ZeroTrustRiskScoring> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustRiskScoringEntity): ZeroTrustRiskScoringEntity;
    load(this: any, reqmatch?: ZeroTrustRiskScoringLoadMatch, ctrl?: Control): Promise<ZeroTrustRiskScoringEntity>;
    create(this: any, reqdata?: ZeroTrustRiskScoringCreateData, ctrl?: Control): Promise<ZeroTrustRiskScoringEntity>;
    update(this: any, reqdata?: ZeroTrustRiskScoringUpdateData, ctrl?: Control): Promise<ZeroTrustRiskScoringEntity>;
}
export { ZeroTrustRiskScoringEntity };
