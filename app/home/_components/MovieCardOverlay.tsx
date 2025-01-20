"use client";

import { Heart, HeartOff, PlayCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import type { Movie } from "@/types";

import { addToWatchlist } from "./addToWatchlist.action";
import { removeFromWatchlist } from "./removeFromWatchlist.action";
import VideoPlayerModal from "./VideoPlayerModal";

type Props = { movie: Movie };

export default function MovieCardOverlay({ movie }: Props) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const pathname = usePathname();

  const {
    age,
    duration,
    id,
    overview,
    release,
    title,
    watchlists,
    youtubeString,
  } = movie;

  const isWatchlist = watchlists.length > 0 ? true : false;
  const watchlistId = watchlists[0]?.id;

  return (
    <>
      <button onClick={() => setIsPlayerOpen(true)} className="-mt-14">
        <PlayCircle className="size-20" />
      </button>

      <div className="absolute right-5 top-5 z-10">
        {isWatchlist ? (
          <form action={removeFromWatchlist}>
            <input type="hidden" name="watchlistId" value={watchlistId} />
            <input type="hidden" name="pathname" value={pathname} />
            <Button type="submit" variant="outline" size="icon">
              <HeartOff className="size-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form action={addToWatchlist}>
            <input type="hidden" name="movieId" value={id} />
            <input type="hidden" name="pathname" value={pathname} />
            <Button type="submit" variant="outline" size="icon">
              <Heart className="size-4 text-red-500" />
            </Button>
          </form>
        )}
      </div>

      <div className="absolute bottom-0 left-0 p-5">
        <h1 className="line-clamp-1 text-lg font-bold">{title}</h1>
        <div className="flex items-center gap-x-2">
          <p className="text-sm font-normal">{release}</p>
          <p className="rounded border border-gray-200 px-1 py-0.5 text-sm font-normal">
            {age}+
          </p>
          <p className="text-sm font-normal">{duration}h</p>
        </div>
        <p className="line-clamp-1 text-sm font-light text-gray-200">
          {overview}
        </p>
      </div>

      <VideoPlayerModal
        key={id}
        state={isPlayerOpen}
        changeState={setIsPlayerOpen}
        age={age}
        duration={duration}
        overview={overview}
        release={release}
        title={title}
        youtubeUrl={youtubeString}
      />
    </>
  );
}
