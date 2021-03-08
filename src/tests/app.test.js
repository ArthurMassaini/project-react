import React from 'react';
import { cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndStore } from './helpers/renderWithRouterAndStore';
import App from '../App';

describe('Requiriments:', () => {
  afterEach(cleanup);

  it('should show all game cards on home page', async () => {
    renderWithRouterAndStore(<App />, '/');
    const cards = await waitFor(() => screen.getAllByAltText(/game-card/i));
    expect(cards.length).toBe(9);
  });

  it('should order the cards by price, name and score correctly', async () => {
    renderWithRouterAndStore(<App />, '/');

    const beforeOrder = await waitFor(() =>
      screen.getAllByAltText(/game-card/i),
    );
    expect(beforeOrder[0]).toHaveAttribute('src', 'super-mario-odyssey.png');

    const dropdown = screen.getByTestId(/order/i);

    userEvent.selectOptions(dropdown, 'Preço: alto a baixo');
    const afterOrderByPrice = await waitFor(() =>
      screen.getAllByAltText(/game-card/i),
    );
    expect(afterOrderByPrice[0]).toHaveAttribute(
      'src',
      'call-of-duty-wwii.png',
    );

    userEvent.selectOptions(dropdown, 'Preço: baixo a alto');
    const afterOrderByPriceDown = await waitFor(() =>
      screen.getAllByAltText(/game-card/i),
    );
    expect(afterOrderByPriceDown[0]).toHaveAttribute(
      'src',
      'call-of-duty-infinite-warfare.png',
    );

    userEvent.selectOptions(dropdown, 'Nome: A-Z');
    const afterOrderByName = await waitFor(() =>
      screen.getAllByAltText(/game-card/i),
    );
    expect(afterOrderByName[0]).toHaveAttribute(
      'src',
      'call-of-duty-infinite-warfare.png',
    );

    userEvent.selectOptions(dropdown, 'Nome: Z-A');
    const afterOrderByNameDown = await waitFor(() =>
      screen.getAllByAltText(/game-card/i),
    );
    expect(afterOrderByNameDown[0]).toHaveAttribute(
      'src',
      'the-witcher-iii-wild-hunt.png',
    );

    userEvent.selectOptions(dropdown, 'Nota: alto a baixo');
    const afterOrderByScore = await waitFor(() =>
      screen.getAllByAltText(/game-card/i),
    );
    expect(afterOrderByScore[0]).toHaveAttribute(
      'src',
      'shards-of-darkness.png',
    );

    userEvent.selectOptions(dropdown, 'Nota: baixo a alto');
    const afterOrderByScoreDown = await waitFor(() =>
      screen.getAllByAltText(/game-card/i),
    );
    expect(afterOrderByScoreDown[0]).toHaveAttribute(
      'src',
      'terra-media-sombras-de-mordor.png',
    );
  });

  it('should add and remove a game from cart correctly', async () => {
    const { history } = renderWithRouterAndStore(<App />, '/');

    const addGameBtn = await waitFor(() => screen.getAllByRole('button'));
    userEvent.click(addGameBtn[0]);

    const cartIcon = await waitFor(() => screen.getByAltText(/cart-icon/i));
    userEvent.click(cartIcon);

    const { pathname } = history.location;
    expect(pathname).toBe('/cart');

    const cartGame = await waitFor(() =>
      screen.getAllByAltText(/game-card/i),
    );
    expect(cartGame[0]).toHaveAttribute('src', 'super-mario-odyssey.png');

    const removeGameBtn = await waitFor(() => screen.getAllByRole('button'));
    userEvent.click(removeGameBtn[0]);

    const emptyMessage = screen.getByText(/Seu carrinho está vazio!/i);
    expect(emptyMessage).toBeInTheDocument();
  });
});
