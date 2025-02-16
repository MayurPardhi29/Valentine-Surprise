import { useState, useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import "../style/ProposeDay.css";

const ProposeDay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const audioRef = useRef(new Audio("/assets/SweetTalk.mp3"));
  const location = useLocation();

  const [showLetter, setShowLetter] = useState(false);

  const toggleLoveLetter = () => {
    setShowLetter(!showLetter);

    // Scroll smoothly to the letter when opened
    if (!showLetter) {
      setTimeout(() => {
        document.querySelector(".love-letter").scrollIntoView({ behavior: "smooth" });
      }, 300); // Delay ensures it happens after the letter becomes visible
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause music
    } else {
      audioRef.current.play(); // Resume from pause
    }
    setIsPlaying(!isPlaying);
  };

  // Stop the music when route changes or component unmounts
  useEffect(() => {
    // Stop the music when route changes
    const stopMusicOnRouteChange = () => {
      audioRef.current.pause();
      setIsPlaying(false);
    };

    // Call the function initially in case the component is reused
    stopMusicOnRouteChange();

    // Cleanup function to stop music when component unmounts
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset playback to the start
    };
  }, [location.pathname]); // Dependency on route change


  const handleYesClick = () => {
    setShowMessage(true);
  };

  const closePopup = () => {
    setShowMessage(false);
  };


  return (
    <div className="propose-day">
      {/* Header */}
      <h1>Propose Day 💍</h1>
      <h3>💘💞 This is My Proposal Bebs 💘💞</h3>

      {/* Music Section */}
      <div className="music-section">
        <button onClick={toggleMusic} className="music-btn">
          {isPlaying ? "Pause Romantic Music 🎶" : "Play Romantic Music 🎵"}
        </button>
      </div>


      {/* Proposal Image */}
      <div className="proposal-section">
        <img src="/assets/7.jpg" alt="A cute cat with a proposal theme" className="proposal-img" />
      </div>

      {/* Poem */}
      <div className="poem-section">
        <h2 style={{ fontSize: "1.8rem", padding: "1px" }}>Proposal for You Baby💖</h2>
        <p>
          "In your eyes, I see my home, <br />
          With you, I’ll never be alone. <br />
          Thank you for being with me, <br />
          Today, I kneel and ask: <strong>Will you be my KuchuPuchu?</strong>"
        </p>
      </div>

      {/* YES Button */}
      <div className="yes-button-container">
        <button onClick={handleYesClick} className="yes-button">💕 Yes? 💕</button>
      </div>

      {/* Message & Image after Clicking "Yes" */}
      {showMessage && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img src="/assets/8.jpg" alt="Romantic couple celebrating" className="love-img" />
            <h2>Thank you Babe, Love You so much! ❤️</h2>
            <button onClick={closePopup} className="close-popup">Close</button>
          </div>
        </div>
      )}

      {/* Love Letter Section */}
      <div className="love-letter-container">
        <button onClick={toggleLoveLetter} className="reveal-letter-btn">
          {showLetter ? "💌 Hide Love Letter 💌" : "💌 Open Love Letter 💌"}
        </button>

        <div className={`love-letter ${showLetter ? "show" : ""}`}>
          <p>
            <br />From the moment I met you, I never imagined you would become such an important part of my life. 💖<br />
            <br />
            We've shared so many beautiful moments, and I promise to cherish you. 💕🌸<br />
            <br />
            I know we fight a lot, act crazy in love, and sometimes 🤭🔥<br />
            <br />
            But, I promise to always be there for you, to support you, to love you unconditionally. 🌹🤍<br />
            <br />
            No one else could handle me the way you do. 💞 Without you, I don’t even know where I’d be. 🌍💭<br />
            <br />
            Thank you for always being there, for grounding me, for loving me despite my flaws. 🤍🙏 <br />
            I love you, my Dumb. ❤️🤗<br />
            <br />
          </p>

        </div>
      </div>

      <div className="falling-compliment">
        {Array.from({ length: 30 }).map((_, index) => (
          <span key={index} className="compliment">💏</span>
        ))}
      </div>

    </div>
  );
};

export default ProposeDay;
