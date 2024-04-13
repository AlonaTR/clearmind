import React, { useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import InfoAccount from '../components/info-account'
import './account.css'

const Account = (props) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    console.log('User data from localStorage:', user); // Log the raw user data from localStorage

    if (user) {
      const parsedUser = JSON.parse(user);
      setUserData(parsedUser);
      console.log('User data:', parsedUser); // Debugging statement
    }
  }, []);
  

  // Function to handle user logout
  const handleLogout = () => {
    // Clear user data from localStorage and state
    localStorage.removeItem('user');
    setUserData(null);
    // Redirect to login page or home page
    props.history.push('/log-in');
  };

  return (
    <div className="account-container">
      <Helmet>
        <title>Account - Clear Mind</title>
        <meta property="og:title" content="Account - Clear Mind" />
      </Helmet>
      <div className="account-hero">
        <div className="account-hero1">
          <div className="account-container1">
            <h1 className="account-hero-heading heading1">Clear Mind</h1>
            <div className="account-container2">
              {userData ? ( // Check if userData is not null
                <InfoAccount 
                  username={userData.username}
                  email={userData.email}
                />
              ) : (
                <p>Loading user data...</p> // Display a loading message or spinner
              )}
            </div>
            <div className="account-btn-group">
              <button className="account-log-out-button button" onClick={handleLogout}>Log Out</button>
              <button className="account-edit-button button">Edit→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
