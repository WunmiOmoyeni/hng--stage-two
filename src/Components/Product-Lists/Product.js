import React from 'react';
import Cartt from '../../images/shopping-cart.svg'
import heart from '../../images/heart.svg'

const Product = ({ image, name, price, description }) => {
  return (
    <div className='shadow-lg p-5 bg-[#F6F6F6] '>
        <img src={heart } className='flex justify-end'/>
      <img src={image} alt={name} />
      <p className='text-[18px]' style={{fontFamily: 'OpenSans-Medium', fontWeight: 600}}>{name}</p>
      <p className='text-[13px] mt-1' style={{fontFamily: 'OpenSans-Medium', fontWeight: 400}}>{description}</p>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mt-4'>
            <div className='text-[17px]' style={{fontFamily: 'OpenSans-Medium', fontWeight: 700}}>
                ${price}.00
        
            </div>

            
            <button className='flex items-center rounded-lg border-[3px] border-[#103C4A] text-[#103C4A] p-[4px] md:p-3'>Add to Cart<img src={Cartt} className='ml-2'/></button> 
           
      </div>
      
    </div>
  )
}

export default Product;
