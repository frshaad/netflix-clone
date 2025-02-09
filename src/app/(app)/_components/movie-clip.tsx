import { getMediaList } from '@/db/queries';
import type { MediaType } from '@/types';
import { isMovie } from '@/types';

import MovieButtons from './movie-buttons';

function getRandomNumber(n: number): number {
  if (n < 1) {
    throw new Error(
      'Input must be a positive integer greater than or equal to 1.'
    );
  }
  return Math.floor(Math.random() * n) + 1;
}

export default async function MovieClip() {
  const { movies, shows } = await getMediaList({});
  if (!movies || !shows) {
    return <h2>Loading...</h2>;
  }

  const mediaList = getRandomNumber(2) === 1 ? movies : shows;
  const media = mediaList[getRandomNumber(mediaList.length - 1)];

  const { youtubeUrl, title, overview, createdAt, id } = media;
  const mediaType: MediaType = isMovie(media) ? 'movie' : 'show';

  return (
    <>
      <div className="absolute left-0 top-0 -z-10 h-[60vh] w-full object-cover brightness-[60%]">
        <iframe
          // allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="size-full"
          src={`https://www.youtube.com/embed/${new URL(youtubeUrl).searchParams.get('v')}?autoplay=1&loop=1&mute=1&playlist=${new URL(youtubeUrl).searchParams.get('v')}&controls=0&showinfo=0&modestbranding=1&rel=0`}
          title={title}
        />
      </div>
      <section className="relative flex h-[55vh] w-full items-center justify-start lg:h-[60vh]">
        <div className="absolute mx-auto w-11/12 lg:w-2/5">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 line-clamp-3 text-lg text-white">{overview}</p>
          <div className="mt-4 flex gap-x-3">
            <MovieButtons
              createdAt={createdAt}
              id={id}
              media={media}
              mediaType={mediaType}
            />
          </div>
        </div>
      </section>
    </>
  );
}
