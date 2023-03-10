import { BaseAbstractEntityInterface } from '@/common/interfaces/base-abstract-entity.interface';

import { VehicleInterface } from '../vehicle/vehicle.interface';

export interface CustomerInterface extends BaseAbstractEntityInterface {
  fullName: string;
  email: string;
  vehicles?: VehicleInterface[];
}
