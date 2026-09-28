import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesFallbackDomainResponseCollection, TeamsDevicesFallbackDomainResponseCollectionListMatch, TeamsDevicesFallbackDomainResponseCollectionUpdateData, TeamsDevicesFallbackDomainResponseCollectionRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesFallbackDomainResponseCollectionEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesFallbackDomainResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesFallbackDomainResponseCollectionEntity): TeamsDevicesFallbackDomainResponseCollectionEntity;
    list(this: any, reqmatch?: TeamsDevicesFallbackDomainResponseCollectionListMatch, ctrl?: Control): Promise<TeamsDevicesFallbackDomainResponseCollectionEntity[]>;
    update(this: any, reqdata?: TeamsDevicesFallbackDomainResponseCollectionUpdateData, ctrl?: Control): Promise<TeamsDevicesFallbackDomainResponseCollectionEntity>;
    remove(this: any, reqmatch?: TeamsDevicesFallbackDomainResponseCollectionRemoveMatch, ctrl?: Control): Promise<TeamsDevicesFallbackDomainResponseCollectionEntity>;
}
export { TeamsDevicesFallbackDomainResponseCollectionEntity };
