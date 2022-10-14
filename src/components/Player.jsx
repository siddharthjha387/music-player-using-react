import React, { useEffect } from "react";
import "./Player.css";
export default function Player(prop) {
    const pause=prop.pause;
    const setPause=prop.setPause; 
    
    const handlePlayPause=()=>{
 
        if(pause===1)
        {
            setPause(0);
            document.querySelector("audio").play();
            document.getElementById("play").classList.replace("fa-play", "fa-pause");
        }
        else{
            setPause(1);
            document.querySelector("audio").pause();
            document.getElementById("play").classList.replace("fa-pause", "fa-play");
        }
    }

    useEffect(()=>{
     
      if(pause===0)
      {
        document.querySelector("audio").play();
      }
    },[prop.currSong,pause]);
  
  return (
   
      <div className="main_container">
         <div className="music_player">
           <h2 id="name">{prop.currSong.name}</h2>
           <h3 id="artist">{prop.currSong.artist}</h3>
           <div className="img_container">
             <img id="themeimg" src={prop.song.image} alt="" />
             <div className="music_controls">
               <i className="fas fa-backward" id="prev" onClick={prop.handleprevClick}></i>
               <i className="fas fa-play main_button" id="play" onClick={handlePlayPause}></i>
               <i className="fas fa-forward" id="next" onClick={prop.handlenextClick}></i>
             </div>
             <audio src={prop.song.music} className="playerAudio"></audio>
           </div>
         </div>
    </div>
  );
}
