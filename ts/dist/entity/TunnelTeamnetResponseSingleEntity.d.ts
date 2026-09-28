import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { TunnelTeamnetResponseSingle, TunnelTeamnetResponseSingleLoadMatch } from '../CloudflareZeroTrustTypes';
declare class TunnelTeamnetResponseSingleEntity extends CloudflareZeroTrustEntityBase<TunnelTeamnetResponseSingle> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: TunnelTeamnetResponseSingleEntity): TunnelTeamnetResponseSingleEntity;
    load(this: any, reqmatch?: TunnelTeamnetResponseSingleLoadMatch, ctrl?: Control): Promise<TunnelTeamnetResponseSingleEntity>;
}
export { TunnelTeamnetResponseSingleEntity };
