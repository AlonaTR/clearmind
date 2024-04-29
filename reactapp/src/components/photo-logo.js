import React from 'react'

import PropTypes from 'prop-types'

import './photo-logo.css'

const PhotoLogo = (props) => {
  return (
    <div className={`photo-logo-container ${props.rootClassName} `}>
      {/* <img
        alt={props.detailsImageAlt}
        src={props.detailsImageSrc}
        className="photo-logo-details-image"
      /> */}
      <button className="photo-logo-hero-button2 button">
        {props.heroButton2}
      </button>
    </div>
  )
}

PhotoLogo.defaultProps = {
  rootClassName: '',
  detailsImageSrc:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHBlcnNvbiUyMHxlbnwwfHx8fDE3MDM4NDIzMDd8MA&ixlib=rb-4.0.3&w=200',
  detailsImageAlt: 'image',
  heroButton2: 'Log out',
}

PhotoLogo.propTypes = {
  rootClassName: PropTypes.string,
  detailsImageSrc: PropTypes.string,
  detailsImageAlt: PropTypes.string,
  heroButton2: PropTypes.string,
}

export default PhotoLogo
