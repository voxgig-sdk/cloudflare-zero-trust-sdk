import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { DexRule, DexRuleLoadMatch, DexRuleCreateData, DexRuleUpdateData, DexRuleRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class DexRuleEntity extends CloudflareZeroTrustEntityBase<DexRule> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: DexRuleEntity): DexRuleEntity;
    load(this: any, reqmatch?: DexRuleLoadMatch, ctrl?: Control): Promise<DexRuleEntity>;
    create(this: any, reqdata?: DexRuleCreateData, ctrl?: Control): Promise<DexRuleEntity>;
    update(this: any, reqdata?: DexRuleUpdateData, ctrl?: Control): Promise<DexRuleEntity>;
    remove(this: any, reqmatch?: DexRuleRemoveMatch, ctrl?: Control): Promise<DexRuleEntity>;
}
export { DexRuleEntity };
