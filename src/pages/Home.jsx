import React from 'react';
import { useNavigate } from 'react-router-dom';
import MagicQuote from '../Components/MagicQuote';
import UserQuote from '../Components/UserQuote';
import NavBar from '../Components/NavBar'
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('authToken'); 
  
    navigate('/login');
  };

  return (
    <div className="container home-container">
      <NavBar/>
      <h1>Welcome to Quote Generator. Please press Generate quote button to get quote</h1>
      <MagicQuote />
      <UserQuote />
      <button onClick={handleLogout} className="logout-btn">Log Out</button>
    </div>
  );
};

export default Home;
