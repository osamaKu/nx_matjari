import { Module } from '@nestjs/common'
import { ApiDataService } from './services/data.service'

@Module({
  controllers: [],
  providers: [ApiDataService],
  exports: [ApiDataService],
})
export class ApiDataModule {}
