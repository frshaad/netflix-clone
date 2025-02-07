import { asc, desc, eq, like } from 'drizzle-orm';

import db from '@/db';
import { movie, show, watchlist } from '@/db/schema';
import { authenticateUser } from '@/lib/auth';

type MediaType = 'movie' | 'show' | 'all';
type SortField = 'title' | 'releaseYear' | 'createdAt';
type SortOrder = 'asc' | 'desc';

type MediaListParameters = {
  type?: MediaType;
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

export async function getUserWatchlist() {
  const userId = await authenticateUser();

  const userWatchlist = await db.query.watchlist.findMany({
    where: eq(watchlist.userId, userId),
    with: {
      items: {
        with: {
          movie: true,
          show: true,
        },
      },
    },
  });

  return userWatchlist;
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
