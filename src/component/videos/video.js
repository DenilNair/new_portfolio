// js
import React from 'react';
import { useParams } from 'react-router-dom/dist';
import YouTube from 'react-youtube';
import './video.css';

const  VideoPlayer=()=>  {
      // YOUTUBE VIDEO FUNCTION
  const opts = {
    width: "100%",
    borderRadius: "2rem",
    playerVars: { autoplay: 1 },
  };
  const videoReady = (event) => {
    event.target.pauseVideo();
  };
  
const [screenMode]="black";
  const {id} = useParams();
  const siteStyle={
    backgroundColor:screenMode
  }
 return(<div className='videoStyle'>
    <h1>YouTube Player</h1>
      <div>
        <div
          style={{
            maxWidth: "800px",
            margin: "auto",
            marginTop: "12px",
            minHeight: "30vh",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor:screenMode,
          }}
        >
          <YouTube
            videoId={id}
            opts={opts}
            onReady={videoReady}
          />
        </div>
      </div></div>
 );
  }


  


export default VideoPlayer;