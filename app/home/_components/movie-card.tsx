import Image from 'next/image';

import { cn } from '@/lib/utils';
import type { Movie } from '@/types';

import MovieCardOverlay from './movie-card-overlay';

type Properties = {
  movie: Movie;
  large?: boolean;
};

export default function MovieCard({ movie, large }: Properties) {
  return (
    <div
      className={cn('relative h-48 cursor-pointer', {
        'h-60': large,
      })}
    >
      <Image
        alt="Movie"
        className="absolute size-full rounded-sm object-cover"
        height={400}
        src={movie.imageString}
        width={500}
      />

      <div className="relative z-10 h-60 w-full opacity-0 transition duration-300 hover:scale-110 hover:opacity-100">
        <div className="z-10 flex size-full items-center justify-center rounded-lg border bg-gradient-to-b from-transparent via-black/50 to-black">
          <Image
            alt="Movie"
            className="absolute -z-10 size-full rounded-lg object-cover"
            height={800}
            src={movie.imageString}
            width={800}
          />

          <MovieCardOverlay movie={movie} />
        </div>
      </div>
    </div>
  );
}
