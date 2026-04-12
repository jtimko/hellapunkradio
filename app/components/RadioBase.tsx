"use client";
import { useEffect, useState } from "react";
import { FiVolumeX } from "react-icons/fi";
import RadioPlayer from "./RadioPlayer";
import Button from "./Button";

export default function RadioBase() {
    const [mute, setMute] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<string>("");

    useEffect(() => {
        const fetchSong = async () => {
            try {
                const resp = await fetch('/api/now-playing');
                const data = await resp.json();
                setNowPlaying(data["song"].songtitle || "Unknown");
                console.log("Data: " + JSON.stringify(data[0]));
            } catch(err) {
                console.error("Error: ", err);
            }
        }

        fetchSong();
        const interval = setInterval(fetchSong, 10000);

        return () => clearInterval(interval);
    }, []);

    const iconStyle = "mx-4 h-8 w-8";

    function changePlayerAudio() {
        setMute(prev => !prev);
    }

    return(
        <div>
            <RadioPlayer isMuted={mute} />
            <div className="mute-button h-16 w-24 pb-12 border-2 border-red-600 rounded-full bg-black md:border-none md:bg-transparent">
                <Button 
                Icon={FiVolumeX} 
                func={changePlayerAudio} 
                color={mute ? 'red' : 'white' }
                iconStyle={iconStyle} />
          </div>
          <p>Now Playing: {nowPlaying}</p>
        </div>
    );
}