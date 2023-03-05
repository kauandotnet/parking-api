import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import { CustomerEntity } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
  ) {}

  create(createCustomer: CreateCustomerDto): Promise<CustomerDto> {
    const customer = this.customerRepository.create(createCustomer);

    return this.customerRepository.save(customer);
  }

  async find(customerId: string): Promise<CustomerEntity> {
    const customer = await this.customerRepository.findOne({
      where: { id: customerId },
      relations: ['vehicles'],
    });

    if (!customer) throw new NotFoundException('User not found');

    return customer;
  }

  async listAll(): Promise<CustomerDto[]> {
    const customers = await this.customerRepository.find();

    return plainToInstance(CustomerDto, customers);
  }
}
