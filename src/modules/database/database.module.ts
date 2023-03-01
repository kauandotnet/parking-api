import { typeOrmConfig } from '@config/typeorm.config';
import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [typeOrmConfig.KEY],
      useFactory: async (config: ConfigType<typeof typeOrmConfig>) => config,
    }),
  ],
})
export class DatabaseModule {}
