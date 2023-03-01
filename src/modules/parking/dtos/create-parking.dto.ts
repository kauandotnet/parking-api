import { CreateParkingFloorDto } from '@modules/parking-floor/dtos/create-parking-floor.dto';
import { Expose, Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';

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
}
