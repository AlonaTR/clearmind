import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import './item.css'

const Item = (props) => {
  const history = useHistory();
  const { itemid } = useParams(); // Retrieve the itemid from the URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await axios.get(`/api/items/${itemid}/`); // Make sure to add the trailing slash
        setItem(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching item data:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchItemData();
  }, [itemid]);


  const handleHome = () => {
    history.push('/home'); 
  };

  const handleAllItems = () => {
    history.push('/allitems'); 
  };

  return (
    <div className="item-container">
      <Helmet>
        <title>Clear Mind</title>
        <meta property="og:title" content="Clear Mind" />
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
              <button className="item-home-button button" onClick={handleHome}>Home</button>
              <button className="item-hero-button2 button" onClick={handleAllItems}>
                More Exercises→
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="item-details">
        {loading ? (
          <div>Loading...</div> 
        ) : (
          item && ( 
            <div className="item-details1">
              <div className="item-container2">
                <span className="item-text sectionTitle">
                <span>It`s time for yourself</span>
                <br></br>
                </span>
                <h2 className="item-details-heading heading2">{item.name}</h2>
                <span className="item-details-sub-heading">
                  Relax, feel your body and enjoy the process
                </span>
              </div>
              <video 
                controls 
                src={item.video}
                //poster={item.image}
                className="item-video"
              ></video>
            </div>
          )
        )}
      </div>
      <div className="item-footer">
        <div className="item-container3"></div>
      </div>
    </div>
  )
}

export default Item
