import React from 'react';
import { useSelector } from 'react-redux';

function ProductsList() {
  const { loading, games } = useSelector((state) => state.products);

  if (loading) return <div>Loading</div>;

  return (
    <section>
      {games.map((game) => (
        <div key={game.id}>
          <h1>{game.name}</h1>
          <img src={game.image} alt="game" />
          <div>
            <span>{game.score}</span>
            <span>{game.price}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductsList;
