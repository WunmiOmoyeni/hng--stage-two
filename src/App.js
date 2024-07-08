import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductListPage from './Components/Product-Lists/ProductListPage';
import Cartmain from './Components/Cart/cartmain';
import CheckOutMain from './Components/CheckOut/checkoutmain';
import Confirm from './Components/Confirm-Order/confirm';
import Summary from './Components/Order-Summary/summary';
import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar';

function App() {
  
  const [cart, setCart] = useState([])
  const addToCart = (product) => {
  const itemExist = cart.filter((c)=> c.id == product.id)
  if(itemExist.length >=1 ) {
    return
    }
    setCart((prevCart) => [...prevCart, product]);
    
  };
 

  const RemoveFromCart = (productId) => {
  const filterdItem = cart.filter((c)=> c.id !== productId )
  setCart(filterdItem)
  };


  return (
    <div>
      <BrowserRouter>
        <Navbar cart={cart}/>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<ProductListPage addToCart={addToCart} cart={cart}/>} />
          <Route path='/cart' element={<Cartmain cart={cart} setCart={setCart} RemoveFromCart={RemoveFromCart}/>}  />
          <Route path='/check-out' element={<CheckOutMain />} />
          <Route path='/confirm-order' element={<Confirm />} />
          <Route path='/order-summary' element={<Summary/>} />
          <Route path='*' element={<Navigate to="/" replace />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
