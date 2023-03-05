import { Entity, Column, OneToMany } from 'typeorm';

import { BaseAbstractEntity } from '@/common/entities/base-abstract.entity';

import { VehicleRates } from './interfaces/vehicle-rates.type';
import { ParkingFloorEntity } from '../parking-floor/parking-floor.entity';

@Entity('parkings')
export class ParkingEntity extends BaseAbstractEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  state: string;

  @Column({ type: 'text' })
  country: string;

  @OneToMany(() => ParkingFloorEntity, (parkingFloor) => parkingFloor.parking, {
    cascade: true,
  })
  floors: ParkingFloorEntity[];

  @Column({ type: 'text' })
  city: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'text' })
  phone: string;

  @Column({ type: 'numeric', default: 0 })
  defaultRate: number;

  @Column({ type: 'jsonb', nullable: true })
  rates: VehicleRates;
}
