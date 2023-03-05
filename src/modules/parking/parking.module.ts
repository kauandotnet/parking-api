import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ParkingSpotModule } from '@/modules/parking-spot/parking-spot.module';

import { ParkingController } from './parking.controller';
import { ParkingEntity } from './parking.entity';
import { ParkingRepository } from './parking.repository';
import { ParkingService } from './parking.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingEntity]), ParkingSpotModule],
  controllers: [ParkingController],
  providers: [ParkingService, ParkingRepository],
  exports: [ParkingService],
})
export class ParkingModule {}
