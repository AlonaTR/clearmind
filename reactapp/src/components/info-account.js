import React from 'react'

import PropTypes from 'prop-types'

import './info-account.css'

const InfoAccount = (props) => {
  return (
    <div className={`info-account-container ${props.rootClassName} `}>
      <img
        alt={props.detailsImageAlt}
        src={props.detailsImageSrc}
        className="info-account-details-image"
      />
      <span className="info-account-text-name">{props.heroSubHeading31}</span>
      <span className="info-account-text-name1">{props.heroSubHeading311}</span>
      <span className="info-account-text-surname">{props.heroSubHeading3}</span>
      <span className="info-account-text-surname1">
        {props.heroSubHeading32}
      </span>
      <span className="info-account-text-email">{props.heroSubHeading}</span>
      <span className="info-account-text-email1">{props.heroSubHeading4}</span>
    </div>
  )
}

InfoAccount.defaultProps = {
  heroSubHeading21: 'Your password should have min 6 symbols',
  heroSubHeading11: 'Type your Password',
  heroSubHeading4: 'Email',
  heroSubHeading31: 'Name',
  detailsImageAlt: 'image',
  heroSubHeading3: 'Surname',
  heroSubHeading24: 'You should type your name',
  detailsImageSrc:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHBlcnNvbiUyMHxlbnwwfHx8fDE3MDM4NDIzMDd8MA&ixlib=rb-4.0.3&w=200',
  heroSubHeading: 'Email',
  heroSubHeading1: 'Repeat your Password',
  heroSubHeading2: 'Wrong password',
  rootClassName: '',
  heroSubHeading23: 'You should type your surname',
  heroSubHeading22: 'Wrong email',
  heroSubHeading32: 'Surname',
  heroSubHeading311: 'Name',
}

InfoAccount.propTypes = {
  heroSubHeading21: PropTypes.string,
  heroSubHeading11: PropTypes.string,
  heroSubHeading4: PropTypes.string,
  heroSubHeading31: PropTypes.string,
  detailsImageAlt: PropTypes.string,
  heroSubHeading3: PropTypes.string,
  heroSubHeading24: PropTypes.string,
  detailsImageSrc: PropTypes.string,
  heroSubHeading: PropTypes.string,
  heroSubHeading1: PropTypes.string,
  heroSubHeading2: PropTypes.string,
  rootClassName: PropTypes.string,
  heroSubHeading23: PropTypes.string,
  heroSubHeading22: PropTypes.string,
  heroSubHeading32: PropTypes.string,
  heroSubHeading311: PropTypes.string,
}

export default InfoAccount
