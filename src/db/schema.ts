import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  varchar,
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
  userId: text().notNull(),
  movieId: integer().references(() => movies.id),
});

export const accounts = pgTable('account', {
  id: text().primaryKey(),
  userId: text().notNull(),
  type: varchar({ length: 255 }).notNull(),
  provider: varchar({ length: 255 }).notNull(),
  providerAccountId: varchar({ length: 255 }).notNull(),
  refreshToken: text(),
  accessToken: text(),
  expiresAt: integer(),
  tokenType: varchar({ length: 255 }),
  scope: varchar({ length: 255 }),
  idToken: text(),
  sessionState: varchar({ length: 255 }),
  refreshTokenExpiresIn: integer(),
});

export const sessions = pgTable('session', {
  id: text().primaryKey(),
  sessionToken: text().notNull().unique(),
  userId: text().notNull(),
  expires: timestamp().notNull(),
});

export const users = pgTable('user', {
  id: text().primaryKey(),
  name: text(),
  email: text().unique(),
  emailVerified: timestamp(),
  image: text(),
});

export const verificationTokens = pgTable(
  'verification_token',
  {
    identifier: text().notNull(),
    token: text().notNull().unique(),
    expires: timestamp().notNull(),
  },
  (vt) => ({
    identifierTokenIndex: uniqueIndex('identifier_token_idx').on(
      vt.identifier,
      vt.token
    ),
  })
);

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

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  sessions: many(sessions),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));
