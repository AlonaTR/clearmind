import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import PhotoLogo from '../components/photo-logo'
import FeatureCard from '../components/feature-card'
import GalleryCard11 from '../components/gallery-card11'
import Question from '../components/question'
import './home.css'

const Home = (props) => {
  const history = useHistory(); // Створіть об'єкт history

  const handleGetStarted = () => {
    history.push('/allitems'); // Перейдіть на URL /allitems при кліку на кнопку "Get Started"
  };
  const meditation_url = '/onetype/meditation';
  const affirmation_url = '/onetype/affirmation';
  const breathing_url = '/onetype/breathing';

  return (
    <div className="home-container">
      <Helmet>
        <title>Loyal Cooked Shark</title>
        <meta property="og:title" content="Loyal Cooked Shark" />
      </Helmet>
      <div className="home-hero">
        <PhotoLogo rootClassName="photo-logo-root-class-name"></PhotoLogo>
        <div className="home-hero1">
          <div className="home-container1">
            <h1 className="home-hero-heading heading1">Clear Mind</h1>
            <span className="home-hero-sub-heading">
              Discover the Power of Meditation
            </span>
            <div className="home-btn-group">
              <button className="home-hero-button1 button" onClick={handleGetStarted} >Get Started</button>
              <button className="home-hero-button2 button">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container2">
            <span className="home-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Why You Need to Try Meditation
            </h2>
            <span className="home-details-sub-heading">
              Experience Inner Peace and Transform Your Life
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1572088229035-555d02d90357?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMzQ0MzcwOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container3">
              <span className="home-text03 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Discover the Power of Meditation
              </h2>
              <span className="home-features-sub-heading">
                Unlock inner peace, clarity, and self-discovery through our
                website&apos;s features
              </span>
            </div>
            <div className="home-container4">
              <a href={meditation_url} className="feature-link">
                <FeatureCard
                  heading="Meditations"
                  subHeading="Get a unique and visually appealing website design tailored specifically for meditation, affirmations, and breathwork."
                  rootClassName="feature-card-root-class-name"
                />
              </a>
              <a href={affirmation_url} className="feature-link">
              <FeatureCard  
                heading="Affirmations"
                subHeading="Take our interactive test to discover the perfect meditation practice for your needs and preferences."
              />
              </a>
              <a href={breathing_url} className="feature-link">
              <FeatureCard
                heading="Breathing exercises"
                subHeading="Explore a curated collection of popular meditations that have helped thousands of people find peace and clarity."
              />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Explore the World of Meditation
          </h1>
          <span className="home-banner-sub-heading">
            Find the Perfect Meditation Practice for You
          </span>
          <button className="home-banner-button button">Take the Test</button>
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">
            Explore Our Most Popular Meditations
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <span className="home-gallery-sub-heading">
            There are our most popular meditations:
          </span>
          <div className="home-gallery2">
            <GalleryCard11 rootClassName="rootClassName"></GalleryCard11>
            <GalleryCard11
              imageSrc="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
              rootClassName="rootClassName1"
            ></GalleryCard11>
            <GalleryCard11
              imageSrc="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
              rootClassName="rootClassName2"
            ></GalleryCard11>
            <GalleryCard11
              imageSrc="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1000"
              rootClassName="rootClassName3"
            ></GalleryCard11>
            <GalleryCard11
              imageSrc="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
              rootClassName="rootClassName4"
            ></GalleryCard11>
            <GalleryCard11
              imageSrc="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1000"
              rootClassName="rootClassName5"
            ></GalleryCard11>
          </div>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container5">
              <span className="home-text06 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text09 heading2">Common questions</h2>
              <span className="home-text10">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
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
                  <span>
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
                </span>
                <span>
                  <span>
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
                  <span>
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
                </span>
              </span>
            </div>
            <div className="home-container6">
              <Question
                answer="Meditation is a practice where an individual uses a technique – such as mindfulness, breathing, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state."
                question="What is meditation?"
              ></Question>
              <Question
                answer="Meditation has numerous benefits including reducing stress, improving focus and concentration, promoting emotional well-being, enhancing self-awareness, and fostering a sense of inner peace and tranquility."
                question="How can meditation benefit me?"
              ></Question>
              <Question
                answer="Yes, meditation is suitable for people of all ages and backgrounds. It can be practiced by anyone who is willing to dedicate some time to quieting the mind and exploring their inner self."
                question="Is meditation suitable for everyone?"
              ></Question>
              <Question
                answer="The duration of meditation can vary depending on personal preference and availability. It is recommended to start with shorter sessions of 5-10 minutes and gradually increase the duration as you become more comfortable."
                question="How long should I meditate for?"
              ></Question>
              <Question
                answer="Absolutely! Meditation is a practice that can be learned by anyone, regardless of prior experience. There are various guided meditations available that can help beginners get started."
                question="Can I meditate even if I have never tried it before?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="home-container7"></div>
      </div>
    </div>
  )
}

export default Home
