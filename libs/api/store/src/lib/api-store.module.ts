import { Module } from '@nestjs/common'
import { ApiDataModule } from '@v2matjari/api/data'
import { ApiStoreResolver } from './resolvers/store.resolver'
import { ApiStoreService } from './services/store.service'

@Module({
  imports: [ApiDataModule],
  controllers: [],
  providers: [ApiStoreResolver, ApiStoreService],
  exports: [],
})
export class ApiStoreModule {}
