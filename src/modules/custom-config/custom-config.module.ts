import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { serverConfig } from '@config/server.config';
import { typeOrmConfig } from '@config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [serverConfig, typeOrmConfig],
    }),
  ],
})
export class CustomConfigModule {}
