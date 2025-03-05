// eslint-disable-next-line
import React, { useRef, useEffect } from "react";
import "./VideoPlayer.css";
import video from "../../../public/video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const videoRef = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  useEffect(() => {
    if (playState) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [playState]);

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video ref={videoRef} src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
