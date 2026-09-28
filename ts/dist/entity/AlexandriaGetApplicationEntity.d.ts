import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { AlexandriaGetApplication, AlexandriaGetApplicationLoadMatch, AlexandriaGetApplicationListMatch, AlexandriaGetApplicationCreateData, AlexandriaGetApplicationUpdateData } from '../CloudflareZeroTrustTypes';
declare class AlexandriaGetApplicationEntity extends CloudflareZeroTrustEntityBase<AlexandriaGetApplication> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: AlexandriaGetApplicationEntity): AlexandriaGetApplicationEntity;
    load(this: any, reqmatch?: AlexandriaGetApplicationLoadMatch, ctrl?: Control): Promise<AlexandriaGetApplicationEntity>;
    list(this: any, reqmatch?: AlexandriaGetApplicationListMatch, ctrl?: Control): Promise<AlexandriaGetApplicationEntity[]>;
    create(this: any, reqdata?: AlexandriaGetApplicationCreateData, ctrl?: Control): Promise<AlexandriaGetApplicationEntity>;
    update(this: any, reqdata?: AlexandriaGetApplicationUpdateData, ctrl?: Control): Promise<AlexandriaGetApplicationEntity>;
}
export { AlexandriaGetApplicationEntity };
