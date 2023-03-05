import { Body, Controller, Post } from '@nestjs/common';

import { CreateParkingTransactionDto } from './dto/create-parking-transactions.dto';
import { ParkingTransactionService } from './parking-transaction.service';

@Controller('parking-transactions')
export class ParkingTransactionsController {
  constructor(private parkingTransactionService: ParkingTransactionService) {}

  @Post()
  create(@Body() createParkingTransaction: CreateParkingTransactionDto) {
    return this.parkingTransactionService.saveTransaction(
      createParkingTransaction,
    );
  }
}
