"use client";

import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import VideoPlayerModal from "./VideoPlayerModal";

type Props = {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
};

export default function MovieButtons({
  age,
  duration,
  id,
  overview,
  releaseDate,
  title,
  youtubeUrl,
}: Props) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsPlayerOpen(true)}
        className="text-lg font-medium"
      >
        <PlayCircle className="mr-2 size-6" /> Play
      </Button>

      <Button
        onClick={() => setIsPlayerOpen(true)}
        className="bg-white/40 text-lg font-medium text-white hover:bg-white/30"
      >
        <InfoIcon className="mr-2 size-6" /> Learn More
      </Button>

      <VideoPlayerModal
        state={isPlayerOpen}
        changeState={setIsPlayerOpen}
        age={age}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeUrl}
      />
    </>
  );
}
