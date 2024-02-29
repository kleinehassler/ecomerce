
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getcartThunk, setCart } from '../store/slices/cart.slice';
import CartProduct from '../components/cartPage/CartProduct';
import useAuth from '../hooks/useAuth';
import '../components/cartPage/styles/cartProduct.css';

// const CartPage = ({ isCartModalOpen, closeCartModal }) => {
const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();
  const createBuy = useAuth();

  useEffect(() => {
    dispatch(getcartThunk());
  }, []);

  const handleTotals = () => {
    return cart.reduce((ac, cv) => ac + (cv.quantity * cv.product.price), 0);
  }

  const handleBuy = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
    createBuy(url, '', getToken());
    dispatch(setCart([]));
    closeCartModal();  
  }

  
  const openCartModal = () => {
    setIsModalOpen(true);
  }

  const closeCartModal1 = () => {
    setIsModalOpen(false);
  }

 // console.log(cart)
  return (
    <div>
      {/* <div className={isCartModalOpen ? "CartPageModal" : "CartPageHidden"}>
        <div className="CartPageContainer">
          {
            cart?.map(prod => (
              <CartProduct 
                key={prod.id}
                prod={prod}
              />
            ))
          }
          <div>
            <h3> Total Buy: $ {handleTotals} </h3>
            <button onClick={handleBuy}>Buy</button>
          </div>
          <button onClick={closeCartModal}>Close Cart</button>
        </div>
      </div> */}
      <button onClick={openCartModal}>Open Cart</button>
        {isModalOpen && (
          <div className="CartPageModal">
          <div className="CartPageContainer">
                {
                    cart?.map(prod => (
                      <CartProduct 
                        key={prod.id}
                        prod={prod}
                      />
                    ))
                }
              <div>
                <h3> Total Buy: $ {handleTotals} </h3>
                <button onClick={handleBuy}>Buy</button>
              </div>
              <button onClick={closeCartModal1}>Close Cart</button>
            </div>
            </div>
        )} 
    </div>
  )
}

export default CartPage;