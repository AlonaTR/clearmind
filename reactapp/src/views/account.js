import React from 'react'

import { Helmet } from 'react-helmet'

import InfoAccount from '../components/info-account'
import './account.css'

const Account = (props) => {
  return (
    <div className="account-container">
      <Helmet>
        <title>Account - Loyal Cooked Shark</title>
        <meta property="og:title" content="Account - Loyal Cooked Shark" />
      </Helmet>
      <div className="account-hero">
        <div className="account-hero1">
          <div className="account-container1">
            <h1 className="account-hero-heading heading1">Clear Mind</h1>
            <div className="account-container2">
              <InfoAccount rootClassName="info-account-root-class-name"></InfoAccount>
            </div>
            <div className="account-btn-group">
              <button className="account-log-out-button button">Log Out</button>
              <button className="account-edit-button button">Edit→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
