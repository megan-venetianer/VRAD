import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import NeighborhoodContainer from '../NeighborhoodContainer/NeighborhoodContainer';
import { BrowserRouter as Router } from 'react-router-dom';


import '@testing-library/jest-dom'


describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><App /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('fetches user data', () => {

    const fetch = jest.fn()
    fetch('http://localhost:3001')
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001')


  })
  it('should render a header', () => {
    render(<Router><Header isUserLoggedIn={null}
                   clickHandler={null}
    /></Router>)
  })
  it('should render a login compoment', () => {
    render(<Router><Login loginUser={null}
                  isUserLoggedIn={null}
    /></Router>)
  })
  it('should render a neighborhood container', () => {
    render(
      <Router><NeighborhoodContainer
        userInfo={null}
        neighborhoods={null}
      /></Router>
    )
  })
})
