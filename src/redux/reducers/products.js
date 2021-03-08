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
      const gamesByPrice = [...action.games];
      if (action.id === 1) {
        gamesByPrice.sort((a, b) => {
          if (a.price < b.price) return 1;
          if (a.price > b.price) return -1;
          return 0;
        });
      } else {
        gamesByPrice.sort((a, b) => {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        });
      }
      return { ...state, games: [...gamesByPrice] };
    case TYPES.NAME:
      const gamesByName = [...action.games];
      if (action.id === 1) {
        gamesByName.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      } else {
        gamesByName.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
      }
      return { ...state, games: [...gamesByName] };
    case TYPES.RATING:
      const gamesByScore = [...action.games];
      if (action.id === 1) {
        gamesByScore.sort((a, b) => {
          if (a.score < b.score) return 1;
          if (a.score > b.score) return -1;
          return 0;
        });
      } else {
        gamesByScore.sort((a, b) => {
          if (a.score < b.score) return -1;
          if (a.score > b.score) return 1;
          return 0;
        });
      }
      return { ...state, games: [...gamesByScore] };
    default:
      return state;
  }
};

export default products;
