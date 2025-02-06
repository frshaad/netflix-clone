import { findMovie } from './find-movie.helper';
import MovieButtons from './movie-buttons';

export default async function MovieClip() {
  const data = await findMovie();

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="flex h-[55vh] w-full items-center justify-start lg:h-[60vh]">
      <video
        className="absolute left-0 top-0 -z-10 h-[60vh] w-full object-cover brightness-[60%]"
        poster={data.imageString}
        src={data.videoSource}
        autoPlay
        loop
        muted
      />

      <div className="absolute mx-auto w-11/12 lg:w-2/5">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {data.title}
        </h1>
        <p className="mt-5 line-clamp-3 text-lg text-white">{data.overview}</p>
        <div className="mt-4 flex gap-x-3">
          <MovieButtons
            age={data.age as number}
            duration={data.duration as number}
            id={data.id as number}
            key={data.id}
            overview={data.overview as string}
            releaseDate={data.release as number}
            title={data.title as string}
            youtubeUrl={data.youtubeString as string}
          />
        </div>
      </div>
    </section>
  );
}
