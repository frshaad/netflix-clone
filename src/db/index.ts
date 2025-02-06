import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import env from '@/lib/env';

import * as schema from './schema';

const sql = neon(env.DATABASE_URL);
const database = drizzle(sql, { schema, casing: 'snake_case' });
export default database;
