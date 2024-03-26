import React from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import ImageText from '../components/image-text'
import './allitems.css'

const Allitems = (props) => {
  const history = useHistory(); // Створіть об'єкт history

  const handleHome = () => {
    history.push('/'); // Перейдіть на URL /allitems при кліку на кнопку "Get Started"
  };
  return (
    <div className="allitems-container">
      <Helmet>
        <title>Allitems - Loyal Cooked Shark</title>
        <meta property="og:title" content="Allitems - Loyal Cooked Shark" />
      </Helmet>
      <div className="allitems-hero">
        <button className="allitems-hero-button1 button">Log in</button>
        <div className="allitems-hero1">
          <div className="allitems-container1">
            <h1 className="allitems-hero-heading heading1">Clear Mind</h1>
            <span className="allitems-hero-sub-heading">
              Discover the Power of Meditation
            </span>
            <div className="allitems-btn-group">
              <button className="allitems-home-button button" onClick={handleHome} >Home</button>
            </div>
          </div>
        </div>
      </div>
      <div className="allitems-details">
        <div className="allitems-details1">
          <div className="allitems-meditations">
            <h2 className="allitems-details-heading heading2">
              <span className="allitems-text">Meditations</span>
              <br></br>
            </h2>
            <div className="allitems-container2">
              <ImageText
                imageSrc="https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1400"
                imageSrc1="https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name8"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1508583732154-e9ff899f8534?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name9"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name10"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name11"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name12"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name13"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1489659639091-8b687bc4386e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name14"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name15"
              ></ImageText>
            </div>
          </div>
          <div className="allitems-affirmations">
            <h2 className="allitems-details-heading1 heading2">
              <span className="allitems-text2">Afirmations</span>
              <br></br>
            </h2>
            <div className="allitems-container3">
              <ImageText
                imageSrc="https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1400"
                imageSrc1="https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name16"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1508583732154-e9ff899f8534?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name17"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name18"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name19"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name20"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name21"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1489659639091-8b687bc4386e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name22"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name23"
              ></ImageText>
            </div>
          </div>
          <div className="allitems-breathing-exercises">
            <h2 className="allitems-details-heading2 heading2">
              <span className="allitems-text4">Breathing Exercises</span>
              <br></br>
            </h2>
            <div className="allitems-container4">
              <ImageText
                imageSrc="https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1400"
                imageSrc1="https://images.unsplash.com/photo-1592895792095-85fa785192a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name24"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1508583732154-e9ff899f8534?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name25"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name26"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name27"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name28"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fG1lZGl0YXRpb258ZW58MHx8fHwxNzAzNDQ4NTEyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name29"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1489659639091-8b687bc4386e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name30"
              ></ImageText>
              <ImageText
                imageSrc1="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxtZWRpdGF0aW9ufGVufDB8fHx8MTcwMzQ0ODUxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="image-text-root-class-name31"
              ></ImageText>
            </div>
          </div>
        </div>
      </div>
      <div className="allitems-footer">
        <div className="allitems-container5"></div>
      </div>
    </div>
  )
}

export default Allitems
