import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

import { watchlistItem } from '@/db/schema';

export const movie = pgTable('movie', {
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
  duration: integer().notNull(), // Movie-specific: duration in minutes
});

export const movieRelations = relations(movie, ({ many }) => ({
  watchlistItems: many(watchlistItem),
}));
