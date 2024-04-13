import React, { useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'
import InfoAccount from '../components/info-account'
import RegisterForm from '../components/register-form'
import LogInForm from '../components/log-in-form'
import './log-in.css'

const LogIn = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  const [showRegisterForm, setShowRegisterForm] = useState(false);

   // Add state to handle form inputs and errors
   const [registerInfo, setRegisterInfo] = useState({
    username: '',
    password1: '',
    password2: '',
    email: '',
  });
  const [registerError, setRegisterError] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  };

  


  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user')
    if (user) {
      setIsLoggedIn(true)
      setUserData(JSON.parse(user))
    }
  }, [])

 
  const handleLogin = async (userInfo) => {
    console.log('handleLogin called with:', userInfo);
    try {
      const response = await fetch('/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userInfo.username,
          password: userInfo.password,
        }),
      });
      const data = await response.json();
      console.log('Login response:', data); 
      if (response.ok && data.status === 'success' && data.user) {
        localStorage.setItem('user', JSON.stringify(data.user)); // Store user data in localStorage
        setIsLoggedIn(true);
        setUserData(data.user);
        console.log('Redirecting to account page');
        props.history.push('/account'); // Redirect to account page
      } else {
        // Handle login error (e.g., display a message to the user)
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Perform input validation if necessary
  
    try {
      const response = await fetch('/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: registerInfo.username,
          email: registerInfo.email,
          password1: registerInfo.password1,
          password2: registerInfo.password2,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok && data.status === 'success') {
        localStorage.setItem('user', JSON.stringify(data.user)); // Store user data in localStorage
        setIsLoggedIn(true);
        setUserData(data.user);
        props.history.push('/account'); // Redirect to the account page
      } else {
        // Registration failed, handle errors
        setRegisterError(data.errors || 'Registration failed');
      }
    } catch (error) {
      // Handle network errors or other unexpected errors
      setRegisterError('Network error or other unexpected error');
    }
  };
  


  const handleLogout = () => {
    // Clear user from local storage or manage session
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    setUserData(null)
  }
  return (
    <div className="log-in-container">
      <Helmet>
        <title>LogIn - Clear Mind</title>
        <meta property="og:title" content="LogIn - Clear Mind" />
      </Helmet>
      <div className="log-in-hero">
        <div className="log-in-hero1">
          <div className="log-in-container1">
            <h1 className="log-in-hero-heading heading1">Clear Mind</h1>
            <div className="log-in-container2">
            {isLoggedIn && userData ? (
              <InfoAccount
                // Pass the necessary props to InfoAccount component
                username={userData.username}
                email={userData.email}
                // ...other props
              />
            ) : showRegisterForm ? (
              <RegisterForm
                onRegister={handleRegister}
                onInputChange={handleInputChange}
                registerError={registerError}
              />
            ) : (
              <LogInForm
              rootClassName="log-in-form-root-class-name"
              onLogin={handleLogin} 
              />
            )}
            </div>
            <div className="log-in-btn-group">
              <button
                className="log-in-home-button button"
                onClick={() => setShowRegisterForm(false)}>
                Log In
              </button>
              <button
                className="log-in-hero-button2 button"
                onClick={() => setShowRegisterForm(true)}>
                Register →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
