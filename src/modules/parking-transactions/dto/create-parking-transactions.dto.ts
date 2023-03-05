import { IsUUID } from 'class-validator';

export class CreateParkingTransactionDto {
  @IsUUID()
  vehicleId: string;

  @IsUUID()
  spotId: string;
}
