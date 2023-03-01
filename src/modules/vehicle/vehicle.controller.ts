import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicles')
export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  @Get()
  getAll() {
    return this.vehicleService.getAll();
  }

  @Post()
  create(@Body() createVehicle: CreateVehicleDto) {
    return this.vehicleService.create(createVehicle);
  }
}