import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingSpotEntity } from './parking-spot.entity';
import { ParkingSpotService } from './parking-spot.service';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingSpotEntity])],
  providers: [ParkingSpotService],
  exports: [ParkingSpotService],
})
export class ParkingSpotModule {}
