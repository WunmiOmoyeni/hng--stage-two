import React, { useState } from 'react';
import profile from '../images/User-r.svg';
import caret from '../images/CaretDown-r.svg';
import cart from '../images/cart.svg';
import horizont from '../images/horizont.svg';
import hamburger from '../images/hamburger.svg';

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <section>
      <div className='flex justify-between py-5 px-0 md:px-10 md:shadow-md md:shadow-gray-300 overflow-hidden'>
      <img
            src={hamburger}
            className='md:hidden ml-0 mr-5 -mt-1 cursor-pointer'
            alt='hamburger'
            onClick={toggleSidebar}
          />
        <div>
          <h1 className='text-[28px] md:text-[35px] text-[#103C4A]' style={{fontFamily: 'Sequel-Black-Head'}}>
            StrideSavvy
          </h1>
        </div>

        <div className='flex mr-[50px] items-center'>
          <div className='hidden md:flex items-center'>
            <img src={profile} alt='profile' />
            <div className='flex items-center ml-2'>
              <p className='text-[17px]' style={{fontFamily: 'OpenSans-Medium'}}>
                Hi, Pedro
              </p>
              <img src={caret} alt='caret' />
            </div>
          </div>

          <div className='flex items-center ml-[20px] md:ml-[100px] mr-[80px]'>
            <img src={horizont} className='mr-[20px]' alt='horizont' />
            <img src={cart} alt='cart' />
            <p className='text-[17px] ml-2' style={{fontFamily: 'OpenSans-Medium'}}>
              Cart
            </p>
          </div>

         
        </div>
      </div>

      {isSidebarOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end'>
          <div className='w-64 bg-white h-full shadow-lg'>
            <button className='p-4 text-right' onClick={closeSidebar}>
              X
            </button>
            <nav className='p-4'>
              <ul>
                <li className='mb-4'>
                  <a href='#' className='text-lg'>
                    Profile
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='text-lg'>
                    Cart
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='text-lg'>
                    Orders
                  </a>
                </li>
                <li>
                  <a href='#' className='text-lg'>
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
