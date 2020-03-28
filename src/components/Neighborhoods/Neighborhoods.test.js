import React from 'react';
import Neighborhoods from './Neighborhoods.js';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Neighborhoods', () => {
  it('renders neighborhood information to each card', () => {
    const { getByText } = render(
      <Router><Neighborhoods
        name={"Lower Highlands"}
        shorthand={"LoHi"}
        about={"Best neighborhood!"}
        /></Router>);

    const nameEl = getByText("Lower Highlands (LoHi)");
    const aboutEl = getByText("Best neighborhood!");
    expect(nameEl).toBeInTheDocument();
    expect(aboutEl).toBeInTheDocument();
  });
});
