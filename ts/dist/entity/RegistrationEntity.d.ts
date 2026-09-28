import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { Registration, RegistrationLoadMatch, RegistrationListMatch, RegistrationCreateData, RegistrationRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class RegistrationEntity extends CloudflareZeroTrustEntityBase<Registration> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: RegistrationEntity): RegistrationEntity;
    load(this: any, reqmatch?: RegistrationLoadMatch, ctrl?: Control): Promise<RegistrationEntity>;
    list(this: any, reqmatch?: RegistrationListMatch, ctrl?: Control): Promise<RegistrationEntity[]>;
    create(this: any, reqdata?: RegistrationCreateData, ctrl?: Control): Promise<RegistrationEntity>;
    remove(this: any, reqmatch?: RegistrationRemoveMatch, ctrl?: Control): Promise<RegistrationEntity>;
}
export { RegistrationEntity };
