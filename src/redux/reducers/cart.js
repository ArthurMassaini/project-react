import * as TYPES from '../types';

const INITIAL_STATE = {
  games: [],
};

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD:
      return { ...state, games: [...state.games, action.game] };
    case TYPES.REMOVE:
      const filteredGames = state.games.filter(
        (game) => game.id !== action.game.id,
      );
      return { ...state, games: [...filteredGames] };
    default:
      return state;
  }
};

export default cart;
