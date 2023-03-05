import { Exclude } from 'class-transformer';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { BaseAbstractEntityInterface } from '@/common/interfaces/base-abstract-entity.interface';

export abstract class BaseAbstractEntity
  implements BaseAbstractEntityInterface
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp', update: false, select: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', select: false })
  updatedAt: Date;

  @Exclude()
  @DeleteDateColumn({ type: 'timestamp', select: false })
  deletedAt: Date;
}
