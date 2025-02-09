import type { movie, show } from './schema';

export const movieData: (typeof movie.$inferInsert)[] = [
  {
    title: 'Inception',
    overview:
      'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
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
  {
    title: 'The Dark Knight',
    overview:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    videoUrl: 'https://examples.com/dark-knight.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    ageRating: 12,
    releaseYear: 2008,
    duration: 152,
  },
  {
    title: 'Pulp Fiction',
    overview:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    videoUrl: 'https://examples.com/pulp-fiction.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
    ageRating: 18,
    releaseYear: 1994,
    duration: 154,
  },
  {
    title: 'The Matrix',
    overview:
      'A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    videoUrl: 'https://examples.com/matrix.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=vKQi3bBA1y8',
    ageRating: 15,
    releaseYear: 1999,
    duration: 136,
  },
  {
    title: 'Goodfellas',
    overview:
      'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
    videoUrl: 'https://examples.com/goodfellas.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=2ilzidi_J8Q',
    ageRating: 18,
    releaseYear: 1990,
    duration: 146,
  },
  {
    title: 'Fight Club',
    overview:
      'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    videoUrl: 'https://examples.com/fight-club.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=SUXWAEX2jlg',
    ageRating: 18,
    releaseYear: 1999,
    duration: 139,
  },
  {
    title: 'Forrest Gump',
    overview:
      'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
    videoUrl: 'https://examples.com/forrest-gump.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=bLvqoHBptjg',
    ageRating: 12,
    releaseYear: 1994,
    duration: 142,
  },
  {
    title: 'The Godfather',
    overview:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    videoUrl: 'https://examples.com/godfather.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=sY1S34973zA',
    ageRating: 18,
    releaseYear: 1972,
    duration: 175,
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
  {
    title: 'Game of Thrones',
    overview:
      'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
    videoUrl: 'https://examples.com/got.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=KPLWWIOCOOQ',
    ageRating: 18,
    releaseYear: 2011,
    seasons: 8,
    episodeCount: 73,
    status: 'Completed',
  },
  {
    title: 'The Wire',
    overview:
      'The Baltimore drug scene, seen through the eyes of drug dealers and law enforcement.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/4lbclFySvugI51fwsyxBXfo1CMf.jpg',
    videoUrl: 'https://examples.com/the-wire.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=uDcQbk78CSw',
    ageRating: 18,
    releaseYear: 2002,
    seasons: 5,
    episodeCount: 60,
    status: 'Completed',
  },
  {
    title: 'Chernobyl',
    overview:
      "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
    imageUrl:
      'https://image.tmdb.org/t/p/original/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg',
    videoUrl: 'https://examples.com/chernobyl.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=s9APLXM9Ei8',
    ageRating: 18,
    releaseYear: 2019,
    seasons: 1,
    episodeCount: 5,
    status: 'Completed',
  },
  {
    title: 'Better Call Saul',
    overview:
      'The trials and tribulations of criminal lawyer Jimmy McGill before his fateful run-in with Walter White and Jesse Pinkman.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg',
    videoUrl: 'https://examples.com/better-call-saul.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=HN4oydykJFc',
    ageRating: 18,
    releaseYear: 2015,
    seasons: 6,
    episodeCount: 63,
    status: 'Completed',
  },
  {
    title: 'Fargo',
    overview:
      'Various chronicles of deception, intrigue and murder in and around frozen Minnesota.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/3IkPwje9zK4nL4UxubD7RBJ3era.jpg',
    videoUrl: 'https://examples.com/fargo.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=gZpYeFLmYJw',
    ageRating: 18,
    releaseYear: 2014,
    seasons: 5,
    episodeCount: 41,
    status: 'Ongoing',
  },
  {
    title: 'True Detective',
    overview:
      'Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.',
    imageUrl:
      'https://image.tmdb.org/t/p/original/edHgXEtPbyVIQ7xKb1cvJJqTVhA.jpg',
    videoUrl: 'https://examples.com/true-detective.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=fVQUcaO4AvE',
    ageRating: 18,
    releaseYear: 2014,
    seasons: 3,
    episodeCount: 24,
    status: 'Ongoing',
  },
  {
    title: 'The Last of Us',
    overview:
      "Twenty years after modern civilization has been destroyed, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    imageUrl:
      'https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
    videoUrl: 'https://examples.com/last-of-us.mp4',
    youtubeUrl: 'https://www.youtube.com/watch?v=uLtkt8BonwM',
    ageRating: 18,
    releaseYear: 2023,
    seasons: 1,
    episodeCount: 9,
    status: 'Ongoing',
  },
];
