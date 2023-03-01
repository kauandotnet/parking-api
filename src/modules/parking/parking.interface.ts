import { ParkingFloorInterface } from '@modules/parking-floor/parking-floor.interface';

export interface ParkingInterface {
  name: string;
  state: string;
  country: string;
  floors: ParkingFloorInterface[];
  city: string;
  address: string;
  phone: string;
}
