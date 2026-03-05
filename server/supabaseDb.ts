import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

let supabasePool: pg.Pool | null = null;
let supabaseDbInstance: NodePgDatabase<typeof schema> | null = null;

function getSupabaseDb(): NodePgDatabase<typeof schema> {
  if (!supabaseDbInstance) {
    const connectionString = process.env.SUPABASE_DATABASE_URL;
    if (!connectionString) {
      throw new Error("SUPABASE_DATABASE_URL must be set for user operations.");
    }
    supabasePool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
    });
    supabaseDbInstance = drizzle(supabasePool, { schema });
  }
  return supabaseDbInstance;
}

export { getSupabaseDb, supabasePool };
