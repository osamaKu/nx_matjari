import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { CoreModule } from '@v2matjari/api/core'
import { ApiDataModule } from '@v2matjari/api/data'

import { ApiStoreModule } from '@v2matjari/api/store'
import { ApiProductModule } from '@v2matjari/api/product'
import { ApiAuthModule } from '@v2matjari/api/auth'

@Module({
  imports: [CoreModule, ApiStoreModule, ApiProductModule, ApiDataModule, ApiAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
