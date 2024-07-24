import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup'
import Home from './pages/Home';
import NavBar from './Components/NavBar';
import { LoginProvider } from './Components/LoginContext';

const App = () => {
  return (
    <LoginProvider>
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </LoginProvider>
  );
};

export default App;
