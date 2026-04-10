import 'react-h5-audio-player/lib/styles.css';
import dynamic from 'next/dynamic';

const AudioPlayer = dynamic(
  () => import('react-h5-audio-player').then((mod) => mod.default),
  { ssr: false }
);

interface RadioPlayerProps {
    isMuted: boolean;
}

export default function RadioPlayer({ isMuted}: RadioPlayerProps) {
    return (
        <>
            <AudioPlayer
                autoPlay
                src="https://radio.hellapunk.com/stream"          
                muted={isMuted}
            />
        </>
    );
}