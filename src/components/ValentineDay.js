import React, { useState, useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "../style/ValentineDay.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ValentineDay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(process.env.PUBLIC_URL + "/assets/Loneliness.mp3"));
  const location = useLocation();

  const [popupStep, setPopupStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showTicTacToe, setShowTicTacToe] = useState(false);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const [ticTacToe, setTicTacToe] = useState(Array(9).fill(null));
  const [ticTacToeTurn, setTicTacToeTurn] = useState("X");

  const questions = [
    { question: "When did we had moment in Rain first time?", options: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter"], answer: "1st Quarter" },
    { question: "What is special about our dates?", options: ["Coffee", "Rain", "Snaps"], answer: "Rain" },
    { question: "When we make out specially?", options: ["Day", "Night"], answer: "Night" },
    { question: "What is more between us?", options: ["Love", "Fight"], answer: "Fight" },
    { question: "How many dates we are in?", options: ["20+", "30+", "40+"], answer: "30+" }
  ];

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
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

  // Proposal Logic
  const handleYes = () => {
    setPopupStep(3);  // Show "Thank you bebs" message
  };

  const handleNo = () => {
    if (popupStep === 0) {
      setPopupStep(1);  // Ask for one more chance
    } else if (popupStep === 1) {
      setPopupStep(2);  // Remove 'No' button and show "We look good together" message
    }
  };

  const handleBack = () => {
    setShowPopup(false);
    setPopupStep(0);
  };

  const handleProposal = (response) => {
    if (response === "yes") {
      setIsYesClicked(true);
      setShowPopup(true);
    } else if (response === "no" && questionIndex < 2) {
      setQuestionIndex(questionIndex + 1);
      setShowPopup(true);
    } else {
      setQuestionIndex(2);
      setShowPopup(true);
    }
  };

  const handleAnswerChange = (question, option) => {
    setAnswers({ ...answers, [question]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.question] === q.answer) {
        correct++;
      }
    });
    setScore(correct);
  };

  const refreshGame = () => {
    setAnswers({});
    setScore(null);
  };

  const handleTicTacToeClick = (index) => {
    if (ticTacToe[index] || checkWinner()) return;
    const newBoard = [...ticTacToe];
    newBoard[index] = ticTacToeTurn;
    setTicTacToe(newBoard);
    setTicTacToeTurn(ticTacToeTurn === "X" ? "O" : "X");
  };

  const checkWinner = () => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (ticTacToe[a] && ticTacToe[a] === ticTacToe[b] && ticTacToe[a] === ticTacToe[c]) {
        return ticTacToe[a];
      }
    }
    return null;
  };

  const winner = checkWinner();

  return (
    <div className="valentine-page">
      <h1>💖 Happy Valentine's Day! 💖</h1>

      {/* Music Section */}
      <div className="music-section">
        <div className="music-card">
          <img src="/assets/5.jpg" alt="Music Cover" className="music-cover" />
          <div className="music-info">
            <h3 className="music-title">Loneliness</h3>
            <button onClick={toggleMusic} className="music-btn">
              {isPlaying ? "Pause Romantic Music 🎶" : "Play Romantic Music 🎵"}
            </button>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="gallery-section">
        <h2>Memories Together 📸</h2>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          {["/assets/kissimg1.jpg", "/assets/kissimg2.webp", "/assets/kissimg3.jpg", "/assets/hug1.jpg"].map((img, idx) => (
            <div className="slide" key={idx}>
              <img src={img} alt={`Memory ${idx + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Proposal Section */}
      <div className="proposal-section">
        <button className={`proposal-btn ${isYesClicked ? "yes-clicked" : ""}`} onClick={() => handleProposal("yes")}>
          Will You Be My Valentine? 💘
        </button>
      </div>

      {/* Proposal Popup */}
      {showPopup && (
        <div className="popup-overlay2">
          <div className="popup-content2">
            {popupStep === 0 && (
              <>
                <h3>Will you be my Valentine? 🥰</h3>
                <button onClick={handleYes} className="popup-btn">Yes</button>
                <button onClick={handleNo} className="popup-btn">No</button>
              </>
            )}
            {popupStep === 1 && (
              <>
                <h3>Give me one more chance? 🥺</h3>
                <button onClick={handleYes} className="popup-btn">Yes</button>
                <button onClick={handleNo} className="popup-btn">No</button>
              </>
            )}
            {popupStep === 2 && (
              <>
                <h3>We look good together 😍 Please "YES"</h3>
                <button onClick={handleYes} className="popup-btn">Yes</button>
              </>
            )}
            {popupStep === 3 && (
              <>
                <h3>Thank you bebs... ❤️</h3>
                <button onClick={handleBack} className="popup-btn">Back</button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Button to open Game Section */}
      {!showGame && (
        <button className="play-game-btn" onClick={() => setShowGame(true)}>
          Know Us?? Game 🎲
        </button>
      )}

      {/* Game Section */}
      {showGame && (
        <div className="game-section">
          <h2>💌 How much do you know about me? 💌</h2>
          {questions.map((q, index) => (
            <div key={index} className="question-card">
              <h3>{q.question}</h3>
              {q.options.map((option, idx) => (
                <button key={idx} className={`option-btn ${answers[q.question] === option ? (option === q.answer ? "correct" : "incorrect") : ""}`}
                  onClick={() => handleAnswerChange(q.question, option)}>
                  {option}
                </button>
              ))}
            </div>
          ))}
          <button className="submit-btn" onClick={handleSubmit}>Submit Answers</button>
          {score !== null && <h3>You got {score} out of {questions.length} correct! 🎉</h3>}
          <button className="popup-btn" onClick={refreshGame}>Refresh Game</button>
          <button className="popup-btn" onClick={() => setShowGame(false)}>Close Game</button>
        </div>
      )}

      {/* Tic-Tac-Toe Game */}
      {!showTicTacToe && (
        <button className="play-game-btn" onClick={() => setShowTicTacToe(true)}>
          Play Tic-Tac-Toe 🕹️
        </button>
      )}

      {showTicTacToe && (
        <div className="game-section">
          <h2>Tic-Tac-Toe</h2>
          <div className="tic-tac-toe">
            {ticTacToe.map((value, index) => (
              <button key={index} className="tic-tac-toe-cell" onClick={() => handleTicTacToeClick(index)}>
                {value}
              </button>
            ))}
          </div>
          {winner && <h3>{winner} Wins! 🎉</h3>}
          <button className="popup-btn" onClick={() => setTicTacToe(Array(9).fill(null))}>Restart</button>
          <button className="popup-btn" onClick={() => setShowTicTacToe(false)}>Close Tic-Tac-Toe</button>
        </div>
      )}

      <div className="falling-compliment">
        {Array.from({ length: 30 }).map((_, index) => (
          <span key={index} className="compliment">💏</span>
        ))}
      </div>
    </div>
  );
};

export default ValentineDay;
