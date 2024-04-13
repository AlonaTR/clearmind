import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './log-in-button.css'


const LogInButton = (props) => {
  
  const history = useHistory(); 
  const handleLogIn = () => {
    history.push('/log-in'); 
  };
  return (
    <div className={`log-in-button-container ${props.rootClassName} `}>
      <button className="log-in-button-hero-button1 button" onClick={handleLogIn}> 
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
