import React, { useState, useEffect } from 'react';
import { FaBars, FaMoon, FaSun, FaRegCalendarAlt, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';

const Header = ({ toggleSidebar }) => {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const fetchNotifications = async () => {
    try {
      const res = await api.get('/notifications');
      setNotifications(res.data);
    } catch (err) {
      console.error('Failed to fetch notifications', err);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const notifInterval = setInterval(fetchNotifications, 30000); // Check every 30s
    return () => clearInterval(notifInterval);
  }, []);

  const handleNotificationClick = async (notif) => {
    try {
      if (!notif.isRead) {
        await api.put(`/notifications/${notif._id}/read`);
        setNotifications(notifications.map(n => n._id === notif._id ? { ...n, isRead: true } : n));
      }
      setShowNotifications(false);
      navigate(notif.link);
    } catch (err) {
      console.error('Failed to mark read', err);
    }
  };

  const markAllAsRead = async () => {
    try {
      await api.put('/notifications/read-all');
      setNotifications(notifications.map(n => ({ ...n, isRead: true })));
    } catch (err) {
      console.error('Failed to mark all read', err);
    }
  };

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
      <div className="flex items-center gap-2">
        <div className="relative">
          <button 
            className="bg-transparent border-none text-[18px] text-slate-600 dark:text-gray-300 cursor-pointer p-2 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-gray-800 relative" 
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <FaBell />
            {notifications.filter(n => !n.isRead).length > 0 && (
              <span className="absolute top-[4px] right-[4px] bg-red-500 text-white text-[10px] w-[16px] h-[16px] flex items-center justify-center rounded-full font-bold">
                {notifications.filter(n => !n.isRead).length > 9 ? '9+' : notifications.filter(n => !n.isRead).length}
              </span>
            )}
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-[300px] bg-white dark:bg-[#1a1c23] border border-slate-200 dark:border-gray-800 shadow-lg rounded-lg overflow-hidden z-[1000]">
              <div className="flex justify-between items-center p-3 border-b border-slate-200 dark:border-gray-800">
                <h3 className="m-0 text-[14px] font-semibold text-slate-700 dark:text-gray-200">Notifications</h3>
                <button onClick={markAllAsRead} className="bg-transparent border-none text-[12px] text-blue-500 cursor-pointer hover:underline">Mark all read</button>
              </div>
              <div className="max-h-[350px] overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-slate-500 text-[13px]">No notifications</div>
                ) : (
                  notifications.map((notif) => (
                    <div 
                      key={notif._id} 
                      onClick={() => handleNotificationClick(notif)}
                      className={`p-3 border-b border-slate-100 dark:border-gray-800 cursor-pointer transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-gray-800 ${!notif.isRead ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}
                    >
                      <p className={`m-0 text-[13px] ${!notif.isRead ? 'font-semibold text-slate-800 dark:text-gray-100' : 'text-slate-600 dark:text-gray-300'}`}>{notif.title}</p>
                      <p className="m-0 text-[12px] text-slate-500 dark:text-gray-400 mt-1 line-clamp-2">{notif.message}</p>
                      <p className="m-0 text-[10px] text-slate-400 mt-1">{new Date(notif.createdAt).toLocaleString()}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
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
