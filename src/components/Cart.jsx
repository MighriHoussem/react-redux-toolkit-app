import { useDispatch, useSelector } from 'react-redux'

import '../styles/cart.scss'
import cartSlice from '../data/cartSlice';

const Cart = () => {

  //get redux actios 
  const { removeFromCart, clearAllFromCart } = cartSlice.actions;
  //get products from redux store
  const productIds = useSelector(state => state.cart.cartProductIds);
  //get dispatch
  const dispatch = useDispatch();



  //remove Item from cart 
  const handleRemoveFromCart = (e, idProduct) => {
    dispatch(removeFromCart(idProduct));
  };
  //clear all products from cart 
  const clearAllProductsFromCart = () => {
    dispatch(clearAllFromCart());
  };

  //products render
  let productsRender = productIds?.map((product) => (
    <div key={product.id} className="row">
      <img className="item-image" src={product.imageUrl} alt="product" />

      <div className="item-info">
        <h4>{product.name}</h4>
        <p className="text-truncate">{product.detail}</p>
        <button
          className="btn btn-primary"
          onClick={(e) => { handleRemoveFromCart(e, product.id) }}
        >
          <i className="bi bi-trash-fill" /> Remove Item
        </button>
      </div>
    </div >
  ));

  return (
    <div className="cart">
      {
        productIds?.length ?
          <div className="cart-product">
            <h3 className="header">Items in cart</h3>
            {productsRender}
            <footer className="text-center">
              <button
                className="btn btn-primary"
                onClick={clearAllProductsFromCart}>
                CHECKOUT
              </button>
            </footer>
          </div>
          :
          <div className="text-center empty-cart">
            <i className="bi bi-cart3" />
            <p>Your cart is empty.</p>
            <p>You have not added any item to your cart.</p>
          </div>
      }
    </div>
  )
}

export default Cart
