import {
  index,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

const showStatusEnum = pgEnum('show_status', [
  'Ongoing',
  'Completed',
  'Cancelled',
]);
export type ShowStatus = (typeof showStatusEnum.enumValues)[number];

export const show = pgTable(
  'show',
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
    seasons: integer().notNull(), // Show-specific: number of seasons
    episodeCount: integer().notNull(), // Show-specific: number of episodes
    status: showStatusEnum().notNull(), // e.g., 'Ongoing', 'Completed', 'Cancelled'
  },
  (table) => ({
    titleIdx: index('show_title_idx').on(table.title),
    releaseYearIdx: index('show_release_year_idx').on(table.releaseYear),
  })
);

// export const showsRelations = relations(show, ({ many }) => ({
//   watchlists: many(watchlist),
// }));
