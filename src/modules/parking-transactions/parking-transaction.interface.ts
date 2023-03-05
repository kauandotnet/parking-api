import { ParkingSpotInterface } from '@/modules/parking-spot/parking-spot.interface';
import { VehicleInterface } from '@/modules/vehicle/vehicle.interface';

import { ParkingTransactionType } from './parking-transaction-type.enum';

export interface IParkingTransaction {
  vehicle: VehicleInterface;
  spot: ParkingSpotInterface;
  type: ParkingTransactionType;
  value: number;
}
