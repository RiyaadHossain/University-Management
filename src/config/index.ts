import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
}