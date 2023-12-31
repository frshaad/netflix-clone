import prisma from "@/lib/db";
import type { MediaCategory } from "@/types";

export async function fetchMediasByCategory(
  category: MediaCategory,
  userId: string,
) {
  switch (category) {
    case "shows": {
      const data = await prisma.movie.findMany({
        where: {
          category: "show",
        },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          release: true,
          imageString: true,
          overview: true,
          youtubeString: true,
          watchlists: {
            where: {
              userId,
            },
          },
        },
      });

      return data;
    }

    case "movies": {
      const data = await prisma.movie.findMany({
        where: {
          category: "movie",
        },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          release: true,
          imageString: true,
          overview: true,
          youtubeString: true,
          watchlists: {
            where: {
              userId,
            },
          },
        },
      });

      return data;
    }

    case "recently": {
      const data = await prisma.movie.findMany({
        where: {
          category: "recent",
        },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          release: true,
          imageString: true,
          overview: true,
          youtubeString: true,
          watchlists: {
            where: {
              userId,
            },
          },
        },
      });

      return data;
    }

    default:
      throw new Error();
  }
}
