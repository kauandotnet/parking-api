import { Module } from '@nestjs/common';

import { CustomConfigModule } from './modules/custom-config/custom-config.module';
import { CustomerModule } from './modules/customer/customer.module';
import { DatabaseModule } from './modules/database/database.module';
import { ParkingModule } from './modules/parking/parking.module';
import { ParkingFloorModule } from './modules/parking-floor/parking-floor.module';
import { ParkingSpotModule } from './modules/parking-spot/parking-spot.module';
import { ParkingTransactionModule } from './modules/parking-transactions/parking-transaction.module';
import { UserModule } from './modules/user/user.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';

@Module({
  imports: [
    CustomConfigModule,
    DatabaseModule,
    UserModule,
    VehicleModule,
    ParkingModule,
    ParkingFloorModule,
    ParkingSpotModule,
    ParkingTransactionModule,
    CustomerModule,
  ],
})
export class AppModule {}
