import { and, eq } from 'drizzle-orm';

import db from '@/db';
import { movies, watchlist } from '@/db/schema';
import { authenticateUser } from '@/lib/auth';
import type { MediaCategory } from '@/types';

export async function getMediaByCategory(category: MediaCategory) {
  try {
    const userId = await authenticateUser();

    const result = await db.query.movies.findMany({
      where: eq(movies.category, category),
      with: {
        watchlistItems: {
          where: and(
            eq(watchlist.userId, userId),
            eq(watchlist.movieId, movies.id)
          ),
        },
      },
      orderBy: (movies, { asc }) => [asc(movies.releaseYear)],
    });

    return result;
  } catch (error) {
    console.error('Error fetching media by category:', error);
    throw new Error("Couldn't fetch media");
  }
}

export async function getUserWatchlist() {
  const userId = await authenticateUser();

  const result = await db.query.watchlist.findMany({
    where: eq(watchlist.userId, userId),
    with: {},
  });

  return result;
}

export async function findMovie(query: string) {
  const result = await db.query.movies.findMany({
    where: eq(movies.title, query),
  });

  return result;
}
