import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart-icon.svg';

function Header() {
  return (
    <header className="header">
      <h1>Bem Vindo a loja de games do Arthur Massaini!</h1>
      <Link to="/cart">
        <img src={cartIcon} alt="cart" />
      </Link>
    </header>
  );
}

export default Header;
