import { Heart, HeartOff, PlayCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';

type Properties = {
  isMediaInWatchlist: boolean;
};

export default function MovieCardOverlay({ isMediaInWatchlist }: Properties) {
  return (
    <>
      <button type="button">
        <PlayCircle size={50} />
      </button>

      <div className="absolute right-5 top-5 z-10">
        {isMediaInWatchlist ? (
          <Button size="icon" type="submit" variant="outline">
            <HeartOff className="size-4 text-red-500" />
          </Button>
        ) : (
          <Button size="icon" type="submit" variant="outline">
            <Heart className="size-4 text-red-500" />
          </Button>
        )}
      </div>
    </>
  );
}
