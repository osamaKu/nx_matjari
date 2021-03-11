import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('app.name')
  }
  get env(): string {
    return this.configService.get<string>('app.env')
  }
  get host(): string {
    return this.configService.get<string>('app.host')
  }
  get port(): number {
    return Number(this.configService.get<number>('app.port'))
  }
  get prefix(): string {
    return this.configService.get<string>('app.prefix')
  }

  get url(): string {
    return this.configService.get<string>('app.host') + ':' + this.configService.get<number>('app.port')
  }

  get graphqlPath(): string {
    return (
      this.configService.get<string>('app.host') +
      ':' +
      this.configService.get<number>('app.port') +
      '/' +
      this.configService.get<string>('app.graphqlPort')
    )
  }

  get jwtSecret(): string {
    return this.configService.get<string>('app.jwtSecret')
  }
}
