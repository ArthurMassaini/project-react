import * as API from '../../services/api';
import * as TYPES from '../types';

const retrieveGames = (games) => ({
  type: TYPES.RETRIEVE_GAMES,
  games,
});

export const fetchGames = () => async (dispatch) => {
  dispatch({ type: TYPES.LOADING });
  const response = await API.getGames();
  dispatch(retrieveGames(response));
  dispatch({ type: TYPES.OK });
};

export const cartQuantity = (quantity) => ({
  type: TYPES.QUANTITY,
  quantity,
});

// ---------------------------------------------------- Actions de ordenação por preço

const orderByPrice = (games, id) => ({
  type: TYPES.PRICE,
  games,
  id,
});

export const fetchGamesOrderedByPrice = (id) => async (dispatch) => {
  dispatch({ type: TYPES.LOADING });
  const response = await API.getGames();
  dispatch(orderByPrice(response, id));
  dispatch({ type: TYPES.OK });
};

// ---------------------------------------------------- Actions de ordenação por nome

const orderByName = (games, id) => ({
  type: TYPES.NAME,
  games,
  id,
});

export const fetchGamesOrderedByName = (id) => async (dispatch) => {
  dispatch({ type: TYPES.LOADING });
  const response = await API.getGames();
  dispatch(orderByName(response, id));
  dispatch({ type: TYPES.OK });
};

// ---------------------------------------------------- Actions de ordenação por nota

const orderByRating = (games, id) => ({
  type: TYPES.RATING,
  games,
  id,
});

export const fetchGamesOrderedByRating = (id) => async (dispatch) => {
  dispatch({ type: TYPES.LOADING });
  const response = await API.getGames();
  dispatch(orderByRating(response, id));
  dispatch({ type: TYPES.OK });
};
