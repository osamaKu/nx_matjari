import * as Joi from '@hapi/joi'
import { Module } from '@nestjs/common'
import configuration from './configuration'
import { RedisDBConfigService } from './config.service'
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
        REDIS: Joi.string().default('://:'),
        REDIS_HOST: Joi.string().default('127.0.0.1'),
        REDIS_PORT: Joi.number().default(6379),
        REDIS_AUTH_PASS: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, RedisDBConfigService],
  exports: [ConfigService, RedisDBConfigService],
})
export class RedisDBConfigModule {}
