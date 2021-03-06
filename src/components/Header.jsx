import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart-icon.svg';

function Header({ type }) {
  if (type === 'home') {
    return (
      <header className="header">
        <h1>Bem Vindo a loja de games do Arthur Massaini!</h1>
        <Link to="/cart">
          <img src={cartIcon} alt="cart" />
        </Link>
      </header>
    );
  } else if (type === 'cart') {
    return (
      <header className="header">
        <h1>Bem Vindo ao carrinho!</h1>
        <Link to="/">
          <img
            src="https://findicons.com/files/icons/1580/devine_icons_part_2/256/home.png"
            alt="home"
            witdth="90px"
            height="72px"
          />
        </Link>
      </header>
    );
  } else if (type === 'checkout') {
    return (
      <header className="header">
        <h1>Bem Vindo ao checkout!</h1>
        <div>
          <Link to="/cart">
            <img src={cartIcon} alt="cart" />
          </Link>
          <Link to="/">
            <img
              src="https://findicons.com/files/icons/1580/devine_icons_part_2/256/home.png"
              alt="home"
              witdth="90px"
              height="72px"
            />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
