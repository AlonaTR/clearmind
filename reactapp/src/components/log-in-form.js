import React from 'react'

import PropTypes from 'prop-types'

import './log-in-form.css'

const LogInForm = (props) => {
  return (
    <div className={`log-in-form-container ${props.rootClassName} `}>
      <span className="log-in-form-text-email">{props.heroSubHeading}</span>
      <input
        type="text"
        placeholder="Email"
        className="log-in-form-input-email input"
      />
      <span className="log-in-form-text-password">{props.heroSubHeading1}</span>
      <input
        type="text"
        placeholder="Password"
        className="log-in-form-input-password input"
      />
      <span className="log-in-form-hero-sub-heading">
        {props.heroSubHeading2}
      </span>
    </div>
  )
}

LogInForm.defaultProps = {
  textinputPlaceholder1: 'placeholder',
  heroButton2: 'Learn More →',
  heroSubHeading: 'Input Email',
  heroSubHeading2: 'Wrong email or password',
  heroSubHeading1: 'Input Password',
  textinputPlaceholder: 'placeholder',
  rootClassName: '',
}

LogInForm.propTypes = {
  textinputPlaceholder1: PropTypes.string,
  heroButton2: PropTypes.string,
  heroSubHeading: PropTypes.string,
  heroSubHeading2: PropTypes.string,
  heroSubHeading1: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default LogInForm
