import React, { useEffect, useState } from 'react';
import { shoes } from '../Product-Lists/shoedata';
import Product from '../Product-Lists/Product';

const Main = ({addToCart}) => {
  const [shoesList] = useState(shoes)

  
  return (
    <div className='ml-[30px] md:ml-[70px] mt-[50px] mr-[30px] md:mr-[70px]'>
      <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10'>
        {shoesList.map((shoe, i) => (
          <Product 
            key={i} 
            id={shoe.id} 
            name={shoe.name} 
            image={shoe.image} 
            price={shoe.price}
            description={shoe.description}
            addToCart={addToCart} // Pass the addToCart function
          />   
        ))}
      </div>
    </div>
  );
}

export default Main;
