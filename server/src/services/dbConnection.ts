import {drizzle} from 'drizzle-orm/node-postgres'

import pg from 'pg'
// import { Client } from "pg";

// const client = new Client({
//   connectionString: "postgres://postgres:User@1234@host:port/db",
// });

// or
const client = new pg.Client({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: 'User@1234',
  database: 'cmstock',
})

// ;(async () => {
//   await client
//     .connect()
//     .then(() => console.log('db connected'))
//     .catch((err) => console.log(err))
// })()

export const connectpg = async () => {
  // return new Promise<void>((resolve, reject) => {
  client
    .connect()
    .then(() => {
      console.log('Database connection successful')
      // resolve()
    })
    .catch((error: Error) => {
      console.error('Database connection error', error)
      // reject(error)
    })
  // })
}

export const db = drizzle(client)
