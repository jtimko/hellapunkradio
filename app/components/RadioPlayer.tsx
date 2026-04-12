"use client";
import { useEffect, useRef } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface RadioPlayerProps { isMuted: boolean; }

export default function RadioPlayer({ isMuted }: RadioPlayerProps) {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (playerRef.current?.audio?.current)
      playerRef.current.audio.current.muted = isMuted;
  }, [isMuted]);
  
  return (
    <div className='hidden'>
      <ReactAudioPlayer
            ref={playerRef}
            autoPlay={true}
            src="https://radio.hellapunk.com/stream"
          />
    </div>
  );
}
