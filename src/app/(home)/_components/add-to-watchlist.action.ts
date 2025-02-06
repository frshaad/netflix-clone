'use server';

import { revalidatePath } from 'next/cache';

import { auth } from '@clerk/nextjs/server';

import prisma from '@/lib/database';

export async function addToWatchlist(formData: FormData) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error('You must be signed in to add an item to your cart');
  }

  const movieId = formData.get('movieId');
  const pathname = formData.get('pathname') as string;

  await prisma.watchlist.create({
    data: {
      userId,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathname);
}
