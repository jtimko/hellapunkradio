import React from 'react';
import { useState } from 'react'
import Header from './components/Header'
// import Player from './components/Player'
import Button from './components/Button'
import Chat from './components/Chat'
import Shows from './components/Shows'
import api from './config/api.json'
import { FiPlayCircle, FiPauseCircle, FiVolumeX, FiMessageSquare, FiInfo, FiList, FiMail } from "react-icons/fi"
import ReactAudioPlayer from 'react-audio-player';

function App() {

  const [pause, setPause] = useState(false);
  const [mute, setMute] = useState(true);
  const [station, setStation] = useState("P1nvmEvJTAo");
  const [openChat, setOpenChat] = useState(false);
  const [openShows, setShows] = useState(false);

  let iconStyle = "mx-4 h-8 w-8";

  const pauseMusic = () => {
    setPause(!pause);
  }

  const muteMusic = () => {
    setMute(!mute);
  }

  const showChat = () => {
    setOpenChat(!openChat);
    setShows(false)
  }

  const showShows = () => {
    setShows(!openShows)
    setOpenChat(false)
  }

  const changeStation = (radio) => {
    setStation(radio)
  }

  return (
    <div className="w-screen">
      <div className="hidden">
        {/* <Player id={station} pause={pause} mute={mute} change={changeStation} /> */}
        <ReactAudioPlayer
          src={api.api_radio}
          autoPlay
          controls
          muted={mute}
          change={changeStation}
          id={station}
        />
      </div>
      <div id="main" class="flex w-4/5 h-screen p-4 bg-gray-600 mx-auto relative">
        <Header
          chat={FiMessageSquare} 
          info={FiInfo} 
          shows={FiList} 
          mail={FiMail} 
          toggleChat={showChat}
          toggleShows={showShows}
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
              iconStyle={iconStyle} />
          </div>
        </div>

        {openChat && <Chat />}
        {openShows && <Shows />}


        
      </div>

    </div>
  );
}

export default App;
