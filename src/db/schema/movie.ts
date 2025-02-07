import {
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

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
    releaseYear: integer().notNull(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp().defaultNow().notNull(),
    duration: integer().notNull(), // Movie-specific: duration in minutes
  },
  (table) => ({
    titleIdx: index('movie_title_idx').on(table.title),
    releaseYearIdx: index('movie_release_year_idx').on(table.releaseYear),
  })
);

// export const movieRelations = relations(movie, ({ many }) => ({
//   watchlists: many(watchlist),
// }));
