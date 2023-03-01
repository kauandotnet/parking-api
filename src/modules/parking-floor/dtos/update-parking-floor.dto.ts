import { PickType } from '@nestjs/swagger';
import { ParkingFloorDto } from './parking-floor.dto';

export class UpdateParkingFloorDto extends PickType(ParkingFloorDto, [
  'label',
  'status',
]) {}
