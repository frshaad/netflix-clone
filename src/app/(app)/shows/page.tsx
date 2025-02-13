import { getMediaList } from '@/db/queries';

import MovieCard from '../_components/movie-card';

export default async function RecentMediaPage() {
  const { shows } = await getMediaList({ type: 'show' });

  return (
    <div className="mt-10 space-y-32">
      <section className="space-y-10">
        <h2 className="text-4xl font-bold">TV Shows</h2>
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
