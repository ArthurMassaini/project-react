import * as TYPES from '../types';

const INITIAL_STATE = {
  games: [],
};

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD:
      return { ...state, games: [...state.games, action.game] };
    default:
      return state;
  }
};

export default cart;
