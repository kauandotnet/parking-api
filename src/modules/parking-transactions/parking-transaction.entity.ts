import { BaseAbstractEntity } from '../../common/entities/base-abstract.entity';
import { ParkingSpotEntity } from '../../modules/parking-spot/parking-spot.entity';
import { VehicleEntity } from '../../modules/vehicle/vehicle.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { ParkingTransactionType } from './parking-transaction-type.enum';

@Entity('parking_transactions')
export class ParkingTransactionEntity extends BaseAbstractEntity {
  @ManyToOne(() => VehicleEntity, (vehicle) => vehicle.parkingTransactions)
  vehicle: VehicleEntity;

  @ManyToOne(() => ParkingSpotEntity, (parkingSpot) => parkingSpot.transactions)
  spot: ParkingSpotEntity;

  @Column({ type: 'enum', enum: ParkingTransactionType })
  type: ParkingTransactionType;
}
