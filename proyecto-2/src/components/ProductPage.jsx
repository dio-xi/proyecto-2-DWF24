import React, { useState } from "react";
import './ProductPage.css';
import product from './Products.js';

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
        const updatedProduct = { ...product, quantity: quantity, image: product.images[0] };

        if (quantity === 0) {
            setCartItems((prevCartItems) => {
                return prevCartItems.filter(item => item.id !== updatedProduct.id);
            });
        } else {
            setCartItems((prevCartItems) => {
                const cart = Array.isArray(prevCartItems) ? prevCartItems : [];

                const existingProduct = cart.find(item => item.id === updatedProduct.id);

                if (existingProduct) {
                    return cart.map(item =>
                        item.id === updatedProduct.id
                            ? { ...item, quantity: quantity }
                            : item
                    );
                } else {
                    return [...cart, updatedProduct];
                }
            });
        }

        setQuantity(0);
    };

    return (
        <div className="product-page">
            <div className="product-details">
                <p className="company-name">SNEAKER COMPANY</p>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <div className="price-section">
                    <div className="final-price">
                        <span className="discounted-price">${product.price.toFixed(2)}</span>
                        <span className="discount-label">{product.discount}%</span>
                    </div>
                    <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                </div>

                <div className="quantity-cart">
                    <div className="quantity-section">
                        <button onClick={handleDecrease}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrease}>+</button>
                    </div>
                    <button className="add-to-cart" onClick={handleAddToCart}>
                        <img src="/images/icon-cart.svg" alt="Cart Icon" className="cart-icon" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
