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
        about={"LoHi is the best neighborhood!"}
        />);

    const nameEl = getByText("Lower Highlands");
    const shorthandEl = getByText("LoHi");
    const aboutEl = getByText("LoHi is the best neighborhood!");
    expect(nameEl).toBeInTheDocument();
    expect(shorthandEl).toBeInTheDocument();
    expect(aboutEl).toBeInTheDocument();
  });
});
