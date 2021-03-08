import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as ACTIONS from '../redux/actions/index';
import cartIcon from '../assets/cart-icon.svg';

function Header({ type }) {
  const { quantity } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateQuantity = () => {
      const games = JSON.parse(localStorage.getItem('cart')) || [];
      const quantity = games.reduce((acc, element) => {
        return acc + element.quantidade;
      }, 0);
      dispatch(ACTIONS.cartQuantity(quantity));
    };
    updateQuantity();
  }, [dispatch]);

  if (type === 'home') {
    return (
      <header className="header">
        <h1>Bem Vindo a loja de games do Arthur Massaini</h1>
        <Link to="/cart">
          <img src={cartIcon} alt="cart-icon" />
          <span>{quantity}</span>
        </Link>
      </header>
    );
  } else if (type === 'cart') {
    return (
      <header className="header">
        <h1>Bem Vindo ao carrinho</h1>
        <Link to="/">
          <img
            src="https://findicons.com/files/icons/1580/devine_icons_part_2/256/home.png"
            alt="home-icon"
            witdth="90px"
            height="72px"
          />
        </Link>
      </header>
    );
  } else if (type === 'checkout') {
    return (
      <header className="header">
        <h1>Bem Vindo ao checkout</h1>
        <div>
          <Link to="/cart">
            <img src={cartIcon} alt="cart-icon" />
            <span>{quantity}</span>
          </Link>
          <Link to="/">
            <img
              src="https://findicons.com/files/icons/1580/devine_icons_part_2/256/home.png"
              alt="home-icon"
              witdth="90px"
              height="72px"
            />
          </Link>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Header;
