import React from 'react';
import './ShoppingCart.css';

function ShoppingCart({ cartItems, setCartItems }) {

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
    };

    return (
        <section className="checkoutCart">
            <h2 className="checkoutTitle">Cart</h2>
            <hr className="line" />

            {cartItems.length > 0 ? (
                <>
                    {cartItems.map(item => (
                        <article key={item.id} className='shoppingCartGroup'>
                            <div className='imageDescription'>
                                <img className="checkoutImage" src={item.image} alt={item.name} />
                                <p className="itemDescription">{item.name}</p>
                                
                                <p>${item.price.toFixed(2)} x {item.quantity} <strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
                            </div>
                            <button
                                className="binButton"
                                aria-label="Remove item"
                                onClick={() => removeItem(item.id)}
                            >
                                <img className="binImage" src="./src/images/icon-delete.svg" alt="Delete" />
                            </button>
                        </article>
                    ))}
                    <button className='shoppingCartButton'>Checkout</button>
                </>
            ) : (
                <p className='emptyCart'>Your cart is empty.</p>
            )}
        </section>
    );
}

export default ShoppingCart;