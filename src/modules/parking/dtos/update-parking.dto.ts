import { PickType } from '@nestjs/swagger';

import { ParkingDto } from './parking.dto';

export class UpdateParkingDto extends PickType(ParkingDto, [
  'name',
  'address',
  'city',
  'country',
  'phone',
  'state',
]) {}
