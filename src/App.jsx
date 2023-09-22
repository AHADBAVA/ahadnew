import React, { useState } from 'react';
import './App.css';

import desktopImage from './assets/images/programmer_v_02-removebg-preview.png'; // Import your desktop image

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`md:hidden fixed top-0 left-0 w-16 h-16 bg-blue-600 text-white flex items-center justify-center transform transition-transform duration-300 hover:bg-blue-700 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {isSidebarOpen ? 'Off' : 'On'}
      </button>

      {/* Main Content */}
      <div className={`flex-grow bg-gray-100 flex flex-col justify-center items-center ${isSidebarOpen ? 'ml-24' : 'ml-0'} transition-margin duration-300`}>
        <div className="text-black text-center">
          <h4 className="text-4xl text-black md:text-5xl lg:text-4xl font-bold">Hey Its Me</h4>
          <h4 className="text-4xl text-black md:text-5xl lg:text-6xl font-bold">Abdul Ahad</h4>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">Front-End Developer & UI/UX Desginer</p>
        </div>

        {/* Show image only on desktop and laptops */}
        <img
          src={desktopImage}
          alt="Desktop Image"
          className="hidden md:block max-w-full md:max-w-screen-xl mt-8"
        />
        <a href="https://t.me/Telagramuserofficial"><button className='text-white font-bold bg-purple-600 w-40 h-10 rounded-'>Contact Me</button></a>

      </div>
    </div>
  );
}

export default App;
