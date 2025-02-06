'use server';

import { eq } from 'drizzle-orm';

import db from '@/db';
import { watchlist } from '@/db/schema';

export async function removeFromWatchlist(formData: FormData) {
  const watchlistId = formData.get('watchlistId') as string;

  await db.delete(watchlist).where(eq(watchlist.id, watchlistId));
}
