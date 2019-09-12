import React from 'react'

import inConcertLogo from '../images/inConcert.png';
import spotifyLogo from '../images/Spotify_Logo_RGB_Green.png';
import songkickLogo from '../images/powered-by-songkick-white.png';

import '../scss/Header.scss'

const Header = () => (
  <div className='header'>
    <div className='header-item'>
      <img src={inConcertLogo} />
    </div>
    <div className='header-item'>
      <p>Powered by:</p>
    </div>
    <div className='header-item'>
      <img src={spotifyLogo} />
    </div>
    <div className='header-item'>
      <img src={songkickLogo} />
    </div>
  </div>
)

export default Header
