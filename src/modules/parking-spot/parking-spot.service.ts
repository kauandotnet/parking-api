import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ParkingFloorEntity } from '@/modules/parking-floor/parking-floor.entity';

import { ParkingSpotEntity } from './parking-spot.entity';

@Injectable()
export class ParkingSpotService {
  constructor(
    @InjectRepository(ParkingSpotEntity)
    private parkingSpotRepository: Repository<ParkingSpotEntity>,
  ) {}

  generateSpots({ label, capacity: length, ...floor }: ParkingFloorEntity) {
    const spotsArray = Array.from({ length }).map((_item, i: number) => ({
      name: `${label}-${String(++i).padStart(2, '0')}`,
      floor,
    }));

    const parseSpots = this.parkingSpotRepository.create(spotsArray);

    return this.parkingSpotRepository.save(parseSpots);
  }
}
