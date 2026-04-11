"use client";
import { useState } from "react";
import { FiVolumeX } from "react-icons/fi";
import RadioPlayer from "./RadioPlayer";
import Button from "./Button";

export default function RadioBase() {
    const [mute, setMute] = useState(true);
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
        </div>
    );
}