import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustRiskScoringIntegration, ZeroTrustRiskScoringIntegrationLoadMatch, ZeroTrustRiskScoringIntegrationListMatch, ZeroTrustRiskScoringIntegrationCreateData, ZeroTrustRiskScoringIntegrationUpdateData, ZeroTrustRiskScoringIntegrationRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustRiskScoringIntegrationEntity extends CloudflareZeroTrustEntityBase<ZeroTrustRiskScoringIntegration> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustRiskScoringIntegrationEntity): ZeroTrustRiskScoringIntegrationEntity;
    load(this: any, reqmatch?: ZeroTrustRiskScoringIntegrationLoadMatch, ctrl?: Control): Promise<ZeroTrustRiskScoringIntegrationEntity>;
    list(this: any, reqmatch?: ZeroTrustRiskScoringIntegrationListMatch, ctrl?: Control): Promise<ZeroTrustRiskScoringIntegrationEntity[]>;
    create(this: any, reqdata?: ZeroTrustRiskScoringIntegrationCreateData, ctrl?: Control): Promise<ZeroTrustRiskScoringIntegrationEntity>;
    update(this: any, reqdata?: ZeroTrustRiskScoringIntegrationUpdateData, ctrl?: Control): Promise<ZeroTrustRiskScoringIntegrationEntity>;
    remove(this: any, reqmatch?: ZeroTrustRiskScoringIntegrationRemoveMatch, ctrl?: Control): Promise<ZeroTrustRiskScoringIntegrationEntity>;
}
export { ZeroTrustRiskScoringIntegrationEntity };
