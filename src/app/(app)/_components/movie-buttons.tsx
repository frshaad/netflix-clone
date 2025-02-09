'use client';

import { useState } from 'react';

import { InfoIcon, PlayCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { MediaItem } from '@/types';

import VideoPlayerModal from './video-player-modal';

export default function MovieButtons(properties: MediaItem) {
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
        changeState={setIsPlayerOpen}
        state={isPlayerOpen}
        {...properties}
      />
    </>
  );
}
