import React from 'react'

import { Helmet } from 'react-helmet'

import TestQuestion from '../components/test-question'
import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <Helmet>
        <title>Test - Loyal Cooked Shark</title>
        <meta property="og:title" content="Test - Loyal Cooked Shark" />
      </Helmet>
      <div className="test-hero">
        <button className="test-hero-button1 button">Log in</button>
        <div className="test-hero1">
          <div className="test-container1">
            <h1 className="test-hero-heading heading1">Clear Mind</h1>
            <span className="test-hero-sub-heading">
              Discover the Power of Meditation
            </span>
            <div className="test-btn-group">
              <button className="test-home-button button">Home</button>
            </div>
          </div>
        </div>
      </div>
      <div className="test-faq">
        <div className="test-faq-container">
          <div className="test-faq1">
            <div className="test-heading">
              <h2 className="test-text heading2">Test</h2>
              <span className="test-text01">
                <span>
                  It test can help you find out what you need at this moment.
                  You need to answer a few questions 
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="test-test">
              <TestQuestion rootClassName="test-question-root-class-name"></TestQuestion>
              <div className="test-buttons">
                <button className="test-back-button button">&lt;-- Back</button>
                <button className="test-next-button button">Next --&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="test-footer">
        <div className="test-container2"></div>
      </div>
    </div>
  )
}

export default Test
