import './ShoppingCart.css';

function ShoppingCart () {

    return (
        <div className="checkoutCart">
            <p className="titleCheckout">Cart</p>
            <img className="checkoutImage" src="./src/images/image-product-1.jpg" alt="Product" />
            <p className="itemDescription">Fall limited edition sneakers</p>
            <img src="./src/images/icon-delete.svg" alt="Delete" />
            <button>Checkout</button>
            
        </div>
    )
};

export default ShoppingCart