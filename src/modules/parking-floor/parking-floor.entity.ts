import { BaseAbstractEntity } from '../../common/entities/base-abstract.entity';
import { ParkingSpotEntity } from '../../modules/parking-spot/parking-spot.entity';
import { ParkingEntity } from '../../modules/parking/parking.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('parking_floors')
export class ParkingFloorEntity extends BaseAbstractEntity {
  @Column({ type: 'text' })
  label: string;

  @Column({ type: 'numeric', default: 0 })
  capacity: number;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @OneToMany(() => ParkingSpotEntity, (parkingSpot) => parkingSpot.floor, {
    cascade: true,
  })
  spots: ParkingSpotEntity[];

  @ManyToOne(() => ParkingEntity, (parking) => parking.floors)
  parking: ParkingEntity;
}
