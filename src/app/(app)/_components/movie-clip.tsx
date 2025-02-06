import { findMovie } from '@/db/queries';

import MovieButtons from './movie-buttons';

export default async function MovieClip() {
  const movieData = await findMovie('');

  if (!movieData) {
    return <h2>Loading...</h2>;
  }

  const {
    imageUrl,
    videoUrl,
    title,
    overview,
    ageRating,
    duration,
    id,
    releaseYear,
    youtubeUrl,
  } = movieData;

  return (
    <section className="flex h-[55vh] w-full items-center justify-start lg:h-[60vh]">
      <video
        className="absolute left-0 top-0 -z-10 h-[60vh] w-full object-cover brightness-[60%]"
        poster={imageUrl}
        src={videoUrl}
        autoPlay
        loop
        muted
      />

      <div className="absolute mx-auto w-11/12 lg:w-2/5">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 line-clamp-3 text-lg text-white">{overview}</p>
        <div className="mt-4 flex gap-x-3">
          <MovieButtons
            age={ageRating}
            duration={duration}
            id={id}
            key={id}
            overview={overview}
            releaseDate={releaseYear}
            title={title}
            youtubeUrl={youtubeUrl}
          />
        </div>
      </div>
    </section>
  );
}
