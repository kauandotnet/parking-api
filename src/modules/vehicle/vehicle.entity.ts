import { BaseAbstractEntity } from '../../common/entities/base-abstract.entity';
import { CustomerEntity } from '../../modules/customer/customer.entity';
import { ParkingTransactionEntity } from '../../modules/parking-transactions/parking-transaction.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { VehicleType } from './vehicle-type.enum';
import { VehicleInterface } from './vehicle.interface';

@Entity('vehicles')
export class VehicleEntity
  extends BaseAbstractEntity
  implements VehicleInterface
{
  @Column({ unique: true, type: 'text' })
  plate: string;

  @Column({ type: 'enum', enum: VehicleType, default: VehicleType.CAR })
  type: VehicleType;

  @Column({ nullable: true, type: 'text' })
  color: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.vehicles)
  customer: CustomerEntity;

  @OneToMany(
    () => ParkingTransactionEntity,
    (parkingTransaction) => parkingTransaction.vehicle,
  )
  parkingTransactions: ParkingTransactionEntity[];
}
