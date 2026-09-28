import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TeamsDevicesSchemasSingle, TeamsDevicesSchemasSingleLoadMatch, TeamsDevicesSchemasSingleCreateData, TeamsDevicesSchemasSingleUpdateData } from '../CloudflareZeroTrustTypes';
declare class TeamsDevicesSchemasSingleEntity extends CloudflareZeroTrustEntityBase<TeamsDevicesSchemasSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TeamsDevicesSchemasSingleEntity): TeamsDevicesSchemasSingleEntity;
    load(this: any, reqmatch?: TeamsDevicesSchemasSingleLoadMatch, ctrl?: Control): Promise<TeamsDevicesSchemasSingleEntity>;
    create(this: any, reqdata?: TeamsDevicesSchemasSingleCreateData, ctrl?: Control): Promise<TeamsDevicesSchemasSingleEntity>;
    update(this: any, reqdata?: TeamsDevicesSchemasSingleUpdateData, ctrl?: Control): Promise<TeamsDevicesSchemasSingleEntity>;
}
export { TeamsDevicesSchemasSingleEntity };
