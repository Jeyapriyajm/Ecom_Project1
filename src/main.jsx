import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { StoreContextProvider } from './component/Context/Storecontext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Ecom_Project1">
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
