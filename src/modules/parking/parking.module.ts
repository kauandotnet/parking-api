import { ParkingSpotModule } from '@modules/parking-spot/parking-spot.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingController } from './parking.controller';
import { ParkingEntity } from './parking.entity';
import { ParkingRepository } from './parking.repository';
import { ParkingService } from './parking.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingEntity]), ParkingSpotModule],
  controllers: [ParkingController],
  providers: [ParkingService, ParkingRepository],
})
export class ParkingModule {}
