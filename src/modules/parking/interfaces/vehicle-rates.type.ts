import { VehicleType } from '@/modules/vehicle/vehicle-type.enum';

export type VehicleRates = {
  [key in VehicleType]?: number;
};
