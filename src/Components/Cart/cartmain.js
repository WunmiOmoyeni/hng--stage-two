import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import remove from '../../images/trash.svg';
import Footer from '../Footer';
import { json, Link } from 'react-router-dom';

const Cartmain = ({cart, setCart, RemoveFromCart}) => {

 

  return (
    <section>
      <div className='flex flex-col items-center'>
        <div className='mt-8 mx-6 md:mx-16'>
          <h1 className='text-2xl md:text-4xl text-[#103C4A] text-center mb-8' style={{ fontFamily: "OpenSans-Medium" }}>
            Cart ({cart.length})
          </h1>
          {cart.length === 0 ? (
            <div className='flex flex-col justify-center items-center mt-12'>
              <p className='text-lg md:text-xl mb-8 font-extrabold' style={{ fontFamily: "OpenSans-Bold" }}>
                Your cart is currently empty
              </p>
              <button className='bg-[#103C4A] text-white rounded-lg p-3 text-md md:text-lg' style={{ fontFamily: "OpenSans-Regular" }}>
                <a href='/'>Return to Shop </a>
              </button>
            </div>
          ) : (
            <ul className='w-full'>
              {cart.map((item, index) => (
                <li key={index} className='flex flex-col md:flex-row bg-[#F6F6F6] mb-6 p-4 rounded-xl'>
                  <img src={item.image} alt={item.name} className='w-full md:w-1/4 object-contain' />
                  <div className='mt-6 md:mt-0 md:ml-6 flex flex-col justify-between'>
                    <div>
                      <p className='text-xl mb-3 font-extrabold' style={{ fontFamily: "OpenSans-Bold" }}>{item.name}</p>
                      <p className='text-md text-[#103C4A] mb-2'>{item.description}</p>
                      <p className='text-lg'>${item.price}.00</p>
                      <p className='text-sm text-[#103C4A]'>In stock</p>
                    </div>
                    <button
                    onClick={()=> RemoveFromCart(item.id)}
                      className='flex items-center text-[#820D0D] border-2 rounded-lg border-[#820d0d] p-2 mt-3'
                    >
                      Remove
                      <img src={remove} className='ml-2 mt-1 w-5 h-5' alt='remove' />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className='bg-white md:bg-[#F6F6F6] w-full md:w-1/4 p-5 flex flex-col justify-center items-center mt-6 rounded-xl'>
            <p className='text-lg text-[#103C4A] hidden md:block mb-4' style={{ fontFamily: "OpenSans-Medium" }}>Cart Summary</p>
            <p className='text-[#103C4A] hidden md:block'>Subtotal <span className='text-xl ml-5' style={{ fontFamily: "OpenSans-Bold" }}>$350</span></p>
            <Link to = '/check-out'>
            <button className='bg-[#FFA61B] px-6 py-4 rounded-lg text-[#103C4A] mt-4' style={{ fontFamily: "OpenSans-Medium" }}>
              Checkout ($350.00)
            </button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </section>
  );
};

export default Cartmain;
