import React from 'react'
import './SongsList.css'
export default function SongsList(props) {
    const handleClick=(event)=>{
        console.log(event.target.id);
        props.setSong((event.target.id));
    }
  return (
    <div className="set">
    {props.songs.map((song,i)=>(
        <button id={i+1} className="btn" style={{backgroundImage: `url("images/m-${i+1}.jpg")`}} onClick={handleClick}>{i+1}</button>
   
    ))}
    </div>
  )
}
