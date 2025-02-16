import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import RoseDay from './RoseDay';
import ProposeDay from './ProposeDay';
import ChocolateDay from './ChocolateDay';
import TeddyDay from './TeddyDay';
import ValentineDay from './ValentineDay';
import PromiseDay from './PromiseDay';
import HugDay from './HugDay';
import KissDay from './KissDay';
import { FaBars } from 'react-icons/fa';
import '../App.css';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation(); // Get current route

  // // Set color based on the route
  // const heartColor = location.pathname.includes("chocolate-day") || location.pathname.includes("propose-day")
  // ? "var(--love-red)"
  // : "var(--love-pink)";

  const heartColor = getComputedStyle(document.documentElement).getPropertyValue('--love-pink').trim();

  const createHearts = () => {
    const hearts = [];
    for (let i = 0; i < 20; i++) {
      hearts.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        size: Math.random() * 20 + 10
      });
    }
    return hearts;
  };

  return (
    <div className="home-container">
      <button
        className="menu-toggle" 
        style={{backgroundColor: 'brown'}}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars />
      </button>

      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className={`content ${!isSidebarOpen ? 'full-width' : ''}`}>
        <div className="hearts-background">
          {createHearts().map(heart => (
            <div
              key={heart.id}
              className="heart"
              style={{
                left: `${heart.left}%`,
                animationDelay: `${heart.delay}s`,
                fontSize: `${heart.size}px`,
                color: heartColor
              }}
            >
              ❤
            </div>
          ))}
        </div>

        {/* ✅ Show text ONLY on `/home` */}
        {location.pathname === "/home" && (
          <div className='Home-Text'>
            <h3>Love Me Like There is No Tomorrow <br />👉👈</h3>
          </div>
        )}

        <Routes>
          <Route path="rose-day" element={<RoseDay />} />
          <Route path="propose-day" element={<ProposeDay />} />
          <Route path="chocolate-day" element={<ChocolateDay />} />
          <Route path="teddy-day" element={<TeddyDay />} />
          <Route path="promise-day" element={<PromiseDay />} />
          <Route path="hug-day" element={<HugDay />} />
          <Route path="kiss-day" element={<KissDay />} />
          <Route path="valentine-day" element={<ValentineDay />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
