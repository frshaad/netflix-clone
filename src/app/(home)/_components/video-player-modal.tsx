import type { Dispatch, SetStateAction } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type Properties = {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: Dispatch<SetStateAction<boolean>>;
  release: number;
  age: number;
  duration: number;
};

export default function VideoPlayerModal({
  age,
  changeState,
  duration,
  overview,
  release,
  state,
  title,
  youtubeUrl,
}: Properties) {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex items-center gap-x-2">
            <p>{release}</p>
            <p className="rounded border border-gray-200 px-1 py-0.5">{age}+</p>
            <p>{duration}h</p>
          </div>
        </DialogHeader>
        <iframe className="w-full" height={250} src={youtubeUrl} />
      </DialogContent>
    </Dialog>
  );
}
