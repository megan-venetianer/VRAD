import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitForElement } from '@testing-library/react';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import NeighborhoodContainer from '../NeighborhoodContainer/NeighborhoodContainer';
import Neighborhoods from '../Neighborhoods/Neighborhoods';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { getNeighborhoods } from '../apiCalls';
jest.mock('../apiCalls');

describe('App', () => {
  it('fetches user data', () => {
    const fetch = jest.fn()
    fetch('http://localhost:3001')
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001')
  })

  it('should render a header', () => {
    render(<Router><Header
                    isUserLoggedIn={null}
                    clickHandler={null}
                   />
           </Router>)
  })

  it('should render a login compoment', () => {
    render(<Router>
           <Login
            loginUser={null}
            isUserLoggedIn={null}
            />
            </Router>)
  })

  it('should render a neighborhood container', () => {
    render(
      <Router><NeighborhoodContainer
        userInfo={null}
        neighborhoods={null}
      /></Router>)
  })

  it('should show neighborhoods when the user logs in', async() => {

    getNeighborhoods.mockResolvedValueOnce([
        {
            "area": "RiNo",
            "details": "/api/v1/areas/590"
        },
        {
            "area": "Park Hill",
            "details": "/api/v1/areas/751"
        },
        {
            "area": "LoHi",
            "details": "/api/v1/areas/408"
        },
        {
            "area": "Cap Hill",
            "details": "/api/v1/areas/240"
        }
    ]
   )
    const { getByText } = render(<Router><Neighborhoods
      name="River North"
      shorthand="RiNo"
      /></Router>)
    const neighborhoodCard = await waitForElement(() => getByText("River North (RiNo)"))

    expect(neighborhoodCard).toBeInTheDocument();
  })
})
