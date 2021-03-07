import * as TYPES from '../types';

const INITIAL_STATE = {
  loading: false,
  games: [],
  quantity: 0,
};

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.LOADING:
      return { ...state, loading: true };
    case TYPES.OK:
      return { ...state, loading: false };
    case TYPES.RETRIEVE_GAMES:
      return { ...state, games: [...action.games] };
    case TYPES.QUANTITY:
      return { ...state, quantity: action.quantity };
    case TYPES.PRICE:
      if (action.id === 1) {
        action.games.sort((a, b) => {
          if (a.price < b.price) return 1;
          if (a.price > b.price) return -1;
          return 0;
        });
      } else {
        action.games.sort((a, b) => {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        });
      }
      return { ...state, games: [...action.games] };
    case TYPES.NAME:
      if (action.id === 1) {
        action.games.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      } else {
        action.games.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
      }
      return { ...state, games: [...action.games] };
    case TYPES.RATING:
      if (action.id === 1) {
        action.games.sort((a, b) => {
          if (a.score < b.score) return 1;
          if (a.score > b.score) return -1;
          return 0;
        });
      } else {
        action.games.sort((a, b) => {
          if (a.score < b.score) return -1;
          if (a.score > b.score) return 1;
          return 0;
        });
      }
      return { ...state, games: [...action.games] };
    default:
      return state;
  }
};

export default products;
