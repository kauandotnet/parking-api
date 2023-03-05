import { IsEnum, IsOptional } from 'class-validator';

import { ParkingSpotStatus } from '@/modules/parking-spot/parking-spot-status.enum';

export class ParkingSpotStatusDto {
  @IsOptional()
  @IsEnum(ParkingSpotStatus)
  status: ParkingSpotStatus;
}
