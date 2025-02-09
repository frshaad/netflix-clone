import { getMediaList } from '@/db/queries';

import MovieCard from './_components/movie-card';

export default async function HomePage() {
  const { movies, shows } = await getMediaList({ limit: 3, type: 'all' });

  return (
    <div className="mt-10 space-y-32">
      <section className="space-y-10">
        <h2 className="text-4xl font-bold">New Movies</h2>
        <div className="grid grid-cols-3 gap-14">
          {movies.map((item) => (
            <MovieCard
              createdAt={item.createdAt}
              id={item.id}
              key={item.id}
              media={item}
              mediaType="movie"
            />
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <h2 className="text-4xl font-bold">New TV Shows</h2>
        <div className="grid grid-cols-3 gap-14">
          {shows.map((item) => (
            <MovieCard
              createdAt={item.createdAt}
              id={item.id}
              key={item.id}
              media={item}
              mediaType="show"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
