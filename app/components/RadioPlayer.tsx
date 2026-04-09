import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function RadioPlayer(props: {volume: boolean}) {
    return (
        <>
            <AudioPlayer
                autoPlay
                src="https://radio.hellapunk.com/stream"          
                muted={props.volume}
            />
        </>
    );
}