import React, { useState } from 'react';
import Navbar_icon from "../../assets/images/navbar.svg";
import Manager_icon from "../../assets/images/hr-manager.png";
import Bell_icon from "../../assets/images/bell icon.png";
import Profile_image from "../../assets/images/Profile.png";
import Sidebar from '../../sidebar/SideBar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-white py-2 sm:py-4 md:py-6 font-sans">
        <div className="container mx-auto flex items-center justify-between px-2 sm:px-4 md:px-6 py-2">
          {/* Hamburger Menu */}
          <div className="text-xl sm:text-2xl cursor-pointer w-6 sm:w-8 md:w-[2.313rem]" onClick={toggleSidebar}>
            <img src={Navbar_icon} alt="Navbar icon" className="w-full" />
          </div>

          {/* Profile Section */}
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-[4.487rem] md:h-[4.487rem]">
                <img src={Profile_image} alt="Profile pic" className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-base sm:text-lg md:text-xl">Bella Famina</span>
                <span className="text-xs sm:text-sm md:text-[1.104rem] text-gray-500">Joined 2 months ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-8 text-gray-600">
              <img src={Manager_icon} alt="Manager icon" className="w-6 sm:w-8 md:w-[2.876rem] h-6 sm:h-8 md:h-[2.876rem]" />
              <div className="relative">
                <img src={Bell_icon} alt="Bell icon" className="w-6 sm:w-8 md:w-[2.655rem] h-6 sm:h-8 md:h-[2.655rem]" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#5679FF] absolute top-1 right-[0.15rem] md:top-1 md:right-1 lg:top-1 lg:right-1"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar with Blur Effect on Content */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Dimmed Overlay for Background */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-90 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Header;
