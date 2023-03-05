import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { hoursDifference } from '@/common/utils/hoursDifference';
import { ParkingService } from '@/modules/parking/parking.service';

import { CreateParkingTransactionDto } from './dto/create-parking-transactions.dto';
import { ParkingTransactionType } from './parking-transaction-type.enum';
import { ParkingTransactionEntity } from './parking-transaction.entity';

@Injectable()
export class ParkingTransactionService {
  constructor(
    @InjectRepository(ParkingTransactionEntity)
    private parkingTransactionRepository: Repository<ParkingTransactionEntity>,
    private parkingService: ParkingService,
  ) {}

  async saveTransaction(createParkingTransaction: CreateParkingTransactionDto) {
    const { vehicleId, spotId } = createParkingTransaction;

    const getLatestTransaction =
      await this.parkingTransactionRepository.findOne({
        where: { spot: { id: spotId } },
        select: ['id', 'createdAt', 'type'],
        order: { createdAt: 'DESC' },
        relations: ['vehicle'],
      });

    const type =
      getLatestTransaction?.type === ParkingTransactionType.ARRIVAL
        ? ParkingTransactionType.DEPARTURE
        : ParkingTransactionType.ARRIVAL;

    const transaction = this.parkingTransactionRepository.create({
      vehicle: { id: vehicleId },
      spot: { id: spotId },
      type,
      parentTransaction: getLatestTransaction,
    });

    if (transaction.type === ParkingTransactionType.DEPARTURE) {
      const rates = await this.parkingService.getRatesBySpot(spotId);

      const durationInHours = hoursDifference(
        new Date(),
        getLatestTransaction.createdAt,
      );

      const {
        vehicle: { type: vehicleType },
      } = getLatestTransaction;

      const vehicleTypeRate = rates[vehicleType];

      const transactionValue =
        Number(durationInHours) * Number(vehicleTypeRate);

      transaction.value = transactionValue;
    }

    return this.parkingTransactionRepository.save(transaction);
  }
}
