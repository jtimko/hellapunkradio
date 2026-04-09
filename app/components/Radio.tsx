import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Radio() {
    return (
        <>
            <AudioPlayer
                autoPlay
                src="http://74.207.254.203:8000/stream"          
                // other props here
            />
        </>
    );
}