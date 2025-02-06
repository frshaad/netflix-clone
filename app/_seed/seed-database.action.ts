'use server';

import prisma from '@/lib/database';

import { movieDatabase } from './movie-database.constant';

export async function postData() {
  await prisma.movie.createMany({
    data: movieDatabase,
  });
}
