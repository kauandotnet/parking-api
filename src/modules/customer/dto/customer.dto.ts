import { Expose } from 'class-transformer';
import { IsString, MaxLength, MinLength } from 'class-validator';

import { BaseAbstractEntityDto } from '@/common/dto/base-abastract-entity.dto';
import { VehicleInterface } from '@/modules/vehicle/vehicle.interface';

import { CustomerInterface } from '../customer.interface';

export class CustomerDto
  extends BaseAbstractEntityDto
  implements CustomerInterface
{
  @Expose()
  @IsString()
  @MinLength(1)
  @MaxLength(60)
  fullName: string;

  email: string;

  @Expose()
  vehicles: VehicleInterface[];
}
