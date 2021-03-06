import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ACTIONS from '../redux/actions/index';

function ProductsList() {
  const { loading, games } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleClick = (game) => {
    dispatch(ACTIONS.putOnCart(game));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <section className="game-list">
      {games.map((game) => (
        <div key={game.id} className="game-card">
          <h1>{game.name}</h1>
          <img src={game.image} alt="game" />
          <div>
            <span>Nota: {game.score} </span>
            <span>Preço: R$ {game.price} </span>
          </div>
          <button type="button" onClick={() => handleClick(game)}>
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </section>
  );
}

export default ProductsList;
