import prisma from '@/lib/database';

export async function fetchUserWatchlist(userId: string) {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      watchlists: {
        where: {
          userId,
        },
      },
      imageString: true,
      youtubeString: true,
      age: true,
      release: true,
      duration: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 4,
  });

  return data;
}
