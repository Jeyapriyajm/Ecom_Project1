
import React from 'react';
import Navbar from './component/navbar/navbar';
import { Route, Routes } from 'react-router-dom' 
import Home from './pages/home/home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeorder/PlaceOrder';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;

