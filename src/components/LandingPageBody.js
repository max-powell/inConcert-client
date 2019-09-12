import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSpotify } from '@fortawesome/free-brands-svg-icons'

import { API_ROOT_URL } from '../constants'

import '../scss/LandingPageBody.scss'

const LandingPageBody = () => (
  <div className='landing-page-body'>
    <div className='landing-page-box'>
      <div className='banner'>
        <h2>Discover great bands</h2>
        <h2>playing near you</h2>
      </div>
      <a className='login-button' href={`${API_ROOT_URL}/authorize`}>
        <span>Login with Spotify</span>
        <FontAwesomeIcon icon={faSpotify} size='2x' />
      </a>
    </div>
  </div>
)

export default LandingPageBody
