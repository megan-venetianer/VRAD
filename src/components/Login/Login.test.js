import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'

import Login from './Login';
import '@testing-library/jest-dom';


describe("Login", () => {
  it('logs a user in after they enter all their info', () => {
    const loginUser = jest.fn()
    const { getByText, getByPlaceholderText, getByDisplayValue } = render(
      <Router><Login
        loginUser={loginUser}
      /></Router>

       )
    fireEvent.change(getByPlaceholderText('username'), {
      target: {value: 'mockedUser'}
    })
    fireEvent.change(getByPlaceholderText('email address'), {
      target: {value: 'mocked@email.com'}
    })
    fireEvent.change(getByDisplayValue('Select Type'), {
      target: {value: 'Vacation'}
    })
    fireEvent.change(getByDisplayValue('Vacation'), {
      target: {value: 'Business'}
    })
    getByText('Submit'), {
      target: {disabled: false}
    }
    fireEvent.click(getByText('Submit'))
      expect(loginUser).toHaveBeenCalledTimes(1)
  })
})
