import React from 'react';
import { useSelector } from 'react-redux';
import * as STORAGE from '../services/storage';

function ProductsList() {
  const { loading, games } = useSelector((state) => state.products);

  const handleClick = (game) => {
    STORAGE.addToCart({...game, quantidade: 1});
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
