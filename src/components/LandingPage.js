import React from 'react'

import Header from './Header'
import Footer from './Footer'
import LandingPageBody from './LandingPageBody'

import '../scss/LandingPage.scss'

const LandingPage = () => (
  <div className='login-layout'>
    <Header />
    <LandingPageBody />
    <Footer />
  </div>
)

export default LandingPage
