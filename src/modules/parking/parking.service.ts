import { ParkingSpotService } from '@modules/parking-spot/parking-spot.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateParkingDto } from './dtos/create-parking.dto';
import { ParkingDto } from './dtos/parking.dto';
import { UpdateParkingDto } from './dtos/update-parking.dto';
import { ParkingRepository } from './parking.repository';

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
}
