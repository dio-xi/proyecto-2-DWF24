import React, { useState } from "react";

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
        <div className="product-details">
            <h3>SNEAKER COMPANY</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>
            <div className="price-section">
                <div className="final-price">
                    <span className="discounted-price">$125.00</span>
                    <span className="discount-label">50% OFF</span>
                </div>
                <span className="original-price">$250.00</span>
            </div>
            <div className="quantity-cart">
                <div className="quantity-section">
                    <button onClick={handleDecrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                </div>
                <button className="add-to-cart">Add to cart</button>
            </div>
        </div>
    </div>
    );
};

export default ProductPage;