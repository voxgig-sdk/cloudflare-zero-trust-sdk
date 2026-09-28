import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelTeamnetResponseCollection, TunnelTeamnetResponseCollectionListMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelTeamnetResponseCollectionEntity extends CloudflareZeroTrustEntityBase<TunnelTeamnetResponseCollection> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelTeamnetResponseCollectionEntity): TunnelTeamnetResponseCollectionEntity;
    list(this: any, reqmatch?: TunnelTeamnetResponseCollectionListMatch, ctrl?: Control): Promise<TunnelTeamnetResponseCollectionEntity[]>;
}
export { TunnelTeamnetResponseCollectionEntity };
