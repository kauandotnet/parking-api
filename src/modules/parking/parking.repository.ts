import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ParkingEntity } from './parking.entity';
import { ParkingSpotStatus } from '../parking-spot/parking-spot-status.enum';

@Injectable()
export class ParkingRepository extends Repository<ParkingEntity> {
  constructor(private dataSource: DataSource) {
    super(ParkingEntity, dataSource.createEntityManager());
  }

  findOneAndCount(parkingId: string): Promise<ParkingEntity | undefined> {
    return this.createQueryBuilder('parking')
      .where('parking.id =:parkingId', { parkingId })
      .leftJoinAndSelect('parking.floors', 'floors')
      .loadRelationCountAndMap(
        'floors.availableSpots',
        'floors.spots',
        'spot',
        (qb) =>
          qb.where('spot.status =:status', {
            status: ParkingSpotStatus.AVAILABLE,
          }),
      )
      .getOne();
  }
}
