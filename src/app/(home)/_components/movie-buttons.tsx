'use client';

import { useState } from 'react';

import { InfoIcon, PlayCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';

import VideoPlayerModal from './video-player-modal';

type Properties = {
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
}: Properties) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <>
      <Button
        className="text-lg font-medium"
        onClick={() => setIsPlayerOpen(true)}
      >
        <PlayCircle className="mr-2 size-6" /> Play
      </Button>

      <Button
        className="bg-white/40 text-lg font-medium text-white hover:bg-white/30"
        onClick={() => setIsPlayerOpen(true)}
      >
        <InfoIcon className="mr-2 size-6" /> Learn More
      </Button>

      <VideoPlayerModal
        age={age}
        changeState={setIsPlayerOpen}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        state={isPlayerOpen}
        title={title}
        youtubeUrl={youtubeUrl}
      />
    </>
  );
}
