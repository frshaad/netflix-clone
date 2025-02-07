import { relations } from 'drizzle-orm';
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

import { watchlistItem } from '@/db/schema';

export const showStatusEnum = pgEnum('show_status', [
  'Ongoing',
  'Completed',
  'Cancelled',
]);
export type ShowStatus = (typeof showStatusEnum.enumValues)[number];

export const show = pgTable('show', {
  id: serial().primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  overview: text().notNull(),
  imageUrl: varchar({ length: 255 }).notNull(),
  videoUrl: varchar({ length: 255 }).notNull(),
  youtubeUrl: varchar({ length: 255 }).notNull(),
  ageRating: integer().notNull(),
  releaseYear: integer().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
  seasons: integer().notNull(), // Show-specific: number of seasons
  episodeCount: integer().notNull(), // Show-specific: number of episodes
  status: showStatusEnum().notNull(), // e.g., 'Ongoing', 'Completed', 'Cancelled'
});

export const showRelations = relations(show, ({ many }) => ({
  watchlistItems: many(watchlistItem, { relationName: 'showWatchlistItems' }),
}));
