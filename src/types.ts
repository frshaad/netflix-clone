import type { movie, show } from './db/schema';

export type MediaItem = {
  id: number;
  mediaType: 'movie' | 'show';
  createdAt: Date;
  media: typeof movie.$inferSelect | typeof show.$inferSelect;
};
