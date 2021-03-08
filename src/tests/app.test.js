import React from 'react';
import { cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndStore } from './helpers/renderWithRouterAndStore';
import App from '../App';

describe('Requiriments:', () => {
  afterEach(cleanup);

  it('should show all game cards in page home', async () => {
    renderWithRouterAndStore(<App />, '/');
    const cards = await waitFor(() => screen.getAllByAltText(/game-card/i));
    expect(cards.length).toBe(9);
  });

  it('should order the cards by price, name and score', async () => {
    renderWithRouterAndStore(<App />, '/');

    const beforeOrder = await waitFor(() => screen.getAllByAltText(/game-card/i));
    expect(beforeOrder[0]).toHaveAttribute('src', 'super-mario-odyssey.png');

    const dropdown = screen.getByTestId(/order/i);

    userEvent.selectOptions(dropdown, 'Preço: alto a baixo');
    const afterOrderByPrice = await waitFor(() => screen.getAllByAltText(/game-card/i));
    expect(afterOrderByPrice[0]).toHaveAttribute('src', 'call-of-duty-wwii.png');

    userEvent.selectOptions(dropdown, 'Nome: A-Z');
    const afterOrderByName = await waitFor(() => screen.getAllByAltText(/game-card/i));
    expect(afterOrderByName[0]).toHaveAttribute('src', 'call-of-duty-infinite-warfare.png');

    userEvent.selectOptions(dropdown, 'Nota: alto a baixo');
    const afterOrderByScore = await waitFor(() => screen.getAllByAltText(/game-card/i));
    expect(afterOrderByScore[0]).toHaveAttribute('src', 'shards-of-darkness.png');

  });
  
});
