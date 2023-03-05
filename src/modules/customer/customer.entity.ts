import { Entity, Column, OneToMany } from 'typeorm';

import { BaseAbstractEntity } from '@/common/entities/base-abstract.entity';

import { VehicleEntity } from '../vehicle/vehicle.entity';

@Entity('customers')
export class CustomerEntity extends BaseAbstractEntity {
  @Column({ type: 'text' })
  fullName: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @OneToMany(() => VehicleEntity, (vehicle) => vehicle.customer)
  vehicles: VehicleEntity[];
}
