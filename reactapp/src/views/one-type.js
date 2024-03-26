import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'

import ImageText from '../components/image-text'
import './one-type.css'

const OneType = ({ match}) => {
  const { typename } = match.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Використовуємо шлях до нашого API
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="one-type-container">
      <Helmet>

        <title>OneType - Loyal Cooked Shark</title>
        <meta property="og:title" content="OneType - Loyal Cooked Shark" />
      </Helmet>
      <div className="one-type-hero">
        <button className="one-type-hero-button1 button">Log in</button>
        <div className="one-type-hero1">
          <div className="one-type-container1">
            <h1 className="one-type-hero-heading heading1">Clear Mind</h1>
            <span className="one-type-hero-sub-heading">
              Discover the Power of Meditation
            </span>
            <div className="one-type-btn-group">
              <button className="one-type-home-button button">Home</button>
            </div>
          </div>
        </div>
      </div>
      <div className="one-type-details">
        <div className="one-type-details1">
          <div className="one-type-meditations">
            <h2 className="one-type-details-heading heading2">
              <span className="one-type-text">{typename}</span>
              <br></br>
            </h2>
            <div className="one-type-container2">
              <ImageText
                imageSrc="https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1400"
                imageSrc1="https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name32"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1508583732154-e9ff899f8534?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name33"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name34"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name35"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name36"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name37"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1489659639091-8b687bc4386e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name38"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name39"
              ></ImageText>
            </div>
          </div>
        </div>
      </div>
      <div className="one-type-footer">
        <div className="one-type-container3"></div>
      </div>
    </div>
  )
}

export default OneType
