import React, { useEffect, useState } from "react";
import mp3Sound from '../sound/ting.mp3';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  // useEffect(() => {
  //   audio.addEventListener('ended', () => setPlaying(false));
  //   return () => {
  //     audio.removeEventListener('ended', () => setPlaying(false));
  //   };
  // }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  // const [playing, toggle] = useAudio(mp3Sound);
  const [audio] = useState(new Audio(mp3Sound));
  audio.autoplay = true;
  audio.muted = true;
  audio.allow="autoplay" 

  useEffect(() => {
    if(audio){
      console.log(audio)
      audio.muted = true; 
      audio.play();
    }
  });

  return (
    <div>
      {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
      <button onClick={() => audio.play()}>Play</button>
    </div>
  );
};

export default Player;