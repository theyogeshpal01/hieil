import React, { useState, useEffect } from 'react';
import { FaBars, FaMoon, FaSun, FaRegCalendarAlt } from 'react-icons/fa';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (document.body.classList.contains('dark-mode')) {
      setIsDarkMode(true);
    }

    const updateTime = () => {
      const now = new Date();
      const optionsDate = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
      const dateStr = now.toLocaleDateString('en-GB', optionsDate);
      const timeStr = now.toLocaleTimeString('en-US');
      setCurrentDateTime(`${dateStr} | ${timeStr}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      setIsDarkMode(false);
    } else {
      document.body.classList.add('dark-mode');
      setIsDarkMode(true);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className="header-datetime">
          <FaRegCalendarAlt className="calendar-icon" />
          <span>{currentDateTime}</span>
        </div>
      </div>
      <div className="header-right">
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
