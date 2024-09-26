import React, { useState } from 'react';

function NavBar({ cartItems }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="nav-bar">
            <div className="menu-icon" onClick={toggleMenu}>
                <img src="./src/images/icon-menu.svg" alt="Menu Icon" />
            </div>
            <div className="logo">
                <a href="#"><img src='./src/images/logo.svg' alt="Logo" /></a>
            </div>
            <div className={`menu-links ${menuOpen ? "open" : ""}`}>
                <div className="close-icon" onClick={toggleMenu}>
                    <img src="./src/images/icon-close.svg" alt="Close Icon" />
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
                <div className="shopping-cart">
                    <a href="#">
                        <img src="./src/images/icon-cart.svg" alt="Shopping Cart" />
                        {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
                        </a>
                </div>
                <div className="profile">
                    <a href="#"><img src="./src/images/image-avatar.png" alt="Profile" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
