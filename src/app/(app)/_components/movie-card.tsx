import Image from 'next/image';

import { Dot } from 'lucide-react';

import { isInWatchlist } from '@/db/queries';
import { formatDuration } from '@/lib/utils';
import { type MediaItem, isMovie, isShow } from '@/types';

import MovieCardOverlay from './movie-card-overlay';

export default async function MovieCard({ media, mediaType }: MediaItem) {
  const { title, imageUrl, releaseYear, ageRating, id } = media;
  const isMediaInWatchlist = await isInWatchlist(id, mediaType);

  const duration = isMovie(media) ? media.duration : undefined;
  const seasons = isShow(media) ? media.seasons : undefined;

  return (
    <article className="group relative h-96 max-w-72 cursor-pointer">
      <Image
        alt={`${title}`}
        className="absolute size-full rounded-sm object-cover"
        height={500}
        src={imageUrl}
        width={300}
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
