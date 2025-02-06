import type { movie, watchlist } from '@/db/schema';
import { cn } from '@/lib/utils';

type Properties = {
  movie:
    | (typeof movie.$inferSelect & {
        watchlistItems: (typeof watchlist.$inferSelect)[];
      })
    | undefined;
  large?: boolean;
};

export default function MovieCard({ large }: Properties) {
  return (
    <div className={cn('relative cursor-pointer', large ? 'h-60' : 'h-48')}>
      <p>Movie Card</p>
      {/* <Image
        alt="Movie"
        className="absolute size-full rounded-sm object-cover"
        height={400}
        src={movie.imageUrl}
        width={500}
      />

      <div className="relative z-10 h-60 w-full opacity-0 transition duration-300 hover:scale-110 hover:opacity-100">
        <div className="z-10 flex size-full items-center justify-center rounded-lg border bg-gradient-to-b from-transparent via-black/50 to-black">
          <Image
            alt="Movie"
            className="absolute -z-10 size-full rounded-lg object-cover"
            height={800}
            src={movie.imageUrl}
            width={800}
          />

          <MovieCardOverlay movie={movie} />
        </div>
      </div> */}
    </div>
  );
}
