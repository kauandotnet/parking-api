import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';

import { BaseAbstractEntity } from '@/common/entities/base-abstract.entity';
import { PasswordTransformer } from '@/common/transformer/password.transformer';

@Entity('users')
export class UserEntity extends BaseAbstractEntity {
  @Column({ type: 'text' })
  fullName: string;

  @Column({ unique: true, type: 'text' })
  email: string;

  @Column({
    select: false,
    name: 'password',
    transformer: new PasswordTransformer(),
  })
  @Exclude()
  password: string;

  @Column({ type: 'text', nullable: true, default: null })
  salt!: string;
}
