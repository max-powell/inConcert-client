import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { API_ROOT_URL } from '../constants'

class Authorizing extends Component {

  state = {
    loading: true,
    error: false,
    access_token: ''
  }

  componentDidMount () {
    const query = new URLSearchParams(this.props.location.search)
    if (query.has('error')) {
      return this.setState({
        error: true,
        loading: false
      })
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'include',
      body: query.toString()
    }

    fetch(`${API_ROOT_URL}/auth`, options)
      .then(res => res.json())
      .then(({access_token}) => {
        this.setState({
          access_token,
          loading: false
        })
      })
      .catch((e) => {
        this.setState({
          error: true,
          loading: false
        })
      })
  }

  render() {
    const { loading, error, access_token } = this.state

    if (loading) {
      return (
        <div>Loading...</div>
      )
    } else if (error) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: {
              error: true
            }
          }}
        />
      )
    } else {
      return (
        <Redirect
          to={{
            pathname: '/home',
            state: {
              access_token
            }
          }}
          />
      )
    }

  }

}

export default Authorizing
