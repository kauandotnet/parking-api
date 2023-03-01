import { ParkingFloorInterface } from '@modules/parking-floor/parking-floor.interface';
import { ParkingTransactionInterface } from '@modules/parking-transactions/parking-transaction.interface';

export interface ParkingSpotInterface {
  name: string;
  floor: ParkingFloorInterface;
  status: boolean;
  transactions: ParkingTransactionInterface[];
}
