import prisma from '@/src/lib/database';

export const fetchUserWatchlist = async (userId: string) => {
  const data = await prisma.watchlist.findMany({
    where: {
      userId,
    },
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          id: true,
          watchlists: true,
          youtubeString: true,
        },
      },
    },
  });

  return data;
};
