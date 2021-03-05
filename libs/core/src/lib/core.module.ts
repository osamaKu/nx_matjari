import { Module } from '@nestjs/common'
import { AppConfigModule } from './config/app/config.module'

@Module({
  imports: [AppConfigModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class CoreModule {}
