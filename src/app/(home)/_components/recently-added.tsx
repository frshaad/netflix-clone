import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth-options';

import { fetchUserWatchlist } from './fetch-user-watchlist';
import MovieCard from './movie-card';

export default async function RecentlyAdded() {
  const session = await getServerSession(authOptions);
  const movies = await fetchUserWatchlist(session?.user?.email as string);

  return (
    <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
