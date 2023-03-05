import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ParkingModule } from '@/modules/parking/parking.module';

import { ParkingTransactionsController } from './parking-transaction.controller';
import { ParkingTransactionEntity } from './parking-transaction.entity';
import { ParkingTransactionService } from './parking-transaction.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ParkingTransactionEntity]),
    ParkingModule,
  ],
  controllers: [ParkingTransactionsController],
  providers: [ParkingTransactionService],
})
export class ParkingTransactionModule {}
