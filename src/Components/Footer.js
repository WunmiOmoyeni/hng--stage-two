import React from 'react'
import Insta from '../images/Instagram.svg'
import twitter from '../images/Twitter.svg'
import facebook from '../images/Facebook.svg'

export default function Footer() {
  return (
    <section className='bg-[#103C4A] text-white py-[100px] px-[80px] mt-[100px]'>
        <div className='flex flex-col md:flex-row justify-between mb-[50px]'>
            <div>
                <h1 className='text-[28px] md:text-[35px] mb-[30px]' style={{fontFamily: 'Sequel-Black-Head'}}>StrideSavvy</h1>
                <p className='hidden md:block text-[16px] w-[292px] leading-[24px]' style={{fontFamily: 'OpenSans-Regular', fontWeight: 400}}>Our vision is to provide convenience and help increase your sales business.</p>
                <div className='flex gap-x-5 mt-[30px] mb-[30px]'>
                    <img src={Insta}/>
                    <img src={twitter}/>
                    <img src={facebook}/>
                </div>
            </div>

            <div>
                <h3 className='text-[20px] mb-[20px]' style={{fontFamily:"OpenSans-Regular",fontWeight:600}}>About</h3>
                <p className='text-[16px] mb-[20px]' style={{fontFamily:"OpenSans-Light",fontWeight:400}}>How it works</p>
                <p className='text-[16px] mb-[20px]' style={{fontFamily:"OpenSans-Light",fontWeight:400}}>Featured</p>
                <p className='text-[16px] mb-[20px]' style={{fontFamily:"OpenSans-Light",fontWeight:400}}>Partnership</p>
                <p className='text-[16px] mb-[20px]' style={{fontFamily:"OpenSans-Light",fontWeight:400}}>Business Relation</p>
            </div>

            <div>
                <h3 className='text-[20px] mb-[20px]' style={{fontFamily:"OpenSans-Regular",fontWeight:600}}>Community</h3>
                <p className='text-[16px] mb-[20px]' style={{fontFamily:"OpenSans-Light",fontWeight:400}}>Events</p>
                <p className='text-[16px] mb-[20px]' style={{fontFamily:"OpenSans-Light",fontWeight:400}}>Blog</p>
                <p className='text-[16px] mb-[20px]' style={{fontFamily:"OpenSans-Light",fontWeight:400}}>Podcasts</p>
                <p className='text-[16px] mb-[20px]' style={{fontFamily:"OpenSans-Light",fontWeight:400}}>Invite a friend</p>
            </div>

            <div>
                <h3 className='text-[20px] mb-[20px]' style={{fontFamily:"OpenSans-Regular",fontWeight:600}}>Socials</h3>
                <p className='text-[16px] mb-[20px]' style={{fontFamily:"OpenSans-Light",fontWeight:400}}>Discord</p>
                <p className='text-[16px] mb-[20px]' style={{fontFamily:"OpenSans-Light",fontWeight:400}}>Instagram</p>
                <p className='text-[16px] mb-[20px]' style={{fontFamily:"OpenSans-Light",fontWeight:400}}>Twitter</p>
                <p className='text-[16px] mb-[20px]' style={{fontFamily:"OpenSans-Light",fontWeight:400}}>Facebook</p>
            </div>
        </div>

        <hr></hr>
        <p className='mt-[30px]'>©2022 Company Name. All rights reserved</p>
    </section>
    
  )
}
