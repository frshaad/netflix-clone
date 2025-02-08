import type { mediaTypeEnum, movie, show } from './db/schema';

export type MediaType = (typeof mediaTypeEnum.enumValues)[number];

export type MediaItem = {
  id: number;
  mediaType: MediaType;
  createdAt: Date;
  media: typeof movie.$inferSelect | typeof show.$inferSelect;
};

export function isMovie(
  media: typeof movie.$inferSelect | typeof show.$inferSelect
): media is typeof movie.$inferSelect {
  return 'duration' in media;
}

export function isShow(
  media: typeof movie.$inferSelect | typeof show.$inferSelect
): media is typeof show.$inferSelect {
  return 'seasons' in media;
}
