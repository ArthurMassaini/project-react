import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as STORAGE from '../services/storage';
import * as ACTIONS from '../redux/actions/index';
import Loading from './Loading';

function ProductsList() {
  const { loading, games } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const updateQuantity = () => {
    const games = JSON.parse(localStorage.getItem('cart')) || [];
    return games.reduce((acc, element) => {
      return acc + element.quantidade;
    }, 0);
  };

  const handleClick = (game) => {
    STORAGE.addToCart({ ...game, quantidade: 1 });

    const quantity = updateQuantity();
    dispatch(ACTIONS.cartQuantity(quantity));
  };

  if (loading) return <Loading />;

  return (
    <section className="contain">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {games.map((game) => (
          <div key={game.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={game.image} alt="game" className="card-img-top2" />
              </div>
              <div className="col-md-8">
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
                className="btn btn-primary"
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
