import { PickType } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { CustomerDto } from './customer.dto';

export class CreateCustomerDto extends PickType(CustomerDto, [
  'fullName',
  'email',
]) {
  @IsString()
  @MinLength(1)
  @MaxLength(60)
  fullName: string;

  @IsEmail()
  email: string;
}
