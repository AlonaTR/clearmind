import React from 'react'

import { Helmet } from 'react-helmet'

import RegisterForm from '../components/register-form'
import './log-in.css'

const LogIn = (props) => {
  return (
    <div className="log-in-container">
      <Helmet>
        <title>LogIn - Loyal Cooked Shark</title>
        <meta property="og:title" content="LogIn - Loyal Cooked Shark" />
      </Helmet>
      <div className="log-in-hero">
        <div className="log-in-hero1">
          <div className="log-in-container1">
            <h1 className="log-in-hero-heading heading1">Clear Mind</h1>
            <div className="log-in-container2">
              <RegisterForm rootClassName="register-form-root-class-name"></RegisterForm>
            </div>
            <div className="log-in-btn-group">
              <button className="log-in-home-button button">Log In</button>
              <button className="log-in-hero-button2 button">Register →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
