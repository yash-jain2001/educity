import React, { useRef } from 'react'
import './VideoPlayer.css'


function VideoPlayer({playState,setPlayState}) {

  const player=useRef(null);
  const closePlayer=(e)=>{
    if(e.target==player.current){
      setPlayState(false);
    }
  }

  return (
    <div className={`video-player ${playState?"":'hide'}`} ref={player} onClick={closePlayer}>
        <video src="/src/assets/Snapchat-647090137.mp4" autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer