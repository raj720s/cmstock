import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import 'dotenv/config';
const connectionString = process.env.DB_URL;
const sql = postgres(connectionString, { max: 1 });
const db = drizzle(sql);
await migrate(db, { migrationsFolder: './drizzle' });
await sql.end();
