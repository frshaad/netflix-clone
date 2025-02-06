'use server';

import { revalidatePath } from 'next/cache';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth-options';
import prisma from '@/lib/database';

export async function addToWatchlist(formData: FormData) {
  const movieId = formData.get('movieId');
  const pathname = formData.get('pathname') as string;
  const session = await getServerSession(authOptions);

  await prisma.watchlist.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathname);
}
