'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    audio.play().then(() => setIsPlaying(true)).catch(() => {});
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/background.mp3" loop />
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-muted p-3 shadow-lg transition-colors hover:bg-accent"
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
      >
        {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </>
  );
}
