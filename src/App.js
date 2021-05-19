import React from 'react';
import { useState } from 'react'
import Header from './components/Header'
// import Player from './components/Player'
import Button from './components/Button'
import Chat from './components/Chat'
import Shows from './components/Shows'
import Info from './components/Info'
import Contact from './components/Contact'
import api from './config/api.json'
import { FiVolumeX, FiMessageSquare, FiInfo, FiList, FiMail } from "react-icons/fi"
import ReactAudioPlayer from 'react-audio-player'

function App() {

  const [mute, setMute] = useState(true)
  // const [station, setStation] = useState("P1nvmEvJTAo");
  const [openChat, setOpenChat] = useState(false)
  const [openShows, setShows] = useState(false)
  const [openInfo, setInfo] = useState(false)
  const [openContact, setContact] = useState(false)

  let iconStyle = "mx-4 h-8 w-8";

  const muteMusic = () => {
    setMute(!mute);
  }

  const showChat = () => {
    setOpenChat(!openChat);
    setShows(false)
    setInfo(false)
    setContact(false)
  }

  const showShows = () => {
    setShows(!openShows)
    setOpenChat(false)
    setInfo(false)
    setContact(false)
  }

  const showInfo = () => {
    setInfo(!openInfo)
    setOpenChat(false)
    setShows(false)
    setContact(false)
  }

  const showContact = () => {
    setContact(!openContact)
    setOpenChat(false)
    setShows(false)
    setInfo(false)
  }

  // const changeStation = (radio) => {
  //   setStation(radio)
  // }

  return (
    <div className="w-screen">
      <div className="hidden">
        {/* <Player id={station} pause={pause} mute={mute} change={changeStation} /> */}
        <ReactAudioPlayer
          src={api.api_radio}
          autoPlay
          controls
          muted={mute}
        />
      </div>
      <div id="main" class="flex md:w-4/5 w-screen h-screen p-4 bg-gray-600 mx-auto relative">
        <Header
          chat={FiMessageSquare} 
          info={FiInfo} 
          shows={FiList} 
          mail={FiMail} 
          toggleChat={showChat}
          toggleShows={showShows}
          toggleInfo={showInfo}
          toggleContact={showContact}
        />
        <div class="flex absolute left-4 bottom-4">
          {/* <div className="pause-button">
            <Button 
              icon={pause ? FiPauseCircle : FiPlayCircle} 
              func={pauseMusic} 
              color={pause ? 'red' : 'white'}
              />
          </div> */}
          <div className="mute-button h-16 w-24 pb-12 border-2 border-red-600 rounded-full bg-black md:border-none md:bg-transparent">
            <Button 
              icon={FiVolumeX} 
              func={muteMusic} 
              color={mute ? 'red' : 'white' }
              iconStyle={iconStyle} />
          </div>
        </div>

        {openChat && <Chat />}
        {openShows && <Shows />}
        {openInfo && <Info />}
        {openContact && <Contact />}


        
      </div>

    </div>
  );
}

export default App;
