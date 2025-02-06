import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const users = pgTable('users', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  createdAt: timestamp({ mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp({ mode: 'string' }).notNull().defaultNow(),
});

export const usersInsertSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
