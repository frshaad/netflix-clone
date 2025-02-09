'use server';

import { revalidatePath } from 'next/cache';

import { and, eq } from 'drizzle-orm';

import db from '@/db';
import { isInWatchlist } from '@/db/queries';
import { watchlistItem } from '@/db/schema';
import { authenticateUser } from '@/lib/auth';
import type { MediaType } from '@/types';

export async function removeFromWatchlist(formData: FormData) {
  const userId = await authenticateUser();
  const mediaId = Number(formData.get('mediaId'));
  const mediaType = formData.get('mediaType') as MediaType;

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

  revalidatePath('/');
  revalidatePath('/shows');
  revalidatePath('/movies');
  revalidatePath('/watchlist');
}
