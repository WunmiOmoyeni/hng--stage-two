import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductListPage from './Components/Product-Lists/ProductListPage';
import Cartmain from './Components/Cart/cartmain';
import CheckOutMain from './Components/CheckOut/checkoutmain';
import Confirm from './Components/Confirm-Order/confirm';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  const [cart, setCart] = useState(() => {
    // Retrieve the cart from localStorage on initial load
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save the cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<ProductListPage addToCart={addToCart} />} />
          <Route path='/cart' element={<Cartmain cart={cart} removeFromCart={removeFromCart} />} />
          <Route path='/check-out' element={<CheckOutMain />} />
          <Route path='/confirm-order' element={<Confirm />} />
          <Route path='*' element={<Navigate to="/" replace />} /> {/* Redirect to ProductListPage if no match */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
