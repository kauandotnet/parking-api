import { BaseAbstractEntity } from '../../common/entities/base-abstract.entity';
import { VehicleEntity } from '../../modules/vehicle/vehicle.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('customers')
export class CustomerEntity extends BaseAbstractEntity {
  @Column({ type: 'text' })
  fullName: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @OneToMany(() => VehicleEntity, (vehicle) => vehicle.customer)
  vehicles: VehicleEntity[];
}
