import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    setTotal(total.toFixed(2));
  };

  useEffect(() => {
    const games = JSON.parse(localStorage.getItem('cart')) || [];
    totalPrice();
    setState(games);
  }, []);

  const handleClickRemove = (game) => {
    STORAGE.removeFromCart(game);
    const games = JSON.parse(localStorage.getItem('cart')) || [];
    setState(games);
    totalPrice();
  };

  const handleClickAdd = (game) => {
    STORAGE.addToCart({ ...game, quantidade: 1 });
    const games = JSON.parse(localStorage.getItem('cart')) || [];
    setState(games);
    totalPrice();
  };

  return (
    <main>
      <Header type="cart" />

      <section className="game-list-cart">
        {getState.map((game) => (
          <div key={game.id} className="game-card-cart">
            <h1>{game.name}</h1>
            <img src={game.image} alt="game" />
            <br />
            <p>Quantidade: {game.quantidade}</p>
            <p>Preço Unitário: R$ {game.price}</p>
            <button type="button" onClick={() => handleClickRemove(game)}>
              Remover do carrinho
            </button>
            <button type="button" onClick={() => handleClickAdd(game)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </section>

      {getTotal > 0 ? (
        <h1 className="margin">Subtotal: R$ {getTotal}</h1>
      ) : (
        <h1 className="center">Seu carrinho está vazio!</h1>
      )}
      {getTotal > 0 && (
        <Link to="/cart/checkout" className="margin">
          Finalizar Pedido
        </Link>
      )}
    </main>
  );
}

export default Cart;
