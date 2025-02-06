import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export const movies = pgTable('movie', {
  id: serial().primaryKey(),
  imageString: text().notNull(),
  title: text().notNull(),
  age: integer().notNull(),
  duration: integer().notNull(),
  overview: text().notNull(),
  release: integer().notNull(),
  videoSource: text().notNull(),
  category: text().notNull(),
  youtubeString: text().notNull(),
  createdAt: timestamp().defaultNow(),
});

export const watchlist = pgTable('watchlist', {
  id: uuid().primaryKey().defaultRandom(),
  userId: text().notNull(), // This will store Clerk user ID
  movieId: integer().references(() => movies.id),
});

// Relations
export const moviesRelations = relations(movies, ({ many }) => ({
  watchlist: many(watchlist),
}));

export const watchlistRelations = relations(watchlist, ({ one }) => ({
  movie: one(movies, {
    fields: [watchlist.movieId],
    references: [movies.id],
  }),
}));
