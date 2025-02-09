import { getMediaList } from '@/db/queries';

import MovieCard from './_components/movie-card';
import MovieClip from './_components/movie-clip';

export default async function HomePage() {
  const { movies, shows } = await getMediaList({ limit: 4, type: 'all' });

  return (
    <div className="mb-20 space-y-10">
      <MovieClip />
      <section className="space-y-6">
        <h2 className="text-4xl font-bold">New Movies</h2>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
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
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
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
