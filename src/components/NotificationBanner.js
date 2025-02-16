import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import "../App.css"; // Ensure styles are imported

const messages = [
  "Hello Dear, Sorry for all the mistakes I make. The least I can do is this..",
  <>Hope You Like It.. <FaHeart className="heart-icon" /></>,
  "Open It Everyday, It's a Surprise",
  "So don't miss it!!!", "Open in Desktop Mode"
];

const NotificationBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notification-banner">
      <h2 className={`notification-text ${index % 2 === 0 ? "red" : "blue"}`}>
        {messages[index]}
      </h2>
    </div>
  );
};

export default NotificationBanner;
