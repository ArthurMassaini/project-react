import React from 'react';
import { cleanup, screen, waitFor } from '@testing-library/react';
import renderWithRedux from './helpers/renderWithRouter';
import App from '../pages/Home';

describe('Requiriments:', () => {
  afterEach(cleanup);

  it('should show all game cards', async () => {
    const { getByText } = renderWithRedux(<App />);
    const codText = await waitFor(() =>
      screen.getByText(/Call Of Duty Infinite Warfare/i),
    );
    const mkText = getByText(/Mortal Kombat XL/i);
    const shardsText = getByText(/Shards of Darkness/i);
    const mordorText = getByText(/Terra Média: Sombras de Mordor/i);
    const horizonText = getByText(/Horizon Zero Dawn/i);
    const witcherText = getByText(/The Witcher III Wild Hunt/i);
    const fifaText = getByText(/FIFA 18/i);
    const marioText = getByText(/Super Mario Odyssey/i);
    const cod2Text = getByText(/Call Of Duty WWII/i);
    expect(codText).toBeInTheDocument();
    expect(mkText).toBeInTheDocument();
    expect(shardsText).toBeInTheDocument();
    expect(mordorText).toBeInTheDocument();
    expect(horizonText).toBeInTheDocument();
    expect(witcherText).toBeInTheDocument();
    expect(fifaText).toBeInTheDocument();
    expect(marioText).toBeInTheDocument();
    expect(cod2Text).toBeInTheDocument();
  });
});
