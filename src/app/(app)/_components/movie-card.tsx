import Image from 'next/image';

import { cn } from '@/lib/utils';
import type { MediaItem } from '@/types';

type Properties = MediaItem & {
  isLarge?: boolean;
};

export default function MovieCard({ isLarge, media }: Properties) {
  const { title, imageUrl } = media;

  return (
    <div className={cn('relative cursor-pointer', isLarge ? 'h-60' : 'h-48')}>
      <p>{title}</p>
      <Image
        alt={`${title}`}
        className="absolute size-full rounded-sm object-cover"
        height={400}
        src={imageUrl}
        width={500}
      />

      <div className="relative z-10 h-60 w-full opacity-0 transition duration-300 hover:scale-110 hover:opacity-100">
        <div className="z-10 flex size-full items-center justify-center rounded-lg border bg-gradient-to-b from-transparent via-black/50 to-black">
          <Image
            alt={`${title}`}
            className="absolute -z-10 size-full rounded-lg object-cover"
            height={800}
            src={imageUrl}
            width={800}
          />

          {/* <MovieCardOverlay movie={media} /> */}
        </div>
      </div>
    </div>
  );
}
