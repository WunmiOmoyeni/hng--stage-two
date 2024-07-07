import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CheckMark from '../../images/CircleWavyCheck-f.svg';
import ClearMark from '../../images/CircleWavyCheck-f (1).svg';
import divider from '../../images/Divider.svg';
import Ellipse from '../../images/Ellipse 3248.svg';
import PayMethods from '../../images/payment-methods.svg';

export default function CheckOutMain() {
  return (
    <section>
      <Navbar />
      <div className='flex justify-center mt-[20px]'>
        <div className='max-w-4xl w-full ml-[10px]'>
          <h1 className='text-[24px] md:text-[32px] text-[#103C4A] text-left mb-8' style={{ fontFamily: 'OpenSans-Bold' }}>
            Payment Method
          </h1>
          <div className='bg-[#F6F6F6] mb-[20px] hidden md:block p-4 rounded-xl'>
            <div className='flex'>
              <img src={CheckMark} className='mr-5' />
              <p className='text-[22px]' style={{ fontFamily: 'OpenSans-Medium' }}>1. Customer Address</p>
            </div>

            <div className='ml-[50px] mt-[30px]'>
              <p className='text-[18px]' style={{ fontFamily: 'OpenSans-Bold' }}>Alex Pedro</p>
              <div className='flex'>
                <p className='mr-3 text-[18px]' style={{ fontFamily: 'OpenSans-Regular' }}>Beach Street, 123 Downtown Neighborhood</p>
                <img src={divider} className='mr-3' />
                <p className='mr-3 text-[18px]' style={{ fontFamily: 'OpenSans-Regular' }}>Rio de Janeiro - Brazil</p>
                <img src={divider} className='mr-3' />
                <p className='mr-3 text-[18px]' style={{ fontFamily: 'OpenSans-Regular' }}>+55 114 342 6781</p>
              </div>
            </div>
          </div>

          <div className='bg-[#F6F6F6] mb-[20px] hidden md:block p-4 rounded-lg'>
            <div className='flex'>
              <img src={CheckMark} className='mr-5' />
              <p className='text-[22px]' style={{ fontFamily: 'OpenSans-Medium' }}>2. Delivery Details</p>
            </div>

            <div className='ml-[50px] mt-[30px]'>
              <p className='text-[18px]' style={{ fontFamily: 'OpenSans-Bold' }}>Door Delivery</p>
              <p className='text-[18px]' style={{ fontFamily: 'OpenSans-Regular' }}>Delivery between 21 Aug and 26 Aug</p>
            </div>
          </div>

          <div className='md:bg-[#F6F6F6] mb-[20px] p-4 rounded-lg'>
            <div className='hidden md:flex mb-5'>
              <img src={ClearMark} className='mr-5' />
              <p className='text-[22px]' style={{ fontFamily: 'OpenSans-Medium' }}>3. Payment Method</p>
            </div>

            <hr className='hidden md:block mb-5' />

            <div>
              <h1 className='text-[22px]' style={{ fontFamily: 'OpenSans-Bold' }}>Payment on Delivery</h1>
              <div className='flex'>
                <img src={Ellipse} />
                <div className='mt-[20px] ml-[20px]'>
                  <p className='text-[21px] mb-[10px]' style={{ fontFamily: 'OpenSans-Medium', fontWeight: 600 }}>Pay on Delivery</p>
                  <p className='text-[19px] mb-5' style={{ fontFamily: 'OpenSans-Regular' }}>With Cash, Bank transfers or Cards.</p>
                </div>
              </div>
            </div>

            <hr className='mb-4' />

            <div>
              <h1 className='text-[22px]' style={{ fontFamily: 'OpenSans-Bold' }}>Cards</h1>
              <div className='flex'>
                <img src={Ellipse} />
                <div className='mt-[40px] ml-[20px]'>
                  <p className='text-[21px] mb-[10px]' style={{ fontFamily: 'OpenSans-Medium', fontWeight: 600 }}>Pay with Cards, Bank transfers or USSD</p>
                  <p className='text-[19px]' style={{ fontFamily: 'OpenSans-Regular' }}>You’ll be redirected to our secure checkout page</p>
                </div>
              </div>

              <div className='ml-[15px] md:ml-[40px] mt-[30px]'>
                <p>- Ensure your payment information is up to date and that you have the necessary funds. </p>
                <p>- For bank transfer, kindly ensure you transfer the exact amount displayed.</p>
                <p>- Payment confirmation may take up to 2 minutes.</p>
              </div>

              <div>
                <img src={PayMethods} className='mx-auto mt-10'/>
              </div>

              <hr className='mt-[20px] mb-[20px]'/>

              <div className='ml-[20px]'>
                <h1 className='text-[22px]' style={{ fontFamily: 'OpenSans-Bold' }}>Installment</h1>
                <div className='flex mt-5'>
                  <img src={Ellipse} />
                  <p className='text-[22px] ml-3' style={{ fontFamily: 'OpenSans-Medium' }}>
                    Standard Chartered Credit Card @3% interest - Up to 12 months
                  </p>
                </div>
              </div>

              <div className='flex justify-end mt-10'>
                <button className='bg-[#FFA61B] px-6 py-4 rounded-lg text-[#103C4A] mt-4 text-[20px]' style={{ fontFamily: 'OpenSans-Bold' }}>
                  Confirm payment details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
