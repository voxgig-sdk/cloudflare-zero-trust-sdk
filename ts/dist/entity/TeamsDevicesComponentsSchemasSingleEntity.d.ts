import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesComponentsSchemasSingle, TeamsDevicesComponentsSchemasSingleLoadMatch, TeamsDevicesComponentsSchemasSingleCreateData, TeamsDevicesComponentsSchemasSingleUpdateData } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesComponentsSchemasSingleEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesComponentsSchemasSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesComponentsSchemasSingleEntity): TeamsDevicesComponentsSchemasSingleEntity;
    load(this: any, reqmatch?: TeamsDevicesComponentsSchemasSingleLoadMatch, ctrl?: Control): Promise<TeamsDevicesComponentsSchemasSingleEntity>;
    create(this: any, reqdata?: TeamsDevicesComponentsSchemasSingleCreateData, ctrl?: Control): Promise<TeamsDevicesComponentsSchemasSingleEntity>;
    update(this: any, reqdata?: TeamsDevicesComponentsSchemasSingleUpdateData, ctrl?: Control): Promise<TeamsDevicesComponentsSchemasSingleEntity>;
}
export { TeamsDevicesComponentsSchemasSingleEntity };
