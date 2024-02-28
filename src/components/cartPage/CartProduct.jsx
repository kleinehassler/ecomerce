import React from 'react';
import './styles/cartProduct.css';
import { deleteCartThunk, updateCartThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const CartProduct = ({prod}) => {
    
    const dispatch = useDispatch();

    // console.log(prod);
    const handleLess =() => {
        if(prod.quantity > 1){
            dispatch(updateCartThunk(prod, -1));
        }
    }
    const handlePlus = () => {
        dispatch(updateCartThunk(prod, 1));
    }

    const handleRemove =() => {
        dispatch(deleteCartThunk(prod.id));
    }

  return (
    prod.product &&
    <div className='cartProduct'>
        <figure>
            <img src={prod.product.image[0].url} alt="product image" />
        </figure>
        <div>
            <h2>{prod.product.title}</h2>
            <button onClick={handleLess}>-</button>
            <span>{prod.quantity}</span>
            <button onClick={handlesPlus}>+</button>
            <h3>Total Product : $ {prod.product.price * prod.quantity}</h3>
        </div>
        <button onClick={handleRemove}>Delete</button>
    </div>
  )
}

export default CartProduct;