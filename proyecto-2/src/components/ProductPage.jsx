import React, { useState } from "react";

const ProductPage = ({ cartItems, setCartItems }) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
};

const handleDecrease = () => {
    setQuantity((prevQuantity) => 
        prevQuantity > 0 ? prevQuantity - 1 : 0
        );
};

const handleAddToCart = () => {
    setCartItems(cartItems + quantity);
    setQuantity(0);
};

return (
    <div className="product-page">
      <div className="product-details">
        <p className="company-name">SNEAKER COMPANY</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="price-section">
        <div className="price-section__top">
          <span className="discounted-price">$125.00</span>
          <span className="discount-label">50%</span>
        </div>
        <span className="original-price">$250.00</span>
    </div>
        <div className="quantity-section">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;