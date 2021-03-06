import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ACTIONS from '../redux/actions/index';

function Cart() {
  const { games } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = (game) => {
    dispatch(ACTIONS.removeFromCart(game));
  };

  return (
    <main className="game-list">
      {games.map((game) => (
        <div key={game.id} className="game-card">
          <h1>{game.name}</h1>
          <img src={game.image} alt="game" />
          <div>
            <span>Nota: {game.score} </span>
            <span>Preço: R$ {game.price} </span>
          </div>
          <button type="button" onClick={() => handleClick(game)}>
            Remover do carrinho
          </button>
        </div>
      ))}
    </main>
  );
}

export default Cart;
