import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOptions";
import { MediaCategory } from "@/types";

import MovieCard from "../_components/MovieCard";
import { fetchMediasByCategory } from "./fetchMediaByCategory.helper";

type Props = {
  params: {
    category: MediaCategory;
  };
};

export default async function CategoryPage({ params: { category } }: Props) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email;

  if (!userId) {
    return <h2>Loading...</h2>;
  }

  const media = await fetchMediasByCategory(category, userId);

  return (
    <section className="mt-10 grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
      {media.map((item) => (
        <MovieCard key={item.id} movie={item} large />
      ))}
    </section>
  );
}
