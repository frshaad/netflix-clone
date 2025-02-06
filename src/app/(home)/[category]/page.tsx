import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth-options';
import type { MediaCategory } from '@/src/types';

import MovieCard from '../_components/movie-card';
import { fetchMediasByCategory } from './fetch-media-by-category.helper';

type Properties = {
  params: Promise<{ category: MediaCategory }>;
};

export default async function CategoryPage({ params }: Properties) {
  const session = await getServerSession(authOptions);
  const { category } = await params;
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
