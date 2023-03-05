import { BaseAbstractEntityInterface } from '@/common/interfaces/base-abstract-entity.interface';
import { ParkingFloorInterface } from '@/modules/parking-floor/parking-floor.interface';
import { IParkingTransaction } from '@/modules/parking-transactions/parking-transaction.interface';

import { ParkingSpotStatus } from './parking-spot-status.enum';

export interface ParkingSpotInterface extends BaseAbstractEntityInterface {
  name: string;
  floor: ParkingFloorInterface;
  status: ParkingSpotStatus;
  transactions: IParkingTransaction[];
}
