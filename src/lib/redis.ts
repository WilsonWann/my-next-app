import Redis from 'ioredis';
import 'dotenv/config'

const redisUrl = process.env.KV_URL!
const token = process.env.KV_REST_API_TOKEN!

const redis = new Redis(redisUrl, {
  password: token,
  tls: {}
});

export default redis
