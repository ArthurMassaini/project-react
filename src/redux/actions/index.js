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

export const putOnCart = (game) => ({
  type: TYPES.ADD,
  game,
});
