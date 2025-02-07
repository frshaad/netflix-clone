import { relations } from 'drizzle-orm';
import {
  integer,
  pgEnum,
  pgTable,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

import { movie, show } from '@/db/schema';

export const mediaTypeEnum = pgEnum('media_type', ['movie', 'show']);
export type MediaType = (typeof mediaTypeEnum.enumValues)[number];

export const watchlist = pgTable('watchlist', {
  userId: varchar({ length: 255 }).primaryKey(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

export const watchlistItem = pgTable('watchlist_item', {
  watchlistUserId: varchar({ length: 255 })
    .notNull()
    .references(() => watchlist.userId),
  mediaId: integer().notNull(),
  mediaType: mediaTypeEnum().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});

export const watchlistRelations = relations(watchlist, ({ many }) => ({
  items: many(watchlistItem),
}));

export const watchlistItemRelations = relations(watchlistItem, ({ one }) => ({
  watchlist: one(watchlist, {
    fields: [watchlistItem.watchlistUserId],
    references: [watchlist.userId],
  }),
  movie: one(movie, {
    fields: [watchlistItem.mediaId],
    references: [movie.id],
    relationName: 'movieWatchlistItems',
  }),
  show: one(show, {
    fields: [watchlistItem.mediaId],
    references: [show.id],
    relationName: 'showWatchlistItems',
  }),
}));
