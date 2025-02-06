import { and, eq } from 'drizzle-orm';

import db from '@/db';
import type { MediaCategory } from '@/db/schema';
import { movie, watchlist } from '@/db/schema';
import { authenticateUser } from '@/lib/auth';

export async function getMediaByCategory(category: MediaCategory) {
  try {
    const userId = await authenticateUser();

    const result = await db.query.movie.findMany({
      where: eq(movie.category, category),
      with: {
        watchlistItems: {
          where: and(
            eq(watchlist.userId, userId),
            eq(watchlist.movieId, movie.id)
          ),
        },
      },
      orderBy: (movie, { asc }) => [asc(movie.releaseYear)],
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
  const result = await db.query.movie.findMany({
    where: eq(movie.title, query),
  });

  return result;
}
