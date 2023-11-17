import React from 'react';
import './Header.css';
import Logo from './../img/cafe-logo.jpg'

function Header() {
  return (
    <React.Fragment>
      <img src={Logo} class="header-img"></img>
      <h1>Cafe Inventory</h1>
    </React.Fragment>
  )
}

export default Header;