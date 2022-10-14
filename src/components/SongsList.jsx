import React from 'react'
import './SongsList.css'
export default function SongsList(props) {

 
    
    const handleClick=(event)=>{
        
        props.setSong((event.target.id));
        props.setPause(0);
        document.querySelector("audio").play();
        document.getElementById("play").classList.replace("fa-play", "fa-pause");
    }
  return (
    <div className="set">
    {props.songs.map((song,i)=>(
        <button id={i+1} className="btn" style={{backgroundImage: `url("images/m-${i+1}.jpg")`}} onClick={handleClick}>{i+1}</button>
   
    ))}
    </div>
  )
}
