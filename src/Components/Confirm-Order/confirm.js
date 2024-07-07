import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import divider from '../../images/Divider.svg'
import CheckMark from '../../images/CircleWavyCheck-f.svg'
import { Link } from 'react-router-dom'

export default function Confirm() {
  return (
    <section>
        <Navbar/>
        <div className='flex justify-center mt-[20px]'>
            <div className='max-w-4xl w-full ml-[10px]'>
                <h1 className='text-[24px] md:text-[32px] text-[#103C4A] text-left mb-8' style={{ fontFamily: 'OpenSans-Bold' }}>
                    Confirm Order
                </h1>
                <div className='bg-[#F6F6F6] mb-[20px] hidden md:block p-4 rounded-xl'>
            <div className='flex'>
              <img src={CheckMark} className='mr-5' />
              <p className='text-[22px]' style={{ fontFamily: 'OpenSans-Medium' }}>1. Customer Address</p>
            </div>

            <div className='ml-[50px] mt-[30px]'>
              <p className='text-[18px] mb-3' style={{ fontFamily: 'OpenSans-Bold' }}>Alex Pedro</p>
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
              <p className='text-[18px] mt-3' style={{ fontFamily: 'OpenSans-Regular' }}>Delivery between 21 Aug and 26 Aug</p>
            </div>
                </div>

                <div className='md:bg-[#F6F6F6] mb-[20px] p-4 rounded-lg'>
                    <div className='hidden md:flex mb-5'>
                        <img src={CheckMark} className='mr-5' />
                        <p className='text-[22px]' style={{ fontFamily: 'OpenSans-Medium' }}>3. Payment Method</p>
                    </div>

                    <div className='ml-[50px] mt-[30px] hidden md:block'>
                        <p className='text-[18px]' style={{ fontFamily: 'OpenSans-Bold' }}>Pay with Cards, Bank transfer or USSD.</p>
                        <p className='text-[18px] mt-3' style={{ fontFamily: 'OpenSans-Regular' }}>You will be redirected to our secure checkout page.</p>
                    </div>
                </div>
            </div>

            {/* <div className='bg-white md:bg-[#F6F6F6] h-[270px] p-5 rounded-lg md:ml-[50px] mt-[80px]'>
            <p className='text-lg text-[#103C4A] mb-4' style={{ fontFamily: "OpenSans-Medium" }}>Order Summary</p>
            <p className='text-[#103C4A]'>Items Total(3) <span className='text-xl ml-[40px]' style={{ fontFamily: "OpenSans-Bold" }}>$350</span></p>
            <p className='text-[#103C4A]'>Delivery fees <span className='text-xl ml-[45px]' style={{ fontFamily: "OpenSans-Bold" }}>$50</span></p>
            <p className='text-[#103C4A]'>Free Delivery <span className='text-xl ml-[40px]' style={{ fontFamily: "OpenSans-Bold" }}>-$50</span></p>
            <p className='text-[#103C4A] '>Total <span className='text-xl ml-[100px]' style={{ fontFamily: "OpenSans-Bold" }}>$350</span></p>
            <Link to = '/check-out'>
            <button className='bg-[#FFA61B] px-6 py-2 rounded-lg text-[#103C4A] mt-4' style={{ fontFamily: "OpenSans-Medium" }}>
              Confirm Order
            </button>
            </Link>
        </div> */}
        </div>


        <Footer/>
    </section>
    
  )
}
