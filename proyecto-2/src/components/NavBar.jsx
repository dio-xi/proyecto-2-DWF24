import React, { useState } from 'react';
import ShoppingCart from './ShoppingCart';
import './NavBar.css';

function NavBar({ cartItems, setCartItems }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const shoppingCart = () => {
        setOpen(!open);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="nav-bar">
            <div className="menu-icon" onClick={toggleMenu}>
                <img src="/images/icon-menu.svg" alt="Menu" />
            </div>
            <div className="logo">
                <a href="#"><img src="/images/logo.svg" alt="Logo" /></a>
            </div>
            <div className={`menu-links ${menuOpen ? "open" : ""}`}>
                <div className="close-icon" onClick={toggleMenu}>
                    <img src="/images/icon-close.svg" alt="Close" />
                </div>
                <ul>
                    <li><a href='#'>Collections</a></li>
                    <li><a href='#'>Men</a></li>
                    <li><a href='#'>Women</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <div className="cart-profile">
                <button className="shopping-cart" onClick={shoppingCart}>
                    <img src="/images/icon-cart.svg" alt="Shopping-Cart" />
                    {totalItems > 0 && <div className="cart-count">{totalItems}</div>}
                </button>
                <button className="profile">
                    <img src="/images/image-avatar.png" className="profile-img" alt="Profile" />
                </button>
            </div>
            {open && <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />}
        </nav>
    );
}

export default NavBar;