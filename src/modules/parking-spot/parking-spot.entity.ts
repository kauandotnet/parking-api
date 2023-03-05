import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseAbstractEntity } from '@/common/entities/base-abstract.entity';
import { ParkingFloorEntity } from '@/modules/parking-floor/parking-floor.entity';
import { ParkingTransactionEntity } from '@/modules/parking-transactions/parking-transaction.entity';

import { ParkingSpotStatus } from './parking-spot-status.enum';
import { ParkingSpotInterface } from './parking-spot.interface';

@Entity('parking_spots')
export class ParkingSpotEntity
  extends BaseAbstractEntity
  implements ParkingSpotInterface
{
  @Column({ type: 'text' })
  name: string;

  @ManyToOne(() => ParkingFloorEntity, (parkingFloor) => parkingFloor.spots)
  floor: ParkingFloorEntity;

  @Column({
    type: 'enum',
    enum: ParkingSpotStatus,
    default: ParkingSpotStatus.AVAILABLE,
  })
  status: ParkingSpotStatus;

  @OneToMany(
    () => ParkingTransactionEntity,
    (parkingTransaction) => parkingTransaction.vehicle,
  )
  transactions: ParkingTransactionEntity[];
}
