import { Module } from '@nestjs/common'
import { ApiDataModule } from '@v2matjari/api/data'
import { AuthResolver } from './resolvers/auth.resolver'
import { AuthService } from './services/auth.service'

@Module({
  imports: [ApiDataModule],
  controllers: [],
  providers: [AuthResolver, AuthService],
  exports: [],
})
export class ApiAuthModule {}
