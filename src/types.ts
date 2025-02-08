import type { mediaTypeEnum, movie, show } from './db/schema';

export type MediaType = (typeof mediaTypeEnum.enumValues)[number];

export type MediaItem = {
  id: number;
  mediaType: MediaType;
  createdAt: Date;
  media: typeof movie.$inferSelect | typeof show.$inferSelect;
};
