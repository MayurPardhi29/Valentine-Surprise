import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const days = [
    { id: 1, name: 'Rose Day', path: 'rose-day' },
    { id: 2, name: 'Propose Day', path: 'propose-day' },
    { id: 3, name: 'Chocolate Day', path: 'chocolate-day' },
    { id: 4, name: 'Teddy Day', path: 'teddy-day' },
    { id: 5, name: 'Promise Day', path: 'promise-day' },
    { id: 6, name: 'Hug Day', path: 'hug-day' },
    { id: 7, name: 'Kiss Day', path: 'kiss-day' },
    { id: 8, name: 'Valentine Day', path: 'valentine-day' },
  ];

  return (
    <div className={`sidebar ${!isOpen ? 'closed' : ''}`}>
      <div className="sidebar-header">
        <h2> Valentine Week 🌹</h2>
        {/* <FaRing className="silver-icon" style={{ color: 'var(--love-silver)' }} /> */}
        <FaTimes className="close-icon" onClick={toggleSidebar} />
      </div>
      <ul>
        {days.slice(0, 8).map(day => (
          <li key={day.id===1}>
            <Link to={`/home/${day.path}`} onClick={toggleSidebar}>
              {/* <FaRing className="link-heart" /> */}
              💏
              {day.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;