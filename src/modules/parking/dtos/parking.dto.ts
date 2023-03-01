import { BaseAbstractEntityDto } from '@common/dto/base-abastract-entity.dto';
import { ParkingFloorDto } from '@modules/parking-floor/dtos/parking-floor.dto';
import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { ParkingInterface } from '../parking.interface';

export class ParkingDto
  extends BaseAbstractEntityDto
  implements ParkingInterface
{
  @IsString()
  @Expose()
  name: string;

  @IsString()
  @Expose()
  state: string;

  @IsString()
  @Expose()
  country: string;

  @Expose()
  floors: ParkingFloorDto[];

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
}
