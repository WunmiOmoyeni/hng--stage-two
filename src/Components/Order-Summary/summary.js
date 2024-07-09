import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Vector from '../../images/Vector.svg';
import Bank from '../../images/noto_bank.svg';
import MasterCard from '../../images/Mastercard.svg';
import Visa from '../../images/Visa.svg';
import Verve from '../../images/Verve.svg';
import Ellipse from '../../images/Ellipse 3250.svg';
import backbutton from '../../images/icons8-back-button-30.png';

export default function Summary() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePayNow = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <section>
      <div className='flex justify-center mt-5 md:mt-8'>
        <div className='max-w-4xl w-full mx-4'>
          <div className='flex'>
            <a href='/confirm-order'>
              <img src={backbutton} className='md:hidden ml-[5px] mr-3 ' alt='Back'/>
            </a>
            <h1 className='text-2xl md:text-3xl text-[#103C4A] text-left mb-8' style={{ fontFamily: 'OpenSans-Bold' }}>
              Order Summary
            </h1>
          </div>

          <div className='flex items-center bg-[#F6F6F6] mb-8 p-5 rounded-xl'>
            <p className='text-lg md:text-xl' style={{ fontFamily: 'OpenSans-Medium' }}>TOTAL TO PAY</p>
            <div className='ml-auto'>
              <p className='text-lg md:text-xl' style={{ fontFamily: 'OpenSans-Medium' }}>$350.00</p>
            </div>
          </div>

          <div className='flex items-center bg-[#F6F6F6] mb-5 p-4 rounded-xl'>
            <img src={Ellipse} className='mr-2' alt='Icon'/>
            <p className='text-lg md:text-xl mt-1 md:mt-3' style={{ fontFamily: 'OpenSans-Medium' }}>Pay with USSD or Bank Transfer</p>
            <div className='flex ml-auto space-x-2'>
              <img src={Vector} alt='Vector'/>
              <img src={Bank} alt='Bank'/>
            </div>
          </div>

          <div className='flex items-center bg-[#F6F6F6] mb-5 p-4 rounded-xl'>
            <img src={Ellipse} className='mr-2' alt='Icon'/>
            <p className='text-lg md:text-xl mt-1 md:mt-3' style={{ fontFamily: 'OpenSans-Medium' }}>Pay with MasterCard and Visa</p>
            <div className='flex ml-auto space-x-2'>
              <img src={MasterCard} alt='MasterCard'/>
              <img src={Visa} alt='Visa'/>
            </div>
          </div>

          <div className='flex items-center bg-[#F6F6F6] mb-5 p-2 rounded-xl'>
            <img src={Ellipse} className='mr-2' alt='Icon'/>
            <p className='text-lg md:text-xl mt-2' style={{ fontFamily: 'OpenSans-Medium' }}>Pay with Verve Cards ONLY</p>
            <div className='flex ml-auto'>
              <img src={Verve} className='mt-[-10px]' alt='Verve'/>
            </div>
          </div>

          <div className='my-8'>
            <button onClick={handlePayNow} className='bg-[#F79F1A] text-[#103C4A] rounded-lg p-4 w-full text-lg md:text-2xl' style={{ fontFamily: 'OpenSans-Medium' }}>
              Pay Now: $350.00
            </button>
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50'>
          <div className='bg-[#103C4A] text-white p-6 rounded-lg shadow-lg text-center'>
            <h2 className='text-2xl mb-4' style={{ fontFamily: 'OpenSans-Bold' }}>Order Confirmed</h2>
            <p className='mb-4' style={{ fontFamily: 'OpenSans-Regular' }}>Thanks for shopping!</p>
            <button onClick={closePopup} className='bg-white text-[#103C4A] rounded-lg px-4 py-2' style={{ fontFamily: 'OpenSans-Medium' }}>
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </section>
  );
}
