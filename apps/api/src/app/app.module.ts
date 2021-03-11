import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { CoreModule } from '@v2matjari/api/core'
import { ApiStoreModule } from '@v2matjari/api/store'
import { ApiProductModule } from '@v2matjari/api/product'

@Module({
  imports: [CoreModule, ApiStoreModule, ApiProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
