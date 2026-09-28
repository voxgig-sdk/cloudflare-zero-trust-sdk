import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { DeploymentGroup, DeploymentGroupLoadMatch, DeploymentGroupListMatch, DeploymentGroupCreateData, DeploymentGroupUpdateData, DeploymentGroupRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class DeploymentGroupEntity extends CloudflareZeroTrustEntityBase<DeploymentGroup> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: DeploymentGroupEntity): DeploymentGroupEntity;
    load(this: any, reqmatch?: DeploymentGroupLoadMatch, ctrl?: Control): Promise<DeploymentGroupEntity>;
    list(this: any, reqmatch?: DeploymentGroupListMatch, ctrl?: Control): Promise<DeploymentGroupEntity[]>;
    create(this: any, reqdata?: DeploymentGroupCreateData, ctrl?: Control): Promise<DeploymentGroupEntity>;
    update(this: any, reqdata?: DeploymentGroupUpdateData, ctrl?: Control): Promise<DeploymentGroupEntity>;
    remove(this: any, reqmatch?: DeploymentGroupRemoveMatch, ctrl?: Control): Promise<DeploymentGroupEntity>;
}
export { DeploymentGroupEntity };
