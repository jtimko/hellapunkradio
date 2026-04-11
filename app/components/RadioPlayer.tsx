"use client";
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface RadioPlayerProps { isMuted: boolean; }

export default function RadioPlayer({ isMuted }: RadioPlayerProps) {

  return (
    <ReactAudioPlayer
      autoPlay
      src="https://radio.hellapunk.com/stream"
      muted={isMuted}
    />
  );
}
