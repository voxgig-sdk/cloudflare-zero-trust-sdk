import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { IpProfile, IpProfileLoadMatch, IpProfileListMatch, IpProfileCreateData, IpProfileUpdateData, IpProfileRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class IpProfileEntity extends CloudflareZeroTrustEntityBase<IpProfile> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: IpProfileEntity): IpProfileEntity;
    load(this: any, reqmatch?: IpProfileLoadMatch, ctrl?: Control): Promise<IpProfileEntity>;
    list(this: any, reqmatch?: IpProfileListMatch, ctrl?: Control): Promise<IpProfileEntity[]>;
    create(this: any, reqdata?: IpProfileCreateData, ctrl?: Control): Promise<IpProfileEntity>;
    update(this: any, reqdata?: IpProfileUpdateData, ctrl?: Control): Promise<IpProfileEntity>;
    remove(this: any, reqmatch?: IpProfileRemoveMatch, ctrl?: Control): Promise<IpProfileEntity>;
}
export { IpProfileEntity };
