import { Heart, HeartOff, PlayCircle } from 'lucide-react';

import { addToWatchlist } from '@/actions/add-to-watchlist.action';
import { removeFromWatchlist } from '@/actions/remove-from-watchlist.action';
import { Button } from '@/components/ui/button';
import { isInWatchlist } from '@/db/queries';
import { formatDuration } from '@/lib/utils';
import { type MediaItem, isMovie, isShow } from '@/types';

export default async function MovieCardOverlay({
  media,
  mediaType,
}: MediaItem) {
  const { title, releaseYear, overview, ageRating, id } = media;

  const duration = isMovie(media) ? media.duration : undefined;
  const seasons = isShow(media) ? media.seasons : undefined;

  const isMediaInWatchlist = await isInWatchlist(id, mediaType);

  const handleAddToWatchlist = async () => {
    await addToWatchlist(id, mediaType);
  };

  const handleRemoveFromWatchlist = async () => {
    await removeFromWatchlist(id, mediaType);
  };

  return (
    <>
      <button
        className="-mt-14"
        type="button"
        // onClick={() => setIsPlayerOpen(true)}
      >
        <PlayCircle className="size-20" />
      </button>

      <div className="absolute right-5 top-5 z-10">
        {isMediaInWatchlist ? (
          <Button
            size="icon"
            type="submit"
            variant="outline"
            onClick={handleRemoveFromWatchlist}
          >
            <HeartOff className="size-4 text-red-500" />
          </Button>
        ) : (
          <Button
            size="icon"
            type="submit"
            variant="outline"
            onClick={handleAddToWatchlist}
          >
            <Heart className="size-4 text-red-500" />
          </Button>
        )}
      </div>

      <div className="absolute bottom-0 left-0 p-5">
        <h1 className="line-clamp-1 text-lg font-bold">{title}</h1>
        <div className="flex items-center gap-x-2">
          <p className="text-sm font-normal">{releaseYear}</p>
          <p className="rounded border border-gray-200 px-1 py-0.5 text-sm font-normal">
            {ageRating}+
          </p>
          <p className="text-sm font-normal">
            {mediaType === 'movie'
              ? duration && formatDuration(duration)
              : seasons && `${seasons} Season${seasons > 1 ? 's' : ''}`}
          </p>
        </div>
        <p className="line-clamp-1 text-sm font-light text-gray-200">
          {overview}
        </p>
      </div>

      {/* <VideoPlayerModal
        age={ageRating}
        changeState={setIsPlayerOpen}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseYear}
        state={isPlayerOpen}
        title={title}
        youtubeUrl={youtubeUrl}
      /> */}
    </>
  );
}
