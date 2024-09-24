import React, { useState } from "react";
import './ProductPage.css';

const ProductPage = () => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);


};

const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
};

return (
    <div className="product-page">
        <div className="product-image-gallery">
            <img 
                src="image-product-1.jpg"
                alt="Fall Limited Edition Sneakers"
                className="main-image"
            />
            <div className="thumnail-photos">
                <img src="image-product-1-thumnail.jpg" alt="" />
                <img src="image-product-2-thumnail.jpg" alt="" />
                <img src="image-pruduct-3-thumnail.jpg" alt="" />
                <img src="image-product-4-thumnail.jpg" alt="" />
            </div>
        </div>
        <div className="product-details">
            <h1>Fall Limited Edition Sneakers</h1>
            <p>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>
            <div className="price-section">
                <span className="discounted-price">$125.00</span>
                <span className="original-price">$250.00</span>
                <span className="discount-label">50% OFF</span>
            </div>
            <div className="quantity-section">
                <button onClick={handleDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}>+</button>
            </div>
            <button className="add-to-cart">Add to cart</button>
            </div>
        </div>
    );
};

export default ProductPage;