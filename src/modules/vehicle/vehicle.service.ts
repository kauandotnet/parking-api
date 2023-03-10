import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { VehicleTransactionDto } from './dtos/vehicle-transaction.dto';
import { VehicleDto } from './dtos/vehicle.dto';
import { VehicleEntity } from './vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(VehicleEntity)
    private vehicleRepository: Repository<VehicleEntity>,
  ) {}

  async getAll(): Promise<VehicleDto[]> {
    const vehicles = await this.vehicleRepository.find();
    return plainToInstance(VehicleDto, vehicles);
  }

  async create(createVehicle: CreateVehicleDto): Promise<VehicleDto> {
    const vehicleObj = this.vehicleRepository.create(createVehicle);
    try {
      return await this.vehicleRepository.save(vehicleObj);
    } catch (_error) {
      throw new BadRequestException('Impossible to create vehicle');
    }
  }

  async listTransactions(vehicleId: string): Promise<VehicleTransactionDto[]> {
    const vehicle = await this.vehicleRepository.findOne({
      where: { id: vehicleId },
      select: ['id'],
      relations: ['parkingTransactions'],
    });

    if (!vehicle) throw new BadRequestException();

    const { parkingTransactions } = vehicle;

    return plainToInstance(VehicleTransactionDto, parkingTransactions);
  }
}
