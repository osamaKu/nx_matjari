/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppConfigService } from '@v2matjari/core'

import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const appConfig: AppConfigService = app.get('AppConfigService')

  const { prefix } = appConfig
  const { url } = appConfig
  const { port } = appConfig
  const { env } = appConfig

  app.setGlobalPrefix(prefix)

  await app.listen(port, () => {
    Logger.log('Listening at ' + url + '/' + prefix + ' in ' + env + ' mode')
  })
}

bootstrap()
