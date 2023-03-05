import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { PartialFindOptionsWhere } from '@/common/interfaces/partial-find-options-where.type';
import { ParkingSpotService } from '@/modules/parking-spot/parking-spot.service';
import { VehicleType } from '@/modules/vehicle/vehicle-type.enum';

import { CreateParkingDto } from './dtos/create-parking.dto';
import { ParkingDto } from './dtos/parking.dto';
import { UpdateParkingDto } from './dtos/update-parking.dto';
import { VehicleRates } from './interfaces/vehicle-rates.type';
import { ParkingEntity } from './parking.entity';
import { ParkingRepository } from './parking.repository';
import { ParkingSpotStatus } from '../parking-spot/parking-spot-status.enum';

@Injectable()
export class ParkingService {
  constructor(
    private parkingRepository: ParkingRepository,
    private parkingSpotService: ParkingSpotService,
  ) {}

  async findAll(): Promise<ParkingDto[]> {
    const parkings = await this.parkingRepository.find();

    return plainToInstance(ParkingDto, parkings);
  }

  async find(parkingId: string) {
    const parking = await this.parkingRepository.findOneAndCount(parkingId);

    if (!parking) throw new NotFoundException('Parking not found');

    return parking;
  }

  async findSpots(parkingId: string, spotStatus?: ParkingSpotStatus) {
    const condition: PartialFindOptionsWhere<ParkingEntity> = {
      id: parkingId,
    };

    if (spotStatus) {
      Object.assign(condition, {
        floors: { spots: { status: spotStatus } },
      } as PartialFindOptionsWhere<ParkingEntity>);
    }

    const getSpots = await this.parkingRepository.findOne({
      where: condition,
      relations: ['floors', 'floors.spots'],
    });

    if (!getSpots) throw new NotFoundException('No spots found');

    const { floors } = getSpots;

    return floors;
  }

  async create(createParking: CreateParkingDto): Promise<ParkingDto> {
    const parseParking = this.parkingRepository.create(createParking);

    const parking = await this.parkingRepository.save(parseParking);

    const spots = parking.floors.map((floor) =>
      this.parkingSpotService.generateSpots(floor),
    );

    await Promise.all(spots);

    return parking;
  }

  async update(
    parkingId: string,
    updateParking: UpdateParkingDto,
  ): Promise<ParkingDto> {
    await this.find(parkingId);

    const parseParking = this.parkingRepository.create(updateParking);

    return this.parkingRepository.save(parseParking);
  }

  async getRatesBySpot(spotId: string): Promise<VehicleRates> {
    const getParkingRates = await this.parkingRepository.findOne({
      where: { floors: { spots: { id: spotId } } },
    });

    if (!getParkingRates) throw new NotFoundException('Parking not found');

    const { rates, defaultRate } = getParkingRates;

    const parseParkingRates = Object.fromEntries(
      Object.entries(VehicleType).map(([key]) => [
        key,
        rates?.[key] ?? defaultRate,
      ]),
    );

    return parseParkingRates;
  }
}
