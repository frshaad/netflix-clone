import { relations } from 'drizzle-orm';
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

import { movie, show } from './index';

export const mediaTypeEnum = pgEnum('media_type', ['movie', 'show']);

export const watchlist = pgTable('watchlist', {
  userId: varchar({ length: 255 }).primaryKey(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

export const watchlistItem = pgTable('watchlist_item', {
  id: serial().primaryKey(),
  watchlistUserId: varchar({ length: 255 })
    .notNull()
    .references(() => watchlist.userId, { onDelete: 'cascade' }),
  mediaId: integer().notNull(),
  mediaType: mediaTypeEnum().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
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
  }),
  show: one(show, {
    fields: [watchlistItem.mediaId],
    references: [show.id],
  }),
}));
