import React from 'react';
import { useDispatch } from 'react-redux';
import * as ACTIONS from '../redux/actions/index';

function OrderForm() {
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { value } = target;
    switch (value) {
      case 'Preço: alto a baixo':
        dispatch(ACTIONS.fetchGamesOrderedByPrice(1));
        break;
      case 'Preço: baixo a alto':
        dispatch(ACTIONS.fetchGamesOrderedByPrice(2));
        break;
      case 'Nome: A-Z':
        dispatch(ACTIONS.fetchGamesOrderedByName(1));
        break;
      case 'Nome: Z-A':
        dispatch(ACTIONS.fetchGamesOrderedByName(2));
        break;
      case 'Nota: alto a baixo':
        dispatch(ACTIONS.fetchGamesOrderedByRating(1));
        break;
      case 'Nota: baixo a alto':
        dispatch(ACTIONS.fetchGamesOrderedByRating(2));
        break;
      default:
        dispatch(ACTIONS.fetchGames());
    }
  };

  return (
    <form className="center">
      <select
        name="order"
        onChange={handleChange}
        data-testid="order"
      >
        <option>ordenar por: </option>
        <option>Preço: alto a baixo</option>
        <option>Preço: baixo a alto</option>
        <option>Nome: A-Z</option>
        <option>Nome: Z-A</option>
        <option>Nota: alto a baixo</option>
        <option>Nota: baixo a alto</option>
        <option>Remover Filtros</option>
      </select>
    </form>
  );
}

export default OrderForm;
