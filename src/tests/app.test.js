import React from 'react';
import { cleanup, screen, waitFor } from '@testing-library/react';
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
    const cards = await waitFor(() => screen.getAllByAltText(/game-card/i));
    expect(cards.length).toBe(9);
  });
});
