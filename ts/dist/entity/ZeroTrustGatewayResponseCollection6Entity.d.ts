import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { ZeroTrustGatewayResponseCollection6, ZeroTrustGatewayResponseCollection6ListMatch, ZeroTrustGatewayResponseCollection6UpdateData } from '../CloudflareZeroTrustTypes';
declare class ZeroTrustGatewayResponseCollection6Entity extends CloudflareZeroTrustEntityBase<ZeroTrustGatewayResponseCollection6> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: ZeroTrustGatewayResponseCollection6Entity): ZeroTrustGatewayResponseCollection6Entity;
    list(this: any, reqmatch?: ZeroTrustGatewayResponseCollection6ListMatch, ctrl?: Control): Promise<ZeroTrustGatewayResponseCollection6Entity[]>;
    update(this: any, reqdata?: ZeroTrustGatewayResponseCollection6UpdateData, ctrl?: Control): Promise<ZeroTrustGatewayResponseCollection6Entity>;
}
export { ZeroTrustGatewayResponseCollection6Entity };
