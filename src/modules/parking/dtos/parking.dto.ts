import { Expose, Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

import { BaseAbstractEntityDto } from '@/common/dto/base-abastract-entity.dto';
import { ParkingFloorDto } from '@/modules/parking-floor/dtos/parking-floor.dto';

import { ParkingInterface } from '../interfaces/parking.interface';
import { VehicleRates } from '../interfaces/vehicle-rates.type';

export class ParkingDto
  extends BaseAbstractEntityDto
  implements ParkingInterface
{
  @Expose()
  floors: ParkingFloorDto[];

  @IsString()
  @Expose()
  name: string;

  @IsString()
  @Expose()
  state: string;

  @IsString()
  @Expose()
  country: string;

  @IsArray()
  @ValidateNested()
  @Type(() => Object)
  rates: VehicleRates;

  @IsString()
  @Expose()
  city: string;

  @IsString()
  @Expose()
  address: string;

  @IsOptional()
  @IsString()
  @Expose()
  phone: string;

  @IsNumber()
  @IsPositive()
  defaultRate: number;
}
