import { Expose, Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

import { CreateParkingFloorDto } from '@/modules/parking-floor/dtos/create-parking-floor.dto';
import { VehicleType } from '@/modules/vehicle/vehicle-type.enum';

export class VehicleRatesDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  [VehicleType.CAR]?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  [VehicleType.MOTORCYCLE]?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  [VehicleType.TRUCK]?: number;
}
export class CreateParkingDto {
  @IsString()
  @Expose()
  name: string;

  @IsString()
  @Expose()
  state: string;

  @IsString()
  @Expose()
  country: string;

  @IsString()
  @Expose()
  city: string;

  @IsString()
  @Expose()
  address: string;

  @IsString()
  @Expose()
  phone: string;

  @ValidateNested({ each: true })
  @Type(() => CreateParkingFloorDto)
  floors: CreateParkingFloorDto[];

  @IsNumber()
  @IsPositive()
  defaultRate: number;

  @ValidateNested()
  @Type(() => VehicleRatesDto)
  rates: VehicleRatesDto;
}
