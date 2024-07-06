import React from 'react'
import Navbar from './Navbar'

export default function ProductListPage() {
  return (
    <div>
        <Navbar/>
        <div className='ml-[25px] md:ml-[70px] mt-[30px]'>
        <h1 className='text-[32px] md:text-[60px] text-[#103C4A] leading-[35px]' style={{fontFamily: 'OrelegaOne-Regular', fontWeight: '400'}}>Prime Kicks</h1>
        <p className='text-[18px] md:text-[20px] text-[#103C4A]' style={{fontFamily: 'OrelegaOne-Regular'}}>Shoes that help you move in your prime.</p>
        </div>
       
    </div>
  )
}
