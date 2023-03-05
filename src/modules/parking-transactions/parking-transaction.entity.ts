import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseAbstractEntity } from '@/common/entities/base-abstract.entity';

import { ParkingTransactionType } from './parking-transaction-type.enum';
import { IParkingTransaction } from './parking-transaction.interface';
import { ParkingSpotEntity } from '../parking-spot/parking-spot.entity';
import { VehicleEntity } from '../vehicle/vehicle.entity';

@Entity('parking_transactions')
export class ParkingTransactionEntity
  extends BaseAbstractEntity
  implements IParkingTransaction
{
  @ManyToOne(() => VehicleEntity, (vehicle) => vehicle.parkingTransactions)
  vehicle: VehicleEntity;

  @ManyToOne(() => ParkingSpotEntity, (parkingSpot) => parkingSpot.transactions)
  spot: ParkingSpotEntity;

  @Column({ type: 'enum', enum: ParkingTransactionType })
  type: ParkingTransactionType;

  @Column({ type: 'decimal', nullable: true })
  value: number;

  @ManyToOne(() => ParkingTransactionEntity)
  parentTransaction: ParkingTransactionEntity;
}
