import * as TYPES from '../types';

const INITIAL_STATE = {
  loading: false,
  games: [],
};

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.LOADING:
      return { ...state, loading: true };
    case TYPES.OK:
      return { ...state, loading: false };
    case TYPES.RETRIEVE_GAMES:
      return { ...state, games: [...action.games] };
    default:
      return state;
  }
};

export default products;
