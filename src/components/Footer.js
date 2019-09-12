import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

import '../scss/Footer.scss'

const Footer = () => (
  <div className='footer'>
    <div className='footer-item about-author'>
      <p>Created by Max Powell</p>
      <div className='author-links'>
        <a href='https://www.linkedin.com/in/maxpowell1/'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href='https://github.com/max-powell'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://medium.com/@maxfpowell'>
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a href='#'>
          <FontAwesomeIcon icon={faAddressCard} />
        </a>
      </div>
    </div>
    <div className='footer-item about-app'>
      <Link to='/about'>
        About inConcert
      </Link>
    </div>
  </div>
)

export default Footer
