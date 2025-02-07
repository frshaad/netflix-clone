import { relations } from 'drizzle-orm';
import {
  index,
  integer,
  pgEnum,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

import { movie } from './movie';
import { show } from './show';

const mediaTypeEnum = pgEnum('media_type', ['movie', 'show']);
export type MediaType = (typeof mediaTypeEnum.enumValues)[number];

export const watchlist = pgTable(
  'watchlist',
  {
    id: serial().primaryKey(),
    userId: varchar({ length: 255 }).notNull(),
    mediaId: integer().notNull(),
    mediaType: mediaTypeEnum().notNull(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp().defaultNow().notNull(),
  },
  (table) => ({
    userMediaIdx: index('user_media_idx').on(
      table.userId,
      table.mediaId,
      table.mediaType
    ),
    mediaIdx: index('media_idx').on(table.mediaId),
  })
);

export const watchlistRelations = relations(watchlist, ({ many }) => ({
  movies: many(movie),
  shows: many(show),
}));
