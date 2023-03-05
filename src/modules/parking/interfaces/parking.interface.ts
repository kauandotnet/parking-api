import { ParkingFloorInterface } from '@/modules/parking-floor/parking-floor.interface';

import { VehicleRates } from './vehicle-rates.type';

export interface ParkingInterface {
  name: string;
  state: string;
  country: string;
  city: string;
  rates?: VehicleRates;
  defaultRate: number;
  address: string;
  phone: string;
  floors: ParkingFloorInterface[];
}
