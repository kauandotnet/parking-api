import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CreateParkingDto } from './dtos/create-parking.dto';
import { ParkingSpotStatusDto } from './dtos/parking-spot-status.dto';
import { UpdateParkingDto } from './dtos/update-parking.dto';
import { ParkingService } from './parking.service';

@Controller('parkings')
export class ParkingController {
  constructor(private parkingService: ParkingService) {}

  @Get()
  findAll() {
    return this.parkingService.findAll();
  }

  @Post()
  create(@Body() createParking: CreateParkingDto) {
    return this.parkingService.create(createParking);
  }

  @Get(':id')
  find(@Param('id', ParseUUIDPipe) parkingId: string) {
    return this.parkingService.find(parkingId);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) parkingId: string,
    @Body() updateParking: UpdateParkingDto,
  ) {
    return this.parkingService.update(parkingId, updateParking);
  }

  @Get(':id/spots')
  findSpots(
    @Param('id', ParseUUIDPipe) parkingId: string,
    @Query() { status }: ParkingSpotStatusDto,
  ) {
    return this.parkingService.findSpots(parkingId, status);
  }
}
