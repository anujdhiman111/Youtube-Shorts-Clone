import React, { useRef, useEffect, useState } from "react";

const VideoPlayer = ({ video, isActive }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [likes, setLikes] = useState(video.likeCount || 0);
  const [dislikes, setDislikes] = useState(video.dislikeCount || 0);

  useEffect(() => {
    if (isActive) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive, isPlaying]);

  const togglePlayPause = () => {
    if (isActive) {
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    }
  };

  const handleLike = () => {
    if (isActive) {
      setLikes((prevLikes) => prevLikes + 1);
    }
  };

  const handleDislike = () => {
    if (isActive) {
      setDislikes((prevDislikes) => prevDislikes + 1);
    }
  };

  return isActive ? (
    <div className="video-player-container">
      <div className={`video-player ${isActive ? "active" : ""}`}>
        <video muted controls autoPlay ref={videoRef} src={video.url} />
        <h2>{video.title}</h2>
        <div>
          <button onClick={togglePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={handleLike}>Like {likes}</button>
          <button onClick={handleDislike}>Dislike {dislikes}</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default VideoPlayer;
