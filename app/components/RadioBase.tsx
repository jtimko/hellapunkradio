"use client";
import { useState } from "react";
import RadioPlayer from "./RadioPlayer";

export default function RadioBase() {
    const [mute, setMute] = useState(true);
    return(
        <div>
            <button
                onClick={() => {setMute(prev => !prev)}}>
                    {mute ? "Muted" : "Unmuted"}
            </button>
            <RadioPlayer isMuted={mute} />
        </div>
    );
}