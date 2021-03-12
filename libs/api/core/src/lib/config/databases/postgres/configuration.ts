import { registerAs } from '@nestjs/config'

export default registerAs('mongodb', () => ({
  mongodbAtlasUri: process.env.MONGODB_ATLAS_URI,
  mongodbLocalUri: process.env.MONGODB_LOCAL_URI,
}))
