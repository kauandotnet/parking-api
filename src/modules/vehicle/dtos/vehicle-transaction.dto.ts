import { Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';

import { BaseAbstractEntityDto } from '@/common/dto/base-abastract-entity.dto';
import { ParkingSpotInterface } from '@/modules/parking-spot/parking-spot.interface';
import { ParkingTransactionType } from '@/modules/parking-transactions/parking-transaction-type.enum';
import { IParkingTransaction } from '@/modules/parking-transactions/parking-transaction.interface';

import { VehicleInterface } from '../vehicle.interface';

export class VehicleTransactionDto
  extends BaseAbstractEntityDto
  implements IParkingTransaction
{
  @Expose()
  vehicle: VehicleInterface;

  @Expose()
  spot: ParkingSpotInterface;

  @Expose()
  type: ParkingTransactionType;

  @Expose()
  @IsNumber()
  value: number;
}
