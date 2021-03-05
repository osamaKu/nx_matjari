import { registerAs } from '@nestjs/config'

export default registerAs('redis', () => ({
  redis: process.env.REDIS,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  redisAuthPass: process.env.REDIS_AUTH_PASS,
}))
