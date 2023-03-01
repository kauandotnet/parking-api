import { BaseAbstractEntity } from '../../common/entities/base-abstract.entity';
import { ParkingFloorEntity } from '../../modules/parking-floor/parking-floor.entity';
import { Column, Entity, OneToMany } from 'typeorm';

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
}
