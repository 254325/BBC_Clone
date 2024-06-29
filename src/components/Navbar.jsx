import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Logo from '../assets/BBC-Logo.png';
import Sidebar from './Sidebar';
import SecondNavbar from './SecondNavbar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Effect to toggle body overflow
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  return (
    <div className='sticky top-0 w-full z-50'>
      
      {/* Navbar */}
      <div className='sticky w-full h-[65px] flex justify-between items-center border-b px-4 z-100 top-0 left-0 right-0 z-50 bg-white'>        {/* Left Menu */}
        <div className='flex items-center'>
          <FaBars onClick={toggleSidebar} className='mr-7 w-[20px] h-[20px] cursor-pointer' />
          <FaMagnifyingGlass className='w-[20px] h-[20px]' />
        </div>

        {/* Logo */}
        <div className='absolute left-1/2 transform -translate-x-1/2'>
          <img src={Logo} className='w-[100px]' alt="BBC Logo" />
        </div>

        {/* Right Menu */}
        <div className='flex items-center'>
          <div className='hidden sm:flex text-white font-semibold'>
            <button className='btn bg-black py-[2px] px-[8px]'>Register</button>
            <button className='btn ml-[10px] text-black py-[2px] px-[8px] hover:bg-black hover:text-white'>Sign in</button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar />
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div className='fixed inset-0 bg-black opacity-50 z-30' onClick={toggleSidebar}></div>
      )}

      {/* SecondNavbar */}
      <SecondNavbar />

      
    </div>
  );
};

export default Navbar;
