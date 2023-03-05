import { BaseAbstractEntityInterface } from '@/common/interfaces/base-abstract-entity.interface';
import { CustomerInterface } from '@/modules/customer/customer.interface';
import { IParkingTransaction } from '@/modules/parking-transactions/parking-transaction.interface';

import { VehicleType } from './vehicle-type.enum';

export interface VehicleInterface extends BaseAbstractEntityInterface {
  plate: string;
  type: VehicleType;
  color: string;
  customer?: CustomerInterface;
  parkingTransactions?: IParkingTransaction[];
}
