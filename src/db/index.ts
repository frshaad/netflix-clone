import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import env from '@/lib/env';

import * as schema from './schema';

export const client = postgres(env.DATABASE_URL, {
  max: env.DB_MIGRATING ? 1 : undefined,
});
const database = drizzle({ client, schema, casing: 'snake_case' });
export default database;
