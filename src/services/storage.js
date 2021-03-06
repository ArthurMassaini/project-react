export const addToCart = (game) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let flag = true;

  if (cart.length > 0) {
    cart.forEach((element, index) => {
      if (element.id === game.id) {
        element.quantidade += 1;
        flag = false;
      } else if (index === cart.length - 1 && flag) {
        cart.push(game);
      }
    });
  } else {
    cart.push(game);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (game) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const filteredCart = cart.filter((element2) => element2.id !== game.id);

  cart.forEach((element) => {
    if (element.id === game.id) {
      if (element.quantidade === 1) {
        localStorage.setItem('cart', JSON.stringify(filteredCart));
      } else {
        element.quantidade = element.quantidade - 1;
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  });
};
