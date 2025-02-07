import type { movie, show } from './schema';

export const movieData: (typeof movie.$inferInsert)[] = [
  {
    title: 'Inception',
    overview:
      'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/8bxHvsNvZdX5R2tROR6YnUPO0Xp.jpg',
    videoUrl: 'https://examples.com/inception.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    ageRating: 12,
    releaseYear: 2010,
    duration: 148,
  },
  {
    title: 'The Shawshank Redemption',
    overview:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    videoUrl: 'https://examples.com/shawshank.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
    ageRating: 15,
    releaseYear: 1994,
    duration: 142,
  },
  {
    title: 'Interstellar',
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imageUrl:
      'https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    videoUrl: 'https://examples.com/interstellar.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
    ageRating: 12,
    releaseYear: 2014,
    duration: 169,
  },
];

export const showData: (typeof show.$inferInsert)[] = [
  {
    title: 'Breaking Bad',
    overview:
      "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's financial future as he battles terminal lung cancer.",
    imageUrl:
      'https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    videoUrl: 'https://examples.com/breaking-bad.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=HhesaQXLuRY',
    ageRating: 18,
    releaseYear: 2008,
    seasons: 5,
    episodeCount: 62,
    status: 'Completed',
  },
  {
    title: 'Stranger Things',
    overview:
      'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    videoUrl: 'https://examples.com/stranger-things.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=b9EkMc79ZSU',
    ageRating: 15,
    releaseYear: 2016,
    seasons: 4,
    episodeCount: 34,
    status: 'Ongoing',
  },
  {
    title: 'The Crown',
    overview:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    imageUrl:
      'https://image.tmdb.org/t/p/original/7k3OEd6G7dqArJbY01dissolved.jpg',
    videoUrl: 'https://examples.com/the-crown.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=JWtnJjn6ng0',
    ageRating: 15,
    releaseYear: 2016,
    seasons: 6,
    episodeCount: 60,
    status: 'Completed',
  },
];
