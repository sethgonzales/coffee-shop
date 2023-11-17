import React from 'react';
import './Header.css';
import Logo from './../img/cafe-logo.jpg'

function Header() {
  return (
    <React.Fragment>
      <img src={Logo} className="header-img" alt="shop logo"></img>
      <h1>Cafe Inventory</h1>
    </React.Fragment>
  )
}

export default Header;