import React from 'react'

import PropTypes from 'prop-types'

import './main-image-text.css'

const MainImageText = (props) => {
  return (
    <div className={`main-image-text-feature-card ${props.rootClassName} `}>
      <div className="main-image-text-container">
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="main-image-text-image"
        />
        <h1 className="main-image-text-text heading1">
          <span className="main-image-text-text1">Clear Mind</span>
          <br className=""></br>
        </h1>
      </div>
    </div>
  )
}

MainImageText.defaultProps = {
  subHeading: 'Discover the Power of Meditation',
  imageAlt1: 'image',
  heading: 'Discover the Power of Meditation',
  rootClassName: '',
  imageSrc1:
    'https://images.unsplash.com/photo-1703210466517-dcfbbdb157a7?ixid=M3w5MTMyMXwwfDF8YWxsfDl8fHx8fHwyfHwxNzAzNDUyMTgxfA&ixlib=rb-4.0.3&w=1500',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1530886416038-801980e64d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjbGVhciUyMG1pbmR8ZW58MHx8fHwxNzAzNDQ3Mzk1fDA&ixlib=rb-4.0.3&q=80&w=1500',
  imageAlt2: 'image',
  imageSrc2:
    'https://images.unsplash.com/photo-1703210466517-dcfbbdb157a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8YWxsfDl8fHx8fHwyfHwxNzAzNDUyMTgxfA&ixlib=rb-4.0.3&q=80&w=200',
}

MainImageText.propTypes = {
  subHeading: PropTypes.string,
  imageAlt1: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc2: PropTypes.string,
}

export default MainImageText
