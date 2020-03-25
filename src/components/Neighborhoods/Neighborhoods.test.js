import React from 'react';
import Neighborhoods from './Neighborhoods.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Neighborhoods', () => {
  it('renders neighborhood information to each card', () => {
    const { getByText } = render(
      <Neighborhoods
        name={"Lower Highlands"}
        shorthand={"LoHi"}
        about={"Best neighborhood!"}
        />);

    const nameEl = getByText("Lower Highlands (LoHi)");
    const aboutEl = getByText("Best neighborhood!");
    expect(nameEl).toBeInTheDocument();
    expect(aboutEl).toBeInTheDocument();
  });
});
