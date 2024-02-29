
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/headerNav.css';

const HeaderNav = ({ openCartModal }) => {
  return (
    <div className='headerNav'>
        <h1><Link to='/'>Tecnology eShop <ion-icon name="pricetags-outline"></ion-icon></Link></h1>
        <nav>
          <ul className='headerNav__list'>
            <li><Link to='/login'><ion-icon name="people-outline"></ion-icon></Link></li>
            <li><Link to='/purchases'><ion-icon name="document-text-outline"></ion-icon></Link></li>
            <li><Link to='/cart'><ion-icon name="cart-outline"></ion-icon></Link></li>
          </ul>
        </nav>
    </div>
  );
}

export default HeaderNav;