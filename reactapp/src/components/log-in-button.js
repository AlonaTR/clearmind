import React from 'react'

import PropTypes from 'prop-types'

import './log-in-button.css'

const LogInButton = (props) => {
  return (
    <div className={`log-in-button-container ${props.rootClassName} `}>
      <button className="log-in-button-hero-button1 button">
        {props.heroButton1}
      </button>
    </div>
  )
}

LogInButton.defaultProps = {
  heroButton1: 'Log in',
  rootClassName: '',
}

LogInButton.propTypes = {
  heroButton1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default LogInButton
