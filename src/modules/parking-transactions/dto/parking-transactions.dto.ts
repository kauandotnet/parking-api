import { Expose } from 'class-transformer';
import { IsEnum, IsNumber } from 'class-validator';

import { BaseAbstractEntityDto } from '@/common/dto/base-abastract-entity.dto';
import { ParkingSpotInterface } from '@/modules/parking-spot/parking-spot.interface';
import { VehicleInterface } from '@/modules/vehicle/vehicle.interface';

import { ParkingTransactionType } from '../parking-transaction-type.enum';
import { IParkingTransaction } from '../parking-transaction.interface';

export class ParkingTransactionsDto
  extends BaseAbstractEntityDto
  implements IParkingTransaction
{
  @Expose()
  vehicle: VehicleInterface;

  @Expose()
  spot: ParkingSpotInterface;

  @Expose()
  @IsEnum(ParkingTransactionType)
  type: ParkingTransactionType;

  @Expose()
  @IsNumber()
  value: number;
}
