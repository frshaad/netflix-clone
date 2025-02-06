import { getUserWatchlist } from '@/db/queries';

import MovieCard from '../../_components/movie-card';

export default async function WatchlistPage() {
  const userList = await getUserWatchlist();

  return (
    <>
      <h1 className="mt-10 px-5 text-4xl font-bold text-white">
        Your Watchlist
      </h1>
      <section className="mt-10 grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
        {userList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}
