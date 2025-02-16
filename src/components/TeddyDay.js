import React, { useState, useEffect } from "react";
import "../style/TeddyDay.css";

const TeddyDay = () => {
  const texts = [
    "You are my Teddy Bebs",
    "You always sleep... 😴",
    "Then... This is you...😮‍💨",
    "This is you... Again...🤭",
    "And again... This is you... 😂",
    "💞 US 💞"
  ];

  const images = [
    process.env.PUBLIC_URL + "/assets/25.jpg",
    process.env.PUBLIC_URL + "/assets/26.jpg",
    process.env.PUBLIC_URL + "/assets/24.jpg",
    process.env.PUBLIC_URL + "/assets/37.jpg"
  ];  

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < texts.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 4000); // Delay between text and image appearance
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const restartSequence = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="teddy-day-page">
      <h1 className="teddy-heading">Happy Teddy Day! 🧸</h1>
      
      <div className="sequence-container">
        {texts.slice(0, currentIndex + 1).map((text, index) => (
          <div key={index} className="text-image-pair">
            <p className="fade-in">{text}</p>
            {/* Show image right after text */}
            {index > 1 && images[index - 2] && (
              <img
                src={images[index - 2]}
                alt={`Teddy ${index - 1}`}
                className="fade-in-img"
              />
            )}
          </div>
        ))}
      </div>

      {currentIndex >= texts.length && (
        <div className="end-message">
          <h2>You're my cutest teddy! 🧸❤️</h2>
          <button className="restart-btn" onClick={restartSequence}>
            See Again ↻
          </button>
        </div>
      )}

      {/* Floating Hearts Animation */}
      <div className="floating-hearts">
        <span className="heart">🧸</span>
        <span className="heart">🧸</span>
        <span className="heart">🧸</span>
        <span className="heart">🧸</span>
        <span className="heart">🧸</span>
      </div>
    </div>
  );
};

export default TeddyDay;
