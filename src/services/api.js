import games from './products';

// simulando chamada do dado como se fosse de uma API
export const getGames = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(games);
    }, 500);
  });
};
