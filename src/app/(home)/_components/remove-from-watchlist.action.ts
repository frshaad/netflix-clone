'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/src/lib/database';

export async function removeFromWatchlist(formData: FormData) {
  const watchlistId = formData.get('watchlistId') as string;
  const pathname = formData.get('pathname') as string;

  await prisma.watchlist.delete({
    where: {
      id: watchlistId,
    },
  });

  revalidatePath(pathname);
}
