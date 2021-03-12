import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppConfigModule } from './config/app/config.module'
import { CoreResolver } from './core.resolver'

@Module({
  imports: [
    AppConfigModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
    }),
  ],
  controllers: [],
  providers: [CoreResolver],
  exports: [],
})
export class CoreModule {}
