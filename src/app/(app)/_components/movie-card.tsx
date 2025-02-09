import Image from 'next/image';

import { Dot } from 'lucide-react';

import { isInWatchlist } from '@/db/queries';
import { cn, formatDuration } from '@/lib/utils';
import { type MediaItem, isMovie, isShow } from '@/types';

import MovieCardOverlay from './movie-card-overlay';

type Properties = MediaItem & {
  isLarge?: boolean;
};

export default async function MovieCard(properties: Properties) {
  const { media, isLarge, mediaType } = properties;
  const { title, imageUrl, releaseYear, ageRating, id } = media;
  const duration = isMovie(media) ? media.duration : undefined;
  const seasons = isShow(media) ? media.seasons : undefined;
  const isMediaInWatchlist = await isInWatchlist(id, mediaType);

  return (
    <article
      className={cn('relative cursor-pointer group', isLarge ? 'h-60' : 'h-48')}
    >
      <Image
        alt={`${title}`}
        className="absolute size-full rounded-sm object-cover"
        height={400}
        src={imageUrl}
        width={500}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      <div className="absolute -bottom-3 left-0 space-y-1 p-5">
        <h1 className="line-clamp-1 text-xl font-bold">{title}</h1>
        <div className="flex items-center text-gray-300">
          <p className="text-sm font-normal">{releaseYear}</p>
          <Dot className="opacity-50" size={16} />
          <p className="text-sm font-normal">{ageRating}+</p>
          <Dot className="opacity-50" size={16} />
          <p className="text-sm font-normal">
            {mediaType === 'movie'
              ? duration && formatDuration(duration)
              : seasons && `${seasons} Season${seasons > 1 ? 's' : ''}`}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 z-10 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="flex size-full items-center justify-center  bg-gradient-to-b from-transparent via-black/40 to-black">
          <MovieCardOverlay isMediaInWatchlist={isMediaInWatchlist} />
        </div>
      </div>
    </article>
  );
}
