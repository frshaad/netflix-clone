import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOptions";
import type { Movie } from "@/types";

import MovieCard from "../../_components/MovieCard";
import { fetchUserWatchlist } from "./fetchUserWatchlist.helper";

export default async function WatchlistPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) return;

  const userList = await fetchUserWatchlist(session?.user?.email);

  return (
    <>
      <h1 className="mt-10 px-5 text-4xl font-bold text-white">
        Your Watchlist
      </h1>
      <section className="mt-10 grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
        {userList.map((item) => (
          <MovieCard key={item.Movie?.id} movie={item.Movie as Movie} />
        ))}
      </section>
    </>
  );
}
