import YouTube from '@u-wave/react-youtube';

const Player = (props) => {
    return (
        <>
            <YouTube
                video={props.id}
                autoplay
                paused={props.pause}
                muted={props.mute}
                height={0}
                width={0}
            />
        </>
    )
}

export default Player
