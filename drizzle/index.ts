import 'dotenv/config';

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

/**
 * Cache the database connection in development to prevent hot reload from creating new connections.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

// Use DATABASE_URL for the app (Transaction Pooler - port 6543)
const connectionString = process.env.DATABASE_URL!;

// Disable prefetch/prepared statements as it is not supported for "Transaction" pool mode in Supavisor
// also limit the max number of connections in the pool
const conn =
  globalForDb.conn ??
  postgres(connectionString, {
    prepare: false,
    max: 10, // Adjust based on your Supabase plan and number of server instances
  });

if (process.env.NODE_ENV !== 'production') globalForDb.conn = conn;

export const db = drizzle(conn, { schema });
