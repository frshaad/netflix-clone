'use server';

import { and, eq } from 'drizzle-orm';

import db from '@/db';
import { isInWatchlist } from '@/db/queries';
import { watchlistItem } from '@/db/schema';
import { authenticateUser } from '@/lib/auth';
import type { MediaType } from '@/types';

export async function removeFromWatchlist(
  mediaId: number,
  mediaType: MediaType
) {
  const userId = await authenticateUser();

  // Check if item exists in watchlist
  if (!(await isInWatchlist(mediaId, mediaType))) {
    return;
  }

  await db
    .delete(watchlistItem)
    .where(
      and(
        eq(watchlistItem.watchlistUserId, userId),
        eq(watchlistItem.mediaId, mediaId),
        eq(watchlistItem.mediaType, mediaType)
      )
    );
}
