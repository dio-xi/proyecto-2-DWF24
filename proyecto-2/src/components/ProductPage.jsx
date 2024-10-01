import React, { useState } from "react";
import './ProductPage.css';

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
        if (quantity === 0) {
            setCartItems((prevCartItems) => {
                return prevCartItems.filter(item => item.id !== 1);
            });
            console.log("El producto fue removido del carrito porque la cantidad es 0.");
            return;
        }

        const product = {
            id: 1,
            name: "Fall Limited Edition Sneakers",
            image: "./src/images/image-product-1.jpg",
            price: 125.00,
            quantity: quantity,
        };

        console.log("Intentando agregar producto al carrito:", product);

        setCartItems((prevCartItems) => {
            const cart = Array.isArray(prevCartItems) ? prevCartItems : [];

            const existingProduct = cart.find(item => item.id === product.id);

            if (existingProduct) {
                console.log("Producto ya está en el carrito. Actualizando cantidad...");

                return cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: quantity }
                        : item
                );
            } else {
                console.log("Producto no está en el carrito. Agregando nuevo producto...");
                return [...cart, product];
            }
        });

        console.log("Producto agregado al carrito");
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
                    <div className="final-price">
                        <span className="discounted-price">$125.00</span>
                        <span className="discount-label">50%</span>
                    </div>
                    <span className="original-price">$250.00</span>
                </div>

                <div className="quantity-cart">
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
        </div>
    );
};

export default ProductPage;