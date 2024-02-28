import React from 'react';
import './styles/productCard.css';
import { Navigate, useNavigate } from 'react-router-dom';

const ProductCard = ({prod}) => {

  const navigate = useNavigate();
  const handleView = () => {
    navigate(`/product/${prod.id}`);
  }
  return (
      <article className='productCard'>
        <figure onClick={handleView} className='productCard__img'>
          <img src={prod.images[0].url} alt="Image Product" className='productCard__img'/>
          <img src={prod.images[1].url} alt="Image Product" className='productCard__img'/>
        </figure>
        <hr />
        <div>
          <ul className='productCard__info'>
            <li><span>{prod.brand}</span><span>{prod.title}</span></li>
            <li>Precio: $ <span>{prod.price}</span></li>
          </ul>          
        </div>
        <div className='productButtons'>
          <button> Add to cart </button>
          <button onClick={handleView}> View more </button>
        </div>
      </article>
  )
}

export default ProductCard;