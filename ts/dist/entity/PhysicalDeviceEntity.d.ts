import { CloudflareZeroTrustEntityBase } from '../CloudflareZeroTrustEntityBase';
import type { CloudflareZeroTrustSDK } from '../CloudflareZeroTrustSDK';
import type { Control } from '../types';
import type { PhysicalDevice, PhysicalDeviceLoadMatch, PhysicalDeviceListMatch, PhysicalDeviceCreateData, PhysicalDeviceUpdateData, PhysicalDeviceRemoveMatch } from '../CloudflareZeroTrustTypes';
declare class PhysicalDeviceEntity extends CloudflareZeroTrustEntityBase<PhysicalDevice> {
    constructor(client: CloudflareZeroTrustSDK, entopts: any);
    make(this: PhysicalDeviceEntity): PhysicalDeviceEntity;
    load(this: any, reqmatch?: PhysicalDeviceLoadMatch, ctrl?: Control): Promise<PhysicalDeviceEntity>;
    list(this: any, reqmatch?: PhysicalDeviceListMatch, ctrl?: Control): Promise<PhysicalDeviceEntity[]>;
    create(this: any, reqdata?: PhysicalDeviceCreateData, ctrl?: Control): Promise<PhysicalDeviceEntity>;
    update(this: any, reqdata?: PhysicalDeviceUpdateData, ctrl?: Control): Promise<PhysicalDeviceEntity>;
    remove(this: any, reqmatch?: PhysicalDeviceRemoveMatch, ctrl?: Control): Promise<PhysicalDeviceEntity>;
}
export { PhysicalDeviceEntity };
