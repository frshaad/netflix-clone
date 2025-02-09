import { getMediaList } from '@/db/queries';

import MovieCard from '../_components/movie-card';

export default async function RecentMediaPage() {
  const { movies } = await getMediaList({ type: 'movie' });

  return (
    <div className="mt-10 space-y-32">
      <section className="space-y-10">
        <h2 className="text-4xl font-bold">Movies</h2>
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
    </div>
  );
}
