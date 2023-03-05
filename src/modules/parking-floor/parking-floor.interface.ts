import { ParkingInterface } from '@/modules/parking/interfaces/parking.interface';
import { ParkingSpotInterface } from '@/modules/parking-spot/parking-spot.interface';

export interface ParkingFloorInterface {
  label: string;
  capacity: number;
  status: boolean;
  spots: ParkingSpotInterface[];
  parking: ParkingInterface;
}
