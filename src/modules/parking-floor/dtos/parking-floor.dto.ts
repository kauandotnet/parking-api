import { BaseAbstractEntityDto } from '@common/dto/base-abastract-entity.dto';
import { ParkingSpotEntity } from '@modules/parking-spot/parking-spot.entity';
import { ParkingEntity } from '@modules/parking/parking.entity';
import { Expose } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { ParkingFloorEntity } from '../parking-floor.entity';

export class ParkingFloorDto
  extends BaseAbstractEntityDto
  implements ParkingFloorEntity
{
  @Expose()
  @IsString()
  label: string;

  @Expose()
  @IsInt()
  @Min(1)
  @Max(100)
  capacity: number;

  @Expose()
  @IsOptional()
  @IsBoolean()
  status: boolean;

  @Expose()
  spots: ParkingSpotEntity[];

  @Expose()
  parking: ParkingEntity;
}
