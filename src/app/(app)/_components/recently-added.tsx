import { getUserWatchlist } from '@/db/queries';

import MovieCard from './movie-card';

export default async function RecentlyAdded() {
  const movies = await getUserWatchlist();

  return (
    <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={undefined} />
      ))}
    </section>
  );
}
