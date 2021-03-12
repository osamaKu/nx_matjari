import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { ApiDataModule } from '@v2matjari/api/data'
import { AuthResolver } from './resolvers/auth.resolver'
import { AuthService } from './services/auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GqlAuthGuard } from './guards/gql-auth.guard'

@Module({
  imports: [
    ApiDataModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('app.jwtSecret'),
        // signOptions: { expiresIn: '10000s' },
      }),
    }),
  ],
  controllers: [],
  providers: [AuthResolver, AuthService, JwtStrategy, GqlAuthGuard],
  exports: [],
})
export class ApiAuthModule {}
