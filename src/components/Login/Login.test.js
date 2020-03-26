import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Login from './Login';
import '@testing-library/jest-dom';


describe("Login", () => {
  it('logs a user in after they enter all their info', () => {
    const loginUser = jest.fn()
    const { getByText, getByPlaceholderText } = render(
      <Login 
        loginUser={loginUser}
      />
       
       )
    fireEvent.change(getByPlaceholderText('username'), {
      target: {value: 'mockedUser'}
    })
    fireEvent.change(getByPlaceholderText('email address'), {
      target: {value: 'mocked@email.com'}
    })
    fireEvent.change(getByPlaceholderText('listing type'), {
      target: {value: 'Vacation'}
    })
    fireEvent.change(getByPlaceholderText('listing type'), {
      target: {value: 'Business'}
    },
      getByText('Submit'), {
        target: {disabled: false}
      }
    )
    // console.log(getByText('Submit'))
    fireEvent.click(getByText('Submit'))
      expect(loginUser).toHaveBeenCalledTimes(1)
    
  })
})