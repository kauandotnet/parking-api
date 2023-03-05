import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';

import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerDto } from './dto/customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomer: CreateCustomerDto): Promise<CustomerDto> {
    return this.customerService.create(createCustomer);
  }

  @Get()
  listAll(): Promise<CustomerDto[]> {
    return this.customerService.listAll();
  }

  @Get(':id')
  find(@Param('id', ParseUUIDPipe) customerId: string): Promise<CustomerDto> {
    return this.customerService.find(customerId);
  }
}
