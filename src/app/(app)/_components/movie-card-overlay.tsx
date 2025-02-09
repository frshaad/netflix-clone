import { Heart, HeartOff, PlayCircle } from 'lucide-react';

import { addToWatchlist } from '@/actions/add-to-watchlist.action';
import { removeFromWatchlist } from '@/actions/remove-from-watchlist.action';
import { Button } from '@/components/ui/button';
import type { MediaType } from '@/types';

type Properties = {
  mediaId: number;
  mediaType: MediaType;
  isMediaInWatchlist: boolean;
};

export default function MovieCardOverlay({
  isMediaInWatchlist,
  mediaId,
  mediaType,
}: Properties) {
  return (
    <>
      <button type="button">
        <PlayCircle size={50} />
      </button>

      <form className="absolute right-5 top-5 z-10">
        <input name="mediaId" type="hidden" value={mediaId} />
        <input name="mediaType" type="hidden" value={mediaType} />
        {isMediaInWatchlist ? (
          <Button
            formAction={removeFromWatchlist}
            size="icon"
            type="submit"
            variant="outline"
          >
            <HeartOff className="size-4 text-red-500" />
          </Button>
        ) : (
          <Button
            formAction={addToWatchlist}
            size="icon"
            type="submit"
            variant="outline"
          >
            <Heart className="size-4 text-red-500" />
          </Button>
        )}
      </form>
    </>
  );
}
