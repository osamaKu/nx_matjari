import { Module } from '@nestjs/common'
import { StoreResolver } from './resolvers/store.resolver'
import { StoreService } from './services/store.service'

@Module({
  controllers: [],
  providers: [StoreResolver, StoreService],
  exports: [],
})
export class ApiStoreModule {}
