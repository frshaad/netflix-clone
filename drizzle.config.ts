import { defineConfig } from 'drizzle-kit';

import env from '@/lib/env';

export default defineConfig({
  schema: './src/db/schema',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  casing: 'snake_case',
  strict: true,
  verbose: true,
});
