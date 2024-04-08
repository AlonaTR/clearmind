
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import ImageText from '../components/image-text'
import './allitems.css'

const Allitems = (props) => {
  const history = useHistory(); 
  const [meditations, setMeditations] = useState([]);
  const [affirmations, setAffirmations] = useState([]);
  const [breathingExercises, setBreathingExercises] = useState([]);


  const handleHome = () => {
    history.push('/home'); 
  };

  useEffect(() => {
    const fetchMeditations = async () => {
      try {
        const response = await axios.get(`/api/meditation`);
        setMeditations(response.data);
      } catch (error) {
        console.error('Error fetching meditations:', error);
      }
    };

    const fetchAffirmations = async () => {
      try {
        const response = await axios.get(`/api/affirmation`);
        setAffirmations(response.data);
      } catch (error) {
        console.error('Error fetching affirmations:', error);
      }
    };

    const fetchBreathingExercises = async () => {
      try {
        const response = await axios.get(`/api/breathing`); 
        setBreathingExercises(response.data);
      } catch (error) {
        console.error('Error fetching breathing exercises:', error);
      }
    };

    fetchMeditations();
    fetchAffirmations();
    fetchBreathingExercises();
  }, []);

  return (
    <div className="allitems-container">
      <Helmet>
        <title>Clear mind</title>
        <meta property="og:title" content="Clear mind" />
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
              {meditations.map(item => (
                <ImageText
                  key={item.id}
                  imageSrc1={item.image}
                  heading={item.name}
                  rootClassName={`image-text-root-class-name${item.id}`}
                />
              ))}
            </div>
          </div>
          <div className="allitems-affirmations">
            <h2 className="allitems-details-heading1 heading2">
              <span className="allitems-text2">Afirmations</span>
              <br></br>
            </h2>
            <div className="allitems-container3">
              {affirmations.map(item => (
                <ImageText
                  key={item.id}
                  imageSrc1={item.image}
                  heading={item.name}
                  rootClassName={`image-text-root-class-name${item.id}`}
                />
              ))}
            </div>
          </div>
          <div className="allitems-breathing-exercises">
            <h2 className="allitems-details-heading2 heading2">
              <span className="allitems-text4">Breathing Exercises</span>
              <br></br>
            </h2>
            <div className="allitems-container4">
              {breathingExercises.map(item => (
                <ImageText
                  key={item.id}
                  imageSrc1={item.image}
                  heading={item.name}
                  rootClassName={`image-text-root-class-name${item.id}`}
                />
              ))}
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
