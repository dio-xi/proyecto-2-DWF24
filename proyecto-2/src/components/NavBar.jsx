function NavBar() {

    return (
        <nav>
            <div className="logo-nav">
                <div>
                    <img className="logo" src='./src/images/logo.svg' />
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
                    <img src="./src/images/icon-cart.svg" alt="Shopping Cart"/>
                </div>
                <div className="profile">
                    <img src="./src/images/image-avatar.png" alt="Profile" />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
