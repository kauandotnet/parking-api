import { BaseAbstractEntity } from '../../common/entities/base-abstract.entity';
import { ParkingFloorEntity } from '../../modules/parking-floor/parking-floor.entity';
import { ParkingTransactionEntity } from '../../modules/parking-transactions/parking-transaction.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('parking_spots')
export class ParkingSpotEntity extends BaseAbstractEntity {
  @Column({ type: 'text' })
  name: string;

  @ManyToOne(() => ParkingFloorEntity, (parkingFloor) => parkingFloor.spots)
  floor: ParkingFloorEntity;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @OneToMany(
    () => ParkingTransactionEntity,
    (parkingTransaction) => parkingTransaction.vehicle,
  )
  transactions: ParkingTransactionEntity[];
}
