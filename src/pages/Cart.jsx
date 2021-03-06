import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import * as STORAGE from '../services/storage';

function Cart() {
  const [getState, setState] = useState([]);
  const [getTotal, setTotal] = useState(0);

  const totalPrice = () => {
    const games = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    games.forEach((game) => {
      total += game.price * game.quantidade;
    });
    setTotal(total);
  };

  useEffect(() => {
    const games = JSON.parse(localStorage.getItem('cart')) || [];
    totalPrice();
    setState(games);
  }, []);

  const handleClick = (game) => {
    STORAGE.removeFromCart(game);
    const games = JSON.parse(localStorage.getItem('cart')) || [];
    setState(games);
    totalPrice();
  };

  return (
    <main>
      <Header type="cart" />
      <h1>Total: R$ {getTotal}</h1>
      <section className="game-list-cart">
        {getState.map((game) => (
          <div key={game.id} className="game-card-cart">
            <h1>{game.name}</h1>
            <img src={game.image} alt="game" />
            <br />
            <p>Quantidade: {game.quantidade}</p>
            <button type="button" onClick={() => handleClick(game)}>
              Remover do carrinho
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Cart;
