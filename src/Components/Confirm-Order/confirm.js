import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import divider from '../../images/Divider.svg';
import CheckMark from '../../images/CircleWavyCheck-f.svg';
import { Link } from 'react-router-dom';

export default function Confirm() {
  return (
    <section>
      <div className='flex flex-col md:flex-row justify-center mt-5 md:mt-8'>
        <div className='max-w-4xl w-full mx-4'>
          <h1 className='text-2xl md:text-3xl text-[#103C4A] text-left mb-8' style={{ fontFamily: 'OpenSans-Bold' }}>
            Confirm Order
          </h1>

          <div className='bg-[#F6F6F6] mb-5 md:mb-8 p-4 rounded-xl'>
            <div className='flex'>
              <img src={CheckMark} className='mr-5' alt='CheckMark' />
              <p className='text-lg md:text-xl' style={{ fontFamily: 'OpenSans-Medium' }}>1. Customer Address</p>
            </div>

            <div className='ml-12 mt-5'>
              <p className='text-lg md:text-xl mb-3' style={{ fontFamily: 'OpenSans-Bold' }}>Alex Pedro</p>
              <div className='flex flex-wrap'>
                <p className='mr-3 text-lg md:text-xl' style={{ fontFamily: 'OpenSans-Regular' }}>Beach Street, 123 Downtown Neighborhood</p>
                <img src={divider} className='hidden md:inline-block mr-3' alt='divider' />
                <p className='mr-3 text-lg md:text-xl' style={{ fontFamily: 'OpenSans-Regular' }}>Rio de Janeiro - Brazil</p>
                <img src={divider} className='hidden md:inline-block mr-3' alt='divider' />
                <p className='mr-3 text-lg md:text-xl' style={{ fontFamily: 'OpenSans-Regular' }}>+55 114 342 6781</p>
              </div>
            </div>
          </div>

          <div className='bg-[#F6F6F6] mb-5 md:mb-8 p-4 rounded-lg'>
            <div className='flex'>
              <img src={CheckMark} className='mr-5' alt='CheckMark' />
              <p className='text-lg md:text-xl' style={{ fontFamily: 'OpenSans-Medium' }}>2. Delivery Details</p>
            </div>

            <div className='ml-12 mt-5'>
              <p className='text-lg md:text-xl' style={{ fontFamily: 'OpenSans-Bold' }}>Door Delivery</p>
              <p className='text-lg md:text-xl mt-3' style={{ fontFamily: 'OpenSans-Regular' }}>Delivery between 21 Aug and 26 Aug</p>
            </div>
          </div>

          <div className='bg-[#F6F6F6] mb-5 md:mb-8 p-4 rounded-lg'>
            <div className='flex'>
              <img src={CheckMark} className='mr-5' alt='CheckMark' />
              <p className='text-lg md:text-xl' style={{ fontFamily: 'OpenSans-Medium' }}>3. Payment Method</p>
            </div>

            <div className='ml-12 mt-5'>
              <p className='text-lg md:text-xl' style={{ fontFamily: 'OpenSans-Bold' }}>Pay with Cards, Bank transfer or USSD.</p>
              <p className='text-lg md:text-xl mt-3' style={{ fontFamily: 'OpenSans-Regular' }}>You will be redirected to our secure checkout page.</p>
            </div>
          </div>
        </div>

        <div className='bg-white md:bg-[#F6F6F6] p-5 rounded-lg mx-4 md:ml-8 mt-8 md:mt-0 w-[300px]'>
        <p className='text-lg text-[#103C4A] mb-4' style={{ fontFamily: "OpenSans-Medium" }}>Order Summary</p>
        <div className='flex justify-between'>
        <p className='text-[#103C4A]'>Items Total(3)</p>
        <span className='text-lg md:text-xl' style={{ fontFamily: "OpenSans-Bold" }}>$350</span>
        </div>

        <div className='flex justify-between'>
        <p className='text-[#103C4A]'>Delivery fees</p>
        <span className='text-lg md:text-xl' style={{ fontFamily: "OpenSans-Bold" }}>$50</span>
        </div>

        <div className='flex justify-between'>
        <p className='text-[#103C4A]'>Free Delivery</p>
        <span className='text-lg md:text-xl' style={{ fontFamily: "OpenSans-Bold" }}>-$50</span>
        </div>
  
        <div className='flex justify-between'>
        <p className='text-[#103C4A]'>Total</p>
        <span className='text-lg md:text-xl' style={{ fontFamily: "OpenSans-Bold" }}>$350</span>
        </div>
          <Link to='/order-summary'>
            <button className='bg-[#FFA61B] px-6 py-2 rounded-lg text-[#103C4A] mt-4 w-full' style={{ fontFamily: "OpenSans-Medium" }}>
              Confirm Order
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  )
}
