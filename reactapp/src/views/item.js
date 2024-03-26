import React from 'react'

import { Helmet } from 'react-helmet'

import './item.css'

const Item = (props) => {
  return (
    <div className="item-container">
      <Helmet>
        <title>Item - Loyal Cooked Shark</title>
        <meta property="og:title" content="Item - Loyal Cooked Shark" />
      </Helmet>
      <div className="item-hero">
        <button className="item-hero-button1 button">Log in</button>
        <div className="item-hero1">
          <div className="item-container1">
            <h1 className="item-hero-heading heading1">Clear Mind</h1>
            <span className="item-hero-sub-heading">
              Discover the Power of Meditation
            </span>
            <div className="item-btn-group">
              <button className="item-home-button button">Home</button>
              <button className="item-hero-button2 button">
                More Exercises→
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="item-details">
        <div className="item-details1">
          <div className="item-container2">
            <span className="item-text sectionTitle">
              <span>It`s time for yourself</span>
              <br></br>
            </span>
            <h2 className="item-details-heading heading2">Meditation name</h2>
            <span className="item-details-sub-heading">
              Relax, feel your body and enjoy the process
            </span>
          </div>
          <video
            src
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            className="item-video"
          ></video>
        </div>
      </div>
      <div className="item-footer">
        <div className="item-container3"></div>
      </div>
    </div>
  )
}

export default Item
