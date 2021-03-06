import React from 'react';
import { useSelector } from 'react-redux';

function ProductsList() {
  const { loading, games } = useSelector((state) => state.products);

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
          <button type="button">Adicionar ao carrinho</button>
        </div>
      ))}
    </section>
  );
}

export default ProductsList;
