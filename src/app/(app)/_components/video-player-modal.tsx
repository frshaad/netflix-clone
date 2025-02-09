import type { Dispatch, SetStateAction } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { formatDuration } from '@/lib/utils';
import { type MediaItem, isMovie, isShow } from '@/types';

type Properties = MediaItem & {
  state: boolean;
  changeState: Dispatch<SetStateAction<boolean>>;
};

export default function VideoPlayerModal({
  changeState,
  media,
  state,
  mediaType,
}: Properties) {
  const { title, overview, releaseYear, youtubeUrl, ageRating } = media;
  const duration = isMovie(media) ? media.duration : undefined;
  const seasons = isShow(media) ? media.seasons : undefined;

  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex items-center gap-x-2">
            <p>{releaseYear}</p>
            <p className="rounded border border-gray-200 px-1 py-0.5">
              {ageRating}+
            </p>
            <p>
              {mediaType === 'movie'
                ? duration && formatDuration(duration)
                : seasons && `${seasons} Season${seasons > 1 ? 's' : ''}`}
            </p>
          </div>
        </DialogHeader>

        <iframe
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          className="w-full"
          height={250}
          src={`https://www.youtube.com/embed/${new URL(youtubeUrl).searchParams.get('v')}?autoplay=1&playlist=${new URL(youtubeUrl).searchParams.get('v')}&showinfo=0&modestbranding=1&rel=0`}
          title={title}
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
}
