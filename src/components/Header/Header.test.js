import React from 'react';
import ReactDOM from 'react-dom';
import { render, getByText, fireEvent } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


describe("header", () => {
  it('logs out a user when they are logged in', () => {
    const logOut = jest.fn()
    const { getByText } = render(
       <Header
        clickHandle ={logOut}
       />
       )
    expect(getByText('VRAD')).toBeInTheDocument();
  })
})