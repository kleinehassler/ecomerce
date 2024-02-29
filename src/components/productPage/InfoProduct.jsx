import React, { useState } from 'react';
import { postCartThunk, updateCartThunk } from '../../store/slices/cart.slice';
import { useDispatch, useSelector } from 'react-redux';

const InfoProduct = ({productId}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);

    const handleLess = () =>{
        if(quantity>1) {
            setQuantity(quantity - 1) 
        }
    }
    const handlePlus = () => {
        setQuantity(quantity + 1)
    }
    const handleAddToCart = () => {
        const item = cart.filter(prod => prod.product.id===productId.id);
        if (item[0]) {
            dispatch(updateCartThunk(...item, quantity));
        } else {
           dispatch(postCartThunk({
            quantity: quantity,
            productid: productId.id,
            })); 
        }
        
    }

  return (
    <div className='container__infoproduct'>
        <div>
            <h2>{productId?.brand}</h2>
            <h3>{productId?.title}</h3>
            <p>{productId?.description}</p>
        </div>
        <div>
            <ul>
                <li>Price</li>
                <li>$ {productId?.price}</li>
            </ul>
            <div>
                <p>Quantity</p>
                <button onClick={handleLess}><ion-icon name="chevron-back-circle-sharp"></ion-icon></button>
                <span>{quantity}</span>
                <button onClick={handlePlus}><ion-icon name="chevron-forward-circle"></ion-icon></button>
            </div>
        </div>
        <button>Add to Cart <ion-icon name="cart-outline"></ion-icon></button>
    </div>
  )
}

export default InfoProduct;