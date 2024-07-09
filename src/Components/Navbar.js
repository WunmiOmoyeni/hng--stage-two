import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../images/User-r.svg';
import caret from '../images/CaretDown-r.svg';
import carts from '../images/cil--cart.svg';
import horizont from '../images/horizont.svg';
import hamburger from '../images/hamburger.svg';

export const Navbar = ({cart}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <section className=''>
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

        <div className='flex items-center'>
          <div className='hidden md:flex items-center  mr-[100px]'>
            <img src={profile} alt='profile'/>
            <div className='md:flex items-center ml-2'>
              <p className='text-[17px]' style={{fontFamily: 'OpenSans-Medium'}}>
                Hi, Pedro
              </p>
              <img src={caret} alt='caret' />
            </div>
          </div>

          <div className='flex items-center ml-auto mr-[10px]'>
            {/* <img src={horizont} className='' alt='horizont' /> */}
            <Link to ='/cart' className='flex items-center'>
            <img src={carts} alt='cart' className='ml-3 w-[30px]' />
            <div className='rounded-[50%]  border-[2px] px-2 -mt-6 -ml-2 bg-red-700'>
            <p className='text-white'>{cart?.length}</p>
            </div>
            
            {/* <p className='text-[17px] ml-2 hidden md:block' style={{fontFamily: 'OpenSans-Medium'}}>
              Cart
            </p> */}
            </Link>
            
          </div>

         
        </div>
      </div>

      {isSidebarOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end'>
          <div className='w-64 bg-[#103C4A] text-white h-full shadow-lg'>
            <button className='p-4 text-right' onClick={closeSidebar}>
              X
            </button>
            <nav className='p-4'>
            <h1 className='text-[28px] md:text-[35px] text-white mb-4' style={{fontFamily: 'Sequel-Black-Head'}}>
            StrideSavvy
          </h1>
          <hr className='mb-4'/>
              <ul>
                <li className='mb-4'>
                  <a href='/' className='text-lg'>
                    Home
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='text-lg'>
                    My Account
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='text-lg'>
                    Payments
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='text-lg'>
                    Close Account
                  </a>
                </li>

                <li>
                  <a href='#' className='text-lg'>
                    Contact Us
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
