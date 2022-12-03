import { useDispatch, useSelector } from 'react-redux';

import productList from '../data/productList.json'
import '../styles/home.scss'
import cartSlice from '../data/cartSlice';

const Home = () => {


  //dispatch 
  const dispatch = useDispatch();
  //store reducer actions 
  const { addToCart, removeFromCart } = cartSlice.actions;
  //get products from store 
  const productsOnCart = useSelector(state => state.cart.cartProductIds);

  //handle Add to Cart Button event
  const handlaAddToCart = (e, product) => {
    console.log('handlaAddToCart', product);
    dispatch(addToCart(product));
  };

  //handle remove from Cart Button event
  const handleRemove = (e, idProduct) => {
    console.log('handleRemove', idProduct);
    dispatch(removeFromCart(idProduct));
  };


  const productListRender = productList?.products?.map((product) => {
    let existOnCart = productsOnCart.findIndex((prod) => prod.id === product.id) !== -1;
    return (
      <div className="wrapper col-md-4" key={product.id}>
        <div className="card">
          <img className="card-img-top center-block" src={product.imageUrl} alt="Card cap" />

          <div className="card-body text-center">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">${product.price}</p>

            {existOnCart ?
              <button
                className="btn btn-primary"
                onClick={(e) => { handleRemove(e, product.id) }}
              >Remove from cart
              </button>
              :
              <button
                className="btn btn-primary"
                onClick={(e) => { handlaAddToCart(e, product) }}
              >Add to cart
              </button>
            }
          </div>
        </div>
      </div>
    )
  });
  return (
    <div className="container product-catalogue">
      <div className="row" style={{ padding: "10px" }}>
        {productListRender}
      </div>
    </div>
  )
}

export default Home
