function NavBar() {

    return (
        <nav>
            <div className="nav-bar">
                <div className="menu-icon">
                    <img src="./src/images/icon-menu.svg"/>
                </div>
                <div className="logo">
                    <a href="#"><img src='./src/images/logo.svg' /></a>
                </div>
                <div className="menu-links">
                    <ul>
                        <li><a href='#'>Collections</a></li>
                        <li><a href='#'>Men</a></li>
                        <li><a href='#'>Women</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className="cart-profile">
                <div className="shopping-cart">
                    <a href="#"><img src="./src/images/icon-cart.svg" alt="Shopping Cart" /></a>
                    {/* Crear función "onclick" que ejecuta componente "Shopping Cart" - nuevo componente */}
                </div>
                <div className="profile">
                    <a href="#"><img src="./src/images/image-avatar.png" alt="Profile" /></a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
