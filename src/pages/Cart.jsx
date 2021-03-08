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
    <main className="main">
      <Header type="cart" />

      <section className="container">
        {getState.map((game) => (
          <div key={game.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={game.image} alt="game" className="card-img-top3" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{game.name}</h5>
                  <p className="card-text">Quantidade: {game.quantidade}</p>
                  <p className="card-text">Preço Unitário: R$ {game.price}</p>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                type="button"
                onClick={() => handleClickRemove(game)}
                className="btn btn-danger"
              >
                Remover do carrinho
              </button>
              <button
                type="button"
                onClick={() => handleClickAdd(game)}
                className="btn btn-primary"
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </section>

      {getTotal > 0 ? (
        <h1 className="center">Subtotal: R$ {getTotal}</h1>
      ) : (
        <h1 className="center">Seu carrinho está vazio!</h1>
      )}
      {getTotal > 0 && (
        <div className="center">
          <Link to="/cart/checkout">
            <button type="button" className="btn btn-success">
              Finalizar Pedido
            </button>
          </Link>
        </div>
      )}
    </main>
  );
}

export default Cart;
