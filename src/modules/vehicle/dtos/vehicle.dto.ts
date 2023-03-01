import { BaseAbstractEntityDto } from '@common/dto/base-abastract-entity.dto';
import { CustomerInterface } from '@modules/customer/customer.interface';
import { ParkingTransactionInterface } from '@modules/parking-transactions/parking-transaction.interface';
import { Expose } from 'class-transformer';
import { IsEnum, IsString } from 'class-validator';
import { VehicleType } from '../vehicle-type.enum';
import { VehicleInterface } from '../vehicle.interface';

export class VehicleDto
  extends BaseAbstractEntityDto
  implements VehicleInterface
{
  @Expose()
  customer?: CustomerInterface;

  @IsString()
  plate: string;

  @IsEnum(VehicleType)
  type: VehicleType;

  @IsString()
  color: string;

  @Expose()
  parkingTransactions: ParkingTransactionInterface[];
}
