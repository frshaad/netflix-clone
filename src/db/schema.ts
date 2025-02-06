import { relations } from 'drizzle-orm';
import {
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export const movies = pgTable(
  'movies',
  {
    id: serial().primaryKey(),
    title: text().notNull(),
    overview: text().notNull(),
    imageUrl: text().notNull(),
    videoUrl: text().notNull(),
    youtubeUrl: text().notNull(),
    ageRating: integer().notNull(),
    duration: integer().notNull(),
    releaseYear: integer().notNull(),
    category: text().notNull(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp().defaultNow().notNull(),
  },
  (table) => ({
    titleIdx: index('title_idx').on(table.title),
    categoryIdx: index('category_idx').on(table.category),
    releaseYearIdx: index('release_year_idx').on(table.releaseYear),
  })
);

export const watchlist = pgTable(
  'watchlist',
  {
    id: uuid().primaryKey().defaultRandom(),
    userId: text().notNull(),
    movieId: integer()
      .references(() => movies.id, { onDelete: 'cascade' })
      .notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    userMovieIdx: index('user_movie_idx').on(table.userId, table.movieId),
    movieIdx: index('movie_idx').on(table.movieId),
  })
);

// Relations
export const moviesRelations = relations(movies, ({ many }) => ({
  watchlistItems: many(watchlist),
}));

export const watchlistRelations = relations(watchlist, ({ one }) => ({
  movie: one(movies, {
    fields: [watchlist.movieId],
    references: [movies.id],
  }),
}));
