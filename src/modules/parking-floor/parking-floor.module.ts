import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ParkingFloorEntity } from './parking-floor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingFloorEntity])],
})
export class ParkingFloorModule {}
