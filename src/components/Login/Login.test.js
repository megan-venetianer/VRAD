import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import '@testing-library/jest-dom';


describe("Login", () => {
  it('logs a user in after they enter all their info', () => {
    const loginUser = jest.fn()
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <Router><Login>
        <button loginUser={loginUser}>
          'Submit'
        </button>
      </Login>

      </Router>

       )
    fireEvent.change(getByPlaceholderText('username'), {
      target: {value: 'mockedUser'}
    })
    fireEvent.change(getByPlaceholderText('email address'), {
      target: {value: 'mocked@email.com'}
    })
    fireEvent.change(getByTestId('Vacation'), {
      target: {value: 'Vacation'}
    })
    fireEvent.change(getByPlaceholderText('email address'), {
      target: {value: 'mocked2@email.com'}
    })
    setTimeout(() => {
      fireEvent.click(getByText('Submit'))
      expect(loginUser).toHaveBeenCalled(1)
    }, 500)
  })
})
