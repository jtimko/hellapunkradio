"use client";
import { useState } from "react";
import RadioPlayer from "./RadioPlayer";

export default function RadioBase() {
    const [mute, setMute] = useState(false);
    return(
        <div>
            <button
                onClick={() => {setMute(prev => !prev)}}>
                    {mute ? "Muted" : "Unmuted"}
            </button>
            <div className="hidden">
                <RadioPlayer volume={mute} />
            </div>
        </div>
    );
}