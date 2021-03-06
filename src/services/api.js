import data from './products';

// simulando chamada do dado como se fosse de uma API
export const getGame = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};
