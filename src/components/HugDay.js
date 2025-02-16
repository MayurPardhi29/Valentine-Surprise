import React from "react";
import "../style/HugDay.css";

const HugDay = () => {
  return (
    <div className="hug-day-page">
      <h1 className="title">Happy Hug Day! 🤗</h1>
      <div className="hearts-container">
        <div className="heart blue-heart"></div>
        <div className="heart pink-heart"></div>
        <div className="central-heart">❤️</div>
      </div>
      <p className="message">
        When two hearts hug, they light up even the darkest night. 🌅
      </p>
      <img src={process.env.PUBLIC_URL + "/assets/hug1.jpg"} alt="Example" className="centered-image"/>
      <div className="falling-compliment">
                {Array.from({ length: 30 }).map((_, index) => (
                    <span key={index} className="compliment">🤗</span>
                ))}
            </div>
    </div>
  );
};

export default HugDay;
