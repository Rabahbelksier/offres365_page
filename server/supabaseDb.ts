import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

if (!process.env.SUPABASE_DATABASE_URL) {
  throw new Error("SUPABASE_DATABASE_URL must be set for user operations.");
}

export const supabasePool = new Pool({
  connectionString: process.env.SUPABASE_DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export const supabaseDb = drizzle(supabasePool, { schema });
