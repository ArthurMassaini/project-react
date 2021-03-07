import React from 'react';
import { useSelector } from 'react-redux';
import * as STORAGE from '../services/storage';
import Loading from './Loading';

function ProductsList() {
  const { loading, games } = useSelector((state) => state.products);

  const handleClick = (game) => {
    STORAGE.addToCart({ ...game, quantidade: 1 });
  };

  if (loading) return <Loading />;

  return (
    <section className="contain">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {games.map((game) => (
          <div key={game.id} className="card mb-3">
            <div className="row g-0">
              <div class="col-md-4">
                <img src={game.image} alt="game" className="card-img-top2" />
              </div>
              <div class="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{game.name}</h4>
                  <div className="card-text">
                    <span>Nota: {game.score} </span>
                    <p>Preço: R$ {game.price} </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                type="button"
                onClick={() => handleClick(game)}
                class="btn btn-primary"
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsList;
