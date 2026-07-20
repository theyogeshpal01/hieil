import React, { useState, useEffect } from 'react';
import { FaBars, FaMoon, FaSun, FaRegCalendarAlt } from 'react-icons/fa';

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
    <header className="h-[70px] bg-white dark:bg-[#1a1c23] border-b border-slate-200 dark:border-gray-800 flex items-center justify-between px-5 sticky top-0 z-[999] transition-colors duration-300">
      <div className="flex items-center">
        <button 
          className="bg-transparent border-none text-[20px] text-slate-600 dark:text-gray-300 cursor-pointer p-2 rounded flex items-center justify-center transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-gray-800" 
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        <div className="hidden sm:flex items-center ml-5 text-[14px] text-slate-600 dark:text-gray-300 font-semibold font-sans tracking-[0.3px] bg-slate-100 dark:bg-gray-800 px-3.5 py-1.5 rounded-full transition-colors duration-300">
          <FaRegCalendarAlt className="text-blue-500 mr-2 text-[16px]" />
          <span>{currentDateTime}</span>
        </div>
      </div>
      <div className="flex items-center">
        <button 
          className="bg-transparent border-none text-[18px] text-slate-600 dark:text-gray-300 cursor-pointer p-2 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-gray-800" 
          onClick={toggleTheme}
        >
          {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
