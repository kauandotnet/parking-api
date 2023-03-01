import { OmitType } from '@nestjs/swagger';
import { ParkingFloorDto } from './parking-floor.dto';

export class CreateParkingFloorDto extends OmitType(ParkingFloorDto, [
  'spots',
  'parking',
]) {}
