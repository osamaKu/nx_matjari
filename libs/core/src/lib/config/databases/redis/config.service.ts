import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class RedisDBConfigService {
  constructor(private configService: ConfigService) {}

  get redis(): string {
    return this.configService.get<string>('redis.redis')
  }
  get redisHost(): string {
    return this.configService.get<string>('redis.redisHost')
  }
  get redisPort(): number {
    return Number(this.configService.get<number>('redis.redisPort'))
  }
  get redisAuthPass(): string {
    return this.configService.get<string>('redis.redisAuthPass')
  }
  get redisFullPath(): string {
    return this.redis + this.redisAuthPass + '@' + this.redisHost + ':' + this.redisPort
  }
}
