import * as Joi from '@hapi/joi'
import { Module } from '@nestjs/common'
import configuration from './configuration'
import { MongoDBConfigService } from './config.service'
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
        MONGODB_LOCAL_URI: Joi.string(),
        MONGODB_ATLAS_URI: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, MongoDBConfigService],
  exports: [ConfigService, MongoDBConfigService],
})
export class MongoDBConfigModule {}
