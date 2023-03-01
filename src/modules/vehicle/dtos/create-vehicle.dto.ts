import { CustomerEntity } from '@modules/customer/customer.entity';
import { PickType } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { VehicleDto } from './vehicle.dto';

export class CreateVehicleDto extends PickType(VehicleDto, [
  'type',
  'plate',
  'color',
]) {
  @IsUUID()
  customer: Partial<CustomerEntity>;
}
