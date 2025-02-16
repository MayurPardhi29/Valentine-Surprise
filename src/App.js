import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import './App.css';
import ValentineDay from './components/ValentineDay';

function App() {
  return (
    <Router basename="/Valentine-Surprise"> {/* Add repo name */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home/*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
