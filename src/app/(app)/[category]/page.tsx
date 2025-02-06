import { auth } from '@clerk/nextjs/server';

import { getMediaByCategory } from '@/db/database-queries';
import type { MediaCategory } from '@/types';

import MovieCard from '../_components/movie-card';

type Properties = {
  params: Promise<{ category: MediaCategory }>;
};

export default async function CategoryPage({ params }: Properties) {
  const { userId } = await auth();
  const { category } = await params;

  if (!userId) {
    return <h2>Loading...</h2>;
  }

  const media = await getMediaByCategory(category);

  return (
    <section className="mt-10 grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
      {media.map((item) => (
        <MovieCard key={item.id} movie={item} large />
      ))}
    </section>
  );
}
