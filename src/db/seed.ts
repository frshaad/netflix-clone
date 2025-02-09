/* eslint-disable @typescript-eslint/no-explicit-any */
import { exit } from 'node:process';

import db from '@/db';
import * as schema from '@/db/schema';

import { movieData, showData } from './seed.data';

export const TABLES_TO_CLEAR = [
  schema.watchlistItem, // Must be cleared first
  schema.watchlist,
  schema.movie,
  schema.show,
];

async function clearTable(table: any) {
  try {
    /* eslint-disable-next-line drizzle/enforce-delete-with-where */
    await db.delete(table);
    console.info(`✓ Cleared ${table.name}`);
  } catch (error) {
    console.error(`✗ Failed to clear ${table.name}:`, error);
    throw error;
  }
}

async function seedTable<T>(table: any, data: T[], tableName: string) {
  try {
    await db.insert(table).values(data);
    console.info(`✔️ Seeded ${tableName} (${data.length} records)`);
  } catch (error) {
    console.error(`✖️ Failed to seed ${tableName}:`, error);
    throw error;
  }
}

async function clearTables() {
  console.info('🧹 Clearing existing data...');
  for (const table of TABLES_TO_CLEAR) {
    await clearTable(table);
  }
}

async function seedTables() {
  console.info('🌱 Seeding tables...');
  await seedTable(schema.movie, movieData, 'movie');
  await seedTable(schema.show, showData, 'tv shows');
}

export async function seed() {
  try {
    console.info('📦 Starting database seed...');
    await clearTables();
    await seedTables();
    console.info('✅ Seeding completed successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    exit(1);
  }
}

// eslint-disable-next-line unicorn/prefer-top-level-await
seed();
