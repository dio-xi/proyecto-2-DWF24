import './ShoppingCart.css';

function ShoppingCart () {

    return (
        <div className="checkoutCart">
            <p className="checkoutTitle">Cart</p>
            <div class="line"></div>
            <div className='shoppingCartGroup'>
                <div className='imageDescription'>
                  <img className="checkoutImage" src="./src/images/image-product-1.jpg" alt="Product" />
                  <p className="itemDescription">Fall limited edition sneakers</p>
                </div>
              <img className="binImage" src="./src/images/icon-delete.svg" alt="Delete" />
            </div>
            <button className='shoppingCartButton'>Checkout</button>
        </div>
    )
};

export default ShoppingCart