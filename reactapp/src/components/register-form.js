import React from 'react'

import PropTypes from 'prop-types'

import './register-form.css'

const RegisterForm = (props) => {
  return (
    <div className={`register-form-container ${props.rootClassName} `}>
      <img
        alt={props.detailsImageAlt}
        src={props.detailsImageSrc}
        className="register-form-details-image"
      />
      <span className="register-form-text-name">{props.heroSubHeading31}</span>
      <input
        type="text"
        placeholder="Name"
        className="register-form-input-name input"
      />
      <span className="register-form-error-name">{props.heroSubHeading24}</span>
      <span className="register-form-text-surname">
        {props.heroSubHeading3}
      </span>
      <input
        type="text"
        placeholder="Surname"
        className="register-form-input-surname input"
      />
      <span className="register-form-error-surname">
        {props.heroSubHeading23}
      </span>
      <span className="register-form-text-email">{props.heroSubHeading}</span>
      <input
        type="text"
        placeholder="Email"
        className="register-form-input-email input"
      />
      <span className="register-form-error-email">
        {props.heroSubHeading22}
      </span>
      <span className="register-form-text-password">
        {props.heroSubHeading11}
      </span>
      <input
        type="text"
        placeholder="Password"
        className="register-form-input-password input"
      />
      <span className="register-form-error-password">
        {props.heroSubHeading21}
      </span>
      <span className="register-form-text-password2">
        {props.heroSubHeading1}
      </span>
      <input
        type="text"
        placeholder="Password"
        className="register-form-input-password2 input"
      />
      <span className="register-form-error-password2">
        {props.heroSubHeading2}
      </span>
    </div>
  )
}

RegisterForm.defaultProps = {
  heroSubHeading22: 'Wrong email',
  heroSubHeading24: 'You should type your name',
  heroSubHeading21: 'Your password should have min 6 symbols',
  heroSubHeading11: 'Type your Password',
  detailsImageSrc:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHBlcnNvbiUyMHxlbnwwfHx8fDE3MDM4NDIzMDd8MA&ixlib=rb-4.0.3&w=200',
  heroSubHeading31: 'Type your Name',
  heroSubHeading: 'Type your Email',
  heroSubHeading3: 'Type your Surname',
  heroSubHeading1: 'Repeat your Password',
  detailsImageAlt: 'image',
  rootClassName: '',
  heroSubHeading23: 'You should type your surname',
  heroSubHeading2: 'Wrong password',
}

RegisterForm.propTypes = {
  heroSubHeading22: PropTypes.string,
  heroSubHeading24: PropTypes.string,
  heroSubHeading21: PropTypes.string,
  heroSubHeading11: PropTypes.string,
  detailsImageSrc: PropTypes.string,
  heroSubHeading31: PropTypes.string,
  heroSubHeading: PropTypes.string,
  heroSubHeading3: PropTypes.string,
  heroSubHeading1: PropTypes.string,
  detailsImageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  heroSubHeading23: PropTypes.string,
  heroSubHeading2: PropTypes.string,
}

export default RegisterForm
