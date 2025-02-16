import { useEffect } from "react";
import { Link } from "react-router-dom";
import NotificationBanner from "./NotificationBanner"; // Import the notification bar

const LandingPage = () => {
  useEffect(() => {
    const createHearts = () => {
      const container = document.querySelector(".landing");
      for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "love-bg";
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = Math.random() * 100 + "%";
        heart.style.animation = `float ${15 + Math.random() * 15}s infinite`;
        container.appendChild(heart);
      }
    };
    createHearts();
  }, []);

  return (
    <div className="landing">
      <NotificationBanner />
      <h1>❤ Hello My Cutie ❤</h1>
      <Link to="/home">
        <button className="enter">Happy Valentine Week Dear 🍫</button>
      </Link>
    </div>
  );
};

export default LandingPage;
