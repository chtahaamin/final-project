import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import MagicQuote from '../Components/MagicQuote';
import UserQuote from '../Components/UserQuote';
import NavBar from '../Components/NavBar';
import { LoginContext } from '../Components/LoginContext'
import './Home.css';

const Home = () => {

  const { loggedIn, logout } = useContext(LoginContext);

  const handleLogout = () => {

    logout();

  };

  return (
    <div className=" container  home-container">
      {!loggedIn && <NavBar />}
      <h1 className="home-container-h1 ">Welcome to Quote Generator. Please press Generate quote button to get quote</h1>
      <MagicQuote />
      {loggedIn && <UserQuote />}
      {loggedIn ? (<button onClick={handleLogout} className="logout-btn">Log Out</button>) : <div className="container signin-div">please login to view save quotations</div>}

    </div>
  );
};

export default Home;
