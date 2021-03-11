import * as Joi from '@hapi/joi'
import { Module } from '@nestjs/common'
import configuration from './configuration'
import { AppConfigService } from './config.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_NAME: Joi.string().default('MyApp'),
        APP_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
        HOST: Joi.string().default('http://localhost'),
        PORT: Joi.number().default(3333),
        PREFIX: Joi.string().default('api'),
        GRAPHQL_PORT: Joi.string().default('graphql'),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
