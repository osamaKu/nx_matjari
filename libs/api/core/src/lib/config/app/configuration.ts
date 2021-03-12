import { registerAs } from '@nestjs/config'

export default registerAs('app', () => ({
  env: process.env.APP_ENV,
  name: process.env.APP_NAME,
  host: process.env.HOST,
  port: process.env.PORT,
  prefix: process.env.PREFIX,
  graphqlPort: process.env.GRAPHQL_PORT,
}))
