import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { DexRemoteCommand, DexRemoteCommandLoadMatch, DexRemoteCommandCreateData } from '../CloudflareZeroTrustTypes';
declare class DexRemoteCommandEntity extends CloudflareZeroTrustEntityBase<DexRemoteCommand> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: DexRemoteCommandEntity): DexRemoteCommandEntity;
    load(this: any, reqmatch?: DexRemoteCommandLoadMatch, ctrl?: Control): Promise<DexRemoteCommandEntity>;
    create(this: any, reqdata?: DexRemoteCommandCreateData, ctrl?: Control): Promise<DexRemoteCommandEntity>;
}
export { DexRemoteCommandEntity };
