import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from './components/NavBar.jsx';
import ProductPage from './components/ProductPage.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import productImages from './components/ProductImages.js';
import './index.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <StrictMode>
          <NavBar cartItems={cartItems} setCartItems={setCartItems} /> 
          <div className="main-content">
            <ImageGallery images={productImages} />
            <ProductPage setCartItems={setCartItems} cartItems={cartItems} />
          </div>
        </StrictMode>
      );
    };
    
createRoot(document.getElementById('root')).render(<App />);