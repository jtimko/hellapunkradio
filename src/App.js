import React from 'react';
import { useState } from 'react'
import Header from './components/Header'
import Player from './components/Player'
import Button from './components/Button'
import Chat from './components/Chat'
import { FiPlayCircle, FiPauseCircle, FiVolumeX, FiMessageSquare, FiInfo, FiList, FiMail } from "react-icons/fi"

function App() {

  const [pause, setPause] = useState(false);
  const [mute, setMute] = useState(true);
  const [station, setStation] = useState("P1nvmEvJTAo");
  const [openChat, setOpenChat] = useState(false);

  let style = "mx-4 h-8 w-8";

  const pauseMusic = () => {
    setPause(!pause);
  }

  const muteMusic = () => {
    setMute(!mute);
  }

  const showChat = () => {
    setOpenChat(!openChat);
  }


  return (
    <div className="w-screen">
      <div className="hidden">
        <Player id={station} pause={pause} mute={mute} />
      </div>
      <div class="main flex w-4/5 h-screen p-4 bg-black mx-auto relative opacity-70">
        <Header
          chat={FiMessageSquare} 
          info={FiInfo} 
          shows={FiList} 
          mail={FiMail} 
          toggleChat={showChat}
        />
        <div class="flex absolute left-4 bottom-4">
          <div className="pause-button">
            <Button 
              icon={pause ? FiPauseCircle : FiPlayCircle} 
              func={pauseMusic} 
              color={pause ? 'red' : 'white'}
              />
          </div>
          <div className="mute-button">
            <Button 
              icon={FiVolumeX} 
              func={muteMusic} 
              color={mute ? 'red' : 'white' }
              style={style} />
          </div>
        </div>

        {openChat && <Chat />}


        
      </div>

    </div>
  );
}

export default App;
