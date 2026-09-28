import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { List, ListRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class ListEntity extends CloudflareZeroTrustEntityBase<List> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ListEntity): ListEntity;
    remove(this: any, reqmatch?: ListRemoveMatch, ctrl?: Control): Promise<ListEntity>;
}
export { ListEntity };
