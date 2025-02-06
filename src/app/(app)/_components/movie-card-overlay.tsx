'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Heart, HeartOff, PlayCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { movies, watchlist } from '@/db/schema';

import { addToWatchlist } from '../../../actions/add-to-watchlist.action';
import { removeFromWatchlist } from '../../../actions/remove-from-watchlist.action';
import VideoPlayerModal from './video-player-modal';

type Properties = {
  movie: typeof movies.$inferSelect & {
    watchlistItems: (typeof watchlist.$inferSelect)[];
  };
};

export default function MovieCardOverlay({ movie }: Properties) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const pathname = usePathname();

  const {
    ageRating,
    duration,
    id,
    overview,
    releaseYear,
    title,
    watchlistItems,
    youtubeUrl,
  } = movie;

  const isWatchlist = watchlistItems.length > 0;
  const watchlistId = watchlistItems[0]?.id;

  return (
    <>
      <button
        className="-mt-14"
        type="button"
        onClick={() => setIsPlayerOpen(true)}
      >
        <PlayCircle className="size-20" />
      </button>

      <div className="absolute right-5 top-5 z-10">
        {isWatchlist ? (
          <form action={removeFromWatchlist}>
            <input name="watchlistId" type="hidden" value={watchlistId} />
            <input name="pathname" type="hidden" value={pathname} />
            <Button size="icon" type="submit" variant="outline">
              <HeartOff className="size-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form action={addToWatchlist}>
            <input name="movieId" type="hidden" value={id} />
            <input name="pathname" type="hidden" value={pathname} />
            <Button size="icon" type="submit" variant="outline">
              <Heart className="size-4 text-red-500" />
            </Button>
          </form>
        )}
      </div>

      <div className="absolute bottom-0 left-0 p-5">
        <h1 className="line-clamp-1 text-lg font-bold">{title}</h1>
        <div className="flex items-center gap-x-2">
          <p className="text-sm font-normal">{releaseYear}</p>
          <p className="rounded border border-gray-200 px-1 py-0.5 text-sm font-normal">
            {ageRating}+
          </p>
          <p className="text-sm font-normal">{duration}h</p>
        </div>
        <p className="line-clamp-1 text-sm font-light text-gray-200">
          {overview}
        </p>
      </div>

      <VideoPlayerModal
        age={ageRating}
        changeState={setIsPlayerOpen}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseYear}
        state={isPlayerOpen}
        title={title}
        youtubeUrl={youtubeUrl}
      />
    </>
  );
}
