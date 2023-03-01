import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingTransactionEntity } from './parking-transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingTransactionEntity])],
})
export class ParkingTransactionModule {}
