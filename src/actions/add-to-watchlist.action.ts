'use server';

import db from '@/db';
import { isInWatchlist } from '@/db/queries';
import { watchlist, watchlistItem } from '@/db/schema';
import { authenticateUser } from '@/lib/auth';
import type { MediaType } from '@/types';

export async function addToWatchlist(formData: FormData) {
  const userId = await authenticateUser();
  const mediaId = Number(formData.get('mediaId'));
  const mediaType = formData.get('mediaType') as MediaType;

  // Check if already in watchlist
  if (await isInWatchlist(mediaId, mediaType)) {
    return;
  }

  // Ensure watchlist exists for user
  await db
    .insert(watchlist)
    .values({ userId })
    .onConflictDoNothing({ target: [watchlist.userId] });

  // Add to watchlist
  await db.insert(watchlistItem).values({
    watchlistUserId: userId,
    mediaId,
    mediaType,
  });
}
