import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { CustomConfigModule } from './custom-config/custom-config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, AuthModule, CustomConfigModule],
  exports: [DatabaseModule, AuthModule, CustomConfigModule],
})
export class CoreModule {}
