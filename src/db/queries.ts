import { cache } from 'react';

import { and, asc, desc, eq, like } from 'drizzle-orm';

import db from '@/db';
import { movie, show, watchlistItem } from '@/db/schema';
import { authenticateUser } from '@/lib/auth';
import type { MediaItem, MediaType } from '@/types';

type SortField = 'title' | 'releaseYear' | 'createdAt';
type SortOrder = 'asc' | 'desc';

type MediaListParameters = {
  type?: MediaType | 'all';
  sortBy?: SortField;
  order?: SortOrder;
  limit?: number;
  offset?: number;
  searchQuery?: string;
};

export async function getMediaList({
  type = 'all',
  sortBy = 'releaseYear',
  order = 'desc',
  limit = 50,
  offset = 0,
  searchQuery,
}: MediaListParameters) {
  const sortFunction = order === 'asc' ? asc : desc;
  const search = searchQuery ? `%${searchQuery}%` : undefined;

  const [movies, shows] = await Promise.all([
    type === 'show'
      ? Promise.resolve([])
      : db.query.movie.findMany({
          limit,
          offset,
          where: search ? like(movie.title, search) : undefined,
          orderBy: sortFunction(movie[sortBy]),
        }),

    type === 'movie'
      ? Promise.resolve([])
      : db.query.show.findMany({
          limit,
          offset,
          where: search ? like(show.title, search) : undefined,
          orderBy: sortFunction(show[sortBy]),
        }),
  ]);

  return {
    movies: type === 'show' ? [] : movies,
    shows: type === 'movie' ? [] : shows,
    metadata: { limit, offset, type, sortBy, order },
  };
}

export async function getUserWatchlist(): Promise<MediaItem[]> {
  const userId = await authenticateUser();

  const watchlistItems = await db.query.watchlistItem.findMany({
    where: eq(watchlistItem.watchlistUserId, userId),
    with: {
      movie: true,
      show: true,
    },
  });

  // Transform the results to include only the relevant media data based on mediaType
  const transformedItems = watchlistItems.map((item) => ({
    id: item.id,
    mediaType: item.mediaType,
    createdAt: item.createdAt,
    media: item.mediaType === 'movie' ? item.movie : item.show,
  }));

  return transformedItems;
}

export async function searchMedia(query: string) {
  const searchQuery = `%${query}%`;

  const [movies, shows] = await Promise.all([
    db.query.movie.findMany({
      where: like(movie.title, searchQuery),
    }),
    db.query.show.findMany({
      where: like(show.title, searchQuery),
    }),
  ]);

  return { movies, shows };
}

export const isInWatchlist = cache(
  async (mediaId: number, mediaType: MediaType) => {
    const userId = await authenticateUser();

    const existing = await db
      .select({ id: watchlistItem.id })
      .from(watchlistItem)
      .where(
        and(
          eq(watchlistItem.watchlistUserId, userId),
          eq(watchlistItem.mediaId, mediaId),
          eq(watchlistItem.mediaType, mediaType)
        )
      )
      .limit(1);

    return existing.length > 0;
  }
);
