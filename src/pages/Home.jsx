import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import MagicQuote from '../Components/MagicQuote';
import UserQuote from '../Components/UserQuote';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('authToken'); 
  
    navigate('/login');
  };

  return (
    <div className="container home-container">
      <h1>Welcome to the Home Page</h1>
      <MagicQuote />
      <UserQuote />
      <button onClick={handleLogout} className="logout-btn">Log Out</button>
    </div>
  );
};

export default Home;
