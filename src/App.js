import { useState } from "react";
import "./App.css";
import Player from './components/Player';
import SongsList from "./components/SongsList";
import songs from './songs';
function App() {
const [currSong,setCurrSong]=useState(0);

const handleprevClick= async ()=>{
  setCurrSong(((currSong-1+(songs.length))%(songs.length)));
}

const handlenextClick=()=>{
  setCurrSong(((currSong+1)%(songs.length)));
}

const setSong=(index)=>{
  setCurrSong(index-1);
  animation(index)
}

const animation=(ch)=> {
  document.getElementById(ch).classList.add("pressed");
  setTimeout(function () {
    document.getElementById(ch).classList.remove("pressed");
  }, 300);
}
  return (
    <div className="App">
      <h1 id="title">Music Player</h1>
      <Player song={songs[currSong]} handleprevClick={handleprevClick} handlenextClick={handlenextClick}/>
      <SongsList songs={songs} setSong={setSong}/>
    </div>
  );
}

export default App;
