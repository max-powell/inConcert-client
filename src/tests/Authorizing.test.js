import React from 'react'
import { Redirect as MockRedirect } from 'react-router-dom'
import { render, fireEvent, cleanup, wait } from '@testing-library/react'

import Authorizing from '../containers/Authorizing'

jest.mock('react-router-dom', () => ({
  Redirect: jest.fn(() => null),
}))

afterEach(() => {
  MockRedirect.mockClear()
  fetch.resetMocks()
  cleanup()
})

describe('<Authorizing />', () => {
  test('Should show loading screen when initially rendered', async () => {
    const location = {search: ''}
    const { getByText } = render(<Authorizing location={location} />)

    await wait(expect(getByText('Loading...')).toBeTruthy())
  })

  test('Should redirect to /login if Spotify sends an error', () => {
    const location = {search: '?error=access_denied'}
    const { getByText } = render(<Authorizing location={location} />)

    expect(MockRedirect).toHaveBeenCalledWith({
      to: {
        pathname: '/',
        state: {
          error: true
        }
      }
    }, {})
  })

  test('Should redirect to /login if auth sever sends an error', async () => {

    fetch.mockReject(JSON.stringify({error: 'state_mismatch'}))

    const location = {search: '?code=test'}
    const { getByText } = render(<Authorizing location={location} />)

    await wait()
    expect(MockRedirect).toHaveBeenCalledWith({
      to: {
        pathname: '/',
        state: {
          error: true
        }
      }
    }, {})
  })

  test('Should redirect to /home if succesful', async () => {
    const mockApiResponse = {
      access_token: 'access_token',
      refresh_token: 'refresh_token'
    }

    fetch.once(JSON.stringify(mockApiResponse))

    const location = {search: '?code=test'}
    const { getByText } = render(<Authorizing location={location} />)

    await wait()
    expect(MockRedirect).toHaveBeenCalledWith({
      to: {
        pathname: '/home',
        state: {
          access_token: 'access_token'
        }
      }
    }, {})
  })
})
