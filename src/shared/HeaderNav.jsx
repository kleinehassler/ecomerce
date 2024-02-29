
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/headerNav.css';

const HeaderNav = ({ openCartModal }) => {
  return (
    <div className='headerNav'>
        <h1><Link to='/'>Tecnology eShop <box-icon type='solid' name='shopping-bags'></box-icon></Link></h1>
        <nav>
          <ul className='headerNav__list'>
            <li><Link to='/login'><box-icon type='solid' name='user-rectangle'></box-icon></Link></li>
            <li><Link to='/purchases'><box-icon name='purchase-tag-alt' ></box-icon></Link></li>
            <li><Link to='/cart'><box-icon name='cart'></box-icon></Link></li>
          </ul>
        </nav>
    </div>
  );
}

export default HeaderNav;