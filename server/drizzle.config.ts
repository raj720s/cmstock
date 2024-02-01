import type {Config} from 'drizzle-kit'
import 'dotenv/config'
export default {
  schema: '../dist/src/schema/schema.js',
  out: './drizzle',
  driver: 'pg',
  breakpoints: true,
  dbCredentials: {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
  },
} satisfies Config

// https://orm.drizzle.team/docs/migrations
