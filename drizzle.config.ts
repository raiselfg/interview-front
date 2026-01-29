import 'dotenv/config';

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    // Migrations should use the direct connection (port 5432)
    // because Transaction Pooler (6543) has limitations for DDL commands
    url: process.env.DIRECT_URL || process.env.DATABASE_URL!,
  },
});
