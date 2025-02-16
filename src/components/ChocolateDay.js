import React, { useState, useEffect } from "react";
import "../style/ChocolateDay.css";

const ChocolateDay = () => {
    const [flipped, setFlipped] = useState([false, false, false, false, false]);
    const [showSurprise, setShowSurprise] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ top: "50%", left: "50%" });

    const images = ["/assets/14.jpg", "/assets/16.jpg", "/assets/15.jpeg"];
    const messages = [
        "You're my sweetest treat! 💖",

        "Life with you is sweeter and bitter than any chocolate! 💕",
        "Your love is the best chocolate ever! 😊",
        "You're as special as dark chocolate! 🍫",
        "Every day with you is a gift! 🎁",
    ];

    const toggleFlip = (index) => {
        setFlipped((prev) => {
            const newFlip = [...prev];
            newFlip[index] = !newFlip[index];
            return newFlip;
        });
    };

    // Generate random position for button every second
    useEffect(() => {
        const interval = setInterval(() => {
            const randomTop = Math.floor(Math.random() * 80) + 10;
            const randomLeft = Math.floor(Math.random() * 80) + 10;
            setButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
        }, 2000); // Move every second

        return () => clearInterval(interval);
    }, []);

    // Handle button click
    const handleButtonClick = () => {
        const isReady = window.confirm("Are you really ready to see this?");
        if (isReady) {
            setShowSurprise(true);
        }
    };

    return (
        <div className="chocolate-day-container">
            <h1>🍫 Happy Chocolate Day, My Love! 💖</h1>

            {/* Floating Button Moves Every Second */}
            {!showSurprise && (
                <button
                    className="surprise-button"
                    onClick={handleButtonClick}
                    style={{ top: buttonPosition.top, left: buttonPosition.left }}
                >
                    🍫
                </button>
            )}

            {/* Background Dim Effect */}
            {showSurprise && <div className="overlay"></div>}

            {/* Pop-up Surprise with Letter Texture */}
            {showSurprise && (
                <div className="surprise-popup">
                    <div className="popup-content">
                        <button className="close-btn" onClick={() => setShowSurprise(false)}>
                            ✖
                        </button>
                        <img src="/assets/17.jpg" alt="Sweet Surprise" className="surprise-image" />
                        <p className="surprise-text">
                            Yup, there are many better chocolates out there 🍫🍬 <br />
                            But you are my favorite 😍❤️ <br />
                            Waiting for more such occasions where I can Eat You 😘🔥🍴
                        </p>
                    </div>
                </div>
            )}

            {/* Card Container */}
            <div className="card-container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`choco-card ${flipped[index] ? "flipped" : ""}`}
                        onClick={() => toggleFlip(index)}
                    >
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={image} alt="Chocolate" className="card-image" />
                            </div>
                            <div className="card-back">
                                <p className="card-text">{messages[index]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Message Box */}
            <div className="message-box">
                <p>
                    Just like chocolate melts in your mouth and fills your heart with
                    sweetness,
                    your love melts my worries and fills my soul with joy!
                    May our love always be as rich, smooth, and delightful as chocolate! 🍫💕
                </p>
            </div>
            <div className="falling-compliment">
                {Array.from({ length: 30 }).map((_, index) => (
                    <span key={index} className="compliment">🍫</span>
                ))}
            </div>
        </div>
    );
};

export default ChocolateDay;
