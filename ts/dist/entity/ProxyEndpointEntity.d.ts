import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ProxyEndpoint, ProxyEndpointRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class ProxyEndpointEntity extends CloudflareZeroTrustEntityBase<ProxyEndpoint> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ProxyEndpointEntity): ProxyEndpointEntity;
    remove(this: any, reqmatch?: ProxyEndpointRemoveMatch, ctrl?: Control): Promise<ProxyEndpointEntity>;
}
export { ProxyEndpointEntity };
