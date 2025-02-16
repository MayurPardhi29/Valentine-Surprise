import React, { useState, useEffect } from "react";
import "../style/PromiseDay.css";

const PromiseDay = () => {
  const promises = [
    "I promise to be your shoulder to lean on.",
    "I promise to celebrate every victory with you.",
    "I promise to wipe away your tears.",
    "I promise to cherish every moment with you."
  ];

  const images = [
    process.env.PUBLIC_URL + "/assets/32.jpg",
    process.env.PUBLIC_URL + "/assets/33.jpg",
    process.env.PUBLIC_URL + "/assets/34.jpg",
    process.env.PUBLIC_URL + "/assets/36.jpg"
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  // Reveal promises on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const revealIndex = Math.floor(scrollPosition / 400);
      if (revealIndex < promises.length) {
        setVisibleIndex(revealIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="promise-day-feed">
      <h1 className="header-promise">Happy Promise Day! 💖</h1>

      <div className="promise-cards">
        {promises.map((promise, index) => (
          <div
            key={index}
            className={`card ${visibleIndex >= index ? "visible" : ""}`}
          >
            <img src={images[index]} alt={`Promise ${index + 1}`} className="card-img" />
            <p className="card-text">{promise}</p>
          </div>
        ))}
      </div>

      {/* Floating Hearts for Romantic Touch */}
      <div className="floating-hearts">
        <span className="heart">❤️</span>
        <span className="heart">💖</span>
        <span className="heart">💗</span>
        <span className="heart">💕</span>
        <span className="heart">💞</span>
      </div>
    </div>
  );
};

export default PromiseDay;
