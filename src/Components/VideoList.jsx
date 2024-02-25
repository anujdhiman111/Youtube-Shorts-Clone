import React, { useRef, useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import videosData from "../Data/videosInfo.json";

const VideoList = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      console.log("entered");
      const scrollTop = containerRef.current.scrollTop;
      const videoHeight = containerRef.current.clientHeight;
      const newActiveIndex = Math.floor(scrollTop / videoHeight);
      setActiveVideoIndex(newActiveIndex);
    };

    containerRef.current.addEventListener("scroll", handleScroll);

    // return () => {
    //   containerRef.current.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        const direction = event.key === "ArrowUp" ? -1 : 1;
        let newIndex = activeVideoIndex + direction;
        const videosCount = videosData.length;
        console.log(newIndex, "  ", videosCount);
        if (newIndex >= videosCount || newIndex < 0) {
          newIndex = 0;
        }

        setActiveVideoIndex(newIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideoIndex]);

  return (
    <div className="video-list" ref={containerRef}>
      {videosData.map((video, index) => (
        <VideoPlayer
          key={video.id}
          video={video}
          isActive={index === activeVideoIndex}
        />
      ))}
    </div>
  );
};

export default VideoList;
