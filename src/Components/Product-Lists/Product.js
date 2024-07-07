import React, {useState} from 'react';
import Cartt from '../../images/shopping-cart.svg';
import heart from '../../images/heart.svg';

const Product = ({ image, name, price, description, color, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

   const handleAddToCart = () => {
    const product = { image, name, price, description, color };
    addToCart(product);
    setIsAdded(true);
  };

  return (
    <div className='shadow-lg p-5 bg-[#F6F6F6]'>
      <img src={heart} className='flex justify-end' alt='heart'/>
      <img src={image} alt={name} />
      <p className='text-[18px]' style={{ fontFamily: 'OpenSans-Medium', fontWeight: 600 }}>{name}</p>
      <p className='text-[13px] mt-1' style={{ fontFamily: 'OpenSans-Medium', fontWeight: 400 }}>{description}</p>
      <div className='flex justify-between items-start md:items-center mt-4'>
        <div className='text-[17px] mt-[10px]' style={{ fontFamily: 'OpenSans-Medium', fontWeight: 700 }}>
          ${price}.00
        </div>
        <button
          className='flex items-center rounded-lg border-[3px] border-[#103C4A] text-[#103C4A] py-[7px] px-[30px] md:p-2'
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? 'Added' : 'Add to Cart' }
          <img src={Cartt} className='ml-2' alt='cart'/>
        </button>
      </div>
    </div>
  );
};

export default Product;
