'use server';

import db from '@/db';
import { watchlist } from '@/db/schema';
import { authenticateUser } from '@/lib/auth';

export async function addToWatchlist(formData: FormData) {
  const userId = await authenticateUser();

  const movieId = Number(formData.get('movieId') as string);

  await db.insert(watchlist).values({ movieId, userId });
}
