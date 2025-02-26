import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const port = Number(process.env.DB_PORT) || 5432;

const pool = new Pool({
  host: `${process.env.DB_URL}`,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DB_NAME}`,
  port,
});

export const db = drizzle(pool);