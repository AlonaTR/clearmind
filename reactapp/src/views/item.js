import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import './item.css'
import NavBar from '../components/nav-bar'


const Item = (props) => {
  const history = useHistory();
  const { itemid } = useParams(); // Retrieve the itemid from the URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = localStorage.getItem('user');


  const getCurrentDate=() => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1; // Month is zero-based
    let day = today.getDate();

    // Pad month and day with leading zeros if needed
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    console.log(`${year}-${month}-${day}`)
    return `${year}-${month}-${day}`;
  };

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

    // Function to handle recording user activity
    const recordUserActivity = async () => {
      try {
        await axios.post('/api/record-activity/', {
          user: user,
          type: item.type,
          date: getCurrentDate()
        });
      } catch (error) {
        console.error('Error recording user activity:', error);
      }
      
    };

    // Function to check if the video has been watched halfway
    const handleTimeUpdate = (event) => {
      const videoElement = event.target;
      const halfWay = videoElement.duration / 2;
      console.log(videoElement.currentTime, halfWay)
      if (videoElement.currentTime >= halfWay ) {
        console.log('POST')
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
        recordUserActivity(); // Call the function to record user activity
      }
    };

    // Add event listener to the video element
    const videoElement = document.querySelector('.item-video');
    if (videoElement) {
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };

  }, [itemid, item]);


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
        <NavBar rootClassName="nav-bar-root-class-name"></NavBar>
        <div className="item-hero1">
          <div className="item-container1">
            <h1 className="item-hero-heading heading1">Clear Mind</h1>
            <span className="item-hero-sub-heading">
              Discover the Power of Meditation
            </span>
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
