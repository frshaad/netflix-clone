import { relations } from 'drizzle-orm';
import {
  index,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const mediaEnum = pgEnum('media_category', ['recent', 'movie', 'show']);
export type MediaCategory = (typeof mediaEnum.enumValues)[number];

export const movie = pgTable(
  'movie',
  {
    id: serial().primaryKey(),
    title: varchar({ length: 255 }).notNull(),
    overview: text().notNull(),
    imageUrl: varchar({ length: 255 }).notNull(),
    videoUrl: varchar({ length: 255 }).notNull(),
    youtubeUrl: varchar({ length: 255 }).notNull(),
    ageRating: integer().notNull(),
    duration: integer().notNull(),
    releaseYear: integer().notNull(),
    category: mediaEnum().notNull(),
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
    userId: varchar({ length: 255 }).notNull(),
    movieId: integer()
      .references(() => movie.id, { onDelete: 'cascade' })
      .notNull(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp().defaultNow().notNull(),
  },
  (table) => ({
    userMovieIdx: index('user_movie_idx').on(table.userId, table.movieId),
    movieIdx: index('movie_idx').on(table.movieId),
  })
);

// Relations
export const moviesRelations = relations(movie, ({ many }) => ({
  watchlistItems: many(watchlist),
}));

export const watchlistRelations = relations(watchlist, ({ one }) => ({
  movie: one(movie, {
    fields: [watchlist.movieId],
    references: [movie.id],
  }),
}));
