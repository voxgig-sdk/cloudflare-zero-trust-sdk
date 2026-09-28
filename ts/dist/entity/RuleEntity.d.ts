import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { Rule, RuleRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class RuleEntity extends CloudflareZeroTrustEntityBase<Rule> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: RuleEntity): RuleEntity;
    remove(this: any, reqmatch?: RuleRemoveMatch, ctrl?: Control): Promise<RuleEntity>;
}
export { RuleEntity };
