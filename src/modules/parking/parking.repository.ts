import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ParkingEntity } from './parking.entity';

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
        (qb) => qb.where('spot.status =:status', { status: true }),
      )
      .getOne();
  }
}
