import React, { useRef, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import "../style/KissDay.css";

const KissDay = () => {
  const audioRef = useRef(new Audio(process.env.PUBLIC_URL + "/assets/Jasmine.mp3"));
  const location = useLocation();
  const [showPlayButton, setShowPlayButton] = useState(true);

  // Attempt to autoplay but show button if blocked
  const playMusic = async () => {
    try {
      await audioRef.current.play();
      audioRef.current.loop = true;
      setShowPlayButton(false); // Hide button if autoplay works
    } catch (err) {
      console.log("Autoplay blocked:", err);
      setShowPlayButton(true); // Show button if autoplay fails
    }
  };

  useEffect(() => {
    playMusic();
    // Cleanup: Pause and reset audio on unmount
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  // Stop the music when route changes
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }, [location.pathname]); // Detects route change

  const videos = [
    "/assets/kissvdo1.mp4",
    "/assets/kissvdo2.mp4",
    "/assets/kissvdo3.mp4"
  ];

  const images = [
    "/assets/kissimg1.jpg",
    "/assets/kissimg2.webp",
    "/assets/kissimg3.jpg"
  ];

  const handleMouseEnter = (event) => {
    const video = event.target;
    setTimeout(() => {
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }, 200); // Small delay to prevent rapid play-pause
  };

  const handleMouseLeave = (event) => {
    event.target.pause();
  };

  return (
    <div className="kiss-day-page">
      <h1 className="header-kiss">Happy Kiss Day 💋</h1>
      <p className="kiss-description">
        A compliment is a whisper of love, a gentle touch of affection, and a promise of forever. 
        It speaks the language of the heart, louder than words. 
        May this compliment Day bring you endless smiles and cherished moments!
      </p>

      {showPlayButton && (
        <button onClick={playMusic} className="play-music-button">
          Play and Enjoy 🎵
        </button>
      )}

      <h2 className="sub-title">Memorable Moments</h2>
      <div className="video-scroller">
        {videos.map((video, index) => (
          <video
            key={index}
            className="scroller-video"
            muted
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            loop
          >
            <source src={process.env.PUBLIC_URL + video} type="video/mp4" />
          </video>
        ))}
      </div>

      <h2 className="sub-title">Captured Emotions</h2>
      <div className="image-scroller">
        {images.map((img, index) => (
          <img key={index} src={process.env.PUBLIC_URL + img} alt={`Memory ${index + 1}`} className="scroller-image" />
        ))}
      </div>

      <div className="falling-compliment">
        {Array.from({ length: 30 }).map((_, index) => (
          <span key={index} className="compliment">💋</span>
        ))}
      </div>
    </div>
  );
};

export default KissDay;
