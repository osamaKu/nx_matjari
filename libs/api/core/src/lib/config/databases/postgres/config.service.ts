import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class MongoDBConfigService {
  constructor(private configService: ConfigService) {}

  get mongodbAtlasUri(): string {
    return this.configService.get<string>('mongodb.mongodbAtlasUri')
  }
  get mongodbLocalUri(): string {
    return this.configService.get<string>('mongodb.mongodbLocalUri')
  }
  get mongodbConfig() {
    return {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    }
  }
}
