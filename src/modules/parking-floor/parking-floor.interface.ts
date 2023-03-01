import { ParkingSpotInterface } from '@modules/parking-spot/parking-spot.interface';
import { ParkingInterface } from '@modules/parking/parking.interface';

export interface ParkingFloorInterface {
  label: string;
  capacity: number;
  status: boolean;
  spots: ParkingSpotInterface[];
  parking: ParkingInterface;
}
