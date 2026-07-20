import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {isSidebarOpen && (
        <div 
          className="hidden max-md:block fixed inset-0 w-full h-screen bg-black/50 z-[999]" 
          onClick={toggleSidebar}
        ></div>
      )}
      
      <div 
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-[260px] max-md:ml-0' : 'ml-[70px] max-md:ml-0'
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
