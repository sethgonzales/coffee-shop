import React from 'react';
import './Header.css';
import BeanBag from './../img/coffee-bag.svg'

function Header() {
  return (
    <React.Fragment>
      <img src={BeanBag} class="header-img"></img>
        <h1>Pierre's Cafe</h1>
    </React.Fragment>
  )
}

export default Header;