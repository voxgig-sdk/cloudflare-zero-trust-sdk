import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayApplicationsReviewStatus, ZeroTrustGatewayApplicationsReviewStatusLoadMatch, ZeroTrustGatewayApplicationsReviewStatusUpdateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayApplicationsReviewStatusEntity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayApplicationsReviewStatus> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayApplicationsReviewStatusEntity): ZeroTrustGatewayApplicationsReviewStatusEntity;
    load(this: any, reqmatch?: ZeroTrustGatewayApplicationsReviewStatusLoadMatch, ctrl?: Control): Promise<ZeroTrustGatewayApplicationsReviewStatusEntity>;
    update(this: any, reqdata?: ZeroTrustGatewayApplicationsReviewStatusUpdateData, ctrl?: Control): Promise<ZeroTrustGatewayApplicationsReviewStatusEntity>;
}
export { ZeroTrustGatewayApplicationsReviewStatusEntity };
